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

}