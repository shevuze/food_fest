;(function($) {
	"use strict";

	$('.ba-tab').on('click', function(e){
		$('.ba-tab').removeClass('ba-active');
		$(this).addClass('ba-active');

		var name = $(this).find('a').attr('href');

		$('.ba-tab-content').removeClass('content-open');
		$(name).addClass('content-open');
	});
})(jQuery);