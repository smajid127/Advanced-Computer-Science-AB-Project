document.getElementById("backbtn").style.display = 'none';
document.getElementById("calendar").style.display = 'block';
document.getElementById("calendar").style.visibility = "hidden";
$('a[href="#agenda"]').click(function(){
	document.getElementById("calendar").style.visibility = 'visible';
	$("footer").hide();
	$('#header').hide();
	$("#calendar").fadeIn(1000);
	$("#backbtn").fadeIn();	
}); 
$("#backbtn").click(function(){
	document.getElementById("calendar").style.visibility = 'hidden';
	$("footer").show();
	$("#calendar, #backbtn").hide();
	$('#header').fadeIn();
}); 