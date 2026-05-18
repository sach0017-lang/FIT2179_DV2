const mapSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

  "description": "Test chart",

  "data": {
    "values": [
      {"category": "Mammals", "count": 120},
      {"category": "Birds", "count": 98},
      {"category": "Reptiles", "count": 65},
      {"category": "Amphibians", "count": 42}
    ]
  },

  "mark": {
    "type": "bar",
    "cornerRadiusTopLeft": 5,
    "cornerRadiusTopRight": 5
  },

  "encoding": {
    "x": {
      "field": "category",
      "type": "nominal",
      "axis": {
        "labelAngle": 0
      }
    },

    "y": {
      "field": "count",
      "type": "quantitative"
    },

    "color": {
      "field": "category",
      "type": "nominal",
      "legend": null
    }
  },

  "width": 700,
  "height": 400
};

vegaEmbed('#map-vis', mapSpec);