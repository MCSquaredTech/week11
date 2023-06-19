
export class Tile { 
    constructor(tile, index, state, value) {
        this.tile = tile; 
        this.index = index; 
        this.state = state; 
        this.value = value;
    }

    // reset tile properties 
    reset() { 
        this.state = 'empty';
        this.value = '';
    }
}

