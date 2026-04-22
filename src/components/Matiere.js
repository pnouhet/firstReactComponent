import "../styles.css";

const matieres = [
  { title: "Maths", desc: "Les mathématiques c'est compliqué...", id: 1 },
  { title: "Français", desc: "Le français c'est cool !", id: 2 },
  { title: "Histoire", desc: "L'histoire c'est du par coeur.", id: 3 },
];

function AfficherMatiere({ idRecherche }) {
  const matiere = matieres.find((m) => m.id === idRecherche);
  return (
    <div className="matiere">
      <h1>{matiere.title}</h1>
      <p>{matiere.desc}</p>
    </div>
  );
}

export default function Matiere({ idMatiere }) {
  return (
    <div className="matiere_head">
      <AfficherMatiere idRecherche={idMatiere} />
    </div>
  );
}
