var myVar = setInterval(function(){
        myTimer();
  }, 700);

var index = 1;
var count = 3;
var image1 = null;

// Create icon and change
function myTimer() {
    index++;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var imageObj = new Image();
    context.clearRect(0, 0, 19, 19);
    imageObj.onload = function(){
        context.drawImage(imageObj, 0, 0 ,20 , 20);
        context.fillStyle="#FFF";
        var str = index;
        if(index > 0) {
           var num = "2191";
        } else{
           var num = "2193";
        }
        // DownArror = \2193
        // UpArrow = \2191
        var uni1 = '"\\u'+num+'"';
        var hexstring = eval(uni1);
        context.font = "icon 9px";
        context.fillStyle = '#FFF';
        context.fillText(hexstring, 2, 17);
        context.fillText(str, 9, 18);
        var imageData = context.getImageData(0, 0, 19, 19);
        chrome.browserAction.setIcon({
          imageData: imageData
        });
    };
     imageObj.src = "main-default.png";
    if(index ===  count){
      index = -3;
    }
}
