window.onload = function (){

    let hour = '0'
    let minute = '0'
    let second = '0'
    let minsecond = '0'

    let tourHour = hour
    let tourMinute = minute
    let tourSecond = second
    let tourMinSecond = minsecond

    let hourFront = document.getElementById('hour')
    let minuteFront = document.getElementById('minute')
    let secondFront = document.getElementById('second')
    let minsecondFront = document.getElementById('minsecond')

    let hourTourFront = document.getElementById('hourTour')
    let minuteTourFront = document.getElementById('minuteTour')
    let secondTourFront = document.getElementById('secondTour')
    let minsecondTourFront = document.getElementById('minsecondTour')


    let action = document.getElementById('action')
    let split = document.getElementById('split')
    let reset = document.getElementById('reset')
    let resetTable = document.getElementById('resetTable')
    let tour_id = 0
    let click = true

    let interval
    let intervalTour

    action.onclick = (() => {
        if (click === true){
            clearInterval(interval)
            clearInterval(intervalTour)
            interval = setInterval(startTimer,10)
            intervalTour = setInterval(tourTimer,10)
            document.getElementById('action').innerHTML = '<i class="bi bi-pause"></i> Stop'
            click = false
        }else{
            clearInterval(interval)
            clearInterval(intervalTour)
            document.getElementById('action').innerHTML = '<i class="bi bi-alarm"></i> Start'
            click = true
        }
    })

    split.onclick = (() => {
        if (tourSecond !== '0'){
            clearInterval(interval)
            clearInterval(intervalTour)
            if (click === false){
                interval = setInterval(startTimer,10)
                intervalTour = setInterval(tourTimer,10)
            }
            tour_id++
            let table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
            let row = table.insertRow(0)
            let cell1 = row.insertCell(0)
            let cell2 = row.insertCell(1)
            let cell3 = row.insertCell(2)

            cell1.innerHTML = '#' + tour_id
            cell2.innerHTML =
                (tourHour >= '10' ? tourHour + ':' : '0' + tourHour + ':') +
                (tourMinute >= '10' ? tourMinute + ':' : '0' + tourMinute + ':') +
                (tourSecond >= '10' ? tourSecond + ':' : '0' + tourSecond + ':') +
                (tourMinSecond >= '10' ? tourMinSecond : '0' + tourMinSecond)
            cell3.innerHTML =
                (hour >= '10' ? hour + ':' : '0' + hour + ':') +
                (minute >= '10' ? minute + ':' : '0' + minute + ':') +
                (second >= '10' ? second + ':' : '0' + second + ':') +
                (minsecond >= '10' ? minsecond : '0' + minsecond)

            tourHour = '0'
            tourMinute = '0'
            tourSecond = '0'
            tourMinSecond = '0'
            hourTourFront.innerHTML = '0' + tourHour
            minuteTourFront.innerHTML = '0' + tourMinute
            secondTourFront.innerHTML = '0' + tourSecond
            minsecondTourFront.innerHTML = '0' + tourMinSecond

        }
    })

    reset.onclick = function (){
        clearInterval(interval)
        clearInterval(intervalTour)
        hour = '0'
        minute = '0'
        second = '0'
        minsecond = '0'
        hourFront.innerHTML = '0' + hour;
        minuteFront.innerHTML = '0' + minute;
        secondFront.innerHTML = '0' + second;
        minsecondFront.innerHTML = '0' + minsecond;

        tourHour = '0'
        tourMinute = '0'
        tourSecond = '0'
        tourMinSecond = '0'
        hourTourFront.innerHTML = '0' + tourHour
        minuteTourFront.innerHTML = '0' + tourMinute
        secondTourFront.innerHTML = '0' + tourSecond
        minsecondTourFront.innerHTML = '0' + tourMinSecond
        document.getElementById('action').innerHTML = '<i class="bi bi-alarm"></i> Start'
        click = true
    }

    resetTable.onclick = (() => {
        let table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
        table.innerHTML = ''

    })

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

    function tourTimer () {
        tourMinSecond++;

        if(tourMinSecond <= 9){
            minsecondTourFront.innerHTML = "0" + tourMinSecond;
        }

        if (tourMinSecond > 9){
            minsecondTourFront.innerHTML = tourMinSecond;

        }

        if (tourMinSecond >= 99) {
            tourMinSecond = 0;
            tourSecond++;
            tourSecond >= '10' ? secondTourFront.innerHTML = tourSecond : secondTourFront.innerHTML = '0' + tourSecond
            minsecondTourFront.innerHTML = '0' + 0;
        }

        if (tourSecond >= 59){
            tourSecond = 0;
            tourMinute++;
            tourMinute >= '10' ? minuteTourFront.innerHTML = tourMinute : minuteTourFront.innerHTML = '0' + tourMinute
            minsecondTourFront.innerHTML = '0' + 0;
        }

        if (tourMinute >= 60){
            tourMinute = 0;
            tourHour++;
            tourHour >= '10' ? hourTourFront.innerHTML = tourHour : hourTourFront.innerHTML = '0' + tourHour
            minsecondTourFront.innerHTML = '0' + 0;
        }

    }
}