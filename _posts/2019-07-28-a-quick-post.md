---
layout: post
title: A Quick Post
date: 2019-07-28 10:00:00
permalink: /blog/2019/07/28/
preview: https://demo-disks.pcjs.org/pcx86/tools/microsoft/basic/quickbasic/1.00/QUICKBAS100.png
---

There have been a number of small additions to the website over the last month:

- A complete set of [COMPAQ 80286-Based Products Technical Reference Manuals](/pubs/pc/reference/compaq/80286/) (thanks to a generous donation from Ray Knights of Las Vegas, NV)
- A few more 1989 issues of [PC Tech Journal](/pubs/pc/magazines/pctj/) magazine, which now makes the collection complete
- [QuickBASIC 1.0](/disks/pcx86/tools/microsoft/basic/quickbasic/1.00/) and [QuickBASIC 2.0](/disks/pcx86/tools/microsoft/basic/quickbasic/2.00/) original diskettes; version 1.0 had been particularly hard to find

as well as a few PCx86 tweaks:

- Fixed full-screen support for Chrome, Safari, and Edge
- Added Copy/Paste support

As of v1.75.5, it should now be possible to right-click on a PCx86 screen and choose Copy/Paste commands, or use
your browser's Copy/Paste shortcut keys, or both.  The browser's right-click context menu won't always be available
if the machine inside is expecting to receive right-clicks itself, but hopefully your browser's keyboard shortcuts
will still work.  Pasting works by injecting keystrokes into the machine, much like you could already do with the
*autoType* URL parameter.  Consider this a "beta" release of Copy/Paste support, because I haven't test every browser
yet, I'm sure it could use some refinements, and I'm sure people won't be shy about complaining if something doesn't work.

I've also been working on weaning PCjs off of Amazon Web Services.  I was using S3 cloud storage for many of the
documents I've scanned over the years, but since I was also paying for OneDrive, it seemed silly to pay extra for AWS,
which charges me for both bandwidth and space.  The embedded OneDrive links may not be as fast or convenient as the old
AWS links, but it lowers my costs, and you still don't have to pay anything, so it's a win-win.  Or a win-push.  Or
something.

I haven't turned off AWS yet, primarily because there's a number of "archive.pcjs.org" links out in the wild that are
still served by AWS, but I plan to address that in the near future.

I'd also like to spend some time playing with the old versions of [QuickBASIC](/disks/pcx86/tools/microsoft/basic/quickbasic/).
The diskettes I picked up didn't come with any manuals, but I do have a copy of "Microsoft QuickBASIC" by Douglas Hergert
from Microsoft Press (1987).

I'm thinking about mailing in a request for the "Companion Disk", too.  I'll let you know if Microsoft Press comes through.

[![Microsoft QuickBASIC (1987)](/pubs/pc/programming/Microsoft_QuickBASIC/Microsoft_QuickBASIC-Cover.jpg)](https://1drv.ms/b/s!ArcO_mFRe1Z9gvA_O6gyOmFPqAMhDw?e=GaqGs8)

![Microsoft QuickBASIC Companion Disk](/pubs/pc/programming/Microsoft_QuickBASIC/Microsoft_QuickBASIC-Disk.jpg)

*[@jeffpar](https://jeffpar.com)*  
*July 28, 2019*
