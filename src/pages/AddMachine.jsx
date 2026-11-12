import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { STATUSES } from "../constants/statuses";

const initialForm = {
    name: "",
    zone: "",
    status: "",
    dailyProduction: "",
};

function validate(form) {
    const errors = {};
    
    if(form.name.trim() === ""){
        errors.name = "Le nom de la machine est obligatoire.";
    }

    if(form.zone.trim() === ""){
        errors.zone = "La zone de la production est obligatoire.";
    }

    if(!STATUSES.includes(form.status)){
        errors.status = "veuillez choisir un status.";
    }

    if(form.name.trim() === ""){
        errors.name = "Le nom de la machine est obligatoire.";
    }

    const dailyProduction = Number(form.dailyProduction);
    if(form.dailyProduction.trim() === "") {
        errors.dailyProduction = "La production est obligatoire";
    } else if (!Number.isInteger(dailyProduction) || dailyProduction < 0){
        errors.dailyProduction = "La production doit etre un nombre"
    }

    return errors;
}

function AddMachine({ onAdd }) {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((current) => ({ ...current, [name]: value }));
        setErrors((current) => ({ ...current, [name]: undefined }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const foundErrors = validate(form);
        if(Object.keys(foundErrors).length > 0) {
            setErrors(foundErrors);
            return;
        }

        onAdd({
            name: form.name.trim(),
            zone: form.zone.trim(),
            status: form.status,
            dailyProduction: Number(form.dailyProduction),
        });
        navigate("/machines");
    }

    const inputClass = (field) => 
        `w-full rounded-lg border px-3 py-2 ${
            errors[field] ? "border-danger" : "border-gray-300"
        }`;

    return (
        <section className="mx-auto max-w-xl">
            <h1 className="text-3xl font-bold"> Ajouter une machine</h1>
            <p className="mb-6 text-gray-500"> Renseignez les informations</p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm">
                <div>
                    <label htmlFor="name" className="mb-1 block font-medium">Nom de la machine</label>
                    <input type="text" name="name" id="name" value={form.name} onChange={handleChange} className={inputClass("name")} />
                    {errors.name && <p className="mt-1 text-sm text-danger">{errors.name}</p> }
                </div>
                <div>
                    <label htmlFor="zone" className="mb-1 block font-medium">Zone de production</label>
                    <input type="text" name="zone" id="zone" value={form.zone} onChange={handleChange} className={inputClass("zone")} />
                    {errors.zone && <p className="mt-1 text-sm text-danger">{errors.zone}</p> }
                </div>
                <div>
                    <label htmlFor="status" className="mb-1 block font-medium">Status</label>
                    <select name="status" id="status" value={form.status} onChange={handleChange} className={`${inputClass("status")} bg-white`}>
                        {STATUSES.map((status) => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                    {errors.status && <p className="mt-1 text-sm text-danger">{errors.status}</p> }
                </div>
                <div>
                    <label htmlFor="dailyProduction" className="mb-1 block font-medium">La production</label>
                    <input type="number" name="dailyProduction" id="dailyProduction" value={form.dailyProduction} onChange={handleChange} className={inputClass("dailyProduction")} />
                    {errors.dailyProduction && <p className="mt-1 text-sm text-danger">{errors.dailyProduction}</p> }
                </div>

                <button type="submit" className="rounded-lg bg-primary px-4 py-2.5 font-semibold text-white transition hover:bg-primary-dark">Ajouter Machine</button>
            </form>
        </section>
    );
}

export default AddMachine;