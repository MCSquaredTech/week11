
export class Player { 
    constructor(name, gender, element, xoro) { 
        this._name = name;
        this._gender = gender; 
        this.placeHolder = document.getElementById(element);
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
        let playerInput = $('#pInput');
        let playerChange = $("#pChange");

        playerChange.on('click', () => {
           playerInput.removeClass('hide');
           playerInput.addClass('show');
           this.save();
        });
    }

    save() {
        let playerInput = $('#pInput');
        $('#pSave').on('click', (e) => {
            e.preventDefault();
            this.gender =  $('#pmaleRadio').is(":checked") ? 'male' : 'female';
            this.name = $('#pFirstName').val();

            playerInput.removeClass('show');
            playerInput.addClass('hide')
            this.display();
            this.change();
        })
    }

    display() { 
        // const placeHolder = document.getElementById(this.element);
        this.clearDisplay(this.placeHolder);
        let displayPlayerCard = document.createElement('div');
        displayPlayerCard.classList.add('card');
        
        displayPlayerCard.innerHTML = (`
            <h3>Player ${this.xoro}</h3>
            <img id="pImage" class="card-img-top card-background" src="${this.gender}" alt="${this.name} avatar">
            <div class="card-body">
                <h5 id="pTitle" class="card-title">${this.name}</h5>
                <p class="card-text"></p>
                <a id="pChange" class="btn btn-primary">Change Name</a>
            </div>
            <div class="form-group  hide" id="pInput">
                <input type="text" id="pFirstName" class="form-control" placeholder="First Name">
                <input type="radio" class="form-check-inpuut" name="sex" id="pmaleRadio">
                <label class="form-check-label" for="maleRadio">male</label>
                <input type="radio" class="form-check-inpuut" name="sex" id="pfemaleRadio">
                <label class="form-check-label" for="femaleRadio">female</label>
                <button class="btn btn-primary form-control" id="pSave">save</button>
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