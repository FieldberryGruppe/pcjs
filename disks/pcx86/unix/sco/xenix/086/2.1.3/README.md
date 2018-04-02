---
layout: page
title: SCO Xenix System V Release 2.1.3 for i8086
permalink: /disks/pcx86/unix/sco/xenix/086/2.1.3/
machines:
  - id: ibm5160
    type: pcx86
    debugger: true
    config: /devices/pcx86/machine/5160/cga/640kb/debugger/machine.xml
    drives: '[{name:"XENIX 8086 (10Mb Hard Disk)",type:3,path:"/pcjs-disks/pcx86/drives/10mb/XENIX086.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
    autoStart: true
---

SCO Xenix System V Release 2.1.3 for i8086
------------------------------------------

To (re)install this version of Xenix, load the "SCO Xenix 8086 (N1-BOOT)" diskette into drive A: and reboot.

When prompted, use the following serial number and activation key:  

	Serial number: sco005312
	Activation key: thmjvbqz

Note: The machine below is configured with a CGA.  Monochrome and EGA video cards should work as well (not VGA).

{% include machine.html id="ibm5160" %}
