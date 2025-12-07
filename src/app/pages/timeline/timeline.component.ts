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
				"Profeten Muhammad (saws) blev født i Mekka, en begivenhed, der markerer starten på hans liv og profetiske mission.",
			showDescription: false,
		},
		{
			icon: "📜",
			title: "Den første åbenbaring",
			date: "År 610 (13 FH)",
			description:
				"Profeten Muhammad (saws) modtog sin første åbenbaring fra Allah via ærkeenglen Jibril (Gabriel), hvilket markerer begyndelsen af islam.",
			showDescription: false,
		},
		{
			icon: "🚶‍♂️",
			title: "Hijra til Medina",
			date: "År 622 (1 EH)",
			description:
				"Profeten Muhammad (saws) og hans følgere migrerede fra Mekka til Medina, en begivenhed der markerer starten på den islamiske kalender.",
			showDescription: false,
		},
		{
			icon: "⚔️",
			title: "Badr-krigen",
			date: "År 624 (2 EH)",
			description:
				"Den første store kamp mellem muslimerne og Quraysh-stammen, hvor muslimerne opnåede en sejr.",
			showDescription: false,
		},
		{
			icon: "🛡️",
			title: "Uhud-krigen",
			date: "År 625 (3 EH)",
			description:
				"Muslimerne mødte Quraysh-stammen igen i Uhud-bjerget, men led et tilbageslag.",
			showDescription: false,
		},
		{
			icon: "🤝",
			title: "Hudaybiyyah-traktaten",
			date: "År 628 (6 EH)",
			description:
				"En fredsaftale mellem muslimerne og Quraysh, som gav muslimerne adgang til Mekka til pilgrimsfærd.",
			showDescription: false,
		},
		{
			icon: "🏳️",
			title: "Erobringen af Mekka",
			date: "År 630 (8 EH)",
			description:
				"Muslimerne indtog Mekka uden blodsudgydelse under ledelse af Profeten Muhammad (saws).",
			showDescription: false,
		},
		{
			icon: "📢",
			title: "Afskedspilgrimsfærden og Ghadir Khumm",
			date: "År 632 (10 EH)",
			description:
				"Profeten Muhammad (saws) udnævnte Imam Ali (as) som sin efterfølger ved Ghadir Khumm under sin sidste pilgrimsfærd.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Profetens (saws) død",
			date: "År 632 (11 EH)",
			description:
				"Profeten Muhammad (saws) gik bort i Medina, hvilket efterlod en stor sorg blandt muslimerne.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Fatima al-Zahras (as) martyrdom",
			date: "År 632 (11 EH)",
			description:
				"Efter Profetens død blev Fatima al-Zahra (as) udsat for uretfærdigheder og opnåede martyrdom.",
			showDescription: false,
		},
		{
			icon: "🐪",
			title: "Jamal-slaget",
			date: "År 656 (36 EH)",
			description: "Imam Ali (as) kæmpede mod oprørere ledet af Aisha i Basra.",
			showDescription: false,
		},
		{
			icon: "⚔️",
			title: "Siffin-krigen",
			date: "År 657 (37 EH)",
			description:
				"En stor kamp mellem Imam Ali (as) og Muawiyah fandt sted ved Siffin. Krigen endte med voldgift efter Muawiyahs list med Quran'er på spyd.",
			showDescription: false,
		},
		{
			icon: "⚔️",
			title: "Nahrawan-krigen",
			date: "År 658 (38 EH)",
			description:
				"Imam Ali (as) blev nødt til at bekæmpe Khawarij-gruppen (de, der brød ud efter Siffin) ved Nahrawan.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Alis (as) martyrdom",
			date: "År 661 (40 EH)",
			description: "Imam Ali (as) blev myrdet, mens han bad i moskeen i Kufa.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Hasans (as) martyrdom",
			date: "År 670 (50 EH)",
			description:
				"Imam Hasan (as) blev forgiftet og martyr under Muawiyas styre.",
			showDescription: false,
		},
		{
			icon: "🏴",
			title: "Karbala-tragedien",
			date: "År 680 (61 EH)",
			description:
				"Imam Husayn (as) og hans ledsagere blev martyrer i Karbala af Yazids styrker.",
			showDescription: false,
		},
		{
			icon: "📿",
			title: "Imamat af Imam Zayn al-Abidin (as)",
			date: "År 680 (61 EH)",
			description:
				"Efter Karbala overlevede Imam Zayn al-Abidin (as) og overtog Imamatet for at bevare islam.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Zayn al-Abidins (as) martyrdom",
			date: "År 713 (95 EH)",
			description: "Imam Zayn al-Abidin (as) blev forgiftet af Umayyaderne.",
			showDescription: false,
		},
		{
			icon: "📖",
			title: "Imamat af Imam Muhammad al-Baqir (as)",
			date: "År 713 (95 EH)",
			description:
				"Imam Baqir (as) fokuserede på at sprede viden og undervise i islamiske principper.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Muhammad al-Baqirs (as) martyrdom",
			date: "År 732 (114 EH)",
			description: "Imam Baqir (as) blev forgiftet af Umayyaderne.",
			showDescription: false,
		},
		{
			icon: "🧠",
			title: "Imamat af Imam Ja'far al-Sadiq (as)",
			date: "År 732 (114 EH)",
			description:
				"Imam Sadiq (as) ledede en guldalder for islamisk læring og uddannelse.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Ja'far al-Sadiqs (as) martyrdom",
			date: "År 765 (148 EH)",
			description:
				"Imam Sadiq (as) blev forgiftet af Abbasidekaliffen al-Mansur.",
			showDescription: false,
		},
		{
			icon: "⛓️",
			title: "Imamat af Imam Musa al-Kazim (as)",
			date: "År 765 (148 EH)",
			description:
				"Imam Kazim (as) blev fængslet i lang tid af Abbasiderne for sin rolle som leder.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Musa al-Kazims (as) martyrdom",
			date: "År 799 (183 EH)",
			description: "Imam Kazim (as) blev forgiftet i Abbasidernes fængsel.",
			showDescription: false,
		},
		{
			icon: "👑",
			title: "Imamat af Imam Ali al-Ridha (as)",
			date: "År 799 (183 EH)",
			description:
				"Imam Ridha (as) blev udnævnt som tronfølger af Abbasidekaliffen al-Ma'mun.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Ali al-Ridhas (as) martyrdom",
			date: "År 818 (203 EH)",
			description: "Imam Ridha (as) blev forgiftet af kaliffen al-Ma'mun.",
			showDescription: false,
		},
		{
			icon: "🧒",
			title: "Imamat af Imam Muhammad al-Taqi (as)",
			date: "År 818 (203 EH)",
			description:
				"Imam al-Taqi (as) blev den yngste Imam og overtog ansvaret som leder i en ung alder.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Muhammad al-Taqis (as) martyrdom",
			date: "År 835 (220 EH)",
			description:
				"Imam al-Taqi (as) blev forgiftet af Abbasidekaliffen al-Mu'tasim.",
			showDescription: false,
		},
		{
			icon: "📚",
			title: "Imamat af Imam Ali al-Naqi (as)",
			date: "År 835 (220 EH)",
			description:
				"Imam Ali al-Naqi (as), også kendt som al-Hadi, blev den 10. Imam. Han levede under hårdt pres fra Abbasiderne og blev tvunget til at bo i Samarra.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Ali al-Naqis (as) martyrdom",
			date: "År 868 (254 EH)",
			description:
				"Imam Ali al-Naqi (as) blev forgiftet af Abbasidekaliffen al-Mu'tazz i Samarra.",
			showDescription: false,
		},
		{
			icon: "🕌",
			title: "Imamat af Imam Hasan al-Askari (as)",
			date: "År 868 (254 EH)",
			description:
				"Imam Hasan al-Askari (as), den 11. Imam, levede under streng overvågning og begrænsning i Samarra.",
			showDescription: false,
		},
		{
			icon: "🍼",
			title: "Fødslen af Imam al-Mahdi (as)",
			date: "År 869 (255 EH)",
			description:
				"Den 12. Imam, Muhammad al-Mahdi (as), blev født i Samarra. Hans fødsel blev holdt hemmelig på grund af forfølgelse fra Abbasiderne.",
			showDescription: false,
		},
		{
			icon: "🪦",
			title: "Imam Hasan al-Askaris (as) martyrdom",
			date: "År 874 (260 EH)",
			description:
				"Imam Hasan al-Askari (as) blev forgiftet af Abbasidekaliffen al-Mu'tamid i Samarra.",
			showDescription: false,
		},
		{
			icon: "🌙",
			title: "Den lille skjulthed (Ghaybat al-Sughra)",
			date: "År 874 (260 EH)",
			description:
				"Efter Imam al-Askaris martyrdom begyndte Imam al-Mahdis (as) lille skjulthed, hvor han kommunikerede gennem fire særlige repræsentanter (nawwab).",
			showDescription: false,
		},
		{
			icon: "🔒",
			title: "Den store skjulthed (Ghaybat al-Kubra)",
			date: "År 941 (329 EH)",
			description:
				"Efter den fjerde repræsentants død begyndte den store skjulthed. Imam al-Mahdi (as) vil vende tilbage som al-Qa'im for at fylde jorden med retfærdighed.",
			showDescription: false,
		},
	];
}
