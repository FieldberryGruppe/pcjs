---
layout: page
title: Enhanced DEBUG for PC DOS and MS-DOS (with PCjs Debugger)
permalink: /disks/pcx86/tools/other/enhdebug/debugger/
machines:
  - id: ibm5160-pcdos200
    type: pcx86
    config: /devices/pcx86/machine/5160/cga/256kb/debugger/machine.xml
    resume: 1
    autoMount:
      A:
        name: PC DOS 2.00 (Disk 1)
      B:
        name: Enhanced DEBUG 1.32b
    autoType: $date\r$time\rB:DEBUGX /F\r?\r$20\r$10v\r$10\r
---

Enhanced DEBUG for PC DOS and MS-DOS (with PCjs Debugger)
---------------------------------------------------------

[Enhanced DEBUG](../) is running below in a machine with the PCjs Debugger.

{% include machine.html id="ibm5160-pcdos200" %}
