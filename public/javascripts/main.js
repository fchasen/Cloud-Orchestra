var socket;
var instrument = "tom-toms";

$(document).ready(function () {
    wHeight = parseInt($(window).height());
    wWidth = parseInt($(window).width());
    
    canvas = Raphael("clouds", wWidth, wHeight);
        
    clouds = [];
    myCloud = new cloud(canvas, 0);
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
       var newCloud = new cloud(canvas, id);
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

    $('input').keydown(function (event) {
        if(event.keyCode === 13) {
            var val = $('input').val();
            socket.send(val);
            message({ message: ['you', val] });
            $('input').val('');
        }
    });
    

    //cloud = canvas.cloud(300, 300, 40).spawn();
    
    //audio
    
      
    $("#key-one").click(function(){
     
      myCloud.soundoff(instrument+"_1");
      socket.send(instrument+"_1");
      //console.log(clouds)
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