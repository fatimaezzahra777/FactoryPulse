# FactoryPulse

Application web de suivi des machines industrielles d'une usine de Safi.

## Fonctionnalités
- Tableau de bord : total, machines en fonctionnement, machines en panne
- Liste des machines avec recherche par nom et filtre par statut
- Modification du statut et suppression avec confirmation
- Ajout d'une machine avec validation du formulaire

## Technologies
React, Vite, React Router, Tailwind CSS

## Installation
git clone https://github.com/TON-NOM/factorypulse.git
cd factorypulse
npm install
npm run dev

## Données
Les données initiales viennent de `public/machines.json`. Les modifications
sont conservées en mémoire et perdues au rechargement de la page.

## Structure
- `src/pages/` : Dashboard, Machines, AddMachine
- `src/components/` : Navbar, StatCard, MachineCard, SearchFilterBar, StatusBadge
- `src/constants/` : liste des statuts