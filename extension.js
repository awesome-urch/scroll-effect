$(document).ready(function(){
	$('.appear-east,.appear-west,.appear-north,.appear-south,.appear-normal').scrollEffect();
})
$.fn.extend({
	scrollEffect: function()
	{
		device_ht = screen.height;
	  	var dh1 = device_ht/1.5;
		div = $(this);
		
		$(window).scroll(function() {
			
			$(div).each(function(index, element) 
			{

				if($(window).scrollTop() >  $(this).offset().top - dh1)
				{

					$(this).delay(800).addClass("reset-style");
				}
				
				
			});
			
		});
		
	}
	
})



