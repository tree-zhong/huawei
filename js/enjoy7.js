window.onload=function(){
	//选择颜色
	var oUl=document.getElementById('Color');
	var oRam=document.getElementById('Ram');
	var oSelected=document.getElementById('product_description');
	var aLi1=oUl.getElementsByTagName('li');
	var Ramli=oRam.getElementsByTagName('li');
	var oP=oSelected.getElementsByTagName('p')[0];
	var Ptext=oP.innerText;
	var arr1=Ptext.split('/');
	var Text1=arr1[0];
	var Text2=Ramli[0].innerText;
	var arr2=[
		['img/main_Lpic1.1.jpg','img/main_Lpic1.2.jpg','img/main_Lpic1.3.jpg','img/main_Lpic1.4.jpg','img/main_Lpic1.5.jpg','img/main_Lpic1.6.jpg'],
		['img/main_Lpic2.1.jpg','img/main_Lpic2.2.jpg','img/main_Lpic2.3.jpg','img/main_Lpic2.4.jpg','img/main_Lpic2.5.jpg','img/main_Lpic2.6.jpg'],
		['img/main_Lpic3.1.jpg','img/main_Lpic3.2.jpg','img/main_Lpic3.3.jpg','img/main_Lpic3.4.jpg','img/main_Lpic3.5.jpg','img/main_Lpic3.6.jpg'],
		['img/main_Lpic4.1.jpg','img/main_Lpic4.2.jpg','img/main_Lpic4.3.jpg','img/main_Lpic4.4.jpg','img/main_Lpic4.5.jpg','img/main_Lpic4.6.jpg']
		];
	var arr3=[
		['img/main_Spic1.1.jpg','img/main_Spic1.2.jpg','img/main_Spic1.3.jpg','img/main_Spic1.4.jpg','img/main_Spic1.5.jpg','img/main_Spic1.6.jpg'],
		['img/main_Spic2.1.jpg','img/main_Spic2.2.jpg','img/main_Spic2.3.jpg','img/main_Spic2.4.jpg','img/main_Spic2.5.jpg','img/main_Spic2.6.jpg'],
		['img/main_Spic3.1.jpg','img/main_Spic3.2.jpg','img/main_Spic3.3.jpg','img/main_Spic3.4.jpg','img/main_Spic3.5.jpg','img/main_Spic3.6.jpg'],
		['img/main_Spic4.1.jpg','img/main_Spic4.2.jpg','img/main_Spic4.3.jpg','img/main_Spic4.4.jpg','img/main_Spic4.5.jpg','img/main_Spic4.6.jpg']
	];
	for(var i=0;i<aLi1.length;i++){
		aLi1[i].index=i;
		aLi1[i].onclick=function(){
			for(var k=0;k<aLi1.length;k++){
				aLi1[k].childNodes[0].className='';
			}
			//边框颜色变红
			this.childNodes[0].className='active';
			//颜色-图切换
			for(var j=0;j<aSmallBoxImage.length;j++){
				aSmallBoxImage[j].src=arr2[this.index][j];
				aImg1[j].src=arr3[this.index][j];
			}
			//已选择商品
			Text1=this.innerText;
			oP.innerHTML=Text1+'/'+arr1[1]+'/'+Text2+'/'+arr1[3];	
		}
		//已选择商品
		for(var j=0;j<Ramli.length;j++){
			Ramli[j].onclick=function(){
				Text2=this.innerText;
				oP.innerHTML=Text1+'/'+arr1[1]+'/'+Text2+'/'+arr1[3];
				//选择容量
				for(var k=0;k<Ramli.length;k++){
					Ramli[k].childNodes[0].className='';
				}
				this.childNodes[0].className='active';
			}
		}
	}
	//放大镜
	var oMainPic = document.getElementById("mainPic");
    var oSmallBox = document.getElementById("small-box");
    var aSmallBoxImage=oSmallBox.getElementsByTagName('img');
    var oMark = document.getElementById("mark");
    var oFloatBox = document.getElementById("float-box");
    var oBigBox = document.getElementById("big-box");
    var aBigBoxImage = oBigBox.getElementsByTagName("img")[0];
    oMark.onmouseover = function () {
        oFloatBox.style.display = "block"
        oBigBox.style.display = "block"
    }
    oMark.onmouseout = function () {
        oFloatBox.style.display = "none"
        oBigBox.style.display = "none"
    }
    oMark.onmousemove = function (ev) {
        var _event = ev || window.event;  //兼容多个浏览器的event参数模式
        var left = _event.clientX - oMainPic.offsetLeft - oSmallBox.offsetLeft - oFloatBox.offsetWidth / 2;
        var top = _event.clientY - oMainPic.offsetTop - oSmallBox.offsetTop - oFloatBox.offsetHeight / 2;

        //设置边界处理，防止移出小图片
        if (left < 0) {
            left = 0;
        } else if (left > (oMark.offsetWidth - oFloatBox.offsetWidth)) {
            left = oMark.offsetWidth - oFloatBox.offsetWidth;
        }
        if (top < 0) {
            top = 0;
        } else if (top > (oMark.offsetHeight - oFloatBox.offsetHeight)) {
            top = oMark.offsetHeight - oFloatBox.offsetHeight;

        }
        oFloatBox.style.left = left + "px";   //oSmall.offsetLeft的值是相对什么而言
        oFloatBox.style.top = top + "px";
        //求其比值
        var percentX = left / (oMark.offsetWidth - oFloatBox.offsetWidth);
        var percentY = top / (oMark.offsetHeight - oFloatBox.offsetHeight);
        //获取src
        function getByClass(oParent,oClass){
        	var amap=[];
        	var aEle=oParent.getElementsByTagName('*');
        	for(var i=0;i<aEle.length;i++){
        		if(aEle[i].className==oClass){
        			amap.push(aEle[i]);
        		}
        	}
        	return amap;
        }
        // console.log(getByClass(oSmallBox,'active')[0].src);
        aBigBoxImage.src=getByClass(oSmallBox,'active')[0].src;
        //方向相反，小图片鼠标移动方向与大图片相反，故而是负值
        aBigBoxImage.style.left = -percentX * (aBigBoxImage.offsetWidth - oBigBox.offsetWidth) + "px";
        aBigBoxImage.style.top = -percentY * (aBigBoxImage.offsetHeight - oBigBox.offsetHeight) + "px";
    }


	//选择容量
	// for(var i=0;i<Ramli.length;i++){
	// 	Ramli[i].onclick=function(){
	// 		for(var k=0;k<Ramli.length;k++){
	// 			Ramli[k].childNodes[0].className='';
	// 		}
	// 		this.childNodes[0].className='active';
	// 	}
	// }

	//手机小图轮播
	var oSpic=document.getElementById('spic');
	var aImg1=oSpic.getElementsByTagName('img');
	var Toleft=document.getElementById('toleft');
	var Toright=document.getElementById('toright');
	for(var i=0;i<aImg1.length;i++){
		aImg1[i].index=i;
		aImg1[i].onclick=function(){
			for(var j=0;j<aImg1.length;j++){
				aImg1[j].className='';
			}
			this.className='selected';
			aSmallBoxImage.index=this.index;
			for(var k=0;k<aSmallBoxImage.length;k++){
				aSmallBoxImage[k].className='';//清空所有大图类名
			}
			aSmallBoxImage[aSmallBoxImage.index].className='active';//给对应的大图添加类
		}
	}
	Toright.onclick=function(){
		aImg1[0].style.display='none';
		aImg1[5].style.display='block';
	}
	Toleft.onclick=function(){
		aImg1[0].style.display='block';
		aImg1[5].style.display='none';
	}
	//小图大图切换
	// var aImg=oMainPic.getElementsByTagName('img');
	// for(var i=0;i<aImg.length;i++){
	// 	aImg1[i].index=i;
	// 	aImg1[i].onclick=function(){
	// 		aImg.index=this.index;
	// 		for(var k=0;k<aImg.length;k++){
	// 			aImg[j].className='';//清空所有大图类名
	// 		}
	// 		aImg[aImg.index].className='active';//给对应的大图添加类
	// 	}
	// }

	//数量加减
	var oQuantity=document.getElementById('product_quantity');
	var oInput=oQuantity.getElementsByTagName('input')[0];
	var oAdd=document.getElementById('add');
	var oDelete=document.getElementById('delete');
	oAdd.onclick=function(){
		oInput.value++;
		oDelete.style.cursor='pointer';
		oDelete.style.color='#777';
	}	
	oDelete.onclick=function(){
		if(oInput.value>1){
			oInput.value--;
		}else{
			oDelete.style.cursor='not-allowed';
			oDelete.style.color='#c4c4c4';
			oInput.value=1;
		}
	}
	
	//关联商品
	var oUl2=document.getElementById('rel-goods');
	var aLi3=oUl2.getElementsByTagName('li');
	var oLeft=document.getElementById('left');
	var oRight=document.getElementById('right');
	oRight.onclick=function(){
		oLeft.style.cursor='pointer';
		oLeft.style.backgroundPosition='0 -16px';
		oRight.style.backgroundPosition='-28px 1px';
		oRight.style.cursor='not-allowed';
		for(var i=0;i<3;i++){
			aLi3[i].style.visibility='hidden';
			aLi3[i+4].style.visibility='visible';
			oUl2.style.left='-820px';
		}	
	}
	oLeft.onclick=function(){
		oRight.style.cursor='pointer';
		oLeft.style.backgroundPosition='-28px -16px';
		oRight.style.backgroundPosition='1px 1px';
		oLeft.style.cursor='not-allowed';
		for(var i=0;i<3;i++){
			aLi3[i+4].style.visibility='hidden';
			aLi3[i].style.visibility='visible';
			oUl2.style.left='35px';
		}		
	}

	//商品选项卡
	var oTab=document.getElementById('tab');
	var oSel=document.getElementById('sel');
	var aLi2=oSel.getElementsByTagName('li');
	var oShopping=document.getElementById('shopping');
	var H1=document.getElementById('head').offsetHeight;
	var H2=document.getElementById('content').offsetHeight;
	var H3=document.getElementById('relative').offsetHeight;
	window.onscroll=function(){
		var scrollTop=document.body.scrollTop;
		if(scrollTop>=(H1+H2+H3)){
			oSel.style.position='fixed';
			oSel.style.top='0';
			oSel.style.backgroundColor='#fff';
			oSel.style.height='50px';
			oSel.style.lineHeight='50px';
			oShopping.style.display='block';
		}else{
			oSel.style.position='static';
			oSel.style.height='100px';
			oSel.style.lineHeight='100px';
			oShopping.style.display='none';
		}
		if(scrollTop>=1200){
			oA.style.visibility='visible';
		}else{
			oA.style.visibility='hidden';
		}
	}
	for(var i=0;i<aLi2.length-1;i++){
		aLi2[i].onclick=function(){
			for(var j=0;j<aLi2.length;j++){
				aLi2[j].childNodes[0].className='';
			}
			this.childNodes[0].className='select';
		}

	}	
	//商品详情
	var oDiv=document.getElementById('pro_content');
	var aP=oDiv.getElementsByTagName('p');
	var oDiv1=document.getElementById('hide');
	var oP1=document.getElementById('see');
	var oP2=document.getElementById('show');
	oP1.onclick=function(){
		for(var i=0;i<7;i++){
			aP[i+3].style.display='block';
			oDiv1.style.display='none';
			oP2.style.display='block';
		}
	}
	oP2.onclick=function(){
		for(var i=0;i<7;i++){
			aP[i+3].style.display='none';
			oDiv1.style.display='block';
			oP2.style.display='none';
		}
	}
	//规格参数
	var oDiv3=document.getElementById('spec1');
	var aDiv2=oDiv3.getElementsByTagName('div');
	var oP3=document.getElementById('hide1');
	var oP4=document.getElementById('show1');
	oP3.onclick=function(){
		for(var i=0;i<10;i++){
			aDiv2[i+1].style.display='block';
			oP3.style.display='none';
			oP4.style.display='block';
		}
	}
	oP4.onclick=function(){
		for(var i=0;i<10;i++){
			aDiv2[i+1].style.display='none';
			oP3.style.display='block';
			oP4.style.display='none';
		}
	}
	//回到顶部
	var oHungbar=document.getElementById('hungbar');
	var oHungbar1=document.getElementById('hungbar1');
	var oA=oHungbar.getElementsByTagName('a')[0];
	var oA1=oHungbar1.getElementsByTagName('a')[0];
	var oA2=oHungbar1.getElementsByTagName('a')[1];
	var oA3=oHungbar1.getElementsByTagName('a')[2];
	oHungbar.onclick=function(){
		scrollTop='0';
		oHungbar.style.visibility='hidden';
	}
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