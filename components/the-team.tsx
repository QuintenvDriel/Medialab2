import type { NextPage } from "next";
import styles from "./the-team.module.css";

const TheTeam: NextPage = () => {
  return (
    <section className={styles.theTeam}>
      <div className={styles.theTeam1} data-scroll-to="theTeamContainer">
        <div className={styles.teamNames} />
        <div className={styles.teamNames1} />
        <div className={styles.teamNames2} />
        <div className={styles.teamNames3} />
        <div className={styles.teamNames4} />
        <div className={styles.teamNames5} />
        <b className={styles.kevin}>Kevin</b>
        <b className={styles.daan}>Daan</b>
        <b className={styles.jorick}>Jorick</b>
        <b className={styles.quinten}>Quinten</b>
        <b className={styles.ranagul}>Ranagul</b>
        <b className={styles.charlize}>Charlize</b>
      </div>
    </section>
  );
};

export default TheTeam;
