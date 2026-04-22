import Matiere from "./Matiere";
import CarteProf from "./CarteProf";
import "../styles.css";

export default function ProfContainer() {
  return (
    <>
      <section className="main">
        <Matiere idMatiere={1} />
        <div className="profs">
          <CarteProf prof={1} tag={[1, 2]} />
          <CarteProf prof={2} tag={[3]} />
          <CarteProf prof={3} tag={[3]} />
        </div>
        <Matiere idMatiere={2} />
        <Matiere idMatiere={3} />
      </section>
    </>
  );
}
