// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['de-sn-14627000-14627090', 0],
    ['de-sn-14627000-14627120', 1],
    ['de-sn-14625000-14625480', 2],
    ['de-sn-14625000-14625010', 3],
    ['de-sn-14627000-14627200', 4],
    ['de-sn-14627000-14627190', 5],
    ['de-sn-14524000-14524240', 6],
    ['de-sn-14627000-14627020', 7],
    ['de-sn-14521000-14521140', 8],
    ['de-sn-14625000-14625640', 9],
    ['de-sn-14625000-14625330', 10],
    ['de-sn-14628000-14628070', 11],
    ['de-sn-14628000-14628270', 12],
    ['de-sn-14625000-14625340', 13],
    ['de-sn-14625000-14625610', 14],
    ['de-sn-14729000-14729250', 15],
    ['de-sn-14729000-14729070', 16],
    ['de-sn-14625000-14625600', 17],
    ['de-sn-14625000-14625320', 18],
    ['de-sn-14627000-14627050', 19],
    ['de-sn-14627000-14627340', 20],
    ['de-sn-14625000-14625040', 21],
    ['de-sn-14625000-14625100', 22],
    ['de-sn-14625000-14625110', 23],
    ['de-sn-14625000-14625530', 24],
    ['de-sn-14729000-14729060', 25],
    ['de-sn-14522000-14522010', 26],
    ['de-sn-14522000-14522070', 27],
    ['de-sn-14523000-14523330', 28],
    ['de-sn-14521000-14521030', 29],
    ['de-sn-14521000-14521530', 30],
    ['de-sn-14523000-14523320', 31],
    ['de-sn-14523000-14523050', 32],
    ['de-sn-14523000-14523420', 33],
    ['de-sn-14625000-14625470', 34],
    ['de-sn-14625000-14625080', 35],
    ['de-sn-14625000-14625540', 36],
    ['de-sn-14625000-14625420', 37],
    ['de-sn-14625000-14625350', 38],
    ['de-sn-14626000-14626600', 39],
    ['de-sn-14626000-14626100', 40],
    ['de-sn-14625000-14625440', 41],
    ['de-sn-14521000-14521280', 42],
    ['de-sn-14521000-14521470', 43],
    ['de-sn-14626000-14626200', 44],
    ['de-sn-14626000-14626160', 45],
    ['de-sn-14625000-14625280', 46],
    ['de-sn-14625000-14625500', 47],
    ['de-sn-14626000-14626480', 48],
    ['de-sn-14626000-14626460', 49],
    ['de-sn-14626000-14626590', 50],
    ['de-sn-14524000-14524270', 51],
    ['de-sn-14523000-14523460', 52],
    ['de-sn-14523000-14523290', 53],
    ['de-sn-14523000-14523130', 54],
    ['de-sn-14523000-14523370', 55],
    ['de-sn-14523000-14523200', 56],
    ['de-sn-14729000-14729090', 57],
    ['de-sn-14729000-14729320', 58],
    ['de-sn-14729000-14729110', 59],
    ['de-sn-14729000-14729330', 60],
    ['de-sn-14729000-14729050', 61],
    ['de-sn-14524000-14524180', 62],
    ['de-sn-14625000-14625170', 63],
    ['de-sn-14625000-14625140', 64],
    ['de-sn-14524000-14524060', 65],
    ['de-sn-14626000-14626440', 66],
    ['de-sn-14626000-14626320', 67],
    ['de-sn-14628000-14628390', 68],
    ['de-sn-14628000-14628370', 69],
    ['de-sn-14626000-14626020', 70],
    ['de-sn-14626000-14626350', 71],
    ['de-sn-14626000-14626580', 72],
    ['de-sn-14626000-14626190', 73],
    ['de-sn-14625000-14625510', 74],
    ['de-sn-14521000-14521640', 75],
    ['de-sn-14521000-14521710', 76],
    ['de-sn-14625000-14625410', 77],
    ['de-sn-14522000-14522220', 78],
    ['de-sn-14627000-14627230', 79],
    ['de-sn-14729000-14729080', 80],
    ['de-sn-14522000-14522600', 81],
    ['de-sn-14522000-14522510', 82],
    ['de-sn-14521000-14521440', 83],
    ['de-sn-14521000-14521130', 84],
    ['de-sn-14521000-14521360', 85],
    ['de-sn-14521000-14521270', 86],
    ['de-sn-14521000-14521090', 87],
    ['de-sn-14521000-14521510', 88],
    ['de-sn-14521000-14521180', 89],
    ['de-sn-14521000-14521600', 90],
    ['de-sn-14524000-14524290', 91],
    ['de-sn-14729000-14729020', 92],
    ['de-sn-14524000-14524040', 93],
    ['de-sn-14729000-14729190', 94],
    ['de-sn-14729000-14729260', 95],
    ['de-sn-14628000-14628020', 96],
    ['de-sn-14628000-14628010', 97],
    ['de-sn-14628000-14628130', 98],
    ['de-sn-14729000-14729040', 99],
    ['de-sn-14729000-14729410', 100],
    ['de-sn-14524000-14524110', 101],
    ['de-sn-14523000-14523170', 102],
    ['de-sn-14627000-14627010', 103],
    ['de-sn-14627000-14627150', 104],
    ['de-sn-14729000-14729030', 105],
    ['de-sn-14523000-14523380', 106],
    ['de-sn-14521000-14521540', 107],
    ['de-sn-14628000-14628320', 108],
    ['de-sn-14628000-14628030', 109],
    ['de-sn-14626000-14626370', 110],
    ['de-sn-14522000-14522020', 111],
    ['de-sn-14626000-14626210', 112],
    ['de-sn-14523000-14523410', 113],
    ['de-sn-14522000-14522320', 114],
    ['de-sn-14626000-14626280', 115],
    ['de-sn-14626000-14626530', 116],
    ['de-sn-14625000-14625430', 117],
    ['de-sn-14627000-14627220', 118],
    ['de-sn-14625000-14625220', 119],
    ['de-sn-14521000-14521290', 120],
    ['de-sn-14524000-14524160', 121],
    ['de-sn-14729000-14729160', 122],
    ['de-sn-14524000-14524020', 123],
    ['de-sn-14524000-14524280', 124],
    ['de-sn-14521000-14521590', 125],
    ['de-sn-14521000-14521420', 126],
    ['de-sn-14521000-14521620', 127],
    ['de-sn-14522000-14522200', 128],
    ['de-sn-14521000-14521120', 129],
    ['de-sn-14522000-14522190', 130],
    ['de-sn-14522000-14522290', 131],
    ['de-sn-14521000-14521250', 132],
    ['de-sn-14521000-14521630', 133],
    ['de-sn-14522000-14522390', 134],
    ['de-sn-14524000-14524230', 135],
    ['de-sn-14524000-14524010', 136],
    ['de-sn-14524000-14524140', 137],
    ['de-sn-14524000-14524210', 138],
    ['de-sn-14729000-14729290', 139],
    ['de-sn-14522000-14522580', 140],
    ['de-sn-14521000-14521240', 141],
    ['de-sn-14524000-14524120', 142],
    ['de-sn-14522000-14522340', 143],
    ['de-sn-14522000-14522110', 144],
    ['de-sn-14729000-14729100', 145],
    ['de-sn-14729000-14729170', 146],
    ['de-sn-14729000-14729430', 147],
    ['de-sn-14626000-14626570', 148],
    ['de-sn-14626000-14626240', 149],
    ['de-sn-14626000-14626450', 150],
    ['de-sn-14626000-14626230', 151],
    ['de-sn-14729000-14729220', 152],
    ['de-sn-14625000-14625590', 153],
    ['de-sn-14625000-14625380', 154],
    ['de-sn-14628000-14628260', 155],
    ['de-sn-14523000-14523360', 156],
    ['de-sn-14523000-14523430', 157],
    ['de-sn-14522000-14522470', 158],
    ['de-sn-14522000-14522520', 159],
    ['de-sn-14628000-14628205', 160],
    ['de-sn-14628000-14628400', 161],
    ['de-sn-14626000-14626050', 162],
    ['de-sn-14626000-14626310', 163],
    ['de-sn-14524000-14524170', 164],
    ['de-sn-14523000-14523150', 165],
    ['de-sn-14523000-14523280', 166],
    ['de-sn-14625000-14625030', 167],
    ['de-sn-14626000-14626060', 168],
    ['de-sn-14625000-14625160', 169],
    ['de-sn-14521000-14521460', 170],
    ['de-sn-14524000-14524200', 171],
    ['de-sn-14524000-14524250', 172],
    ['de-sn-14522000-14522050', 173],
    ['de-sn-14522000-14522430', 174],
    ['de-sn-14522000-14522230', 175],
    ['de-sn-14628000-14628380', 176],
    ['de-sn-14627000-14627290', 177],
    ['de-sn-14522000-14522620', 178],
    ['de-sn-14627000-14627130', 179],
    ['de-sn-14522000-14522450', 180],
    ['de-sn-14627000-14627080', 181],
    ['de-sn-14626000-14626610', 182],
    ['de-sn-14626000-14626140', 183],
    ['de-sn-14626000-14626170', 184],
    ['de-sn-14627000-14627310', 185],
    ['de-sn-14627000-14627140', 186],
    ['de-sn-14524000-14524220', 187],
    ['de-sn-14522000-14522460', 188],
    ['de-sn-14729000-14729230', 189],
    ['de-sn-14729000-14729150', 190],
    ['de-sn-14522000-14522490', 191],
    ['de-sn-14522000-14522280', 192],
    ['de-sn-14625000-14625200', 193],
    ['de-sn-14626000-14626400', 194],
    ['de-sn-14524000-14524260', 195],
    ['de-sn-14524000-14524190', 196],
    ['de-sn-14628000-14628140', 197],
    ['de-sn-14627000-14627360', 198],
    ['de-sn-14521000-14521220', 199],
    ['de-sn-14521000-14521690', 200],
    ['de-sn-14521000-14521010', 201],
    ['de-sn-14521000-14521150', 202],
    ['de-sn-14523000-14523270', 203],
    ['de-sn-14521000-14521380', 204],
    ['de-sn-14521000-14521160', 205],
    ['de-sn-14521000-14521610', 206],
    ['de-sn-14521000-14521080', 207],
    ['de-sn-14521000-14521700', 208],
    ['de-sn-14521000-14521550', 209],
    ['de-sn-14521000-14521340', 210],
    ['de-sn-14521000-14521400', 211],
    ['de-sn-14521000-14521060', 212],
    ['de-sn-14523000-14523160', 213],
    ['de-sn-14523000-14523110', 214],
    ['de-sn-14625000-14625050', 215],
    ['de-sn-14521000-14521100', 216],
    ['de-sn-14524000-14524150', 217],
    ['de-sn-14524000-14524130', 218],
    ['de-sn-14524000-14524320', 219],
    ['de-sn-14626000-14626085', 220],
    ['de-sn-14521000-14521200', 221],
    ['de-sn-14523000-14523250', 222],
    ['de-sn-14729000-14729380', 223],
    ['de-sn-14625000-14625290', 224],
    ['de-sn-14625000-14625090', 225],
    ['de-sn-14729000-14729370', 226],
    ['de-sn-14627000-14627040', 227],
    ['de-sn-14523000-14523010', 228],
    ['de-sn-14627000-14627180', 229],
    ['de-sn-14522000-14522480', 230],
    ['de-sn-14521000-14521110', 231],
    ['de-sn-14521000-14521170', 232],
    ['de-sn-14522000-14522530', 233],
    ['de-sn-14522000-14522360', 234],
    ['de-sn-14628000-14628250', 235],
    ['de-sn-14628000-14628040', 236],
    ['de-sn-14522000-14522150', 237],
    ['de-sn-14522000-14522420', 238],
    ['de-sn-14628000-14628300', 239],
    ['de-sn-14729000-14729140', 240],
    ['de-sn-14628000-14628220', 241],
    ['de-sn-14524000-14524070', 242],
    ['de-sn-14626000-14626245', 243],
    ['de-sn-14729000-14729010', 244],
    ['de-sn-14522000-14522260', 245],
    ['de-sn-14522000-14522060', 246],
    ['de-sn-14522000-14522350', 247],
    ['de-sn-14522000-14522550', 248],
    ['de-sn-14522000-14522540', 249],
    ['de-sn-14522000-14522300', 250],
    ['de-sn-14626000-14626010', 251],
    ['de-sn-14627000-14627170', 252],
    ['de-sn-14521000-14521020', 253],
    ['de-sn-14521000-14521560', 254],
    ['de-sn-14626000-14626180', 255],
    ['de-sn-14521000-14521450', 256],
    ['de-sn-14627000-14627280', 257],
    ['de-sn-14626000-14626270', 258],
    ['de-sn-14522000-14522440', 259],
    ['de-sn-14626000-14626030', 260],
    ['de-sn-14626000-14626300', 261],
    ['de-sn-14626000-14626470', 262],
    ['de-sn-14626000-14626540', 263],
    ['de-sn-14729000-14729340', 264],
    ['de-sn-14626000-14626510', 265],
    ['de-sn-14522000-14522370', 266],
    ['de-sn-14522000-14522080', 267],
    ['de-sn-14729000-14729360', 268],
    ['de-sn-14524000-14524080', 269],
    ['de-sn-14524000-14524330', 270],
    ['de-sn-14524000-14524050', 271],
    ['de-sn-14524000-14524030', 272],
    ['de-sn-14626000-14626330', 273],
    ['de-sn-14626000-14626520', 274],
    ['de-sn-14524000-14524090', 275],
    ['de-sn-14521000-14521370', 276],
    ['de-sn-14522000-14522380', 277],
    ['de-sn-14524000-14524310', 278],
    ['de-sn-14522000-14522330', 279],
    ['de-sn-14521000-14521210', 280],
    ['de-sn-14521000-14521230', 281],
    ['de-sn-14521000-14521040', 282],
    ['de-sn-14628000-14628310', 283],
    ['de-sn-14628000-14628190', 284],
    ['de-sn-14521000-14521490', 285],
    ['de-sn-14628000-14628210', 286],
    ['de-sn-14626000-14626070', 287],
    ['de-sn-14522000-14522500', 288],
    ['de-sn-14521000-14521050', 289],
    ['de-sn-14626000-14626390', 290],
    ['de-sn-14521000-14521390', 291],
    ['de-sn-14521000-14521670', 292],
    ['de-sn-14523000-14523190', 293],
    ['de-sn-14523000-14523340', 294],
    ['de-sn-14523000-14523100', 295],
    ['de-sn-14523000-14523260', 296],
    ['de-sn-14626000-14626410', 297],
    ['de-sn-14625000-14625560', 298],
    ['de-sn-14625000-14625525', 299],
    ['de-sn-14522000-14522120', 300],
    ['de-sn-14626000-14626150', 301],
    ['de-sn-14522000-14522590', 302],
    ['de-sn-14522000-14522170', 303],
    ['de-sn-14625000-14625630', 304],
    ['de-sn-14627000-14627100', 305],
    ['de-sn-14627000-14627210', 306],
    ['de-sn-14522000-14522090', 307],
    ['de-sn-14522000-14522250', 308],
    ['de-sn-14729000-14729300', 309],
    ['de-sn-14729000-14729400', 310],
    ['de-sn-14628000-14628170', 311],
    ['de-sn-14521000-14521260', 312],
    ['de-sn-14521000-14521570', 313],
    ['de-sn-14521000-14521500', 314],
    ['de-sn-14628000-14628350', 315],
    ['de-sn-14628000-14628150', 316],
    ['de-sn-14628000-14628060', 317],
    ['de-sn-14511000-14511000', 318],
    ['de-sn-14522000-14522140', 319],
    ['de-sn-14626000-14626250', 320],
    ['de-sn-14521000-14521310', 321],
    ['de-sn-14523000-14523450', 322],
    ['de-sn-14523000-14523440', 323],
    ['de-sn-14628000-14628410', 324],
    ['de-sn-14522000-14522240', 325],
    ['de-sn-14522000-14522035', 326],
    ['de-sn-14522000-14522180', 327],
    ['de-sn-14628000-14628360', 328],
    ['de-sn-14523000-14523020', 329],
    ['de-sn-14625000-14625490', 330],
    ['de-sn-14625000-14625060', 331],
    ['de-sn-14628000-14628100', 332],
    ['de-sn-14625000-14625130', 333],
    ['de-sn-14521000-14521520', 334],
    ['de-sn-14628000-14628080', 335],
    ['de-sn-14522000-14522400', 336],
    ['de-sn-14521000-14521430', 337],
    ['de-sn-14625000-14625150', 338],
    ['de-sn-14523000-14523365', 339],
    ['de-sn-14523000-14523350', 340],
    ['de-sn-14523000-14523230', 341],
    ['de-sn-14523000-14523080', 342],
    ['de-sn-14523000-14523245', 343],
    ['de-sn-14625000-14625360', 344],
    ['de-sn-14626000-14626260', 345],
    ['de-sn-14625000-14625190', 346],
    ['de-sn-14625000-14625020', 347],
    ['de-sn-14626000-14626120', 348],
    ['de-sn-14626000-14626560', 349],
    ['de-sn-14523000-14523090', 350],
    ['de-sn-14523000-14523120', 351],
    ['de-sn-14627000-14627070', 352],
    ['de-sn-14625000-14625450', 353],
    ['de-sn-14625000-14625180', 354],
    ['de-sn-14625000-14625270', 355],
    ['de-sn-14627000-14627260', 356],
    ['de-sn-14713000-14713000', 357],
    ['de-sn-14729000-14729350', 358],
    ['de-sn-14625000-14625300', 359],
    ['de-sn-14625000-14625230', 360],
    ['de-sn-14626000-14626290', 361],
    ['de-sn-14522000-14522570', 362],
    ['de-sn-14628000-14628050', 363],
    ['de-sn-14628000-14628110', 364],
    ['de-sn-14612000-14612000', 365],
    ['de-sn-14625000-14625390', 366],
    ['de-sn-14625000-14625460', 367],
    ['de-sn-14523000-14523310', 368],
    ['de-sn-14729000-14729245', 369],
    ['de-sn-14627000-14627250', 370],
    ['de-sn-14626000-14626420', 371],
    ['de-sn-14522000-14522310', 372],
    ['de-sn-14628000-14628340', 373],
    ['de-sn-14628000-14628330', 374],
    ['de-sn-14625000-14625550', 375],
    ['de-sn-14626000-14626430', 376],
    ['de-sn-14627000-14627060', 377],
    ['de-sn-14523000-14523030', 378],
    ['de-sn-14627000-14627240', 379],
    ['de-sn-14625000-14625570', 380],
    ['de-sn-14627000-14627270', 381],
    ['de-sn-14521000-14521330', 382],
    ['de-sn-14521000-14521320', 383],
    ['de-sn-14628000-14628230', 384],
    ['de-sn-14626000-14626110', 385],
    ['de-sn-14729000-14729270', 386],
    ['de-sn-14627000-14627110', 387],
    ['de-sn-14523000-14523060', 388],
    ['de-sn-14522000-14522210', 389],
    ['de-sn-14625000-14625120', 390],
    ['de-sn-14626000-14626490', 391],
    ['de-sn-14625000-14625310', 392],
    ['de-sn-14625000-14625250', 393],
    ['de-sn-14625000-14625580', 394],
    ['de-sn-14524000-14524300', 395],
    ['de-sn-14627000-14627030', 396],
    ['de-sn-14524000-14524100', 397],
    ['de-sn-14523000-14523300', 398],
    ['de-sn-14523000-14523040', 399],
    ['de-sn-14521000-14521410', 400],
    ['de-sn-14628000-14628240', 401],
    ['de-sn-14626000-14626500', 402],
    ['de-sn-14628000-14628090', 403],
    ['de-sn-14521000-14521355', 404],
    ['de-sn-14625000-14625370', 405],
    ['de-sn-14628000-14628160', 406],
    ['de-sn-14625000-14625240', 407],
    ['undefined', 408]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/de/de-sn-all-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/de/de-sn-all-all.js">Sachsen</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
