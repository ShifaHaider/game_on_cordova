
var app = {



};
//document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
    navigator.notification.prompt('Please enter your name');
    navigator.notification.beep(2);

}
