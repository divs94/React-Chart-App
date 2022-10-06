import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.updateCharts = this.updateCharts.bind(this);

    this.state = {
      optionsMixedChart: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
          },
        },
        stroke: {
          width: [4, 5, 2],
        },
        xaxis: {
          categories: [
            "India",
            "UK",
            "Australia",
            "Africa",
            "Thailand",
            "Nepal",
            "China",
            "Japan",
          ],
        },
        markers: {
          size: 5,
          strokeWidth: 2,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 8,
          },
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 100,
        },
      },
      seriesMixedChart: [
        {
          name: "Margherita",
          type: "line",
          data: [30, 40, 25, 50, 49, 21, 70, 51],
        },
        {
          name: "Farm-House",
          type: "column",
          data: [23, 12, 54, 61, 32, 56, 81, 19],
        },
        {
          name: "Peppy-Paneer",
          type: "column",
          data: [62, 12, 45, 55, 76, 41, 23, 43],
        },
        {
          name: "Paneer-Makhani",
          type: "line",
          data: [52, 22, 35, 65, 78, 31, 20, 40],
        },
        {
          name: "Veg-Exotix",
          type: "line",
          data: [42, 32, 21, 46, 61, 42, 50, 30],
        },
      ],
      optionsRadial: {
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 2,
              size: "50%",
              background: "yellow",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "left",
              dropShadow: {
                enabled: true,
                top: 5,
                left: 5,
                blur: 10,
                opacity: 1.24,
              },
            },
            track: {
              background: "#000",
              strokeWidth: "60%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35,
              },
            },

            dataLabels: {
              showOn: "always",
              name: {
                offsetY: -20,
                show: true,
                color: "#000",
                fontSize: "13px",
              },
              value: {
                formatter: function (val) {
                  return val;
                },
                color: "#111",
                fontSize: "30px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 1,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Daily Selling in %"],

      },
      seriesRadial: [75],
      optionsBar: {
        chart: {
          stacked: true,
          stackType: "100%",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        dataLabels: {
          dropShadow: {
            enabled: true,
          },
        },
        stroke: {
          width: 0,
        },
        xaxis: {
          categories: ["Fav Pizza"],
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        fill: {
          opacity: 1,
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.35,
            gradientToColors: undefined,
            inverseColors: false,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [90, 0, 100],
          },
        },

        legend: {
          position: "bottom",
          horizontalAlign: "right",
        },
      },
      seriesBar: [
        {
          name: "Margherita",
          data: [32],
        },
        {
          name: "Farm House",
          data: [41],
        },
        {
          name: "Peppy Paneer",
          data: [12],
        },
        {
          name: "Paneer Makhani",
          data: [65],
        },
        {
          name: "Veg-Exotic",
          data: [51],
        },
        {
          name: "Veg-Italiano",
          data: [35],
        },
        {
          name: "Momo-Pizza",
          data: [81],
        },
      ],
    };
  }

  updateCharts() {
    const max = 90;
    const min = 30;
    const newMixedSeries = [];
    const newBarSeries = [];

    this.state.seriesMixedChart.forEach((s) => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      newMixedSeries.push({ data: data, type: s.type });
    });

    this.state.seriesBar.forEach((s) => {
      const data = s.data.map(() => {
        return Math.floor(Math.random() * (180 - min + 1)) + min;
      });
      newBarSeries.push({ data, name: s.name });
    });

    this.setState({
      seriesMixedChart: newMixedSeries,
      seriesBar: newBarSeries,
      seriesRadial: [Math.floor(Math.random() * (90 - 50 + 1)) + 50],
    });
  }

  render() {
    return (
      <div className="app">
        <h1
          style={{
            textAlign: "center",
            paddingBottom: "10px",
            fontWeight: "700",
            backgroundColor: "rgb(130, 197, 223)",
            color: "#000",
            lineHeight: "45px",
            borderRadius: "10px",
          }}
        >
          Pizza Selling Graph Market By Countries
        </h1>
        <div className="col">
          <span>
            {" "}
            <button onClick={this.updateCharts}>Update</button>
          </span>
          <span>
            {" "}
            <Link to="/">
              {" "}
              <button>Back </button>
            </Link>
          </span>
        </div>
        {/* chart1 */}
        <div className="chart1">
          <div className="row">
            <div className="col mixed-chart">
              <Chart
                options={this.state.optionsMixedChart}
                series={this.state.seriesMixedChart}
                type="line"
                width="550"
                height="280"
                padding="20px"
              />
            </div>

            <div className="col">
              <h1>Mixed Chart</h1>
              <p>
                <strong>
                  <em>"Mixed Charts"</em>
                </strong>{" "}
                shows the generating value each minutes for Sale of Pizzas in
                Graph view..
              </p>
            </div>
          </div>
        </div>

        {/* chart2 */}
        <div className="chart1">
          <div className="row">
            <div className="col">
              <h1>Radial Chart</h1>
              <p>
                <strong>
                  <em>"Radial Charts"</em>
                </strong>{" "}
                are quite attractive in looks. <br />
                shows the generating value each minutes for Sale of Pizzas in a
                Circle mode..
              </p>
            </div>

            <div className="col radial-chart">
              <Chart
                options={this.state.optionsRadial}
                series={this.state.seriesRadial}
                type="radialBar"
                width="350"
                height="360"
              />
            </div>
          </div>
        </div>

        {/* chart 3 */}
        <div className="row">
          <div className="col percentage-chart">
            <h1>Percentage Bar Chart</h1>
            <p style={{ textAlign: "center" }}>
              <strong>
                <em>"Percent Charts"</em>
              </strong>{" "}
              are very straight in view. <br />
              shows the generating value each minutes for Sale of Pizzas in a
              Bar model wit percentage..
            </p>
            <Chart
              options={this.state.optionsBar}
              height={250}
              series={this.state.seriesBar}
              type="bar"
              width="1000"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
