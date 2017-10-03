$.fn.extend(
{
	closeModalBox: function()
	{
		var id = $(this).attr('id');
		var close_icon = $('<i>').css({'position':'fixed','top':'0','right':'0','z-index':'10','cursor':'pointer'}).addClass('material-icons box-shade circle').html('cancel').appendTo($(this)).click(function(){
		  	$('#'+id).modal('close');
			//$('#c'+p_id+'>li>.collapsible-body>ul')
		  });
	}
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
				//console.log($(this))

				if($(window).scrollTop() >  $(this).offset().top - dh1)
				{
					console.log($(this))
					$(this).delay(800).addClass("reset_style1");
				}
				
				
			});
			
			
			/*if($(window).scrollTop() >  $(this).offset().top - dh1)
			{
				area.delay(800).addClass("reset_style1");
			}*/
		});
		
	}
	
})

$.fn.extend({
	questionBox:function(q,f,h)
	{		
		$('#_question_action').off('click');
		$('#_question_action').click(f);
		$('#_question_text').html(q)

		$('#_question_dialog').modal('open');
	}
});



