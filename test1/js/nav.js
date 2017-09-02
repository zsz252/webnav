$(document).ready(function(){
	
	var flag = 1;
	var mx = 0;
	var isDrag = false;
	var isLeftDrag = false;
	
	$("#nav h1").click(function(){
		if (flag == 1){
			$("#nav").animate({width:'400px'});
			$(this).animate({left:350 + 'px'}).html("<-");
			$("#nav h2").animate({left:370 + 'px'});
			isLeftDrag = true;
		}else{
			$("#nav").animate({width:'100px'});
			$(this).animate({left:50 + 'px'}).html("->");
			$("#nav h2").animate({left:70 + 'px'});
		}
		flag = -flag
	})
	
	$("#nav h2").mousedown(function(e){
		
		mx = e.pageX;
		isDrag = true;
	})
	
	$(document).mousemove(function(e){
		
		if(isDrag){
			var x = e.pageX;
			var moveX = x - mx;
			
			if(flag = -1  && isLeftDrag){
				$("#nav").width(moveX+400);
				if($("#nav").width() <= 120){
					isLeftDrag = false;
				}
			}
			
			if(moveX <= 300 && moveX>= 0){
				flag = -1;
				$("#nav h1").html("<-");
				$("#nav").width(moveX+100);
				if($("#nav").width() <= 110){
					$("#nav").width(100);
				}
			}
			
			if($("#nav").width() <= 120){
				flag = 1;
				$("#nav h1").html("->")
			}
			
			$("#nav h1").css({'left':$("#nav").width() - 50 + 'px'});
			$("#nav h2").css({'left':$("#nav").width() - 30 + 'px'});
		}

	})
	
	$(document).mouseup(function(e){
		
		isDrag = false;
	})
})
