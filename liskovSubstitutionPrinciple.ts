class Person {
	constructor(public name: string, public surname: string, private address: string) {
		this.name = name;
		this.surname = surname;
		this.address = address;
	}
}

class Dev extends Person {
	getAddress() {
		return 'qwerty';
	}
}

class RegisteredPerson extends Person {}

class City {
	public persons: Array<Person> = [];

	addPerson(person: Person): RegisteredPerson {
		this.persons.push(person);

		return new RegisteredPerson(person.name, person.surname, 'UNIQUE ID');
	}
}

class Skopje extends City {
	addPerson(dev: Dev): RegisteredPerson {
		const person = new Person('someName', 'second name', 'idd');

		this.persons.push(person);

		return new RegisteredPerson(dev.name, dev.surname, dev.getAddress());
	}
}
