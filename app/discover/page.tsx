import Image from "next/image";
import Content from "../../components/core/Tipograpy/Content";
import LargeTitle from "../../components/core/Tipograpy/LargeTitle";
import SmallContent from "../../components/core/Tipograpy/SmallContent";
import Subtitle from "../../components/core/Tipograpy/Subtitle";
import Title from "../../components/core/Tipograpy/Title";
// import Flex from "../../components/layout/Flex/Flex";
import Stack from "../../components/layout/Stack/Stack";
import NewsLetter from "../../components/modules/NewsLetter/news-letter";
// import NewsLetter from "../../components/modules/NewsLetter/news-letter";
import descriptionImage from "../../public/assets/images/discover/description.png";
import symptomsImage from "../../public/assets/images/discover/symptoms.png";
import treatmentImage from "../../public/assets/images/discover/treatment.png";
import styles from "./page.module.scss";

export default function DiscoverPage() {
  return (
    <div className={styles.page_container}>
      <Header />
      <div className={styles.info_container}>
        <Description />
        <Symptoms />
        <Treatment />
      </div>
      <Discover />
      <NewsLetter />
    </div>
  );
}

function Discover() {
  return (
    <div className={styles.discover_container}>
      <Title className={styles.title}>VUOI SAPERNE DI PIÙ?</Title>
      <Subtitle className={styles.subtitle}>
        Ecco alcuni siti utili per conoscere al meglio la celiachia e il mondo
        del senza glutine:
      </Subtitle>
      <div className={styles.discover_grid}>
        <ul>
          <li>
            <a>Associazione Italiana Celiachia:</a>
            <ul>
              <li>
                <a>La diagnosi </a>
              </li>
            </ul>
            <ul>
              <li>
                <a>La terapia </a>
              </li>
            </ul>
            <ul>
              <li>
                <a>
                  Dove di trova il glutine? L&apos;ABC della dieta del celiaco{" "}
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a>Alimentazione fuori casa </a>
              </li>
            </ul>
          </li>
        </ul>

        <ul>
          <a>Altro:</a>
          <ul>
            <li>
              <a>Istituto Superiore di Sanità</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Ministero della Salute </a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

function Header() {
  return (
    <Stack
      align="center"
      justify="center"
      spacing={20}
      style={{ height: "200px" }}
    >
      <LargeTitle>La celiachia</LargeTitle>
      <Subtitle>FACCIAMO CHIAREZZA</Subtitle>
    </Stack>
  );
}

function Description() {
  return (
    <div className={styles.container}>
      <Image
        alt="description"
        src={descriptionImage}
        className={styles.image}
      />
      <Stack spacing={30} className={styles.content_container}>
        <Title className={styles.title}>COS&apos;È?</Title>
        <SmallContent>
          La celiachia è un&apos;enteropatia auto-infiammatoria permanente, con
          tratti di auto-immunità, scatenata dall&apos;ingestione di glutine in
          soggetti geneticamente predisposti. In altre parole, si tratta di
          un&apos;infiammazione cronica dell&apos;intestino dovuta al fatto che
          nei soggetti celiaci il glutine attiva il sistema immunitario che
          attacca la mucosa intestinale provocandone il danneggiamento e
          causando l&apos;appiattimento dei villi, le strutture responsabili
          dell&apos;assorbimento di nutrienti e minerali. Si determinano così i
          disturbi della malattia celiaca.
        </SmallContent>

        <SmallContent>
          La celiachia è una malattia multifattoriale. Perché la celiachia si
          sviluppi sono necessari almeno due fattori: l&apos;ingestione di
          glutine e la predisposizione genetica. Tuttavia, solo il 3% dei
          soggetti predisposti geneticamente che consumano glutine sviluppa
          questa malattia nel corso della vita. Ad oggi, non sono ancora noti i
          fattori scatenanti che portano al manifestarsi della celiachia.
        </SmallContent>
      </Stack>
    </div>
  );
}
function Symptoms() {
  return (
    <div className={styles.container}>
      <Stack spacing={30} className={styles.content_container}>
        <Title className={styles.title}>I SINTOMI</Title>
        <SmallContent>
          I sintomi con cui la celiachia si manifesta sono estremamente
          variabili. Solitamente nei bambini sono più frequenti sintomi
          intestinali, come diarrea e dolori addominali, e rallentamento della
          crescita. Invece in età adulta la celiachia si manifesta spesso con
          sintomi e complicanze extraintestinali, come anemia, stanchezza,
          alopecia, perdita di peso, infertilità e osteoporosi. La celiachia può
          anche svilupparsi in forma silente, ovvero in totale assenza di
          sintomi.
        </SmallContent>

        <SmallContent>
          Ciò che è importante tenere a mente è che a prescindere dalla presenza
          e dalla gravità dei sintomi, i danni provocati dalla malattia
          celiachia sono gli stessi in tutti i soggetti. Se non curata
          adeguatamente, la celiachia può portare allo sviluppo di altre
          malattie e complicanze, dal diabete mellito al cancro intestinale.
        </SmallContent>
      </Stack>
      <Image alt="symptoms" src={symptomsImage} className={styles.image} />
    </div>
  );
}

function Treatment() {
  return (
    <div className={styles.container}>
      <Image alt="Treatment" src={treatmentImage} className={styles.image} />

      <Stack spacing={30} className={styles.content_container}>
        <Title className={styles.title}>SI PUÒ CURARE?</Title>
        <SmallContent>
          Ad oggi, l&apos;unica terapia riconosciuta per la celiachia è una
          rigorosa dieta senza glutine da seguire per tutta la vita.
        </SmallContent>

        <SmallContent>
          Seguire una dieta senza glutine vuol dire non solo eliminare dalla
          propria alimentazione tutti i cibi a base di cereali contenenti
          glutine, ma anche fare attenzione alle contaminazioni da glutine.
        </SmallContent>
        <SmallContent>
          Per i celiaci è quindi necessario sapere quali sono le tipologie di
          alimento che potrebbero contenere glutine per cui bisogna verificare
          l&apos;etichetta, prestare attenzione alla preparazione degli alimenti
          in cucina e alla scelta dei locali dove mangiare fuori casa.
        </SmallContent>
      </Stack>
    </div>
  );
}
