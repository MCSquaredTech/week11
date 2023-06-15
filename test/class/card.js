import { User } from './user.js';
import { Button } from './button.js'

export class Card {
    constructor(user, img, title, element) {
        this.user = user; 
        this.img = img; 
        this.title = title;
        this.element = element ;
    }

    display() {
        // console.log(this.title);
        this.clear($(this.element))
        let p = new User(this.user, this.img, this.title);
        p.appendToElement($(this.element));
        
        this.clear($('.crd-btn'));
        let b = new Button('Change');
        b.appendToElement($('.crd-btn'));
        b.element.click(() => {
            $('#pInput').removeClass('hide');
            $('#pInput').addClass('show');
        });
        let s = new Button('Save');
        s.appendToElement($('.save-btn'));
        s.element.click(() => { 
            p.user = $('#pFirstName').val();

            $('#pInput').removeClass('show'); 
            $('#pInput').addClass('hide')
            this.clear(this.element);
            this.display();
        });
    }

    clear(element) { 
        while(element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

}


