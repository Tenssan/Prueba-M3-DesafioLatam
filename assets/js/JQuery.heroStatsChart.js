$(document).ready(function () {
    var options = {
        title: {
            text: "Estadísticas de poder"
        },
        legend: {
            maxWidth: 350,
            itemWidth: 120
        },
        data: [
            {
                type: "pie",
                showInLegend: true,
                indexLabelWrap: true,
                legendText: "{indexLabel}",
                dataPoints: []
            }
        ]
    };

    jQuery.fn.heroStatsChart = function(id) {
        var element = this;
        const accessToken = '4905856019427443';
        $.ajax({
            type: 'GET',
            url: "https://superheroapi.com/api.php/" + accessToken + "/" + id,
            dataType: 'json',
            success: function (data) {
                let powerstats = data.powerstats;
                options.data[0].dataPoints = [];
                for (var stat in powerstats) {
                    options.data[0].dataPoints.push({
                        y: powerstats[stat],
                        indexLabel: stat
                    });
                }
                console.log(data);
                $("#heroChart").CanvasJSChart(options);
            },
            error: function () {
                console.error("Failed to load hero stats data.");
            }
        });
        return this;
    };
});
