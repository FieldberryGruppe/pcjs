---
layout: post
title: Emulating IBM PC Cursors
date: 2018-03-20 10:00:00
permalink: /blog/2018/03/20/
machines:
  - id: ibm5160-msdos320
    type: pcx86
    config: /devices/pcx86/machine/5160/ega/640kb/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/pcjs-disks/pcx86/drives/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: PC Magazine (Vol. 06 No. 19)
    autoStart: true
    autoType: B:\rDIR\rCTYPE\r 
---

Since I'm finally in possession of a working
IBM Monochrome Display, IBM Color Display, *and* IBM Enhanced Color Display,
along with the requisite video cards -- specifically:

- [IBM Monochrome Display Adapter (MDA)](/devices/pcx86/video/ibm/mda/)
- [IBM Color Graphics Adapter (CGA)](/devices/pcx86/video/ibm/cga/)
- [IBM Enhanced Graphics Adapter (EGA)](/devices/pcx86/video/ibm/ega/)

I decided it was time to start digging into some of their idiosyncrasies.
And there are a fair number of them.  These are little quirks that emulators often don't bother with.
I started with one of the simpler features that all the video cards support: *programmable cursor shapes*.

### What Cursor?

For purposes of this blog post, the term "cursor" refers to the blinking cursor that any of the above video
cards display in a text mode.  It's also referred to as a "hardware cursor", because the video hardware automatically
draws it, erases it, and redraws it multiple times per second, all without any assistance from the processor.
However, by writing to the appropriate video card registers, the processor *does* have the ability to:
 
- Move the cursor anywhere on (or off) the screen
- Change the shape (thickness) of the cursor
- Change the rate at which the cursor blinks (at least on some video cards)

### Cursor Shapes

Depending on the text mode, character cells are generally either 8 or 14 scan lines high.  The scan lines within
a cell are numbered from top to bottom, with 0 being the top scan line, and 7 or 13 being the bottom.  Cursors are
defined as ranges of scan lines, and two CRT controller registers (*Cursor Start* and *Cursor End* registers)
determine the starting and ending scan line of the cursor.

Here are IBM's defaults for the *Cursor Start* and *Cursor End* registers:

- MDA: 11-12
- CGA: 6-7
- EGA: 11-13 (assuming either a Monochrome or Enhanced Color Display)

Even though it looks like the default EGA cursor would be 3 scan lines tall, it's actually only 2, because unlike the
MDA and CGA video cards, the EGA draws cursor scan lines up to *but not including* the scan line at *Cursor End*.
Even IBM's own EGA Technical Reference manual gets this detail wrong.

You might be tempted to think that this idiosyncrasy of the EGA means that if the *Cursor Start* and *Cursor End*
register are equal, then no cursor at all is drawn.  But no, the hardware always draws at least one scan line before
deciding whether to draw more.

### Cursor Visibility

There are number of ways to "hide" the cursor:

- Position the cursor to an off-screen location
- Turn the cursor's "blink" bit off
- Set the *Cursor Start* register to a value greater than or equal to the number of scan lines

The cursor's "blink" bit is bit 5 in the *Cursor Start* register.  This means that only bits 0-4 are used to define
the starting scan line, permitting any value from 0 to 31.  Since, for example, 31 is larger than the number of character
scan lines used on any of these cards, writing 31 to the *Cursor Start* register effectively disables ("hides") the cursor
on any card.

### Cursor Wrap Around

Setting the *Cursor End* register to a value greater than or equal to the number of scan lines has a different effect:
the scan line generator logic wraps around to zero and continues until it reaches the *Cursor Start* scan line, resulting
in a block cursor equal to the full height of the character cell.

There is one unusual exception to this behavior on the EGA: if the value in the *Cursor End* register *modulo 16* is equal
to the *Cursor Start* register, then the cursor is drawn as if *Cursor Start* was *equal to* *Cursor End*, which (as described
above) results in a single scan line.

### Cursor Wrap Around with Split

Setting the *Cursor End* register to a value *less than* the *Cursor Start* register also causes wrap around, but the
wrap around stops when the internal scan line value reaches *Cursor End*, thereby leaving a gap between the ending and
starting scan lines.  The effect makes it appear as if the cursor has been "split" into two separate blocks, with the
top block always starting at the top and the bottom block always ending at the bottom.

And once again, there is slight difference between the EGA and the older cards: setting *Cursor Start* to 5 and *Cursor End*
to 4 will result in a split cursor on the EGA with a gap of exactly one scan line, whereas those same settings on older
cards will result in a solid cursor -- because they draw scan lines up to *and including* the line at *Cursor End*.

### PC Magazine CTYPE and STICK Utilities

The [November 10, 1987 issue of PC Magazine](https://books.google.com/books?id=x1yigTsvZxsC&lpg=PA479&pg=PA463#v=onepage&q&f=false)
featured an article, "Getting Control of Your Cursor", by Jeff Prosise that described a utility named CTYPE, which you can
see running in the machine below.

The [November 24, 1987 issue of PC Magazine](https://books.google.com/books?id=KU7dCBpP7fsC&lpg=PA354&pg=PA349#v=onepage&q&f=false)
featured a related article, "A Colorfast Screen and Stable Cursor", also by Jeff Prosise, that described a utility called STICK,
which you can find on the PCjs diskette labelled "PC Magazine (Vol. 06 No. 20)". 

{% include machine.html id="ibm5160-msdos320" %}

*[@jeffpar](http://twitter.com/jeffpar)*  
*Mar 20, 2018*
