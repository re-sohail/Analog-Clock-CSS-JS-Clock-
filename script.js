let hoursHand = document.querySelector('.Hours-Hand')
let minutesHand = document.querySelector('.Min-Hand')
let secondsHand = document.querySelector('.Second-Hand')


function setDate(){
    let now = new Date();
    let seconds = now.getSeconds();
    let secondDegree = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondDegree}deg)`
    
    let mints = now.getMinutes();
    let minutesDegree = ((mints/60) * 360) +90;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`

    let hours = now.getHours();
    let hoursdegree = ((hours/12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursdegree}deg)`
}


setInterval(setDate, 1000)