// When the DOM is ready, run this function
$(document).ready(function () {
	"use strict"; // Start of use strict

	var $gallery_carousel = $(".gallery-carousel");
	var $location_carousel = $(".location-carousel");
	var $amenities_carousel = $(".amenities-carousel");
	var $amenities_carousel2 = $(".amenities-carousel2");
	var $footer_quote = $(".footer-quote");
	var $funeral_carousel = $(".funeral-carousel");
	var $home_carousel = $(".home-carousel");
	var $home_carousel2 = $(".home-carousel2");
	var $home_carousel3 = $(".home-carousel3");
	var $ho_carousel = $(".ho-carousel");
	var $service_carousel = $(".service-carousel");
	var $shop_carousel = $(".shop-carousel");

	// SHOP CAROUSEL
	if ($shop_carousel.length && $.fn.slick) {
		$shop_carousel.slick({
			autoplay: false,
			dots: true,
			prevArrow: $('.prev8'),
			nextArrow: $('.next8'),
			customPaging: function (slider, i) {
				var thumb = $(slider.$slides[i]).data('thumb');
				return '<a><img src="' + thumb + '"></a>';
			},

			responsive: [{
				breakpoint: 500,
				settings: {
					infinite: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	}

	// GALLERY CAROUSEL
	if ($gallery_carousel.length && $.fn.slick) {
		$gallery_carousel.slick({

			infinite: true,
			autoplay: false,
			dots: true,
			arrows: false,
			customPaging: function (slider, i) {
				var thumb = $(slider.$slides[i]).data('thumb');
				return '<a><img src="' + thumb + '"></a>';
			},

			responsive: [{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	}

	// LOCATION CAROUSEL
	if ($location_carousel.length && $.fn.slick) {
		$location_carousel.slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			prevArrow: $('.prev'),
			nextArrow: $('.next'),
			responsive: [{
				breakpoint: 768,
				settings: {
					dots: true,
					arrows: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	}

	// FACILITIES CAROUSEL
	if ($amenities_carousel.length && $.fn.slick) {
		$amenities_carousel.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false
		});
	}

	// AMENITIES CAROUSEL
	if ($amenities_carousel2.length && $.fn.slick) {
		$amenities_carousel2.slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: $('.prev2'),
			nextArrow: $('.next2'),
			responsive: [{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 540,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	// FOOTER TESTIMONIAL CAROUSEL
	if ($footer_quote.length && $.fn.slick) {
		$footer_quote.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false
		});
	}

	if ($funeral_carousel.length && $.fn.slick) {
		$funeral_carousel.slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			vertical: true,
			prevArrow: $('.prev3'),
			nextArrow: $('.next3'),
			responsive: [{
				breakpoint: 993,
				settings: {
					dots: false,
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}]
		});
	}

	// HOME CAROUSEL
	if ($home_carousel.length && $.fn.slick) {
		$home_carousel.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: true,
			prevArrow: $('.prev4'),
			nextArrow: $('.next4'),
			responsive: [{
				breakpoint: 993,
				settings: {
					arrows: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	}

	if ($home_carousel2.length && $.fn.slick) {
		$home_carousel2.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: $('.prev5'),
			nextArrow: $('.next5'),
			responsive: [{
				breakpoint: 993,
				settings: {
					arrows: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	}

	if ($home_carousel3.length && $.fn.slick) {
		$home_carousel3.slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: $('.prev6'),
			nextArrow: $('.next6'),
			responsive: [{
				breakpoint: 993,
				settings: {
					arrows: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	}


	// ACCORDION
	function toggleChevron(e) {
		$(e.target)
			.prev('.accordion-heading')
			.find("i.indicator")
			.toggleClass('fa-chevron-right fa-chevron-down');
	}
	$('#accordion').on('hidden.bs.collapse', toggleChevron);
	$('#accordion').on('shown.bs.collapse', toggleChevron);

	// HOME CAROUSEL
	if ($ho_carousel.length && $.fn.slick) {
		$ho_carousel.slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: $('.ho-prev'),
			nextArrow: $('.ho-next'),
			responsive: [{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 540,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	// SERVICE CAROUSEL
	if ($service_carousel.length && $.fn.slick) {
		$service_carousel.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: true,
			prevArrow: $('.prev7'),
			nextArrow: $('.next7')
		});
	}

	new WOW().init();

	$(".cart-header").on("click", function () {
		$(this).toggleClass("cart-show");
	});

	$(".cart-header2").on("click", function () {
		$(this).toggleClass("cart-show");
	});

});

function resizeScrenn() {
	if ($(window).width() >= 576) {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 30) {
				$('.homepage-overlay').addClass("fixed-menu");
				$('.header-top').css("display", "none");
				$('.homepage-overlay').css("height", "60px");
				$('.header4 .container > .row > .col-md-3').css("height", "60px");
				$('.header4 .navbar-default').css("height", "60px");
				$('.header4 .navbar-default').css("padding", "0");
				$('.header4.header5 .navbar-default').css("display", "flex");
				$('.header4.header5 .navbar-default').css("align-items", "center");
				$('.header4.header5 .navbar-default').css("justify-content", "flex-end");



			} else {
				$('.homepage-overlay').removeClass("fixed-menu");
				$('.header-top').css("display", "flex");
				$('.homepage-overlay').css("height", "100px");
				$('.header4 .container > .row > .col-md-3').css("height", "100px");
				$('.header4 .navbar-default').css("height", "100px");
				$('.header4 .navbar-default').css("padding-top", "21px");
				$('.header4.header5 .navbar-default').css("display", "block");
			}
		});
	}
}
resizeScrenn();
$(window).resize(function () {
	resizeScrenn();
});

function resizeScrenn1() {
	if ($(window).width() < 576) {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1) {
				$('.homepage-overlay').addClass("fixed-menu");
				$('.homepage-overlay').css("height", "60px");
				$('.header4 .container > .row > .col-md-3').css("height", "60px");
				$('.header4 .navbar-default').css("height", "60px");
				$('.header4 .navbar-default').css("padding", "0");
				$('.header4.header5 .navbar-default').css("display", "flex");
				$('.header4.header5 .navbar-default').css("align-items", "center");
				$('.header4.header5 .navbar-default').css("justify-content", "flex-end");
				$('.header4.header5 .navbar-toggle').css("top", "0");
				$('.header4.header5 .navbar-collapse').css("top", "60px");
			} else {
				$('.homepage-overlay').removeClass("fixed-menu");
				$('.homepage-overlay').css("height", "100px");
				$('.header4 .container > .row > .col-md-3').css("height", "100px");
				$('.header4 .navbar-default').css("height", "100px");
				$('.header4 .navbar-default').css("padding-top", "21px");
				$('.header4.header5 .navbar-default').css("display", "block");
				$('.header4.header5 .navbar-toggle').css("top", "20px");
				$('.header4.header5 .navbar-collapse').css("top", "100px");
			}
		});
	}
}
resizeScrenn1();
$(window).resize(function () {
	resizeScrenn1();
});



$(document).ready(function () {
	/**
	 * При прокрутке страницы, показываем или срываем кнопку
	 */
	$(window).scroll(function () {
		// Если отступ сверху больше 50px то показываем кнопку "Наверх"
		if ($(this).scrollTop() > 100) {
			$('.top_link_cont').fadeIn();
		} else {
			$('.top_link_cont').fadeOut();
		}
	});

	/** При нажатии на кнопку мы перемещаемся к началу страницы */
	$('.top_link_cont').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

});

$(document).ready(function () {
	$(".location").click(function () {

		$("ul.submenu").css("display", "block");

	})
});


$(window).ready(function(){
	$("a.List").click(function (){
		$("a.List").addClass("active");
		$(".Rectangle").removeClass("active");
		$("#list-item").css("display", "block");
		$("#rectangle").css("display", "none");


	});

	$("a.Rectangle").click(function (){
		$("a.Rectangle").addClass("active")
		$(".List").removeClass("active")
		$("#list-item").css("display", "none");
		$("#rectangle").css("display", "block");

	});
});

$(document).mouseup(function (e) {
	var container = $("ul.submenu");
	if (container.has(e.target).length === 0) {
		container.hide();
	}
});

$('.js-example-basic-multiple').select2({
	search: false,
});


