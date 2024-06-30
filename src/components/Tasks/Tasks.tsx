"use client";

import { create, getAllTasks } from "@/app/actions";
import cn from "@/utils/cn";
import React, { createRef, useEffect, useState } from "react";

const Tasks = () => {
	const [tasks, setTasks] = useState<string[]>([]);
	const [newTask, setNewTask] = useState<string>("");
	const newTaskRef = createRef<HTMLInputElement>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const oldTasks = await getAllTasks();
				console.log("oldTasks", oldTasks);
				setTasks(oldTasks);
			} catch (error) {
				console.log("Error fetching tasks:", error);
			}
		};
		fetchData();
		setLoading(false);
	}, []);

	useEffect(() => {
		setNewTask(newTaskRef.current?.value || "");
	}, [newTaskRef.current]);
	return (
		<div>
			{!loading && (
				<>
					<div className="mt-4 flex flex-col gap-2">
						{tasks &&
							tasks.map((task, index) => (
								<div
									key={index}
									className="flex w-80 gap-2 bg-slate-600 p-2 text-white"
								>
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
							onClick={async () => {
								if (newTaskRef.current && newTaskRef.current.value) {
									setTasks([newTaskRef.current.value, ...tasks]);
									await create(newTaskRef.current.value);
									newTaskRef.current.value = "";
									setNewTask("");
								}
							}}
						>
							Add Task
						</button>
					</div>
				</>
			)}
			{loading && (
				<div
					className={"mt-4 h-80 w-80 animate-pulse rounded-md bg-[#c2cfd6]"}
				/>
			)}
		</div>
	);
};

export default Tasks;
