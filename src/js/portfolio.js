$(document).ready(function(){

	//GLOBAL VARIABLES
	var originalHeight = "25%";
	var fullHeight = "77%";
	var smallHeight = "5%";
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var	slideHeight = (77/100) * windowHeight;

	function positions(){
		$(".nameplate").css("margin-top",0);
		$(".nameplate").css("margin-left",0);
		$(".nameplate").css({position:"static",top:'auto'});
		$(".contentplate").css({position:"static",top:'auto'});
	}
	
	$(".background-picture").css({"height":windowHeight+"px"});

	//PAGE LOAD ANIMATION
	if (windowWidth > 1024){
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
	}
	else{
		$(".nameplate").animate({height:"250px",width:"630px",marginLeft:"-315px",marginTop:"-125px"},500,"easeOutBack",function(){
			$(".content h1").animate({top:"40%",opacity:1},500, 'easeOutBounce',function(){
				$(".content p").animate({opacity:1},500,function(){
					$(".nameplate").animate({top:0,marginTop:0},500,function(){
						$(".content h1").animate({top:"30%"},500);
	 					$(".content p").animate({top:"40%",marginTop:"40px"},500);
	 					$(".nameplate").animate({height:"150px",width:"100%",left:0,marginLeft:0},500,"easeOutSine",function(){
	 						$(".content h1").addClass("animated");
							$(".content p").addClass("animated");
							$(".big-name").fadeIn("fast",function(){
								$("body").addClass("body-active");
								$(".aboutplate, .contactplate").delay(500).animate({opacity:"0.9"});
								$(".workplate").delay(500).animate({opacity:"1"});
								slider();
							});
	 					});
					});
				});
			});
		});
	}
	

	//CLICK INTERACTIONS FOR PLATES
	if (windowWidth > 1024){
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
				$(".workcontent").fadeIn("fast",function(){
					slider();
				});
				$(".workplate .platetitle h1").fadeIn("fast");
				$(".workplate .platetitle h1").css({"z-index":"10"});
			}, 1000);
			$(".aboutcontent").fadeOut("fast");	
			$(".contactcontent").fadeOut("fast");			
		  }
		  else if ($(this).hasClass("aboutplate")){
		  	$(".aboutplate .platetitle h1").fadeOut("fast");
		  	setTimeout(function(){
				$(".aboutcontent").fadeIn("fast");
				$(".aboutplate .platetitle h1").fadeIn("fast");
			}, 1000);
		  	$(".workcontent").fadeOut("fast");
		  	$(".contactcontent").fadeOut("fast");
		  }
		  else{
		  	$(".contactplate .platetitle h1").fadeOut("fast");
		  	setTimeout(function(){
				$(".contactcontent").fadeIn("fast");
				$(".contactplate .platetitle h1").fadeIn("fast");
			}, 1000);
			$(".workcontent").fadeOut("fast");
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
				$(".workcontent").fadeIn("fast",function(){
					slider();
				});
				$(".workplate .platetitle h1").fadeIn("fast");
				$(".workplate .platetitle h1").css({"z-index":"10"});
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
	}

	$(".contentplate a").click(function(e) {
        e.stopPropagation();
    });

    $(".contentplate form").click(function(e) {
        e.stopPropagation();
    });

	//WORKPLATE CLOSE INTERACTION
	$(".close-button").click(function(){
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
	

	//WORKPLATE SLIDER FUNCTIONALITY
	//INNER SLIDER
	function slider(){

		var Parent = $(".outer-slide:nth-child(2)");
		var targetSlider = $(Parent).find(".inner-slide");

		var numOfSlides = $(targetSlider).find(".slide").length;

		if (numOfSlides > 1){
			$(targetSlider).delay(2000).animate({"top":"-100%"},function(){
				var targetSlides = $(targetSlider).find(".slide:first-child");
				$(targetSlides).appendTo($(targetSlider));
				$(targetSlider).css({"top":"0"});
				$("body").delay(100).animate({"opacity":1},function(){
					slider();
				});
			});
		}
		else{
			$("body").delay(100).animate({"opacity":1},function(){
				slider();
			});
		}
	};

	//WORKPLATE SLIDER ON WINDOW RESIZE
	$(window).resize(function(){
		var slideWindowWidth = $(window).width();
		$(".slide-container").css({"left":"-"+slideWindowWidth+"px"});

		windowHeight = $(window).height();
		$(".background-picture").css({"height":windowHeight+"px"});
	});

	$(".slide-window").resize(function(){
		var slideWindowWidth = $(window).width();
		$(".slide-container").css({"left":"-"+slideWindowWidth+"px"});
	});

	//SENDING THE EMAIL FORM
	$(".email-button").click(function(e){
		e.preventDefault();

		$('.contact-form-wrap').slideUp();

		var postdata = {};
		postdata.name = $("#yourname").val();
		postdata.email = $("#youremail").val();
		postdata.subject = $("#yoursubject").val();
		postdata.message = $("#yourmessage").val();

		$.ajax({
		  type: 'POST',
		  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		  data: {
		    'key': 'toYSNc2iNKup8NQC8-P7OA',
		    'message': {
		      'from_email': postdata.email,
		      'to': [
		          {
		            'email': 'hello@sarahs.website',
		            'name': 'Sarah',
		            'type': 'to'
		          }
		        ],
		      'autotext': 'true',
		      'subject': postdata.subject,
		      'html': postdata.message
		    }
		  }
		 }).done(function(response) {
		   console.log(response); // if you're into that sorta thing
		   $('.contactcontent .column-two').html('<p class="sent-message">Message sent - thanks</p>');

		 });

	});
	
});