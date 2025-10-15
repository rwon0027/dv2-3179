var vg_map = "taxes_map.vg.json";
vegaEmbed("#choropleth_map", vg_map, { actions: false }).then(function(result) {
}).catch(console.error);

var vg_bar = "bar_chart.vg.json";   
vegaEmbed("#bar_chart", vg_bar, { actions: false }).then(function(result) {
}).catch(console.error);

var vg_line = "line_chart.vg.json";
vegaEmbed("#line_chart", vg_line, { actions: false }).then(function(result) {
}).catch(console.error);