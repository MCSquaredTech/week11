
export class User { 
    constructor(name, sex, age, text){ 
        this.name = name; 
        this.sex = sex; 
        this.age = age; 
        this.text = text; 
    }

    get user() { 
        return this.name; 
    }

    get sex() { 
        return this.sex; 
    }

    get age() { 
        return this.age;
    }

    get text() { 
        return this.text;
    }

    set Text(value) { 
        this.text = value;
    }
}