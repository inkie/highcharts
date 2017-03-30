// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['gl', 0],
    ['sh', 1],
    ['bu', 2],
    ['lk', 3],
    ['as', 4],
    ['dk', 5],
    ['fo', 6],
    ['gu', 7],
    ['mp', 8],
    ['pr', 9],
    ['um', 10],
    ['us', 11],
    ['vi', 12],
    ['ca', 13],
    ['st', 14],
    ['jp', 15],
    ['cv', 16],
    ['dm', 17],
    ['sc', 18],
    ['jm', 19],
    ['ws', 20],
    ['om', 21],
    ['in', 22],
    ['vc', 23],
    ['sb', 24],
    ['lc', 25],
    ['fr', 26],
    ['nr', 27],
    ['no', 28],
    ['fm', 29],
    ['kn', 30],
    ['cn', 31],
    ['bh', 32],
    ['to', 33],
    ['id', 34],
    ['mu', 35],
    ['se', 36],
    ['tt', 37],
    ['sw', 38],
    ['bs', 39],
    ['pw', 40],
    ['ec', 41],
    ['au', 42],
    ['tv', 43],
    ['mh', 44],
    ['cl', 45],
    ['ki', 46],
    ['ph', 47],
    ['gd', 48],
    ['ee', 49],
    ['ag', 50],
    ['es', 51],
    ['bb', 52],
    ['it', 53],
    ['mt', 54],
    ['mv', 55],
    ['sp', 56],
    ['pg', 57],
    ['vu', 58],
    ['sg', 59],
    ['gb', 60],
    ['cy', 61],
    ['gr', 62],
    ['km', 63],
    ['fj', 64],
    ['ru', 65],
    ['va', 66],
    ['sm', 67],
    ['am', 68],
    ['az', 69],
    ['ls', 70],
    ['tj', 71],
    ['ml', 72],
    ['dz', 73],
    ['co', 74],
    ['tw', 75],
    ['uz', 76],
    ['tz', 77],
    ['ar', 78],
    ['sa', 79],
    ['nl', 80],
    ['ye', 81],
    ['ae', 82],
    ['bd', 83],
    ['ch', 84],
    ['pt', 85],
    ['my', 86],
    ['vn', 87],
    ['br', 88],
    ['pa', 89],
    ['ng', 90],
    ['tr', 91],
    ['ir', 92],
    ['ht', 93],
    ['do', 94],
    ['sl', 95],
    ['sn', 96],
    ['gw', 97],
    ['hr', 98],
    ['th', 99],
    ['mx', 100],
    ['tn', 101],
    ['kw', 102],
    ['de', 103],
    ['mm', 104],
    ['gq', 105],
    ['cnm', 106],
    ['nc', 107],
    ['ie', 108],
    ['kz', 109],
    ['pl', 110],
    ['lt', 111],
    ['eg', 112],
    ['ug', 113],
    ['cd', 114],
    ['mk', 115],
    ['al', 116],
    ['cm', 117],
    ['bj', 118],
    ['ge', 119],
    ['tl', 120],
    ['tm', 121],
    ['kh', 122],
    ['pe', 123],
    ['mw', 124],
    ['mn', 125],
    ['ao', 126],
    ['mz', 127],
    ['za', 128],
    ['cr', 129],
    ['sv', 130],
    ['ly', 131],
    ['sd', 132],
    ['kp', 133],
    ['kr', 134],
    ['gy', 135],
    ['hn', 136],
    ['ga', 137],
    ['ni', 138],
    ['et', 139],
    ['so', 140],
    ['ke', 141],
    ['gh', 142],
    ['si', 143],
    ['gt', 144],
    ['bz', 145],
    ['ba', 146],
    ['jo', 147],
    ['we', 148],
    ['il', 149],
    ['zm', 150],
    ['mc', 151],
    ['uy', 152],
    ['rw', 153],
    ['bo', 154],
    ['cg', 155],
    ['eh', 156],
    ['rs', 157],
    ['me', 158],
    ['tg', 159],
    ['la', 160],
    ['af', 161],
    ['jk', 162],
    ['pk', 163],
    ['bg', 164],
    ['ua', 165],
    ['ro', 166],
    ['qa', 167],
    ['li', 168],
    ['at', 169],
    ['sk', 170],
    ['sz', 171],
    ['hu', 172],
    ['ne', 173],
    ['lu', 174],
    ['ad', 175],
    ['ci', 176],
    ['lr', 177],
    ['bn', 178],
    ['mr', 179],
    ['be', 180],
    ['iq', 181],
    ['gm', 182],
    ['ma', 183],
    ['td', 184],
    ['kv', 185],
    ['lb', 186],
    ['sx', 187],
    ['dj', 188],
    ['er', 189],
    ['bi', 190],
    ['sr', 191],
    ['gn', 192],
    ['zw', 193],
    ['py', 194],
    ['by', 195],
    ['lv', 196],
    ['sy', 197],
    ['bt', 198],
    ['na', 199],
    ['bf', 200],
    ['cf', 201],
    ['md', 202],
    ['gz', 203],
    ['ss', 204],
    ['cz', 205],
    ['nz', 206],
    ['cu', 207],
    ['fi', 208],
    ['mg', 209],
    ['ve', 210],
    ['is', 211],
    ['np', 212],
    ['kg', 213],
    ['bw', 214]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'custom/world-palestine'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world-palestine.js">World with Palestine areas, medium resolution</a>'
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
