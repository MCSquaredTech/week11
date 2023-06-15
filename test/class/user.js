
"use strict";

import { BaseElement } from "./base-element.js";

export class User extends BaseElement { 
    constructor(name, gender, player){ 
        super();
        this._name = name;
        this._gender = gender;
        this._player = player;
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

    getElementString() { 
        console.log(this.player)
       return  `
        <div class="card" style="width: 18rem;">
            <h3>${this.player}</h3>
            <img class="card-img-top" src="${this._gender}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text"></p>
                <div class="crd-btn"></div>  
            </div>
            <div> 
                <div class="form-group  hide" id="pInput">
                    <input type="text" id="pFirstName" class="form-control" placeholder="First Name">
                    <input type="radio" class="form-check-inpuut" name="sex" id="pmaleRadio">
                    <label class="form-check-label" for="maleRadio">male</label>
                    <input type="radio" class="form-check-inpuut" name="sex" id="pfemaleRadio">
                    <label class="form-check-label" for="femaleRadio">female</label>
                    <!-- button class="btn btn-primary form-control" id="pSave">save</button -->
                    <div class="save-btn"></div>
                </div>
            </div> 
        </div> `
    }
}