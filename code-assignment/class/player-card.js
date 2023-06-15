
export class Player { 
    constructor(id, name, gender, element, xoro) { 
        this.id = id;
        this._name = name;
        this._gender = gender; 
        this.placeHolder = document.getElementById(element);
        console.log(element);
        this.xoro = xoro;
    }

    get gender() {
        // get Player information     
        return this._gender === 'male' ? './imgs/man.png' : './imgs/woman.png';
    }

    set gender(value) { 
        this._gender = value
    }

    get name() { 
        return this._name;
    }

    set name(value) { 
        this._name = value
    }


    change() {
        let playerInput = $(`#${this.id}-pInput`);
        let playerChange = $(`#${this.id}-pChange`);

        playerChange.on('click', () => {
           playerInput.removeClass('hide');
           playerInput.addClass('show');
        });
    }

    save() {
        let playerInput = $(`#${this.id}-pInput`);
        $(`#${this.id}-pSave`).on('click', (e) => {
            e.preventDefault();
            this.gender =  $(`#${this.id}-pmaleRadio`).is(":checked") ? 'male' : 'female';
            console.log(this.id,this.gender);
            this.name = $(`#${this.id}-pFirstName`).val();
            console.log(this.name);

            playerInput.removeClass('show');
            playerInput.addClass('hide')
            this.display();
            this.change();
            this.save();
        })
    }

    display() { 
        // const placeHolder = document.getElementById(this.element);
        this.clearDisplay(this.placeHolder);
        let displayPlayerCard = document.createElement('div');
        displayPlayerCard.classList.add('card');
        
        displayPlayerCard.innerHTML = (`
            <h3>Player ${this.xoro}</h3>
            <img id="${this.id}-pImage" class="card-img-top card-background" src="${this.gender}" alt="${this.name} avatar">
            <div class="card-body">
                <h5 id="${this.id}-pTitle" class="card-title">${this.name}</h5>
                <p class="card-text"></p>
                <a id="${this.id}-pChange" class="btn btn-primary">Change Name</a>
            </div>
            <div class="form-group  hide" id="${this.id}-pInput">
                <input type="text" id="${this.id}-pFirstName" class="form-control" placeholder="First Name">
                <input type="radio" class="form-check-inpuut" name="sex" id="${this.id}-pmaleRadio">
                <label class="form-check-label" for="maleRadio">male</label>
                <input type="radio" class="form-check-inpuut" name="sex" id="pfemaleRadio">
                <label class="form-check-label" for="femaleRadio">female</label>
                <button class="btn btn-primary form-control" id="${this.id}-pSave">save</button>
            </div>
        `);
        this.placeHolder.appendChild(displayPlayerCard);
        
    }

    clearDisplay(element) { 
        while(element.firstChild) { 
            element.removeChild(element.firstChild);
        }
    }

}