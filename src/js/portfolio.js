$(document).ready(function(){

	//GLOBAL VARIABLES
	var originalHeight = "25%";
	var fullHeight = "77%";
	var smallHeight = "5%";

	function positions(){
		$(".nameplate").css("margin-top",0);
		$(".nameplate").css("margin-left",0);
		$(".nameplate").css({position:"static",top:'auto'});
		$(".contentplate").css({position:"static",top:'auto'});
	}
	
	
	//PAGE LOAD ANIMATION
	$(".nameplate").animate({height:"250px",width:"500px",marginTop:"-125px",marginLeft:"-250px"},1500,"easeOutBack",function(){
		$(".content h1").animate({top:"40%",opacity:1},1500, 'easeOutBounce', function(){
			$(".content p").animate({opacity:1},1500,function(){
				$(".nameplate").animate({top:"125px"},1500,function(){
					$(".content h1").animate({top:"30%"},1500);
					$(".content p").animate({top:"30%",marginTop:"40px"},1500);
					$(".nameplate").animate({height:originalHeight,width:"100%",marginLeft:"-50%"},1500,"easeOutSine",function(){
						$(".content h1").addClass("animated");
						$(".content p").addClass("animated");
						$(".workplate").animate({top:"25%"},1500,function(){
							$(".aboutplate").animate({top:"50%"},1500, function(){
								$(".contactplate").animate({top:"75%"},1500, function(){
									$(".nameplate").delay(1500).animate({opacity:"1"},0,positions);
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
	      $(this).toggleClass("active");
	      $(".contentplate").not(this).toggleClass("mini");
	      $(".platetitle h1").animate({top:"50%"});
	      $(".nameplate").animate({height:"25%"},1000);
	    }
	    
	    else if ($(this).hasClass("mini")){
	      $(this).removeClass("mini");
	      $(this).addClass("active");
	      $(".active .platetitle h1").animate({top:"40px"});
	      $(".contentplate").not(this).removeClass("active");
	      $(".contentplate").not(this).addClass("mini",function(){
	      	$(".contentplate").not(this).find(".platetitle h1").animate({top:"50%"});
	      });
	      
	    }
	    
	    else{
	      $(this).toggleClass("active","linear");
	      $(".active .platetitle h1").animate({top:"40px"});
	      $(".contentplate").not(this).toggleClass("mini",function(){
	      	$(".contentplate").not(this).find(".platetitle h1").animate({top:"50%"});
	      });
	      $(".nameplate").animate({height:"20%"},1000);
	    }
	});

});