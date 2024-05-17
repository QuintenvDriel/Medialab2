import type { NextPage } from "next";
import TeamComponents from "./team-components";
import styles from "./empty-array.module.css";

const EmptyArray: NextPage = () => {
  return (
    <div className={styles.emptyArray}>
      <TeamComponents />
    </div>
  );
};

export default EmptyArray;
