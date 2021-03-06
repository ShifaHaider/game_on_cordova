var basket = document.getElementById('basketImg');
var egg = document.getElementsByClassName('egg');
var scoreDiv = document.getElementById('score');
var animateP = document.getElementById('animatePoint');

var score = 0;
var wastEggs = 9;
var left = 0;
var clientX;
//document.onkeydown = moveBasket;
document.addEventListener("deviceready", onDeviceReady, false);
function onSuccess(acceleration) {
    if (Math.floor(acceleration.x) > 0) {
        console.log(acceleration.x);
        console.log('Left Moving');
        leftMove();
    }
    else if (Math.floor(acceleration.x) < 0) {
        console.log('Right Moving');
        console.log(acceleration.x);

        rightMove();
    }
    console.log('Acceleration X: ' + +'\n' +
        'Acceleration Y: ' + acceleration.y + '\n' +
        'Acceleration Z: ' + acceleration.z + '\n' +
        'Timestamp: ' + acceleration.timestamp + '\n');

}

function onError() {
    alert('onError!');
}

var options = {frequency: 500};
var watchID;
function onDeviceReady() {
    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    console.log(watchID);
}

function leftMove(){
    if (left >= 0) {
        left = left - 20;
        basket.style.left = left + 'px';
    }
}
function rightMove() {
    if (left <= (document.body.clientWidth - 150)) {
        left = left + 20;
    }
    else {
        left = document.body.clientWidth - 150;
    }
    basket.style.left = left + 'px';
}

window.addEventListener('mousemove', function (e) {
    if (e.clientX < clientX) {
        leftMove();
    }
    else {
        rightMove();
    }
    clientX = e.clientX;
});
function simpleEgg() {
    var wasteEggs = document.getElementsByClassName('waste-egg');
    var eggDiv = document.getElementById('egg1');
    var eggImg = document.createElement('img');
    var left1 = Math.floor(Math.random() * (window.screen.width - 60));
    eggImg.setAttribute('src', 'egg2.png');
    eggImg.style.height = '45px';
    eggImg.style.width = '35px';
    eggImg.setAttribute('class', 'egg');
    eggDiv.appendChild(eggImg);
    var top = 0;
    eggImg.style.left = left1 + 'px';
    var a = setInterval(function () {
        eggImg.style.top = top++ + 'px';
        if (top === (document.body.clientHeight - 110)) {
            var eggLeft = Number(eggImg.style.left.replace('px', ''));
            if (eggLeft > left && eggLeft < (left + 150 )) {
                score = score + 10;
                scoreDiv.innerHTML = "Score: " + score;
                clearInterval(a);
                eggDiv.removeChild(eggImg);
            }
        }
        if (top === document.body.clientHeight) {
            clearInterval(a);
            eggDiv.removeChild(eggImg);
            wasteEggs[wastEggs].src = 'broken-egg.png';
            wasteEggs[wastEggs].style.height = '40px';
            wasteEggs[wastEggs].style.width = '40px';
            wastEggs--;
            if (wastEggs === -1) {
                alert('Game over!!');
                window.location.reload();
            }
        }
    }, 10);
}

simpleEgg();
setInterval(simpleEgg, 3000);

function redEgg() {
    var impDiv = document.getElementById('impEgg');
    var redEgg = document.createElement('img');
    var left1 = Math.floor(Math.random() * (window.screen.width - 60));
    redEgg.setAttribute('src', 'impEgg.png');
    redEgg.style.height = '50px';
    redEgg.style.width = '40px';
    redEgg.setAttribute('class', 'egg');
    impDiv.appendChild(redEgg);
    var top = 0;
    redEgg.style.left = left1 + 'px';
    var i = setInterval(function () {
        redEgg.style.top = top++ + 'px';
        if (top === (document.body.clientHeight - 110)) {
            var eggLeft = Number(redEgg.style.left.replace('px', ''));
            if (eggLeft > left && eggLeft < (left + 150)) {
                score = score + 50;
                scoreDiv.innerHTML = "Score: " + score;
                clearInterval(i);
                impDiv.removeChild(redEgg);
            }
        }
        if (top === document.body.clientHeight) {
            clearInterval(i);
            impDiv.removeChild(redEgg);
        }
    })
}

setInterval(redEgg, 12000);

function goldenEgg() {
    var impEgg2 = document.getElementById('impEgg2');
    var goldenEgg = document.createElement('img');
    var left1 = Math.floor(Math.random() * (window.screen.width - 60));
    goldenEgg.setAttribute('src', 'gold_egg_medium.png');
    goldenEgg.style.height = '50px';
    goldenEgg.style.width = '45px';
    goldenEgg.setAttribute('class', 'egg');
    impEgg2.appendChild(goldenEgg);
    goldenEgg.style.left = left1 + 'px';
    var top = 0;
    var i = setInterval(function () {
        goldenEgg.style.top = top++ + 'px';
        if (top === (document.body.clientHeight - 110)) {
            var eggLeft = Number(goldenEgg.style.left.replace('px', ''));
            if (eggLeft > left && eggLeft < (left + 150 )) {
                score = score + 20;
                scoreDiv.innerHTML = "Score: " + score;
                clearInterval(i);
                impEgg2.removeChild(goldenEgg);
            }
        }
        else {
            if (top === document.body.clientHeight) {
                clearInterval(i);
                impEgg2.removeChild(goldenEgg);
            }
        }
    })
}

setInterval(goldenEgg, 9000);
