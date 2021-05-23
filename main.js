car1="https://postimg.cc/9rqYz9HM";
car2="https://postimg.cc/9rqYz9HM";
background="https://postimg.cc/p9D2dqqZ";
canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="https://postimg.cc/9rqYz9HM";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car2_image="https://postimg.cc/9rqYz9HM";
car2_x=10;
car2_y=100;
function add(){
    background= new Image();
    background.onload=uploadBackground;
    background.src= background;

    car1= new Image();
    car1.onload=uploadCar1;
    car1.src=car1;
    car2= new Image();
    car2.onload=uploadCar2;
    car2.src=car2;
}
function uploadBackground(){
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1,car1_x,car1_y,car1_width,car1_height);
}
function uploadCar2(){
    ctx.drawImage(car2,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    KeyPressed=e.keyCode;
    console.log(KeyPressed);
    if(KeyPressed=='38'){
        up();
        console.log("up");
    }
    if(KeyPressed=='40'){
        down();
        console.log("down");
    }
    if(KeyPressed=='37'){
        left();
        console.log("left");
    }
    if(KeyPressed=='39'){
        right();
        console.log("right");
    }
}
