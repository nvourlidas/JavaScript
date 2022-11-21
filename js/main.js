window.onload = function () {
    var secs = 00;
    var tens = 00;

    var appendTens = document.getElementById("tens");
    var appendSecs = document.getElementById("secs");

    var startBtn = document.getElementById("start");
    var stopBtn = document.getElementById("stop");
    var resetBtn = document.getElementById("reset");

    var Interval;

    startBtn.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
    }

    stopBtn.onclick = function () {
        clearInterval(Interval);
    }

    resetBtn.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        secs = "00";
        appendSecs.innerHTML = secs;
        appendTens.innerHTML = tens;
    }

    function startTimer () {
        tens++;

        if(tens <=9 ){
            appendTens.innerHTML = "0"+ tens;
        }

        if(tens > 9){
            appendTens.innerHTML = tens;
        }

        if(tens > 99) {
            secs++;
            appendSecs.innerHTML = "0" +secs;
            tens =0;
            appendTens.innerHTML= "0" + 0;
        }

        if(secs > 9) {
            appendSecs.innerHTML= secs;
        }
    }

    showTime();
}

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if (h > 12 ) {
        h = h - 12;
        session = "PM";
    }

    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime,1000);

}