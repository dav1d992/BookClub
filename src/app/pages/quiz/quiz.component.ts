import { Component, computed, signal, type OnDestroy } from '@angular/core';

interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  fact?: string;
}

type Difficulty = 'let' | 'middel' | 'svaer';

interface RoundMeta {
  id: string;
  label: string;
  emoji: string;
  description: string;
}

interface DifficultyMeta extends RoundMeta {
  id: Difficulty;
}

interface LessonMeta extends RoundMeta {
  questions: QuizQuestion[];
}

interface QuizTopic {
  id: string;
  title: string;
  emoji: string;
  description: string;
  /** How a round is chosen for this topic. Defaults to 'difficulty'. */
  mode: 'difficulty' | 'lesson';
  /** Present when mode === 'difficulty'. */
  pools?: Record<Difficulty, QuizQuestion[]>;
  /** Present when mode === 'lesson'. */
  lessons?: LessonMeta[];
}

interface Rank {
  title: string;
  emoji: string;
  minAccuracy: number;
}

type GameState = 'start' | 'difficulty' | 'lesson' | 'playing' | 'result';

const QUESTIONS_PER_ROUND = 20;
const TIME_PER_QUESTION = 60; // 60 sekunder pr. spørgsmål
const BASE_POINTS = 100;
const MAX_LIVES = 3;

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnDestroy {
  public readonly difficulties: DifficultyMeta[] = [
    {
      id: 'let',
      label: 'Let',
      emoji: '🌱',
      description: 'Grundlæggende fakta om Imamerne (as) og de store begivenheder.',
    },
    {
      id: 'middel',
      label: 'Middel',
      emoji: '⚔️',
      description: 'Årstal, navne og begreber for den erfarne læser.',
    },
    {
      id: 'svaer',
      label: 'Svær',
      emoji: '🔥',
      description: 'Præcise datoer og detaljer for den sande kender.',
    },
  ];

  public readonly topics: QuizTopic[] = [
    {
      id: 'kitab-al-irshad',
      title: 'Kitab al-Irshad',
      emoji: '📖',
      description:
        "Test din viden om Imamernes (as) liv og de nøglebegivenheder fra Kitab al-Irshad (Sheikh al-Mufid), som også ligger til grund for tidslinjen.",
      mode: 'difficulty',
      pools: {
        let: [
          {
            question: 'Hvor blev Imam Ali (as) født?',
            options: ['Inde i Kabaen i Mekka', 'I Medina', 'I Kufa', 'I Najaf'],
            answer: 'Inde i Kabaen i Mekka',
            fact: 'Imam Ali (as) er efter Shia-overleveringen det eneste menneske født inde i Kabaen.',
          },
          {
            question: 'I hvilken by blev Profeten Muhammad (saws) født?',
            options: ['Mekka', 'Medina', 'Kufa', 'Ta’if'],
            answer: 'Mekka',
          },
          {
            question: 'Hvad kaldes den 10. Muharram, hvor Karbala-tragedien skete?',
            options: ['Ashura', 'Ghadir', 'Mabit', 'Furqan'],
            answer: 'Ashura',
          },
          {
            question: 'Hvem var den første kvinde, der antog islam?',
            options: [
              'Khadija al-Kubra (as)',
              'Fatima al-Zahra (as)',
              'Aisha',
              'Fatima bint Asad',
            ],
            answer: 'Khadija al-Kubra (as)',
          },
          {
            question: 'Hvilket dyr gav navn til Jamal-slaget?',
            options: ['Kamel', 'Hest', 'Elefant', 'Løve'],
            answer: 'Kamel',
            fact: '"Jamal" betyder kamel; slaget er opkaldt efter Aishas kamel.',
          },
          {
            question: 'Hvor mange Imamer er der i Shia-Islam?',
            options: ['Tolv', 'Syv', 'Fem', 'Fjorten'],
            answer: 'Tolv',
          },
          {
            question: 'Hvem er den 12. Imam?',
            options: [
              'Muhammad al-Mahdi (as)',
              'Ja’far al-Sadiq (as)',
              'Ali al-Ridha (as)',
              'Hasan al-Askari (as)',
            ],
            answer: 'Muhammad al-Mahdi (as)',
          },
          {
            question: 'Hvor er Imam Husayn (as) begravet?',
            options: ['Karbala', 'Najaf', 'Medina', 'Mashhad'],
            answer: 'Karbala',
          },
          {
            question: 'Hvor er Imam Ali (as) begravet?',
            options: ['Najaf', 'Karbala', 'Kufa', 'Samarra'],
            answer: 'Najaf',
          },
          {
            question: 'Hvilken måned mindes Karbala hvert år?',
            options: ['Muharram', 'Ramadan', 'Rajab', 'Sha’ban'],
            answer: 'Muharram',
          },
          {
            question: 'Hvem var Imam Alis (as) far?',
            options: ['Abu Talib', 'Abd al-Muttalib', 'Abdullah', 'Hamza'],
            answer: 'Abu Talib',
          },
          {
            question: 'Hvem var Profetens (saws) datter og Imam Alis (as) hustru?',
            options: [
              'Fatima al-Zahra (as)',
              'Khadija (as)',
              'Zaynab (as)',
              'Umm Kulthum',
            ],
            answer: 'Fatima al-Zahra (as)',
          },
          {
            question: 'Hvem var Imam Hasan og Imam Husayns (as) far?',
            options: [
              'Imam Ali (as)',
              'Profeten (saws)',
              'Abu Talib',
              'Hamza',
            ],
            answer: 'Imam Ali (as)',
          },
          {
            question: 'Hvilket slag var det første store slag i Islams historie?',
            options: ['Badr', 'Uhud', 'Khandaq', 'Khaybar'],
            answer: 'Badr',
          },
          {
            question: 'Hvor emigrerede Profeten (saws) til under Hijraen?',
            options: ['Medina', 'Ta’if', 'Kufa', 'Najaf'],
            answer: 'Medina',
          },
          {
            question: 'Hvem sov i Profetens seng natten under Hijraen?',
            options: [
              'Imam Ali (as)',
              'Abu Bakr',
              'Salman al-Farisi',
              'Hamza',
            ],
            answer: 'Imam Ali (as)',
          },
          {
            question: 'Hvilken by erobrede muslimerne fredeligt i år 630?',
            options: ['Mekka', 'Medina', 'Khaybar', 'Ta’if'],
            answer: 'Mekka',
          },
          {
            question: 'Hvilken engel bragte den første åbenbaring?',
            options: ['Jibril (Gabriel)', 'Mikail', 'Israfil', 'Izrail'],
            answer: 'Jibril (Gabriel)',
          },
          {
            question: 'Hvor modtog Profeten (saws) den første åbenbaring?',
            options: ['Hulen Hira', 'Kabaen', 'Moskeen i Medina', 'Hulen Thawr'],
            answer: 'Hulen Hira',
          },
          {
            question: 'Hvem er kendt som "den Sandfærdige" (al-Sadiq)?',
            options: [
              'Imam Ja’far (as)',
              'Imam Muhammad al-Baqir (as)',
              'Imam Musa al-Kazim (as)',
              'Imam Ali al-Ridha (as)',
            ],
            answer: 'Imam Ja’far (as)',
          },
          {
            question: 'I hvilken by ligger Imam Ali al-Ridhas (as) grav?',
            options: ['Mashhad', 'Najaf', 'Karbala', 'Samarra'],
            answer: 'Mashhad',
          },
          {
            question:
              'Hvad hedder Imam Husayns (as) halvbror, der faldt ved Karbala mens han hentede vand?',
            options: ['Abbas (as)', 'Ali al-Akbar (as)', 'Muslim ibn Aqil', 'Hamza'],
            answer: 'Abbas (as)',
          },
          {
            question:
              'Hvilken gruppe opstod efter Siffin og vendte sig mod Imam Ali (as)?',
            options: ['Khawarij', 'Umayyaderne', 'Abbasiderne', 'Quraysh'],
            answer: 'Khawarij',
          },
          {
            question:
              'Hvem var Profetens (saws) elskede onkel, der faldt som martyr ved Uhud?',
            options: ['Hamza', 'Abu Talib', 'Abbas', 'Ja’far'],
            answer: 'Hamza',
          },
          {
            question:
              'Med hvilket dyr forsøgte Abraha at ødelægge Kabaen det år, Profeten (saws) blev født?',
            options: ['Elefanter', 'Heste', 'Kameler', 'Løver'],
            answer: 'Elefanter',
            fact: 'Profetens fødsel faldt i Am al-Fil (Elefanternes År), da Abraha forgæves angreb Kabaen med en elefanthær.',
          },
          {
            question: 'Hvilket slag er opkaldt efter en grøft?',
            options: ['Khandaq (Gravkrigen)', 'Badr', 'Uhud', 'Hunayn'],
            answer: 'Khandaq (Gravkrigen)',
          },
          {
            question: 'Hvor blev Imam al-Mahdi (as) født?',
            options: ['Samarra', 'Medina', 'Kufa', 'Bagdad'],
            answer: 'Samarra',
          },
          {
            question:
              'Hvem efterfulgte Profeten (saws) ifølge Shia ved Ghadir Khumm?',
            options: ['Imam Ali (as)', 'Abu Bakr', 'Umar', 'Uthman'],
            answer: 'Imam Ali (as)',
          },
          {
            question: 'Hvad hedder Profetens (saws) sidste pilgrimsfærd?',
            options: [
              'Afskedspilgrimsfærden',
              'Den første hajj',
              'Umra al-Qada',
              'Hajj al-Wada al-Thani',
            ],
            answer: 'Afskedspilgrimsfærden',
          },
          {
            question:
              'Hvad erklærede Profeten (saws) ved erobringen af Mekka: "I dag er ... dag"?',
            options: ['nådens', 'hævnens', 'krigens', 'sorgens'],
            answer: 'nådens',
            fact: '"I dag er ikke hævnens dag – i dag er nådens dag."',
          },
          {
            question: 'Hvilket land ligger Najaf og Karbala i?',
            options: ['Irak', 'Iran', 'Saudi-Arabien', 'Syrien'],
            answer: 'Irak',
          },
          {
            question: 'Hvilket land ligger Mashhad i?',
            options: ['Iran', 'Irak', 'Tyrkiet', 'Egypten'],
            answer: 'Iran',
          },
          {
            question: 'Hvem var den første muslim ifølge Shia-Islam?',
            options: ['Imam Ali (as)', 'Abu Bakr', 'Umar', 'Bilal'],
            answer: 'Imam Ali (as)',
          },
          {
            question: 'Hvilken by var centrum for Imam Alis (as) kalifat?',
            options: ['Kufa', 'Medina', 'Damaskus', 'Mekka'],
            answer: 'Kufa',
          },
          {
            question: 'Hvem gik bort først?',
            options: [
              'Profeten (saws)',
              'Fatima al-Zahra (as)',
              'Imam Ali (as)',
              'Imam Hasan (as)',
            ],
            answer: 'Profeten (saws)',
          },
          {
            question: 'Hvad mindes man især under Muharram?',
            options: [
              'Imam Husayns (as) martyrdom',
              'Profetens fødsel',
              'Ghadir Khumm',
              'Hijraen',
            ],
            answer: 'Imam Husayns (as) martyrdom',
          },
          {
            question: 'Hvad hedder Imam Zayn al-Abidins (as) berømte bønnesamling?',
            options: [
              'Sahifa al-Sajjadiyya',
              'Nahj al-Balagha',
              'Sahih al-Bukhari',
              'Al-Kafi',
            ],
            answer: 'Sahifa al-Sajjadiyya',
          },
          {
            question: 'Hvad var Imam Alis (as) rolle ved Hudaybiyyah-traktaten?',
            options: [
              'Han nedskrev aftalen (sekretær)',
              'Han var hærfører',
              'Han var udsending til Quraysh',
              'Han deltog ikke',
            ],
            answer: 'Han nedskrev aftalen (sekretær)',
          },
          {
            question: 'Hvad kaldes den 12. Imams tilstand af skjulthed?',
            options: ['Ghayba (skjulthed)', 'Hijra', 'Isra', 'Mi’raj'],
            answer: 'Ghayba (skjulthed)',
          },
          {
            question: 'Hvem var Profetens (saws) far?',
            options: [
              'Abdullah ibn Abd al-Muttalib',
              'Abu Talib',
              'Abd al-Muttalib',
              'Hamza',
            ],
            answer: 'Abdullah ibn Abd al-Muttalib',
          },
          {
            question:
              'Hvilket vigtigt bygningsværk renser Profeten (saws) ved erobringen af Mekka?',
            options: ['Kabaen', 'Masjid al-Nabawi', 'Al-Aqsa', 'Kufa-moskeen'],
            answer: 'Kabaen',
          },
          {
            question: 'Hvem var Imam Sadiqs (as) far?',
            options: [
              'Imam Muhammad al-Baqir (as)',
              'Imam Zayn al-Abidin (as)',
              'Imam Musa al-Kazim (as)',
              'Imam Ali (as)',
            ],
            answer: 'Imam Muhammad al-Baqir (as)',
          },
          {
            question: 'Hvad betyder tilnavnet "al-Mahdi"?',
            options: [
              'Den retledte / Den Ventede',
              'Den Sandfærdige',
              'Den Gavmilde',
              'Vejviseren',
            ],
            answer: 'Den retledte / Den Ventede',
          },
          {
            question: 'Hvilken stamme tilhørte Profeten (saws)?',
            options: ['Quraysh', 'Aws', 'Khazraj', 'Banu Umayya'],
            answer: 'Quraysh',
          },
          {
            question: 'Hvem var Imam Husayns (as) mor?',
            options: [
              'Fatima al-Zahra (as)',
              'Khadija (as)',
              'Umm Salama',
              'Fatima bint Asad',
            ],
            answer: 'Fatima al-Zahra (as)',
          },
          {
            question: 'Hvem var Imam Hasan (as) storebror til?',
            options: [
              'Imam Husayn (as)',
              'Imam Ali (as)',
              'Abbas (as)',
              'Muslim ibn Aqil',
            ],
            answer: 'Imam Husayn (as)',
          },
          {
            question:
              'Hvilket forsvarsværk gravede muslimerne omkring Medina i Khandaq-krigen?',
            options: ['En grøft', 'En mur', 'Et tårn', 'En voldgrav med vand'],
            answer: 'En grøft',
          },
          {
            question: 'Hvem ledede muslimerne under alle de store slag i Medina?',
            options: [
              'Profeten (saws)',
              'Imam Ali (as)',
              'Abu Bakr',
              'Khalid ibn al-Walid',
            ],
            answer: 'Profeten (saws)',
          },
          {
            question:
              'Hvem mistede Profeten (saws) i ‚Sorgens år’ (Am al-Huzn)?',
            options: [
              'Khadija (as) og Abu Talib',
              'Hamza og Ja’far',
              'Abdullah og Abd al-Muttalib',
              'Fatima og Ali (as)',
            ],
            answer: 'Khadija (as) og Abu Talib',
            fact: 'I Sorgens år (ca. 619) mistede Profeten (saws) både sin hustru Khadija (as) og sin onkel og beskytter Abu Talib.',
          },
          {
            question: 'Hvilken helligdom besøger millioner af Shia-pilgrimme i Mashhad?',
            options: [
              'Imam al-Ridhas (as) grav',
              'Imam Alis (as) grav',
              'Imam Husayns (as) grav',
              'Al-Askariyya',
            ],
            answer: 'Imam al-Ridhas (as) grav',
          },
        ],
        middel: [
          {
            question: 'I hvilket år fandt Hijraen sted?',
            options: ['År 622', 'År 610', 'År 570', 'År 632'],
            answer: 'År 622',
          },
          {
            question: 'I hvilket år fandt Badr-krigen sted?',
            options: ['År 624', 'År 622', 'År 625', 'År 627'],
            answer: 'År 624',
          },
          {
            question: 'I hvilket år (e.Kr.) fandt Karbala-tragedien sted?',
            options: ['År 680', 'År 661', 'År 670', 'År 632'],
            answer: 'År 680',
          },
          {
            question:
              'Hvad kaldes natten, hvor Imam Ali (as) sov i Profetens seng?',
            options: [
              'Laylat al-Mabit',
              'Laylat al-Qadr',
              'Laylat al-Isra',
              'Laylat al-Bara',
            ],
            answer: 'Laylat al-Mabit',
          },
          {
            question:
              'Hvilket Quran-vers blev åbenbaret om Laylat al-Mabit?',
            options: ['2:207', '3:61', '5:55', '33:33'],
            answer: '2:207',
          },
          {
            question: 'Hvad betyder tilnavnet "al-Baqir"?',
            options: [
              'Den der klipper viden åben',
              'Den Sandfærdige',
              'Den der behersker sin vrede',
              'Den Velbehagede',
            ],
            answer: 'Den der klipper viden åben',
          },
          {
            question: 'Hvad betyder tilnavnet "al-Kazim"?',
            options: [
              'Den der behersker sin vrede',
              'Den Sandfærdige',
              'Vejviseren',
              'Den Gavmilde',
            ],
            answer: 'Den der behersker sin vrede',
          },
          {
            question: 'Hvem foreslog at grave en grøft ved Khandaq-krigen?',
            options: [
              'Salman al-Farisi',
              'Imam Ali (as)',
              'Abu Talib',
              'Muslim ibn Aqil',
            ],
            answer: 'Salman al-Farisi',
          },
          {
            question: 'Hvem fældede Amr ibn Abd Wudd i Khandaq-krigen?',
            options: [
              'Imam Ali (as)',
              'Hamza ibn Abd al-Muttalib',
              'Khalid ibn al-Walid',
              'Salman al-Farisi',
            ],
            answer: 'Imam Ali (as)',
          },
          {
            question: 'Hvad kaldte Quran dagen for Badr-krigen?',
            options: [
              'Yawm al-Furqan (Skellets Dag)',
              'Yawm al-Qiyamah',
              'Yawm al-Din',
              'Yawm al-Fath',
            ],
            answer: 'Yawm al-Furqan (Skellets Dag)',
          },
          {
            question: 'Hvilket vers vedrører begivenheden Mubahala?',
            options: ['3:61', '2:207', '5:67', '76:1'],
            answer: '3:61',
          },
          {
            question:
              'Hvem repræsenterede "vore sønner" (abna’ana) ved Mubahala?',
            options: [
              'Imam Hasan og Imam Husayn (as)',
              'Imam Ali og Fatima (as)',
              'Abbas og Ali al-Akbar (as)',
              'Imam Baqir og Imam Sadiq (as)',
            ],
            answer: 'Imam Hasan og Imam Husayn (as)',
          },
          {
            question: 'Hvad erklærede Profeten (saws) ved Ghadir Khumm?',
            options: [
              'Man kuntu mawlahu fa-Ali mawlahu',
              'La ilaha illa Allah',
              'Innama al-a’malu bi’l-niyyat',
              'Ana madinat al-ilm',
            ],
            answer: 'Man kuntu mawlahu fa-Ali mawlahu',
          },
          {
            question:
              'Hvem brød troskabseden og allierede sig med Aisha ved Jamal-slaget?',
            options: [
              'Talha og Zubayr',
              'Muawiyah og Amr',
              'Talha og Muawiyah',
              'Zubayr og Amr ibn al-As',
            ],
            answer: 'Talha og Zubayr',
          },
          {
            question: 'Hvem var Imam Alis (as) hovedmodstander ved Siffin-krigen?',
            options: [
              'Muawiyah ibn Abi Sufyan',
              'Amr ibn al-As',
              'Talha',
              'Yazid',
            ],
            answer: 'Muawiyah ibn Abi Sufyan',
          },
          {
            question: 'Hvem var Muawiyahs snedige strateg ved Siffin?',
            options: [
              'Amr ibn al-As',
              'Abu Musa al-Ash’ari',
              'Ubaydullah ibn Ziyad',
              'Marhab',
            ],
            answer: 'Amr ibn al-As',
          },
          {
            question:
              'Hvad gjorde Muawiyahs soldater ved Siffin for at standse kampen?',
            options: [
              'Hæftede Quran-sider på spydspidserne',
              'Rejste hvide flag',
              'Trak sig til Damaskus',
              'Bad om nattevåbenhvile',
            ],
            answer: 'Hæftede Quran-sider på spydspidserne',
          },
          {
            question: 'Hvem manipulerede Abu Musa al-Ash’ari under voldgiften?',
            options: [
              'Amr ibn al-As',
              'Muawiyah',
              'Ibn Muljam',
              'Ubaydullah ibn Ziyad',
            ],
            answer: 'Amr ibn al-As',
          },
          {
            question: 'Hvem myrdede Imam Ali (as)?',
            options: [
              'Abd al-Rahman ibn Muljam',
              'Amr ibn al-As',
              'Ubaydullah ibn Ziyad',
              'Marhab',
            ],
            answer: 'Abd al-Rahman ibn Muljam',
          },
          {
            question: 'På hvilken dato blev Imam Ali (as) ramt af sværdet?',
            options: ['19. Ramadan', '21. Ramadan', '10. Muharram', '18. Dhul-Hijjah'],
            answer: '19. Ramadan',
          },
          {
            question: 'Hvem forgiftede ifølge traditionen Imam Hasan (as)?',
            options: [
              'Hans hustru Ja’da bint al-Ash’ath',
              'Muawiyah personligt',
              'Yazid',
              'Ubaydullah ibn Ziyad',
            ],
            answer: 'Hans hustru Ja’da bint al-Ash’ath',
          },
          {
            question: 'Hvem udpegede Yazid som sin efterfølger?',
            options: [
              'Muawiyah ibn Abi Sufyan',
              'Abu Sufyan',
              'Amr ibn al-As',
              'al-Ma’mun',
            ],
            answer: 'Muawiyah ibn Abi Sufyan',
          },
          {
            question:
              'Hvem sendte Imam Husayn (as) til Kufa som sin repræsentant?',
            options: [
              'Muslim ibn Aqil',
              'Abbas (as)',
              'Ali al-Akbar (as)',
              'Habib ibn Mazahir',
            ],
            answer: 'Muslim ibn Aqil',
          },
          {
            question: 'Hvem var den brutale guvernør i Kufa under Karbala?',
            options: [
              'Ubaydullah ibn Ziyad',
              'Umar ibn Sa’d',
              'Amr ibn al-As',
              'al-Walid ibn Utba',
            ],
            answer: 'Ubaydullah ibn Ziyad',
          },
          {
            question: 'Hvor mange kampklare mænd stod Imam Husayn (as) med ved Karbala?',
            options: ['Ca. 72', 'Ca. 313', 'Ca. 1.000', 'Ca. 3.000'],
            answer: 'Ca. 72',
          },
          {
            question:
              'Hvilke to store retslærde studerede hos Imam Ja’far al-Sadiq (as)?',
            options: [
              'Abu Hanifa og Malik ibn Anas',
              'al-Bukhari og Muslim',
              'al-Shafi’i og Ahmad ibn Hanbal',
              'al-Tabari og al-Kulayni',
            ],
            answer: 'Abu Hanifa og Malik ibn Anas',
          },
          {
            question: 'Hvilken kalif forgiftede ifølge traditionen Imam Sadiq (as)?',
            options: ['al-Mansur', 'Harun al-Rashid', 'al-Ma’mun', 'al-Mutawakkil'],
            answer: 'al-Mansur',
          },
          {
            question: 'Under hvilken kalif sad Imam Musa al-Kazim (as) primært fængslet?',
            options: ['Harun al-Rashid', 'al-Mansur', 'al-Ma’mun', 'al-Mu’tasim'],
            answer: 'Harun al-Rashid',
          },
          {
            question: 'Hvor er Imam Musa al-Kazim (as) begravet?',
            options: ['Kazimain', 'Samarra', 'Mashhad', 'Najaf'],
            answer: 'Kazimain',
          },
          {
            question: 'Hvem udnævnte Imam Ali al-Ridha (as) til tronfølger (wali al-ahd)?',
            options: ['al-Ma’mun', 'Harun al-Rashid', 'al-Mansur', 'al-Mutawakkil'],
            answer: 'al-Ma’mun',
          },
          {
            question: 'Hvordan blev Imam al-Ridha (as) forgiftet ifølge traditionen?',
            options: ['Med druer', 'Med granatæble', 'Med vand', 'Med brød'],
            answer: 'Med druer',
          },
          {
            question: 'Hvor gammel var Imam Muhammad al-Taqi (as), da han blev Imam?',
            options: ['Ca. 8–9 år', 'Ca. 15 år', 'Ca. 25 år', 'Ca. 40 år'],
            answer: 'Ca. 8–9 år',
          },
          {
            question:
              'Hvilken by tvang al-Mutawakkil Imam Ali al-Naqi (as) til at flytte til?',
            options: ['Samarra', 'Bagdad', 'Kufa', 'Damaskus'],
            answer: 'Samarra',
          },
          {
            question:
              'I hvilken helligdom er Imam al-Naqi og Imam al-Askari (as) begravet?',
            options: [
              'Al-Askariyya i Samarra',
              'Kazimain i Bagdad',
              'Al-Baqi i Medina',
              'Imam Ridha-helligdommen i Mashhad',
            ],
            answer: 'Al-Askariyya i Samarra',
          },
          {
            question: 'Hvornår blev Imam al-Mahdi (as) født?',
            options: [
              '15. Sha’ban 255 EH',
              '10. Muharram 61 EH',
              '17. Rabi al-Awwal 53 FH',
              '13. Rajab 23 FH',
            ],
            answer: '15. Sha’ban 255 EH',
          },
          {
            question: 'Hvem var Imam al-Mahdis (as) mor ifølge overleveringen?',
            options: ['Narjis Khatun', 'Fatima al-Zahra', 'Khadija', 'Umm al-Fadl'],
            answer: 'Narjis Khatun',
          },
          {
            question:
              'Hvor mange repræsentanter (nuwwab) havde Imam al-Mahdi (as) under den lille skjulthed?',
            options: ['Fire', 'To', 'Tre', 'Tolv'],
            answer: 'Fire',
          },
          {
            question:
              'I hvilket år (EH) begyndte den store skjulthed (Ghaybat al-Kubra)?',
            options: ['329 EH', '260 EH', '255 EH', '148 EH'],
            answer: '329 EH',
          },
          {
            question: 'Hvad hedder Profetens (saws) allerførste åbenbarede sura?',
            options: ['Al-Alaq (96)', 'Al-Fatiha (1)', 'Al-Ikhlas (112)', 'Al-Baqara (2)'],
            answer: 'Al-Alaq (96)',
          },
          {
            question: 'Hvem var den første nawwab (repræsentant) for Imam al-Mahdi (as)?',
            options: [
              'Uthman ibn Sa’id al-Askari',
              'Husayn ibn Ruh al-Nawbakhti',
              'Ali ibn Muhammad al-Samarri',
              'Muhammad ibn Uthman',
            ],
            answer: 'Uthman ibn Sa’id al-Askari',
          },
          {
            question:
              'Hvem var den fjerde og sidste nawwab for Imam al-Mahdi (as)?',
            options: [
              'Ali ibn Muhammad al-Samarri',
              'Uthman ibn Sa’id',
              'Muhammad ibn Uthman',
              'Husayn ibn Ruh',
            ],
            answer: 'Ali ibn Muhammad al-Samarri',
          },
          {
            question: 'Hvad kaldes Hudaybiyyah-aftalen i Quran?',
            options: [
              'Fath Mubin (en klar åbning)',
              'Yawm al-Furqan',
              'Laylat al-Qadr',
              'Nasrun Aziz',
            ],
            answer: 'Fath Mubin (en klar åbning)',
          },
          {
            question: 'Hvem rev Khaybars massive port af under felttoget?',
            options: ['Imam Ali (as)', 'Hamza', 'Salman al-Farisi', 'Abu Dujana'],
            answer: 'Imam Ali (as)',
          },
          {
            question: 'Hvem besejrede Imam Ali (as) i enkeltduel ved Khaybar?',
            options: ['Marhab', 'Amr ibn Abd Wudd', 'Walid ibn Utba', 'Utba ibn Rabi’ah'],
            answer: 'Marhab',
          },
          {
            question: 'På hvilket bjerg ligger hulen Hira?',
            options: ['Jabal al-Nur', 'Jabal Uhud', 'Jabal Thawr', 'Jabal al-Rahma'],
            answer: 'Jabal al-Nur',
          },
          {
            question:
              'Hvad hedder hændelsen, hvor pen og papir blev afvist på Profetens dødsleje?',
            options: [
              'Hadith al-Qirtas',
              'Hadith al-Thaqalayn',
              'Hadith al-Manzila',
              'Hadith al-Raya',
            ],
            answer: 'Hadith al-Qirtas',
          },
          {
            question:
              'Hvad hedder hadithen om fanen, Profeten gav Imam Ali (as) ved Khaybar?',
            options: [
              'Hadith al-Raya',
              'Hadith al-Qirtas',
              'Hadith al-Kisa',
              'Hadith al-Ghadir',
            ],
            answer: 'Hadith al-Raya',
          },
          {
            question:
              'Hvad hedder retsskolen (fiqh) opkaldt efter Imam Ja’far al-Sadiq (as)?',
            options: ['Ja’fari', 'Hanafi', 'Maliki', 'Hanbali'],
            answer: 'Ja’fari',
          },
          {
            question: 'Hvad betyder tilnavnet "al-Sadiq"?',
            options: [
              'Den Sandfærdige',
              'Den Gavmilde',
              'Vejviseren',
              'Den Velbehagede',
            ],
            answer: 'Den Sandfærdige',
          },
          {
            question: 'Hvem var Profetens (saws) amme i ørkenen?',
            options: ['Halima al-Sa’diya', 'Fatima bint Asad', 'Khadija', 'Umm Ayman'],
            answer: 'Halima al-Sa’diya',
          },
          {
            question: 'Hvad betyder tilnavnet "al-Ridha"?',
            options: [
              'Den Velbehagede (af Allah)',
              'Den Sandfærdige',
              'Vejviseren',
              'Den der klipper viden åben',
            ],
            answer: 'Den Velbehagede (af Allah)',
          },
          {
            question: 'Hvem var Imam Zayn al-Abidin (as) søn af?',
            options: [
              'Imam Husayn (as)',
              'Imam Hasan (as)',
              'Imam Ali (as)',
              'Imam al-Baqir (as)',
            ],
            answer: 'Imam Husayn (as)',
          },
        ],
        svaer: [
          {
            question:
              'På hvilken islamisk dato blev Profeten (saws) født ifølge overleveringen?',
            options: [
              '17. Rabi al-Awwal',
              '12. Rabi al-Awwal',
              '13. Rajab',
              '15. Sha’ban',
            ],
            answer: '17. Rabi al-Awwal',
          },
          {
            question: 'Hvad hedder året, Profeten (saws) blev født?',
            options: [
              'Am al-Fil (Elefantens år)',
              'Am al-Huzn (Sorgens år)',
              'Am al-Wufud',
              'Am al-Jama’a',
            ],
            answer: 'Am al-Fil (Elefantens år)',
          },
          {
            question: 'Hvem forsøgte forgæves at ødelægge Kabaen med en elefanthær?',
            options: ['Abraha', 'Abu Lahab', 'Abu Jahl', 'Abu Sufyan'],
            answer: 'Abraha',
          },
          {
            question: 'På hvilken islamisk dato blev Imam Ali (as) født?',
            options: ['13. Rajab', '17. Rabi al-Awwal', '15. Sha’ban', '10. Muharram'],
            answer: '13. Rajab',
          },
          {
            question: 'Hvem var Imam Alis (as) mor?',
            options: [
              'Fatima bint Asad',
              'Khadija al-Kubra',
              'Fatima al-Zahra',
              'Halima al-Sa’diya',
            ],
            answer: 'Fatima bint Asad',
          },
          {
            question:
              'På hvilken islamisk dato modtog Profeten (saws) den første åbenbaring?',
            options: ['27. Rajab', '17. Ramadan', '15. Sha’ban', '18. Dhul-Hijjah'],
            answer: '27. Rajab',
          },
          {
            question:
              'I hvilken dal fandt boykotten af Banu Hashim sted?',
            options: [
              'Shi’b Abi Talib',
              'Wadi al-Qura',
              'Wadi Fatima',
              'Ghadir Khumm',
            ],
            answer: 'Shi’b Abi Talib',
          },
          {
            question: 'Hvor mange muslimer deltog cirka i Badr-krigen?',
            options: ['Ca. 313', 'Ca. 72', 'Ca. 1.000', 'Ca. 3.000'],
            answer: 'Ca. 313',
          },
          {
            question: 'Hvor stor var Quraysh-hæren cirka ved Badr?',
            options: ['Ca. 1.000', 'Ca. 313', 'Ca. 3.000', 'Ca. 10.000'],
            answer: 'Ca. 1.000',
          },
          {
            question:
              'Hvilke Quraysh-ledere fældede Imam Ali (as) blandt andre ved Badr?',
            options: [
              'Walid, Shayba og Utba',
              'Abu Jahl og Abu Lahab',
              'Marhab og Amr',
              'Talha og Zubayr',
            ],
            answer: 'Walid, Shayba og Utba',
          },
          {
            question: 'Hvor stor var Quraysh-hæren cirka ved Uhud?',
            options: ['Ca. 3.000', 'Ca. 1.000', 'Ca. 313', 'Ca. 10.000'],
            answer: 'Ca. 3.000',
          },
          {
            question: 'Hvor mange muslimer opnåede martyrdom ved Uhud?',
            options: ['70', '13', '313', '40'],
            answer: '70',
          },
          {
            question:
              'Hvem vendte tilbage med kavalleriet og angreb muslimerne bagfra ved Uhud?',
            options: [
              'Khalid ibn al-Walid',
              'Amr ibn al-As',
              'Abu Sufyan',
              'Marhab',
            ],
            answer: 'Khalid ibn al-Walid',
          },
          {
            question: 'Hvor stor var al-Ahzab-koalitionen cirka ved Khandaq?',
            options: ['Ca. 10.000', 'Ca. 3.000', 'Ca. 1.000', 'Ca. 30.000'],
            answer: 'Ca. 10.000',
          },
          {
            question: 'Hvor mange pilgrimme fulgte Profeten (saws) til Hudaybiyyah?',
            options: ['Ca. 1.400', 'Ca. 313', 'Ca. 10.000', 'Ca. 100.000'],
            answer: 'Ca. 1.400',
          },
          {
            question: 'Hvor mange års fred fastsatte Hudaybiyyah-aftalen?',
            options: ['10 år', '2 år', '5 år', '20 år'],
            answer: '10 år',
          },
          {
            question:
              'Hvor mange afguder omringede Kabaen ved erobringen af Mekka?',
            options: ['360', '99', '124', '1.000'],
            answer: '360',
          },
          {
            question:
              'På hvilken islamisk dato holdt Profeten (saws) talen ved Ghadir Khumm?',
            options: [
              '18. Dhul-Hijjah',
              '10. Dhul-Hijjah',
              '9. Dhul-Hijjah',
              '1. Muharram',
            ],
            answer: '18. Dhul-Hijjah',
          },
          {
            question:
              'Hvor mange muslimer fulgte cirka Profeten (saws) på afskedspilgrimsfærden?',
            options: ['Over 100.000', 'Ca. 10.000', 'Ca. 1.400', 'Ca. 313'],
            answer: 'Over 100.000',
          },
          {
            question: 'På hvilken islamisk dato gik Profeten (saws) bort?',
            options: [
              '28. Safar 11 EH',
              '17. Rabi al-Awwal 11 EH',
              '21. Ramadan 11 EH',
              '10. Muharram 11 EH',
            ],
            answer: '28. Safar 11 EH',
          },
          {
            question: 'Hvor samledes man og valgte Abu Bakr til kalif?',
            options: [
              'Saqifat Banu Sa’idah',
              'Masjid al-Nabawi',
              'Kabaen',
              'Dar al-Nadwa',
            ],
            answer: 'Saqifat Banu Sa’idah',
          },
          {
            question: 'Hvilket frugtbart landbrug kæmpede Fatima (as) for retten til?',
            options: ['Fadak', 'Khaybar', 'Ta’if', 'Yanbu'],
            answer: 'Fadak',
          },
          {
            question: 'Hvad hed Fatima al-Zahras (as) ufødte barn, der gik tabt?',
            options: ['Muhsin', 'Qasim', 'Ibrahim', 'Abdullah'],
            answer: 'Muhsin',
          },
          {
            question: 'I hvilket år (EH) begyndte Imam Alis (as) kalifat?',
            options: ['35 EH', '40 EH', '11 EH', '60 EH'],
            answer: '35 EH',
          },
          {
            question: 'I hvilket år (EH) fandt Jamal-slaget sted?',
            options: ['36 EH', '37 EH', '38 EH', '40 EH'],
            answer: '36 EH',
          },
          {
            question: 'I hvilket år (EH) fandt Siffin-krigen sted?',
            options: ['37 EH', '36 EH', '38 EH', '35 EH'],
            answer: '37 EH',
          },
          {
            question: 'I hvilket år (EH) fandt Nahrawan-krigen sted?',
            options: ['38 EH', '37 EH', '40 EH', '36 EH'],
            answer: '38 EH',
          },
          {
            question:
              'Hvor mange af Khawarij faldt cirka i Nahrawan-krigen?',
            options: ['Over 4.000', 'Ca. 313', 'Ca. 72', 'Ca. 1.000'],
            answer: 'Over 4.000',
          },
          {
            question: 'I hvilket år (EH) gik Imam Ali (as) bort?',
            options: ['40 EH', '35 EH', '50 EH', '41 EH'],
            answer: '40 EH',
          },
          {
            question: 'På hvilken islamisk dato gik Imam Ali (as) bort?',
            options: ['21. Ramadan', '19. Ramadan', '17. Ramadan', '10. Muharram'],
            answer: '21. Ramadan',
          },
          {
            question: 'I hvilket år (EH) gik Imam Hasan (as) bort?',
            options: ['50 EH', '40 EH', '60 EH', '61 EH'],
            answer: '50 EH',
          },
          {
            question:
              'På hvilken kirkegård ønskede Imam Hasan (as) at blive begravet nær Profeten?',
            options: ['Al-Baqi', 'Wadi al-Salam', 'Jannat al-Mu’alla', 'Al-Askariyya'],
            answer: 'Al-Baqi',
          },
          {
            question: 'I hvilket år (EH) døde Muawiyah, hvorefter Yazid tog magten?',
            options: ['60 EH', '50 EH', '61 EH', '41 EH'],
            answer: '60 EH',
          },
          {
            question: 'Fra hvilken by rejste Imam Husayn (as) først til Mekka?',
            options: ['Medina', 'Kufa', 'Basra', 'Damaskus'],
            answer: 'Medina',
          },
          {
            question: 'Hvor mange breve modtog Imam Husayn (as) cirka fra Kufas borgere?',
            options: ['Over 12.000', 'Ca. 1.000', 'Ca. 72', 'Ca. 313'],
            answer: 'Over 12.000',
          },
          {
            question: 'På hvilken islamisk dato forlod Imam Husayn (as) Mekka?',
            options: ['8. Dhul-Hijjah', '10. Muharram', '18. Dhul-Hijjah', '1. Rajab'],
            answer: '8. Dhul-Hijjah',
          },
          {
            question: 'Hvor stor var Umayyade-hæren cirka ved Karbala?',
            options: ['Ca. 30.000', 'Ca. 10.000', 'Ca. 3.000', 'Ca. 1.000'],
            answer: 'Ca. 30.000',
          },
          {
            question: 'Hvem kommanderede Umayyade-hæren ved Karbala?',
            options: [
              'Umar ibn Sa’d',
              'Ubaydullah ibn Ziyad',
              'Amr ibn al-As',
              'Shimr alene',
            ],
            answer: 'Umar ibn Sa’d',
          },
          {
            question: 'I hvilket år (EH) gik Imam Zayn al-Abidin (as) bort?',
            options: ['95 EH', '114 EH', '61 EH', '148 EH'],
            answer: '95 EH',
          },
          {
            question:
              'Hvilken kalif forgiftede ifølge traditionen Imam Muhammad al-Baqir (as)?',
            options: [
              'Hisham ibn Abd al-Malik',
              'al-Mansur',
              'Harun al-Rashid',
              'al-Ma’mun',
            ],
            answer: 'Hisham ibn Abd al-Malik',
          },
          {
            question: 'I hvilket år (EH) gik Imam Ja’far al-Sadiq (as) bort?',
            options: ['148 EH', '114 EH', '183 EH', '95 EH'],
            answer: '148 EH',
          },
          {
            question:
              'Hvor mange navne angav Imam Sadiq (as) i sit testamente for at beskytte sin efterfølger?',
            options: ['Fem', 'To', 'Tre', 'Tolv'],
            answer: 'Fem',
          },
          {
            question: 'I hvilket år (EH) gik Imam Musa al-Kazim (as) bort?',
            options: ['183 EH', '148 EH', '203 EH', '220 EH'],
            answer: '183 EH',
          },
          {
            question: 'I hvis fængsel i Bagdad gik Imam Musa al-Kazim (as) bort?',
            options: [
              'Sindhi ibn Shahaks fængsel',
              'al-Mansurs palads',
              'Ubaydullah ibn Ziyads fængsel',
              'al-Mutawakkils fængsel',
            ],
            answer: 'Sindhi ibn Shahaks fængsel',
          },
          {
            question: 'I hvilket år (EH) gik Imam Ali al-Ridha (as) bort?',
            options: ['203 EH', '183 EH', '220 EH', '254 EH'],
            answer: '203 EH',
          },
          {
            question: 'I hvilket år (EH) gik Imam Muhammad al-Taqi (as) bort?',
            options: ['220 EH', '203 EH', '254 EH', '148 EH'],
            answer: '220 EH',
          },
          {
            question: 'I hvilket år (EH) gik Imam Ali al-Naqi (as) bort?',
            options: ['254 EH', '220 EH', '260 EH', '203 EH'],
            answer: '254 EH',
          },
          {
            question: 'I hvilket år (EH) gik Imam Hasan al-Askari (as) bort?',
            options: ['260 EH', '254 EH', '255 EH', '329 EH'],
            answer: '260 EH',
          },
          {
            question:
              'I hvilket år (EH) begyndte den lille skjulthed (Ghaybat al-Sughra)?',
            options: ['260 EH', '255 EH', '329 EH', '254 EH'],
            answer: '260 EH',
          },
          {
            question: 'Hvem var Imam al-Taqis (as) hustru, datter af al-Ma’mun?',
            options: ['Umm al-Fadl', 'Narjis', 'Ja’da', 'Fatima bint Asad'],
            answer: 'Umm al-Fadl',
          },
          {
            question:
              'Hvad var Imam Alis (as) rolle med de betroede ejendele (amanat) under Hijraen?',
            options: [
              'Han tilbagegav dem til deres ejere',
              'Han skjulte dem i Kabaen',
              'Han bragte dem til Medina',
              'Han solgte dem',
            ],
            answer: 'Han tilbagegav dem til deres ejere',
          },
        ],
      },
    },
    {
      id: 'makarem-lessons-about',
      title:
        'Lessons about Allah, Prophethood, Justice, Leadership (Imamate) and Resurrection',
      emoji: '🕌',
      description:
        'Trosgrundlaget (Usul al-Din) af Ayatollah Makarem Shirazi. Vælg en lektion — 3 spørgsmål pr. lektion, ingen sværhedsgrad.',
      mode: 'lesson',
      lessons: [
        {
          id: 'lektion-1',
          label: 'Lektion 1',
          emoji: '1️⃣',
          description: 'At søge Gud — nysgerrighed, taknemmelighed og intellekt.',
          questions: [
            {
              question:
                'Hvilke tre ting motiverer ifølge lektionen mennesket til at søge universets skaber?',
              options: [
                'Nysgerrighed, taknemmelighed og intellekt',
                'Frygt, vane og tvang',
                'Rigdom, magt og ære',
                'Søvn, sult og tørst',
              ],
              answer: 'Nysgerrighed, taknemmelighed og intellekt',
            },
            {
              question:
                'I eksemplet med personen, der vågner fra koma og spørger "Hvor er jeg?", hvilken egenskab illustreres?',
              options: [
                'Nysgerrighed',
                'Taknemmelighed',
                'Frygt',
                'Ligegyldighed',
              ],
              answer: 'Nysgerrighed',
              fact: 'Der er en indbygget længsel i mennesket efter at vide, hvordan det hele startede, og hvor vi ender.',
            },
            {
              question:
                'I eksemplet med rejsen, hvor vejen deler sig, hvad motiverer vores rationale os til?',
              options: [
                'At undersøge mulighederne og vælge den mest rigtige vej',
                'At stoppe rejsen helt',
                'At følge den første vej blindt',
                'At vende hjem uden at vælge',
              ],
              answer: 'At undersøge mulighederne og vælge den mest rigtige vej',
              fact: 'Koranen 39:18: »… de, som lytter til ordet og følger det bedste af det. Det er dem, Allah har retledt, og det er dem, der besidder forstand.«',
            },
          ],
        },
        {
          id: 'lektion-2',
          label: 'Lektion 2',
          emoji: '2️⃣',
          description: 'Tegnene på Gud i vores dagligdag.',
          questions: [
            {
              question:
                'Ifølge lektionen, hvordan ser en gudstilbeder på hele verden?',
              options: [
                'Som en stor bog, hvor hvert atom er som ord',
                'Som et resultat af rene tilfældigheder',
                'Som noget overflødigt og betydningsløst',
                'Som en illusion uden orden',
              ],
              answer: 'Som en stor bog, hvor hvert atom er som ord',
            },
            {
              question:
                'Hvilken virkning af troen på Gud fjerner angst og giver ro i enhver situation?',
              options: [
                'Fredfyldthed',
                'Nysgerrighed',
                'Rigdom',
                'Ansvarsfølelse',
              ],
              answer: 'Fredfyldthed',
              fact: 'Koranen 6:82: »De, der tror og ikke blander deres tro med uret — dem tilkommer tryghed, og de er retledte.«',
            },
            {
              question:
                'Hvad beskriver lektionen, at en troende med ansvarsfølelse har i sig?',
              options: [
                'En åndelig politimand, der ser alle handlinger',
                'En dommer, der straffer andre',
                'En stemme, der kun søger belønning',
                'En følelse af ligegyldighed',
              ],
              answer: 'En åndelig politimand, der ser alle handlinger',
              fact: 'Folk, der mangler tro, har tendens til at være mere egoistiske, fordi de mangler denne ansvarsfølelse.',
            },
          ],
        },
        {
          id: 'lektion-3',
          label: 'Lektion 3',
          emoji: '3️⃣',
          description: 'To måder at kende Gud på — den indre måde.',
          questions: [
            {
              question:
                'Hvad kaldes den måde, hvor man lytter i sit indre og hører monoteismens kald?',
              options: [
                'Den indre måde',
                'Den ydre måde',
                'Den videnskabelige måde',
                'Den historiske måde',
              ],
              answer: 'Den indre måde',
              fact: 'Den indre måde kaldes også den tætteste måde at kende Gud på.',
            },
            {
              question:
                'Hvornår bliver den indre stemme (kaldet på Gud) stærkest ifølge lektionen?',
              options: [
                'I katastrofer, hvor den materialistiske verden ikke betyder noget',
                'Når man er rig og magtfuld',
                'Når man sover',
                'Når man er blandt mange mennesker',
              ],
              answer:
                'I katastrofer, hvor den materialistiske verden ikke betyder noget',
              fact: 'Selv Faraoen kaldte på Gud, lige inden floden lukkede over ham.',
            },
            {
              question:
                'Ifølge koranverset gør mennesker hvad, når de er i fare på et skib?',
              options: [
                'De påkalder Gud i oprigtig tro',
                'De glemmer Gud helt',
                'De tilbeder afguder',
                'De giver op',
              ],
              answer: 'De påkalder Gud i oprigtig tro',
              fact: 'Koranen 29:65: »Når de går om bord på et skib, påkalder de Allah i oprigtig tro. Men når Han redder dem i land, sætter de straks andre ved Hans side.«',
            },
          ],
        },
        {
          id: 'lektion-4',
          label: 'Lektion 4',
          emoji: '4️⃣',
          description: 'Svar på et vigtigt spørgsmål — fitrah.',
          questions: [
            {
              question:
                'Hvad kaldes den indre stemme, der findes i alle mennesker gennem al tid?',
              options: ['Fitrah', 'Horizons', 'Souls', 'Furqan'],
              answer: 'Fitrah',
            },
            {
              question:
                'Hvilke fire sanser nævner nogle psykologer, at alle menneskesjæle har?',
              options: [
                'Viden, godhed, smukhed og tro',
                'Syn, hørelse, smag og lugt',
                'Frygt, håb, vrede og glæde',
                'Sult, tørst, søvn og smerte',
              ],
              answer: 'Viden, godhed, smukhed og tro',
            },
            {
              question:
                'Hvad indrømmer ikke-troende ifølge lektionen, men kalder »naturen« i stedet for Gud?',
              options: [
                'Guds eksistens',
                'At de tager fejl',
                'At videnskab er nytteløs',
                'At fitrah ikke findes',
              ],
              answer: 'Guds eksistens',
              fact: 'Koranen 50:16: »Vi har skabt mennesket, og Vi ved, hvad hans sjæl hvisker til ham. Vi er ham nærmere end hans halspulsåre.«',
            },
          ],
        },
        {
          id: 'lektion-5',
          label: 'Lektion 5',
          emoji: '5️⃣',
          description: 'En sand historie — ministeren og Faraoen.',
          questions: [
            {
              question:
                'Hvad indså den magtfulde og arrogante minister, da han endte i fængsel?',
              options: [
                'At mennesket er som en tegning på et flag, styret af vinden',
                'At han selv var en gud',
                'At videnskab er ligegyldig',
                'At rigdom er alt',
              ],
              answer:
                'At mennesket er som en tegning på et flag, styret af vinden',
            },
            {
              question: 'Hvad viser den sande historie om ministeren?',
              options: [
                'At Gud med ét kan fjerne alle materialistiske goder',
                'At magt varer evigt',
                'At arrogance belønnes',
                'At fængsel gør folk rige',
              ],
              answer: 'At Gud med ét kan fjerne alle materialistiske goder',
            },
            {
              question:
                'Hvem henviser den sande histories koranvers til — han troede på Gud, da han var ved at drukne?',
              options: ['Faraoen', 'Ministeren', 'Den lærde', 'En konge'],
              answer: 'Faraoen',
              fact: 'Koranen 10:90: »… indtil, da han var ved at drukne, sagde han: Jeg tror, at der ikke er nogen gud undtagen Ham, som Israels børn tror på, og jeg er blandt de underkastede.«',
            },
          ],
        },
        {
          id: 'lektion-6',
          label: 'Lektion 6',
          emoji: '6️⃣',
          description: 'Den anden måde at kende Gud på — den ydre måde.',
          questions: [
            {
              question:
                'Hvad kaldes måden, hvor man ser på verdens orden og lovmæssighed for at kende Gud?',
              options: [
                'Den ydre måde',
                'Den indre måde',
                'Fitrah-måden',
                'Den skjulte måde',
              ],
              answer: 'Den ydre måde',
            },
            {
              question:
                'Hvilket dagligdags eksempel bruges til at vise, at orden kræver en skaber med viden?',
              options: [
                'Et ur, man finder, må være lavet af en person',
                'En sten, der falder ned ad bakke',
                'En sky, der driver forbi',
                'En bølge på havet',
              ],
              answer: 'Et ur, man finder, må være lavet af en person',
            },
            {
              question: 'Hvad betyder "horizons" i koranverset 41:53?',
              options: [
                'Guds tegn i den ydre verden (naturen, universet, skabelsen)',
                'Guds tegn inde i mennesket',
                'Menneskets samvittighed',
                'De troendes bønner',
              ],
              answer:
                'Guds tegn i den ydre verden (naturen, universet, skabelsen)',
              fact: 'Koranen 41:53: »Vi vil vise dem Vore tegn i horisonterne og i dem selv, indtil det bliver klart for dem, at det er sandheden.« — »Souls« er Guds tegn inde i mennesket.',
            },
          ],
        },
        {
          id: 'lektion-7',
          label: 'Lektion 7',
          emoji: '7️⃣',
          description: 'Eksempler fra skabelsen — hjernen.',
          questions: [
            {
              question:
                'Hvilket organ beskrives i lektionen som kroppens kontrolcenter?',
              options: ['Hjernen', 'Hjertet', 'Lungerne', 'Nyrerne'],
              answer: 'Hjernen',
            },
            {
              question:
                'Hvad har Gud ifølge lektionen skabt for at beskytte hjernen mod stød og uheld?',
              options: [
                'Kraniet samt hjernehinde og hjernevæske',
                'Ribbenene',
                'Musklerne i nakken',
                'Huden på hovedet',
              ],
              answer: 'Kraniet samt hjernehinde og hjernevæske',
            },
            {
              question:
                'Hvad opfordrer koranverset mennesket til at reflektere over i lektionen om skabelsen?',
              options: [
                'Tegnene på Gud i mennesket selv',
                'Stjernerne på himlen',
                'Havets dybder',
                'Bjergenes højde',
              ],
              answer: 'Tegnene på Gud i mennesket selv',
              fact: 'Koranen 51:21: »Og i jer selv. Vil I da ikke se?«',
            },
          ],
        },
      ],
    },
  ];

  // --- Game state signals ---
  public readonly gameState = signal<GameState>('start');
  public readonly activeTopic = signal<QuizTopic | null>(null);
  public readonly pendingTopic = signal<QuizTopic | null>(null);
  public readonly activeDifficulty = signal<RoundMeta | null>(null);
  public readonly activeMode = signal<'difficulty' | 'lesson'>('difficulty');
  public readonly activeLesson = signal<LessonMeta | null>(null);
  public readonly roundQuestions = signal<QuizQuestion[]>([]);
  public readonly currentIndex = signal(0);
  public readonly selectedAnswer = signal<string | null>(null);
  public readonly answered = signal(false);
  public readonly score = signal(0);
  public readonly lives = signal(MAX_LIVES);
  public readonly streak = signal(0);
  public readonly bestStreak = signal(0);
  public readonly correctCount = signal(0);
  public readonly timeLeft = signal(TIME_PER_QUESTION);
  public readonly lastGain = signal(0);
  public readonly xpGained = signal(0);

  public readonly maxLives = MAX_LIVES;
  public readonly timePerQuestion = TIME_PER_QUESTION;
  public readonly questionsPerRound = QUESTIONS_PER_ROUND;

  private timerId: ReturnType<typeof setInterval> | null = null;

  // --- Derived state ---
  public readonly currentQuestion = computed(
    () => this.roundQuestions()[this.currentIndex()] ?? null
  );

  public readonly totalQuestions = computed(() => this.roundQuestions().length);

  public readonly progress = computed(() => {
    const total = this.totalQuestions();
    return total === 0 ? 0 : (this.currentIndex() / total) * 100;
  });

  public readonly accuracy = computed(() => {
    const total = this.totalQuestions();
    return total === 0 ? 0 : Math.round((this.correctCount() / total) * 100);
  });

  public readonly livesArray = computed(() =>
    Array.from({ length: this.maxLives }, (_, i) => i < this.lives())
  );

  public readonly comboMultiplier = computed(() =>
    Math.min(1 + Math.floor(this.streak() / 3) * 0.5, 3)
  );

  public readonly timeDisplay = computed(() => {
    const total = this.timeLeft();
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  });

  public readonly rank = computed<Rank>(() => {
    const acc = this.accuracy();
    return (
      this.ranks.find((r) => acc >= r.minAccuracy) ??
      this.ranks[this.ranks.length - 1]
    );
  });

  private readonly ranks: Rank[] = [
    { title: 'Mester (Ustadh)', emoji: '🏆', minAccuracy: 100 },
    { title: 'Lærd (Alim)', emoji: '🌟', minAccuracy: 80 },
    { title: 'Kundskabsbærer', emoji: '📚', minAccuracy: 60 },
    { title: 'Søgende', emoji: '🔎', minAccuracy: 40 },
    { title: 'Ny studerende', emoji: '🌱', minAccuracy: 0 },
  ];

  // --- Navigation actions ---
  public selectTopic(topic: QuizTopic): void {
    this.pendingTopic.set(topic);
    this.gameState.set(topic.mode === 'lesson' ? 'lesson' : 'difficulty');
  }

  public backToTopics(): void {
    this.pendingTopic.set(null);
    this.gameState.set('start');
  }

  public poolSize(difficulty: Difficulty): number {
    return this.pendingTopic()?.pools?.[difficulty].length ?? 0;
  }

  public startRound(difficulty: DifficultyMeta): void {
    const topic = this.pendingTopic();
    if (!topic || !topic.pools) {
      return;
    }
    this.activeMode.set('difficulty');
    this.activeLesson.set(null);
    this.beginRound(topic, difficulty, topic.pools[difficulty.id]);
  }

  public startLesson(lesson: LessonMeta): void {
    const topic = this.pendingTopic();
    if (!topic) {
      return;
    }
    this.activeMode.set('lesson');
    this.activeLesson.set(lesson);
    const { questions, ...meta } = lesson;
    this.beginRound(topic, meta, questions);
  }

  private beginRound(
    topic: QuizTopic,
    meta: RoundMeta,
    pool: QuizQuestion[]
  ): void {
    const count = Math.min(QUESTIONS_PER_ROUND, pool.length);
    const shuffled = this.shuffle(pool).slice(0, count);
    const prepared = shuffled.map((q) => ({
      ...q,
      options: this.shuffle(q.options),
    }));

    this.activeTopic.set(topic);
    this.activeDifficulty.set(meta);
    this.roundQuestions.set(prepared);
    this.currentIndex.set(0);
    this.score.set(0);
    this.lives.set(MAX_LIVES);
    this.streak.set(0);
    this.bestStreak.set(0);
    this.correctCount.set(0);
    this.xpGained.set(0);
    this.selectedAnswer.set(null);
    this.answered.set(false);
    this.gameState.set('playing');
    this.startTimer();
  }

  // --- Gameplay actions ---
  public selectAnswer(option: string): void {
    if (this.answered()) {
      return;
    }
    this.stopTimer();
    this.answered.set(true);
    this.selectedAnswer.set(option);

    const question = this.currentQuestion();
    const isCorrect = question?.answer === option;

    if (isCorrect) {
      const newStreak = this.streak() + 1;
      this.streak.set(newStreak);
      this.bestStreak.set(Math.max(this.bestStreak(), newStreak));
      this.correctCount.update((c) => c + 1);

      const speedBonus = Math.min(this.timeLeft(), 20) * 5;
      const streakBonus = Math.min(newStreak, 5) * 20;
      const gain = Math.round(
        (BASE_POINTS + speedBonus + streakBonus) * this.comboMultiplier()
      );
      this.lastGain.set(gain);
      this.score.update((s) => s + gain);
      this.xpGained.update((x) => x + gain);
    } else {
      this.streak.set(0);
      this.lastGain.set(0);
      this.lives.update((l) => l - 1);
    }
  }

  public isTimedOut(): boolean {
    return this.answered() && this.selectedAnswer() === null;
  }

  public next(): void {
    if (this.lives() <= 0) {
      this.endGame();
      return;
    }
    if (this.currentIndex() + 1 >= this.totalQuestions()) {
      this.endGame();
      return;
    }
    this.currentIndex.update((i) => i + 1);
    this.selectedAnswer.set(null);
    this.answered.set(false);
    this.lastGain.set(0);
    this.startTimer();
  }

  public restart(): void {
    this.stopTimer();
    this.gameState.set('start');
    this.activeTopic.set(null);
    this.pendingTopic.set(null);
    this.activeDifficulty.set(null);
    this.activeLesson.set(null);
  }

  public replay(): void {
    const topic = this.activeTopic();
    if (!topic) {
      this.restart();
      return;
    }
    this.pendingTopic.set(topic);

    if (this.activeMode() === 'lesson') {
      const lesson = this.activeLesson();
      if (lesson) {
        this.startLesson(lesson);
        return;
      }
    } else {
      const meta = this.activeDifficulty();
      if (meta && topic.pools) {
        this.beginRound(topic, meta, topic.pools[meta.id as Difficulty]);
        return;
      }
    }
    this.restart();
  }

  public changeDifficulty(): void {
    this.stopTimer();
    const topic = this.activeTopic();
    if (!topic) {
      this.restart();
      return;
    }
    this.pendingTopic.set(topic);
    this.gameState.set(this.activeMode() === 'lesson' ? 'lesson' : 'difficulty');
  }

  public optionState(option: string): 'correct' | 'wrong' | 'idle' {
    if (!this.answered()) {
      return 'idle';
    }
    const question = this.currentQuestion();
    if (option === question?.answer) {
      return 'correct';
    }
    if (option === this.selectedAnswer()) {
      return 'wrong';
    }
    return 'idle';
  }

  // --- Helpers ---
  private startTimer(): void {
    this.stopTimer();
    this.timeLeft.set(TIME_PER_QUESTION);
    this.timerId = setInterval(() => {
      const remaining = this.timeLeft() - 1;
      if (remaining <= 0) {
        this.timeLeft.set(0);
        this.handleTimeout();
      } else {
        this.timeLeft.set(remaining);
      }
    }, 1000);
  }

  private handleTimeout(): void {
    this.stopTimer();
    this.answered.set(true);
    this.selectedAnswer.set(null);
    this.streak.set(0);
    this.lastGain.set(0);
    this.lives.update((l) => l - 1);
  }

  private stopTimer(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private endGame(): void {
    this.stopTimer();
    this.gameState.set('result');
  }

  private shuffle<T>(items: T[]): T[] {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  public ngOnDestroy(): void {
    this.stopTimer();
  }
}
