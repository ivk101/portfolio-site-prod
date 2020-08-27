$(function(){ 

	var swiper = new Swiper('.swiper-container', { 
		pagination: {          
			el: '.swiper-pagination', 
			clickable: true,           
		},
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,   

		breakpoints: {    
    768: {
    	    spaceBetween: 40,
    	    slidesPerView: 2,
    	    slidesPerGroup: 2,             
    },
    
    1248: {        	        	
        	navigation: {
        		nextEl: '.swiper-button-next',
        		prevEl: '.swiper-button-prev'
        	},
        	pagination: {
        		el: null,
        	},
        	slidesPerView: 3,
        	slidesPerGroup: 3,
        	spaceBetween: 29,
        }
    }    

});

	$('.open-menu').click(function(){
		$('.dropdown').slideDown(1000);
		$('.overlay').css('display', 'block');

		$('.close').click(function(){
			$('.dropdown').slideUp(1000);
			$('.overlay').css('display', 'none');
		})
		$('.overlay').click(function(){
			$('.dropdown').slideUp(1000);
			$('.overlay').css('display', 'none');
		})		
		$('.dropdown-nav__link').click(function(){
			$('.dropdown').slideUp(1000);
			$('.overlay').css('display', 'none');
		})
	})
});

