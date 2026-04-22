import "../styles.css";

const profs = [
  {
    name: "Olivier",
    surname: "Sarfati",
    img: "https://myprepa.fr/wp-content/uploads/2023/04/Olivier-sarfati-e1589975619748.jpeg",
    desc: "Directeur et fondateur du groupe MyPrepa, fondateur de la plateforme de cours en ligne LiveClass, diplômé d’HEC Paris et enseignant en mathématiques depuis 25 ans.",
    id: 1,
  },
  {
    name: "Antoine",
    surname: "Lagarde",
    img: "https://myprepa.fr/wp-content/uploads/2023/11/WhatsApp-Image-2023-09-11-at-23.17.01.jpeg",
    desc: "Diplômé d’HEC Paris (où il fut major de l’écrit), de l’école des Mines de Paris ainsi que d’une licence en mathématiques appliquées de l’université Paris-Saclay, Antoine Lagarde enseigne les mathématiques en cours particuliers depuis 2016 et en classes préparatoires chez MyPrepa depuis 2021.",
    id: 2,
  },
  {
    name: "Gregory",
    surname: "Rapuch",
    img: "https://myprepa.fr/wp-content/uploads/2026/04/Gregory-Rapuch-1.jpeg",
    desc: "Ancien élève de l’École normale supérieure et professeur de mathématiques en classes préparatoires au lycée Carnot à Paris, Grégory Rapuch enseigne également en filière ECG chez MyPrepa, où il accompagne les étudiants dans leur préparation aux concours des grandes écoles de commerce.",
    id: 3,
  },
];

const tags = [
  { name: "Directeur", id: 1 },
  { name: "Fondateur", id: 2 },
  { name: "Professeur", id: 3 },
  { name: "Professeure", id: 4 },
];

function Entete({ idProf, idTags }) {
  const prof = profs.find((p) => p.id === idProf);
  const profTags = idTags.map((id) => {
    return tags.find((t) => t.id === id);
  });
  return (
    <>
      <div className="prof">
        <img
          src={prof.img}
          alt={"Photo de " + prof.name + " " + prof.surname}
        />
        <div className="name">
          <div className="tags">
            {profTags.map((tag) => (
              <p className="tag">{tag.name}</p>
            ))}
          </div>
          <h2>
            {prof.name} {prof.surname}
          </h2>
        </div>
      </div>
    </>
  );
}

function Contenu({ idProf }) {
  const prof = profs.find((p) => p.id === idProf);
  return (
    <>
      <p>{prof.desc}</p>
      <a className="btn-bio" href="#" type="button">
        Voir la biographie
      </a>
    </>
  );
}

export default function CarteProf({ prof, tag }) {
  return (
    <>
      <div className="carte_prof">
        <Entete idProf={prof} idTags={tag} />
        <Contenu idProf={prof} />
      </div>
    </>
  );
}
