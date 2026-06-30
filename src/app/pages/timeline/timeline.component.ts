import { Component } from "@angular/core";

@Component({
	selector: "app-timeline",
	templateUrl: "./timeline.component.html",
	styleUrls: ["./timeline.component.scss"],
})
export class TimelineComponent {
	public timelineEntries = [
		{
			icon: "🍼",
			title: "Profetens (saws) fødsel",
			date: "År 570 (53 FH)",
			description:
				"Profeten Muhammad (saws) blev født den 17. Rabi al-Awwal i Mekka, i Hashim-klanen af Quraysh-stammen. Hans far Abdullah ibn Abd al-Muttalib var allerede afgået ved døden måneder inden fødslen. Han blev opkaldt Muhammad af sin bedstefar Abd al-Muttalib og opfostret i ørkenen hos ammen Halima al-Sa'diya. Hans fødsel faldt i Am al-Fil (Elefanternes År), det år den abyssinske kong Abraha med en elefanthær forgæves forsøgte at ødelægge Kabaen i Mekka.",
			source:
				"Historisk kildemateriale (sira). Kitab al-Irshad fokuserer på Imamernes liv og starter med Imam Alis udnævnelse; Profetens fødsel omtales som baggrundskontekst.",
			showDescription: false,
		},
		{
			icon: "📜",
			title: "Den første åbenbaring",
			date: "År 610 (13 FH)",
			description:
				"Profeten Muhammad (saws) modtog sin første åbenbaring den 27. Rajab i hulen Hira på Jabal al-Nur nær Mekka. Ærkeenglen Jibril (Gabriel) bragte ham de første vers af Surat al-Alaq (96:1–5): 'Læs! I din Herres navn, som skabte ...' Hans hustru Khadijah (as) var den første til at anerkende hans profetskab og støttede ham uforbeholdent. Imam Ali (as) – dengang ca. 10 år gammel og opvokset i Profetens husholdning – var den første mand, der omfavnede islam.",
			source:
				"Historisk kildemateriale (sira). Kitab al-Irshad, Bog 1 omtaler Imam Alis tidlige accept af islam som et af beviserne for hans fortrin fremfor alle andre.",
			showDescription: false,
		},
		{
			icon: "🌑",
			title: "Sorgens år (Am al-Huzn)",
			date: "År 619 (3 FH)",
			description:
				"I løbet af kort tid mistede Profeten (saws) sine to vigtigste støtter: hans elskede hustru Khadijah al-Kubra (as), den første muslimske kvinde, og hans onkel Abu Talib, der i over 40 år skærmede ham mod Quraysh. Abu Talib – far til Imam Ali (as) – havde i tre år udholdt den brutale sociale og økonomiske boykot af Banu Hashim i dalen Shi'b Abi Talib snarere end at opgive sin beskyttelse af Profeten. Med disse to nøglepersoner borte intensiverede Quraysh forfølgelsen af muslimerne markant.",
			source:
				"Historisk kildemateriale (sira). Kitab al-Irshad, Bog 1 nævner Abu Talibs uvurderlige rolle som Profetens beskytter og som Imam Alis far.",
			showDescription: false,
		},
		{
			icon: "🚶‍♂️",
			title: "Hijra til Medina",
			date: "År 622 (1 EH)",
			description:
				"Da Quraysh planlagde Profetens (saws) mord, befalede Allah ham at emigrere til Yathrib (Medina). Imam Ali (as) ofrede sig ved at sove i Profetens seng iført hans kappe for at vildlede morderne, mens Profeten og Abu Bakr flygtede sydpå og gemte sig tre dage i hulen Thawr. Imam Ali (as) vendte dernæst betroede ejendele tilbage til deres ejere i Mekka og sluttede sig til Profeten (saws) i Medina. Hijraen markerer år 1 i den islamiske kalender og etableringen af det første muslimske politiske samfund.",
			source:
				"Historisk kildemateriale (sira). Kitab al-Irshad, Bog 1 fremhæver Imam Alis ofring (laylat al-mabit) ved Profetens seng som et af de stærkeste beviser for hans fortrin og gudfrygtige mod.",
			showDescription: false,
		},
		{
			icon: "⚔️",
			title: "Badr-krigen",
			date: "År 624 (2 EH)",
			description:
				"Den første afgørende kamp i Islams historie: ca. 313 muslimer mod en Quraysh-hær på ca. 1.000 mænd nær brønden ved Badr. Imam Ali (as) spillede en central rolle og fældte mange af Quraysh's mest navnkundige krigere i enkeltdueller, bl.a. Walid ibn Utba, Shayba ibn Rabi'ah og Utba ibn Rabi'ah. Sejren befæstede muslimernes militære troværdighed og beseglede Profetens autoritet i Medina. Quran betegner denne dag 'Yawm al-Furqan' – Skellets Dag.",
			source:
				"Kitab al-Irshad, Bog 1 – Imam Alis enkeltdueller og slagsdrab ved Badr er angivet som markante beviser for hans fortrin over alle andre muslimer.",
			showDescription: false,
		},
		{
			icon: "🛡️",
			title: "Uhud-krigen",
			date: "År 625 (3 EH)",
			description:
				"Quraysh angreb med en hær på ca. 3.000 mand for at hævne Badr-nederlaget. Muslimerne vandt tidligt, men da bueskytterne (mod Profetens udtrykkelige ordre) forlod deres post for at samle krigsbytte, vendte Khalid ibn al-Walid om med kavalleriet og angreb bagfra. Profeten (saws) selv blev såret, og rygter om hans død spredte sig. Imam Ali (as) var en af meget få, der holdt stand og beskyttede Profeten personligt. 70 muslimer opnåede martyrdom, heriblandt Hamza ibn Abd al-Muttalib, Profetens onkel.",
			source:
				"Kitab al-Irshad, Bog 1 – Imam Alis ukuelige forsvar for Profeten ved Uhud fremhæves som bevis for hans kompromisløse loyalitet og mod.",
			showDescription: false,
		},
		{
			icon: "🕳️",
			title: "Khandaq-krigen (Gravkrigen)",
			date: "År 627 (5 EH)",
			description:
				"En koalition på ca. 10.000 fjender fra Quraysh og allierede stammer (al-Ahzab) marcherede mod Medina. Perseren Salman al-Farisi foreslog at grave en bred grøft rundt om Medinas ubeskyttede nordside – en ukendt taktik i Arabien. Den eneste fjende, der lykkedes med at krydse grøften, var den berømmede kriger Amr ibn Abd Wudd – anset som svarende til 1.000 ryttere. Imam Ali (as) trådte frem og fældte ham i enkeltduel. Profeten (saws) sagde om dette: 'Imam Alis duel mod Amr den dag er mere værd end mine efterkommeres handlinger frem til Opstandelsens Dag.'",
			source:
				"Kitab al-Irshad, Bog 1 – Imam Alis sejr over Amr ibn Abd Wudd ved Khandaq er et af de centrale eksempler på hans enestående tapperhed og uovertrufne rang.",
			showDescription: false,
		},
		{
			icon: "🏰",
			title: "Felttoget mod Khaybar",
			date: "År 628 (7 EH)",
			description:
				"Den jødiske stamme i Khaybar (nordlige Hijaz) havde aktivt støttet koalitionen mod muslimerne. Profeten (saws) sendte Abu Bakr og dernæst Umar til at erobre den kraftigt befæstede fæstning, men begge vendte tomhændet tilbage. Da erklærede Profeten (saws): 'I morgen giver jeg fanen til en, der elsker Allah og Hans Profet, og som Allah og Hans Profet elsker – han vil ikke vende om, før Allah giver sejr.' Næste dag tildelte han fanen til Imam Ali (as), der trods svær øjenbetændelse marcherede frem, besejrede den frygtede Marhab i enkeltduel og åbnede fæstningen.",
			source:
				"Kitab al-Irshad, Bog 1 – Khaybar-felttoget og Profetens hadith om fanen (hadith al-raya) er et af de centrale beviskapitler i Bog 1 for Imam Alis udvalgte status.",
			showDescription: false,
		},
		{
			icon: "🤝",
			title: "Hudaybiyyah-traktaten",
			date: "År 628 (6 EH)",
			description:
				"Profeten (saws) anførte ca. 1.400 pilgrimme mod Mekka for umra, men Quraysh spærrede vejen ved Hudaybiyyah. Imam Ali (as) fungerede som Profetens sekretær og nedskrev den betingede fredsaftale, der tillod muslimerne at vende hjem og udføre pilgrimsfærd det følgende år, og fastsatte en 10-årig fredsperiode. Mange muslimer protesterede mod de tilsyneladende ydmygende betingelser. Profeten (saws) beskrev aftalen som en 'klar åbning' (Fath Mubin), og den banede vejen for islamens ekspansion og Mekkas fredelige kapitulation to år senere.",
			source:
				"Historisk kildemateriale (sira). Kitab al-Irshad, Bog 1 omtaler Imam Alis rolle som Profetens betroede skriver og repræsentant ved denne og andre afgørende lejligheder.",
			showDescription: false,
		},
		{
			icon: "🏳️",
			title: "Erobringen af Mekka",
			date: "År 630 (8 EH)",
			description:
				"Da Quraysh brød Hudaybiyyah-aftalen, marcherede Profeten (saws) mod Mekka med ca. 10.000 muslimer. Mekka kapitulerede næsten uden blodsudgydelse. Profeten (saws) erklærede en generel amnesti: 'I dag er ikke hævnens dag – i dag er nådens dag.' Imam Ali (as) red på Profetens (saws) skuldre for at nå op og nedbryde de 360 afguder, der omringede Kabaen. Profeten (saws) rensede personlig det Hellige Hus og holdt derefter bøn og takkede Allah for sejren.",
			source:
				"Historisk kildemateriale (sira). Kitab al-Irshad, Bog 1 nævner Imam Alis rolle ved renselsen af Kabaen som et yderligere eksempel på hans fortrolighed med Profeten.",
			showDescription: false,
		},
		{
			icon: "📢",
			title: "Afskedspilgrimsfærden og Ghadir Khumm",
			date: "År 632 (10 EH)",
			description:
				"Under Profetens (saws) eneste og afsluttende hajj ledsagede over 100.000 muslimer ham. Den 18. Dhul-Hijjah stoppede karavanen ved Ghadir Khumm-oasen nær Juhfa. Profeten (saws) holdt en lang tale og hævede Imam Alis (as) hånd og erklærede: 'Man kuntu mawlahu fa-Ali mawlahu' – 'For hvem jeg er hans mester (wali), er Ali hans mester.' Han bad Allah om at elske dem der elsker Ali, være fjende af Alis fjender, og hjælpe dem der hjælper Ali. Denne begivenhed er Shia-Islams absolutte grundsten for Imamatet.",
			source:
				"Kitab al-Irshad, Bog 1, åbningskapitel – Ghadir Khumm-erklæringen er det allerførste og primære bevis Sheikh al-Mufid fremlægger for Imam Alis legitime udnævnelse som Imam og leder.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Profetens (saws) bortgang",
			date: "År 632 (11 EH)",
			description:
				"Profeten Muhammad (saws) gik bort den 28. Safar 11 AH i Medina. I dagene inden sin bortgang bad han om 'pen og papir' for at diktere et brev til sin umma, men Umar ibn al-Khattab afviste dette med ordene: 'Sygdommen overmander profeten – Allahs Bog er nok for os.' Denne episode er kendt som Hadith al-Qirtas (Penne-og-Papir-hændelsen). Imam Ali (as) forestod Profetens rituelle afvaskning og begravelse. Hans bortgang kastede det muslimske samfund ud i en dyb krise om lederskabet.",
			source:
				"Kitab al-Irshad, Bog 1 – Profetens bortgang og de begivenheder der fulgte er nævnt som kontekst for den uret, der begås mod Imam Ali (as) og dennes rettigheder.",
			showDescription: false,
		},
		{
			icon: "🏛️",
			title: "Saqifa – udnævnelsen af Abu Bakr",
			date: "År 632 (11 EH)",
			description:
				"Samme dag Profeten (saws) gik bort, samledes en gruppe af Ansar og Muhajirun i Saqifat Banu Sa'idah (en overdækket forsamlingsplads i Medina) og valgte Abu Bakr ibn Abi Quhafa som kalif. Imam Ali (as) og Banu Hashim var hverken inviteret eller konsulteret, da de var optaget af Profetens begravelse. Imam Ali (as) fastholdt sin juridiske ret til Imamatet men valgte, af hensyn til islams enhed, ikke at rejse sværdet. I Shia-Islam betragtes Saqifa som det historiske brud med Profetens udtrykkelige anvisning ved Ghadir Khumm.",
			source:
				"Kitab al-Irshad, Bog 1 – Saqifa og de uretmæssige skridt mod Imam Alis rettigheder er behandlet som direkte konsekvens af den ignorering af Ghadir Khumm-erklæringen.",
			showDescription: false,
		},
		{
			icon: "🌹",
			title: "Fatima al-Zahras (as) martyrdom",
			date: "År 632 (11 EH)",
			description:
				"Fatima al-Zahra (as), Profetens elskede datter og Imam Alis (as) hustru, gik bort 75–95 dage efter sin far (saws). Hun kæmpede forgæves for retten til Fadak – det frugtbare landbrug nær Khaybar, som Profeten (saws) havde foræret hende – og holdt en berømt tale i moskeen til Profetens følgesvende for at kræve sin arv. Ifølge Shia-traditionen led hun alvorlige kvæstelser under et angreb på hendes hjem og mistede sit ufødte barn Muhsin. Hun bad om at blive begravet om natten i hemmelighed. Kun 18–28 år gammel.",
			source:
				"Kitab al-Irshad, Bog 1 – Fatima al-Zahras stilling og de uretfærdigheder hun led er omtalt som en del af den bølge af krænkelser af Banu Hashims rettigheder efter Profetens bortgang.",
			showDescription: false,
		},
		{
			icon: "👑",
			title: "Imam Alis (as) califat begynder",
			date: "År 656 (35 EH)",
			description:
				"Efter Uthman ibn Affans mord under et oprør i Medina strømmede muslimer fra hele det islamiske rige til og bønfaldt Imam Ali (as) om at acceptere det overordnede lederskab. Imam Ali (as) accepterede modvilligt. Han gennemførte straks gennemgribende reformer: tilbagekaldte land og midler uretmæssigt uddelt under Uthmans periode, afsatte korrupte guvernører og indførte strengt ens rettigheder for alle muslimer uanset stamme eller rang. Hans kompromisløse retfærdighed satte ham på direkte kollisionskurs med de magtfulde og privilegerede.",
			source:
				"Kitab al-Irshad, Bog 1 – Imam Alis califat, hans principper og hans retfærdige styre er behandlet udførligt i Bog 1 som eksempel på den sande islamiske ledelse.",
			showDescription: false,
		},
		{
			icon: "🐪",
			title: "Jamal-slaget",
			date: "År 656 (36 EH)",
			description:
				"Talha ibn Ubaydullah og Zubayr ibn al-Awwam – begge tidlige sahaba der havde svoret troskab til Imam Ali (as) – brækkede troskabseden og allierede sig med Profetens hustru Aisha mod ham. De marcherede mod Basra med en hær. Imam Ali (as) sendte en påmindelse til Zubayr om Profetens profeti: at han en dag ville kæmpe mod Ali uretfærdigt. Zubayr trak sig, men Talha og tusinder faldt i kampen, opkaldt efter Aishas kamel (jamal). Imam Ali (as) behandlede de besejrede med nåde og sendte Aisha hjem til Medina med fuld æreseskorte.",
			source:
				"Kitab al-Irshad, Bog 1 – Jamal-krigen er beskrevet i sit eget kapitel med de forudgående hændelser, kampens forløb og Imam Alis ædle behandling af de besejrede.",
			showDescription: false,
		},
		{
			icon: "⚔️",
			title: "Siffin-krigen",
			date: "År 657 (37 EH)",
			description:
				"Imam Ali (as) og Muawiyah ibn Abi Sufyan – Syriens magtfulde guvernør og hævner for Uthman – konfronterede hinanden med store hære ved floden Eufrat i Siffin. Imam Alis hær var ved at vende kampen, da Muawiyahs strateg Amr ibn al-As befalede soldaterne at hæfte Quran-sider på spydspidserne og råbe om voldgift. En gruppe i Imam Alis hær tvang ham til at indstille kampen. Under den efterfølgende voldgift manipulerede Amr ibn al-As den naive Abu Musa al-Ashari til at 'afsætte' Imam Ali, mens Amr udråbte Muawiyah som legitim leder.",
			source:
				"Kitab al-Irshad, Bog 1 – Siffin-krigen er behandlet i sit eget kapitel med udførlig beskrivelse af Muawiyahs list, voldgiftsaftalen og dens konsekvenser.",
			showDescription: false,
		},
		{
			icon: "⚔️",
			title: "Nahrawan-krigen",
			date: "År 658 (38 EH)",
			description:
				"Efter Siffin-voldgiften erklærede Khawarij-gruppen ('de der gik ud') – ca. 12.000 ekstremisters der havde tvunget voldgiften igennem – at voldgift var islamisk forbudt og at Imam Ali (as) var blevet kafir. De terroriserede den irakiske civilbefolkning og slagtede uskyldige, herunder en gravid kvinde. Imam Ali (as) forsøgte gentagne gange dialog og advarsel, men da blodsudgydelsen fortsatte, marcherede han mod dem ved Nahrawan-kanalen. Næsten hele Khawarij-styrken på over 4.000 mand faldt; kun få overlevede og spredte frøet til fremtidige ekstremistbevægelser.",
			source:
				"Kitab al-Irshad, Bog 1 – Nahrawan-krigen er behandlet i sit eget kapitel som den nødvendige konsekvens af Khawarij's religiøse ekstremisme og vold mod civile.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Alis (as) martyrdom",
			date: "År 661 (40 EH)",
			description:
				"Den 19. Ramadan 40 AH slog Abd al-Rahman ibn Muljam al-Muradi – en Khawarij-tilhænger – Imam Ali (as) med et forgiftet sværd i Kufas store moske, mens han bøjede sig ned i fagr-bønnen (morgenbønnen). Imam Ali (as) gik bort den 21. Ramadan og sagde på sit dødsleje til sin søn Imam Hasan (as) om morderen: 'Giv ham mad og vand – og hvis jeg overlever, er det min ret at tilgive; dør jeg, så slå ham kun én gang og lad hans krop forblive uvanæret.' Han er begravet i Najaf, Irak.",
			source:
				"Kitab al-Irshad, Bog 1, slutkapitel – Imam Alis martyrdom og hans ord på dødsledet er behandlet med stor detaljerigdom og afslutter Bog 1.",
			showDescription: false,
		},
		{
			icon: "📜",
			title: "Imam Hasans (as) fredsaftale med Muawiyah",
			date: "År 661 (41 EH)",
			description:
				"Efter Imam Alis martyrdom overtog Imam Hasan al-Mujtaba (as) Imamatet. Imam Alis hær var spredt og demoraliseret, og Muawiyahs store hær stod klar til krig. Imam Hasan (as) indgik en betinget fredsaftale med Muawiyah. Betingelserne var bl.a.: at Muawiyah ville regere strengt efter Quran og Sunna; at han ikke ville udpege en efterfølger men overlade dette til shura; og at Shia og Imam Alis tilhængere skulle beskyttes. Muawiyah overtrådte samstemmigt alle betingelser fra starten og brugte freden til at cementere Banu Umayyas magt.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit om Imam Hasan al-Mujtaba (as) – fredsaftalen og dens betingelser er beskrevet i detaljer samt Muawiyahs systematiske overtrædelse af dem.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Hasans (as) martyrdom",
			date: "År 670 (50 EH)",
			description:
				"Imam Hasan (as) blev forgiftet af sin hustru Ja'da bint al-Ash'ath ibn Qays, som Muawiyah angiveligt bestukket med løfte om store rigdomme og ægteskab med hans søn Yazid – et løfte Muawiyah aldrig indfriede. Imam Hasan (as) gik bort den 28. Safar 50 AH i Medina. Han ønskede at blive begravet ved siden af sin bedstefar Profeten (saws) i al-Baqi', men Banu Umayyas folk spærrede vejen og affyrede endda pile mod den begravelsesprocession. Han er begravet på Jannatul-Baqi kirkegården i Medina.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit om Imam Hasan al-Mujtaba (as) – forgiftningens omstændigheder og Muawiyahs bagmandskab er beskrevet.",
			showDescription: false,
		},
		{
			icon: "👑",
			title: "Muawiyahs død og Yazids tronbestigelse",
			date: "År 680 (60 EH)",
			description:
				"Muawiyah ibn Abi Sufyan gik bort i Rajab 60 AH og brød dermed sin aftale med Imam Hasan (as) ved at udpege sin søn Yazid ibn Muawiyah som efterfølger – den første arvelige magtoverdragelse i det islamiske kalifat. Yazid var berygtet for åbenlys synd, drikkeri og vanrøgt af islamiske normer. Han pålagde straks Medinas guvernør al-Walid ibn Utba at kræve Imam Husayns (as) troskabsed eller sende hans hoved. Imam Husayn (as) svarede: 'En som mig bøjer sig ikke for en som ham.'",
			source:
				"Kitab al-Irshad, Bog 2, afsnit om Imam Husayn al-Shahid (as) – Muawiyahs bortgang og Yazids magtovertagelse er den direkte kontekst for Karbala-begivenhederne.",
			showDescription: false,
		},
		{
			icon: "🛤️",
			title: "Imam Husayns (as) rejse mod Karbala",
			date: "År 680 (60 EH)",
			description:
				"For at undgå tvungen troskabsed til Yazid rejste Imam Husayn (as) fra Medina til Mekka i Rajab 60 AH. Fra Mekka modtog han over 12.000 breve fra Kufas borgere, der opfordrede ham til at komme og lede dem. Han sendte sin fætter Muslim ibn Aqil til Kufa som repræsentant; Muslim rapporterede bred opbakning. Men da Muslim åbent rejste sig, trak Kufanerne sig under pres fra den nye brutale guvernør Ubaydullah ibn Ziyad, og Muslim ibn Aqil blev forrådt og henrettet. Imam Husayn (as) forlod Mekka den 8. Dhul-Hijjah 60 AH med en lille karavane af familiemedlemmer og trofaste følgere – vidende om faren men uvillig til at bøje sig for uretfærdighed.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit om Imam Husayn (as) – Imam Husayns korrespondance med Kufanerne, Muslim ibn Aqils mission og Imam Husayns afrejse er beskrevet i detaljer.",
			showDescription: false,
		},
		{
			icon: "🏴",
			title: "Karbala-tragedien (Ashura)",
			date: "År 680 (61 EH)",
			description:
				"Den 10. Muharram (Ashura) 61 AH i Karbala (Irak) stod Imam Husayn (as) med ca. 72 kampklare mænd og en gruppe kvinder og børn over for en Umayyadisk hær på anslåede 30.000 mænd under Umar ibn Sa'ds kommando. Imam Husayn (as) holdt appellerende taler for at vække samvittighed i hæren; nogle vendte sig om, men de fleste forblev. Imam Husayns (as) halvbror Abbas (as) faldt da han forsøgte at hente vand til de vandmangel-ramte børn. Hans søn Ali al-Akbar faldt kæmpende. Til sidst stod Imam Husayn (as) alene og kæmpede, til han modtog dødsstødet. Familien – kvinder og børn – blev taget til fange og udstillet i Kufas og Damaskus' gader. Imam Husayns (as) martyrdom er det centrale øjeblik i Shia-spiritualitet og mindes hvert år under Muharram.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit om Imam Husayn al-Shahid (as) – Karbala-forløbet er én af de mest detaljerede beretninger i bogen, fra ankomsten til Karbala til martyrdommens dag og fangernes rejse.",
			showDescription: false,
		},
		{
			icon: "📿",
			title: "Imamat af Imam Zayn al-Abidin (as)",
			date: "År 680 (61 EH)",
			description:
				"Imam Ali ibn al-Husayn (as) – kaldet Zayn al-Abidin (Fromhedens Prydelse) og al-Sajjad (Den der kaster sig ned i bøn) – overlevede Karbala-massakren, da han lå syg og ikke kunne kæmpe. Han ledede familien og de overlevende fanger til Kufa og Damaskus, og hans taler i Yazids palads afslørede Umayyadernes brutalitet for offentligheden. Hans mest varige arv er Sahifa al-Sajjadiyyah – en samling af dybe bønner og åndelige lærdomme kaldt 'Profetfamiliernes Salmer' – som er et af de vigtigste Shia-teologiske skrifter.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 3: Imam Ali ibn al-Husayn Zayn al-Abidin (as).",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Zayn al-Abidins (as) martyrdom",
			date: "År 713 (95 EH)",
			description:
				"Imam Zayn al-Abidin (as) gik bort den 25. Muharram 95 AH, ca. 57 år gammel, i Medina. Ifølge Shia-traditionen blev han forgiftet af Umayyadekaliffen al-Walid ibn Abd al-Malik. Han er begravet på Jannatul-Baqi kirkegården i Medina ved siden af sin onkel Imam Hasan (as). Hans 34 år lange Imamat var kendetegnet ved tilbageholdelse, dyb hengivenhed og en styrkelse af den shiamuslimske spiritualitet under Umayyadisk undertrykkelse.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 3: Imam Zayn al-Abidin (as).",
			showDescription: false,
		},
		{
			icon: "📖",
			title: "Imamat af Imam Muhammad al-Baqir (as)",
			date: "År 713 (95 EH)",
			description:
				"Imam Muhammad ibn Ali al-Baqir (as) – 'al-Baqir' betyder 'den der klipper viden åben' – brugte sin Imamperiode til at etablere en videnskabelig skole i Medina, der uddannede hundredvis af islamiske lærde. Han lagde systematiske grundlag for islamisk retslære (fiqh), teologi (kalam) og koranfortolkning (tafsir) ud fra Profetfamiliens særlige autoritet og viden. Han var vidne til Karbala som 3–4-årig og bar dette med sig hele livet.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 4: Imam Muhammad al-Baqir (as).",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Muhammad al-Baqirs (as) martyrdom",
			date: "År 732 (114 EH)",
			description:
				"Imam al-Baqir (as) gik bort den 7. Dhul-Hijjah 114 AH, ca. 57 år gammel, i Medina. Ifølge Shia-traditionen blev han forgiftet af Umayyadekaliffen Hisham ibn Abd al-Malik, der frygtede hans voksende videnskabelige autoritet og Shia-befolkningens hengivenhed til ham. Han er begravet på Jannatul-Baqi kirkegården i Medina.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 4: Imam al-Baqir (as).",
			showDescription: false,
		},
		{
			icon: "🧠",
			title: "Imamat af Imam Ja'far al-Sadiq (as)",
			date: "År 732 (114 EH)",
			description:
				"Imam Ja'far ibn Muhammad al-Sadiq (as) – 'al-Sadiq' betyder 'den Sandfærdige' – ledede en enestående periode med relativ intellektuel frihed i overgangen fra Umayyadernes fald til Abbasidernes fremkomst. Hans skole i Medina uddannede over 4.000 studerende, herunder Abu Hanifa (grundlæggeren af Hanafi-retssskolen) og Malik ibn Anas (grundlæggeren af Maliki-retssskolen). Det Jafaritiske retssystem (fiqh Jafari) bærer hans navn og er Shia-Islams retsskole. Han bidrog også til kemi, astronomi og medicin.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 5: Imam Ja'far al-Sadiq (as).",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Ja'far al-Sadiqs (as) martyrdom",
			date: "År 765 (148 EH)",
			description:
				"Imam al-Sadiq (as) gik bort den 25. Shawwal 148 AH, ca. 65 år gammel, i Medina. Han blev forgiftet af den Abbasidiske kalif al-Mansur, der frygtede hans enorme indflydelse over den muslimske verden. Inden sin bortgang angav han i sit testamente fem navne som mulige efterfølgere for at forvirre al-Mansurs agenter og beskytte sin reelle efterfølger, Imam al-Kazim (as). Han er begravet på Jannatul-Baqi kirkegården i Medina.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 5: Imam al-Sadiq (as).",
			showDescription: false,
		},
		{
			icon: "⛓️",
			title: "Imamat af Imam Musa al-Kazim (as)",
			date: "År 765 (148 EH)",
			description:
				"Imam Musa ibn Ja'far al-Kazim (as) – 'al-Kazim' betyder 'den der behersker sin vrede' – stod over for ekstrem Abbasidisk undertrykkelse og tilbragte lange perioder i fængsler i Bagdad, primært under kalif Harun al-Rashid. Trods fængslingen fortsatte hans åndelige og videnskabelige indflydelse. Mange fangevogtere omvendte sig til Shia-Islam under hans ophold i fængslet. Hans standhaftighed, gavmildhed og tavshed over for sine fjender er legendarisk i islamisk tradition.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 6: Imam Musa al-Kazim (as).",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Musa al-Kazims (as) martyrdom",
			date: "År 799 (183 EH)",
			description:
				"Imam al-Kazim (as) gik bort den 25. Rajab 183 AH, ca. 55 år gammel, i Harun al-Rashids fængsel i Bagdad (Sindhi ibn Shahaks fængsel). Ifølge Shia-traditionen blev han forgiftet på Harun al-Rashids ordre. Hans lig blev stillet til offentlig skue på broen over Tigris for at modvirke optøjer. Han er begravet i Kazimain (Kadhimiya), Irak – et af Shias vigtigste pilgrimsmål.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 6: Imam al-Kazim (as).",
			showDescription: false,
		},
		{
			icon: "👑",
			title: "Imamat af Imam Ali al-Ridha (as)",
			date: "År 799 (183 EH)",
			description:
				"Imam Ali ibn Musa al-Ridha (as) – 'al-Ridha' betyder 'den Velbehagede (af Allah)' – levede i en periode med skiftende Abbasidisk politik. Kalif al-Ma'mun udnævnte ham til tronfølger (wali al-ahd) for at inddæmme Shia-opstandene og tilføje Imam Alis prestige til sit eget styre. Imam al-Ridha (as) accepterede under tvang med ord som: 'Jeg accepterer dette, vel vidende at det ikke vil gå i opfyldelse.' Hans offentlige disputationer med lærde fra alle religioner ved al-Ma'muns hof befæstede hans ry som den mest vidende mand i sin tid.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 7: Imam Ali al-Ridha (as).",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Ali al-Ridhas (as) martyrdom",
			date: "År 818 (203 EH)",
			description:
				"Imam al-Ridha (as) gik bort den 29. Safar 203 AH, ca. 55 år gammel, i Tus (nutidens Mashhad) i Khorasan (Iran). Ifølge Shia-traditionen blev han forgiftet af kalif al-Ma'mun med druer, da al-Ma'mun frygtede Imamens voksende popularitet og politiske tyngde. Hans grav i Mashhad er i dag et af verdens vigtigste Shia-pilegrimsmål med millioner af besøgende om året.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 7: Imam al-Ridha (as).",
			showDescription: false,
		},
		{
			icon: "🧒",
			title: "Imamat af Imam Muhammad al-Taqi (as)",
			date: "År 818 (203 EH)",
			description:
				"Imam Muhammad ibn Ali al-Taqi (as) – også kaldet al-Jawad ('den Gavmilde') – overtog Imamatet i en alder af ca. 8–9 år, hvilket fremprovokerede kritik om hans ungdom. Kalif al-Ma'mun søgte at inddæmme hans indflydelse ved at gifte ham med sin datter Umm al-Fadl og holde ham nær hofet i Bagdad. Imam al-Taqi (as) imponerede tidens lærde med sin overlegne viden fra en meget ung alder og udvidede Shia-teologi og retsvidenskab markant på trods af sin korte levetid.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 8: Imam Muhammad al-Taqi (as).",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Muhammad al-Taqis (as) martyrdom",
			date: "År 835 (220 EH)",
			description:
				"Imam al-Taqi (as) gik bort den 30. Dhul-Qa'dah 220 AH, kun ca. 25 år gammel, i Bagdad. Ifølge Shia-traditionen blev han forgiftet af sin hustru Umm al-Fadl – datter af den afdøde kalif al-Ma'mun – på opfordring fra den siddende kalif al-Mu'tasim. Han er begravet i Kazimain (Kadhimiya) ved siden af sin bedstefar Imam Musa al-Kazim (as) i Irak.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 8: Imam al-Taqi (as).",
			showDescription: false,
		},
		{
			icon: "📚",
			title: "Imamat af Imam Ali al-Naqi (as)",
			date: "År 835 (220 EH)",
			description:
				"Imam Ali ibn Muhammad al-Naqi (as) – også kaldet al-Hadi ('Vejviseren') – var Imam nr. 10 og levede under de Abbasidiske kalifer al-Mutawakkil, al-Muntasir, al-Musta'in og al-Mu'tazz. Al-Mutawakkil tvang ham til at flytte permanent fra Medina til Samarra (også kaldet Askar-al-Mutawakkil), Irak, og holdt ham under konstant militær overvågning. Han kæmpede aktivt mod Mu'tazila-teologien og styrkede den Shia-teologiske tradition. Hans brev til al-Mutawakkil om islams principper er historisk berømt.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 9: Imam Ali al-Naqi al-Hadi (as).",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Ali al-Naqis (as) martyrdom",
			date: "År 868 (254 EH)",
			description:
				"Imam al-Naqi (as) gik bort den 3. Rajab 254 AH, ca. 41 år gammel, i Samarra. Ifølge Shia-traditionen blev han forgiftet af Abbasidekaliffen al-Mu'tazz. Han er begravet i Samarra i den berømte Al-Askariyya-helligdom (Askari-moskeen) – et af de vigtigste Shia-pilgrimsmål, kendt for sine forgyldte kuplerne, der desværre blev ødelagt ved terrorangreb i 2006 og 2007.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 9: Imam al-Naqi (as).",
			showDescription: false,
		},
		{
			icon: "🕌",
			title: "Imamat af Imam Hasan al-Askari (as)",
			date: "År 868 (254 EH)",
			description:
				"Imam Hasan ibn Ali al-Askari (as) – Imam nr. 11 – levede under de hårdeste begrænsninger af alle Imamerne og var næsten totalt isoleret fra sit Shia-samfund af det Abbasidiske sikkerhedsapparat i Samarra. Trods dette formåede han at kommunikere med sine tilhængere via betroede mellemmænd. Han forberedte omhyggeligt det Shia-samfund på sin søns (Imam al-Mahdis) eksistens og skjulte tilstedeværelse for at forebygge chokket ved hans Ghaybah. Hans korte Imamat på kun 6 år er afgørende for forståelsen af den 12. Imams skjulthed.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 10: Imam Hasan al-Askari (as).",
			showDescription: false,
		},
		{
			icon: "🍼",
			title: "Fødslen af Imam al-Mahdi (as)",
			date: "År 869 (255 EH)",
			description:
				"Den 12. Imam, Muhammad ibn al-Hasan al-Mahdi (as), blev født den 15. Sha'ban 255 AH i Samarra. Hans fødsel var holdt dybt hemmelig af sin far Imam al-Askari (as), da Abbasiderne aktivt søgte efter ham – de frygtede profetien om den 12. Imam, der ville genoprette retfærdighed på Dommedagstærsklen. Kun et meget lille betroet inderkreds vidste om hans eksistens. Hans mor beskrives i overleverede kilder som Narjis Khatun, af byzantinsk kongelig afstamning.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 11: Imam Muhammad al-Mahdi (as) – fødslen og de omstændigheder der omgav dens hemmeligholdelse.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Hasan al-Askaris (as) martyrdom",
			date: "År 874 (260 EH)",
			description:
				"Imam al-Askari (as) gik bort den 8. Rabi al-Awwal 260 AH, kun ca. 28 år gammel, i Samarra. Ifølge Shia-traditionen blev han forgiftet af Abbasidekaliffen al-Mu'tamid. Han er begravet i Al-Askariyya-helligdommen i Samarra ved siden af sin far Imam al-Naqi (as). Hans korte liv og Imamat er bemærkelsesværdigt for den omhu han lagde i at sikre sin søns (Imam al-Mahdis) eksistens var bekendt nok til at overleve, men hemmelig nok til at undgå Abbasidernes forfølgelse.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 10: Imam Hasan al-Askari (as).",
			showDescription: false,
		},
		{
			icon: "🌙",
			title: "Den lille skjulthed (Ghaybat al-Sughra)",
			date: "År 874 (260 EH)",
			description:
				"Umiddelbart efter Imam al-Askaris martyrdom i 260 AH trådte Imam al-Mahdi (as) ind i den lille skjulthed, der varede ca. 69 år (260–329 AH). I denne periode kommunikerede han med sit samfund via fire successive repræsentanter (al-nuwwab al-arba'a): Uthman ibn Sa'id al-Askari, hans søn Muhammad ibn Uthman al-Askari, Husayn ibn Ruh al-Nawbakhti og endelig Ali ibn Muhammad al-Samarri. Disse modtog og besvarede breve og spørgsmål på Imamens vegne – en periode med betinget men reel tilgængelighed.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 11: Imam al-Mahdi (as) – den lille skjulthed og Imamens fire repræsentanter er beskrevet i detaljer.",
			showDescription: false,
		},
		{
			icon: "🔒",
			title: "Den store skjulthed (Ghaybat al-Kubra)",
			date: "År 941 (329 EH)",
			description:
				"Da den fjerde nawwab Ali ibn Muhammad al-Samarri lå for døden i 329 AH, modtog han et brev fra Imam al-Mahdi (as): 'I Allahs navn. O Ali ibn Muhammad al-Samarri! ... Du dør om seks dage. Forbered din sag. Udpeg ingen til at efterfølge dig, for den fulde skjulthed begynder nu, og der vil ingen manifestation komme, undtagen med Allahs tilladelse.' Siden da har Imam al-Mahdi (as) (al-Qa'im, den Ventede) levet skjult og afventer sin tilbagevenden for at fylde verden med retfærdighed, efter den er fyldt med uretfærdighed og undertrykkelse.",
			source:
				"Kitab al-Irshad, Bog 2, afsnit 11: Imam al-Mahdi (as) – den store skjulthed, dens begrundelse og betingelserne for Imamens tilbagevenden er bogens afslutning.",
			showDescription: false,
		},
	];
}
