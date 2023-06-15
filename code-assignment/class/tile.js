
export class tile { 
    constructor(tile, index) {
        this.tile = tile; 
        this.position = index; 
        this.isOccupide = false; 
        this.value = '';

        this.tile.addEventListener('click', () => {
            //upate player value & switch isOccupied
            tile.innerText = this.value;
            this.isOccupide = true;
        }); 
    }
}