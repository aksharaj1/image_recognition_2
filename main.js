// https://teachablemachine.withgoogle.com/models/gJsy03U4N/

// Webcam.attach('#camera')
// camera = document.getElementById("camera");


// Webcam.set({
//     width:350,
//     height:300,
//     image_format:"png",
//     png_quality:90
// });

// function captureImg(){
//     Webcam.snap(function( data_uri) {
//         document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="snapshot">'
//     });
// }

Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

function captureImg()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}






