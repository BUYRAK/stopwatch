window.onload = function (){

    let hour = '0'
    let minute = '0'
    let second = '0'
    let minsecond = '0'

    let hourFront = document.getElementById('hour')
    let minuteFront = document.getElementById('minute')
    let secondFront = document.getElementById('second')
    let minsecondFront = document.getElementById('minsecond')
    let start = document.getElementById('start')
    let split = document.getElementById('split')
    let stop = document.getElementById('stop')
    let reset = document.getElementById('reset')

    let interval

    start.onclick = (() => {
        clearInterval(interval)
        interval = setInterval(startTimer,10)
        document.getElementById('start').innerHTML = '<i class="bi bi-pause"></i> Stop'
        document.getElementById('start').id = 'stop'
    })

    stop.onclick = function (){
        clearInterval(interval)
        document.getElementById('stop').innerHTML = '<i class="bi bi-timer"></i> Start'
        document.getElementById('stop').id = 'start'
    }
    reset.onclick = function (){
        clearInterval(interval)
        hour = '0'
        minute = '0'
        second = '0'
        minsecond = '0'
        hourFront.innerHTML = '0' + hour;
        minuteFront.innerHTML = '0' + minute;
        secondFront.innerHTML = '0' + second;
        minsecondFront.innerHTML = '0' + minsecond;
        document.getElementById('stop').innerHTML = '<i class="bi bi-timer"></i> Start'
        document.getElementById('stop').id = 'start'
    }

    function startTimer () {
        minsecond++;

        if(minsecond <= 9){
            minsecondFront.innerHTML = "0" + minsecond;
        }

        if (minsecond > 9){
            minsecondFront.innerHTML = minsecond;

        }

        if (minsecond >= 99) {
            minsecond = 0;
            second++;
            second >= '10' ? secondFront.innerHTML = second : secondFront.innerHTML = '0' + second
            minsecondFront.innerHTML = '0' + 0;
        }

        if (second >= 59){
            second = 0;
            minute++;
            minute >= '10' ? minuteFront.innerHTML = minute : minuteFront.innerHTML = '0' + minute
            minsecondFront.innerHTML = '0' + 0;
        }

        if (minute >= 60){
            minute = 0;
            hour++;
            hour >= '10' ? hourFront.innerHTML = hour : hourFront.innerHTML = '0' + hour
            minuteFront.innerHTML = '0' + 0;
        }

    }
}