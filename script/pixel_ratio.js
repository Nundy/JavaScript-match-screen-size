// 监听浏览器窗口发生改变时，调用iphone函数动态刷新font-size
window.onresize=iphone;

// 通过监听设备尺寸，动态修改根元素的font-size属性值
function iphone(){

  // 获取设备尺寸
  var deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth < 1200){
      // 如果设备尺寸大于设计稿尺寸，默认改为设计稿尺寸
      if(deviceWidth > 640 && deviceWidth<1200) deviceWidth = 640;

      // 根据尺寸设置font-size的值
      document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
    }
    if(deviceWidth>1200){
      document.documentElement.style.fontSize = '62.5%';
    }
}
iphone();


//通过点击事件显示和隐藏 选择项
function showHide(){
  var selectorImg = document.querySelector('.iphone-header-img');
  var listShow = document.querySelector('.iphone-header-full');
  var xxxHide = listShow.querySelector('.xxx-hide');
  console.log(listShow)
   xxxHide.onclick = function(){
    listShow.style.transition = '0s';
    listShow.style.marginLeft = '-100%';
  }

  selectorImg.onclick = function(){
    if(listShow.style.transition = '0s'){
      listShow.style.transition = '.2s';
    }
    listShow.style.marginLeft = '0%';
    console.log(listShow.style.marginLeft)
  }

}
showHide();


// 轮播图每隔 time 刷新
function playBanner(){
  var moveBanner = document.querySelector('.iphone-banner');
  var bannerList = moveBanner.querySelectorAll('a');
  var focusContainer = document.querySelector('.iphone-banner-focus');
  var bannerFocus = focusContainer.querySelectorAll('span');
  console.log(bannerFocus);
  var index = 0;

//判断移动
  var ifPlay = function(){
    index++;
    moveBanner.style.transition = '.2s';
    if(index>bannerList.length-1){
      index=0;
    }
    if(index==0){
      moveBanner.style.transition = '0s';
      setTimeout(ifPlay, 10);
    }
     moveChange();

  }

  // 移动图片
  function moveChange(){
    for(var i=0; i<bannerFocus.length; i++){
      bannerFocus[i].className = '';
    }
    if(index==bannerFocus.length){
      bannerFocus[0].className ='active';
    }else{
      bannerFocus[index].className = 'active';
    }
    moveBanner.style.marginLeft = -(index*6.4)+'rem';
  }

  // 2秒执行一次
  setInterval(ifPlay, 3000);
}
playBanner();
