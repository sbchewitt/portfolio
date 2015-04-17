$(document).ready(function(){

	//GLOBAL VARIABLES
	var originalHeight = "22%";
	var fullHeight = "77%";
	var smallHeight = "5%";
	
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
						$(".contentplate").animate({top:"26%"},1500);
						$(".contentplate2").animate({top:"52%"},1500);
						$(".contactplate").animate({top:"78%"},1500);
					});
				});
			});
		});
	});

	//CLICK INTERACTION FOR WORK PLATE
	$(".workplate").click(function(){
		$(".aboutcontent, .contactcontent").animate({opacity:0},1500);
		$(this).animate({height:fullHeight,top:"11%"},1500);
		$(this).addClass("active");
		$(".workplate .platetitle h1").animate({top:"5%"},1500,function(){
			$(".workcontent li").animate({opacity:1},1500);
		});
		// nameplate
		$(".nameplate").animate({height:"10%"},1500);
		$(".aboutplate").animate({height:smallHeight,top:"89%"},1500,function(){
			$(".aboutplate").removeClass("active");
		});
		$(".aboutplate .platetitle h1").animate({top:"50%"},1500);
		$(".contactplate").removeClass("active");
		$(".contactplate").animate({height:smallHeight,top:"95%"},1500);
		$(".contactplate .platetitle h1").animate({top:"50%"},1500);
	});

	//CLICK INTERACTION FOR ABOUT PLATE
	$(".aboutplate").click(function(){
		$(".contactcontent, .workcontent").animate({opacity:0},1500);
		$(this).animate({height:fullHeight,top:"17%"},1500);
		$(this).addClass("active");
		$(".aboutplate .platetitle h1").animate({top:"5%"},1500,function(){
			$(".aboutcontent").animate({opacity:1},1500);
		});
		$(".nameplate").animate({height:"10%"},1500);
		$(".workplate").removeClass("active");
		$(".workplate .platetitle h1").animate({top:"50%"},1500);
		$(".workplate").animate({height:smallHeight,top:"11%"},1500);
		$(".contactplate").removeClass("active");
		$(".contactplate .platetitle h1").animate({top:"50%"},1500);
		$(".contactplate").animate({height:smallHeight,top:"95%"},1500);
	});

	//CLICK INTERACTION FOR CONTACT PLATE
	$(".contactplate").click(function(){
		$(".aboutcontent, .workcontent").animate({opacity:0},1500);
		$(this).animate({height:fullHeight,top:"23%"},1500);
		$(this).addClass("active");
		$(".contactplate .platetitle h1").animate({top:"5%"},1500,function(){
			$(".contactcontent").animate({opacity:1},1500);		
		});
		$(".nameplate").animate({height:"10%"},1500);
		$(".workplate").removeClass("active");
		$(".workplate .platetitle h1").animate({top:"50%"},1500);
		$(".workplate").animate({height:smallHeight,top:"11%"},1500);
		$(".aboutplate").removeClass("active");
		$(".aboutplate .platetitle h1").animate({top:"50%"},1500);
		$(".aboutplate").animate({height:smallHeight,top:"17%"},1500);
	});

});