x=0
y=0
draw_circle="";
draw_rect="";

function setup(){
    canvas = createCanvas(1200,700);

}
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="system is listening please speak.";
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recognized as - " + content;

    if(content == "Circle"){
        x=Math.floor(Math.random()* 1200)
        y=Math.floor(Math.random()* 700)
        document.getElementById("status").innerHTML="started drawing circle.";
        draw_circle="true";
    }
    if(content == "rectangle"){
        x=Math.floor(Math.random()* 1200)
        y=Math.floor(Math.random()* 700)
        document.getElementById("status").innerHTML="started drawing rectangle.";
        draw_rect="true";
    }
}

function draw(){
    if(draw_circle == "true"){
        radius=Math.floor(Math.random()* 100);
        circle(x,y,radius);
        draw_circle="";
        document.getElementById("status").innerHTML="Circle is done drawing.";
    }
    if(draw_rect == "true"){
        rect(x,y,100,50)
        draw_rect="";
        document.getElementById("status").innerHTML="rectangle is done drawing.";
    }
}