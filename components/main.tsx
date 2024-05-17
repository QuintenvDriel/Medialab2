import type { NextPage } from "next";
import styles from "./main.module.css";

const Main: NextPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.onzeConceptenWrapper}>
        <h2 className={styles.onzeConcepten}>Onze Concepten</h2>
      </div>
      <div className={styles.concept1Parent}>
        <div className={styles.concept1}>
          <section className={styles.pictures} data-scroll-to="pictures1" />
          <div className={styles.aiBuddyErikaContainer}>
            <p className={styles.aiBuddy}>
              <b className={styles.aiBuddy1}>
                <span className={styles.aiBuddy2}>AI buddy</span>
              </b>
            </p>
            <p className={styles.blankLine}>
              <b className={styles.blankLine1}>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className={styles.erika}>
              <b className={styles.erika1}>
                <span>Erika</span>
              </b>
            </p>
            <p className={styles.hetConceptVanDeAiGeperson}>
              <span className={styles.hetConceptVanDeAiGeperson1}>
                <span>{`Het concept van de AI-gepersonaliseerde tabletvriend is ontwikkeld met als doel patiënten te ondersteunen bij het nauwkeurig bijhouden van hun vochtbalans en voedingsinname, terwijl het tegelijkertijd zorgt voor een empathische en betrokken benadering van zorg. Met een vriendelijke interface begeleidt de AI-vriend de patiënt door middel van herinneringen, die zijn afgestemd op hun individuele behoeften, variërend van medicatie-inname tot het registreren van vochtinname en -uitvoer. `}</span>
              </span>
            </p>
            <p className={styles.blankLine2}>
              <span className={styles.blankLine3}>
                <span className={styles.blankLine4}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.praktisch}>
              <span className={styles.praktisch1}>
                <b>Praktisch</b>
              </span>
            </p>
            <p className={styles.eenDigitaalOverzichtVanVoe}>
              <span className={styles.eenDigitaalOverzichtVanVoe1}>
                <span>
                  Een digitaal overzicht van voeding en vochtinname wordt
                  eenvoudig gemaakt door de integratie van een database van
                  voedingsmiddelen, waardoor patiënten gemakkelijk kunnen
                  selecteren wat ze hebben gegeten en gedronken. Directe input
                  bij herinneringen stelt patiënten in staat om onmiddellijk
                  gegevens toe te voegen over hun consumptie en toiletbezoeken,
                  waardoor het bijhouden van gegevens eenvoudiger en directer
                  wordt.
                </span>
              </span>
            </p>
            <p className={styles.blankLine5}>
              <span className={styles.blankLine6}>
                <span className={styles.blankLine7}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.analyserend}>
              <span className={styles.analyserend1}>
                <b>Analyserend</b>
              </span>
            </p>
            <p className={styles.automatischeWaarschuwingenWo}>
              <span className={styles.automatischeWaarschuwingenWo1}>
                <span>{`Automatische waarschuwingen worden geactiveerd wanneer een patiënt gedurende langere tijd geen gegevens invoert, waardoor zorgverleners snel op de hoogte worden gebracht van eventuele problemen of veranderingen in de gezondheidstoestand van de patiënt. Het systeem verzamelt gegevens en visualiseert trends, waardoor zowel patiënten als zorgverleners inzicht krijgen in de vochtbalans en voedingsstatus van de patiënt. `}</span>
              </span>
            </p>
            <p className={styles.blankLine8}>
              <span className={styles.blankLine9}>
                <span className={styles.blankLine10}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.empatisch}>
              <span className={styles.empatisch1}>
                <b>Empatisch</b>
              </span>
            </p>
            <p className={styles.bovendienBiedtDe}>
              Bovendien biedt de AI-vriend empathische feedback en suggesties
              voor het verbeteren van de vochtbalans en het dieet van de
              patiënt, terwijl het ook persoonlijke interactie mogelijk maakt
              door te reageren op specifieke situaties of vragen van de patiënt.
              Met zijn vriendelijke en benaderbare aanpak bevordert dit concept
              niet alleen nauwkeurige gezondheidsmonitoring, maar creëert het
              ook een ondersteunende en betrokken ervaring voor patiënten
              tijdens hun zorgtraject.
            </p>
          </div>
          <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        </div>
        <div className={styles.concept2}>
          <section className={styles.concept2Child} />
          <div className={styles.urinaidHerbruikbareBedpanContainer}>
            <p className={styles.urinaid}>
              <b>
                <span>Urinaid</span>
              </b>
            </p>
            <p className={styles.blankLine11}>
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className={styles.herbruikbareBedpanMetGente}>
              <b>
                <span>Herbruikbare bedpan met geïntegreerde weegfunctie.</span>
              </b>
            </p>
            <p className={styles.urinaidIsEen}>
              Urinaid is een geavanceerde urinebak die je in het toilet legt.
              Het is ontworpen om de vochtbalans van patiënten op de
              cardiologieafdeling naukeuriger te monitoren. De urinebak is
              uitgerust met sensoren of een weegschaal die het gewicht van de
              urine kunnen meten. Hierdoor weten we hoeveel milliliter een
              patiënt heeft uitgeplast. Deze gegevens worden draadloos
              doorgestuurd naar een monitorsysteem dat toegankelijk is voor het
              medisch personeel.
            </p>
            <p className={styles.blankLine12}>&nbsp;</p>
            <p className={styles.kenmerken}>
              <b>Kenmerken:</b>
            </p>
            <ol className={styles.gentegreerdeGewichtssensoren}>
              <li className={styles.gentegreerdeGewichtssensoren1}>
                <span>
                  Geïntegreerde gewichtssensoren: Urinaid is uitgerust met
                  geavanceerde sensoren die het gewicht van de urine meten
                  telkens wanneer de patiënt plast. Deze sensoren zorgen voor
                  nauwkeurige metingen van de urineproductie.
                </span>
              </li>
              <li className={styles.draadlozeGegevensoverdracht}>
                <span>
                  Draadloze gegevensoverdracht: De verzamelde gegevens over de
                  urineproductie worden draadloos verzonden naar een centraal
                  monitorsysteem, waardoor het medisch personeel real-time
                  toegang heeft tot de informatie.
                </span>
              </li>
              <li className={styles.gebruiksvriendelijkOntwerpH}>
                <span>
                  Gebruiksvriendelijk ontwerp: Het ontwerp van Urinaid is
                  intuïtief en gebruiksvriendelijk, zodat zowel patiënten als
                  zorgverleners het gemakkelijk kunnen gebruiken.
                </span>
              </li>
              <li className={styles.veiligheidEnHygineUrinaid}>
                <span>
                  Veiligheid en hygiëne: Urinaid is ontworpen met aandacht voor
                  veiligheid en hygiëne, met gemakkelijk schoon te maken
                  materialen en beschermende maatregelen om kruisbesmetting te
                  voorkomen.
                </span>
              </li>
              <li className={styles.modulairEnSchaalbaarUrinai}>
                <span>
                  Modulair en schaalbaar: Urinaid is ontworpen als een modulair
                  systeem dat kan worden aangepast aan de specifieke behoeften
                  van verschillende cardiologieafdelingen en kan worden
                  uitgebreid naarmate de behoefte groeit.
                </span>
              </li>
            </ol>
          </div>
          <div className={styles.conceptOneImage}>
            <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          </div>
        </div>
        <div className={styles.concept3}>
          <section className={styles.concept3Child} />
          <div className={styles.text}>
            <p className={styles.bestelAppAddOn}>
              <b>Bestel app add-on</b>
            </p>
            <p className={styles.blankLine13}>&nbsp;</p>
            <p className={styles.eenAppDie}>
              Een app die zorgt dat het eten en drinken automatisch ingevuld
              word en waarbij er ook aangegeven kan worden als er iets niet is
              opgegeten of juist extra is gegeten
            </p>
            <p className={styles.blankLine14}>&nbsp;</p>
            <p className={styles.eenToevoegingOp}>
              Een toevoeging op de bestaande omgeving, waarbij maaltijden
              automatisch bruikbaar worden voor het bijhouden van de
              vochtbalans.
            </p>
            <p className={styles.blankLine15}>&nbsp;</p>
            <p className={styles.kenmerken1}>
              <b>Kenmerken:</b>
            </p>
            <ol className={styles.geautomatiseerdeGegevensregis}>
              <li className={styles.geautomatiseerdeGegevensregis1}>
                <span className={styles.geautomatiseerdeGegevensregis2}>
                  Geautomatiseerde gegevensregistratie: Wanneer patiënten
                  maaltijden bestellen via de iPad, worden de details van de
                  maaltijden automatisch vastgelegd in de app. Dit omvat
                  informatie zoals het soort voedsel, de hoeveelheid en
                  eventuele toevoegingen of wijzigingen die de patiënt heeft
                  aangebracht.
                </span>
              </li>
              <li className={styles.directeVochtbalansberekening}>
                <span className={styles.directeVochtbalansberekening1}>
                  Directe vochtbalansberekening: Gebaseerd op de ingevoerde
                  maaltijden worden de vochtinnamegegevens berekend en
                  toegevoegd aan de totale vochtinname van de patiënt. Dit biedt
                  direct inzicht in de vochtbalans en helpt patiënten en
                  verpleegkundigen om de vochtinname te beheren.
                </span>
              </li>
              <li className={styles.maatwerkoptiesPatintenKunn}>
                <span className={styles.maatwerkoptiesPatintenKunn1}>
                  Maatwerkopties: Patiënten kunnen persoonlijke dieetvoorkeuren
                  of -beperkingen instellen in de app, zodat de berekende
                  vochtinname nauwkeurig rekening houdt met hun individuele
                  behoeften.
                </span>
              </li>
              <li className={styles.visueleWeergaveVanVochtbala}>
                <span className={styles.visueleWeergaveVan}>
                  Visuele weergave van vochtbalans: De app toont een
                  overzichtelijke grafiek of diagram waarin de vochtinname wordt
                  vergeleken met de vochtuitstoot (zoals urineproductie). Dit
                  helpt patiënten en verpleegkundigen om trends in de
                  vochtbalans te identificeren en indien nodig aanpassingen te
                  maken.
                </span>
              </li>
              <li className={styles.realTimeUpdatesWanneerPat}>
                <span className={styles.realTimeUpdatesWanneer}>
                  Real-time updates: Wanneer patiënten hun maaltijden wijzigen
                  of aanpassen, worden de vochtinnamegegevens direct bijgewerkt
                  in de app, zodat de vochtbalans altijd up-to-date is.
                </span>
              </li>
            </ol>
            <p className={styles.blankLine16}>&nbsp;</p>
          </div>
          <div className={styles.conceptTwoImage}>
            <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
