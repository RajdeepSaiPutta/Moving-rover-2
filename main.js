canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


mars_array=['mars 1.jfif', 'mars 2.jpg', 'mars 3.jfif']
random_number=Math.floor(Math.random()*3)

rover_width = 100;
rover_height = 90;

rover_x = 10
rover_y = 10

background_image = mars_array[random_number]
rover_image = 'rover.png'

function add() {

    bg_img = new Image();
    bg_img.onload = uploadbg;
    bg_img.src = background_image;

    rover_img = new Image();
    rover_img.onload = uploadrover;
    rover_img.src = rover_image;
}

function uploadbg() {
    ctx.drawImage(bg_img, 0, 0, canvas.width, canvas.height)
}

function uploadrover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height)
}

window.addEventListener('keydown', my_keydown)

function my_keydown(e) {

    keypresssed = e.keyCode;
    if (keypresssed == '37') {
        left();
        console.log('left')
    }
    if (keypresssed == '38') {
        up();
        console.log('up')

    }
    if (keypresssed == '39') {
        right();
        console.log('right')
    }
    if (keypresssed == '40') {
        down();
        console.log('down')
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        uploadbg();
        uploadrover();

    }

}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        uploadbg();
        uploadrover();

    }

}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        uploadbg();
        uploadrover();

    }

}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        uploadbg();
        uploadrover();

    }

}