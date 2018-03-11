---
layout: post
title: The Many Faces of SYMDEB
date: 2018-02-25 10:00:00
permalink: /blog/2018/02/25/
machines:
  - id: ibm5170
    type: pcx86
    config: /devices/pcx86/machine/5170/ega/2048/rev3/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:1,path:"/pcjs-disks/pcx86/drives/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

The first version of SYMDEB that I came to know and love was probably Version 4.00, released with
[Microsoft Macro Assembler 4.00](/disks/pcx86/tools/microsoft/masm/4.00/), and dated October 16, 1985:

	SYMDEB   EXE     37021 10-16-85   4:00a

SYMDEB was a big improvement over the DOS DEBUG utility, which was clearly not getting enough love in the
mid 1980's.  For example, PC-DOS 3.00 was released in conjunction with the 80286-based IBM PC AT, and yet the
DEBUG utility that shipped with PC-DOS 3.00 didn't understand *any* 80286-specific instructions.

And I'm not just talking about "esoteric" instructions that most users wouldn't have cared about anyway, like
LGDT or LIDT.  No, even instructions introduced by the 80286's predecessor, the 80186, such as shift, rotate,
and push immediate instructions (eg, `SHL AX,4`) were not recognized by DEBUG either.

Also, DEBUG had some strange quirks.  You could change the "Instruction Pointer" ("IP") with the "R IP"
command, but you couldn't assemble at address IP (ie, "A CS:IP").  SYMDEB fixed that.

DEBUG also had a historical idiosyncrasy where "PC" referred to the processor flags ("Processor Conditions"?)
rather than the "Program Counter".  SYMDEB resolved that by treating "PC" as alias for "IP".

Output from SYMDEB Version 4.00:

    Microsoft (R) Symbolic Debug Utility  Version 4.00
    Copyright (C) Microsoft Corp 1984, 1985.  All rights reserved.
    
    Processor is [80286]
    -?
    A [<address>] - assemble              M <range> <address> - move
    BC[<bp>] - clear breakpoint(s)        N <filename> [<filename>...] - name
    BD[<bp>] - disable breakpoint(s)      O <value> <byte> - output to port
    BE[<bp>] - enable breakpoint(s)       P [=<address>] [<value>] - program step
    BL[<bp>] - list breakpoint(s)         Q - quit
    BP [bp] <address> - set breakpoint    R [<reg>] [[=] <value>] - register
    C <range> <address> - compare         S <range> <list> - search
    D[type][<range>] - dump memory        S {-|&|+} - source level debugging
    E[type] <address> [<list>] - enter    T [=<address>] [<value>] - trace
    F <range> <list> - fill               U [<range>] - unassemble
    G [=<address> [<address>...]] - go    V [<range>] - view source lines
    H <value> <value> - hexadd            W [<address> [<drive><rec><rec>]] - write
    I <value> - input from port           X [?] <symbol> - examine symbols(s)
    K [<value>] - stack trace             XO<symbol> - open map/segment
    L [<addr> [<drive><rec><rec>]] - load Z <symbol> <value>
    
    ? <expr> - display expression         > } <device/file> - Redirect output
    ! [dos command] - shell escape        < { <device/file> - Redirect input
    . - display current source line       = ~ <device/file> - Redirect both
    \ - screen flip                       * <string> - comment
    
    <expr> ops: + - * / : not seg off by wo dw poi port wport mod and xor or
    <type> : Byte, Word, Doubleword, Asciz, Shortreal, Longreal, Tenbytereal

Note that SYMDEB existed before Version 4.00.  For example, it was also part of
[Microsoft Macro Assembler 3.01](/disks/pcx86/tools/microsoft/masm/3.01/):

    SYMDEB   EXE     36538 06-07-85   4:26p

Output from SYMDEB Version 3.01 looked almost identical to 4.00, which isn't too surprising, since there was only
about four months separating them:

    Microsoft Symbolic Debug Utility
    Version 3.01
    (C)Copyright Microsoft Corp 1984, 1985
    Processor is [80286]
    -?
    A [<address>] - assemble              M <range> <address> - move
    BC[<bp>] - clear breakpoint(s)        N <filename> [<filename>...] - name
    BD[<bp>] - disable breakpoint(s)      O <value> <byte> - output to port
    BE[<bp>] - enable breakpoint(s)       P [=<address>] [<value>] - program step
    BL[<bp>] - list breakpoint(s)         Q - quit
    BP [bp] <address> - set breakpoint    R [<reg>] [[=] <value>] - register
    C <range> <address> - compare         S <range> <list> - search
    D[type][<range>] - dump memory        S {-|&|+} - source level debugging
    E[type] <address> [<list>] - enter    T [=<address>] [<value>] - trace
    F <range> <list> - fill               U [<range>] - unassemble
    G [=<address> [<address>...]] - go    V [<range>] - view source lines
    H <value> <value> - hexadd            W [<address> [<drive><rec><rec>]] - write
    I <value> - input from port           X [?] <symbol> - examine symbols(s)
    K [<value>] - stack trace             XO<symbol> - open map/segment
    L [<addr> [<drive><rec><rec>]] - load Z <symbol> <value>
    
    ? <expr> - display expression         > } <device/file> - Redirect output
    ! [dos command] - shell escape        < { <device/file> - Redirect input
    . - display current source line       = ~ <device/file> - Redirect both
    \ - screen flip                       * <string> - comment
    
    <expr> ops: + - * / : not seg off by wo dw poi port wport mod and xor or
    <type> : Byte, Word, Doubleword, Asciz, Shortreal, Longreal, Tenbytereal

And before 3.01, there was Version 3.00, which was about six months older:

    SYMDEB   EXE    27136  12-07-84   1:39p

Output from SYMDEB Version 3.00:

    Microsoft Symbolic Debug Utility
    Version 3.00
    (C)Copyright Microsoft Corp 1984
    Processor is [80286]
    -?
    
    A [<address>] - assemble              H <value> <value> - hexadd
    BC <bp> - clear breakpoint(s)         I <value> - input from port
    BD <bp> - disable breakpoint(s)       L [<address> [<drive><rec><rec>]] - load
    BE <bp> - enable breakpoint(s)        M <range> <address> - move
    BL <bp> - list breakpoint(s)          N <filename> [<filename>...] - name
    BP [bp] <address> - set breakpoint    O <value> <byte> - output to port
    C <range> <address> - compare         P - program step
    DA[<range>] - dump asciz string       Q - quit
    DB[<range>] - dump bytes              R [<reg>] - register
    DW[<range>] - dump words              S <range> <list> - search
    DD[<range>] - dump doublets           S{-|&|+} - source level debugging
    DS[<range>] - dump short float        T [=<address>] [<value>] - trace
    DL[<range>] - dump long float         U [<range>] - unassemble
    DT[<range>] - dump tempreal float     W [<address> [<drive><rec><rec>]] - write
    E [<address>] [<list>] - enter        X[?] <symbol> - examine symbols(s)
    F <range> <list> - fill               XO <symbol> - open map/segment
    G [=<address> [<address>...]] - go
    
    ? - help menu
    ? <expr> - display expression
    > {CON|COM1} - Redirect output
    < {CON|COM1} - Redirect input
    = {CON|COM1} - Redirect both

If there was a SYMDEB Version 1.xx or 2.xx, I've never seen it.  It's possible that SYMDEB Version 3.00 was
the first (public) version, and since it would have started as a fork of the DOS DEBUG utility, the initial version
may have simply mirrored the contemporaneous version of DOS, which in mid-1984, would have been DOS Version 3.00.

Other early versions of SYMDEB were also bundled with Windows SDKs.  The Windows 1.01 SDK came with:

    Microsoft Windows Debugger
    Version 3.Windows
    (C) Copyright Microsoft Corp 1984, 1985

but despite the weird version number, it included a help screen that was identical to SYMDEB 3.01.  However, in
subsequent versions of the Windows SDK, the "Windows" version of SYMDEB began to diverge more noticeably.  In the
Windows 1.03 SDK, SYMDEB reported itself as "Windows Version 2.00":

    Microsoft Symbolic Debug Utility
    Windows Version 2.00
    (C) Copyright Microsoft Corp 1984, 1985, 1986

and included several Windows-specific commands, such as:

    DH - Displays local heap for current DS
    DG - Displays global heap for Windows
    DQ - Displays [*] HQ - HTASK    CHANGEBITS WAKEBITS WAKEMASK

The Windows 3.00 SDK was bundled with SYMDEB "Windows Version 3.00":

	Microsoft Symbolic Debug Utility
	Windows Version 3.00
	(C) Copyright Microsoft Corp 1984-1990

and included even *more* Windows-specific commands:

	DH - Displays local heap for current DS
	DG - Displays global heap for Windows
	DF - Displays global heap free list for Windows
	DU - Displays global heap LRU list for Windows
	DM - Displays module list for Windows
	DQ - Displays [*] HQ - HTASK    CHANGEBITS WAKEBITS WAKEMASK

I was rather sad to see that SYMDEB was dropped from Microsoft Macro Assembler releases after 4.00.  One possible
explanation for its omission is that, by the time [Microsoft Macro Assembler 5.00](/disks/pcx86/tools/microsoft/masm/5.00/)
was released, 80386 support was a requirement, and SYMDEB Version 4.00 didn't contain any 80386 support.

The Windows versions of SYMDEB *did* add support for the 80386, starting with "Windows Version 2.00", so Microsoft
could have simply bundled that version of SYMDEB with MASM 5.00 and up.  Why didn't they?  Perhaps they felt that all
the Windows-specific functionality would need to be removed first, or perhaps they viewed CodeView as a complete
replacement.  Whatever the reason, it seems clear they didn't want to be bothered with SYMDEB anymore.

RIP, SYMDEB.

*[@jeffpar](http://twitter.com/jeffpar)*  
*Feb 25, 2018*
