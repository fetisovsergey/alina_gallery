//= require jquery
//= require bootstrap
//= require jquery_ujs
//= require jquery.turbolinks
//= require turbolinks
//= require fancybox
//= require masonry/jquery.masonry
//= require isotope
//= require bxslider
//= require_self
//= require_directory .


$(document).on('turbolinks:load',function() {
	
	var scrollTriggerLogo = 20
	var scrollTrigger = 900
	
	displayLogo = function ()
	{
    var screen_width = $(window).width();
		var scrollTop = $(window).scrollTop();
		if (scrollTop > scrollTriggerLogo && screen_width > 766)
		{
			$('#logo').css('display','none');
		} else {
			$('#logo').css('display','');
		}
		if (scrollTop > scrollTrigger) {
      $('#back-to-top').addClass('show');
    } else {
      $('#back-to-top').removeClass('show');
    }
		if (scrollTop > scrollTriggerLogo) {
      $('.navbar-custom').css('background','rgba(255,255,255,0.9)');
    } else {
      $('.navbar-custom').css('background','#fff');
    }
  };
	isotope = function()
  {
    $('.list').isotope({itemSelector: '.item', layoutMode: 'masonry'
      , masonry: {isFitWidth: true}
      , transitionDuration: 0
      , stagger: 0
    });
  };

	$(window).on('scroll', function(event) {
		displayLogo();
	});

	$('#back-to-top').on('click', function (e) {
        	e.preventDefault();
        	$('html,body').animate({scrollTop: 0}, 500);
    	});

	$('.bxslider').bxSlider({
		pagerCustom: '#bx-pager',
		nextText: '', prevText: ''
	});

	$('.list').imagesLoaded(function(){
		isotope();
	});

  if ($('.pagination').length) {
    $(window).scroll(function() {
        var url;
        url = $('.pagination .next_page a').attr('href');
        if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 550) {
          $('.list').imagesLoaded(function(){
            $('.list').isotope('reloadItems').isotope();
          });
          $('.pagination').css('display','block');
          $('.pagination').html('<img src="/ajax-loader.gif" style="width:50px" alt="Loading..." title="Loading..." />');
          $.getScript(url);
        }
        return $(window).scroll();
    });
  };

});
