import { openDB } from "idb";

export async function create(task: string) {
	const database = await openDB("db", 1, {
		upgrade(db) {
			db.createObjectStore("tasks");
		}
	});

	console.log(database);
	database.add("tasks", task, task);
	database.close();
}

export async function getAllTasks() {
	const database = await openDB("db", 1, {
		upgrade(db) {
			db.createObjectStore("tasks");
		}
	});
	const tasks = await database.getAll("tasks");

	database.close();
	return tasks;
}
