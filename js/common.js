$(function() {

	$('.btn-to-top').click(function (e) { 
		e.preventDefault();
		
		$('html,body').animate({scrollTop:0}, 600);
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1000) {
			$('.btn-to-top').fadeIn(200);
		} else {
			$('.btn-to-top').fadeOut(200);
		}
	});

	$('.menu-toggler').on('click', function(e) {
		$('.mobile-menu, .mobile-menu__inner').height( $(window).height() - $('.header').height() );
		
		$('body').toggleClass('menu-openned');
	});


	$('.slider').each(function(i, el) {
		const $slider = $(this);

		$slider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
		});

		const $slider_nav = $slider.siblings('.slider-nav');

		$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			$('.slider-nav__item.active', $slider_nav).removeClass('active');
			$('.slider-nav__item:eq(' + nextSlide + ')', $slider_nav).addClass('active');
		});


		$('.slider-nav__item', $slider_nav).on('click', function(e) {
			const index = $(this).index();
	
			$('.slider-nav__item.active', $slider_nav).removeClass('active');
	
			$(this).addClass('active');
	
			$slider.slick('slickGoTo', index);
		});

	});

	$('.mobile-menu__menu li.has-submenu > a').on('click', function () {
		$(this).parents('li').toggleClass('active')

		return false;
	});


	$(window).scroll(function () { 
		if( $(window).width() > 1199 ) {
			var scrollTop = $(window).scrollTop();
			
			if(scrollTop > 600) {
				$('body').addClass('header-fixed');
				$('body').css( 'padding-top', 130 );
			} else {
				$('body').removeClass('header-fixed');
				$('body').css( 'padding-top', 0 );
			}
		} else {
			$('body').removeClass('header-fixed');
		}
	});

});
