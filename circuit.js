var Circuit = function(arr) {
    //visual variables
    this.arr = arr;
    this.speed = 0;
    //tonejs variables

    //functions
    this.connect = function() {
        for (var i = 0; i < this.arr.length - 1; i++) {
            stroke(0);
            strokeWeight(10);
            line(arr[i].pos.x, arr[i].pos.y, arr[i + 1].pos.x, arr[i + 1].pos.y);
        }
    }

    this.currentFlow = function() {
        for (var i = 0; i < this.arr.length - 1; i++) {

        }
    }

    this.display = function() {
        this.connect();
    }

}
