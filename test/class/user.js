
"use strict";

export class User { 
    constructor(name, sex, age, text, element){ 
        this._name = name; 
        this._sex = sex; 
        this._age = age; 
        this._text = text; 
        this.e = document.getElementById(element);
    }

    get name() { 
        return this._name; 
    }
    set name(value) {
        this._name = value
    }

    get sex() { 
        return this._sex; 
    }
    set sex(value) {
        this._sex = value;
    }

    get age() { 
        return this._age;
    }
    set age(value) { 
        this._age = value
    }

    get text() { 
        return this._text;
    }

    set text(value) { 
        this._text = value;
    }

    display(element) { 
        console.log(this.e);

        let newRow = document.createElement('div');
        newRow.innerHTML = `
            <div>${this.name} 
                <p>Current age ${this.age}</p> 
                <p>${this.text}</p
            </div>
        `
        this.e.appendChild(newRow);
    }


}