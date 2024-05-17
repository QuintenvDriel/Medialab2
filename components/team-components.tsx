import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./team-components.module.css";

const TeamComponents: NextPage = () => {
  const onRectangleClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='teamMemberNames']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='pictures2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='pictures1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangle5Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='pictures']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.teamComponents}>
      <div className={styles.button1}>
        <div className={styles.button1Child} onClick={onRectangleClick} />
        <b className={styles.introductie}>Introductie</b>
      </div>
      <div className={styles.teamButton}>
        <div className={styles.button2}>
          <div className={styles.button2Child} onClick={onRectangle2Click} />
        </div>
        <b className={styles.onsTeam}>Ons team</b>
      </div>
      <div className={styles.button3}>
        <div className={styles.button3Child} onClick={onRectangle3Click} />
        <b className={styles.deOpdracht}>De opdracht</b>
      </div>
      <div className={styles.button4}>
        <div className={styles.button4Child} onClick={onRectangle4Click} />
        <b className={styles.onzeConcepten}>Onze concepten</b>
      </div>
      <div className={styles.button5}>
        <div className={styles.button5Child} onClick={onRectangle5Click} />
        <b className={styles.definitiefConcept}>Definitief concept</b>
      </div>
    </div>
  );
};

export default TeamComponents;
