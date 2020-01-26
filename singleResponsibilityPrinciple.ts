class TodoTask {
	constructor(private name: string, private deadline: Date) {}

	getName() {
		return `${this.name} has deadline up to ${this.deadline}`;
	}
}

class TodoTaskAdd {
	private storage: Storage;

	constructor() {}

	saveTask(task: TodoTask) {
		this.storage.setItem('task1', JSON.stringify(task));
	}
}
