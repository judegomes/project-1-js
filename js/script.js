$(document).ready(function(){

// click
$('#panel').click(function(){
	$('#content').fadeToggle(1000);
});





$('#btn').click(function(){
	$('h1').hide(2000);
});
$('#show').click(function(){
	$('h1').show("fast");
});
$('#toggle').click(function(){
	$('h1').toggle();
});
$("#fadeout").click(function(){
	$('h1').fadeOut();
});
$('#fadein').click(function(){
	$('h1').fadeIn();
});
$('#fadetoggle').click(function(){
	$('h1').fadeToggle();
})
});