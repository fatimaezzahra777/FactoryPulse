import { STATUSES } from "../constants/statuses";

function SearchFilterBar({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  onReset,
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm md:flex-row">
      <input type="text" value={searchTerm} onChange={(e) => onSearchChange(e.target.value)} placeholder="Rechercher une machine par nom..." aria-label="Rechercher une machine" className="flex-1 rounded-lg border border-gray-300 px-3 py-2"/>
      <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)} aria-label="Filtrer par statut" className="rounded-lg border border-gray-300 bg-white px-3 py-2" >
        <option value="">Tous les statuts</option>
        {STATUSES.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>

      <button type="button" onClick={onReset} className="rounded-lg border border-gray-300 px-4 py-2 font-medium transition hover:bg-gray-100">
        Réinitialiser
      </button>
    </div>
  );
}

export default SearchFilterBar;