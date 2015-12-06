$(function(){
	//Challenges
	//todo: change intialSlide depending on the content, and hide the tutorial slides after first session
	challengesSwiper = $('.challenges').swiper({
		centeredSlides: true,
		initialSlide:0,
		mode:'horizontal',
		loop: true
	})
	
	//Videos
	$('.videos-container').each(function(){
		$(this).swiper({
		centeredSlides: true,
		initialSlide:1,
		mode:'horizontal',
		loop: true
		})
	})
})
