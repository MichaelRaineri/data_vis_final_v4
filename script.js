$(function () {

    Highcharts.chart('container', {

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
        },


        title: {
            text: 'Topic frequency during cafe owner interviews'
        },

        xAxis: {
            categories: ['Upcycling','Recycling','Composting', 'Waste', 'Trash']
        },

        yAxis: {
            categories: ['Seven Point Espresso', 'Hungry Ghost', 'Sit & Wonder', 'Little Cupcake Bakeshop', 'Gorilla Coffee'],
            title: null
        },

        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[7]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> was mentioned <br><b>' +
                    this.point.value + '</b> times by <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
            }
        },

        series: [{
            name: 'Sales per employee',
            borderWidth: 1,
            data: [
            [0, 0, 6], [0, 1, 2], [0, 2, 0], [0, 3, 0], [0, 4, 0],
            [1, 0, 6], [1, 1, 6], [1, 2, 5], [1, 3, 5], [1, 4, 2], 
            [2, 0, 10], [2, 1, 8], [2, 2, 4], [2, 3, 2], [2, 4, 1], 
            [3, 0, 6], [3, 1, 5], [3, 2, 5], [3, 3, 7], [3, 4, 2],
            [4, 0, 7], [4, 1, 9], [4, 2, 3], [4, 3, 10], [4, 4, 8],
            ],
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }]

    });
});

