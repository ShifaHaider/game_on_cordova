
var app = {

};
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    window.addEventListener("orientationchange", function(e){
        console.log(e);
        console.log(e.target);
        console.log(screen.orientation.type);
    });
    //console.log(navigator.notification);
    //navigator.notification.prompt('Please enter your name');
    //navigator.notification.beep(2);
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}
function onSuccess(acceleration) {

    console.log('Acceleration X: ' + acceleration.x + '\n' +
        'Acceleration Y: ' + acceleration.y + '\n' +
        'Acceleration Z: ' + acceleration.z + '\n' +
        'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
    alert('onError!');
}


var options = { frequency: 1000 };  // Update every 3 seconds
