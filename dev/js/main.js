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

// function Circle(x, y, dx, dy, rad) {
//     this.x = 100;
//     this.dx = dx;
//     this.y = 100;
//     this.dy = dy;
//     this.rad = rad;
//
//
//     this.draw = function () {
//         c.beginPath();
//         c.arc( this.x, this.y, this.rad, Math.PI*2, false);
//         c.strokeStyle = 'red';
//         c.fillStyle = 'red';
//         c.fill();
//         c.stroke();
//     };
//
//     this.update = function () {
//         if(this.x + this.rad > innerWidth || this.x  - this.rad < 0){
//             this.dx = -this.dx;
//         }
//         if(this.y + this.rad > innerHeight || this.y  - this.rad < 0){
//             this.dy = -this.dy;
//         }
//         this.x += this.dx;
//         this.y += this.dy;
//
//         this.draw();
//     };
// }
//
// var circleArray = [];
//
// function init() {
//     circleArray = [];
//     var elementsNumber = 5;
//
//     for (i = 0; i < elementsNumber; i++) {
//         var rad = Math.random() * 10 + 2;
//         //coordinates
//         var x = Math.random() * (innerWidth - rad * 2);
//         var y = 600;
//         //velocity
//         var dx = (Math.random() - 0.5) * 0.8;
//         var dy = (Math.random() - 0.5) * 0.8;
//
//         circleArray.push(new Circle(x, y, dx, dy, rad));
//     }
// }
// init();
var x = 20;
var x1 = 40;
var y = 0;
var y1 = 0;

function animate() {
    requestAnimationFrame(animate);
    //c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = 'rgba(255, 255, 255, 0.035)';
    c.fillRect( 0, 0, canvas.width, canvas.height);
    c.beginPath();
    c.arc( x, y, 20, Math.PI*2, false);
    c.arc( x1, y1, 20, Math.PI*2, false);
    c.strokeStyle = 'red';
    c.fillStyle = 'red';
    c.fill();
    c.stroke();

    if(y > canvas.height){
        x = 20;
        x1 = 40;
        y = 0;
        y1 = 0;
    }

    y += 10;
    y1 += 1;

}

animate();

