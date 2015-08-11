function footMargin(){
	var moonHeight = $('.moon').height();
	var linkHeight = $('#footer-links').height();
	var theMargin = (moonHeight - linkHeight + 20)/2;
	$('#footer-links').css('top',theMargin);
}

// Document Ready
$(function(){
	footMargin();
});

// On Resize
$(window).resize(function(){
	footMargin();
});