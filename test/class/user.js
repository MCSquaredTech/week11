
"use strict";

import { BaseElement } from "./base-element.js";

export class User extends BaseElement { 
    constructor(name, gender, player){ 
        super();
        this.name = name;
        this.gender = gender;
        this.player = player;
    }

    getElementString() { 
       return  `
        <div class="card" style="width: 18rem;">
            <h3>${this.player}</h3>
            <img class="card-img-top" src="${this.gender}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text"></p>
                <div class="crd-btn"></div>
                <a href="#" class="btn btn-primary">Change</a>
            </div>
        </div> `
    }
}