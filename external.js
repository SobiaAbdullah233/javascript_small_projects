// external.js
var doc, bod, htm, C, E, buttonMaker; // reuse on other loads
addEventListener('load', function(){

doc = document; bod = doc.body; htm = doc.documentElement;
C = function(tag){
  return doc.createElement(tag);
}
E = function(id){
  return doc.getElementById(id);
}
buttonMaker = function(alphaString, appendTo, clickFunc){
  var a = alphaString.split('');
  for(var i=0,b,l=a.length; i<l; i++){
    b = C('input'); b.type = 'button'; b.value = a[i];
    b.addEventListener('click', clickFunc);
    appendTo.appendChild(b);
  }
  return appendTo;
}
var test = E('testOut');
function buttonClickHandler(){
  test.innerHTML += this.value;
}
buttonMaker('abcdefghijklmnopqrstuvwxyz', E('buttons'), buttonClickHandler);
E('clear').onclick = function(){ // can't reuse without writing over
  test.innerHTML = '';
}

});
