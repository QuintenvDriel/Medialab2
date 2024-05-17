import type { NextPage } from "next";
import Main from "../components/main";
import TeamMemberNames from "../components/team-member-names";
import styles from "./index.module.css";

const OnePager: NextPage = () => {
  return (
    <div className={styles.onePager}>
      <div className={styles.emptyArray}>
        <div className={styles.mainParent}>
          <Main />
          <TeamMemberNames />
        </div>
        <div className={styles.finalConcept}>
          <h2 className={styles.onzeConcepten}>Onze Concepten</h2>
        </div>
      </div>
      <div className={styles.definitiefConceptWrapper}>
        <h2 className={styles.definitiefConcept}>Definitief Concept</h2>
      </div>
      <main className={styles.conceptImages}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <div className={styles.picturesParent}>
          <section className={styles.pictures} data-scroll-to="pictures2" />
          <b className={styles.deOpdrachtVanuitContainer}>
            <p className={styles.deOpdracht}>De opdracht:</p>
            <p className={styles.vanuitHetErasmus}>
              Vanuit het Erasmus UMC hebben wij de vraag gekregen om te kijken
              naar het verbeteren van het vochtbalansbeheer voor patiënten op de
              afdeling cardiologie. Het doel is om innovatieve technische
              oplossingen te bedenken die het bijhouden van de vochtbalans
              eenvoudiger en nauwkeuriger maken. Het huidige proces is
              tijdrovend en foutgevoelig, wat kan leiden tot risico’s voor de
              patiëntenzorg. Door dit proces te automatiseren en te
              optimaliseren, willen we de nauwkeurigheid verhogen en de kans op
              menselijke fouten verminderen. Deze opdracht biedt ons de
              mogelijkheid om technologie te integreren in de medische praktijk,
              waardoor de zorgkwaliteit en efficiëntie binnen de afdeling
              cardiologie aanzienlijk verbeterd kunnen worden.
            </p>
          </b>
        </div>
        <section className={styles.pictures1} />
        <section className={styles.pictures2} data-scroll-to="pictures1" />
        <section className={styles.pictures3} />
        <div className={styles.pictures4} />
        <div className={styles.pictures5} data-scroll-to="pictures" />
        <div className={styles.pictures6} />
      </main>
      <div className={styles.finalConceptContent}>
        <h1 className={styles.description}>?</h1>
        <div className={styles.finalConceptPicture} />
      </div>
    </div>
  );
};

export default OnePager;
