import type { NextPage } from "next";
import TeamComponents from "./team-components";
import styles from "./frame-component1.module.css";

const FrameComponent1: NextPage = () => {
  return (
    <div className={styles.teamComponentsWrapper}>
      <TeamComponents />
    </div>
  );
};

export default FrameComponent1;
