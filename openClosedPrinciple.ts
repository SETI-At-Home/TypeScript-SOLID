class Membership {
	private ID: number;
	private Expiration: Date;
	private Price: number;

	constructor(ID: number, Expiration: Date, Price: number) {
		this.ID = ID;
		this.Expiration = Expiration;
		this.Price = Price;
	}

	public get id(): number {
		return this.ID;
	}

	public get expiration(): Date {
		return this.Expiration;
	}

	public get price(): number {
		return this.Price;
	}
}

class GoldMembership extends Membership {
	public get price(): number {
		return this.price * 5;
	}
}

class PlatinumMembership extends Membership {
	public get price(): number {
		return this.price * 10;
	}
}
