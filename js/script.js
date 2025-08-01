let dades = [];

document.addEventListener("DOMContentLoaded", function() {
 fetch('dades.json')
  .then(response => response.json())
  .then(json => {
  dades = json;
  //Obtenir valors únics per a cada camp
  const gens1 = [...new Set(dades.map(d => d["Gen 1"]))];
  const fenotips1 = [...new Set(dades.map(d => d["Fenotip 1"]))];
  const gens2 = [...new Set(dades.map(d => d["Gen 2"]))];
  const fenotips2 = [...new Set(dades.map(d => d["Fenotip 2"]))];

  //Omplir desplegables amb valors únics
  omplirSelect('gen1', gens1);
  omplirSelect('fenotip1', fenotips1);
  omplirSelect('gen2', gens2);
  omplirSelect('fenotip2', fenotips2);
});
});

function omplirSelect(id, opcions) {
 const select = document.getElementById(id);
 select.innerHTML = '<option value="">-- Selecciona --</option>';
 opcions.forEach(opcio => {
  const opt = document.createElement('option');
  opt.value = opcio;
  opt.textContent = opcio;
  select.appendChild(opt);
  });
 }

function mostrarRecomanacio() {
 const g1 = document.getElementById("gen1").value;
 const f1 = document.getElementById("fenotip1").value;
 const g2 = document.getElementById("gen2").value;
 const f2 = document.getElementById("fenotip2").value;

const resultat = dades.find(d => 
 d["Gen 1"] === g1 && 
 d["Fenotip 1"] === f1 && 
 d["Gen 2"] === g2 && 
 d["Fenotip 2"] === f2
);

 const div = document.getElementById("resultat");
  if (resultat) {
  div.innerHTML = `
  <h3>🔬 Recomanació</h3>
  <p><strong>Gen 1:</strong> ${resultat["Gen 1"]}</p>
  <p><strong>Fenotip 1:</strong> ${resultat["Fenotip 1"]}</p>
  <p><strong>Gen 2:</strong> ${resultat["Gen 2"]}</p>
  <p><strong>Fenotip 2:</strong> ${resultat["Fenotip 2"]}</p>
  <p><strong>Nivell:</strong> ${resultat["Nivell"] || ""}</p>
  <p><strong>Família:</strong> ${resultat["Família"] || ""}</p>
  <p><strong>Fàrmac:</strong> ${resultat["Fàrmac"] || ""}</p>
  <p><strong>Recomanació:</strong> ${resultat["Recomanació"] || ""}</p>
  <p><strong>Font:</strong> ${resultat["Font"] || ""}</p>`
   ;
  } else {
    div.innerHTML = '<p>⚠️ No s’ha trobat cap recomanació per aquesta combinació.</p>';
  }
}
 
