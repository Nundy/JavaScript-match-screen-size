// 平台产业滑动轮播图
var focus = document.querySelector('.round-container2');
var focusList = focus.querySelectorAll('span');

var imgsContainer = document.querySelector('.property-img-container');
console.log(imgsContainer)
var imgList = imgsContainer.querySelector('a');
var index = 0;

function moveImg(){
  for(var i=0; i<focusList.length; i++){
    focusList[i].id=i;
    focusList[i].onmouseover=function(){
      index=this.id;
      run();
    }
  }
}
moveImg();

function run(){
  for(var j=0; j<focusList.length; j++){
    focusList[j].className='round';
  }
  focusList[index].className+=' active';
  imgsContainer.style.marginLeft=-(index*300)+'px';
}



// 公司介绍轮播图
var divContainer=document.querySelector('.turn-background');
var divList=document.querySelectorAll('.turn-content');
var prev=divContainer.querySelector('.prev');
var next=divContainer.querySelector('.next');
var full=document.querySelector('.full');
var fullList=full.querySelectorAll('li');
console.log(fullList);

var count=0;

function Next(){
  count++;
  if(count>divList.length-1){
    count=0;
  }
  displayShow();
}

function Prev(){
  count--;
  if(count<0){
    count=divList.length-1;
  }
  displayShow();
}

function displayShow(){
  for(var f=0; f<divList.length; f++){
    divList[f].className='turn-content';
    fullList[f].className='';
  }
  divList[count].className+=' show';
  fullList[count].className='active-red';
}

prev.onclick=Prev;
next.onclick=Next;
