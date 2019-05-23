#!/usr/bin/env node
/**
 * @fileoverview Tool for converting binary CD dumps to ISOs
 * @author <a href="mailto:Jeff@pcjs.org">Jeff Parsons</a>
 * @copyright © 2012-2019 Jeff Parsons
 * @suppress {missingProperties}
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 *
 * PCjs is free software: you can redistribute it and/or modify it under the terms of the
 * GNU General Public License as published by the Free Software Foundation, either version 3
 * of the License, or (at your option) any later version.
 *
 * PCjs is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with PCjs.  If not,
 * see <http://www.gnu.org/licenses/gpl.html>.
 *
 * You are required to include the above copyright notice in every modified copy of this work
 * and to display that copyright notice when the software starts running; see COPYRIGHT in
 * <https://www.pcjs.org/modules/shared/lib/defines.js>.
 *
 * Some PCjs files also attempt to load external resource files, such as character-image files,
 * ROM files, and disk image files. Those external resource files are not considered part of PCjs
 * for purposes of the GNU General Public License, and the author does not claim any copyright
 * as to their contents.
 */

"use strict";

var fs = require("fs");
var Defines = require("../lib/defines");
var Str = require("../lib/strlib");
var Proc = require("../lib/proclib");
var args = Proc.getArgs();

/**
 * printf(format, ...args)
 *
 * @param {string} format
 * @param {...} args
 */
function printf(format, ...args)
{
    process.stdout.write(Str.sprintf(format, ...args));
}

/**
 * dumpBytes(buffer, offset, length)
 *
 * @param {Buffer} buffer
 * @param {number} offset
 * @param {number} length
 */
function dumpBytes(buffer, offset, length)
{
    let line = "", off = offset;
    while (length-- > 0) {
        line += Str.sprintf("%02x ", buffer[off++]);
    }
    printf("%08x: %s\n", offset, line);
}

/**
 * convertBinToISO(sInput, sOutput, fDebug, fOverwrite)
 *
 * We assume that the ".bin" file is a CD-ROM dump consisting of 2352-byte sectors.  Such a
 * dump can be produced by the macOS `dd` utility, using the physical CD-ROM device; eg:
 *
 *      dd if=/dev/disk6 of=disk.bin
 *
 * To produce an ".iso" file with 2048-byte sectors, we must eliminate the extra “junk” (eg, sync
 * and address bits, headers, error correction, etc) from each sector in the ".bin" file.
 *
 * We do this by extracting each 2352-byte sector from bufferBin, discarding the first 16 and the
 * last 288 bytes, and writing a 2048-byte sector out.
 *
 * It probably goes without saying that if the ".bin" file is from anything other than a simple data
 * CD-ROM with a single track of data, the resulting ".iso" will likely be unusable.  One warning
 * sign that something is amiss is if the ".bin" file doesn't contain a perfect multiple of 2352-byte
 * sectors.
 *
 * Note that you can *usually* create an ".iso" in a single step (without running this script) by
 * simply dumping the logical device that macOS automatically creates:
 *
 *      dd if=/dev/disk6s0 of=disk.iso
 *
 * but if macOS isn't able to mount the disc, then that logical device won't exist, so you'll have
 * to create a ".bin" instead and use this conversion script.
 *
 * Thanks to @mnecasek of the OS/2 Museum for his explanation of the required conversion process.
 *
 * @param {string} sInput
 * @param {string} sOutput
 * @param {boolean} [fDebug]
 * @param {boolean} [fOverwrite]
 */
function convertBinToISO(sInput, sOutput, fDebug, fOverwrite)
{
    let bufferBin, streamISO;
    try {
        printf("Reading '%s'...\n", sInput);
        bufferBin = fs.readFileSync(sInput);
    } catch(err) {
        printf("error: unable to open '%s' (%s)\n", sInput, err.message);
        process.exit(1);
    }
    let nSectors = bufferBin.length / 2352;
    printf("%d bytes (%f sectors) read\n", bufferBin.length, nSectors);
    if (nSectors != (nSectors|0)) {
        printf("warning: fractional sector, possible image error\n");
        // process.exit(1);
    }
    if (!fOverwrite && fs.existsSync(sOutput)) {
        printf("warning: output file '%s' aready exists; use --overwrite\n", sOutput);
        process.exit(1);
    }
    try {
        streamISO = fs.createWriteStream(sOutput);
    } catch(err) {
        printf("error: unable to create '%s' (%s)\n", sOutput, err.message);
        process.exit(1);
    }
    let cbSector = 2048, cbTotal = 0;
    for (let iSector = 0; iSector < nSectors; iSector++) {
        let iBuffer = iSector * 2352;
        let bufferSector = Buffer.alloc(cbSector);
        dumpBytes(bufferBin, iBuffer, 16);
        iBuffer += 16;
        bufferBin.copy(bufferSector, 0, iBuffer, iBuffer + cbSector);
        streamISO.write(bufferSector);
        cbTotal += cbSector;
    }
    streamISO.on('finish', function() {
        printf("%d bytes written\n", cbTotal);
        process.exit(0);
    });
    streamISO.end();
}

if (args.argc < 3) {
    printf("usage: node bin2iso [input file] [output file] [options]\n");
} else {
    let argv = args.argv;
    convertBinToISO(argv[1], argv[2], argv['debug'], argv['overwrite']);
}
