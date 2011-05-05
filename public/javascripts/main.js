$(document).ready(function () {
    wHeight = parseInt($(window).height());
    wWidth = parseInt($(window).width());
    
    canvas = Raphael("clouds", wWidth, wHeight);
    
    infoCloud = canvas.infocloud(300, 300);
    
    clouds = [];
    myCloud = canvas.cloud(300, 300);
    myCloud.spawn();
    clouds['me'] = myCloud;
    
    function message(obj){
      if ('announcement' in obj){
        $('#messages').html('<li><em>' + (obj.announcement) + '</em></li>'+ $('#messages').html());
        
        if(obj.announcement.search('disconnected') != -1){
          
          
          clouds[obj.announcement.substring(0, 16)].remove();
          
        }
        
      } else if ('message' in obj){
        //console.log(obj.message[1]);
        
        $('#messages').html('<li><b>' + (obj.message[0]) + ':</b> </li>' + (obj.message[1]) + $('#messages').html());
        
        if(obj.message[1].search('connected') != -1){
          var newCloud = canvas.cloud(obj.message[0],obj.message[1]);
          newCloud.spawn();
          if(obj.message[0]){
            clouds[obj.message[0]] = newCloud;
          }
        }
        
        if(obj.message[1].search('played') != -1){
          if(obj.message){
            clouds[obj.message[0]].soundoff();
          }
        }
      } 
      
    }
    
    function buffer_message(obj){
      if ('announcement' in obj){
        $('#messages').html('<li><em>' + (obj.announcement) + '</em></li>'+ $('#messages').html());
        console.log(obj.message);
        
        
      } else if ('message' in obj){
        //console.log(obj.message[1]);
        
        $('#messages').html('<li><b>' + (obj.message[0]) + ':</b> </li>' + (obj.message[1]) + $('#messages').html());
        
        if(obj.message[1].search('connected') != -1){
          var newCloud = canvas.cloud(obj.message[0],obj.message[1]);
          newCloud.spawn();
          if(obj.message[0]){
            clouds[obj.message[0]] = newCloud;
          }
        }
        
        }
    } 
      
    
    
    var socket = new io.Socket(null, {rememberTransport: false});
    socket.on('connect', function () {
        socket.send('connected Tuba');
    });
    socket.on('message', function (obj) {
      if ('buffer' in obj){
        for (var i in obj.buffer) buffer_message(obj.buffer[i]);
      } else message(obj);
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
    
      
    $("#one a").click(function(){
      
      clouds['me'].soundoff();
      socket.send("played");
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