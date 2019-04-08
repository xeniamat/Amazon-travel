
	<!--СКРИПТ НА НОВОСТИ-ГАРМОШКУ-->
	
	$(function(){
	$('.source .hide').hide();
	$a = $('.source a');
	$a.on('click', function(event) {
	event.preventDefault();
	$a.not(this).next().slideUp(500);
	$(this).next().slideToggle(500);
	});
	});


