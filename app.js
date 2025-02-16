var days_html = document.getElementById('days')
var hours_html = document.getElementById('hours')
var mins_html = document.getElementById('mins')
var seconds_html = document.getElementById('seconds')

var now = new Date()
var ramadan = new Date('3/01/2025')
var diff = ramadan.getTime() - now.getTime()
var seconds = diff / 1000   
var mins = diff / 1000 / 60
var hours = diff / 1000 / 60 /60
var days = diff / 1000 / 60 / 60 / 24


days_html.innerText = Math.floor(days)

hours_html.innerText = Math.floor(hours)

mins_html.innerText = Math.floor(mins)

seconds_html.innerText = Math.floor(seconds)