(function ($) {
    "use strict";
    $(document).ready(function () {

        $('.mobile-menu-toggle').on('click', function () {
            $('.student-sidebar').addClass('show-sidebar');
            $('body').toggleClass('menu-has-opened');
        });

        $('.schedule-tabs .schedule-tab').on('click', function () {
            $('.time-table').hide();
            var dataId = $(this).data('id');
            $('#' + dataId).slideDown();
            $('.schedule-tabs .schedule-tab').removeClass('active');
            $(this).addClass('active');
        });

		//home intro slider
		$('.home-intro-slider').bxSlider({
			auto: true,
			autoControls: false,
			stopAutoOnClick: true,
			pager: false,
			nextText: '',
			prevText: ''
		});

		//slider with pager
		$('.slider-with-pager').bxSlider({
			auto: true,
			autoControls: false,
			stopAutoOnClick: true,
			pager: true,
			nextText: '',
			prevText: ''
		});

		//home customers list carousel
        $('.customer-list-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: false,
			autoplay: true,
			autoplayHoverPause: true,
			navText: ['Prev','Next'],
			controls: false,
			// center:true,
			autoplayTimeout:2000,
			responsive: {
				0: {
					items: 1
				},
				1000: {
					items: 6
				},
				2000: {
					items: 6
				}
			}
        });
    });
})(jQuery);