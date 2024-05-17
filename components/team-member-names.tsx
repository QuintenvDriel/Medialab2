import type { NextPage } from "next";
import styles from "./team-member-names.module.css";

const TeamMemberNames: NextPage = () => {
  return (
    <div className={styles.teamMemberNames} data-scroll-to="teamMemberNames">
      <div className={styles.kevin}>
        <div className={styles.kevinChild} />
        <div className={styles.kevinWrapper}>
          <b className={styles.kevin1}>Kevin</b>
        </div>
        <div className={styles.heyIkBenContainer}>
          <p className={styles.heyIkBen}>
            Hey, ik ben Kevin. Een student aan de Hogeschool Rotterdam, ik heb
            zelf altijd al een passie gehad voor het ontwerpen en developen van
            creatieve oplossingen voor problemen, klein of groot!
          </p>
          <p
            className={styles.ditHeeftMij}
          >{` Dit heeft mij geleden naar de studie Creative Media and Game Technologies, waarin wij alles leren om een creatieve technoloog te worden. `}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.inDitTeam}>
            In dit team is het aan mij de taak om onze creatieve ideeën tot
            leven te brengen. En een zo goed mogelijk concept op te leveren voor
            onze opdrachtgever, het Erasmus MC! Ik kijk er naar uit wat wij als
            team kunnen doen om het leven van de patiënten en artsen toch een
            stukje te verbeteren!
          </p>
        </div>
      </div>
      <div className={styles.daan}>
        <div className={styles.daanChild} />
        <div className={styles.daanWrapper}>
          <b className={styles.daan1}>Daan</b>
        </div>
        <div className={styles.hiIkBenContainer}>
          <p className={styles.hiIkBen}>
            Hi, ik ben Daan. Student aan de Hogeschool Rotterdam, waar ik
            Communication and Multimedia Design (CMD) studeer. Naast mijn studie
            ben ik ook actief in de praktijk, waar ik mijn passie voor UX design
            combineer met marketing.
          </p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.mijnDoelIs}>
            Mijn doel is om innovatieve en effectieve oplossingen te creëren
            door middel van onderzoek, ideeën vormen en het ontwikkelen van
            concepten.
          </p>
          <p className={styles.blankLine2}>&nbsp;</p>
          <p className={styles.ikVindHet}>
            Ik vind het leuk om samen te werken en mijn creatieve vaardigheden
            in te zetten om een probleem in de zorg op te lossen.
          </p>
        </div>
      </div>
      <div className={styles.jorick}>
        <div className={styles.jorickChild} />
        <b className={styles.jorick1}>Jorick</b>
      </div>
      <div className={styles.quinten}>
        <div className={styles.quintenChild} />
        <div className={styles.quintenWrapper}>
          <b className={styles.quinten1}>Quinten</b>
        </div>
        <div className={styles.heyIkBenContainer1}>
          <p className={styles.heyIkBen1}>
            Hey, ik ben Quinten, een student aan de Hogeschool Rotterdam, waar
            ik de opleiding Creative Media and Game Technologies (CMGT) volg.
            Mijn passie? Het bedenken van nieuwe en interactieve technologische
            oplossingen die problemen oplossen en mensen inspireren.
          </p>
          <p className={styles.blankLine3}>&nbsp;</p>
          <p className={styles.inOnsTeam}>
            In ons team ben ik degene die zich vooral richt op de technische
            kant van onze projecten. Mijn rol? Het omzetten van onze ideeën in
            werkende realiteit. Ik geniet ervan om uitdagingen aan te gaan en
            mijn technische vaardigheden te gebruiken om innovatieve oplossingen
            te ontwikkelen.
          </p>
        </div>
      </div>
      <div className={styles.ranagulPicture} />
      <b className={styles.ranagul}>Ranagul</b>
      <div className={styles.hihiIkBenContainer}>
        <p className={styles.hihiIkBen}>
          Hihi, ik ben Ranagül, een creatieve denker die verbeelding en
          technische vaardigheden combineert om visuele ontwerpen te creëren.
          Als student Communication and Multimedia Design breng ik mijn passie
          en vaardigheden samen om ideeën tot leven te brengen.
        </p>
        <p className={styles.blankLine4}>&nbsp;</p>
        <p className={styles.mijnDoelIn}>
          Mijn doel in dit project is om te ontdekken hoe ik innovatieve
          oplossingen kan bedenken die echt van betekenis kunnen zijn voor de
          maatschappij en de werkwijze binnen Erasmus. Ik wil me vooral
          concentreren op het genereren en uitwerken van ideeën. Ik ben klaar
          voor deze uitdaging en kijk ernaar uit om zoveel mogelijk te leren.
        </p>
      </div>
      <div className={styles.teamMembers} />
      <b className={styles.charlize}>Charlize</b>
      <div className={styles.hiIkBenContainer1}>
        <p className={styles.hiIkBen1}>
          Hi, ik ben Charlize. Student aan de Hogeschool Rotterdam waar ik de
          opleiding Communication and Multi Media Design met veel plezier volg.
          Naast mijn studie ligt mijn passie ook erg bij grafisch ontwerpen en
          ik ben sinds kort begonnen met het toepassen van mijn vaardigheden in
          de praktijk.
        </p>
        <p className={styles.blankLine5}>&nbsp;</p>
        <p className={styles.ikVindHet1}>
          Ik vind het belangrijk dat mijn ontwerpen gericht zijn op de wensen
          van de gebruiker. Op deze manier zorg ik dat mijn ontwerpen zo
          inclusief mogelijk zijn. Ook sta ik altijd open om uitdagingen aan te
          gaan waar ik wat nieuws van kan leren.
        </p>
        <p className={styles.blankLine6}>&nbsp;</p>
        <p className={styles.ikKijkUit}>
          Ik kijk uit naar de samenwerking binnen dit interdisciplinaire team.
        </p>
      </div>
    </div>
  );
};

export default TeamMemberNames;
