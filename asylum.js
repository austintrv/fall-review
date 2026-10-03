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
   "blocks": [
    {
     "title": "Three Bodies of Law",
     "items": [
      [
       "International refugee law",
       "state obligations to people forcibly displaced across borders by threats to life or freedom"
      ],
      [
       "International humanitarian law",
       "conduct of war; protects wounded combatants, POWs, civilians"
      ],
      [
       "International human rights law",
       "war or peace: dignity, integrity, equality, liberty of all individuals"
      ]
     ]
    },
    {
     "title": "Core Concepts",
     "items": [
      [
       "Asylum",
       "a state’s grant of formal legal status to refugees; today it is discretionary"
      ],
      [
       "Non-refoulement",
       "no return to a country where life or freedom would be threatened"
      ],
      [
       "Regime timeline",
       "early efforts (1921–46) → IRO (1946) → UNHCR (1951)"
      ],
      [
       "Three perspectives",
       "juridical (lacks legal protection); social (groups at risk); individualist (case-by-case fear of persecution)"
      ]
     ]
    },
    {
     "title": "Fundamental Challenges",
     "items": [
      [
       "Non-entitlement",
       "Art. 1 defines “refugee,” but states needn’t grant asylum; protection from return ≠ right to stay"
      ],
      [
       "Durable solutions",
       "voluntary repatriation, local integration, third-country resettlement; depends on political will and resources"
      ]
     ]
    }
   ]
  },
  {
   "title": "Intl Norms & U.S. Law",
   "blocks": [
    {
     "title": "International Law in U.S. Courts",
     "items": [
      [
       "Treaties",
       "bind their parties"
      ],
      [
       "CIL",
       "practice + opinio juris; binds all but persistent objectors"
      ],
      [
       "Self-execution",
       "only self-executing provisions create judicially enforceable rights; otherwise implementing legislation"
      ],
      [
       "Last in time",
       "a later inconsistent statute controls domestically, but the U.S. stays bound internationally"
      ]
     ]
    },
    {
     "title": "Convention & Protocol",
     "items": [
      [
       "1967 Protocol",
       "drops the Convention’s time and place limits; binds parties to arts. 2–34; U.S. acceded 1968"
      ],
      [
       "Art. 1",
       "well-founded fear of persecution; outside country of nationality/habitual residence; unable or unwilling to get its protection; five grounds"
      ],
      [
       "Art. 33",
       "non-refoulement on a protected ground"
      ],
      [
       "Art. 34",
       "“as far as possible facilitate” naturalization: encourages, doesn’t mandate"
      ],
      [
       "Timeline",
       "1948 DP Act · 1950 UNHCR · 1951 Convention · 1952 INA · 1967 Protocol · 1980 Refugee Act · 1996 IIRIRA"
      ],
      [
       "Pre-1980",
       "former § 243(h) withholding was discretionary and covered only race, religion, political opinion; conditional entry; ad hoc parole"
      ]
     ]
    },
    {
     "title": "INA § 101(a)(42)(A) · Refugee",
     "multi": true,
     "text": "A person who is outside their country of nationality (or last habitual residence if stateless), and is unable or unwilling to return or avail themselves of its protection because of:",
     "items": [
      [
       "Persecution or well-founded fear of persecution",
       ""
      ],
      [
       "On account of",
       "race, religion, nationality, membership in a particular social group, or political opinion"
      ]
     ],
     "tip": "(B): President may designate in-country persons. Persecutor bar: anyone who ordered, incited, assisted, or participated in persecution. Coercive population control (forced abortion, sterilization, resistance) = persecution on account of political opinion."
    },
    {
     "title": "USRAP (Overseas)",
     "items": [
      [
       "INA § 207",
       "President, consulting Congress, sets annual admissions and allocation"
      ],
      [
       "P-1",
       "individual referral by UNHCR, a designated NGO, or a U.S. embassy"
      ],
      [
       "P-2",
       "groups of special humanitarian concern"
      ],
      [
       "P-3",
       "family of U.S. citizens or others with specified status"
      ],
      [
       "P-4",
       "Welcome Corps (private sponsorship); suspended Feb. 2025"
      ],
      [
       "Decision",
       "priority is necessary, not sufficient; USCIS Refugee Corps interview; denial not appealable"
      ],
      [
       "Humanitarian parole § 212(d)(5)",
       "temporary entry; may later apply for asylum"
      ]
     ]
    },
    {
     "title": "Bias & Access",
     "items": [
      [
       "ABC settlement",
       "foreign policy, U.S. relations with the government, U.S. agreement with the applicant’s views, and nationality are all irrelevant in-country"
      ],
      [
       "Haitian interdiction",
       "neither § 243(h) nor art. 33 bars high-seas return; art. 33 isn’t extraterritorial"
      ],
      [
       "Charming Betsy",
       "don’t construe a statute to violate IL if another construction remains"
      ],
      [
       "Access strategies",
       "preventing arrival (interdiction); refusing consideration (threshold screens, fast-tracks); deterring arrival (detention, work and family limits)"
      ],
      [
       "Outsourcing",
       "Australia’s Pacific Solution; EU–Turkey deal"
      ]
     ]
    },
    {
     "title": "Expedited Removal & Border Measures",
     "items": [
      [
       "INA § 235",
       "removal without an IJ hearing; fear screening for protection claims"
      ],
      [
       "Screening",
       "a fear finding is a screen, not a grant; negative CFI gets IJ review, no BIA appeal, limited federal review"
      ],
      [
       "Trap",
       "inconsistencies between the CFI and the later application can hurt credibility"
      ],
      [
       "Other measures",
       "metering; MPP; transit and safe-third-country bars; Title 42; Circumvention of Lawful Pathways (2023 presumption); Securing the Border (2024: withholding and CAT still available)"
      ]
     ]
    }
   ]
  },
  {
   "title": "Asylum vs. Withholding",
   "blocks": [
    {
     "title": "The Two Forms of Relief",
     "multi": true,
     "items": [
      [
       "Asylum (INA § 208)",
       "well-founded fear; discretionary; path to LPR and citizenship; derivatives for spouse and child"
      ],
      [
       "Withholding (INA § 241(b)(3))",
       "clear probability (more likely than not); mandatory if eligible and no bar; country-specific; no derivatives"
      ],
      [
       "CAT",
       "a separate protection from removal"
      ],
      [
       "Who may apply (§ 208(a)(1))",
       "physically present or arriving, irrespective of status"
      ]
     ]
    },
    {
     "title": "Standards (Supreme Court)",
     "items": [
      [
       "Withholding",
       "clear probability: more likely than not (> 50%); the 1980 Act didn’t change it"
      ],
      [
       "Asylum",
       "well-founded fear is more generous; need not prove persecution is more likely than not"
      ],
      [
       "Why different",
       "different statutory text and history; asylum discretionary, withholding mandatory"
      ],
      [
       "Motion to reopen",
       "prima facie eligibility for the relief sought"
      ]
     ]
    },
    {
     "title": "Well-Founded Fear",
     "items": [
      [
       "Test",
       "subjective fear + objectively reasonable basis; a reasonable possibility even if persecution is well under probable"
      ],
      [
       "Reasonable person",
       "would a reasonable person in the applicant’s circumstances fear persecution?"
      ],
      [
       "Proof",
       "detailed, plausible, coherent, credible testimony can suffice; documents not required (narrowed by case law and REAL ID)"
      ],
      [
       "Sur place",
       "basis for fear arises after departure"
      ]
     ]
    },
    {
     "title": "Screening Thresholds",
     "items": [
      [
       "Credible fear",
       "significant possibility of establishing asylum eligibility"
      ],
      [
       "Reasonable fear",
       "reasonable possibility of persecution or torture; higher screen for reinstatement / administrative removal → withholding/CAT only"
      ],
      [
       "Reasonable probability",
       "above reasonable possibility, below more likely than not (2024 border rule)"
      ]
     ],
     "tip": "Passing a screen gets you further adjudication, not protection."
    },
    {
     "title": "The Role of Discretion",
     "items": [
      [
       "Rule",
       "“the danger of persecution should generally outweigh all but the most egregious of adverse factors”"
      ],
      [
       "Factors",
       "protection elsewhere; transit length and safety; lawful-entry attempts; family ties; seriousness of fraud; age; health"
      ],
      [
       "Fraud",
       "relevant but can’t overwhelm; escape documents weigh little; fraudulently claiming U.S. citizenship is serious"
      ],
      [
       "Burden",
       "applicant; absent adverse factors, asylum should be granted"
      ]
     ]
    }
   ]
  },
  {
   "title": "Burden & Presumptions",
   "blocks": [
    {
     "title": "Prospective Risk",
     "multi": true,
     "text": "8 C.F.R. § 1208.13 (asylum), § 1208.16 (withholding). Individual risk required, unless pattern or practice:",
     "items": [
      [
       "Pattern or practice",
       "persecution of a group similarly situated on a protected ground"
      ],
      [
       "Inclusion",
       "the applicant is in that group"
      ]
     ],
     "tip": "Ninth Circuit “disfavored group” approach is an exception to individual targeting."
    },
    {
     "title": "Internal Relocation",
     "multi": true,
     "text": "Defeats a future-risk claim if relocation would:",
     "items": [
      [
       "Avoid persecution",
       ""
      ],
      [
       "Be reasonable",
       "age, health, gender, family support, infrastructure, civil strife, practical ability to live there"
      ]
     ],
     "tip": "Government persecutor → presumption relocation is unreasonable; DHS must rebut by a preponderance. No duty to try every refuge first."
    },
    {
     "title": "Past Persecution Presumption",
     "multi": true,
     "text": "Past persecution on a protected ground → presumed well-founded fear of future persecution on that ground (asylum and withholding). DHS rebuts by a preponderance with:",
     "items": [
      [
       "Fundamental change in circumstances",
       ""
      ],
      [
       "Safe and reasonable internal relocation",
       ""
      ]
     ]
    },
    {
     "title": "Humanitarian Asylum",
     "multi": true,
     "text": "After rebuttal, asylum can still be granted for:",
     "items": [
      [
       "Compelling reasons",
       "unwilling to return because past persecution was so severe (8 C.F.R. § 208.13(b)(1)(iii)(A))"
      ],
      [
       "Other serious harm",
       "reasonable possibility of harm as severe as persecution; no nexus needed"
      ]
     ],
     "tip": "Both need qualifying past persecution. Withholding has no humanitarian version."
    }
   ]
  },
  {
   "title": "Process & Rights",
   "blocks": [
    {
     "title": "Affirmative (Asylum Office)",
     "items": [
      [
       "Who",
       "outside removal proceedings, lawful or undocumented; USCIS within DHS"
      ],
      [
       "Interview",
       "nonadversarial; counsel at no government expense; bring evidence and your own interpreter"
      ],
      [
       "Outcomes",
       "grant, denial, or referral: no status → referred to IJ; lawful status → denial, keep status until it expires"
      ]
     ]
    },
    {
     "title": "Defensive (Immigration Court)",
     "items": [
      [
       "Structure",
       "DOJ → EOIR → IJ; adversarial; ICE attorney for the government"
      ],
      [
       "NTA",
       "allegations + charges under § 212 or § 237; DHS proves alienage; respondent shows manner of entry"
      ],
      [
       "§ 240(b) rights",
       "counsel at no government expense; examine and present evidence, cross-examine; complete record"
      ],
      [
       "Pretermission",
       "denial without a hearing if no prima facie case (2014 hearing-right rule vacated 2018)"
      ]
     ]
    },
    {
     "title": "Standards of Review",
     "items": [
      [
       "BIA",
       "clear error for facts; de novo for law, discretion, judgment"
      ],
      [
       "Circuit (petition for review)",
       "law de novo; facts substantial evidence; discretion arbitrary and capricious"
      ],
      [
       "Substantial evidence",
       "stands unless a reasonable adjudicator would be compelled to conclude otherwise"
      ],
      [
       "Limits",
       "review bars for discretion, criminal removal, asylum bars; savings clause keeps constitutional claims and questions of law; CAT facts reviewable"
      ]
     ]
    },
    {
     "title": "Due Process",
     "items": [
      [
       "Mathews",
       "private interest; risk of erroneous deprivation and value of added safeguards; government interest and burden"
      ],
      [
       "Entry fiction",
       "parole isn’t entry; returning residents can be treated as at the threshold"
      ],
      [
       "After IIRIRA",
       "“admission” replaces entry; EWI people are unadmitted"
      ],
      [
       "Entry without admission",
       "someone caught just inside the border has only the procedure Congress gave; habeas secures release, not admission"
      ],
      [
       "Fifth Circuit",
       "notice of charges; a hearing; fair opportunity to be heard; must show substantial prejudice"
      ]
     ]
    },
    {
     "title": "Counsel & Lozada",
     "multi": true,
     "text": "Right to counsel only at no government expense (INA § 292). Children have no right to appointed counsel; mentally incompetent detainees do. Lozada ineffective-assistance motion requires:",
     "items": [
      [
       "Affidavit",
       "describing the agreement with counsel"
      ],
      [
       "Notice to counsel",
       "counsel told of the allegations and given a chance to respond"
      ],
      [
       "Bar complaint",
       "filed with the licensing authority, or an explanation why not"
      ],
      [
       "Prejudice",
       "competent counsel would have acted differently and it affected the outcome"
      ]
     ],
     "tip": "Before merits: notice of right to counsel (twice), pro bono list confirmed, IJ asks if they want counsel, 10 days after NTA service."
    },
    {
     "title": "Detention & Bond",
     "items": [
      [
       "Bond hearing",
       "respondent shows she’s not a flight risk or danger; minimum $1,500"
      ],
      [
       "§ 236(c)",
       "mandatory detention for criminal and terrorism grounds; no bond"
      ],
      [
       "§ 236(a)",
       "bond eligible if not a danger and not likely to abscond"
      ],
      [
       "Arriving aliens / positive CFI",
       "no bond; IJ lacks custody jurisdiction; parole only"
      ],
      [
       "Parole (8 C.F.R. § 212.5)",
       "no security or flight risk + urgent humanitarian reason, medical emergency, public benefit, or law enforcement"
      ],
      [
       "Alternatives (least → most)",
       "own recognizance; parole; bond; supervised release; ISAP monitoring; community case management"
      ]
     ]
    },
    {
     "title": "Children, Work, Adjudicators",
     "items": [
      [
       "Flores",
       "release without delay: parent, guardian, adult relative, designee, licensed program, other; least restrictive setting"
      ],
      [
       "TVPRA (2008)",
       "unaccompanied child placed in the least restrictive setting in her best interests; may go to an asylum officer"
      ],
      [
       "Work authorization",
       "file at 150 days; eligible at 180 days pending; 2020 365-day rule vacated 2022"
      ],
      [
       "Interpreters",
       "court provides; must be fluent in both languages; family interpreters risk distortion"
      ],
      [
       "Abusive hearing",
       "no credibility finding survives; remand to a different IJ"
      ]
     ]
    }
   ]
  },
  {
   "title": "Defining Persecution",
   "blocks": [
    {
     "title": "Elements of a Claim",
     "multi": true,
     "items": [
      [
       "Harm",
       "rising to the level of persecution"
      ],
      [
       "Nexus",
       "on account of race, religion, nationality, political opinion, or PSG"
      ],
      [
       "Actor",
       "the government, or one it is unable or unwilling to control"
      ],
      [
       "Well-founded fear",
       "of future persecution (presumed from past persecution)"
      ]
     ],
     "tip": "Order of analysis: standard of proof → credibility & corroboration → past persecution (harm, nexus, actor) → future fear → discretion (asylum only), incl. humanitarian asylum. Frame: fears harm, by whom, on account of what."
    },
    {
     "title": "Human Rights Framing",
     "items": [
      [
       "No universal definition",
       "the Convention doesn’t define persecution"
      ],
      [
       "UNHCR Handbook ¶ 51",
       "threat to life or freedom on a Convention ground is always persecution; so are other serious human rights violations"
      ],
      [
       "Cumulative harm",
       "consider all incidents together; physical harm not required"
      ],
      [
       "EU Qualification Dir. art. 9(1)",
       "severe violation of basic rights by nature or repetition, or an accumulation of measures that is similarly severe"
      ]
     ]
    },
    {
     "title": "Economic Persecution",
     "items": [
      [
       "Rule",
       "deliberate imposition of severe economic disadvantage, or deprivation of liberty, food, housing, employment, or other essentials, for a protected reason"
      ],
      [
       "Threshold",
       "beyond what society as a whole faces: onerous fines, large confiscations, sweeping bans from a profession"
      ],
      [
       "Not enough",
       "mere employment discrimination; general poverty; trouble finding work in your field when other work exists"
      ],
      [
       "No bright line",
       "exclusion from your field and reduction to menial work can qualify on the whole record"
      ]
     ]
    },
    {
     "title": "Physical & Mental Harm",
     "items": [
      [
       "No punitive intent",
       "the test is objective; “persecution by any other name remains persecution”"
      ],
      [
       "Motive",
       "matters for nexus, not for whether harm is persecution"
      ],
      [
       "Mental harm",
       "counts; harm “for her own good” (FGM) is still persecution"
      ],
      [
       "Single beating",
       "short detention and one beating with no medical care isn’t persecution"
      ],
      [
       "Threats",
       "carried out = persecution; threats alone: 2d Cir. no, 4th Cir. may; ask if the group can carry them out"
      ]
     ]
    },
    {
     "title": "Severe Past Persecution (Chen)",
     "items": [
      [
       "Rule",
       "atrocious past persecution supports asylum even after changed circumstances rebut future fear"
      ],
      [
       "Severity",
       "roughly comparable to Chen; need not be physical; family harm counts in most circuits"
      ],
      [
       "Fifth Circuit",
       "harm to family isn’t the applicant’s harm; Chen is a high baseline"
      ],
      [
       "Proof",
       "medical and psychological evaluations of permanent or ongoing harm"
      ]
     ]
    },
    {
     "title": "Discrimination as Persecution",
     "multi": true,
     "text": "Persecution is more than discrimination or harassment. UNHCR ¶ 54: discrimination is persecution if it has substantially prejudicial consequences, e.g., serious restrictions on the right to:",
     "items": [
      [
       "Earn a livelihood",
       ""
      ],
      [
       "Practise one’s religion",
       ""
      ],
      [
       "Access normally available education",
       ""
      ]
     ],
     "tip": "Look at cumulative violence and harassment plus the societal context. A court finding eligibility remands; it can’t grant discretionary asylum."
    },
    {
     "title": "Prosecution vs. Persecution",
     "multi": true,
     "text": "A refugee is “not a fugitive from justice.” Prosecution can become persecution depending on:",
     "items": [
      [
       "Nature of the offense",
       ""
      ],
      [
       "Extent of the punishment",
       "excessive punishment for a common crime (UNHCR ¶¶ 57, 59)"
      ],
      [
       "Legitimacy of the process",
       "discriminatory application; laws out of line with human rights"
      ]
     ],
     "tip": "Torture excludes pain inherent in lawful sanctions (8 C.F.R. § 1208.18(a)(3))."
    },
    {
     "title": "Source of Persecution",
     "items": [
      [
       "UNHCR ¶ 65",
       "acts of the populace count if knowingly tolerated or the state refuses or can’t protect"
      ],
      [
       "Unable or unwilling",
       "private harm counts if the government can’t or won’t control it; applicant’s burden"
      ],
      [
       "Reporting",
       "not required if futile or dangerous; a subjective belief of futility isn’t enough"
      ],
      [
       "Slow police",
       "failing to solve a crime quickly isn’t necessarily inability"
      ],
      [
       "Matter of A-B- (reinstated 2025)",
       "government condoned the acts or was completely helpless; efforts, light sentences, or local apathy don’t meet it; treated as interchangeable in the Fifth Circuit"
      ]
     ]
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
