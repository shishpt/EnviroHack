// Chart Options
const options = {
    chart: {
        height: 450,
        width: '100%',
        type: 'area',
        background: 'grey',
        foreColor: 'orange'
    },
    series: [{
         name: 'Footprint',
         data: []
    }],
    xaxis: {
        categories: []
    }

}

// Init Chart
const chart = new ApexCharts(document.querySelector ('#chart'), options);

// Render Chart
chart.render();