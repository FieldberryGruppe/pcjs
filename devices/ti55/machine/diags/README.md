---
layout: page
title: "TI-55 Programmable Calculator (with Original ROM and Diagnostics)"
permalink: /devices/ti55/machine/diags/
machines:
  - id: ti55
    type: ti55
    name: TI-55 Programmable Calculator
    config: |
      {
        "ti55": {
          "class": "Machine",
          "type": "TI55",
          "name": "TI-55 Emulator",
          "version": 1.10,
          "bindings": {
            "clear": "clearTI55",
            "print": "printTI55"
          }
        },
        "chip": {
          "class": "Chip",
          "type": "TMS-1503",
          "input": "buttons",
          "output": "display",
          "bindings": {
            "2nd": "ind2nd",
            "INV": "indINV",
            "Deg": "indDeg",
            "Rad": "indRad",
            "Grad": "indGrad"
          }
        },
        "clock": {
          "class": "Time",
          "cyclesPerSecond": 650000,
          "bindings": {
            "run": "runTI55",
            "speed": "speedTI55",
            "step": "stepTI55"
          },
          "overrides": ["cyclesPerSecond","yieldsPerSecond","yieldsPerUpdate"]
        },
        "display": {
          "class": "LED",
          "type": 3,
          "cols": 12,
          "rows": 1,
          "color": "red",
          "bindings": {
            "container": "displayTI55"
          },
          "overrides": ["color","backgroundColor"]
        },
        "buttons": {
          "class": "Input",
          "buttonDelay": 50,
          "location": [56, 322, 358, 462, 0.34, 0.5, 465, 832, 322, 182, 74, 36],
          "map": [
            ["2nd",  "sin",  "cos",  "tan",  "clr"],
            ["inv",  "pct",  "lnx",  "epow", "root"],
            ["xchg", "sq",   "sqrt", "rcp",  "ypow"],
            ["sigma","ee",   "(",    ")",    "/"],
            ["sto",  "7",    "8",    "9",    "*"],
            ["rcl",  "4",    "5",    "6",    "-"],
            ["sum",  "1",    "2",    "3",    "+"],
            ["\\b",  "0",    ".",    "+/-",  "=|\\r"]
          ],
          "bindings": {
            "surface": "imageTI55",
            "power": "powerTI55",
            "reset": "resetTI55"
          }
        },
        "rom": {
          "class": "ROM",
          "wordSize": 13,
          "valueSize": 16,
          "valueTotal": 2048,
          "littleEndian": true,
          "file": "tmc1503le.bin",
          "reference": "http://seanriddle.com/tmc1503.bin",
          "chipID": "TMC1503NL DD 8035",
          "revision": "0",
          "bindings": {
          	"array": "romArrayTI55",
          	"cellDesc": "romCellTI55"
          },
          "overrides": ["colorROM","backgroundColorROM"],
          "values": [
            4400,5066,3089,6364,3237,543,813,813,3233,6371,3198,6266,3245,6364,1991,5556,
            1865,103,3587,6187,6815,3296,3308,6290,6148,3098,6578,2265,3188,5365,6271,2055,
            3587,6807,6257,6217,3194,6154,3198,3256,6364,3257,6156,3194,6286,3198,3193,7798,
            3184,6805,6752,6221,3194,6609,3240,6285,3194,3879,6463,7004,3252,6902,1863,3589,
            6991,6809,6279,6843,3194,7169,2087,6603,6363,3194,7864,4110,6364,3194,7866,5780,
            6364,6446,3096,6591,3096,6573,3096,6563,3194,6603,2279,3198,7263,3188,5164,3090,
            6242,3300,3217,5136,3198,6248,5164,6249,5167,5136,3198,6253,5167,3302,6364,3088,
            6364,3194,3112,7614,5167,5099,3110,6644,5556,6364,543,813,813,3495,3112,3124,
            6515,5099,1887,2119,3098,7694,6671,3194,6283,5104,5570,5768,6364,4057,5099,1822,
            5989,6643,5365,3194,3321,6295,3320,3198,6302,3304,3298,6302,3194,7375,3288,5174,
            3198,3194,7643,3877,6619,3298,6313,3322,7376,3118,7361,2055,3594,3584,1863,1815,
            1991,3298,7371,3310,6331,3322,6361,3302,6360,3588,6361,2271,3903,3322,6344,5565,
            6345,3300,3117,3112,2055,3594,3589,6318,5473,3584,1815,3302,7667,3590,6644,2079,
            3118,6355,3104,2241,3585,3584,2079,1879,3590,1806,6364,3091,3186,3233,3913,3321,
            3325,7817,5365,5174,3194,7400,3877,7487,3225,5117,711,1815,3877,7928,2561,2265,
            1504,3586,2080,3118,7485,3118,7495,3879,3329,3233,1121,1125,6399,3092,5543,621,
            1127,1120,3174,7437,616,3592,97,7439,76,7437,97,6419,3088,552,6404,616,
            5540,101,7439,5668,3190,6380,5453,5514,5642,549,7452,3236,1793,1487,3170,6435,
            5563,6364,5476,4112,1505,6434,1999,549,1822,7388,4111,1822,5471,6439,3194,6455,
            401,257,3594,3588,3590,2208,6450,329,2193,5128,473,3585,3588,257,3237,1793,
            5272,1038,616,1038,3473,3877,7517,3218,7515,3216,679,672,680,592,3592,1380,
            7515,1317,6491,1100,6491,1377,7515,1320,4127,1328,6514,3221,6514,3841,3194,7416,
            3222,7511,549,6502,3218,6511,719,744,2024,2024,3282,6514,1038,616,1038,2055,
            1087,552,5174,2121,3593,3873,7517,3873,7410,3194,7415,3873,6534,2080,3114,6389,
            3198,7502,3244,3220,1353,6514,3118,6391,3222,6545,1100,1127,7538,3592,1097,1121,
            7538,2121,2144,1896,79,3895,3122,7570,3167,2145,7538,5086,6553,1999,5471,1806,
            5564,5164,6694,3108,3194,6595,3098,7593,3304,3308,3649,3588,6579,3112,3194,6595,
            3098,6579,3300,3232,3196,5155,5158,5570,3649,5159,5471,3601,3590,6846,3193,3116,
            3296,3194,7193,3234,7644,3232,3242,6646,3241,3585,6637,3242,7297,3234,6646,3236,
            6627,5099,3232,3872,3134,6616,3126,7643,3588,287,6370,1815,3236,6364,5565,3242,
            7388,2079,5989,4065,6646,4057,3594,2081,2085,2561,7660,2079,1815,3588,6370,3877,
            7690,3873,2277,3588,287,6364,5099,2151,3877,2085,6652,2119,2149,7686,2141,6639,
            3318,6660,3314,7643,4064,3594,287,3841,3105,6637,1887,1806,3162,6671,3128,2120,
            7701,2120,7646,5473,6623,2079,3242,6681,3601,3588,1999,1806,3182,7581,549,7722,
            5668,5679,1806,3589,5565,5768,4158,1999,2247,6623,3154,6701,6116,613,6694,5452,
            5514,5668,6694,3193,3841,3198,7763,3094,3326,7742,1313,1317,1312,6736,5768,1991,
            5563,1991,3322,7751,3326,6727,3128,5473,4112,72,3326,7911,1822,5570,5475,6887,
            769,39,6364,3326,6764,4110,3322,7773,3282,6750,3281,3132,6750,3155,5779,5476,
            5679,3134,6758,3133,3088,6364,3194,6364,804,7388,5104,6888,4112,1991,5476,1822,
            4112,5475,5564,5679,3324,6728,5099,2199,3090,2303,6780,3188,5555,5124,3237,5570,
            1822,5570,5779,3238,6790,3300,5124,3841,5824,1822,1887,5099,613,7826,5570,5124,
            1815,6264,5447,1806,6329,3120,3320,3124,3324,3194,7731,3321,3325,2263,5824,3665,
            4945,3589,5570,3649,4946,4110,3681,4946,3589,3617,4945,4110,3633,4946,3194,7860,
            3589,4112,5476,3588,5514,3697,4946,6902,5155,6364,3324,3194,6432,3233,5155,4110,
            4941,5570,3633,3198,7878,3681,4941,5475,1991,4112,3697,3584,3326,6863,5471,5555,
            3326,7247,3234,6364,3298,7920,4940,5564,3302,7388,3590,5155,5570,5158,5471,3310,
            6364,3306,7914,3649,4158,5475,4940,1806,5564,6364,1991,4940,3649,3589,5766,6364,
            5780,4940,5564,3198,3197,7611,1815,6365,2085,8007,2080,1793,3198,6911,3128,3118,
            7998,3114,6942,3110,6964,3106,6931,6133,6130,6136,6130,6095,6140,3092,5116,5117,
            1319,6056,6364,6136,6104,6099,6132,6016,6016,6104,6099,6133,5116,6929,3106,6947,
            3131,6045,6364,2009,3284,2029,3284,3280,2029,1511,3841,3100,1837,3088,1837,1879,
            3198,7918,1822,6734,3106,6971,6138,6132,5116,5117,6926,3131,6037,6364,3249,3253,
            3110,7228,3106,8005,6902,3248,6902,1927,5120,5033,1815,6902,3601,1863,3584,1806,
            3587,1991,4941,3194,6998,3128,5473,3590,1823,3585,3587,5029,3237,3592,5120,3126,
            8027,1793,2593,8038,544,7010,5117,1991,5036,3877,7022,2600,1497,7036,3118,7033,
            3117,3943,3192,3848,3134,7033,3126,7033,3841,5134,1535,1512,5061,1528,1823,5272,
            616,616,872,872,2377,5117,872,872,5524,3188,5174,3194,7057,1503,2623,3116,
            7061,3877,8085,1503,2623,2759,2084,7071,3122,8093,3130,8027,7071,3126,7479,5120,
            5038,5029,2597,7479,7004,5120,2592,3126,7082,2561,3590,3587,3293,7087,3292,3593,
            2639,639,3401,5090,2145,8125,5061,1399,296,3424,1288,8130,7092,3294,7111,2591,
            3429,7094,3588,2639,639,3847,3587,2759,7107,1927,769,6104,6099,6130,6136,6095,
            6099,6016,6107,6136,6133,5117,967,768,839,768,3093,3587,2081,557,1901,3152,
            3164,3587,2632,2561,2569,2593,3133,3913,5061,3594,7150,3871,3594,455,3589,3587,
            1863,1793,6138,6136,808,6138,6130,6099,6130,808,6095,6136,808,808,808,3587,
            3665,3584,2631,3587,4158,3588,1807,3587,257,3601,3588,3617,6149,3873,2080,3587,
            2007,5514,5642,1822,1887,5471,1822,1865,3156,3160,1901,3156,1383,1806,3198,7201,
            3128,5565,6500,3617,3198,7207,3665,1991,4942,3697,3584,6588,5540,5540,6692,5548,
            5548,6692,3236,5033,3261,799,3262,3229,7351,3324,3193,3327,3262,7351,3593,975,
            3592,3591,3591,7233,3401,3545,2592,7330,5268,3591,3591,6214,2623,5276,3591,3591,
            6214,3130,6228,3125,5450,1535,3114,6272,3126,7281,3122,6257,3194,6272,3130,3190,
            7296,2080,3118,2081,6272,3230,7222,3262,3263,7222,975,5272,3591,3591,7276,863,
            6327,5133,3118,6285,3194,6268,3127,3123,3877,7350,3127,3123,3126,7296,3841,2605,
            3114,3110,3877,3126,3130,7395,3106,6283,3190,7395,6203,3195,6206,2080,3118,7295,
            3872,3872,3872,6285,3238,6303,3122,6300,841,3592,865,7327,3593,863,3592,3591,
            3591,3587,3424,6216,3552,3286,6216,3545,5272,3593,1376,3591,3591,7244,2592,3126,
            6315,2561,1359,3455,1901,6315,3228,3190,7395,967,3593,3290,3289,7374,3238,7220,
            3545,3401,3591,3591,6350,2623,2080,3118,2081,6350,3123,3877,3123,7389,5120,2592,
            3590,3190,7218,5090,2145,7384,296,6356,3877,7392,3118,3117,6366,3192,1823,6228,
            1823,5450,1535,3592,3189,3229,3326,3325,3197,6388,3196,3127,3111,3107,2597,3107,
            3111,3127,6388,3245,3587,5668,3585,4941,2009,3258,6412,1479,1383,1376,1376,1481,
            6399,1370,7427,3094,6408,1509,7432,1371,1503,2097,6412,2049,1865,3156,5086,3090,
            6418,3431,2119,3258,3246,7453,1351,864,864,877,616,1381,7509,1505,7457,5547,
            6429,2081,5084,5084,3118,6435,1028,6457,5085,711,544,1252,6447,749,6443,741,
            6458,545,967,1815,5538,804,6390,799,6458,5085,2149,6464,1061,6464,1125,7481,
            552,616,3286,7504,3094,6481,1120,3282,6475,3091,2567,3587,3130,3090,6482,3236,
            1377,1121,3587,5540,557,3094,7507,3284,1317,7457,5547,2081,6488,2049,6488,3128,
            1806,3130,6500,3091,1423,3129,3158,7549,3094,1299,7554,1445,6496,3090,6518,3154,
            7544,525,7520,521,1887,6692,3154,7537,520,6516,557,5539,6516,3094,6496,1299,
            7520,1445,613,7533,1028,557,6536,544,5540,6500,4112,783,3329,1353,3129,549,
            6555,1351,2121,1281,1377,8146,6029,6548,808,1376,3092,37,7576,1294,1356,7122,
            544,7122,513,39,3094,7137,1313,1317,6570,3093,3587,621,3094,8161,1313,6570,
            1319,3092,3587,3128,1887,6589,5515,2527,1343,3154,6692,4112,3128,3130,6594,549,
            8171,3095,1935,583,3338,3089,3154,6601,3088,3217,3346,3222,7665,1288,8163,513,
            5543,1425,1353,613,677,7540,3130,7673,534,941,1057,6627,557,549,6636,535,
            1367,5534,6516,850,6618,941,877,167,5540,804,7540,6618,101,6617,872,5548,
            6618,1293,6645,3095,1294,1289,6607,905,544,909,6647,877,37,6659,552,549,
            6649,5548,6649,905,840,840,905,7540,5536,6516,1814,841,3169,3094,7716,941,
            5548,3094,7711,872,613,7703,3168,5658,552,6672,533,7602,529,864,6682,5540,
            936,3094,7716,5658,3129,6698,37,6701,552,5548,549,6694,1793,1927,6567,3122,
            7817,5453,1991,4112,5471,3094,6716,1441,1424,1453,1445,6692,1823,1927,1287,3447,
            1325,1287,3575,1281,3088,549,8164,5521,841,3122,6734,103,549,7606,798,769,
            2063,2081,8106,2081,8117,2081,8125,2081,8131,2081,8135,39,6024,798,3122,6763,
            797,7792,793,911,790,6024,790,848,6752,791,856,903,6024,790,786,6761,
            2144,3182,6734,3178,6734,3122,7606,5106,777,5516,841,1901,3557,7809,3423,1901,
            1383,3222,6788,3152,1822,5105,5570,6500,3120,5104,5642,3328,3170,8163,3545,2265,
            1359,2552,6727,5476,5453,1793,677,7716,4112,1441,7843,1441,7839,1312,6809,3222,
            6818,1312,621,3217,2121,1287,2424,1281,1425,6841,877,813,6840,897,897,776,
            901,6829,777,786,6837,165,6826,936,877,869,6830,5516,3351,2383,1343,6516,
            3237,5668,3198,7989,3128,6033,3238,6858,3300,6958,5066,3237,768,5642,5975,5521,
            5065,768,3090,6869,787,3329,5066,909,853,7901,3191,3126,6891,901,7907,897,
            3126,6883,3091,3122,3877,6960,909,7915,787,3091,3191,925,7919,851,3128,791,
            3527,798,841,913,167,3198,7929,5995,6906,6023,965,7947,963,798,3198,6917,
            6024,786,5995,778,6901,6023,776,782,6024,897,6901,2144,741,6901,783,3130,
            6934,3198,6933,5065,851,790,5516,5447,3198,8007,1814,5516,1879,5564,3089,5447,
            3126,6954,4110,3125,5779,5563,5447,3238,6954,5676,3281,3190,6958,3280,2207,4316,
            909,7987,787,851,6891,5975,3527,3126,6975,4110,5475,5780,3238,8006,5564,3094,
            549,8004,5563,3128,5521,6897,4596,3122,6990,5065,5515,1879,5475,3089,1927,3190,
            6997,5066,3329,1879,5476,6033,6958,657,936,912,677,8041,3094,7017,3198,8007,
            3122,6958,1991,5514,6958,3097,3290,7017,3096,1927,3587,769,2063,2081,8056,2081,
            8066,39,2081,7048,6091,6095,6106,7128,6094,6106,6099,6107,6130,6138,6133,6095,
            808,7137,6092,6106,6106,6099,7128,791,2063,7051,813,2081,7050,1287,816,813,
            3587,3250,8146,3254,7069,6107,6136,6106,6016,6095,6103,6140,7077,6130,6104,6138,
            6129,6103,6129,6016,6136,3329,808,6016,1879,6589,6129,6136,6016,808,6016,6104,
            6095,6099,808,6133,6749,6094,6130,808,6135,808,6099,6130,7105,6093,6130,5117,
            6135,6136,6749,6092,6130,5116,6749,6091,6130,808,6749,6095,6095,6095,6095,808,
            1317,816,3587,808,800,800,7132,6104,808,7125,6107,808,800,800,800,800,
            800,1312,6570,3094,769,8169,801,3093,8175,1313,8174,613,3343,7140,39,3236,
            6692,6095,808,7133,6130,808,7134,6136,808,7135,808,7136,6138,6136,6104,3587
          ]
        }
      }
styles:
  ti55:
    position: relative;
    display: inline-block;
    float: left;
    margin-right: 32px;
  displayTI55:
    position: absolute;
    left: 15%;
    top: 8%;
    width: 70%;
    height: 4%;
  .indTI55:
    font-size: 11px;
    font-family: Monaco,"Lucida Console",monospace;
    color: red;
  ind2nd:
    position: absolute;
    left: 15%;
    top: 13%;
    width: 7%;
    height: 2%;
    opacity: 0;
  indINV:
    position: absolute;
    left: 23%;
    top: 13%;
    width: 7%;
    height: 2%;
    opacity: 0;
  indDeg:
    position: absolute;
    left: 31%;
    top: 13%;
    width: 7%;
    height: 2%;
    opacity: 0;
  indRad:
    position: absolute;
    left: 39%;
    top: 13%;
    width: 7%;
    height: 2%;
    opacity: 0;
  indGrad:
    position: absolute;
    left: 47%;
    top: 13%;
    width: 7%;
    height: 2%;
    opacity: 0;
  powerTI55:
    position: absolute;
    left: 69%;
    top: 22%;
    width: 16%;
    height: 4%;
    opacity: 0;
  .diagsTI55:
    float: left;
  printTI55:
    font-family: Monaco,"Lucida Console",monospace;
  romArrayTI55:
    display: inline-block;
    max-width: 512px;
  romCellTI55:
    font-family: Monaco,"Lucida Console",monospace;
  .regRow:
    padding-left: 1em;
    font-family: Monaco,"Lucida Console",monospace;
  .regLabel:
    padding-left: 1em;
  .regDigit:
    border: 1px solid;
---

TI-55 Programmable Calculator (with Original ROM and Diagnostics)
-----------------------------------------------------------------

The TI-55 configuration below is identical to our [Original](../) configuration, except that
it includes diagnostics.

If any errors occur during operation, the Diagnostics window should display the last instruction decoded.
The window also accepts a few debugging commands.  Use '?' for help.

{% include machine.html id="ti55" config="json" %}

<div id="ti55">
  <img id="imageTI55" src="/devices/ti55/images/TI-55.png" alt="TI-55 Calculator"/>
  <div id="displayTI55"></div>
  <div id="ind2nd" class="indTI55">2nd</div>
  <div id="indINV" class="indTI55">INV</div>
  <div id="indDeg" class="indTI55">Deg</div>
  <div id="indRad" class="indTI55">Rad</div>
  <div id="indGrad" class="indTI55">Grad</div>
  <button id="powerTI55">Power</button>
</div>
<div class="diagsTI55">
  <div>
    <p>Diagnostics</p>
    <textarea id="printTI55" cols="74" rows="16"></textarea>
  </div>
  <button id="runTI55">Run</button>
  <button id="stepTI55">Step</button><span id="speedTI55">Stopped</span>
  <button id="resetTI55">Reset</button>
  <button id="clearTI55">Clear</button>
  <p>ROM Activity</p>
  <div id="romArrayTI55"></div>
  <p id="romCellTI55">[No ROM address selected]</p>
  <p>Operational Registers</p>
  <div>
  	<div class="regRow">
  	  <span class="regLabel">A</span>
  	  <span class="regDigit" id="regA-15">0</span>
  	  <span class="regDigit" id="regA-14">0</span>
  	  <span class="regDigit" id="regA-13">0</span>
  	  <span class="regDigit" id="regA-12">0</span>
  	  <span class="regDigit" id="regA-11">0</span>
  	  <span class="regDigit" id="regA-10">0</span>
  	  <span class="regDigit" id="regA-09">0</span>
  	  <span class="regDigit" id="regA-08">0</span>
  	  <span class="regDigit" id="regA-07">0</span>
  	  <span class="regDigit" id="regA-06">0</span>
  	  <span class="regDigit" id="regA-05">0</span>
  	  <span class="regDigit" id="regA-04">0</span>
  	  <span class="regDigit" id="regA-03">0</span>
  	  <span class="regDigit" id="regA-02">0</span>
  	  <span class="regDigit" id="regA-01">0</span>
  	  <span class="regDigit" id="regA-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">B</span>
  	  <span class="regDigit" id="regB-15">0</span>
  	  <span class="regDigit" id="regB-14">0</span>
  	  <span class="regDigit" id="regB-13">0</span>
  	  <span class="regDigit" id="regB-12">0</span>
  	  <span class="regDigit" id="regB-11">0</span>
  	  <span class="regDigit" id="regB-10">0</span>
  	  <span class="regDigit" id="regB-09">0</span>
  	  <span class="regDigit" id="regB-08">0</span>
  	  <span class="regDigit" id="regB-07">0</span>
  	  <span class="regDigit" id="regB-06">0</span>
  	  <span class="regDigit" id="regB-05">0</span>
  	  <span class="regDigit" id="regB-04">0</span>
  	  <span class="regDigit" id="regB-03">0</span>
  	  <span class="regDigit" id="regB-02">0</span>
  	  <span class="regDigit" id="regB-01">0</span>
  	  <span class="regDigit" id="regB-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">C</span>
  	  <span class="regDigit" id="regC-15">0</span>
  	  <span class="regDigit" id="regC-14">0</span>
  	  <span class="regDigit" id="regC-13">0</span>
  	  <span class="regDigit" id="regC-12">0</span>
  	  <span class="regDigit" id="regC-11">0</span>
  	  <span class="regDigit" id="regC-10">0</span>
  	  <span class="regDigit" id="regC-09">0</span>
  	  <span class="regDigit" id="regC-08">0</span>
  	  <span class="regDigit" id="regC-07">0</span>
  	  <span class="regDigit" id="regC-06">0</span>
  	  <span class="regDigit" id="regC-05">0</span>
  	  <span class="regDigit" id="regC-04">0</span>
  	  <span class="regDigit" id="regC-03">0</span>
  	  <span class="regDigit" id="regC-02">0</span>
  	  <span class="regDigit" id="regC-01">0</span>
  	  <span class="regDigit" id="regC-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">D</span>
  	  <span class="regDigit" id="regD-15">0</span>
  	  <span class="regDigit" id="regD-14">0</span>
  	  <span class="regDigit" id="regD-13">0</span>
  	  <span class="regDigit" id="regD-12">0</span>
  	  <span class="regDigit" id="regD-11">0</span>
  	  <span class="regDigit" id="regD-10">0</span>
  	  <span class="regDigit" id="regD-09">0</span>
  	  <span class="regDigit" id="regD-08">0</span>
  	  <span class="regDigit" id="regD-07">0</span>
  	  <span class="regDigit" id="regD-06">0</span>
  	  <span class="regDigit" id="regD-05">0</span>
  	  <span class="regDigit" id="regD-04">0</span>
  	  <span class="regDigit" id="regD-03">0</span>
  	  <span class="regDigit" id="regD-02">0</span>
  	  <span class="regDigit" id="regD-01">0</span>
  	  <span class="regDigit" id="regD-00">0</span>
  	</div>
  </div>
  <p>Storage Registers</p>
  <div>
  	<div class="regRow">
  	  <span class="regLabel">X0</span>
  	  <span class="regDigit" id="regX0-15">0</span>
  	  <span class="regDigit" id="regX0-14">0</span>
  	  <span class="regDigit" id="regX0-13">0</span>
  	  <span class="regDigit" id="regX0-12">0</span>
  	  <span class="regDigit" id="regX0-11">0</span>
  	  <span class="regDigit" id="regX0-10">0</span>
  	  <span class="regDigit" id="regX0-09">0</span>
  	  <span class="regDigit" id="regX0-08">0</span>
  	  <span class="regDigit" id="regX0-07">0</span>
  	  <span class="regDigit" id="regX0-06">0</span>
  	  <span class="regDigit" id="regX0-05">0</span>
  	  <span class="regDigit" id="regX0-04">0</span>
  	  <span class="regDigit" id="regX0-03">0</span>
  	  <span class="regDigit" id="regX0-02">0</span>
  	  <span class="regDigit" id="regX0-01">0</span>
  	  <span class="regDigit" id="regX0-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">X1</span>
  	  <span class="regDigit" id="regX1-15">0</span>
  	  <span class="regDigit" id="regX1-14">0</span>
  	  <span class="regDigit" id="regX1-13">0</span>
  	  <span class="regDigit" id="regX1-12">0</span>
  	  <span class="regDigit" id="regX1-11">0</span>
  	  <span class="regDigit" id="regX1-10">0</span>
  	  <span class="regDigit" id="regX1-09">0</span>
  	  <span class="regDigit" id="regX1-08">0</span>
  	  <span class="regDigit" id="regX1-07">0</span>
  	  <span class="regDigit" id="regX1-06">0</span>
  	  <span class="regDigit" id="regX1-05">0</span>
  	  <span class="regDigit" id="regX1-04">0</span>
  	  <span class="regDigit" id="regX1-03">0</span>
  	  <span class="regDigit" id="regX1-02">0</span>
  	  <span class="regDigit" id="regX1-01">0</span>
  	  <span class="regDigit" id="regX1-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">X2</span>
  	  <span class="regDigit" id="regX2-15">0</span>
  	  <span class="regDigit" id="regX2-14">0</span>
  	  <span class="regDigit" id="regX2-13">0</span>
  	  <span class="regDigit" id="regX2-12">0</span>
  	  <span class="regDigit" id="regX2-11">0</span>
  	  <span class="regDigit" id="regX2-10">0</span>
  	  <span class="regDigit" id="regX2-09">0</span>
  	  <span class="regDigit" id="regX2-08">0</span>
  	  <span class="regDigit" id="regX2-07">0</span>
  	  <span class="regDigit" id="regX2-06">0</span>
  	  <span class="regDigit" id="regX2-05">0</span>
  	  <span class="regDigit" id="regX2-04">0</span>
  	  <span class="regDigit" id="regX2-03">0</span>
  	  <span class="regDigit" id="regX2-02">0</span>
  	  <span class="regDigit" id="regX2-01">0</span>
  	  <span class="regDigit" id="regX2-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">X3</span>
  	  <span class="regDigit" id="regX3-15">0</span>
  	  <span class="regDigit" id="regX3-14">0</span>
  	  <span class="regDigit" id="regX3-13">0</span>
  	  <span class="regDigit" id="regX3-12">0</span>
  	  <span class="regDigit" id="regX3-11">0</span>
  	  <span class="regDigit" id="regX3-10">0</span>
  	  <span class="regDigit" id="regX3-09">0</span>
  	  <span class="regDigit" id="regX3-08">0</span>
  	  <span class="regDigit" id="regX3-07">0</span>
  	  <span class="regDigit" id="regX3-06">0</span>
  	  <span class="regDigit" id="regX3-05">0</span>
  	  <span class="regDigit" id="regX3-04">0</span>
  	  <span class="regDigit" id="regX3-03">0</span>
  	  <span class="regDigit" id="regX3-02">0</span>
  	  <span class="regDigit" id="regX3-01">0</span>
  	  <span class="regDigit" id="regX3-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">X4</span>
  	  <span class="regDigit" id="regX4-15">0</span>
  	  <span class="regDigit" id="regX4-14">0</span>
  	  <span class="regDigit" id="regX4-13">0</span>
  	  <span class="regDigit" id="regX4-12">0</span>
  	  <span class="regDigit" id="regX4-11">0</span>
  	  <span class="regDigit" id="regX4-10">0</span>
  	  <span class="regDigit" id="regX4-09">0</span>
  	  <span class="regDigit" id="regX4-08">0</span>
  	  <span class="regDigit" id="regX4-07">0</span>
  	  <span class="regDigit" id="regX4-06">0</span>
  	  <span class="regDigit" id="regX4-05">0</span>
  	  <span class="regDigit" id="regX4-04">0</span>
  	  <span class="regDigit" id="regX4-03">0</span>
  	  <span class="regDigit" id="regX4-02">0</span>
  	  <span class="regDigit" id="regX4-01">0</span>
  	  <span class="regDigit" id="regX4-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">X5</span>
  	  <span class="regDigit" id="regX5-15">0</span>
  	  <span class="regDigit" id="regX5-14">0</span>
  	  <span class="regDigit" id="regX5-13">0</span>
  	  <span class="regDigit" id="regX5-12">0</span>
  	  <span class="regDigit" id="regX5-11">0</span>
  	  <span class="regDigit" id="regX5-10">0</span>
  	  <span class="regDigit" id="regX5-09">0</span>
  	  <span class="regDigit" id="regX5-08">0</span>
  	  <span class="regDigit" id="regX5-07">0</span>
  	  <span class="regDigit" id="regX5-06">0</span>
  	  <span class="regDigit" id="regX5-05">0</span>
  	  <span class="regDigit" id="regX5-04">0</span>
  	  <span class="regDigit" id="regX5-03">0</span>
  	  <span class="regDigit" id="regX5-02">0</span>
  	  <span class="regDigit" id="regX5-01">0</span>
  	  <span class="regDigit" id="regX5-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">X6</span>
  	  <span class="regDigit" id="regX6-15">0</span>
  	  <span class="regDigit" id="regX6-14">0</span>
  	  <span class="regDigit" id="regX6-13">0</span>
  	  <span class="regDigit" id="regX6-12">0</span>
  	  <span class="regDigit" id="regX6-11">0</span>
  	  <span class="regDigit" id="regX6-10">0</span>
  	  <span class="regDigit" id="regX6-09">0</span>
  	  <span class="regDigit" id="regX6-08">0</span>
  	  <span class="regDigit" id="regX6-07">0</span>
  	  <span class="regDigit" id="regX6-06">0</span>
  	  <span class="regDigit" id="regX6-05">0</span>
  	  <span class="regDigit" id="regX6-04">0</span>
  	  <span class="regDigit" id="regX6-03">0</span>
  	  <span class="regDigit" id="regX6-02">0</span>
  	  <span class="regDigit" id="regX6-01">0</span>
  	  <span class="regDigit" id="regX6-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">X7</span>
  	  <span class="regDigit" id="regX7-15">0</span>
  	  <span class="regDigit" id="regX7-14">0</span>
  	  <span class="regDigit" id="regX7-13">0</span>
  	  <span class="regDigit" id="regX7-12">0</span>
  	  <span class="regDigit" id="regX7-11">0</span>
  	  <span class="regDigit" id="regX7-10">0</span>
  	  <span class="regDigit" id="regX7-09">0</span>
  	  <span class="regDigit" id="regX7-08">0</span>
  	  <span class="regDigit" id="regX7-07">0</span>
  	  <span class="regDigit" id="regX7-06">0</span>
  	  <span class="regDigit" id="regX7-05">0</span>
  	  <span class="regDigit" id="regX7-04">0</span>
  	  <span class="regDigit" id="regX7-03">0</span>
  	  <span class="regDigit" id="regX7-02">0</span>
  	  <span class="regDigit" id="regX7-01">0</span>
  	  <span class="regDigit" id="regX7-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y0</span>
  	  <span class="regDigit" id="regY0-15">0</span>
  	  <span class="regDigit" id="regY0-14">0</span>
  	  <span class="regDigit" id="regY0-13">0</span>
  	  <span class="regDigit" id="regY0-12">0</span>
  	  <span class="regDigit" id="regY0-11">0</span>
  	  <span class="regDigit" id="regY0-10">0</span>
  	  <span class="regDigit" id="regY0-09">0</span>
  	  <span class="regDigit" id="regY0-08">0</span>
  	  <span class="regDigit" id="regY0-07">0</span>
  	  <span class="regDigit" id="regY0-06">0</span>
  	  <span class="regDigit" id="regY0-05">0</span>
  	  <span class="regDigit" id="regY0-04">0</span>
  	  <span class="regDigit" id="regY0-03">0</span>
  	  <span class="regDigit" id="regY0-02">0</span>
  	  <span class="regDigit" id="regY0-01">0</span>
  	  <span class="regDigit" id="regY0-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y1</span>
  	  <span class="regDigit" id="regY1-15">0</span>
  	  <span class="regDigit" id="regY1-14">0</span>
  	  <span class="regDigit" id="regY1-13">0</span>
  	  <span class="regDigit" id="regY1-12">0</span>
  	  <span class="regDigit" id="regY1-11">0</span>
  	  <span class="regDigit" id="regY1-10">0</span>
  	  <span class="regDigit" id="regY1-09">0</span>
  	  <span class="regDigit" id="regY1-08">0</span>
  	  <span class="regDigit" id="regY1-07">0</span>
  	  <span class="regDigit" id="regY1-06">0</span>
  	  <span class="regDigit" id="regY1-05">0</span>
  	  <span class="regDigit" id="regY1-04">0</span>
  	  <span class="regDigit" id="regY1-03">0</span>
  	  <span class="regDigit" id="regY1-02">0</span>
  	  <span class="regDigit" id="regY1-01">0</span>
  	  <span class="regDigit" id="regY1-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y2</span>
  	  <span class="regDigit" id="regY2-15">0</span>
  	  <span class="regDigit" id="regY2-14">0</span>
  	  <span class="regDigit" id="regY2-13">0</span>
  	  <span class="regDigit" id="regY2-12">0</span>
  	  <span class="regDigit" id="regY2-11">0</span>
  	  <span class="regDigit" id="regY2-10">0</span>
  	  <span class="regDigit" id="regY2-09">0</span>
  	  <span class="regDigit" id="regY2-08">0</span>
  	  <span class="regDigit" id="regY2-07">0</span>
  	  <span class="regDigit" id="regY2-06">0</span>
  	  <span class="regDigit" id="regY2-05">0</span>
  	  <span class="regDigit" id="regY2-04">0</span>
  	  <span class="regDigit" id="regY2-03">0</span>
  	  <span class="regDigit" id="regY2-02">0</span>
  	  <span class="regDigit" id="regY2-01">0</span>
  	  <span class="regDigit" id="regY2-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y3</span>
  	  <span class="regDigit" id="regY3-15">0</span>
  	  <span class="regDigit" id="regY3-14">0</span>
  	  <span class="regDigit" id="regY3-13">0</span>
  	  <span class="regDigit" id="regY3-12">0</span>
  	  <span class="regDigit" id="regY3-11">0</span>
  	  <span class="regDigit" id="regY3-10">0</span>
  	  <span class="regDigit" id="regY3-09">0</span>
  	  <span class="regDigit" id="regY3-08">0</span>
  	  <span class="regDigit" id="regY3-07">0</span>
  	  <span class="regDigit" id="regY3-06">0</span>
  	  <span class="regDigit" id="regY3-05">0</span>
  	  <span class="regDigit" id="regY3-04">0</span>
  	  <span class="regDigit" id="regY3-03">0</span>
  	  <span class="regDigit" id="regY3-02">0</span>
  	  <span class="regDigit" id="regY3-01">0</span>
  	  <span class="regDigit" id="regY3-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y4</span>
  	  <span class="regDigit" id="regY4-15">0</span>
  	  <span class="regDigit" id="regY4-14">0</span>
  	  <span class="regDigit" id="regY4-13">0</span>
  	  <span class="regDigit" id="regY4-12">0</span>
  	  <span class="regDigit" id="regY4-11">0</span>
  	  <span class="regDigit" id="regY4-10">0</span>
  	  <span class="regDigit" id="regY4-09">0</span>
  	  <span class="regDigit" id="regY4-08">0</span>
  	  <span class="regDigit" id="regY4-07">0</span>
  	  <span class="regDigit" id="regY4-06">0</span>
  	  <span class="regDigit" id="regY4-05">0</span>
  	  <span class="regDigit" id="regY4-04">0</span>
  	  <span class="regDigit" id="regY4-03">0</span>
  	  <span class="regDigit" id="regY4-02">0</span>
  	  <span class="regDigit" id="regY4-01">0</span>
  	  <span class="regDigit" id="regY4-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y5</span>
  	  <span class="regDigit" id="regY5-15">0</span>
  	  <span class="regDigit" id="regY5-14">0</span>
  	  <span class="regDigit" id="regY5-13">0</span>
  	  <span class="regDigit" id="regY5-12">0</span>
  	  <span class="regDigit" id="regY5-11">0</span>
  	  <span class="regDigit" id="regY5-10">0</span>
  	  <span class="regDigit" id="regY5-09">0</span>
  	  <span class="regDigit" id="regY5-08">0</span>
  	  <span class="regDigit" id="regY5-07">0</span>
  	  <span class="regDigit" id="regY5-06">0</span>
  	  <span class="regDigit" id="regY5-05">0</span>
  	  <span class="regDigit" id="regY5-04">0</span>
  	  <span class="regDigit" id="regY5-03">0</span>
  	  <span class="regDigit" id="regY5-02">0</span>
  	  <span class="regDigit" id="regY5-01">0</span>
  	  <span class="regDigit" id="regY5-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y6</span>
  	  <span class="regDigit" id="regY6-15">0</span>
  	  <span class="regDigit" id="regY6-14">0</span>
  	  <span class="regDigit" id="regY6-13">0</span>
  	  <span class="regDigit" id="regY6-12">0</span>
  	  <span class="regDigit" id="regY6-11">0</span>
  	  <span class="regDigit" id="regY6-10">0</span>
  	  <span class="regDigit" id="regY6-09">0</span>
  	  <span class="regDigit" id="regY6-08">0</span>
  	  <span class="regDigit" id="regY6-07">0</span>
  	  <span class="regDigit" id="regY6-06">0</span>
  	  <span class="regDigit" id="regY6-05">0</span>
  	  <span class="regDigit" id="regY6-04">0</span>
  	  <span class="regDigit" id="regY6-03">0</span>
  	  <span class="regDigit" id="regY6-02">0</span>
  	  <span class="regDigit" id="regY6-01">0</span>
  	  <span class="regDigit" id="regY6-00">0</span>
  	</div>
  	<div class="regRow">
  	  <span class="regLabel">Y7</span>
  	  <span class="regDigit" id="regY7-15">0</span>
  	  <span class="regDigit" id="regY7-14">0</span>
  	  <span class="regDigit" id="regY7-13">0</span>
  	  <span class="regDigit" id="regY7-12">0</span>
  	  <span class="regDigit" id="regY7-11">0</span>
  	  <span class="regDigit" id="regY7-10">0</span>
  	  <span class="regDigit" id="regY7-09">0</span>
  	  <span class="regDigit" id="regY7-08">0</span>
  	  <span class="regDigit" id="regY7-07">0</span>
  	  <span class="regDigit" id="regY7-06">0</span>
  	  <span class="regDigit" id="regY7-05">0</span>
  	  <span class="regDigit" id="regY7-04">0</span>
  	  <span class="regDigit" id="regY7-03">0</span>
  	  <span class="regDigit" id="regY7-02">0</span>
  	  <span class="regDigit" id="regY7-01">0</span>
  	  <span class="regDigit" id="regY7-00">0</span>
  	</div>
  </div>
</div>