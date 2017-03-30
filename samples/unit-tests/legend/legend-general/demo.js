

QUnit.test('Legend object set to false (#5215)', function (assert) {

    // We only expect it to render without a JS error, that's all
    assert.expect(0);
    Highcharts.chart('container', {

        legend: false,

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            type: 'column'
        }]

    });
});

QUnit.test('Spacing and legend overflow (#6497)', function (assert) {
    var chart = Highcharts.chart('container', {
        chart: {
            type: 'pie',
            spacing: [10, 200, 15, 0]
        },

        series: [{
            showInLegend: true,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7]
        }]

    });
    assert.ok(
        chart.legend.group.attr('translateX') > chart.spacing[3],
        'Legend is within spacing'
    );
});
