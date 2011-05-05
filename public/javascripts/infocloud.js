Raphael.fn.infocloud = function (id, type) {
  var paper = this,
      chart = this.set(),
      rad = 100;
  var one, two, three, four, five, six;
      
      colors = ["#BCC8CE", "#D3DDE2", "#C5D8ED", "#AAB9C1", "#B2C6CE", "#E2E2E2"]
      
        cx = 150 + Math.floor(Math.random()*(wWidth-350));
        cy = 100 + Math.floor(Math.random()*(wHeight-300));
      
      chart.attr("title",id);
      this.spawn = function (){
        chart.push(
            one   = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), rad).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            two   = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), rad).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            three = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), rad).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            four  = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), rad).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            five  = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), rad).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            six  = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), rad).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),            
            seven   = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), rad).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            
            one   = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), rad).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            two   = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), rad).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            three = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), rad).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            four  = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), rad).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            five  = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), rad).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            six  = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), rad).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),            
            seven   = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), rad).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce")
        );
        
        one.blur(6);
        two.blur(5);
        three.blur(3);
        four.blur(3);
        
        
        chart.click(function () {
           showSound();
           console.log("click");
           play_multi_sound('multiaudio2');
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
      
      this.soundoff = function (){
           play_multi_sound('multiaudio1');
           showSound();
      }
      
      this.remove = function (){
           chart.remove();
      }

        
     
        return this;
};
