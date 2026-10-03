/*
  CONTENT FILE · edit this to update the class. The site rebuilds itself from it.
  units:  [{ title, blocks: [{ title, text?, multi?, tip?, items: [[rule, explanation, [sub-points]?]] }] }]
  maps:   flow { steps: [{ q, out: [label, text]?, go }], end } · stack { layers: [{ label, text }] } · compare { cols, rows }
  cards:  [[front, back]]
  quiz:   [{ q, o: [options], a: index of correct option (0 = first), e: explanation }]  (options shuffle on screen)
  drills: [{ title, prompt, cats: [choices], items: [[statement, correct choice, why]] }]
  hypos:  [{ title, facts, ask, answer: [points] }]
*/
window.COURSES = window.COURSES || {};
window.COURSES["asylum"] = {
 "id": "asylum",
 "title": "Asylum Law",
 "t1": "Asylum",
 "t2": "Law",
 "hue": "#3dff5a",
 "kicker": "Asylum Law · Ch. 1–5 & 12 · Days 1–11",
 "sub": "Refugee definition, standards of proof, process and rights, persecution, and the Convention Against Torture.",
 "exam": {
  "label": "Midterm · 30%",
  "when": "Mon 10.19",
  "date": "2026-10-19"
 },
 "cover": "Ch. 1–4, Ch. 5 (CAT), and Ch. 12",
 "units": [
  {
   "title": "Origins of Refugee Law",
   "overview": [
    "This unit is the starting point for the course. It asks where refugee protection came from and what international law requires a state to do for a person who flees persecution. The answer has two parts: asylum (a state giving a refugee formal legal status) and non-refoulement (a state's obligation not to send a refugee back to a place where life or freedom is threatened).",
    "The unit traces how those ideas developed: from ancient traditions of protecting the stranger, through the League of Nations bodies and the IRO (International Refugee Organization), to UNHCR (the United Nations High Commissioner for Refugees) in 1951. Over the same period the idea of who counts as a refugee shifted from people who lacked any government's legal protection, to groups caught in a crisis, to individuals who show a personal fear of persecution. That last model is the one in the 1951 Convention and in U.S. law today.",
    "The unit ends with the two problems that run through the rest of the course. First, a refugee has a right to seek asylum, but no state has to grant it; the firm duty is only the duty not to send the refugee back. Second, asylum alone does not end exile, so UNHCR looks for durable solutions: going home, staying in the host country, or moving to a third country.",
    "On the exam this unit supplies vocabulary and framing. Keep asylum and non-refoulement separate: a state can refuse asylum without breaking any rule, but it cannot return a refugee to a place where life or freedom is threatened."
   ],
   "check": {
    "status": "complete",
    "note": "Built from the outline Part I, the Ch. 1 slides, Day 1 notes, and the Ch. 1 casebook text (pp. 3-6 assigned reading, plus Sections D, E, and G, which the slides cover). The Day 1 class notes are short and one line conflicts with the slides and casebook (see the tip in 'Asylum and Non-Refoulement'). One block is thin: four 2025 executive orders on the 'Note 5' slide are given by title only in every source."
   },
   "blocks": [
    {
     "title": "Three Bodies of Law",
     "explain": [
      "Refugee protection sits inside a larger group of international legal fields. The slides and casebook name three, and each answers a different question about people who flee.",
      "The casebook asks you to think of them as three overlapping circles of protection for victims of conflict, persecution, and oppression. Each has its own treaty that the U.S. has signed and ratified, and the U.S. has passed legislation to carry out parts of them."
     ],
     "items": [
      [
       "International refugee law",
       "Concerns State obligations to individuals forcibly displaced across borders due to threats to their life or freedom. Its central treaty is the 1951 Convention relating to the Status of Refugees, together with its 1967 Protocol. The focus is on the person who has crossed a border and what the receiving state owes that person."
      ],
      [
       "International humanitarian law",
       "Also called the law of armed conflict. It governs the conduct of war and protects wounded combatants, prisoners of war, and civilians from the brutality of war. The treaty on the slides is the 1949 Geneva Convention relative to the Protection of Civilian Persons in Time of War. It applies only during armed conflict."
      ],
      [
       "International human rights law",
       "Applies in war or peace. It affirms and protects the dignity, integrity, equality, liberty, and social wellbeing of all individuals. The treaty on the slides from this field is the 1984 Convention Against Torture (CAT), which later becomes a separate form of protection from removal in U.S. law."
      ],
      [
       "How they connect to U.S. asylum law",
       "The casebook explains that U.S. asylum law builds on all three traditions. The human rights violations that make people flee may also be war crimes or crimes against humanity. Domestic U.S. law decides which individuals may find refuge in the U.S.; international refugee law, through UNHCR, has the broader goal of protecting everyone who has lost the protection of their own state."
      ]
     ],
     "tip": "Match the field to the treaty: refugee law = 1951 Convention and 1967 Protocol; humanitarian law = 1949 Geneva Convention (war only); human rights law = 1984 CAT (war or peace).",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Asylum and Non-Refoulement",
     "explain": [
      "The slides and casebook call asylum and non-refoulement the two most fundamental principles of modern refugee law. They are different kinds of rules. Asylum is something a state may give; non-refoulement is something a state must not do.",
      "This difference explains most of the course. A state can lawfully decline to give a refugee permanent status, yet it still may not send that refugee to a country where the refugee's life or freedom would be threatened."
     ],
     "items": [
      [
       "Asylum",
       "The provision by states of formal legal status to refugees. The casebook defines refugees here as individuals with a well-founded fear of persecution on one of five grounds. Contemporary asylum is discretionary: it is not an entitlement that every refugee enjoys, and a state chooses whether to grant it."
      ],
      [
       "Non-refoulement",
       "An absolute obligation on state parties not to return refugees to countries in which their lives or freedom would be threatened. The casebook describes it as a jus cogens (peremptory) norm, meaning a rule of international law from which states may not depart. The word comes from the French refouler, to drive back or repel; in European immigration practice it meant summary turning back at the frontier, which differs from expulsion or deportation of someone lawfully inside the country."
      ],
      [
       "Right to seek vs. right to receive",
       "Goodwin-Gill (excerpted in the casebook) separates the sovereign right of a state to grant asylum, which other states must respect as a non-hostile act, from an individual right to receive asylum. No universal treaty recognizes the individual right. States do have a duty not to obstruct the right to seek asylum, which includes giving access to an asylum procedure; the casebook notes this calls into question non-arrival and non-admission policies."
      ],
      [
       "Why they are linked",
       "Goodwin-Gill describes refugee status, non-refoulement, and asylum as links in one chain running from flight to a durable solution. Non-refoulement keeps the refugee safe in the short term; asylum adds legal status; a durable solution ends the refugee's exile."
      ]
     ],
     "tip": "Your Day 1 class note reads 'Nonrefoulement grants formal legal status, asylum does not.' The slides and casebook say the opposite: asylum is the grant of formal legal status, and non-refoulement is the duty not to return. Study the slide version.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "The Ancient Roots of Refugee Protection",
     "explain": [
      "The casebook opens by showing that asylum and non-refoulement did not begin in 1951. They matured in the first half of the twentieth century, but they reach back into the Arab-Islamic and Judeo-Christian traditions, among others.",
      "The slide section 'Protection of the stranger in the Arab world' covers the assigned reading (casebook pp. 3-6). The point for class is the contrast between this tradition and modern restrictive policy, which the slides make through Note 5 and a list of 2025 executive orders."
     ],
     "items": [
      [
       "Istijara and ijara",
       "In the pre-Islamic Arab tradition, istijara was the search for protection and ijara was the granting of protection to the one who asked. Hospitality and protection were part of the moral code of the desert, driven by honor. Once a stranger entered a tent, the whole family owed protection; sharing 'bread and salt' sealed the pact. The casebook notes that ijara was given to all who sought it, and that the prophet Mohammed himself received ijara."
      ],
      [
       "Aman",
       "Under Shariah, every Muslim is called to grant aman (safeguard) to any non-Muslim stranger fleeing persecution, even an enemy in wartime. The person protected (the musta'man) is inviolable in person and property. Aman granted by an ordinary citizen binds the whole community, including the Caliph. In principle it lasts one year."
      ],
      [
       "Dhimma",
       "If a Jewish or Christian beneficiary of aman wished to remain after the year ended, he entered the status of dhimmi, a non-Muslim subject living permanently in Muslim territory. The casebook calls dhimma a 'perpetual aman.' The casebook's Note 3 asks which of the two is closer to modern asylum."
      ],
      [
       "Aman and non-refoulement",
       "According to the excerpt (Arnaout), the asylum seeker under aman could not be refused entry, could not be sent back to the country of origin, and could not be extradited, even in exchange for a Muslim prisoner. The author concludes that Islam was the first to adopt the principle of non-refoulement and the rule against extraditing political offenders."
      ],
      [
       "Note 5: modern contrast",
       "Casebook Note 5 (pp. 10-11) contrasts the ancient Muslim tradition of asylum with the first Trump administration's 2017 'Muslim Ban,' which restricted entry from majority-Muslim countries. Biden rescinded it in 2021, but other restrictions (Title 42 expulsions and the Migrant Protection Protocols) carried over in different forms, and Biden's June 2024 proclamation added a border shutdown mechanism."
      ],
      [
       "2025 executive orders (slide list)",
       "The slide lists eight executive orders (EOs) from the first 100 days of the second Trump administration. The casebook describes what four of them do:",
       [
        "EO 14159, Protecting the American People Against Invasion: punishes sanctuary cities, expands expedited removal, cuts funding for legal resource and citizenship programs, and allows IRS data sharing with immigration enforcement.",
        "EO 14160, Protecting the Meaning and Value of American Citizenship: purports to abolish birthright citizenship for children of unauthorized immigrants and temporary visitors (the slide pairs it with Trump v. Barbara).",
        "EO 14163, Realigning the US Refugee Admissions Program: indefinitely suspends refugee admissions and cuts funding for resettlement (see Unit 1, USRAP).",
        "EO 14165, Securing Our Borders: ends the CBP One app and categorical parole programs; it led to Proclamation 10888, Guaranteeing the States Protection Against Invasion, which purports to bar people from remaining in the U.S. while pursuing asylum (the slide pairs it with RAICES v. Mullin).",
        "EO 14157 (designating cartels as Foreign Terrorist Organizations), EO 14161 (foreign terrorist and public safety threats), EO 14167 (the military's role in territorial integrity), and EO 14188 (combating anti-Semitism) appear by title only."
       ]
      ]
     ],
     "tip": "The casebook's stated reason for the EO list: to show the 'stark contrast' between twenty-first century anti-refugee policy and the ancient value of sheltering the stranger.",
     "check": {
      "status": "thin",
      "note": "EO 14157, 14161, 14167, and 14188 appear by title only on the Ch. 1 'Note 5' slide and in casebook Note 5 (p. 7). Day 1 notes do not discuss them. No source explains their content."
     }
    },
    {
     "title": "Crystallization of an International Refugee Protection Regime (1921-1951)",
     "explain": [
      "Between 1921 and 1951 the international community built formal bodies to protect refugees. The casebook counts as many as nine international entities in thirty years and divides the period into three phases.",
      "The slides note that this system was 'not necessarily designed with the future in mind.' Each body was created for a particular group or crisis and given a limited life, which helps explain the time and place limits later written into the 1951 Convention."
     ],
     "items": [
      [
       "Phase 1: Early efforts (1921-1946)",
       "The League of Nations elected Fridtjof Nansen High Commissioner for Russian Refugees in 1921, after mass movements caused by the Russian revolution and the collapse of the Ottoman Empire. His tasks were to define refugees' legal status, organize repatriation or placement in receiving countries, and run relief work; his mandate later reached Armenians (1924) and Assyrian, Assyro-Chaldean, and Turkish refugees (1928).",
       [
        "After Nansen's death, the International Nansen Office (1931) and a High Commissioner for Refugees coming from Germany (1933) followed; both were liquidated in 1938 and merged into a League High Commissioner that ended in 1946.",
        "The Intergovernmental Committee on Refugees (1938, after the Evian conference) was extended to all refugee groups during World War II.",
        "UNRRA (United Nations Relief and Rehabilitation Administration, 1943) returned millions home, but many refused to go back to states under new political ideologies.",
        "In 1946 the UN General Assembly set principles: the refugee problem is international, and no refugee who has freely stated valid objections should be compelled to return."
       ]
      ],
      [
       "Phase 2: International Refugee Organization (1946)",
       "The IRO was created as a UN specialized agency to deal with refugees left after World War II and operated until 1951. It was the first international agency to handle every aspect of refugee problems: registration, status determination, repatriation, resettlement, and legal and political protection. Repatriation was its first goal, but post-war politics shifted it toward resettlement, which drew attacks from states during rising East-West tension; only 18 of 54 UN members funded it."
      ],
      [
       "Phase 3: UNHCR (1951)",
       "Opposition to continuing the IRO led the General Assembly, in December 1949, to create UNHCR as a subsidiary organ for an initial three years starting January 1, 1951. The High Commissioner is elected by the General Assembly and reports to it through ECOSOC (the UN Economic and Social Council), which gives the office independence. Its statute made international protection the primary task and material assistance a narrower one."
      ]
     ],
     "tip": "Remember the sequence and the label for each phase: early efforts (1921-1946), IRO (1946), UNHCR (1951).",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Evolution of the Modern Refugee Definition: Three Perspectives",
     "explain": [
      "While institutions were being built, the idea of who counts as a refugee changed. The casebook, drawing on James Hathaway, describes three conceptions in sequence.",
      "The progression matters because the last stage, the individualist perspective, became Article 1 of the 1951 Convention and later the U.S. definition. It is why a U.S. applicant must prove a personal fear of persecution."
     ],
     "items": [
      [
       "Juridical perspective (1920s)",
       "A refugee was an individual lacking formal legal protection from any government, such as a person stripped of nationality or a stateless person. This view governed during Nansen's tenure (1921-1931) and the League bodies of the 1930s. Definitions of the era combined ethnic or territorial origin with the absence of de jure (legal) national protection."
      ],
      [
       "Social perspective (1930s)",
       "A refugee was a member of a large group adversely affected by a particular social or political event. Members might still have had de jure state protection but lacked de facto (practical) protection because of dire humanitarian need. Eligibility turned on belonging to the affected group."
      ],
      [
       "Individualist perspective (1940s-present)",
       "Refugee status is determined case by case, based on a finding of an individualized fear of persecution. Hathaway calls this era 'revolutionary in its rejection of group determination.' The focus is the conflict between the applicant's personal characteristics or convictions and the political system in the country of origin. It appears in the IRO definition and the UNHCR Statute and crystallized in Article 1 of the 1951 Convention."
      ],
      [
       "Gilman's critique",
       "Professor Denise Gilman argues that the U.S. system starts from a presumption that asylum is exceptional and presumptively unavailable. She proposes group status for similarly situated applicants with compelling claims, which the casebook describes as a return toward the social conception."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Fundamental Challenges of Refugee Protection",
     "explain": [
      "The casebook identifies two basic dilemmas. First, a refugee may seek asylum, but no state must grant it. Second, even when asylum is granted, it is a provisional measure that does not remove the cause of flight or guarantee membership in a new political community.",
      "International law responds to the first problem with non-refoulement and to the second with the search for durable solutions. Both responses depend heavily on what states are willing to do."
     ],
     "items": [
      [
       "Non-entitlement to asylum",
       "Article 1 of the 1951 Convention defines who is a 'refugee'; it does not govern the granting of asylum. It identifies the people to whom states may grant asylum without obligating any state to do so. While the refugee has a right to seek asylum, states are not obligated to grant it."
      ],
      [
       "The norm of non-refoulement fills the gap",
       "Although states need not grant asylum, Article 33 forbids them to 'expel or return (\"refouler\") a refugee in any manner whatsoever' to territories where life or freedom would be threatened. A person thus has a right to be protected from forcible return to persecution even with no right to stay permanently in a particular country. The casebook notes that in U.S. law this principle appears in withholding of removal (based on Article 33) and in protection based on the Convention Against Torture."
      ],
      [
       "Durable solutions",
       "UNHCR's statute gives it two related functions: protect refugees and promote durable solutions. Success depends on the political will and financial resources of states. The three solutions:",
       [
        "Voluntary repatriation, the preferred solution: UNHCR does not actively promote return unless refugees can go back in reasonable safety, though it may assist spontaneous returns.",
        "Local settlement (local integration): settling refugees in the host country when return is unlikely; it requires the host government's agreement and has become more restricted as numbers rise.",
        "Third-country resettlement: for refugees who can neither go home nor safely remain where they are; normally used only when no other option guarantees their legal or physical security."
       ]
      ],
      [
       "Few treaty-based state duties",
       "The casebook notes that specific treaty duties toward refugees are few, largely non-refoulement (Art. 33) and non-discrimination (Art. 3), while naturalization (Art. 34) is only encouraged. For that reason non-binding instruments such as the 2018 Global Compact on Refugees and the 2016 New York Declaration are used to encourage states to commit to best practices."
      ]
     ],
     "tip": "Exam distinction: protection from return does not equal a right to remain. A refugee can be owed non-refoulement while having no claim to asylum in that state.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Scale and Local Context",
     "explain": [
      "The slides open and close Chapter 1 with numbers that show why the topic matters. They also set up the in-class Asylum Priorities exercise: who should be allowed to win a claim for asylum in the U.S., and how many, if any, should be allowed in line."
     ],
     "items": [
      [
       "Global displacement",
       "119 million forcibly displaced persons as of June 2025 (slides). The casebook gives the end-2023 figure of about 118 million, roughly 1 in 70 people, made up of about 43 million refugees, 7 million asylum seekers, and 68 million internally displaced persons."
      ],
      [
       "Who hosts refugees",
       "The casebook notes that most refugees flee to neighboring countries of similar modest means, and that poorer states in the Global South often host far more refugees per capita than wealthy states. Example: Uganda hosted over 1.6 million refugees in 2023, while the U.S. set a ceiling of 125,000 resettled refugees for FY 2024-25."
      ],
      [
       "Houston",
       "Per the Axios reading (Census 2023 data): 676,000 Houstonians, 29.3% of the city's 2.3 million residents, were foreign-born. Nearly one-fifth of Texas residents (17.9%) and 14.3% of the U.S. population were foreign-born; Fort Bend County had the highest share in Greater Houston at 31%."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "Intl Norms & U.S. Law",
   "overview": [
    "This unit asks one question: how far does U.S. practice match the international rules on refugee protection? It starts with how international law becomes U.S. law (through treaties and customary international law, limited by the self-execution and last-in-time doctrines). It then measures U.S. law against the three key articles of the 1967 Protocol: Article 1 (who is a refugee), Article 33 (no return to danger), and Article 34 (states should facilitate naturalization).",
    "Before 1980 the U.S. relied on discretionary and ideological tools: withholding of deportation under former INA (Immigration and Nationality Act) § 243(h), conditional entry, and parole. The 1980 Refugee Act copied the Convention's neutral refugee definition into INA § 101(a)(42) and built two tracks on that one definition. USRAP (the U.S. Refugee Admissions Program) selects people outside the U.S., with an annual cap set by the President. Asylum and withholding protect people inside the U.S. or at the border, with no cap.",
    "The second half asks whether the 1980 Act kept its promise. The materials point to two problems: bias in adjudication (Cold War nationality bias, the ABC settlement, the treatment of Haitians) and limits on access to territory and process. The access problem runs from Haitian interdiction, upheld in Sale v. Haitian Centers Council, through outsourcing deals, expedited removal, and border measures from 2016 to 2025.",
    "For the exam, the § 101(a)(42) definition is the rule spine for the rest of the course. Keep two levels apart: a later statute or a narrow court reading can change what binds U.S. courts, but the U.S. remains bound by its treaty obligations internationally. Sale is where that gap matters most."
   ],
   "check": {
    "status": "complete",
    "note": "Built from the outline Part II, both Ch. 2 slide decks, Day 2 notes (reading and class notes), Day 3 notes (casebook pp. 115-141, 153-163, 173-188), and the Ch. 2 casebook text for the EU-Turkey deal and the travel ban, which the notes did not cover. No separate 'DAY 3 CLASS NOTES' file for Asylum exists in Drive; the Day 3 file's class-notes section is blank. The slide chart 'Immigration Court Decisions Granting Asylum by Nationality, FY 2024' has no data in the extracted text."
   },
   "blocks": [
    {
     "title": "International Law as the \"Law of the Land\"",
     "explain": [
      "Before asking whether the U.S. complies with refugee treaties, you need to know how international law operates inside U.S. courts. The slides give two sources of international law and two limiting principles.",
      "Both limiting principles apply only to treaties. That matters because, per the Day 2 reading notes, non-refoulement has by growing consensus become customary international law, which the two limits do not reach in the same way.",
      "Day 2 notes flag the key idea: domestic nullification does not equal international discharge. A treaty can stop being enforceable in U.S. courts while the U.S. remains bound to the other parties."
     ],
     "items": [
      [
       "Treaties",
       "Agreements between states that bind their parties. U.S. Const. art. VI makes 'all Treaties made' part of 'the supreme Law of the Land,' which puts treaties on equal footing with federal statutes. The Sale slides add the flip side: a country is not bound by a treaty absent ratification."
      ],
      [
       "Customary international law (CIL)",
       "State practice plus a sense of legal obligation (opinio juris). It binds all states except those that clearly and persistently objected while the norm was developing (Restatement (Third) of Foreign Relations Law § 102 cmt. d). In The Paquete Habana (1900) the Supreme Court said CIL is 'part of our law' and must be applied by the courts; Restatement § 111 gives CIL status equal to treaties."
      ],
      [
       "Self-execution",
       "Only self-executing treaties or treaty clauses create rights a court will enforce; for the rest, Congress must pass implementing legislation. Under Restatement § 111 cmt. h, U.S. intent decides whether a treaty is self-executing; if the treaty is silent, courts look to Presidential statements and Senate or congressional expressions. Reporters' Note 5 adds a strong presumption of self-execution when the Executive never requested implementing legislation and Congress never passed any."
      ],
      [
       "Last-in-time rule (domestic nullification)",
       "A later federal statute that conflicts with a treaty supersedes the treaty as domestic law. The U.S. still remains bound internationally. Restatement (Fourth) § 309(3) says the same: a superseding statute does not relieve the U.S. of its international obligation, and cmt. d says international law, not U.S. law, decides when a treaty obligation is validly suspended or ended."
      ],
      [
       "Avoiding conflict",
       "Restatement (Fourth) § 309(1): where fairly possible, courts construe federal statutes to avoid a conflict with a treaty. This is the modern form of the Charming Betsy canon discussed with Sale below."
      ],
      [
       "Non-refoulement as CIL",
       "Day 2 notes (citing Goodwin-Gill) flag that non-refoulement has, by growing consensus, attained CIL status independent of the Convention. If so, it would bind the U.S. even apart from the Protocol. Sale did not decide this question."
      ]
     ],
     "tip": "Two sources (treaties, custom), two limits (self-execution, last in time), and both limits apply only to treaties. A statute can nullify a treaty at home without discharging it abroad.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "The 1967 Protocol: Articles 1, 33, and 34",
     "explain": [
      "The 1951 Convention defined a refugee but limited it to events before January 1, 1951 and allowed a geographic (European) limit. The 1967 Protocol removed those time and place limits and bound its parties to Articles 2-34 of the Convention, including Article 33. The U.S. acceded to the Protocol in 1968, so it became bound by these obligations then.",
      "Day 2 notes flag that the three articles form a structure: a neutral definition, encouragement (with no mandate) to grant status, and an absolute ban on return. Notice the mismatch: no duty to admit, but a duty not to send back.",
      "The casebook's framing questions ask whether ratification created new obligations, how far U.S. law already complied in 1968, and whether later laws (IIRIRA in 1996, the REAL ID Act in 2005, and the Trump executive orders) moved the U.S. away from compliance."
     ],
     "items": [
      [
       "1967 Protocol",
       "Incorporates the Convention's well-founded fear definition, strips its 'time and place' limits, and binds parties (including the U.S., by accession in 1968) to Convention Articles 2-34. Its most significant obligation is Article 33, non-refoulement."
      ],
      [
       "Article 1",
       "Defines a refugee as a person who, owing to a well-founded fear of being persecuted for reasons of race, religion, nationality, membership of a particular social group, or political opinion, is outside the country of nationality and is unable or, owing to that fear, unwilling to accept that country's protection. A stateless person qualifies by reference to the country of former habitual residence. The slides call this definition geographically and ideologically neutral: it applies to anyone, from anywhere, of any politics.",
       [
        "The five grounds are race, religion, nationality, membership in a particular social group, and political opinion."
       ]
      ],
      [
       "Article 33",
       "Mandatory: 'No Contracting State shall expel or return (\"refouler\") a refugee in any manner whatsoever to the frontiers of territories where his life or freedom would be threatened' on account of one of the five grounds. It prohibits return; it does not require admission or a grant of status."
      ],
      [
       "Article 34",
       "Non-mandatory: states 'shall as far as possible facilitate the assimilation and naturalization of refugees.' The words 'as far as possible' make this encouragement. It does not require a state to grant refugee status or citizenship."
      ],
      [
       "Matter of Dunar (BIA 1973)",
       "The BIA (Board of Immigration Appeals) held that existing U.S. law was adequate to carry out the Protocol. It relied on ratification history: the Senate did not expect 'radical changes' in immigration law, and the President said refugees in the U.S. 'already enjoy the protection and rights which the Protocol seeks to secure.' Day 2 notes flag the casebook's point that these representations were made to 'induce' Senate approval; the rest of the chapter tests whether they were true."
      ]
     ],
     "tip": "Three-part structure to memorize: Art. 1 = neutral definition; Art. 34 = encourages status (no mandate); Art. 33 = absolute bar on return.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Before the 1980 Refugee Act: History and Pre-1980 Mechanisms",
     "explain": [
      "To test Dunar's claim that the U.S. already complied in 1968, the casebook looks at the U.S. record. Its conclusion: 'Prior to 1948, the United States had nothing resembling a refugee policy,' and the tools that existed in 1968 did not match the Protocol.",
      "Each pre-1980 tool fails a specific part of the Protocol. Withholding was discretionary where Article 33 is mandatory, and it covered three grounds where the Protocol has five. Conditional entry and parole were limited by ideology or geography where Article 1 is neutral."
     ],
     "items": [
      [
       "Before 1948",
       "Interwar restrictions grew out of job-market pressure from returning veterans, xenophobia, and isolationism. The 1917 Act continued Asian exclusion and added a literacy test. The 1921 Act set the first national-origin quota (3% of each nationality's foreign-born population in the 1910 census), and the 1924 Act cut it to 2% of the 1890 census. The quotas barred nearly all Far East immigration and sharply limited Southern and Eastern Europe, the regions most interwar refugees came from. The League of Nations acted (including Nansen passports from 53 countries), but the U.S. signed no instrument and passed no refugee law."
      ],
      [
       "The St. Louis (1939)",
       "More than 900 German Jews were promised landing in Cuba; Cuba refused, Roosevelt refused temporary haven, and the ship returned to Europe, where most passengers died."
      ],
      [
       "1948 Displaced Persons Act",
       "The first U.S. law governing refugee admissions. It admitted 400,000 'eligible Displaced Persons,' using the IRO Constitution's definition (people forced from home by Nazi or Fascist action), but its own rules narrowed it, largely to Austrians, Germans, those brought into Austria, Germany, or Italy, and those fleeing communist Czechoslovakia. Applicants also had to show they were not firmly resettled and would neither become a public charge nor displace an American worker."
      ],
      [
       "Timeline",
       "1948 Displaced Persons Act (first U.S. refugee law) · 1950 UNHCR established · 1951 Refugee Convention ('well-founded fear'; Art. 33 non-refoulement) · 1952 INA · 1967 Protocol (U.S. accession 1968) · 1980 Refugee Act (amends the INA to conform to Art. 33) · 1996 IIRIRA (Illegal Immigration Reform and Immigrant Responsibility Act). The slides also mark earlier stages: less restrictive borders (1776-1875), federal controls and Chinese Exclusion (1880s-1890s), and national-origin quotas (1920s-1930s)."
      ],
      [
       "Withholding of deportation, former INA § 243(h)",
       "Made withholding discretionary: the AG 'may … withhold' deportation 'in his opinion.' It also covered only race, religion, and political opinion. Article 33 is a mandatory duty and covers five grounds, so § 243(h) fell short on both counts."
      ],
      [
       "Conditional entry",
       "Limited ideologically (people fleeing communism) or geographically (the Middle East), with a numerical cap of 17,400 per year that was routinely exceeded through parole. Article 1's definition has no ideological or geographic limit."
      ],
      [
       "Parole",
       "Wholly at the AG's discretion, with criteria set case by case. In practice it reflected ideological bias and was used overwhelmingly for people fleeing communist countries."
      ],
      [
       "Road to 1980",
       "A 1979 Congressional Research Service review recommended placing the UN refugee definition in the INA and removing the ideological and geographic limits. That became the 1980 Act. The Senate Report states the goal: to bring U.S. law 'into conformity with our international treaty obligations.'"
      ]
     ],
     "tip": "If asked whether the U.S. complied with the Protocol in 1968, walk each mechanism against the article it fails: § 243(h) vs. Art. 33 (discretionary, 3 grounds); conditional entry and parole vs. Art. 1 (ideological and geographic limits).",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "INA § 101(a)(42) · Definition of Refugee",
     "explain": [
      "The 1980 Refugee Act wrote a definition into the INA that is virtually identical to the Convention's and removed the old communist-bloc and Middle East limits. Every form of protection in the course starts here, so the elements must be memorized.",
      "Part (A) is the main definition. Part (B) is a narrow exception for people still inside their own country. The statute then excludes persecutors and adds a special rule for coercive population control, the only substantive amendment since 1980."
     ],
     "text": "INA § 101(a)(42)(A), 8 U.S.C. § 1101(a)(42)(A): a refugee is a person who:",
     "items": [
      [
       "Is outside the country of nationality (or, if stateless, the country of last habitual residence)",
       "The applicant must have left the home country. A stateless person is measured against the country where the person last habitually lived."
      ],
      [
       "Is unable or unwilling to return to, and unable or unwilling to avail themselves of the protection of, that country",
       "'Unable' covers a person whose government cannot protect them; 'unwilling' covers a person who will not seek that protection because of the fear. Both return and protection are covered."
      ],
      [
       "Because of persecution OR a well-founded fear of persecution",
       "Either past persecution or a well-founded fear of future persecution qualifies. Day 2 class notes stress that the fear branch covers persecution that has not yet occurred."
      ],
      [
       "On account of race, religion, nationality, membership in a particular social group, or political opinion",
       "The persecution must be tied to one of the five protected grounds. The Ch. 2 slides label this link 'nexus.' Harm for any other reason does not qualify."
      ]
     ],
     "multi": true,
     "tip": "Your Day 2 class note says the President can add a ground and added only coercive population control. Per the Day 2 reading notes, that rule came from Congress in IIRIRA § 601(a)(1) (1996). Part (B) is what gives the President a role: designating in-country refugees in special circumstances.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "§ 101(a)(42): (B), the Persecutor Bar, and Coercive Population Control",
     "explain": [
      "The rest of the statutory text adds three rules to part (A). One expands the definition to some people still at home, one removes people who persecuted others, and one deems certain harms to be political persecution."
     ],
     "items": [
      [
       "INA § 101(a)(42)(B): in-country refugees",
       "In special circumstances the President, after appropriate consultation with Congress, may specify persons who are still within their country of nationality (or habitual residence, if stateless) and who are persecuted or have a well-founded fear of persecution on a protected ground. This departs from part (A)'s requirement that the person be outside the country."
      ],
      [
       "Persecutor exclusion",
       "'Refugee' does not include anyone who ordered, incited, assisted, or otherwise participated in the persecution of any person on account of race, religion, nationality, membership in a particular social group, or political opinion. Someone who persecuted others on a protected ground cannot use the definition."
      ],
      [
       "Coercive population control",
       "Added by IIRIRA § 601(a)(1) (1996). A person forced to abort a pregnancy or undergo involuntary sterilization, or persecuted for failing, refusing, or otherwise resisting a coercive population control program, is deemed persecuted on account of political opinion. A person with a well-founded fear of the same is deemed to have a well-founded fear on account of political opinion. Its objectives and interpretation are covered in Ch. 6."
      ],
      [
       "What the 1980 definition removed",
       "It eliminated the communist-bloc and Middle East requirements of the conditional-entry system. Anyone, from any country, may qualify."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Two Paths to Protection: USRAP vs. In-Country Adjudication",
     "explain": [
      "Day 2 notes flag this as the structure everything else depends on. The 1980 Act built two separate tracks on the same refugee definition, and the main differences are where the person is and whether there is a cap.",
      "Inside the second track there are different forms of relief from removal: asylum, withholding (restriction on removal), and CAT protection. Unit 2 covers their standards in depth; this block gives the comparison the Ch. 2 slides and Day 2 class notes ask you to memorize."
     ],
     "items": [
      [
       "USRAP (outside the U.S.)",
       "For refugees outside the U.S. The Executive, consulting Congress, picks regions and priorities and sets an annual cap. Because selection is political, foreign policy and ideology may legally play a role here."
      ],
      [
       "In-country adjudication (inside the U.S. or at the border)",
       "For people physically in the U.S. or arriving at the border. There are no regional or priority categories and no numerical cap. An applicant may come from anywhere and qualify on the refugee definition alone."
      ],
      [
       "INA § 208(a)(1): who may apply",
       "Any alien physically present in the U.S. or who arrives in the U.S., whether or not at a designated port of arrival (including one brought here after interdiction in international waters), may apply for asylum irrespective of status."
      ],
      [
       "INA § 208(b)(1): who may be granted",
       "The Attorney General may grant asylum to an applicant who is a refugee under § 101(a)(42)(A). 'May' makes the grant discretionary."
      ],
      [
       "Asylum vs. withholding (Day 2 class notes comparison)",
       "Asylum (INA § 208) and withholding, also called restriction on removal (INA § 241(b)(3)), differ in three ways:",
       [
        "Standard: asylum uses the refugee definition's well-founded fear; withholding requires a higher showing of a threat to 'life or freedom,' a clear probability (more likely than not) (Ch. 3).",
        "Status: asylum leads to lawful permanent residence (LPR) and then citizenship; withholding only bars return to the specified country.",
        "Derivatives: asylum extends status to a spouse and child; withholding protects only the applicant.",
        "Withholding is mandatory if the applicant is eligible and no bar applies; asylum is discretionary."
       ]
      ],
      [
       "Convention Against Torture (CAT)",
       "A separate form of protection from removal, outside the refugee definition (Unit 6)."
      ],
      [
       "Who adjudicates",
       "DHS (Department of Homeland Security) houses USCIS (U.S. Citizenship and Immigration Services), which decides benefit applications, interviews applicants, and through its Refugee Corps and asylum officers handles refugee and asylum cases. USCIS is not a law enforcement agency, but like CBP and ICE it can refer people to removal proceedings. DOJ (Department of Justice) houses the immigration courts within EOIR (Executive Office for Immigration Review). State reviews visa applications at consulates; HHS (Health and Human Services) handles refugee resettlement through ORR (Office of Refugee Resettlement) and unaccompanied children; Labor handles parts of employment visas."
      ]
     ],
     "tip": "USRAP = outside, capped, foreign policy allowed. In-country = inside or at the border, no cap, foreign policy barred (see ABC below).",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "USRAP · U.S. Refugee Admissions Program",
     "explain": [
      "USRAP is the overseas track. Each year the President, after consulting Congress, decides how many refugees to admit and how to divide the slots by region. Refugees admitted this way are called 'normal flow refugees.'",
      "Day 2 notes flag the core criticism: the 1980 Act meant to remove geographic and ideological preference, yet USRAP's selection process openly takes geography and ideology into account. The admissions history shows a strong preference for people fleeing communism."
     ],
     "items": [
      [
       "INA § 207, 8 U.S.C. § 1157",
       "The President, in consultation with Congress, makes an annual determination of the number of refugees admitted and the worldwide allocation. The numbers must reflect both 'humanitarian concern' and the 'national interest.' Under § 207(b), in an 'unforeseen emergency refugee situation,' the President may add slots for persons of 'special humanitarian concern' after consultation."
      ],
      [
       "P-1",
       "Individual referrals by UNHCR, a designated NGO (non-governmental organization), or U.S. embassy personnel for specified and compelling reasons. It is the only priority open to any nationality without regional restriction."
      ],
      [
       "P-2",
       "Groups of special humanitarian concern, usually specified subgroups within nationalities. FY 2017 examples include certain Cubans, Iraqis associated with the U.S., Iranian religious minorities, and Syrians."
      ],
      [
       "P-3",
       "Family members of U.S. citizens or of others with specified status."
      ],
      [
       "P-4",
       "The Welcome Corps, a public-private partnership in which private sponsors support refugees. Suspended in February 2025."
      ],
      [
       "Priority is necessary, not sufficient",
       "Falling within a priority only makes a person eligible to be considered. Approval requires an overseas interview with a DHS/USCIS Refugee Corps officer, and a denial is not appealable."
      ],
      [
       "Agency roles",
       "DHS/USCIS Refugee Corps adjudicates; the State Department coordinates resettlement policy and works with NGO partners; HHS (through ORR) provides financial, medical, and social services to newly resettled refugees."
      ],
      [
       "Allocated vs. admitted",
       "The slides note that numbers allocated are usually higher than the numbers admitted. After 9/11, for example, FY 2002 allocated 70,000 and admitted 27,110. The FY 2018 allocation of 45,000 was the lowest since 1980, down from 110,000 in FY 2017."
      ],
      [
       "Trump 1.0 travel ban",
       "The 2017 'Muslim Ban' (EO 13769) barred entry from seven majority-Muslim countries, suspended USRAP for six months, indefinitely banned Syrian refugees, and cut FY 2017 refugee slots from 110,000 to 50,000. Two revised versions followed; courts, including in Hawai'i v. Trump, put provisions on hold, and the Supreme Court allowed the third version to take effect in December 2017."
      ],
      [
       "EO 14163 (Jan. 20, 2025)",
       "'Realigning the United States Refugee Admissions Program' suspended USRAP. In Pacito v. Trump (9th Cir.), a preliminary injunction allowed people approved with travel plans before January 20, 2025 to come. A February 7, 2025 exception admitted white South Africans, based on a claim of genocide by Black South Africans; 59 entered on May 12, 2025."
      ]
     ],
     "tip": "Structural criticism to cite: the 1980 Act's goal was a neutral definition, but USRAP selection is non-neutral by design (geography and ideology drive priorities and allocations).",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Foreign Policy and Moral Questions in Refugee Admissions",
     "explain": [
      "The casebook asks what role foreign policy should play in deciding which refugees to admit. The critics in the readings accept some foreign policy goals. Their objection is to using refugee admissions as a tool against rival governments.",
      "The slides pose the moral questions: whether ethics should shape refugee law, how many refugees a state should admit, what selection criteria to use (environmental refugees, root causes, family unification, ability to integrate), and whether states may close their borders at all (the open borders exercise, p. 110)."
     ],
     "items": [
      [
       "Fitzpatrick: end of the Cold War",
       "The end of the Cold War raised fears of large new flows and removed the political reason for generous asylum, since there was little gain in the 'trophy refugee' who symbolized a rival's failure. The applicant pool shifted to the global South and East, prompting racist and xenophobic resistance."
      ],
      [
       "Legomsky",
       "Under § 207, 'Congress virtually wrote the President a blank check.' Refugees are not interchangeable: there are degrees of risk and degrees of persecution, and ranking should follow those factors instead of diplomacy. He proposed an independent board to set and allocate overseas admissions."
      ],
      [
       "Tyson",
       "Humanitarianism has the 'weakest clientele' in Congress. Three reasons to stop using refugee policy to discredit adversaries: it violates the intent that status rest on persecution; it has unintended effects (the 1980 Mariel boatlift); and foreign policy decisions themselves create refugee flows."
      ],
      [
       "Steinbock",
       "Separates laudable foreign policy goals (protecting people endangered because they helped U.S. interests) from unworthy ones (using admissions to embarrass disfavored nations). He also urges promoting democracy and human rights to minimize refugee crises, while conceding it is 'easier said than done.'"
      ],
      [
       "How many? Three positions",
       "Singer: balance refugees' interests against those of residents, shifting toward non-acceptance only when the harm outweighs the benefit. Gibney: since refugees are a small share of immigration, states should favor refugees within existing totals. Walzer: choose among victims based on ethnic, religious, or ideological affinity."
      ],
      [
       "Post-9/11 and Syria",
       "Resettlement froze for three months after 9/11 and security checks slowed it after that. The U.S. admitted only 211 Syrians in FY 2011-2014. Day 2 notes flag the evidence against the stated rationales: vetting takes up to two years, and of 784,000 refugees resettled from 9/11 to October 2015, 'exactly three' were arrested for terrorism planning. A draft HHS study found refugees brought in $63 billion more in revenue than they cost (2005-2014)."
      ],
      [
       "Who refugees are",
       "UNHCR reports 73% of refugees come from Afghanistan, Syria, Venezuela, Ukraine, and South Sudan (slides)."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Humanitarian Parole and Temporary Protected Status",
     "explain": [
      "Parole and TPS (Temporary Protected Status) are not refugee status. They are temporary tools that let people enter or remain in the U.S. for humanitarian reasons, and they appear throughout the Haiti materials."
     ],
     "items": [
      [
       "Humanitarian parole, INA § 212(d)(5)",
       "Parole gives temporary permission to enter, together with the right to apply for work authorization. A person who enters on parole may later apply for other legal statuses, including asylum."
      ],
      [
       "CHNV parole (Jan. 2023)",
       "The Biden program for Cubans, Haitians, Nicaraguans, and Venezuelans allowed up to 30,000 people per month total. Applicants needed a U.S. financial sponsor, a background check, and the ability to buy a plane ticket; those who crossed the U.S., Mexican, or Panamanian borders unlawfully after set dates were ineligible. DHS received almost 12,000 applications a day in April 2023, creating backlogs. The Trump administration ended it."
      ],
      [
       "TPS, INA § 244 (1990)",
       "The AG may grant temporary status to nationals of a country who face a threat to their safety due to (1) ongoing armed conflict, (2) an environmental disaster such as an earthquake, hurricane, flood, drought, or epidemic, or (3) other extraordinary and temporary conditions. Holders are lawfully present and may work.",
       [
        "Only people already in the U.S. on the designation date benefit. Casebook example: hurricane January 1, designation January 15; only nationals present on January 15 qualify.",
        "Designations last 6 to 18 months at a time and may be extended. An extension keeps the original date; only a redesignation moves it.",
        "There is generally no judicial review of the AG's designation, extension, or termination."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Bias in the Adjudicatory Process",
     "explain": [
      "The statute's definition is neutral, but in practice nationality and foreign policy shaped outcomes. During the Cold War, people fleeing Soviet-bloc countries were favored, while Salvadorans and Guatemalans, who fled governments friendly to the U.S., were rarely granted asylum.",
      "The legal rule that came out of this period: foreign policy and ideology may not be considered in in-country adjudication (asylum and withholding), even though they are allowed in the overseas USRAP process. The ABC settlement states the rule in four propositions."
     ],
     "items": [
      [
       "Cold War approval rates",
       "INS (Immigration and Naturalization Service) district director approval rates, June 1983 to September 1986: Iran 60.4%, Romania 51.0%, Poland 34.0%, versus El Salvador 2.6%, Haiti 1.8%, Guatemala 0.9%. The highest rates went to countries 'considered friendly and anti-communist,' regardless of human rights records. A 1982 INS draft report admitted that 'different levels of proof are required of different asylum applicants.'"
      ],
      [
       "ABC: American Baptist Churches v. Thornburgh (N.D. Cal. 1991)",
       "A nationwide class action alleging a pattern and practice of discrimination against Salvadoran and Guatemalan asylum and withholding applicants. Plaintiffs argued neither § 101(a)(42)(A) nor § 243(h) allows nationality to be considered. INS chose to settle and agreed to readjudicate the claims of every class member previously denied, under procedures designed to block impermissible considerations."
      ],
      [
       "ABC: the four stipulated propositions",
       "Under the settlement, in deciding well-founded fear:",
       [
        "Foreign policy and border enforcement considerations are not relevant.",
        "That the applicant's country is one whose government the U.S. supports, or has favorable relations with, is not relevant.",
        "Whether the U.S. government agrees with the applicant's political or ideological beliefs is not relevant.",
        "The same standard applies to Salvadorans and Guatemalans as to all other nationalities."
       ]
      ],
      [
       "Settlement as tacit admission",
       "A 1993 Harvard study said that by settling, the government implicitly acknowledged serious flaws in its prior adjudication. The ABC rule contrasts with USRAP, which may consider foreign policy. NACARA (1997) later gave Salvadorans, Guatemalans, Nicaraguans, and Cubans the more generous pre-1996 suspension of deportation rules."
      ],
      [
       "Orantes-Hernandez v. Thornburgh (9th Cir. 1990)",
       "Shows that bias can occur in procedures as well as decisions. INS coerced traumatized Salvadorans into 'voluntary' return before they could request a hearing. The court found grave human rights violations in El Salvador and many prima facie asylum cases, and required INS to give Salvadorans clear notice of their right to apply for asylum."
      ],
      [
       "Gilman: bias after the Cold War",
       "Bias continues because the system treats asylum as exceptional. It discredits large flows of claims from nearby countries, especially Central America, while claims from Africa and Asia fare better."
      ],
      [
       "Haitians",
       "The casebook says anti-Black racism 'was and continues to be an undeniable factor,' along with Haiti's proximity (about 700 miles from Miami), fear of floodgates, and U.S. support of repressive Haitian leaders. Fewer than 60 Haitians were granted asylum in 1980-1991.",
       [
        "Haitian Refugee Center v. Civiletti (S.D. Fla. 1980): INS's 1978 'Haitian Program' was designed to deny Haitian claims quickly; Judge King found 'wholesale violations of due process' affecting only Haitians.",
        "Louis v. Nelson: the 1981 policy of detaining all Haitians at Krome was held discriminatory; the court found the Fifth Amendment applied to excludable aliens and ordered over 1,000 released. On appeal, the court found a 'stark pattern' of discrimination, the first finding of federal race or national-origin discrimination under the Constitution outside employment.",
        "In 1993, 52 Cubans who diverted a plane to Miami were released from Krome within 48 hours while Haitians stayed detained."
       ]
      ],
      [
       "Modern adjudicator disparity",
       "Day 2 reading (the 'ES' case): an IJ (immigration judge) denied asylum to a Turkish Gülen follower who was tortured, finding the harm was prosecution of a suspected terrorist and not 'on account of' political opinion, even though DHS did not oppose the grant. The national grant rate was 38%; that judge had over 100 denials and one grant. Studies link former enforcement backgrounds and male judges to higher denial rates."
      ]
     ],
     "tip": "The slides ask whether the State Department Human Rights Report is consistent with the ABC rule. The rule to state: foreign policy and ideology are barred from in-country adjudication but allowed in the overseas USRAP process.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Haitian Interdiction and Sale v. Haitian Centers Council (1993)",
     "explain": [
      "Interdiction stops asylum seekers at sea before they reach U.S. territory, so they never get to use the asylum and withholding procedures. It was first used against Haitians, and the slides ask what the Supreme Court's role is in interpreting and applying international law.",
      "In Sale, the Court held 8-1 that neither the withholding statute nor Article 33 applies to Coast Guard actions on the high seas. Per the slides, the decision did not rest on any finding that the Haitians were safe; it rested on where the statute and treaty apply."
     ],
     "items": [
      [
       "Facts",
       "A 1981 U.S.-Haiti agreement let the Coast Guard stop Haitian vessels and return passengers, with a promise not to return anyone found to be a refugee. Of over 23,000 Haitians stopped from 1981 to September 1991, INS found only 28 qualified to apply for asylum. After the September 1991 coup against President Aristide, hundreds were killed, tortured, or detained for their politics. On May 23, 1992, the 'Kennebunkport Order' (EO 12807) directed the Coast Guard to return interdicted Haitians with no screening at all."
      ],
      [
       "Issue",
       "Whether the U.S. may interdict people on the high seas and return them to the country they fear, and whether that violates § 243(h) or Article 33 of the Refugee Convention."
      ],
      [
       "Holding",
       "'We hold that neither § 243(h) nor Article 33 … applies to action taken by the Coast Guard on the high seas.' The interdiction and return were therefore lawful under U.S. law."
      ],
      [
       "Statutory reasoning (§ 243(h))",
       "Three parts:",
       [
        "Section 243(h) constrains only the Attorney General, and here the President ordered and the Coast Guard carried out the returns.",
        "'Deport or return' are domestic terms: 'deport' is removal from the interior and 'return' is exclusion at the border, so neither reaches the high seas.",
        "The presumption against extraterritoriality supports reading the statute as applying only inside U.S. territory. The Court read the 1980 change from 'within the United States' to 'any alien' as matching Article 33's wording; it did not treat the change as extending the statute abroad."
       ]
      ],
      [
       "Treaty reasoning (Article 33)",
       "The Court read 'expel' as removing someone inside the country and 'refouler' as turning back at the frontier. Article 33.2 denies protection to a refugee who is a danger to the security of the country 'in which he is,' which presupposes presence, so Article 33.1 must be territorial too. The negotiating history (the Swiss delegate's view) was read as confirming this. Because Article 33 'cannot reasonably be read to say anything at all' about actions outside a state's territory, it does not prohibit them."
      ],
      [
       "Blackmun, J., dissenting",
       "The Coast Guard acts as the AG's agent. 'Return' should have its plain meaning, and 'Vulnerable refugees shall not be returned.' The presumption against extraterritoriality does not apply to a subject that is international by nature, and prior practice treated the 1980 Act as applying on the high seas."
      ],
      [
       "Blackmun, The Supreme Court and the Law of Nations (1994)",
       "Written after he left the Court. He argues the majority interpreted the treaty 'contrary to its plain meaning, spirit, and purpose' and contrary to CIL, reasoning backward from U.S. immigration law to the treaty. He cites three first principles:",
       [
        "Chisholm v. Georgia (1793): by joining the nations of the earth, the U.S. became 'amenable to the laws of nations.'",
        "Murray v. Schooner Charming Betsy (1804): 'An act of congress ought never to be construed to violate the law of nations if any other possible construction remains.'",
        "The Paquete Habana (1900): international law is part of U.S. law; where no treaty or controlling executive, legislative, or judicial act exists, courts resort to the customs and usages of civilized nations."
       ]
      ],
      [
       "Interpretive rules the notes pair with Sale",
       "VCLT (Vienna Convention on the Law of Treaties) art. 31(1): a treaty is read in good faith according to the ordinary meaning of its terms in context and in light of its object and purpose. INS v. Cardoza-Fonseca n.22: UNHCR positions give 'significant guidance' in construing the Protocol."
      ],
      [
       "What Sale left open",
       "Sale decided only the reach of the statute and the treaty text. It did not decide whether non-refoulement is CIL; if it is, it binds the U.S. independent of the Protocol. The IACHR (Inter-American Commission on Human Rights) in Case 10.675 (1996) held that Article 33 applies in international waters and that the U.S. breached the American Declaration."
      ],
      [
       "Aftermath",
       "Political pressure followed the ruling. In May 1994 President Clinton ended the no-screening high-seas policy and restored shipboard screening, using Guantánamo and Panama as safe havens. The U.S. helped reinstate Aristide in 1994; the slides use this as an example of root causes and burden sharing."
      ]
     ],
     "tip": "Sale's two levels: the Court held that U.S. law (statute and treaty as read by the Court) does not bar high-seas return. Whether international law (non-refoulement as CIL) bars it was left open, and the IACHR said it does.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Haiti: The Current Situation",
     "explain": [
      "The slides bring the Haitian story forward to show the same issues continuing. The casebook notes Haitian grant rates remain among the lowest of any nationality, and removals continued even after UNHCR called for a moratorium."
     ],
     "items": [
      [
       "July 2021",
       "President Moïse was assassinated; armed gangs then took control of much of Port-au-Prince, with killings, kidnappings, sexual violence, and mass displacement documented by the UN."
      ],
      [
       "September 2021: Del Rio",
       "Mass expulsions of Haitians from the Del Rio, Texas encampment under the Title 42 border closure; border agents chased migrants on horseback."
      ],
      [
       "2024",
       "A March 2024 UNHCR report described dire human rights conditions; the U.S.-backed prime minister resigned in April 2024."
      ],
      [
       "TPS for Haiti",
       "First designated after the January 2010 earthquake and extended several times. The first Trump administration tried to end it in 2019, which litigation halted; Biden redesignated Haiti in June 2024 through February 3, 2026."
      ],
      [
       "Biden vs. Trump",
       "Biden extended TPS and humanitarian parole (CHNV). Trump ended TPS and humanitarian parole; litigation is ongoing."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "State Strategies That Deny Access to Territory or Deter Arrival",
     "explain": [
      "The casebook says Haitian interdiction was an early example of a broader trend: states 'give lip service' to the Convention and Protocol while adopting policies to avoid protection duties. Gammeltoft-Hansen and Tan say this lets wealthy states keep a formal commitment while being spared the burdens.",
      "Day 2 notes flag a four-category version of the same taxonomy: blocking access to territory, procedural bars on arrival, deterrence by deprivation, and restrictive reading of the refugee definition. The slides and Day 3 reading use the three categories below."
     ],
     "items": [
      [
       "1. Preventing asylum seekers from reaching countries of asylum",
       "Interdiction, visa requirements, and carrier sanctions. The casebook says Sale 'emboldened other countries' to adopt similar measures, Australia most notably. Not every tribunal agrees: in Hirsi Jamaa v. Italy (2012), the European Court of Human Rights held that Italy's interdiction and return of Somalis and Eritreans to Libya violated international norms."
      ],
      [
       "2. Adopting criteria that let countries refuse to consider claims",
       "Examples: barring claims from people who passed through a 'safe third country' (with the refusing state deciding what is safe); barring claims not 'timely filed'; and screening out claims that fail threshold requirements in fast-track procedures, such as expedited removal."
      ],
      [
       "3. Adopting harsh measures within the country to deter arrival",
       "Long detention in harsh conditions, limits on family unification, bans on work, limited social support, and less durable forms of protection than full refugee status. Denmark, Germany, and Switzerland allow authorities to seize asylum seekers' assets at the border."
      ],
      [
       "The U.S. uses all three",
       "Interdiction; treating Canada as a safe third country; the one-year asylum filing deadline (unless 'changed' or 'extraordinary' circumstances are shown); and expedited removal as a fast-track screen."
      ],
      [
       "Detention as deterrence (Day 2 reading)",
       "The 'Locked Away' reading describes conditions at Camp East Montana (Fort Bliss) and quotes a former ICE official that the goal is 'to make detention look and feel so bad that people leave.' Day 2 notes flag this as conditions-as-leverage: no legal change is needed to end a valid claim if detention makes people abandon it. A September 2025 BIA instruction to deny bond to anyone who ever entered unlawfully pushed detainees toward habeas petitions, which must be filed in the district of confinement."
      ]
     ],
     "tip": "Learn the three categories by name (prevent arrival, refuse consideration, deter arrival) and place each policy in one of them.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Outsourcing Refugee Protection",
     "explain": [
      "Outsourcing (externalization) means a state pays or arranges for another country to stop, hold, or process asylum seekers so they never reach the first state's own system. The slides cover Australia, the EU-Turkey deal, and third-country removal."
     ],
     "items": [
      [
       "Australia's Pacific Solution",
       "In August 2001 the freighter Tampa rescued 433 asylum seekers; Australia refused landing and sent troops to board the ship. Nauru (not a Convention party) and New Zealand agreed to process them, and a full federal court upheld the refusal. Australia then created the Pacific Solution: a naval barrier, with boats diverted to offshore processing centers or pushed back to sea; even people with valid claims were sent toward third-country resettlement instead of the Australian system. UNHCR called it inconsistent with the Convention.",
       [
        "The slides note Australia was inspired by U.S. treatment of Haitians; the U.S. Haitian interdiction experience was discussed in the Australian Parliament after the Tampa.",
        "Labor abolished the Pacific Solution in 2007, but the policy shifted back as arrivals rose in 2010-2012."
       ]
      ],
      [
       "EU-Turkey deal (March 2016)",
       "After over one million migrants reached Europe in 2015 and an EU plan to share 120,000 asylum seekers among member states failed, the EU had Turkey (not an EU member) accept the return of all new irregular migrants who reached Greece through Turkey. In exchange the EU offered six billion euros and visa-free travel on conditions, and agreed to resettle one Syrian for each returned, up to 72,000. It was justified on the 'safe third country' principle, criticized because Turkey's protection system existed mostly on paper, and it effectively collapsed in March 2020 when Turkey stopped accepting returns."
      ],
      [
       "Third-country removal",
       "Countries broker deals to send asylum seekers to third countries. Italy and the UK were blocked from using Libya and Rwanda. In spring 2025 the Trump administration announced it would seek deals with Libya and Rwanda, then South Sudan. DHS v. D.V.D. (1st Cir.) was argued May 13, 2026; per the slides, a win for the noncitizens would leave third-country removals in place while giving them a chance to fully request fear-based protection."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Expedited Removal · INA § 235",
     "explain": [
      "In 1981 every person who reached the U.S. fearing persecution could apply for asylum, with a full hearing before an IJ, appeal to the BIA, and review in federal court. Expedited removal (ER), created by IIRIRA in 1996, lets immigration officers order some people removed without that hearing or review.",
      "The only exit from ER for an asylum seeker is to express fear and pass a credible fear interview (CFI). The materials stress that this is a screen: passing it only sends the case into regular removal proceedings where asylum can be decided."
     ],
     "items": [
      [
       "Who is covered",
       "'Arriving aliens' without valid travel documents, or believed to have obtained documents by fraud or misrepresentation. Day 3 notes flag that 'arriving alien' includes anyone who cannot show two years of physical presence in the U.S. The burden of proving two years' presence is on the noncitizen. Cubans arriving by air at a port of entry are exempt."
      ],
      [
       "Scope over time",
       "1996: ports of entry only. 2002: sea arrivals not admitted and present under two years. 2004: within 100 miles and 14 days of the Mexican or Canadian border. 2017 (EO 13767): the whole U.S. for anyone unable to show two years' presence; Biden rescinded this in 2021. January 2025 (EO 14159): expanded again to the entire U.S."
      ],
      [
       "How fear is raised",
       "At inspection the officer takes a sworn statement (Form I-867) and must ask three questions: why the person left, whether the person fears return, and whether the person would be harmed on return. Day 3 notes flag that inspectors are not to judge the merits or decide whether the fear is tied to a protected ground; once fear is expressed, the case goes to an asylum officer."
      ],
      [
       "Timing and detention",
       "The CFI happens no earlier than 24 hours after the person receives information about the process (unless waived); USCIS aims to decide within 14 days. Applicants are usually detained pending the CFI, with parole possible for humanitarian reasons. Interviews are now conducted by phone or other remote means."
      ],
      [
       "Consultation",
       "A person may consult someone of their choosing before the CFI, but at no expense to the government and without unreasonable delay. The government provides no free counsel at any stage, and representation at the CFI is rare."
      ],
      [
       "Review of a negative finding",
       "An IJ reviews a negative credible fear finding de novo, as quickly as possible and no later than 7 days after the determination. The statute bars any further administrative (BIA) or judicial review. Per the Day 2 fact sheet, a 2020 Supreme Court decision upheld these limits, and only people already granted asylum, admitted as refugees, or holding LPR status can challenge a wrongful ER order in federal court."
      ],
      [
       "Reinstatement and aggravated felons",
       "People whose prior removal orders are reinstated, or who have aggravated felony convictions, generally cannot apply for asylum. They may seek withholding or CAT protection if they meet the higher 'reasonable fear' standard."
      ]
     ],
     "tip": "Trap from the Musalo study and USCIRF: even after passing the CFI, an applicant can be hurt later if the IJ finds inconsistencies between the CFI or border statement and later testimony, though those records are often unreliable and incomplete.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Credible Fear Standard",
     "explain": [
      "INA § 235(b)(1)(B)(v) defines credible fear. It asks whether the person could win asylum later, which is a lower question than whether the person will win. The Musalo study slide breaks it into three parts."
     ],
     "text": "A credible fear of persecution exists if there is:",
     "items": [
      [
       "A significant possibility that the alien could establish eligibility for asylum under § 208",
       "The officer asks whether eligibility is a significant possibility. Full eligibility is decided later by an IJ."
      ],
      [
       "Taking into account the credibility of the statements made in support of the claim",
       "The officer considers whether the person's account is believable."
      ],
      [
       "And such other facts as are known to the officer",
       "The officer may also weigh other information available, such as country conditions."
      ]
     ],
     "multi": true,
     "tip": "UNHCR says accelerated procedures are acceptable for clear-cut claims (manifestly unfounded or manifestly founded) if safeguards remain. It criticizes U.S. ER for lacking full consideration and safeguards and for using the credible fear standard in place of UNHCR's 'manifestly unfounded or clearly abusive' test.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Critiques of Expedited Removal",
     "explain": [
      "The readings collect evidence that ER returns people who qualify for protection. The common theme is that a fast process with few safeguards produces mistakes."
     ],
     "items": [
      [
       "Obstacles for bona fide refugees",
       "People from repressive regimes may not trust officials on arrival; women who suffered rape may not disclose it to a stranger; torture survivors often have symptoms that undermine credibility; poor translation and lack of attorneys prejudice non-English speakers."
      ],
      [
       "Acer testimony (2001)",
       "ER is 'by its very design, destined to fail' because it lacks safeguards: no notice of consequences before secondary inspection, no guaranteed interpreter, no right to counsel, decisions by border enforcement personnel instead of independent adjudicators, and no appeal. Her examples include a U.S. citizen (Sharon McKnight) deported to Jamaica. She recommended limiting ER to extraordinary migration situations, with IJ review of all removal orders."
      ],
      [
       "USCIRF study (2005)",
       "The U.S. Commission on International Religious Freedom found:",
       [
        "In 15% of observed cases (12 of 79) a person who expressed fear was not referred; in 7 of those 12 the officer wrote that the person had no fear.",
        "In about half of inspections, officers skipped the required script on protection; people who heard it were seven times more likely to be referred.",
        "Some asylum seekers were 'pushed back' at primary inspection.",
        "Asylum officers made negative findings in only 1% of referrals, and IJs vacated over 10% of those.",
        "IJs granted relief to 25% of represented applicants and 2% of unrepresented ones.",
        "BIA grants in ER asylum appeals fell from 24% (FY 2001) to 2-4% after summary affirmances began in 2002."
       ]
      ],
      [
       "Follow-up",
       "USCIRF reports in 2007 and 2016 found most recommendations not implemented while ER use grew: 44% of all removals in FY 2013 were through ER, compared with 20% in FY 1997. Attempts to limit ER by statute, such as the Refugee Protection Act of 2010, failed."
      ],
      [
       "Day 2 fact sheet criticisms",
       "A single officer acts as prosecutor and judge, with one interview in detention, typically without counsel; erroneous removals of U.S. citizens and LPRs are documented. Day 2 notes flag the structural claim that ER creates a parallel deportation system operating almost entirely outside judicial oversight."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Other Measures Limiting Access to Asylum (2016-2025)",
     "explain": [
      "Beyond ER, each recent administration adopted measures that limit who can reach or use the asylum process. Most were challenged in court. Sort each one into the three-category taxonomy: preventing arrival, refusing consideration, or deterring arrival."
     ],
     "items": [
      [
       "Metering (2016-2020)",
       "Limits the number of asylum seekers processed at ports of entry each day, turning others back to wait in Mexico until their number is called. Al Otro Lado v. Mayorkas (S.D. Cal. 2021) found the turnbacks unlawful under the APA and the Fifth Amendment's Due Process Clause."
      ],
      [
       "Asylum Ban 1.0 (Nov. 2018)",
       "Barred asylum for people who entered between ports of entry. The Ninth Circuit held it invalid in East Bay Sanctuary Covenant v. Trump (2020), and Biden rescinded it in 2023."
      ],
      [
       "Migrant Protection Protocols (MPP, 'Remain in Mexico') (Jan. 2019)",
       "Required most undocumented arrivals to wait in Mexico for the whole time their cases were pending, often in dangerous cities. It differs from metering, which made people wait before presenting a claim. Biden ended it; Texas and Missouri sued to force its continuation (MPP 2.0); in Biden v. Texas (2022) the Supreme Court reversed, and it ended in August 2022."
      ],
      [
       "Asylum Ban 2.0 / Transit Ban (2019)",
       "Barred asylum for anyone who transited a third country on the way to the southern border, unless the person was denied protection in that country or was a victim of a severe form of trafficking. Courts vacated it; Biden's 2023 rule replaced it with a modified transit ban."
      ],
      [
       "Safe third country agreements (2019)",
       "Asylum Cooperative Agreements with Guatemala, El Salvador, and Honduras allowed the U.S. to send asylum seekers to those countries. Only the Guatemala agreement was used (945 people removed before March 2020). Biden suspended them in 2021; EO 14165 (2025) directs new ones."
      ],
      [
       "Title 42 (March 2020-May 2023)",
       "A CDC public health order used COVID-19 to expel arrivals without valid documents, unless they spontaneously expressed fear and passed a screening. It ended May 11, 2023."
      ],
      [
       "Circumvention of Lawful Pathways rule (May 2023)",
       "Creates a rebuttable presumption of asylum ineligibility for people entering at the southwest border after transiting another country, unless they (1) had parole before arrival, (2) used a CBP One appointment, or (3) were denied protection in another country.",
       [
        "Failure to use CBP One is excused if the person proves by a preponderance of the evidence that use was impossible (language barrier, illiteracy, technical failure, or other serious obstacle). Unaccompanied minors are exempt.",
        "Rebuttal requires 'exceptionally compelling circumstances': an acute medical emergency, an imminent and extreme threat, or being a victim of a severe form of trafficking.",
        "A district court vacated it in July 2023, the Ninth Circuit stayed that ruling, and the case was later vacated and remanded after the Trump administration ended the practice."
       ]
      ],
      [
       "Securing the Border (June 2024)",
       "Closed the border to asylum when southern border encounters averaged over 2,500 per day for seven days, reopening only below 1,500. During closures, only withholding of removal and CAT relief were available. Day 3 notes flag that people had to express fear spontaneously, because officers no longer had to ask the scripted fear questions."
      ],
      [
       "Trump 2.0 (2025)",
       "Proclamation 10888 closed the border to all asylum seekers under INA § 212(f), which lets the President suspend entry found 'detrimental to the interest of the United States'; it is challenged in RAICES v. Noem (listed on the Ch. 1 slide as RAICES v. Mullin). The same order ended parole and CBP One appointments."
      ],
      [
       "CBP One discontinued",
       "CBP One (now CBP Home) scheduled port-of-entry appointments; users received a Notice to Appear and time-limited parole. The Trump administration revoked that parole, told users to depart, and relaunched the app for 'self-deportation.'"
      ],
      [
       "Alien Enemies Act",
       "A 1798 law used three times before (War of 1812, WWI, WWII). EO 13,033 (March 20, 2025, per the slide) used it to remove Venezuelans accused of being members of 'Tren de Agua' (spelling as on the slide) without access to court proceedings or due process; they were sent to CECOT in El Salvador, and in a July 18 prisoner swap some asylum seekers were sent to Venezuela. Litigation: J.G.G. v. Trump."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Refugee Protection in the European Union",
     "explain": [
      "The chapter closes by comparing the EU. The casebook's summary: the U.S. did not in fact comply with the Protocol in 1968; the 1980 Act moved closer; and Sale's rejection of non-refoulement called that progress into question. The EU and Australian materials show the same global movement toward restriction."
     ],
     "items": [
      [
       "EU framework",
       "The 1992 Maastricht Treaty created the EU. The 1997 Treaty of Amsterdam made asylum and immigration matters of common interest, allowing EU institutions to set shared norms. The 1999 Tampere Summit began harmonization and committed to a 'full and inclusive' interpretation of the 1951 Convention."
      ],
      [
       "van der Klaauw (UNHCR)",
       "Urged the EU to build common procedures around core individual rights and high standards, avoiding the 'lowest common denominator.' Shortcuts used to screen out undeserving claims should be minimal and should never override access to procedures and the right to a fair hearing. He warned that frequent accelerated procedures and broad 'manifestly unfounded' definitions had eroded protection."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "Asylum vs. Withholding",
   "overview": [
    "When a person fears persecution in their home country, U.S. law offers two main protections against being sent back: asylum (INA § 208) and withholding of removal (INA § 241(b)(3), called § 243(h) “withholding of deportation” in the older cases). Both protect people who fear persecution on account of one of the five protected grounds: race, religion, nationality, membership in a particular social group, or political opinion.",
    "The big question in this unit is how likely the persecution has to be. The Supreme Court answered it in two cases. INS v. Stevic (1984) held that withholding requires a “clear probability” of persecution, meaning persecution is more likely than not (over 50%). INS v. Cardoza-Fonseca (1987) held that asylum requires only a “well-founded fear,” which can exist even when the chance of persecution is well under 50%, such as the one-in-ten example the Court used.",
    "The two forms of relief trade off against each other. Asylum is easier to qualify for, but the government has discretion to deny it, and it gives more: a path to permanent residence and citizenship, plus protection for a spouse and children. Withholding is harder to prove, but if the applicant proves it and no bar applies, the government must grant it. It only stops removal to that one country and gives nothing to family members.",
    "After the Supreme Court cases, the unit covers how the BIA (Board of Immigration Appeals) applies the well-founded-fear test (Mogharrabi), the lower screening thresholds used at the border (credible fear, reasonable fear, reasonable probability), and how discretion works in asylum (Pula). On the exam, identify which standard applies and walk the facts through it. The same facts can win asylum and lose withholding (Garcia-Ramos, Lim)."
   ],
   "check": {
    "status": "thin",
    "note": "One narrow gap: the casebook says Mogharrabi’s credible-testimony rule has been limited by “subsequent case law” and the REAL ID Act. The REAL ID corroboration rule is explained, but the case law is not identified in Day 5 notes, the Ch. 3 slides, or the Ch. 3 casebook text (the casebook defers it to Ch. 13). The Ch. 3 slide decks are mostly images; their extracted text gives only headings and the Cardoza-Fonseca facts/procedure/holding slides. Everything else is explained from the outline, Day 4 and Day 5 notes, and the Ch. 3 casebook reading."
   },
   "blocks": [
    {
     "title": "Key Terms and the Statutory Language",
     "explain": [
      "Chapter 3 is about “degrees of risk”: how sure a decision-maker has to be that harm will happen before protection is granted. Three terms come up throughout, and keeping them separate makes the cases easier to follow.",
      "The two forms of relief use different words. Asylum asks whether the person has a “well-founded fear” of persecution. Withholding asks whether the person’s “life or freedom would be threatened.” The Supreme Court read these different words as setting different levels of required risk."
     ],
     "items": [
      [
       "Standard of proof",
       "The likelihood of harm the applicant must show. For asylum this is a well-founded fear (a reasonable possibility of persecution). For withholding it is a clear probability (more likely than not). The burden of proof is a separate idea: it covers supplying evidence and persuading the factfinder (see Unit “Burden & Presumptions”)."
      ],
      [
       "Standard of review",
       "The criteria a higher court or agency uses to review a lower court’s or agency’s decision, and how much deference it gives the lower body’s findings and rulings.",
       [
        "Garcia-Ramos example: the Ninth Circuit reviewed the withholding denial under the substantial evidence standard. For asylum it used a two-part review: substantial evidence for whether a well-founded fear exists, then abuse of discretion for the final decision to grant or deny."
       ]
      ],
      [
       "Statutory language",
       "Asylum uses “well-founded fear.” Withholding uses “life or freedom would be threatened.” The word “fear” has a subjective component (the applicant’s state of mind); “would be threatened” has none and requires objective proof. This textual difference drives the result in Cardoza-Fonseca."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Where the Two Standards Come From",
     "explain": [
      "The U.S. joined the international refugee system by ratifying the 1967 Protocol in 1968, which bound it to Articles 2–34 of the 1951 Refugee Convention. U.S. law implements two Convention articles through two provisions: asylum tracks the Article 1 refugee definition, and withholding tracks the Article 33 non-refoulement duty.",
      "Before the 1980 Refugee Act, U.S. protection was narrow and discretionary. The 1980 Act created the modern asylum provision and amended withholding. After 1980, courts split over whether the two provisions set the same standard of proof, which is the conflict Stevic and Cardoza-Fonseca resolved."
     ],
     "items": [
      [
       "Convention Art. 1 (refugee definition)",
       "A refugee is a person who, owing to a “well-founded fear of being persecuted” for one of the five grounds, is outside their country of nationality and is unable or, owing to that fear, unwilling to accept that country’s protection. U.S. asylum (§ 208 with the § 101(a)(42) definition) tracks this language."
      ],
      [
       "Convention Art. 33.1 (non-refoulement)",
       "No State may expel or return (“refouler”) a refugee to territories where their “life or freedom would be threatened” on account of the five grounds. U.S. withholding tracks this language."
      ],
      [
       "Convention Art. 34 (naturalization)",
       "States “shall as far as possible facilitate the assimilation and naturalization of refugees.” This is precatory (encouraged, not required). Cardoza-Fonseca matched asylum to Art. 34: like Art. 34, asylum requires only that the applicant be a refugee, with no further showing that persecution “would” occur."
      ],
      [
       "Pre-1980 withholding (§ 243(h))",
       "The 1950 and 1952 versions let the AG (Attorney General) withhold deportation where the person would be subject to “physical persecution.” The 1965 version kept the discretionary form but changed it to persecution “on account of race, religion, or political opinion.” Courts required a “clear probability” or “likelihood” of persecution, and the relief reached only people already in the U.S., not those at the border (Leng May Ma v. Barber, 1958)."
      ],
      [
       "Pre-1980 conditional entry (§ 203(a)(7))",
       "Let the AG admit people fleeing Communist-dominated areas or the Middle East because of persecution or fear of persecution on account of race, religion, or political opinion. Applicants only had to show a “good reason to fear persecution,” and practice under it was “unquestionably more lenient” than clear probability (Matter of Tan; Matter of Adamska)."
      ],
      [
       "Parole (INA § 212(d)(5))",
       "Let the AG admit individuals for emergency reasons without treating them as legally admitted."
      ],
      [
       "The 1980 amendment to § 243(h)",
       "Made withholding mandatory (“The Attorney General shall not deport or return any alien … if … such alien’s life or freedom would be threatened”) and added nationality and particular social group. It did not address the standard of proof, which is why the circuits split."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "The Two Forms of Relief",
     "explain": [
      "These are the core comparison points between asylum and withholding. Asylum is broader in what it gives and easier to qualify for, but discretionary. Withholding is narrower and harder to qualify for, but mandatory once proven.",
      "The difference matters most for someone who is barred from asylum (for example, by the one-year filing deadline enacted in 1996, the Circumvention of Lawful Pathways rule, or the Securing the Border rule). That person can only seek withholding or CAT protection, both of which require the higher more-likely-than-not showing, and will be returned if they cannot meet it."
     ],
     "items": [
      [
       "Asylum (INA § 208)",
       "Requires a well-founded fear of persecution on a protected ground. It is discretionary: meeting the refugee definition makes a person eligible, and the Secretary of Homeland Security or the AG “may grant” it (§ 208(b)(1)). If granted, it gives a path to LPR (lawful permanent resident) status and citizenship, and derivative protection for a spouse and child."
      ],
      [
       "Withholding (INA § 241(b)(3))",
       "Requires a clear probability of persecution, meaning more likely than not. It is mandatory: if the applicant meets the standard and no bar applies, it must be granted. It is country-specific: it only bars removal to the country where the threat exists, so the person can still be removed to a third country. It has no derivatives, so a spouse and children are not protected through the applicant.",
       [
        "Matter of Salim example: withholding was granted as to Afghanistan, but the Board ordered removal to Pakistan if Pakistan would accept him."
       ]
      ],
      [
       "CAT",
       "Protection under the Convention Against Torture is a separate form of protection from removal. Like withholding, it requires a more-likely-than-not showing that harm will occur (covered in its own unit)."
      ],
      [
       "Who may apply (§ 208(a)(1))",
       "A person physically present in the United States or arriving in the United States may apply for asylum “irrespective of such alien’s status.” In Pula, the BIA majority read this phrase as protecting the right to apply, not as removing discretion to weigh how the person entered."
      ]
     ],
     "tip": "The U.S. stands virtually alone among Convention signatories in requiring more than a well-founded fear for non-refoulement. The consensus among other States is that anyone with a well-founded fear is entitled to non-refoulement.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Withholding Standard: INS v. Stevic (1984)",
     "explain": [
      "Stevic decided what level of risk withholding requires. The Court held that withholding requires a clear probability of persecution: it must be more likely than not that the person would be persecuted. Refugee status alone does not entitle a person to withholding.",
      "The Court’s reasoning: the withholding provision does not refer to the refugee definition or to “well-founded fear,” it turns on “would” rather than “might” or “could,” and Congress treated the 1980 amendment as a conforming change that did not alter the old standard."
     ],
     "items": [
      [
       "Withholding",
       "Clear probability of persecution, meaning more likely than not (greater than 50%). The 1980 Act did not change this standard.",
       [
        "The withholding provision never uses the term “refugee” and does not cross-reference § 101(a)(42)(A), so there is no textual basis for applying the well-founded-fear standard to withholding.",
        "Legislative history: Congress’s main goal was to end the piecemeal approach to refugee admission under §§ 203(a)(7) and 212(d)(5). The § 243(h) amendment was a “mere conforming amendment,” added “for the sake of clarity” and “plainly not intended to change the standard.”"
       ]
      ],
      [
       "Refugee status is not enough",
       "The central holding: the Second Circuit rested on “the mistaken premise that every alien who qualifies as a ‘refugee’ … is also entitled to a withholding of deportation.” A person can meet the refugee definition and still be removable if they cannot show persecution is more likely than not. This is the passage that puts the U.S. in conflict with UNHCR and nearly all other signatories."
      ],
      [
       "Facts",
       "Stevic, a Yugoslavian citizen, entered in 1976 to visit his sister and overstayed. After marrying a U.S. citizen who then died, his visa petition was revoked. He moved to reopen, stating he had joined an anti-Communist organization, his father-in-law had been imprisoned in Yugoslavia for that membership, and he feared imprisonment on return.",
       [
        "The BIA denied reopening without a hearing because he showed no evidence he would be singled out. The Second Circuit reversed, reasoning the 1980 Act adopted the “considerably more generous” well-founded-fear standard. The Supreme Court reversed and remanded."
       ]
      ],
      [
       "Motion to reopen",
       "A closed case is reopened only if the applicant shows prima facie eligibility for the relief requested (INA § 240(c)(7)). Prima facie means enough evidence to make out the claim on its face. For withholding, that means a prima facie showing of a clear probability of persecution."
      ],
      [
       "What Stevic left open",
       "The Court did not define “well-founded fear” under § 208(a). It accepted only that well-founded fear is “more generous” than clear probability, which set up Cardoza-Fonseca."
      ],
      [
       "Critique",
       "The casebook notes that the Court’s claim that 1968 U.S. law was “largely consistent with the Protocol” does not hold up: the Protocol used a broad, neutral refugee definition, while U.S. protection covered only people fleeing Communism or the Middle East, and Art. 33 is mandatory while U.S. withholding was then discretionary."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Asylum Standard: INS v. Cardoza-Fonseca (1987)",
     "explain": [
      "Cardoza-Fonseca decided what “well-founded fear” means for asylum. The Court held that the asylum and withholding standards are different, and that an asylum applicant does not have to prove persecution is more likely than not. A person can have a well-founded fear of an event with less than a 50% chance of it happening.",
      "The Court relied on plain language, statutory structure, and legislative history, and refused to defer to the agency. It did not set out exactly how to apply the test to facts; it left that to case-by-case agency adjudication."
     ],
     "items": [
      [
       "Asylum",
       "The well-founded-fear standard is more generous than clear probability. The applicant need not prove persecution is more likely than not.",
       [
        "“One can certainly have a well-founded fear of an event happening when there is less than a 50% chance of the occurrence taking place.”",
        "Grahl-Madsen example: if every tenth adult man in a country is killed or sent to a labor camp, anyone who escaped has a well-founded fear of return.",
        "“There is simply no room in the United Nations’ definition for concluding that because an applicant only has a 10% chance of being shot, tortured, or otherwise persecuted, that he or she has no ‘well-founded fear’ of the event happening.”"
       ]
      ],
      [
       "Why different",
       "Different statutory language and legislative history. Asylum is a discretionary grant, while withholding is mandatory when its requirements are met.",
       [
        "Plain language: “fear” turns partly on the applicant’s subjective state of mind; “would be threatened” has no subjective component.",
        "Structure: the same Congress wrote § 208(a) and amended § 243(h), keeping the old standard in one and adopting a different one in the other. Different wording in parts of the same act is presumed intentional (Russello v. United States).",
        "Legislative history: (1) practice under § 203(a)(7), the prior asylum-type statute, was more lenient than clear probability; (2) Congress added “well-founded” to conform to the Protocol; (3) Congress rejected S. 643, a Senate bill that would have limited asylum to people who met the withholding standard."
       ]
      ],
      [
       "Why the lower standard for the greater benefit is not anomalous",
       "INS argued it made no sense for asylum, the more generous relief, to have the easier standard. The Court disagreed: meeting § 208(a) only makes a person eligible for a discretionary grant, while meeting § 243(h) automatically entitles a person to withholding. The 1980 Act made withholding mandatory for that reason."
      ],
      [
       "Art. 33 has two burdens",
       "Under Art. 33.1 the applicant must (1) be a refugee (prove a well-founded fear) and (2) show their life or freedom “would be threatened.” So § 243(h)’s higher “would be threatened” showing is consistent with the Protocol, while asylum, like Art. 34, requires only refugee status."
      ],
      [
       "No Chevron deference",
       "INS asked the Court to defer to the BIA. The Court refused: whether the two standards are the same is a pure question of statutory construction for courts, and if Congress’s intent is clear, that intent controls. The agency had also changed its position several times, which earns less deference. Applying the standard to particular facts is left to the agency case by case.",
       [
        "Chevron (1984) directed courts to defer to an agency’s reasonable reading of an ambiguous statute. Loper Bright v. Raimondo (2024) overruled Chevron: courts decide questions of law without deferring to agencies."
       ]
      ],
      [
       "Rule of lenity",
       "Ambiguities in deportation statutes are construed in favor of the noncitizen, because “deportation is always a harsh measure,” especially where the person claims they will face death or persecution."
      ],
      [
       "Facts",
       "A Nicaraguan woman entered as a visitor in 1979 and overstayed. Her claim rested on her brother, who had been tortured and imprisoned for political activity; she feared she would be interrogated about him and that her own opposition would come to the government’s attention.",
       [
        "The IJ (immigration judge) applied the clear-probability standard to both claims and denied them; the BIA affirmed. She did not appeal the withholding denial. The Ninth Circuit held the wrong standard was applied to asylum and remanded; the Supreme Court affirmed."
       ]
      ],
      [
       "Blackmun concurrence",
       "Well-founded fear requires examining the applicant’s subjective feelings together with an objective inquiry into the reasons for the fear. Because the statute tracks the Protocol, international law and scholarly commentary should guide the agency."
      ],
      [
       "International perspective",
       "The U.S. split between refugee status (asylum) and entitlement to non-refoulement (withholding) differs from the broader international approach, where every refugee is protected from return. Fitzpatrick calls Cardoza-Fonseca a “high-water mark” for attention to international norms but faults it for continuing the “Stevic error.”"
      ]
     ],
     "tip": "Compare the two cases’ view of Congress’s purpose: Stevic says the 1980 Act aimed to end the piecemeal admission approach; Cardoza-Fonseca says it aimed to conform U.S. law to the 1967 Protocol. Cardoza-Fonseca treats the UNHCR Handbook as “significant guidance.”",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Well-Founded Fear",
     "explain": [
      "After Cardoza-Fonseca, the BIA had to say how to apply the well-founded-fear test. In Matter of Mogharrabi (BIA 1987), it adopted a subjective/objective framework plus a reasonable-person test: would a reasonable person in this applicant’s circumstances fear persecution?",
      "Two things must be true: the applicant actually fears persecution (subjective), and that fear has a reasonable basis in the facts of this applicant’s situation (objective). Credible, specific testimony can supply the objective basis without documents."
     ],
     "items": [
      [
       "Test",
       "Subjective fear plus an objectively reasonable basis in the applicant’s circumstances. A reasonable possibility of persecution can exist even when persecution is substantially less than probable.",
       [
        "Subjective: the word “fear” requires looking at the applicant’s state of mind.",
        "Objective: “well-founded” requires some basis in reality, a reasonable possibility of persecution. Relevant evidence includes country conditions, its laws, and the experience of others (Garcia-Ramos)."
       ]
      ],
      [
       "Reasonable person",
       "Would a reasonable person in the applicant’s circumstances fear persecution? Generalized fear alone is not enough. Consider what happened to similarly situated people, but assess this applicant’s circumstances individually. The fear must also be on account of a protected ground; generalized violence or purely personal disputes do not qualify."
      ],
      [
       "Proof",
       "Detailed, plausible, coherent, and credible testimony can establish the objective basis; documents are not required. This reflects the difficulty asylum seekers have obtaining evidence.",
       [
        "Limit: the REAL ID Act of 2005 lets the factfinder require corroboration of otherwise credible testimony, and that evidence must be provided unless the applicant does not have it and cannot reasonably obtain it (INA § 208(b)(1)(B)(ii)). The casebook says case law has also limited the rule (covered in Ch. 13)."
       ]
      ],
      [
       "Mogharrabi facts and holding",
       "An Iranian student visited the Iranian Interests Section at the Algerian Embassy to document his student status. An argument with an employee escalated; he called the regime corrupt religious fascists, the employee drew a gun, and he fled. The room had cameras, and he also joined anti-Khomeini demonstrations in the U.S.",
       [
        "Holding: well-founded fear established and asylum granted, with no adverse discretionary factors. His testimony was detailed and credible, he openly expressed opposition to regime officials who could identify him and were positioned to punish him, and any punishment would be on account of political opinion. The BIA did not decide whether he met the higher withholding standard."
       ]
      ],
      [
       "Sur place",
       "A refugee “sur place” is a person whose basis for fear arises after leaving their country, through changed conditions at home or their own activities abroad, as with Mogharrabi. The UNHCR Handbook asks whether the activities abroad may have come to the authorities’ notice and how the authorities would view them."
      ],
      [
       "Garcia-Ramos v. INS (9th Cir. 1985)",
       "Evidence that fails the withholding standard can still establish well-founded fear for asylum, if the testimony is believed.",
       [
        "Facts: a 21-year-old Salvadoran was active for about four months in the anti-government FPL, distributing propaganda, painting slogans, and serving as an armed lookout, mostly in daylight without a mask. He was never arrested or harassed, and his family stayed unharmed.",
        "Withholding denied: no evidence the government knew of his activities, so he showed only a possibility, not a probability, of persecution.",
        "Asylum remanded: his membership, activities, and reasons to believe he was identified made his fear reasonable. Proof of past harm helps but is not required. A bribed passport says little about whether the government would persecute him, and fear need not be the only reason a person leaves."
       ]
      ],
      [
       "Lim v. INS (9th Cir. 2000)",
       "A former Philippine intelligence officer helped arrest a New People’s Army leader, received continuing death threats, and others involved in the investigation were killed, though he escaped harm for six years. He met the asylum standard but not withholding. The court compared it to Russian roulette: a player reasonably fears death even though only one of six chambers is loaded. Surviving unharmed lowered the probability without eliminating reasonable fear."
      ]
     ],
     "tip": "Cold-call point from Mogharrabi: “objective evidence” does not mean documents. Credible, specific testimony can establish the objective facts. And no past physical harm does not mean no future risk (Lim).",
     "multi": true,
     "check": {
      "status": "thin",
      "note": "The “subsequent case law” limiting Mogharrabi’s credible-testimony rule is not identified in Day 5 notes, the Ch. 3 slides (Notes slide lists the point only), or the Ch. 3 casebook (which defers it to Ch. 13). The REAL ID corroboration limit is explained."
     }
    },
    {
     "title": "Screening Thresholds",
     "explain": [
      "Screening standards decide whether a person in fast-track removal gets to apply for protection at all. They are lower-stakes than the final merits standards: passing a screen only gets the person a fuller hearing.",
      "From lowest to highest: credible fear, reasonable fear, reasonable probability. Asylum officers make these calls, and only an IJ can review them; there is no BIA or federal court review, so little case law develops these standards. The casebook notes all three are currently on hold because of the January 2025 suspension of entries under INA § 212(f)."
     ],
     "items": [
      [
       "Credible fear",
       "A significant possibility, taking account of the credibility of the person’s statements and other facts known to the officer, that the person could establish asylum eligibility (INA § 235(b)(1)). Used in expedited removal. Since a 1-in-10 chance can be a well-founded fear, the person needs only a significant possibility of meeting that already low standard. Legislative history shows it was meant to be a low screen; it is still higher than UNHCR’s recommended screen, which would reject only “manifestly unfounded” claims."
      ],
      [
       "Reasonable fear",
       "A reasonable possibility of persecution or torture. This is a higher screen than credible fear; “reasonable possibility” is the same level as the asylum standard itself. Used for people with reinstated removal orders and certain administrative-removal orders, and for people subject to the Circumvention of Lawful Pathways rule. These people can seek only withholding and CAT, not asylum."
      ],
      [
       "Reasonable probability",
       "Substantially more than a reasonable possibility, but somewhat less than more likely than not (8 C.F.R. § 208.35(b)(2)(i)). Added by the June 2024 Securing the Border rule for people who can seek only withholding and CAT. It requires more likelihood of harm than it takes to win asylum, which the casebook contrasts with the Convention’s ban on returning refugees."
      ]
     ],
     "tip": "Passing a screen gets you further adjudication, not protection. A screening decision is not a grant of asylum.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "The Role of Discretion",
     "explain": [
      "Because asylum is discretionary, a person who proves a well-founded fear and is not barred can still be denied asylum. Withholding has no such discretion. Matter of Pula (BIA 1987) sets the framework: weigh the totality of the circumstances of the person’s flight, and remember that denying asylum can send a refugee back to persecution.",
      "The key rule is that “the danger of persecution should generally outweigh all but the most egregious of adverse factors.” This matters most when the person cannot meet the higher withholding standard, because a discretionary denial then means return to the place they fear."
     ],
     "items": [
      [
       "Rule",
       "“The danger of persecution should generally outweigh all but the most egregious of adverse factors.” Only serious negative factors justify denying asylum to someone who has a well-founded fear, especially if they do not qualify for withholding."
      ],
      [
       "Factors",
       "Totality-of-the-circumstances balancing of how the person fled and their situation:",
       [
        "Whether protection was actually available in another country, how long and how safely the person stayed in transit countries, and their prospects for permanent residence there.",
        "Whether the person tried to enter lawfully, their family ties in the U.S., and ties elsewhere.",
        "How serious any fraud was, the person’s age, and their health."
       ]
      ],
      [
       "Fraud",
       "Fraudulent entry is relevant but cannot overwhelm the analysis. Using false documents to escape persecution carries little adverse weight. Fraudulently obtaining a U.S. passport and assuming U.S. citizenship is much more serious."
      ],
      [
       "Burden",
       "The applicant bears the burden of showing favorable discretion is warranted. If there are no adverse factors, asylum should be granted (as in Mogharrabi)."
      ],
      [
       "Pula facts and holding",
       "An ethnic Albanian with Yugoslav citizenship was repeatedly detained, interrogated, and beaten by Yugoslav police over political activity. After failed U.S. visa applications and uncertain refuge in Europe, he spent six weeks in Belgium, bought another person’s travel document with a U.S. visa, and came to the U.S., where many relatives lived.",
       [
        "The IJ granted withholding but denied asylum because of the purchased document. The BIA granted asylum: failed lawful-entry efforts, uncertain European refuge, short transit stays, and strong U.S. family support outweighed the fraud."
       ]
      ],
      [
       "Matter of Salim (BIA 1982) limited",
       "Salim treated circumventing orderly refugee procedures with fraudulent documents as an “extremely adverse factor” that only the most unusual equities could overcome. Pula withdrew from that approach: circumvention can count against the applicant, but cannot require denial in nearly every case."
      ],
      [
       "Heilman (concurring in part, dissenting in part)",
       "Agreed with granting asylum but rejected the majority’s reading of “irrespective of status.” Penalizing manner of entry conflicts with asylum’s humanitarian purpose and Convention Art. 31, which bars penalizing refugees for illegal entry if they present themselves promptly. Discretionary denial should happen only in exceptional circumstances."
      ],
      [
       "Why asylum still matters after withholding",
       "Withholding gives no derivative protection for a spouse and minor children and allows removal to a third country. Under 8 C.F.R. § 1208.16(e), if asylum is denied solely on discretionary grounds and withholding is granted, the denial should be reconsidered because it effectively prevents the family from joining the applicant."
      ]
     ],
     "tip": "Pula’s factors are the professor’s ★★★ point. If asked “why grant despite the fraud?”: credibility, the statutory text, Salim limited, and balancing the circumstances of flight.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "Burden & Presumptions",
   "overview": [
    "This unit covers the regulations that tell decision-makers how to apply the asylum and withholding standards: 8 C.F.R. § 1208.13 for asylum and § 1208.16 for withholding. They split claims into two types: claims based only on fear of future harm (prospective risk), and claims where the person has already been persecuted (past persecution), which get special rules.",
    "For future-risk claims, the applicant normally has to show they personally face a risk. Two doctrines adjust that: pattern or practice (if a whole group like the applicant is being persecuted, the applicant does not have to show they will be singled out) and internal relocation (if the applicant could safely and reasonably move elsewhere in the country, the claim fails).",
    "For past-persecution claims, the applicant gets a presumption that they will be persecuted again. The burden shifts to the government to rebut it by showing changed circumstances or a reasonable relocation option. Even after rebuttal, asylum (but not withholding) can still be granted as “humanitarian asylum” if the past persecution was severe or the person faces other serious harm.",
    "On the exam, track who carries the burden at each step, and what the government must prove to defeat the claim. Watch for the asylum-only humanitarian route."
   ],
   "check": {
    "status": "complete",
    "note": "Explained from the outline, Day 5 notes, and the Ch. 3 casebook reading (regulatory framework section and appendix regulations). The Ch. 3 Part II slides list these headings but their extracted text has no content beyond titles."
   },
   "blocks": [
    {
     "title": "Standard of Proof vs. Burden of Proof",
     "explain": [
      "The applicant for protection bears the burden of proof, in both U.S. and international practice. Two separate questions are involved. The standard of proof is what the factfinder must be convinced of: the likelihood of harm (a reasonable possibility for asylum, more likely than not for withholding). The burden of persuasion is how convinced the factfinder must be.",
      "Courts often blur these together. Stevic and Cardoza-Fonseca set the likelihood of harm but never clearly set the burden of persuasion, so some decision-makers have demanded near-certainty, closer to “beyond a reasonable doubt,” which does not apply in civil proceedings. Asylum cases are also unusual because the factfinder must predict future events, not just find past facts."
     ],
     "items": [
      [
       "Standard of proof",
       "The required likelihood of harm. Example: in an asylum case, the adjudicator must be convinced that the applicant faces a one-in-ten possibility of persecution; in a withholding case, that there is a greater than 50% probability the applicant’s life or freedom will be threatened."
      ],
      [
       "Burden of production",
       "The duty to supply evidence."
      ],
      [
       "Burden of persuasion",
       "The duty to persuade the factfinder to a specific degree of certainty about the facts. In criminal cases that degree is beyond a reasonable doubt; in civil cases it is a preponderance of the evidence (slightly more evidence for a proposition than against)."
      ],
      [
       "UNHCR position",
       "UNHCR suggests the burden of persuasion should match the standard of proof: a fear is well-founded if the applicant can establish “to a reasonable degree” that staying in the home country has become intolerable."
      ],
      [
       "Governing regulations",
       "8 C.F.R. § 1208.13 governs asylum and § 1208.16 governs withholding. Under § 1208.13(a), the applicant bears the burden of proving refugee status, and credible testimony may be enough without corroboration. Passing a credible-fear screen does not relieve the applicant of proving asylum eligibility."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Prospective Risk",
     "explain": [
      "A prospective-risk claim is a claim based on fear of future harm with no past persecution. The regulations match the Supreme Court standards: a well-founded fear is a “reasonable possibility” of persecution (§ 1208.13(b)(2)), and withholding requires that persecution be “more likely than not” (§ 1208.16(b)(2)).",
      "Normally the applicant must show individual risk, meaning they personally would be targeted. The pattern-or-practice rule is an exception for both asylum and withholding: if the government or persecutor systematically persecutes a whole group similarly situated to the applicant, and the applicant belongs to that group, the applicant does not have to show they would be singled out individually."
     ],
     "items": [
      [
       "Individual risk",
       "The default rule: the applicant must show they would be individually singled out for persecution."
      ],
      [
       "Pattern or practice",
       "There is a pattern or practice of persecution of a group of persons similarly situated to the applicant on account of a protected ground (race, religion, nationality, particular social group, or political opinion).",
       [
        "Examples from the reading: Tamils in Sri Lanka no longer showed a pattern or practice once the government made recognized efforts to improve their situation after the civil war (Lingeswaran, 11th Cir. 2020). A Honduran transgender applicant did show one (Aguilar, 10th Cir. 2022). A gay man from Ghana showed persecution went beyond his community, with country-wide anti-gay violence where same-sex male relationships are criminalized (Doe, 3d Cir. 2020)."
       ]
      ],
      [
       "Inclusion",
       "The applicant establishes “inclusion in, and identification with” that group. If both elements are met, the applicant need not show they would be singled out individually (§ 1208.13(b)(2)(iii); § 1208.16(b)(2))."
      ],
      [
       "Disfavored-group approach (Ninth Circuit)",
       "A Ninth Circuit exception to individual targeting that builds on pattern or practice. A group facing discrimination and mistreatment can be “disfavored” even without a pattern or practice of persecution, and a member can then meet the burden with a lesser showing of individual risk. Examples: ethnic Chinese in Indonesia (Sael v. Ashcroft); ethnic Albanians in Kosovo (Hoxha v. Ashcroft).",
       [
        "Most other circuits have rejected it or not addressed it (e.g., the First, Third, and Eleventh Circuits rejected it; the Eleventh called it a departure from the statute’s plain language). Older Fourth and Eighth Circuit cases give some support: “the more egregious the showing of group persecution … the less evidence of individualized persecution must be adduced.”"
       ]
      ]
     ],
     "tip": "Pattern or practice replaces the individual-targeting showing entirely; the disfavored-group approach only lowers it, and only in the Ninth Circuit.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Internal Relocation",
     "explain": [
      "An applicant cannot establish a well-founded fear or a threat to life or freedom if they could avoid harm by moving to another part of their country and it would be reasonable to expect them to do so (§ 1208.13(b)(3); § 1208.16(b)(3)). Both conditions must be met for relocation to defeat the claim.",
      "When the persecutor is the government, the applicant gets a presumption that relocation is not reasonable, because a government has nationwide reach and can persecute anywhere. The government can rebut that by a preponderance of the evidence. This idea is consistent with UNHCR’s position and other States’ practice (also called the “internal flight alternative”)."
     ],
     "items": [
      [
       "Avoid persecution",
       "Relocating to the proposed area would avoid the feared persecution. If the applicant would still face persecution there, relocation is not an option."
      ],
      [
       "Be reasonable",
       "Relocation must be reasonable under all the circumstances. The regulations list factors adjudicators should consider but are not limited to: age, health, gender, social and family ties, ongoing civil strife, administrative, economic, or judicial infrastructure, geographical limits, and social and cultural constraints. No single factor is necessarily decisive, and the list is not exhaustive."
      ],
      [
       "Government persecutor",
       "If the persecution is by the government, there is a rebuttable presumption that persecution is countrywide and relocation is unreasonable. DHS must rebut by a preponderance of the evidence that relocation would be reasonable."
      ],
      [
       "UNHCR guidance",
       "International law does not require threatened people to try every refuge in their own country before seeking asylum; asylum is not a last resort. UNHCR’s 2003 Guidelines ask whether the area is practically, safely, and legally accessible, whether the person would face new persecution or other serious harm there, and whether they could lead a relatively normal life without undue hardship."
      ]
     ],
     "tip": "Government persecutor → presumption relocation is unreasonable; DHS must rebut by a preponderance. No duty to try every refuge first.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Past Persecution Presumption",
     "explain": [
      "A person who has already been persecuted on a protected ground is presumed to have a well-founded fear of future persecution on that same ground (§ 1208.13(b)(1)). The same presumption applies to withholding: past persecution creates a presumption that life or freedom would be threatened (§ 1208.16(b)(1)). The reason: someone targeted for a protected reason in the past reasonably fears harm in the future.",
      "The burden then shifts. The government can rebut the presumption by a preponderance of the evidence with one of two showings. The presumption and rebuttal work the same way for asylum and withholding; they only differ after rebuttal (see Humanitarian Asylum)."
     ],
     "items": [
      [
       "Presumption",
       "Past persecution on a protected ground → presumed well-founded fear (asylum) or presumed threat to life or freedom (withholding) on that ground. If the applicant’s fear of future persecution is unrelated to the past persecution, no presumption applies and the applicant must prove the fear is well-founded."
      ],
      [
       "Same ground, not same harm",
       "The presumption covers future persecution on the same protected ground, which need not be the same type of harm. In Matter of A-T- (BIA 2007), the Board held past female genital cutting (FGC) rebutted the presumption because it could only happen once. Attorney General Mukasey vacated that decision (2008): FGC can be repeated, and more basically, the feared future harm does not have to match the past harm. A woman who suffered FGC because of a gender-defined social group is presumed to face other persecution on account of that group."
      ],
      [
       "Fundamental change in circumstances",
       "The government shows circumstances have changed so fundamentally that the applicant no longer has a well-founded fear (or no longer faces a threat to life or freedom) in their country."
      ],
      [
       "Safe and reasonable internal relocation",
       "The government shows the applicant could avoid future persecution by moving to another part of the country, and it would be reasonable under all the circumstances to expect that. If the persecutor is the government, relocation is presumed unreasonable."
      ],
      [
       "Who must prove it",
       "DHS (the government) bears the burden of rebuttal by a preponderance of the evidence. If DHS rebuts, an asylum officer refers or denies, or an IJ denies, unless humanitarian asylum applies."
      ]
     ],
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Humanitarian Asylum",
     "explain": [
      "Once the government rebuts the past-persecution presumption, asylum and withholding split. Asylum can still be granted in the exercise of discretion through “humanitarian asylum” (8 C.F.R. § 208.13(b)(1)(iii)). Withholding has no equivalent; once rebutted, the withholding claim fails.",
      "The concept comes from Convention Art. 1.C(6), which let people with “compelling reasons arising out of previous persecution” refuse to return even without current fear. It was written for Holocaust survivors, for whom return would have been psychologically devastating."
     ],
     "items": [
      [
       "Compelling reasons",
       "The applicant has compelling reasons for being unwilling or unable to return arising out of the severity of the past persecution (8 C.F.R. § 208.13(b)(1)(iii)(A)). The past persecution was so severe that return should not be required even though future risk has been rebutted."
      ],
      [
       "Other serious harm",
       "A reasonable possibility of other serious harm on return. The harm does not have to be on account of a protected ground (no nexus needed), but it must be so serious that it equals the severity of persecution.",
       [
        "Kone v. Holder (2d Cir. 2010): mental anguish could qualify where a woman who had suffered FGC faced choosing between leaving her daughter or watching her daughter undergo FGC.",
        "Boer-Sedano v. Gonzales (9th Cir. 2005): the IJ failed to analyze other serious harm for a gay man from Mexico with AIDS who faced lack of specialized treatment and social constraints due to his HIV status."
       ]
      ],
      [
       "Prerequisite",
       "Both routes require qualifying past persecution. Other serious harm is not a freestanding asylum claim; a person with no past persecution cannot use it."
      ],
      [
       "Withholding",
       "No humanitarian version. Once the presumption is rebutted, there is no relief based on severe past persecution or other serious harm."
      ]
     ],
     "tip": "Both need qualifying past persecution. Withholding has no humanitarian version.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "Process & Rights",
   "overview": [
    "This unit is about how an asylum claim gets decided in the United States and what procedural protections the applicant has along the way. Winning asylum depends on procedure as much as on the refugee definition: whether the person has a lawyer, an accurate interpreter, time to gather evidence, a fair judge, and some way to appeal can decide whether a valid claim is ever heard.",
    "The unit moves in three steps. First, the structure: who decides (asylum officers at USCIS, immigration judges at EOIR, the BIA, then the federal circuit courts), how a case reaches each one, and what standard of review applies at each level. Second, the constitutional question: how much due process a noncitizen gets, which historically turned on whether the person had made an \"entry\" and after IIRIRA turns on \"admission,\" ending with DHS v. Thuraissigiam. Third, specific fairness issues: counsel (and Lozada motions for bad counsel), interpretation, detention and bond, children and Flores, biased adjudicators, and the right to work while a claim is pending.",
    "On the exam, expect to identify which forum a person is in, what rights attach there (for example, counsel only at no government expense under INA § 240 and § 292), what standard of review a court applies, whether a person can get bond, and what a Lozada motion requires. Thuraissigiam and the Sandra hypothetical test whether you can apply the entry/admission line to new facts."
   ],
   "check": {
    "status": "thin",
    "note": "Two outline items have no support in the Day 6 or Day 7 notes, the extracted Ch. 12 slides, or the Ch. 12 textbook text: the NTA burden split (DHS proves alienage; respondent shows manner and means of entry) and the Fifth Circuit due process elements with the substantial-prejudice requirement. Both are kept as stated in the outline but could not be explained further. Most Ch. 12 slide content is image-only and did not extract."
   },
   "blocks": [
    {
     "title": "Routes to Protection",
     "explain": [
      "There are several doors into the U.S. protection system, and which door a person uses decides who hears the claim and what standard applies. The outline's route table sorts them by situation: overseas refugees, affirmative applicants, arriving people in expedited removal who express fear, defensive applicants in removal proceedings, and people with reinstated or certain administrative removal orders.",
      "Fear screenings (credible fear and reasonable fear) are gatekeeping steps. Passing a screen gets the person to a fuller hearing; it never grants asylum by itself."
     ],
     "items": [
      [
       "Overseas refugee resettlement",
       "Decided outside the U.S. through USRAP (the U.S. Refugee Admissions Program) by the DHS/USCIS Refugee Corps. The result of a positive overseas refugee determination is admission and resettlement in the United States."
      ],
      [
       "Affirmative asylum",
       "A person who is not in removal proceedings files with a USCIS asylum officer and gets an asylum merits interview. The outcome is a grant, a denial, or a referral to immigration court."
      ],
      [
       "Credible fear (CFI)",
       "For an arriving applicant in expedited removal who expresses fear. The asylum officer asks whether there is a \"significant possibility\" the person could establish asylum eligibility. A positive screen sends the person to fuller adjudication; it is not a grant of asylum. A negative screen can be reviewed by an IJ (immigration judge)."
      ],
      [
       "Reasonable fear (RFI)",
       "Used for people with reinstated removal orders and certain administrative removal orders. The threshold is higher: a \"reasonable possibility\" of persecution or torture. A positive finding leads only to withholding and CAT (Convention Against Torture) proceedings; asylum is unavailable on this route."
      ],
      [
       "Defensive asylum",
       "Asylum raised as a defense in removal proceedings before an IJ, decided on the asylum and withholding merits. The IJ's decision can be appealed to the BIA (Board of Immigration Appeals) and then to a circuit court, subject to statutory limits on review."
      ],
      [
       "CFI/RFI vs. merits",
       "Fear screening is a separate step from the asylum merits interview, and the screening threshold depends on the proceeding the person is in.",
       [
        "After a negative screen, the IJ's review is the end of the administrative road: there is no further BIA appeal, and federal court review is sharply restricted.",
        "The 2022 asylum-processing rule moved initial merits decisions for covered expedited-removal cases to asylum officers, with merits interviews 21–45 days after a positive credible fear finding and de novo IJ review if relief was denied; the speed raised concerns about getting counsel and evidence, and the rule was paused in April 2023."
       ]
      ]
     ],
     "tip": "Know which screen goes with which route: credible fear (significant possibility of asylum eligibility) for expedited removal; reasonable fear (reasonable possibility, higher bar) for reinstatement and administrative removal, which leads only to withholding/CAT.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Affirmative (Asylum Office)",
     "explain": [
      "An affirmative application is one the applicant starts on her own, before the government has put her in removal proceedings. It goes to a USCIS (U.S. Citizenship and Immigration Services) asylum officer. USCIS is part of DHS (Department of Homeland Security); immigration courts are part of DOJ (Department of Justice).",
      "Specialized asylum officers replaced ordinary INS examiners starting in 1991, with training and broader country-information sources meant to reduce the earlier influence of U.S. foreign-policy preferences on grants. Disparities among offices and officers still exist."
     ],
     "items": [
      [
       "Who",
       "Anyone outside removal proceedings, whether lawfully present or undocumented, may file affirmatively. The decision-maker is a USCIS asylum officer within DHS."
      ],
      [
       "Interview",
       "The interview is nonadversarial: there is no government lawyer arguing against the applicant, and the officer's job is to draw out all relevant information. The applicant may bring counsel, witnesses, affidavits, and other evidence, and may comment on the evidence afterward.",
       [
        "Counsel is allowed only at no government expense: the applicant may hire or find a lawyer, but the government will not supply one.",
        "The applicant generally must bring her own interpreter. Failing to bring one without good cause can be treated as a failure to appear, risking dismissal or waiver of the interview."
       ]
      ],
      [
       "Outcomes",
       "The officer grants, denies, or refers. What happens when asylum is not granted depends on the applicant's status:",
       [
        "No lawful status: the case is referred to immigration court, where the applicant gets another chance to seek protection defensively.",
        "Lawful status (for example, a valid visa): the applicant ordinarily receives a denial and keeps that status until it expires.",
        "A notice of intent to deny lets the applicant respond in writing and add evidence within 16 days."
       ]
      ]
     ],
     "tip": "Referral is not a loss for an applicant without status: it moves the claim to immigration court for a fresh hearing.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Defensive (Immigration Court)",
     "explain": [
      "A defensive application is asylum raised as a defense to removal. It comes up after an affirmative referral, an ICE (Immigration and Customs Enforcement) encounter, or a fear screening. Unlike the asylum office, immigration court is adversarial: an IJ presides and an ICE attorney represents the government and may cross-examine witnesses.",
      "INA § 240(b) (Immigration and Nationality Act) lists the respondent's hearing rights. Testimony is sworn and recorded, and either side may appeal the IJ's decision to the BIA within 30 days."
     ],
     "items": [
      [
       "Structure",
       "DOJ → EOIR (Executive Office for Immigration Review) → immigration courts. Proceedings are adversarial, with an IJ deciding the case and an ICE attorney prosecuting for the government."
      ],
      [
       "NTA",
       "The Notice to Appear is the charging document. It contains factual allegations and charges of removability under INA § 212 or § 237, and the court decides whether to sustain the charges. Per the outline, DHS bears the burden of proving alienage, and the respondent must show the manner and means of entry."
      ],
      [
       "§ 240(b) rights",
       "The respondent has the right to:",
       [
        "Counsel of her choosing, at no expense to the government;",
        "A reasonable opportunity to examine the evidence against her, present her own evidence, and cross-examine government witnesses; and",
        "A complete record of the proceeding."
       ]
      ],
      [
       "IJ powers",
       "The IJ administers oaths, receives evidence, questions witnesses, and may subpoena witnesses and documents."
      ],
      [
       "Limits on the rights",
       "The right to see adverse evidence has a national-security-information exception concerning admission or discretionary relief. If the respondent is mentally incompetent, safeguards must protect her rights."
      ],
      [
       "Hearing format",
       "Hearings may be in person or by video. A merits hearing by telephone requires the respondent's consent after she is advised of the alternatives."
      ]
     ],
     "check": {
      "status": "thin",
      "note": "The NTA burden split (DHS proves alienage; respondent shows manner and means of entry) appears only in the outline. Day 6 notes, Ch. 12 slides, and the Ch. 12 textbook text do not explain it."
     }
    },
    {
     "title": "Right to a Hearing, Pretermission & Docket Tools",
     "explain": [
      "This block covers whether an applicant is guaranteed a full evidentiary hearing and how docket-management rules affect access to one. Pretermission means the IJ denies the application on the papers, without a hearing, because the application does not make out a prima facie (on its face) case.",
      "The reading's concern is that speed and paper denials can stop meritorious claims from ever being heard, especially for unrepresented people."
     ],
     "items": [
      [
       "Right to a hearing",
       "Matter of E-F-H-L- (BIA 2014) recognized a right to a hearing for asylum and withholding applicants without first requiring a prima facie showing. Attorney General Sessions vacated that decision in 2018."
      ],
      [
       "Pretermission",
       "Denial without an evidentiary hearing where the application and supporting evidence do not establish a prima facie case. A December 2020 rule would have codified this but was enjoined; practitioners reported pretermissions even before the rule."
      ],
      [
       "Administrative closure",
       "A docket-management tool letting IJs set cases aside and prioritize others. Matter of Castro-Tum had eliminated it, and the 2020 appellate rule codified that; the rule was enjoined in March 2021, and Matter of Cruz-Valdez (A.G. 2021) overruled Castro-Tum and restored administrative closure."
      ],
      [
       "Accelerated procedures",
       "Shortened briefing and hearing schedules limit access to counsel, evidence, and preparation, and lead to in absentia orders (removal ordered when the person does not appear).",
       [
        "Dedicated Docket (2021) aimed to decide family cases within 300 days. In the Los Angeles docket studied, 70% had no counsel, 99.1% of completed cases ended in removal, and 72.4% of those orders were in absentia.",
        "Boston Dedicated Docket: 20,000 cases assigned in the first year, a 4.2% asylum grant rate, and attorneys declining these cases (slides). In the Boston study, every successful applicant had counsel.",
        "Reopening an in absentia order requires another procedural step that is hard to do without a lawyer.",
        "The 2024 Recent Arrivals Docket targeted decisions for certain single adults within 180 days."
       ]
      ],
      [
       "2020 appellate rule",
       "Shortened BIA briefing, restricted extensions and remands, let IJs challenge BIA decisions through the EOIR Director, and codified Castro-Tum. Enjoined in March 2021."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "BIA Appeals",
     "explain": [
      "The BIA is the appellate body inside DOJ/EOIR that reviews IJ decisions nationwide. Its decisions can be reviewed and replaced by the Attorney General, which raises concerns about political influence and independence.",
      "The 2002 streamlining reforms changed how much the BIA looks at: it now gives deference to IJ fact-finding, and one member can decide a case, sometimes with no opinion."
     ],
     "items": [
      [
       "BIA",
       "Facts found by the IJ are reviewed for clear error, meaning the BIA defers unless the finding is clearly wrong. Questions of law, discretion, and judgment are reviewed de novo, meaning the BIA decides them fresh without deference.",
       [
        "Streamlining changed factual review from de novo to clear error."
       ]
      ],
      [
       "Streamlining",
       "Single-member decisions and affirmances without opinion (AWOs) are features of streamlined review. Heavy quotas and fewer explanations weaken error correction and push more work onto the federal courts."
      ],
      [
       "AG review",
       "The Attorney General can review and replace BIA decisions, as with E-F-H-L-, Castro-Tum, Compean, and M-S- in this unit."
      ]
     ],
     "tip": "Do not mix up the two layers: BIA uses clear error for facts; circuit courts use substantial evidence for facts.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Standards of Review (Federal Courts)",
     "explain": [
      "After the BIA, a final removal order goes to a federal circuit court by petition for review. Supreme Court review is by petition for certiorari, which is discretionary and rare. The petition must be filed within 30 days, there is no automatic stay of removal, and venue is the circuit where the IJ completed proceedings.",
      "How much deference the court gives depends on the kind of question. Congress also cut off review of some issues entirely, but a savings clause keeps constitutional claims and questions of law reviewable."
     ],
     "items": [
      [
       "Circuit (petition for review)",
       "Questions of law: de novo. Findings of fact: substantial evidence. Discretionary decisions: arbitrary and capricious (the court overturns only an irrational or unexplained exercise of discretion)."
      ],
      [
       "Substantial evidence",
       "The agency's factual findings stand unless any reasonable adjudicator would be compelled to reach the opposite conclusion. Evidence that merely supports a different result is not enough to reverse."
      ],
      [
       "Limits",
       "Statutes (1996 and 2005 limitations, per the slides) restrict review of certain discretionary decisions, criminal-removal cases, and asylum-bar determinations.",
       [
        "The savings clause preserves review of constitutional claims and questions of law, including applying law to undisputed facts.",
        "CAT facts are reviewable (Nasrallah)."
       ]
      ],
      [
       "Nasrallah v. Barr (2020)",
       "A Lebanese lawful permanent resident was removable for crimes. The IJ granted CAT protection, the BIA reversed, and the Eleventh Circuit said the criminal-removal bar blocked factual review. Held: circuit courts may review factual challenges to CAT denials under the substantial-evidence standard, even in the criminal-removal context.",
       [
        "Access to review is not a win on the merits: on remand the Eleventh Circuit denied the petition because substantial evidence supported the finding that torture was not more likely than not."
       ]
      ]
     ],
     "tip": "Substantial evidence is very deferential: the question is whether the record compels the opposite result, not whether it permits one.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Minimum Fair Process & Mathews",
     "explain": [
      "Legomsky's \"Asylum Seeker's Bill of Rights in a Non-Utopian World\" asks what minimum process is fair given real limits on money and political will. The goals are accuracy, efficiency, and acceptability (public and litigant confidence).",
      "Mathews v. Eldridge supplies the general due process test the casebook uses to evaluate procedures: due process is flexible, and the process owed depends on weighing three factors."
     ],
     "items": [
      [
       "Minimum fair process",
       "Four essentials: adequate preparation, suitable adjudicators, a fair opportunity to be heard, and review.",
       [
        "Preparation: practical access to knowledgeable counsel and evidence, and time to get documents, investigate, and line up witnesses; trauma, unfamiliar law, and language barriers increase the need.",
        "Suitable adjudicators: independent (decisions based on law and evidence, not fear of job loss), unbiased (no personal stake, adjudication separate from prosecution), and culturally aware (smiling or avoiding eye contact is not automatically a sign of lying).",
        "Fair hearing: adequate interpretation, qualified counsel, enough time, the right to testify, call witnesses, present documents, and rebut government evidence. Biased evidence such as State Department reports is not worthless, but the applicant should be able to expose the bias.",
        "Review and written reasons: reasons slow hasty decisions, expose errors, explain the result, and allow review; the possibility of review improves decisions even in cases never appealed."
       ]
      ],
      [
       "Adjudicator independence",
       "IJs, asylum officers, and BIA members lack the life tenure and salary protection of Article III judges, so formal adjudication does not by itself guarantee independence."
      ],
      [
       "Remote and expedited settings",
       "Remote, shipboard, detained, and expedited settings predictably undermine these safeguards; Legomsky would avoid them absent compelling circumstances. His floor is fair access to a fair hearing."
      ],
      [
       "Mathews",
       "Procedural adequacy balances three factors:",
       [
        "The private interest affected by the government action;",
        "The risk of erroneous deprivation under current procedures and the likely value of additional or substitute safeguards; and",
        "The government's interests, including the fiscal and administrative burden of more process."
       ]
      ]
     ],
     "multi": true,
     "tip": "Judge Paez used the Mathews test in C.J.L.G. to argue that unrepresented children face a high risk of error in removal proceedings.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Due Process: The Entry Distinction",
     "explain": [
      "Historically, how much constitutional protection a noncitizen had depended on whether she had made an \"entry.\" People who had entered got deportation proceedings and constitutional due process; people who had not entered got exclusion proceedings and only the process Congress chose to give.",
      "The entry fiction is the idea that a person can be physically inside the U.S. and still be treated as standing at the border. Parole (release into the country without admission) did not count as entry, and the Court treated even a returning longtime resident as at the threshold."
     ],
     "items": [
      [
       "Historical entry",
       "Before IIRIRA (the Illegal Immigration Reform and Immigrant Responsibility Act of 1996), entry required: (1) physical presence; (2) inspection and admission, or intentional evasion of inspection; and (3) freedom from official restraint. Unlawful entry still counted as entry; lawful admission was only one way to enter."
      ],
      [
       "Deportation vs. exclusion",
       "Those who had entered faced deportation proceedings; those who had not faced exclusion proceedings."
      ],
      [
       "Entry fiction",
       "Parole isn't entry: a paroled person is physically present but legally treated as never having entered."
      ],
      [
       "Equal protection",
       "Yick Wo v. Hopkins (1886) applied equal protection to all persons within U.S. territorial jurisdiction. Wong Wing v. United States (1896) recognized Fifth and Sixth Amendment protections for noncitizens within the country."
      ],
      [
       "Knauff v. Shaughnessy (1950)",
       "A U.S. citizen's noncitizen spouse seeking entry could not demand more process than Congress authorized. The Court relied on plenary power: whatever procedure Congress provides is due process for exclusion."
      ],
      [
       "Returning residents (Mezei, 1953)",
       "A longtime resident returned from a long trip abroad, was excluded without a hearing, and was held on Ellis Island because no other country would take him. The Court treated him as at the threshold of initial entry and rejected his due process challenge, relying on plenary power and national security, despite his physical presence and prolonged confinement."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Due Process: Refugee Act of 1980",
     "explain": [
      "The Refugee Act lets anyone physically present or arriving apply for asylum regardless of status, so access to the asylum process no longer depends on the exclusion/deportation line. Whether the Act also expanded constitutional rights stayed disputed.",
      "The cases split between enforcing a fair statutory and regulatory process and recognizing an independent constitutional right. Most courts did the first and avoided the second."
     ],
     "items": [
      [
       "Statutory access",
       "Applications are open to people physically present or arriving, irrespective of status; statutory access does not itself decide how much constitutional protection applies."
      ],
      [
       "Applicants who have entered (Haitian Refugee Center v. Smith, 5th Cir. 1982)",
       "Haitians who had entered challenged perfunctory asylum hearings. The Fifth Circuit held they had due process rights and a protected opportunity to seek asylum, based on the asylum regulations and U.S. accession to the 1967 Protocol, although a grant remains discretionary."
      ],
      [
       "Augustin v. Sava (2d Cir. 1984)",
       "Bad translation undermined a Haitian applicant's exclusion hearing. The Act and regulations protect a meaningful opportunity to submit and substantiate an asylum claim, including accurate interpretation. The court found statutory and regulatory violations and suggested, without deciding, a constitutional ground."
      ],
      [
       "Jean v. Nelson (1984–85)",
       "Detained, unadmitted Haitians challenged racially and nationally discriminatory parole decisions. The Eleventh Circuit rejected constitutional protection for admission applicants; the Supreme Court decided on statutory and regulatory grounds (parole must be nondiscriminatory) and avoided the constitutional question. Marshall's dissent argued that exclusion power does not free the government from all constitutional limits on how it treats detainees."
      ],
      [
       "Marincas v. Lewis (3d Cir. 1996)",
       "Read the asylum regulations to require fair procedures for stowaways without holding they had constitutional due process rights."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Due Process After IIRIRA & Thuraissigiam",
     "explain": [
      "IIRIRA replaced \"entry\" with \"admission\": lawful entry after inspection and authorization. That means a person who crossed without inspection (EWI) years ago is now \"unadmitted,\" even though she would have counted as having entered under the old law. The open constitutional question is whether a statutory label can take away protections people used to have.",
      "DHS v. Thuraissigiam (2020) answered part of that question for a person caught just inside the border: he had only the procedure Congress gave him. How far that holding reaches is the live issue, tested by the Sandra hypothetical."
     ],
     "items": [
      [
       "After IIRIRA",
       "\"Admission\" replaces entry; EWI (entered without inspection) people are unadmitted even though physically present."
      ],
      [
       "Zadvydas v. Davis (2001)",
       "Two previously admitted noncitizens challenged indefinite detention after removal orders. Using constitutional avoidance, the Court limited post-removal-order detention to the period reasonably necessary to accomplish removal, with six months presumptively reasonable. It reaffirmed protection for people inside the country but left initial-admission cases unresolved."
      ],
      [
       "Periodic bond hearings (Jennings v. Rodriguez, 2018)",
       "The detention statutes do not require bond hearings every six months; the Court rejected the lower court's reading. The constitutional question is separate and open. Breyer's dissent: people detained inside the country are physically here, and a legal fiction cannot make constitutional protection disappear."
      ],
      [
       "F.L.B. v. Lynch (W.D. Wash. 2016)",
       "Children seeking appointed counsel were not categorically excluded from due process just because they had not been lawfully admitted; the court distinguished entry from permission to enter, without deciding that every child gets appointed counsel."
      ],
      [
       "Castro v. DHS (3d Cir. 2016)",
       "Twenty-eight Central American women and children caught shortly after entry were treated as initial-admission applicants; statutory limits on habeas review of expedited removal were upheld."
      ],
      [
       "Entry without admission (Thuraissigiam)",
       "A Sri Lankan asylum seeker was caught 25 yards inside the southern border. An asylum officer found no credible fear and an IJ agreed. He sought habeas review alleging the wrong fear standard, interpreter and officer misunderstanding, and inadequate explanation. Statutory habeas (§ 1252(e)(2)) covers only alienage, whether an expedited removal order exists, and whether the person is outside expedited removal. The Supreme Court (7–2 on the judgment) held:",
       [
        "Due process: a noncitizen in his position has only the admission-related procedural rights Congress supplied; being physically just inside the border does not require more constitutional process.",
        "Suspension Clause: habeas secures release from unlawful custody, not admission, further asylum proceedings, or permission to remain, so the limits did not unconstitutionally suspend the writ.",
        "Scope: limited to someone caught immediately at the border with no prior lawful admission. Breyer and Ginsburg concurred only in the judgment on those narrow facts.",
        "Dissent (Sotomayor, Kagan): he challenged an unfair process, including translation failures; the Fifth Amendment protects all persons regardless of admission."
       ]
      ],
      [
       "Applications after Thuraissigiam",
       "Diana Li argues it should be limited to recent entrants stopped right at the border. Courts used it to reject due process claims in Bhaktibhai-Patel (2d Cir. 2022, reinstatement/withholding-only), Martinez v. LaRose (6th Cir. 2020, 34-month detention), and Mendoza-Linares (9th Cir. 2022, negative credible fear). Alonso-Juarez (9th Cir. 2023) preserved circuit review of a negative reasonable-fear finding."
      ],
      [
       "Sandra hypothetical",
       "A Salvadoran lesbian woman entered in 2019 at 16, finished high school, works, is engaged, and filed for asylum in 2019. In 2022 she spent two weeks with her dying aunt in El Salvador, re-entered the same way, and was caught within minutes; she received a negative credible fear finding (she was grieving and upset) affirmed by an IJ, and seeks district court review of her expedited removal order.",
       [
        "Facts that separate her from Thuraissigiam: three years of prior residence, community and family ties, and an asylum application pending when she left.",
        "Question: does the majority control, or would the Breyer/Ginsburg concurrence, limited to someone just past the border with no prior ties, come out differently?"
       ]
      ]
     ],
     "tip": "On a Thuraissigiam fact pattern, list the facts that match (caught at the border, no lawful admission) and the facts that differ (prior residence, ties, pending application), then apply the concurrence's narrower line.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Due Process in the Fifth Circuit",
     "explain": [
      "The outline states the Fifth Circuit's test for a due process violation in removal proceedings: three procedural guarantees plus a requirement that the noncitizen show she was substantially prejudiced. The proceedings must also meet standards of fundamental fairness.",
      "The prejudice requirement parallels the rest of the unit: interpretation errors (Perez-Lastor) and ineffective counsel (Lozada) also require a showing that the defect affected the result."
     ],
     "items": [
      [
       "Fifth Circuit",
       "Due process requires:",
       [
        "Notice of the charges;",
        "A hearing before an executive or administrative tribunal; and",
        "A fair opportunity to be heard."
       ]
      ],
      [
       "Substantial prejudice",
       "A due process claim requires an initial showing of substantial prejudice: the noncitizen must show the procedural defect harmed her case."
      ],
      [
       "Fundamental fairness",
       "Removal proceedings must meet standards of fundamental fairness."
      ]
     ],
     "multi": true,
     "check": {
      "status": "thin",
      "note": "Appears only in the outline. Day 6 and Day 7 notes, the Ch. 12 slides, and the Ch. 12 textbook text contain no Fifth Circuit due process test, cases, or explanation of 'substantial prejudice.'"
     }
    },
    {
     "title": "Legal Representation",
     "explain": [
      "There is a right to counsel in removal proceedings, but only \"at no expense to the Government\" (INA § 240 and § 292). Applicants can hire or find a lawyer; the government will not pay for one. Combined with detention, this makes counsel very hard to get.",
      "Representation is the single most important factor in the outcome of an asylum case (Refugee Roulette). Protective rules ensure people are told about the right and given time to find a lawyer; the open fights are over appointed counsel for children and the mentally incompetent."
     ],
     "items": [
      [
       "Right to counsel",
       "Exists only at no expense to the Government (INA § 292). Detention, remote facilities, restricted phone calls and visits, and transfers make counsel harder to get, and officers and IJs sometimes pressure detainees to stop looking. Due process also protects against undue interference with counsel, but no court has ordered funded counsel for indigent noncitizens generally."
      ],
      [
       "Representation data",
       "Eagly & Shafer (2016): only 37% of all immigrants and 14% of detained immigrants had counsel. Represented detainees were released 44% vs. 11% and won relief 49% vs. 23%; never-detained represented people won 63% vs. 13% (slides: 4x more likely to be released, 5x more likely to win relief). 90% of unrepresented people ordered removed were ordered removed in absentia.",
       [
        "Detained courts (2024): only 23% of detained immigrants find lawyers vs. 61% non-detained, and 96% of unrepresented detainees were ordered removed; \"detention is virtually synonymous with deportation.\"",
        "Women with children had 14 times better odds with counsel; unaccompanied children stayed 73% of the time with counsel vs. 15% without."
       ]
      ],
      [
       "Protective rules",
       "Before a merits hearing:",
       [
        "Notice of the right to counsel when the charging document is served and again at the hearing;",
        "A list of pro bono providers, which the IJ must confirm the respondent received;",
        "The IJ must ask whether the respondent wants counsel; and",
        "The hearing generally cannot be held until at least 10 days after the NTA is served. Breaking these rules can violate INA § 292."
       ]
      ],
      [
       "Brown v. District Director",
       "Example of the obstacles: a Liberian detainee was moved through several jails without his lawyer being told, could call only on Sundays when the office was closed, and had no law library. His lawyer missed a deadline, the IJ refused the late application and ordered him excluded, and the BIA treated the application as abandoned."
      ],
      [
       "REAL ID Act corroboration",
       "If the IJ decides corroboration is needed, it must be provided unless the applicant does not have it and cannot reasonably obtain it. A thin record can also waive issues on appeal, which is why counsel's performance \"can be fateful\" (IJ Brennan)."
      ],
      [
       "Mentally incompetent detainees",
       "Entitled to counsel at government expense: Franco-Gonzalez v. Holder (C.D. Cal. 2013). ICE and EOIR then adopted screening and competency procedures (the National Qualified Representative Program)."
      ],
      [
       "Children",
       "No right to appointed counsel, even in adversarial immigration court.",
       [
        "J.E.F.M. v. Lynch (9th Cir. 2016): under §§ 1252(a)(5) and (b)(9), any issue, legal or factual, arising from removal-related activity is reviewable only through a petition for review, so no district-court class action; children must raise the claim one at a time. The government's witness, IJ Weil, testified he had taught immigration law to 3- and 4-year-olds.",
        "C.J.L.G. v. Sessions (9th Cir. 2018): a pro se Honduran child lost his due process claim to counsel; Judge Owens noted that unaccompanied minors present \"a different question.\" En banc (2019) the court declined to decide because he now had counsel.",
        "Whether due process requires appointed counsel for unaccompanied minors remains open."
       ]
      ],
      [
       "Cost and reform debate",
       "Taylor argues savings from no funded counsel are \"illusory\" because represented cases move faster. The ABA (2010, 2019) recommends funded counsel for indigent noncitizens, counsel for unaccompanied minors and people with mental disabilities, and eliminating § 292's \"no expense\" limit. Chazaro argues funded counsel is the wrong goal because most expulsions happen outside court; Hlass and Boaz offer other approaches."
      ]
     ],
     "tip": "Children get no appointed counsel; mentally incompetent detainees do (Franco-Gonzalez). This distinction is a likely test point.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Counsel & Lozada",
     "explain": [
      "Because counsel matters so much, bad counsel can ruin a case. Matter of Lozada (BIA 1988) lets a respondent reopen her case for ineffective assistance of counsel, but only if the proceeding was so fundamentally unfair that she was prevented from reasonably presenting her case.",
      "The three procedural requirements screen out weak or collusive claims: the affidavit pins down what the lawyer was hired to do, notice gives the lawyer a chance to respond, and the bar complaint shows the claim is serious. The respondent must then also show prejudice."
     ],
     "text": "Right to counsel only at no government expense (INA § 292). Children have no right to appointed counsel; mentally incompetent detainees do. Lozada ineffective-assistance motion requires:",
     "items": [
      [
       "Affidavit",
       "An affidavit from the respondent describing the agreement with counsel: what the lawyer agreed to do and did not do."
      ],
      [
       "Notice to counsel",
       "Proof that former counsel was told of the allegations and given a chance to respond."
      ],
      [
       "Bar complaint",
       "If counsel's conduct was an ethical or legal violation, proof of a complaint filed with the licensing authority, or an explanation for why none was filed."
      ],
      [
       "Prejudice",
       "The respondent must show that competent counsel would have acted differently and that the performance affected the outcome. Courts split between nearly requiring proof she would have won and requiring only some likelihood of a different result."
      ],
      [
       "Matter of Compean (2009)",
       "AG Mukasey held there is no right to effective assistance because there is no constitutional right to counsel. AG Holder vacated it the same year, so Lozada applies pending rulemaking."
      ]
     ],
     "multi": true,
     "tip": "Before merits: notice of right to counsel (twice), pro bono list confirmed, IJ asks if they want counsel, 10 days after NTA service. For Lozada, list all three procedural steps and then prejudice; missing the bar complaint requires an explanation.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Language Interpretation",
     "explain": [
      "A fair hearing depends on accurate interpretation, because the applicant's testimony is often the main evidence. Most states provide interpreters; the U.S. provides them in immigration court but generally not at the asylum office.",
      "Bad interpretation is a due process violation only if it denied a full and fair hearing and caused prejudice. Even without a constitutional violation, faulty translation can undercut an adverse credibility finding (Ilunga)."
     ],
     "items": [
      [
       "Interpreters",
       "In immigration court the court provides the interpreter, who must be fluent in both languages and interprets consecutively (after each statement), not simultaneously. At the asylum office, applicants generally must bring their own (exceptions: Afghan applicants after Operation Allies Welcome, and remote interpretation during COVID)."
      ],
      [
       "Partial interpretation",
       "Usually only the questions put to the respondent are interpreted, so she cannot follow exchanges between the judge and counsel or objections. El Rescate (9th Cir. 1992): this is not a facial violation."
      ],
      [
       "Due process standard",
       "Perez-Lastor (9th Cir. 2000): a violation requires deprivation of a \"full and fair\" hearing plus prejudice."
      ],
      [
       "Ilunga v. Holder (4th Cir. 2015)",
       "A DRC opposition party worker was imprisoned and tortured daily, escaped, and arrived at Dulles without a visa. The court held the adverse credibility finding lacked substantial evidence, treating the credibility problems as tied to interpretation, and remanded."
      ],
      [
       "Family-member interpreters",
       "Family interpreters risk distortion: they can distort or suppress testimony (in the interview exercise, a client's brother did not know about her sexual orientation). The safeguard is a neutral, qualified interpreter."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Detention & Bond",
     "explain": [
      "International guidance says detention of asylum seekers should be rare. Flight risk and public safety can justify it only after an individualized assessment; deterrence is never a permissible reason (UNHCR Guideline 4). The U.S. paroled most arrivals from 1954 to 1982, cut back in 1982, and expanded mandatory detention and created expedited removal in IIRIRA (1996).",
      "Whether a person can get out depends on the statute she is detained under. INA § 236(a) is the general bond rule; § 236(c) is mandatory detention for criminal and terrorism grounds; arriving aliens and people with positive credible fear findings in expedited removal get no bond and can be released only by parole."
     ],
     "items": [
      [
       "Detention rationales",
       "Flight risk (denied applicants will not leave), public security, and deterrence. UNHCR: the first two are legitimate only with an individualized assessment; deterrence is impermissible because there is no evidence it works and it is not individualized.",
       [
        "R.I.L.R. v. Johnson (D.D.C. 2015) enjoined the 2014 family \"no-release\" policy: immigration detention is civil, and blanket deterrence is punitive and likely unconstitutional."
       ]
      ],
      [
       "ICE custody",
       "A DHS officer decides whether to detain and at what custody level (recognizance, order of supervision, bond, or electronic monitoring). The Risk Classification Assessment scores danger and flight risk, but its recommendations are non-binding, so officers override them. A bed mandate (since 2007, at least 34,000 beds) pushes detention."
      ],
      [
       "Bond hearing",
       "At a bond redetermination before the IJ, the respondent bears the burden of showing she is not a flight risk and not a danger to the community; a danger finding makes her ineligible. Minimum bond is $1,500. A decision can be reconsidered only on a material change in circumstances and can be appealed to the BIA.",
       [
        "Bond ignores ability to pay: the median bond was $8,000 (FY2016), so people stay detained because they are poor."
       ]
      ],
      [
       "§ 236(c)",
       "Mandatory detention for certain criminal and terrorism grounds: no bond, and parole only in narrow circumstances. The crime categories are broad (moral turpitude, aggravated felonies including some misdemeanors, drug and firearm offenses), down to minor shoplifting."
      ],
      [
       "§ 236(a)",
       "The general rule: a person is bond eligible if she is not a danger and not likely to abscond."
      ],
      [
       "Arriving aliens / positive CFI",
       "ICE treats \"arriving aliens\" (anyone arriving at a port of entry or interdicted at sea) as ineligible for bond even after a positive credible fear finding and placement in § 240 proceedings, and says IJs lack jurisdiction over their custody (INA § 235(b)). Matter of M-S- (A.G. 2019), overruling Matter of X-K-: a person in expedited removal who establishes credible fear must be detained unless paroled. So: no bond; parole only."
      ],
      [
       "Padilla v. ICE / bond hearing question",
       "The district court ordered bond hearings within 7 days for people with positive credible fear findings, with DHS bearing the burden; the 9th Cir. (2020) affirmed (\"once a person is standing on U.S. soil . . . he or she is entitled to due process\"). The Supreme Court vacated and remanded in light of Thuraissigiam. Whether due process requires a bond hearing remains pending, and there are no hearings meanwhile."
      ],
      [
       "Class-wide injunctions",
       "Garland v. Aleman Gonzalez (2022): the INA bars district courts from class-wide injunctions against the detention statutes."
      ],
      [
       "Parole (8 C.F.R. § 212.5)",
       "Parole is available only to people who present neither a security risk nor a risk of absconding, and only for an urgent humanitarian reason, a medical emergency, a significant public benefit, or a legitimate law-enforcement objective. While a credible fear determination is pending, parole is allowed only for a medical emergency or law-enforcement need (§ 235.3(b)(2)(iii)).",
       [
        "A 2009 ICE memo said people with positive credible fear findings should be paroled if not a flight risk or danger, but ICE paroled only about 1% of detainees in FY2013."
       ]
      ],
      [
       "Family separation",
       "May 2018 \"zero tolerance\" prosecutions were used to justify separating children from parents as deterrence. Ms. L. v. ICE ordered reunification; by April 2024, 1,360 children still lacked confirmed reunification."
      ]
     ],
     "multi": true,
     "tip": "Bond burden is on the respondent, not DHS (Padilla's 7-day hearing with DHS bearing the burden was vacated). Arriving aliens and positive-CFI expedited removal cases: IJ has no custody jurisdiction, so the only route out is parole.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Alternatives to Detention",
     "explain": [
      "Marouf lists six ways to keep track of people without locking them up, ordered from least to most restrictive in the outline. Compliance with the less restrictive options is high, and they cost far less than detention (about $164.65 per adult per day in 2024), yet ICE underuses them and treats only electronic monitoring as its official ATD program."
     ],
     "items": [
      [
       "Alternatives (least → most)",
       "Own recognizance; parole; bond; supervised release; ISAP monitoring; community case management."
      ],
      [
       "Release on own recognizance",
       "Least restrictive and cheapest. A Vera pilot found 78% of asylum seekers released with no supervision complied, yet fewer than 7% of detainees were released this way in FY2013."
      ],
      [
       "Parole",
       "For urgent humanitarian reasons, a medical emergency, significant public benefit, or a legitimate law-enforcement objective (see 8 C.F.R. § 212.5)."
      ],
      [
       "Bond",
       "Available only to people found not dangerous. 86% of people released on IJ bond appeared in court (FY2015)."
      ],
      [
       "Supervised release",
       "Conditions such as check-ins, permission to travel, curfews, and home visits. Only ICE may order it; IJs can only redetermine bond. Vera found 84% compliance."
      ],
      [
       "Electronic monitoring (ISAP)",
       "Ankle GPS monitors or telephone voice recognition, run by a GEO Group subsidiary. The most invasive option: heavy, painful, stigmatizing, and used disproportionately on Black immigrants. Compliance was 99.9% at court hearings. Arguably itself a form of \"custody,\" which could allow release of people otherwise subject to mandatory detention. Later expanded through the SmartLINK app (selfie check-ins, GPS)."
      ],
      [
       "Community-based case management",
       "Faith-based programs reached 96–97% compliance at a fraction of detention cost. The Family Case Management Program (2015) had 99% court appearance but ended in June 2017; the FEMA/CRCL Case Management Pilot Program (Houston was a pilot city) was the first ATD directed by Congress."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Children, Flores & TVPRA",
     "explain": [
      "Children are treated separately in detention law. The guiding principle is the \"best interests of the child\" (UN Convention on the Rights of the Child), and UN experts say detention is never in a child's best interests.",
      "The Flores settlement (1997) creates a general policy favoring release of children without unnecessary delay, in a set order of preference, and requires the least restrictive setting. The TVPRA (2008) adds statutory protections for unaccompanied children."
     ],
     "items": [
      [
       "Flores",
       "Release without unnecessary delay, in order of preference to:",
       [
        "(i) a parent;",
        "(ii) a legal guardian;",
        "(iii) an adult relative;",
        "(iv) an adult or entity designated by the parent or guardian;",
        "(v) a licensed program; or",
        "(vi) another adult or entity, at the agency's discretion, when there is no other likely alternative to long-term detention.",
        "Children must be held in the least restrictive setting appropriate to age and special needs."
       ]
      ],
      [
       "Background: Reno v. Flores (1993)",
       "The Court upheld a policy releasing minors to non-family members only in \"unusual or compelling circumstances,\" which had forced undocumented relatives to choose between leaving the child detained and risking their own detention. The 1997 settlement followed."
      ],
      [
       "Flores enforcement",
       "Flores v. Lynch (2015): the settlement covers accompanied children too, and the 2014 no-release policy, secure unlicensed facilities, and freezing holding cells violated it; the 9th Cir. (2016) held accompanying parents have no affirmative right to release. Flores v. Sessions (2017): denying children bond hearings breached the settlement. Flores v. Rosen (2020): Trump-era rules for accompanied minors could not take effect."
      ],
      [
       "TVPRA (2008)",
       "An unaccompanied child \"shall be promptly placed in the least restrictive setting that is in the best interests of the child.\" No secure facility unless the child is a danger to self or others or has been charged with a crime. Unaccompanied children may present asylum claims to an asylum officer instead of in adversarial immigration court. (Care of unaccompanied minors moved to ORR within HHS in 2002.)"
      ]
     ],
     "multi": true,
     "tip": "Flores covers accompanied children, but the parent with them has no affirmative right to release.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Fair, Independent, Unbiased Adjudicator",
     "explain": [
      "The data show that which judge a case is assigned to often matters more than the merits. Refugee Roulette and TRAC found huge differences in grant rates across courts and across judges in the same court, tied to factors like the judge's enforcement background and gender.",
      "The legal tools for policing judges are the Model Code of Judicial Conduct (which is not binding on IJs) and appellate review. Fiadjoe shows the remedy when a hearing is abusive: a new hearing before a different IJ."
     ],
     "items": [
      [
       "Disparity data",
       "Refugee Roulette (2007): San Francisco 54% and New York 52% vs. Atlanta 12%; female judges granted 53.8% vs. 37.3% for male judges; represented applicants 45.6% vs. 16.3%. Tulsky (2000): former private lawyers granted nearly 50% more often than former government lawyers. TRAC (2017): denial rates ranged from 9.4% to 97.1% by judge in San Francisco."
      ],
      [
       "Tulsky: Rugie Jallow",
       "A Gambian 18-year-old was assigned to IJ Jankun (1.47% grant rate), who excluded her documents because a filing due Sunday was filed Monday, cut off testimony about her persecuted father, and denied asylum. Notes: harm to family members is relevant to well-founded fear (UNHCR Handbook ¶ 43), cutting off testimony raises § 240 \"present evidence\" problems, and excluding documents conflicts with the Handbook's direction to present the case \"as fully as possible.\""
      ],
      [
       "Rule 2.9 (ex parte)",
       "Model Code Rule 2.9 bars communications with one side about a pending matter. Exceptions: scheduling, administrative, or emergency communications that do not reach the merits (if no party gains an advantage and others are promptly notified); written advice from a disinterested expert with notice; consultation with court staff or other judges; settlement conferences with consent; and communications authorized by law.",
       [
        "IJ Cassidy told the INS lawyer by answering machine he would rule against an applicant; that went to the merits. He refused to recuse; the BIA said he should have recused but upheld the denial.",
        "Canon 2 and Rule 2.2: a judge must act impartially, competently, and diligently, and uphold the law fairly."
       ]
      ],
      [
       "Abusive hearing (Fiadjoe v. Attorney General, 3d Cir. 2005)",
       "A Ghanaian woman held as a slave by her Trokosi-priest father from age 7, with PTSD, was ridiculed by IJ Ferlise, who called her crying \"histrionics.\" Held: no credibility finding from a hearing conducted that way can survive review, and the findings also lacked substantial evidence. The remedy is remand to a different IJ."
      ],
      [
       "Federal court criticism",
       "After 2002 streamlining sent more appeals to the circuits, courts criticized IJs directly: Posner in Niam and Benslimane (40% reversal of BIA decisions in a year), Lopez-Umanzor (IJ refused expert witnesses; credibility skewed by prejudgment)."
      ],
      [
       "Causes and reform",
       "Causes: near impunity (the Model Code is not binding), lack of independence (IJs sit inside DOJ), politicized hiring, and crushing workloads (over 3 million pending cases in 2024). Main proposal: an independent Article I immigration court like the Tax Court (H.R. 6577, Real Courts, Rule of Law Act). The ABA supports hiring more IJs only with reforms in vetting, training, and independence."
      ]
     ],
     "tip": "Remedy for an abusive hearing is a new hearing before a different IJ (Fiadjoe).",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Right to Work & Social Benefits",
     "explain": [
      "Procedural rights mean little if asylum seekers cannot support themselves while their cases are pending. The U.S. federal government provides no social benefits (housing, food) to asylum seekers, so work authorization is the main lifeline.",
      "Since 1995, work authorization waits until the application has been pending 180 days. The waiting rule was meant to stop baseless claims filed just to get work permits."
     ],
     "items": [
      [
       "Work authorization",
       "Eligible once the asylum application has been pending more than 180 days (1995 rule). Applicants may file at 150 days; approval takes 4–6 weeks or longer.",
       [
        "Before January 1995, applicants with non-frivolous claims got work authorization; a frivolous claim lacks \"an arguable basis in either law or fact.\" Critics said this invited baseless claims.",
        "A denial within 180 days generally forecloses authorization, even during years of appeals.",
        "In practice most asylum seekers cannot work lawfully for 10–12 months, leaving them vulnerable to exploitative jobs."
       ]
      ],
      [
       "2020 rules",
       "The June 2020 rules extended the wait to 365 days, added termination grounds, and barred people who entered without inspection, missed the one-year deadline, or had certain convictions. AsylumWorks v. Mayorkas (D.D.C. 2022) vacated them because acting DHS Secretary Chad Wolf was not validly appointed and lacked authority to issue them."
      ],
      [
       "EU Reception Conditions Directive (2024)",
       "Labor-market access after 6 months (down from 9), an \"adequate standard of living\" guaranteeing subsistence and health (Art. 19(2)), and access to language and vocational courses. It also adds limits on movement (ECRE warns of \"de facto detention\"), excludes people in accelerated procedures from work, denies reception conditions to people awaiting AMMR (Dublin successor) transfer, and expands power to reduce or withdraw benefits."
      ],
      [
       "U.S. state and private support",
       "Maine (2015) is the only state giving General Assistance to people pursuing immigration relief, for up to 24 months. Nonprofits help a limited number. The federal government does support resettled refugees through resettlement agencies and Welcome Corps."
      ],
      [
       "Open question",
       "Whether denying asylum seekers meaningful social rights amounts to constructive refoulement."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "Defining Persecution",
   "overview": [
    "Earlier units asked how likely harm has to be (the risk of harm). This unit asks what kind of harm counts and who has to be causing it. Its big question is: when does something bad that happened to a person, or that might happen, count as \"persecution\" under refugee law?",
    "There is no single definition. The 1951 Convention never defines the word, so courts and UNHCR (the United Nations High Commissioner for Refugees) tie it to serious violations of basic human rights. The unit then walks through the forms persecution can take: economic harm, physical and mental harm, severe past harm that supports humanitarian asylum, discrimination, and prosecution that crosses the line into persecution.",
    "The last piece is the source of the harm. Persecution can come from the government itself, or from private people or groups the government is unable or unwilling to control. The U.S. standard for that second category has shifted several times through the Matter of A-B- decisions, and Matter of S-S-F-M- (2025) returned to the stricter A-B- I and II test.",
    "On the exam, frame every claim as: the respondent fears persecution (harm) by WHO on account of WHAT (nexus). This unit covers the \"harm\" and the \"by who\" parts. Look at all incidents together (cumulatively), remember that physical harm is not required, and keep the persecutor's motive in the nexus analysis, not the harm analysis."
   ],
   "check": {
    "status": "complete",
    "note": "Built from outline Part V, both Ch. 4 slide decks (read as page images because the extracted slide text was blank), Day 8 and Day 9 reading notes, and Day 8 and Day 9 class notes. The Day 8 class notes end mid-word (\"Mat\"). One block is flagged thin: the slides state the 2d/4th Circuit split on death threats without case names or reasoning."
   },
   "blocks": [
    {
     "title": "Elements of a Claim",
     "multi": true,
     "explain": [
      "To be a refugee, a person must show a well-founded fear of persecution. The outline breaks that into four parts that must all be met: serious enough harm, a link (nexus) to a protected ground, a persecutor who is the government or someone the government cannot or will not control, and a well-founded fear of future harm.",
      "This chapter shifts the focus from the risk of harm (Ch. 3) to the nature and source of the harm itself. The slides frame two issues: (1) whether the form or type of harm rises to the level of persecution, and (2) whether the agent or source of harm is the State or some other actor, and what that means for whether refugee protection is available.",
      "Past persecution matters because it creates a presumption of a well-founded fear of future persecution. That is why the past-persecution elements (harm, nexus, actor) come before future fear in the order of analysis."
     ],
     "items": [
      [
       "Harm",
       "The harm must rise to the level of persecution. Minor disadvantage or trivial inconvenience does not qualify; the rest of this unit explains which forms of harm do."
      ],
      [
       "Nexus",
       "The harm must be on account of a protected ground: race, religion, nationality, political opinion, or PSG (particular social group). Nexus is covered in its own chapter; here it matters mainly because the persecutor's motive belongs to nexus, not to the harm question."
      ],
      [
       "Actor",
       "The persecutor must be a government actor (someone who works for the government) or an actor the government is unable or unwilling to control. Private harm counts only through that second route."
      ],
      [
       "Well-founded fear",
       "The applicant must have a well-founded fear of future persecution. A showing of past persecution creates a presumption of that fear, which the government can try to rebut (for example, with evidence of changed country conditions)."
      ],
      [
       "Order of analysis",
       "Standard of proof, then credibility and corroboration, then past persecution (harm, nexus, government actor), then well-founded future fear, then discretion (asylum only), including humanitarian asylum. The slides present this as the \"Asylum and Withholding Rule Outline\" at the start of each deck."
      ],
      [
       "Case framing",
       "The respondent fears persecution (harm) by WHO on account of WHAT (nexus). The professor applies this frame to each major case (Pitcherskaia, Korablina, Sadeghi) by asking: credible? harm? nexus? government? future fear?"
      ],
      [
       "Two issues",
       "Whether the form of harm rises to persecution (Section C of the chapter), and whether the source of harm is the State or an actor whose conduct supports protection (Section D)."
      ]
     ],
     "tip": "Day 8 class skeleton for a brief: (1) whether the applicant is a refugee; (2) whether there is a well-founded fear; (3) whether there was past persecution, which raises a presumption of well-founded fear. Then define persecution, the protected ground, the government actor, and the unable-or-unwilling actor. Every asylum case involves examining all the elements of the claim.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Human Rights Framing",
     "explain": [
      "Because the Convention does not define persecution, decision-makers link it to violations of fundamental human rights. The UNHCR Handbook, the Goodwin-Gill and McAdam treatise, and a New Zealand tribunal decision all make that link, each in a slightly different way.",
      "Two open questions run through the case law: whether every human rights violation is persecution or only serious ones, and whether several lesser violations can add up (cumulatively) to persecution. U.S. courts answer the second question yes, and they hold that physical harm is not required. Where a claim does rest on physical harm, the court must say how severe that harm has to be."
     ],
     "items": [
      [
       "No universal definition",
       "\"Persecution\" is not defined in the 1951 Convention. Goodwin-Gill and McAdam say this indeterminacy is generally seen as a benefit because it allows flexible interpretation across jurisdictions.",
       [
        "Goodwin-Gill and McAdam (adopting Hathaway and Foster) describe persecution as \"a sustained or systemic denial of human rights demonstrative of a failure of state protection\": serious harm plus a failure of state protection.",
        "\"Sustained\" can be met by a single harm, including death or severe torture.",
        "They caution adjudicators not to stray too far from the Convention's words; Arts. 31 and 33 refer to those whose life or freedom \"was\" or \"would be\" threatened."
       ]
      ],
      [
       "UNHCR Handbook ¶ 51",
       "Inferred from Art. 33 (non-refoulement), a threat to life or freedom on account of race, religion, nationality, political opinion, or PSG is always persecution. Other serious violations of human rights for the same reasons would also be persecution. The Handbook also says no universally accepted definition exists."
      ],
      [
       "N.Z. Refugee Appeal No. 71427/99 (1999)",
       "The New Zealand Refugee Status Appeals Authority interpreted \"persecution\" using VCLT (Vienna Convention on the Law of Treaties) Art. 31(1): good faith, ordinary meaning, and context, object, and purpose. It rejected dictionary definitions such as \"pursuing with enmity and malignity.\"",
       [
        "Dictionary definitions wrongly focus on the persecutor's intent instead of the effect on the victim, and invite an \"unseemly ransacking of dictionaries.\"",
        "Following Canada v. Ward, it grounded the Convention in the commitment to basic human rights without discrimination, drawn from the Preamble.",
        "It adopted Hathaway's formula: persecution is the \"sustained or systemic violation of basic human rights demonstrative of a failure of state protection,\" with core international human rights norms defining the forms of serious harm."
       ]
      ],
      [
       "Cumulative harm",
       "The inquiry considers the cumulative effect of all incidents together. Physical harm is not required, but where a claim rests on physical harm the court must identify the required severity.",
       [
        "Kumar v. Garland (9th Cir. 2024): a Sikh political activist beaten and given death threats by members of a Hindu nationalist party. A one-off beating does not compel a persecution finding, but physical harm \"plus something more,\" such as credible death threats, does.",
        "D'Souza (11th Cir. 2024, unpublished) departed from that receptivity: a young Indian woman's LGBTQ+ discrimination, being thrown out by her parents, and a caning by her father were held not severe enough even cumulatively. The casebook authors call this inexplicable.",
        "If physical persecution required death or a near-death experience, asylum would become martyrdom rather than a preventive measure."
       ]
      ],
      [
       "EU Qualification Dir. art. 9(1)",
       "Under the 2011 EU Qualification Directive, an act of persecution must be either (a) sufficiently serious by its nature or repetition to be a severe violation of basic human rights, particularly non-derogable rights; or (b) an accumulation of various measures severe enough to affect the person in a similar way.",
       [
        "Non-derogable rights (ECHR, the European Convention on Human Rights, Art. 15(2)): the right to life and the bans on torture or inhuman or degrading treatment, slavery or servitude, and ex post facto penalties.",
        "Open question: whether tying persecution to these rights makes the EU test narrower than the N.Z. approach.",
        "The 2024 EU Qualification Regulation (in force July 2026) replaces the Directive; scholars say the concepts of persecution and serious harm have not changed overall.",
        "Applicants need not take heroic measures: authorities cannot expect them to change behaviour, convictions, or identity to avoid persecution (Nagy)."
       ]
      ]
     ],
     "tip": "Slides: physical persecution is NOT required. Also consider the precedential power of circuit decisions in U.S. immigration law: the same facts can come out differently by circuit.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Economic Persecution",
     "explain": [
      "Economic harm can be persecution even with no physical injury. The leading early case, Kovac v. INS (9th Cir. 1969), rejected the idea that a person must lose all means of earning a living. What matters is a deliberate imposition of substantial economic disadvantage for a protected reason.",
      "The history explains why. The old withholding statute required \"physical persecution,\" and courts read that to mean economic harm counted only if it denied all employment. Congress deleted \"physical\" in 1965, so the all-livelihood requirement lost its basis. In re T-Z- (BIA 2007) adopted the Kovac standard.",
      "The line is still hard to draw. Mere employment discrimination, general poverty, or trouble finding work in one's field is not enough. Harm that goes beyond what society as a whole faces, such as a crushing fine or being shut out of one's profession and pushed into menial work, can be."
     ],
     "items": [
      [
       "Rule",
       "Economic persecution is the deliberate imposition of severe economic disadvantage, or deprivation of liberty, food, housing, employment, or other essentials of life, for a protected reason. Harm need not be physical, and total deprivation of livelihood is not required.",
       [
        "T-Z- headnote (slides): nonphysical forms of harm, such as the deliberate imposition of severe economic disadvantage or deprivation of liberty, food, housing, employment, or other essentials of life, may amount to persecution.",
        "T-Z-: sanctions that reduce a person to an impoverished existence can be persecution even if the person can still afford the bare essentials."
       ]
      ],
      [
       "Kovac v. INS (9th Cir. 1969)",
       "A Yugoslav chef of Hungarian descent refused the secret police's demand to inform on Hungarian refugees. The police then got him fired from several chef jobs and blocked his hiring, so he worked as a ship's cook and stayed in the U.S. The BIA denied relief because some work remained to him. The Ninth Circuit reversed: requiring loss of all means of livelihood is clearly wrong.",
       [
        "Holding: \"a probability of deliberate imposition of substantial economic disadvantage\" for reasons of race, religion, or political opinion is sufficient.",
        "Cited today for two principles: harm need not be physical, and when deprivation of economic opportunity becomes persecution.",
        "Kovac also touches prosecution vs. persecution: punishment for violating a politically motivated ban on defection from a police state is different from punishment for a common crime."
       ]
      ],
      [
       "Persecution definition",
       "\"The infliction of suffering or harm upon those who differ (in race, religion, or political opinion) in a way regarded as offensive.\" It is not minor disadvantage or trivial inconvenience, and mere employment discrimination is not enough."
      ],
      [
       "Threshold",
       "The difficulty must be above and beyond what members of society as a whole face, and more than the loss of social advantages or physical comforts. T-Z- examples: a particularly onerous fine, a large-scale confiscation of property, or a sweeping limit on continuing to work in an established profession or business.",
       [
        "Li v. Att'y Gen. (3d Cir. 2005): a fine above a year and a half's salary, blacklisting, loss of health benefits, tuition, and food rations, and confiscation of a poor family's furniture together were severe economic disadvantage."
       ]
      ],
      [
       "No bright line",
       "Loss of a job suited to one's training is not persecution where the person keeps steady other work and suffers no significant physical violence, but exclusion from one's field and reduction to menial work, viewed on the record as a whole, can be.",
       [
        "Nagoulko v. INS (9th Cir. 2003): a Pentecostal kindergarten teacher fired for her religion, but she kept steady factory work for seven years and suffered no significant physical violence. No persecution (partly due to deferential review).",
        "Koval v. Gonzales (7th Cir. 2005): a top Mormon physics student barred from the Ph.D. program, denied work in her field or any allied field, denied permission to live in Kiev, and reduced to ticket-checking. Reversed: the IJ (immigration judge) applied too high a standard, and the whole record (husband's mistreatment, corroboration on treatment of Mormons) mattered."
       ]
      ],
      [
       "Grahl-Madsen guidance",
       "A treatise list of when employment restrictions are persecution, used to compare Nagoulko and Koval.",
       [
        "Persecution: proscription so severe it denies all means of livelihood; systematic denial of employment; denial of all work suitable to one's training or of reasonable pay (low pay alone is not, unless \"out of all reason\").",
        "Not persecution: denial of promotion or better-paid jobs; heavy or undesirable work (unless grossly incommensurate with skills); giving up a private business or losing property under a general policy if other means of livelihood remain; equitable apportioning of scarce housing."
       ]
      ],
      [
       "General poverty",
       "Economic stratification, deficient government support, or trouble finding work in one's field is not enough where other work remains available.",
       [
        "Hernandez-Hernandez v. Garland (6th Cir. 2021): a Mayan K'iche' Guatemalan woman's poverty and denial of education were not governmental persecution.",
        "Martinez (11th Cir. 2021): a Cuban fired and harassed could not show he was unable to find other work.",
        "Escobedo-Marquez v. Barr (7th Cir. 2020): a gay Mexican woman expecting trouble getting carpentry jobs, where job prospects were limited for the general population, was not enough.",
        "Severe, deliberate deprivation can still qualify: Matter of Doe (Denver Imm. Ct. 2023) found a pattern and practice of economic persecution of indigenous Guatemalans."
       ]
      ]
     ],
     "tip": "Slides: \"economic proscription so severe as to deprive a person of all means of earning a livelihood\" is NOT required; what is essential is evidence of the \"deliberate imposition of substantial economic disadvantage,\" over and above what society as a whole faces. Day 8 class: no bright-line rule, lots to consider.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Physical & Mental Harm",
     "explain": [
      "The main question here is whether the persecutor must intend to punish or harm. Pitcherskaia v. INS (9th Cir. 1997) says no. The test is objective: would a reasonable person regard the harm as offensive? Harm meant to \"cure\" or help the victim is still persecution.",
      "The persecutor's motive still matters, but only for nexus. The slides call this a tension between two rules: persecution does not require punitive intent, yet nexus requires proof that the persecutor was motivated by a protected ground.",
      "Severity also matters. One short detention with a single beating that needed no medical care is not persecution (Matter of A-H-D-, BIA 2026). Threats that are carried out are persecution; whether threats alone qualify splits the circuits."
     ],
     "items": [
      [
       "No punitive intent",
       "Intent to harm or punish is not an element of persecution. The test is objective: whether a reasonable person would deem the harm offensive. \"Persecution by any other name remains persecution\"; a motive to cure or help does not change the character of the harm.",
       [
        "Pitcherskaia facts: a Russian lesbian activist, repeatedly detained, beaten, and interrogated; registered as a \"suspected lesbian,\" ordered to psychiatric treatment, diagnosed with \"slow-going schizophrenia,\" and threatened with forced institutionalization. Her ex-girlfriend received electric-shock \"therapy.\"",
        "The BIA found no persecution because the authorities meant to \"cure\" her, not punish her. The Ninth Circuit reversed and remanded.",
        "Punishment implies the perpetrator thinks the victim did something wrong; persecution only requires that the perpetrator cause suffering or harm. To the extent Acosta and Mogharrabi required intent to punish, the court rejected them.",
        "The UNHCR Handbook has no intent requirement and notes the applicant may not even know the reasons for the persecution (¶ 66)."
       ]
      ],
      [
       "Motive",
       "Motive matters only for nexus. Persecution does not require punitive intent, but nexus requires proof that the persecutor was motivated by a protected ground (INS v. Elias-Zacarias, 1992). Under Elias-Zacarias the relevant characteristic is the victim's, not the persecutor's."
      ],
      [
       "Mental harm",
       "Persecution and torture include mental suffering. EU Qualification Directive Art. 9.2(a) covers \"physical or mental violence,\" and the Convention Against Torture Art. 1 covers \"severe pain or suffering, whether physical or mental.\" Harm inflicted in the victim's supposed best interest, such as FGM (female genital mutilation), is still persecution (In re Kasinga, BIA 1996).",
       [
        "Open question from the slides: would Pitcherskaia come out the same if there had been no physical harm?"
       ]
      ],
      [
       "Single beating",
       "A short detention with one beating that required no medical attention does not rise to persecution. Government deference to tribal mechanisms does not show it is unable or unwilling to control persecutors within a tribe.",
       [
        "Matter of A-H-D- (BIA 2026): a member of the Hadadin minority tribe in Mauritania was detained for 3 days for joining a political rally and struck once by a police officer. One beating with no significant injury and no need for medical care was not persecution.",
        "Compare Kumar v. Garland: a one-off beating does not compel a persecution finding, but a beating \"plus something more,\" such as credible death threats, does."
       ]
      ],
      [
       "Threats",
       "Threats that are carried out are persecution. For prospective (not yet carried out) death threats, the circuits split: the 2d Cir. holds threats alone do not constitute persecution, and the 4th Cir. holds threats alone may.",
       [
        "The question is whether the group has the will or ability to carry out the threat, not whether it did (Kumar v. Garland, citing Aden v. Wilkinson)."
       ]
      ]
     ],
     "tip": "Keep two questions separate: Is the harm bad enough? (objective, no intent needed) and Why was it inflicted? (nexus, motive required). A BIA finding that the persecutor \"meant well\" goes to neither the harm question nor, by itself, defeats nexus.",
     "check": {
      "status": "thin",
      "note": "Slides (Death threats slide) and the outline state the 2d Cir./4th Cir. split on threats alone without naming the cases or giving either circuit's reasoning; the Day 8 notes and Day 8 class notes add only the will-or-ability point from Kumar. The reasoning behind the split is not in any source checked."
     }
    },
    {
     "title": "Severe Past Persecution (Chen)",
     "explain": [
      "Normally past persecution creates a presumption of future fear, and the government can rebut it by showing conditions changed. Humanitarian asylum is the exception: if the past persecution was severe enough, asylum can still be granted even though there is no longer a well-founded fear of future harm.",
      "Matter of Chen (BIA 1989) created this before it was written into the regulation, 8 C.F.R. § 208.13(b)(1)(iii)(A). The reason, from UNHCR Handbook ¶ 136, is humanitarian: a person who suffered atrocious persecution should not be expected to go back, because a change of regime may not change the population's attitude or the refugee's own mind.",
      "Chen does not define how severe is severe enough. Courts of appeals have treated Chen as a baseline and required extremely high harm, which the casebook authors call a misapplication."
     ],
     "items": [
      [
       "8 C.F.R. § 208.13(b)(1)(iii)(A)",
       "Asylum may be granted on past persecution alone, without a well-founded fear, where the applicant shows compelling reasons for being unwilling to return arising out of the severity of the past persecution. The slides call this a grant of humanitarian asylum."
      ],
      [
       "Rule (Chen humanitarian grant)",
       "Atrocious past persecution supports asylum despite changed circumstances that rebut the presumption of future fear.",
       [
        "Chen facts: son of a Christian minister in China. In the Cultural Revolution, Red Guards imprisoned his father, dragged him through the streets, and pushed him into a bonfire of Bibles; the father died at 46. From age eight, Chen was locked up for months, kept out of school, interrogated, beaten, denied food, hit in the head with a rock (he now wears a hearing aid), sent for \"reeducation,\" and lived in complete social isolation.",
        "China had changed (millions rehabilitated), so no well-founded fear. But he and his family were severely persecuted, so he was eligible on past persecution.",
        "Likelihood of future persecution is one factor in discretion; all favorable and adverse factors are weighed (Matter of Pula). Chen declined to say when past persecution alone will or will not be enough."
       ]
      ],
      [
       "Severity",
       "Severity is not defined; the harm need not be physical, and harm to the applicant's family counts. The BIA in Chen counted his family's suffering, not just his own.",
       [
        "Slides ask: Chen does not tell us what harm is severe or atrocious; do you assume it must be physical?"
       ]
      ],
      [
       "Severity test",
       "Whether the persecution is roughly comparable to Chen, without a mechanical minimum showing of atrocity or lasting disability (Lal v. INS, 9th Cir. 2001). Lal was beaten, tortured with knives and cigarettes, forced to drink urine, and forced to watch his wife assaulted; the BIA had wrongly required a lasting disability.",
       [
        "Cases finding harm not severe enough: Kumar v. INS (9th Cir. 2000), Rusu v. INS (4th Cir. 2002) (teeth pulled with pliers: \"horrible\" but not enough), Reyes-Morales (8th Cir. 2006)."
       ]
      ],
      [
       "Fifth Circuit",
       "Harm to family members is not harm the applicant personally suffered, and Chen is treated as a baseline requiring extremely high harm. Shehu v. Gonzales (5th Cir. 2006): an ethnic Albanian from Kosovo whose father was executed, husband shot, and home and medical practice destroyed was denied; harm to her father and husband was not \"personally suffered.\""
      ],
      [
       "Proof",
       "Medical and psychological evaluations documenting permanent or ongoing harm. The authors advise arguing severe past persecution anyway, because asylum officers and IJs may take a more humanitarian view than the courts of appeals."
      ],
      [
       "Harm to family",
       "A parent's fear that a child will undergo FGC (female genital cutting) can establish the parent's own well-founded fear (Abay v. Ashcroft, 6th Cir. 2004). The 8th, 9th, and 7th Circuits are open to this approach.",
       [
        "Other circuits refused: Niang (4th Cir. 2007) held psychological harm without physical harm is not persecution; Dieng (6th Cir. 2012) found no fear where the U.S.-citizen daughter could stay in the U.S."
       ]
      ],
      [
       "Government persecutor",
       "Past persecution by a government actor raises the presumption of future fear, and internal relocation analysis is not needed (Day 8 class discussion of the Hypo)."
      ]
     ],
     "tip": "Hypo (p. 318): Applicant A, from an indigenous group targeted by genocide, saw her village burned by the military at age 6, her grandparents burned to death, and her brother die of an untreated gunshot wound. Ten years later the conflict is over, but she has nightmares, depression, and hypervigilance. Argue humanitarian asylum under Chen and § 208.13: the military (a government actor) inflicted the harm, family harm counts outside the Fifth Circuit, and psychological evaluations can show ongoing harm.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Discrimination as Persecution",
     "multi": true,
     "explain": [
      "Discrimination means a prejudicial and unjustified difference in treatment. Many international instruments prohibit it (UDHR, the Universal Declaration of Human Rights, Art. 2; the 1963 UN racial discrimination declaration; CEDAW, the Convention on the Elimination of All Forms of Discrimination Against Women). But less favourable treatment alone is not persecution, and there is no hard-and-fast rule for when it becomes persecution.",
      "Start with the UNHCR Handbook. Discrimination becomes persecution when its consequences are substantially prejudicial, for example serious limits on earning a living, practising religion, or getting an education. Measures that are not serious alone can add up, especially in a general atmosphere of insecurity.",
      "Korablina v. INS (9th Cir. 1998) shows the cumulative approach in U.S. courts. The two factors the slides draw from it are the cumulative nature of the violence and harassment and the societal context of widespread harassment and violence."
     ],
     "items": [
      [
       "General rule",
       "No hard-and-fast rule; persecution does not encompass all treatment society regards as unfair, unlawful, or unconstitutional (Matter of V-T-S-, BIA 1997; Majd v. Gonzales, 5th Cir. 2006) and is more than mere discrimination or harassment (Matter of V-F-D-, BIA 2006; Tesfamichael v. Gonzales, 5th Cir. 2006)."
      ],
      [
       "Harassment",
       "\"Denigration, harassment, and threats\" are not persecution, nor is \"morally reprehensible\" discrimination (Eduard v. Ashcroft, 5th Cir. 2004)."
      ],
      [
       "UNHCR Handbook ¶ 54",
       "Discrimination is persecution only if it leads to consequences of a substantially prejudicial nature, such as serious restrictions on the right to:",
       [
        "Earn a livelihood;",
        "Practise one's religion; or",
        "Access normally available educational facilities."
       ]
      ],
      [
       "UNHCR Handbook ¶¶ 53, 55",
       "Measures not serious in themselves, especially combined with a general atmosphere of insecurity, can together support a well-founded fear on cumulative grounds. ¶ 55: lesser discrimination can still produce \"a feeling of apprehension and insecurity as regards his future existence.\" It depends on all the circumstances, including geographic, historical, and ethnological context.",
       [
        "¶¶ 68–69 (race): racial discrimination will frequently amount to persecution, for example where human dignity is affected to an extent incompatible with the most elementary human rights, or where disregarding racial barriers carries serious consequences."
       ]
      ],
      [
       "De jure vs. de facto",
       "De jure discrimination is required by law: apartheid in South Africa assigned rights by race (homelands, forced relocation of about 3.5 million people, no vote, no land ownership in 87% of the country). De facto discrimination happens despite formal equality: indigenous Guatemalans (40–60% of the population) face exclusion in land, services, work, and justice, and 83% of the civil war's victims were Maya.",
       [
        "The 1989 apartheid brief argued that poverty, disease, and illiteracy alone are not persecution, but they were here because they were the direct result of intentional discrimination in a wealthy country.",
        "Slides ask: Would every black South African be eligible? Does fear of the floodgates affect the analysis? What if the law did not require discrimination but it occurred anyway? A U.K. judge: the problem of numbers cannot justify \"artificial and inhuman criteria.\"",
        "Guatemala: the assumption that indigenous people supported the guerrillas made them targets; fewer than 1% of Guatemalan affirmative applicants (1983–86) won asylum, leading to the ABC settlement (1991)."
       ]
      ],
      [
       "Discrimination as persecution",
       "Turns on: (1) the cumulative nature of the violence and harassment; and (2) the societal context of widespread harassment and violence. A single isolated incident may not be persecution, but the cumulative effect of several may; violence against family counts where it forms a pattern closely tied to the applicant.",
       [
        "Korablina facts: a Jewish woman in Ukraine was denied university admission and job advancement, fired in an all-Jewish layoff, received death threats, and was tied to a chair with a noose tightened around her neck (concussion). Her boss and a friend disappeared; her husband was beaten and her daughter nearly raped. The militia was part of the ultranationalist group, and the state did not protect Jews.",
        "Holding: the record compelled findings of past persecution, well-founded fear, and a clear probability for withholding.",
        "Compare Decky v. Holder (1st Cir. 2009) and Susanto v. Gonzales (1st Cir. 2006): ethnic Chinese Indonesians with taunts, slaps, vandalism, and nearby violence lost. Possible explanations: Korablina's attack needed medical care, the setting, or circuit differences."
       ]
      ],
      [
       "Remand, not grant",
       "A court finding eligibility cannot grant asylum, which is discretionary. The Article III court remands to the BIA, because the AG (Attorney General) delegated that discretion to the BIA in defensive cases and to DHS (Department of Homeland Security) in affirmative cases."
      ],
      [
       "Statelessness",
       "Statelessness alone does not warrant asylum (Faddoul v. INS, 5th Cir. 1994). Divesting citizenship for a protected reason can be persecution (Haile v. Gonzales/Holder, 7th Cir. 2005, 2010).",
       [
        "Faddoul: a Palestinian born in Saudi Arabia could not get citizenship, own property, or travel freely, but the limits applied to all non-Saudis, and he was never physically harmed. Saudi citizenship laws were not persecution.",
        "Haile: there is a \"fundamental distinction between denying someone citizenship and divesting someone of citizenship.\" Stripping citizenship because of religion or ethnicity is persecution and creates a presumption of well-founded fear.",
        "Ouda v. INS (6th Cir. 2003): a stateless Palestinian ordered out of Kuwait as a perceived enemy, after armed men held her father at gunpoint and tortured her brother, established past persecution without being personally harmed."
       ]
      ]
     ],
     "tip": "For the professor's framework on Korablina, run the full frame: Credible? (yes, \"in all respects\") Harm? (cumulative) Nexus? (anti-Semitic epithets, Star of David) Government? (militia tied to the group, no protection) Future fear? (presumption not rebutted).",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Prosecution vs. Persecution",
     "multi": true,
     "explain": [
      "The general rule is that a government enforcing its criminal laws is not persecuting anyone. A refugee is a victim of injustice, \"not a fugitive from justice\" (UNHCR Handbook ¶ 56).",
      "The line blurs in three ways that the outline lists as factors: the nature of the offense (is it a common crime, or is the \"crime\" really a protected activity?), the extent of the punishment (is it excessive?), and the legitimacy of the judicial process (is the law itself out of line with human rights, or applied in a discriminatory way?).",
      "Sadeghi v. INS (10th Cir. 1994) shows the split. The majority treated an attempted arrest as legitimate prosecution; the dissent said a law punishing someone for counseling a child not to fight in a war could not be legitimate."
     ],
     "items": [
      [
       "General rule",
       "Prosecution and punishment are not persecution, and people fleeing judicial processes generally do not qualify for refugee status; a refugee is \"not a fugitive from justice.\""
      ],
      [
       "Nature of the offense",
       "Prosecution for a common crime is not persecution, but prosecution for a Convention reason can be (Handbook ¶ 57, e.g., \"illegal\" religious instruction to a child).",
       [
        "Bastanipour v. INS (7th Cir. 1992): an Iranian facing the death penalty for drug trafficking and for apostasy. Drug trafficking is a common crime, even when the punishment is death, so that prosecution was not persecution. Punishment for religious conversion was a basis for asylum."
       ]
      ],
      [
       "Extent of the punishment",
       "Excessive punishment for a common-law offense may be persecution (UNHCR ¶ 57). ¶ 58: a person can fear both prosecution and persecution and still be a refugee, though a serious crime may trigger the exclusion clauses."
      ],
      [
       "Legitimacy of the process",
       "A country's laws may not conform to human rights standards, or may be applied discriminatorily, such as a \"public order\" prosecution used to punish the political content of pamphlets (UNHCR ¶ 59). Authorities may use national law as a yardstick along with international human rights instruments, especially the International Covenants (¶ 60)."
      ],
      [
       "UNHCR Handbook ¶¶ 57, 59",
       "Excessive punishment for a common crime, or prosecution for a Convention reason, may be persecution; a country's laws may not conform to human rights standards or may be applied discriminatorily."
      ],
      [
       "Sadeghi v. INS (10th Cir. 1994)",
       "An Iranian teacher and member of an anti-government group urged a 14-year-old student not to go to the Iraq war as a \"martyr.\" Armed guards came to the school for him as \"against the government and against Islam\"; he escaped. The majority affirmed denial: prosecution for illegal activities is a legitimate government act, a sovereign may enforce conscription laws, and the applicant bears the burden of proving he was sought for persecution, not prosecution.",
       [
        "Dissent: the BIA assumed, without proof, that Iran conscripted 14-year-olds and that counseling against it was a crime. Iran had ratified the CRC (Convention on the Rights of the Child), the boy went voluntarily, and the party relying on foreign law must prove it. Even if such a law existed, prosecuting under it would violate CRC Art. 38 and customary law against child soldiers.",
        "Day 9 class: the dissent's point is that calling this lawful prosecution would legitimize the enlistment of child soldiers.",
        "Slides: some courts ignore international norms."
       ]
      ],
      [
       "8 C.F.R. § 1208.18(a)(3)",
       "Under the CAT (Convention Against Torture) regulation, torture does not include pain or suffering arising from or inherent in lawful sanctions. This is the torture-law version of the same idea: lawful punishment is not the harm the law protects against."
      ]
     ],
     "tip": "Slides: start with the UNHCR Handbook to find the line between prosecution and persecution. Majority vs. dissent in Sadeghi maps onto ¶ 59: the majority calls the arrest \"legitimate\" prosecution; the dissent calls it \"ipso facto illegitimate\" because the underlying law would violate human rights norms.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Source of Persecution",
     "explain": [
      "Persecution can come from three sources: the government or its agents directly; groups acting with the government's explicit or implicit authority (such as El Salvador's death squads); or actors fully independent of the government (militant groups, or private individuals targeting religious or racial groups, gays and lesbians, or women). For non-state actors, the essential element is that the government is unwilling or unable to prevent the abuse.",
      "The Convention says nothing about this. The UNHCR Handbook and the U.S. and Canada follow the \"protection approach\": private harm counts if the government tolerates it or is unable or unwilling to protect. The applicant carries the burden of proving that.",
      "The U.S. standard has moved. Matter of A-B- (AG 2018) required that the government condoned the harm or was \"completely helpless\" to protect, A-B- II (2021) said that was the same standard, A-B- III (June 2021) vacated both, and Matter of S-S-F-M- (AG Sept. 2, 2025) vacated A-B- III and returned to A-B- I and II."
     ],
     "items": [
      [
       "UNHCR ¶ 65",
       "Persecution normally comes from the authorities, but serious discriminatory or offensive acts by the local populace are persecution if knowingly tolerated by the authorities, or if the authorities refuse, or prove unable, to offer effective protection. The Convention itself is silent on the issue."
      ],
      [
       "Unable or unwilling",
       "Private acts are persecution if the government is unable or unwilling to control them; direct governmental action is not required. The U.S. took this position in case law shortly after the 1980 Refugee Act (McMullen v. INS, 9th Cir. 1981). Canada v. Ward (1993): refugee law also protects \"those whose home state cannot or does not afford them protection.\"",
       [
        "Pavlova v. INS (2d Cir. 2006): a Russian Baptist was beaten, raped, and shot at by members of the nationalist RNU (Russian National Unity); her attacker got only a reprimand for \"small hooliganism.\" The IJ required persecution by an element of the government. Vacated: \"private acts may be persecution if the government has proved unwilling to control such actions.\""
       ]
      ],
      [
       "Burden",
       "The burden is on the applicant. Evidence includes seeking protection and being rebuffed, and documentary evidence of state discrimination (in Pavlova, police inaction and articles on laws disfavoring minority Christian sects)."
      ],
      [
       "Reporting",
       "Reporting is not required where it would have been futile or would have resulted in further abuse. A failure to report is not necessarily fatal if reporting would have been futile or dangerous (Matter of C-G-T-, BIA 2023). A subjective belief that reporting would be futile does not by itself meet the burden (Sanchez-Amador v. Garland, 5th Cir. 2022)."
      ],
      [
       "Slow police",
       "Police inability to complete an investigation within a short time (Matter of C-G-T-) or to solve a crime (Bertrand v. Garland, 5th Cir. 2022) does not necessarily show the government is unable or unwilling to control private actors."
      ],
      [
       "Matter of A-B- (reinstated 2025)",
       "The applicant must show the government condoned the private actions or demonstrated complete helplessness to protect the victims. The slides describe this as more stringent and akin to the \"complicity\" approach.",
       [
        "A-B- I (AG 2018): a Salvadoran woman fleeing domestic violence; Sessions required condoning or complete helplessness.",
        "A-B- II (AG 2021): A-B- I did not change the standard; the two formulations are interchangeable in that both set a high threshold. Not met where the government made efforts to punish or prevent the harm, imposed light sentences, was not always successful, or showed only localized police apathy.",
        "A-B- III (AG June 2021): Garland vacated I and II; unable or unwilling standard unchanged and best changed through rulemaking; I and II created a strong presumption against claims based on private conduct and dissuaded case-by-case analysis.",
        "S-S-F-M- (AG Sept. 2, 2025): vacated A-B- III, returning to A-B- I and II. To be discussed again in Ch. 10.",
        "Circuits treat the unable-or-unwilling and completely-helpless formulations as interchangeable, including the Fifth Circuit (Mejia-Alvarenga v. Garland, 2024) and the Second (Castellanos-Ventura, 2024)."
       ]
      ]
     ],
     "tip": "Slides note that the unable-or-unwilling standard was followed by the BIA and every circuit until June 2018. On a Fifth Circuit fact pattern, check three things: did the applicant report (and if not, is there objective evidence it was futile or dangerous)? Did police make any effort? Is the apathy local or countrywide?",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "EU Approach to Agents of Persecution",
     "explain": [
      "The EU historically took an \"accountability\" or \"complicity\" approach: non-state harm counted only if the state was responsible, for example by encouraging it or being unwilling to protect. That approach rejected claims where the state was willing but unable to protect, and claims from failed states with no effective government. France and Germany followed it, but the EU has moved toward the UNHCR protection approach.",
      "The 2011 Qualification Directive now lists who can be an actor of persecution and who can be an actor of protection, and requires that protection be effective, non-temporary, and accessible. The 2024 Regulation keeps this largely the same."
     ],
     "items": [
      [
       "Art. 6 – actors of persecution",
       "The State; parties or organisations controlling the State or a substantial part of its territory; and non-State actors, if the first two (including international organisations) are unable or unwilling to provide protection."
      ],
      [
       "Art. 7 – actors of protection",
       "A closed list, provided they are willing and able: the State, or parties or organisations (including international organisations) controlling the State or a substantial part of its territory. Protection must be \"effective and of a non-temporary nature,\" generally provided when they take \"reasonable steps\" such as an effective legal system to detect, prosecute, and punish, and the applicant has access to it.",
       [
        "2024 Regulation Art. 7.1(b) now refers to \"stable, established non-State authorities, including international organisations.\""
       ]
      ],
      [
       "Criticisms",
       "UNHCR says the question is whether protection is effective, accessible, and adequate in the individual case, so the fear stays well-founded \"regardless of the steps taken\"; ECRE (European Council on Refugees and Exiles) says protection must be ensured in practice. ECRE also objects to treating non-state actors as actors of protection, since they cannot be held accountable under international law and often protect only briefly or narrowly."
      ]
     ],
     "tip": "Accountability/complicity theory: state must be responsible (willing-but-unable fails). Protection theory: unable OR unwilling is enough. The slides compare A-B- to the stricter complicity approach.",
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "Convention Against Torture",
   "blocks": [
    {
     "title": "Why CAT Matters",
     "items": [
      [
       "Alternative protection",
       "covers people a rigid nexus reading (Zacarias) leaves unprotected"
      ],
      [
       "Broader",
       "no nexus to a protected ground; the asylum/withholding statutory bars don’t preclude relief"
      ],
      [
       "Narrower",
       "only harm that meets the definition of torture; must show torture is more likely than not"
      ],
      [
       "Background",
       "prohibition on torture is jus cogens; UN adopted CAT in 1984; U.S. joined 1994; implemented by FARRA (1998)"
      ]
     ]
    },
    {
     "title": "CAT Art. 1 · Torture",
     "multi": true,
     "text": "Any act by which severe pain or suffering, physical or mental, is intentionally inflicted for a purpose such as:",
     "items": [
      [
       "Information or confession",
       "from him or a third person"
      ],
      [
       "Punishment",
       "for an act he or a third person committed or is suspected of"
      ],
      [
       "Intimidation or coercion",
       "of him or a third person"
      ],
      [
       "Discrimination",
       "“any reason based on discrimination of any kind”"
      ],
      [
       "State action",
       "by, at the instigation of, or with the consent or acquiescence of a public official or person acting in an official capacity"
      ]
     ],
     "tip": "Excludes pain arising only from, inherent in, or incidental to lawful sanctions. Art. 3: no return where there are “substantial grounds for believing” the person would be in danger of torture."
    },
    {
     "title": "U.S. Regulations (8 C.F.R. § 208.18)",
     "items": [
      [
       "Death penalty",
       "expressly a lawful sanction, not torture"
      ],
      [
       "Mental pain",
       "only “prolonged mental harm” from threatened severe physical pain, mind-altering procedures, threat of imminent death, or threats against another person"
      ],
      [
       "Custody",
       "victim must be in the perpetrator’s custody or physical control"
      ],
      [
       "Acquiescence",
       "official aware before the torture and breaches a legal responsibility to intervene"
      ],
      [
       "Diplomatic assurances",
       "Secretary of State + AG can find assurances “sufficiently reliable” and preclude or end the claim"
      ]
     ]
    },
    {
     "title": "Two Forms of CAT Relief",
     "items": [
      [
       "CAT withholding (§ 208.16(c))",
       "likelihood of torture + not within the § 241(b)(3)(B) bars; harder to terminate; generally no detention; work authorization possible"
      ],
      [
       "CAT deferral (§ 208.17)",
       "likelihood of torture but barred; easily terminated; may stay detained"
      ],
      [
       "Why two",
       "FARRA excludes barred people “to the maximum extent consistent with” CAT, but CAT’s ban on return is absolute"
      ]
     ]
    },
    {
     "title": "Element 1 · Is It Torture?",
     "multi": true,
     "text": "Three factors:",
     "items": [
      [
       "Severe pain or suffering",
       "no bright line; a single severe occurrence can be enough (Hernandez-Martinez); violent physical harm far likelier to qualify; rape can be torture (Zubeda)"
      ],
      [
       "Specific intent",
       "intent to cause the severe pain, not just the act (Auguste; Matter of J-E-); why prison-conditions claims usually fail"
      ],
      [
       "Impermissible purpose",
       "listed purposes or discrimination; calling it a lawful sanction doesn’t insulate it (Nuru)"
      ]
     ],
     "tip": "Prison conditions fail without targeted intent (Abdoulaye; Gallina) unless the applicant would be singled out beyond ordinary detainees (Jean-Pierre; Eneh). Police abuse to extract confessions is torture (Kouzam)."
    },
    {
     "title": "Element 2 · State Action",
     "items": [
      [
       "BIA/AG: willful acceptance",
       "actual knowledge + willful breach of the duty to prevent (Matter of S-V-)"
      ],
      [
       "Circuits: willful blindness",
       "government knew or should have known and failed to act (Zheng, 9th Cir.; followed by the 8th, 10th, 4th, 3d)"
      ],
      [
       "Public official",
       "the § 1983 “under color of law” standard"
      ],
      [
       "Rogue officer",
       "covered even if acting against local law and policy (Matter of O-F-A-S-)"
      ]
     ]
    },
    {
     "title": "Element 3 · Likelihood",
     "items": [
      [
       "Standard",
       "more likely than not (Senate’s reading of “substantial grounds”)"
      ],
      [
       "Aggregate risk",
       "total probability from all sources exceeds 50% (Velasquez-Samayoa, 9th Cir.); the 7th Cir. rejects percentages (Rodriguez-Molinero)"
      ],
      [
       "Evidence (§ 1208.16(c)(3))",
       "past torture; internal relocation; gross, flagrant, or mass human rights violations"
      ],
      [
       "No presumption",
       "past torture is one consideration, not a presumption (Dawson)"
      ],
      [
       "Personal risk",
       "country conditions must show the applicant personally at risk (Omar)"
      ]
     ]
    },
    {
     "title": "Kamalthas v. INS (9th Cir. 2001)",
     "text": "Tamil man found not credible for asylum; BIA denied his CAT motion to reopen.",
     "items": [
      [
       "Holding",
       "an asylum denial doesn’t necessarily defeat CAT; the BIA abused its discretion by conflating the standards and ignoring country conditions"
      ],
      [
       "Rule",
       "prima facie CAT case: substantial grounds for believing he’d be tortured, including past torture, gross human rights violations, and country conditions"
      ],
      [
       "Followed",
       "Ramsameachire (2d); Zubeda (3d); Quintero (4th); Mapouya (6th)"
      ],
      [
       "Limit",
       "same factual predicate for both claims → asylum credibility finding can sink CAT (Singh; Yang)"
      ]
     ]
    }
   ]
  }
 ],
 "maps": [
  {
   "title": "Standards of Proof Ladder",
   "kind": "stack",
   "caption": "Lowest bar at the bottom, highest at the top.",
   "layers": [
    {
     "label": "Withholding · Clear probability",
     "text": "More likely than not (> 50%). Mandatory if met."
    },
    {
     "label": "Reasonable probability",
     "text": "Above reasonable possibility, below more likely than not (2024 border rule)"
    },
    {
     "label": "Asylum · Well-founded fear",
     "text": "Reasonable possibility; subjective + objective"
    },
    {
     "label": "Reasonable fear screen",
     "text": "Reasonable possibility of persecution or torture (reinstatement / admin removal)"
    },
    {
     "label": "Credible fear screen",
     "text": "Significant possibility of establishing eligibility"
    }
   ]
  },
  {
   "title": "Asylum vs. Withholding vs. CAT",
   "kind": "compare",
   "caption": "The comparison every fact pattern needs.",
   "cols": [
    "",
    "Asylum § 208",
    "Withholding § 241(b)(3)",
    "CAT"
   ],
   "rows": [
    [
     "Harm",
     "Persecution",
     "Threat to life or freedom",
     "Torture"
    ],
    [
     "State action",
     "Unable or unwilling to protect",
     "Unable or unwilling to protect",
     "Instigation, consent, or acquiescence of an official"
    ],
    [
     "Likelihood",
     "Well-founded fear (reasonable possibility)",
     "More likely than not",
     "More likely than not"
    ],
    [
     "Nexus",
     "Required",
     "Required",
     "None"
    ],
    [
     "Nature",
     "Discretionary",
     "Mandatory if eligible, no bar",
     "Mandatory (withholding or deferral)"
    ],
    [
     "Relief",
     "Status; path to LPR and citizenship; derivatives",
     "Bars removal to that country; no derivatives",
     "CAT withholding, or deferral if barred"
    ],
    [
     "Bars",
     "Bar asylum",
     "Bar withholding",
     "Bar CAT withholding only; deferral still available"
    ],
    [
     "Humanitarian grant",
     "Yes (Chen; other serious harm)",
     "No equivalent",
     "No"
    ]
   ]
  },
  {
   "title": "CAT Claim",
   "kind": "flow",
   "caption": "Three elements, then which form of relief.",
   "steps": [
    {
     "q": "Severe pain or suffering (physical, or prolonged mental harm under § 208.18)?",
     "out": [
      "NO",
      "Not torture (harassment, threats, ordinary prison conditions)"
     ],
     "go": "YES"
    },
    {
     "q": "Specifically intended to cause that pain, for an impermissible purpose?",
     "out": [
      "NO",
      "Not torture (no targeted intent; lawful sanction)"
     ],
     "go": "YES"
    },
    {
     "q": "By, at the instigation of, or with acquiescence of a public official (willful acceptance vs. willful blindness)?",
     "out": [
      "NO",
      "No state action"
     ],
     "go": "YES"
    },
    {
     "q": "More likely than not, considering past torture, relocation, and country conditions (no presumption)?",
     "out": [
      "NO",
      "Claim fails"
     ],
     "go": "YES"
    },
    {
     "q": "Within a § 241(b)(3)(B) bar?",
     "out": [
      "YES",
      "CAT deferral (§ 208.17)"
     ],
     "go": "NO"
    }
   ],
   "end": "CAT withholding (§ 208.16(c))."
  },
  {
   "title": "Building the Claim",
   "kind": "flow",
   "caption": "Outline order of analysis.",
   "steps": [
    {
     "q": "Is the testimony credible and corroborated where the IJ reasonably requires it (REAL ID)?",
     "out": [
      "NO",
      "Claim fails or record too thin; issues may be waived"
     ],
     "go": "YES"
    },
    {
     "q": "Harm: does it rise to persecution (severity, cumulative, economic, mental)?",
     "out": [
      "NO",
      "No past persecution; argue future fear directly"
     ],
     "go": "YES"
    },
    {
     "q": "Nexus: on account of a protected ground?",
     "out": [
      "NO",
      "Not persecution for asylum purposes"
     ],
     "go": "YES"
    },
    {
     "q": "Actor: the state, or one it is unable or unwilling to control (A-B-: condoned / completely helpless)?",
     "out": [
      "NO",
      "Private harm only"
     ],
     "go": "YES"
    },
    {
     "q": "Past persecution → presumed future fear. Can DHS rebut (changed circumstances or reasonable relocation)?",
     "out": [
      "YES",
      "Humanitarian asylum: severity (Chen) or other serious harm"
     ],
     "go": "NO"
    }
   ],
   "end": "Well-founded fear shown. Asylum: discretion (danger outweighs all but egregious factors). Withholding: more likely than not."
  },
  {
   "title": "Relocation After Past Persecution",
   "kind": "flow",
   "caption": "Who bears the burden changes.",
   "steps": [
    {
     "q": "Was the persecutor the government?",
     "out": [
      "YES",
      "Presume relocation unreasonable; DHS must rebut by a preponderance"
     ],
     "go": "NO"
    },
    {
     "q": "Would relocation avoid persecution?",
     "out": [
      "NO",
      "Relocation fails"
     ],
     "go": "YES"
    },
    {
     "q": "Is it reasonable (age, health, gender, family support, infrastructure, strife)?",
     "out": [
      "NO",
      "Relocation fails"
     ],
     "go": "YES"
    }
   ],
   "end": "Relocation defeats future-risk claim. No requirement to have tried it first."
  },
  {
   "title": "Routes Into Protection",
   "kind": "compare",
   "caption": "Who decides at each door.",
   "cols": [
    "Route",
    "Decision-maker",
    "Screen / merits",
    "Next"
   ],
   "rows": [
    [
     "Overseas refugee",
     "USRAP; USCIS Refugee Corps",
     "Overseas determination",
     "Admission"
    ],
    [
     "Affirmative asylum",
     "USCIS asylum officer",
     "Merits interview",
     "Grant, denial, or referral"
    ],
    [
     "Expedited removal + fear",
     "Asylum officer; IJ reviews negative",
     "Credible fear",
     "Full adjudication (not a grant)"
    ],
    [
     "Defensive asylum",
     "Immigration judge",
     "Asylum / withholding merits",
     "BIA → circuit"
    ],
    [
     "Reinstatement / admin removal",
     "Asylum officer; IJ review",
     "Reasonable fear",
     "Withholding / CAT only"
    ]
   ]
  },
  {
   "title": "Review Standards",
   "kind": "compare",
   "caption": "Match the question to the standard.",
   "cols": [
    "Question",
    "BIA",
    "Circuit court"
   ],
   "rows": [
    [
     "Facts",
     "Clear error",
     "Substantial evidence (compelled to the contrary)"
    ],
    [
     "Law",
     "De novo",
     "De novo"
    ],
    [
     "Discretion / judgment",
     "De novo",
     "Arbitrary and capricious"
    ]
   ]
  }
 ],
 "cards": [
  [
   "CAT torture definition",
   "Severe pain or suffering, intentionally inflicted, for an impermissible purpose, by or with acquiescence of a public official; not lawful sanctions."
  ],
  [
   "CAT standard",
   "More likely than not; no nexus; past torture creates no presumption."
  ],
  [
   "CAT withholding vs. deferral",
   "Withholding (§ 208.16(c)) if not barred; deferral (§ 208.17) if barred: easily terminated, may stay detained."
  ],
  [
   "Willful acceptance vs. willful blindness",
   "BIA/AG: actual knowledge + willful breach. Circuits (Zheng): knew or should have known and failed to act."
  ],
  [
   "Specific intent (CAT)",
   "Intent to cause severe pain, not just the act (Auguste; J-E-). Why prison-conditions claims fail."
  ],
  [
   "Kamalthas",
   "Asylum credibility loss doesn’t automatically defeat CAT; consider country conditions. Not where both claims share one factual predicate."
  ],
  [
   "INA § 101(a)(42)(A)",
   "Outside country; unable/unwilling to return or get protection; because of persecution or well-founded fear; on account of race, religion, nationality, PSG, political opinion."
  ],
  [
   "Five protected grounds",
   "Race, religion, nationality, membership in a particular social group, political opinion."
  ],
  [
   "Asylum standard",
   "Well-founded fear: subjective fear + objectively reasonable (reasonable possibility)."
  ],
  [
   "Withholding standard",
   "Clear probability: more likely than not (> 50%)."
  ],
  [
   "Credible fear",
   "Significant possibility of establishing asylum eligibility."
  ],
  [
   "Reasonable fear",
   "Reasonable possibility of persecution or torture; for reinstated/administrative removal; leads to withholding/CAT only."
  ],
  [
   "Art. 33",
   "Non-refoulement on a protected ground; not extraterritorial (Haitian interdiction)."
  ],
  [
   "Last-in-time rule",
   "Later inconsistent statute controls domestically; the U.S. stays bound internationally."
  ],
  [
   "Charming Betsy",
   "Don’t read a statute to violate IL if another reading is possible."
  ],
  [
   "Pattern or practice",
   "Group similarly situated persecuted on a protected ground + applicant is in the group."
  ],
  [
   "Past persecution rebuttal",
   "DHS, by preponderance: fundamental change or safe, reasonable relocation."
  ],
  [
   "Humanitarian asylum",
   "After rebuttal: severity of past persecution (Chen) or reasonable possibility of other serious harm."
  ],
  [
   "Discretion standard",
   "Danger of persecution outweighs all but the most egregious adverse factors."
  ],
  [
   "USRAP priorities",
   "P-1 individual referral; P-2 groups; P-3 family; P-4 Welcome Corps (suspended 2025)."
  ],
  [
   "Mathews factors",
   "Private interest; risk of erroneous deprivation & value of safeguards; government interest & burden."
  ],
  [
   "Fifth Circuit due process",
   "Notice; hearing; fair opportunity to be heard; plus substantial prejudice."
  ],
  [
   "Lozada requirements",
   "Affidavit of agreement; counsel notified and allowed to respond; bar complaint or explanation; plus prejudice."
  ],
  [
   "Substantial evidence",
   "Findings stand unless a reasonable adjudicator would be compelled to conclude otherwise."
  ],
  [
   "Bond burden",
   "Respondent shows she is not a flight risk or danger. Minimum $1,500."
  ],
  [
   "§ 236(c) vs. § 236(a)",
   "Mandatory detention (criminal/terrorism) vs. bond-eligible."
  ],
  [
   "Work authorization clock",
   "File at 150 days; eligible at 180 days pending."
  ],
  [
   "Elements of persecution claim",
   "Serious harm; nexus to a ground; state actor or unable/unwilling; well-founded fear."
  ],
  [
   "UNHCR ¶ 54",
   "Discrimination = persecution if substantially prejudicial: livelihood, religion, education."
  ],
  [
   "Prosecution → persecution factors",
   "Nature of offense; extent of punishment; legitimacy of process."
  ],
  [
   "Punitive intent?",
   "Not required. Objective test. Motive matters only for nexus."
  ],
  [
   "Matter of A-B-",
   "Government condoned the acts or was completely helpless to protect (reinstated 2025)."
  ],
  [
   "Economic persecution",
   "Deliberate severe economic disadvantage or deprivation of essentials, for a protected reason; beyond what society at large faces."
  ]
 ],
 "quiz": [
  {
   "q": "An applicant is barred from withholding under § 241(b)(3)(B) but proves torture is more likely than not. Result?",
   "o": [
    "No protection",
    "CAT deferral",
    "CAT withholding",
    "Asylum"
   ],
   "a": 1,
   "e": "Barred applicants still get deferral (§ 208.17); CAT’s ban on return is absolute."
  },
  {
   "q": "Haiti’s prisons lack food and medical care because of scarce resources. A deportee seeks CAT relief. Most likely:",
   "o": [
    "Granted: conditions are severe",
    "Denied: no specific intent to inflict severe pain",
    "Granted: discrimination",
    "Denied: no nexus"
   ],
   "a": 1,
   "e": "Matter of J-E-; Auguste. Exception: singled out beyond ordinary detainees."
  },
  {
   "q": "Cartel members torture people while local police know and do nothing. Under the Ninth Circuit’s Zheng approach:",
   "o": [
    "No state action without willful acceptance",
    "Acquiescence can be shown: government knew or should have known and failed to act",
    "CAT never covers private actors",
    "Only if police were paid"
   ],
   "a": 1,
   "e": "Willful blindness (circuits) vs. willful acceptance (BIA/AG)."
  },
  {
   "q": "An IJ finds the applicant not credible and denies asylum, then denies CAT without looking at reports of widespread torture of his ethnic group. Under Kamalthas:",
   "o": [
    "Proper: credibility controls both",
    "Error: CAT is analytically separate and country conditions must be considered",
    "Proper unless he showed nexus",
    "Error only if he was tortured before"
   ],
   "a": 1,
   "e": "Unless both claims rest on the exact same factual predicate."
  },
  {
   "q": "An applicant proves a 30% chance of persecution on account of political opinion. She qualifies for:",
   "o": [
    "Asylum and withholding",
    "Asylum only (subject to discretion)",
    "Withholding only",
    "Neither"
   ],
   "a": 1,
   "e": "Well-founded fear can be met below 50%; withholding needs more likely than not."
  },
  {
   "q": "Which relief is mandatory once eligibility is shown and no bar applies?",
   "o": [
    "Asylum",
    "Humanitarian asylum",
    "Withholding of removal",
    "Humanitarian parole"
   ],
   "a": 2,
   "e": "Withholding is mandatory; asylum is discretionary."
  },
  {
   "q": "The government persecuted the applicant in the past. On internal relocation:",
   "o": [
    "Applicant must prove relocation is unreasonable",
    "Relocation is presumed unreasonable; DHS must rebut by a preponderance",
    "Relocation is irrelevant",
    "IJ must deny unless she tried relocating first"
   ],
   "a": 1,
   "e": "Government persecution creates a presumption against reasonable relocation."
  },
  {
   "q": "DHS rebuts the presumption of future fear with fundamental changed circumstances. The applicant suffered atrocious past persecution. Best path?",
   "o": [
    "Withholding",
    "Humanitarian asylum based on severity (Chen)",
    "CAT only",
    "None, the claim is over"
   ],
   "a": 1,
   "e": "Compelling reasons from the severity of past persecution. Withholding has no humanitarian version."
  },
  {
   "q": "Under the Fifth Circuit’s approach, a due process claim in removal proceedings also requires:",
   "o": [
    "A Mathews balancing in every case",
    "A showing of substantial prejudice",
    "Exhaustion before the Supreme Court",
    "Proof of bad faith"
   ],
   "a": 1,
   "e": "Notice, hearing, fair opportunity, plus an initial showing of substantial prejudice."
  },
  {
   "q": "The BIA reviews an IJ’s finding that the applicant was beaten twice. Standard?",
   "o": [
    "De novo",
    "Clear error",
    "Substantial evidence",
    "Arbitrary and capricious"
   ],
   "a": 1,
   "e": "BIA: clear error for facts; de novo for law, discretion, judgment."
  },
  {
   "q": "Which is NOT a Lozada requirement?",
   "o": [
    "Affidavit describing the agreement with counsel",
    "Notice to counsel and chance to respond",
    "A bar complaint or explanation for not filing",
    "Proof prior counsel was disbarred"
   ],
   "a": 3,
   "e": "Plus prejudice. Disbarment is not required."
  },
  {
   "q": "A student lost a university job for her religion but works steadily as a translator with no violence. Most likely:",
   "o": [
    "Economic persecution",
    "Not persecution: loss of one job with other steady work",
    "Persecution per se under ¶ 51",
    "Persecution because intent to punish is shown"
   ],
   "a": 1,
   "e": "No bright line, but keeping steady other work with no significant violence usually falls short."
  },
  {
   "q": "Relatives forced FGM on a daughter “to protect her future.” The persecution analysis:",
   "o": [
    "Fails, no punitive intent",
    "Succeeds: intent to punish isn’t required; harm in one’s “best interest” is still persecution",
    "Depends only on nexus",
    "Requires a government actor"
   ],
   "a": 1,
   "e": "Objective test. Motive goes to nexus, not to whether harm is persecution."
  },
  {
   "q": "Police took a report but haven’t solved the attack after a month. Under A-B-, this shows:",
   "o": [
    "Government unable to control",
    "Not enough: efforts and slow investigation don’t show condoning or complete helplessness",
    "Per se state action",
    "Futility of reporting"
   ],
   "a": 1,
   "e": "Inability to solve a crime quickly isn’t necessarily inability to control."
  },
  {
   "q": "A person with a reinstated removal order expresses fear. Which screen, and what relief?",
   "o": [
    "Credible fear; asylum",
    "Reasonable fear; withholding/CAT only",
    "No screen; removal",
    "Reasonable probability; asylum"
   ],
   "a": 1,
   "e": "Asylum is unavailable in that route."
  },
  {
   "q": "A citizen was prosecuted for theft and sentenced under a fair process to a normal term. Persecution?",
   "o": [
    "Yes, any imprisonment",
    "No: prosecution isn’t persecution absent excessive punishment, a Convention reason, or illegitimate process",
    "Yes if she disagrees with the law",
    "Only if tortured"
   ],
   "a": 1,
   "e": "Nature of the offense, extent of punishment, legitimacy of process."
  },
  {
   "q": "The U.S. interdicts Haitians on the high seas and returns them. Under the Haitian interdiction rule:",
   "o": [
    "Violates art. 33",
    "Doesn’t violate § 243(h) or art. 33: art. 33 isn’t extraterritorial",
    "Violates Charming Betsy",
    "Requires credible fear interviews at sea"
   ],
   "a": 1,
   "e": "Neither provision prohibits interdiction and return on the high seas."
  },
  {
   "q": "An asylum applicant used a fake passport to escape. For discretion:",
   "o": [
    "Mandatory denial",
    "Relevant but little weight; can’t overwhelm the analysis",
    "Irrelevant",
    "Converts the claim to withholding"
   ],
   "a": 1,
   "e": "Escape documents weigh little; fraudulently claiming U.S. citizenship is more serious."
  },
  {
   "q": "When may an asylum applicant receive work authorization?",
   "o": [
    "Immediately on filing",
    "After the application has been pending 180 days (may file at 150)",
    "After 365 days",
    "Only after a grant"
   ],
   "a": 1,
   "e": "The 2020 365-day rule was vacated in 2022."
  }
 ],
 "drills": [
  {
   "title": "Asylum, Withholding, or Both?",
   "prompt": "Which form of relief does the statement describe?",
   "cats": [
    "Asylum",
    "Withholding",
    "Both",
    "Neither"
   ],
   "items": [
    [
     "Discretionary grant",
     "Asylum",
     "Withholding is mandatory."
    ],
    [
     "More likely than not standard",
     "Withholding",
     "Clear probability."
    ],
    [
     "Derivative benefits for spouse and children",
     "Asylum",
     "Withholding has none."
    ],
    [
     "Requires nexus to a protected ground",
     "Both",
     "Both run on the five grounds."
    ],
    [
     "Past persecution creates a presumption of future harm",
     "Both",
     "Presumption applies to asylum and withholding."
    ],
    [
     "Humanitarian grant despite rebutted fear",
     "Asylum",
     "No humanitarian withholding."
    ],
    [
     "Available after a reinstated removal order",
     "Withholding",
     "Asylum unavailable in that route (with CAT)."
    ],
    [
     "Bars to protection leave a fallback form of relief available",
     "Neither",
     "Only CAT has that: deferral."
    ],
    [
     "Path to permanent residence and citizenship",
     "Asylum",
     "Withholding only bars removal to that country."
    ]
   ]
  },
  {
   "title": "Persecution or Not?",
   "prompt": "Does the harm, as described, rise to persecution?",
   "cats": [
    "Persecution",
    "Not persecution"
   ],
   "items": [
    [
     "Short detention, one beating, no medical care needed",
     "Not persecution",
     "Outline: does not rise to persecution."
    ],
    [
     "Threat by a group that has carried out similar threats against neighbors",
     "Persecution",
     "Ask whether the group can carry it out (circuit split on threats alone)."
    ],
    [
     "Denigration and harassment for ethnicity",
     "Not persecution",
     "Harassment and “morally reprehensible” discrimination aren’t enough."
    ],
    [
     "Barred from school, banned from worship, and jobs denied for religion",
     "Persecution",
     "UNHCR ¶ 54: substantially prejudicial consequences."
    ],
    [
     "Large-scale confiscation of property for political opinion",
     "Persecution",
     "Severe economic disadvantage beyond society at large."
    ],
    [
     "Ordinary fine after a fair trial for a traffic crime",
     "Not persecution",
     "Prosecution isn’t persecution."
    ],
    [
     "Forced sterilization under a population-control policy",
     "Persecution",
     "Deemed persecution on account of political opinion."
    ]
   ]
  },
  {
   "title": "Asylum, Withholding, or CAT?",
   "prompt": "Which protection fits best?",
   "cats": [
    "Asylum",
    "Withholding",
    "CAT"
   ],
   "items": [
    [
     "No nexus to a protected ground, but torture is likely",
     "CAT",
     "CAT requires no nexus."
    ],
    [
     "30% chance of persecution for political opinion; discretion favorable",
     "Asylum",
     "Well-founded fear can be met below 50%."
    ],
    [
     "60% chance of persecution on account of religion; serious fraud makes a discretionary denial likely",
     "Withholding",
     "More likely than not with nexus; mandatory, so discretion can’t defeat it."
    ],
    [
     "Persecutor bar applies; torture by police is likely",
     "CAT",
     "Deferral survives the bars."
    ],
    [
     "Wants derivative status for spouse and children",
     "Asylum",
     "Only asylum carries derivatives."
    ]
   ]
  },
  {
   "title": "Who Bears the Burden?",
   "prompt": "Who carries it?",
   "cats": [
    "Applicant",
    "DHS / Government"
   ],
   "items": [
    [
     "Rebutting the past-persecution presumption",
     "DHS / Government",
     "Preponderance."
    ],
    [
     "Proving alienage in removal proceedings",
     "DHS / Government",
     "Respondent then shows manner of entry."
    ],
    [
     "Showing the government is unable or unwilling",
     "Applicant",
     "Applicant’s burden."
    ],
    [
     "Bond: not a flight risk or danger",
     "Applicant",
     "Respondent before the IJ."
    ],
    [
     "Supporting favorable discretion",
     "Applicant",
     "Absent adverse factors, grant."
    ],
    [
     "Relocation reasonable after government persecution",
     "DHS / Government",
     "Presumption against reasonableness."
    ]
   ]
  }
 ],
 "hypos": [
  {
   "title": "The Shopkeeper",
   "facts": "Marta, a Honduran shopkeeper, refused to pay a gang that targets members of her evangelical church. They burned her shop and said they would kill her. Police took a report and did nothing. She fled; the gang then attacked her brother. She now lives in Houston and fears return.",
   "ask": "Walk through asylum eligibility in order.",
   "answer": [
    "Credibility and corroboration first: police report, church letter, photos of the shop; REAL ID lets the IJ require available corroboration.",
    "Harm: shop burned (economic loss) + death threat from a group able to carry it out + attack on family; argue cumulative harm. Fifth Circuit: harm to her brother isn’t her harm.",
    "Nexus: religion (targets church members) vs. extortion; motive goes to nexus, not severity.",
    "Actor: private gang. Under A-B- (Fifth Circuit): did the state condone it or prove completely helpless? A report with no action is contested; slow police alone isn’t enough.",
    "If past persecution: presumption of future fear; DHS rebuts by relocation (gang reach, reasonableness factors) or changed conditions.",
    "Asylum: discretion likely favorable. Withholding: must show more likely than not."
   ]
  },
  {
   "title": "The Border Screen",
   "facts": "Ahmed arrives at a port of entry without documents and says he fears return. He is placed in expedited removal. His interview story differs in some details from his later I-589.",
   "ask": "What process applies and what’s the risk?",
   "answer": [
    "Expedited removal (INA § 235) with a credible fear screen: significant possibility of establishing eligibility.",
    "Positive screen → fuller adjudication, not a grant; as an arriving alien he gets no bond hearing (parole only).",
    "Negative screen → IJ review, no BIA appeal, restricted federal review.",
    "Inconsistencies between the CFI and the I-589 can hurt credibility; prepare an explanation."
   ]
  }
 ]
};
