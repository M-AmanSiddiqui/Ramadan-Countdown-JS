var days_html = document.getElementById('days')
var hours_html = document.getElementById('hours')
var mins_html = document.getElementById('mins')
var seconds_html = document.getElementById('seconds')


const audio = document.getElementById('myAudio');
const toggleButton = document.getElementById('toggleAudio');


toggleButton.textContent = audio.paused ? 'Play Audio' : (audio.muted ? 'Unmute Audio' : 'Mute Audio');

toggleButton.addEventListener('click', () => {

  if (audio.paused) {
    audio.play();
    toggleButton.textContent = 'Mute Audio';
  } else {
  
    audio.muted = !audio.muted;
    toggleButton.textContent = audio.muted ? 'Unmute Audio' : 'Mute Audio';
  }
});

var now = new Date()
var ramadan = new Date('2/20/2026')
var diff = ramadan.getTime() - now.getTime()

var interval = setInterval(function (){
    var currentDate = new Date()
    diff = diff - 100

var days = diff / 1000 / 60 / 60 / 24
var hours = 24 - currentDate.getHours()
var mins = 60 - currentDate.getMinutes()
var seconds = 60 - currentDate.getSeconds() 


days_html.innerText = Math.floor(days)

hours_html.innerText = Math.floor(hours)

mins_html.innerText = Math.floor(mins)

seconds_html.innerText = Math.floor(seconds)})