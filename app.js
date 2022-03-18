window.onload = function (){

    let hours = '00'
    let minutes = '00'
    let seconds = '00'
    let minseconds = '000'

    let hour = document.getElementById('hour')
    let minute = document.getElementById('minute')
    let second = document.getElementById('second')
    let minsecond = document.getElementById('minsecond')
    let start = document.getElementById('start')

    let interval

    start.onclick = function (){
        clearInterval(interval)
        interval = setInterval(startTimer,10)
    }

    function startTimer () {
        minseconds++;

        if(minseconds <= 9){
            minsecond.innerHTML = "0" + minseconds;
        }

        if (minseconds > 9){
            minsecond.innerHTML = minseconds;

        }

        if (minseconds > 99) {
            console.log("seconds");
            seconds++;
            second.innerHTML = "0" + seconds;
            minseconds = 0;
            minsecond.innerHTML = "0" + 0;
        }

        if (seconds > 9){
            second.innerHTML = seconds;
        }

    }
}