---
layout: post
title: An Update on Early Norton Utilities
date: 2019-01-10 22:00:00
permalink: /blog/2019/01/10/
preview: https://demo-disks.pcjs.org/pcx86/shareware/pcdiskmag/PCDISKMAG-DISK1.jpg
---

As I lamented in my [last blog post](/blog/2018/12/28/), finding copies of the earliest versions
of The Norton Utilities has proven to be suprisingly difficult -- virtually impossible.

The oldest version I had -- purchased on eBay late last year -- was [Norton Utilities 3.00](/disks/pcx86/tools/other/norton/3.00/),
with files dated December 7, 1984.  But we know that Peter Norton began selling his utilities more than *two years*
before that, in 1982, so it's been exasperating to find nothing from 1982 or 1983 so far.

Aside from a purely historical interest in seeing how the utilities evolved over those first few years,
Michal Necasek and I were also interested in verifying a claim, made back in 1991 in a Russian computer
magazine, that "the very first version of Norton Utilities consisted of COM files processed by SpaceMaker,"
an early -- if not *the earliest* -- EXE compression utility.  Michal discussed SpaceMaker at length in
his April 2018 blog post "[Realia SpaceMaker](http://www.os2museum.com/wp/realia-spacemaker/)".

The claim could not be verified, because by version 3.00 of The Norton Utilities, Peter Norton was no
longer using SpaceMaker -- if he ever had.  While [other programs](http://www.os2museum.com/wp/spacemaker-update/)
known to be compressed with SpaceMaker begin and end with small recognizable stubs, all the COM files in
Norton Utilities 3.00 (with the exception of `BEEP.COM`) end with:

    Best wishes from Peter Norton

However, as luck would have it, I had also recently purchased a small set of shareware disks produced by
PC Magazine that were part of a companion publication called "[PC Disk Magazine](/disks/pcx86/shareware/pcdiskmag/)",
which first went on sale in the summer of 1983.

I had no idea what to expect on the diskettes, and I was a little worried at first, because I had some trouble
reading them.  The diskettes were slightly warped, and it took several attempts to read them.  Once I finally got all
the diskettes imaged and [User Guides](/pubs/pc/magazines/pcdiskmag/) scanned, I was pleasantly surprised to see that
Peter Norton had made some contributions to the first two volumes:

{% include gallery-begin.html %}
{% include gallery-image.html src="https://demo-disks.pcjs.org/pcx86/shareware/pcdiskmag/PC-DISK-MAG-VOL1-NO1.jpg" width="120" height="190" title="PC Disk Magazine Vol. 1 No. 1" link="https://s3-us-west-2.amazonaws.com/archive.pcjs.org/pubs/pc/magazines/pcdiskmag/PC-DISK-MAG-VOL1-NO1.pdf" %}
{% include gallery-image.html src="https://demo-disks.pcjs.org/pcx86/shareware/pcdiskmag/PC-DISK-MAG-VOL1-NO2.jpg" width="120" height="190" title="PC Disk Magazine Vol. 1 No. 2" link="https://s3-us-west-2.amazonaws.com/archive.pcjs.org/pubs/pc/magazines/pcdiskmag/PC-DISK-MAG-VOL1-NO2.pdf" %}
{% include gallery-end.html %}

The first program, `DISKMAP`, was described by Peter Norton in the accompanying User Guide as
"an element from the Norton Utilities, the widely praised library of DOS tools for the IBM PC."
And the second program, `DLABEL`, was similarly described as "another element from the widely
praised Norton Utilities for the IBM PC."

Moreover, on closer inspection of these two utilities, I noticed that they both appeared to include
decompression stubs that were similar to those used by [SpaceMaker 1.06](/disks/pcx86/tools/other/spacemaker/1.06/).

Similar, but different.  And smaller (239 bytes vs. 260 bytes in later versions of SpaceMaker).  However,
the similarities are so striking that I'd say it's pretty clear that Peter Norton *did* use an early version 
of SpaceMaker -- but which, like virtually all pre-1984 versions of The Norton Utilities, has also been lost.

Granted, neither `DISKMAP` nor `DLABEL` are from any known release of The Norton Utilities, but it seems
likely they were built from the same source code used to build his retail product in 1983.  This is the closest
we've come to verifying that early versions of The Norton Utilities were compressed -- with SpaceMaker no less --
and with a bit more luck, and patience, perhaps we'll get even closer.

*[@jeffpar](https://jeffpar.com)*  
*Jan 10, 2019*

[![PC Disk Magazine Diskettes]({{ site.demo-disks.baseurl }}/pcx86/shareware/pcdiskmag/PCDISKMAG-DISK1.jpg)](/disks/pcx86/shareware/pcdiskmag/)
