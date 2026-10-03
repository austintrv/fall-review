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
window.COURSES["intl-law"] = {
 "id": "intl-law",
 "title": "Intl Law",
 "t1": "International",
 "t2": "Law",
 "hue": "#ff2d95",
 "kicker": "LAW 5370 · Mirasola · Classes 1–11",
 "sub": "Methods first: sources, the ICJ, treaties, custom, jus cogens. Then who counts: states, IOs, nationality.",
 "exam": {
  "label": "Midterm",
  "when": "Mon 10.19",
  "date": "2026-10-19"
 },
 "cover": "Classes 1–11 (Class 9 was the group exercise)",
 "units": [
  {
   "title": "Exam Architecture",
   "blocks": [
    {
     "title": "Answer Architecture",
     "items": [
      [
       "Rule Statement → Analysis → Conclusion",
       "run once per discrete legal question in the prompt"
      ],
      [
       "Rule statement",
       "name the instrument, establish why it binds these parties, flag competing interpretations before applying anything"
      ],
      [
       "Analysis",
       "a subsection per issue; take the easier standard first, then the harder one"
      ],
      [
       "Counterarguments",
       "address every substantial one and keep it clearly distinguished from the main argument"
      ],
      [
       "Missing facts",
       "state which additional facts are needed and how they would change the analysis"
      ],
      [
       "Conclusion",
       "state how strong the case is, not just what the rule is (“strong case for X; at best a mediocre case for Y”)"
      ]
     ],
     "tip": "Not every provision must be cited. The packet supplies more than the answer needs, which leaves material for contextual treaty interpretation."
    },
    {
     "title": "Dissecting a Prompt",
     "multi": true,
     "items": [
      [
       "Step 1 · Read the questions first",
       "they orient which materials and facts matter",
       [
        "Who is the audience?",
        "What kind of actor is at issue: its status under IL and its rights and duties",
        "Questions that look alike ask different things; spotting how they differ is a core competency"
       ]
      ],
      [
       "Step 2 · Read the facts",
       "note changes in how an actor behaves over the course of the fact pattern"
      ],
      [
       "Step 3 · Read the questions again",
       "newly significant terms or actors send you back to those facts; identify the legal rules"
      ],
      [
       "Step 4 · Source packet → outline",
       "every source is used, but not all to the same degree; map the question to the three blocks"
      ]
     ]
    },
    {
     "title": "The Three Blocks",
     "items": [
      [
       "Block 1 · Methods",
       "sources, adjudication, treaties, CIL, general principles, peremptory norms"
      ],
      [
       "Block 2 · Characterizing actors",
       "legal personality, nationality, jurisdiction, immunity, state responsibility"
      ],
      [
       "Block 3 · Substantive rules",
       "use of force, laws of war, human rights, ICL, economic law"
      ]
     ]
    },
    {
     "title": "Analyzing Primary Sources",
     "items": [
      [
       "Treaty",
       "→ treaty interpretation"
      ],
      [
       "Domestic legislation",
       "→ jurisdiction, and possibly immunities"
      ],
      [
       "ILC draft / non-binding instrument",
       "→ establish that it reflects CIL, and define CIL"
      ],
      [
       "Two treaties",
       "→ how they relate to each other"
      ],
      [
       "Treaty establishing an IO",
       "→ whether the IO has international legal personality"
      ]
     ],
     "tip": "Doctrinal connections, not fact patterns: every source relates to a topic covered in class."
    },
    {
     "title": "Four Mindset Shifts",
     "items": [
      [
       "#1 IL exists primarily outside courts",
       "obligations run between actors without any adjudication; “judicial” signals a tribunal, which is not usually where IL is considered"
      ],
      [
       "#2 Not every wrong has a remedy",
       "ubi jus ibi remedium does not hold; “relief” means compensation or a judicial process"
      ],
      [
       "#3 IL is a layer cake",
       "states may do anything → peremptory norms → treaty and custom obligations → icing (tribunal decisions)"
      ],
      [
       "#4 State rights don’t transfer automatically",
       "IOs, individuals, and corporations are not treated like states (the kitten analogy)"
      ]
     ]
    },
    {
     "title": "Standing Rule-Statement Moves",
     "items": [
      [
       "Source first",
       "say what kind of authority it is and why it binds these parties"
      ],
      [
       "Treaty",
       "in force between these parties? reservations? run interpretation the first time, then refer back"
      ],
      [
       "ILC product (e.g., ARSIWA)",
       "not an in-force treaty: define CIL up front and state that the provisions reflect CIL"
      ],
      [
       "Judicial/arbitral decision",
       "not binding (ICJ Statute art. 59) but persuasive; where tribunals split, name both tests and apply each (effective vs. overall control)"
      ],
      [
       "UNGA resolution",
       "not binding alone; may evidence CIL; run the resolution indicia"
      ],
      [
       "Peremptory norm",
       "a norm from which no state can derogate; list the relevant ILC norms"
      ],
      [
       "Hierarchy",
       "a treaty can prevail over earlier CIL, never over a peremptory norm"
      ],
      [
       "Order of attack",
       "dispose of the easy attribution or jurisdiction question first; spend words on the contested one"
      ]
     ]
    }
   ]
  },
  {
   "title": "Intro & Theories",
   "blocks": [
    {
     "title": "What Makes IL Different",
     "items": [
      [
       "Decentralized",
       "no single source of law and no single sovereign that creates, interprets, or enforces it"
      ],
      [
       "Consent-based",
       "a state is normally exposed only to restrictions it has affirmatively accepted"
      ],
      [
       "Legislation",
       "by treaty and custom, not a legislature"
      ],
      [
       "Adjudication",
       "consensual: optional clause, a treaty conferring jurisdiction, or agreement to submit the dispute"
      ],
      [
       "Interpretation",
       "over time through community practice"
      ],
      [
       "Enforcement",
       "reciprocity, reputation, and collective security"
      ]
     ],
     "tip": "Why states comply: self-interest, predictability, and values. Is IL law? No (no sovereign / threat of force), Yes (rules states more or less follow), Kinda (principles, not enforceable specifics)."
    },
    {
     "title": "Historical Roots",
     "items": [
      [
       "Jus civile",
       "law among Romans only (contract, etc.)"
      ],
      [
       "Jus gentium",
       "law between Romans and foreigners; the granddaddy of IL"
      ],
      [
       "Jus naturale",
       "the philosophical backbone for both"
      ],
      [
       "1500s–1700s",
       "religious wars and imperialism bring in the modern state, the backbone of modern IL"
      ]
     ]
    },
    {
     "title": "Natural Law",
     "text": "Law must reflect fundamental principles of right and wrong; what is morally wrong or irrational cannot be law.",
     "items": [
      [
       "Argument it generates",
       "“this binds regardless of consent, because no state can contract out of first principles”"
      ],
      [
       "Pacta sunt servanda",
       "cannot rest on consent alone: a state bound only by consent could simply withdraw it"
      ],
      [
       "Peremptory norms",
       "rules no practice or treaty can detract from"
      ],
      [
       "Challenge",
       "which rules does natural law actually compel? Disagreement breeds uncertainty"
      ]
     ]
    },
    {
     "title": "Legal Positivism",
     "text": "Law is the product of state practice and consent, regardless of its rightness. Most IL lawyers think like positivists.",
     "items": [
      [
       "Lotus principle",
       "rules emanate from states’ free will; “restrictions upon the independence of States cannot be presumed”"
      ],
      [
       "Torture example",
       "treaty prohibiting it? is the state a party? any reservation? if no treaty, general and consistent practice, and did the state dissent?"
      ],
      [
       "Challenge",
       "cannot explain first principles no one consented to, peremptory norms, or gap-filling"
      ]
     ]
    },
    {
     "title": "Critical Approaches",
     "items": [
      [
       "New Stream",
       "IL is not internally coherent: a system made by sovereign consent is supposed to bind those same sovereigns, so opposite conclusions are equally respectable"
      ],
      [
       "TWAIL",
       "brings non-European/American perspectives in: “ask who was in the room when the rule formed and whose interests its exceptions protect”"
      ]
     ]
    }
   ]
  },
  {
   "title": "Sources & the UN",
   "blocks": [
    {
     "title": "ICJ Statute Art. 38(1)",
     "multi": true,
     "items": [
      [
       "(a) Conventions",
       "treaties expressly recognized by the contesting states; bind parties only (may ripen into CIL)"
      ],
      [
       "(b) Custom",
       "general practice accepted as law: state practice + opinio juris; what states do because they HAVE to"
      ],
      [
       "(c) General principles",
       "e.g., equity; rules for how tribunals operate, drawn from domestic court practice"
      ],
      [
       "(d) Judicial decisions & publicists",
       "subsidiary means, subject to art. 59 (binding only between the parties)"
      ]
     ],
     "tip": "(a) and (b) matter most. No express hierarchy: a treaty contrary to a peremptory norm creates no obligation, and later CIL can displace a treaty. Art. 38(2): ex aequo et bono only if the parties agree."
    },
    {
     "title": "The UN Organs",
     "items": [
      [
       "League of Nations (1919)",
       "failed: Senate never ratified the Covenant; collapsed before WWII"
      ],
      [
       "Charter art. 1 purposes",
       "peace and security; friendly relations and self-determination; cooperation and human rights; harmonizing center"
      ],
      [
       "Principal organs",
       "General Assembly, Security Council, ICJ (plus Secretariat, ECOSOC, HRC, Trusteeship Council)"
      ],
      [
       "Secretary-General",
       "chief administrative officer (arts. 97–99); may bring threats to the SC’s attention"
      ]
     ]
    },
    {
     "title": "General Assembly",
     "items": [
      [
       "Composition",
       "193 states, one state one vote; verbs are “discuss” and “make recommendations”"
      ],
      [
       "Art. 10 / Art. 14",
       "discuss any matter within the Charter; recommend peaceful adjustment, but not while the SC is handling it"
      ],
      [
       "No binding law",
       "biggest IL power: initiating studies and encouraging progressive development and codification"
      ],
      [
       "Voting",
       "majority; “important questions” need two-thirds present and voting"
      ]
     ]
    },
    {
     "title": "UNGA Resolutions as Evidence of CIL",
     "multi": true,
     "text": "Not binding on their own; may evidence CIL once they meet CIL criteria.",
     "items": [
      [
       "Check",
       "how many states adopted it and whether unanimously; operative verbs; understanding that the conduct is legally required; subsequent state practice"
      ],
      [
       "Nonbinding indicia",
       "suggestive verbs (Requests, Deplores); not unanimous (GA Res. 1761, apartheid)"
      ],
      [
       "Law-making indicia",
       "general legal obligations; later practice; unanimous; “solemnly declares” (GA Res. 1962, outer space → Outer Space Treaty)"
      ]
     ]
    },
    {
     "title": "Security Council",
     "items": [
      [
       "Composition",
       "15 members: P5 (China, France, Russia, UK, US) + 10 elected for two years"
      ],
      [
       "Voting",
       "nine votes; each P5 member has a veto on nonprocedural matters"
      ],
      [
       "Binding power",
       "arts. 24 (acts on members’ behalf), 25 (members carry out decisions), 48, 103 (Charter prevails over other agreements)"
      ],
      [
       "Example",
       "S.C. Res. 2699 (2023) Haiti, “Acting under Chapter VII,” authorizes a security support mission"
      ]
     ]
    }
   ]
  },
  {
   "title": "ICJ & Adjudication",
   "blocks": [
    {
     "title": "The Court",
     "items": [
      [
       "Status",
       "continuation of the PCIJ; “principal judicial organ” (Charter art. 92); all UN members are parties to the Statute (art. 93)"
      ],
      [
       "Bench",
       "15 judges, nine-year terms, five elected every three years by absolute majority in both GA and SC"
      ],
      [
       "Arts. 2, 3(1), 9",
       "independent judges; no two of one nationality; represent the main legal systems"
      ],
      [
       "Judge ad hoc (art. 31)",
       "a party with no national on the bench may appoint one"
      ]
     ]
    },
    {
     "title": "Contentious vs. Advisory",
     "items": [
      [
       "Contentious",
       "two states disagree; binds only the parties; states must opt in to jurisdiction"
      ],
      [
       "Advisory",
       "states existing law; creates no new obligations; a treaty must empower the requester; the ICJ decides whether to accept"
      ]
     ]
    },
    {
     "title": "Consent to Contentious Jurisdiction",
     "multi": true,
     "text": "No compulsory jurisdiction (art. 36); only states may be parties.",
     "items": [
      [
       "Treaty clause (art. 36(1))",
       "advance consent in a treaty in force"
      ],
      [
       "Optional clause (art. 36(2))",
       "automatic jurisdiction against another state that also accepted it"
      ],
      [
       "Special agreement",
       "a compromis for this particular dispute"
      ],
      [
       "Informal consent",
       "actually using the Court"
      ],
      [
       "PCIJ clauses (arts. 36(5), 37)",
       "treaty in force between the litigants and all are parties to the Statute"
      ]
     ],
     "tip": "Joining the Statute is not itself consent, but every party is bound by the Court’s power to decide its own jurisdiction (art. 36(6)) and to order binding provisional measures (art. 41)."
    },
    {
     "title": "Advisory Jurisdiction",
     "multi": true,
     "items": [
      [
       "Authorization",
       "Statute art. 65(1) + Charter art. 96: GA and SC may request; the GA may authorize other organs and agencies"
      ],
      [
       "Propriety",
       "the Court “may give” an opinion; political aspects go to propriety, not power"
      ],
      [
       "WHO request refused",
       "the WHO treaty gave no authority to ask about the legality of nuclear weapons"
      ]
     ]
    },
    {
     "title": "Limits & Objections",
     "items": [
      [
       "The Court may decline when",
       "the matter is for domestic courts; too much time has passed; the issue is unnecessary to the dispute (timeliness and equity)"
      ],
      [
       "Objections",
       "to jurisdiction (power to rule) vs. admissibility (e.g., non-exhaustion of local remedies)"
      ],
      [
       "Precedent",
       "no stare decisis except procedure and evidence; “precedential-ish” for reliance; a unanimous decision can be catalytic"
      ]
     ]
    },
    {
     "title": "Other Tribunals",
     "items": [
      [
       "PCA (1899)",
       "an arbitration secretariat, not a court, not limited to states; South China Sea"
      ],
      [
       "Ad hoc claims bodies",
       "Iran–US Claims Tribunal; UN Compensation Commission (Kuwait)"
      ],
      [
       "UNCLOS",
       "ITLOS, its Seabed Disputes Chamber, the ICJ, or special arbitral tribunals"
      ],
      [
       "WTO DSB",
       "compulsory, exclusive; Appellate Body defunct since 2019"
      ],
      [
       "Investment arbitration",
       "two agreements (right to arbitrate + forum: ICSID or UNCITRAL); arbitration without privity; no diplomatic protection; generally no exhaustion"
      ]
     ]
    },
    {
     "title": "Reading an ICJ Opinion",
     "items": [
      [
       "Decision types",
       "merits decision/AO; separate opinion (same result, different reason); declaration; dissent (may be partial)"
      ],
      [
       "Six parts",
       "question + posture → propriety (AO) → facts → applicable law → application → holdings"
      ],
      [
       "Finding the holding",
       "argument, counterargument, then “The Court notes / observes / finds”: that sentence is the holding"
      ],
      [
       "Judicial economy",
       "what the Court declines to reach marks the next case’s gap"
      ]
     ],
     "tip": "The ICJ IRACs. An exam gives an excerpt: chunk it and name which part it is."
    },
    {
     "title": "Nuclear Weapons AO",
     "items": [
      [
       "Jurisdiction",
       "Statute art. 65(1) + Charter art. 96(1): “any legal question”"
      ],
      [
       "Prohibition, not authorization",
       "conduct isn’t unlawful just because no rule authorizes it"
      ],
      [
       "Lex specialis",
       "ICCPR art. 6 and environmental law apply, but through the law of armed conflict; Genocide Convention needs specific intent"
      ],
      [
       "Charter",
       "art. 2(4); art. 51 self-defense; necessity and proportionality apply “whatever the means of force employed”"
      ],
      [
       "CIL",
       "decades of non-use: community “profoundly divided,” no opinio juris; UNGA resolutions may have normative value (content, conditions of adoption, opinio juris)"
      ],
      [
       "LOAC",
       "distinction; proportionality; unnecessary suffering; Martens Clause; “intransgressible” principles"
      ],
      [
       "Holding",
       "generally contrary to LOAC; extreme self-defense where survival is at stake left unresolved (non liquet)"
      ]
     ]
    }
   ]
  },
  {
   "title": "Law of Treaties",
   "blocks": [
    {
     "title": "Baseline Principles",
     "items": [
      [
       "Parties only",
       "except a rule accepted as custom; analysis runs rule by rule, not treaty by treaty"
      ],
      [
       "Pacta sunt servanda (art. 26)",
       "perform in good faith; art. 27: internal law is no excuse"
      ],
      [
       "No retroactivity (art. 28)",
       "only acts after entry into force for that party"
      ],
      [
       "Later in time (art. 30)",
       "later treaty prevails; custom and treaties can displace each other; Charter art. 103 prevails over all"
      ],
      [
       "Territorial scope",
       "the whole territory of each party unless stated otherwise"
      ]
     ]
    },
    {
     "title": "What Makes a Treaty",
     "multi": true,
     "text": "VCLT art. 2(1)(a): an international agreement concluded between States in written form and governed by international law, whatever its designation.",
     "items": [
      [
       "Screen 1",
       "governed by international law (not a commercial deal under national law)"
      ],
      [
       "Screen 2",
       "intention to create legally binding obligations; the title is not decisive"
      ],
      [
       "MOU",
       "records understandings without intent to bind; language, not the label, controls"
      ],
      [
       "Form",
       "any name or none; exchange of notes; law-making vs. one-off treaties"
      ]
     ],
     "tip": "The ICJ treats VCLT art. 31 as reflecting CIL."
    },
    {
     "title": "Treaties & Third States",
     "items": [
      [
       "Pacta tertiis (art. 34)",
       "no obligations or rights for a third state without consent"
      ],
      [
       "Obligations (art. 35)",
       "parties intend the provision to create it AND the third state expressly accepts in writing"
      ],
      [
       "Rights (art. 36)",
       "assent presumed unless the third state says otherwise"
      ],
      [
       "Apparent exceptions",
       "rules that became CIL; sanctions on an aggressor (art. 75)"
      ]
     ]
    },
    {
     "title": "Consent & Entry Into Force",
     "items": [
      [
       "Entry into force (art. 24)",
       "as the treaty says, or when all negotiating states consent"
      ],
      [
       "Provisional application (art. 25)",
       "if the treaty provides or the states agree"
      ],
      [
       "Signature",
       "mostly political support now; creates an art. 18 duty not to defeat object and purpose"
      ],
      [
       "Ratification / accession",
       "writing to the depositary, before vs. after entry into force"
      ],
      [
       "Full powers (art. 2(1)(c))",
       "authority to negotiate and sign; Heads of State presumed"
      ],
      [
       "Registration (Charter art. 102)",
       "unregistered treaties can’t be invoked before UN organs, but remain valid"
      ]
     ]
    },
    {
     "title": "Reservations",
     "multi": true,
     "text": "VCLT art. 2(1)(d): a unilateral statement, however named, that purports to exclude or modify a provision’s legal effect for the reserving state. Label doesn’t matter; effect does.",
     "items": [
      [
       "Art. 19 bars",
       "the treaty prohibits it; the treaty allows only specified ones and this isn’t one; or it’s incompatible with object and purpose"
      ],
      [
       "Genocide Convention AO (1951)",
       "source of the object-and-purpose test"
      ],
      [
       "Invalid reservation",
       "no legal effect; ECtHR and Human Rights Committee sever it and keep the state bound"
      ],
      [
       "Interpretive declaration",
       "a view of meaning, not a condition of consent"
      ]
     ]
    },
    {
     "title": "Amendment & Modification",
     "items": [
      [
       "Amendment (art. 39)",
       "all parties agree, by the treaty’s own method"
      ],
      [
       "Modification (art. 41)",
       "some parties, inter se only"
      ],
      [
       "Rejected",
       "modification by subsequent practice (instability)"
      ]
     ]
    },
    {
     "title": "Termination & Withdrawal",
     "multi": true,
     "text": "No unilateral withdrawal by default; all parties may terminate; treaties continue in wartime.",
     "items": [
      [
       "Art. 54 / 56",
       "withdrawal if the treaty or all parties allow; silence presumes no withdrawal unless intended or implied by nature"
      ],
      [
       "Material breach (art. 60)",
       "repudiation or violation of a provision essential to object and purpose; importance of the provision, not size of breach; humanitarian protections excluded"
      ],
      [
       "Impossibility (art. 61)",
       "permanent loss of an object indispensable to execution (the destroyed dam); not if caused by your own breach"
      ],
      [
       "Rebus sic stantibus (art. 62)",
       "unforeseen change + the circumstance was an essential basis of consent; boundary treaties excluded"
      ]
     ]
    },
    {
     "title": "Invalidity",
     "items": [
      [
       "Grounds",
       "peremptory norm (arts. 53, 64); error (48); fraud (49); coercion (51–52); internal law (46); unauthorized negotiator (47)"
      ],
      [
       "Void",
       "coercion of a state; conflict with a peremptory norm"
      ],
      [
       "Voidable (must be invoked)",
       "internal-law incompetence, excess of authority, error, fraud"
      ],
      [
       "Not an excuse",
       "justifying non-performance belongs to state responsibility (art. 73)"
      ]
     ]
    },
    {
     "title": "Interpretation · Arts. 31–32",
     "multi": true,
     "text": "Art. 31(1): ordinary meaning + context + object and purpose, in good faith.",
     "items": [
      [
       "Ordinary meaning",
       "at the time of negotiation; special meaning must be proven by its proponent (31(4)); generic terms in lasting treaties evolve"
      ],
      [
       "Context (31(2))",
       "rest of the text, preamble, annexes; related agreements and instruments"
      ],
      [
       "31(3)",
       "(a) subsequent agreement; (b) subsequent practice showing agreement; (c) relevant rules of IL between the parties"
      ],
      [
       "Art. 32 supplementary means",
       "travaux and circumstances of conclusion, ONLY if meaning is ambiguous/obscure or manifestly absurd/unreasonable"
      ]
     ],
     "tip": "Order: on-point text first, then context and object and purpose. Specific amendment article beats the general one; inter se modification can’t undercut object and purpose; a priority clause (“single instrument… agreement prevails”) controls."
    }
   ]
  },
  {
   "title": "Customary IL",
   "blocks": [
    {
     "title": "Definition",
     "multi": true,
     "text": "CIL = general pattern of state practice + opinio juris (art. 38(1)(b): “a general practice accepted as law”). Each element is assessed separately (ILC Concls. 2–3).",
     "items": [
      [
       "Usage",
       "what states do because they want to (ceremonial salutes); not custom unless it acquires legal acceptance"
      ]
     ]
    },
    {
     "title": "State Practice",
     "multi": true,
     "items": [
      [
       "Three rules",
       "practice of STATES; no set duration (longer is better); substantially consistent, not identical"
      ],
      [
       "ILC Concl. 8",
       "widespread, representative, and consistent"
      ],
      [
       "Forms (Concls. 4–6)",
       "physical acts, statements, legislation, judgments, manuals, sometimes inaction; no hierarchy"
      ],
      [
       "Other actors",
       "IO practice may contribute; NGOs help assess but are not practice"
      ],
      [
       "Concl. 7",
       "a state’s practice is weighed as a whole; internal inconsistency reduces weight"
      ]
     ]
    },
    {
     "title": "Opinio Juris",
     "items": [
      [
       "Meaning",
       "acting from a sense of legal obligation, not habit or courtesy"
      ],
      [
       "Rules",
       "only states’ legal opinions count; needs written evidence; repeated conduct alone isn’t enough"
      ],
      [
       "Sources",
       "diplomatic correspondence, white papers, legal-adviser opinions, official documents, judgments, treaties, votes on resolutions"
      ],
      [
       "Silence",
       "counts only if the state could react and the circumstances called for a reaction"
      ],
      [
       "In practice",
       "heavy reliance on tribunal decisions, IO debates, and scholarship; rigor varies"
      ]
     ]
    },
    {
     "title": "Persistent Objector",
     "multi": true,
     "text": "Not bound while the objection is maintained (ILC Concl. 15). The objection must be:",
     "items": [
      [
       "Timely",
       "made during formation of the rule"
      ],
      [
       "Clear",
       "clearly articulated"
      ],
      [
       "Known",
       "made known to other states"
      ],
      [
       "Persistent",
       "maintained over time"
      ]
     ],
     "tip": "Stronger when others acquiesce. Never works against a peremptory norm. Particular custom (Concl. 16) binds a subset of states, e.g., Gulf of Mannar pearl fisheries."
    },
    {
     "title": "Treaties & Custom",
     "items": [
      [
       "Codification",
       "treaty records a rule that already existed"
      ],
      [
       "Crystallization",
       "treaty completes a rule already emerging"
      ],
      [
       "Generation",
       "treaty gives rise to later practice accepted as law"
      ],
      [
       "Separate identities",
       "a non-party bound by the parallel custom gets no treaty rights (e.g., dispute settlement); many similar treaties ≠ custom"
      ]
     ]
    },
    {
     "title": "North Sea Continental Shelf",
     "text": "Germany (non-party) vs. Netherlands & Denmark (parties). Did the art. 6 equidistance rule bind Germany as custom? ICJ: no, on every route.",
     "items": [
      [
       "Codified existing CIL?",
       "No: the ILC saw the rule as innovative; the treaty allowed reservations to it; it wasn’t in arts. 1–3 (non-reservable)"
      ],
      [
       "Created new CIL?",
       "No: contrary to art. 6’s own text (agreement first, special circumstances)"
      ],
      [
       "Passed into CIL after?",
       "No: too few adopters; too little time"
      ],
      [
       "Independent practice?",
       "No: few instances, mostly among treaty parties, no sign of why, and factually distinct (opposite, not adjacent coasts)"
      ]
     ]
    },
    {
     "title": "Evidence of CIL",
     "items": [
      [
       "Resolutions (Concl. 12)",
       "can’t create CIL alone; may evidence or develop it"
      ],
      [
       "Subsidiary means (Concls. 13–14)",
       "international decisions, national judgments (also practice), publicists"
      ],
      [
       "ICRC IHL study",
       "model method; Rule 53: starvation of civilians prohibited"
      ],
      [
       "LLMs",
       "useful but unproven: repeated NGO/scholar claims can drown out actual state practice; verify against primary sources"
      ]
     ]
    },
    {
     "title": "Environmental Duties (Climate AO)",
     "items": [
      [
       "Duty to prevent significant harm",
       "all means reasonably available; conduct, not result; stringent standard; reaches cumulative global emissions"
      ],
      [
       "Due diligence (7)",
       "appropriate measures; best science; international rules and standards; different capabilities; precaution; impact assessments; notification and consultation"
      ],
      [
       "Duty to cooperate",
       "good-faith, sustained cooperation; states choose the means, not whether to cooperate"
      ],
      [
       "Method",
       "applied through earlier judgments without a fresh practice + opinio juris inquiry"
      ]
     ]
    }
   ]
  },
  {
   "title": "General Principles & Jus Cogens",
   "blocks": [
    {
     "title": "General Principles (38(1)(c))",
     "items": [
      [
       "Status",
       "a primary source, not a subsidiary means"
      ],
      [
       "Function",
       "evidence, procedure, jurisdiction: tribunals borrow from developed domestic systems where practice supplies no rule"
      ]
     ]
    },
    {
     "title": "Peremptory Norms · Definition",
     "text": "VCLT art. 53: a norm accepted and recognized by the international community of States as a whole as one from which no derogation is permitted and which can be modified only by a later norm of the same character.",
     "items": [
      [
       "Nature (ILC Concl. 2)",
       "protect fundamental values; universally applicable; hierarchically superior"
      ],
      [
       "Derogation",
       "valid: letting another state search your ships; void: a joint genocidal operation"
      ]
     ]
    },
    {
     "title": "Identifying One (ILC Concl. 4)",
     "multi": true,
     "items": [
      [
       "Criterion 1",
       "a norm of general international law (usually CIL; treaty or general principle can serve, Concl. 5)"
      ],
      [
       "Criterion 2",
       "accepted and recognized by the community of states as a whole as non-derogable"
      ],
      [
       "Separate acceptance (Concl. 6)",
       "proving CIL does not prove peremptory status"
      ],
      [
       "Community of states (Concl. 7)",
       "a very large and representative majority, not all"
      ]
     ]
    },
    {
     "title": "The Recognized List",
     "items": [
      [
       "ILC Annex (non-exhaustive)",
       "prohibitions of aggression, genocide, crimes against humanity, basic IHL rules, racial discrimination and apartheid, slavery, torture; right of self-determination"
      ],
      [
       "Crawford’s “least controversial”",
       "use of force (art. 2(4)), genocide, crimes against humanity, slave trade; self-determination for colonial peoples"
      ],
      [
       "Differences",
       "Crawford names art. 2(4) not aggression; omits IHL and torture; both lists illustrative"
      ]
     ]
    },
    {
     "title": "Legal Consequences",
     "multi": true,
     "items": [
      [
       "Treaties (arts. 53, 64)",
       "void in whole if conflicting at conclusion; void and terminates if a new norm emerges; reservations can’t contradict"
      ],
      [
       "Custom (Concl. 14)",
       "conflicting CIL can’t form; no persistent objector"
      ],
      [
       "Erga omnes (Concl. 17)",
       "any state may invoke responsibility"
      ],
      [
       "No justification (Concl. 18)",
       "no circumstance precluding wrongfulness (necessity, self-defense)"
      ],
      [
       "Serious breach (Concl. 19; ARSIWA 41)",
       "cooperate to end it; don’t recognize the situation as lawful; don’t aid or assist"
      ],
      [
       "Limits",
       "doesn’t create jurisdiction; doesn’t by itself displace immunity; acquiescence irrelevant"
      ]
     ]
    }
   ]
  },
  {
   "title": "Legal Personality",
   "blocks": [
    {
     "title": "Subjects of IL",
     "multi": true,
     "text": "A subject (1) has direct rights and obligations under IL, (2) can bring international claims, and (3) is responsible for breaches.",
     "items": [
      [
       "States",
       "the primary subject; the template for everything else"
      ],
      [
       "IOs",
       "only when their establishing treaty stipulates it"
      ],
      [
       "Individuals & corporations",
       "not direct subjects; derivative rights (human rights, investment) that run against the state"
      ]
     ]
    },
    {
     "title": "Montevideo Criteria (art. I)",
     "multi": true,
     "items": [
      [
       "Permanent population",
       "some community; no minimum"
      ],
      [
       "Defined territory",
       "some definite extent; frontiers need not be settled"
      ],
      [
       "Government",
       "some stable political community; need not be effective; independence is minimal (post-war West Germany, Andorra)"
      ],
      [
       "Capacity for relations",
       "recognition by other states"
      ]
     ],
     "tip": "An inter-American treaty (17 states), inconsistently followed: a rule of thumb. Recognition is tied to the peremptory norm of self-determination (Charter arts. 1(2), 55)."
    },
    {
     "title": "Recognition of States",
     "items": [
      [
       "Indicia",
       "formal diplomatic relations; official communications; practice treating it as a state (treaties, ambassadors)"
      ],
      [
       "IO membership",
       "doesn’t necessarily imply statehood"
      ],
      [
       "Declaratory (prevailing)",
       "recognition affirms existing statehood; pre-recognition acts count"
      ],
      [
       "Constitutive",
       "no state until recognized; can’t answer pre-recognition acts"
      ]
     ]
    },
    {
     "title": "Recognition of Governments",
     "items": [
      [
       "State vs. government",
       "an actor exists vs. its internal administration is legitimate (US: Venezuela yes, Maduro government no, now both)"
      ],
      [
       "De jure",
       "formal recognition"
      ],
      [
       "De facto",
       "working with it without formal recognition, keeping a legitimacy claim"
      ]
     ]
    },
    {
     "title": "IO Personality",
     "multi": true,
     "text": "Not automatic: read the establishing treaty. Reparation for Injuries (ICJ 1949): the UN can bring an international claim.",
     "items": [
      [
       "Permanent association",
       "of entities with personality, usually states"
      ],
      [
       "Executive organs",
       "it has them"
      ],
      [
       "Distinct legal powers",
       "its own, separate from members"
      ],
      [
       "General existence",
       "the powers exist generally, not in just a few states"
      ]
     ]
    }
   ]
  },
  {
   "title": "Nationality",
   "blocks": [
    {
     "title": "The Individual in IL",
     "items": [
      [
       "Historically",
       "the state was the conduit; claims ran against the state, not officials"
      ],
      [
       "Individuals as “subjects”",
       "no bar, but the label implies capacities individuals lack"
      ],
      [
       "Responsibility",
       "piracy (universal jurisdiction) → WWII laws of war → Nuremberg (crimes against peace, war crimes, crimes against humanity) → ICL tribunals"
      ],
      [
       "Today",
       "only individuals bear international criminal responsibility in current institutions"
      ]
     ]
    },
    {
     "title": "Nationality of Individuals",
     "items": [
      [
       "Why it matters",
       "states regulate nationals abroad and espouse their claims (diplomatic protection)"
      ],
      [
       "Baseline",
       "domestic law defines nationality, increasingly limited by treaties and tribunals"
      ],
      [
       "Routes",
       "jus sanguinis (predominant); jus soli (majority in the Americas); naturalization"
      ],
      [
       "Statelessness",
       "4.5M+ people; no diplomatic protection; no state must accept them if expelled"
      ]
     ]
    },
    {
     "title": "Right to a Nationality",
     "items": [
      [
       "UDHR art. 15",
       "right to a nationality; no arbitrary deprivation (weak practice and opinio juris)"
      ],
      [
       "ICCPR art. 24(3)",
       "every child may acquire a nationality"
      ],
      [
       "1961 Statelessness Convention",
       "no denationalization that leaves someone stateless (85 parties)"
      ],
      [
       "ACHR art. 20",
       "right to a nationality (24 of 36 OAS states)"
      ]
     ]
    },
    {
     "title": "Nottebohm (ICJ 1955)",
     "text": "A state can’t demand that others recognize its nationality for diplomatic protection without a genuine link: “a social fact of attachment, a genuine connection of existence, interests and sentiments.”",
     "items": [
      [
       "Facts",
       "German national in Guatemala 34 years, naturalized in Liechtenstein a month into WWII; claim inadmissible"
      ],
      [
       "Status",
       "rejected by the ILC (Diplomatic Protection art. 4); recognized by Restatement (Third) § 211; jus soli and sanguinis supply a link"
      ]
     ]
    },
    {
     "title": "Corporations",
     "multi": true,
     "text": "No independent international legal personality. State-controlled corporation? Weigh:",
     "items": [
      [
       "Ownership",
       "degree of government ownership"
      ],
      [
       "Function",
       "whether it executes state functions"
      ],
      [
       "Control",
       "other indicia of state control"
      ]
     ],
     "tip": "Commercial activity: not an arm of the state. Other activity: sovereign immunity; conduct may be attributed to the state. Treaty-chartered corporations get treaty privileges plus local-law ones."
    },
    {
     "title": "Corporate Nationality",
     "items": [
      [
       "Two bases",
       "state of incorporation, or registered office (siège social); not shareholder nationality"
      ],
      [
       "Barcelona Traction (ICJ 1970)",
       "Canadian company, 88% Belgian-owned: only the company’s national state may claim"
      ],
      [
       "Exceptions",
       "shareholders’ direct rights; possible equity; ILC art. 11; treaties providing otherwise"
      ],
      [
       "Workarounds",
       "investment treaties’ nationality rules; strategic subsidiaries"
      ]
     ]
    }
   ]
  }
 ],
 "maps": [
  {
   "title": "The Layer Cake",
   "kind": "stack",
   "caption": "Mindset shift #3. Build the answer from the bottom up.",
   "layers": [
    {
     "label": "4 · Icing",
     "text": "Tribunal decisions: not necessary, not always present, nice to have (art. 59)"
    },
    {
     "label": "3 · Obligations taken on",
     "text": "Treaties and custom the state is bound by"
    },
    {
     "label": "2 · Peremptory norms",
     "text": "Baseline prohibitions no state can derogate from"
    },
    {
     "label": "1 · The plate",
     "text": "States may do anything they want (Lotus: restrictions can’t be presumed)"
    }
   ]
  },
  {
   "title": "Does This Rule Bind State X?",
   "kind": "flow",
   "caption": "Run it rule by rule, not treaty by treaty.",
   "steps": [
    {
     "q": "Does the rule conflict with a peremptory norm?",
     "out": [
      "YES",
      "Void: no treaty or custom can require or permit it"
     ],
     "go": "NO"
    },
    {
     "q": "Is there a treaty on point?",
     "out": [
      "NO",
      "Go to the CIL questions below"
     ],
     "go": "YES"
    },
    {
     "q": "Is it in force for X (ratified / acceded; art. 24)?",
     "out": [
      "NO",
      "Signed only? Art. 18 duty not to defeat object and purpose. Otherwise, CIL."
     ],
     "go": "YES"
    },
    {
     "q": "Did X validly reserve against the provision (art. 19)?",
     "out": [
      "YES",
      "Modified as to X. Invalid reservation: no effect, maybe severed."
     ],
     "go": "NO"
    },
    {
     "q": "Interpret it: art. 31 (meaning + context + object and purpose); art. 32 only if ambiguous or absurd.",
     "go": "THEN"
    },
    {
     "q": "Outside the treaty: widespread, representative, consistent practice + opinio juris?",
     "out": [
      "NO",
      "No restriction (Lotus)"
     ],
     "go": "YES"
    },
    {
     "q": "Was X a persistent objector while the rule formed?",
     "out": [
      "YES",
      "Not bound, unless the norm is peremptory"
     ],
     "go": "NO"
    }
   ],
   "end": "Bound. Then check hierarchy: later in time, Charter art. 103."
  },
  {
   "title": "Contentious Jurisdiction",
   "kind": "flow",
   "caption": "Consent is everything (art. 36).",
   "steps": [
    {
     "q": "Are both parties states?",
     "out": [
      "NO",
      "No case: private parties can’t appear"
     ],
     "go": "YES"
    },
    {
     "q": "Did the respondent consent? Treaty clause 36(1) · optional clause 36(2) · compromis · using the Court · PCIJ clause 36(5)/37",
     "out": [
      "NO",
      "No jurisdiction. Joining the Statute isn’t consent."
     ],
     "go": "YES"
    },
    {
     "q": "Any objection to admissibility or reason to decline (local remedies, domestic matter, delay, unnecessary)?",
     "out": [
      "YES",
      "Court may decline"
     ],
     "go": "NO"
    }
   ],
   "end": "Judgment binds the parties only (art. 59). Provisional measures (art. 41) bind."
  },
  {
   "title": "Advisory Opinions",
   "kind": "flow",
   "caption": "Two-part inquiry: power, then propriety.",
   "steps": [
    {
     "q": "Is the requester authorized (Charter art. 96: GA, SC, or bodies the GA authorizes, within their scope)?",
     "out": [
      "NO",
      "Refused (WHO, nuclear weapons)"
     ],
     "go": "YES"
    },
    {
     "q": "Is it a legal question? Political aspects don’t change that.",
     "out": [
      "NO",
      "No power to answer"
     ],
     "go": "YES"
    },
    {
     "q": "Is it proper to answer? The Court “may give” an opinion (art. 65(1)).",
     "out": [
      "NO",
      "Court declines in its discretion"
     ],
     "go": "YES"
    }
   ],
   "end": "Opinion states existing law; creates no new obligations."
  },
  {
   "title": "Treaty Life Cycle",
   "kind": "flow",
   "caption": "Where each VCLT article lives.",
   "steps": [
    {
     "q": "Negotiate with full powers (art. 2(1)(c))",
     "go": ""
    },
    {
     "q": "Sign (art. 18 interim duty)",
     "go": ""
    },
    {
     "q": "Ratify or accede (reservations, art. 19)",
     "go": ""
    },
    {
     "q": "Entry into force (art. 24) · register (Charter art. 102)",
     "go": ""
    },
    {
     "q": "Perform in good faith (art. 26) · interpret (arts. 31–32)",
     "go": ""
    },
    {
     "q": "Amend (art. 39) / modify inter se (art. 41)",
     "go": ""
    }
   ],
   "end": "Exit: withdrawal (54, 56), material breach (60), impossibility (61), rebus sic stantibus (62), invalidity (46–53, 64)."
  },
  {
   "title": "Binding or Not?",
   "kind": "compare",
   "caption": "How each instrument works in a rule statement.",
   "cols": [
    "Instrument",
    "Binding?",
    "How to use it"
   ],
   "rows": [
    [
     "Treaty in force",
     "Yes, on parties",
     "Interpret under arts. 31–32"
    ],
    [
     "Signed, not ratified",
     "Art. 18 duty only",
     "Don’t defeat object and purpose"
    ],
    [
     "UNSC Ch. VII decision",
     "Yes, all members",
     "Arts. 24, 25, 48, 103"
    ],
    [
     "UNGA resolution",
     "No",
     "Evidence of CIL: run the indicia"
    ],
    [
     "ICJ judgment",
     "Parties, that case",
     "Art. 59; persuasive elsewhere"
    ],
    [
     "Advisory opinion",
     "No",
     "States existing law"
    ],
    [
     "ILC draft (ARSIWA)",
     "No, as a text",
     "Define CIL; provisions reflect CIL"
    ],
    [
     "MOU",
     "No",
     "No intent to bind"
    ]
   ]
  },
  {
   "title": "Jus Cogens vs. Custom",
   "kind": "compare",
   "caption": "Why a “super custom” is different.",
   "cols": [
    "",
    "Custom",
    "Peremptory norm"
   ],
   "rows": [
    [
     "Scope",
     "Can bind as few as two states",
     "Generally applicable"
    ],
    [
     "Origin",
     "State practice",
     "Natural law"
    ],
    [
     "Subject matter",
     "Can be small",
     "Large fundamental values"
    ],
    [
     "Consent",
     "Persistent objector escapes",
     "Binds regardless of consent"
    ],
    [
     "Treaty conflict",
     "Later treaty can displace",
     "Treaty void (arts. 53, 64)"
    ]
   ]
  }
 ],
 "cards": [
  [
   "Art. 38(1)(a)–(d)",
   "Conventions; custom; general principles; judicial decisions and publicists (subsidiary, subject to art. 59)."
  ],
  [
   "ICJ Statute art. 59",
   "A decision binds only the parties and only in that case."
  ],
  [
   "Lotus principle",
   "Restrictions on state independence cannot be presumed; rules come from states’ free will."
  ],
  [
   "UNGA resolution: law-making indicia",
   "General legal obligations; unanimous; “solemnly declares”; followed by state practice."
  ],
  [
   "Why UNSC resolutions bind",
   "Charter arts. 24, 25, 48, and 103 (Charter prevails over other agreements)."
  ],
  [
   "Five routes to contentious jurisdiction",
   "Treaty clause 36(1); optional clause 36(2); compromis; informal consent; PCIJ clause 36(5)/37."
  ],
  [
   "Art. 36(6) and art. 41",
   "Court decides its own jurisdiction; provisional measures bind."
  ],
  [
   "Advisory opinion: two-part inquiry",
   "(1) authorization by treaty (Charter art. 96 + Statute art. 65(1)); (2) propriety."
  ],
  [
   "Finding the ICJ holding",
   "The sentence after argument and counterargument: “The Court notes / observes / finds…”"
  ],
  [
   "VCLT art. 2(1)(a)",
   "International agreement between states, in writing, governed by IL, whatever its name."
  ],
  [
   "Two screens for a treaty",
   "Governed by international law + intention to create binding obligations."
  ],
  [
   "VCLT arts. 34–36",
   "No obligations without express written acceptance (35); rights presumed accepted (36)."
  ],
  [
   "VCLT art. 18",
   "Signatory must not defeat the treaty’s object and purpose before ratifying."
  ],
  [
   "Art. 19 reservation bars",
   "Prohibited by treaty; not among the permitted ones; incompatible with object and purpose."
  ],
  [
   "Material breach (art. 60(3))",
   "Repudiation, or violating a provision essential to object and purpose. Importance of provision, not size of breach."
  ],
  [
   "Rebus sic stantibus (art. 62)",
   "Unforeseen change of a circumstance that was an essential basis of consent. Not for boundary treaties."
  ],
  [
   "Void vs. voidable",
   "Void: coercion of a state, jus cogens conflict. Voidable: internal law, excess authority, error, fraud."
  ],
  [
   "VCLT art. 31(1)",
   "Ordinary meaning + context + object and purpose, in good faith."
  ],
  [
   "VCLT art. 32 trigger",
   "Primary tools leave meaning ambiguous/obscure or manifestly absurd/unreasonable."
  ],
  [
   "CIL elements",
   "State practice (widespread, representative, consistent) + opinio juris."
  ],
  [
   "Persistent objector requirements",
   "During formation; clearly articulated; made known; maintained. Useless against jus cogens."
  ],
  [
   "Codification / crystallization / generation",
   "Treaty records existing CIL / completes emerging CIL / sparks new CIL (ILC Concl. 11)."
  ],
  [
   "North Sea holding",
   "Art. 6 equidistance wasn’t CIL: not existing, not created, not later adopted, no independent practice."
  ],
  [
   "VCLT art. 53",
   "Peremptory norm: accepted by the community of states as a whole as non-derogable; modifiable only by a like norm."
  ],
  [
   "ILC Concl. 6",
   "Proving CIL doesn’t prove peremptory status: need separate acceptance of non-derogability."
  ],
  [
   "Serious breach of jus cogens: third states",
   "Cooperate to end it; don’t recognize as lawful; don’t aid or assist (Concl. 19; ARSIWA 41)."
  ],
  [
   "Montevideo",
   "Permanent population; defined territory; government; capacity for relations."
  ],
  [
   "Declaratory vs. constitutive",
   "Recognition affirms statehood (prevailing) vs. creates it."
  ],
  [
   "IO personality: four questions",
   "Permanent association; executive organs; distinct legal powers; powers exist generally."
  ],
  [
   "Nottebohm",
   "Genuine link required before others must recognize nationality for diplomatic protection."
  ],
  [
   "Barcelona Traction",
   "Only the corporation’s national state (incorporation / siège social) may espouse its claim."
  ]
 ],
 "quiz": [
  {
   "q": "A UNGA resolution passed 120–30 “Requests” states to stop a practice. On its own, the resolution is:",
   "o": [
    "Binding on all members under art. 25",
    "Binding only on states that voted yes",
    "Not binding, and weak evidence of CIL given its verbs and split vote",
    "Binding once registered under art. 102"
   ],
   "a": 2,
   "e": "GA resolutions don’t create binding obligations. Suggestive verbs and a non-unanimous vote are nonbinding indicia. Art. 25 is about Security Council decisions."
  },
  {
   "q": "State A signed but never ratified a treaty. Before deciding, it takes an act that would gut the treaty’s core purpose. Best argument against A?",
   "o": [
    "Pacta sunt servanda (art. 26)",
    "VCLT art. 18",
    "Material breach (art. 60)",
    "Art. 27: internal law is no excuse"
   ],
   "a": 1,
   "e": "Signature subject to ratification doesn’t establish consent to be bound, but art. 18 creates an interim duty not to defeat object and purpose."
  },
  {
   "q": "Which is NOT a way to consent to ICJ contentious jurisdiction?",
   "o": [
    "A compromissory clause in a treaty in force",
    "An optional-clause declaration under art. 36(2)",
    "Simply becoming a party to the ICJ Statute",
    "A special agreement for this dispute"
   ],
   "a": 2,
   "e": "Joining the Statute doesn’t submit a state to jurisdiction; further consent is required. It does bind the state to arts. 36(6) and 41."
  },
  {
   "q": "The WHO asks the ICJ whether using nuclear weapons is lawful. The Court should:",
   "o": [
    "Answer, because it’s a legal question",
    "Refuse, because the question is political",
    "Refuse, because the WHO treaty doesn’t authorize that request",
    "Answer only if the SC consents"
   ],
   "a": 2,
   "e": "Authorization comes first. The Court refused the WHO request for lack of authority; political aspects go only to propriety."
  },
  {
   "q": "Under VCLT art. 32, a party may consult the travaux préparatoires:",
   "o": [
    "Always, as a primary tool",
    "Only if art. 31 leaves meaning ambiguous or obscure, or manifestly absurd or unreasonable",
    "Only with consent of all parties",
    "Only for bilateral treaties"
   ],
   "a": 1,
   "e": "Supplementary means are gated by the art. 32 triggers. Primary tools are art. 31."
  },
  {
   "q": "A treaty is found to have been procured by coercing a state. The treaty is:",
   "o": [
    "Voidable if invoked",
    "Void",
    "Valid until terminated under art. 60",
    "Valid but unenforceable"
   ],
   "a": 1,
   "e": "Coercion of a state and conflict with a peremptory norm make a treaty void. Error, fraud, internal law, and excess of authority make it voidable."
  },
  {
   "q": "State B’s dam, essential to a water-sharing treaty, was destroyed by B’s own treaty violation. B invokes supervening impossibility. Result?",
   "o": [
    "Treaty terminates",
    "Suspended only",
    "B can’t invoke it: impossibility from its own breach is barred",
    "Automatically converts to rebus sic stantibus"
   ],
   "a": 2,
   "e": "Art. 61 must be invoked by a party and is barred where the impossibility results from that party’s own breach."
  },
  {
   "q": "Which is NOT a requirement for a persistent objector?",
   "o": [
    "Objection during formation",
    "Objection made known to other states",
    "Objection maintained persistently",
    "Objection formally registered with the UN Secretariat"
   ],
   "a": 3,
   "e": "The four: during formation, clearly articulated, made known, maintained. No registration requirement."
  },
  {
   "q": "State C shows its rule against X is followed by many states. Proving it is also peremptory requires:",
   "o": [
    "Nothing more",
    "Separate evidence of acceptance of its non-derogable character by a very large, representative majority",
    "Unanimous acceptance",
    "An ICJ judgment declaring it"
   ],
   "a": 1,
   "e": "ILC Concl. 6 (separate acceptance) and Concl. 7 (very large and representative majority, not all)."
  },
  {
   "q": "In North Sea, why hadn’t art. 6 passed into CIL after the Convention?",
   "o": [
    "Germany persistently objected",
    "Too few states adopted it and too little time elapsed",
    "It conflicted with a peremptory norm",
    "The ICJ lacked jurisdiction"
   ],
   "a": 1,
   "e": "The Court found too few adopters and not enough time. Separate reasons defeated codification, creation, and independent practice."
  },
  {
   "q": "An entity has a population, territory, and a weak but stable government, yet few states recognize it. Under the prevailing view:",
   "o": [
    "It can’t be a state until recognized",
    "Recognition affirms existing statehood (declaratory view)",
    "IO membership decides it",
    "It is a state only for treaty purposes"
   ],
   "a": 1,
   "e": "The declaratory view prevails. Recognition remains the best practical metric; effectiveness of government isn’t required."
  },
  {
   "q": "Liechtenstein naturalized a German national who lived in Guatemala for decades. Guatemala may refuse the claim because:",
   "o": [
    "Naturalization is never valid",
    "There is no genuine link",
    "Jus soli controls",
    "Individuals are subjects of IL"
   ],
   "a": 1,
   "e": "Nottebohm: others need not recognize nationality for diplomatic protection absent a genuine link."
  },
  {
   "q": "A Canadian company 88% owned by Belgians is harmed by Spain. Who may espouse the company’s claim?",
   "o": [
    "Belgium",
    "Canada",
    "Both",
    "Neither, individuals must sue"
   ],
   "a": 1,
   "e": "Barcelona Traction: the company’s national state (incorporation or registered office), not the shareholders’ state, absent an exception."
  },
  {
   "q": "Which is a peremptory norm on the ILC’s non-exhaustive list?",
   "o": [
    "Diplomatic immunity",
    "Freedom of the high seas",
    "Prohibition of torture",
    "Pacta sunt servanda"
   ],
   "a": 2,
   "e": "ILC list: aggression, genocide, crimes against humanity, basic IHL, racial discrimination and apartheid, slavery, torture, self-determination."
  },
  {
   "q": "An exam packet includes the Draft Articles on State Responsibility. Your rule statement should:",
   "o": [
    "Run the VCLT interpretation rundown",
    "Define CIL and state that the provisions reflect CIL",
    "Say it’s binding under art. 38(1)(a)",
    "Ignore it as non-binding"
   ],
   "a": 1,
   "e": "An ILC product isn’t an in-force treaty. Define CIL up front and treat the provisions as reflecting CIL."
  },
  {
   "q": "Nuclear Weapons AO: how did the Court treat ICCPR art. 6 in wartime?",
   "o": [
    "Suspended entirely",
    "Applies, but arbitrariness is judged by the lex specialis, the law of armed conflict",
    "Displaces the law of armed conflict",
    "Applies only to civilians"
   ],
   "a": 1,
   "e": "The right to life doesn’t cease in war; what counts as arbitrary is measured through LOAC."
  },
  {
   "q": "Which condition applies to an IO’s legal personality?",
   "o": [
    "It exists automatically for any IO",
    "Read the establishing treaty; ask permanence, organs, distinct powers, general existence",
    "Only UN specialized agencies have it",
    "It requires Security Council recognition"
   ],
   "a": 1,
   "e": "IO personality isn’t automatic. Reparation for Injuries recognized the UN’s capacity to bring claims."
  }
 ],
 "drills": [
  {
   "title": "Binding or Not?",
   "prompt": "Is the instrument legally binding as stated?",
   "cats": [
    "Binding",
    "Not binding"
   ],
   "items": [
    [
     "UNSC resolution “Acting under Chapter VII” that decides members shall freeze assets",
     "Binding",
     "Arts. 24, 25, 48, 103."
    ],
    [
     "UNGA resolution adopted unanimously “solemnly declaring” principles",
     "Not binding",
     "Still not binding alone; strong evidence of CIL."
    ],
    [
     "ICJ judgment, as applied to a non-party in a later case",
     "Not binding",
     "Art. 59: binds the parties to that case only."
    ],
    [
     "ICJ provisional measures order against a party",
     "Binding",
     "Art. 41 measures bind."
    ],
    [
     "An MOU whose text says it records “political commitments only”",
     "Not binding",
     "No intention to create legal obligations."
    ],
    [
     "A treaty obligation, on a third state that never accepted it in writing",
     "Not binding",
     "Art. 35 requires express written acceptance."
    ],
    [
     "A treaty right, for a third state that stays silent",
     "Binding",
     "Art. 36: assent to a right is presumed."
    ],
    [
     "An ICJ advisory opinion",
     "Not binding",
     "States existing law; creates no new obligations."
    ]
   ]
  },
  {
   "title": "Void or Voidable?",
   "prompt": "What happens to the treaty?",
   "cats": [
    "Void",
    "Voidable"
   ],
   "items": [
    [
     "Conflicts with a peremptory norm at conclusion",
     "Void",
     "Art. 53: void in whole."
    ],
    [
     "Negotiator exceeded internal constitutional limits",
     "Voidable",
     "Art. 46: must be invoked; controversial."
    ],
    [
     "State was coerced by threat of force",
     "Void",
     "Art. 52."
    ],
    [
     "Based on a mistaken essential fact",
     "Voidable",
     "Art. 48 error."
    ],
    [
     "State fraudulently induced to sign",
     "Voidable",
     "Art. 49 fraud."
    ],
    [
     "New peremptory norm emerges that conflicts",
     "Void",
     "Art. 64: becomes void and terminates."
    ]
   ]
  },
  {
   "title": "Which CIL Route?",
   "prompt": "How does the treaty provision relate to custom?",
   "cats": [
    "Codification",
    "Crystallization",
    "Generation"
   ],
   "items": [
    [
     "Provision records a rule states already followed as law before the treaty",
     "Codification",
     "Already existing when concluded."
    ],
    [
     "Rule was emerging; the treaty’s adoption completes it",
     "Crystallization",
     "Completes an emerging rule."
    ],
    [
     "Provision was new, then widespread practice + opinio juris followed",
     "Generation",
     "Treaty gives rise to new custom."
    ]
   ]
  }
 ],
 "hypos": [
  {
   "title": "The Fishing Treaty",
   "facts": "Arcadia and Borealis are parties to a fisheries treaty. Corvia signed but never ratified. The treaty caps catches and sends disputes to the ICJ. Corvia, which filed no optional-clause declaration, triples its catch. Arcadia sues Corvia at the ICJ.",
   "ask": "Does the ICJ have jurisdiction, and is Corvia bound by the cap?",
   "answer": [
    "Jurisdiction: consent is required (art. 36). Corvia isn’t bound by the treaty’s dispute clause (not in force for it) and made no 36(2) declaration. Absent a compromis or informal consent, no jurisdiction.",
    "Treaty: signature isn’t consent to be bound; the cap binds Corvia only via art. 18 (don’t defeat object and purpose): tripling the catch is a strong argument.",
    "Custom: is the cap CIL? Need widespread, representative, consistent practice + opinio juris. A new catch limit looks like North Sea: likely innovative, few adopters.",
    "Conclusion: strong art. 18 argument on the merits; jurisdiction is the weak point."
   ]
  },
  {
   "title": "The Declaration",
   "facts": "The GA adopts, 150–0, a declaration that “solemnly declares” states shall not dump nuclear waste at sea. Twenty years of state practice follows it. Dumpstan voted against a draft version in committee and has protested every year since.",
   "ask": "Is Dumpstan bound?",
   "answer": [
    "The resolution isn’t binding alone, but the law-making indicia (unanimous adoption, “solemnly declares,” general obligation, later practice) support CIL.",
    "Dumpstan’s persistent-objector claim: objected during formation, clearly, publicly, and every year. Likely not bound, if the objection predates formation.",
    "Counter: argue the rule is peremptory (then no persistent objector). Weak: it isn’t on the ILC list and needs separate acceptance of non-derogability (Concl. 6)."
   ]
  }
 ]
};
