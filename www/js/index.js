
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

}
