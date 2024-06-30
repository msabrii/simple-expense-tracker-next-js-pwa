import Tasks from "@/components/Tasks/Tasks";

const Home = () => (
	<main className="flex min-h-screen flex-col items-center justify-between p-8">
		<div>
			<h1>Tasks</h1>
			<p>Manage your tasks with ease</p>
			<Tasks />
		</div>
	</main>
);

export default Home;
