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
chart1();
