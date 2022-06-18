let menuButton=document.querySelector('#leftMenu');
let menubar=document.querySelector('.menubar');
let menuDisplay=document.querySelector('#menu2');
let topMenu=document.querySelector('#topMenu');
let icon=document.querySelector('#icon');
let h1=document.querySelector('h1');

let eywn=0;


let element=document.createElement('div')
menubar.appendChild(element).setAttribute('class','eye')
let eye=document.querySelector('.eye');
eye.setAttribute('id','eyeoff')
eye.addEventListener('click',function(){
    if(eywn==0){
        bodid=document.body.getAttribute('id');
        eye.setAttribute('id','eyeon');
        document.body.setAttribute('class','ciny');
       document.body.removeAttribute('id');
        eywn+=1;
    }else if(eywn==1){
        eye.setAttribute('id','eyeoff');
        document.body.removeAttribute('class');
        document.body.setAttribute('id' , bodid);
        eywn-=1;
    }
});
let topMenuButton = document.createElement('div');
topMenuButton.setAttribute('id', 'rightMenu');
menubar.appendChild(topMenuButton);

let wn=0;
let bn=0;
menuButton.addEventListener('click',function(){
    if (wn==0) {
       menuDisplay.setAttribute('class','menu');
       wn+=1;
    }else if(wn==1){
        menuDisplay.setAttribute('class', 'none');
        document.querySelector('#menu2 input').value='';
        wn-=1;
    }
});

topMenuButton.addEventListener('click',function(){
    if(bn==0){
    topMenu.setAttribute('class','topMenuLeft');
    topMenuButton.setAttribute('class','up')
    bn+=1;
    }else if(bn==1){
        topMenu.setAttribute('class', 'topMenuRight');
        topMenuButton.setAttribute('class','down')
        bn-=1;
}
  
});
let lia=document.querySelectorAll('#topMenu li')
lia.forEach(function(href){
  href.addEventListener('click',function(){
    close(document);
    open((href.textContent).toLowerCase()+'.html');
  });
})
var txtIcon='icon';
var txth1=h1.textContent;
var h1Icon=txtIcon+txth1;
icon.setAttribute('class',h1Icon);

let abouts={
  HTML:'Hyper Text Markup Languange - Gipermatinli markerlash ti',
  CSS:'Cascading Style Shets - Uslublarning kaskadli chadvali',
  JavaScript:'Shunchaki JavaScript',
  ReactJS:'Bõsh'
}
h1.addEventListener('click',function(){
  if(txth1=='ReactJS'){
    alert(abouts.ReactJS)
  }else if(txth1=='JavaScript'){
    alert(abouts.JavaScript)
  }else if(txth1=='HTML'){
    alert(abouts.HTML)
  }else if(txth1=='CSS'){
    alert(abouts.CSS)
  }
})



/*let date=(new Date()).getHours();
let body=document.body
function bgdate(date){
  if(date>=5 && date<12){
    body.setAttribute('id','bg1');
  }
  if(date>=12 && date<19){
    body.setAttribute('id','bg2');
  }
  if(date>=19 || date<5){
    body.setAttribute('id','bg3')
  }
}
bgdate(date)*/
