import StatusBadge from "./StatusBadge";
import { STATUSES } from "../constants/statuses";

function MachineCard({ machine, onStatusChange, onDelete }) {
  return (
    <article className="flex flex-col gap-3 rounded-xl bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-lg font-semibold">{machine.name}</h2>
          <p className="text-sm text-gray-500">{machine.zone}</p>
        </div>
        <StatusBadge status={machine.status} />
      </div>

      <p className="text-gray-600">
        Production du jour :{" "}
        <span className="font-bold text-gray-900">{machine.dailyProduction}</span> pièces
      </p>

      <div className="mt-auto flex flex-col gap-2 sm:flex-row">
        <select
          value={machine.status}
          onChange={(e) => onStatusChange(machine.id, e.target.value)}
          aria-label={`Statut de ${machine.name}`}
          className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2"
        >
          {STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={() => onDelete(machine)}
          className="rounded-lg bg-danger px-4 py-2 font-medium text-white transition hover:bg-red-700"
        >
          Supprimer
        </button>
      </div>
    </article>
  );
}

export default MachineCard;