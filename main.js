
backgroundIMG="racing.jpg";
canvas= document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=100;
car2_image="car2.png";
car2_x=10;
car2_y=100;
function add(){
    backgroundIMGTAG= new Image();
    backgroundIMGTAG.onload=uploadBackground;
    backgroundIMGTAG.src= backgroundIMG;

    car1IMG= new Image();
    car1IMG.onload=uploadCar1;
    car1IMG.src=car1_image;
    car2IMG= new Image();
    car2IMG.onload=uploadCar2;
    car2IMG.src=car2_image;
}
function uploadBackground(){
    ctx.drawImage(backgroundIMGTAG,0,0,canvas.width,canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1IMG,car1_x,car1_y,car1_width,car1_height);
}
function uploadCar2(){
    ctx.drawImage(car2IMG,car2_x,car2_y,car2_width,car2_height);
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
function up(){
    if(car1_y<=0){
        car1_y=car1_y-10;
        console.log("When up arrow is pressed, then x is ="+car1_x+"| y="+ car1_y);
        uploadBackground();
        uploadCar1();
      
    }
}
function down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        console.log("When down arrow is pressed, then x is ="+car1_x+"| y="+ car1_y);
        uploadBackground();
        uploadCar1();
       
    }
}
function left(){
    if(car1_x<=0){
        car1_x=car1_x-10;
        console.log("When left arrow is pressed, then x is ="+car1_x+"| y="+ car1_y);
        uploadBackground();
        uploadCar1();
        
    }
}
function right(){
    if(car1_x<=700){
        car1_x=car1_x+10;
        console.log("When right arrow is pressed, then x is ="+car1_x+"| y="+ car1_y);
        uploadBackground();
        uploadCar1();
        
    }
}