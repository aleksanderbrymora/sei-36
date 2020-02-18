//Declarations
const trackN = ["Times Square", "34thN", "28thN", "23rdN","Union Square","8thN"];
const trackL = ["8thL", "6thL", "Union Square", "3rdL", "1stL"];
const track6 = ["Grand Central", "33rd6", "28th6", "23rd6", "Union Square","AstorPlace"];
var stations = [];
var noOfStations = 0;

// This shows Source Track,Station and  Destination Track,Station
var route = [
  {
    trackName     : "trackN",
    trackStation  : "Times Square",
  },
  {
    trackName     : "trackL",     //"trackN",   //"track6",
    trackStation  : "1stL",      //"8thN",    //"33rd6",
  }
];

var index = -1;

//To Find that the Station belongs to which Track (N/L//6)?
const findTrack = function (trackStation)
{
  if (trackN.indexOf(trackStation) > -1)
  {
    index = trackN.indexOf(trackStation);
    return {
        foundTrack      : trackN,
        foundTrackName  : 'trackN',
        foundIndex      : index
      };
  }
  else if (trackL.indexOf(trackStation) > -1)
  {
    index = trackL.indexOf(trackStation);
    return {
        foundTrack      : trackL,
        foundTrackName  : 'trackL',
        foundIndex      : index
      };
  }
  else if (track6.indexOf(trackStation) > -1)
  {
    index = track6.indexOf(trackStation);
    return {
        foundTrack      : track6,
        foundTrackName  : 'track6',
        foundIndex      : index
      };
  }
  else {
    return "Wrong Station Name";
  }
}

const trackRoute = function(route)
{
  var srcTrack = [], desTrack = [];
  var stations = [], revStations = [];
  var statArrayToCombine = [];
  var srcTrackObj = findTrack(route[0].trackStation), //Returned Src Object
      desTrackObj = findTrack(route[1].trackStation); //Returned Des Object
      srcTrack = srcTrackObj.foundTrack,              //Track N/L/6
      desTrack = desTrackObj.foundTrack;              //Track N/L/6
      srcIndex = srcTrackObj.foundIndex,              //Index for src station
      desIndex = desTrackObj.foundIndex;              //Index for des station

// If two stations are on *******SAME TRACK*************
  if (srcTrackObj.foundTrackName === desTrackObj.foundTrackName)
  {

    stations = srcTrack.slice(++srcIndex,++desIndex);
    noOfStations = stations.length;
  }
  else
    {
// If two stations are on *******DIFFERENT TRACK*************
      let unionsqIndex = srcTrack.indexOf('Union Square');
//SOURCE TRACK
      if (srcIndex <= unionsqIndex)
          stations = srcTrack.slice(++srcIndex,++unionsqIndex);
      else {
          revStations = srcTrack.slice(unionsqIndex,srcIndex);
          stations = revStations.reverse();
          }
//DESTINATION TRACK
      unionsqIndex = desTrack.indexOf('Union Square');
//Destination station exist on the left track of Union Square
          if (desIndex < unionsqIndex)
          {
            revStations = desTrack.slice(desIndex,unionsqIndex);
            revStations = revStations.reverse();
            statArrayToCombine = stations;
            stations = statArrayToCombine.concat(revStations);
            noOfStations = stations.length;
          }
          else
//Destination station exist on the right track of Union Square
          statArrayToCombine = desTrack.slice(++unionsqIndex, ++desIndex);
          stations = stations.concat(statArrayToCombine);
          noOfStations = stations.length;
      }

  return stations;
}


console.log(`Stations between ${route[0].trackName} at station "${route[0].trackStation}" and ${route[1].trackName} at station "${route[1].trackStation}" are
      ${trackRoute(route)}`);
console.log(`No of Stations : ${noOfStations}`);
