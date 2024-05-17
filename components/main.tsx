import type { NextPage } from "next";
import TeamComponents from "./team-components";
import styles from "./main.module.css";

const Main: NextPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainInner}>
        <div className={styles.frameParent}>
          <div className={styles.teamBalansWrapper}>
            <h1 className={styles.teamBalans}>Team Balans</h1>
          </div>
          <TeamComponents />
        </div>
      </div>
      <div className={styles.introductie}>
        <div className={styles.wrapperRectangle8}>
          <img
            className={styles.wrapperRectangle8Child}
            alt=""
            src="/rectangle-8.svg"
            data-scroll-to="rectangle"
          />
        </div>
        <b className={styles.introductieTeamBalansContainer}>
          <p className={styles.introductie1}>Introductie:</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.teamBalansIs}>
            Team Balans is een toegewijd team van zes studenten van de
            Hogeschool Rotterdam, afkomstig van de opleidingen Communicatie en
            Multimedia Design (CMD) en Creative Media and Game Technologies
            (CMGT). Ons primaire doel is het verbeteren van het
            vochtbalansbeheer voor patiënten op de afdeling cardiologie. Door
            innovatieve technische oplossingen te bedenken, streven wij ernaar
            om het bijhouden van de vochtbalans eenvoudiger en nauwkeuriger te
            maken, waardoor de kans op fouten aanzienlijk vermindert. Met een
            sterke focus op creativiteit en precisie werken wij samen om
            baanbrekende technologieën te ontwikkelen die een positieve impact
            hebben op de zorgsector.
          </p>
        </b>
      </div>
    </div>
  );
};

export default Main;
