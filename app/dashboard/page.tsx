import LaunchesClient from '@/components/launches/launches-client';
import { getAllLaunches, getAllLaunchpads, getAllRockets } from '@/lib/api';
import './../globals.css';

export default async function LaunchesPage() {
	let launches, rockets, launchpads;

	try {
		//Get data from API
		[launches, rockets, launchpads] = await Promise.all([
			getAllLaunches(),
			getAllRockets(),
			getAllLaunchpads(),
		]);
	} catch (error) {
		return (
			<div className="flex min-h-100 items-center justify-center">
				<div className="text-center">
					<h2 className="text-xl font-bold text-red-500">Error loading data</h2>
					<p className="mt-2 text-gray-400">
						{error instanceof Error ? error.message : 'Unknown error'}
					</p>
				</div>
			</div>
		);
	}
	return (
		<LaunchesClient
			launches={launches}
			rockets={rockets}
			launchpads={launchpads}
		/>
	);
}
