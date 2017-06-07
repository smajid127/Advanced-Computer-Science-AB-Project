document.getElementById("backbtn").style.display = 'none';
document.getElementById("calendar").style.display = 'block';
document.getElementById("calendar").style.visibility = "hidden";
$('a[href="#agenda"]').click(function(){
	document.getElementById("calendar").style.visibility = 'visible';
	$('#header').fadeOut('3000', function() {
       $("#calendar, #backbtn").fadeIn();
  });
}); 
$("#backbtn").click(function(){
	document.getElementById("calendar").style.visibility = 'hidden';
	$("#calendar, #backbtn").fadeOut('3000', function() {
       $('#header').fadeIn();
  });
}); 