"use client";

import React, { createRef, useEffect, useState } from "react";

const Tasks = () => {
	const [tasks, setTasks] = useState<string[]>([]);
	const [newTask, setNewTask] = useState<string>("");
	const newTaskRef = createRef<HTMLInputElement>();

	useEffect(() => {
		setNewTask(newTaskRef.current?.value || "");
	}, [newTaskRef.current]);
	return (
		<div>
			<div className="flex flex-col gap-2">
				{tasks &&
					tasks.map((task, index) => (
						<div key={index} className="flex gap-2 bg-slate-600 p-2">
							{task}
						</div>
					))}
			</div>
			<div className="mt-4">
				<input
					type="text"
					ref={newTaskRef}
					placeholder="Add a task"
					className="w-full border border-slate-600 p-2"
				/>
				<button
					className="mt-2 bg-slate-600 p-2 text-white"
					onClick={() => {
						if (newTaskRef.current && newTaskRef.current.value) {
							setTasks([newTaskRef.current.value, ...tasks]);
							newTaskRef.current.value = "";
							setNewTask("");
						}
					}}
				>
					Add Task
				</button>
			</div>
		</div>
	);
};

export default Tasks;
