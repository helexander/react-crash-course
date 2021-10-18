import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Food Shopping",
			day: "Feb 5th at 2.30pm",
			reminder: false,
		},
		{
			id: 2,
			text: "Pick up kids from school",
			day: "Feb 5th at 5.30pm",
			reminder: false,
		},
	]);

	// Add Task
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};

	// Delete Task
	const deleteTask = (id) => {
		setTasks(
			tasks.filter((task) => {
				return task.id !== id;
			})
		);
	};

	// Toggle Reminder
	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) => {
				return task.id === id ? { ...task, reminder: !task.reminder } : task;
			})
		);
	};

	return (
		<div className="container">
			<Header
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>
			{showAddTask && <AddTask onAdd={addTask} />}
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				"No Tasks To Show"
			)}
		</div>
	);
}

export default App;
