var socket;
var instrument = "violin";
var wHeight;
var wWidth;
var earthSize = 600;
var earthimg, bggrad;
var audioType = ".mp3";

var sounds = [
  "bass",
  "clarinet",
  "flute",
  "percussion",
  "trumpet",
  "violin"
];

$(document).ready(function () {
    
    wHeight = $(window).height();
    wWidth = $(window).width();
    
    visual();
    
    var a = new Audio();
    if(a.canPlayType){ 
      
      if(!a.canPlayType('audio/mpeg;') && a.canPlayType('audio/ogg; codecs="vorbis"')){
        audioType = ".oga";
      }
      
      $.each(sounds, function(index, value) {
        for(i=1;i<=6;i++){
            var na = new Audio();
            na.id = value+"_"+i;
            na.src = "http://audio.cloudorchestra.com/"+value+"/"+value+"_"+i+audioType;
            na.preload="auto";
            
            $("#audio").append(na);
            na.load();
        }
      });
      
      
    }
    
    $(".press").click(function(){
      $("#pickhint").fadeOut('slow');
    });
    $("#picker").change(function(){
      instrument = $("#picker option:selected").val();
      myCloud.setSound(instrument);
      $("#pickhint").fadeOut('slow');
    })
    
    $("#credit-a").click(function(){
      $("#credits").fadeIn('slow');
      $("#about").fadeOut();
    });
    
    $("#about-a").click(function(){
      $("#about").fadeIn('slow');
      $("#credits").fadeOut();
    });
    
    $("#close-about").click(function(){
      $("#about").fadeOut('slow');
    });
    
    $("#close-credit").click(function(){
      $("#credits").fadeOut('slow');
    });
    
    canvas = Raphael("clouds", wWidth, wHeight);
    bggrad = canvas.rect(0, 0, wWidth, wHeight).attr({fill:"86-#6da0b0:55-#a3b9c7", stroke:"none"});

    earthimg = canvas.image("images/earth.png", wWidth/2-earthSize/2, wHeight/2-earthSize/2, earthSize, earthSize);
        //r(0.25, 0.75)#fff-#000
    clouds = [];
    myCloud = new cloud(canvas, 0, instrument);
    myCloud.spawn(true);
    clouds.push(myCloud);
    
    function message(obj){
      if ('disconnected' in obj){
        if(clouds[obj.disconnected[0]]){
          clouds[obj.disconnected[0]].remove();
        }
      }    
      
      if ('connected' in obj){
        var newCloud = new cloud(canvas, obj.connected[0]);
        newCloud.spawn();
        clouds[obj.connected[0]] = newCloud;
      }  
        
      if ('message' in obj){
        //console.log(obj.message[1]);
        
        $('#messages').html('<li><b>' + (obj.message[0]) + ':</b> </li>' + (obj.message[1]) + $('#messages').html());
        if(clouds[obj.message[0]]){
          clouds[obj.message[0]].soundoff(obj.message[1]);
        }
      }
      
    }
    
      
    function spawnClouds(id){
       var newCloud = new cloud(canvas, id, instrument);
       newCloud.spawn();
       clouds[id] = newCloud;
    }
    
    socket = new io.Socket(null, {rememberTransport: false});
    socket.on('connect', function () {
        //socket.send('connected Tuba');
    });
    socket.on('message', function (obj) {
      if ('buffer' in obj){
        for (var i in obj.buffer) message(obj.buffer[i]);
      } else message(obj);

      if ('clientsBuffer' in obj){
        for (var i in obj.clientsBuffer) {
            spawnClouds(obj.clientsBuffer[i]);
        }
      }
      //console.log(message);
        //$('div#messages').html('<p>' + message + '</p>' + $('div#messages').html());
    });
    socket.on('disconnect', function () {
    });
    socket.connect();

    $(document).keydown(function (event) {
        $("#pickhint").fadeOut('slow');
        if(event.keyCode === 49) {
            var play = instrument+"_1";
            myCloud.soundoff(play);
            socket.send(play);
            $("#key-one").addClass("active");
            var onepress = window.setTimeout(function() {
                $("#key-one").removeClass("active");
            }, 200);
        }
        
        if(event.keyCode === 50) {
            var play = instrument+"_2";
            myCloud.soundoff(play);
            socket.send(play);
            $("#key-two").addClass("active");
            window.setTimeout(function() {
                $("#key-two").removeClass("active");
            }, 200);
        }
        
        if(event.keyCode === 51) {
            var play = instrument+"_3";
            myCloud.soundoff(play);
            socket.send(play);
            $("#key-three").addClass("active");
            window.setTimeout(function() {
                $("#key-three").removeClass("active");
            }, 200);
        }
        
        if(event.keyCode === 56) {
            var play = instrument+"_4";
            myCloud.soundoff(play);
            socket.send(play);
            $("#key-four").addClass("active");
            window.setTimeout(function() {
                $("#key-four").removeClass("active");
            }, 200);
        }
        
        if(event.keyCode === 57) {
            var play = instrument+"_5";
            myCloud.soundoff(play);
            socket.send(play);
            $("#key-five").addClass("active");
            window.setTimeout(function() {
                $("#key-five").removeClass("active");
            }, 200);
        }
        
        if(event.keyCode === 48) {
            var play = instrument+"_6";
            myCloud.soundoff(play);
            socket.send(play);
            $("#key-six").addClass("active");
            window.setTimeout(function() {
                $("#key-six").removeClass("active");
            }, 200);
        }
    });
    

    //cloud = canvas.cloud(300, 300, 40).spawn();
    
    //audio
    var input;
    if (window.Touch) {
      input = "touchstart";
    }else{
      input = "mouseup";
    }    
    $("#key-one").bind(input,function(e){
      e.preventDefault();
      var play = instrument+"_1";
      myCloud.soundoff(play);
      socket.send(play);
    });
    $("#key-two").bind(input,function(e){
      e.preventDefault();
      var play = instrument+"_2";
      myCloud.soundoff(play);
      socket.send(play);
    });
    $("#key-three").bind(input,function(e){
      e.preventDefault();
      var play = instrument+"_3";
      myCloud.soundoff(play);
      socket.send(play);
    });
    $("#key-four").bind(input,function(e){
      e.preventDefault();
      var play = instrument+"_4";
      myCloud.soundoff(play);
      socket.send(play);
    });
    $("#key-five").bind(input,function(e){
      e.preventDefault();
      var play = instrument+"_5";
      myCloud.soundoff(play);
      socket.send(play);
    });
    $("#key-six").bind(input,function(e){
      e.preventDefault();
      var play = instrument+"_6";
      myCloud.soundoff(play);
      socket.send(play);
    });
});

var channel_max = 10;                   // number of channels
  audiochannels = new Array();
  for (a=0;a<channel_max;a++) {                 // prepare the channels
    audiochannels[a] = new Array();
    audiochannels[a]['channel'] = new Audio();            // create a new audio object
    audiochannels[a]['finished'] = -1;              // expected end time for this channel
  }
  function play_multi_sound(s) {
    for (a=0;a<audiochannels.length;a++) {
      thistime = new Date();
      if (audiochannels[a]['finished'] < thistime.getTime()) {      // is this channel finished?
        audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
        audiochannels[a]['channel'].src = document.getElementById(s).src;
        audiochannels[a]['channel'].load();
        audiochannels[a]['channel'].play();
        break;
      }
    }
  }
  
function visual(){
   //visual
    wHeight = $(window).height();
    wWidth = $(window).width();
    
    
    
    if(wHeight < 750 && wHeight > 601){
      //$("#earth").css("background-image", "url(images/earth-mid.png) ");
      earthSize = 450;
           // $("#earth").css("margin-left", -225);
      // $("#earth").css("margin-top", -225);
    }
    if(wHeight < 601){
      //$("#earth").css("background-image", "url(images/earth-sm.png) ");
      earthSize = 360;
      
      // $("#earth").css("margin-left", -180);
      //     $("#earth").css("margin-top", -180);
    }
    
    if(wHeight > 750){
      earthSize = 600;
      
    }
    
    if(typeof canvas != 'undefined'){
      canvas.setSize(wWidth, wHeight);
      bggrad.attr({width: wWidth, height: wHeight});
      earthimg.attr({ x: wWidth/2-earthSize/2, y: wHeight/2-earthSize/2, width: earthSize, height: earthSize });
      
    }
    //$("#earth").css("left", $(window).width()/2-earthSize/2);
    //$("#earth").css("top", $(window).height()/2-earthSize/2);
}

$(window).resize(function() {
   visual();
});