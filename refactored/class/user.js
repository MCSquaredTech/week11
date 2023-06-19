
"use strict";

import { BaseElement } from "./base-element.js";

export class User extends BaseElement { 
    constructor(id, name, avatar, player){ 
        super();
        this.id = id;
        this._name = name;
        this.avatar = avatar;
        this._player = player;
        this.isHighlighted = false;
    }

    get name() { 
        return this._name;
    }
    set name(value) { 
        this._name = value;
    }
    get player() { 
        return this._player;
    }
    set player(value) { 
        this._player = value;
    }

    get xo() { 
        return this._player === 'Player X' ? 'X' : 'O';
    }

    highlight() {
        $(`.${this.id}-header`).text(`${this.player}'s Turn`);
        this.isHighlighted = true;
    }

    normal() {
        $(`.${this.id}-header`).text(`${this.player}`);
        this.isHighlighted = false;
    }

    getElementString() { 
       return  `
        <div class="card card-toggle">
            <h3 class="${this.id}-header">${this.player}</h3>
            <img class="card-img-top card-background" src="${this.avatar}" alt="Card image cap">
            <div class="card-body">
                <h5 class="${this.id}-card-title">${this.name}</h5>
                <p class="card-text"></p>
                <div class="${this.id}-crd-btn"></div>  
                <button class="btn btn-primary form-control" id="${this.id}-pChange">change</button>
            </div>
            <div class="form-group hide" id="${this.id}-pInput">
                <input type="text" id="${this.id}-pFirstName" class="form-control" placeholder="First Name">
                <input type="radio" class="form-check-inpuut" name="sex" id="${this.id}-pMaleRadio">
                <label class="form-check-label" for="maleRadio">male</label>
                <input type="radio" class="form-check-inpuut" name="sex" id="${this.id}-pFemaleRadio">
                <label class="form-check-label" for="femaleRadio">female</label>
                <button class="btn btn-primary form-control" id="${this.id}-pSave">save</button>
            </div> 
        </div> `
    }
}