document.onmousemove = animateCircles;

var colors = ['#00FF93', '#C0FEFC', '#3A0084', '#F4F4F4', '#003EFF'];

function animateCircles(event) {
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);

    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";

   var color = colors[Math.floor (Math.random() * colors.length)];
    
    circle.style.borderColor = color;

    circle.style.transition = "all .5s linear 0s";

    circle.style.left = circle.offsetLeft - 20 + "px";
    circle.style.top = circle.offsettop - 20 + "px";

    circle.style.width = "50px";
    circle.style.height = "50px"; 
    circle.style.borderWidth = "5px";
    circle.style.opacity = 0;

    setTimeout(function() {
        circle.remove();
       }, 300);
}


//Hide Cursor
// $('body').css('cursor', 'none');
