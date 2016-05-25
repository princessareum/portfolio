angular.module('app').controller('pianoCtrl', function($scope){



$(document).ready(function() {

    var audioElement = document.createElement('audio');

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        var playnotewhite = function(note, audio){
            $(note).css({
              backgroundColor: 'red'
            });
            audioElement.play();
            setTimeout(function(){
              $(note).css({
                backgroundColor: 'transparent'
              });
            },500)
        }


        var playnoteblack = function(note, audio){
            $(note).css({
              backgroundColor: 'red'
            });
            audioElement.play();
            setTimeout(function(){
              $(note).css({
                backgroundColor: 'black'
              });
            },500)
        }


        $('.white-keys-container').on("click", function(event){
           var key = event.target.id;
           var audio = audioElement.setAttribute('src', 'notes/keys/'+key+'.wav');
           playnotewhite("#"+key,audio);
        });

        $('.black-keys-container').on("click", function(event){
          // console.log(event);
           var key = event.target.id;
           var audio = audioElement.setAttribute('src', 'notes/keys/'+key+'.wav');
           playnoteblack("#"+key,audio);
        });


        $(document).on("keydown", function(e) {


          var key = e.which;


          if(key == "65"){
          var audio = new Audio('notes/keys/c1.wav').play()

          playnotewhite("#c1", audio);
          }
          if(key == "87"){
          var audio = new Audio('notes/keys/csharp.wav').play()

          playnoteblack("#csharp", audio);
          }
          if(key == "83"){
          var audio = new Audio('notes/keys/d.wav').play()
          playnotewhite("#d", audio);
          }
          if(key == "69"){
          var audio = new Audio('notes/keys/dsharp.wav').play()
          playnoteblack("#dsharp", audio);
          }
          if(key == "68"){
          var audio = new Audio('notes/keys/e.wav').play()
          playnotewhite("#e", audio);
          }
          if(key == "70"){
          var audio = new Audio('notes/keys/f.wav').play()
          playnotewhite("#f", audio);
          }
          if(key == "84"){
          var audio = new Audio('notes/keys/fsharp.wav').play()
          playnoteblack("#fsharp", audio);
          }
          if(key == "71"){
          var audio = new Audio('notes/keys/g.wav').play()
          playnotewhite("#g", audio);
          }
          if(key == "89"){
          var audio = new Audio('notes/keys/gsharp.wav').play()
          playnoteblack("#gsharp", audio);
          }
          if(key == "72"){
          var audio = new Audio('notes/keys/a.wav').play()
          playnotewhite("#a", audio);
          }
          if(key == "85"){
          var audio = new Audio('notes/keys/asharp.wav').play()
          playnoteblack("#asharp", audio);
          }
          if(key == "74"){
          var audio = new Audio('notes/keys/b.wav').play()
          playnotewhite("#b", audio);
          }
          if(key == "75"){
          var audio = new Audio('notes/keys/c2.wav').play()
          playnotewhite("#c2", audio);
          }
        });

      })

})
