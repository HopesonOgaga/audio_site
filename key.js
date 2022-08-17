let tet = document.getElementById('Ael');

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 65 || sound.tet) {
      document.getElementById('audio').play();
    }
  });

document.addEventListener('keydown', function(r){
if(r.keyCode==75){
    document.getElementById('audio_home').play()
}
})
document.addEventListener('keydown', function(r){
    if(r.keyCode==76){
        document.getElementById('audio_car').play()
    }
    })
    document.addEventListener('keydown', function(r){
        if(r.keyCode==74){
            document.getElementById('audio_clap').play()
        }
        })
        document.addEventListener('keydown', function(r){
            if(r.keyCode==71){
                document.getElementById('audio_kick').play()
            }
            })
            document.addEventListener('keydown', function(r){
                if(r.keyCode==70){
                    document.getElementById('audio_snare').play()
                }
                })
                document.addEventListener('keydown', function(r){
                    if(r.keyCode==68){
                        document.getElementById('audio_rave').play()
                    }
                    })
    document.addEventListener('keydown', function(r){
        if(r.keyCode ==83){
            document.getElementById('audio_hat').play()
        }
    })