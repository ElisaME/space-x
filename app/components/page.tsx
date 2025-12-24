import { StatusBadge } from '@/components/shared/status-badge';
import './../globals.css';

export default function Componentes() {
	return (
		<div className="bg-gray-950 h-screen p-3">
			<h1 className="text-white">Components:</h1>
			<div>
				<h2>Status Badge</h2>
				<StatusBadge status="success"></StatusBadge>
				<StatusBadge status="active"></StatusBadge>
				<StatusBadge status="upcoming"></StatusBadge>
				<StatusBadge status="failed"></StatusBadge>
			</div>
			<div>
				<h2>Search Bar</h2>
			</div>
		</div>
	);
}
