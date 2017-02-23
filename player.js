var soundURL = [
    // "https://tonejs.github.io/examples/audio/casio/A1.mp3",
    "./sounds/blanketing.mp3",
    "./sounds/cosmic_signal.mp3",
    "./sounds/electric_chain.mp3",
    // "./sounds/pianoA.mp3",
    // "./sounds/pianoB.mp3",
    // "./sounds/pianoC.mp3",
    // "./sounds/pianoC2.mp3",
    // "./sounds/pianoD.mp3",
    // "./sounds/pianoE.mp3",
    // "./sounds/pianoF.mp3",
    // "./sounds/pianoG.mp3",
    "./sounds/air_conditioner1.mp3",
    "./sounds/big_engine.mp3",
    "./sounds/dark_atmosphere.mp3",
    "./sounds/ghost_sigh.mp3",
    "./sounds/headache.mp3",
    "./sounds/maze.mp3",
    "./sounds/voice_of_light.mp3",
]

var notation = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G"
]

var Player = function(type) {
    //variables
    this.type = type;
    this.sURL = soundURL[floor(random() * soundURL.length)];

    //functions
    this.fire = function() {
        if (this.type === 0) {
            this.simplePlayer4();
        } else if (this.type === 1) {
            this.simplePlayer1();
        } else if (this.type === 2) {
            this.simplePlayer2();
        } else if (this.type === 3) {
            this.simplePlayer3();
        }
    }

    //for Resistor
    this.simplePlayer = function() {
      //something wrong with this line of code, it can only fire once unless I refresh the code
      /*
        var synth = new Tone.FMSynth().toMaster();
        var generalSound = [];
        for (var i = 0; i < 6; i++) {
            generalSound[i] = notation[floor(random(1, 7))] + floor(random(1, 7));
            console.log(generalSound[i])
        }
        synth.triggerAttackRelease(generalSound[0], '2n', '4n')
        synth.triggerAttackRelease(generalSound[1], '2n', '4n + 8n')
        // synth.triggerAttackRelease(generalSound[2], '8n', '2n')
        // synth.triggerAttackRelease(generalSound[3], '16n', '2n + 8t')
        // synth.triggerAttackRelease(generalSound[4], '4n', '2n + 8t * 2')
        // synth.triggerAttackRelease(generalSound[5], '4n', '0:3')
        console.log("simplePlayer")
        synth.dispose()
        */

    }

    //for LED
    this.simplePlayer1 = function() {
        var randomInt = floor(random()*soundURL.length)
        var player = new Tone.Player(soundURL[randomInt]).toMaster();
        player.retrigger = true;

        Tone.Buffer.on('load', function() {
            var now = Tone.now();
            player.start(now);
            player.start(now + 1);
            player.start(now + 4);
        })
        console.log("play 3 times",soundURL[randomInt]);


    }

    //for whatever
    this.simplePlayer2 = function() {
      var randomInt = floor(random()*soundURL.length)
        var delay = new Tone.FeedbackDelay(0.2, 0.8).toMaster();
        var player = new Tone.Player(soundURL[randomInt]).connect(delay)

        Tone.Buffer.on('load', function() {
          var now = Tone.now()
          player.start(now)
          delay.delayTime.exponentialRampToValueAtTime(1, now+4);

        })

        console.log("play FeedbackDelay",soundURL[randomInt]);
    }

    this.simplePlayer3 = function() {
        //the following line only play once
        var randomInt = floor(random()*soundURL.length)

        var osc = new Tone.Oscillator().toMaster()
        var player = new Tone.Player(soundURL[randomInt]).toMaster()
        player.retrigger = true;

        function playerCallback(time){
          player.start(time).stop(time + 2.5)
        }

        function oscCallback(time){
          osc.start(time).stop(time + 2.5)
        }

        Tone.Transport.schedule(playerCallback, 0)
        Tone.Transport.schedule(playerCallback, 2.5)
        Tone.Transport.schedule(oscCallback, 0.5)
        Tone.Transport.schedule(oscCallback, 3)

        Tone.Buffer.on('load', function(){
          Tone.Transport.start().stop("+1.5").start("+4")
        })
        console.log("play schedule osc and playe", soundURL[randomInt]);


    }

    this.simplePlayer4 = function() {
      var fIndex = 0;
      var freqs = [440, 660, 1200, 800]
      var randomInt = floor(random()*soundURL.length)

      var osc = new Tone.Oscillator().toMaster()
      var player = new Tone.Player(soundURL[randomInt]).toMaster()
      player.retrigger = true;

      function oscCallback(time){
        osc.frequency.rampTo(freqs[fIndex], 0.5, time);
        fIndex = (fIndex + 1) % freqs.length
        osc.start(time).stop(time+5)
        player.start(time+1).stop(time+6)
      }

      Tone.Transport.scheduleRepeat(oscCallback,1, 5)

      Tone.Buffer.on('load', function(){
        Tone.Transport.start().stop("+5")
      })
      console.log("play frequency play",soundURL[randomInt]);

      }
    }


    //
