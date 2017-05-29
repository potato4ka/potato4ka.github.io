$(document).ready(function() {
	$('.toggle-box').each(function(){
		var $opener = $(this).find('.toggle-box__opener');
		var $content = $(this).find('.toggle-box__content');

		$opener.click(function (e) {
			$(this).next($content).toggle();
			event.preventDefault();
		})
	});

	$('.slide-box').each(function(){
		var $opener = $(this).find('.slide-box__opener');
		var $content = $(this).find('.slide-box__content');

		$opener.click(function (e) {
			$(this).next($content).slideToggle();
			event.preventDefault();
		})
	});

	$('.popup-opener').each(function(){
		var $modal = $('#' + $(this).attr('data-value'));
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

	$('.dialog--toggle').each(function(){
		var $opener = $(this).find('.dialog__opener');
		var $close = $(this).find('.dialog__close, .dialog__field-close');
		var $content = $(this).find('.dialog__content');
		var $box = $(this);
		$opener.click(function(e){
			e.preventDefault();
			$($content).show();
			$($opener).hide();
			$($box).addClass('dialog--textfield');
		});

		$close.click(function(e){
			e.preventDefault();
			$($content).hide();
			$($opener).show();
			$($box).removeClass('dialog--textfield');
		});
	});
});