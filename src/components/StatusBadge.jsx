const styles = {
    "En fonctionnement": "bg-green-100 text-green-700",
    "À l'arrét": "bg-gray-200 text-gray-700",
    "En panne": "bg-red-100 text-red-700",
};

function  StatusBadge({ status }) {
    return (
        <span className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-sm font-semibold ${styles[status]}`}>
            {status}
        </span>
    );  
}

export default StatusBadge;