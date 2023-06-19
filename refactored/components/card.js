import { User } from '../class/user.js';

export class Card {
    constructor(id, user, img, title, element) {
        this.id = id;
        this.user = user; 
        this.img = img; 
        this.title = title;
        this.element = element ;
        this.p = new User(this.id, this.user, this.img, this.title);
    }

    get xo() { 
        this.p.xo;
    }

    display() {
        $(this.element).empty();
        this.p.appendToElement($(this.element));
        this.eventChange();
    }

    eventChange() { 
        
        $(`#${this.id}-pChange`).on('click', () => { 
            $(`#${this.id}-pInput`).removeClass('hide');
            $(`#${this.id}-pInput`).addClass('show');
            this.eventSave(); 
        });
    }

    eventSave() { 
        $(`#${this.id}-pSave`).on('click', () => { 
            
            let user = ($(`#${this.id}-pFirstName`).val());
            let avatar  = $(`#${this.id}-pMaleRadio`).is(":checked") ? './imgs/man.png' : './imgs/woman.png';
            this.p.name = user;
            this.p.avatar = avatar; 
            this.display(); 
            this.p.isHighlighted ? this.p.highlight() : this.p.normal();
        });
    }

}


