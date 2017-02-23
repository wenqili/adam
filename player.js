var soundURL = [
    "https://tonejs.github.io/examples/audio/casio/A1.mp3",
    "https://tonejs.github.io/examples/audio/casio/A2.mp3",
    "https://tonejs.github.io/examples/audio/casio/A3.mp3",
    // "https://tonejs.github.io/examples/audio/casio/A4.mp3",
    "https://tonejs.github.io/examples/audio/casio/A5.mp3"
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
        // if (this.type === 0) {
            this.simplePlayer();
        // } else if (this.type === 1) {
        //     this.simplePlayer1();
        // } else if (this.type === 2) {
        //     this.simplePlayer2();
        // } else if (this.type === 3) {
        //     this.simplePlayer3();
        // }
    }

    //for Resistor
    this.simplePlayer = function() {
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

    }

    //for LED
    this.simplePlayer1 = function() {
        var player = new Tone.Player(soundURL[0]).toMaster();
        player.retrigger = true;

        Tone.Buffer.on('load', function() {
            var now = Tone.now();
            player.start(now);
            player.start(now + 1);
            player.start(now + 4);
            console.log("simplePlayer1");
        })

    }

    //for whatever
    this.simplePlayer2 = function() {
      var synth = new Tone.Synth().toMaster();
      var generalSound = [];
      for (var i = 0; i < 6; i++) {
          generalSound[i] = notation[floor(random(0, 7))] + floor(random(0, 7));
      }
      synth.triggerAttackRelease(generalSound[0], '2n', '4n')
      synth.triggerAttackRelease(generalSound[1], '2n', '4n + 8n')
      synth.triggerAttackRelease(generalSound[2], '8n', '2n')
      synth.triggerAttackRelease(generalSound[3], '16n', '2n + 8t')
      synth.triggerAttackRelease(generalSound[4], '4n', '2n + 8t * 2')
      synth.triggerAttackRelease(generalSound[5], '4n', '0:3')
      console.log("simplePlayer")
        console.log("simplePlayer2");
    }

    this.simplePlayer3 = function() {
      var synth = new Tone.Synth().toMaster();
      var generalSound = [];
      for (var i = 0; i < 6; i++) {
          generalSound[i] = notation[floor(random(0, 7))] + floor(random(0, 7));
      }
      synth.triggerAttackRelease(generalSound[0], '2n', '4n')
      synth.triggerAttackRelease(generalSound[1], '2n', '4n + 8n')
      synth.triggerAttackRelease(generalSound[2], '8n', '2n')
      synth.triggerAttackRelease(generalSound[3], '16n', '2n + 8t')
      synth.triggerAttackRelease(generalSound[4], '4n', '2n + 8t * 2')
      synth.triggerAttackRelease(generalSound[5], '4n', '0:3')
      console.log("simplePlayer")
        console.log("simplePlayer3");
    }


    //



}
