import type { NextPage } from "next";
import TeamComponents from "./team-components";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.emptyArrayWrapper}>
      <div className={styles.emptyArray}>
        <div className={styles.teamBalansWrapper}>
          <h1 className={styles.teamBalans}>Team Balans</h1>
        </div>
        <TeamComponents />
      </div>
    </div>
  );
};

export default FrameComponent;
