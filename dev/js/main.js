function checkHeight() {
    var root = document.documentElement;
    root.style.setProperty('--scrren-height', window.innerHeight + 'px');
    var style = getComputedStyle(document.body);
    console.log(style.getPropertyValue('--scrren-height'));
}
checkHeight();

var canvas = document.querySelector('canvas');
canvas.width = 70;
canvas.height = window.innerHeight / 2;
var c = canvas.getContext('2d');

var horizontal = [10, 60, 35, 22, 48];
var vertical = 0;

var x = horizontal[0];
var x1 = horizontal[1];
//orange
var x2 = horizontal[2];
//semi Orange
var x3 = horizontal[3];
var x4 = horizontal[4];

var y = 0;
var y1 = 0;
var y2 = 0;
var y3 = 0;
var y4 = 0;

var baseVelocity = 4;

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(255, 188, 255, 0.01)';
    c.fillRect( 0, 0, canvas.width, canvas.height);

    c.beginPath();
    c.arc(x, y, 10, Math.PI * 2, false);
    c.strokeStyle = 'rgb(236, 220, 9)';
    c.fillStyle = 'rgb(236, 220, 9)';
    c.fill();
    c.stroke();
    c.closePath();
    if(y > canvas.height){
        x = horizontal[0];
        y = vertical;
    }
    y += 5 + baseVelocity;

    c.beginPath();
    c.arc( x1, y1, 10, Math.PI*2, false);
    c.strokeStyle = 'rgb(242, 182, 64)';
    c.fillStyle = 'rgb(242, 182, 64)';
    c.fill();
    c.stroke();
    c.closePath();
    if(y1 > canvas.height){
        x1 = horizontal[1];
        y1 = vertical;
    }
    y1 += 6 + baseVelocity;

    //orange
    c.beginPath();
    c.arc( x2, y2, 10, Math.PI*2, false);
    c.strokeStyle = 'rgb(238, 138, 3)';
    c.fillStyle = 'rgb(238, 138, 3)';
    c.fill();
    c.stroke();
    c.closePath();
    if(y2 > canvas.height){
        x2 = horizontal[2];
        y2 = vertical;
    }
    y2 += 8 + baseVelocity;

    //semi-Orange
    c.beginPath();
    c.arc( x3, y3, 16, Math.PI*2, false);
    c.strokeStyle = 'rgb(248, 182, 64)';
    c.fillStyle = 'rgb(248, 182, 64)';
    c.fill();
    c.stroke();
    c.closePath();
    if(y3 > canvas.height){
        x3 = horizontal[3];
        y3 = vertical;
    }
    y3 += 4 + baseVelocity;

    //semi-Orange
    c.beginPath();
    c.arc( x4, y4, 16, Math.PI*2, false);
    c.strokeStyle = 'rgb(245, 166, 35)';
    c.fillStyle = 'rgb(245, 166, 35)';
    c.fill();
    c.stroke();
    c.closePath();
    if(y4 > canvas.height){
        x4 = horizontal[4];
        y4 = vertical;
    }
    y4 += 5 + baseVelocity;
}
animate();