interface Application {
	id: number;
	title: string;
	data: string;
}

interface ApplicationService {
	getAll(): Application[];

	save(post: Application): void;
}

class PostService implements ApplicationService {
	getAll(): Application[] {
		return [
			{
				id: 1,
				title: 'mock title',
				data: 'mock body',
			},
		];
	}

	save(post: Application): void {
		`saving posts`;
	}
}

class MockApplicationService implements ApplicationService {
	mockApplications: Application[] = [
		{
			id: 1,
			title: 'application title',
			data: 'application body',
		},
		{
			id: 2,
			title: 'application title',
			data: 'application body',
		},
	];

	getAll(): Application[] {
		return this.mockApplications;
	}

	save(post: Application): void {
		this.mockApplications.push(post);
	}
}

class NewsFeed {
	constructor(private appService: ApplicationService) {}

	loadApplications() {
		return this.appService.getAll();
	}
}
