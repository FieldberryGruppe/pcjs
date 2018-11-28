---
layout: page
title: "IBM PC (Model 5150) running IBM PC Advanced Diagnostics 2.05"
permalink: /disks/pcx86/diags/ibm/5150/2.05a/
machines:
  - id: ibm5150
    type: pcx86
    debugger: true
    config: /devices/pcx86/machine/5150/cga/64kb/debugger/machine.xml
    autoMount:
      A:
        name: IBM PC Diagnostics 2.05 (Adv)
---

IBM PC Advanced Diagnostics 2.05
--------------------------------

This disk displays the following startup messages:

    The IBM Personal Computer                                                       
    ADVANCED DIAGNOSTICS                                                            
    Version 2.05 (C)Copyright IBM Corp 1981, 1983                                   
                                                                                    
    SELECT AN OPTION                                                                
                                                                                    
    0 - RUN DIAGNOSTIC ROUTINES                                                     
    1 - FORMAT DISKETTE                                                             
    2 - COPY DISKETTE                                                               
    3 - PREPARE SYSTEM FOR RELOCATION                                               
    9 - EXIT TO SYSTEM DISKETTE                                                     
                                                                                    
    ENTER THE ACTION DESIRED                                                        

{% include machine.html id="ibm5150" %}

![IBM PC Diagnostics 2.05 (Adv)]({{ site.demo-disks.baseurl }}/pcx86/diags/ibm/5150/2.05a/5150-DIAG-205A.jpg)
