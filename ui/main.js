console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'New value Has been entered';

//move the image madi

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight()
{
   marginLeft = marginLeft + 1;
  // img.style.marginLeft = marginLeft + 'px';
   img.style.marginRight = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
    //img.style.marginLeft = '100px';
};