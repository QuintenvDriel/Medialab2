import type { NextPage } from "next";
import ComponentDescription from "./component-description";
import styles from "./component.module.css";

const Component: NextPage = () => {
  return (
    <div className={styles.component}>
      <ComponentDescription />
    </div>
  );
};

export default Component;
