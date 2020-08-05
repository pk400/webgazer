window.saveDataAcrossSessions = true;

webgazer.showPredictionPoints(true);

webgazer.setGazeListener(function(data, elapsedTime) {
  if (data == null) {
      return;
  }
  var xprediction = data.x; //these x coordinates are relative to the viewport
  var yprediction = data.y; //these y coordinates are relative to the viewport
  console.log(elapsedTime); //elapsed time is based on time since begin was called
}).begin();


// window.onload = () => {
//   webgazer.setGazeListener((data, elapsedTime) => {
//     if (data == null) {
//         return;
//     }
//     var xprediction = data.x; //these x coordinates are relative to the viewport
//     var yprediction = data.y; //these y coordinates are relative to the viewport
//     // console.log(elapsedTime); //elapsed time is based on time since begin was called
//     // console.log(xprediction, yprediction)
//     // console.log(data)
//   }).begin().showPredictionPoints(true);
// }

// // Persists calibration data
// window.saveDataAcrossSessions = true;
