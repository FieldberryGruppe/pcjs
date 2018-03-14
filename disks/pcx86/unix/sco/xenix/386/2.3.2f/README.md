---
layout: page
title: SCO Xenix 386 v2.3.2f
permalink: /disks/pcx86/unix/sco/xenix/386/2.3.2f/
machines:
  - id: deskpro386
    type: pcx86
    debugger: true
    config: /devices/pcx86/machine/compaq/deskpro386/ega/2048kb/debugger/machine.xml
    autoMount:
      A:
        name: SCO Xenix 386 2.3.2f (N1-BOOT)
      B:
        name: None
    autoStart: true
    messages: fault
    commands: bp #003F:00000054
---

SCO Xenix 386 v2.3.2f
---------------------

{% include machine.html id="deskpro386" %}