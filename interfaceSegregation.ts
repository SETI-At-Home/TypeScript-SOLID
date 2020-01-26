interface InstallApplication {
	installApp(name: string): void;
}

interface RateApplication {
	rateAPp(name: string): void;
}

interface RemoveApplication {
	removeApp(name: string, id: number): void;
}

class Phone implements InstallApplication, RateApplication {
	rateAPp(name: string): void {
		`Rating ${name}`;
	}
	installApp(name: string): void {
		`Installing ${name} on your device`;
	}
}

class Tablet implements RateApplication, RemoveApplication {
	removeApp(name: string, id: number): void {
		`Removing ${name} from your device`;
	}
	rateAPp(name: string): void {
		`Rating ${name}`;
	}
}
