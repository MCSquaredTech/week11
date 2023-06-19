import { BaseElement } from "./base-element.js";

export class TieGame extends BaseElement { 
    constructor() {
        super(); 
    }

    getElementString() { 
        return `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Oh NO! We have a tie game!"</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
    }
}