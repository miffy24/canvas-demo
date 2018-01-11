var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var lineWidth = 4;
autoSetCanvasSize(canvas)
listenToUser(canvas)
//使canvas和页面宽高一样
function autoSetCanvasSize(canvas){
    setCanvasSize()

    window.onresize = function(){
        setCanvasSize()
     }

    function setCanvasSize(){
        var pageWidth =document.documentElement.clientWidth;
        var pageHeight =document.documentElement.clientHeight;
        canvas.width= pageWidth
        canvas.height=pageHeight;
        }
 }
 //监听鼠标
function listenToUser(canvas) {
    var using = false
    var lastPoint = {x: undefined, y:undefined}
    //特性检测
    if(document.body.ontouchstart!==undefined){
        //触屏设备
        canvas.ontouchstart = function(a){
            console.log('开始了')
            var x = a.touches[0].clientX
            var y = a.touches[0].clentY
            using = true
            if(eraserEnabled){
                context.clearRect(x-5,y-5,10,10)
            }else{
                lastPoint = {"x":x,"y":y}
            }
        }
        canvas.ontouchmove = function(a){
            console.log('边触摸边移动')
            var x = a.touches[0].clientX
            var y = a.touches[0].clientY

            if(!using){return}

            if(eraserEnabled){
                context.clearRect(x-5,y-5,10,10)
            }else{
                var newpoint = {"x":x,"y":y}
                drawLine(lastPoint.x,lastPoint.y,newpoint.x,newpoint.y)
                    lastPoint = newpoint
        }
    }
        canvas.ontouchend = function(a){
            console.log('结束')
            using = false
        }
    }else{
        canvas.onmousedown = function(a){
            var x = a.clientX
            var y = a.clentY
            using = true
            if(eraserEnabled){
                context.clearRect(x-5,y-5,10,10)
            }else{
                lastPoint = {"x":x,"y":y}
            }
        }
        canvas.onmousemove = function(a){
            var x = a.clientX
            var y = a.clientY

            if(!using){return}

            if(eraserEnabled){
                context.clearRect(x-5,y-5,10,10)
            }else{
                var newpoint = {"x":x,"y":y}
                drawLine(lastPoint.x,lastPoint.y,newpoint.x,newpoint.y)
                    lastPoint = newpoint
            }
            canvas.onmouseup = function(a){
                using = false
            }

        }

    }

}


//橡皮擦和笔切换
var eraserEnabled = false
eraser.onclick = function(){
    eraserEnabled = true
    eraser.classList.add('active')
    pen.classList.remove('active')
}
pen.onclick = function(){
    eraserEnabled = false
    eraser.classList.remove('active')
    pen.classList.add('active')
}

black.onclick = function(){
    context.strokeStyle ='black'
    context.fillStyle = 'black'
    black.classList.add('active')
    green.classList.remove('active')
    blue.classList.remove('active')
    purple.classList.remove('active')

}
green.onclick = function(){
    context.strokeStyle ='green'
    context.fillStyle ='green'
    black.classList.remove('active')
    green.classList.add('active')
    blue.classList.remove('active')
    purple.classList.remove('active')
}
blue.onclick = function(){
    context.strokeStyle ='blue'
    context.fillStyle ='blue'
    black.classList.remove('active')
    green.classList.remove('active')
    blue.classList.add('active')
    purple.classList.remove('active')
}
purple.onclick = function(){
    context.strokeStyle ='purple'
    context.fillStyle ='purple'
    black.classList.remove('active')
    green.classList.remove('active')
    blue.classList.remove('active')
    purple.classList.add('active')
}



//绘制圆形的函数
function drawCircle(x,y,radius){
    context.beginPath();
    context.fillStyle = 'black';
    context.arc(x,y,radius,0,Math.PI*2);
    context.fill();
}
//绘制路径，使点连起来
function drawLine(x1,y1,x2,y2){
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineWidth = lineWidth;
    context.lineTo(x2,y2);
    context.stroke();
    context.closePath();
}


