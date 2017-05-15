$(document).ready(function() {
	$('.toggle-box').each(function(){
		var $opener = $(this).find('.toggle-box__opener');
		var $content = $(this).find('.toggle-box__content');

		$opener.click(function (e) {
			$(this).next($content).toggle();
			event.preventDefault();
		})
	});

	$('.modal-opener').each(function(){
		var $modal = $(this).attr('href');
		var $page = $('.page');
		var $close = $($modal).find('.modal-close');

		$(this).click(function(e){
			e.preventDefault();
			$($modal).addClass('open');
			$($page).addClass('blured');
		});

		$close.click(function(e){
			e.preventDefault();
			$($modal).removeClass('open');
			$($page).removeClass('blured');
		});
	});

	$('.details-opener').each(function(){
		var $modal = $(this).attr('href');
		var $close = $($modal).find('.details__close');

		$($modal).hide();

		$(this).click(function(e){
			e.preventDefault();
			$($modal).slideDown();
		});

		$close.click(function(e){
			e.preventDefault();
			$($modal).slideUp();
		});
	});
});