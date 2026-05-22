// ========================================
// STANDARD CHARTS
// ========================================

vegaEmbed('#map-vis', 'charts/map.vg.json');

vegaEmbed('#streamgraph-vis', 'charts/streamgraph.vg.json');

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


// ========================================
// SPECIES INTERACTIVE PANEL
// ========================================

const speciesInfoMap = {

  "Leadbeater's Possum": "leadbeater",

  "Southern Corroboree Frog": "frog",

  "Orange-bellied Parrot": "parrot",

  "Gilbert's Potoroo": "potoroo",

  "Northern Hairy-nosed Wombat": "wombat",

  "Regent Honeyeater": "honeyeater",

  "Swift Parrot": "swift",

  "Mountain Pygmy-possum": "pygmy",

  "Western Ringtail Possum": "ringtail"

};


// ========================================
// SHOW PANEL FUNCTION
// ========================================

function showSpeciesInfo(id) {

  document
    .querySelectorAll(".species-info-content")
    .forEach(panel => {
      panel.classList.remove("active");
    });

  const target = document.getElementById(id);

  if (target) {
    target.classList.add("active");
  }
}


// ========================================
// SPECIES CHART INTERACTION
// ========================================

vegaEmbed('#species-ranking-vis', 'charts/species-ranking.vg.json', {

  actions: false

}).then(result => {

  const speciesView = result.view;

  speciesView.addEventListener('mousemove', (event, item) => {

    if (!item || !item.datum) return;

    const species =
      item.datum.Species ||
      item.datum.species;

    console.log("Hovered species:", species);

    if (!species) return;

    const panelId = speciesInfoMap[species];

    if (!panelId) return;

    showSpeciesInfo(panelId);

  });

}).catch(console.error);