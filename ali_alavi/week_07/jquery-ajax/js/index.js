// Imports
const { path } = R;
const { fromEvent } = rxjs;

// Partial application
const temp = path(["main", "temp"]);
const condition = path(["weather", 0, "main"]);

const source = fromEvent($("#app .btn"), "click");

// stream
source.subscribe(e => {
  //resets+clear
  $("#temp")
    .css("top", "0vh")
    .css("opacity", "0");
  $("#cond")
    .attr("src", "")
    .css("bottom", "0vh")
    .css("opacity", "0");

  let wCondition = "";

  e.preventDefault();
  const city = $("#city").val();

  $.ajax(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=d98e7b2d37fbd7b63a3ae50925548d3f`
  ).done(res => {
    $("#temp")
      .html(`<h1 class="font-weight-lighter">${temp(res)}c</h1>`)
      .animate(
        {
          top: "20vh",
          opacity: 1
        },
        1000
      );
    //get weather icon
    switch (condition(res)) {
      case "Clouds":
        wCondition = "hc";
        break;
      case "Clear":
        wCondition = "c";
        break;
      case "Snow":
        wCondition = "sn";
        break;
      case "Rain":
        wCondition = "lr";
        break;
      case "Drizzle":
        wCondition = "s";
        break;
      case "Thunderstorm":
        wCondition = "t";
        break;
      default:
        wCondition = "lc";
    }

    $("#cond")
      .attr(
        "src",
        `https://www.metaweather.com/static/img/weather/${wCondition}.svg`
      )
      .animate(
        {
          bottom: "40vh",
          opacity: 1
        },
        1000
      );
  });
});
