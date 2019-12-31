/**
 * @fileoverview Simulates RAM
 * @author <a href="mailto:Jeff@pcjs.org">Jeff Parsons</a>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

/**
 * @typedef {Config} RAMConfig
 * @property {number} addr
 * @property {number} size
 * @property {number} [type]
 */

/**
 * @class {RAM}
 * @unrestricted
 * @property {RAMConfig} config
 * @property {number} addr
 * @property {number} size
 * @property {number} type
 * @property {Array.<number>} values
 */
class RAM extends Memory {
    /**
     * RAM(idMachine, idDevice, config)
     *
     * Sample config:
     *
     *      "ram": {
     *        "class": "RAM",
     *        "addr": 8192,
     *        "size": 1024,
     *        "bus": "busMemory"
     *      }
     *
     * @this {RAM}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {RAMConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        config['type'] = Memory.TYPE.NONE;
        super(idMachine, idDevice, config);
        this.bus.addBlocks(this.config['addr'], this.config['size'], Memory.TYPE.READWRITE);
        this.whenReady(this.onReset.bind(this));
    }
}

Defs.CLASSES["RAM"] = RAM;
