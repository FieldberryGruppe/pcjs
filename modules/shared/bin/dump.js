#!/usr/bin/env node
/**
 * @fileoverview Tool for dumping binary files
 * @author <a href="mailto:Jeff@pcjs.org">Jeff Parsons</a>
 * @copyright © 2012-2020 Jeff Parsons
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
var repl = require("repl");
var Defines = require("../lib/defines");
var Str = require("../lib/strlib");

var buffer = null;
var offsetPrev = 0;
var cchOffset = 6;

/**
 * printf(format, args)
 *
 * @param {string} format
 * @param {...} args
 * @return {number}
 */
function printf(format, ...args)
{
    let s = Str.sprintf(format, args);
    console.log(s.replace(/\s*$/, ""));
    return s.length;
}

/**
 * validate(v, message, value)
 *
 * @param {*} v
 * @param {string} [message]
 * @param {*} [value]
 */
function validate(v, message, value)
{
    if (!v) throw new Error(message + (value !== undefined? (" (" + value + ")") : ""));
}

/**
 * closeFile()
 *
 * @return {boolean}
 */
function closeFile()
{
    if (buffer) {
        buffer = null;
        return true;
    }
    return false;
}

/**
 * dumpFile(sOffset, length, size, comment)
 *
 * @param {number} offset
 * @param {number} [length]
 * @param {number} [size]
 * @param {string} [comment]
 * @return {number}
 */
function dumpFile(offset, length, size = 1, comment = "")
{
    validate(buffer, "no file");
    validate(offset >= 0 && offset < buffer.length, "offset out of range", offset);
    let sDump = "";
    let cb = length;
    let cLines = ((cb + 15) >> 4) || 1;
    let cbLine = 16;
    while (cLines-- && cb > 0) {
        let data = 0, iByte = 0, i;
        let sData = "", sChars = "";
        let sAddr = Str.toHex(offset, cchOffset, true);
        for (i = cbLine; i > 0 && cb > 0; i--) {
            var b = buffer[offset++];
            data |= (b << (iByte++ << 3));
            if (iByte == size) {
                sData += Str.toHex(data, size * 2);
                sData += (size == 1? (i == 9? '-' : ' ') : "  ");
                data = iByte = 0;
            }
            sChars += (b >= 32 && b < 127? String.fromCharCode(b) : '.');
            cb--;
        }
        if (sDump) sDump += '\n';
        sDump += sAddr + "  " + sData + Str.pad(sChars, sChars.length + i * 3 + 1, true) + comment;
    }
    if (sDump) printf("%s\n", sDump);
    offsetPrev = offset;
    return length - cb;
}

/**
 * openFile(sPath)
 *
 * @param {string} sPath
 * @return {boolean}
 */
function openFile(sPath)
{
    buffer = fs.readFileSync(sPath);
    return true;
}

/**
 * searchFile(values)
 *
 * @param {Array.<string>} values
 * @return {number}
 */
function searchFile(values)
{
    let matches = 0;
    validate(buffer, "no file");
    let a = values.map((v) => {
        let n = Str.parseInt(v, 16);
        validate(n !== undefined || n < 0 || n > 0xff, "value out of range", v);
        return n;
    });
    for (let offset = 0; offset <= buffer.length - a.length; offset++) {
        let i, cb = a.length;
        for (i = 0; i < cb; i++) {
            if (buffer[offset + i] != a[i]) break;
        }
        if (i == cb) {
            dumpFile(offset & ~0xf, 16);
            offset += a.length - 1;
            matches++;
        }
    }
    return matches;
}

/**
 * searchDeltas(values, maxSpread)
 *
 * @param {Array.<string>} values
 * @param {number} [maxSpread]
 * @return {number}
 */
function searchDeltas(values, maxSpread = 8)
{
    let matches = 0;
    validate(buffer, "no file");
    validate(values.length > 1, "not enough values");
    let a = values.map((v) => {
        let n = Str.parseInt(v, 16);
        validate(n !== undefined || n < 0 || n > 0xffff, "value out of range", v);
        return n;
    });
    let deltas = [0];
    for (let i = 1; i < a.length; i++) {
        deltas.push(a[i] - a[i-1]);
    }
    for (let offset = 0; offset < buffer.length - deltas.length * 2; offset++) {
        for (let spread = 0; spread <= maxSpread; spread++) {
            let off = offset;
            let i, n = deltas.length, wPrev = 0;
            for (i = 0; i < n; i++) {
                let w = buffer[off++] | (buffer[off++] << 8);
                off += spread;
                if (i && (w - wPrev) != deltas[i]) break;
                wPrev = w;
            }
            if (i == n) {
                dumpFile(offset, 16, 1, "  spread = " + spread);
                offset += deltas.length - 2;
                matches++;
                break;
            }
        }
    }
    return matches;
}

/**
 * onCommand(cmd, context, filename, callback)
 *
 * @param {string} cmd
 * @param {Object} context
 * @param {string} filename
 * @param {function(Object|null, Object)} callback
 */
var onCommand = function (cmd, context, filename, callback)
{
    let result = false;
    let args = cmd.replace(/\s+/g, ' ').trim().split(' ');
    try {
        let sCommand = args[0];
        args.shift();
        switch (sCommand) {
        case "close":
            result = closeFile();
            break;
        case "d":
        case "dump":
            result = dumpFile(Str.parseInt(args[0], 16) || offsetPrev, Str.parseInt(args[1], 16) || 128);
            break;
        case "open":
            result = openFile(args[0]);
            break;
        case "q":
        case "quit":
            process.exit();
            result = true;
            break;
        case "s":
        case "search":
            result = searchFile(args);
            break;
        case "sd":
            result = searchDeltas(args);
            break;
        default:
            printf("unrecognized command: %s\n", sCommand);
            break;
        }
    }
    catch(err) {
        printf("error: %s\n", err.message);
    }
    callback(null, result);
};

if (process.argv.length > 2) {
    openFile(process.argv[2]);
}

repl.start({
    prompt: "dump> ",
    input: process.stdin,
    output: process.stdout,
    eval: onCommand
});
