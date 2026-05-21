// ========================================
// STANDARD CHARTS
// ========================================

vegaEmbed('#map-vis', 'charts/map.vg.json');

vegaEmbed('#streamgraph-vis', 'charts/streamgraph.vg.json');

vegaEmbed('#species-ranking-vis', 'charts/species-ranking.vg.json');

vegaEmbed('#sankey-vis', 'charts/sankey.vg.json');

vegaEmbed('#scatter-vis', 'charts/bushfire-scatter.vg.json');

vegaEmbed('#treemap-vis', 'charts/treemap.vg.json');

vegaEmbed('#radial-vis', 'charts/radial-funding.vg.json');

vegaEmbed('#ridgeline-vis', 'charts/ridgeline.vg.json');

vegaEmbed('#timeline-vis', 'charts/timeline.vg.json');


// ========================================
// INTERACTIVE HEATMAP
// ========================================

let heatmapView;

vegaEmbed('#heatmap-vis', 'charts/heatmap.vg.json')

  .then(result => {

    heatmapView = result.view;

    const dropdown = document.getElementById('group-select');

    dropdown.addEventListener('change', function () {

      heatmapView
        .signal('groupFilter', this.value)
        .runAsync();

    });

  })

  .catch(console.error);