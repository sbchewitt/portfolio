$(document).ready(function(){

	//GLOBAL VARIABLES
	var originalHeight = "25%";
	var fullHeight = "77%";
	var smallHeight = "5%";
	var windowHeight = $(window).height();
	var	slideHeight = (77/100) * windowHeight;

	function positions(){
		$(".nameplate").css("margin-top",0);
		$(".nameplate").css("margin-left",0);
		$(".nameplate").css({position:"static",top:'auto'});
		$(".contentplate").css({position:"static",top:'auto'});
	}
	
	
	//PAGE LOAD ANIMATION
	$(".nameplate").animate({height:"250px",width:"500px",marginTop:"-125px",marginLeft:"-250px"},500,"easeOutBack",function(){
		$(".content h1").animate({top:"40%",opacity:1},500, 'easeOutBounce', function(){
			$(".content p").animate({opacity:1},500,function(){
				$(".nameplate").animate({top:"125px"},500,function(){
					$(".content h1").animate({top:"30%"},500);
					$(".content p").animate({top:"30%",marginTop:"40px"},500);
					$(".nameplate").animate({height:originalHeight,width:"100%",marginLeft:"-50%"},500,"easeOutSine",function(){
						$(".content h1").addClass("animated");
						$(".content p").addClass("animated");
						$(".workplate").animate({top:"25%"},500,function(){
							$(".aboutplate").animate({top:"50%"},500, function(){
								$(".contactplate").animate({top:"75%"},500, function(){
									$(".nameplate").delay(500).animate({opacity:"1"},0,positions);
								});
							});
						});
					});
				});
			});
		});
	});

	//CLICK INTERACTIONS FOR PLATES
	$(".contentplate").click(function(){
    
	    if ($(this).hasClass("active")){
	    	if ($(this).hasClass("aboutplate") || $(this).hasClass("contactplate")){
    		  $(this).toggleClass("active");
		      if($(this).hasClass("aboutplate")){
		      	$(".aboutcontent").fadeOut("fast");
		      }
		      else{
		      	$(".contactcontent").fadeOut("fast");
		      }
		      $(".contentplate").not(this).toggleClass("mini");
		      $(".nameplate").animate({height:"25%"},1000);
	    	}
	    }
	    
	    else if ($(this).hasClass("mini")){
	      $(this).removeClass("mini");
	      $(this).addClass("active");
	      if($(this).hasClass("workplate")){
			setTimeout(function(){
				$(".workcontent").fadeIn("fast", function(){
					$(".workplate .platetitle h1").css({"color":"lightgrey","z-index":"10"});
				});
			}, 1200);
			$(".aboutcontent").fadeOut("fast");	
			$(".contactcontent").fadeOut("fast");			
		  }
		  else if ($(this).hasClass("aboutplate")){
		  	setTimeout(function(){
				$(".aboutcontent").fadeIn("fast");
			}, 1200);
		  	$(".workcontent").fadeOut("fast", function(){
		  		$(".workplate .platetitle h1").css({"color":"#000","z-index":"3"});
		  	});
		  	$(".contactcontent").fadeOut("fast");
		  }
		  else{
		  	setTimeout(function(){
				$(".contactcontent").fadeIn("fast");
			}, 1200);
			$(".workcontent").fadeOut("fast", function(){
				$(".workplate .platetitle h1").css({"color":"#000","z-index":"3"});
			});
			$(".aboutcontent").fadeOut("fast");
		  }
	      $(".contentplate").not(this).removeClass("active");
	      $(".contentplate").not(this).addClass("mini");  
	    }
	    
	    else{
	      $(this).toggleClass("active");
		  if($(this).hasClass("workplate")){
			setTimeout(function(){
				$(".workcontent").fadeIn("fast", function(){
					$(".workplate .platetitle h1").css({"color":"lightgrey","z-index":"10"});
				});
			}, 1200);				
		  }
		  else if($(this).hasClass("aboutplate")){
			setTimeout(function(){
				$(".aboutcontent").fadeIn("fast");
			}, 1200);				
		  }
		  else{
		  	setTimeout(function(){
				$(".contactcontent").fadeIn("fast");
			}, 1200);
		  }
	      $(".contentplate").not(this).toggleClass("mini");
	      $(".nameplate").animate({height:"20%"},1000);
	    }
	});

	//WORKPLATE CLOSE INTERACTION
	$(".close-button").click(function(){
		var plate = $(".close-button").closest(".contentplate");
		$(".workcontent").fadeOut("fast" ,function(){
			$(".workplate .platetitle h1").css({"color":"#000","z-index":"3"});
			$(".contentplate").removeClass("active");
			$(".contentplate").removeClass("mini");
		});
		$(".nameplate").animate({height:"25%"},1000);
	});

	//WORKPLATE SLIDER FUNCTIONALITY
	//OUTER SLIDER
	$(".next").click(function(){
	    var pageWidth = $(window).width();
	    $(".slide-container").animate({left:"-="+pageWidth},function(){
	      $(".outer-slide:first-child").appendTo(".slide-container");
	      $(".slide-container").css({"left":"+="+pageWidth});
	    });
	 });
	$(".previous").click(function(){
		var pageWidth = $(window).width();
		$(".slide-container").animate({left:"+="+pageWidth},function(){
		  $(".outer-slide:last-child").prependTo(".slide-container");
		  $(".slide-container").css({"left":"-="+pageWidth});
		});
	});

	//WORKPLATE SLIDER FUNCTIONALITY
	//OUTER SLIDER
	$(".buttonup").click(function(){
		var buttonParent = $(this).parent();
		var targetSlider = $(buttonParent).find(".inner-slide");
		var targetSlides = $(targetSlider).find(".slide:first-child");
		$(targetSlider).animate({top:"-="+slideHeight+"px"},function(){
			$(targetSlides).appendTo($(targetSlider));
			$(targetSlider).css({"top":"+="+slideHeight+"px"});
		});
	});
	$(".buttondown").click(function(){
		var buttonParent = $(this).parent();
		var targetSlider = $(buttonParent).find(".inner-slide");
		var targetSlides = $(targetSlider).find(".slide:last-child");
		$(targetSlider).animate({top:"+="+slideHeight+"px"},function(){
			$(targetSlides).prependTo($(targetSlider));
			$(targetSlider).css({"top":"-="+slideHeight+"px"});
		});
	});

	//WORKPLATE SLIDER ON WINDOW RESIZE
	$(window).resize(function(){
		var slideWindowWidth = $(window).width();
		$(".slide-container").css({"left":"-"+slideWindowWidth+"px"});

		windowHeight = $(window).height();
		slideHeight = (77/100) * windowHeight;
		$(".inner-slide").css({"top":"-"+slideHeight+"px"});
		$(".slide").css({"height":slideHeight+"px"});
	});

});