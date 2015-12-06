$(function(){
	//Function to Fix Pages Height
	function fixPagesHeight() {
	    $('.swiper-pages').css({
			height: $(window).height()-$("#footer").height()
		})
	}
	$(window).on('resize',function(){
		fixPagesHeight()
	})
	fixPagesHeight()

	//Init Pages
	var pages = $('.swiper-pages').swiper()

	//Scroll Containers
	$('.scroll-container').each(function(){
		$(this).swiper({
			mode:'vertical',
			scrollContainer: true,
			mousewheelControl: true,
			scrollbar: {
				container:$(this).find('.swiper-scrollbar')[0]
			}
		})
	})
})
