document.getElementById("backbtn2").style.display = 'none';
document.getElementById("feed").style.display = 'block';
document.getElementById("feed").style.visibility = "hidden"; 
/*document.getElementById("twitter").style.display = 'block';
document.getElementById("twitter").style.visibility = "hidden"; 
$("#twitter").toggleClass("hide"); */
var clicks = 0;
$('a[href="#news"]').click(function(){
	if(clicks==0){
	document.getElementById("feed").style.visibility = 'visible';
	$("footer").hide();
		$('#header').hide();
	$("#feed").fadeIn(1000);
	$("#backbtn2").fadeIn();
	}	/*
	else{
	$("#feed").css({position: "relative"});
	document.getElementById("feed").style.visibility = 'visible';
	$("footer").hide();
		$('#header').hide();
	$("#feed").fadeIn(1000);
	$("#backbtn2").fadeIn();
	} */
	/*$('#header').fadeOut('3000', function() {
		document.getElementById("feed").style.visibility = "visible";
       $("#backbtn2").fadeIn();*/
       //$("#twitter").toggleClass("hide");
  //});
 // ++clicks;
}); 
$("#backbtn2").click(function(){
		$('#backbtn2').hide();
	document.getElementById("feed").style.visibility = "hidden";
	$("footer").show();
    $('#header').fadeIn();
	//$("#twitter").toggleClass("hide");
}); 
