import Content from "../../components/core/Tipograpy/Content";
import Subtitle from "../../components/core/Tipograpy/Subtitle";
import styles from "./stats.module.scss";

export default function HomeStatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.section_container}>
        <div className={styles.pie_one} />
        <div className={styles.text}>
          <Subtitle className={styles.text_title}>
            <span className={styles.percentage}>78,3%</span> di celiaci rinuncia
            uscire a mangiare
          </Subtitle>

          <ul className={styles.list}>
            <li>
              <Content>
                Perchè il resto del gruppo ha scelto un ristorante che non
                prevedeva opzioni senza glutine;
              </Content>
            </li>
            <li>
              <Content>
                Perchè i ristoranti non garantivano l&apos;assenza di
                contaminazioni;
              </Content>
            </li>
            <li>
              <Content>
                Per paura di stare male o creare disagio (a se stessi e ad
                altri);
              </Content>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.section_container}>
        <div className={styles.text}>
          <Subtitle className={styles.text_title}>
            <span className={styles.percentage}>98,8%</span> di celiaci ha
            difficoltà a trovare dei ristoranti che offrano opzioni senza
            glutine
          </Subtitle>

          <Content>
            Soprattutto nelle occasioni di maggiore socialità, come uscite di
            gruppo (con amici, colleghi, compagni di scuola...) o feste.
          </Content>
        </div>
        <div className={styles.pie_two} />
      </div>
    </section>
  );
}
