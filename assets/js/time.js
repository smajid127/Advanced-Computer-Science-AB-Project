/*$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 8 && n <= 12)
	  // If time is after 8AM and before 12PM, apply morning theme to ‘body’
	 // document.body.className = "morning";
	  document.body.style.backgroundImage = "url('images/morning.jpg')";
	else if (n > 12 && n <= 16)
	  // If time is between 12PM – 4PM afternoon theme to ‘body’
	  document.body.className = "afternoon";
	else if (n > 16 && n <= 19) 
	  // If time is between 4PM - 7PM night1 theme is applied
	  document.body.className = "night1";
	else if(n > 19 && n <= 22)
	  // If time is between 7PM - 10 PM night3 theme is applied
	  document.body.className = "night3";
	else 
	  //Else night2 theme is used 
	  document.body.className = "night2"; 
}); */
function startTime() {
    var today = new Date();
    var h = today.getHours()%12||12;
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('clock').innerHTML =
    h + ":" + m;
  	var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
} 
function background(){
	var d = new Date();
	var n = d.getHours();
	if (n > 8 && n <= 12)
		document.body.style.backgroundImage = "url('images/morning.jpg')";	
	else if (n > 12 && n <= 16)
		document.body.style.backgroundImage = "url('images/afternoon.jpg')";
	else if (n > 16 && n <= 19) 	
		document.body.style.backgroundImage = "url('images/night1.jpg')";
	else if(n > 19 && n <= 22)
		document.body.style.backgroundImage = "url('images/night3.jpg')";
	else
		document.body.style.backgroundImage = "url('images/night2.jpg')";
} 
function start(){
	startTime();
	//background();
	//startTime();
}