let ubicacionPrincipal = window.pageYOffset;
        window.onscroll = function(){
          let desaparecer = window.pageYOffset;
          if(ubicacionPrincipal >= desaparecer){
            this.document.getElementById('nav').style.top = '0';
          }
          else{
            this.document.getElementById('nav').style.top = '-100px';
          }
          ubicacionPrincipal = desaparecer;
        }