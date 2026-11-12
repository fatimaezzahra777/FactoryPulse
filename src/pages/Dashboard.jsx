import StatCard from "../components/StatCard";

function Dashboard({ machines }) {
    const total = machines.length;
    const running = machines.filter((m) => m.status === "En fonctionnement").length;
    const broken = machines.filter((m) => m.status === "En panne").length;

    return (
        <section>
            <h1 className="text-3xl font-bold"> Tableau de bord</h1>
            <p className="mb-6 text-gray-500"> Vue d'ensemble des équipements de l'usine de Safi</p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <StatCard label="Total des machines" value={total} variant="total" />
                <StatCard label="En fonctionnement" value={running} variant="running" />
                <StatCard label="En panne" value={broken} variant="broken" />
            </div>
        </section>
    );
}

export default Dashboard;