$(window).scroll(function(){
	var windowScroll= $(this).scrollTop();
	
	$(".headText").css({
		'transform': 'translate(0px, '+ windowScroll/2 +'%)',
		'opacity': 1 - windowScroll/600 
		
	});
	$(".headLogo").css({
		'transform': 'translate(0px, -'+windowScroll/2 +'%)',
		'opacity': 1 - windowScroll/600
	});
	if(windowScroll > $('.item').offset().top - ($(window).height()/1.2)){
		
		$('.item').each(function(i){
			setTimeout(function(){
			$('.item').eq(i).addClass("show");
			}, 150*(i+1));
		});
	}
	if(windowScroll>$(".periscopeContent").offset().top - $(window).height()){
		$(".periscopeContent").css({'background-position':'center '+windowScroll - $(".periscopeContent").offset().top+'px'});
		
		var opacity = (windowScroll - $(".periscopeContent").offset().top + 400)/ (windowScroll/5);
		
		$('.promo').css({'opacity': opacity})
	}
});
