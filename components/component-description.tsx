import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./component-description.module.css";

const ComponentDescription: NextPage = () => {
  const onComponentDetailsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='lowerShape']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onComponentDetails2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='theTeamContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onComponentDetails3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='lowerTeamShape']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onComponentDetails4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onComponentDetails5Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='defConceptsShape']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.componentDescription}>
      <button className={styles.introductieButton}>
        <div
          className={styles.componentDetails}
          onClick={onComponentDetailsClick}
        />
        <b className={styles.introductie}>Introductie</b>
      </button>
      <button className={styles.teamButton}>
        <div
          className={styles.componentDetails1}
          onClick={onComponentDetails2Click}
        />
        <b className={styles.onsTeam}>Ons team</b>
      </button>
      <button className={styles.opdrachtButton}>
        <div
          className={styles.componentDetails2}
          onClick={onComponentDetails3Click}
        />
        <b className={styles.deOpdracht}>De opdracht</b>
      </button>
      <button className={styles.conceptenButton}>
        <div
          className={styles.componentDetails3}
          onClick={onComponentDetails4Click}
        />
        <b className={styles.onzeConcepten}>Onze concepten</b>
      </button>
      <button className={styles.definitiefButton}>
        <div
          className={styles.componentDetails4}
          onClick={onComponentDetails5Click}
        />
        <b className={styles.definitiefConcept}>Definitief concept</b>
      </button>
    </div>
  );
};

export default ComponentDescription;
