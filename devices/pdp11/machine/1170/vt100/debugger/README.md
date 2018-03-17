---
layout: page
title: PDP-11/70 with VT100 Terminal and Debugger
permalink: /devices/pdp11/machine/1170/vt100/debugger/
machines:
  - id: test1170
    type: pdp11
    debugger: true
    class: machine-right
    config: /devices/pdp11/machine/1170/vt100/debugger/machine.xml
    connection: dl11->vt100.serialPort
    resume: 1
  - id: vt100
    type: pc8080
    debugger: true
    class: machine-left
    config: /devices/pc8080/machine/vt100/debugger/machine.xml
    connection: serialPort->test1170.dl11
    resume: 1
---

This VT100 Terminal is connected to the PDP-11/70 below.

Both machines include a Debugger.  Machine configurations [without Debuggers](../) are also available.

{% include machine.html id="vt100" %}

{% include machine.html id="test1170" %}
