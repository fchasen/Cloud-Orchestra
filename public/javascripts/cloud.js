function cloud(R, id, type) {
  var paper = R,
      chart = R.set(),
      rad = 40;
  var cl = this;
  var sound = "violin_1";
  
  var one, two, three, four, five, six, seven;
      
      
      
        cx = 150 + Math.floor(Math.random()*(wWidth-350));
        cy = 100 + Math.floor(Math.random()*(wHeight-300));
      
      chart.attr("title",id);
      this.spawn = function (isme){
        
        if(isme){
          colors = ["#ffffff"];
          rad = 50;
        }else{
          colors = ["#BCC8CE", "#D3DDE2", "#C5D8ED", "#AAB9C1", "#B2C6CE", "#E2E2E2"];
          
        }
        chart.push(
            one   = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), 0).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: rad}, 2000, "bounce"),
            two   = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), 0).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: rad}, 2000, "bounce"),
            three = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), 0).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: rad}, 2000, "bounce"),
            four  = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), 0).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: rad}, 2000, "bounce"),
            five  = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), 0).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: rad}, 2000, "bounce"),
            six  = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), 0).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: rad}, 2000, "bounce"),            
            seven   = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), 0).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: rad}, 2000, "bounce")
        );
        
        one.blur(6);
        two.blur(5);
        three.blur(3);
        four.blur(3);
        
        
        chart.click(function () {
           // socket.send("played");
           cl.showSound();
           play_multi_sound(sound);
         });
         
         // left = Math.round(Math.random());
         //         if(left == 0){
         //           chart.animate({
         //                  "50%": {cx: wWidth, easing: ">"},          
         //                  "100%": {cx: 0, easing: ">"}
         //              }, Math.random()*5000000);
         //         }else{
         //           chart.animate({
         //                   "50%": {cx: 0, easing: ">"},          
         //                   "100%": {cx: wWidth, easing: ">"}
         //              }, Math.random()*5000000);
         //         }
         
      }
      
      this.soundoff = function (inst){
           play_multi_sound(inst);
           sound = inst;
           this.showSound();
      }
      
      this.remove = function (){
           chart.remove();
      }
      
      this.setSound = function (t){
           sound = t+"_1"; 
      }

        
      this.showSound = function() {
         one.animate({
              "20%": {r: rad-10, easing: ">"},
              "50%": {r: rad+20, easing: "bounce"},
              "100%": {r: rad}
          }, 200);  
          two.animate({
              "20%": {r: rad-10, easing: ">"},
              "50%": {r: rad+20, easing: "bounce"},
              "100%": {r: rad}
          }, 200);  
          three.animate({
              "20%": {r: rad-10, easing: ">"},
              "50%": {r: rad+20, easing: "bounce"},
              "100%": {r: rad}
          }, 200);
          four.animate({
             "20%": {r: rad-10, easing: ">"},
             "50%": {r: rad+20, easing: "bounce"},
             "100%": {r: rad}
          }, 200); 
          five.animate({
             "20%": {r: rad-10, easing: ">"},
             "50%": {r: rad+20, easing: "bounce"},
             "100%": {r: rad}
          }, 200); 
          six.animate({
              "20%": {r: rad-10, easing: ">"},
              "50%": {r: rad+20, easing: "bounce"},
              "100%": {r: rad}
          }, 200);  
          seven.animate({
              "20%": {r: rad-10, easing: ">"},
              "50%": {r: rad+20, easing: "bounce"},
              "100%": {r: rad}
          }, 200);


      }
        return this;
};
