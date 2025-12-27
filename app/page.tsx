import LaunchesClient from '@/components/launches/launches-client';
import { getAllLaunches, getAllLaunchpads, getAllRockets } from '@/lib/api';
import ConnectionAlert from '@/components/shared/connection-alert';

export default async function LaunchesPage() {
	let launches, rockets, launchpads;
	let hasError = false;
	let errorMessage = '';

	//Test to see skeleton components, simulate delay
	await new Promise((resolve) => setTimeout(resolve, 2000));

	try {
		//Get data from API
		[launches, rockets, launchpads] = await Promise.all([
			getAllLaunches(),
			getAllRockets(),
			getAllLaunchpads(),
		]);
	} catch (error) {
		hasError = true;
		errorMessage =
			error instanceof Error
				? error.message
				: 'Failes to connect to SpaceX API';
	}

	return (
		<>
			{hasError && (
				<div className="-mx-6 -mt-8 mb-6">
					<ConnectionAlert
						message={`Connection to SpaceX API failed: ${errorMessage}`}
						// onReconnect={() => window.location.reload()}
					/>
				</div>
			)}
			<LaunchesClient
				launches={launches ?? []}
				rockets={rockets ?? []}
				launchpads={launchpads ?? []}
			/>
		</>
	);
}
