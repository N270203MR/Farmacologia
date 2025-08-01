# Farmacologia: Informe Genètic

Aquest projecte permet generar un informe genètic personalitzat a partir de 4 paràmetres:
- **Gen 1**
- **Fenotip 1**
- **Gen 2**
- **Fenotip 2**

A partir d'aquestes seleccions es mostra la recomanació farmacogenètica corresponent.

## Contingut del repositori

- `index.html` - Disseny del web amb els desplegables
- `script.js` - Pel filtratge i per mostrar dades
- `dades.json` - Base de dades farmacogenètica

## Exemple d'ús

Selecciona:
- Gen 1: `CYP2B6`
- Fenotip 1: `indeterminat`
- Gen 2: `CYP2C19`
- Fenotip 2: `pobre`

Et mostrarà:
- Recomanació terapèutica personalitzada
- Font (ex: CPIC 2023)
- Fàrmac afectat
- Comentari (opcional)
- Nivell
- Família de malalties

## Fonts de dades

- CPIC 2023 (Clinical Pharmacogenetics Implementation Consortium)
- DPWG
- PharmGKB
