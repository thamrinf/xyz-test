function drawMap() {
  d3.json("./data/yem_admbnda_adm1.geojson").then(function(geodata) {
    console.log("asdasd");
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
}

// fungsi untuk menggambar chart pertama
function chart1() {
  var options = {
    series: [
      {
        data: [
          2.7,
          2.65,
          2.58,
          2.44,
          2.01,
          1.92,
          1.18,
          1.01,
          0.84,
          0.8,
          0.79,
          0.79,
          0.68,
          0.66,
          0.61,
          0.53,
          0.5,
          0.46,
          0.45,
          0.38,
          0.12,
          0.04
        ]
      }
    ],
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },

    fill: {
      colors: ["#003469"],
      opacity: 1
    },

    xaxis: {
      categories: [
        "AM. AL ASIMAH",
        "AL HUDAYDAH",
        "TAIZZ",
        "IBB",
        "HAJJAH",
        "DHAMAR",
        "SANA'A",
        "AMRAN",
        "SA'ADA",
        "HADRAMAUT",
        "ADEN",
        "LAHJ",
        "AL BAYDA",
        "AL MAHWIT",
        "AL DHALE'E",
        "RAYMAH",
        "SHABWAH",
        "AL JAWF",
        "ABYAN",
        "MARIB",
        "AL MAHARAH",
        "SOCOTRA"
      ]
    }
  };

  var chart = new ApexCharts(document.querySelector("#myAreaChart"), options);
  chart.render();
}

// fungsi chart kedua
function chart2() {
  Chart.defaults.global.defaultFontFamily =
    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = "#292b2c";

  var ctx = document.getElementById("myBarChart");
  var myLineChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Revenue",
          backgroundColor: "rgba(2,117,216,1)",
          borderColor: "rgba(2,117,216,1)",
          data: [4215, 5312, 6251, 7841, 9821, 14984]
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            time: {
              unit: "month"
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 6
            }
          }
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 15000,
              maxTicksLimit: 5
            },
            gridLines: {
              display: true
            }
          }
        ]
      },
      legend: {
        display: false
      }
    }
  });
}

function chart3() {
  // Set new default font family and font color to mimic Bootstrap's default styling
  Chart.defaults.global.defaultFontFamily =
    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = "#292b2c";

  // Pie Chart Example
  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Blue", "Red", "Yellow", "Green"],
      datasets: [
        {
          data: [12.21, 15.58, 11.25, 8.32],
          backgroundColor: ["#007bff", "#dc3545", "#ffc107", "#28a745"]
        }
      ]
    }
  });
}

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
