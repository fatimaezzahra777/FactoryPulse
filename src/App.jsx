import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Machines from "./pages/Machines";
import AddMachine from "./pages/AddMachine";

function App(){
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadMachines() {
      try {
        const response = await fetch("/machines.json");
        if(!response.ok){
          throw new Error("Impossiple de charger les machines"); 
        }
        const data = await response.json();
        setMachines(data);
      } catch (err) {
        setError("Error de chargement des donees : " +err.message );
      } finally {
        setLoading(false);
      }
    }
    loadMachines();
  }, []);

  function handleStatusChange(id, newStatus) {
    setMachines((current) =>
      current.map((m) => (m.id === id ? { ...m, status: newStatus } : m))
    );
  }

  function handleDeleteMachine(id) {
    setMachines((current) => current.filter((m) => m.id !== id));
  }

  function handleAddMachine(newMachine) {
    setMachines((current) => [...current, { id: crypto.randomUUID(), ...newMachine }])
  }

  return(
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-6">
        {loading && (
          <p className="rounded-xl bg-white p-4 text-center shadow-sm">Chargement des machines......</p>
        )}
        {error && (
          <p className="rounded-xl border border-danger bg-white p-4 text-center text-danger shadow-sm"> {error}</p>
        )}
        {!loading && !error && (
          <Routes>
            <Route path="/" element={<Dashboard machines={machines} />} />
            <Route path="/machines" element={<Machines machines={machines} onStatusChange={handleStatusChange} onDelete={handleDeleteMachine} />} />
            <Route path="/machines/new" element={<AddMachine onAdd= {handleAddMachine} />} />
          </Routes>
        )}
      </main>
    </>
  );
}

export default App;