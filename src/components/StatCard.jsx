const variants = {
    total: "border-primary",
    running: "border-success",
    broken: "border-danger",
}

function StatCard({ label, value, variant }) {
    return (
        <article className={`rounded-xl border-l-8 bg-white p-5 shadow-sm ${variants[variant]}`}>
            <p className="font-medium text-gray-500">{label}</p>
            <p className="mt-1 text-4xl font-bold">{value}</p>
        </article>
    );
}

export default StatCard;