var h3=document.querySelectorAll('h3');
let input=document.querySelector('#searchInput');
let id=0;
let sc=0;
input.addEventListener('input',function(){
if (sc>0){
  let divs = document.querySelectorAll('#menu2 div');
  divs.forEach(function(d) {
    d.remove()
  });
}
})
h3.forEach(function(t){
  input.addEventListener('input',function(){
    if((t.textContent.toLowerCase()).includes(input.value.toLowerCase())) {
      t.setAttribute('id',id+=1)
      alink(t.textContent,id)
     }
  });
})
var lm=document.querySelector('#menu2');
function alink(theme,id){
  var svs=document.createElement('div');
  svs.setAttribute('class', 'svs');
  var p=document.createElement('p');
  p.innerHTML=theme.link(`#${id}`);
  lm.append(svs);
  svs.append(p);
  sc+=1;
}





