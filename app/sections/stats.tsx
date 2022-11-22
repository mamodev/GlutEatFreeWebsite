import Content from "../../components/core/Tipograpy/Content";
import Subtitle from "../../components/core/Tipograpy/Subtitle";
import Title from "../../components/core/Tipograpy/Title";
import Flex from "../../components/layout/Flex/Flex";
import Stack from "../../components/layout/Stack/Stack";
import styles from "./stats.module.scss";

export default function HomeStatsSection() {
  return (
    <Stack align="center">
      <Flex spacing={20} className={styles.section_container}>
        <div className={styles.pie_one} />
        <Stack spacing={20}>
          <Flex align="end" spacing={10}>
            <Title style={{ lineHeight: 1 }}>78,3%</Title>
            <Subtitle style={{ lineHeight: 1 }}>di celiaci rinunciano a uscire a mangiare</Subtitle>
          </Flex>

          <ul className={styles.list}>
            <li>
              <Content>
                Perchè il resto del gruppo ha scelto un ristorante che non prevedeva opzioni senza
                glutine;
              </Content>
            </li>
            <li>
              <Content>
                Perchè i ristoranti non garantivano l&apos;assenza di contaminazioni;
              </Content>
            </li>
            <li>
              <Content>Per paura di stare male o creare disagio (a se stessi e ad altri);</Content>
            </li>
          </ul>
        </Stack>
      </Flex>
      <Flex spacing={20} className={styles.section_container}>
        <Stack spacing={20}>
          <Flex align="end" spacing={10}>
            <Title style={{ lineHeight: 1 }}>98,8%</Title>
            <Subtitle style={{ lineHeight: 1 }}>
              di celiaci ha difficoltà a trovare dei ristoranti che offrano opzioni senza glutine
            </Subtitle>
          </Flex>

          <Content>
            Soprattutto nelle occasioni di maggiore socialità, come uscite di gruppo (con amici,
            colleghi, compagni di scuola...) o feste.
          </Content>
        </Stack>
        <div className={styles.pie_two} />
      </Flex>
    </Stack>
  );
}
