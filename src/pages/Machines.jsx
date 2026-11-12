import { useState } from 'react';
import MachineCard from "../components/MachineCard";
import SearchFilterBar from "../components/SearchFilterBar";

function Machines({ machines, onStatusChange, onDelete }){
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    const filteredMachines = machines.filter((machine) => {
    const matchesName = machine.name
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());
    const matchesStatus = statusFilter === "" || machine.status === statusFilter;
    return matchesName && matchesStatus;
    });

    function handleReset() {
        setSearchTerm("");
        setStatusFilter("");
    }

    function handleDelete(machine){
        const confirmed = window.confirm(
            `Voulez vous supprimer la machine ${machine.name} ?`
        );
        if(confirmed){
            onDelete(machine.id);
        }
    }

    return (
        <section >
            <h1 className="text-3xl font-bold" >Gestion des machines</h1>
            <p className="mb-6 text-gray-500">{filteredMachines.length} machine(s) affichée(s) sur {machines.length}</p>

            <SearchFilterBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                statusFilter={statusFilter}
                onStatusFilterChange={setStatusFilter}
                onReset={handleReset}
            />

            {filteredMachines.length === 0 ? (
                <p className="rounded-xl bg-white p-8 text-center text-gray-500 shadow-sm">
                Aucun résultat : aucune machine ne correspond à votre recherche.
                </p>
            ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredMachines.map((machine) => (
                    <MachineCard
                    key={machine.id}
                    machine={machine}
                    onStatusChange={onStatusChange}
                    onDelete={handleDelete}
                    />
                ))}
                </div>
            )}
        </section>
    )
};

export default Machines;