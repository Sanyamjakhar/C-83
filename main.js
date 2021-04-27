var mouseevent = "empty";
var last_x, last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    mouseevent = "mousedown";

}


canvas.addEventListener("mouseup", mymouseup);

function mymouseup(e) {
    mouseevent = "mouseup";

}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave(e) {
    mouseevent = "mouseleave";

}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;


        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;

}





var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;


if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e) {
    last_x = e.touches[0].clientX - canvas.offsetLeft;
    last_y = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove", mytouchmove);

function mytouchmove(e) {
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;


    ctx.moveTo(last_x, last_y);
    ctx.lineTo(current_x, current_y);
    ctx.stroke();

    last_x = current_x;
    last_y = current_y;
}