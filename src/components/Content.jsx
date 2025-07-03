import styles from "./Content.module.scss";
function Content() {
  return (
    <div className="container flex-fill p-20">
      <h1 className="my-30"> Découvrez nos nouvelles recettes</h1>
      <div className={`${styles.contentCard} card p-20`}>
        <div className={styles.grid}>
          <div className={styles.elem}>ELEMENTS</div>
          <div className={styles.elem}>ELEMENTS</div>
          <div className={styles.elem}>ELEMENTS</div>
          <div className={styles.elem}>ELEMENTS</div>
          <div className={styles.elem}>ELEMENTS</div>
          <div className={styles.elem}>ELEMENTS</div>
          <div className={styles.elem}>ELEMENTS</div>
          <div className={styles.elem}>ELEMENTS</div>
          <div className={styles.elem}>ELEMENTS</div>
          <div className={styles.elem}>ELEMENTS</div>
          <div className={styles.elem}>ELEMENTS</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
