$(document).ready(function(){
	$('.welcome-carousel-inner').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		dots:false,
		nav:true,
		navText:["<img src='img/car-left.png'/>", "<img src='img/car-right.png'/>"]
	});

	$('.product-carousel-2').owlCarousel({
		items:4,
		margin:10,
		loop:true,
		autoplay:true,
		dots:false,
		nav:true,
		autoplayTimeout: 2000,
  		smartSpeed: 800,
		responsiveClass:true,
		navText:["<img src='img/black-angle-l.png'/>", "<img src='img/black-angle-r.png'/>"],
	 	responsive: {
	    0: {
	      items: 1
	    },

	    600: {
	      items: 3
	    },

	    1024: {
	      items: 4
	    },

	    1366: {
	      items: 4
	    }
	  }		
		})
})

	$(document).ready(function(){
    $('#qty_input').prop('disabled', true);
    $('#plus-btn').click(function(){
    	$('#qty_input').val(parseInt($('#qty_input').val()) + 1 );
    	    });
        $('#minus-btn').click(function(){
    	$('#qty_input').val(parseInt($('#qty_input').val()) - 1 );
    	if ($('#qty_input').val() == 0) {
			$('#qty_input').val(1);
		}
    });
 });



const fixedNav = document.querySelector('.header-middle-area');

window.addEventListener('DOMContentLoaded', function(){
	window.addEventListener('scroll', function(){
		const pageOffset =  window.pageYOffset;
		const offsetHeight = fixedNav.offsetHeight;
		if (pageOffset > 200) {
			fixedNav.classList.add('fixed-nav');
			document.body.style.paddingTop = offsetHeight + 'px';
		}else{
			fixedNav.classList.remove('fixed-nav');
			document.body.style.paddingTop = 0;
		}
	})
})