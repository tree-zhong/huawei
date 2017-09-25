window.onload=function(){
	//回到顶部
	var oHungbar1=document.getElementById('hungbar1');
	var oA1=oHungbar1.getElementsByTagName('a')[0];
	var oA2=oHungbar1.getElementsByTagName('a')[1];
	var oA3=oHungbar1.getElementsByTagName('a')[2];
	oA1.onmouseover=function(){
		clearInterval(oA1.timer);
		oA2.style.display='block';
		oA3.style.display='block';	
	}
	oA1.onmouseout=function(){
		oA1.timer=setInterval(function(){
			oA2.style.display='none';
			oA3.style.display='none';
		},1000);
	}
	//底部友情链接
	var Button=document.getElementById('button');
	var oL=Button.getElementsByTagName('span')[0];
	var oR=Button.getElementsByTagName('span')[1];
	var oFrend=document.getElementById('frendslist');
	var aOl=oFrend.getElementsByTagName('ol');	
	var n=0;
	var len=aOl.length;
	oR.onclick=function(){
		aOl[n].style.display='none';
		n= ++n == len?0:n;
		aOl[n].style.display='block';
	}
	oL.onclick=function(){
		aOl[n].style.display='none';
		n= --n < 0?0:n;
		aOl[n].style.display='block';
	}
}
$(function(){
	//购物车
	// var flag=0;
	$(".icon-choose-normal").click(function(){
		if($('.icon-choose-normal').css('background-position')=='-29px -66px'){
			$('.icon-choose-normal').css({'background-position':'-15px -66px'});
		}else{
			$('.icon-choose-normal').css({'background-position':'-29px -66px'});
		}
	})
	var flag=0;
	$('.above').click(function(){
		if(flag==0){
			$('.above>i').css({'background-position':'-4px -26px'});
			$('.server-hide').css({'display':'block'});
			$(this).css({'border':'1px silid #eee','border-bottom-color':'transparent',
				'background-color':'#fff'})
			flag=1;
		}else{
			$('.above>i').css({'background-position':'-4px -5px'});
			$('.server-hide').css({'display':'none'});
			$(this).css({'border-bottom-color':'#d6d6d6','background-color':'#eee'})
			flag=0;
		}
	})
	$('.above').mouseenter(function(){
		$(this).css({'background-color':'#fff',
	'border':'1px solid #d6d6d6'})
	})
	$('.above').mouseout(function(){
		$(this).css({'background-color':'transparent',
	'border':'none'})
	})

	//数量加减
	var sum=$('#sum').val();  //数量
	var price=$('#price').text();  //单价
	var count=$('#count').text();  //小计
	var amount=$('#amount').text();  //总计
	var chosingSum=$('#chosing_sum').text(); //已选数量
	$('#add').click(function(){
		$('#del').css({'cursor':'pointer','color':'#333'})
		sum++;
		count=price*sum;
		chosingSum=sum;
		console.log(chosingSum);
		$('#sum').val(sum);
		$('#count').text(count+'.00');
		$('#amount').text(count+'.00');
		$('#chosing_sum').text(chosingSum);
	})
	$('#del').click(function(){
		if(sum<=1){
			sum=1;
			$(this).css({'cursor':'not-allowed','color':'#c4c4c4'});
		}else{
			sum--;
		}
		count=price*sum;
		chosingSum=sum;
		console.log(chosingSum);
		$('#sum').val(sum);
		$('#count').text(count+'.00');
		$('#amount').text(count+'.00');
		$('#chosing_sum').text(chosingSum);
	})

})