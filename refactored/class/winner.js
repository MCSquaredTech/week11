import { BaseElement } from "./base-element.js";

export class Winner extends BaseElement { 
    constructor() {
        super(); 
        this.player = ''; 
    }

    get p() { 
        return this.player;
    }
    set p(value) { 
        this.player = value;
    }

    getElementString() { 
        console.log(this.p.p.name);
        return `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole! ${this.p.p.name} Won the game!"</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
    }
}