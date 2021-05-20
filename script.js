window.onload = function () {
    cube.addEventListener('mousemove', function (event) {
        var newDegrees = event.offsetY;
        var newX = event.x;
        var newY = event.y;
        // console.log(newDegrees);
        cube.style.transform = `rotate3d(${newX}, ${newY}, 1, ${newDegrees}deg)`;
    })
}