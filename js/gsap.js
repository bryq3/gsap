$(document).ready(function(){
	var logo= $('.logo'),
		listItem=$('li'),
		header=$('.headText'),
		log=$('.headLogo')
		
TweenMax.from(logo , 1, {scale: 0.5, opacity:0, x:-100, ease:Bounce.easeOut, delay: 0.4});
TweenMax.staggerFrom(listItem, 1, {opacity:0, y:-40,ease:Elastic.easeInOut, delay:0.1}, 0.1);
TweenMax.from(header, 1, {y:-30, opacity:0, ease: Expo.easeInOut, delay:0.6});
TweenMax.from(log, 1, {y:-30, opacity:0, ease: Expo.easeInOut, delay:0.8});




$(window).scroll(function(){
	var serviceImg= $('.serviceImg'),
		serviceDes= $('.serviceDes');
	$('#sectionTwo').scrollTop(function(){
		TweenMax.staggerFrom(serviceDes, 0.4, {opacity:0, y:30, delay:1.6}, 0.1)
		
	});
});
	//init scroll magic
	var controller = new ScrollMagic.Controller();
	//build a scene
	var ourScene= new ScrollMagic.Scene({
		triggerElement:'.service1'
	})
	.setClassToggle('.serviceImg', 'fadeIn')
	.addTo(controller);
	
	//scene2
	var ourScene2= new ScrollMagic.Scene({
		triggerElement:'#sectionTwo'
	})
	.setClassToggle('.element', 'fadeIn2')
	.addTo(controller);
});
