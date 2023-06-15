import { BaseElement } from "./base-element.js";

export class Button extends BaseElement { 
    constructor(title) { 
        super(); 
        this.title = title; 
    }


    getElementString() { 
        return `
        <button class="btn btn-success">
            ${this.title}
        </button>
        `;
    }

}