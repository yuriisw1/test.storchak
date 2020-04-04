let ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}


ready(() => {

	//-----MENU-----//
	jQuery(document).ready(function () {
		jQuery('.header__burger').click(function (event) {
			jQuery('.header__burger,.header__nav-block').toggleClass('active');
			jQuery('body').toggleClass('lock');
		});
	});

	jQuery(document).ready(function () {
		jQuery('.section__title').click(function () {
			jQuery(this).parents('.section').toggleClass("active").find('.section__column').slideToggle(700);
		})
	})

	jQuery(document).ready(function () {

		jQuery("a[href$='.jpg'], a[href$='.jpeg'], a[href$='.gif'], a[href$='.png']").magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-img-mobile',
			image: {
				verticalFit: true
			}

		});
	});

	//--SLICK-SLIDER-OPTIONS--//		
	jQuery(document).ready(function () {
		jQuery(".slider").slick({
			//--стрелки
			arrows: false,
			//--точки
			dots: true,
			//--автопрокрутка 
			autoplay: true,

			infinite: true,

			speed: 1000,

			fade: true,

			cssEase: 'linear'
		});
	});

	//IBG
	jQuery(document)[0].querySelectorAll(".ibg").forEach(el => {
		if (el.querySelector('img')) {
			el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
			el.querySelector('img').style.display = 'none';
		}
	});
});
