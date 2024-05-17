import type { NextPage } from "next";
import Container from "../components/container";
import TeamMemberNames from "../components/team-member-names";
import Main from "../components/main";
import styles from "./index.module.css";

const OnePager: NextPage = () => {
  return (
    <div className={styles.onePager}>
      <div className={styles.containerParent}>
        <Container />
        <TeamMemberNames />
      </div>
      <Main />
      <main className={styles.imageGallery}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <section className={styles.picturesParent}>
          <section className={styles.pictures} data-scroll-to="pictures2" />
          <div className={styles.deOpdrachtVanuitContainer}>
            <p className={styles.deOpdracht}>
              <b>De opdracht:</b>
            </p>
            <p className={styles.blankLine}>
              <b>&nbsp;</b>
            </p>
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
          </div>
        </section>
        <div className={styles.pictures1} />
        <div className={styles.pictures2} data-scroll-to="pictures" />
        <div className={styles.pictures3} />
      </main>
      <div className={styles.conceptTitleParent}>
        <div className={styles.conceptTitle}>
          <h2 className={styles.definitiefConcept}>Definitief Concept</h2>
        </div>
        <div className={styles.conceptImage}>
          <h1 className={styles.description}>?</h1>
          <div className={styles.finalConceptPicture} />
        </div>
      </div>
    </div>
  );
};

export default OnePager;
