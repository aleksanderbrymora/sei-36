//Declarations
const trackN = ["Times Square", "34thN", "28thN", "23rdN","Union Square","8thN"];
const trackL = ["8thL", "6thL", "Union Square", "3rdL", "1stL"];
const track6 = ["Grand Central", "33rd6", "28th6", "23rd6", "Union Square","AstorPlace"];
var stations = [];
var noOfStations = 0;
//ar sourceLane, sourceStation, desLane, desStation;
//
var route = [
  {
    trackName     : "trackN",
    trackStation  : "Times Square"
  },
  {
    trackName     : "track6",
    trackStation  : "33rd6"
  }
];

//CHeck in which lane the source station exist:
const checkLane = function(track, trackStation)
{
   let foundStation = false;
   let lefttrackStation = [];
   let stationcount = 0;
   let srcTrack = [];

  if(track == "trackN"){
    srcTrack = trackN;
  } else if (track == "trackL") {
    srcTrack = trackL;
  } else if (track == "track6") {
    srcTrack = track6;
  }

  //Check if the station exist in First half of track before UnionSquare
  for (var stat=0 ; srcTrack[stat] != "Union Square"; stat++)
  {
      if (stationcount > 0)
      {
        stations.push(srcTrack[stat]);
        ++stationcount;
      }
      if (srcTrack[stat] == trackStation)
      {
        foundStation = true;
        ++stationcount;
      }
  }

  if (foundStation == false)
  {
    for (var stat = (track.length - 1) ; stat != "Union Square"; stat--)
    {
      if (stationcount > 0)
        {
        stations.push(track[stat]);
        ++stationcount;
        }
      if (track[stat]== trackStation)
        { foundStation = true;
          ++stationcount;
        }
      }
    }

  if (foundStation === true )
  {
    stations.push("Union Square");
    noOfStations = stationcount;
    foundStation = false;
  }
}

const trackRoute = function(route)
{
  for(var i= 0; i< route.length;i++)
  {
    switch (route[i].trackName)
    {
      case 'trackN':
        checkLane(route[i].trackName, route[i].trackStation);
        break;
      case 'trackL':
        checkLane(route[i].trackName, route[i].trackStation);
        break;
      case 'track6':
        checkLane(route[i].trackName, route[i].trackStation);
        break;
    }
  }
  return station;
}

//Display the stations in between and No of stations
console.log(`Stations between ${trackRoute(route)} are ${stations}`);
console.log(`No of Stations : ${noOfStations}`);
//
// debugger;
// let srcStration = trackRoute(route);
