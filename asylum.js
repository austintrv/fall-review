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
 "sub": "Refugee definition, standards of proof, process and rights, persecution, nexus, and the Convention Against Torture.",
 "exam": {
  "label": "Midterm · 30%",
  "when": "Mon 10.19",
  "date": "2026-10-19"
 },
 "cover": "Ch. 1–5 and Ch. 12",
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
    "This unit asks how far U.S. practice matches the international rules on refugee protection. It starts with how international law becomes U.S. law (through treaties and customary international law, limited by the self-execution and last-in-time doctrines). It then measures U.S. law against the three key articles of the 1967 Protocol: Article 1 (who is a refugee), Article 33 (no return to danger), and Article 34 (states should facilitate naturalization).",
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
       "DHS (Department of Homeland Security) houses USCIS (U.S. Citizenship and Immigration Services), which decides benefit applications, interviews applicants, and through its Refugee Corps and asylum officers handles refugee and asylum cases. USCIS is not a law enforcement agency. Like CBP and ICE, it can refer people to removal proceedings. DOJ (Department of Justice) houses the immigration courts within EOIR (Executive Office for Immigration Review). State reviews visa applications at consulates; HHS (Health and Human Services) handles refugee resettlement through ORR (Office of Refugee Resettlement) and unaccompanied children; Labor handles parts of employment visas."
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
       "How many to admit: three positions",
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
      "After Cardoza-Fonseca, the BIA had to say how to apply the well-founded-fear test. In Matter of Mogharrabi (BIA 1987), it adopted a subjective/objective framework plus a reasonable-person test: whether a reasonable person in this applicant’s circumstances would fear persecution.",
      "Two things must be true: the applicant fears persecution (subjective), and that fear has a reasonable basis in the facts of this applicant’s situation (objective). Credible, specific testimony can supply the objective basis without documents."
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
       "The question is whether a reasonable person in the applicant’s circumstances would fear persecution. Generalized fear alone is not enough. Consider what happened to similarly situated people, but assess this applicant’s circumstances individually. The fear must also be on account of a protected ground; generalized violence or purely personal disputes do not qualify."
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
     "tip": "Pula’s factors are the professor’s ★★★ point. To explain why Pula granted asylum despite the fraud, give four reasons: credibility, the statutory text, Salim limited, and balancing the circumstances of flight.",
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
      "Courts often blur these together. Stevic and Cardoza-Fonseca set the likelihood of harm but did not set the burden of persuasion, so some decision-makers have demanded near-certainty, closer to “beyond a reasonable doubt,” which does not apply in civil proceedings. Asylum cases are also unusual because the factfinder must predict future events, not just find past facts."
     ],
     "items": [
      [
       "Standard of proof",
       "The required likelihood of harm. Example: in an asylum case, the adjudicator must be convinced that the applicant faces a one-in-ten possibility of persecution; in a withholding case, that there is a greater than 50% probability the applicant’s life or freedom will be threatened."
      ],
      [
       "Burden of production",
       "The duty to supply evidence on a point. It is separate from the burden of persuasion: production asks whether the party has put evidence forward at all, while persuasion asks how convinced the factfinder must be. In asylum and withholding cases the applicant bears the burden of proof, and under 8 C.F.R. § 1208.13(a) credible testimony alone can supply the needed evidence without corroboration."
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
        "Earlier accelerated dockets had similar results (slides): under Obama, 70% of respondents were pro se (unrepresented) and 50% of orders were in absentia; under Trump, 80% were in absentia.",
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
     "tip": "Substantial evidence is a deferential standard. The question is whether the record compels the opposite result; a record that only permits it is not enough.",
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
        "Fair hearing: adequate interpretation, qualified counsel, enough time, the right to testify, call witnesses, present documents, and rebut government evidence. Biased evidence such as State Department reports can still be informative; the applicant should be able to expose the bias, and the adjudicator should account for it when weighing the evidence.",
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
        "Open question: whether the majority controls, or whether the Breyer/Ginsburg concurrence, limited to someone just past the border with no prior ties, would come out differently."
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
      "There is a right to counsel in removal proceedings, but only \"at no expense to the Government\" (INA § 240 and § 292). Applicants can hire or find a lawyer; the government will not pay for one. Combined with detention, this makes counsel hard to get.",
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
       "Entitled to counsel at government expense: Franco-Gonzalez v. Holder (C.D. Cal. 2013). ICE and EOIR then adopted screening and competency procedures (the National Qualified Representative Program). The Franco class covers unrepresented, detained individuals in Arizona, California, and Washington; elsewhere, EOIR's Nationwide Policy applies (slides)."
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
        "A 2009 ICE memo said people with positive credible fear findings should be paroled if they are neither a flight risk nor a danger. ICE did not follow it and paroled only about 1% of detainees in FY2013."
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
    "Earlier units asked how likely harm has to be (the risk of harm). This unit asks what kind of harm counts and who has to be causing it. Its big question is when harm that happened to a person, or that might happen, counts as \"persecution\" under refugee law.",
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
       "The respondent fears persecution (harm) by WHO on account of WHAT (nexus). The professor applies this frame to each major case (Pitcherskaia, Korablina, Sadeghi) by asking, in order, whether the applicant is credible, whether the harm rises to persecution, whether there is nexus, whether the persecutor is a government actor or one the government cannot or will not control, and whether there is a well-founded future fear."
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
       "The inquiry considers the cumulative effect of all incidents together. Physical harm is not required. Where a claim does rest on physical harm, the court must identify the required severity.",
       [
        "Kumar v. Garland (9th Cir. 2024): a Sikh political activist beaten and given death threats by members of a Hindu nationalist party. A one-off beating does not compel a persecution finding; physical harm \"plus something more,\" such as credible death threats, does.",
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
       "A Yugoslav chef of Hungarian descent refused the secret police's demand to inform on Hungarian refugees. The police then got him fired from several chef jobs and blocked his hiring, so he worked as a ship's cook and stayed in the U.S. The BIA denied relief because some work remained to him. The Ninth Circuit reversed, calling the requirement of losing all means of livelihood \"clearly wrong.\"",
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
      "The main question here is whether the persecutor must intend to punish or harm. Pitcherskaia v. INS (9th Cir. 1997) says no. The test is objective: whether a reasonable person would regard the harm as offensive. Harm meant to \"cure\" or help the victim is still persecution.",
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
       "Motive matters only for nexus. Persecution does not require punitive intent; nexus, by contrast, requires proof that the persecutor was motivated by a protected ground (INS v. Elias-Zacarias, 1992). Under Elias-Zacarias the relevant characteristic is the victim's, not the persecutor's."
      ],
      [
       "Mental harm",
       "Persecution and torture include mental suffering. EU Qualification Directive Art. 9.2(a) covers \"physical or mental violence,\" and the Convention Against Torture Art. 1 covers \"severe pain or suffering, whether physical or mental.\" Harm inflicted in the victim's supposed best interest, such as FGM (female genital mutilation), is still persecution (In re Kasinga, BIA 1996).",
       [
        "Open question from the slides: whether Pitcherskaia would come out the same if there had been no physical harm."
       ]
      ],
      [
       "Single beating",
       "A short detention with one beating that required no medical attention does not rise to persecution. Government deference to tribal mechanisms does not show it is unable or unwilling to control persecutors within a tribe.",
       [
        "Matter of A-H-D- (BIA 2026): a member of the Hadadin minority tribe in Mauritania was detained for 3 days for joining a political rally and struck once by a police officer. One beating with no significant injury and no need for medical care was not persecution.",
        "Compare Kumar v. Garland: a one-off beating does not compel a persecution finding; a beating \"plus something more,\" such as credible death threats, does."
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
     "tip": "Keep two questions separate: whether the harm is severe enough (objective, no intent needed) and why it was inflicted (nexus, motive required). A BIA finding that the persecutor \"meant well\" goes to neither the harm question nor, by itself, defeats nexus.",
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
        "The slides note that Chen does not say what harm is severe or atrocious, and ask whether it must be physical."
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
        "The 1989 apartheid brief conceded that poverty, disease, and illiteracy alone are not persecution. It argued they were persecution here because they were the direct result of intentional discrimination in a wealthy country.",
        "The slides ask whether every black South African would be eligible, whether fear of the floodgates affects the analysis, and what follows if the law did not require discrimination but it occurred anyway. A U.K. judge: the problem of numbers cannot justify \"artificial and inhuman criteria.\"",
        "Guatemala: the assumption that indigenous people supported the guerrillas made them targets; fewer than 1% of Guatemalan affirmative applicants (1983–86) won asylum, leading to the ABC settlement (1991)."
       ]
      ],
      [
       "Discrimination as persecution",
       "Turns on: (1) the cumulative nature of the violence and harassment; and (2) the societal context of widespread harassment and violence. A single isolated incident may not be persecution; the cumulative effect of several may be. Violence against family counts where it forms a pattern closely tied to the applicant.",
       [
        "Korablina facts: a Jewish woman in Ukraine was denied university admission and job advancement, fired in an all-Jewish layoff, received death threats, and was tied to a chair with a noose tightened around her neck (concussion). Her boss and a friend disappeared; her husband was beaten and her daughter nearly raped. The militia was part of the ultranationalist group, and the state did not protect Jews.",
        "Holding: the record compelled findings of past persecution, well-founded fear, and a clear probability for withholding.",
        "Compare Decky v. Holder (1st Cir. 2009) and Susanto v. Gonzales (1st Cir. 2006): ethnic Chinese Indonesians with taunts, slaps, vandalism, and nearby violence lost. Possible explanations: Korablina's attack needed medical care, the setting, or circuit differences."
       ]
      ],
      [
       "Remand, not grant",
       "A court finding eligibility cannot grant asylum, which is discretionary. Asylum discretion belongs to the AG (Attorney General) in removal proceedings and to the Secretary of DHS (Department of Homeland Security) in affirmative cases, so in Korablina the court remanded to the BIA as the AG's delegate."
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
     "tip": "For the professor's framework on Korablina, run the full frame: credibility (credible \"in all respects\"), harm (cumulative), nexus (anti-Semitic epithets, Star of David), government (militia tied to the group, no protection), and future fear (presumption not rebutted).",
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
      "The line blurs in three ways that the outline lists as factors: the nature of the offense (whether it is a common crime or the \"crime\" is a protected activity), the extent of the punishment (whether it is excessive), and the legitimacy of the judicial process (whether the law itself departs from human rights standards or is applied in a discriminatory way).",
      "Sadeghi v. INS (10th Cir. 1994) shows the split. The majority treated an attempted arrest as legitimate prosecution; the dissent said a law punishing someone for counseling a child not to fight in a war could not be legitimate."
     ],
     "items": [
      [
       "General rule",
       "Prosecution and punishment are not persecution, and people fleeing judicial processes generally do not qualify for refugee status; a refugee is \"not a fugitive from justice.\""
      ],
      [
       "Nature of the offense",
       "Prosecution for a common crime is not persecution; prosecution for a Convention reason can be (Handbook ¶ 57, e.g., \"illegal\" religious instruction to a child).",
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
     "tip": "Slides note that the unable-or-unwilling standard was followed by the BIA and every circuit until June 2018. On a Fifth Circuit fact pattern, check three things: whether the applicant reported (and if not, whether there is objective evidence reporting was futile or dangerous), whether police made any effort, and whether the apathy is local or countrywide.",
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
   "title": "The Nexus Requirement",
   "overview": [
    "A person can suffer terrible harm and still not qualify for asylum or withholding. The harm also has to be connected to one of five protected grounds: race, religion, nationality, membership in a particular social group, or political opinion. That connection is called nexus. The Refugee Convention says “for reasons of” a ground; U.S. law says “on account of” a ground.",
    "The big question in this unit is what “on account of” means. One reading looks at the persecutor’s motive: whether the persecutor wanted to harm this person because of the ground. The other reading looks at causation: whether the person was harmed because of their status or belief, whatever the persecutor was thinking. UNHCR (the United Nations High Commissioner for Refugees), the EU, and many other countries do not require proof of motive. The United States does, since INS v. Elias-Zacarias (1992).",
    "The unit follows the U.S. path: early Fifth and Ninth Circuit cases that took different approaches (Campos-Guardado, Lazo-Majano, Hernandez-Ortiz), the Supreme Court’s adoption of a motive test in Zacarias, the critique of that test, the mixed-motive doctrine, and the REAL ID Act’s “at least one central reason” standard. It ends with open questions (animus, but-for causation, whether the standard applies to withholding) and the international view.",
    "On the exam, nexus is the “on account of what” part of the case framing: the respondent fears persecution (harm) by who on account of what. A claim fails on nexus no matter how severe or likely the harm is, so prove the persecutor’s motive with direct or circumstantial evidence, and if there are several motives, show that a protected ground is at least one central reason."
   ],
   "check": {
    "status": "complete",
    "note": "The outline has no nexus section, so this unit is built from the Day 10 reading notes (casebook pp. 365–402 and the UNHCR Sepet submission). No “DAY 10 CLASS NOTES” file exists in the Asylum notes folder (searched by title and listed the folder; only the Day 11 class notes are there), and no slides exist for Ch. 5. The Day 10 notes pick up Hernandez-Ortiz mid-case (“cont.”) and skip Lazo-Majano and the body of the Musalo article, so those facts and arguments were filled from the Ch. 5 casebook text in Drive (pp. 282–286, 295–297)."
   },
   "blocks": [
    {
     "title": "What Nexus Requires",
     "explain": [
      "Nexus is the link between the persecution a person fears and one of the five protected grounds: race, religion, nationality, membership in a particular social group (PSG), or political opinion. Without that link, harm alone does not make someone a refugee.",
      "The requirement comes from the Refugee Convention and runs through U.S. law. Every state party agrees nexus is required. They disagree about what the linking words (“for reasons of” and “on account of”) mean."
     ],
     "items": [
      [
       "Refugee Convention Art. 1",
       "Defines a refugee as someone with a well-founded fear of being persecuted “for reasons of” one of the five grounds."
      ],
      [
       "Art. 33 (non-refoulement)",
       "Bars returning a refugee to a place where their life or freedom would be “threatened on account of” one of the five grounds. Non-refoulement means the duty not to send a refugee back to danger."
      ],
      [
       "U.S. law",
       "Nexus appears in two places: the refugee definition in INA (Immigration and Nationality Act) § 101(a)(42)(A), which governs asylum, and the withholding of removal provision in INA § 241(b)(3). Both use “on account of.”"
      ],
      [
       "Source of the grounds",
       "The five grounds come from human rights law. In Anker’s words, they “represent protected civil and political rights and statuses, defined by immutable characteristics or protected beliefs basic to identity.” They protect who a person is and what a person believes."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Two Readings of “On Account Of”",
     "explain": [
      "States split over how to prove the link. Under the motive or intent reading, the applicant must show the persecutor was motivated to harm her because of the ground, which means proving what was in the persecutor’s mind. Under the causation reading, it is enough that she suffered harm because of her status or belief, regardless of the persecutor’s motivation.",
      "The choice matters because persecutors rarely announce their reasons. A motive test denies protection to people who cannot prove the persecutor’s state of mind, even when the harm plainly falls on them because of who they are."
     ],
     "items": [
      [
       "(i) Motive / intent",
       "The persecutor must be motivated to harm the applicant because of the protected ground. This is the U.S. approach after INS v. Elias-Zacarias (1992)."
      ],
      [
       "(ii) Causation",
       "The applicant suffered harm because of her status or belief, whatever the persecutor’s motivation. The focus is on why the harm fell on her, measured by effect."
      ],
      [
       "International position",
       "UNHCR, the EU, and many other states parties do not require proof of the persecutor’s intent or motive."
      ],
      [
       "Goodwin-Gill",
       "Nowhere in the 1951 Convention’s drafting history is the persecutor’s motive or intent “ever to be considered as a controlling factor.” This supports the causation reading as the original understanding."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "The U.S. Path to a Motive Test",
     "explain": [
      "U.S. nexus law moved from a split among adjudicators to a firm Supreme Court rule requiring evidence of motive, and then to a statutory standard for cases where the persecutor has more than one motive.",
      "The result is that more U.S. cases are denied on nexus than on any other ground. Some pre-Zacarias cases in the casebook are no longer good law; they are studied to show a different way of analyzing nexus."
     ],
     "items": [
      [
       "1980s",
       "The BIA (Board of Immigration Appeals) consistently required proof of the persecutor’s motivation, and most circuits followed. The Ninth Circuit read “on account of” more broadly."
      ],
      [
       "INS v. Elias-Zacarias (1992)",
       "The Supreme Court adopted the BIA’s approach. Every applicant must provide evidence of the persecutor’s intent."
      ],
      [
       "Mixed motive",
       "Courts later recognized that persecutors can have more than one motive. Nexus is met if a protected ground is a motivating factor."
      ],
      [
       "REAL ID Act of 2005",
       "In mixed-motive cases, the protected ground must be “at least one central reason” for the persecution."
      ],
      [
       "Effect of the motive test",
       "Proving the persecutor’s intent is hard, so more cases are denied on nexus. A Musalo et al. study of 500+ decisions from 1992 to 2016 found lack of nexus was the reason for denial in 75% of cases with credible applicants.",
       [
        "Many of those applicants suffered egregious harm but could not prove the persecutor’s motivation.",
        "Critics say the U.S. approach undermines the Convention’s humanitarian objectives."
       ]
      ]
     ],
     "tip": "When a fact pattern has severe, credible harm, do not stop at persecution. Nexus is where most credible U.S. claims fail (75% in the Musalo study).",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Campos-Guardado v. INS (5th Cir. 1987)",
     "explain": [
      "Campos-Guardado shows how a strict focus on the persecutor’s intent can defeat a claim with extreme, politically charged harm. The Fifth Circuit upheld the BIA’s finding that the attack was not on account of the applicant’s own actual or imputed political opinion.",
      "The case also states the civil strife limit: Congress did not intend asylum for everyone harmed in civil disturbances, so the question is whether the political side of the harm rises to persecution on account of political opinion."
     ],
     "items": [
      [
       "Facts",
       "A Salvadoran woman entered illegally in 1984, conceded deportability, and applied for asylum and withholding. In early 1984 she visited her uncle’s home to repay a debt her father owed.",
       [
        "Her uncle chaired a local agricultural cooperative formed through the controversial agrarian land reform. The day before, two men had demanded the co-op’s money and he refused.",
        "An older woman and two young men with rifles broke down the door, dragged the family to the farm’s waste pit, tied everyone, and gagged the women.",
        "The men hacked the uncle and a male cousin with machetes and shot them to death while forcing the women to watch. The male attackers raped the women, including Campos, while the women with them shouted political slogans.",
        "The victims were told to flee or be killed. Campos had a nervous breakdown and was hospitalized for 15 days.",
        "On a visit home she recognized one attacker, whom her mother introduced as a cousin who had fled the guerrillas. He sought her out several times and threatened to kill her and her family if she revealed his identity.",
        "Guerrillas burned down her workplace in San Salvador. She would not move back near her cousin-assailant and came to the U.S. The IJ (immigration judge) and BIA denied asylum and withholding."
       ]
      ],
      [
       "Issue",
       "Whether the BIA construed “political opinion” too narrowly. Campos argued she was persecuted for political opinion imputed to her, rightly or wrongly, because of her family and its association with land reform, and that as an eyewitness to a political assassination she would be a target in the future.",
       [
        "Her particular social group (family) claim depended on the attackers attributing political opinions to the family, so the court analyzed only political opinion."
       ]
      ],
      [
       "BIA reasoning",
       "The BIA assumed her account was true and that the attack resulted from the uncle’s political views, but found she “had not shown that the attackers harmed her in order to overcome any of her own political opinions.”",
       [
        "She was unlikely to have been targeted because the attackers could not have expected her to be at the house that day.",
        "The attackers may have had political goals, such as intimidating peasants involved in land reform, but nothing showed she was persecuted for an opinion she held “or was believed by the attackers to possess.”",
        "The cousin-assailant’s threats were personal, meant to keep her from exposing him, and were not based on political opinion or any other ground."
       ]
      ],
      [
       "Holding",
       "Affirmed. Substantial evidence supports denial of withholding and the finding that she is statutorily ineligible for asylum.",
       [
        "The BIA did not rest on a “single fatal flaw” (that she did not personally hold the opinion); it also rejected imputed opinion.",
        "The BIA did consider the family relationship, the uncle’s co-op leadership, and the land-reform and human rights evidence. It found them insufficient."
       ]
      ],
      [
       "Civil strife limit",
       "Congress never defined “political opinion,” and the Refugee Act of 1980 dropped “displaced persons” (people displaced by military or civil disturbances) from the refugee definition. The court read this to mean Congress did not intend asylum for everyone harmed by civil disturbances, which always have political implications.",
       [
        "The question becomes whether the political implications behind the fear rise to “political opinion” or are civil strife outside the statute."
       ]
      ],
      [
       "Deference",
       "Evaluating a nation’s political conditions is “a task for which courts are not well-suited,” so the court deferred to the agency."
      ],
      [
       "Burden of proof",
       "Withholding requires a “clear probability” of harm (more likely than not, under Stevic). The BIA never reached likelihood. It denied because the harm she fears, “no matter how likely,” is not on account of a protected ground."
      ],
      [
       "Lessons from the notes",
       "The case shows how hard it is to prove intent: rape, being forced to watch the killings, political slogans shouted, an uncle active in land reform, and still no nexus.",
       [
        "Failure of nexus defeats the claim regardless of how severe or likely the harm is. On these facts she likely could have shown past persecution and a well-founded fear.",
        "Political opinion can be actual or imputed (the persecutor erroneously attributes the opinion to the victim). Covered in Ch. 6.",
        "The BIA’s “they could not have expected her there” rationale assumes targeting requires advance knowledge of who the victim is. Persecutors can reach conclusions about a victim’s opinion during the attack, for example apartheid-era police assuming everyone at an anti-apartheid leader’s home held anti-apartheid views.",
        "Applied too broadly, the civil-disturbance principle denies protection even where nexus exists. It is an open question whether Campos’s harm was civil disturbance or was directed at her as someone perceived to hold political opinions."
       ]
      ]
     ],
     "tip": "Campos-Guardado is a Fifth Circuit case. Use it as the example of a nexus failure despite severe, likely harm, and be ready to attack the BIA’s “no advance knowledge” reasoning with the apartheid-police example.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "The Ninth Circuit’s Flexible Approach: Lazo-Majano and Hernandez-Ortiz",
     "explain": [
      "Before Zacarias, the Ninth Circuit read “on account of” broadly. It looked at both sides of the relationship: the political views and actions of the persecutor as well as the victim’s, and the relationship between the two. Hernandez-Ortiz also created a rebuttable presumption that helped applicants prove political motive when a government used force against people with no legitimate reason to do so.",
      "These cases are included to show a different way of analyzing nexus. Zacarias and the REAL ID Act rejected much of this approach."
     ],
     "items": [
      [
       "Lazo-Majano v. INS (9th Cir. 1987)",
       "A Salvadoran woman was coerced into a sexual relationship with Zuñiga, a Salvadoran military officer, who raped, beat, and threatened her over an extended period. The court held she was persecuted on account of political opinion.",
       [
        "The court looked at the persecutor’s motivations and beliefs as well as the victim’s. It found Zuñiga held the “political opinion that a man has a right to dominate” a woman, which in effect treated machismo as a political opinion.",
        "Compare Campos-Guardado: both arose from the Salvadoran civil war, but the Fifth Circuit asked only whether the persecutors intended to punish the victim for her own actual or imputed opinion."
       ]
      ],
      [
       "Hernandez-Ortiz v. INS (9th Cir. 1985): facts",
       "A Salvadoran woman who entered without inspection in 1977 was found deportable. After those proceedings, Salvadoran security forces murdered her brother (a teacher) and his wife; soldiers threatened her grandparents with submachine guns and robbed their store; and National Guard members kidnapped and beat her brother-in-law’s wife and threatened to kill the couple.",
       [
        "The INS erroneously deported her in 1982 while her petition for review was pending. She was held at the Salvadoran airport until she paid an official about $200, and said the authorities now regarded her as a traitor.",
        "She moved to reopen to apply for asylum and withholding. The BIA denied the motion, finding her fears were only about “political upheaval and random violence” and that no threat was related to political opinion, because neither she nor her relatives belonged to political groups or took part in the conflict."
       ]
      ],
      [
       "Hernandez-Ortiz: holding",
       "The BIA abused its discretion in denying the motion to reopen. It (i) wrongly found her facts insufficient to show, prima facie, a clear probability that her life or freedom would be threatened in El Salvador, and (ii) erred as a matter of law in finding no prima facie showing that the threat was related to political opinion.",
       [
        "Threats or violence against several family members can support a conclusion that the applicant’s own life or freedom is endangered.",
        "Because all the incidents were inflicted by government forces on one family, the inference that they were connected and politically motivated was appropriate.",
        "Whether the victim’s view is neutrality or disapproval of the government is irrelevant, and so is whether she actually holds the view, as long as the government believes she does."
       ]
      ],
      [
       "The rebuttable presumption",
       "“When a government exerts its military strength against an individual or a group within its population and there is no reason to believe that the individual or group has engaged in any criminal activity or other conduct that would provide a legitimate basis for governmental action, the most reasonable presumption is that the government’s actions are politically motivated.”",
       [
        "A presumption is a legal rule that assumes certain facts from proof of other facts. Rebuttable means the opposing party can overcome it with countervailing facts.",
        "Open question from the notes: whether it is reasonable to presume a government’s motive is political when it persecutes innocent citizens.",
        "Eliminating this presumption was one motivation for the REAL ID Act of 2005. Members of Congress said it “improperly favor[ed] asylum applicants who claim that they have been accused of engaging in terrorist, militant, or guerrilla activity” (Matter of J-B-N- & S-M-, BIA 2007)."
       ]
      ],
      [
       "Motion to reopen",
       "Hernandez-Ortiz arose on a motion to reopen, the same device used in INS v. Stevic (Ch. 3). A motion to reopen is used to apply for relief not previously requested, or to submit new, previously unavailable evidence on an existing claim. The applicant must show a prima facie case for the relief sought.",
       [
        "She had not raised asylum or withholding at her first hearing; she applied because of events after those proceedings. In other cases, failure to apply comes from ineffective counsel.",
        "Since the 1996 changes, an applicant generally gets only one motion to reopen, filed within 90 days of the removal order.",
        "Exception: changed country conditions, if the evidence is “material” and was unavailable at the prior proceeding. INA § 240(c)(7)(C); 8 C.F.R. § 1003.2(c)."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": "Day 10 notes start Hernandez-Ortiz at the holding and do not cover Lazo-Majano; facts for both came from the Ch. 5 casebook text (pp. 282–286)."
     }
    },
    {
     "title": "INS v. Elias-Zacarias (1992)",
     "explain": [
      "Zacarias is the Supreme Court case that made the persecutor’s motive the center of U.S. nexus law. A Guatemalan man feared guerrillas who tried to recruit him. The Ninth Circuit found persecution on account of political opinion; the Supreme Court reversed.",
      "The rule: “persecution on account of political opinion” means on account of the victim’s political opinion, not the persecutor’s. Because the statute makes motive critical, the applicant must provide some evidence, direct or circumstantial, that the persecutor will harm him because of that opinion."
     ],
     "items": [
      [
       "Zacarias I (9th Cir. 1990)",
       "The Ninth Circuit held Elias established eligibility for asylum (but not entitlement to withholding) and remanded for the BIA to exercise its discretion on asylum. It looked at both sides of the “persecutor equation”: persecution was on account of political opinion “because the person resisting forced recruitment is expressing a political opinion hostile to the persecutor and because the persecutors’ motive in carrying out the kidnapping is political.”",
       [
        "The decision was unremarkable under Lazo-Majano and Hernandez-Ortiz, but it became the vehicle for the government’s position that nexus requires proof of the persecutor’s motivation. The government petitioned for certiorari."
       ]
      ],
      [
       "Issue",
       "Whether a guerrilla organization’s attempt to coerce a person into military service necessarily constitutes “persecution on account of ... political opinion” under INA § 101(a)(42)."
      ],
      [
       "Facts",
       "In January 1987, when he was 18, two armed, uniformed guerrillas with handkerchiefs partly covering their faces came to his home in Guatemala and asked him and his parents to join. All refused. The guerrillas said they would be back and the family should think it over.",
       [
        "He refused because the guerrillas are against the government and he feared the government would retaliate against him and his family if he joined.",
        "He left at the end of March 1987, afraid the guerrillas would return, and was apprehended in July 1987 for entering without inspection.",
        "The IJ found the claim rested on “this one attempted recruitment” and denied asylum and withholding. The BIA dismissed on procedural grounds and denied reopening even with new evidence that the guerrillas had twice returned to recruit him."
       ]
      ],
      [
       "Standard of review",
       "The BIA’s determination must be upheld if “supported by reasonable, substantial, and probative evidence on the record considered as a whole.” It can be reversed only if a reasonable factfinder would have to conclude the requisite fear of persecution existed."
      ],
      [
       "Holding",
       "Reversed. Of the Ninth Circuit’s two-part rationale, the Court said, “The first half of this seems to us untrue, and the second half irrelevant.”"
      ],
      [
       "(i) Resisting recruitment is not necessarily political",
       "Even a guerrilla supporter might resist for non-political reasons: fear of combat, wanting to stay with family and friends, or wanting a better civilian living.",
       [
        "The record showed the opposite of a political motive: he refused because he feared government retaliation.",
        "Nothing indicated the guerrillas erroneously believed his refusal was political. The Court assumed, without deciding, that imputed opinion would suffice."
       ]
      ],
      [
       "(ii) The persecutor’s own politics are irrelevant",
       "The guerrillas wanted to fill their ranks to fight the government and pursue political goals. That generalized political motive does not make forced recruitment persecution on account of political opinion; it “goes far to refute” it.",
       [
        "Plain meaning: the statute refers to the victim’s political opinion. A Nazi regime persecuting Jews is not persecution on account of political opinion, and a fundamentalist Moslem regime persecuting democrats is not persecution on account of religion, even though the persecutors hold political or religious views."
       ]
      ],
      [
       "Neutrality",
       "Neutrality is not ordinarily a political opinion. Political opinion is distinct from “indifference, indecisiveness and risk-averseness.”",
       [
        "The Court did not decide whether he held a political opinion. Even if he did, he had to show the guerrillas would persecute him because of that opinion, rather than because of his refusal to fight with them, and he did not."
       ]
      ],
      [
       "Proof of motive",
       "Direct proof of the persecutor’s motive is not required. “But since the statute makes motive critical, he must provide some evidence of it, direct or circumstantial.”",
       [
        "For a court to reverse the BIA, the evidence must be “so compelling that no reasonable factfinder could fail to find the requisite fear of persecution.”"
       ]
      ]
     ],
     "tip": "Separate the two Zacarias moves on the exam: (1) refusing to join is not automatically a political opinion, and (2) the persecutor’s political goals do not supply nexus. The applicant needs evidence that the persecutor targets him because of his own actual or imputed opinion.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Zacarias Dissent (Stevens, J.)",
     "explain": [
      "Justice Stevens, joined by Justices Blackmun and O’Connor, would have affirmed. He accepted that Elias had a well-founded fear of harm caused by the guerrillas’ displeasure at his refusal to join, so the only question was whether that fear was “on account of ... political opinion.” His answer was yes, for two reasons."
     ],
     "items": [
      [
       "(i) Political opinion can be expressed negatively",
       "Refusing to support a cause, such as staying home on election day, refusing an oath of allegiance, or refusing to step forward at an induction center, can express a political opinion as effectively as affirmative conduct.",
       [
        "Even if the refusal comes from a simple desire to keep living an ordinary life with one’s family, it is the kind of political expression the asylum provisions protect.",
        "Bolanos-Hernandez: “Choosing to remain neutral is no less a political decision than is choosing to affiliate with a particular political faction.”",
        "Requiring identification with one of two warring factions would frustrate the Refugee Act’s goal of protecting all victims regardless of ideology; moderates who sit out a battle would not qualify.",
        "The majority’s “narrow, grudging construction” conflicts with Cardoza-Fonseca’s generous approach, including construing lingering ambiguities in deportation statutes in favor of the alien."
       ]
      ],
      [
       "(ii) Nexus follows “as night follows day”",
       "The implied threat to “take” or “kill” him if he did not change his position is threatened persecution on account of that opinion.",
       [
        "Bolanos-Hernandez: “It does not matter to the persecutors what the individual’s motivation is.” Persecution for an overt manifestation of a political opinion is persecution because of political opinion.",
        "The statute does not require proof of exactly why persecutors would act, only a “reasonable possibility” of persecution on account of political opinion (Cardoza-Fonseca; Stevic)."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Critique of Zacarias",
     "explain": [
      "Zacarias looks only at the persecutor: persecution is on account of a ground only if the persecutor is motivated to harm the applicant because of her actual or imputed status or belief. The casebook calls it a watershed with a major impact on who gets protection.",
      "The critique has two parts. First, the intent requirement creates problems of proof and of coverage. Second, the Court’s plain-meaning reasoning is contestable, and Karen Musalo argues the statute’s language, Congress’s purpose, and refugee-law policy all point away from an intent requirement."
     ],
     "items": [
      [
       "Problem (i): evidentiary",
       "The applicant must prove what was in the persecutor’s mind. Circumstantial evidence is allowed in theory, but cases are often denied without compelling direct evidence, which is rarely available.",
       [
        "“Persecutors are hardly likely to provide their victims with affidavits attesting to their acts of persecution.” Bolanos-Hernandez.",
        "Campos-Guardado (pre-Zacarias) illustrates the difficulty."
       ]
      ],
      [
       "Problem (ii): failure of protection",
       "Protection fails where the persecutor has no intent to persecute for a protected ground but the effect is persecution for a protected ground. The actor may not think it is causing harm, while the effect is harmful."
      ],
      [
       "Plain meaning and deference",
       "Before Loper Bright (2024), Chevron allowed a court to defer to an agency’s reasonable interpretation of ambiguous statutory language. Zacarias upheld the BIA’s reading without framing it as deference. It held “on account of” unambiguous, with an obvious plain meaning that requires proof of intent."
      ],
      [
       "Musalo: plain language",
       "The dictionary defines “on account of” as “for the sake of, by reason of, because of.” That requires a causal connection between the harm and the victim’s status or belief, but a causal connection does not logically translate into proof of the persecutor’s motivation.",
       [
        "Anti-discrimination statutes with similar language do not always require intent. The Equal Pay Act (“on the basis of sex”) looks at effects, and Title VII (“because of”) can be satisfied by intent or effects."
       ]
      ],
      [
       "Musalo: congressional intent",
       "Congress meant the Refugee Act to bring the U.S. into compliance with the 1967 Protocol, whose phrase “for reasons of” is broad enough to find causation without proof of motive.",
       [
        "The UNHCR Handbook, which Congress knew of, notes applicants may not even be able to identify why they are persecuted.",
        "UNHCR’s amicus brief in Zacarias argued refugee examiners “are not called upon to decide the criminal guilt or liability of the persecutor, and refugee status is not dependent on such proof.”"
       ]
      ],
      [
       "Musalo: policy",
       "Statutes are construed to accomplish their purpose, here protecting people with a reasonable fear of persecution related to a protected ground. Other fields have relaxed intent requirements to serve their goals: criminal law has modified mens rea, tort law moved toward strict liability, and Title VII adopted an effects analysis."
      ]
     ],
     "check": {
      "status": "complete",
      "note": "Day 10 notes list Musalo’s three arguments by name only; their content came from the Ch. 5 casebook excerpt (pp. 295–297)."
     }
    },
    {
     "title": "Notes on the Musalo Critique: Causation vs. Intent",
     "explain": [
      "The notes ask whether the Supreme Court adequately justified its jump from causation (“because of”) to intention (the persecutor’s motive). Comparative scholarship and U.S. anti-discrimination law both suggest the two can be separated."
     ],
     "items": [
      [
       "Foster (2002)",
       "Surveying Canada, the U.K., Australia, and New Zealand, Foster found nexus analysis involves a “conflation of the elements of causation and intent.” “[C]ausation does not necessarily involve any element of intent in other areas of law,” and the “leap from causation to intention is seldom identified or justified.”"
      ],
      [
       "Title VII analogy",
       "Title VII uses “on the basis of” where the refugee statute uses “on account of.” A Title VII claim can be brought two ways:",
       [
        "Disparate impact, first recognized in Griggs v. Duke Power Co.: no proof of intent is needed; the claim rests on effects on a protected class.",
        "Disparate treatment: traditionally requires conscious intent to treat someone differently because of protected-class membership."
       ]
      ],
      [
       "But-for principle",
       "Recent Supreme Court cases are moving away from conscious intent toward a “but-for principle”: the law is violated where the outcome would be different “but for” protected status (Eyer (2021); Bostock v. Clayton County (2020)).",
       [
        "Anti-discrimination law is still in a “conceptual crisis,” but the erosion of the conscious-intent requirement points toward an asylum nexus test not anchored in proof of intent."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Mixed Motives",
     "explain": [
      "After Zacarias, courts faced persecutors driven by several motives at once, for example punishing a political opponent and also extracting information. The mixed-motive doctrine holds that nexus can be met even if a protected ground is only one of the persecutor’s motives.",
      "The doctrine softens Zacarias: the applicant still proves motive, but does not have to prove the protected ground was the only motive."
     ],
     "items": [
      [
       "Matter of S-P- (BIA 1996)",
       "A Sri Lankan man was forced to collaborate with the Tamil Tigers. The Sri Lankan Army captured him in a raid on the Tigers’ camp and interrogated and brutalized him in at least eight sessions, holding a gun to his head four times and sometimes accusing him of being a Tiger.",
       [
        "Issue: whether the harm was on account of imputed political opinion or meant to extract information about the Tigers.",
        "Held: mixed motives accepted. Nexus is established if at least one of the persecutor’s motives is a statutory ground."
       ]
      ],
      [
       "Osorio v. INS (2d Cir. 1994)",
       "Quoted in S-P-: persecution “on account of the victim’s political opinion” does not mean persecution “solely” on account of it."
      ],
      [
       "Lukwago v. Ashcroft (3d Cir. 2003)",
       "A persecutor may have multiple motivations but must be motivated “at least in part” by an enumerated ground."
      ],
      [
       "Misapplying the doctrine is error",
       "Mohideen v. Gonzales (7th Cir. 2005): the BIA failed to evaluate evidence of “dual motive.” Menghesha v. Gonzales (4th Cir. 2006): the IJ erred by not considering all possible motives after finding one legitimate motive."
      ]
     ],
     "tip": "When a persecutor has an obvious non-protected motive (money, information, recruitment), do not concede nexus. Look for a second, protected motive and argue mixed motives.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "“At Least One Central Reason” (REAL ID Act of 2005)",
     "explain": [
      "The REAL ID Act of 2005 codified the mixed-motive approach for asylum but raised the bar: the protected ground must be “at least one central reason” for the persecution, 8 U.S.C. § 1158(b)(1)(B)(i). A ground that is only one of several minor reasons no longer suffices.",
      "Two questions follow: what “central” means (see the next block), and whether the same standard applies to withholding of removal, where the circuits are split."
     ],
     "items": [
      [
       "Background",
       "From 2000 on, there were efforts to require that the ground be a central factor, not just one of several.",
       [
        "The 2000 proposed regulations (never finalized) required the protected characteristic to be “central to the persecutor’s motivation to act against the applicant.”",
        "An early REAL ID bill said “the central motive.” The final text, “at least one central reason,” is slightly less demanding than “the central reason.”"
       ]
      ],
      [
       "“Motive” vs. “reason”",
       "The change from “motive” to “reason” is arguably significant. Chase: a “reason” is the “cause of an event or situation” and could “cover more territory than ‘motive,’” which looks only to the persecutor’s mind. That could move the analysis away from Zacarias toward international standards.",
       [
        "That broader reading has not appeared in cases decided since the REAL ID Act."
       ]
      ],
      [
       "Mixed motives survive",
       "The Conference Report says asylum may be granted where there is more than one motive, “as long as at least one central reason” is a protected ground."
      ],
      [
       "Application to withholding",
       "The circuits split.",
       [
        "BIA, Matter of C-T-L- (2010): yes, “one central reason” applies to withholding.",
        "Ninth Circuit, Barajas-Romero v. Lynch (2017): no. Congress added “one central reason” to the asylum statute but not to withholding. Withholding requires only “a reason,” which “is a less demanding standard than ‘one central reason.’”",
        "The Sixth Circuit followed Barajas-Romero in Guzman-Vazquez v. Barr (2020); a later Sixth Circuit panel criticized that ruling but applied it in Vasquez-Rivera v. Garland (2024).",
        "The First, Second, Third, Fourth, Fifth, Seventh, Eighth, and Eleventh Circuits have rejected the argument or applied “one central reason” to withholding.",
        "Fifth Circuit: Vazquez-Guerra v. Garland (2021) rejected the argument that withholding has a “less demanding” nexus standard."
       ]
      ]
     ],
     "tip": "In the Fifth Circuit, the same “one central reason” nexus standard governs asylum and withholding (Vazquez-Guerra). Only the Ninth and Sixth Circuits use the lower “a reason” standard for withholding.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "What “Central” Means: Dominance, But-For Causation, and Triggers",
     "explain": [
      "Courts agree that “central” does not mean dominant. The protected ground does not have to be the main, only, or most important reason; it only has to be more than an incidental, tangential, or superficial reason.",
      "Courts have also rejected a strict but-for test, and have held that the ground does not have to be the immediate trigger for the harm if it was the reason the person was targeted in the first place."
     ],
     "items": [
      [
       "Not dominant",
       "There is no required “hierarchy of motivations” (Ndayshimiye, 3d Cir. 2009).",
       [
        "The BIA had required the ground to be more than “incidental, tangential, superficial, or subordinate.” Including “subordinate” was error because it implies the protected reason must be dominant.",
        "The rest stands: the protected ground cannot be an “incidental, tangential, or superficial” reason.",
        "Parussimova v. Mukasey (9th Cir. 2008): the applicant need not prove the ground was the most important reason. Lagos v. Barr (4th Cir. 2019): it need not be the only, dominant, or primary reason. Perez-Sanchez (11th Cir. 2019): the applicant need not prove which reason was dominant."
       ]
      ],
      [
       "But-for causation",
       "One route to nexus is showing the persecutor would not have harmed the applicant but for the protected ground. The ground must still be more than incidental or tangential.",
       [
        "Problem: when there are multiple causes, each of which would suffice alone, none is strictly a but-for cause.",
        "Manzano v. Garland (9th Cir. 2024): a motive is a central reason if it alone would have been sufficient for the persecutor to harm the applicant, even if it is not a strict but-for cause. Quituizaca v. Garland (2d Cir. 2022) also rejects a but-for requirement."
       ]
      ],
      [
       "The ground need not be the trigger",
       "If the protected ground is why the person was targeted in the first place, it can be a central reason even if some other event triggered the attack.",
       [
        "Rivera v. Garland (8th Cir. 2024): a pastor preached to gang members; the gangs told him to stop and watched who attended his church. He grew close to Granadeno, an MS-13 member who joined his church. Gang members killed Granadeno, saying he “belonged to them, not to Christ,” and tried to kill Rivera.",
        "The IJ and BIA found religion was not one central reason. The Eighth Circuit vacated because the BIA failed to consider religion as one of multiple central reasons. Even if the trigger was Granadeno leaving the gang, religion could still be an underlying central reason.",
        "Accord Chicas-Machado v. Garland (4th Cir. 2023)."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Animus",
     "explain": [
      "The animus question is whether it is enough that the persecutor chose the victim because of a protected ground, or whether the persecutor must also hold ill will toward the victim or the group. Most precedent rejects an animus or punitive-intent requirement. Matter of M-R-M-S- (BIA 2023) went the other way and has been widely criticized.",
      "The majority view: nexus asks why the person was targeted. If a protected ground is at least one central reason, the inquiry ends, even if the person was selected as a means to some other end."
     ],
     "items": [
      [
       "No animus required",
       "Precedent rejects any animus or punitive-intent requirement.",
       [
        "Matter of Kasinga (BIA 1996): nexus in an FGC (female genital cutting) case even though practitioners had no ill will and believed the ritual was for the woman’s good.",
        "Pitcherskaia v. INS (9th Cir. 1997): threatened electroshock of a Russian lesbian was persecution even though the authorities wanted to “cure” her."
       ]
      ],
      [
       "Matter of M-R-M-S- (BIA 2023)",
       "A cartel forced a family off its land and killed their grandson. The family claimed persecution on account of family as a particular social group. The BIA found no nexus because the persecutors had no animus toward the family and only wanted the land; targeting the family was a means to an end.",
       [
        "Widely criticized and on appeal. The BIA and federal courts have largely rejected an animus requirement.",
        "Mazariegos-Rodas v. Garland (6th Cir. 2024) criticized and rejected M-R-M-S-. Family-based PSG claims are covered further in Ch. 9."
       ]
      ]
     ],
     "tip": "If a fact pattern has a persecutor who targets a family or group to get something else (land, money), argue that the protected ground is still a central reason for choosing the victim, and cite Kasinga, Pitcherskaia, and Mazariegos-Rodas against M-R-M-S-.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "International & Comparative Practice",
     "explain": [
      "The U.S. is an outlier. Its nexus test depends entirely on proof of the persecutor’s intent or motivation, while UNHCR guidance and peer countries allow a broader, more flexible approach. UNHCR has consistently rejected requiring proof of intent or motive, including in its amicus brief in Zacarias and many later interventions.",
      "UNHCR’s submission in Sepet & Bulbul shows the treaty-interpretation argument: read under the Vienna Convention’s rules, Article 1A does not make the persecutor’s motive a condition of refugee status."
     ],
     "items": [
      [
       "UNHCR Submission in Sepet & Bulbul v. Secretary of State (U.K. Ct. App. 2000)",
       "UNHCR responded to the U.K. Home Secretary’s argument on nexus.",
       [
        "¶ 30: The Home Secretary argued that what matters is the reasons that “motivate the persecutor, not the asylum claimant.”",
        "¶ 31: That construction is not supported by Art. 1A. The Convention is a treaty, interpreted under VCLT (Vienna Convention on the Law of Treaties) Art. 31(1): “in good faith in accordance with the ordinary meaning to be given to the terms of the treaty in their context and in light of its object and purpose.”",
        "¶ 32: Art. 1A’s wording does not make the persecutor’s motivation a condition for finding persecution for a Convention reason."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": "Day 10 notes end after ¶ 32 of the UNHCR submission."
     }
    }
   ]
  },
  {
   "title": "Convention Against Torture",
   "overview": [
    "The Convention Against Torture (CAT) is a third form of protection from removal, alongside asylum and withholding. All three are based on harm. CAT matters most for people who fall through the gaps of asylum law: someone who cannot prove nexus to a protected ground under Zacarias, or who is barred from asylum and withholding, can still be protected from being sent back to torture.",
    "CAT is broader than asylum and withholding because it requires no nexus and the asylum and withholding bars do not stop it. It is narrower because it covers only torture, which is more severe than persecution, and the applicant must show torture is more likely than not.",
    "A CAT claim has three elements: (a) the harm is torture, meaning severe pain or suffering, inflicted with specific intent, for an impermissible purpose; (b) sufficient state action, meaning a public official inflicts, instigates, consents to, or acquiesces in it; and (c) torture is more likely than not. A successful claim leads to CAT withholding or, for barred applicants, CAT deferral.",
    "On the exam, run CAT as a separate claim whenever asylum or withholding fails. Kamalthas holds that an asylum denial, even on credibility, does not automatically defeat CAT, because country conditions alone can carry a CAT claim."
   ],
   "check": {
    "status": "complete",
    "note": "Built from the Day 11 reading notes (casebook pp. 416–427), the Day 11 class notes, and the outline’s CAT references (lawful sanctions, reasonable-fear screening, the June 2024 framework, and review of CAT denials). The Day 11 class notes say to rely on slides for the CAT rule outline, but no slides exist for Ch. 5, so the reading notes are the main source."
   },
   "blocks": [
    {
     "title": "Why CAT Matters",
     "explain": [
      "CAT is an alternative source of protection when a rigid nexus reading (Zacarias) leaves people facing serious human rights violations unprotected. Asylum, withholding, and CAT all rest on harm, but CAT protects a different set of people under different rules.",
      "Compared with asylum and withholding, CAT is broader in who it covers and narrower in what harm counts."
     ],
     "items": [
      [
       "Alternative protection",
       "CAT covers people that a rigid nexus reading (Zacarias) leaves unprotected, such as an applicant who faces serious harm but cannot prove the persecutor’s motive was a protected ground."
      ],
      [
       "Broader",
       "Two ways:",
       [
        "No nexus to race, religion, nationality, political opinion, or particular social group is required.",
        "The statutory bars to asylum and withholding (Ch. 11) do not preclude CAT relief."
       ]
      ],
      [
       "Narrower",
       "Two ways:",
       [
        "CAT protects only against harm that meets the definition of “torture,” not all persecution.",
        "There is no well-founded-fear standard; the applicant must show torture is “more likely than not.”"
       ]
      ],
      [
       "Background",
       "The prohibition on torture is a peremptory (jus cogens) norm, meaning no state may derogate from it. The UN adopted CAT in 1984, the U.S. joined in 1994, and Congress implemented it through FARRA (the Foreign Affairs Reform and Restructuring Act of 1998)."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "CAT Art. 1 · Definition of Torture",
     "multi": true,
     "explain": [
      "Article 1 defines torture as “any act by which severe pain or suffering, whether physical or mental, is intentionally inflicted on a person” for a listed purpose, with state involvement. Each part must be met: severe pain or suffering, intentional infliction, a listed purpose, and state action.",
      "Article 3 is the non-refoulement duty that makes CAT a basis for protection from removal."
     ],
     "items": [
      [
       "Severe pain or suffering, intentionally inflicted",
       "The pain or suffering can be physical or mental, must be severe, and must be inflicted intentionally."
      ],
      [
       "Purpose: information or confession",
       "Obtaining information or a confession from the victim or a third person."
      ],
      [
       "Purpose: punishment",
       "Punishing the victim for an act he or a third person committed or is suspected of committing."
      ],
      [
       "Purpose: intimidation or coercion",
       "Intimidating or coercing the victim or a third person."
      ],
      [
       "Purpose: discrimination",
       "“Any reason based on discrimination of any kind.”"
      ],
      [
       "State action",
       "The pain or suffering must be inflicted “by or at the instigation of or with the consent or acquiescence of a public official or other person acting in an official capacity.”"
      ],
      [
       "Lawful sanctions exclusion",
       "Torture does not include pain or suffering “arising only from, inherent in or incidental to lawful sanctions.” The outline states the U.S. version: 8 C.F.R. § 1208.18(a)(3) excludes pain or suffering arising from or inherent in lawful sanctions."
      ],
      [
       "Art. 3 (non-refoulement)",
       "No State Party shall expel, return, or extradite a person to another State “where there are substantial grounds for believing that he would be in danger of being subjected to torture.”"
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "U.S. Regulations (8 C.F.R. § 208.18)",
     "explain": [
      "The U.S. regulations adopt the Article 1 definition but add provisos that narrow it. Each proviso makes it harder to qualify than the treaty text alone would.",
      "The class discussion flagged two features as standing out in U.S. CAT practice: the treatment of the death penalty, and diplomatic assurances."
     ],
     "items": [
      [
       "Death penalty",
       "The death penalty is expressly a “lawful sanction” and so is not torture. Class discussion raised whether the U.S. death penalty itself would count as torture without this proviso."
      ],
      [
       "Mental pain",
       "Mental pain counts only as “prolonged mental harm” caused by one of four things:",
       [
        "intentional or threatened infliction of severe physical pain;",
        "mind-altering substances or procedures “calculated to disrupt profoundly the senses or personality”;",
        "the threat of imminent death; or",
        "the threat that another person will be subjected to any of those."
       ]
      ],
      [
       "Custody",
       "The victim must be in the perpetrator’s “custody or physical control.”"
      ],
      [
       "Acquiescence",
       "The official must be aware of the torture before it happens and then breach a legal responsibility to intervene."
      ],
      [
       "Diplomatic assurances",
       "A CAT claim can be precluded or terminated if the Secretary of State obtains assurances from the receiving country that the person will not be tortured and, with the AG (Attorney General), finds them “sufficiently reliable.”",
       [
        "Flagged in the reading notes.",
        "From class: diplomatic assurances are not discoverable, so in theory anything can suffice."
       ]
      ]
     ],
     "tip": "Diplomatic assurances were flagged: the government can end a CAT claim with assurances the applicant cannot see or challenge in discovery.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Two Forms of CAT Relief",
     "explain": [
      "An applicant who proves torture is more likely than not gets one of two forms of relief, depending on whether a bar applies. The bars are the ones in INA § 241(b)(3)(B), the same bars that apply to withholding of removal.",
      "Two forms exist because of a conflict between FARRA and the treaty. FARRA told the agencies to exclude people barred from withholding “[t]o the maximum extent consistent with” U.S. obligations under CAT, but CAT’s prohibition on return is absolute. Deferral keeps barred people from being returned to torture while giving them less."
     ],
     "items": [
      [
       "CAT withholding (8 C.F.R. § 208.16(c))",
       "The greater form. For applicants who prove the likelihood of torture and are not within the INA § 241(b)(3)(B) bars. It is harder to terminate, the person generally is not detained, and the person may qualify for work authorization.",
       [
        "CAT withholding is a separate form of relief from Refugee Act withholding of removal, even though both use the name."
       ]
      ],
      [
       "CAT deferral (8 C.F.R. § 208.17)",
       "The lesser form. For applicants who prove the likelihood of torture but fall within a § 241(b)(3)(B) bar. It is easily terminated, and the person can remain in detention."
      ],
      [
       "Why two forms",
       "FARRA directs exclusion of barred people as far as CAT allows, and CAT’s ban on return is absolute. Deferral is the minimum the treaty requires for someone who is barred: no return to torture, with fewer benefits."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Asylum vs. Withholding vs. CAT",
     "explain": [
      "The casebook’s Figure 1 compares the three forms of protection on six points. Use it to spot which claim a fact pattern supports and what the applicant gets."
     ],
     "items": [
      [
       "Harm",
       "Asylum: persecution. Withholding: a threat to life or freedom. CAT: torture."
      ],
      [
       "State action",
       "Asylum and withholding: the persecutor is the government, or the government is unable or unwilling to protect. CAT: instigation, consent, or acquiescence of a public official."
      ],
      [
       "Likelihood",
       "Asylum: well-founded fear. Withholding: more likely than not. CAT: more likely than not."
      ],
      [
       "Causation",
       "Asylum and withholding: nexus to a protected ground required. CAT: no nexus."
      ],
      [
       "Relief",
       "Asylum: release from detention, work authorization, a path to LPR (lawful permanent resident) status and then citizenship, and derivative status for spouse and children. Withholding: only withholds return to that country, plus work authorization. CAT: CAT withholding or CAT deferral."
      ],
      [
       "Bars",
       "The bars defeat asylum and withholding, and they bar CAT withholding, but the applicant stays eligible for CAT deferral."
      ]
     ],
     "tip": "An applicant with a bar (Ch. 11) still has CAT deferral. Always check it before concluding there is no relief.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Element 1 · Torture",
     "multi": true,
     "explain": [
      "The first element asks whether the harm meets the definition of torture. Three factors must all be present: the gravity of the pain and suffering, specific intent to cause it, and an impermissible purpose.",
      "Torture is a severe form of harm, so some acts that can be persecution, such as restricting or forbidding religious practice, are not grave enough to be torture."
     ],
     "items": [
      [
       "Severe pain or suffering",
       "There is no bright line. Like persecution, it is a fact-based inquiry into the particulars of the case.",
       [
        "Enough: sustained, severe beatings for a month plus cigarette burns over 8 to 10 days (Al Saher v. INS, 9th Cir. 2001).",
        "Not enough: an arrest with beatings with wooden sticks and leather belts (Kumar v. Gonzalez, 9th Cir. 2005).",
        "Violent physical harm is much more likely to be torture than nonphysical harm. Torture: “cutting off ears, noses, hands, arms, and legs of noncombatants as a deliberate terror tactic” (Kamara, 3d Cir. 2005).",
        "Not torture: lack of mental health care on par with the U.S. (Ruffington v. Cangemi, 8th Cir. 2005); verbal harassment and threats by police and army against a vulnerable ethnic minority, even where torture of that minority is reported (Rashiah v. Ashcroft, 7th Cir. 2004).",
        "Sexual violence can be torture: “severe pain and suffering endemic to rape” (Zubeda v. Ashcroft, 3d Cir. 2003).",
        "No duration or frequency requirement: a single occurrence is enough if it is severe enough (Hernandez-Martinez v. Garland, 1st Cir. 2023)."
       ]
      ],
      [
       "Specific intent",
       "The actor must intend the consequences of the act (the severe pain and suffering), in addition to the act itself (general intent). “[I]f the actor intended the act but did not intend the consequences of the act, i.e., the infliction of severe pain and suffering, although such pain and suffering may have been a foreseeable consequence, the specific intent standard would not be satisfied” (Auguste v. Ridge, 3d Cir. 2005).",
       [
        "Matter of J-E- (BIA 2002), the first decision: a Haitian criminal deportee argued detention conditions (no adequate food, water, or medical care; police brutality) were torture. Held: not extreme enough, and even if they were, not imposed with specific intent to torture.",
        "Early circuit rejections of specific intent were overruled. Zubeda (3d Cir. 2003) said requiring specific intent “could impose insurmountable obstacles” to CAT; overruled by Auguste (3d Cir. 2005). Habtemicael (8th Cir. 2004) found intent if torture is purposeful or the foreseeable result of a deliberate act; overruled by Cherichel v. Holder (8th Cir. 2010).",
        "Auguste and Cherichel, both about Haitian prison conditions, adopted J-E-: the applicant must show the authorities specifically intended to inflict cruel and inhumane treatment.",
        "Same problem as nexus: proving state of mind. Board member Rosenberg’s J-E- dissent said the criticisms of requiring proof of intent in asylum are “particularly apt” in CAT, where the applicant must prove what will be in the torturer’s mind in the future."
       ]
      ],
      [
       "Impermissible purpose",
       "The definition lists purposes (obtaining information, punishment, intimidation, coercion) plus reasons “based on discrimination of any kind.” Pain from “lawful sanctions” is excluded as permissible.",
       [
        "A country calling something a lawful sanction does not insulate it: “torture is never a lawful means of punishment.”",
        "Nuru v. Gonzales (9th Cir. 2005): an Eritrean who opposed the war with Sudan was bound, beaten, and left naked in the sun for 25 days. The BIA’s lawful-punishment finding was reversed."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Prison and Detention Conditions",
     "explain": [
      "Claims based on inhumane prison or institutional conditions almost never succeed. The main reason is specific intent: courts treat bad conditions as the result of limited government resources, not an intent to torture.",
      "The exception is an applicant who would be singled out for treatment beyond what detainees normally experience, because then the harm is targeted."
     ],
     "items": [
      [
       "General rule",
       "Harsh prison conditions are not a basis for relief without “some sort of targeted intent to harm the applicant” (Abdoulaye v. Holder, 7th Cir. 2013).",
       [
        "Settenda v. Ashcroft (1st Cir. 2004): Ugandan conditions were “harsh and life threatening” but not torture.",
        "Gallina v. Wilkinson (2d Cir. 2021): highly restrictive conditions causing mental suffering, including prolonged solitary confinement, were not “procedures calculated to disrupt profoundly the senses or the personality.”",
        "Many later decisions reject prison or institutional-conditions claims (Goudet, 1st Cir.; Pierre, 2d Cir.; Gonzales v. Garland, 8th Cir.; Villegas, 9th Cir.).",
        "Matter of R-A-F- (A.G. 2020) vacated a BIA holding that poor conditions in a Mexican mental health facility were torture."
       ]
      ],
      [
       "Police abuse distinguished",
       "Harsh mistreatment by police to extract confessions is torture (Kouzam v. Ashcroft, 2d Cir. 2004). It is intentional and serves a listed purpose."
      ],
      [
       "Exception: singled out",
       "A claim can succeed if the applicant would be singled out for treatment beyond what detainees normally experience.",
       [
        "Jean-Pierre (11th Cir. 2007): remand on whether a mentally ill, HIV-positive Haitian would be singled out.",
        "Eneh v. Holder (9th Cir. 2010): remand on whether an HIV-positive Nigerian would be intentionally deprived of medication and singled out in prison."
       ]
      ]
     ],
     "tip": "For a prison-conditions fact pattern, the issue is specific intent. Look for facts showing the applicant personally would be targeted (singled out), as in Jean-Pierre and Eneh.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Element 2 · State Action",
     "explain": [
      "Torture must be “by or at the instigation of or with the consent or acquiescence of a public official.” Government agents can carry it out or instigate it, or they can consent to or acquiesce in torture by non-state actors such as guerrillas, gangs, or smugglers.",
      "The main dispute is how much the government must know for acquiescence. The BIA and Attorney General require willful acceptance; most circuits accept willful blindness."
     ],
     "items": [
      [
       "BIA/AG: willful acceptance",
       "Acquiescence requires that the government willfully accept the torturous activity, meaning actual knowledge plus a willful breach of the responsibility to prevent it.",
       [
        "Matter of S-V- (BIA 2000): Colombia does not “willfully accept” the guerrillas’ torturous activities, so there was no prima facie case. In re Y-L-, A-G-, R-S-R- (BIA 2002): same."
       ]
      ],
      [
       "Circuits: willful blindness",
       "Zheng v. Ashcroft (9th Cir. 2003): acquiescence does not require willful acceptance. It is shown if the government knew or should have known of the torture and failed to act.",
       [
        "Facts: a Chinese national feared torture by his smugglers in retaliation for testifying against them in a U.S. court, and argued China acquiesced in the smuggling enterprise. The IJ granted relief; the BIA reversed under willful acceptance; the Ninth Circuit reversed the BIA.",
        "Followed by the 8th, 10th, 4th, and 3d Circuits, among others."
       ]
      ],
      [
       "Public official",
       "The § 1983 “under color of law” standard applies: a “misuse of authority, ‘made possible only because the wrongdoer is clothed with the authority’ of law.”"
      ],
      [
       "Rogue officer",
       "CAT covers torture by a rogue police officer exercising official authority, even without state sanction and in violation of local law and policy (Matter of O-F-A-S-, A.G. 2020; followed by the 2d, 3d, and 9th Circuits)."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Element 3 · Likelihood",
     "explain": [
      "CAT Article 3 requires “substantial grounds for believing” the person would be tortured. The Senate understood that to mean “more likely than not,” the withholding standard, which is higher than asylum’s well-founded fear.",
      "Unlike asylum and withholding, past torture does not create a presumption of future torture. It is one piece of evidence, and country conditions must show the applicant personally faces the risk."
     ],
     "items": [
      [
       "Standard",
       "More likely than not, the Senate’s reading of “substantial grounds for believing.”"
      ],
      [
       "Aggregate risk",
       "Literal approach: “the total probability that the applicant will be tortured, considering all potential sources of and reasons for torture, exceeds 50 percent” (Velasquez-Samayoa, 9th Cir. 2022). The risks from different sources are added together.",
       [
        "Rejected by others: percentages cannot be attached to a risk of torture, and a 50% threshold is inconsistent with CAT’s language and produces absurd distinctions (Rodriguez-Molinero v. Lynch, 7th Cir. 2015)."
       ]
      ],
      [
       "Evidence (8 C.F.R. § 1208.16(c)(3))",
       "The adjudicator considers:",
       [
        "past torture;",
        "the possibility of internal relocation; and",
        "“gross, flagrant or mass violations of human rights within the country of removal.”"
       ]
      ],
      [
       "No presumption",
       "Past torture does not create a regulatory presumption of future torture, unlike past persecution in asylum and withholding. It is one relevant consideration (Dawson v. Garland, 9th Cir. 2021)."
      ],
      [
       "Personal risk",
       "Country conditions are relevant, but the evidence must show the applicant personally would more likely than not be tortured. “Specific grounds must exist that indicate the individual would be personally at risk” (Omar v. Barr, 8th Cir. 2020)."
      ]
     ],
     "tip": "Do not carry the past-persecution presumption over to CAT. Past torture is evidence only, and general country reports need a link to this applicant.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Kamalthas v. INS (9th Cir. 2001)",
     "explain": [
      "Kamalthas holds that a CAT claim is analytically separate from asylum. An applicant found not credible for asylum can still win CAT, because CAT does not require nexus and country conditions alone can play a decisive role.",
      "The limit: when the asylum and CAT claims rest on exactly the same facts, the asylum credibility finding can defeat CAT too."
     ],
     "items": [
      [
       "Facts",
       "Kamalthas, a 25-year-old Tamil man from Sri Lanka, arrived in 1996 with a false passport and applied for asylum and withholding. He testified that Tamil Tiger rebels tried to recruit him and beat him when he refused, and then Sri Lankan police captured him as a Tamil male and tortured him for five days.",
       [
        "The IJ found him not credible: his “wooden manner of speech,” others had told “the exact same story,” and at the airport he told an INS inspector he never had problems with the police. The BIA and the Ninth Circuit affirmed, but the court stayed the mandate so he could move to reopen under CAT.",
        "The BIA denied the motion to reopen: he submitted only his old asylum application and an unsigned affidavit, “state[d] no new facts,” and so did not show torture was more likely than not."
       ]
      ],
      [
       "Issue",
       "Whether an applicant found ineligible for asylum necessarily fails to qualify for CAT relief. This was a question of first impression in the Ninth Circuit."
      ],
      [
       "Holding",
       "No. An asylum denial does not necessarily defeat CAT. The BIA abused its discretion by conflating the asylum and CAT standards and ignoring country conditions. Country conditions alone can play a decisive role in CAT relief, and CAT does not require that the risk of torture be on account of a protected ground. Vacated and remanded."
      ],
      [
       "Reasoning",
       "8 C.F.R. § 208.16(c)(3) requires that “all evidence relevant to the possibility of future torture shall be considered,” apart from prior asylum findings. The BIA never considered the documented country conditions corroborating widespread torture of Tamil males.",
       [
        "CAT is broader (no “on account of” requirement) and narrower (torture, not just persecution, must be more likely than not), so it is not a subset of asylum or withholding.",
        "Mansour v. INS (7th Cir. 2000), on similar facts: “we are not comfortable with allowing a negative credibility determination in the asylum context to wash over the torture claim.” Country conditions might lend credence to the applicant’s account."
       ]
      ],
      [
       "Rule",
       "A petitioner makes a prima facie CAT case by presenting evidence of “substantial grounds for believing that he [or she] would be in danger of being subjected to torture,” including past torture, “gross, flagrant or mass violations of human rights,” and other country-conditions information."
      ],
      [
       "Followed",
       "Widely followed:",
       [
        "Ramsameachire (2d Cir. 2004): an adverse credibility finding dooms asylum but “may not be a particularly significant aspect of the CAT inquiry.”",
        "Zubeda (3d Cir. 2003): error to let “the taint of the earlier adverse credibility determination” bleed into the CAT claim.",
        "Quintero v. Garland (4th Cir. 2021): failing to fully consider country conditions for CAT is reversible error.",
        "Mapouya v. Gonzales (6th Cir. 2007): the adverse credibility finding “erroneously infected” the CAT analysis."
       ]
      ],
      [
       "Limit",
       "Where the asylum and CAT claims rest on the same factual predicate, the CAT claim also turns on credibility, and the judge may rely on the asylum credibility finding to deny CAT.",
       [
        "Singh v. Lynch (9th Cir. 2015): the claimed attack by Sikh militants was not credible and not supported by country reports.",
        "Yang v. U.S. Dep’t of Just. (2d Cir. 2005): the forced-sterilization claim, found not credible, was crucial to both claims."
       ]
      ]
     ],
     "tip": "After an adverse credibility finding, ask whether the CAT claim can stand on country conditions independent of the discredited testimony. If yes, Kamalthas; if the CAT claim depends on the same story, Singh and Yang.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "CAT in the Process",
     "explain": [
      "CAT also appears in the procedural units. These outline points show where CAT claims are screened, preserved, and reviewed."
     ],
     "items": [
      [
       "Separate protection",
       "The outline lists CAT as a separate form of protection from removal, apart from asylum and withholding."
      ],
      [
       "Reasonable fear screening",
       "A reasonable possibility of persecution or torture is the screening threshold for people with reinstated removal orders and certain administrative-removal orders. Passing it leads to withholding and CAT proceedings; asylum is unavailable on this route."
      ],
      [
       "June 2024 border framework",
       "The Securing the Border framework restricted asylum during specified border-encounter levels but still allowed requests for withholding and CAT."
      ],
      [
       "Review of CAT denials",
       "Factual challenges to CAT denials receive federal appellate review under the substantial-evidence standard, even in the criminal-removal context."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
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
   "Severe physical or mental pain or suffering, intentionally inflicted, for a purpose such as obtaining information or a confession, punishment, intimidation or coercion, or discrimination, by or with the consent or acquiescence of a public official. Pain arising only from lawful sanctions is excluded.",
   7
  ],
  [
   "CAT standard",
   "The applicant must show torture is more likely than not. No nexus to a protected ground is required, and past torture is evidence only; it creates no presumption of future torture.",
   7
  ],
  [
   "CAT withholding vs. deferral",
   "CAT withholding (8 C.F.R. § 208.16(c)) goes to applicants who prove likely torture and are not within the INA § 241(b)(3)(B) bars. CAT deferral (§ 208.17) goes to barred applicants: it is easily terminated and the person can stay detained, but it still bars return to torture.",
   7
  ],
  [
   "Willful acceptance vs. willful blindness",
   "The BIA and AG require willful acceptance for acquiescence: actual knowledge plus a willful breach of the duty to intervene (Matter of S-V-). Most circuits, following Zheng v. Ashcroft (9th Cir.), accept willful blindness: the government knew or should have known of the torture and failed to act.",
   7
  ],
  [
   "Specific intent (CAT)",
   "The actor must intend the severe pain and suffering itself, not just the act; a foreseeable result is not enough (Auguste v. Ridge; Matter of J-E-). This is why claims based on poor prison conditions caused by scarce resources usually fail.",
   7
  ],
  [
   "Kamalthas v. INS",
   "An asylum denial, even on credibility, does not automatically defeat CAT, because CAT needs no nexus and country conditions alone can carry the claim; the BIA must consider them. Exception: where both claims rest on the same factual predicate, the credibility finding can defeat CAT too.",
   7
  ],
  [
   "INA § 101(a)(42)(A)",
   "A refugee is a person outside the country of nationality (or last habitual residence, if stateless) who is unable or unwilling to return to it or accept its protection, because of persecution or a well-founded fear of persecution on account of race, religion, nationality, membership in a particular social group, or political opinion.",
   1
  ],
  [
   "Five protected grounds",
   "Race, religion, nationality, membership in a particular social group, and political opinion. The harm must be on account of one of them (nexus); harm for any other reason does not qualify for asylum or withholding.",
   1
  ],
  [
   "Asylum standard",
   "A well-founded fear of persecution: the applicant subjectively fears persecution and the fear is objectively reasonable, meaning a reasonable possibility of persecution. It can be met well below 50% (Cardoza-Fonseca's one-in-ten example).",
   2
  ],
  [
   "Withholding standard",
   "A clear probability of persecution: persecution must be more likely than not (over 50%), under INS v. Stevic. Once met, withholding is mandatory unless a bar applies.",
   2
  ],
  [
   "Credible fear",
   "The expedited-removal screen: a significant possibility, considering the credibility of the person's statements and other known facts, that the person could establish asylum eligibility. Passing it only leads to fuller adjudication.",
   2
  ],
  [
   "Reasonable fear",
   "A reasonable possibility of persecution or torture. It is the screen for people with reinstated or certain administrative removal orders (and those under the Circumvention of Lawful Pathways rule), and a positive finding leads only to withholding and CAT, not asylum.",
   2
  ],
  [
   "Article 33 (non-refoulement)",
   "No state may expel or return a refugee to territories where life or freedom would be threatened on a protected ground. It bars return but does not require admission. Sale v. Haitian Centers Council held it does not apply to U.S. action on the high seas.",
   1
  ],
  [
   "Last-in-time rule",
   "A later federal statute that conflicts with a treaty supersedes the treaty as domestic law, but the U.S. remains bound internationally. Domestic nullification does not equal international discharge.",
   1
  ],
  [
   "Charming Betsy canon",
   "A statute should never be construed to violate the law of nations if any other possible construction remains. Restatement (Fourth) § 309(1) states the modern version: construe statutes to avoid treaty conflicts where fairly possible.",
   1
  ],
  [
   "Pattern or practice",
   "If there is a pattern or practice of persecution of a group similarly situated to the applicant on a protected ground, and the applicant shows inclusion in and identification with that group, she need not show she would be singled out individually.",
   3
  ],
  [
   "Past persecution rebuttal",
   "Past persecution creates a presumption of future persecution on the same ground. DHS can rebut it by a preponderance of the evidence by showing a fundamental change in circumstances, or that safe internal relocation is possible and reasonable.",
   3
  ],
  [
   "Humanitarian asylum",
   "After DHS rebuts the past-persecution presumption, asylum can still be granted in discretion for compelling reasons arising from the severity of the past persecution (Matter of Chen) or a reasonable possibility of other serious harm. Both routes require past persecution, and withholding has no equivalent.",
   3
  ],
  [
   "Discretion standard (Matter of Pula)",
   "Asylum is discretionary, but 'the danger of persecution should generally outweigh all but the most egregious of adverse factors.' The adjudicator weighs the totality of the circumstances of flight, and the applicant bears the burden of showing favorable discretion.",
   2
  ],
  [
   "USRAP priorities",
   "P-1: individual referrals by UNHCR, an NGO, or a U.S. embassy (the only priority open to any nationality). P-2: groups of special humanitarian concern. P-3: family members. P-4: Welcome Corps private sponsorship, suspended February 2025.",
   1
  ],
  [
   "Mathews v. Eldridge factors",
   "Procedural adequacy balances (1) the private interest affected, (2) the risk of erroneous deprivation under current procedures and the value of added safeguards, and (3) the government's interest, including the cost and burden of more process.",
   4
  ],
  [
   "Fifth Circuit due process",
   "A removal proceeding must give notice of the charges, a hearing before an executive or administrative tribunal, and a fair opportunity to be heard. The noncitizen must also make an initial showing of substantial prejudice from the defect.",
   4
  ],
  [
   "Lozada requirements",
   "To reopen for ineffective assistance: (1) an affidavit describing the agreement with counsel, (2) proof counsel was notified and allowed to respond, and (3) a bar complaint or an explanation for not filing one. The respondent must also show prejudice.",
   4
  ],
  [
   "Substantial evidence",
   "The circuit court standard for agency fact-finding: findings stand unless any reasonable adjudicator would be compelled to conclude otherwise. Evidence that merely supports another result is not enough to reverse.",
   4
  ],
  [
   "Bond burden",
   "At a bond hearing before the IJ, the respondent must show she is not a flight risk and not a danger to the community; a danger finding makes her ineligible. Minimum bond is $1,500.",
   4
  ],
  [
   "§ 236(c) vs. § 236(a)",
   "Section 236(c) mandates detention, with no bond, for certain criminal and terrorism grounds. Section 236(a) is the general rule: a person is bond-eligible if she is not a danger and not likely to abscond.",
   4
  ],
  [
   "Work authorization clock",
   "An asylum applicant may file for work authorization at 150 days and becomes eligible once the application has been pending 180 days. The 2020 rules extending the wait to 365 days were vacated in 2022.",
   4
  ],
  [
   "Elements of a persecution claim",
   "(1) Harm rising to persecution, (2) nexus to a protected ground, (3) a persecutor who is the government or an actor the government is unable or unwilling to control, and (4) a well-founded fear of future persecution, which past persecution presumes.",
   5
  ],
  [
   "UNHCR Handbook ¶ 54",
   "Discrimination is persecution when it leads to substantially prejudicial consequences, such as serious restrictions on the right to earn a livelihood, practise one's religion, or access normally available education.",
   5
  ],
  [
   "Prosecution vs. persecution factors",
   "Prosecution is not persecution unless the offense is in substance a Convention-protected activity, the punishment is excessive, or the process is illegitimate because the law violates human rights or is applied in a discriminatory way.",
   5
  ],
  [
   "Punitive intent and persecution",
   "Punitive intent is not required. Under Pitcherskaia v. INS, persecution is judged objectively, by whether a reasonable person would regard the harm as offensive. A motive to 'cure' or help does not matter; the persecutor's motive matters only for nexus.",
   5
  ],
  [
   "Matter of A-B- (reinstated 2025)",
   "For harm by private actors, the applicant must show the government condoned the acts or was completely helpless to protect. Matter of S-S-F-M- (2025) vacated A-B- III and returned to A-B- I and II. Government efforts, light sentences, or local apathy do not meet the test.",
   5
  ],
  [
   "Economic persecution",
   "The deliberate imposition of severe economic disadvantage, or deprivation of liberty, food, housing, employment, or other essentials of life, for a protected reason, beyond what society as a whole faces. Total loss of livelihood is not required.",
   5
  ],
  [
   "Asylum vs. non-refoulement",
   "Asylum is a state's discretionary grant of formal legal status to a refugee. Non-refoulement is an absolute duty not to return a refugee to a place where life or freedom would be threatened. A state can refuse asylum lawfully but cannot return the refugee.",
   0
  ],
  [
   "Three bodies of international law",
   "Refugee law (1951 Convention and 1967 Protocol) covers people displaced across borders. Humanitarian law (1949 Geneva Convention) governs armed conflict only. Human rights law (for example, the 1984 CAT) applies in war or peace.",
   0
  ],
  [
   "Three perspectives on the refugee definition (Hathaway)",
   "Juridical (1920s): a person lacking legal protection from any government. Social (1930s): a member of a group harmed by a social or political event. Individualist (1940s to present): individualized fear of persecution, which became Article 1 of the 1951 Convention.",
   0
  ],
  [
   "Durable solutions",
   "UNHCR's three solutions are voluntary repatriation (preferred, if return is reasonably safe), local settlement in the host country (requires the host's agreement), and third-country resettlement (when neither return nor staying is safe).",
   0
  ],
  [
   "Crystallization of the regime (1921 to 1951)",
   "Three phases: early efforts from 1921 (Nansen as League High Commissioner for Russian Refugees), the IRO in 1946 (the first agency to handle every aspect of refugee problems), and UNHCR from 1951.",
   0
  ],
  [
   "Right to seek vs. right to receive asylum",
   "A refugee has a right to seek asylum, and states must not obstruct access to asylum procedures. No universal treaty gives an individual a right to receive asylum; granting it is a sovereign choice.",
   0
  ],
  [
   "1967 Protocol",
   "Incorporates the 1951 Convention's well-founded-fear definition, removes its time and place limits, and binds parties to Articles 2 to 34. The U.S. acceded in 1968, and Article 33 is its most significant obligation.",
   1
  ],
  [
   "Article 34",
   "States 'shall as far as possible facilitate' the assimilation and naturalization of refugees. The words 'as far as possible' make it encouragement only: it does not require granting status or citizenship.",
   1
  ],
  [
   "Sale v. Haitian Centers Council (1993)",
   "The Court held 8-1 that neither former INA § 243(h) nor Article 33 applies to Coast Guard action on the high seas, so interdicting and returning Haitians without screening was lawful under U.S. law. It left open whether non-refoulement binds as customary law.",
   1
  ],
  [
   "ABC settlement rule",
   "In deciding well-founded fear, foreign policy, border enforcement, U.S. relations with the applicant's government, and U.S. agreement with the applicant's beliefs are not relevant, and one standard applies to all nationalities. Foreign policy may still shape overseas USRAP selection.",
   1
  ],
  [
   "Temporary Protected Status (INA § 244)",
   "Temporary, work-authorized status for nationals of a country facing armed conflict, environmental disaster, or other extraordinary and temporary conditions. Only those in the U.S. on the designation date qualify; extensions keep that date, and redesignation moves it.",
   1
  ],
  [
   "INS v. Stevic (1984)",
   "Withholding requires a clear probability of persecution (more likely than not). Refugee status alone does not entitle a person to withholding, because the withholding provision does not refer to the refugee definition.",
   2
  ],
  [
   "INS v. Cardoza-Fonseca (1987)",
   "Asylum's well-founded fear is more generous than withholding's clear probability; a fear can be well-founded with less than a 50% chance. The Court relied on the different statutory words ('fear' vs. 'would be threatened'), structure, and legislative history, and gave no Chevron deference.",
   2
  ],
  [
   "Matter of Mogharrabi (BIA 1987)",
   "Well-founded fear means subjective fear plus an objectively reasonable basis: whether a reasonable person in the applicant's circumstances would fear persecution on a protected ground. Credible, detailed testimony can supply the objective basis without documents, subject to REAL ID corroboration rules.",
   2
  ],
  [
   "Reasonable probability",
   "A screening standard added by the June 2024 Securing the Border rule for people limited to withholding and CAT: substantially more than a reasonable possibility but somewhat less than more likely than not. It is the highest of the three screens.",
   2
  ],
  [
   "Asylum vs. withholding: what each gives",
   "Asylum is discretionary but leads to permanent residence and citizenship and covers a spouse and children. Withholding is mandatory once proven but only bars removal to the country of threat (removal to a third country is allowed) and has no derivatives.",
   2
  ],
  [
   "Past persecution presumption",
   "Past persecution on a protected ground creates a presumption of a well-founded fear (asylum) or threat to life or freedom (withholding) on the same ground. The feared future harm need not match the past harm (the Attorney General's 2008 decision vacating the BIA's Matter of A-T-).",
   3
  ],
  [
   "Internal relocation",
   "A claim fails if the applicant could avoid persecution by moving within the country and it would be reasonable to expect her to do so. If the persecutor is the government, relocation is presumed unreasonable and DHS must rebut by a preponderance.",
   3
  ],
  [
   "Disfavored-group approach (Ninth Circuit)",
   "A member of a group facing discrimination and mistreatment, short of a pattern or practice of persecution, may meet the burden with a lesser showing of individual risk. The First, Third, and Eleventh Circuits rejected it.",
   3
  ],
  [
   "Standard of proof vs. burden of persuasion",
   "The standard of proof is the likelihood of harm that must be shown (reasonable possibility for asylum, more likely than not for withholding). The burden of persuasion is how convinced the factfinder must be; the applicant bears the burden of proof, and credible testimony alone can suffice.",
   3
  ],
  [
   "DHS v. Thuraissigiam (2020)",
   "A noncitizen caught just inside the border with no prior lawful admission has only the admission-related procedural rights Congress supplied, and limits on habeas review of expedited removal do not violate the Suspension Clause.",
   4
  ],
  [
   "Flores settlement order of release",
   "Children are released without unnecessary delay, in order of preference, to a parent, a legal guardian, an adult relative, an adult or entity the parent designates, a licensed program, or another adult or entity, and held in the least restrictive appropriate setting.",
   4
  ],
  [
   "Arriving aliens and bond (Matter of M-S-)",
   "A person in expedited removal who establishes credible fear must be detained unless paroled. ICE treats arriving aliens as bond-ineligible and says IJs lack custody jurisdiction, so parole is the only route out.",
   4
  ],
  [
   "Appointed counsel: who gets it",
   "Mentally incompetent detainees are entitled to counsel at government expense (Franco-Gonzalez v. Holder). Children have no right to appointed counsel, and whether due process requires it for unaccompanied minors remains open.",
   4
  ],
  [
   "BIA standards of review",
   "The BIA reviews IJ findings of fact for clear error and reviews questions of law, discretion, and judgment de novo. Streamlining in 2002 changed factual review from de novo to clear error.",
   4
  ],
  [
   "Kovac v. INS (9th Cir. 1969)",
   "A probability of deliberate imposition of substantial economic disadvantage on a protected ground is enough for persecution. Loss of all means of livelihood is not required, and the harm need not be physical.",
   5
  ],
  [
   "Matter of Chen (BIA 1989)",
   "Atrocious past persecution supports asylum even after changed conditions rebut the presumption of future fear, now codified at 8 C.F.R. § 208.13(b)(1)(iii)(A). Chen counted harm to the applicant's family; the Fifth Circuit does not (Shehu v. Gonzales).",
   5
  ],
  [
   "Korablina v. INS (9th Cir. 1998)",
   "Discrimination rises to persecution based on (1) the cumulative nature of the violence and harassment and (2) the societal context of widespread harassment and violence. Several incidents together can be persecution even if one alone is not.",
   5
  ],
  [
   "Unable or unwilling (UNHCR ¶ 65)",
   "Acts by private people are persecution if the authorities knowingly tolerate them or refuse, or prove unable, to offer effective protection. The applicant bears the burden, and failure to report is excused if reporting would be futile or dangerous.",
   5
  ],
  [
   "Denying vs. divesting citizenship",
   "Statelessness or denial of citizenship alone is not persecution (Faddoul v. INS). Stripping citizenship because of religion or ethnicity is persecution and creates a presumption of a well-founded fear (Haile).",
   5
  ],
  [
   "Nexus",
   "The link between the persecution and a protected ground. The Convention says 'for reasons of'; U.S. law (INA §§ 101(a)(42)(A) and 241(b)(3)) says 'on account of.' A claim fails without nexus no matter how severe or likely the harm.",
   6
  ],
  [
   "Motive vs. causation readings",
   "The motive reading requires proof the persecutor wanted to harm the applicant because of the ground (the U.S. rule since Elias-Zacarias). The causation reading asks only whether the harm fell on her because of her status or belief; UNHCR, the EU, and many states use it.",
   6
  ],
  [
   "INS v. Elias-Zacarias (1992)",
   "Persecution on account of political opinion means the victim's opinion, not the persecutor's. Resisting recruitment is not necessarily political, and the applicant must give some evidence, direct or circumstantial, of the persecutor's motive.",
   6
  ],
  [
   "Mixed motives (Matter of S-P-)",
   "A persecutor can have more than one motive. Nexus is met if at least one motive is a protected ground; 'on account of' does not mean 'solely' on account of (Osorio).",
   6
  ],
  [
   "At least one central reason",
   "The REAL ID Act of 2005 requires the protected ground to be at least one central reason for the persecution. It need not be dominant or a strict but-for cause. It must be more than incidental, tangential, or superficial.",
   6
  ],
  [
   "Nexus standard for withholding",
   "The circuits split. The Ninth (Barajas-Romero) and Sixth Circuits require only 'a reason' for withholding. The BIA and most circuits, including the Fifth (Vazquez-Guerra v. Garland), apply 'one central reason.'",
   6
  ],
  [
   "Animus",
   "Most precedent rejects any requirement that the persecutor bear ill will toward the victim (Kasinga; Pitcherskaia). Matter of M-R-M-S- (BIA 2023) required animus and is widely criticized; Mazariegos-Rodas (6th Cir. 2024) rejected it.",
   6
  ],
  [
   "Hernandez-Ortiz presumption",
   "Pre-Zacarias Ninth Circuit rule: when a government uses military force against people with no legitimate basis for doing so, its actions are presumed politically motivated. Eliminating it was one motivation for the REAL ID Act.",
   6
  ],
  [
   "Three elements of a CAT claim",
   "(1) The harm is torture: severe pain or suffering, specific intent, and an impermissible purpose. (2) State action: a public official inflicts, instigates, consents to, or acquiesces in it. (3) Torture is more likely than not.",
   7
  ],
  [
   "Lawful sanctions and the death penalty",
   "Torture excludes pain arising from or inherent in lawful sanctions, and the U.S. regulations expressly treat the death penalty as a lawful sanction. A country's label does not protect actual torture: 'torture is never a lawful means of punishment' (Nuru v. Gonzales).",
   7
  ],
  [
   "Prison conditions under CAT",
   "Harsh prison conditions are not torture without targeted intent to harm the applicant, because poor conditions from scarce resources lack specific intent. The exception is an applicant who would be singled out beyond what detainees normally experience (Jean-Pierre; Eneh).",
   7
  ],
  [
   "Rogue officer (Matter of O-F-A-S-)",
   "CAT covers torture by a police officer exercising official authority, even without state sanction and in violation of local law, because the misuse of authority is made possible by the office (the § 1983 'under color of law' test).",
   7
  ],
  [
   "Mental pain under 8 C.F.R. § 208.18",
   "Counts only as prolonged mental harm caused by threatened or inflicted severe physical pain, mind-altering substances or procedures, the threat of imminent death, or the threat that another person will suffer any of these.",
   7
  ]
 ],
 "quiz": [
  {
   "q": "A state refuses to give a recognized refugee permanent legal status. It lets her stay temporarily and does not send her back to the country where her life would be threatened. Under the principles in Chapter 1, has the state broken an international rule?",
   "o": [
    "Yes: every refugee has an individual right to receive asylum, and the state denied it",
    "Yes: refusing status is itself a form of refoulement under Article 33",
    "No: asylum is discretionary, and the state met the firm duty, which is non-refoulement",
    "No, but only because the state has one year to offer a durable solution"
   ],
   "a": 2,
   "why": [
    "Goodwin-Gill separates a state's sovereign right to grant asylum from an individual right to receive it, and no universal treaty recognizes the individual right. A refugee has a right to seek asylum; no state must grant it.",
    "Article 33 forbids expelling or returning a refugee to territories where life or freedom would be threatened. It prohibits return; it does not require admission or a grant of status, so refusing status without returning her is not refoulement.",
    "Correct. Asylum is the provision of formal legal status, and contemporary asylum is discretionary. Non-refoulement is the absolute obligation not to return a refugee to a place where life or freedom would be threatened. The state kept her safe from return, so it met the firm duty.",
    "No source sets a time limit for offering a durable solution. Durable solutions are UNHCR goals that depend on state political will and resources; they are not a deadline that decides whether a rule was broken."
   ],
   "e": "The Chapter 1 materials call asylum and non-refoulement the two most fundamental principles of refugee law, and they are different kinds of rules. Asylum is formal legal status that a state may give at its discretion. Non-refoulement is an absolute duty not to return a refugee to a place where life or freedom would be threatened. The state here declined to give status but did not return her, so it complied: protection from return does not equal a right to remain.",
   "unit": 0
  },
  {
   "q": "Which conception of the refugee, in Hathaway's three-stage account, crystallized in Article 1 of the 1951 Convention and later shaped U.S. law?",
   "o": [
    "The juridical perspective: a person lacking formal legal protection from any government",
    "The social perspective: a member of a large group harmed by a particular social or political event",
    "The individualist perspective: status determined case by case on an individualized fear of persecution",
    "The accountability perspective: harm counts only if the state is responsible for it"
   ],
   "a": 2,
   "why": [
    "The juridical perspective governed in the 1920s (Nansen's tenure). It defined refugees by ethnic or territorial origin plus the absence of de jure national protection, such as stateless people. It was the first stage, and later stages replaced it.",
    "The social perspective governed in the 1930s. Eligibility turned on belonging to an affected group, and members could still have legal protection but lack practical protection. The 1951 Convention moved away from group determination.",
    "Correct. The individualist perspective (1940s to present) asks whether the person has an individualized fear of persecution, focused on the conflict between the applicant's characteristics or convictions and the political system at home. It appears in the IRO definition and the UNHCR Statute and crystallized in Article 1.",
    "The accountability (complicity) approach is the EU's older theory about non-state agents of persecution, covered with the source of persecution. It is not one of Hathaway's three stages of the refugee definition."
   ],
   "e": "The casebook, drawing on James Hathaway, describes three conceptions of who is a refugee: juridical (1920s), social (1930s), and individualist (1940s to present). The individualist model, which Hathaway calls revolutionary in its rejection of group determination, became Article 1 of the 1951 Convention. That is why a U.S. applicant must prove a personal fear of persecution. Professor Gilman's proposal for group status is described as a return toward the social conception.",
   "unit": 0
  },
  {
   "q": "According to the Chapter 1 materials, which durable solution does UNHCR treat as the preferred one?",
   "o": [
    "Local settlement in the host country",
    "Voluntary repatriation, if refugees can return in reasonable safety",
    "Third-country resettlement",
    "Naturalization under Article 34, which the Convention requires of every party"
   ],
   "a": 1,
   "why": [
    "Local settlement (local integration) is used when return is unlikely. It requires the host government's agreement and has become more restricted as numbers rise, so it is a fallback.",
    "Correct. Voluntary repatriation is the preferred solution. UNHCR does not actively promote return unless refugees can go back in reasonable safety, though it may assist spontaneous returns.",
    "Third-country resettlement is for refugees who can neither go home nor safely stay where they are. It is normally used only when no other option guarantees their legal or physical security.",
    "Article 34 only encourages naturalization: states 'shall as far as possible facilitate' it. It is not a mandatory duty and is not listed as one of the three durable solutions."
   ],
   "e": "UNHCR's statute gives it two functions: protect refugees and promote durable solutions, whose success depends on states' political will and money. The three durable solutions are voluntary repatriation (preferred), local settlement, and third-country resettlement. Repatriation is preferred, but UNHCR promotes it only when return can happen in reasonable safety.",
   "unit": 0
  },
  {
   "q": "A student must match each body of international law to its treaty. Which treaty belongs to international human rights law, the field that applies in war or peace?",
   "o": [
    "The 1951 Convention relating to the Status of Refugees",
    "The 1984 Convention Against Torture",
    "The 1949 Geneva Convention relative to the Protection of Civilian Persons in Time of War",
    "The 1967 Protocol relating to the Status of Refugees"
   ],
   "a": 1,
   "why": [
    "The 1951 Convention is the central treaty of international refugee law, which concerns state obligations to people forcibly displaced across borders.",
    "Correct. The slides list the 1984 Convention Against Torture (CAT) as the human rights treaty. Human rights law applies in war or peace and protects the dignity, integrity, equality, and liberty of all individuals. CAT later becomes a separate form of protection from removal in U.S. law.",
    "The 1949 Geneva Convention belongs to international humanitarian law (the law of armed conflict), which applies only during armed conflict.",
    "The 1967 Protocol is part of international refugee law. It removed the 1951 Convention's time and place limits."
   ],
   "e": "The casebook presents three overlapping bodies of law. Refugee law centers on the 1951 Convention and 1967 Protocol; humanitarian law on the 1949 Geneva Convention, which applies only in war; human rights law on instruments such as the 1984 CAT, which applies in war or peace. U.S. asylum law builds on all three traditions.",
   "unit": 0
  },
  {
   "q": "Which body was the first international agency to deal with every aspect of refugee problems, including registration, status determination, repatriation, resettlement, and legal and political protection?",
   "o": [
    "The International Refugee Organization (IRO, 1946)",
    "The League of Nations High Commissioner for Russian Refugees (Nansen, 1921)",
    "UNRRA, the United Nations Relief and Rehabilitation Administration (1943)",
    "UNHCR, the United Nations High Commissioner for Refugees (1951)"
   ],
   "a": 0,
   "why": [
    "Correct. The IRO, a UN specialized agency that operated from 1946 to 1951, was the first international agency to handle every aspect of refugee problems. Post-war politics shifted it from repatriation toward resettlement, and only 18 of 54 UN members funded it.",
    "Nansen's office defined refugees' legal status, organized repatriation or placement, and ran relief work for particular groups (Russians, then Armenians and others). It did not handle every aspect of refugee problems.",
    "UNRRA returned millions home after World War II. Its work was repatriation and relief, and many people refused to return to states under new political ideologies.",
    "UNHCR came after the IRO. Its statute made international protection the primary task and material assistance a narrower one, and it was created because states opposed continuing the IRO."
   ],
   "e": "The casebook divides 1921 to 1951 into three phases: early efforts (1921 to 1946, starting with Nansen), the IRO (1946), and UNHCR (1951). The IRO was the first agency to cover registration, status determination, repatriation, resettlement, and legal and political protection. Opposition to it led the General Assembly to create UNHCR as a subsidiary organ starting January 1, 1951.",
   "unit": 0
  },
  {
   "q": "The U.S. interdicts Haitians on the high seas and returns them to Haiti without screening. Under Sale v. Haitian Centers Council (1993):",
   "o": [
    "The returns violate Article 33 of the Refugee Convention",
    "The returns violate neither former INA § 243(h) nor Article 33, because neither applies to Coast Guard action on the high seas",
    "The returns violate the Charming Betsy canon",
    "The Coast Guard must conduct credible fear interviews at sea"
   ],
   "a": 1,
   "why": [
    "The Court read Article 33 as territorial: 'expel' covers someone inside the country and 'refouler' means turning back at the frontier. Because Article 33 says nothing about actions outside a state's territory, it does not prohibit them.",
    "Correct. The Court held 8-1 that neither § 243(h) nor Article 33 applies to Coast Guard action on the high seas. Section 243(h) constrained only the Attorney General, 'deport or return' are domestic terms, and the presumption against extraterritoriality applied; Article 33 was read as limited to a state's territory.",
    "Charming Betsy is a rule of construction: a statute should not be read to violate the law of nations if another construction remains. Blackmun invoked it in criticizing Sale, but the majority held the statute and treaty do not reach the high seas.",
    "Credible fear interviews belong to expedited removal under INA § 235, for people arriving in or present in the U.S. The Kennebunkport Order directed return with no screening at all, and Sale upheld those returns."
   ],
   "e": "In Sale, the Court held that neither former INA § 243(h) nor Article 33 applies to action taken by the Coast Guard on the high seas, so interdiction and return were lawful under U.S. law. The holding rested on where the statute and treaty apply, not on any finding that the Haitians were safe. Sale left open whether non-refoulement binds the U.S. as customary international law, and the IACHR (Inter-American Commission on Human Rights) later held Article 33 applies in international waters.",
   "unit": 1
  },
  {
   "q": "Congress passes a statute that conflicts with an earlier self-executing treaty, and no reading of the statute avoids the conflict. What is the result?",
   "o": [
    "The statute controls as domestic law, but the U.S. remains bound by the treaty internationally",
    "The treaty controls, because the Supremacy Clause ranks treaties above statutes",
    "The statute is void because it violates the law of nations",
    "Both are suspended until the Senate re-ratifies the treaty"
   ],
   "a": 0,
   "why": [
    "Correct. Under the last-in-time rule, a later federal statute that conflicts with a treaty supersedes it as domestic law. Restatement (Fourth) § 309(3) adds that a superseding statute does not relieve the U.S. of its international obligation: domestic nullification does not equal international discharge.",
    "Article VI makes treaties part of the supreme law of the land, which puts them on equal footing with federal statutes, not above them. When the two conflict, the later in time controls domestically.",
    "Courts try to avoid conflict by construing statutes consistently with treaties where fairly possible (Restatement (Fourth) § 309(1), the modern form of Charming Betsy). When no such reading exists, the later statute governs at home; it is not void.",
    "No source describes a suspension pending re-ratification. International law, not U.S. law, decides when a treaty obligation is validly suspended or ended (Restatement (Fourth) § 309 cmt. d)."
   ],
   "e": "Treaties and federal statutes have equal rank under Article VI. Courts first try to read the statute to avoid conflict where fairly possible. If they cannot, the last-in-time rule lets the later statute control domestically, but the U.S. stays bound to the other treaty parties. Both limiting principles (self-execution and last in time) apply to treaties, not to customary international law.",
   "unit": 1
  },
  {
   "q": "Before the 1980 Refugee Act, why did withholding of deportation under former INA § 243(h) fall short of Article 33 of the Convention?",
   "o": [
    "It applied only on the high seas",
    "It required a well-founded fear instead of a clear probability",
    "It was discretionary ('may … withhold') and covered only race, religion, and political opinion",
    "It was limited to people fleeing communism or the Middle East"
   ],
   "a": 2,
   "why": [
    "Nothing in the sources says § 243(h) applied on the high seas; Sale later held it did not. Its shortfalls were its discretionary form and its missing grounds.",
    "Pre-1980 courts required a 'clear probability' or 'likelihood' of persecution for § 243(h). The well-founded-fear standard came from the Convention's refugee definition and was not part of § 243(h).",
    "Correct. Section 243(h) let the Attorney General withhold deportation 'in his opinion,' making it discretionary, while Article 33 is mandatory. It also covered three grounds where the Protocol has five (nationality and particular social group were missing). The 1980 amendment fixed both.",
    "The ideological and geographic limits belonged to conditional entry (§ 203(a)(7)), which failed Article 1's neutral definition. That is a different pre-1980 tool."
   ],
   "e": "The casebook tests the Matter of Dunar claim that U.S. law already complied with the Protocol in 1968 by walking each pre-1980 tool against the article it fails. Section 243(h) failed Article 33 because it was discretionary and covered only three grounds. Conditional entry and parole failed Article 1 because of ideological and geographic limits. The 1980 Act made withholding mandatory and added nationality and particular social group.",
   "unit": 1
  },
  {
   "q": "In a defensive asylum hearing, the IJ (immigration judge) notes that the applicant's home government is a close U.S. ally and that the U.S. disagrees with the applicant's politics, and counts both against her well-founded fear. Under the ABC settlement:",
   "o": [
    "Proper, because foreign policy may play a role in all refugee decisions",
    "Proper only if the State Department Human Rights Report agrees",
    "Improper: foreign policy and U.S. agreement with the applicant's beliefs are not relevant to well-founded fear",
    "Improper only because the applicant is Salvadoran or Guatemalan"
   ],
   "a": 2,
   "why": [
    "Foreign policy may legally play a role in the overseas USRAP (U.S. Refugee Admissions Program) process, where the Executive selects regions and priorities. In-country adjudication of asylum and withholding is different.",
    "The slides ask whether the State Department report is consistent with the ABC rule; they do not make it a condition for considering foreign policy. Under ABC, U.S. relations with the applicant's government are not relevant at all.",
    "Correct. The ABC (American Baptist Churches v. Thornburgh) settlement stipulates that foreign policy and border enforcement considerations, U.S. support for the applicant's government, and whether the U.S. agrees with the applicant's beliefs are not relevant to well-founded fear.",
    "The fourth ABC proposition says the same standard applies to Salvadorans and Guatemalans as to all other nationalities. The rule against considering foreign policy is not limited to those nationalities."
   ],
   "e": "ABC was a nationwide class action alleging discrimination against Salvadoran and Guatemalan applicants, which INS settled by agreeing to readjudicate denied claims. Its four propositions bar considering foreign policy and border enforcement, U.S. relations with the applicant's government, and U.S. agreement with the applicant's beliefs, and require one standard for all nationalities. The rule to state: foreign policy is barred from in-country adjudication but allowed in USRAP selection.",
   "unit": 1
  },
  {
   "q": "Which USRAP priority category is the only one open to any nationality without regional restriction?",
   "o": [
    "P-1: individual referrals by UNHCR, a designated NGO, or a U.S. embassy",
    "P-2: groups of special humanitarian concern",
    "P-3: family members of U.S. citizens or others with specified status",
    "P-4: the Welcome Corps private sponsorship program"
   ],
   "a": 0,
   "why": [
    "Correct. P-1 covers individual referrals by UNHCR, a designated NGO (non-governmental organization), or U.S. embassy personnel for specified and compelling reasons, and it is the only priority open to any nationality.",
    "P-2 covers groups of special humanitarian concern, usually specified subgroups within particular nationalities (for example, certain Iraqis associated with the U.S.). It is defined by nationality.",
    "P-3 is family reunification for relatives of U.S. citizens or others with specified status. The sources do not describe it as open to any nationality.",
    "P-4, the Welcome Corps, is a public-private partnership with private sponsors, and it was suspended in February 2025."
   ],
   "e": "Under INA § 207, the President sets annual refugee numbers and regional allocations after consulting Congress. Priorities make a person eligible to be considered, but approval still requires an overseas interview with a USCIS Refugee Corps officer, and denial is not appealable. P-1 individual referrals are the only priority open to any nationality.",
   "unit": 1
  },
  {
   "q": "An arriving noncitizen in expedited removal receives a negative credible fear finding from an asylum officer. What review is available?",
   "o": [
    "An appeal to the BIA (Board of Immigration Appeals) within 30 days",
    "A petition for review in the circuit court",
    "No review of any kind",
    "De novo review by an IJ, as quickly as possible and no later than 7 days, with no further administrative or judicial review"
   ],
   "a": 3,
   "why": [
    "The statute bars any further administrative review after the IJ, so there is no BIA appeal of a negative credible fear finding.",
    "Judicial review is barred. Only people already granted asylum, admitted as refugees, or holding LPR (lawful permanent resident) status can challenge a wrongful expedited removal order in federal court.",
    "IJ review is available. The bar applies to review beyond the IJ.",
    "Correct. An IJ reviews a negative credible fear finding de novo, as quickly as possible and no later than 7 days after the determination. The statute bars further administrative (BIA) or judicial review, and a 2020 Supreme Court decision upheld those limits."
   ],
   "e": "Expedited removal, created by IIRIRA in 1996, lets officers order some people removed without a hearing. The only exit for an asylum seeker is to express fear and pass a credible fear interview. A negative finding gets de novo IJ review within 7 days, and nothing after that: no BIA appeal and no federal court review.",
   "unit": 1
  },
  {
   "q": "A hurricane hits a country on January 1, and the AG designates it for TPS (Temporary Protected Status) on January 15. A national of that country first arrives in the U.S. on January 20. Six months later the designation is extended. Is she eligible?",
   "o": [
    "No, because only nationals present in the U.S. on the designation date benefit, and an extension keeps the original date",
    "Yes, because the hurricane makes return unsafe for all nationals",
    "Yes, because the extension moves the designation date forward",
    "Yes, if she files within 180 days of arriving"
   ],
   "a": 0,
   "why": [
    "Correct. Only people already in the U.S. on the designation date benefit (the casebook's hurricane example uses January 15). An extension keeps the original date; only a redesignation moves it. She arrived after January 15, so she does not qualify.",
    "TPS protects nationals facing a threat from conflict, disaster, or extraordinary conditions, but only those already in the U.S. on the designation date. Unsafe conditions alone do not make a later arrival eligible.",
    "An extension keeps the original date. Only a redesignation moves it forward.",
    "No source sets a filing window that makes a post-designation arrival eligible. The 180-day figure belongs to asylum work authorization."
   ],
   "e": "TPS under INA § 244 lets the AG grant temporary, work-authorized status to nationals of a country facing armed conflict, an environmental disaster, or other extraordinary and temporary conditions. Eligibility turns on presence in the U.S. on the designation date. Designations last 6 to 18 months and may be extended without changing that date, and there is generally no judicial review of designation decisions.",
   "unit": 1
  },
  {
   "q": "Under INA § 101(a)(42)(A), which of the following is NOT an element of the refugee definition?",
   "o": [
    "Being outside the country of nationality (or last habitual residence, if stateless)",
    "Selection by the President within an annual regional allocation",
    "Being unable or unwilling to return to, or to avail oneself of the protection of, that country",
    "Persecution or a well-founded fear of persecution on account of one of five protected grounds"
   ],
   "a": 1,
   "why": [
    "This is an element. The applicant must have left the home country; part (B) is the narrow exception that lets the President designate certain in-country refugees.",
    "Correct. Presidential allocation belongs to USRAP under INA § 207, the overseas track. The definition itself has no regional or numerical limit, and in-country adjudication has no cap.",
    "This is an element. 'Unable' covers a person whose government cannot protect her; 'unwilling' covers a person who will not seek protection because of the fear.",
    "This is an element. Either past persecution or a well-founded fear of future persecution qualifies, and it must be on account of race, religion, nationality, membership in a particular social group, or political opinion."
   ],
   "e": "The 1980 Refugee Act wrote a definition into the INA that is virtually identical to the Convention's. A refugee is outside the home country, unable or unwilling to return or seek its protection, because of persecution or a well-founded fear of persecution on account of a protected ground. The definition is geographically and ideologically neutral. Selection and caps belong to USRAP; asylum and withholding have none.",
   "unit": 1
  },
  {
   "q": "An applicant proves a 30% chance of persecution on account of political opinion. She qualifies for:",
   "o": [
    "Asylum only, subject to discretion",
    "Asylum and withholding",
    "Withholding only",
    "Neither"
   ],
   "a": 0,
   "why": [
    "Correct. Under INS v. Cardoza-Fonseca, a well-founded fear can exist when the chance of persecution is well under 50%; the Court used a one-in-ten example. A 30% chance on account of political opinion makes her eligible for asylum, which remains a discretionary grant.",
    "Withholding requires a clear probability, meaning persecution is more likely than not (over 50%), under INS v. Stevic. A 30% chance falls short.",
    "Withholding has the higher standard. Here she meets asylum's well-founded-fear standard but not withholding's more-likely-than-not standard, so this reverses the result.",
    "She meets the asylum standard. Cardoza-Fonseca holds that an applicant need not prove persecution is more likely than not to have a well-founded fear."
   ],
   "e": "Asylum requires a well-founded fear, which the regulations call a reasonable possibility of persecution. Withholding requires a clear probability, more likely than not. Cardoza-Fonseca held these are different standards and that a fear can be well-founded below 50%. A 30% chance satisfies asylum eligibility but not withholding, and the asylum grant is still discretionary.",
   "unit": 2
  },
  {
   "q": "Which form of relief must be granted once the applicant proves eligibility and no bar applies?",
   "o": [
    "Asylum",
    "Humanitarian asylum",
    "Humanitarian parole",
    "Withholding of removal"
   ],
   "a": 3,
   "why": [
    "Asylum is discretionary: under INA § 208(b)(1) the government 'may grant' it to an eligible refugee, and Matter of Pula lets serious adverse factors justify denial.",
    "Humanitarian asylum is a discretionary grant of asylum after the government rebuts the past-persecution presumption (8 C.F.R. § 208.13(b)(1)(iii)). It is not mandatory.",
    "Humanitarian parole under INA § 212(d)(5) is temporary permission to enter given at the government's discretion. It is not a protection that must be granted on any showing.",
    "Correct. Since the 1980 amendment ('The Attorney General shall not deport or return'), withholding must be granted if the applicant shows a clear probability of persecution and no bar applies."
   ],
   "e": "Asylum and withholding trade off. Asylum has the easier standard and gives more (a path to permanent residence and citizenship, plus derivatives), but it is discretionary. Withholding has the harder standard and gives less (country-specific protection, no derivatives), but it is mandatory once proven. Cardoza-Fonseca relied on that difference to explain why the greater benefit has the easier standard.",
   "unit": 2
  },
  {
   "q": "An asylum applicant bought another person's passport to escape persecution and enter the U.S. How does that fraud affect discretion under Matter of Pula?",
   "o": [
    "It requires denial of asylum",
    "It is relevant but carries little weight and cannot overwhelm the analysis",
    "It is irrelevant because § 208(a)(1) allows applications 'irrespective of status'",
    "It converts the asylum claim into a withholding-only claim"
   ],
   "a": 1,
   "why": [
    "Pula withdrew from Matter of Salim, which treated circumventing orderly procedures as an extremely adverse factor that only the most unusual equities could overcome. Fraud cannot require denial in nearly every case.",
    "Correct. Under Pula, fraudulent entry is relevant but cannot overwhelm the analysis, and using false documents to escape persecution carries little adverse weight. Fraudulently obtaining a U.S. passport and assuming U.S. citizenship is much more serious.",
    "The Pula majority read 'irrespective of status' as protecting the right to apply. It did not read the phrase as removing discretion to weigh how the person entered; that was Heilman's separate view.",
    "Discretion affects whether asylum is granted; it does not change the claim into another form of relief. If asylum is denied in discretion, withholding may still be granted on its own standard."
   ],
   "e": "Pula sets the discretion framework: weigh the totality of the circumstances of flight, and remember that 'the danger of persecution should generally outweigh all but the most egregious of adverse factors.' Factors include available protection elsewhere, time and safety in transit countries, attempts to enter lawfully, family ties, the seriousness of any fraud, age, and health. Escape documents weigh little. In Pula itself, the BIA granted asylum despite a purchased travel document.",
   "unit": 2
  },
  {
   "q": "What did INS v. Stevic (1984) identify as the Second Circuit's mistaken premise?",
   "o": [
    "That withholding of deportation is discretionary",
    "That asylum requires a clear probability of persecution",
    "That a motion to reopen requires a prima facie showing",
    "That every person who qualifies as a refugee is also entitled to withholding of deportation"
   ],
   "a": 3,
   "why": [
    "After 1980, withholding was mandatory, and Stevic did not treat it as discretionary. The dispute was about the standard of proof.",
    "Stevic did not define the asylum standard. It accepted only that well-founded fear is more generous than clear probability, which left the question for Cardoza-Fonseca.",
    "The prima facie requirement for reopening is correct law (INA § 240(c)(7)). For withholding, Stevic required a prima facie showing of a clear probability; the Court did not call the requirement itself a mistake.",
    "Correct. Stevic held that the Second Circuit rested on 'the mistaken premise that every alien who qualifies as a refugee is also entitled to a withholding of deportation.' Withholding requires a clear probability of persecution (more likely than not), and refugee status alone is not enough."
   ],
   "e": "Stevic held that withholding requires a clear probability of persecution. The withholding provision never uses the term 'refugee' or cross-references § 101(a)(42)(A), it turns on 'would' rather than 'might,' and the 1980 change was a conforming amendment that kept the old standard. Its central holding, that a refugee can still be removed if she cannot show persecution is more likely than not, puts the U.S. at odds with UNHCR and nearly all other signatories.",
   "unit": 2
  },
  {
   "q": "Which of the following was NOT part of the Court's reasoning in INS v. Cardoza-Fonseca (1987)?",
   "o": [
    "'Fear' has a subjective component, while 'would be threatened' has none",
    "The same Congress used different words in § 208(a) and § 243(h), and different wording in one act is presumed intentional",
    "Congress rejected a Senate bill that would have limited asylum to people who met the withholding standard",
    "The Court deferred under Chevron to the BIA's view that the two standards are the same"
   ],
   "a": 3,
   "why": [
    "This was part of the plain-language reasoning: 'fear' turns partly on the applicant's state of mind, while 'would be threatened' requires objective proof.",
    "This was part of the structural reasoning, citing Russello v. United States.",
    "This was part of the legislative history: Congress rejected S. 643, along with relying on lenient practice under § 203(a)(7) and adding 'well-founded' to conform to the Protocol.",
    "Correct. The Court refused Chevron deference. Whether the two standards are the same is a pure question of statutory construction for the courts, the agency had changed positions several times, and Congress's intent was clear. Only application to particular facts was left to the agency."
   ],
   "e": "Cardoza-Fonseca held that asylum's well-founded fear is more generous than withholding's clear probability. It relied on plain language, statutory structure, and legislative history, and declined to defer to the BIA. It also explained that a lower standard for asylum is not anomalous because meeting § 208(a) only makes a person eligible for a discretionary grant, while meeting § 243(h) entitles the person to withholding. Chevron was later overruled in Loper Bright (2024).",
   "unit": 2
  },
  {
   "q": "An asylum applicant has no documents about his political activity, but his testimony is detailed, plausible, coherent, and credible. Under Matter of Mogharrabi and the later statute:",
   "o": [
    "He can establish the objective basis through testimony, though the IJ may require corroboration that he has or can reasonably obtain",
    "He fails, because the objective element requires documentary proof",
    "He succeeds automatically, because an IJ may never require corroboration of credible testimony",
    "He fails unless he suffered past physical harm"
   ],
   "a": 0,
   "why": [
    "Correct. Under Mogharrabi, credible and specific testimony can supply the objective basis for a well-founded fear. The REAL ID Act of 2005 lets the factfinder require corroboration of otherwise credible testimony, which must be provided unless the applicant does not have it and cannot reasonably obtain it (INA § 208(b)(1)(B)(ii)).",
    "Mogharrabi rejected this. 'Objective evidence' does not mean documents; credible, specific testimony can establish the objective facts, reflecting how hard it is for asylum seekers to gather evidence.",
    "The REAL ID Act limited Mogharrabi's rule by allowing the factfinder to require reasonably available corroboration even of credible testimony.",
    "Proof of past harm helps but is not required (Garcia-Ramos). Lim v. INS shows that a person who escaped harm can still reasonably fear future persecution."
   ],
   "e": "Mogharrabi adopted a subjective/objective test with a reasonable-person standard: whether a reasonable person in the applicant's circumstances would fear persecution on a protected ground. The objective basis can come from credible testimony without documents. The REAL ID Act adds that the IJ may require corroboration unless the applicant lacks it and cannot reasonably obtain it.",
   "unit": 2
  },
  {
   "q": "A former intelligence officer helped arrest a rebel leader. For six years he received death threats and others involved in the investigation were killed, but he was never harmed. Under Lim v. INS (9th Cir. 2000), which relief does he meet the standard for?",
   "o": [
    "Asylum, but not withholding",
    "Neither, because six years without harm shows his fear is unreasonable",
    "Both asylum and withholding",
    "Withholding, but not asylum"
   ],
   "a": 0,
   "why": [
    "Correct. In Lim, the applicant met the asylum standard but not withholding. The continuing threats and killings of others made his fear reasonable, but six years without harm meant he could not show persecution was more likely than not.",
    "Lim rejected this. Surviving unharmed lowered the probability of persecution without eliminating a reasonable fear, which the court illustrated with Russian roulette: a player reasonably fears death even though only one of six chambers is loaded.",
    "Withholding requires a clear probability (more likely than not). The court found the evidence did not reach that level.",
    "Withholding has the higher standard, so a person who fails asylum cannot meet withholding. Here the result is the reverse."
   ],
   "e": "Lim shows that the same facts can win asylum and lose withholding. A well-founded fear requires only a reasonable possibility of persecution, while withholding requires more likely than not. Threats plus the killing of similarly situated people supported a reasonable fear even though the applicant himself had escaped harm. Garcia-Ramos makes the same point: evidence that fails withholding can still establish well-founded fear if believed.",
   "unit": 2
  },
  {
   "q": "Rank the three screening thresholds from lowest to highest.",
   "o": [
    "Reasonable fear, credible fear, reasonable probability",
    "Credible fear, reasonable probability, reasonable fear",
    "Reasonable probability, reasonable fear, credible fear",
    "Credible fear, reasonable fear, reasonable probability"
   ],
   "a": 3,
   "why": [
    "Credible fear is the lowest screen: a significant possibility of establishing asylum eligibility. Reasonable fear (a reasonable possibility of persecution or torture) is higher.",
    "Reasonable probability (substantially more than a reasonable possibility, somewhat less than more likely than not) is the highest of the three. Reasonable fear sits below it.",
    "This reverses the order. Reasonable probability is the highest screen and credible fear is the lowest.",
    "Correct. Credible fear asks only for a significant possibility of meeting the already low asylum standard. Reasonable fear requires a reasonable possibility of persecution or torture, the same level as the asylum standard itself. Reasonable probability, added by the June 2024 Securing the Border rule, requires substantially more than a reasonable possibility."
   ],
   "e": "Screening standards decide whether a person in fast-track removal can apply for protection at all, and passing a screen only leads to further adjudication. Credible fear is used in expedited removal. Reasonable fear is used for reinstated and certain administrative removal orders and leads only to withholding and CAT. Reasonable probability was added for people limited to withholding and CAT under the June 2024 rule. The casebook notes all three are on hold after the January 2025 suspension of entries under INA § 212(f).",
   "unit": 2
  },
  {
   "q": "An IJ grants an Afghan applicant withholding of removal as to Afghanistan. DHS then seeks to remove him to Pakistan, which will accept him. Under Matter of Salim:",
   "o": [
    "Removal to Pakistan is barred, because withholding bars removal anywhere",
    "Removal to Pakistan is permitted only under a safe third country agreement",
    "Removal to Pakistan is permitted, because withholding only bars removal to the country where the threat exists",
    "Removal to Pakistan is permitted only after asylum is denied on the merits"
   ],
   "a": 2,
   "why": [
    "Withholding is country-specific. It protects against return to the country where life or freedom would be threatened and does not bar removal elsewhere.",
    "Salim did not rest on a safe third country agreement. The point is that withholding by its nature does not protect against removal to other countries.",
    "Correct. Withholding only bars removal to the country where the threat exists, so the person can be removed to a third country. In Salim, the Board granted withholding as to Afghanistan but ordered removal to Pakistan if Pakistan would accept him.",
    "The ability to remove to a third country comes from the nature of withholding itself, whether or not asylum was also sought or denied."
   ],
   "e": "Withholding under INA § 241(b)(3) is mandatory but narrow: it only prevents removal to the specific country of threat and gives no derivative protection. Asylum, by contrast, leads to permanent residence and protects a spouse and children. This gap is one reason 8 C.F.R. § 1208.16(e) asks for reconsideration when asylum is denied solely in discretion but withholding is granted.",
   "unit": 2
  },
  {
   "q": "The government persecuted the applicant in the past. On internal relocation:",
   "o": [
    "Relocation is presumed unreasonable, and DHS must rebut by a preponderance of the evidence",
    "The applicant must prove relocation is unreasonable",
    "Relocation is irrelevant once past persecution is shown",
    "The IJ must deny unless she tried relocating first"
   ],
   "a": 0,
   "why": [
    "Correct. If the persecutor is the government, there is a rebuttable presumption that persecution is countrywide and relocation unreasonable, because a government has nationwide reach. DHS (the Department of Homeland Security) must rebut it by a preponderance of the evidence.",
    "When the persecutor is the government, the burden is not on the applicant. The regulations presume persecution is countrywide and relocation unreasonable.",
    "Relocation is one of the two ways DHS can rebut the past-persecution presumption, so it stays relevant. The government-persecutor rule only shifts who must prove it.",
    "UNHCR guidance says asylum is not a last resort, and a person need not try every refuge in her own country first. The regulations ask whether relocation would avoid persecution and be reasonable; they do not require a prior attempt."
   ],
   "e": "Internal relocation defeats a claim only if moving would avoid the persecution and it would be reasonable to expect the applicant to move (8 C.F.R. §§ 1208.13(b)(3), 1208.16(b)(3)). Reasonableness considers factors such as age, health, gender, family ties, civil strife, infrastructure, and cultural constraints. When the government is the persecutor, relocation is presumed unreasonable and DHS must rebut by a preponderance.",
   "unit": 3
  },
  {
   "q": "DHS rebuts the presumption of future persecution by showing a fundamental change in circumstances. The applicant suffered atrocious past persecution. What is her best remaining path?",
   "o": [
    "Withholding of removal",
    "Humanitarian asylum based on the severity of the past persecution (Matter of Chen)",
    "CAT only",
    "None; the claim is over"
   ],
   "a": 1,
   "why": [
    "Withholding has no humanitarian version. Once DHS rebuts the presumption, the withholding claim fails.",
    "Correct. After rebuttal, asylum can still be granted in discretion if the applicant has compelling reasons for being unwilling to return arising out of the severity of the past persecution (8 C.F.R. § 208.13(b)(1)(iii)(A)), the rule from Matter of Chen.",
    "CAT requires showing future torture is more likely than not. It does not rest on the severity of past persecution, and nothing here indicates future torture.",
    "Rebuttal ends withholding, but asylum survives through humanitarian asylum where the past persecution was severe or the applicant faces other serious harm."
   ],
   "e": "Past persecution creates a presumption of future persecution that DHS can rebut by a preponderance, through fundamental change or reasonable relocation. After rebuttal, asylum and withholding split. Humanitarian asylum remains available for compelling reasons arising from the severity of past persecution, or for a reasonable possibility of other serious harm. The concept traces to Convention Art. 1.C(6), written with Holocaust survivors in mind.",
   "unit": 3
  },
  {
   "q": "A Honduran transgender applicant shows that people similarly situated to her are systematically persecuted on account of a protected ground, and that she belongs to and identifies with that group. She has no evidence she personally was singled out. Under the regulations:",
   "o": [
    "She need not show she would be singled out individually",
    "She fails, because every applicant must show individual targeting",
    "She qualifies only in the Ninth Circuit under the disfavored-group approach",
    "She is automatically granted asylum without any discretionary analysis"
   ],
   "a": 0,
   "why": [
    "Correct. Under 8 C.F.R. §§ 1208.13(b)(2)(iii) and 1208.16(b)(2), if there is a pattern or practice of persecution of a group similarly situated to the applicant on a protected ground, and she establishes inclusion in and identification with that group, she need not show she would be singled out. The reading cites Aguilar (10th Cir. 2022), where a Honduran transgender applicant made this showing.",
    "Individual risk is the default rule, but pattern or practice is an exception for both asylum and withholding.",
    "The disfavored-group approach is a separate Ninth Circuit doctrine that lowers the individual showing for members of groups that face mistreatment short of a pattern or practice. Pattern or practice is in the regulations and applies everywhere.",
    "Pattern or practice establishes the well-founded fear (or threat to life or freedom). Asylum still remains discretionary."
   ],
   "e": "The regulations normally require individual risk. Pattern or practice replaces that showing entirely when the applicant proves (1) a pattern or practice of persecution of a similarly situated group on a protected ground and (2) her own inclusion in and identification with the group. The disfavored-group approach only lowers the individual showing, and only in the Ninth Circuit.",
   "unit": 3
  },
  {
   "q": "An applicant in the Eleventh Circuit belongs to an ethnic group that faces discrimination and mistreatment, but the mistreatment does not amount to a pattern or practice of persecution. She argues for a reduced showing of individual risk under the disfavored-group approach. Likely result?",
   "o": [
    "Accepted, because every circuit follows the disfavored-group approach",
    "Accepted, because the approach is codified in the regulations",
    "Rejected, because group membership is never relevant to well-founded fear",
    "Rejected, because the Eleventh Circuit has rejected the approach as a departure from the statute's plain language"
   ],
   "a": 3,
   "why": [
    "The disfavored-group approach is a Ninth Circuit doctrine (Sael v. Ashcroft; Hoxha v. Ashcroft). Most other circuits have rejected it or not addressed it.",
    "The regulations codify pattern or practice. The disfavored-group approach is circuit case law built on top of it.",
    "Group membership matters a great deal: pattern or practice rests on it, and Mogharrabi asks what happened to similarly situated people. The issue is only whether a lesser individual showing is allowed for a disfavored group.",
    "Correct. The First, Third, and Eleventh Circuits rejected the approach, and the Eleventh called it a departure from the statute's plain language. Outside the Ninth Circuit, she needs either a pattern or practice or an individualized showing."
   ],
   "e": "The Ninth Circuit's disfavored-group approach lets a member of a group facing discrimination and mistreatment meet the burden with a lesser showing of individual risk, even without a pattern or practice of persecution. The First, Third, and Eleventh Circuits rejected it. Older Fourth and Eighth Circuit cases give some support: the more egregious the group persecution, the less individualized evidence is needed.",
   "unit": 3
  },
  {
   "q": "A woman who suffered female genital cutting (FGC) because of a gender-defined social group seeks asylum. DHS argues the past-persecution presumption is rebutted because FGC can happen only once. After the Attorney General's 2008 decision in Matter of A-T-:",
   "o": [
    "DHS wins, because the feared future harm must be the same type as the past harm",
    "DHS wins, because FGC is not persecution",
    "DHS loses only if she shows she will suffer FGC again",
    "DHS loses: the presumption covers future persecution on the same protected ground, which need not be the same type of harm"
   ],
   "a": 3,
   "why": [
    "The BIA took this view in 2007, but Attorney General Mukasey vacated it. The presumption is tied to the protected ground, not to repeating the same harm.",
    "Nothing in the sources treats FGC as outside persecution; Kasinga treats FGM as persecution even when inflicted in the victim's supposed best interest.",
    "She does not have to show repetition of FGC. The presumption covers any persecution on the same ground.",
    "Correct. Mukasey vacated the BIA's A-T- decision in 2008: FGC can be repeated, and more basically, the feared future harm does not have to match the past harm. A woman who suffered FGC because of a gender-defined social group is presumed to face other persecution on account of that group."
   ],
   "e": "Under 8 C.F.R. § 1208.13(b)(1), past persecution on a protected ground creates a presumption of a well-founded fear of future persecution on that same ground. The presumption is about the ground, not the type of harm. DHS must rebut by a preponderance through fundamental change or reasonable relocation; arguing that the specific harm cannot recur is not enough.",
   "unit": 3
  },
  {
   "q": "An applicant suffered no past persecution. She argues she faces a reasonable possibility of 'other serious harm' if returned and asks for humanitarian asylum. Result?",
   "o": [
    "Granted, because other serious harm needs no nexus",
    "Granted, because other serious harm is a freestanding asylum claim",
    "Denied, because humanitarian asylum is available only for withholding",
    "Denied, because both humanitarian asylum routes require qualifying past persecution"
   ],
   "a": 3,
   "why": [
    "It is true that other serious harm does not need to be on account of a protected ground. But that route is available only to someone who first shows qualifying past persecution.",
    "The sources state that other serious harm is not a freestanding asylum claim.",
    "Humanitarian relief exists only for asylum. Withholding has no humanitarian version.",
    "Correct. Both humanitarian asylum routes (severity of past persecution and other serious harm) require qualifying past persecution. Other serious harm is not a freestanding claim, so a person with no past persecution cannot use it."
   ],
   "e": "Humanitarian asylum under 8 C.F.R. § 208.13(b)(1)(iii) applies after the government rebuts the past-persecution presumption. It covers compelling reasons arising from the severity of past persecution, or a reasonable possibility of other serious harm that equals the severity of persecution but needs no nexus (Kone v. Holder; Boer-Sedano v. Gonzales). Both routes start from past persecution.",
   "unit": 3
  },
  {
   "q": "Under the Fifth Circuit's approach, a due process claim in removal proceedings requires notice, a hearing, and a fair opportunity to be heard. What else must the noncitizen show?",
   "o": [
    "A Mathews v. Eldridge balancing in every case",
    "An initial showing of substantial prejudice",
    "Exhaustion before the Supreme Court",
    "Proof that the IJ acted in bad faith"
   ],
   "a": 1,
   "why": [
    "Mathews is the general due process test the casebook uses to evaluate procedures. The Fifth Circuit's stated test for removal proceedings adds substantial prejudice to the three procedural guarantees.",
    "Correct. The Fifth Circuit requires notice of the charges, a hearing before an executive or administrative tribunal, and a fair opportunity to be heard, plus an initial showing that the defect substantially prejudiced her case.",
    "Supreme Court review is by discretionary certiorari. It is not an exhaustion requirement for a due process claim.",
    "The test focuses on the procedural defect and its effect on the case. No source lists bad faith as an element."
   ],
   "e": "The outline states the Fifth Circuit test: notice of the charges, a hearing before an executive or administrative tribunal, and a fair opportunity to be heard, with an initial showing of substantial prejudice, in proceedings that meet standards of fundamental fairness. The prejudice requirement parallels interpretation claims (Perez-Lastor) and ineffective-assistance claims (Lozada), which also require showing the defect affected the result.",
   "unit": 4
  },
  {
   "q": "The BIA reviews an IJ's finding that the applicant was beaten twice. What standard applies?",
   "o": [
    "De novo",
    "Clear error",
    "Substantial evidence",
    "Arbitrary and capricious"
   ],
   "a": 1,
   "why": [
    "The BIA reviews questions of law, discretion, and judgment de novo. Since the 2002 streamlining reforms, it no longer reviews IJ fact-finding de novo.",
    "Correct. Whether the applicant was beaten twice is a finding of fact, and the BIA reviews IJ fact-finding for clear error: it defers unless the finding is clearly wrong.",
    "Substantial evidence is the standard circuit courts apply to the agency's factual findings on a petition for review.",
    "Arbitrary and capricious is the standard circuit courts apply to discretionary decisions."
   ],
   "e": "There are two layers of review. The BIA reviews IJ facts for clear error and law, discretion, and judgment de novo. Circuit courts review law de novo, facts for substantial evidence, and discretion as arbitrary and capricious. Streamlining in 2002 changed BIA factual review from de novo to clear error.",
   "unit": 4
  },
  {
   "q": "Which is NOT a requirement for a motion to reopen for ineffective assistance of counsel under Matter of Lozada?",
   "o": [
    "An affidavit describing the agreement with counsel",
    "Proof that prior counsel was notified of the allegations and given a chance to respond",
    "A bar complaint, or an explanation for why none was filed",
    "Proof that prior counsel was disbarred"
   ],
   "a": 3,
   "why": [
    "This is required. The affidavit pins down what the lawyer agreed to do and did not do.",
    "This is required. Notice gives former counsel a chance to respond and screens out collusive claims.",
    "This is required where counsel's conduct was an ethical or legal violation; if no complaint was filed, the respondent must explain why.",
    "Correct. Lozada requires the three procedural steps plus prejudice. It does not require that prior counsel have been disciplined or disbarred."
   ],
   "e": "Lozada lets a respondent reopen for ineffective assistance only if the proceeding was so fundamentally unfair that she was prevented from reasonably presenting her case. She must file an affidavit about the agreement, show counsel was notified and allowed to respond, and file a bar complaint or explain why not. She must also show prejudice: competent counsel would have acted differently and it affected the outcome. Matter of Compean (2009), which rejected any right to effective assistance, was vacated the same year.",
   "unit": 4
  },
  {
   "q": "A person whose prior removal order has been reinstated tells the officer she fears return. Which screen applies, and what relief can a positive screen lead to?",
   "o": [
    "Credible fear; asylum",
    "No screen; immediate removal",
    "Reasonable fear; withholding and CAT only",
    "Reasonable probability; asylum"
   ],
   "a": 2,
   "why": [
    "Credible fear is the screen for arriving applicants in expedited removal. People with reinstated orders get the higher reasonable fear screen, and asylum is unavailable to them.",
    "Fear screening applies. A person with a reinstated order who expresses fear gets a reasonable fear interview before removal.",
    "Correct. People with reinstated removal orders or certain administrative removal orders get a reasonable fear interview, which asks for a reasonable possibility of persecution or torture. A positive finding leads only to withholding and CAT proceedings; asylum is unavailable on this route.",
    "Reasonable probability was added by the June 2024 Securing the Border rule for people limited to withholding and CAT. It never leads to asylum."
   ],
   "e": "The screen depends on the route. Credible fear (a significant possibility of asylum eligibility) applies in expedited removal. Reasonable fear (a reasonable possibility of persecution or torture, a higher bar) applies to reinstatement and certain administrative removal, and leads only to withholding and CAT. Passing either screen only gets the person a fuller hearing.",
   "unit": 4
  },
  {
   "q": "When may an asylum applicant receive work authorization?",
   "o": [
    "After the application has been pending 180 days (she may file at 150 days)",
    "Immediately on filing",
    "After 365 days",
    "Only after a grant of asylum"
   ],
   "a": 0,
   "why": [
    "Correct. Under the 1995 rule, an applicant becomes eligible once the asylum application has been pending more than 180 days, and she may file at 150 days. Approval takes 4 to 6 weeks or longer.",
    "Before January 1995, applicants with non-frivolous claims could get work authorization. The 1995 rule replaced that with the 180-day wait, to stop baseless claims filed only for work permits.",
    "The June 2020 rules extended the wait to 365 days, but AsylumWorks v. Mayorkas (D.D.C. 2022) vacated them because acting Secretary Chad Wolf lacked authority to issue them.",
    "Work authorization is available while the claim is pending. A denial within the 180 days, however, generally forecloses it."
   ],
   "e": "The federal government gives asylum seekers no social benefits, so work authorization is the main lifeline. Since 1995 it waits until the application has been pending 180 days, with filing allowed at 150. In practice most applicants cannot work lawfully for 10 to 12 months. The 2020 rules that extended the wait to 365 days were vacated in 2022.",
   "unit": 4
  },
  {
   "q": "On a petition for review, the record would support either the IJ's finding that the applicant was not targeted or a finding that he was. What should the circuit court do with the factual finding?",
   "o": [
    "Reverse, because the evidence supports a different result",
    "Review it de novo, because asylum findings are mixed questions",
    "Uphold it, because findings stand unless any reasonable adjudicator would be compelled to conclude otherwise",
    "Remand automatically for the BIA to explain its reasoning"
   ],
   "a": 2,
   "why": [
    "Evidence that merely supports a different result is not enough to reverse under substantial-evidence review.",
    "Circuit courts review questions of law de novo. Findings of fact, such as whether he was targeted, get substantial-evidence review.",
    "Correct. Under the substantial-evidence standard, the agency's factual findings stand unless any reasonable adjudicator would be compelled to reach the opposite conclusion. A record that permits either result does not compel reversal.",
    "No source describes automatic remand when the record supports both outcomes. The question is whether the record compels the opposite result, and here it does not."
   ],
   "e": "Circuit courts review law de novo, facts for substantial evidence, and discretionary decisions as arbitrary and capricious. Substantial evidence is a deferential standard. The question is whether the record compels the opposite result; a record that only permits it is not enough. Nasrallah v. Barr confirms that factual challenges to CAT denials get this review even in criminal-removal cases.",
   "unit": 4
  },
  {
   "q": "An arriving noncitizen in expedited removal passes her credible fear interview and is placed in removal proceedings. She asks an IJ for a bond hearing. Under Matter of M-S- (A.G. 2019):",
   "o": [
    "The IJ must hold a bond hearing within 7 days, with DHS bearing the burden",
    "She is bond-eligible under INA § 236(a) if she is not a flight risk or danger",
    "She must be detained unless paroled; the IJ has no custody jurisdiction to set bond",
    "She must be released under the Flores settlement"
   ],
   "a": 2,
   "why": [
    "That was the Padilla v. ICE district court order, affirmed by the Ninth Circuit in 2020. The Supreme Court vacated and remanded in light of Thuraissigiam, so no such hearings occur meanwhile.",
    "Section 236(a) is the general bond rule, but ICE treats arriving aliens with positive credible fear findings as outside it, under INA § 235(b).",
    "Correct. M-S-, overruling Matter of X-K-, held that a person in expedited removal who establishes credible fear must be detained unless paroled. ICE treats arriving aliens as ineligible for bond and says IJs lack jurisdiction over their custody, so parole is the only route out.",
    "Flores governs the release of children. Nothing in the facts indicates she is a child."
   ],
   "e": "Release depends on the detention statute. Section 236(a) allows bond if the person is not a danger or flight risk, with the respondent bearing the burden and a $1,500 minimum. Section 236(c) mandates detention for criminal and terrorism grounds. Arriving aliens and people with positive credible fear findings in expedited removal get no bond after M-S-, and can leave only through parole under 8 C.F.R. § 212.5.",
   "unit": 4
  },
  {
   "q": "Which group has been held entitled to counsel at government expense in immigration proceedings?",
   "o": [
    "All indigent noncitizens in removal proceedings",
    "Unaccompanied children in adversarial immigration court",
    "Mentally incompetent detainees in the Franco-Gonzalez class",
    "Applicants at an affirmative asylum office interview"
   ],
   "a": 2,
   "why": [
    "The right to counsel exists only at no expense to the government (INA § 292), and no court has ordered funded counsel for indigent noncitizens generally.",
    "Children have no right to appointed counsel. J.E.F.M. v. Lynch sent such claims to individual petitions for review, and in C.J.L.G. the en banc Ninth Circuit declined to decide the question. It remains open.",
    "Correct. Franco-Gonzalez v. Holder (C.D. Cal. 2013) held mentally incompetent detainees are entitled to counsel at government expense. ICE and EOIR then adopted the National Qualified Representative Program; the class covers unrepresented, detained individuals in Arizona, California, and Washington.",
    "At the asylum office, counsel is allowed only at no government expense: the applicant may bring a lawyer, but the government will not supply one."
   ],
   "e": "There is a right to counsel in removal proceedings only at no expense to the government. Representation is the most important factor in outcomes (for example, represented detainees won relief 49% of the time versus 23%). The exception is mentally incompetent detainees under Franco-Gonzalez. Whether due process requires appointed counsel for unaccompanied children remains open.",
   "unit": 4
  },
  {
   "q": "A Sri Lankan asylum seeker is caught 25 yards inside the southern border, receives a negative credible fear finding affirmed by an IJ, and files a habeas petition claiming the process was unfair. Under DHS v. Thuraissigiam (2020):",
   "o": [
    "He is entitled to full Fifth Amendment due process because he is physically inside the U.S.",
    "He has only the admission-related procedural rights Congress supplied, and the habeas limits do not violate the Suspension Clause",
    "He is entitled to a new credible fear interview with counsel",
    "His case must be heard in regular removal proceedings under INA § 240"
   ],
   "a": 1,
   "why": [
    "The Court held that being physically just inside the border does not require more constitutional process. That was the dissent's view (Sotomayor and Kagan).",
    "Correct. The Court held that a noncitizen in his position has only the procedural rights Congress supplied, and that habeas secures release from unlawful custody, not admission or further asylum proceedings, so the statutory limits did not suspend the writ. Breyer and Ginsburg concurred only on the narrow facts of someone caught right at the border.",
    "The Court did not order any new interview. Statutory habeas covers only alienage, whether an expedited removal order exists, and whether the person is outside expedited removal.",
    "Passing to § 240 proceedings requires a positive credible fear finding. His finding was negative, and the Court rejected his challenge."
   ],
   "e": "Thuraissigiam limits due process for someone caught immediately at the border with no prior lawful admission to what Congress provides. The live question is how far it reaches. The Sandra hypothetical tests that: list facts matching Thuraissigiam (caught at the border, no lawful admission) and facts that differ (years of prior residence, ties, a pending application), then apply the Breyer/Ginsburg concurrence's narrower line.",
   "unit": 4
  },
  {
   "q": "An IJ ridicules a traumatized applicant, calls her crying 'histrionics,' and then makes an adverse credibility finding. On review, what is the remedy under Fiadjoe v. Attorney General (3d Cir. 2005)?",
   "o": [
    "Remand for a new hearing before a different IJ",
    "Affirm, because credibility findings receive deference",
    "Grant asylum outright",
    "Refer the IJ for discipline under the Model Code, which is binding on IJs"
   ],
   "a": 0,
   "why": [
    "Correct. In Fiadjoe, IJ Ferlise ridiculed a Ghanaian woman with PTSD (post-traumatic stress disorder) who had been held as a slave. The Third Circuit held the credibility finding could not survive and remanded to a different IJ.",
    "Fiadjoe held that no credibility finding from a hearing conducted that way can survive review, and the findings also lacked substantial evidence.",
    "Asylum is discretionary. A court that finds error remands; it does not grant asylum itself.",
    "The Model Code of Judicial Conduct is not binding on IJs, which the casebook lists as a cause of near impunity. The judicial remedy in Fiadjoe was a new hearing before a different IJ."
   ],
   "e": "The data show that the assigned judge often matters more than the merits (Refugee Roulette; TRAC). The legal tools for policing judges are the non-binding Model Code and appellate review. Where a hearing is abusive, Fiadjoe's remedy is a new hearing before a different IJ. Reform proposals center on an independent Article I immigration court.",
   "unit": 4
  },
  {
   "q": "A noncitizen who is not in removal proceedings and has no lawful status files affirmatively for asylum. The asylum officer does not grant it. What happens next?",
   "o": [
    "The application is denied and she must leave within 30 days",
    "The case is referred to immigration court, where she can seek protection defensively",
    "She appeals directly to the BIA",
    "She keeps her status until it expires"
   ],
   "a": 1,
   "why": [
    "A straight denial is the usual result for an applicant who has lawful status. An applicant without status is referred to immigration court.",
    "Correct. When an affirmative applicant without lawful status is not granted asylum, the case is referred to immigration court, where she gets another chance to seek protection defensively before an IJ.",
    "Asylum officer decisions do not go to the BIA. The BIA hears appeals from IJ decisions.",
    "This describes an applicant with lawful status, such as a valid visa, who ordinarily receives a denial and keeps that status until it expires. She has no status."
   ],
   "e": "Affirmative applications go to a USCIS asylum officer in a nonadversarial interview, with counsel allowed at no government expense and the applicant generally supplying her own interpreter. The officer grants, denies, or refers. For an applicant without status, referral moves the claim to immigration court for a fresh hearing, so it is not a final loss.",
   "unit": 4
  },
  {
   "q": "A student was fired from her university job because of her religion, but she has worked steadily as a translator ever since and has suffered no violence. Most likely:",
   "o": [
    "Economic persecution",
    "Persecution under UNHCR Handbook ¶ 51",
    "Not persecution: loss of one job, with steady other work and no significant violence, usually falls short",
    "Persecution, because the employer intended to punish her"
   ],
   "a": 2,
   "why": [
    "Economic persecution requires the deliberate imposition of severe economic disadvantage beyond what society as a whole faces. Losing one job while keeping steady other work does not reach that level.",
    "Paragraph 51 says a threat to life or freedom on a protected ground is always persecution. Losing one job with steady other work is not a threat to life or freedom.",
    "Correct. In Nagoulko v. INS (9th Cir. 2003), a Pentecostal teacher fired for her religion kept steady factory work for seven years and suffered no significant violence, and the court found no persecution. There is no bright line, but keeping steady other work usually falls short.",
    "Intent to punish is not an element of persecution under Pitcherskaia, and the employer's motive goes to nexus. The issue here is whether the harm is severe enough, and it is not."
   ],
   "e": "Economic harm can be persecution without physical injury and without total loss of livelihood (Kovac; T-Z-). It must still be a deliberate imposition of substantial economic disadvantage, above what society as a whole faces. Nagoulko (fired but steadily employed elsewhere) fell short, while Koval (barred from her field and any allied field and reduced to ticket-checking) was reversed in her favor. Under the Grahl-Madsen list, denial of all work suited to one's training can be persecution.",
   "unit": 5
  },
  {
   "q": "Relatives forced FGM (female genital mutilation) on a daughter 'to protect her future.' On whether the harm is persecution:",
   "o": [
    "It fails, because there was no intent to punish",
    "It depends only on nexus",
    "It fails unless a government official performed it",
    "It succeeds: intent to punish is not required, and harm inflicted in one's supposed best interest is still persecution"
   ],
   "a": 3,
   "why": [
    "Pitcherskaia v. INS rejected any punitive-intent requirement. The test is objective: whether a reasonable person would regard the harm as offensive.",
    "Nexus is a separate element. Whether the harm is persecution is decided objectively, and the persecutor's motive matters for nexus, not for the harm question.",
    "Persecution can come from private actors the government is unable or unwilling to control. Who inflicted the harm is a separate element from whether the harm is persecution.",
    "Correct. Under Pitcherskaia, intent to harm or punish is not an element of persecution, and 'persecution by any other name remains persecution.' In re Kasinga treats FGM as persecution even when inflicted in the victim's supposed best interest."
   ],
   "e": "Pitcherskaia holds that the test for persecution is objective, so a motive to cure or help does not change the character of the harm. The persecutor's motive matters only for nexus, which under Elias-Zacarias requires proof that the persecutor acted on a protected ground. Keep two questions separate: is the harm bad enough (objective), and why was it inflicted (nexus).",
   "unit": 5
  },
  {
   "q": "A woman reported an attack by a private gang. The police took a report but had not solved the crime a month later. Under Matter of A-B- (reinstated in 2025), this evidence shows:",
   "o": [
    "Not enough: an investigation that is slow or unsuccessful does not show the government condoned the acts or was completely helpless",
    "The government is unable to control the gang",
    "Per se state action",
    "That reporting was futile"
   ],
   "a": 0,
   "why": [
    "Correct. A-B- requires that the government condoned the private acts or was completely helpless to protect. A-B- II said the standard is not met where the government made efforts to punish or prevent the harm or was not always successful. Taking a report and investigating shows effort.",
    "Police inability to complete an investigation quickly (Matter of C-G-T-) or to solve a crime (Bertrand v. Garland) does not necessarily show the government is unable to control private actors.",
    "Private acts are persecution only if the government is unable or unwilling to control them, and here the government took action. Nothing about a police report makes the gang a state actor.",
    "She did report. Futility excuses a failure to report; it does not follow from a report the police took and investigated."
   ],
   "e": "Private harm counts as persecution only if the government is unable or unwilling to control the persecutor, and the applicant bears that burden. Matter of S-S-F-M- (2025) vacated A-B- III and returned to A-B- I and II: the government must have condoned the acts or been completely helpless. Efforts to investigate, light sentences, imperfect success, or local police apathy do not meet that test, and slow police work alone is not enough.",
   "unit": 5
  },
  {
   "q": "A citizen was prosecuted for theft and sentenced, under a fair process, to an ordinary prison term. Is that persecution?",
   "o": [
    "Yes, because any imprisonment is persecution",
    "Yes, if she disagrees with the law",
    "No: prosecution is not persecution absent excessive punishment, prosecution for a Convention reason, or an illegitimate process",
    "Only if she was tortured in prison"
   ],
   "a": 2,
   "why": [
    "The general rule is the opposite: prosecution and punishment are not persecution, and a refugee is a victim of injustice, 'not a fugitive from justice' (UNHCR Handbook ¶ 56).",
    "Disagreeing with a law does not make its enforcement persecution. The question is whether the law or its application violates human rights norms or targets a Convention ground (Handbook ¶¶ 57, 59).",
    "Correct. Theft is a common crime, the punishment was ordinary, and the process was fair. The three factors (nature of the offense, extent of the punishment, legitimacy of the process) all point to legitimate prosecution.",
    "Torture would raise a separate question, but nothing suggests it, and the question here is whether the prosecution itself is persecution."
   ],
   "e": "Prosecution becomes persecution in three situations, which the outline lists as factors: the offense is in substance a protected activity (for example, illegal religious instruction), the punishment is excessive, or the process is illegitimate because the law violates human rights or is applied in a discriminatory way. Bastanipour shows the line: a death sentence for drug trafficking was prosecution, but punishment for apostasy supported asylum.",
   "unit": 5
  },
  {
   "q": "In Kovac v. INS (9th Cir. 1969), secret police blocked a chef from chef jobs after he refused to inform on refugees, but he still found work as a ship's cook. What did the court hold?",
   "o": [
    "No persecution, because he still had some means of earning a living",
    "Economic harm can never be persecution without physical harm",
    "Only a confiscation of property can amount to economic persecution",
    "A probability of deliberate imposition of substantial economic disadvantage on a protected ground is sufficient; total loss of livelihood is not required"
   ],
   "a": 3,
   "why": [
    "This was the BIA's reasoning. The Ninth Circuit reversed, calling the all-means-of-livelihood requirement \"clearly wrong.\"",
    "Congress deleted 'physical' from the withholding statute in 1965, and Kovac relied on that change. Nonphysical economic harm can be persecution.",
    "Confiscation is one example from T-Z-, alongside onerous fines and sweeping limits on working in an established profession. It is not the only form.",
    "Correct. Kovac held that 'a probability of deliberate imposition of substantial economic disadvantage' for a protected reason is sufficient. It is cited today for two principles: harm need not be physical, and deprivation of economic opportunity can become persecution without total loss of livelihood."
   ],
   "e": "Early law read 'physical persecution' to mean economic harm counted only if it denied all employment. After Congress deleted 'physical' in 1965, Kovac rejected the all-livelihood requirement, and In re T-Z- (BIA 2007) adopted the Kovac standard. The harm must exceed what society as a whole faces; general poverty or trouble finding work in one's field is not enough.",
   "unit": 5
  },
  {
   "q": "An applicant in the Fifth Circuit seeks humanitarian asylum under Matter of Chen. Her father was executed and her husband shot, but she was not physically harmed herself. How will the Fifth Circuit likely treat the harm to her family?",
   "o": [
    "As harm she did not personally suffer, under Shehu v. Gonzales",
    "As harm she personally suffered, as the BIA did in Chen",
    "As automatically establishing severe past persecution",
    "As irrelevant because humanitarian asylum is unavailable in the Fifth Circuit"
   ],
   "a": 0,
   "why": [
    "Correct. In Shehu v. Gonzales (5th Cir. 2006), an ethnic Albanian whose father was executed and husband shot was denied; harm to her father and husband was not 'personally suffered.' The Fifth Circuit also treats Chen as a baseline requiring extremely high harm.",
    "The BIA in Chen counted the family's suffering, but the Fifth Circuit has not followed that approach.",
    "Severity is not automatic. Courts of appeals have required extremely high harm, which the casebook authors call a misapplication of Chen.",
    "Humanitarian asylum exists in the regulation (8 C.F.R. § 208.13(b)(1)(iii)(A)) and applies everywhere. The Fifth Circuit only reads the severity requirement strictly."
   ],
   "e": "Chen allows asylum on past persecution alone where it was so severe that return should not be required, even after changed conditions rebut future fear. Chen did not define 'severe,' counted family harm, and did not require physical harm. Lal v. INS asks whether the harm is roughly comparable to Chen without a mechanical minimum. The Fifth Circuit is stricter: family harm is not personally suffered, and Chen is a high baseline. The authors advise arguing severe past persecution anyway, with medical and psychological evaluations.",
   "unit": 5
  },
  {
   "q": "Under Korablina v. INS (9th Cir. 1998), what two factors determine whether discrimination rises to persecution?",
   "o": [
    "The persecutor's intent to punish and the presence of physical injury",
    "The cumulative nature of the violence and harassment, and the societal context of widespread harassment and violence",
    "Whether the discrimination is de jure and whether the applicant reported it",
    "Whether a single incident required medical care and whether the government took part"
   ],
   "a": 1,
   "why": [
    "Punitive intent is not an element of persecution (Pitcherskaia), and physical harm is not required.",
    "Correct. The slides draw these two factors from Korablina: the cumulative nature of the violence and harassment, and the societal context of widespread harassment and violence. A single isolated incident may not be persecution; the cumulative effect of several may be.",
    "De facto discrimination can qualify along with de jure discrimination, and reporting is part of the unable-or-unwilling analysis, not the discrimination test.",
    "The analysis is cumulative, so it does not turn on any single incident. The comparison cases suggest medical care may help explain outcomes, but it is not one of the two factors."
   ],
   "e": "Discrimination is persecution when its consequences are substantially prejudicial, such as serious limits on earning a living, practising religion, or getting an education (UNHCR Handbook ¶ 54), and lesser measures can add up (¶¶ 53, 55). Korablina, a Jewish woman in Ukraine who faced job discrimination, death threats, and a noose attack, won because the record compelled findings of persecution viewed cumulatively in context. Harassment and denigration alone are not enough (Eduard v. Ashcroft).",
   "unit": 5
  },
  {
   "q": "A government strips an applicant of her citizenship because of her ethnicity. Under the case law in this unit:",
   "o": [
    "Not persecution, because statelessness alone does not warrant asylum (Faddoul)",
    "Not persecution unless she was also physically harmed",
    "Persecution: divesting citizenship for a protected reason is persecution and creates a presumption of a well-founded fear (Haile)",
    "Persecution only if every member of her ethnic group lost citizenship"
   ],
   "a": 2,
   "why": [
    "Faddoul involved denial of citizenship under laws that applied to all non-Saudis, with no physical harm. Haile draws a 'fundamental distinction' between denying citizenship and divesting it.",
    "Physical harm is not required. Ouda v. INS found past persecution for a stateless Palestinian who was not personally harmed.",
    "Correct. Haile v. Gonzales/Holder (7th Cir.) held that stripping citizenship because of religion or ethnicity is persecution and creates a presumption of a well-founded fear.",
    "No source requires that the whole group lose citizenship. The question is whether she was divested for a protected reason."
   ],
   "e": "Statelessness alone is not persecution (Faddoul v. INS), especially where limits apply to everyone in the same position. Divesting someone of citizenship for a protected reason is different, and Haile treats it as persecution that raises a presumption of future fear.",
   "unit": 5
  },
  {
   "q": "An applicant never reported a private attacker to the police. In the Fifth Circuit, she testifies only that she believed reporting would be pointless. How does that bear on whether the government was unable or unwilling to protect her?",
   "o": [
    "Failure to report is always fatal",
    "Failure to report is irrelevant because the government bears the burden",
    "Her belief alone proves futility",
    "Failure to report is not necessarily fatal if reporting would have been futile or dangerous, but her subjective belief alone does not meet her burden"
   ],
   "a": 3,
   "why": [
    "Reporting is not required where it would have been futile or would have led to further abuse (Matter of C-G-T-).",
    "The applicant carries the burden of proving the government is unable or unwilling to protect her.",
    "Sanchez-Amador holds that a subjective belief in futility does not by itself meet the burden.",
    "Correct. Under Matter of C-G-T- (BIA 2023), failure to report is not necessarily fatal if reporting would have been futile or dangerous. Under Sanchez-Amador v. Garland (5th Cir. 2022), a subjective belief that reporting would be futile does not by itself meet the burden; she needs objective evidence."
   ],
   "e": "The applicant must prove the government is unable or unwilling to control a private persecutor. Evidence includes seeking protection and being rebuffed, or documentary evidence of state discrimination (Pavlova). Failure to report can be excused by futility or danger, but the Fifth Circuit requires more than a subjective belief.",
   "unit": 5
  },
  {
   "q": "In Bastanipour v. INS (7th Cir. 1992), an Iranian faced the death penalty both for drug trafficking and for converting from Islam. How did the court treat the two?",
   "o": [
    "Both were persecution because the punishment was death",
    "Drug-trafficking prosecution was not persecution even with a death sentence, but punishment for religious conversion was a basis for asylum",
    "Neither was persecution because both were prosecutions under national law",
    "Only the drug charge mattered because it was the more serious offense"
   ],
   "a": 1,
   "why": [
    "Severity of punishment alone did not turn the drug prosecution into persecution. Drug trafficking is a common crime.",
    "Correct. Drug trafficking is a common crime, so prosecuting it was not persecution even when the punishment is death. Punishment for apostasy is prosecution for a Convention reason (religion), which supported asylum.",
    "A prosecution can be persecution when the 'crime' is a protected activity, such as religious conversion (UNHCR Handbook ¶ 57). National law is one yardstick, along with international human rights instruments (¶ 60).",
    "A person can fear both prosecution and persecution and still be a refugee (¶ 58). The apostasy charge supported asylum regardless of the drug charge."
   ],
   "e": "The nature of the offense is the first factor in separating prosecution from persecution. Prosecution for a common crime is legitimate even if harsh; prosecution for a Convention reason can be persecution. Bastanipour applies both halves to one person.",
   "unit": 5
  },
  {
   "q": "Armed guerrillas try to recruit a young man. He refuses because he fears the government would retaliate against him and his family if he joined. He seeks asylum based on political opinion. Under INS v. Elias-Zacarias (1992):",
   "o": [
    "He wins, because resisting recruitment expresses a political opinion and the guerrillas' motive is political",
    "He wins, because the guerrillas' political goals supply the nexus",
    "He loses, because forced recruitment is never harm",
    "He loses, because he gave no evidence the guerrillas would harm him because of his own political opinion"
   ],
   "a": 3,
   "why": [
    "That was the Ninth Circuit's two-part rationale. The Supreme Court said the first half 'seems to us untrue, and the second half irrelevant.'",
    "The Court held the persecutor's own political goals are irrelevant; wanting to fill their ranks to fight the government 'goes far to refute' nexus.",
    "The Court did not decide the case on whether forced recruitment is harm. It decided that the feared harm was not on account of his political opinion.",
    "Correct. Persecution on account of political opinion means the victim's opinion. Resisting recruitment is not necessarily political, and here he refused out of fear of government retaliation. Because the statute makes motive critical, he must give some evidence, direct or circumstantial, that the guerrillas would persecute him for his opinion, and he did not."
   ],
   "e": "Zacarias made the persecutor's motive the center of U.S. nexus law. The applicant must show the persecutor will harm him because of his own actual or imputed political opinion; neutrality is not ordinarily a political opinion. Direct proof is not required; there must still be some evidence of motive, and to reverse the BIA the evidence must compel the finding. Justice Stevens' dissent argued refusal to join can itself express a political opinion.",
   "unit": 6
  },
  {
   "q": "An army captures a man in a raid on a rebel camp. Interrogators brutalize him to extract information about the rebels and also accuse him of being a rebel. The IJ finds no nexus because the army's purpose was to gather intelligence. Under Matter of S-P- and the REAL ID Act:",
   "o": [
    "Error: nexus can be met if imputed political opinion is at least one central reason, even alongside an intelligence motive",
    "Correct, because nexus requires that the protected ground be the persecutor's only motive",
    "Correct, because imputed political opinion never counts",
    "Error, because any harm during a civil conflict satisfies nexus"
   ],
   "a": 0,
   "why": [
    "Correct. Matter of S-P- (BIA 1996) accepted mixed motives on similar facts: nexus is established if at least one of the persecutor's motives is a protected ground. The REAL ID Act codified this for asylum but requires the ground to be 'at least one central reason.' Accusations that he was a rebel support imputed political opinion as a central reason.",
    "Osorio v. INS, quoted in S-P-, holds that 'on account of' does not mean 'solely' on account of. Persecutors can have mixed motives.",
    "Political opinion can be actual or imputed; S-P- itself turned on imputed political opinion.",
    "Campos-Guardado states the opposite principle: Congress did not intend asylum for everyone harmed in civil disturbances."
   ],
   "e": "After Zacarias, courts recognized that persecutors can have more than one motive (S-P-; Osorio; Lukwago). Failing to evaluate dual motives is error (Mohideen; Menghesha). The REAL ID Act of 2005 requires that the protected ground be at least one central reason. When a persecutor has an obvious non-protected motive, look for a second, protected motive.",
   "unit": 6
  },
  {
   "q": "An IJ denies asylum because, although the applicant's religion was one reason the gang targeted him, it was not the main reason. Is that a correct application of 'at least one central reason'?",
   "o": [
    "Yes, because 'central' means the dominant reason",
    "Yes, because the protected ground must be a strict but-for cause",
    "No: the ground need not be the main, only, or dominant reason; it only has to be more than incidental, tangential, or superficial",
    "No, because any reason, however minor, satisfies the REAL ID Act"
   ],
   "a": 2,
   "why": [
    "Courts agree that 'central' does not mean dominant. Ndayshimiye (3d Cir. 2009) held there is no required hierarchy of motivations.",
    "Courts have rejected a strict but-for requirement (Manzano v. Garland; Quituizaca v. Garland). A motive that alone would have been sufficient can be central even without strict but-for causation.",
    "Correct. The protected ground need not be the most important reason (Parussimova), the only, dominant, or primary reason (Lagos v. Barr), or proven dominant (Perez-Sanchez). It must be more than an incidental, tangential, or superficial reason. Requiring it to be the main reason is error.",
    "A ground that is only one of several minor reasons no longer suffices after the REAL ID Act. It must be more than incidental or tangential."
   ],
   "e": "The REAL ID Act requires the protected ground to be at least one central reason (8 U.S.C. § 1158(b)(1)(B)(i)). The BIA's old formulation, more than 'incidental, tangential, superficial, or subordinate,' was error only in including 'subordinate,' because that implied dominance. The ground also need not be the trigger for the attack if it is why the person was targeted in the first place (Rivera v. Garland).",
   "unit": 6
  },
  {
   "q": "An applicant in the Fifth Circuit seeks withholding of removal and argues that withholding requires only that a protected ground be 'a reason' for the persecution. Likely result?",
   "o": [
    "Accepted, following Barajas-Romero v. Lynch",
    "Accepted, because the REAL ID Act amended the withholding statute to say 'a reason'",
    "Rejected, because withholding requires the protected ground to be the sole reason",
    "Rejected: the Fifth Circuit applies the same 'one central reason' standard to withholding (Vazquez-Guerra v. Garland)"
   ],
   "a": 3,
   "why": [
    "Barajas-Romero (9th Cir. 2017) adopted the 'a reason' standard for withholding, and the Sixth Circuit followed it. The Fifth Circuit did not.",
    "Congress added 'one central reason' to the asylum statute only. The 'a reason' argument rests on Congress not changing the withholding text.",
    "No source requires the sole reason for withholding. The Fifth Circuit applies 'one central reason,' which allows mixed motives.",
    "Correct. In Vazquez-Guerra v. Garland (2021), the Fifth Circuit rejected the argument that withholding has a less demanding nexus standard. The BIA (Matter of C-T-L-) and most circuits apply 'one central reason' to withholding."
   ],
   "e": "The REAL ID Act's 'at least one central reason' language appears in the asylum statute. The circuits split on withholding: the Ninth (Barajas-Romero) and Sixth (Guzman-Vazquez) Circuits require only 'a reason,' while the BIA and the First, Second, Third, Fourth, Fifth, Seventh, Eighth, and Eleventh Circuits apply 'one central reason.' In the Fifth Circuit, the same standard governs both.",
   "unit": 6
  },
  {
   "q": "A cartel forces a family off its land and kills the grandson. The family claims persecution on account of membership in the family as a particular social group. DHS cites Matter of M-R-M-S- (BIA 2023), arguing there is no nexus because the cartel had no ill will toward the family and only wanted the land. Best response?",
   "o": [
    "Concede, because nexus requires animus toward the group",
    "Argue that most precedent rejects an animus requirement: if the family tie is at least one central reason for choosing the victims, nexus is met even if targeting them was a means to an end",
    "Argue that motive is irrelevant under U.S. law after Zacarias",
    "Argue that family can never be a particular social group"
   ],
   "a": 1,
   "why": [
    "M-R-M-S- is widely criticized and on appeal, and the BIA and federal courts have largely rejected an animus requirement.",
    "Correct. Precedent rejects any animus or punitive-intent requirement: Kasinga found nexus in an FGC case without ill will, and Pitcherskaia found persecution where authorities wanted to 'cure' the victim. Mazariegos-Rodas v. Garland (6th Cir. 2024) criticized and rejected M-R-M-S-. Nexus asks why the person was targeted.",
    "Zacarias made motive critical. The argument is about what kind of motive is required, not whether motive matters.",
    "The family is the social group asserted here, and this response would abandon the claim. Family-based PSG claims are covered further in Chapter 9."
   ],
   "e": "The animus question is whether the persecutor must hold ill will toward the victim or group, or only choose the victim because of a protected ground. The majority view is that if a protected ground is at least one central reason for selecting the victim, nexus is met, even if the persecutor's ultimate goal was something else like land or money. M-R-M-S- took the contrary view and is widely criticized.",
   "unit": 6
  },
  {
   "q": "In Campos-Guardado v. INS (5th Cir. 1987), a woman was raped and forced to watch her uncle, a land-reform cooperative leader, be killed while attackers shouted political slogans. Why did her claim fail?",
   "o": [
    "The harm was not severe enough to be persecution",
    "Her account was found not credible",
    "No evidence showed the attackers harmed her because of her own actual or imputed political opinion",
    "She failed to show a clear probability of harm"
   ],
   "a": 2,
   "why": [
    "The severity of the harm was not the problem. The notes say she likely could have shown past persecution and a well-founded fear.",
    "Credibility was not the issue: the BIA assumed her account was true and denied on nexus.",
    "Correct. The BIA assumed the attack resulted from the uncle's political views but found she had not shown the attackers harmed her to overcome any opinion she held or was believed to hold. Her cousin-assailant's threats were personal. The Fifth Circuit affirmed under substantial-evidence review.",
    "The BIA never reached likelihood. It denied because the harm she feared, 'no matter how likely,' was not on account of a protected ground."
   ],
   "e": "Campos-Guardado shows that a nexus failure defeats a claim no matter how severe or likely the harm. The court also stated the civil strife limit: Congress did not intend asylum for everyone harmed in civil disturbances. The notes criticize the BIA's 'they could not have expected her there' reasoning, because persecutors can form conclusions about a victim's opinion during the attack.",
   "unit": 6
  },
  {
   "q": "Under the pre-Zacarias rebuttable presumption in Hernandez-Ortiz v. INS (9th Cir. 1985), what is presumed?",
   "o": [
    "That any harm in a civil war is on account of political opinion",
    "That when a government uses military force against people with no apparent criminal or other legitimate basis for its action, its actions are politically motivated",
    "That the applicant's testimony is credible",
    "That harm to family members is harm to the applicant"
   ],
   "a": 1,
   "why": [
    "The presumption is narrower. It applies to government force against individuals or groups with no legitimate basis for government action, not to all harm in a civil war.",
    "Correct. Hernandez-Ortiz held that when a government exerts military strength against an individual or group with no reason to believe they engaged in criminal activity or other conduct giving a legitimate basis for action, the most reasonable presumption is that the actions are politically motivated. The opposing party can rebut it.",
    "Credibility is a separate inquiry. The presumption concerns the government's motive.",
    "Hernandez-Ortiz did say threats or violence against family members can support a conclusion that the applicant is endangered, but that is a separate point from the presumption."
   ],
   "e": "Before Zacarias, the Ninth Circuit read 'on account of' broadly, looking at the persecutor's and victim's views and the relationship between them (Lazo-Majano; Hernandez-Ortiz). The Hernandez-Ortiz presumption helped applicants prove political motive. Eliminating it was one motivation for the REAL ID Act, whose sponsors said it improperly favored applicants accused of terrorist or guerrilla activity.",
   "unit": 6
  },
  {
   "q": "An applicant falls within a bar in INA § 241(b)(3)(B), so she cannot receive withholding of removal, but she proves it is more likely than not she will be tortured on return. What relief is available?",
   "o": [
    "CAT deferral of removal",
    "No protection, because the bar defeats every form of relief",
    "CAT withholding of removal",
    "Asylum, because CAT claims are decided under the asylum standard"
   ],
   "a": 0,
   "why": [
    "Correct. CAT deferral (8 C.F.R. § 208.17) is the lesser form of CAT relief for applicants who prove torture is more likely than not but fall within a § 241(b)(3)(B) bar. It is easily terminated and the person can remain detained, but it prevents return to torture.",
    "The § 241(b)(3)(B) bars defeat asylum, withholding, and CAT withholding, but not CAT deferral. CAT's ban on returning a person to torture is absolute.",
    "CAT withholding (8 C.F.R. § 208.16(c)) is available only to applicants who are not within the § 241(b)(3)(B) bars. Because she is barred, she is limited to deferral.",
    "Asylum requires a well-founded fear on account of a protected ground and is defeated by the bars. A CAT claim has its own standard, and success under it yields CAT withholding or deferral."
   ],
   "e": "CAT relief comes in two forms. CAT withholding goes to applicants who prove torture is more likely than not and are not barred; CAT deferral goes to those who prove the same likelihood but fall within a § 241(b)(3)(B) bar. The two forms exist because FARRA (the Foreign Affairs Reform and Restructuring Act of 1998) told agencies to exclude barred people as far as CAT allows, while CAT's ban on return is absolute. She is barred and proved the likelihood of torture, so she receives deferral.",
   "unit": 7
  },
  {
   "q": "Haiti's prisons lack food and medical care because of scarce resources. A criminal deportee seeks CAT relief based on those conditions. Most likely result?",
   "o": [
    "Granted, because the conditions are severe enough to be torture",
    "Granted, because the conditions discriminate against deportees",
    "Denied, because the applicant shows no nexus to a protected ground",
    "Denied, because there is no specific intent to inflict severe pain or suffering"
   ],
   "a": 3,
   "why": [
    "Severity alone is not enough. Torture also requires specific intent to cause severe pain or suffering, and courts treat conditions caused by scarce resources as lacking that intent.",
    "Discrimination is one of the listed purposes, but purpose is a separate element from specific intent. Conditions caused by scarce resources show no intent to inflict suffering on anyone.",
    "CAT requires no nexus to a protected ground. A missing nexus defeats asylum or withholding but is not a reason to deny CAT.",
    "Correct. Under Matter of J-E- (BIA 2002), adopted in Auguste v. Ridge (3d Cir. 2005) and Cherichel v. Holder (8th Cir. 2010), the applicant must show the authorities specifically intended to inflict severe pain or suffering. Conditions caused by limited resources show at most that harm was foreseeable, which does not meet the specific intent standard."
   ],
   "e": "Torture has three parts: severe pain or suffering, specific intent to cause it, and an impermissible purpose. In J-E-, the BIA held Haitian detention conditions were not imposed with specific intent to torture, and the circuits followed. The exception is an applicant who would be singled out for treatment beyond what detainees normally experience (Jean-Pierre; Eneh), and nothing here suggests that.",
   "unit": 7
  },
  {
   "q": "Cartel members torture people while local police know and do nothing. Under the Ninth Circuit's approach in Zheng v. Ashcroft (2003):",
   "o": [
    "There is no state action unless the government willfully accepted the torture",
    "Acquiescence can be shown because the government knew or should have known of the torture and failed to act",
    "CAT never covers torture by private actors",
    "Acquiescence exists only if the police were paid by the cartel"
   ],
   "a": 1,
   "why": [
    "Willful acceptance (actual knowledge plus a willful breach) is the BIA and Attorney General standard from Matter of S-V-. Zheng rejected it.",
    "Correct. Zheng held acquiescence does not require willful acceptance; it is shown where the government knew or should have known of the torture and failed to act (willful blindness). Police who know of cartel torture and do nothing meet that test.",
    "CAT covers torture by non-state actors such as gangs, guerrillas, or smugglers when a public official instigates, consents to, or acquiesces in it.",
    "Payment is not an element. Acquiescence turns on the government's knowledge and failure to act."
   ],
   "e": "CAT requires torture by, at the instigation of, or with the consent or acquiescence of a public official. The BIA and AG read acquiescence as willful acceptance. The Ninth Circuit in Zheng, followed by the 8th, 10th, 4th, and 3d Circuits among others, accepts willful blindness: the government knew or should have known and failed to act. Local police who know and do nothing meet the Zheng standard.",
   "unit": 7
  },
  {
   "q": "An IJ finds an applicant not credible and denies asylum, then denies CAT without looking at reports of widespread torture of his ethnic group. Under Kamalthas v. INS (9th Cir. 2001):",
   "o": [
    "Proper, because the credibility finding controls both claims",
    "Proper unless he showed nexus",
    "Error only if he was tortured before",
    "Error, because CAT is analytically separate and country conditions must be considered"
   ],
   "a": 3,
   "why": [
    "Kamalthas rejected this. 8 C.F.R. § 208.16(c)(3) requires considering all evidence relevant to future torture, including country conditions, apart from the asylum findings.",
    "CAT does not require nexus, so whether he proved nexus for asylum has no bearing on the CAT question.",
    "Past torture is one relevant consideration, not a prerequisite. Country conditions alone can play a decisive role.",
    "Correct. The BIA abuses its discretion when it conflates the asylum and CAT standards and ignores country conditions. Reports of widespread torture of the applicant's group can carry a CAT claim even when his own testimony was not credible."
   ],
   "e": "In Kamalthas, a Tamil man found not credible for asylum moved to reopen under CAT, and the BIA denied without considering documented torture of Tamil males. The Ninth Circuit vacated: CAT is broader than asylum (no nexus) and narrower (torture must be more likely than not), so it is not a subset of asylum. The limit is where both claims rest on the same factual predicate (Singh v. Lynch; Yang), and reports about his group are independent of his discredited story.",
   "unit": 7
  },
  {
   "q": "An applicant was tortured by police in the past. Does that past torture create a presumption that she will be tortured in the future?",
   "o": [
    "No: past torture is one relevant consideration, and the evidence must show she personally faces a likely risk",
    "Yes, the same presumption that applies to past persecution in asylum",
    "Yes, but DHS can rebut it by a preponderance",
    "No, and past torture is irrelevant to a CAT claim"
   ],
   "a": 0,
   "why": [
    "Correct. Past torture does not create a regulatory presumption of future torture (Dawson v. Garland, 9th Cir. 2021). It is one consideration under 8 C.F.R. § 1208.16(c)(3), along with internal relocation and gross, flagrant, or mass human rights violations, and the evidence must show she personally would more likely than not be tortured (Omar v. Barr).",
    "The past-persecution presumption in 8 C.F.R. §§ 1208.13(b)(1) and 1208.16(b)(1) applies to asylum and withholding. It does not carry over to CAT.",
    "There is no presumption for DHS to rebut in a CAT claim.",
    "Past torture is the first item the regulation lists as relevant evidence."
   ],
   "e": "CAT requires showing torture is more likely than not, the Senate's reading of Article 3's 'substantial grounds for believing.' Unlike asylum and withholding, past torture creates no presumption. General country reports also need a link to this applicant: specific grounds must show she would be personally at risk.",
   "unit": 7
  },
  {
   "q": "An off-duty police officer, acting in violation of local law and department policy, uses his badge to detain and torture a man. Is that torture by a public official for CAT purposes?",
   "o": [
    "No, because the state did not sanction the conduct",
    "No, because he broke local law",
    "Yes: CAT covers a rogue officer exercising official authority (Matter of O-F-A-S-)",
    "Only if his superiors willfully accepted it"
   ],
   "a": 2,
   "why": [
    "State sanction is not required. Matter of O-F-A-S- (A.G. 2020) covers a rogue officer acting without state sanction.",
    "Violating local law does not take the conduct outside CAT if the officer was exercising official authority.",
    "Correct. CAT covers torture by a rogue police officer exercising official authority, even without state sanction and in violation of local law and policy (Matter of O-F-A-S-, followed by the 2d, 3d, and 9th Circuits). The test borrows the § 1983 'under color of law' standard: a misuse of authority made possible only because the wrongdoer is clothed with the authority of law.",
    "Willful acceptance is the BIA's acquiescence standard for torture by non-state actors. Here the officer himself is the public official inflicting the torture."
   ],
   "e": "State action under CAT means torture by, at the instigation of, or with the consent or acquiescence of a public official or person acting in an official capacity. A public official acts in that capacity when he misuses authority that he has only because of his office. Using a badge to detain someone is that kind of misuse.",
   "unit": 7
  },
  {
   "q": "A country imposes the death penalty after a lawful conviction. Under the U.S. CAT regulations, is the execution torture?",
   "o": [
    "No, because the regulations expressly treat the death penalty as a 'lawful sanction'",
    "Yes, because death is the most severe pain or suffering",
    "Yes, if the applicant shows nexus",
    "No, because CAT covers only mental pain"
   ],
   "a": 0,
   "why": [
    "Correct. 8 C.F.R. § 208.18 expressly treats the death penalty as a lawful sanction, and torture excludes pain or suffering arising from or inherent in lawful sanctions (§ 1208.18(a)(3)). Class discussion raised whether the U.S. death penalty itself would count as torture without this proviso.",
    "The regulations add a proviso that excludes the death penalty, so severity alone does not make it torture under U.S. law.",
    "CAT requires no nexus, and nexus would not change the lawful-sanctions exclusion.",
    "Article 1 covers severe pain or suffering 'whether physical or mental.'"
   ],
   "e": "Article 1 excludes pain or suffering arising only from, inherent in, or incidental to lawful sanctions. The U.S. regulations narrow the definition further, including by naming the death penalty a lawful sanction. A country's label does not settle everything, though: 'torture is never a lawful means of punishment,' and in Nuru v. Gonzales the court reversed a lawful-punishment finding for a man bound, beaten, and left naked in the sun for 25 days.",
   "unit": 7
  },
  {
   "q": "Under 8 C.F.R. § 208.18, which of the following can qualify as mental pain or suffering for CAT purposes?",
   "o": [
    "Any severe emotional distress caused by detention",
    "Prolonged mental harm caused by the threat of imminent death",
    "Prolonged solitary confinement that causes mental suffering, by itself",
    "Verbal harassment and threats by police against an ethnic minority"
   ],
   "a": 1,
   "why": [
    "The regulation limits mental pain to prolonged mental harm caused by one of four listed sources. General emotional distress from detention is not enough.",
    "Correct. Mental pain counts only as prolonged mental harm caused by intentional or threatened infliction of severe physical pain, mind-altering substances or procedures calculated to profoundly disrupt the senses or personality, the threat of imminent death, or the threat that another person will be subjected to any of these.",
    "In Gallina v. Wilkinson (2d Cir. 2021), highly restrictive conditions including prolonged solitary confinement were not procedures calculated to disrupt profoundly the senses or the personality.",
    "In Rashiah v. Ashcroft (7th Cir. 2004), verbal harassment and threats by police and army against a vulnerable minority were not torture, even where torture of that minority was reported."
   ],
   "e": "The U.S. regulations adopt Article 1 but add provisos that narrow it: the death penalty is a lawful sanction, mental pain must be prolonged mental harm from one of four causes, the victim must be in the perpetrator's custody or physical control, and acquiescence requires prior awareness and a breach of duty. Each proviso makes it harder to qualify than the treaty text alone.",
   "unit": 7
  },
  {
   "q": "Police beat an applicant severely on one occasion to make him confess. The IJ denies CAT because the abuse happened only once. Is that correct?",
   "o": [
    "Yes, because torture requires repeated abuse over time",
    "Yes, because confessions are lawful sanctions",
    "No: there is no duration or frequency requirement, and a single occurrence is enough if severe; police abuse to extract a confession serves a listed purpose",
    "No, because any beating by police is torture"
   ],
   "a": 2,
   "why": [
    "Hernandez-Martinez v. Garland (1st Cir. 2023) held there is no duration or frequency requirement.",
    "Obtaining a confession is one of Article 1's listed impermissible purposes. Coercive interrogation is not a lawful sanction.",
    "Correct. A single occurrence can be torture if severe enough (Hernandez-Martinez). Harsh police mistreatment to extract a confession is intentional and serves a listed purpose, obtaining information or a confession (Kouzam v. Ashcroft).",
    "Severity is a fact-based inquiry with no bright line. In Kumar v. Gonzalez (9th Cir. 2005), an arrest with beatings with sticks and belts was not severe enough."
   ],
   "e": "The first CAT element asks whether the harm is torture: severe pain or suffering, specific intent, and an impermissible purpose. Severity has no bright line and no duration requirement. Violent physical harm is much more likely to qualify than nonphysical harm, and police abuse to obtain a confession fits a listed purpose.",
   "unit": 7
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
     "Asylum is discretionary because INA § 208(b)(1) says the government 'may grant' it, while withholding must be granted once its standard is met and no bar applies."
    ],
    [
     "More likely than not standard",
     "Withholding",
     "Withholding requires a clear probability, meaning persecution is more likely than not (INS v. Stevic); asylum needs only a well-founded fear, which can be met below 50%."
    ],
    [
     "Derivative benefits for spouse and children",
     "Asylum",
     "Asylum extends status to a spouse and child, while withholding protects only the applicant and gives nothing to family members."
    ],
    [
     "Requires nexus to a protected ground",
     "Both",
     "Asylum and withholding both require that the persecution be on account of race, religion, nationality, membership in a particular social group, or political opinion."
    ],
    [
     "Past persecution creates a presumption of future harm",
     "Both",
     "Under 8 C.F.R. §§ 1208.13(b)(1) and 1208.16(b)(1), past persecution creates a presumption of a well-founded fear for asylum and a presumed threat to life or freedom for withholding."
    ],
    [
     "Humanitarian grant despite rebutted fear",
     "Asylum",
     "Humanitarian asylum lets asylum be granted after DHS rebuts the presumption, based on severe past persecution or other serious harm, and withholding has no humanitarian version."
    ],
    [
     "Available after a reinstated removal order",
     "Withholding",
     "A person with a reinstated removal order can pass a reasonable fear screen into withholding and CAT proceedings only, because asylum is unavailable on that route."
    ],
    [
     "Survives the INA § 241(b)(3)(B) bars",
     "Neither",
     "The INA § 241(b)(3)(B) bars defeat both asylum and withholding, and the only fallback for a barred applicant is CAT deferral, which is a separate form of protection."
    ],
    [
     "Path to permanent residence and citizenship",
     "Asylum",
     "Asylum leads to lawful permanent residence and then citizenship, while withholding only bars removal to the specific country where the threat exists."
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
     "Matter of A-H-D- (BIA 2026) held that a three-day detention with a single blow causing no significant injury and needing no medical care does not rise to persecution."
    ],
    [
     "Threats that the group then carried out against the applicant",
     "Persecution",
     "Threats that are carried out are persecution; only threats that have not yet been carried out divide the circuits, with the Second Circuit saying threats alone are not persecution and the Fourth saying they may be."
    ],
    [
     "Denigration and harassment for ethnicity",
     "Not persecution",
     "Eduard v. Ashcroft (5th Cir. 2004) holds that denigration, harassment, and threats, and even 'morally reprehensible' discrimination, are not persecution without more serious consequences."
    ],
    [
     "Barred from school, banned from worship, and jobs denied for religion",
     "Persecution",
     "UNHCR Handbook ¶ 54 treats discrimination as persecution when it seriously restricts the right to earn a livelihood, practise one's religion, or access education, and this applicant faces all three."
    ],
    [
     "Large-scale confiscation of property for political opinion",
     "Persecution",
     "In re T-Z- lists a large-scale confiscation of property as an example of severe economic disadvantage beyond what society as a whole faces, which is economic persecution when imposed for a protected reason."
    ],
    [
     "Ordinary fine after a fair trial for a traffic crime",
     "Not persecution",
     "Prosecution for a common offense with ordinary punishment and a legitimate process is not persecution, because a refugee is a victim of injustice and not a fugitive from justice (UNHCR Handbook ¶ 56)."
    ],
    [
     "Forced sterilization under a population-control policy",
     "Persecution",
     "INA § 101(a)(42), as amended by IIRIRA § 601(a)(1), deems a person forced to undergo involuntary sterilization to have been persecuted on account of political opinion."
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
     "Asylum and withholding both require nexus to a protected ground, while CAT requires none, so only CAT can protect someone whose likely torture is unconnected to a ground."
    ],
    [
     "30% chance of persecution for political opinion; discretion favorable",
     "Asylum",
     "Under Cardoza-Fonseca a well-founded fear can exist well below a 50% chance, so a 30% chance supports asylum, but it falls short of withholding's more-likely-than-not standard."
    ],
    [
     "60% chance of persecution on account of religion; serious fraud makes a discretionary denial likely",
     "Withholding",
     "A 60% chance on a protected ground meets withholding's more-likely-than-not standard, and because withholding is mandatory, the fraud that could defeat discretionary asylum cannot defeat it."
    ],
    [
     "A statutory bar to asylum and withholding applies; torture by police is likely",
     "CAT",
     "The INA § 241(b)(3)(B) bars defeat asylum and withholding, but a barred applicant who proves likely torture still receives CAT deferral, because CAT's ban on return is absolute."
    ],
    [
     "Wants derivative status for spouse and children",
     "Asylum",
     "Only asylum extends status to a spouse and children; withholding and CAT protect only the applicant."
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
     "Once past persecution is shown, DHS must rebut the presumption of future persecution by a preponderance of the evidence, through a fundamental change in circumstances or reasonable internal relocation."
    ],
    [
     "Proving alienage in removal proceedings",
     "DHS / Government",
     "The outline states that DHS bears the burden of proving alienage, after which the respondent must show the manner and means of entry."
    ],
    [
     "Showing the government is unable or unwilling",
     "Applicant",
     "When the persecutor is a private actor, the applicant must prove the government is unable or unwilling to control it, for example by showing she sought protection and was rebuffed."
    ],
    [
     "Bond: not a flight risk or danger",
     "Applicant",
     "At a bond redetermination before the IJ, the respondent must show she is not a flight risk and not a danger to the community."
    ],
    [
     "Supporting favorable discretion",
     "Applicant",
     "Under Matter of Pula the applicant bears the burden of showing favorable discretion is warranted, though asylum should be granted if there are no adverse factors."
    ],
    [
     "Relocation reasonable after government persecution",
     "DHS / Government",
     "When the government is the persecutor, relocation is presumed unreasonable because a government can reach the whole country, so DHS must prove by a preponderance that relocation would be reasonable."
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
