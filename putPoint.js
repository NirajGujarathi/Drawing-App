var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var radius = 10;
var dragging = false;

// context.lineWidth=2*radius;does not work here

// vw and vh not supportedd in JS
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener("mousemove",putPoint);
canvas.addEventListener("mousedown",function(){
    dragging=true;
})
canvas.addEventListener("mouseup",function(){
    dragging=false;
    // console.log("break");debug
    context.beginPath();
})
// var putPoint = function (e){
//     context.beginPath(); //
//     context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
//     context.fill();
// }
/* above won't work, but below will, due to hoisting,
basically JS decalres the functions and vars, and then executes and assign them, in top down fashion.*/

function putPoint (e){
    if (dragging){
        context.lineWidth=2*radius;
        context.lineTo(e.offsetX,e.offsetY);
        context.stroke();
        // console.log(dragging); debug
        context.beginPath();
        context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
        // can use e.clientX and e.clientY, but these are wrt to browser window,whereas offset wrt canvas tag
        context.fill();
        context.beginPath();
        context.moveTo(e.offsetX,e.offsetY);
        // console.log(dragging);
    }
};
