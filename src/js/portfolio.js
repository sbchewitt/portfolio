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
	$(".nameplate").animate({height:"250px",width:"630px",marginTop:"-125px",marginLeft:"-315px"},500,"easeOutBack",function(){
		$(".content h1").animate({top:"40%",opacity:1},500, 'easeOutBounce', function(){
			$(".content p").animate({opacity:1},500,function(){
				$(".nameplate").animate({top:"125px"},500,function(){
					$(".content h1").animate({top:"30%"},500);
					$(".content p").animate({top:"40%",marginTop:"40px"},500);
					$(".nameplate").animate({height:originalHeight,width:"100%",marginLeft:"-50%"},500,"easeOutSine",function(){
						$(".content h1").addClass("animated");
						$(".content p").addClass("animated");
						$(".big-name").fadeIn("fast");
						$(".workplate").animate({top:"25%"},500,function(){
							$(".aboutplate").animate({top:"50%"},500, function(){
								$(".contactplate").animate({top:"75%"},500, function(){
									$(".nameplate").delay(500).animate({opacity:"1"},500,positions);
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
	      	$(".workplate .platetitle h1").fadeOut("fast");
			setTimeout(function(){
				$(".workcontent").fadeIn("fast");
				$(".workplate .platetitle h1").fadeIn("fast");
				$(".workplate .platetitle h1").css({"z-index":"10"});
				isSliderOn = true;
				slider();
			}, 1000);
			$(".aboutcontent").fadeOut("fast");	
			$(".contactcontent").fadeOut("fast");			
		  }
		  else if ($(this).hasClass("aboutplate")){
		  	isSliderOn = false;
		  	$(".aboutplate .platetitle h1").fadeOut("fast");
		  	setTimeout(function(){
				$(".aboutcontent").fadeIn("fast");
				$(".aboutplate .platetitle h1").fadeIn("fast");
			}, 1000);
		  	$(".workcontent").fadeOut("fast", function(){
		  		// $(".workplate .platetitle h1").css({"color":"#000","z-index":"3"});
		  	});
		  	$(".contactcontent").fadeOut("fast");
		  }
		  else{
		  	isSliderOn = false;
		  	$(".contactplate .platetitle h1").fadeOut("fast");
		  	setTimeout(function(){
				$(".contactcontent").fadeIn("fast");
				$(".contactplate .platetitle h1").fadeIn("fast");
			}, 1000);
			$(".workcontent").fadeOut("fast", function(){
				// $(".workplate .platetitle h1").css({"color":"#000","z-index":"3"});
			});
			$(".aboutcontent").fadeOut("fast");
		  }
	      $(".contentplate").not(this).removeClass("active");
	      $(".contentplate").not(this).addClass("mini");  
	    }
	    
	    else{
	      $(this).toggleClass("active");
		  if($(this).hasClass("workplate")){
		  	$(".workplate .platetitle h1").fadeOut("fast");
			setTimeout(function(){
				$(".workcontent").fadeIn("fast");
				$(".workplate .platetitle h1").fadeIn("fast");
				$(".workplate .platetitle h1").css({"z-index":"10"});
				isSliderOn = true;
				slider();
			}, 1000);	

		  }
		  else if($(this).hasClass("aboutplate")){
		  	$(".aboutplate .platetitle h1").fadeOut("fast");
			setTimeout(function(){
				$(".aboutcontent").fadeIn("fast");
				$(".aboutplate .platetitle h1").fadeIn("fast");
			}, 1000);				
		  }
		  else{
		  	$(".contactplate .platetitle h1").fadeOut("fast");
		  	setTimeout(function(){
				$(".contactcontent").fadeIn("fast");
				$(".contactplate .platetitle h1").fadeIn("fast");
			}, 1000);
		  }
	      $(".contentplate").not(this).toggleClass("mini");
	      $(".nameplate").animate({height:"20%"},1000);
	    }
	});

	$(".contentplate a").click(function(e) {
        e.stopPropagation();
    });

    $(".contentplate form").click(function(e) {
        e.stopPropagation();
    });

	//WORKPLATE CLOSE INTERACTION
	$(".close-button").click(function(){
		isSliderOn = false;
		var plate = $(".close-button").closest(".contentplate");
		$(".workplate .platetitle h1").fadeOut("fast");
		$(".workcontent").fadeOut("fast",function(){
			$(".contentplate").removeClass("active");
			$(".contentplate").removeClass("mini");
			$(".workplate .platetitle h1").fadeIn("slow");
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
	
	var isSliderOn = true;

	function slider(){
		if (isSliderOn){
			var Parent = $(".outer-slide:nth-child(2)");
			var targetSlider = $(Parent).find(".inner-slide");
			var targetSlides = $(targetSlider).find(".slide:first-child");
			slideHeight = $(".workcontent").height();
			$(targetSlider).delay(2000).animate({"top":"-="+slideHeight+"px"},function(){
				
				$(targetSlides).appendTo($(targetSlider));
				$(targetSlider).css({"top":"+="+slideHeight+"px"});
				$("body").delay(100).animate({"opacity":1},function(){
					slider();
				});
				
			});
		}
		
	};

	var beingResized = true;

	//WORKPLATE SLIDER ON WINDOW RESIZE
	$(window).resize(function(){
		isSliderOn = false;
		var slideWindowWidth = $(window).width();
		$(".slide-container").css({"left":"-"+slideWindowWidth+"px"});
		slideHeight = $(".workcontent").height();
		$(".inner-slide").css({"top":"-"+ slideHeight +"px"});
		$(".slide").css({"height":slideHeight+"px"});
		if (beingResized){
			beingResized = false;
			setTimeout(function(){
				isSliderOn = true;
				slider();
				beingResized = true;
			}, 2100);
		}
	});

});