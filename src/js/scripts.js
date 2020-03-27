(function($) {
  "use strict";

  // Add active state to sidbar nav links
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
    if (this.href === path) {
      $(this).addClass("active");
    }
  });

  // Toggle the side navigation
  $("#sidebarToggle").on("click", function(e) {
    e.preventDefault();
    $("body").toggleClass("sb-sidenav-toggled");
  });

  // INITIAL VARIABLE
  var yemen_hno,
    theDataTableInit = 0,
    human_number = d3.format(",d"),
    SelectedRegion = "adm1name",
    statesData = 0,
    inneed = 0,
    inneed_acute_pct = 0,
    inneed_moderate_pct = 0,
    population = 0;

  var geojson;
  var map = L.map("regions_div", {
    //map is a global variable
    center: [15.6999243, 47.8915271],
    zoom: 7,
    zoomDelta: 0.1,
    zoomSnap: 0,
    zoomControl: false,
    layerControl: false,
    attributionControl: true,
    scrollWheelZoom: false,
    minZoom: 7,
    maxZoom: 7
  });
  var gv_baseMap = L.mapboxGL({
    accessToken:
      "pk.eyJ1IjoidGhhbXJpbmYiLCJhIjoiYzA1MmJjMzI1N2E5NzNhN2I2MzU4MDkzZWU4ODQxNzAifQ.3qQApYaqLA0bGC3Z5PCnUg",
    style: "mapbox://styles/thamrinf/ck10tppqm034k1cr0bu9mhdpl",
    zIndex: 1
  });

  var humanNumber = d3.format(",d");

  gv_baseMap.addTo(map);

  $("#loadinggif").show();
  d3.json("data/yem_admbnda_adm1.geojson").then(function(geodata) {
    function getColor(d) {
      return d > 1000
        ? "#800026"
        : d > 500
        ? "#BD0026"
        : d > 200
        ? "#E31A1C"
        : d > 100
        ? "#FC4E2A"
        : d > 50
        ? "#FD8D3C"
        : d > 20
        ? "#FEB24C"
        : d > 10
        ? "#FED976"
        : "#FFEDA0";
    }

    function style(feature) {
      return {
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.density)
      };
    }

    function highlightFeature(e) {
      var layer = e.target;

      layer.setStyle({
        weight: 5,
        color: "#666",
        dashArray: "",
        fillOpacity: 0.7
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }

    var geojson;

    function resetHighlight(e) {
      geojson.resetStyle(e.target);
    }

    function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
      });
    }

    geojson = L.geoJson(geodata, {
      style: style,
      onEachFeature: onEachFeature
    }).addTo(map);
  });
})(jQuery);
