
window.addEventListener('load', calculateTime);

function calculateTime() {
	var date = new Date();
	var day = date.getDay();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var ampm = hour >= 12 ? 'PM' : 'AM';

	var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

	document.getElementById('day').innerHTML = dayNames[day];
	document.getElementById('hour').innerHTML = hour;
	document.getElementById('minute').innerHTML = minute;
	document.getElementById('ampm').innerHTML = ampm;
	
	setTimeout(calculateTime, 200);
}

