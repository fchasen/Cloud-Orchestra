Raphael.fn.cloud = function (id, type) {
  var paper = this,
      chart = this.set(),
      rad = 40;
  var one, two, three, four, five, six;
      
      colors = ["#BCC8CE", "#D3DDE2", "#C5D8ED", "#AAB9C1", "#B2C6CE", "#E2E2E2"]
      
        cx = 150 + Math.floor(Math.random()*(wWidth-350));
        cy = 100 + Math.floor(Math.random()*(wHeight-300));
      
      chart.attr("title",id);
      this.spawn = function (){
        chart.push(
            one   = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), 0).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            two   = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), 0).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            three = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), 0).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            four  = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), 0).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            five  = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), 0).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce"),
            six   = paper.circle(cx+(Math.sin(Math.random())*(Math.random()*150)), cy+(Math.cos(Math.random())*(Math.random()*50)), 0).attr({fill:colors[Math.floor(colors.length * Math.random())], stroke:"none",'opacity':".35"}).animate({r: 40}, 2000, "bounce")
        );
        
        chart.click(function () {
           showSound();
           console.log("click");
           play_multi_sound('multiaudio2');
         });
      }
      
      this.soundoff = function (){
           play_multi_sound('multiaudio1');
           showSound();
      }
      
      this.remove = function (){
           chart.remove();
      }

        
      function showSound() {
         one.animate({
              "20%": {r: 30, easing: ">"},
              "50%": {r: 60, easing: "bounce"},
              "100%": {r: 40}
          }, 200);  
          two.animate({
              "20%": {r: 30, easing: ">"},
              "50%": {r: 60, easing: "bounce"},
              "100%": {r: 40}
          }, 200);  
          three.animate({
              "20%": {r: 30, easing: ">"},
              "50%": {r: 60, easing: "bounce"},
              "100%": {r: 40}
          }, 200);
          four.animate({
              "20%": {r: 30, easing: ">"},
              "50%": {r: 60, easing: "bounce"},
              "100%": {r: 40}
          }, 200); 
          five.animate({
              "20%": {r: 30, easing: ">"},
              "50%": {r: 60, easing: "bounce"},
              "100%": {r: 40}
          }, 200); 
          six.animate({
              "20%": {r: 30, easing: ">"},
              "50%": {r: 60, easing: "bounce"},
              "100%": {r: 40}
          }, 200);  
         
         
      }
        return this;
};
