$(document).ready(function(){



	// tabs 

 	$('#myTabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});



	// bxslider
	$('.bxslider').bxSlider({
	  minSlides: 3,
	  maxSlides: 3,
	  slideWidth: 360,
	  slideMargin: 20,
	  pager: false


	});




});