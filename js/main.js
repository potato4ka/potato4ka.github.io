$(document).ready(function() {
	$('.toggle-box').each(function(){
		var $opener = $(this).find('.toggle-box__opener');
		var $content = $(this).find('.toggle-box__content');

		$opener.click(function (e) {
			$(this).next($content).toggle();
			event.preventDefault();
		})
	});

	$('.popup-opener').each(function(){
		var $modal = $(this).attr('href');
		var $page = $('.page');
		var $body = $('body');
		var $close = $($modal).find('.popup__close, .modal__footer, .popup__overlay');

		$(this).click(function(e){
			e.preventDefault();
			$($modal).addClass('open');
			$($page).addClass('blured');
			$($body).addClass('popup-open');
		});

		$close.click(function(e){
			e.preventDefault();
			$($modal).removeClass('open');
			$($page).removeClass('blured');
			$($body).removeClass('popup-open');
		});
	});

	$('.details-toggle').each(function(){
		var $modal = $(this).attr('href');
		var $close = $($modal).find('.details__close');

		$($modal).hide();

		$(this).click(function(e){
			e.preventDefault();
			$($modal).slideToggle();
		});

		$close.click(function(e){
			e.preventDefault();
			$($modal).slideUp();
		});
	});
});