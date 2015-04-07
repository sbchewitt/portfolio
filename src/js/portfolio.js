$(document).ready(function(){

	var originalHeight = "22%";
	var fullHeight = "64%";
	var smallHeight = "10%";
	
	$(".nameplate").animate({height:"250px",width:"500px",marginTop:"-125px",marginLeft:"-250px"},1500,"easeOutBack",function(){
		$(".content h1").css("display","block")
		$(".content h1").animate({top:"40%"},1500, 'easeOutBounce', function(){
			$(".content p").animate({top:"55%"});
			$(".content p").fadeIn("1500",function(){
				$(".nameplate").animate({top:"125px"},1500,function(){
					$(".content h1").animate({top:"35%"},1500);
					$(".content p").animate({top:"55%"},1500);
					$(".nameplate").animate({height:originalHeight,width:"100%",marginLeft:"-50%"},1500,"easeOutSine",function(){
						$(".content h1").css("transform","translate(0,0)");
						$(".content p").css("transform","translate(0,0)");
						$(".content h1").animate({left:"0"},1500);
						$(".content p").animate({left:"0"},1500,function(){
							$(".contentplate").animate({top:"26%"},1500);
							$(".contentplate2").animate({top:"52%"},1500);
							$(".contactplate").animate({top:"78%"},1500);
						});
					});
				});
			});
		});
	});

	$(".workplate").click(function(){
		$(this).animate({height:fullHeight,top:"12%"},1500);
		$(this).addClass("active");
		$(".workplate .platetitle h1").animate({top:"5%"},1500,function(){
			$(".workplate .platetitle span").fadeIn("1500");
		});
		$(".nameplate").animate({height:smallHeight},1500);
		$(".aboutplate").removeClass("active");
		$(".aboutplate").animate({height:smallHeight,top:"78%"},1500,function(){
			$(".aboutplate .platetitle h1").animate({top:"50%"});
			$(".aboutplate .platetitle span").css("display","none");	
		});
		$(".contactplate").removeClass("active");
		$(".contactplate").animate({height:smallHeight,top:"90%"},1500,function(){
			$(".contactplate .platetitle h1").animate({top:"50%"});
			$(".contactplate .platetitle span").css("display","none");
		});
	});

	$(".aboutplate").click(function(){
		$(this).animate({height:fullHeight,top:"24%"},1500);
		$(this).addClass("active");
		$(".aboutplate .platetitle h1").animate({top:"5%"},1500,function(){
			$(".aboutplate .platetitle span").fadeIn("1500");
		});
		$(".nameplate").animate({height:smallHeight},1500);
		$(".workplate").removeClass("active");
		$(".workplate").animate({height:smallHeight,top:"12%"},1500,function(){
			$(".workplate .platetitle h1").animate({top:"50%"});
			$(".workplate .platetitle span").css("display","none");
		});
		$(".contactplate").removeClass("active");
		$(".contactplate").animate({height:smallHeight,top:"90%"},1500,function(){
			$(".contactplate .platetitle h1").animate({top:"50%"});
			$(".contactplate .platetitle span").css("display","none");
		});
	});

	$(".contactplate").click(function(){
		$(this).animate({height:fullHeight,top:"36%"},1500);
		$(this).addClass("active");
		$(".contactplate .platetitle h1").animate({top:"5%"},1500,function(){
			$(".contactplate .platetitle span").fadeIn("1500");		
		});
		$(".nameplate").animate({height:smallHeight},1500);
		$(".workplate").removeClass("active");
		$(".workplate").animate({height:smallHeight,top:"12%"},1500,function(){
			$(".workplate .platetitle h1").animate({top:"50%"});
			$(".workplate .platetitle span").css("display","none");

		});
		$(".aboutplate").removeClass("active");
		$(".aboutplate").animate({height:smallHeight,top:"24%"},1500,function(){
			$(".aboutplate .platetitle h1").animate({top:"50%"});
			$(".aboutplate .platetitle span").css("display","none");
		});
	});

	//Clicking the close button on the plates
	// $(".contentplate span").click(function(){
	// 	$(this).fadeOut("1500");
	// 	$(".workplate").animate({height:originalHeight,top:"26%"},1500);
	// 	$(".nameplate").animate({height:originalHeight})
	// 	$(".aboutplate").animate({height:originalHeight,top:"52%"},1500);
	// 	$(".contactplate").animate({height:originalHeight,top:"78%"},1500);
	// });

});