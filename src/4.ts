class Key {
  private signature: number
    constructor() {
        this.signature = Math.round(Math.random()*1 + 1)
    }
    getSignature(): number {
        return this.signature
    }
}

class Person {
    private name: string;
    private key: Key;
    constructor(key: Key, name: string) {
      this.name = name;
      this.key = key;
    }

    getKey() {
        return this.key
    }
}

abstract class House {
    door: boolean;
    key: Key;
    tenants: Person[] = [];
    constructor(key: Key) {
      this.door = false;
      this.key = key;
    };

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person)
        };
    };
     
    abstract openDoor(key: Key):void;
};

class MyHouse extends House {
  openDoor(key: Key){
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true
      console.log('The door is open')
    } else {
      this.door = false
      console.log('The door is closed')
      };
    };
};


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key, "unknown");
house.openDoor(person.getKey());
house.comeIn(person);

export {};