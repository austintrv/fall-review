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
   "overview": [
    "This unit covers how Professor Mirasola wants an exam answer built. The midterm is one essay question with a word limit; the final has more than one. Each question hands you a fact pattern and a primary source packet (treaties, statutes, resolutions, court excerpts), and you write a memo to a named audience.",
    "The big question this unit answers: how do you turn a prompt and a stack of sources into a graded answer? The answer has three parts. First, break the prompt into its discrete legal questions. Second, figure out what kind of authority each source is, because that decides which framework (treaty interpretation, CIL (customary international law), jurisdiction, legal personality) you run. Third, write each question as Rule Statement, Analysis, Conclusion, with counterarguments and missing facts called out.",
    "The professor says IL (international law) requires a change in mindset as much as black letter law. The four mindset shifts explain why domestic-law habits (looking for a court, assuming every wrong has a remedy, treating every actor like a state) lead to wrong answers here.",
    "This matters on the exam because the answer keys grade structure as much as substance. In the Fall 2025 midterm, most students skipped steps the key expected (for example, attributing conduct to a state before discussing consequences). The class average was 50.8 out of 100."
   ],
   "check": {
    "status": "complete",
    "note": "Built from the outline Part A–E, Class 1 slides (mindset shifts, assessments), the Fall 2025 Midterm Answer Key, the Practice Final Exam answer key, the SP2025 Final Exam Memo to Class, and Practice Assignment 1 answer key. No file titled 'IL Class Expectations' was found in Drive; the professor's guidance on structure comes from the answer keys and the midterm guidelines."
   },
   "blocks": [
    {
     "title": "Exam Format and Grading",
     "explain": [
      "The Class 1 slides lay out the assessments. Knowing the format tells you how to budget words: the midterm is one essay with a word limit, so every sentence has to earn its place.",
      "The professor's answer keys say they present the full range of what you might raise, and that covering all of it would often exceed the word count. You can do well without hitting every point, though the exam is curved."
     ],
     "items": [
      [
       "Midterm (15%)",
       "Monday, October 19, in class. Open note, but 'closed' on EBB (the exam software), so no internet. You work alone. One essay question with a word limit. The professor describes it as a check-in on whether you can deploy the generally applicable tools of IL.",
       [
        "The Fall 2025 midterm guidelines capped the full response at 2,000 words: 'After this point, I will stop reading.'",
        "The professor wrote that the first two blocks of the course are the most difficult, and that fitting domestic statutes, custom, and treaties together is what makes IL hard."
       ]
      ],
      [
       "Final (65%)",
       "Three hours, same format as the midterm, with more than one question. The SP2025 final had three questions with word limits of 1,100, 1,400, and 1,100 words, each written to a different audience."
      ],
      [
       "In-Class Group Exercise (10%)",
       "September 23 (Class 9). Graded pass/fail, open book, not on EBB, done in groups or alone. It is practice with the foundational material and the exam format."
      ],
      [
       "Participation (10%)",
       "Showing up, being on call, and completing in-class assignments."
      ],
      [
       "Practice materials",
       "Past exams and practice assignments are on Canvas. The professor recommends doing the practice assignments using only the source packet and your notes, to simulate the exam, and reviewing answers with a tutor."
      ]
     ],
     "tip": "Midterm guidelines also say: write in complete, grammatically correct sentences, and the professor reserves the right to deduct points for excessive acronyms or for clipping grammar to get under the word count.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Answer Architecture",
     "explain": [
      "Every discrete legal question in the prompt gets its own Rule Statement, Analysis, and Conclusion. The midterm guidelines call this IRAC form and require headers where there are multiple issues.",
      "The rule statement does more work in IL than in a domestic exam, because you have to show why the source binds these parties at all. A treaty only binds parties to it; an ILC (International Law Commission) draft only matters if it reflects custom; a court decision only binds the parties to that case. You establish that before applying anything.",
      "The conclusion grades the strength of each position. The Practice Final key concluded: 'Strong case for attributing the actions of Norland to Norland (but this isn't the hard part). At best a mediocre case for attributing VLF action to Norland.'"
     ],
     "items": [
      [
       "Rule Statement → Analysis → Conclusion",
       "Run the full sequence once for each discrete legal question in the prompt. If the prompt asks three things, you write three of these, each under its own header."
      ],
      [
       "Rule statement",
       "Name the instrument, establish why it binds these parties, and flag competing interpretations before applying anything.",
       [
        "Name the instrument: say which treaty, statute, draft article, or decision supplies the rule.",
        "Why it binds: for a treaty, that it is in force between these parties; for an ILC product, that it reflects CIL; for a tribunal decision, that it is persuasive only.",
        "Competing interpretations: if tribunals have read the rule differently (for example, 'effective control' under Nicaragua versus 'overall control' under Tadić for ARSIWA art. 8), state both tests up front."
       ]
      ],
      [
       "Analysis",
       "Write a subsection per issue, and take the easier standard first, then the harder one.",
       [
        "Practice Final example: first attribute Norland's own military strikes from April 10 under ARSIWA (Articles on Responsibility of States for Internationally Wrongful Acts) art. 4, which covers state organs and is the easier standard; then address whether the VLF's acts can be attributed to Norland under art. 8, which is the harder case."
       ]
      ],
      [
       "Counterarguments",
       "Address every substantial counterargument and keep it clearly distinguished from the main argument (for example, under a 'Counterargument' label).",
       [
        "The professor's method: once you find a plausible path to the result, ask 'what could prevent this?' In the midterm, after finding jurisdiction under the War Crimes Act, the key expected the counterargument that the Community could assert immunity for its forces.",
        "Practice Assignment 1 example: nothing in Article 14 expressly bars Slovakia from over-withdrawing and accepting the power-sharing penalty in paragraph 3; Hungary responds that paragraph 3 covers incidental overages, not a permanent 20% increase."
       ]
      ],
      [
       "Missing facts",
       "State which additional facts you need and how each would change the analysis.",
       [
        "Practice Final example: the date Norland lodged its Rome Statute withdrawal in 2024 decides whether the ICC (International Criminal Court) still had jurisdiction, because withdrawal takes effect one year after filing.",
        "SP2025 Final example: past practice under the Arctic Stability Council treaty (have states recognized similar actions before?) would carry substantial weight in interpreting its powers."
       ]
      ],
      [
       "Conclusion",
       "State how strong the case is, not just what the rule is (\"strong case for X; at best a mediocre case for Y\"). The professor often says he was 'open to argument,' so a reasoned conclusion either way earns credit; an unstated one does not."
      ]
     ],
     "tip": "Not every provision must be cited. The packet supplies more than the answer needs on purpose, which leaves material for contextual treaty interpretation (reading one provision in light of the rest of the treaty).",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Dissecting a Prompt",
     "explain": [
      "This is the reading order the outline sets out for any prompt. The point is to know what you are looking for before you read the facts, so that details which matter legally stand out.",
      "The midterm key stresses breaking down the 'call of the question.' The professor says IL requires you to be 'super exacting' about the words of the question, because similar-looking questions ask for different bodies of law. 'What judicial relief is available' asks about courts and tribunals. 'What obligations do other states have' asks about state responsibility, with no court involved."
     ],
     "items": [
      [
       "Step 1 · Read the questions first",
       "Read the questions before the fact pattern. They tell you which materials and facts matter.",
       [
        "Who is the audience? The exams assign a role (a Senate committee staff attorney, an ICRC (International Committee of the Red Cross) staff attorney, a human rights NGO lawyer, a foreign ministry lawyer), and that shapes which issues the memo should cover.",
        "What kind of actor is at issue? Identify its status under IL and the rights and duties it has, if any (state, international organization, armed group, individual, corporation).",
        "Questions that look alike ask different things. Spotting how they differ is a core competency."
       ]
      ],
      [
       "Step 2 · Read the facts",
       "Read the fact pattern and note changes in how an actor behaves over the course of it.",
       [
        "Shifts in behavior often mark a legal turning point. In the Practice Final, Norland's conduct before April 10 (training and equipping the VLF) raised an art. 8 attribution question, while its own missile strikes from April 10 were directly attributable under art. 4."
       ]
      ],
      [
       "Step 3 · Read the questions again",
       "Terms or actors that now look newly significant send you back to those facts. Then identify the legal rules that apply."
      ],
      [
       "Step 4 · Source packet → outline",
       "Go to the primary source packet, then your outline. Every source in the packet is used, but not all to the same degree. Map each question to one of the three blocks of the course.",
       [
        "Midterm key example: to ask whether an international organization's decision was defective, first ask what authority the organization has. That question is answered by reading the treaty that created it."
       ]
      ]
     ],
     "multi": true,
     "tip": "Midterm key: 'Where does this authority come from' is always a question in IL, because the powers of actors are rarely settled the way they are in domestic law.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "The Three Blocks",
     "explain": [
      "The course is organized into three blocks, and every exam question draws on at least one. Mapping a question to its block tells you which part of the outline to pull from.",
      "Block 1 supplies the tools you use in every answer. Block 2 tells you what a particular actor can do and what it owes. Block 3 supplies the substantive rules that the facts may have broken. The midterm covers Blocks 1 and 2."
     ],
     "items": [
      [
       "Block 1 · Methods",
       "The 'methods' of IL analysis: sources, adjudication, treaties, CIL, general principles, and peremptory norms. These are the tools for figuring out what the law is and whether it binds someone."
      ],
      [
       "Block 2 · Characterizing actors",
       "Characterizing the rights, duties, and obligations an international actor can have: legal personality, nationality, jurisdiction, immunity, and state responsibility."
      ],
      [
       "Block 3 · Substantive rules",
       "The substantive rules: use of force, laws of war, human rights, international criminal law, and economic law."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Analyzing Primary Sources",
     "explain": [
      "Before reading a source for substance, ask what kind of material it is. The type tees up which 'meta-rules' (the analytic framework, as opposed to the substance) apply. Practice Assignment 1 asked exactly this: for each document in the packet, name the meta-rules you would use to interpret it.",
      "Next, read for substance and draw connections: between separate parts of one document, and between documents. The answer keys reward spotting how two instruments interact, such as a founding treaty and a later protocol."
     ],
     "items": [
      [
       "Treaty",
       "→ treaty interpretation. Run VCLT (Vienna Convention on the Law of Treaties) art. 31: ordinary meaning of the term, its context (all treaty text, including the preamble, and related agreements), and the treaty's object and purpose, applied in good faith."
      ],
      [
       "Domestic legislation",
       "→ jurisdiction, and possibly immunities. A domestic statute in the packet (such as an Alien Tort Statute or War Crimes Act) raises whether the state can apply its law to this conduct, and whether the defendant can claim immunity.",
       [
        "Midterm key: an excellent answer tied the War Crimes Act's jurisdictional hooks to the international bases for criminal jurisdiction (territorial, nationality, and universal)."
       ]
      ],
      [
       "ILC draft / non-binding instrument",
       "→ establish that it reflects CIL, and define CIL. An ILC draft is not an in-force treaty, so it binds only to the extent its provisions restate custom. Define CIL and say these provisions are understood to reflect it."
      ],
      [
       "Two treaties",
       "→ how they relate to each other.",
       [
        "Midterm key: the Compact was about economics, but the Additional Protocol addressed military deployment. The later-in-time rule, plus the Protocol's own clause that conflicts are 'read in favor of this Protocol,' meant the Protocol's text controlled."
       ]
      ],
      [
       "Treaty establishing an IO",
       "→ whether the IO (international organization) has international legal personality.",
       [
        "Both the Fall 2025 midterm and the SP2025 final turned on this. The keys expected: the organization's powers come from its founding treaty; then test legal personality (a permanent association of states, distinct from its members, with powers under international law); then read the treaty for the scope of its privileges and immunities."
       ]
      ]
     ],
     "tip": "Doctrinal connections, not fact patterns: every source relates to a topic covered in class. If a source looks out of place, ask which class topic it was put there to trigger.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Four Mindset Shifts",
     "explain": [
      "The professor introduced these on day one as the habits a domestic-law student has to drop. Each one connects to a trap in the exam prompts.",
      "Shifts 1 and 2 are about courts and remedies: most of IL happens between states without a court, and a breach may have no remedy. Shift 3 is the structure of obligation: start from state freedom and add limits. Shift 4 is about actors: rules built for states do not automatically apply to anyone else."
     ],
     "items": [
      [
       "#1 IL exists primarily outside courts",
       "Obligations are incurred and duties run between actors without anything going through an adjudicative process. IL is best understood as a language for describing rights, duties, and obligations.",
       [
        "The word 'judicial' in a prompt matters. It signals that you are thinking about law in a tribunal or court (domestic or international), which is not usually where IL is considered.",
        "Midterm key: 'judicial relief' pointed to three tribunals in the packet (Northern Great Basin courts under its Alien Tort Statute, Aridian courts under its War Crimes Act, and the Community's own court). The question about state obligations, by contrast, called for state responsibility with no court at all."
       ]
      ],
      [
       "#2 Not every wrong has a remedy",
       "The common law presumes ubi jus ibi remedium ('for every wrong, the law provides a remedy'). That presumption does not hold in IL. An act can be wrongful without any relief for an individual or a state.",
       [
        "The word 'relief' in a prompt matters. It orients you to something particular, such as compensation or a judicial process.",
        "Midterm key conclusion on judicial relief for the civilians: 'not a great outlook.' That is an acceptable answer in IL."
       ]
      ],
      [
       "#3 IL is a layer cake",
       "Build the analysis in layers. Start with the assumption that states may do anything they want. Layer on peremptory norms (baseline prohibitions no state can escape). Layer on the obligations states take on, in two flavors: treaty and custom. The rest is icing: tribunal decisions, which are not necessary to the cake and not always present, but nice to have.",
       [
        "The base layer reflects the Lotus principle from Intro & Theories: restrictions on states 'cannot be presumed,' so you need a source for every limit."
       ]
      ],
      [
       "#4 State rights don't transfer automatically",
       "States hold a predominant, unique position in IL. You cannot assume that international organizations, individuals, or corporations have the same rights and duties as states.",
       [
        "The analogy: treating them alike would be like giving a kitten the rights of a human. We may love kittens, but they are not the same for legal purposes.",
        "Midterm key: many students applied the articles of state responsibility to the Community, an IO. Those articles are rules for states only; a separate body of law on IO responsibility was not taught, so the only tool for the IO was its own treaty."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Standing Rule-Statement Moves",
     "explain": [
      "These are the recurring opening moves the answer keys expect, organized by type of source. Each begins with 'source first': say what kind of authority this is and why it binds these parties.",
      "The detailed rules behind each move (treaty interpretation, CIL elements, resolution indicia, the ILC peremptory norm list) live in their own units. This block is the checklist for which one to deploy when."
     ],
     "items": [
      [
       "Source first",
       "Every rule statement begins by saying what kind of authority this is and why it binds these parties."
      ],
      [
       "Treaty",
       "Ask whether it is in force between these parties and whether any party filed a reservation. Then run the rules of treaty interpretation the first time a treaty is interpreted in the answer, and refer back to that recitation afterward instead of repeating it.",
       [
        "The Practice Final key opens its human-rights section with treaty interpretation 'since this is the first time you'll be interpreting a treaty.'"
       ]
      ],
      [
       "ILC product (e.g., ARSIWA)",
       "A draft instrument or ILC product, such as the Draft Articles on State Responsibility, is not an in-force treaty, so skip the treaty-interpretation rundown. Instead define CIL up front and state that the provisions are understood to reflect CIL.",
       [
        "CIL has two parts: general state practice, and opinio juris (states follow the practice because they believe they are legally required to, not out of habit or courtesy).",
        "The SP2025 final key also credited noting that the ILC commentaries help flesh out the customary rule."
       ]
      ],
      [
       "Judicial/arbitral decision",
       "Not binding as a matter of IL. Under ICJ Statute art. 59, a decision of the Court has no binding force except between the parties and in respect of that particular case. For everyone else it is persuasive authority that gives greater detail to the legal framework.",
       [
        "Where tribunals have split, name both tests and apply each. ARSIWA art. 8 example: the ICJ in Nicaragua required 'effective control' (the specific operations were directed or enforced by the state; financing, training, and equipping were not enough), while the ICTY (International Criminal Tribunal for the former Yugoslavia) in Tadić accepted 'overall control' (coordination of military action, without specific instructions for each wrongful act).",
        "Practice Assignment 1: the Gabčíkovo-Nagymaros judgment was persuasive only in the new hypo because Slovakia's later dispute was a different case."
       ]
      ],
      [
       "UNGA resolution",
       "A UN General Assembly resolution is not binding standing alone, but it may be evidence of CIL. Run the resolution indicia: how many states adopted it and whether unanimously, the operative verbs ('solemnly declares' versus 'requests' or 'deplores'), whether it signals that the conduct is legally required, and whether later state practice supports it."
      ],
      [
       "Peremptory norm",
       "Define it as a norm from which no state can derogate, and list the relevant norms from the ILC list.",
       [
        "The ILC's non-exhaustive list: the prohibitions of aggression, genocide, crimes against humanity, the basic rules of international humanitarian law, racial discrimination and apartheid, slavery, and torture, plus the right of self-determination.",
        "Midterm key: the rogue brigade's execution of prisoners and burning of villages violated at least two peremptory norms, which triggered the special consequences (all states must cooperate to end the violation, must not recognize the resulting situation as lawful, and must not aid or assist in maintaining it)."
       ]
      ],
      [
       "Hierarchy",
       "A treaty obligation can prevail over an earlier-in-time CIL rule, but never over a peremptory norm. This is the layer cake in action: treaty and custom sit on top of peremptory norms and cannot cut beneath them.",
       [
        "Practice Final key: this is the place to note that the Rome Statute (a treaty) overrides CIL immunity for officials acting in their official capacity."
       ]
      ],
      [
       "Order of attack",
       "Dispose of the easy attribution or jurisdiction question first, then spend your words on the contested one."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Recurring Answer-Key Pointers",
     "explain": [
      "The answer keys contain several 'pause' notes where the professor explains what most students missed. These are added here from the Fall 2025 Midterm Answer Key, the Practice Final key, and the SP2025 Final memo because they recur across exams."
     ],
     "items": [
      [
       "Wind the analysis back to the beginning",
       "When a question involves state responsibility, start by characterizing the unlawful act, then attribute it to a state, then set out the consequences. On the midterm, nearly all responses skipped straight to consequences without attribution."
      ],
      [
       "Authority before compliance",
       "To ask whether an IO acted properly, first establish what powers its founding treaty gives it, then whether it followed the treaty's procedures (for example, a required voting majority). The midterm Q1 key split the question this way."
      ],
      [
       "Counterarguments as 'what could stop this?'",
       "After finding a plausible basis for relief, ask what could block it. The professor says this can feel like a fishing expedition at first and becomes second nature with practice."
      ],
      [
       "Political will is a real obstacle",
       "For criminal statutes such as a War Crimes Act, the keys note there is no private right of action: a prosecutor has to decide to bring the case. Stating that limit is part of a complete answer."
      ],
      [
       "Prior interpretation of a treaty",
       "A 'really nuanced' answer asks how the treaty has been interpreted in past practice, because similar past incidents that states accepted would carry substantial weight."
      ]
     ],
     "tip": "The SP2025 final memo notes that a majority of the class ran out of time on the last question. Budget words and time per question by its point value.",
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "Intro & Theories",
   "overview": [
    "This unit asks what international law is and why anyone follows it. Inside a country, a legislature makes law, courts interpret it, and police enforce it. Between countries there is none of that: about 193 sovereign states, none above the others. So IL has to make, interpret, and enforce rules in other ways, mainly through treaties, custom, and states' own self-interest.",
    "The unit then covers where IL came from (Roman law, medieval Europe, the rise of the modern state) and the theories that explain why IL binds. Natural law says some rules bind because they are right, whether or not states agree. Positivism says rules bind only because states consented, through treaties or custom. Critical approaches (New Stream, TWAIL) question whether IL is coherent or neutral at all.",
    "These theories matter on the exam because each one generates a type of argument. Positivism is the default: point to the instrument a state accepted. Natural law explains rules consent cannot account for, such as pacta sunt servanda and peremptory norms. The critical approaches supply counterarguments about whose interests a rule serves."
   ],
   "check": {
    "status": "complete",
    "note": "Built from the outline Part I, Class 1 slides, and Day 1 notes on Murphy ch. 1. The reading's sections on the international legal process and policy-oriented (realism) theories are redacted in the course copy, and neither the outline nor the slides cover them."
   },
   "blocks": [
    {
     "title": "What Makes IL Different",
     "explain": [
      "IL differs from domestic law in two ways. It is decentralized: no single source of law and no single sovereign that creates, interprets, or enforces it. And it is consent-based: rules must in some way be 'adopted' by states, so a state is normally bound only by restrictions it has affirmatively accepted.",
      "Murphy calls this the horizontal structure: about 193 nation-states, each fully sovereign, none subordinate to another or, as a general matter, to any supra-national organization. States accept restrictions when they see them as advancing their national interests.",
      "Since there is no legislature, court system, or police force over states, each governmental function gets done another way. The four items below show how."
     ],
     "items": [
      [
       "Decentralized",
       "No single source of law and no single sovereign responsible for creating, interpreting, or enforcing the law. Instead, IL performs those functions in a variety of ways."
      ],
      [
       "Consent-based",
       "A state is normally exposed only to restrictions it has affirmatively accepted. Rules must in some manner be 'adopted' by states."
      ],
      [
       "Legislation",
       "By treaty and custom, not a legislature. Treaties are express written agreements; custom is the practice states follow out of a sense of legal obligation."
      ],
      [
       "Adjudication",
       "Generally consensual. A court can hear a case against a state only if that state accepted jurisdiction in one of three ways.",
       [
        "Optional clause: a state declares in advance that it accepts ICJ (International Court of Justice) jurisdiction when sued by another state that has made the same declaration. Murphy counts 74 states.",
        "A treaty conferring jurisdiction: hundreds of treaties provide for the ICJ's jurisdiction over disputes under them.",
        "Agreement to submit the particular dispute: the states agree, after the dispute arises, to bring it to the Court."
       ]
      ],
      [
       "Interpretation",
       "Occurs over time through community practice, because no court exists to resolve grey areas. How the community of states responds to a claim settles what the rule means.",
       [
        "Murphy's example: the 2002 U.S. national security strategy claimed a right to use force preemptively against 'rogue states' with weapons of mass destruction. The largely unfavorable international reaction suggested that such a right may not exist in IL."
       ]
      ],
      [
       "Enforcement",
       "Through reciprocity, reputation, and collective security, rather than a central sanction.",
       [
        "Reciprocity: if one state breaks the rule, the other stops cooperating.",
        "Reputation: a state that breaks its agreements is seen as an untrustworthy partner, and others stop dealing with it.",
        "Collective security: states agree to band together against a rule-breaker (Murphy compares NATO art. 5)."
       ]
      ],
      [
       "Vertical and transnational layers",
       "Murphy adds that IL is not purely horizontal. States have created supra-national organizations that can make law binding on members (the E.U. is the strongest example, where some E.U. law applies directly and overrides national law), submitted to the compulsory jurisdiction of courts, and created enforcement organs such as the UN Security Council. A third dimension is persons (NGOs, corporations, officials, private citizens) operating across borders, who lobby, monitor compliance, and litigate to enforce IL."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Why States Comply",
     "explain": [
      "The Class 1 slides give three reasons states create and follow IL rules: self-interest, predictability, and values. Murphy's island hypothetical explains the self-interest reason in detail.",
      "Picture 193 people stranded on an island, none willing to give anyone power to make rules for the group. Two of them agree: 'whenever you give me two coconuts, I will light a fire for you.' Both gain more by cooperating than not. The question that matters to them is less whether the deal is technically 'legally' binding and more whether it leads to compliance."
     ],
     "items": [
      [
       "Self-interest",
       "States keep agreements because cooperating serves their interests, and breaking them costs more than it gains. The island hypothetical shows how this works without any central authority.",
       [
        "Reciprocity: if one person stops lighting fires, the other stops handing over coconuts. Unless interests change, there is no reason to deviate.",
        "Reputation: if you take the coconuts and refuse the fire, others see you as untrustworthy and stop making deals with you. Your short-term gain comes at the expense of long-term survival.",
        "General rules without a legislature: if everyone sees that a rule against physical attacks serves them, a non-aggression rule forms by consensus. Murphy compares UN Charter art. 2(4).",
        "Collective security: if the group agrees to gang up on an attacker, the rule has 'teeth,' because violations are deterred or dealt with quickly. Murphy compares NATO art. 5.",
        "State application: under the GATT, a state that breaks its trade commitments faces retaliation from the trading partner and reputational harm with others, so 'in most instances, the rational choice for a state is to abide by its trade agreements.'"
       ]
      ],
      [
       "Predictability",
       "Listed on the Class 1 slides as a reason states adopt and follow IL rules."
      ],
      [
       "Values",
       "Listed on the Class 1 slides as a reason states adopt and follow IL rules."
      ]
     ],
     "check": {
      "status": "thin",
      "note": "The slides list 'predictability' and 'values' as reasons for compliance without explanation. The Day 1 notes and Murphy ch. 1 explain only the self-interest reason (island hypothetical). No source found that explains the other two."
     }
    },
    {
     "title": "Is IL Law?",
     "explain": [
      "The slides give three possible answers. The disagreement comes from what you think makes something 'law.' If law requires a sovereign who can force compliance, IL fails the test. If law is a set of rules actors treat as binding and mostly follow, IL passes.",
      "Murphy's reading places three legal philosophers along this spectrum. Their views still have followers, and the debate gets more complicated once you add the 'vertical' features of modern IL (the E.U., compulsory courts, the Security Council)."
     ],
     "items": [
      [
       "No",
       "There is no single sovereign, and law requires an explicit or implicit threat of force to ensure compliance.",
       [
        "John Austin (1832) held this view: law is a command issued by a sovereign and backed by a sanction. Because international society has no overarching sovereign, he saw IL as a collection of moral rules."
       ]
      ],
      [
       "Yes",
       "IL sits on top of domestic law and creates rules of conduct that states (more or less) adhere to.",
       [
        "Hans Kelsen saw IL as monist and at the top of a global legal order, with national legal systems as a subsidiary part."
       ]
      ],
      [
       "Kinda",
       "IL supplies abstract principles, but not the specific rules of enforceable behavior found in domestic systems.",
       [
        "H.L.A. Hart (1961) sat between the two. IL has 'primary rules' (obligations, such as trading coconuts for fire) but lacks the 'secondary rules' (rules on how primary rules change and how they are interpreted) needed for a true legal system."
       ]
      ],
      [
       "Do supra-national bodies change the answer?",
       "The Day 1 notes record points from the reading cutting each way. For: the E.U., compulsory ICJ jurisdiction, and Security Council sanctions supply the legislation, adjudication, and sanction that Austin and Hart said were missing. Against: the E.U. is the outlier, other organizations 'typically have less sweeping powers,' only 74 of about 193 states accept optional clause jurisdiction, and the U.K.'s 2020 withdrawal from the E.U. shows delegation can be revoked."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Historical Roots",
     "explain": [
      "The structure and language of IL come mainly from Roman law, which falls roughly into three buckets. Jus gentium, the law between Romans and foreigners, is the ancestor of IL.",
      "Murphy notes that Roman jus gentium had nothing to do with relations among 'states' as we know them. It governed non-Romans living within the empire. Its real influence came later: when 16th- and 17th-century European scholars needed a foundation for IL, they borrowed from Roman private law because it was respected across Catholic and Protestant Europe. Property rules became rules on territorial sovereignty, contract rules became the law of treaties, and rules on delegated authority became rules on representation."
     ],
     "items": [
      [
       "Jus civile",
       "Law that applied only to Romans, on matters like contract."
      ],
      [
       "Jus gentium",
       "Law that applied between Romans and foreigners, both within the Roman world and beyond. The 'granddaddy' of IL."
      ],
      [
       "Jus naturale",
       "Natural law: the philosophical backbone for both jus civile and jus gentium. See the Natural Law block."
      ],
      [
       "Middle Ages",
       "Jus gentium expanded, with particular influence from Catholic doctrine. Murphy adds that Saint Augustine and Saint Thomas Aquinas developed the 'just war' doctrine, which shaped the later law of war and peace, and that merchants' customs (the lex mercatoria) and maritime customs (the lex maritima) formed transnational bodies of law."
      ],
      [
       "1500s–1700s",
       "European religious wars and the beginning of European imperialism brought the modern concept of the state into the picture. This period produced the backbone of modern IL that persists today.",
       [
        "Peace of Westphalia (1648): ended the Thirty Years War and solidified territorial states, whose authority over a territory and its people was acknowledged regardless of the government's religion. 1648 is typically chosen as the year IL 'began,' though it had antecedents.",
        "Gentili moved IL away from theology and toward Roman law, which both Catholics and Protestants respected.",
        "Grotius, typically called the 'father of international law,' wrote De Jure Belli ac Pacis (1625), the first system of IL widely accepted among European states. His theory sits more in the natural law tradition.",
        "Vattel and Zouche marked a shift toward positivism: studying what states do in practice, including their treaty practice."
       ]
      ],
      [
       "Rise of positivism and the modern period",
       "After 1700, states and scholars looked less to natural law and more to sovereign consent through treaty or custom. Custom filled the gaps when treaties were sparse; by the 20th century treaties dominated and custom filled gaps. IL then widened (spreading beyond Europe as colonies became states, from 45 states in 1945 to at least 193) and deepened (thousands of treaties on subjects from extradition to patents)."
      ]
     ],
     "tip": "The professor said the history in Murphy ch. 1 is for familiarity and would not be a focus of class discussion. The three Roman buckets and the 1500s–1700s rise of the state are what the slides and outline keep.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Natural Law",
     "explain": [
      "Natural law holds that law must reflect fundamental principles of right and wrong. The rules logically deduced from those morally correct first principles are what IL is trying to find. Bottom line: what is morally wrong cannot be law, and what is irrational cannot be law.",
      "For a natural law theorist, these principles are fixed and universal; they do not change with states' politics or cultures. They are found through 'right reason,' by asking what is inherent in a society of states and in human nature, rather than by studying what states have enacted. Early IL scholars (Vitoria, Suárez, Grotius, Pufendorf) relied heavily on it.",
      "Overt reliance on natural law fell into disrepute with the rise of positivism, yet Murphy says it 'continues to lurk beneath the surface of international law.' That is why the mode of reasoning cannot be avoided entirely."
     ],
     "items": [
      [
       "Argument it generates",
       "\"This obligation binds regardless of consent, because it follows from first principles no state can contract out of.\""
      ],
      [
       "Pacta sunt servanda",
       "'Agreements must be kept': all states are bound by the treaty obligations they adopt, and must perform them in good faith (VCLT art. 26). Murphy calls it a grundnorm (foundational principle) of treaty law.",
       [
        "Why it is a natural law rule: the rule cannot rest on consent alone, because a state bound only by consent could withdraw it. Saying states consented through a 'treaty on treaties' does not solve the problem, because then something has to bind them to that treaty.",
        "Murphy concludes there must be some first principles separate from state consent. He lists others: the independence and legal equality of states, the duty of non-intervention, and the right of self-defense."
       ]
      ],
      [
       "Peremptory norms",
       "Rules of IL from which states cannot detract, no matter their practice or the treaties they agree to (jus cogens, VCLT art. 53). Some rules, such as the abhorrence of genocide, reflect fundamental beliefs worldwide and are 'best viewed as not solely anchored in' state consent.",
       [
        "Murphy: most scholars see these norms as limited in number, but 'the belief that they exist may reflect the enduring influence of the natural law tradition.'",
        "Class note: peremptory norms differ from ordinary custom because they are absolute rules no country can break, while ordinary custom is general practice that countries can change through new agreements."
       ]
      ],
      [
       "Other places natural law survives",
       "Murphy names two more.",
       [
        "Intellectual heritage: rules protecting civilians in war, now in the 1949 Geneva Conventions and 1907 Hague Regulations, trace back to Deuteronomy and medieval 'just war' doctrine.",
        "Gap-filling and change: when no treaty or custom answers a question, decision-makers turn to equity, justice, or fairness. The Nuremberg tribunal convicted defendants of 'crimes against peace' and 'crimes against humanity' without a treaty or clear custom creating those crimes, and many observers see the judgment as resting most securely on natural law."
       ]
      ],
      [
       "Challenge",
       "The central problem is identifying which rules natural law compels. You can claim universal norms exist, but states disagree about which ones exist and what they say, which produces uncertainty and instability in relations between states."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Legal Positivism",
     "explain": [
      "Positivism treats law as the product of state practice, regardless of the rightness or logic of that practice. It is reflected in the treaties (express consent) and customs (tacit consent) states have agreed to adopt. A state is bound because it affirmatively consented, and for no other reason.",
      "It arose as the answer to natural law's problem: since states disagree about universal norms, they prefer rules established through their own 'positive' practice. The natural law theorist asks what the law ought to be; the positivist asks what the law is, through systematic study of ratified treaties and state practice.",
      "Most IL lawyers think like positivists. They are more comfortable analyzing rules arising from affirmative acceptance than speculating about rules derived from 'right reason.'"
     ],
     "items": [
      [
       "Argument it generates",
       "\"Point to the instrument the state actually accepted; absent that, there is no restriction.\""
      ],
      [
       "Lotus principle",
       "From the S.S. Lotus case (France v. Turkey, PCIJ (Permanent Court of International Justice) 1927): IL governs relations between independent states, and the rules binding them 'emanate from their own free will,' expressed in conventions or in usages generally accepted as law. Therefore 'restrictions upon the independence of States cannot be presumed.'",
       [
        "Practical meaning: a state is free to act unless you can show a treaty or custom that limits it. This is the bottom layer of the layer cake.",
        "Murphy also quotes Judge Guillaume in the 1996 Nuclear Weapons advisory opinion: IL 'rests on the principle of the sovereignty of states and thus originates from their consent.'"
       ]
      ],
      [
       "Torture example",
       "How a positivist analyzes whether state-sponsored torture violates IL. Instead of asking whether torture violates fundamental human rights regardless of practice (the natural law question), the positivist runs a consent checklist.",
       [
        "Have states enacted a treaty containing a provision prohibiting the conduct?",
        "Is the offending state a party to that treaty?",
        "When ratifying, did that state file a reservation that keeps the provision from applying to it?",
        "If no treaty applies: is there general and consistent state practice prohibiting the conduct, and did this state dissent? If consent can be found, the state is in violation."
       ]
      ],
      [
       "Challenge",
       "Positivism cannot on its own account for first principles no state consented to (such as pacta sunt servanda), for peremptory norms, or for the gaps that must be filled when no treaty or practice supplies an answer. So it cannot be the sole source of international legal obligation."
      ]
     ],
     "tip": "The torture checklist is the same sequence the exam rewards for any treaty: is it in force between these parties, any reservations, and if no treaty, does custom bind this state.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Critical Approaches",
     "explain": [
      "The critical approaches question whether IL is coherent and neutral. The New Stream, an important move in the 1960s, argued IL is internally contradictory. It opened the door to other critiques, including TWAIL and feminist theory.",
      "On an exam, these approaches mainly supply counterarguments: two respectable readings of the same rules can reach opposite results, and a rule that looks neutral may protect particular interests."
     ],
     "items": [
      [
       "New Stream",
       "Critiques the proposition that IL is internally coherent. Using linguistic theory and philosophy, it looks for hidden ideologies and structures in order to expose contradictions (antinomies) in IL.",
       [
        "Core contradiction: a legal system created by the consent of sovereign states is supposed to bind and constrain those very same states.",
        "Many rules try to mediate between sovereign independence and sovereign constraint: common rules versus their exceptions, general rules versus specialized rules, and sovereignty-oriented rules versus community-oriented rules.",
        "Consequence: two IL lawyers can make completely respectable, formal arguments reaching opposite conclusions by giving more weight to one rule than the other. Murphy's example: a state is bound by a treaty it ratified or a custom it did not object to, yet may also be bound by a conflicting peremptory norm it never consented to.",
        "Criticism: it cynically deconstructs IL as arbitrary and empty without offering a way to rebuild it. Response: New Stream scholars accept that IL functions in practice; the theory's value is showing that IL is indeterminate and serves as a vehicle for ideology."
       ]
      ],
      [
       "TWAIL",
       "Third World Approaches to International Law: a particularly important movement for bringing the perspectives of non-European/American states into the international lawyering process.",
       [
        "Murphy: TWAIL focuses on how IL developed to support powerful, mostly European colonizing states and to promote developed-world 'values' over the developing world.",
        "TWAIL scholars argue IL should incorporate non-European doctrine and principles, address distributive justice, poverty, and development, and uphold sovereign equality and non-intervention. One proposal: treat General Assembly resolutions as binding, since most states in the Assembly are developing states."
       ]
      ],
      [
       "Argument TWAIL generates",
       "\"The neutrality of this rule is a claim, not a fact; ask who was in the room when it formed and whose interests its exceptions protect.\""
      ],
      [
       "Feminist theory",
       "Also opened up by the New Stream (from the Murphy reading). It argues that IL, produced by governments and organizations almost exclusively dominated by men, covertly perpetuates the unequal position of women, and that IL should become less litigious, less confrontational, and less patriarchal (Charlesworth and Chinkin)."
      ]
     ],
     "tip": "Class 1 exercise: groups wrote baseline rules for five states, first without knowing which state they were, then as the U.S., Russia, Mexico, Vanuatu, and India. The debrief asked how the rules changed and whether the arguments made were natural law or critical arguments.",
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "Sources & the UN",
   "overview": [
    "This unit answers two starting questions for every international law (IL) problem: where does a rule of IL come from, and which institutions make, discuss, and enforce it. The baseline idea is that a rule of IL exists because states have generally accepted it. There is no world legislature, so the law has to be found in a short list of recognized sources.",
    "The first half is the list of sources in Article 38(1) of the Statute of the International Court of Justice (ICJ): treaties, custom, general principles, and judicial decisions plus scholarly writing. Treaties and custom do most of the work. Peremptory norms sit outside the list but override it.",
    "The second half is the United Nations (UN) system: why it replaced the League of Nations, and what its main organs can do. The key contrast is power. The General Assembly (GA) can only discuss and recommend, so its resolutions are not binding on their own, though they can be evidence of custom. The Security Council (SC) can make decisions that bind every UN member.",
    "On the exam, the professor listed three items as \"Important Stuff\" for this class: the sources of IL, the powers of the GA and the SC, and ICJ jurisdiction (covered in the next unit). Every rule statement should begin by naming what kind of source the rule comes from and why it binds the parties in the prompt."
   ],
   "check": {
    "status": "complete",
    "note": ""
   },
   "blocks": [
    {
     "title": "Sources of IL: ICJ Statute Art. 38(1)",
     "explain": [
      "Article 38(1) of the ICJ Statute is where the generally recognized sources of IL are listed. It is written as instructions to the Court about what law to apply, and it was carried over almost word for word from the Statute of the Permanent Court of International Justice (PCIJ), the ICJ's predecessor. If a proposed rule is supported by one or more of these sources, it can be accepted as part of IL.",
      "Article 38 presents the four sources as separate, but in practice they influence each other. A treaty can become custom if enough states adopt it, and a later custom can displace a treaty. The reading notes that the scattered character of the sources reflects how decentralized IL-making is: no single body makes the law.",
      "The baseline rule ties the sources together: a rule of IL is the product of states' general acceptance of a legal principle. Each source is a different way of showing that acceptance."
     ],
     "items": [
      [
       "Baseline rule",
       "A rule of IL is the product of states' general acceptance of a legal principle. This is the test every source has to satisfy. The reading adds that Article 38's emphasis on general acceptance is correct, and that custom should not be confused with whatever the GA most recently declared."
      ],
      [
       "ICJ Statute art. 38(1)",
       "The provision that lists where the recognized sources are found. The four sources are presented as separate, but in practice they influence each other.",
       [
        "The reading notes two problems with treating Article 38 as a complete list: it never uses the word \"sources,\" and on close reading it is not a simple enumeration.",
        "Although it dates from 1920, the reading concludes it is flexible enough to fit modern international relations."
       ]
      ],
      [
       "(a) Conventions",
       "\"International conventions, general or particular, establishing rules expressly recognized by the contesting states.\" These are treaties, charters, statutes, and agreements. Because a treaty rests on consent, its provisions generally bind only the states that are parties to it.",
       [
        "If enough states adopt a treaty, its rules may ripen into customary international law (CIL), which then binds non-parties too.",
        "Treaties can be bilateral (two states) or multilateral (many states)."
       ]
      ],
      [
       "(b) Custom",
       "\"International custom, as evidence of a general practice accepted as law.\" Custom has two elements: state practice (what states do) and opinio juris (states' acceptance that the practice is legally required). Custom is what states do because they think they HAVE to, not because they think it is a good idea.",
       [
        "Both elements are required. Practice done out of courtesy or convenience, without a sense of legal obligation, is not custom."
       ]
      ],
      [
       "(c) General principles",
       "\"The general principles of law recognized by civilized nations.\" These are ideas like equity, and rules that bind how courts operate. They usually matter for how international tribunals function, and they are often developed by analogy to what domestic courts do.",
       [
        "Example from the slides: the ICJ's power to decline a case because too much time has passed is described as general principles (timeliness and equity) at work."
       ]
      ],
      [
       "(d) Judicial decisions & publicists",
       "\"Subject to the provisions of Article 59, judicial decisions and the teachings of the most highly qualified publicists of the various nations, as subsidiary means for the determination of rules of law.\" Court decisions and the writings of leading scholars help identify what the law is. They are secondary sources of legal obligation.",
       [
        "\"Subject to Article 59\" means a decision binds only the parties to that case (see Art. 59 below).",
        "\"Publicists\" means leading IL scholars."
       ]
      ],
      [
       "Most important: (a) and (b)",
       "Treaties and custom are the two most important sources in practice. The reading explains that treaties come first in priority because a treaty is a specific obligation the parties chose, and the more specific obligation ordinarily prevails."
      ],
      [
       "Order of precedence",
       "Article 38(1) contains no express hierarchy, and the (a)–(d) order does not dictate one in all cases. The drafters stipulated an order (one draft used the word \"successively\"), but the reading warns against treating it as a strict ranking.",
       [
        "A treaty that conflicts with a peremptory norm creates no obligation at all, so (a) does not always win.",
        "The content of a treaty obligation depends on interpretation, which is itself governed by IL.",
        "A treaty can be displaced by a later rule of CIL, at least where the parties' later conduct recognizes the change."
       ]
      ],
      [
       "Treaties do not create generalizable rules",
       "A treaty applies only to the parties that consented to its obligations or benefits. In principle a treaty neither obliges nor benefits third states without their consent. So a treaty is a source of obligation, not a source of rules of general application.",
       [
        "A treaty can still be important evidence: it may reflect an existing customary rule or may come to embody CIL over time."
       ]
      ],
      [
       "Art. 38(2): ex aequo et bono",
       "The Court may decide a case ex aequo et bono only if the parties agree. Ex aequo et bono means deciding on the basis of general principles of fairness and equity instead of strict legal rules."
      ],
      [
       "Art. 59",
       "A decision of the Court has no binding force except between the parties and in respect of that particular case. This is why judicial decisions in Article 38(1)(d) are only subsidiary: a judgment does not create law for other states."
      ],
      [
       "Peremptory norms",
       "Not listed in Article 38, yet they are obligations from which states can never derogate (depart), for example the prohibition on torture. They prevail over all other sources of law, which is why a treaty contrary to a peremptory norm gives rise to no obligation."
      ]
     ],
     "tip": "Start every rule statement by naming the source (treaty, custom, general principle) and why it binds these parties. The Class 2 group discussion asked whether every source fits the baseline rule of general acceptance and why the ICJ Statute omits peremptory norms; the slides pose these questions without giving answers.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "The League of Nations & the Founding of the UN",
     "explain": [
      "The UN was built to fix what went wrong with its predecessor, the League of Nations. The League was formed after World War I as the first general association of states devoted to settling disputes and keeping peace. It rested on collective security: states guaranteeing each other's independence and territory, instead of relying on balance-of-power alliances, which had failed to prevent war in 1914.",
      "The League failed in the years leading to World War II. When the Allies designed the UN in 1943–1945, they tried to correct the League's specific weaknesses. Knowing those four corrections helps explain why the SC has binding power and why the UN covers economic and social issues."
     ],
     "items": [
      [
       "League of Nations (1919)",
       "Established in 1919, after World War I, with the goal of preventing a second world war. Its primary backers were the United States and the United Kingdom. President Woodrow Wilson put the idea into concrete form in the last of his Fourteen Points (1918).",
       [
        "The Covenant (the League's founding document) included weapons control provisions, obligations to prevent wars of aggression, and provisions requiring international arbitration and adjudication before states could resort to war."
       ]
      ],
      [
       "Why the League failed",
       "Wilson could not get the U.S. Senate to ratify the Covenant, so the United States stayed out of its own plan for two decades. The League was then powerless against aggression in the 1930s.",
       [
        "1931: Japan invaded Manchuria; the League condemned it in 1933 and Japan left the League the next month.",
        "The League watched as Italy invaded Ethiopia and Germany moved into the Rhineland, Austria, and Czechoslovakia (1936–1938).",
        "In 1946 the League voted unanimously to dissolve and transfer its functions and property to the UN."
       ]
      ],
      [
       "Founding the UN",
       "Negotiations began in 1943 among the United States, the Soviet Union, Great Britain, and China. The four allies agreed on the structure at Dumbarton Oaks in August 1944, and fifty states signed the Charter at San Francisco on June 26, 1945."
      ],
      [
       "How the UN improved on the League",
       "The UN was designed to fix four League weaknesses (flagged in the reading):",
       [
        "More forceful.",
        "Inclusive of non-League countries, especially the United States.",
        "Covering a wider range of economic and social issues.",
        "Giving its officials more independent power."
       ]
      ],
      [
       "Charter art. 1 purposes",
       "Article 1 of the UN Charter lists the UN's four purposes:",
       [
        "Maintain international peace and security, taking effective collective measures against threats to the peace and acts of aggression.",
        "Develop friendly relations among nations based on equal rights and self-determination of peoples.",
        "Achieve international cooperation on economic, social, cultural, and humanitarian problems and on human rights.",
        "Be a center for harmonizing the actions of nations toward these common ends."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "The UN Organs",
     "explain": [
      "The Charter creates six principal organs. The slides focus on three: the General Assembly, the Security Council, and the International Court of Justice. These three are where the law-relevant power sits: the GA discusses and recommends, the SC decides and can bind, and the ICJ adjudicates.",
      "The remaining organs support or specialize. The Secretariat runs the organization day to day under the Secretary-General (SG)."
     ],
     "items": [
      [
       "Principal organs",
       "The three principal organs the professor emphasizes are the General Assembly, the Security Council, and the ICJ. The reading lists all six principal organs under the Charter: GA, SC, Economic and Social Council (ECOSOC), Trusteeship Council, ICJ, and Secretariat.",
       [
        "The slides also list the Human Rights Council among the other organs.",
        "Beyond these, the UN system includes many committees and related organizations (for example the ILO, UNESCO, World Bank, and IMF)."
       ]
      ],
      [
       "Secretariat",
       "The UN's administrative body. It is led by the Secretary-General, who is appointed by the GA on the recommendation of the SC."
      ],
      [
       "Secretary-General",
       "Under Charter arts. 97–99, the SG is the UN's \"chief administrative officer,\" performs functions entrusted by the other organs, and may bring to the SC's attention any matter that in the SG's opinion may threaten international peace and security.",
       [
        "In practice, UN Secretaries-General have played more active roles than their League predecessors, which the UN's founders intended (one of the four improvements: officials with more independent power)."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "General Assembly",
     "explain": [
      "The GA is the UN's deliberative body, and every member state belongs to it. The professor called it a consultative body: its Charter verbs are \"discuss\" and \"make recommendations.\" It cannot enact binding IL.",
      "Its main contribution to IL is indirect. It can start studies and recommend the progressive development and codification of IL, and its resolutions can sometimes serve as evidence of custom (next block)."
     ],
     "items": [
      [
       "Composition",
       "A deliberative body with universal membership: every UN member, 193 states. Each state has one vote, regardless of size."
      ],
      [
       "Art. 10",
       "The GA may discuss any questions or matters within the scope of the Charter, and may make recommendations to the Members, to the SC, or both. The power is broad in subject matter but limited to discussion and recommendation."
      ],
      [
       "Art. 14",
       "The GA may recommend measures for the peaceful adjustment of any situation it deems likely to impair the general welfare or friendly relations among nations.",
       [
        "Limit: the GA may not make recommendations on a matter while the SC is exercising its functions on that matter. The SC has priority on peace and security issues it is handling."
       ]
      ],
      [
       "No binding law",
       "The GA may not enact binding IL; it may only make recommendations. Its resolutions, on their own, do not create legal obligations.",
       [
        "Its most important power for developing IL (flagged in the reading) is to initiate studies and make recommendations encouraging the progressive development of IL and its codification.",
        "Operationally, its greatest power is arguably the right to approve the UN budget."
       ]
      ],
      [
       "Voting",
       "Majority vote, except \"important questions,\" which require a two-thirds vote of members present and voting."
      ],
      [
       "Critique of one state, one vote",
       "The reading notes that equal voting means states of over 300 million people count the same as states of fewer than 12,000, which undercuts any claim that the GA is a world parliament. Proposals for proportional representation have gone nowhere."
      ]
     ],
     "tip": "GA verbs are \"discuss\" and \"recommend\"; SC resolutions can bind. If a prompt cites a GA resolution as a source of obligation, the answer is that it binds only if it reflects CIL.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "UNGA Resolutions as Evidence of CIL",
     "explain": [
      "General rule: a UN General Assembly (UNGA) resolution does not create binding obligations on its own. Exception: a resolution may be evidence of CIL once it meets the criteria for custom, meaning it reflects general state practice accepted as law.",
      "To decide which side of the line a resolution falls on, look at several factors together: how many states adopted it and whether unanimously, the verbs it uses, whether it treats the conduct as legally required, and whether states later acted consistently with it. The slides contrast two examples, one nonbinding and one law-making.",
      "The Nuclear Weapons Advisory Opinion (next unit) applies the same idea: resolutions \"may sometimes have normative value\" depending on their content, the conditions of their adoption, and whether opinio juris exists as to their normative character."
     ],
     "items": [
      [
       "General rule",
       "On their own, UNGA resolutions do not create binding legal obligations, because the GA has only the power to recommend."
      ],
      [
       "Exception: evidence of CIL",
       "A resolution may constitute evidence of CIL once it meets CIL criteria. Examine:",
       [
        "How many states adopted it, and whether adoption was unanimous.",
        "The operative verbs (directive and declaratory, or merely suggestive).",
        "Whether it indicates an understanding that the conduct is legally required (this is the opinio juris element).",
        "Whether it is supported by subsequent state practice (this is the state practice element)."
       ]
      ],
      [
       "Indicia of a NONBINDING resolution",
       "Signs that a resolution is only a recommendation:",
       [
        "Suggestive, not directive, language, for example \"Requests\" or \"Deplores.\"",
        "Not adopted unanimously.",
        "Example: GA Res. 1761 (XVII), on the apartheid policies of the Government of South Africa."
       ]
      ],
      [
       "Indicia of a LAW-MAKING resolution",
       "Signs that a resolution reflects or creates customary law:",
       [
        "Framed in terms of general legal obligations.",
        "Supported by subsequent state practice.",
        "Adopted unanimously.",
        "Uses \"Solemnly declares,\" language the professor said is largely a recitation of existing customary law.",
        "Example: GA Res. 1962 (XVIII), the Declaration of Legal Principles Governing the Activities of States in the Exploration and Use of Outer Space, which was followed by the Outer Space Treaty (the later treaty is the subsequent state practice)."
       ]
      ],
      [
       "Nuclear Weapons AO test (cross-reference)",
       "In the Nuclear Weapons Advisory Opinion, the ICJ said GA resolutions, even if not binding, may have normative value as evidence of a rule or of an emerging opinio juris. Assess (i) content, (ii) conditions of adoption, and (iii) whether opinio juris exists as to the resolution's normative character. A series of resolutions may show opinio juris gradually developing.",
       [
        "Applied there: the nuclear weapons resolutions were adopted with substantial negative votes and abstentions, so they fell short of establishing opinio juris on illegality."
       ]
      ]
     ],
     "tip": "From class notes: a resolution \"does not do anything\" by itself. Check how many states signed on and what words it begins with.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Security Council",
     "explain": [
      "The SC is the most powerful UN organ. It holds primary responsibility for maintaining international peace and security, and unlike the GA its resolutions CAN impose legal obligations on all UN members.",
      "That binding power comes from the Charter itself: members agreed in advance that the SC acts on their behalf (art. 24), that they will carry out its decisions (art. 25), and that Charter obligations prevail over their other treaties (art. 103). The five permanent members each hold a veto, which reflects post-World War II power and has often blocked Council action."
     ],
     "items": [
      [
       "Powers",
       "Primary responsibility for the maintenance of international peace and security. The reading calls it constitutionally the most ambitious UN organ."
      ],
      [
       "Composition",
       "15 members.",
       [
        "Five permanent members (the P5): China, France, Russia, the United Kingdom, and the United States, the winners of World War II.",
        "Ten elected members serving two-year terms, drawn from geographic groups."
       ]
      ],
      [
       "Voting",
       "One vote per member; nine votes are needed to pass a measure. On nonprocedural matters, any permanent member can veto a resolution.",
       [
        "The reading notes the veto reflects the realities of international politics but has often stymied Council action; even so, commentators describe the Council as \"an indispensable pillar of world order.\""
       ]
      ],
      [
       "Binding power",
       "UNSC resolutions can impose legal obligations on all UN members because of four Charter provisions:",
       [
        "Art. 24: members confer on the SC primary responsibility for peace and security, and the SC acts on their behalf.",
        "Art. 25: members agree to accept and carry out the decisions of the SC.",
        "Art. 48: the action required to carry out SC decisions is taken by all members or some of them, as the SC decides.",
        "Art. 103: if Charter obligations conflict with obligations under any other international agreement, Charter obligations prevail."
       ]
      ],
      [
       "Example",
       "S.C. Res. 2699 (2023) on Haiti. It states that the SC is \"Acting under Chapter VII\" and authorizes member states to form and deploy a Multinational Security Support mission. Chapter VII is the part of the Charter on SC enforcement measures (the Nuclear Weapons AO notes art. 42, SC military enforcement, falls under it), which is why the phrase signals a binding, enforcement-type resolution."
      ]
     ],
     "tip": "The Class 2 group discussion asked what structural inequities are built into the UN. The sources point to two: the P5 veto in the SC and one state, one vote in the GA.",
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "ICJ & Adjudication",
   "overview": [
    "This unit covers how international disputes get decided. The main court is the International Court of Justice (ICJ), the UN's principal judicial organ. The big rule is consent: a state can be taken to the ICJ only if it has agreed, in one of a handful of recognized ways. Joining the UN makes a state a party to the ICJ Statute, but that alone is not consent to be sued.",
    "The ICJ does two kinds of work. In contentious cases, two states have a dispute and the judgment binds only them. In advisory opinions, an authorized UN body asks the Court what the existing law is; the opinion creates no new obligations, and the Court decides whether to answer. There is no formal system of precedent, though the Court strives for consistency.",
    "The ICJ is one forum among several: arbitration at the Permanent Court of Arbitration, claims commissions, law of the sea tribunals, the WTO dispute system, and investor–state arbitration.",
    "The second half teaches you to read an ICJ opinion, using the Nuclear Weapons Advisory Opinion as the case study. Exams give an excerpt of an opinion, so you need to recognize which part of the opinion you are looking at and find the holding. The professor's \"Important Stuff\" here: ICJ jurisdiction over contentious cases and advisory opinions, the timeline and structure of an ICJ opinion, and the types of opinions judges can write."
   ],
   "check": {
    "status": "thin",
    "note": "One gap inside the Other Tribunals block (why the WTO Appellate Body has been defunct since 2019); everything else is explained from slides, Day 2/Day 3 notes, and Brownlie ch. 32."
   },
   "blocks": [
    {
     "title": "The Court",
     "explain": [
      "The ICJ is the continuation of the Permanent Court of International Justice (PCIJ). The PCIJ was the judicial arm of the League of Nations; the ICJ is the judicial arm of the UN. Every UN member is automatically a party to the ICJ Statute.",
      "The Court has 15 judges. The rules on who can serve aim at independence (judges sit as individuals and do not represent their home states) and at balance (no two judges from one state, and the bench as a whole should represent the world's main legal systems). A state with no judge of its nationality on the bench can appoint a judge ad hoc for its case."
     ],
     "items": [
      [
       "Status",
       "The ICJ is a continuation of the PCIJ. Charter art. 92 makes the ICJ \"the principal judicial organ of the United Nations.\" Charter art. 93 makes all UN members ipso facto (automatically, by that fact) parties to its Statute."
      ],
      [
       "Bench",
       "15 judges serving nine-year terms. Five are elected every three years, so terms are staggered, and re-election is possible.",
       [
        "Election: a candidate needs an absolute majority in both the General Assembly and the Security Council, which vote independently and at the same time."
       ]
      ],
      [
       "Art. 2",
       "Judges are independent and are elected regardless of nationality from persons of high moral character who either qualify for the highest judicial offices in their own countries or are jurisconsults (legal experts) of recognized competence in IL. This covers professors, practitioners, national or international judges, and civil servants."
      ],
      [
       "Art. 3(1)",
       "No two members of the Court may be nationals of the same state."
      ],
      [
       "Art. 9",
       "Electors must keep in mind that the Court as a whole should represent the main forms of civilization and the principal legal systems of the world.",
       [
        "In practice, composition tracks voting strength and political alliances in the SC and GA, and the P5 have historically had judges of their own nationality on the Court."
       ]
      ],
      [
       "Independence safeguards",
       "Once elected, judges are insulated from their governments:",
       [
        "No political or administrative functions and no other professional occupation (art. 16(1)).",
        "No acting as agent or counsel, and no sitting on a case the judge was previously connected with in another capacity (arts. 17, 24).",
        "Dismissal requires the unanimous opinion of the other judges (art. 18(1)).",
        "Diplomatic privileges and immunities on Court business (art. 19).",
        "Salaries are fixed by the GA, cannot be reduced during the term, and are tax-free (art. 32)."
       ]
      ],
      [
       "Judge ad hoc (art. 31)",
       "A party with no national on the bench may appoint a judge ad hoc for its case. The judge ad hoc may be of another nationality. The reading notes a judge ad hoc commonly, though not always, supports the appointing party's view of the case."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Contentious vs. Advisory",
     "explain": [
      "The ICJ issues two types of decisions, and they differ in who can bring them, what triggers them, and what effect they have.",
      "A contentious case is a dispute between states; the judgment binds only those parties, and each state must have opted into the Court's jurisdiction. An advisory opinion is a request from an authorized body for a statement of the existing law; it creates no new legal obligations, and the Court has discretion whether to give it."
     ],
     "items": [
      [
       "Contentious",
       "Two states disagree on a matter and bring it to the Court.",
       [
        "The decision applies only to the parties to that dispute (Statute art. 59).",
        "Each state must opt into the Court's jurisdiction; only states may be parties (see Consent block)."
       ]
      ],
      [
       "Advisory",
       "The ICJ is asked to state the existing law on a matter.",
       [
        "Does not create new legal obligations; advisory opinions are not binding at all.",
        "A treaty must give the requesting body the power to ask for an opinion. Under the UN Charter (art. 96), the GA and SC may request, and the GA may authorize other organs and specialized agencies.",
        "The ICJ decides whether to accept the request."
       ]
      ]
     ],
     "tip": "The slides say \"individual states & UNGA can request AOs,\" but the Charter provision quoted in the outline and the Day 2 reading (art. 96) names the GA, the SC, and organs or agencies the GA authorizes. Use art. 96 when stating the rule.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Judicial Decisions & Precedent",
     "explain": [
      "Article 38(1)(d) lists judicial decisions only as a \"subsidiary means\" for determining the law, and Article 59 says a decision binds only the parties to that case. So ICJ decisions are not strictly a formal source of law, and the Court does not follow common law stare decisis (binding precedent).",
      "Even so, the Court strives for consistency, mainly to respect the reliance interests of states that plan around its past rulings. In practice it treats its decisions as \"precedential-ish,\" and in one area, court procedure, its practice is precedential. A unanimous or near-unanimous decision can push the law forward."
     ],
     "items": [
      [
       "General rule",
       "Judicial decisions are not strictly a formal source of law, but in many instances are regarded as evidence of law. A coherent body of past decisions has important consequences in any given case, but its value stops short of precedent in the common law sense."
      ],
      [
       "Art. 59",
       "A decision has no binding force except between the parties and in respect of that particular case. The drafting history shows the article was meant to rule out a system of binding precedent; in Polish Upper Silesia, the PCIJ said its object is to keep legal principles accepted in one case from binding other states or other disputes."
      ],
      [
       "Precedent",
       "No stare decisis: the Court does not observe a doctrine of precedent.",
       [
        "Exception: court procedure, rules of evidence, and similar internal rules for how a case is conducted are precedential.",
        "The Court strives for consistency and treats its decisions as \"precedential-ish,\" primarily to respect reliance interests.",
        "It distinguishes prior decisions instead of overruling them, and when it departs from an earlier decision it tends to do so tacitly. Where there is a line of consistent decisions (jurisprudence constante), reversal is not expected.",
        "A decision, especially if unanimous or nearly so, may play a catalytic role in developing the law (examples in the reading: Reparation for Injuries, Reservations, Anglo-Norwegian Fisheries)."
       ]
      ],
      [
       "Why ICJ pronouncements carry weight anyway",
       "Three features give its statements great weight even though judgments bind only the parties and advisory opinions bind no one: its uninterrupted history, its stated preference for consistency, and its wide subject matter jurisdiction. It has also shaped the procedural law of other international courts."
      ],
      [
       "Use with discretion",
       "The reading flags that some ICJ decisions should be handled carefully. Lotus was decided by the President's casting vote and was later rejected by the International Law Commission (ILC). It can be unwise to extract general rules from an opinion addressed to a narrow problem or to the special relations of two states."
      ],
      [
       "Arbitral tribunal decisions",
       "Frequently cited, though quality varies. Their weight turns on the status of the tribunal, the status of its members, and the conditions under which it works. Examples with significant legal findings: the Nuremberg International Military Tribunal, the Iran–United States Claims Tribunal, and the International Criminal Tribunal for the Former Yugoslavia."
      ],
      [
       "National court decisions",
       "Article 38(1)(d) is not limited to international decisions. Domestic decisions can be indirect evidence of the forum state's practice, or can offer a careful independent analysis of a point of IL. Their value varies: some are parochial or rest on poor use of sources."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Consent to Contentious Jurisdiction",
     "explain": [
      "The ICJ has no compulsory jurisdiction. Under Statute art. 36 it can hear a contentious case only if the states involved have consented. This follows from the sovereign equality of states: no state can be forced before a tribunal without its agreement. The drafters considered compulsory jurisdiction in 1920 and the great powers rejected it, leaving the weaker \"optional clause\" compromise.",
      "Only states can be parties. Consent can be given in advance (a treaty clause, an optional clause declaration, or an old PCIJ clause) or for a single dispute (a special agreement, or appearing and litigating). Any one recognized form of consent is enough.",
      "Two qualifications: joining the Statute is not consent, but every party is bound by the Court's power to decide whether it has jurisdiction and by its power to order binding provisional measures."
     ],
     "items": [
      [
       "No compulsory jurisdiction (art. 36)",
       "The Court has jurisdiction in contentious cases only on the basis of consent, a corollary of the sovereign equality of states.",
       [
        "In Corfu Channel, the UK argued an SC recommendation to refer a dispute to the ICJ was binding under Charter art. 25. Seven judges rejected this, in part because a \"recommendation\" is not compulsory."
       ]
      ],
      [
       "Only states may be parties",
       "Contentious jurisdiction exists only between states. There is no provision for private parties to intervene.",
       [
        "States not party to the Statute can appear on conditions set by the SC (art. 35(2)), which may never place parties in an unequal position. SC Resolution 9 lets such a state appear by filing a declaration accepting jurisdiction and promising to comply.",
        "Intervention by other states: art. 62 (a state with a legal interest that may be affected), and art. 63 (a party to a treaty being interpreted, which is then bound by the interpretation)."
       ]
      ],
      [
       "Treaty clause (art. 36(1))",
       "Advance consent through treaties and conventions in force that contain clauses granting the ICJ jurisdiction over disputes about their interpretation or application. Many bilateral and multilateral treaties have such clauses. The reading notes this can be called \"compulsory\" in the sense that consent is given before any dispute arises."
      ],
      [
       "Optional clause (art. 36(2))",
       "A state files a declaration accepting compulsory jurisdiction. It then agrees to AUTOMATIC jurisdiction when a case is brought by another state that has also filed such a declaration. Both states must have accepted; the label \"compulsory jurisdiction\" is most often used for this basis."
      ],
      [
       "Special agreement",
       "Consent for a particular case, normally by a special agreement (compromis) between the disputing states, or by a letter consenting to jurisdiction for that dispute. It can also arise when one state files and the other separately consents. Example: Gabon and Equatorial Guinea submitted a Special Agreement in 2016."
      ],
      [
       "Informal consent",
       "Consent shown by using the Court, for example by appearing and litigating the case. Voluntary jurisdiction has no formal requirements: art. 36(1) says the Court's jurisdiction covers all cases the parties refer to it."
      ],
      [
       "PCIJ clauses (arts. 36(5), 37)",
       "Also called the compromissory clause basis or transferred jurisdiction. If a treaty gave jurisdiction to the PCIJ, the matter is referred to the ICJ instead.",
       [
        "Condition 1: the treaty must be in force between the litigating states.",
        "Condition 2: all parties to the dispute must be parties to the ICJ Statute.",
        "In Nicaragua, the Court held Nicaragua's 1929 declaration accepting PCIJ jurisdiction was a valid acceptance of ICJ jurisdiction through its 1945 ratification of the Charter."
       ]
      ],
      [
       "Qualifications (arts. 36(6), 41)",
       "Becoming a party to the Statute does not by itself submit a state to jurisdiction; further consent is required. But every party is bound by:",
       [
        "Art. 36(6): the Court's power to determine its own jurisdiction when it is disputed.",
        "Art. 41: the Court's power to indicate provisional (interim) measures to preserve the parties' rights. Unless it is apparent there is no consent, the Court will order them without deciding jurisdiction on the merits, and LaGrand held they are binding."
       ]
      ]
     ],
     "tip": "Joining the Statute is not itself consent, but every party is bound by the Court's power to decide its own jurisdiction (art. 36(6)) and to order binding provisional measures (art. 41). The slides and class notes list five ways to consent: treaty, optional clause, special consent, informal consent, compromissory (PCIJ) clause.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Advisory Jurisdiction",
     "explain": [
      "An advisory opinion must rest on authority granted by treaty. The ICJ Statute says the Court \"may give\" an opinion on \"any legal question\" when asked by a body authorized under the UN Charter, and the Charter names the GA and SC and lets the GA authorize others.",
      "The Court runs a two-part inquiry, and both parts must be satisfied: (1) is there treaty authorization for this body to ask this question (a matter of power), and (2) is it proper to give the opinion (a matter of discretion). Political overtones go to the second part only. In practice, the Court almost always answers: only \"compelling reasons\" justify refusal."
     ],
     "items": [
      [
       "Authorization",
       "Must be authorized by treaty. Statute art. 65(1): the Court \"may give\" an advisory opinion on \"any legal question\" at the request of whatever body is authorized by or in accordance with the Charter. Charter art. 96: the GA and SC may request opinions, and the GA may authorize other organs and specialized agencies to do so.",
       [
        "Agencies authorized under art. 96(2) may ask only about questions within the scope of their own activities."
       ]
      ],
      [
       "Two-part inquiry",
       "(1) Whether there is authorization in a treaty, and (2) the propriety of providing the opinion. Jurisdiction (power) comes first; propriety (discretion) comes second."
      ],
      [
       "WHO request refused",
       "The World Health Organization (WHO) asked whether using nuclear weapons was legal. The Court refused for lack of jurisdiction: the WHO treaty gave no authority to request such an opinion because the question was not \"within the scope of the activities\" of the WHO. The Court answered essentially the same question when the GA asked, because the GA's competence covers any matter within the Charter."
      ],
      [
       "Political questions",
       "A question's political aspects do not deprive it of its character as a legal question (Kosovo). The Court looks at whether the question is framed in terms of law and raises problems of IL (Western Sahara). Political motives behind a request and political implications of the answer are irrelevant to jurisdiction; the issue is one of propriety, not power."
      ],
      [
       "Propriety",
       "\"May give\" leaves the Court discretion to decline even when it has jurisdiction. But an opinion is given to the requesting organ as the Court's participation in UN activities, and in principle should not be refused (Peace Treaties). Only \"compelling reasons\" justify refusal, and the present Court has never refused on discretionary grounds."
      ],
      [
       "Eastern Carelia and its limits",
       "The PCIJ declined once: the League Council asked about a dispute between Finland and the USSR, the USSR objected and was not bound by the Covenant, and no state can be forced to submit a dispute without consent. Later opinions (Namibia, Western Sahara, Wall) distinguished it because those requests did not concern an interstate dispute and the requesting organ was acting within its own Charter functions."
      ],
      [
       "Contentious features",
       "Because many requests come out of real disputes, art. 68 lets the Court apply its contentious-case rules to advisory proceedings to the extent it finds them applicable. Requests fall into types: specific situations (Namibia), interstate disputes referred without all parties' consent, and general abstract questions (Reservations)."
      ]
     ],
     "tip": "Keep power and propriety separate. WHO lost on power (no authorization). The GA's nuclear request passed on power and propriety, since \"political\" objections go only to propriety.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Limits & Objections",
     "explain": [
      "Even when consent exists, the ICJ may decline to hear a matter. The slides list three situations and note they are general principles of IL at work: principles of timeliness and equity.",
      "Separately, a respondent state can challenge a case before the merits. An objection to jurisdiction says the Court has no power to rule at all; an objection to admissibility says that even with power, this particular claim should not be heard."
     ],
     "items": [
      [
       "The Court may decline when",
       "The ICJ may decline jurisdiction when:",
       [
        "The matter is more properly a question for domestic courts (the slides note this will come up in international criminal law).",
        "Too much time has passed since the disputed activity.",
        "The legal issue is not absolutely necessary to resolving the legal issue before the Court.",
        "The slides call these general principles of IL at work: principles of timeliness and equity."
       ]
      ],
      [
       "Objections",
       "Two kinds of preliminary challenges:",
       [
        "Objection to jurisdiction: attacks the Court's power and authority to rule on admissibility or the merits at all.",
        "Objection to admissibility: challenges the validity of the claim apart from jurisdiction or merits, for example non-exhaustion of local remedies (the claimant did not first use the respondent state's own courts)."
       ]
      ],
      [
       "Joinder to the merits",
       "The Court may hear a preliminary objection together with the merits when the objection does not have an exclusively preliminary character in the circumstances of the case (Rules of Court art. 79(9))."
      ],
      [
       "Judicial propriety",
       "The Court may decline jurisdiction on grounds of judicial propriety, the same concept that governs its discretion in advisory proceedings."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Other Tribunals",
     "explain": [
      "The ICJ is one of many international dispute bodies. Arbitration is the older model: parties choose their arbitrators and a tribunal is set up for a particular case. Specialized regimes (law of the sea, trade, investment) have their own tribunals.",
      "The key differences to track are who can be a party (only states at the ICJ; investors and others elsewhere), whether jurisdiction is compulsory, and how decisions are enforced."
     ],
     "items": [
      [
       "PCA (1899)",
       "The Permanent Court of Arbitration was established under the 1899 Hague Convention for the Pacific Settlement of International Disputes as an arbitration secretariat. It is not a court and does not itself arbitrate, and it is not limited to states.",
       [
        "How it works: each party selects two arbitrators, and the four arbitrators select the chair (umpire). A tribunal is formed only for a particular case.",
        "It was the main arbitral body until the PCIJ replaced it in 1920, then went largely dormant; it revived in the 1990s by adopting new arbitral rules and showing flexibility about parties (for example a state against a liberation movement).",
        "Example: the South China Sea arbitration."
       ]
      ],
      [
       "Ad hoc claims bodies",
       "Created to assess claims and compensation between states. Unlike a tribunal convened for one specific question, a claims body usually addresses a general situation and all claims arising from it. They originated with the mixed commissions for boundary disputes between the U.S. and U.K. after Independence (Jay Treaty of 1794).",
       [
        "Iran–United States Claims Tribunal: created after the 1979 Iranian Revolution; most cases concerned nationalization of U.S.-owned assets in Iran.",
        "UN Compensation Commission: a subsidiary organ of the SC that handled claims from Iraq's 1990–91 invasion of Kuwait; a fact-finding body that verified claims and assessed compensation."
       ]
      ],
      [
       "UNCLOS",
       "The UN Convention on the Law of the Sea (UNCLOS) establishes many options for adjudicating disputes over its interpretation or application:",
       [
        "The International Tribunal for the Law of the Sea (ITLOS).",
        "The Seabed Disputes Chamber of ITLOS, a specialized division with exclusive jurisdiction over disputes about exploration and exploitation of the deep seabed.",
        "The ICJ.",
        "Special arbitral tribunals."
       ]
      ],
      [
       "WTO DSB",
       "The World Trade Organization (WTO) agreement established the Dispute Settlement Body (DSB).",
       [
        "Compulsory jurisdiction: members do not consent case by case.",
        "Exclusive jurisdiction for disputes under the WTO agreements.",
        "Panels hear disputes first; a dissatisfied party could appeal to the Appellate Body, which reviews legal conclusions but not findings of fact.",
        "Decisions are enforced through countermeasures: if the losing member does not comply in a reasonable time, the complaining member may seek compensation or raise tariffs on the other member's exports.",
        "The Appellate Body has been defunct since 2019. Brownlie's ch. 32 (n. 131) cites \"recent difficulties with replacement of Appellate Body members\" but does not explain further."
       ]
      ],
      [
       "Investment arbitration",
       "Arbitration between a foreign investor and the host state where its investment is located. Two agreements are needed:",
       [
        "One establishing the right to arbitrate, usually a bilateral or multilateral investment treaty between the host state and the investor's home state.",
        "One providing the forum: a tribunal under the ICSID Convention (International Centre for Settlement of Investment Disputes, Washington Convention 1965), or an ad hoc tribunal under UNCITRAL (UN Commission on International Trade Law) rules.",
        "\"Arbitration without privity\": there is no prior contract between the parties. The host state consents in the treaty, and the investor consents by starting the arbitration.",
        "The investor acts on its own, without its home state's diplomatic protection, and generally need not exhaust local remedies first."
       ]
      ]
     ],
     "check": {
      "status": "thin",
      "note": "WTO DSB item: slides state the Appellate Body has been \"defunct since 2019.\" Brownlie ch. 32 n. 131 only cites \"recent difficulties with replacement of Appellate Body members\"; no source (slides, Day 2 notes, outline, Brownlie ch. 32 §4(C)) explains why it stopped functioning."
     }
    },
    {
     "title": "Reading an ICJ Opinion",
     "explain": [
      "The professor's bottom line: \"If the ICJ can IRAC, so can you.\" An ICJ opinion follows a predictable structure, close to Issue, Rule, Application, Conclusion. On the exam you will get an excerpt, so the skill is to identify which part of the opinion you are holding and find the sentence that states the holding.",
      "Opinions also come with separate writings by individual judges, and the case moves through a long written and oral process before the decision issues."
     ],
     "items": [
      [
       "Life cycle",
       "A contentious case runs for years: Special Agreement, then an order setting the filing schedule, the applicant's brief (called a memorial), the respondent's counter-memorial, replies, a hearing, and the decision.",
       [
        "Example, Gabon/Equatorial Guinea: Special Agreement Nov. 2016; filing order Apr. 2021; memorial Oct. 2021; counter-memorial May 2022; replies 2022–2023; hearing Sept.–Oct. 2024; decision May 2025."
       ]
      ],
      [
       "Decision types",
       "Four kinds of documents:",
       [
        "Merits decision or Advisory Opinion: the document with the holding of the Court.",
        "Separate opinion: agrees with the outcome for a different legal reason (a concurrence).",
        "Declaration: a more informal statement of a judge's position, which can concur or dissent.",
        "Dissenting opinion: a dissent, which can be only as to part of the decision."
       ]
      ],
      [
       "Six parts",
       "An ICJ opinion runs in this order:",
       [
        "(1) States the question, including procedural posture (for example, jurisdictional matters already decided).",
        "(2) If an advisory opinion, whether it is proper to render the opinion.",
        "(3) Facts underlying the case.",
        "(4) Statement of the law applicable to the question.",
        "(5) Application of the law to the facts.",
        "(6) Summary of the holding(s)."
       ]
      ],
      [
       "Finding the holding",
       "Nearly every section gives one side's argument, then the counterargument, then a sentence beginning \"The Court notes / observes / finds.\" That sentence is the holding."
      ],
      [
       "Judicial economy",
       "The Court decides as little as possible. What it expressly declines to reach marks the gaps that come back in the next case. In the Nuclear Weapons AO it declined, among others, the burden of proof question, whether humanitarian law is jus cogens, and whether Additional Protocol I applies to nuclear weapons."
      ],
      [
       "Questions to ask of any opinion",
       "From the Class 3 slides and outline:",
       [
        "Jurisdiction: the jurisdictional hook, why the request presents a legal question, and why it is prudent to decide (discretion, distinct from power).",
        "The request: the question asked and how the Court interprets it.",
        "Relevant law: the sources the Court relies on, the applicable Charter provisions, and why the character of the thing in dispute matters.",
        "CIL: what meaning the Court gives long non-use and GA resolutions, and which rules it applies.",
        "Application: whether the rule, as identified, prohibits the conduct."
       ]
      ],
      [
       "Recurring techniques",
       "Moves the Day 3 notes identify in the Nuclear Weapons AO:",
       [
        "Lex specialis: a general body of law (human rights) still applies, but a more specific body (the law of armed conflict) gives content to its open terms.",
        "Reading a GA resolution's internal logic against itself.",
        "Using states' own pleadings as evidence against them.",
        "Distinguishing prior advisory opinions instead of overruling them."
       ]
      ]
     ],
     "tip": "The ICJ IRACs. An exam gives an excerpt: chunk it and name which part it is.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Nuclear Weapons AO: Background & Jurisdiction",
     "explain": [
      "In 1994 the GA asked the ICJ: \"Is the threat or use of nuclear weapons in any circumstance permitted under international law?\" The request capped a long history of GA objections to nuclear stockpiles. The background treaty is the Non-Proliferation Treaty (NPT).",
      "Before answering, the Court asked three threshold questions: is the GA authorized to ask, is this a legal question, and should the Court decline in its discretion. It said yes, yes, and no. It also defused a dispute over the word \"permitted.\""
     ],
     "items": [
      [
       "NPT: three pillars",
       "The NPT (in force 1970, extended indefinitely 1995) divides states into nuclear-weapon states (those with weapons by 1967: U.S., USSR, U.K., France, China) and everyone else.",
       [
        "Nonproliferation: nuclear-weapon states agree not to transfer weapons technology (art. 1); non-nuclear-weapon states agree not to seek it (art. 2).",
        "Peaceful use: all states have a right to peaceful use of nuclear technology and collaborate in sharing it (art. 4).",
        "Disarmament: all states commit to good-faith negotiations on ending the nuclear arms race and on nuclear disarmament (art. 6). The scope of art. 6 is flagged as a key question in the opinion."
       ]
      ],
      [
       "Jurisdiction",
       "Statute art. 65(1) plus Charter art. 96(1), which authorizes the GA to request an opinion on \"any legal question.\" Some states argued the GA could ask only about matters within its activities; the Court said this mattered little because the question falls within the GA's competence anyway (arts. 10, 11, and 13 cover any Charter matter, disarmament, and progressive development of IL). That the GA can only recommend does not limit its power to ask."
      ],
      [
       "Legal question",
       "Applying Western Sahara, a question framed in terms of law and raising problems of IL is by nature open to a legal answer. Political aspects and motives are \"of no relevance\" to jurisdiction."
      ],
      [
       "Discretion",
       "\"May give\" leaves discretion, but only \"compelling reasons\" justify refusing. The Court rejected each objection:",
       [
        "Vague or abstract with no specific dispute: advisory opinions give advice to the requesting organ and need not involve a dispute.",
        "The GA did not explain why it needed the opinion: that is for the GA to decide.",
        "An answer might harm disarmament talks: a matter of appreciation, not a compelling reason.",
        "Answering would be legislating: the Court states existing law and does not legislate.",
        "Caveat (para. 19): whether it can give a complete answer is a different question from refusing to answer. This sets up the non liquet."
       ]
      ],
      [
       "\"Permitted\" vs. prohibited",
       "Asking whether use is \"permitted\" implies it is lawful only if some rule authorizes it. Objecting states invoked Lotus: states are free to act unless a prohibitive rule binds them. The Court did not need to resolve this, because every state before it, including the nuclear-weapon states, accepted that IL, especially humanitarian law, restricts them."
      ],
      [
       "Prohibition, not authorization",
       "Illegality in IL is formulated in terms of prohibition: conduct is not unlawful merely because no rule authorizes it. Neither treaty nor custom authorizes nuclear weapons or any other weapon, and no rule makes legality depend on authorization."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Nuclear Weapons AO: Applicable Law",
     "explain": [
      "The Court surveyed every body of law states raised, then narrowed to the most relevant: the Charter law on use of force and the law of armed conflict (international humanitarian law). Human rights law and environmental law still apply, but through the law of armed conflict, which is the lex specialis (the more specific body of law that governs when the facts call for it).",
      "Because nuclear weapons are unlike other weapons, the Court said it had to account for their unique characteristics when applying the law."
     ],
     "items": [
      [
       "Human rights law (ICCPR art. 6)",
       "The right to life under the International Covenant on Civil and Political Rights (ICCPR) does not stop in wartime and is non-derogable. But whether a death in hostilities is an \"arbitrary\" deprivation of life is decided by the lex specialis, the law of armed conflict."
      ],
      [
       "Genocide Convention",
       "Relevant only if use of nuclear weapons in fact involved the specific intent to destroy a national, ethnical, racial, or religious group as such. That depends on the circumstances of each case and cannot be resolved in the abstract."
      ],
      [
       "Environmental law",
       "Relevant, but applied through the law of armed conflict. Environmental treaties were not meant to impose total restraint in war or to deprive a state of self-defense. States must take environmental considerations into account when judging what is necessary and proportionate. Environmental law supplies factors to weigh; it does not itself prohibit nuclear use."
      ],
      [
       "Lex specialis",
       "Human rights law and environmental law all apply, but through the more specific law of armed conflict. The most directly relevant law is the Charter law on use of force plus the law of armed conflict."
      ],
      [
       "Unique characteristics",
       "Nuclear weapons release heat and blast vastly more powerful than other weapons, plus powerful and prolonged radiation; their destructive power cannot be contained in space or time; they harm health, agriculture, and resources across wide areas and endanger future generations.",
       [
        "The Court said applying Charter and armed conflict law correctly requires accounting for their destructive capacity, their capacity to cause untold human suffering, and their ability to damage generations to come."
       ]
      ],
      [
       "Charter: art. 2(4)",
       "Members must refrain from the threat or use of force against the territorial integrity or political independence of any state. These Charter provisions do not refer to specific weapons; they apply to any use of force regardless of the weapon.",
       [
        "A threat is unlawful if the force threatened would itself be unlawful.",
        "Possession may justify an inference of readiness to use; deterrence works only if the intent to use is credible."
       ]
      ],
      [
       "Charter: art. 51 self-defense",
       "The inherent right of self-defense if an armed attack occurs, an exception to art. 2(4). Necessity and proportionality are CIL limits on self-defense that apply \"whatever the means of force employed.\" A proportionate use of force must also satisfy the law of armed conflict.",
       [
        "Art. 51 also requires self-defense measures to be reported to the SC immediately.",
        "Art. 42 (SC enforcement under Chapter VII) is a further lawful use of force; the Court did not address Chapter VII questions."
       ]
      ],
      [
       "Weapons unlawful per se",
       "A weapon already unlawful by treaty or custom does not become lawful because it is used for a legitimate purpose under the Charter."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Nuclear Weapons AO: Custom, LOAC & Holding",
     "explain": [
      "The Court looked for a specific prohibition on nuclear weapons and found none in treaty law or custom. It found the international community \"profoundly divided\" over whether decades of non-use reflected a legal obligation, and the GA resolutions declaring use illegal were adopted over too much opposition to show opinio juris.",
      "It then held that the general law of armed conflict (LOAC) applies to nuclear weapons, even though those rules predate them. Applying LOAC, it found use would generally be unlawful, but it could not decide the extreme case of self-defense when a state's survival is at stake. That inability to decide is a non liquet (\"it is not clear\"), the part the dissent attacked."
     ],
     "items": [
      [
       "Treaty law",
       "Treaties on acquisition, testing, and deployment, and nuclear-weapon-free-zone treaties, show growing concern and may foreshadow a future prohibition, but do not amount to a comprehensive prohibition. Nuclear-weapon states reserved the right to use them in some circumstances without objection."
      ],
      [
       "CIL: non-use",
       "Custom is found primarily in actual practice and opinio juris. Opponents read decades of non-use as opinio juris; supporters of legality invoked deterrence. The community is \"profoundly divided,\" so the Court could not find opinio juris. A nascent opinio juris is blocked by continuing adherence to deterrence."
      ],
      [
       "CIL: UNGA resolutions",
       "Resolutions may have normative value as evidence of a rule or emerging opinio juris. Assess (i) content, (ii) conditions of adoption, and (iii) whether opinio juris exists as to their normative character.",
       [
        "Applied: several nuclear resolutions passed with substantial negative votes and abstentions, so they fell short of opinio juris on illegality.",
        "Res. 1653 (XVI) applied general customary rules to nuclear weapons, which suggests the GA itself saw no specific prohibition."
       ]
      ],
      [
       "LOAC: distinction",
       "States must never make civilians the object of attack, and so must never use weapons incapable of distinguishing between civilian and military targets."
      ],
      [
       "LOAC: proportionality",
       "Incidental harm must not be excessive in relation to the military advantage anticipated. Environmental considerations feed into this assessment."
      ],
      [
       "LOAC: unnecessary suffering",
       "It is prohibited to cause combatants harm greater than that unavoidable to achieve legitimate military objectives, so states do not have unlimited freedom in their choice of weapons."
      ],
      [
       "Martens Clause",
       "No armed conflict falls outside the law: where no treaty covers a situation, civilians and combatants remain protected by principles of IL drawn from established custom, the principles of humanity, and the dictates of public conscience. The Court used it to show LOAC reaches weapons invented after the law was made."
      ],
      [
       "\"Intransgressible\" principles",
       "Many humanitarian law rules are so fundamental to \"elementary considerations of humanity\" that all states must observe them whether or not they ratified the treaties containing them, because they are intransgressible principles of CIL. Nuclear-weapon states (UK, U.S., Russia) conceded in their pleadings that LOAC governs nuclear weapons."
      ],
      [
       "Holding (para. 2 E)",
       "The threat or use of nuclear weapons would generally be contrary to LOAC, especially humanitarian law. But given the current state of IL and the facts available, the Court could not conclude whether threat or use would be lawful or unlawful in an extreme circumstance of self-defense in which a state's very survival is at stake (non liquet). Adopted by the President's casting vote.",
       [
        "Why it could not choose: states defending legality never said what precise circumstances would justify use; and the Court lacked enough to conclude use would violate LOAC in every circumstance.",
        "It weighed each state's fundamental right to survival, the long practice of deterrence, and the nuclear-weapon states' reservations."
       ]
      ],
      [
       "Disarmament (para. 2 F)",
       "There is an obligation to pursue in good faith and bring to a conclusion negotiations leading to nuclear disarmament under strict and effective international control, drawn from NPT art. 6."
      ],
      [
       "Schwebel dissent",
       "The Vice President agreed humanitarian law governs nuclear weapons and that GA resolutions do not establish illegality. He dissented on method:",
       [
        "The non liquet is illegitimate: \"After many months of agonizing appraisal of the law, the Court discovers that there is none.\" Article 38's general principles were adopted to avoid non liquet; the Court should have declined to answer instead.",
        "Fifty years of P5 practice and deterrence \"abort the birth or survival of opinio juris to the contrary.\"",
        "The NPT, security assurances, and free-zone treaties presuppose that use is not prohibited in all circumstances.",
        "He applied LOAC to concrete cases: mass use against cities is unlawful; a nuclear depth-charge against a submarine might be lawful.",
        "Para. 2 F does not answer the GA's question, so it is dictum."
       ]
      ]
     ],
     "tip": "The Court answered by declining to decide half the question (flagged in the Day 3 notes). That non liquet ties back to the para. 19 caveat and to the defused \"permitted\" burden of proof at para. 22.",
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "Law of Treaties",
   "overview": [
    "A treaty is a written deal between states (or other international actors) in which they make binding promises to each other. Treaties are one of the two main sources of legal obligation in international law (IL); the other is customary international law (CIL). This unit covers the whole life of a treaty: what counts as one, how a state signs on, how a state can carve out exceptions (reservations), how a treaty changes, how it ends, when it is invalid, and how to read what it means.",
    "The big question this unit answers is: is this state bound by this treaty rule, and what does the rule require? You answer it in steps. Is the instrument a treaty? Is it in force between these parties? Did the state make a reservation? Has it been amended, terminated, or invalidated? Then you interpret the text using VCLT (Vienna Convention on the Law of Treaties) arts. 31 and 32.",
    "Most of the rules come from the VCLT, a 1969 treaty that codified the law of treaties. Courts treat its provisions as the primary source of the law even where the VCLT does not apply as a treaty, because many of its articles reflect custom. The ICJ (International Court of Justice) has recognized art. 31, the general rule of interpretation, as CIL.",
    "On the exam, the outline’s standing move is: when a treaty appears, ask whether it is in force between these parties and whether there are reservations, then recite the interpretation rules the first time you interpret a treaty and refer back to them afterward. The professor flagged treaty interpretation as the most important material (“Everything! sorry, treaties are important”), and Class 5 drilled it with UNCLOS (the UN Convention on the Law of the Sea) and its 1994 Implementing Agreement."
   ],
   "check": {
    "status": "complete",
    "note": "Built from outline Part IV (A–K) and Part E, Class 4 and Class 5 slides, and the Day 4 and Day 5 notes (Brownlie’s pp. 28–30 and ch. 16; Rothwell & Stephens; UNCLOS Part XI; Implementing Agreement). The ‘DAY FIVE CLASS’ class-notes doc was not found in Drive (searched by title and full text, and the 04-05 TREATIES and CLASS NOTES folders); the CLASS NOTES sections inside the Day 4 and Day 5 docs are empty. One block (Applying the Tools, Question 2) is flagged thin because no source records the class’s final answer."
   },
   "blocks": [
    {
     "title": "Baseline Principles",
     "explain": [
      "These are the default rules that apply to every treaty before you look at its specific text. They answer who is bound, how seriously, from when, and what happens when two rules conflict.",
      "Treaties sit inside a hierarchy. Peremptory norms (jus cogens, rules no state can contract out of) sit on top, so a treaty rule cannot contradict one. Below that, treaties and custom interact through the later-in-time rule. The UN Charter has its own priority clause (art. 103) that puts Charter obligations above any other treaty."
     ],
     "items": [
      [
       "Treaties as a source",
       "Treaties are one of the two primary sources of legal obligation under IL, alongside custom. Brownlie’s calls treaties “the most important source of obligation in international law.”",
       [
        "Hierarchy: treaty rules cannot be contrary to peremptory norms. A treaty that conflicts with one gives rise to no obligation at all."
       ]
      ],
      [
       "Parties only",
       "A treaty applies only between the states that are parties to it. A state that never joined has no obligations and no rights under it.",
       [
        "Exception: a particular treaty rule can reach a non-party where there is evidence that the rule has been accepted as custom. The non-party is then bound by the customary rule, not by the treaty itself.",
        "The analysis runs rule by rule, not treaty by treaty. One article of a treaty can be custom while the article next to it is not (see North Sea Continental Shelf in the next block)."
       ]
      ],
      [
       "Pacta sunt servanda (art. 26)",
       "Latin for “agreements must be kept.” A treaty in force binds all its parties, and they must perform it in good faith. Brownlie’s describes treaties as “enduring instruments, not easily disposed of,” and the VCLT presumes a treaty stays valid and in force.",
       [
        "Art. 27: a state may not invoke its own internal law (its constitution or statutes) to justify failing to perform a treaty. A domestic law that conflicts with the treaty is no excuse on the international plane."
       ]
      ],
      [
       "No retroactivity (art. 28)",
       "A party is bound only as to acts or facts that take place after the treaty entered into force for that party, unless the treaty shows a contrary intention. Conduct before the treaty bound the state is judged by the law that applied at the time."
      ],
      [
       "Later-in-time rule (art. 30)",
       "When two treaties on the same subject conflict, the later treaty prevails over the earlier one. Brownlie’s treats this as primarily a matter of interpretation aided by presumptions, and a treaty may expressly provide that it prevails over later incompatible treaties.",
       [
        "Treaty obligations can be displaced by subsequent customary rules: if a new custom develops after the treaty, it can override the treaty rule.",
        "A treaty obligation can displace a prior customary rule: states can agree by treaty to depart from custom that existed before (never from a peremptory norm).",
        "Charter art. 103: if a UN member’s Charter obligations conflict with its obligations under any other international agreement, the Charter obligations prevail.",
        "Whether there is a conflict at all is itself a question of interpretation. A Security Council resolution that can be performed consistently with the ICCPR (International Covenant on Civil and Political Rights) may be read as not intending to override those rights."
       ]
      ],
      [
       "Territorial scope",
       "Unless the treaty says otherwise, it applies within the whole territory of each state party."
      ]
     ],
     "tip": "Outline hierarchy move: a treaty obligation can prevail over an earlier-in-time CIL rule, but never over a peremptory norm. Treaties and custom are not ranked against each other by Article 38(1)’s order; timing and jus cogens decide.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "What Makes a Treaty",
     "multi": true,
     "explain": [
      "Before any treaty rule applies, you have to know the instrument is a treaty. The VCLT definition is art. 2(1)(a): “an international agreement concluded between States in written form and governed by international law, whether embodied in a single instrument or in two or more related instruments and whatever its particular designation.”",
      "The name on the document does not matter. What separates a treaty from a non-binding agreement comes down to two screens: the agreement must be governed by international law, and the parties must intend to create legally binding obligations. If either is missing, the instrument is not a treaty, however it is titled.",
      "Brownlie’s compares this to contract law: there is no consideration requirement, and at customary law there is no writing requirement. The only real question is whether the parties meant to be legally bound."
     ],
     "items": [
      [
       "Treaty (class definition)",
       "Any written document between two or more international actors (usually states) through which they make binding commitments.",
       [
        "It may be a one-off commitment, such as an agreement to exchange hostages. Once performed, it is spent.",
        "It may set ongoing legal obligations regulating the parties’ conduct. That is a “law-making” treaty."
       ]
      ],
      [
       "VCLT art. 2(1)(a)",
       "The formal definition: (1) an international agreement, (2) concluded between states, (3) in written form, (4) governed by international law, (5) in one instrument or several related instruments, (6) whatever it is called.",
       [
        "Art. 1 confines the VCLT to treaties between states, so agreements with or between international organizations fall outside it.",
        "Art. 3 saves what the definition leaves out: the limit does not affect the legal force of agreements with other subjects of IL or of agreements not in written form. Oral agreements can still bind; the VCLT just does not govern them.",
        "Austin’s read in the Day 4 notes: the definition is more underinclusive than overinclusive (organizations and oral agreements are outside it), and the real line is drawn by intention."
       ]
      ],
      [
       "Screen 1 – governed by international law",
       "The agreement must be governed by international law. This excludes commercial arrangements between governments that are governed by national law (for example, one government buying goods from another under a domestic sales contract)."
      ],
      [
       "Screen 2 – intention to create legally binding obligations",
       "The parties must intend to be legally bound. “There are no overriding requirements of form”: an exchange of letters, or even the minutes of a conference, may have the same legal effect as a formal single instrument. The form or title (a joint communiqué, for example) “is not decisive.”",
       [
        "Hard outer limit: administrative arrangements concluded at lower levels of government may well not be considered treaties."
       ]
      ],
      [
       "Memorandum of understanding (MOU)",
       "The classic non-treaty. States use MOUs to record mutual understandings where they do not intend to create legally binding obligations. The name is not conclusive: what matters is the intention of the parties as reflected in the language used. An MOU written in binding language can be a treaty; a document called an “agreement” written in non-binding language may not be."
      ],
      [
       "No requirements of form",
       "A treaty may be called a treaty, convention, charter, agreement, compact, covenant, statute, or protocol, or carry no title at all. The Class 4 exercise showed three forms:",
       [
        "Exchange of notes: two letters that adopt the same text verbatim (the U.S.–Netherlands tax protocol).",
        "Standalone multilateral treaty: the treaty’s own article supplies the mechanism by which states adopt it, and a GA (General Assembly) resolution does nothing (the Outer Space Treaty, art. 14).",
        "Standalone bilateral treaty: may be adopted through a bilateral exchange of letters, separate from the domestic process under U.S. Const. art. II (the U.S.–Bangladesh Bilateral Investment Treaty)."
       ]
      ],
      [
       "Law-making treaty",
       "A treaty creating legal obligations “the one-time observance of which does not discharge the obligation.” Instead of a single exchange, it sets general norms, framed as legal propositions, that govern the parties’ conduct going forward, and not necessarily only their conduct toward each other.",
       [
        "Contrast: a treaty for the joint carrying-out of a single enterprise is not law-making. Fulfilling it discharges it.",
        "The tell: an obligation expressed in universal or “all states” form indicates an intent to create a general rule.",
        "Examples from Brownlie’s: Declaration of Paris (1856), Hague Conventions (1899, 1907), Geneva Protocol (1925), General Treaty for the Renunciation of War (1928), Genocide Convention (1948), the four Geneva Conventions (1949), UNCLOS, and the parts of the UN Charter that are not organizational, notably the Article 2 principles.",
        "Brownlie’s says there is “no dogmatic distinction” between law-making and other treaties."
       ]
      ],
      [
       "Vienna Convention on the Law of Treaties (VCLT)",
       "The 1969 codification of the law of treaties. The ILC (International Law Commission) worked on it from 1949, adopted 75 draft articles in 1966, and the Convention entered into force on 27 January 1980.",
       [
        "Status: when adopted, it was not declaratory of general IL as a whole; some provisions were progressive development. Now, many articles are essentially declaratory of existing law, and the rest are presumptive evidence of emergent rules.",
        "Practical rule: its provisions are regarded as the primary source of the law whether or not the VCLT applies as a treaty in the case.",
        "Courts confirming this: Namibia (termination-for-breach rules as codified custom); the CJEU; the WTO Dispute Settlement Body and ITLOS (interpretation rules as custom); the ICJ recognizes art. 31 as reflecting CIL.",
        "Not covered: treaties involving international organizations, succession to treaties, and the effect of armed conflict on treaties. Each was a separate ILC project."
       ]
      ]
     ],
     "tip": "If a fact pattern gives you a document with a soft title (communiqué, minutes, memorandum), run both screens on its language. The title never settles it.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "When Treaty Rules Become General Law",
     "explain": [
      "Treaties bind only their parties, but a treaty can still matter to non-parties as evidence of custom. This block explains how a treaty rule can come to bind states that never joined, through custom. It comes from Brownlie’s pp. 28–30 (Day 4 notes).",
      "The same instrument can be a treaty obligation for its parties and evidence of custom against non-parties. The notes call this the seam between the two primary sources."
     ],
     "items": [
      [
       "Law-creating effect of law-making treaties",
       "Three factors “combine to produce a powerful law-creating effect”: (1) the number of parties; (2) the explicit acceptance of the rules by states generally; and (3) in some cases, the declaratory character of the provisions (they state what the law already is)."
      ],
      [
       "Conduct of non-parties",
       "Non-parties “may by their conduct accept the provisions of a convention as representing customary international law.” This happened with Hague Convention IV of 1907 and its annexed rules on land warfare."
      ],
      [
       "Bilateral treaties as evidence",
       "Even bilateral treaties may provide evidence of customary rules. If bilateral treaties (extradition treaties, for example) are habitually framed the same way, a court may treat the standard form as law, even where there is no treaty obligation in the case before it. Brownlie’s says caution is necessary here."
      ],
      [
       "Unratified treaties – North Sea Continental Shelf",
       "In special circumstances, even an unratified treaty may be evidence of generally accepted rules. Issue: whether Germany, which had signed but not ratified the Geneva Convention on the Continental Shelf, was bound by it. Holding: only the first three articles represented emergent or pre-existing custom.",
       [
        "The Court’s test: it distinguished articles that allowed reservations from those that did not. Articles that did not allow reservations had, by inference, a more fundamental status.",
        "Article 6 (delimitation of shelf areas) had not become custom through later state practice, particularly the practice of non-parties.",
        "This is why the analysis runs rule by rule."
       ]
      ],
      [
       "Treaties not yet in force",
       "A treaty not yet in force can still carry weight. In Gulf of Maine and Continental Shelf (Libya v Malta), the ICJ gave considerable weight to aspects of UNCLOS before it entered into force. In Gulf of Maine the Court noted the EEZ (exclusive economic zone) had been “adopted without any objections.”"
      ],
      [
       "Baxter paradox",
       "The counterweight. Codifying custom in a treaty can “arrest” custom’s further development. Until “the treaty is revised or amended, the customary international law will remain the image of the treaty as it was before it was revised.” The Day 4 notes mark this as the exam-shaped point: codifying custom can freeze it."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Treaties & Third States",
     "multi": true,
     "explain": [
      "A third state is a state that is not a party to the treaty. The baseline maxim is pacta tertiis nec nocent nec prosunt: a treaty neither harms nor benefits third parties. Brownlie’s calls this a corollary of consent and of state sovereignty and independence.",
      "The VCLT treats obligations and rights differently. Imposing a duty on a non-party requires strict, written consent. Giving a non-party a right is easier because a benefit is presumed welcome. This is stricter than domestic contract law: there are no incidental third-party beneficiaries."
     ],
     "items": [
      [
       "Pacta tertiis (art. 34)",
       "“A treaty does not create either obligations or rights for a third State without its consent.” Brownlie’s says this falls slightly short of the customary rule, which also holds that treaties cannot infringe the rights of third states without their consent.",
       [
        "Example from the notes: the U.S. objection that its nationals could fall under ICC jurisdiction without U.S. consent through Rome Statute art. 12(2)(a). Brownlie’s says equating nationals with the state makes the argument problematic."
       ]
      ],
      [
       "Obligations for a third state (art. 35)",
       "An obligation arises for a third state only if both conditions are met:",
       [
        "(1) the parties to the treaty intend the provision to be the means of establishing the obligation; and",
        "(2) the third state expressly accepts that obligation in writing.",
        "Both are required. Silence, conduct, or oral acceptance is not enough under art. 35."
       ]
      ],
      [
       "Rights for a third state (art. 36)",
       "Rights are treated more loosely (the stipulation pour autrui, a provision in favor of another). The third state’s assent is presumed unless it indicates otherwise. It can disclaim the right expressly or tacitly, by failing to exercise it.",
       [
        "Example: treaties on major international waterways, including on one view the Panama Canal.",
        "Art. 37(2): if the parties intended it, the right cannot be revoked or modified without the third state’s consent."
       ]
      ],
      [
       "Apparent exceptions",
       "Two situations look like a treaty binding a non-party, but each rests on something else:",
       [
        "Custom: a treaty rule binds non-parties if it becomes part of CIL. The non-party is bound by custom.",
        "Aggressor states: a treaty may provide for lawful sanctions on an aggressor. Art. 75 reserves obligations arising for an aggressor “in consequence of measures taken in conformity with the Charter.”"
       ]
      ],
      [
       "Charter art. 2(6)",
       "The UN “shall ensure that states which are not Members act in accordance with these Principles so far as may be necessary for the maintenance of international peace and security.” Kelsen read this as imposing duties on non-members, which could only fit general principle through the customary status of the Article 2 principles. Brownlie’s says the question is now largely academic because virtually all states are UN members."
      ],
      [
       "Rejected: objective regimes",
       "The ILC did not accept that treaties creating “objective regimes” (demilitarizing a territory, a legal regime for a major waterway) have a special place in the law of treaties that would bind everyone."
      ]
     ],
     "tip": "Obligation vs. right is the exam distinction: an obligation needs intent by the parties plus express written acceptance; a right needs only the absence of objection.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Consent & Entry Into Force",
     "explain": [
      "Two separate questions: when does the treaty come into force at all, and has this particular state consented to be bound? The treaty’s own text usually answers both. The VCLT fills gaps.",
      "The modes of consent (signature, ratification, accession, acceptance, approval) are labels for the same thing: a state expressing that it agrees to be bound. Brownlie’s says the label does not control; the treaty’s provisions and the parties’ intention do."
     ],
     "items": [
      [
       "Entry into force (art. 24)",
       "A treaty enters into force whenever the treaty stipulates (for example, after a set number of ratifications). If the treaty is silent, it enters into force when all the negotiating states have consented to be bound.",
       [
        "Example: UNCLOS entered into force on 16 November 1994, one year after deposit of the sixtieth instrument of ratification or accession, as its art. 308 required."
       ]
      ],
      [
       "Provisional application (art. 25)",
       "A treaty may be applied before it enters into force if the treaty so provides or the negotiating states explicitly agree. Used in cases of urgency or where ratification is uncertain, in areas like arms control, status of forces, fisheries, and amendments to organizations’ charters.",
       [
        "Art. 25(2): provisional application ends if a state notifies the others that it does not intend to become a party.",
        "Wrinkle: pacta sunt servanda (art. 26) is not expressed to cover provisionally applied treaties. The ILC guidelines treat provisional application as “a real (though precarious) commitment,” and how far its effects reach remains controversial (notably under the Energy Charter Treaty)."
       ]
      ],
      [
       "Signature",
       "Rarely used now to adopt a treaty; mostly it signals political support. Historically it was the method of adopting treaties. Signature also authenticates the text.",
       [
        "If the treaty is not subject to ratification, signature establishes consent to be bound."
       ]
      ],
      [
       "Effect of signature subject to ratification",
       "When a treaty requires ratification, signature does not establish consent to be bound and does not create an obligation to ratify. It qualifies the state to go on to ratify, accept, or approve.",
       [
        "VCLT art. 18: signature creates an interim good-faith obligation to refrain from acts that would defeat the object and purpose of the treaty. The Day 4 notes flag this as a surprise: signature can bind you in this limited way before you ratify."
       ]
      ],
      [
       "Ratification",
       "A writing in which the party accepts the treaty, made before the treaty enters into force and sent to the treaty’s depositary (the state or organization that holds the instruments; the UN Secretariat is a major one).",
       [
        "Brownlie’s separates two acts: the internal approval (by a parliament, for example) and the international act of exchanging or depositing the instrument. The international act is the one that expresses consent to be bound.",
        "Art. 14 decides whether ratification is needed by reference to intention, without any presumption."
       ]
      ],
      [
       "Accession (also approval or acceptance)",
       "Ratification by a state that did not sign, typically when the treaty is already in force. It is also sent to the depositary. Accession may be the only way to join, for example a convention approved by the GA and opened for accession. “Acceptance” and “approval” describe the same substance, and a treaty open to signature “subject to acceptance” is equivalent to “subject to ratification.”"
      ],
      [
       "Full powers (art. 2(1)(c))",
       "A document giving its bearer authority to negotiate, sign, and seal a treaty, but not to commit the state. In less formal agreements full powers are often dispensed with.",
       [
        "Heads of State: every Head of State is presumed able to act for the state in its international relations (Bosnian Genocide). Cameroon v Nigeria: a head of state’s full powers derive from the position at the top of the state’s hierarchy."
       ]
      ],
      [
       "Registration (Charter art. 102)",
       "Every treaty a UN member enters into must be registered with the UN Secretariat and published. An unregistered treaty may not be invoked before any UN organ, but non-registration does not affect the treaty’s validity.",
       [
        "Purpose: discouraging secret diplomacy (traced to Woodrow Wilson).",
        "“Every international agreement” is read broadly, and there is no time limit for registering, so in practice it constrains little."
       ]
      ],
      [
       "Finding treaties",
       "For treaties generally: the United Nations Treaty Series Online (treaties.un.org). For treaties the U.S. has adopted: United States Treaties in Force, updated by the State Department (state.gov/treaties-in-force)."
      ]
     ],
     "tip": "Class 4 Exercise 2 asked for each treaty’s entry-into-force mechanism (UN Charter, Rome Statute, CTBT). On the exam, check the final clauses of the treaty in the source packet for its own entry-into-force and consent rules before applying the art. 24 default.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Reservations",
     "multi": true,
     "explain": [
      "A reservation lets a state join a treaty while rejecting or modifying one of its obligations for itself. Brownlie’s notes there is no contract analogue: a party can unilaterally reshape its own obligations, subject to limits.",
      "The permissibility test works in order. First, follow the treaty’s own reservation procedure if it has one. If the treaty is silent, ask whether the reservation is compatible with the treaty’s object and purpose. Art. 19 lists the three bars.",
      "If a reservation is invalid, it has no legal effect. The open question is what happens to the state: does it stay a party without the reservation, or does it fall out of the treaty? Practice diverges."
     ],
     "items": [
      [
       "Reservation (art. 2(1)(d))",
       "“A unilateral statement, however phrased or named, made by a State, when signing, ratifying, accepting, approving or acceding to a treaty, whereby it purports to exclude or to modify the legal effect of certain provisions of the treaty in their application to that State.”",
       [
        "Unilateral: one state makes it.",
        "Timing: only at signature, ratification, acceptance, approval, or accession.",
        "Effect: it excludes or modifies a provision’s legal effect for that state. The label does not matter (“however phrased or named”)."
       ]
      ],
      [
       "Interpretive declaration",
       "A state’s expression of its view on what a treaty provision means, not put forward as a condition of being bound. The line between a declaration and a reservation is drawn by effect, not label: if a so-called declaration in fact excludes or modifies a provision’s legal effect, it is a reservation.",
       [
        "Example: UNCLOS art. 310 permits declarations only if they do not in effect take the form of a reservation. Australia objected to the Philippines’ declaration on how it read the archipelagic waters provisions."
       ]
      ],
      [
       "Art. 19 bars",
       "A state may not make a reservation where:",
       [
        "(a) the treaty prohibits the reservation;",
        "(b) the treaty allows only specified reservations and this is not one of them; or",
        "(c) the reservation is incompatible with the object and purpose of the treaty (the fallback test when the treaty is silent)."
       ]
      ],
      [
       "Reservations to the Genocide Convention (ICJ 1951)",
       "Source of the object-and-purpose compatibility test. The Genocide Convention had no reservations clause, and states disagreed. The Court stressed the drafters’ intent that the Convention be universal. Holding: a state whose reservation is objected to by some parties but not others can be regarded as a party if the reservation is compatible with the Convention’s object and purpose.",
       [
        "Before 1951 there were two systems: absolute integrity (League and UN Secretary-General: a reservation was valid only if the treaty allowed it or all parties accepted) and flexibility (Pan-American Union/OAS: the reserving state is a party with respect to non-objecting states).",
        "The ILC first rejected compatibility as too subjective (1951), the GA directed the Secretary-General to follow the Court (1952, extended in 1959), and the ILC adopted compatibility in 1962."
       ]
      ],
      [
       "Weaknesses of the compatibility test",
       "Under art. 20, applying the test is left to each state’s own appreciation through acceptances and objections. It is unclear how it applies to dispute-settlement clauses, it may not balance a treaty’s integrity and effectiveness, and Brownlie’s doubts it has any place for reservations that are unlawful."
      ],
      [
       "Invalid reservations",
       "An invalid reservation has no legal effect. Practice diverges on whether a state with an invalid reservation is still bound by the rest of the treaty.",
       [
        "Severability: the ECtHR (European Court of Human Rights, in Belilos and Loizidou) and the Human Rights Committee treat an invalid reservation as severable. The state remains a party without the benefit of its reservation, whatever it intended. The Committee’s examples: a state cannot reserve the right to torture or to presume a person guilty.",
        "ILC Guide to Practice on Reservations (2011), a non-binding toolbox: Guideline 4.5.1 says an invalid reservation is null and void. The Guide presumes the reserving state stays bound without the reservation unless it expressed or established a contrary intention, so the reserving state’s intention decides the outcome."
       ]
      ]
     ],
     "tip": "Class 4 practice asked, for the CTBT, UN Charter, and Rome Statute, how states can reserve, how the treaty can be modified, and whether states can withdraw. On the exam, look first for the treaty’s own reservations clause; go to object and purpose only if there is none.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Amendment & Modification",
     "explain": [
      "There are two ways to change a treaty. Amendment changes it for everyone and needs all parties. Modification lets a subset of parties change terms among themselves only. Brownlie’s says amendment depends on consent and is primarily political.",
      "Interpretation through subsequent practice (art. 31(3)(b)) is legally distinct from modification, though Brownlie’s says the distinction is often a fine one."
     ],
     "items": [
      [
       "Amendment (art. 39)",
       "All parties agree to a change, carried out through the method by which the treaty was concluded. Art. 39 requires no particular formality for expressing that agreement.",
       [
        "Many treaties supply their own amendment procedure, including the UN Charter (arts. 108, 109). UNCLOS art. 314 lets provisions about the Area be amended at any time at a state party’s request."
       ]
      ],
      [
       "Modification inter se (art. 41)",
       "Some parties agree to modify a subset of treaty terms. The change applies only as between those who agree (inter se means “between each other”); the other parties keep the original terms. Art. 41 restricts this in certain cases.",
       [
        "UNCLOS art. 311(3) states the limit: two or more parties may modify or suspend provisions among themselves only if the modification does not relate to a provision derogation from which is incompatible with the effective execution of the Convention’s object and purpose."
       ]
      ],
      [
       "Other routes",
       "A treaty can also be modified by a later treaty between the same parties (compare art. 30 on successive treaties and art. 59 on termination by a later treaty on the same subject) and by the emergence of a new peremptory norm."
      ],
      [
       "Rejected: modification by subsequent practice",
       "The ILC’s Final Draft would have let consistent practice establishing the parties’ agreement modify a treaty. The Vienna Conference rejected it because such a rule “would create instability.”",
       [
        "Brownlie’s calls the result unsatisfactory: art. 39 requires no formality for amendment, consistent practice can be strong evidence of common consent, and this kind of modification occurs in practice anyway."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Termination & Withdrawal",
     "multi": true,
     "explain": [
      "The starting point favors keeping treaties alive: states cannot unilaterally walk away, all parties together may end a treaty, and treaties keep applying in wartime. Unilateral exit is available only through specific gateways.",
      "Each gateway has its own requirements. Brownlie’s says these pleas are rarely invoked and even more rarely succeed, and that the excuse doctrines are narrower than in contract law. The slides compare material breach to contract law, where there is much disagreement over what counts as “material.”"
     ],
     "items": [
      [
       "Baseline rules",
       "States cannot unilaterally withdraw from a treaty. All parties may agree to terminate it. Treaty rules continue to apply during wartime.",
       [
        "Armed conflict does not automatically terminate treaties. The UN Charter and the 1949 Geneva Conventions are meant to bind in war. ILC draft articles (2011): armed conflict does not ipso facto terminate or suspend treaties; it depends on subject matter and the conflict’s extent, scale, intensity, and duration. A state may suspend a treaty to the extent it is incompatible with self-defense (art. 14 of the drafts)."
       ]
      ],
      [
       "Withdrawal by treaty terms or consent (art. 54)",
       "A state may terminate or withdraw in conformity with the treaty’s own provisions, or at any time by consent of all the parties after consultation."
      ],
      [
       "Silent treaties (art. 56)",
       "The slides say a state may withdraw if the treaty’s text suggests it is reasonable, which is controversial. Art. 56 presumes against withdrawal: a treaty with no termination or withdrawal clause cannot be denounced unless (1) the parties intended to allow it, or (2) a right of withdrawal may be implied by the nature of the treaty.",
       [
        "At least twelve months’ notice is required.",
        "Treaties of peace are not open to unilateral denunciation."
       ]
      ],
      [
       "Implied termination by agreement",
       "A treaty may be treated as terminated if all parties conclude a later treaty meant to replace it or incompatible with it. “Desuetude” (falling out of use) is probably not a term of art, though an ancient treaty can become meaningless."
      ],
      [
       "Material breach (art. 60)",
       "If another party seriously (“materially”) breaches the treaty, the injured party may invoke the breach to terminate or suspend. Art. 60(3) defines material breach as either:",
       [
        "(a) a repudiation of the treaty not sanctioned by the VCLT; or",
        "(b) the violation of a provision essential to the accomplishment of the object or purpose of the treaty.",
        "The focus is on the importance of the provision violated, not the size of the breach.",
        "Excluded (art. 60(5)): provisions protecting the human person in treaties of a humanitarian character. A state cannot answer a breach by dropping humanitarian protections.",
        "Gabčíkovo-Nagymaros: Hungary could not terminate for Slovakia’s breach because Hungary was itself in breach and had provoked the breach it relied on. The treaty endured though both parties were in breach.",
        "Rainbow Warrior: France committed a material breach, but it had little consequence because New Zealand sought performance, not termination. It matters which party is trying to get rid of the treaty."
       ]
      ],
      [
       "Supervening impossibility (art. 61)",
       "Something essential to the treaty no longer exists: the permanent disappearance or destruction of an object indispensable for executing the treaty.",
       [
        "Slide example: a water-sharing treaty that depends on a dam that is destroyed in war. Brownlie’s examples: submergence of an island, a river drying up, a railway destroyed by earthquake.",
        "Not automatic: a party must invoke it.",
        "Barred where the impossibility results from the invoking party’s own breach."
       ]
      ],
      [
       "Fundamental change of circumstances (art. 62, rebus sic stantibus)",
       "Latin for “things standing thus.” A party may invoke a fundamental change only if both requirements are met:",
       [
        "(1) the change was unforeseen by the parties; and",
        "(2) the circumstances that existed at conclusion were an essential basis of the parties’ consent.",
        "Boundary treaties are excluded, to avoid an obvious source of threats to the peace.",
        "Example: a member of a military alliance has a change of government incompatible with the basis of the alliance.",
        "Fisheries Jurisdiction (UK v Iceland): art. 62 accepted as custom, but new fishing techniques were not a fundamental change.",
        "Gabčíkovo-Nagymaros: political change, reduced economic viability, new environmental knowledge, and new environmental norms were all rejected; the changes did not radically transform the obligations still to be performed. The plea applies only in exceptional cases.",
        "Racke (CJEU): a relaxed application upholding suspension of the EC–Yugoslavia agreement as Yugoslavia broke up."
       ]
      ],
      [
       "Procedure and consequences",
       "VCLT arts. 65–68 govern the procedure for invoking termination or invalidity; arts. 69–72 cover the consequences."
      ]
     ],
     "tip": "Self-inflicted problems do not help the invoking state: a party in breach cannot rely on the other side’s breach it provoked (Gabčíkovo), and a party cannot claim impossibility it caused.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Invalidity",
     "explain": [
      "Invalidity asks whether the treaty (or a state’s consent) was defective from the start. Validity is presumed (art. 42), Part V of the VCLT lists the grounds exhaustively, and Brownlie’s says these grounds rarely arise and are even more rarely upheld.",
      "Keep invalidity separate from excuse. Whether a state is justified in not performing a valid treaty is a question for the law of state responsibility, which the VCLT expressly reserves (art. 73).",
      "The key distinction is void vs. voidable. A void treaty has no effect at all. A voidable treaty stands unless the affected party invokes the defect."
     ],
     "items": [
      [
       "Validity is presumed (art. 42)",
       "The validity and continuance in force of a treaty, and of consent to be bound, is presumed. The party claiming invalidity has to establish one of the listed grounds."
      ],
      [
       "Peremptory norm (arts. 53, 64)",
       "Art. 53: a treaty is void if, when concluded, it conflicts with a peremptory norm (jus cogens). Art. 64: a treaty becomes void if it conflicts with a peremptory norm that emerges later, without retroactive effect. Because a peremptory norm permits no derogation, the form the derogation takes does not matter."
      ],
      [
       "Error (art. 48)",
       "The treaty rests on an incorrect or mistaken fact. The error must relate to a fact or situation assumed to exist when the treaty was concluded, and it must have formed an essential basis of the state’s consent.",
       [
        "Barred if the state contributed to the error by its own conduct, or if the circumstances put it on notice of a possible error."
       ]
      ],
      [
       "Fraud (art. 49)",
       "A state was fraudulently induced to conclude the treaty by another negotiating state. There are few precedents; fraudulent misrepresentation of a material fact that induces an essential error is usually handled as error."
      ],
      [
       "Corruption of a representative (art. 50)",
       "Added because the ILC thought corruption was not adequately covered as fraud. Probably voidable."
      ],
      [
       "Coercion (arts. 51–52)",
       "A state or its representative was coerced into consenting.",
       [
        "Art. 51 (coercion of a representative): consent procured by acts or threats against the representative, including blackmail and threats against the representative’s family, is without legal effect.",
        "Art. 52 (coercion of a state): a treaty procured by the threat or use of force in violation of the Charter is void. A proposal to include economic or political pressure was withdrawn and replaced by a declaration in the Final Act."
       ]
      ],
      [
       "Internal law (art. 46)",
       "The treaty violates what a state could agree to under its internal law. The slides flag this as controversial: how to assess it, and what the limits are. The ILC approach: a presumption that the state’s agent was competent, with an exception for manifest irregularity. It has never been successfully invoked before the ICJ."
      ],
      [
       "Unauthorized negotiator (art. 47)",
       "Those negotiating were not authorized to do so. A specific restriction on a representative’s authority counts only if it was notified to the other negotiating states beforehand. The slides say this is less relevant now that signature usually is not how a treaty enters into force."
      ],
      [
       "Void vs. voidable",
       "Void without more: coercion of a state and conflict with an existing or emergent peremptory norm (coercion of a representative is likewise without legal effect). Voidable, so the party must invoke it: internal-law incompetence, excess of authority, error, fraud, and probably corruption.",
       [
        "Separability (art. 44): cutting out only the affected clauses is not available for coercion of a representative, coercion of a state, or conflict with an existing peremptory norm. The whole treaty falls."
       ]
      ],
      [
       "Invalidity is not excuse (art. 73)",
       "Justifying non-performance of a valid treaty belongs to the law of state responsibility, which the VCLT expressly reserves. Do not argue invalidity when the facts raise a justification for breach."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Interpretation · Art. 31 (Primary Tools)",
     "multi": true,
     "explain": [
      "Art. 31 is the general rule of treaty interpretation, and the ICJ treats it as CIL. The formula: treaty meaning = ordinary meaning of the term + context of the term + object and purpose of the treaty, all applied in good faith.",
      "The ILC called applying art. 31 “a single combined operation”: the elements interact, and it is not a strict sequential checklist. The VCLT adopted the textual approach (the parties’ intention as expressed in the text is the best guide). It did not adopt the restrictive approach (reading limits on sovereignty narrowly), the teleological approach (preferring whatever reading best serves the purpose), or the effectiveness approach as general rules.",
      "Compared with statutory interpretation, the notes observe: text dominates by codified command, purpose sits inside the rule instead of competing with it, legislative history (travaux) is demoted to a supplementary role, and conduct after the treaty (subsequent agreement and practice) counts as primary material."
     ],
     "items": [
      [
       "Art. 31(1) – the general rule",
       "A treaty is interpreted “in good faith in accordance with the ordinary meaning to be given to the terms of the treaty in their context and in the light of its object and purpose.”"
      ],
      [
       "Ordinary meaning",
       "The common usage of the words at the time the treaty was negotiated (the principle of contemporaneity), except where the parties intended a specialized meaning. The Day 5 notes add this is especially important in IL because many treaties are old.",
       [
        "Polish Postal Service in Danzig (PCIJ): Poland’s treaty right to run a postal service in Danzig was not limited to the inside of the post office building. “Postal service” took its ordinary sense, including the normal functions of a postal service.",
        "Special meaning (art. 31(4)): a special meaning applies if it is established the parties intended it. The proponent of the special meaning bears the burden of proof.",
        "Evolutive exception (Navigational Rights): where parties use generic terms, knowing the meaning is likely to evolve, in a treaty of continuing duration, they are presumed to have intended an evolving meaning. “For the purposes of commerce” in an 1858 treaty covered modern commercial tourism. Brownlie’s notes this sits in tension with contemporaneity."
       ]
      ],
      [
       "Context (art. 31(2))",
       "In addition to the text itself, context means:",
       [
        "other portions of the treaty, including its preamble and annexes (the principle of integration: meaning emerges from the treaty as a whole);",
        "(a) any agreement relating to the treaty made between all the parties in connection with its conclusion; and",
        "(b) any instrument made by one or more parties in connection with the conclusion and accepted by the other parties as related to the treaty."
       ]
      ],
      [
       "Object and purpose",
       "What the treaty is trying to achieve. The slides list where it comes from:",
       [
        "the treaty text, with the preamble often especially helpful;",
        "subsequent agreements and state practice (art. 31(3)(a)–(b)); and",
        "relevant rules of IL prevailing at the time of negotiation (art. 31(3)(c))."
       ]
      ],
      [
       "Art. 31(3) – taken into account together with context",
       "Three further elements:",
       [
        "(a) any subsequent agreement between the parties on interpretation or application. These can take various forms and need not be formal amendments.",
        "(b) any subsequent practice in applying the treaty that establishes the parties’ agreement on its interpretation. The standard is practice that clearly establishes the understanding of all the parties; practice by individual parties has some probative value. The ICJ has used the practice of organizations, with cautions: outvoted members may not be bound, and political organs’ practice involves discretion and opportunism.",
        "(c) any relevant rules of IL applicable between the parties (systemic integration, placing the treaty within general IL). Oil Platforms: applying relevant IL rules is “an integral part of the task of interpretation,” but the majority was criticized for using use-of-force rules to read a freedom-of-commerce clause. Tribunals should be cautious about importing extraneous rules."
       ]
      ]
     ],
     "tip": "Outline standing move: recite the art. 31 rule the first time you interpret a treaty in an answer, then refer back to it. Brownlie’s warns these rules should work as a flexible guide, not rigid instruments forcing a preliminary choice of meaning.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Supplementary Means · Art. 32",
     "multi": true,
     "explain": [
      "Art. 32 lets you look beyond the treaty text and its art. 31 context to outside material, mainly the negotiating history. It is a back-up tool with a gate: you reach it only for limited purposes.",
      "The reason for the gate: art. 31’s elements relate to the agreement as it was authentically expressed in the text. Preparatory work lacks that authentic character, and in multilateral negotiations the records may be partial, confused, or equivocal."
     ],
     "items": [
      [
       "When you may use supplementary means",
       "Only where the primary art. 31 tools:",
       [
        "(a) leave the meaning ambiguous or obscure; or",
        "(b) lead to a result that is manifestly absurd or unreasonable.",
        "Art. 32 also permits using them to confirm a meaning already reached under art. 31."
       ]
      ],
      [
       "What the supplementary means are",
       "The preparatory work of the treaty (travaux préparatoires: drafts, negotiating records, conference records, comparable to legislative history) and the circumstances of the treaty’s conclusion."
      ],
      [
       "How the ICJ uses them",
       "The Court generally refuses to resort to preparatory work if the text is sufficiently clear, but it has used preparatory work to confirm a conclusion reached by other means."
      ],
      [
       "Drafting history of art. 32",
       "At the Vienna Conference the U.S. proposed merging arts. 31 and 32, which would have given preparatory work more weight. The proposal received little support. The ILC said the two articles operate in conjunction without a rigid line, but kept the distinction."
      ],
      [
       "Not teleology",
       "Using preparatory work under art. 32(b) is different from the teleological approach. Brownlie’s adds that the textual approach often leaves a choice of meanings, and policy cannot be kept entirely out of that choice."
      ]
     ],
     "tip": "Do not open with the travaux. State the art. 31 reading first, then say whether the gate (ambiguity or manifest absurdity) is met before using art. 32 material, or use it only to confirm.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Applying the Tools · Deep Seabed Exercise",
     "explain": [
      "Class 5 practiced interpretation on UNCLOS Part XI (the deep seabed regime) and the 1994 Implementing Agreement. The method from the slides: first look at the specifically on-point treaty text; then turn to the general principles (context, object and purpose). When on-point texts contradict, context, including the treaties’ own amendment and modification clauses, resolves the conflict.",
      "Background terms from the Day 5 notes: the Area is the seabed and ocean floor and subsoil beyond the limits of national jurisdiction (UNCLOS art. 1(1)(1)). The International Seabed Authority is the organization UNCLOS set up to regulate deep seabed mining. The Enterprise is the UNCLOS body meant to mine the Area itself, with proceeds going to less developed states. The Area and its resources are the common heritage of mankind (art. 136).",
      "Why there are two instruments: the U.S. under Reagan objected to Part XI’s common heritage features such as technology transfer, and most developed states stayed out. The 1994 Implementing Agreement was negotiated to rewrite Part XI so they would join. Its preamble states the goal of “universal participation” and names “market-oriented approaches.”"
     ],
     "items": [
      [
       "Order of analysis",
       "First the meaning of specifically on-point treaty text, then the general principles (context, object and purpose). This tracks the general rules of interpretation."
      ],
      [
       "Conflicting provisions",
       "When on-point texts contradict, context resolves the conflict: look to related agreements among the parties and to the treaty’s own amendment and modification provisions.",
       [
        "Specific over general: where a treaty has both a general and a subject-specific amendment article, the specific one controls. UNCLOS art. 312 is general; art. 314 (provisions about the Area may be amended at any time at a state party’s request) is specific, so look to art. 314.",
        "Inter se modification limit: under UNCLOS art. 311(3), two or more parties may modify provisions among themselves only if that is not incompatible with the effective execution of the Convention’s object and purpose.",
        "Priority clauses: an implementing agreement that says it and the treaty are “a single instrument” and that it prevails in case of inconsistency displaces the conflicting treaty text. Implementing Agreement art. 1(1): parties “undertake to implement Part XI in accordance with this Agreement.” Art. 2(1): the Agreement and Part XI are interpreted and applied together as a single instrument, and the Agreement prevails over any inconsistency."
       ]
      ],
      [
       "Question 1 – technology transfer",
       "To participate in deep seabed mining, what obligations do states have to transfer technology? The on-point texts contradict:",
       [
        "UNCLOS art. 144(2): the Authority and states parties “shall cooperate in promoting the transfer of technology and scientific knowledge relating to activities in the Area.”",
        "UNCLOS Annex III art. 5: mining applicants must describe their technology to the Authority, must make it available to the Enterprise on “fair and reasonable” commercial terms whenever requested, and face a mandatory license for technology not publicly available.",
        "Implementing Agreement Annex sec. 5, which applies “in addition to” art. 144: the Enterprise and developing states “shall seek to obtain” technology on fair and reasonable commercial terms on the open market or through joint ventures; if they cannot, the Authority “may request” contractors and sponsoring states to cooperate in facilitating acquisition, consistent with protecting intellectual property. And: “The provisions of Annex III, article 5, of the Convention shall not apply.”",
        "Resolution through context: the Implementing Agreement’s priority clause (art. 2(1)) and the treaties’ modification provisions point to the Implementing Agreement controlling. Object and purpose directs you to subsequent agreements and practice, which is what the Implementing Agreement is.",
        "Result in the Day 5 notes: the mandatory Annex III art. 5 transfer obligation no longer applies. What remains is art. 144’s duty to cooperate in promoting transfer, plus sec. 5’s open-market and cooperation scheme. The obligation runs to cooperation, not to transfer."
       ]
      ],
      [
       "Question 2 – can the Authority ban deep seabed mining?",
       "The slides break the question into steps: (1) Do specific provisions explicitly authorize the Authority to ban activities in the Area? No. (2) Do specific provisions require the Authority to authorize activities? No. (3) Then turn to the general provisions and preambles:",
       [
        "UNCLOS art. 140: activities must be carried out for the benefit of mankind as a whole, with equitable sharing of financial and economic benefits.",
        "UNCLOS art. 145: necessary measures must be taken to protect the marine environment from harmful effects of activities in the Area, and the Authority adopts rules on pollution and on protecting flora and fauna.",
        "UNCLOS art. 148: effective participation of developing states, with special regard for their interests.",
        "Implementing Agreement Annex sec. 6: production policy (sound commercial principles, GATT rules, no subsidies, non-discrimination), which implies that development will happen.",
        "Preambles: UNCLOS’s preamble stresses equitable and efficient use of resources, protection of the marine environment, developing states’ needs, and common heritage. The Implementing Agreement’s preamble reaffirms common heritage and environmental concern while adopting market-oriented approaches."
       ]
      ],
      [
       "Authority to act (outline rule)",
       "Where a treaty neither expressly authorizes nor expressly requires an action by an institution, turn to the general provisions and preambles to decide whether the action is consistent with the treaty."
      ]
     ],
     "tip": "Exam pattern from Class 5: identify every on-point provision across all instruments, check the instruments’ own relationship and amendment clauses before deciding which text controls, and use preambles for object and purpose.",
     "check": {
      "status": "thin",
      "note": "For Question 2 (whether the Authority can ban mining), the Class 5 slides list the steps and the relevant provisions but stop at “What do the preambles suggest?” The Day 5 notes do not record the class’s conclusion, and the ‘DAY FIVE CLASS’ class-notes doc was not found in Drive. The provisions are explained; the answer is not stated in any source."
     }
    }
   ]
  },
  {
   "title": "Customary IL",
   "overview": [
    "Customary international law (CIL) is the second main source of international law after treaties. A treaty binds only the states that sign up to it. Custom binds states because of what they do and why they do it: a rule becomes custom when states follow a general practice and follow it because they believe the law requires it. ICJ (International Court of Justice) Statute art. 38(1)(b) calls this \"a general practice accepted as law.\"",
    "The unit answers one big question: how do you prove that a rule is custom? The answer has two elements that are tested separately. State practice asks what states do. Opinio juris asks whether they do it out of a sense of legal obligation. The ILC (International Law Commission) Conclusions on Identification of CIL, which the General Assembly took note of in a 2019 resolution, set out detailed rules for both elements.",
    "The rest of the unit builds on those two elements: how a state can opt out of a forming rule (persistent objector), how a rule can bind only a small group of states (particular custom), how treaties and custom interact, what counts as evidence (resolutions, court decisions, scholarship), and how the analysis looks in practice (the ICRC study, LLMs, and the ICJ Climate Change Advisory Opinion).",
    "On the exam, any time a fact pattern relies on a non-treaty rule, a draft instrument, a resolution, or a treaty against a non-party, you need to define CIL and run both elements. The professor flagged everything before the North Sea case as the important material; the North Sea case and the Class 7 climate exercise were practice applications."
   ],
   "check": {
    "status": "complete",
    "note": "No separate Day 6 or Day 7 'Class Notes' docs exist in Drive for International Law (searched by title and in the class folders); content built from the outline, Class 6 and 7 slides, and Day 6 and Day 7 reading notes."
   },
   "blocks": [
    {
     "title": "Definition",
     "multi": true,
     "explain": [
      "CIL has two required elements: (1) a general pattern of state practice, and (2) opinio juris, meaning the states perform that practice because they believe they are legally obligated to. In the outline's shorthand: state practice + opinio juris. If either element is missing, there is no customary rule.",
      "ILC Conclusions 2 and 3 say each element must be assessed separately. You cannot treat the practice itself as proof of the legal belief. In assessing the evidence, you consider the nature of the rule, the overall context, and the circumstances in which the evidence arose.",
      "Brownlie's adds that custom is the conclusion drawn from practice and acceptance as law. The evidence that supports custom (a statute, a diplomatic note) is not itself the rule."
     ],
     "items": [
      [
       "Customary international law (CIL)",
       "A general pattern of state practice plus performance due to legal obligation. ICJ Statute art. 38(1)(b) defines it as \"a general practice accepted as law.\" Custom is what states do because they think they have to, not because they think it is a good idea.",
       [
        "Element 1: state practice (what states do).",
        "Element 2: opinio juris (why they do it: a sense of legal right or obligation).",
        "Each element is assessed separately, considering the nature of the rule, the overall context, and the circumstances of the evidence (ILC Concls. 2–3)."
       ]
      ],
      [
       "Usage",
       "Something states do because they want to, with no sense of legal obligation. Examples from the reading are ceremonial salutes and diplomatic parking courtesies. A usage has the practice element but lacks opinio juris, so it is not custom.",
       [
        "Consistent comity (courtesy between states) can ripen into custom once states come to accept it as legally required."
       ]
      ]
     ],
     "tip": "The usage vs. custom distinction shows why opinio juris matters: identical conduct can be a courtesy or a legal duty, and only the second is CIL.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "State Practice",
     "multi": true,
     "explain": [
      "State practice is the first element: the conduct of states. The slides give three rules: it must be the practice of states, no fixed duration is required, and it must be substantially consistent across states. ILC Conclusion 8 restates this as practice that is sufficiently widespread, representative, and consistent.",
      "The ILC spends many conclusions on practice. The reading notes explain why: the detailed rules prevent cherry-picking. Many kinds of conduct count, but isolated acts or inconsistent evidence do not establish a general practice.",
      "Brownlie's says the standard is substantial uniformity, not perfect uniformity, and no minimum age of the practice is needed if it is general and consistent enough. North Sea set a demanding version: practice must be extensive and virtually uniform, including the practice of specially affected states (the states whose interests the rule most affects)."
     ],
     "items": [
      [
       "Three rules",
       "(1) The practice must be a practice of STATES, so the conduct of non-state actors does not count on its own. (2) No particular duration is needed, but the longer the practice has gone on, the better the case for custom. (3) The practice must be substantially consistent across states, but it need not be precisely the same everywhere."
      ],
      [
       "ILC Concl. 8",
       "The practice must be sufficiently widespread (many states), representative (states from different regions and interests, including those specially affected), and consistent (states act the same way). Once that standard is met, no fixed duration is required."
      ],
      [
       "Forms of practice (ILC Concls. 4–6)",
       "State practice includes executive, legislative, judicial, and other state conduct. It can take the form of physical acts, statements, and, in some circumstances, inaction (a state refraining from doing something). There is no predetermined hierarchy: no form automatically outweighs another.",
       [
        "Examples: diplomatic correspondence, conduct in connection with treaties and resolutions (such as votes), military operations, military manuals, legislation, administrative acts, and national court judgments."
       ]
      ],
      [
       "Other actors",
       "The practice of international organizations (IOs) may contribute to state practice in certain cases. The conduct of other actors, such as NGOs (non-governmental organizations), can help assess practice but is not itself practice that creates custom."
      ],
      [
       "Practice as a whole (ILC Concl. 7)",
       "A state's available practice is assessed as a whole, not by picking out one act. If a state's own practice is internally inconsistent (for example, its statements say one thing and its conduct another), that inconsistency reduces the weight its practice receives."
      ]
     ],
     "tip": "Remember the reason behind the detailed practice rules: they stop an advocate from cherry-picking a few favorable examples.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Opinio Juris",
     "multi": true,
     "explain": [
      "Opinio juris is the second element: states follow the practice because they believe they have to, acting from a sense of legal right or obligation rather than habit or courtesy (ILC Concls. 9–10). This element separates custom from usage.",
      "It is hard to prove what a state believes, so the rules focus on written, official evidence of the state's own legal views. Repeated conduct alone is not enough, because courtesy and tradition also produce habitual conduct. North Sea and Lotus both applied this point.",
      "In practice, courts and lawyers rely heavily on secondary sources, and the rigor varies. Brownlie's notes the ICJ often infers acceptance from general practice, scholarly agreement, or precedent, while Lotus and North Sea demanded clearer proof. Brownlie's links the variation to the character of the issue, judicial discretion, treaty-based practice, and whether the law is still developing."
     ],
     "items": [
      [
       "Opinio juris",
       "States follow the practice because they think they have to: they act from a sense of legal right or obligation, not habit or courtesy (ILC Concls. 9–10)."
      ],
      [
       "General rules",
       "(1) Only the legal opinion OF STATES counts, so scholars' or NGOs' views are not opinio juris. (2) It requires written evidence that the state believes it is acting out of a sense of legal obligation. (3) Repeated conduct alone does not prove opinio juris, because courtesy and tradition also produce habitual conduct."
      ],
      [
       "Sources of opinio juris",
       "Diplomatic correspondence; policy statements (for example, white papers); press releases; opinions of government legal advisors; official government documents; comments on international legal texts; judicial decisions; treaties; and conduct in connection with resolutions (such as how a state votes on and explains its vote on a General Assembly resolution)."
      ],
      [
       "Silence",
       "A state's failure to react over time can show acceptance only if (1) the state was in a position to react and (2) the circumstances called for a reaction. Brownlie's notes silence is otherwise ambiguous: it may mean acceptance or just lack of interest."
      ],
      [
       "How it works in practice",
       "Because opinio juris is hard to prove, there is heavy reliance on secondary sources: international tribunal decisions, debates in meetings of international organizations, and scholarship.",
       [
        "Rigor varies: tribunals sometimes refuse to find custom without clear evidence that states felt legally bound, and sometimes infer opinio juris from treaties, declarations, resolutions, and prior judgments."
       ]
      ],
      [
       "Lotus",
       "Cited in Brownlie's and North Sea for the point that the fact states abstained from prosecuting did not by itself prove they felt a legal duty to abstain. Conduct needs proof of a felt duty behind it."
      ],
      [
       "Diallo",
       "Cited in Brownlie's: the existence of many special investment treaties could show states were making exceptions to customary law rather than changing the customary rule itself."
      ]
     ],
     "tip": "Brownlie's flags a tension: the ILC requires each element to be proven separately, while courts often loosely infer opinio juris from practice or precedent.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Persistent Objector",
     "multi": true,
     "explain": [
      "A persistent objector is a state that objects to a CIL rule while it is still forming. If the objection meets the requirements, the state is not bound by the rule for as long as it keeps objecting (ILC Concl. 15). The doctrine protects state consent: general international law does not require universal acceptance, so this is how a single state avoids a rule it never accepted.",
      "All four requirements must be met: the objection must come during formation (a state cannot object after the rule is already established), be clearly articulated, be made known to other states, and be maintained persistently over time. The slides add that the case is stronger when other states acquiesce in the objection.",
      "The doctrine has a limit. It does not work against peremptory norms (jus cogens). The Day 6 reading notes say Concl. 15 leaves jus cogens questions unresolved and creates no exemption from peremptory norms, and Brownlie's notes community-wide norms may limit the doctrine."
     ],
     "items": [
      [
       "Timely",
       "The objection must be made during the formation of the rule, before it becomes established custom."
      ],
      [
       "Clear",
       "The objection must be clearly articulated, so other states know the state rejects the rule."
      ],
      [
       "Known",
       "The objection must be made known to other states."
      ],
      [
       "Persistent",
       "The objection must be maintained over time. Once the state stops objecting, it loses the exemption."
      ],
      [
       "Acquiescence",
       "A persistent objection is stronger when other states acquiesce in it (accept the objecting state's position without protest)."
      ],
      [
       "Peremptory norms",
       "The persistent objector rule does not apply to peremptory norms. A state cannot object its way out of a jus cogens rule."
      ]
     ],
     "tip": "Deeks & Hollis's LLM test: ChatGPT rejected treating widespread retention of the death penalty as persistent objection to an established universal ban, showing persistent objection is a narrow exemption for a forming rule, not a label for widespread contrary practice.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Particular (Local) Custom",
     "explain": [
      "Particular CIL is a customary rule that binds only a subset of states, usually in a shared geography (ILC Concl. 16). It can be regional, local, or otherwise limited.",
      "The two elements still apply, but they are measured within the group. There must be a general practice accepted as law among those states themselves. \"General\" refers to the relevant group, not the whole world.",
      "The slides distinguish particular custom from persistent objection. A persistent objector is one state opting out of a general rule. Particular custom is a group of states opting into a rule that does not bind everyone."
     ],
     "items": [
      [
       "Particular (local) CIL (ILC Concl. 16)",
       "A CIL rule binding only a subset of states, usually in a shared geography. It requires a general practice accepted as law among those states themselves."
      ],
      [
       "Example: Gulf of Mannar",
       "CIL rules on pearl fisheries binding the states surrounding the Gulf of Mannar, what is now India and Sri Lanka."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Treaties & Custom",
     "explain": [
      "Treaties and custom are the two primary sources of obligation, and they interact. A treaty can record existing custom, finish the formation of emerging custom, or start a new custom. Custom can also change a treaty: under the later-in-time rule, custom that develops contrary to a treaty obligation can supersede it, and a treaty can deviate from earlier custom.",
      "Whether a treaty rule reaches non-parties depends on whether it meets the CIL requirements. If it does not, it binds only the treaty parties. If it does, a new CIL rule forms and binds non-parties as custom.",
      "Even when a treaty and a custom say the same thing, they keep separate identities. Each is independently binding, each helps interpret the other, and a non-party bound by the custom does not get the treaty's benefits."
     ],
     "items": [
      [
       "Later-in-time rule",
       "A treaty can codify an existing custom or deviate from it, and custom can develop contrary to a treaty obligation and thereby supersede it.",
       [
        "If the deviating treaty rule does not meet CIL requirements, it applies only to the treaty parties.",
        "If the deviating treaty rule meets CIL requirements, a new CIL rule is formed."
       ]
      ],
      [
       "Codification (ILC Concl. 11)",
       "The treaty provision records a customary rule that already existed when the treaty was concluded."
      ],
      [
       "Crystallization (ILC Concl. 11)",
       "The treaty provision completes the emergence of a customary rule that was already developing."
      ],
      [
       "Generation (ILC Concl. 11)",
       "The treaty provision gives rise to a later general practice accepted as law, creating a new customary rule."
      ],
      [
       "Repetition across treaties",
       "A provision repeated in many treaties may support a finding of custom but does not necessarily establish it. Many similar treaties are not, by themselves, custom."
      ],
      [
       "Separate identities",
       "Treaty and custom obligations remain independently binding even when their content matches.",
       [
        "A non-party bound by the parallel custom does not thereby gain the treaty's rights, such as its dispute-settlement mechanism (Brownlie's).",
        "Each informs the other: CIL shapes treaty interpretation through VCLT (Vienna Convention on the Law of Treaties) art. 31(3)(c), which directs interpreters to take into account relevant rules of international law; treaty standards and implementation practice help specify what custom requires (Climate AO ¶¶ 311–313).",
        "Full, good-faith treaty compliance suggests substantial compliance with the parallel custom but is not conclusive, because the obligations do not necessarily overlap completely (Climate AO ¶ 314).",
        "Non-parties remain bound by the customary duties independently of treaty membership. Equivalent cooperation with treaty parties may satisfy their customary duties in some circumstances; otherwise the non-party bears the full burden of showing its own practice conforms to CIL (Climate AO ¶ 315)."
       ]
      ],
      [
       "Brownlie's on treaty–custom interaction",
       "Treaties can advance the law faster, and custom can later shape treaty interpretation. Example: necessity and proportionality inform Charter self-defense, but the Charter's reporting duty is not imported into custom.",
       [
        "Baxter's concern: codifying custom in a treaty may freeze its development around the treaty text until the treaty is amended.",
        "Nicaragua: the ICJ applied the parallel custom despite a treaty-related jurisdictional reservation; Brownlie's criticizes this as confusing jurisdiction with applicable law."
       ]
      ]
     ],
     "tip": "Slides review answer: think of treaties and custom as having separate identities, and apply the later-in-time rule. A treaty can never prevail over a peremptory norm.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "North Sea Continental Shelf",
     "explain": [
      "North Sea Continental Shelf (ICJ, 1969) is the class's worked example of a CIL analysis. Germany, the Netherlands, and Denmark disputed how to draw continental shelf boundaries (the shelf is the underwater continuation of the landmass, valuable for offshore oil). The Netherlands and Denmark were parties to the 1958 Continental Shelf Convention; Germany had not ratified it, so the treaty could not bind Germany by consent.",
      "The question was whether the equidistance rule in art. 6 (absent agreement and special circumstances, the boundary is the median line equidistant from each coast) bound Germany as custom. The Court tested every route from treaty to custom and said no on each.",
      "Because there was no equidistance duty, the Court did not decide whether Germany's coast was a special circumstance. Other rules still governed: the parties had to negotiate meaningfully toward agreement, apply equitable principles (equidistance or other methods could be used alone or together), and respect each state's natural prolongation without encroaching on another's (¶¶ 82–85)."
     ],
     "items": [
      [
       "Codified existing CIL? (¶¶ 61–64)",
       "No. Denmark and the Netherlands argued ILC work, government reactions, and the Geneva Conference crystallized an emerging rule. The Court disagreed: (1) the ILC proposed equidistance hesitantly and experimentally, as proposed law (de lege ferenda) rather than existing law; (2) art. 12 let states make reservations to art. 6; and (3) the rule was not in arts. 1–3, from which states could not reserve. A rule states can opt out of looks conventional, not customary."
      ],
      [
       "Reservations counterargument (¶¶ 65–69)",
       "Denmark and the Netherlands argued that other reservable clauses reflected custom too, so reservability proved nothing. The Court rejected this: those clauses protected existing maritime freedoms that continued independently outside the treaty, and a reservation could not erase them. Arts. 1–2 did not implicitly require equidistance, and the small number of reservations to art. 6 did not narrow other states' right to reserve."
      ],
      [
       "Created new CIL / norm-creating? (¶¶ 70–74)",
       "No. A treaty rule can generate custom, but that result is not lightly presumed. Art. 6 lacked a norm-creating character because its own text put agreement first, left \"special circumstances\" unsettled, and allowed reservations."
      ],
      [
       "Passed into CIL after entry into force? (¶¶ 70–74)",
       "No. Too few states had ratified, and ratifications were not widespread and representative. Too little time had passed, especially measured to when litigation began. Non-ratification could not be counted as acceptance on speculative explanations. No minimum duration is required, but practice must be extensive and virtually uniform, including specially affected states, and show recognition of a legal obligation."
      ],
      [
       "Independent state practice? (¶¶ 75–80)",
       "No. There were only about fifteen examples, a small share of possible delimitations. Many were between treaty parties, who may have been implementing the Convention. Non-parties gave no indication why they used equidistance; it may have been convenience. Many examples involved opposite coasts rather than adjacent (lateral) boundaries, so they were factually distinct. Repeated conduct alone does not prove opinio juris, as in Lotus."
      ]
     ],
     "tip": "Day 6 notes: the North Sea materials are for in-class exercises and are not expected for the group assignment, midterm, or final. The slides mark \"everything before the North Sea case\" as the important material. Use the case to understand how the elements apply.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Evidence of CIL",
     "explain": [
      "Beyond direct state practice and statements, some materials help show whether a customary rule exists. Resolutions of international bodies can be evidence but cannot create custom on their own. Court decisions and scholarship are subsidiary means: they help identify the law, but they are not the law.",
      "The ICRC (International Committee of the Red Cross) Customary IHL (international humanitarian law) study is the slides' model of good CIL analysis: each rule is stated, then supported with sources of practice and opinio juris. Deeks & Hollis discuss whether LLMs (large language models) can help with this research and why their outputs need verification."
     ],
     "items": [
      [
       "Resolutions (ILC Concl. 12)",
       "A resolution of an international organization or conference cannot create CIL by itself. It may supply evidence of a rule or contribute to its development. A resolution's provision reflects CIL only if it corresponds to a general practice accepted as law.",
       [
        "Resolution structure (Day 6 reading): preambular clauses give background and authority; numbered operative clauses state what the Assembly does, and the verbs distinguish acknowledgment from a requested action."
       ]
      ],
      [
       "Subsidiary means (ILC Concls. 13–14)",
       "Decisions of international courts, appropriate national judgments, and the teachings of qualified publicists (scholars) help determine whether a CIL rule exists. A national judgment can also itself be state practice; its role depends on what it is being used to establish.",
       [
        "Brownlie's: weight depends on context; a judicial or scholarly assertion of custom still requires assessment of its support."
       ]
      ],
      [
       "ICRC Customary IHL study",
       "A model of CIL analysis: each rule is stated, then supported with sources of state practice (such as military manuals and legislation) and opinio juris, with attention to the rule's relationship to treaty law.",
       [
        "Example: Rule 53, the use of starvation of the civilian population as a method of warfare is prohibited."
       ]
      ],
      [
       "Large language models (Deeks & Hollis)",
       "Five uses: identifying international law (including whether a CIL rule exists); interpreting treaties and CIL; drafting treaty provisions and negotiating positions; assessing the legality of conduct; and distilling large datasets for courts and treaty bodies.",
       [
        "For CIL, LLMs could quickly gather evidence scattered across legislation, official statements, and decisions, and multilingual coverage could bring underrepresented states into the analysis.",
        "These benefits are prospective, not established: repeated claims by scholars or NGOs can dominate the data without establishing states' practice or legal acceptance.",
        "Three roles beyond collaborator: confounder (inaccurate or tangential answers derail work), creator (proposes new treaty language or solutions), and corruptor (users accept predictions as law, or actors flood online sources to manipulate outputs).",
        "In the authors' tests, the models explained doctrine well but invented or could not substantiate sources, and ChatGPT admitted it generated text from learned patterns rather than reviewing state practice. Treat outputs like a student researcher's work and verify against primary sources."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Environmental Duties (Climate AO)",
     "explain": [
      "In the Climate Change Advisory Opinion, the General Assembly asked the ICJ what obligations states have to protect the climate system from greenhouse gas emissions and what the legal consequences are for states that cause significant harm. The Court identified two CIL duties: the duty to prevent significant harm to the environment, and the duty to cooperate for its protection.",
      "The duty to prevent has two main elements: the harm to be prevented, and due diligence as the required standard of conduct (¶ 273). It is an obligation of conduct: states must make serious preventive efforts, not guarantee results. Due diligence has seven elements the Court spelled out.",
      "Methodology point (starred in the Day 7 notes): the Court mentioned opinio juris through adoption of the Friendly Relations Declaration and invoked treaties and practice, but mostly applied established environmental duties through earlier judgments. It did not run the detailed practice-and-opinio-juris inquiry seen in North Sea."
     ],
     "items": [
      [
       "Background (slides)",
       "The UN Framework Convention on Climate Change (UNFCCC) entered into force in March 1994 with 198 states parties, including the US. It is a framework convention whose art. 2 goal is stabilizing greenhouse gas concentrations at a level preventing dangerous human interference with the climate system.",
       [
        "ITLOS (International Tribunal for the Law of the Sea) advisory opinion: greenhouse gas emissions are \"pollutants\" under UNCLOS, so states parties must prevent, reduce, and control marine GHG pollution.",
        "Inter-American Court of Human Rights advisory opinion: the right to a healthy environment includes the right to a stable climate; states must prevent, mitigate, adapt to, and remedy climate harms."
       ]
      ],
      [
       "Duty to prevent significant harm",
       "States must use all means reasonably available to prevent significant harm as far as possible.",
       [
        "Scope: most participants argued the general no-harm principle applies to climate change; others said it covers only direct cross-border harm. The Court sided with the first group, relying on Nuclear Weapons, which recognized protection of other states' environments and areas beyond national control (¶¶ 133–134, 139).",
        "Cumulative emissions from many sources do not place climate change outside the duty, and no state may dismiss its emissions as insignificant in isolation.",
        "Obligation of conduct, not result: due diligence requires serious preventive efforts, not guaranteed success (¶ 135).",
        "Stringent standard: because climate risk is urgent, global, and scientifically established, the standard requires heightened vigilance, adjusted for common but differentiated responsibilities and respective capabilities (¶¶ 137–138).",
        "Significance of harm depends on probability, severity, long-term effects, and cumulative impacts, substantiated by IPCC findings (¶¶ 274–279)."
       ]
      ],
      [
       "Due diligence: seven elements",
       "What a state must do to meet the duty to prevent (¶¶ 281–300).",
       [
        "Appropriate measures: adopt, monitor, and enforce laws and administrative controls covering public and private emitters, pursuing deep, rapid, sustained reductions; passing a law without effective implementation is insufficient.",
        "Science and technology: actively obtain and assess the best available science (the IPCC) and use available technologies; better science can raise the standard over time.",
        "International rules and standards: consider treaties, CIL, and relevant nonbinding technical standards or COP (Conference of the Parties) decisions; a COP decision supports CIL only insofar as it reflects state practice and opinio juris.",
        "Different capabilities: states with greater resources must do more, judged by actual national circumstances rather than a fixed developed/developing label; limited resources are no general exemption.",
        "Precaution: plausible risks of serious or irreversible damage call for preventive action despite incomplete scientific certainty.",
        "Risk and environmental impact assessments: assess risks before proposed activities, including particularly significant emitting projects and their relevant downstream effects.",
        "Notification and consultation: notify and consult other states in good faith when necessary to determine preventive measures, especially for major policy changes affecting collective climate efforts.",
        "The standard is flexible and evolving, but compliance is assessed objectively; a state cannot declare its own efforts sufficient."
       ]
      ],
      [
       "Duty to cooperate",
       "Grounded in the UN Charter, the Friendly Relations Declaration (whose adoption indicates opinio juris), environmental treaties, the Stockholm and Rio Declarations, related state practice, and ITLOS decisions (¶ 140).",
       [
        "Cooperation makes prevention effective, because separate national efforts cannot protect a shared resource (¶¶ 141–142).",
        "States must pursue good-faith, sustained cooperation toward effective collective action, including on emissions targets or a method for allocating contributions (¶¶ 301–306).",
        "Treaties are a principal means, but no particular treaty is required, and cooperation goes beyond treaty compliance or transferring money and technology; states choose the means, not whether to cooperate (¶¶ 304–308)."
       ]
      ],
      [
       "Method",
       "Established environmental duties were applied to climate change through earlier judgments (such as Pulp Mills and Nuclear Weapons), without a detailed practice-and-opinio-juris inquiry. Science established the risk and helped specify due diligence, but science alone does not prove states accept a rule as law."
      ]
     ],
     "tip": "Compare the Climate AO method with the ICRC study and North Sea: the exam question is how rigorously each one proves both elements. The Class 7 slides labeled this material as practice, with nothing new flagged as important.",
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "General Principles & Jus Cogens",
   "overview": [
    "This unit closes out the sources of international law (IL). It covers two things that sit outside the treaty-and-custom pair. The first is “general principles of law,” the third source listed in ICJ (International Court of Justice) Statute art. 38(1)(c). The second is peremptory norms (jus cogens), which are not listed in art. 38 at all but outrank every other rule.",
    "General principles are gap-fillers. When treaties and state practice do not supply a rule a tribunal needs (often on evidence, procedure, or jurisdiction), the tribunal borrows a principle shared by developed domestic legal systems and adapts it to relations between states. The professor said this will not be tested, but it helps you read tribunal decisions.",
    "Peremptory norms are the tested part (Class 8 slides 6–11 are “Stuff to Know”). A peremptory norm is a rule the community of states accepts as one no state may contract out of, such as the prohibitions of genocide, torture, and slavery. The questions are: what is one (the definition), how do you prove one exists (ILC (International Law Commission) Conclusion 4’s two criteria, plus separate evidence of non-derogability), which norms are on the list, and what happens when something conflicts with one (void treaties, no conflicting custom, no persistent objector, no defenses, duties on all states).",
    "On the exam, the outline asks you to define a peremptory norm as a norm from which no state can derogate and to list the norms from the ILC list. In the layer-cake picture of IL, peremptory norms are the baseline prohibitions laid on top of states’ starting freedom, before treaty and custom obligations."
   ],
   "check": {
    "status": "complete",
    "note": ""
   },
   "blocks": [
    {
     "title": "General Principles of Law (art. 38(1)(c))",
     "explain": [
      "Article 38(1)(c) of the ICJ Statute lists “the general principles of law recognized by civilized nations” as a source after treaty and custom. Treaty and custom depend directly on state consent; general principles come from what domestic (“municipal”) legal systems share. They are a primary source. The label “subsidiary means” belongs only to art. 38(1)(d) (judicial decisions and teachings of publicists).",
      "Brownlie’s (Crawford) defines them as “general principles of municipal jurisprudence . . . insofar as they are applicable to relations of States.” The last clause is the limit: a domestic principle comes in only to the extent it fits relations between states. Tribunals do not copy domestic law mechanically. They use comparative reasoning, then choose, edit, and adapt elements from developed legal systems, so the result is IL’s “own creation.”",
      "The reason they exist: state practice has difficulty producing the procedural, evidentiary, and substantive rules a court needs to decide a case, so tribunals fill the gap by borrowing. Use stays cautious because governments distrust courts that rely on subjective ideas of justice, domestic analogies fit poorly in some areas (territory), and the choice of which domestic model to follow can reveal ideological leanings."
     ],
     "items": [
      [
       "Status",
       "A primary source under art. 38(1)(c), listed after treaty (a) and custom (b). It is not a “subsidiary means”; that term covers only art. 38(1)(d)."
      ],
      [
       "Function",
       "Tribunals use general principles mainly on matters of evidence, procedure, and jurisdiction, borrowing and adapting principles from developed domestic legal systems where state practice cannot supply the rule.",
       [
        "Examples from the reading: no one may be judge in his own suit; litispendence; res judicata (a decided matter cannot be relitigated); parties must not take measures that would prejudice execution of a decision.",
        "Corfu Channel: circumstantial evidence is “admitted in all systems of law.”",
        "Beyond procedure, the ICJ has also drawn on general principles for responsibility. Chorzów Factory: a party cannot rely on the other side’s failure to perform when its own illegal act caused that failure, and “any breach of an engagement involves an obligation to make reparation” is “a general conception of law.”",
        "Barcelona Traction (repeated in Diallo) borrowed the domestic-law concept of the limited liability company, another use outside procedure."
       ]
      ],
      [
       "Drafting history",
       "The Committee of Jurists that drafted the text had no consensus on its meaning. Descamps (Belgium) had natural law in mind; Root (US) thought governments would mistrust a court relying on subjective justice. A joint Root–Phillimore (UK) proposal became the text, giving the Court some power to develop principles.",
       [
        "Two readings: rules accepted in the domestic law of all civilized states (Root, Phillimore, Guggenheim); or Oppenheim’s reading, preferred by Crawford, that the Court may apply general principles of municipal jurisprudence, especially private law, insofar as they fit relations of states."
       ]
      ],
      [
       "Use in practice",
       "Arbitral tribunals have used general principles often; the ICJ uses art. 38(1)(c) sparingly, and principles usually enter its reasoning without a formal label.",
       [
        "Fabiani (France v. Venezuela): drew on municipal public law for state responsibility for its agents’ official acts and on general principles to assess damages.",
        "Russian Indemnity (PCA, Permanent Court of Arbitration): applied interest on late debts (moratory interest).",
        "Tribunals sometimes reject domestic analogies: territory does not track domestic real property concepts; North Atlantic Fisheries considered the domestic concept of servitude but refused to apply it."
       ]
      ],
      [
       "“General principles of international law” (separate rubric)",
       "A different phrase from art. 38(1)(c). It can mean rules of customary IL (CIL), general principles of law under 38(1)(c), or logical propositions underlying judicial reasoning on existing IL. Examples: consent, reciprocity, equality of states, finality of awards, validity of agreements, good faith, domestic jurisdiction, freedom of the seas. The overlap shows a rigid categorization of sources does not work."
      ]
     ],
     "tip": "The professor said on the slides he is NOT going to test general principles; they help in reading tribunal decisions. Know only that 38(1)(c) is a primary source used for evidence, procedure, and jurisdiction.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Peremptory Norms · Definition",
     "explain": [
      "A peremptory norm (jus cogens) is an overriding rule of IL. Its key feature is what Crawford calls “relative indelibility”: states cannot set it aside by treaty or by acquiescence. Only a later norm of the same peremptory character can change it.",
      "The definition comes from VCLT (Vienna Convention on the Law of Treaties) art. 53, repeated in ILC Conclusion 3. Break it into parts: (1) “accepted and recognized by the international community of States as a whole,” meaning states collectively, not each state individually; (2) “no derogation is permitted,” meaning no state can contract out of it; and (3) it “can be modified only by a subsequent norm of general international law having the same character,” meaning only another peremptory norm can replace it.",
      "The slides’ bottom line: peremptory norms are based in moral judgments (natural law), are generally applicable and non-derogable, and CAN be supplanted by later peremptory norms."
     ],
     "items": [
      [
       "Peremptory norm (VCLT art. 53; ILC Concl. 3)",
       "“A norm accepted and recognized by the international community of States as a whole as a norm from which no derogation is permitted and which can be modified only by a subsequent norm of general international law having the same character.”"
      ],
      [
       "Derogation",
       "An agreement between states to contract out of a rule of general IL. Most general rules allow it; peremptory norms do not.",
       [
        "Valid derogation: an agreement allowing another state to stop and search one’s ships on the high seas. The general rule protecting ships can be waived by agreement.",
        "Void derogation: an agreement with a neighbor for a joint operation against a racial group straddling the border that would amount to genocide. The genocide prohibition is peremptory, so the agreement has no legal effect."
       ]
      ],
      [
       "Modification by a later norm",
       "A peremptory norm can be replaced only by a later peremptory norm. The outline notes this sits uneasily with the claim that these norms are fundamental: if they protect fundamental values, it is odd that they can change."
      ],
      [
       "Nature (ILC Concl. 2)",
       "Peremptory norms have three characteristics.",
       [
        "They reflect and protect fundamental values of the international community.",
        "They are universally applicable to every state in the system.",
        "They are hierarchically superior to all other rules of IL."
       ]
      ],
      [
       "Natural law roots",
       "Per the slides, peremptory norms are based in moral judgment (natural law). That is why they bind regardless of a state’s consent, in contrast to treaty and custom, which rest on consent."
      ],
      [
       "History",
       "Earlier labels (“fundamental,” “inalienable,” “inherent”) had little success. In the 1960s scholarly opinion came to support overriding norms; the ILC accepted the concept in its 1966 treaty draft, and the Vienna Conference agreed on art. 53 after some controversy. Crawford notes there is more authority for the concept than for its particular consequences."
      ]
     ],
     "tip": "Hierarchy rule from the outline: a treaty can prevail over an earlier-in-time CIL rule, but never over a peremptory norm.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Identifying a Peremptory Norm (ILC Concls. 4–9)",
     "explain": [
      "To prove a norm is peremptory you must show two things (Conclusion 4). First, the norm is a norm of general international law, usually a rule of CIL. Second, the community of states accepts and recognizes it as non-derogable and changeable only by a later peremptory norm. Both are required.",
      "The second step is a separate showing (Conclusion 6). Proving a rule is custom proves only the first criterion. You need additional evidence that states accept that no one can opt out. That is why the slides ask “IS THIS CUSTOM??”: the evidence looks like the evidence for CIL, but it must prove something different.",
      "The evidence comes in layers: the bases a peremptory norm can rest on (Concl. 5), primary evidence of state acceptance (Concl. 8), and subsidiary means to help find it (Concl. 9). Acceptance must come from a very large and representative majority of states, not every state (Concl. 7)."
     ],
     "items": [
      [
       "Criterion 1 (Concl. 4(a))",
       "The norm is a norm of general international law. This means a rule binding states generally, as opposed to a rule binding only some states (like a bilateral treaty or a particular custom)."
      ],
      [
       "Criterion 2 (Concl. 4(b))",
       "The norm is accepted and recognized by the international community of States as a whole as one from which no derogation is permitted and which can be modified only by a later norm of the same character."
      ],
      [
       "Bases (Concl. 5)",
       "CIL is “the most common basis” for a peremptory norm. Treaty provisions and general principles of law may also serve as bases."
      ],
      [
       "Separate acceptance (Concl. 6)",
       "Acceptance of non-derogability is distinct from acceptance as a norm of general IL. Proving a rule is CIL does not prove it is peremptory; there must be separate evidence that states accept its non-derogable character."
      ],
      [
       "Community of states (Concl. 7)",
       "The relevant community is states. Acceptance by “a very large and representative majority of States” is required; acceptance by all states is not. Positions of other actors (NGOs, scholars) can give context and help assess state acceptance but do not themselves count as acceptance."
      ],
      [
       "Evidence of acceptance (Concl. 8)",
       "The same kinds of material used to show opinio juris for CIL, listed on the slides:",
       [
        "Public statements on behalf of states; official publications; government legal opinions; diplomatic correspondence.",
        "Constitutional provisions; legislative and administrative acts; domestic (national) court decisions.",
        "Treaty provisions; resolutions of international organizations or intergovernmental conferences; state practice and other state conduct."
       ]
      ],
      [
       "Subsidiary evidence (Concl. 9)",
       "Aids for finding acceptance, not acceptance itself: decisions of international courts and tribunals (especially the ICJ); national court decisions as appropriate; works of expert bodies set up by states or IOs (international organizations); and scholarship (teachings of the most highly qualified publicists)."
      ]
     ],
     "tip": "Trap: a fact pattern that proves widespread practice and opinio juris has proven custom, not jus cogens. Look for separate evidence that states treat the rule as one no state may opt out of.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "The Recognized Peremptory Norms",
     "explain": [
      "Two lists come from the course: the ILC’s Annex (the list on the slides and the one the outline says to use on the exam) and Crawford’s “least controversial” norms from Brownlie’s. Both are illustrative, not closed. The ILC says its list is non-exhaustive (Conclusion 23).",
      "The lists overlap heavily: force or aggression, genocide, crimes against humanity, racial discrimination, slavery, and self-determination. The differences are in scope and in what each adds."
     ],
     "items": [
      [
       "ILC list (Annex; non-exhaustive, Concl. 23)",
       "The norms the ILC has previously referred to as peremptory:",
       [
        "Prohibition of aggression.",
        "Prohibition of genocide.",
        "Prohibition of crimes against humanity.",
        "Basic rules of international humanitarian law (IHL), i.e., basic war crimes.",
        "Prohibition of racial discrimination and apartheid.",
        "Prohibition of slavery.",
        "Prohibition of torture.",
        "Right of self-determination."
       ]
      ],
      [
       "Crawford’s “least controversial” norms",
       "The prohibitions of: (i) the use of force in UN Charter art. 2(4); (ii) genocide; (iii) crimes against humanity, including systematic racial discrimination; and (iv) the slave trade. Self-determination also has peremptory status “at least in its application to colonial countries and peoples or peoples under alien domination,” but Crawford places it outside the least-controversial group."
      ],
      [
       "Differences between the lists",
       "How the two lists diverge:",
       [
        "Force: Crawford names the broader art. 2(4) prohibition on any use of force; the ILC names the narrower prohibition of aggression.",
        "Slavery: Crawford lists the slave trade; the ILC lists slavery generally.",
        "Racial discrimination: Crawford folds systematic racial discrimination into crimes against humanity; the ILC lists racial discrimination and apartheid as a separate norm.",
        "Self-determination: Crawford qualifies it (colonial peoples or peoples under alien domination); the ILC lists the right without qualification.",
        "Additions: the ILC includes basic IHL rules and torture, which Crawford does not list in these pages."
       ]
      ],
      [
       "Erga omnes link",
       "Barcelona Traction distinguished obligations owed to another state from obligations owed “towards the international community as a whole” (erga omnes). Crawford notes its list is indistinguishable from modern lists of peremptory norms."
      ]
     ],
     "tip": "For the exam, list the eight ILC norms. If a question asks about the use of force, remember the ILC names aggression while Crawford names art. 2(4).",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Peremptory Norms vs. Custom",
     "explain": [
      "Peremptory norms usually rest on custom, so the two are easy to confuse. The outline gives four ways they differ: who they bind, where they come from, what they cover, and whether consent matters. The consent difference is the one that drives the legal consequences, such as no persistent objector."
     ],
     "items": [
      [
       "Scope",
       "Custom can bind as few as two states (particular custom). A peremptory norm is generally applicable to all states."
      ],
      [
       "Origin",
       "A peremptory norm stems from natural law (moral judgment). Custom stems from state practice plus opinio juris."
      ],
      [
       "Subject matter",
       "Custom can govern much smaller matters. Peremptory norms protect large, fundamental principles."
      ],
      [
       "Consent",
       "Custom requires proof of consent, and a history of non-consent (persistent objection) can make a custom inapplicable to the objecting state. A peremptory norm binds regardless of consent."
      ],
      [
       "“Super custom”",
       "One view treats a peremptory norm as a subcategory of custom that requires more state acceptance than normal. That view raises the question whether a state could avoid a peremptory norm by “super opposing” it, which conflicts with the rule that persistent objection does not apply to peremptory norms."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Legal Consequences of Peremptory Norms",
     "explain": [
      "Because peremptory norms are hierarchically superior, anything that conflicts with them loses. A conflicting treaty is void, a conflicting custom cannot form, and conflicting unilateral acts or IO resolutions create no obligation. On the responsibility side, every state can complain about a breach, the breaching state cannot use the usual defenses, and a serious breach puts duties on third states.",
      "There are limits. A peremptory norm does not give a court jurisdiction (that still needs consent), and it does not by itself strip a state official of immunity.",
      "The treaty rules come from VCLT arts. 53 and 64 and ILC Concls. 10–13. The difference between art. 53 and art. 64 is timing: art. 53 covers a treaty that conflicts with an existing norm when it is concluded; art. 64 covers a treaty that conflicts with a new norm that emerges later."
     ],
     "items": [
      [
       "Treaty void at conclusion (VCLT art. 53; Concls. 10(1), 11(1))",
       "A treaty that conflicts with a peremptory norm when it is concluded is void in whole. No provisions can be separated out and saved.",
       [
        "Consequence (Concl. 12(1)): the parties must eliminate, as far as possible, the consequences of acts done in reliance on the conflicting provision and bring their relations into conformity with the norm."
       ]
      ],
      [
       "Treaty terminated by a new norm (VCLT art. 64; Concl. 10(2))",
       "If a new peremptory norm emerges, an existing treaty that conflicts with it becomes void and terminates, and the parties are released from further performance.",
       [
        "Conflicting provisions can be separated only if (a) they are separable in application, (b) they were not an essential basis of the parties’ consent, and (c) continued performance of the rest would not be unjust (Concl. 11(2)).",
        "Rights and situations created before termination survive only to the extent maintaining them does not itself conflict with the new norm (Concl. 12(2))."
       ]
      ],
      [
       "Reservations (Concl. 13)",
       "A reservation to a treaty provision that reflects a peremptory norm does not affect the norm’s binding nature, and no reservation can modify a treaty’s effect contrary to a peremptory norm."
      ],
      [
       "Custom (Concl. 14)",
       "A CIL rule does not come into existence if it would conflict with an existing peremptory norm, and a non-peremptory CIL rule ceases to exist to the extent it conflicts with a new one. The persistent objector rule does not apply to peremptory norms (Concl. 14(3)), because they bind regardless of consent."
      ],
      [
       "Other acts (Concls. 15–16)",
       "Unilateral acts of states, and resolutions or decisions of IOs that would otherwise be binding, create no obligations to the extent they conflict with a peremptory norm."
      ],
      [
       "Erga omnes (Concl. 17)",
       "Peremptory norms create obligations owed to the international community as a whole (erga omnes). All states have a legal interest, so any state may invoke responsibility for a breach, not only the injured state."
      ],
      [
       "No justification (Concl. 18)",
       "No circumstance precluding wrongfulness (for example, necessity or self-defense) may be invoked for conduct that breaches a peremptory norm. The usual defenses in state responsibility do not work here."
      ],
      [
       "Serious breach: third-state duties (Concl. 19; ARSIWA art. 41)",
       "For a serious breach, meaning a gross or systematic failure to comply, every state has three duties. This mirrors art. 41 of the ILC Articles on State Responsibility (ARSIWA, 2001).",
       [
        "Cooperate to end the breach through lawful means.",
        "Do not recognize the resulting situation as lawful.",
        "Do not render aid or assistance in maintaining it.",
        "Crawford: these are residual obligations with no strenuous individual duty to act, probably as much progressive development as codification; the customary core is collective non-recognition, traced to the Stimson doctrine (Manchurian crisis)."
       ]
      ],
      [
       "Acquiescence",
       "If consent cannot derogate from a peremptory norm, neither can acquiescence. Protest or recognition by other states is irrelevant to whether a breach occurred."
      ],
      [
       "Interpretation (Concl. 20)",
       "Where another rule may conflict with a peremptory norm, the other rule is, as far as possible, interpreted and applied consistently with the peremptory norm."
      ],
      [
       "Procedure for invoking (Concl. 21)",
       "A state invoking a peremptory norm to invalidate or terminate a rule should give written notice to the other states concerned. If no one objects within at least three months (except in special urgency), it may proceed. If a state objects, they should seek a solution under UN Charter art. 33; if none within twelve months and the objector offers the ICJ or another binding procedure, the invoking state should not act until the dispute is resolved."
      ],
      [
       "Limits: jurisdiction and immunity",
       "A peremptory norm does not create jurisdiction, which always rests on consent, and does not by itself displace immunity.",
       [
        "Armed Activities (DRC v. Rwanda): a dispute about a peremptory norm (genocide) “cannot of itself provide a basis for the jurisdiction of the Court.”",
        "Arrest Warrant: no CIL exception to an incumbent foreign minister’s immunity for alleged war crimes or crimes against humanity.",
        "Crawford: invoking a peremptory norm “injects a new element into the inquiry” that may be influential “but is not necessarily decisive.”"
       ]
      ]
     ],
     "tip": "Keep arts. 53 and 64 straight: art. 53 = conflict at conclusion, void in whole, no severance. Art. 64 = new norm later, treaty terminates, severance possible under the three Concl. 11(2) conditions.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Case Study: Wall Advisory Opinion (in-class only)",
     "explain": [
      "The Class 8 notes say the Wall materials are for in-class exercises and are NOT expected for the group assignment, midterm, or final. They are included here because they show how the ICJ used self-determination as a peremptory norm.",
      "The General Assembly asked the ICJ for the legal consequences of Israel’s construction of a wall in the Occupied Palestinian Territory. The Court asked (1) whether construction breached IL and (2) if so, the consequences. Its order of analysis: status of the territory, description of the works, applicable law, then breach."
     ],
     "items": [
      [
       "Holdings",
       "The wall violated CIL rules, treaty obligations, and peremptory norms. Israel had to stop construction, dismantle the parts in the occupied territory, and make reparation. All states had to use lawful means to end the unlawful conduct."
      ],
      [
       "Why “a people” mattered",
       "Self-determination is a right of peoples, so the Court first had to find that the Palestinians are a people (¶ 118), relying mainly on Israel’s own recognition in the 1993 Rabin letter and the 1995 Interim Agreement. Without a rights-holder there would be only individual IHL and human rights claims."
      ],
      [
       "Peremptory-norm framework at work",
       "The Court called self-determination a right erga omnes (¶ 88), which lets the opinion address all states (non-recognition, no aid, cooperation to end the breach, tracking ARSIWA art. 41 and Concl. 19). Israel’s self-defense and necessity arguments failed (¶¶ 139–142), consistent with Concl. 18."
      ],
      [
       "Self-defense ruling",
       "Per the slides: the art. 51 right of self-defense applies to attacks by states, not non-state armed groups; Israel is the occupying force in the West Bank; and building the wall was not the only way to meet its self-defense needs."
      ],
      [
       "Buergenthal declaration",
       "He would have declined the case for lack of a factual basis on Israel’s security needs. He accepted the Palestinian right to self-determination but said legitimate self-defense would preclude wrongfulness, which suggests he did not treat the right as peremptory in this context (Concl. 18 bars such defenses)."
      ]
     ],
     "check": {
      "status": "complete",
      "note": "Not tested per the Class 8 notes."
     }
    }
   ]
  },
  {
   "title": "Legal Personality",
   "overview": [
    "This unit starts Block 2 of the course: the rights and duties of actors in the international system. The first question is who counts as an actor at all. An entity with “legal personality” is a subject of IL (international law): it has rights and duties directly under IL, can bring international claims, and can be held responsible.",
    "States are the main subjects. To decide whether an entity is a state, you apply the four Montevideo criteria (population, territory, government, capacity for relations) and look at whether other states recognize it. Recognition of a state (it exists) is different from recognition of a government (its administration is legitimate), and governments can be recognized formally (de jure) or only in practice (de facto).",
    "International organizations (IOs) have personality only when their founding treaty and structure support it. You test that with four questions: permanent association of states, executive organs, its own legal powers, and powers that exist generally. The Arctic Council (no) and ECOWAS (yes) hypos from class show how the test applies.",
    "Exam focus per Class 10 slides 5, 8–11, 13, 15, 18–19, 21: the definition of a subject, the Montevideo criteria and independence, self-determination, the indicia of recognition, declaratory vs. constitutive views (declaratory is “the one to know”), state vs. government recognition, de jure vs. de facto, and the IO criteria."
   ],
   "check": {
    "status": "complete",
    "note": "All rules explained; one open class discussion (Sovereign Order of Malta) flagged thin in the Recognition of States block."
   },
   "blocks": [
    {
     "title": "Subjects of International Law",
     "explain": [
      "A “subject” of IL is an entity that IL treats as a direct holder of rights and duties. The course definition has three parts, and all three describe what it means to be a full participant in the system: you have rights and duties, you can enforce your rights by bringing claims, and others can hold you responsible.",
      "Crawford notes the definition is circular: capacity presupposes personality, yet the main test for personality is whether the capacity is exercised. In practice, states are the model, and every other kind of personality is measured against what states have."
     ],
     "items": [
      [
       "Subject of IL (three elements)",
       "An entity that:",
       [
        "has direct rights and obligations under IL;",
        "has the capacity to defend those rights by bringing international claims; and",
        "is responsible for breaching its obligations (it can be subject to claims)."
       ]
      ],
      [
       "States",
       "The primary subject. The incidents of statehood are the template for every other kind of personality. Friedmann: states are “the repositories of legitimated authority over peoples and territories,” so fundamental change happens only through state action."
      ],
      [
       "IOs",
       "Subjects only when their establishing treaty stipulates it (see IO Personality). They joined states as a recognized category after Reparation for Injuries (ICJ 1949)."
      ],
      [
       "Individuals & corporations",
       "NOT direct subjects. They enjoy certain rights under IL, usually derivative (human rights, investment protection), and those rights run against the state, which has “a virtual monopoly of responsibility.”"
      ],
      [
       "Other entities",
       "Entities that are neither states nor IOs can hold limited personality through recognition and acquiescence (for example, the ICRC, International Committee of the Red Cross). Personality that rests on agreement is opposable only to those who agreed."
      ],
      [
       "Federations",
       "Component units sometimes keep treaty capacity (Switzerland, Germany; US states only with Congress’s consent), but the federal treaty power is usually exclusive. LaGrand and Avena: the federal state is responsible for its subdivisions’ breaches regardless of constitutional limits."
      ]
     ],
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Statehood · Montevideo Criteria (art. I)",
     "explain": [
      "The Montevideo Convention (1933), art. I, says a state should possess (a) a permanent population, (b) a defined territory, (c) government, and (d) capacity to enter into relations with other states. Each criterion has a low threshold: no minimum population, no fully settled borders, no requirement of an effective government.",
      "The Convention is an inter-American treaty signed by 17 states. It reflected commentary of the time but has been inconsistently followed since 1934, so the slides call it a rule of thumb that informs political decisions. Crawford calls it “no more than a basis for further investigation”: not every condition is strictly necessary, and more criteria are needed for a working definition.",
      "Independence is part of the government criterion. The course uses a minimal idea of independence: a state can be heavily under foreign control in fact and still be a state."
     ],
     "items": [
      [
       "Permanent population",
       "Some community of people; no minimum threshold. Read together with territory: without a physical base for a stable, organized community, statehood is hard to establish."
      ],
      [
       "Defined territory",
       "Some definite geographic extent; frontiers need not be fully defined. You have to draw some line, but not everyone has to agree on it.",
       [
        "Albania was recognized in 1913 without settled frontiers; Israel was admitted to the UN in 1949 despite border disputes.",
        "No lower limit on size: Liechtenstein, San Marino, Monaco, and Andorra were admitted to the UN in the 1990s."
       ]
      ],
      [
       "Government",
       "Some stable political community, with some freedom of action from other states. It need not be particularly effective.",
       [
        "Effective government is the best evidence of statehood but is neither necessary nor sufficient: Poland (1919) and Burundi and Rwanda (1962) became states before their governments were well organized.",
        "Self-determination reframed the inquiry: effectiveness was once an argument for continued colonial rule; the question became “in whose interest and for what legal purpose” government must be effective."
       ]
      ],
      [
       "Independence (part of government)",
       "A minimal conception: a state can be substantially under foreign control in fact and remain a state (post-WWII West Germany; Andorra).",
       [
        "Crawford calls independence “the decisive criterion.” Only foreign control that overbears the entity’s decisions on a wide range of matters, systematically and continuously, defeats it. Ad hoc interference, pressure, or “advice” does not.",
        "Control under a legal title (treaty of protection, consent to representation, lawful occupation) leaves statehood intact: Germany remained a state under Allied occupation after 1945.",
        "US Nationals in Morocco: Morocco “remained a sovereign State” under the French protectorate. There is a strong presumption against loss of status."
       ]
      ],
      [
       "Diplomatic capacity",
       "Capacity to enter relations with other states, which the course reads as recognition by other states as a state. The slides note “honestly very little here”; the substance is in the Recognition of States block."
      ]
     ],
     "tip": "The Montevideo criteria are a rule of thumb, not a binding universal test. On a fact pattern, walk all four, then check independence and recognition.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Self-Determination and Statehood",
     "explain": [
      "State recognition is tied to the peremptory norm of self-determination (from Unit 6). Self-determination is the right of peoples to freely determine their political status. It matters for statehood because it can give a people an entitlement to become a state, and it changed how the government criterion is read."
     ],
     "items": [
      [
       "UN Charter art. 1(2)",
       "One of the UN’s purposes is “respect for the principle of equal rights and self-determination of peoples.”"
      ],
      [
       "UN Charter art. 55",
       "Makes the same principle the basis of “friendly relations among nations.”"
      ],
      [
       "Declaration on Granting Independence to Colonial Countries and Peoples art. 2",
       "“All peoples have the right to self-determination; by virtue of that right they freely determine their political status and freely pursue their economic, social and cultural development.”"
      ],
      [
       "State in statu nascendi",
       "Self-determination can give a people a recognized entitlement to statehood before independence: a state in the process of being born (example: Palestine). Once statehood is firmly established, the earlier provisional legal order is treated as validated retroactively."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Recognition of States",
     "explain": [
      "Recognition is inherently political, but the slides say recognition by other states is the best metric for whether an entity is a state under IL. Crawford: there is probably no subject in international relations where law and politics are more closely interwoven.",
      "Two questions: how do you tell whether a state has recognized an entity (the indicia), and what legal effect recognition has (declaratory vs. constitutive). The declaratory view is the prevailing one and “the one to know.” Under it, statehood exists as a matter of fact and law once the criteria are met, and recognition only confirms it, so acts before recognition still count as state acts."
     ],
     "items": [
      [
       "Indicia of recognition",
       "Signs that a state has recognized an entity as a state:",
       [
        "establishing formal diplomatic relations;",
        "official communications recognizing the state;",
        "a pattern of practice treating the entity as a state (entering treaties with it, exchanging ambassadors), provided the practice recognizes it as a state."
       ]
      ],
      [
       "Implied recognition",
       "Recognition turns on intent and may be implied, but only from a bilateral treaty, formal diplomatic relations, and probably consular exequaturs. It is not implied from negotiations, unofficial representation, a shared multilateral treaty, or a joint conference."
      ],
      [
       "IO membership",
       "Statehood cannot necessarily be implied from membership in IOs. Under Charter art. 4, statehood is a condition of UN membership, so UN admission is evidence of statehood, but non-recognizing members need not open bilateral relations. Specialized agencies apply their own tests (Palestine admitted to UNESCO in 2011)."
      ],
      [
       "Example: Taiwan",
       "US and Taiwan have diplomatic offices not called embassies; no head-of-state visits (one exception); US–PRC communiqués on the one-China policy; Taiwan belongs to IOs such as the WTO (formerly the WHO). Asserting Taiwan is a state is “of little value” if no one engages with it on that basis."
      ],
      [
       "Declaratory view (prevailing)",
       "Recognition affirms existing statehood, which arises by operation of law once the criteria are met. Actions taken before recognition are treated as state action.",
       [
        "Bosnian Genocide: the parties’ lack of mutual recognition at the time was at most a procedural defect, cured by later recognition in the Dayton Accords.",
        "Practice: states refusing recognition still bring claims against the unrecognized entity (Arab states holding Israel accountable under humanitarian and human rights law)."
       ]
      ],
      [
       "Constitutive view",
       "No statehood until recognition is established. This leaves practical problems unanswered: what to do with acts taken before recognition, and when recognition becomes effective.",
       [
        "Lauterpacht’s defense: absent an impartial body, existing states must determine statehood, as a legal duty rather than arbitrary policy. A duty to recognize collapses into the declaratory view.",
        "No duty to make a public declaration or open diplomatic relations, but states that ignore the basic rights of an entity bearing the marks of statehood act at legal risk."
       ]
      ],
      [
       "Case study: Sovereign Order of Malta",
       "Has a Grand Master (executive), Sovereign Council (legislative), Magistral Courts and Juridical Council; bilateral relations with 114 states; its Magistral Palace and Villa have extraterritorial status in Italy. The slides pose it as an open question (what else would you need to know; is it a state?)."
      ]
     ],
     "tip": "Declaratory is the view to know (Class 11 slides). If a fact pattern asks about acts before recognition, the declaratory view treats them as state acts.",
     "check": {
      "status": "thin",
      "note": "The Sovereign Order of Malta discussion is an open question on Class 10 slides and Day 10 notes; no source records an answer on whether it is a state."
     }
    },
    {
     "title": "Recognition of Governments",
     "explain": [
      "Recognizing a state and recognizing its government are separate acts. State recognition acknowledges that an actor exists in IL. Government recognition acknowledges that a particular internal mechanism legitimately administers that state. The state is the legal person; the government only represents it, so a state does not lose its status because its government is unrecognized.",
      "Government recognition comes in two forms. De jure recognition is formal. De facto recognition means working with a government without formally recognizing it, which lets a state deal with the government when it must while keeping its position that the government is illegitimate."
     ],
     "items": [
      [
       "State vs. government recognition",
       "State recognition = existence of an actor in IL; government recognition = legitimacy of the internal mechanism for administering the state.",
       [
        "Example: the US long recognized Venezuela as a state but not the Maduro government; it now recognizes both."
       ]
      ],
      [
       "De jure",
       "States formally recognize the government."
      ],
      [
       "De facto",
       "States work with the government without formally recognizing it.",
       [
        "Why: to engage when required while keeping a normative claim about legitimacy; to give meaning to state action when the stated policy is non-recognition; and, per the slides, “basically, because politics is messy.”",
        "The distinction exists only for governments: “there is no such thing as a de facto state.”",
        "Courts tend to give both forms the same effect, which can go wrong: Bank of Ethiopia gave effect to an Italian decree on the strength of de facto recognition though Italy was only a belligerent occupant."
       ]
      ],
      [
       "Tinoco Concessions (Taft, arbitrator)",
       "Costa Rica’s revolutionary Tinoco regime bound the state despite British and US non-recognition. Non-recognition based on illegitimacy or irregular origin, rather than lack of control, loses evidential weight.",
       [
        "Rule: the international standard for a government is secure de facto control of all or most of the state’s territory."
       ]
      ],
      [
       "Conditions and non-recognition",
       "Non-recognition may mean a regime lacks independence or effectiveness, or only that the recognizing state refuses normal relations. Recognition may be conditioned on democracy or minority protections (EC Guidelines after the breakup of the USSR and Yugoslavia). A missing recognized government does not cost the state its title and may call for some form of curatorship."
      ],
      [
       "Estrada doctrine",
       "Some states no longer recognize governments at all: Mexico’s 1930 policy of accepting de facto governments without formal recognition decisions, and UK policy since 1980, which asks only whether a regime effectively controls the territory."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "IO Legal Personality",
     "explain": [
      "IOs do not have legal personality automatically. You start with the text of the establishing treaty and then ask four functional questions. There is no international incorporation process, so the test looks at what the organization is and does. The source need not even be a treaty (UNIDO began with General Assembly resolutions; OPEC and the OSCE came from conference consensus).",
      "Reparation for Injuries (ICJ 1949) is the foundation. After the assassination of UN envoy Count Bernadotte, the ICJ held the UN could bring an international claim for injuries to its agents. The Charter says nothing about personality; the Court inferred it from the Charter as a whole (members’ duty to assist, art. 2(5); binding Security Council decisions, art. 25; legal capacity and immunities, arts. 104–105; treaty-making, art. 43), because personality was “indispensable” to the UN’s tasks. The UN is “an international person” but not a state or “a super-state.”"
     ],
     "items": [
      [
       "Four criteria",
       "Ask whether:",
       [
        "it is a permanent association of other entities with international legal personality (usually states);",
        "it has executive organs;",
        "it has its own legal powers, distinct from its members; and",
        "those powers exist generally, across a wide range of states, not just in a small number of states."
       ]
      ],
      [
       "Founders’ will theory",
       "Consenting states can “breathe personality into” an IO. Weakness: many treaties are silent, and third states may refuse to acknowledge the personality."
      ],
      [
       "Objective personality theory",
       "Crawford’s “better view,” partly reflected in Reparation and followed by the ILC: personality arises from performing functions on the international plane and is opposable to third states without their recognition."
      ],
      [
       "IFAD Advisory Opinion",
       "The Global Mechanism to Combat Desertification lacked personality: no express provision, and it never purported to enter into contracts or agreements."
      ],
      [
       "Hypo 1: Arctic Council (No)",
       "Intergovernmental forum set up by the Ottawa Declaration; 8 states; no organ with decision-making power; the secretariat and working groups only support the states, which implement all decisions; the secretariat can engage other IOs, but the instrument does not authorize treaty-making. It fails the executive-organ and own-powers criteria."
      ],
      [
       "Hypo 2: ECOWAS (Yes)",
       "Economic Community of West African States: established by treaty in 1975; 15 states; an executive (ECOWAS Commission), legislature (ECOWAS Parliament), and court (ECOWAS Court of Justice); treaty authority to regulate trade, resolve interstate disputes, and deploy peacekeepers; its bodies’ decisions have independent binding force. It meets all four criteria."
      ]
     ],
     "tip": "Contrast the hypos: the Arctic Council only supports states that make and implement every decision; ECOWAS has organs whose decisions bind on their own.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "Nationality",
   "overview": [
    "Individuals and corporations are not direct subjects of IL (international law). Their rights mostly reach the international level through a state, and the link to that state is nationality. This unit asks: how does a person or company get a nationality, when must other states respect it, and what happens to people who have none.",
    "For individuals: each state’s own law decides who its nationals are (by birth in the territory, jus soli; by parentage, jus sanguinis; or by naturalization). IL increasingly limits that discretion, and several instruments recognize a right to a nationality. Other states need not always accept a grant of nationality, especially naturalization; Nottebohm requires a “genuine link” before a state can protect its national against another state.",
    "For corporations: they have no independent international personality. Some state-controlled or treaty-chartered corporations get privileges and immunities. A corporation’s nationality is its state of incorporation or registered office, not its shareholders’ state; Barcelona Traction holds that only the company’s state can bring a claim for injury to the company.",
    "The unit also covers individual criminal responsibility (piracy, Nuremberg, modern international criminal law). Exam focus per Class 11 slides 9–14, 19, and 21: why nationality matters, the domestic-law baseline, jus soli/sanguinis, the right-to-nationality instruments, Nottebohm, state-controlled and treaty-chartered corporations, and corporate nationality."
   ],
   "check": {
    "status": "complete",
    "note": "All rules explained; two in-class exercises (birthright citizenship; Arcadian Energy) flagged thin because no source records their answers."
   },
   "blocks": [
    {
     "title": "The Individual in IL",
     "explain": [
      "Historically, the state was the mechanism through which individuals had international rights and responsibilities. If an official violated IL, the claim ran against the state, not the official personally.",
      "Since the Nuremberg Trials there has been a trend toward individual responsibility for internationally wrongful acts. It started with piracy, expanded to violations of the laws of war during and after WWII, and grew with international criminal law (ad hoc tribunals and the ICC). Today international criminal responsibility is the one area where individuals’ international status goes beyond that of other subjects."
     ],
     "items": [
      [
       "Historical mechanism",
       "The state, as the primary actor of IL, carried individuals’ international rights and responsibilities. Claims ran against the responsible state; officials who committed the act ordinarily were not held personally responsible."
      ],
      [
       "Individuals as “subjects”",
       "No general rule bars individuals from being subjects, and in particular contexts they hold rights they can vindicate internationally (human rights, investment protection). Crawford says calling them “subjects” is unhelpful because it implies capacities individuals lack and does not distinguish them from other types of subject.",
       [
        "Human rights norms do not yet apply horizontally between individuals.",
        "Some instruments list individual responsibilities, but IL provides no regular means to enforce them."
       ]
      ],
      [
       "Rights through nationality vs. humanity",
       "Some individual rights exist only through nationality: consular rights under the Vienna Convention and investor rights under investment treaties. Human rights go further: individuals hold them by being human, a major 20th-century innovation.",
       [
        "EU law is especially advanced: regulations apply directly to individuals; Francovich v. Italy (1991) requires a member state to compensate individuals for failing to implement a directive; Van Gend en Loos gave certain treaty provisions direct effect, conferring rights that can override national law."
       ]
      ],
      [
       "Piracy",
       "Historically the only individual responsibility under IL. Under universal jurisdiction any state may punish it, even if the pirate is not its national and the act was not in its waters or against its vessels (United States v. Smith, 1820)."
      ],
      [
       "Laws of war",
       "By the mid-20th century, violators could be punished by their own state, the enemy, or international authorities. The 1949 Geneva Conventions make anyone who commits a grave breach subject to trial by any state party (e.g., Geneva Convention IV art. 147)."
      ],
      [
       "Nuremberg (IMT 1945)",
       "Under the London Agreement (France, UK, US, USSR), the International Military Tribunal held major Nazi war criminals individually responsible for: (i) crimes against peace (planning or waging aggressive war); (ii) war crimes; (iii) crimes against humanity; and (iv) conspiracy to commit them.",
       [
        "The Tribunal rejected the defenses that IL concerns only states and that individuals performing acts of state are not responsible: “Crimes against international law are committed by men, not by abstract entities.”",
        "Afterward, international criminal law expanded through the ICTY and ICTR (1990s) and the ICC (2002)."
       ]
      ],
      [
       "Today",
       "Only individuals bear international criminal responsibility in current international institutions. States and IOs can be responsible for overlapping conduct only civilly; corporations are occasionally held criminally responsible in national courts but not in international tribunals."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Nationality of Individuals",
     "explain": [
      "Nationality matters because the state is the primary conduit for vindicating an individual’s rights and the entity empowered to regulate the individual’s rights and duties. That makes nationality a threshold issue for many questions.",
      "The baseline rule: each state’s domestic law defines who its nationals are. A growing body of treaties and tribunal decisions limits that discretion, mostly through regional bodies. Because states’ laws are not coordinated, people can end up with two nationalities or none."
     ],
     "items": [
      [
       "Why nationality matters",
       "Three consequences:",
       [
        "Regulation: a state may regulate its nationals even outside its territory; its power over aliens abroad is much more limited.",
        "Diplomatic protection: when a national is harmed in violation of IL, the state may espouse (take up) the national’s claim against the responsible state.",
        "Treaty rights: treaties often tie protections to nationality, e.g., BITs (bilateral investment treaties) protect each party’s nationals, and extradition treaties often let a state refuse to extradite its own nationals."
       ]
      ],
      [
       "Baseline rule",
       "Domestic law defines the qualifications for nationality.",
       [
        "Tunis and Morocco Nationality Decrees (PCIJ 1923): whether a state treats someone as its national is within its exclusive domestic jurisdiction.",
        "1930 Hague Convention art. 1: “It is for each State to determine under its own law who are its nationals,” and other states recognize that law insofar as it is consistent with conventions, custom, and generally recognized principles on nationality."
       ]
      ],
      [
       "Growing limits",
       "Treaties and tribunal decisions, largely regional, now limit state discretion over who is a national.",
       [
        "1997 European Convention on Nationality arts. 4–6: avoid statelessness, no discrimination, facilitate nationality for spouses, children, and others with substantial links.",
        "Spiro (2011): citizenship is shifting “from an identity to a rights frame”; bars on gender discrimination and limits on terminating citizenship are hardening."
       ]
      ],
      [
       "Jus sanguinis",
       "Nationality flows from biological parents. The predominant approach globally."
      ],
      [
       "Jus soli",
       "Nationality flows from birthplace. A minority approach globally, but the majority approach in the Americas."
      ],
      [
       "Naturalization",
       "Acquiring nationality by applying and meeting the state’s conditions."
      ],
      [
       "Statelessness",
       "At least 4.5 million people are stateless (slides, 2026). A stateless person can rely on no state’s diplomatic protection, and if expelled no state must accept them.",
       [
        "Other consequences: insecure residence, travel barriers, no effective political participation, denial of economic and social rights.",
        "Causes: conflicts, disasters, mass movements; ethnoracial exclusion; gender discrimination; failed birth registration.",
        "State succession: the ILC’s 1999 Articles on Nationality in Relation to the Succession of States require states concerned to protect inhabitants from statelessness. After 1991, Estonia and Latvia passed ethnically biased citizenship laws that left large ethnic-Russian populations without nationality."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Right to a Nationality",
     "explain": [
      "IL recognizes a right to a nationality only partly. Several instruments state it, but they differ in strength (a declaration vs. a binding treaty) and scope (everyone vs. children; acquiring vs. losing nationality). The UDHR version is broad but weak: state practice is very inconsistent and there is little opinio juris behind it."
     ],
     "items": [
      [
       "UDHR art. 15",
       "Universal Declaration of Human Rights (1948, a General Assembly declaration): “everyone has the right to a nationality,” and “no one shall be arbitrarily deprived of his nationality” nor denied the right to change it. Very inconsistent state practice and little opinio juris, so it is weak evidence of a binding rule."
      ],
      [
       "ICCPR art. 24(3)",
       "International Covenant on Civil and Political Rights (1966): a narrower treaty right, “every child has the right to acquire a nationality.” Convention on the Rights of the Child art. 7 is similar."
      ],
      [
       "1961 Convention on the Reduction of Statelessness",
       "Prohibits denationalization in most circumstances if it would leave the individual stateless (exception for serious acts of disloyalty). Adopted by 85 countries, with many reservations."
      ],
      [
       "American Convention on Human Rights art. 20",
       "Every person is entitled to a nationality; a right to the nationality of the state of birth if the person has no other; no arbitrary deprivation of nationality or of the right to change it. In force in 24 of 36 OAS (Organization of American States) countries.",
       [
        "Inter-American Court: nationality is an inherent human right, and state regulation of nationality is subject to human rights obligations (Advisory Opinion OC-4/84). Yean & Bosico v. Dominican Republic (2005): the right to a nationality is non-derogable."
       ]
      ],
      [
       "Other instruments",
       "1954 Convention relating to the Status of Stateless Persons (minimal protections for those already stateless); 1967 Refugee Protocol (some protection for stateless refugees); CEDAW art. 9 (equal rights for women to acquire, change, retain, and transmit nationality)."
      ],
      [
       "Denationalization",
       "A state cannot render a person stateless or arbitrarily strip nationality. The 1997 European Convention generally does not allow unilateral withdrawal and emphasizes the individual’s voluntary choice (e.g., serving in a foreign military force)."
      ],
      [
       "Case study: US birthright citizenship",
       "The 14th Amendment grants citizenship to persons born in the US and “subject to the jurisdiction thereof.” When it was enacted, the common law largely reflected the IL rule that state jurisdiction did not include individuals primarily under another’s control (foreign diplomats, Native Americans, invading armies, foreigners on foreign-flagged vessels in US waters). The class question is whether people not lawfully present belong on that list, and what the Convention on the Reduction of Statelessness would require if the US were a party (it is not)."
      ]
     ],
     "check": {
      "status": "thin",
      "note": "Class 11 slides pose the birthright-citizenship exercise (what the Statelessness Convention’s text would require; recourse for a child of two stateless parents) as open questions. The Day 11 notes and readings give only the Convention’s denationalization rule, not its provisions on conferring nationality at birth, and no answer is recorded."
     }
    },
    {
     "title": "Recognition of Nationality: Nottebohm",
     "explain": [
      "A state may naturalize any consenting individual, but IL does not always require other states to recognize that nationality for international purposes. States have reserved the right not to recognize nationality, especially when it comes through naturalization rather than birth.",
      "Nottebohm (Liechtenstein v. Guatemala) (ICJ 1955) states the rule: a state cannot demand that another state recognize its grant of nationality for purposes of diplomatic protection unless there is a genuine link between the individual and the state. Jus soli and jus sanguinis are generally understood to supply that link; naturalization may not."
     ],
     "items": [
      [
       "Facts",
       "Nottebohm was a German national from birth (1881) who lived in Guatemala from 1905 with substantial business there. In October 1939, a month into WWII, he naturalized in Liechtenstein (residence requirement waived, fees paid, oath taken), lost German nationality, and returned to Guatemala. In 1943 Guatemala arrested and deported him to the US, where he was interned as an enemy alien; Guatemala later confiscated his property. Liechtenstein sued Guatemala on his behalf."
      ],
      [
       "Holding",
       "Guatemala had no obligation to recognize the Liechtenstein nationality, so Liechtenstein could not extend diplomatic protection to him against Guatemala. The claim was inadmissible."
      ],
      [
       "Genuine link test",
       "Each state sets its own nationality rules, but whether a state may exercise protection is decided by IL. Nationality must reflect “a legal bond having as its basis a social fact of attachment, a genuine connection of existence, interests and sentiments, together with the existence of reciprocal rights and duties.”"
      ],
      [
       "Application",
       "His ties ran to Germany (family, business) and Guatemala (34 years, center of his interests). His ties to Liechtenstein were “extremely tenuous”: no home there, a brief visit, a rushed process, no intent to settle. The purpose was to swap a belligerent nationality for a neutral one to gain protection, not to join Liechtenstein’s population."
      ],
      [
       "Jus soli / sanguinis",
       "Generally understood to supply a genuine link. Restatement (Third) § 211 cmt. c calls them “universally accepted”; voluntary naturalization is generally recognized but may be questioned without other ties such as residence."
      ],
      [
       "Status of the test",
       "Controversial:",
       [
        "Rejected by the ILC: Articles on Diplomatic Protection (2006) art. 4 defines the state of nationality as one whose nationality the person acquired under its law “not inconsistent with international law,” with no genuine link required. The commentary limits Nottebohm to its facts, since a strict test “would exclude millions of persons” from protection in an age of migration.",
        "Recognized by the American Law Institute: Restatement (Third) § 211 says states need not accept a nationality not based on a genuine link."
       ]
      ],
      [
       "Forcible imposition",
       "Imposing nationality against a person’s will, or refusing to honor voluntary renunciation, may violate IL. Other states need not recognize nationality imposed on the basis of marriage, residence, property, having a child there, or ethnic origin, or a nationality the person renounced (§ 211 cmt. d)."
      ]
     ],
     "tip": "Nottebohm is about whether other states must recognize a nationality for diplomatic protection. It does not say Liechtenstein’s grant was invalid under Liechtenstein law.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Status of Corporations",
     "explain": [
      "The baseline rule: corporations do not have independent international legal personality. One consequence is that a concession or contract between a state and a foreign corporation is not governed by the law of treaties.",
      "Some corporations still enjoy IL powers, privileges, and immunities. There are two categories. A state-controlled corporation may be treated as part of the state depending on what it is doing: commercial activity gets no immunity; other (governmental) activity gets sovereign immunity. A treaty-chartered corporation gets whatever privileges its treaty grants plus those under the law of its state of incorporation."
     ],
     "items": [
      [
       "Baseline rule",
       "Corporations do not have independent international legal personality. Like individuals, they can hold rights within specific regimes (human rights treaties, investment treaties), sometimes with a direct right of action (European Court of Human Rights, ISDS, investor-state dispute settlement)."
      ],
      [
       "State-controlled corporation: is it “state-owned”?",
       "Ask whether the corporation is so closely controlled by the government that it is a state agency, considering:",
       [
        "the degree of government ownership;",
        "whether the corporation is executing state functions; and",
        "other indicia of state control."
       ]
      ],
      [
       "Commercial activities",
       "Not treated as an “arm of the state.” No sovereign immunity."
      ],
      [
       "Other activities",
       "Entitled to sovereign immunity. A state-controlled corporation’s conduct may also be attributed to the state for purposes of state responsibility."
      ],
      [
       "Exercise 2: Arcadian Energy & Ports Corp. (state-owned)",
       "Applying the commercial/other-activities rule from the slides:",
       [
        "Running retail gas chains in foreign markets: a commercial activity, so it is not treated as an arm of the state and does not get immunity.",
        "Issuing port entry permits and collecting import duties: governmental functions, so it acts as an arm of the state and gets immunity.",
        "Negotiating a wind-farm joint venture abroad at the private behest of the Ministry of Trade: class focused on whether the minister ordered it for his own reasons or as a governmental function, the nature of the activity, and who the counterparty is."
       ]
      ],
      [
       "Treaty-chartered corporation",
       "Enjoys the privileges and immunities granted by its treaty and those that exist under the law of the state of incorporation.",
       [
        "Crawford: the more independence and delegated powers the body has, the closer it comes to a joint agency of states or even an IO.",
        "Example: Eurofima (1955 treaty), a Swiss-law corporation for railway rolling stock whose status the parties recognize at home; privileges include exemption from Swiss taxation."
       ]
      ]
     ],
     "multi": true,
     "check": {
      "status": "thin",
      "note": "Class 11 slides pose Exercise 2 without an answer key. Austin’s Day 11 class notes mark his answer to the first activity “(confused)” and list only discussion factors for the third; no source states the result for the wind-farm activity. Exercise 1 (powers of the Enterprise under UNCLOS) has no notes."
     }
    },
    {
     "title": "Nationality of Corporations · Barcelona Traction",
     "explain": [
      "Corporations usually cannot bring international claims themselves and rely on their state of nationality to espouse them. Because a company has many stakeholders of different nationalities (shareholders, creditors, employees), IL needs a rule for which state can claim. The two accepted bases are the state of incorporation and the state of the registered office (siège social). The shareholders’ state is generally not a basis.",
      "Barcelona Traction (Belgium v. Spain) (ICJ 1970) applies that rule: for an injury to the company, only the company’s national state may claim. A wrong to the company harms shareholders’ interests but not their rights, unless the act targets the shareholders’ own rights."
     ],
     "items": [
      [
       "Two bases",
       "The state in which the corporation is incorporated, or the state in which it has its registered office (siège social). Barcelona Traction ¶ 70 calls this the traditional rule, confirmed by long practice. No absolute genuine-connection test applies to corporations; the Court drew no analogy to Nottebohm."
      ],
      [
       "Shareholders",
       "Corporate nationality is generally NOT the state where some, or even a preponderance, of shareholders are located."
      ],
      [
       "Barcelona Traction: facts",
       "A Canadian corporation headquartered in Toronto; Belgian individuals and companies held 88% of its shares. Spain’s actions put it out of business. Belgium claimed standing (jus standi) to espouse its shareholders’ claims."
      ],
      [
       "Barcelona Traction: holding",
       "Belgium had no jus standi; claim rejected. “The national State of the company alone” may make a claim for injury to the company (¶ 88).",
       [
        "Domestic law draws a firm line between company and shareholder; only the company acts on corporate matters. “Although two separate entities may have suffered from the same wrong, it is only one entity whose rights have been infringed.”",
        "Canada had made representations and then stopped. The state is “the sole judge” of whether and how long to protect; stopping does not pass the right to another state.",
        "Policy: protecting shareholders as such would create competing claims and “an atmosphere of confusion and insecurity in international economic relations.”"
       ]
      ],
      [
       "Exceptions",
       "The shareholders’ state may claim in these situations:",
       [
        "Acts aimed at shareholders’ direct rights (declared dividends, attending and voting at general meetings, a share of residual assets on liquidation).",
        "Possible equity exceptions, e.g., where the responsible state is the company’s own national state; not applicable in Barcelona Traction because the company could always approach Canada.",
        "ILC Articles on Diplomatic Protection art. 11 (2006): (a) the corporation has ceased to exist under the law of its state of incorporation for a reason unrelated to the injury; or (b) at the date of injury the corporation had the nationality of the responsible state, and incorporating there was required to do business there.",
        "Treaties providing otherwise, e.g., the 1981 Iran–US Claims Settlement Declaration treats a US-organized corporation as a US national if US nationals own 50% or more (Flexi-Van Leasing)."
       ]
      ],
      [
       "Treaties and workarounds",
       "Investment and trade treaties often set more complicated nationality rules. Many corporations incorporate a subsidiary in a jurisdiction helpful for a particular business activity (“nationality shopping”). BITs protect direct and indirect investment, so the parent’s state can claim for a local subsidiary (ELSI, US v. Italy, ICJ 1989)."
      ]
     ],
     "tip": "On a fact pattern, separate harm to the company (only the company’s state claims) from harm to a shareholder’s own rights (the shareholder’s state may claim). Then check for an art. 11 exception or a treaty.",
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
   "The ICJ Statute's list of sources: (a) treaties the states have accepted; (b) custom, a general practice accepted as law; (c) general principles of law; (d) judicial decisions and leading scholars, as subsidiary means only, subject to art. 59.",
   2
  ],
  [
   "ICJ Statute art. 59",
   "An ICJ decision binds only the parties to that case and only for that dispute. That is why judicial decisions are subsidiary means and the Court has no binding precedent.",
   2
  ],
  [
   "Lotus principle",
   "From S.S. Lotus (PCIJ 1927): rules binding states come from their own free will, so restrictions on a state's independence cannot be presumed. A state may act unless a treaty or custom limits it.",
   1
  ],
  [
   "UNGA resolution: law-making indicia",
   "A General Assembly resolution may reflect custom when it is framed as general legal obligations, adopted unanimously, uses 'solemnly declares,' and is followed by state practice (e.g., the 1962 outer space declaration, followed by the Outer Space Treaty).",
   2
  ],
  [
   "Why UNSC resolutions bind",
   "Members confer primary responsibility for peace and security on the Security Council (art. 24), agree to carry out its decisions (art. 25), carry out its required action (art. 48), and Charter obligations prevail over other treaties (art. 103).",
   2
  ],
  [
   "Five routes to contentious jurisdiction",
   "A state consents through (1) a treaty clause, art. 36(1); (2) an optional clause declaration, art. 36(2), against another declarant; (3) a special agreement (compromis); (4) informal consent by appearing and litigating; (5) an old PCIJ clause transferred under arts. 36(5)/37.",
   3
  ],
  [
   "Art. 36(6) and art. 41",
   "Joining the ICJ Statute is not consent to be sued, but every party is bound by the Court's power to decide its own jurisdiction (36(6)) and to order provisional measures, which LaGrand held binding (41).",
   3
  ],
  [
   "Advisory opinion: two-part inquiry",
   "(1) Power: a treaty must authorize the body to ask this question (Charter art. 96 plus Statute art. 65(1)); agencies may ask only within their activities. (2) Propriety: the Court may decline, but only for compelling reasons; political aspects go here.",
   3
  ],
  [
   "Finding the ICJ holding",
   "Each section gives one side's argument, then the counterargument, then a sentence beginning 'The Court notes / observes / finds.' That sentence is the holding.",
   3
  ],
  [
   "VCLT art. 2(1)(a)",
   "A treaty is an international agreement between states, in written form, governed by international law, in one or several related instruments, whatever it is called.",
   4
  ],
  [
   "Two screens for a treaty",
   "An instrument is a treaty only if (1) it is governed by international law and (2) the parties intended to create legally binding obligations. Title and form are not decisive.",
   4
  ],
  [
   "VCLT arts. 34–36",
   "A treaty creates no obligations or rights for a third state without its consent (34). An obligation needs the parties' intent plus the third state's express written acceptance (35). A right needs only presumed assent, absent objection (36).",
   4
  ],
  [
   "VCLT art. 18",
   "A state that has signed a treaty subject to ratification must refrain from acts that would defeat the treaty's object and purpose before ratifying. Signature does not otherwise bind it.",
   4
  ],
  [
   "Art. 19 reservation bars",
   "A reservation is barred if (a) the treaty prohibits it, (b) the treaty permits only specified reservations and this is not one, or (c) it is incompatible with the treaty's object and purpose (the fallback test when the treaty is silent).",
   4
  ],
  [
   "Material breach (art. 60(3))",
   "Either a repudiation of the treaty or the violation of a provision essential to its object or purpose. The test is the importance of the provision, not the size of the breach. The injured party may terminate or suspend.",
   4
  ],
  [
   "Rebus sic stantibus (art. 62)",
   "A party may invoke a fundamental change only if it was unforeseen and the changed circumstances were an essential basis of the parties' consent. Boundary treaties are excluded, and the plea succeeds only in exceptional cases.",
   4
  ],
  [
   "Void vs. voidable",
   "Void without more: coercion of a state, coercion of a representative, and conflict with a peremptory norm. Voidable only if invoked: violation of internal law, excess of authority, error, fraud, and probably corruption.",
   4
  ],
  [
   "VCLT art. 31(1)",
   "A treaty is interpreted in good faith according to the ordinary meaning of its terms, in their context, and in light of its object and purpose. The ICJ treats this as CIL.",
   4
  ],
  [
   "VCLT art. 32 trigger",
   "Supplementary means (preparatory work, circumstances of conclusion) may be used to confirm an art. 31 meaning, or to determine meaning when art. 31 leaves it ambiguous or obscure or produces a manifestly absurd or unreasonable result.",
   4
  ],
  [
   "CIL elements",
   "Customary international law requires (1) state practice that is widespread, representative, and consistent, and (2) opinio juris, meaning states follow it from a sense of legal obligation. Each element is proven separately.",
   5
  ],
  [
   "Persistent objector requirements",
   "The objection must be made during the rule's formation, clearly articulated, made known to other states, and maintained over time. It does not work against peremptory norms.",
   5
  ],
  [
   "Codification / crystallization / generation",
   "ILC Concl. 11: a treaty provision may record custom that already existed (codification), complete a custom that was emerging (crystallization), or spark later practice and opinio juris that create new custom (generation).",
   5
  ],
  [
   "North Sea holding",
   "Art. 6 equidistance did not bind Germany as custom: it did not codify existing custom, it lacked a norm-creating character, too few states and too little time followed it after entry into force, and independent practice did not show opinio juris.",
   5
  ],
  [
   "VCLT art. 53",
   "A peremptory norm is accepted and recognized by the international community of states as a whole as one from which no derogation is permitted, changeable only by a later norm of the same character. A treaty conflicting with one at conclusion is void.",
   6
  ],
  [
   "ILC Concl. 6",
   "Proving a rule is custom does not prove it is peremptory. There must be separate evidence that states accept the rule as one no state may derogate from.",
   6
  ],
  [
   "Serious breach of jus cogens: third states",
   "For a gross or systematic breach of a peremptory norm, every state must cooperate to end it through lawful means, not recognize the resulting situation as lawful, and not aid or assist in maintaining it (Concl. 19; ARSIWA art. 41).",
   6
  ],
  [
   "Montevideo",
   "Montevideo Convention art. I: a state has a permanent population, a defined territory, a government, and capacity to enter into relations with other states. Each threshold is low, and the criteria are a rule of thumb.",
   7
  ],
  [
   "Declaratory vs. constitutive",
   "Declaratory (prevailing): statehood exists once the criteria are met and recognition only confirms it, so acts before recognition are state acts. Constitutive: no statehood until other states recognize the entity.",
   7
  ],
  [
   "IO personality: four questions",
   "After reading the establishing treaty, ask whether the IO is a permanent association of states, has executive organs, has legal powers distinct from its members, and has powers that exist generally.",
   7
  ],
  [
   "Nottebohm",
   "A state cannot demand that another state recognize its grant of nationality for diplomatic protection unless there is a genuine link between the person and the state. Liechtenstein's tenuous naturalization did not bind Guatemala.",
   8
  ],
  [
   "Barcelona Traction",
   "Only the corporation's national state (state of incorporation or registered office) may claim for injury to the company. Belgium, home of 88% of the shareholders, had no standing against Spain.",
   8
  ],
  [
   "Answer architecture",
   "For each discrete legal question, write a Rule Statement (name the source and why it binds these parties), Analysis (easier standard first, counterarguments, missing facts), and a Conclusion that grades the strength of each position.",
   0
  ],
  [
   "The three blocks",
   "Block 1, methods: sources, adjudication, treaties, custom, general principles, peremptory norms. Block 2, characterizing actors: personality, nationality, jurisdiction, immunity, state responsibility. Block 3, substantive rules. The midterm covers Blocks 1 and 2.",
   0
  ],
  [
   "Four mindset shifts",
   "(1) IL exists mainly outside courts. (2) Not every wrong has a remedy. (3) IL is a layer cake: state freedom, then peremptory norms, then treaty and custom, then tribunal decisions. (4) State rights do not transfer automatically to IOs, individuals, or corporations.",
   0
  ],
  [
   "Wind the analysis back",
   "For state responsibility, characterize the unlawful act, attribute it to a state, and only then set out consequences. Most midterm answers skipped attribution.",
   0
  ],
  [
   "'Judicial relief' vs. 'obligations of other states'",
   "'Judicial relief' asks which courts or tribunals could hear the matter. 'What obligations do other states have' asks about state responsibility, with no court necessarily involved.",
   0
  ],
  [
   "Natural law",
   "Law must reflect fundamental principles of right and wrong found through reason, so what is morally wrong or irrational cannot be law. It explains rules that bind without consent, such as pacta sunt servanda and peremptory norms.",
   1
  ],
  [
   "Legal positivism",
   "Law is the product of state consent, expressed in treaties (express consent) and custom (tacit consent). A state is bound only by what it has accepted. Most IL lawyers reason this way.",
   1
  ],
  [
   "Is IL law? (Austin, Kelsen, Hart)",
   "Austin: no, because law is a sovereign's command backed by sanction. Kelsen: yes, IL sits atop a monist global order. Hart: partly, because IL has primary rules but lacks secondary rules on change and interpretation.",
   1
  ],
  [
   "How IL is enforced",
   "With no central sanction, IL is enforced through reciprocity (the other side stops cooperating), reputation (rule-breakers lose partners), and collective security (states band together against a violator).",
   1
  ],
  [
   "TWAIL and the New Stream",
   "The New Stream argues IL is internally contradictory, so respectable arguments can reach opposite results. TWAIL (Third World Approaches to International Law) argues IL developed to serve colonizing states and should reflect non-European perspectives.",
   1
  ],
  [
   "GA powers (Charter arts. 10, 14)",
   "The General Assembly may discuss any Charter matter and make recommendations, but cannot enact binding law. It may not recommend on a matter while the Security Council is exercising its functions on it.",
   2
  ],
  [
   "SC voting",
   "The Security Council has 15 members (5 permanent, 10 elected for two years). A measure needs nine votes, and on nonprocedural matters any permanent member can veto it.",
   2
  ],
  [
   "Art. 38(2): ex aequo et bono",
   "The ICJ may decide a case on the basis of fairness and equity, instead of strict legal rules, only if the parties agree.",
   2
  ],
  [
   "Optional clause (art. 36(2))",
   "A state's declaration accepts ICJ jurisdiction automatically, but only in cases brought by another state that has also filed a declaration. Both states must have accepted.",
   3
  ],
  [
   "WHO request refused",
   "The ICJ refused the World Health Organization's request on nuclear weapons for lack of jurisdiction: the question was outside the scope of the WHO's activities. It answered the same question for the General Assembly.",
   3
  ],
  [
   "Nuclear Weapons AO holding (para. 2 E)",
   "Threat or use of nuclear weapons would generally be contrary to the law of armed conflict, but the Court could not decide whether it would be lawful in an extreme case of self-defense in which a state's survival is at stake (non liquet).",
   3
  ],
  [
   "ICJ and precedent",
   "No stare decisis. The Court strives for consistency to protect reliance interests, distinguishes earlier decisions instead of overruling them, and treats its procedural and evidentiary rulings as precedential.",
   3
  ],
  [
   "Art. 27",
   "A state may not invoke its own internal law (constitution or statutes) to justify failing to perform a treaty.",
   4
  ],
  [
   "Withdrawal from a silent treaty (art. 56)",
   "A treaty with no withdrawal clause cannot be denounced unless the parties intended to allow it or a right of withdrawal is implied by the treaty's nature. At least twelve months' notice is required; peace treaties are not open to denunciation.",
   4
  ],
  [
   "Registration (Charter art. 102)",
   "Every treaty a UN member enters must be registered with the UN Secretariat. An unregistered treaty cannot be invoked before any UN organ, but it remains valid.",
   4
  ],
  [
   "Interpretive declaration vs. reservation",
   "A declaration states a party's view of a provision's meaning. If it in effect excludes or modifies the provision's legal effect for that state, it is a reservation, whatever it is called.",
   4
  ],
  [
   "Evolutive interpretation (Navigational Rights)",
   "Where parties use generic terms in a treaty of continuing duration, they are presumed to intend an evolving meaning, so 'for the purposes of commerce' in an 1858 treaty covered modern tourism.",
   4
  ],
  [
   "Usage",
   "A practice states follow because they want to, without a sense of legal obligation (ceremonial salutes, diplomatic parking courtesies). It has practice but no opinio juris, so it is not custom.",
   5
  ],
  [
   "ILC Concl. 8 (practice)",
   "State practice must be sufficiently widespread, representative (including specially affected states), and consistent. No fixed duration is required once that standard is met.",
   5
  ],
  [
   "Particular (local) custom",
   "A customary rule binding only a subset of states, usually in a shared geography, based on a general practice accepted as law among those states (ILC Concl. 16). Example: Gulf of Mannar pearl fisheries.",
   5
  ],
  [
   "Silence as acceptance",
   "A state's failure to react can show acceptance of a rule only if the state was in a position to react and the circumstances called for a reaction.",
   5
  ],
  [
   "Concl. 4: two criteria",
   "A peremptory norm must be (a) a norm of general international law, usually custom, and (b) accepted by the international community of states as non-derogable and changeable only by a later peremptory norm.",
   6
  ],
  [
   "Art. 53 vs. art. 64",
   "Art. 53: a treaty conflicting with a peremptory norm at conclusion is void in whole, with no severance. Art. 64: a treaty conflicting with a new norm becomes void and terminates, and separable provisions may survive under Concl. 11(2).",
   6
  ],
  [
   "The ILC list of peremptory norms",
   "Prohibitions of aggression, genocide, crimes against humanity, racial discrimination and apartheid, slavery, and torture; the basic rules of international humanitarian law; and the right of self-determination. The list is non-exhaustive.",
   6
  ],
  [
   "Peremptory norms: no defenses, no objectors",
   "No circumstance precluding wrongfulness (e.g., necessity, self-defense) can justify breaching a peremptory norm (Concl. 18), and the persistent objector rule does not apply (Concl. 14(3)), because these norms bind regardless of consent.",
   6
  ],
  [
   "Peremptory norms: limits",
   "A peremptory norm does not create ICJ jurisdiction, which still requires consent (Armed Activities), and does not by itself displace immunity (Arrest Warrant).",
   6
  ],
  [
   "Subject of IL: three elements",
   "An entity that has direct rights and obligations under IL, can defend them by bringing international claims, and is responsible for breaching its obligations. States are the primary subjects; individuals and corporations are not direct subjects.",
   7
  ],
  [
   "Independence (Montevideo government criterion)",
   "A state can be heavily under foreign control and remain a state. Only systematic, continuous control over a wide range of decisions defeats independence, and control under a legal title (occupation, protectorate) leaves statehood intact.",
   7
  ],
  [
   "Implied recognition",
   "Recognition may be implied only from a bilateral treaty, formal diplomatic relations, and probably consular exequaturs. It is not implied from negotiations, a shared multilateral treaty, or a joint conference.",
   7
  ],
  [
   "Tinoco Concessions",
   "A government binds the state if it has secure de facto control of all or most of its territory. Non-recognition based on illegitimacy or irregular origin loses weight, so Costa Rica was bound by the Tinoco regime's acts.",
   7
  ],
  [
   "De jure vs. de facto recognition",
   "De jure: formal recognition of a government. De facto: working with a government without formally recognizing it. The distinction applies only to governments; there is no de facto state.",
   7
  ],
  [
   "Why nationality matters",
   "A state may regulate its nationals abroad, may espouse their claims through diplomatic protection, and can secure treaty rights for them (investment treaties, refusal to extradite nationals).",
   8
  ],
  [
   "Nationality baseline rule",
   "Each state's domestic law decides who its nationals are (Tunis and Morocco Nationality Decrees; 1930 Hague Convention art. 1). Other states recognize that law insofar as it is consistent with conventions, custom, and principles on nationality.",
   8
  ],
  [
   "Jus soli and jus sanguinis",
   "Jus sanguinis (nationality from parents) is the predominant approach globally. Jus soli (nationality from birthplace) is a global minority approach but the majority approach in the Americas. Both generally supply a genuine link.",
   8
  ],
  [
   "Barcelona Traction exceptions",
   "The shareholders' state may claim when the act targets shareholders' direct rights (declared dividends, voting, residual assets), under ILC Diplomatic Protection art. 11, or where a treaty provides otherwise.",
   8
  ],
  [
   "State-controlled corporation",
   "If closely controlled enough to be a state agency, it gets no sovereign immunity for commercial activities but gets immunity for governmental ones (e.g., issuing port permits, collecting duties).",
   8
  ]
 ],
 "quiz": [
  {
   "q": "An exam packet includes the ILC (International Law Commission) Draft Articles on State Responsibility. How should your rule statement treat them?",
   "o": [
    "Define CIL (customary international law) and state that the provisions are understood to reflect CIL.",
    "Say the draft articles bind as an international convention under ICJ Statute art. 38(1)(a).",
    "Run the full VCLT (Vienna Convention on the Law of Treaties) art. 31 interpretation rundown on the draft articles.",
    "Set the draft articles aside, because a non-binding instrument has no role in the analysis."
   ],
   "a": 0,
   "why": [
    "Correct. An ILC product binds only to the extent it restates custom, so the rule statement defines CIL (state practice plus opinio juris) and says the provisions reflect it.",
    "Art. 38(1)(a) covers conventions the contesting states have accepted. An ILC draft was never adopted as a treaty, so it cannot bind as a convention.",
    "The art. 31 rundown is the move for an in-force treaty. An ILC draft is not an in-force treaty, so the outline says to skip that rundown for ILC products.",
    "The draft articles still matter because they are understood to reflect CIL. Ignoring them throws away the governing rule; the answer keys expect you to use them as evidence of custom."
   ],
   "e": "An ILC draft is not a treaty in force, so it binds only as far as it reflects customary law. The standing rule-statement move is to define CIL up front (general state practice plus opinio juris) and state that the provisions are understood to reflect it. The SP2025 final key also credited noting that the ILC commentaries help flesh out the customary rule.",
   "unit": 0
  },
  {
   "q": "A prompt asks: \"What obligations do other states have in response to the brigade's execution of prisoners?\" Under the exam-architecture approach, what body of law does this question call for?",
   "o": [
    "State responsibility and the obligations that run between states, with no court necessarily involved.",
    "Judicial relief, so you should map which tribunals could hear the case.",
    "Domestic criminal jurisdiction under the packet's War Crimes Act.",
    "Interpretation of the ICJ Statute's jurisdiction clauses."
   ],
   "a": 0,
   "why": [
    "Correct. Mindset shift #1: IL (international law) operates mainly outside courts. A question about what other states owe calls for state responsibility, including the special consequences of a peremptory norm breach.",
    "The word 'judicial' or 'relief' signals courts and tribunals. This prompt asks about obligations of other states, which the professor treats as a different question.",
    "A domestic statute raises jurisdiction and immunity questions. That would be the right move for a question about prosecution, not for one asking what other states are obliged to do.",
    "ICJ jurisdiction is relevant only if the question asks about adjudication. Nothing in this call of the question points to the ICJ."
   ],
   "e": "The professor says to be 'super exacting' about the call of the question. 'What judicial relief is available' asks about courts and tribunals, while 'what obligations do other states have' asks about state responsibility, with no court involved. On the midterm key, execution of prisoners triggered peremptory norm consequences: all states must cooperate to end the breach, must not recognize it as lawful, and must not aid in maintaining it.",
   "unit": 0
  },
  {
   "q": "An armed group trained by State X attacks civilians. The question asks about the consequences for State X. According to the answer keys, what step must come before discussing consequences?",
   "o": [
    "Characterize the unlawful act and attribute the armed group's conduct to State X.",
    "Decide whether the ICJ has contentious jurisdiction over State X.",
    "Recite VCLT art. 31 to interpret the armed group's mandate.",
    "Determine whether State X persistently objected to the rule against attacking civilians."
   ],
   "a": 0,
   "why": [
    "Correct. The keys say to wind the analysis back: characterize the unlawful act, attribute it to a state, then set out consequences. Nearly all midterm responses skipped attribution.",
    "Responsibility can exist with no court involved. Jurisdiction is a separate question and is not a prerequisite to discussing consequences.",
    "Treaty interpretation applies to treaties. An armed group's conduct is not a treaty, and the missing step the keys flag is attribution.",
    "Persistent objection is a CIL defense to a forming rule. It is not the step the keys require before consequences, and it cannot apply to a peremptory norm."
   ],
   "e": "When a question involves state responsibility, the answer keys require you to start at the beginning: characterize the unlawful act, attribute it to a state, and only then set out the consequences. On the Fall 2025 midterm, nearly all responses skipped straight to consequences without attribution. Take the easier attribution standard first (for example, a state's own organs under ARSIWA art. 4) and then the harder one (art. 8 control over a non-state group).",
   "unit": 0
  },
  {
   "q": "A prompt asks whether an international organization (the 'Community') acted unlawfully in deploying forces. Many midterm answers applied the articles on state responsibility to it. What did the midterm key say was the better approach?",
   "o": [
    "Apply the state responsibility articles in full, because an IO (international organization) has the same duties as a state.",
    "Conclude the Community cannot have any legal obligations because only states are subjects of IL.",
    "Apply only jus cogens consequences, since those bind every actor.",
    "Use the Community's own founding treaty, because the state responsibility articles are rules for states only."
   ],
   "a": 3,
   "why": [
    "This is the error the key flagged. Mindset shift #4: rights and duties of states do not transfer automatically to IOs.",
    "IOs can have legal personality and obligations, which are tested through their founding treaty. Denying any obligation skips the analysis the key expected.",
    "The key did not direct students to peremptory norms for the IO's own conduct. The tool it named was the IO's founding treaty.",
    "Correct. The articles on state responsibility apply to states. IO responsibility was not taught, so the only tool for the IO was its own treaty: what powers it grants and whether the IO followed its procedures."
   ],
   "e": "Mindset shift #4 says you cannot assume that IOs, individuals, or corporations have the same rights and duties as states. The midterm key criticized answers that applied the articles of state responsibility to the Community, an IO. The correct move is to read the founding treaty: establish what authority the IO has, then whether it followed the treaty's procedures, such as a required voting majority.",
   "unit": 0
  },
  {
   "q": "On the Practice Final, the Rome Statute (a treaty) conflicted with a CIL rule giving officials immunity for acts in their official capacity. Which hierarchy rule did the answer key apply?",
   "o": [
    "A treaty obligation can prevail over an earlier-in-time CIL rule, but never over a peremptory norm, so the Rome Statute overrides CIL immunity.",
    "Custom always prevails over a treaty because custom binds all states.",
    "Article 38(1) ranks treaties first, so a treaty prevails over every other rule, including peremptory norms.",
    "The two rules cancel out, so neither applies and the official is treated under domestic law."
   ],
   "a": 0,
   "why": [
    "Correct. This is the layer cake in action: treaty and custom sit on top of peremptory norms. A treaty can displace earlier custom, so the Rome Statute overrides official-capacity immunity.",
    "There is no rule that custom always wins. A treaty obligation can prevail over an earlier-in-time CIL rule among its parties.",
    "Article 38(1) contains no strict hierarchy, and no treaty can prevail over a peremptory norm. A treaty contrary to a peremptory norm creates no obligation.",
    "IL resolves the conflict through the later-in-time rule and the peremptory norm limit. Nothing in the sources says conflicting rules cancel out."
   ],
   "e": "The outline's hierarchy move: a treaty obligation can prevail over an earlier-in-time CIL rule, but never over a peremptory norm. The Practice Final key used this to note that the Rome Statute, a treaty, overrides CIL immunity for officials acting in their official capacity. Timing and jus cogens decide conflicts between treaty and custom, not the order of Article 38(1).",
   "unit": 0
  },
  {
   "q": "State A objects to a policy State B has adopted. A cannot point to any treaty or custom that forbids B's conduct. Under the Lotus principle, what follows?",
   "o": [
    "B is free to act, because restrictions on the independence of states cannot be presumed.",
    "B's conduct is unlawful because natural law forbids interference with another state's ships.",
    "B must show a rule of IL that authorizes its conduct, or the conduct is unlawful.",
    "The question must go to the General Assembly, which decides when a state's freedom is restricted."
   ],
   "a": 0,
   "why": [
    "Correct. Under Lotus, rules binding states come from their own consent, so a state is free to act unless a treaty or custom limits it.",
    "Lotus is a positivist rule: binding rules come from states' free will, in conventions or accepted usages. An unstated natural law prohibition does not restrict B.",
    "This reverses the Lotus presumption. Lotus says restrictions on states cannot be presumed, so B needs no authorizing rule.",
    "The GA can only discuss and recommend. It does not decide when a state's freedom is restricted."
   ],
   "e": "In S.S. Lotus (PCIJ 1927), the Court said the rules binding states 'emanate from their own free will,' expressed in conventions or usages generally accepted as law, so 'restrictions upon the independence of States cannot be presumed.' The practical rule is that a state may act unless you can show a treaty or custom limiting it. This is the bottom layer of the layer cake: start from state freedom and add limits only with a source.",
   "unit": 1
  },
  {
   "q": "Why does Murphy treat pacta sunt servanda ('agreements must be kept') as a rule that rests on natural law and not on consent alone?",
   "o": [
    "Because a state bound only by consent could withdraw that consent, and a 'treaty on treaties' would itself need something binding states to it.",
    "Because the VCLT codified it in art. 26, and codification turns a rule into natural law.",
    "Because the ICJ declared it a peremptory norm in the Nuclear Weapons opinion.",
    "Because the General Assembly adopted it unanimously with 'solemnly declares' language."
   ],
   "a": 0,
   "why": [
    "Correct. If the duty to keep agreements rested only on consent, a state could revoke it. Something outside consent has to bind states to their promises.",
    "Codification in a treaty is a positivist route, based on consent. Murphy's point is that consent cannot be the whole foundation of this rule.",
    "The sources do not say the Court declared this. Murphy's reasoning is about the logical problem with consent, not about a court ruling.",
    "GA resolutions can be evidence of custom, which still rests on state acceptance. That would not explain why the rule cannot rest on consent."
   ],
   "e": "Pacta sunt servanda requires states to perform their treaty obligations in good faith (VCLT art. 26), and Murphy calls it a grundnorm of treaty law. It cannot rest on consent alone: a state bound only by consent could withdraw it, and a 'treaty on treaties' only moves the problem back one step. Murphy concludes that some first principles exist apart from state consent, which is why the natural law mode of reasoning cannot be avoided entirely.",
   "unit": 1
  },
  {
   "q": "Which theorist held that IL has 'primary rules' of obligation but lacks the 'secondary rules' on how rules change and are interpreted, so it is not a full legal system?",
   "o": [
    "John Austin",
    "Hans Kelsen",
    "Hugo Grotius",
    "H.L.A. Hart"
   ],
   "a": 3,
   "why": [
    "Austin answered 'No': law is a sovereign's command backed by a sanction, and with no international sovereign, IL is only moral rules.",
    "Kelsen answered 'Yes': IL is monist and sits at the top of a global legal order, with national systems subsidiary to it.",
    "Grotius is the 'father of international law' who wrote De Jure Belli ac Pacis (1625) in the natural law tradition. He is not part of the 'Is IL law?' spectrum in the sources.",
    "Correct. Hart (1961) took the middle ('Kinda') position: IL has primary rules such as trading coconuts for fire, but lacks secondary rules for change and interpretation."
   ],
   "e": "The slides give three answers to whether IL is law. Austin said no, because law needs a sovereign and a sanction. Kelsen said yes, placing IL at the top of a monist global order. Hart sat between them: IL has primary rules of obligation but lacks the secondary rules (on how rules change and are interpreted) that a full legal system needs.",
   "unit": 1
  },
  {
   "q": "Under the GATT, State A breaks its trade commitments to State B. According to Murphy's account of why states comply with IL, what is the most likely response?",
   "o": [
    "An international police force enforces the commitment against A.",
    "The ICJ automatically takes jurisdiction because trade disputes fall under compulsory jurisdiction.",
    "The General Assembly passes a binding resolution ordering A to comply.",
    "B retaliates, and A suffers reputational harm with other trading partners."
   ],
   "a": 3,
   "why": [
    "IL has no central police force. Enforcement is decentralized.",
    "ICJ jurisdiction rests on consent. Joining the system does not by itself submit a state to the Court.",
    "The GA cannot enact binding law; it only discusses and recommends.",
    "Correct. Murphy says a state that breaks trade commitments faces retaliation from the partner and reputational harm with others, so the rational choice is usually to comply."
   ],
   "e": "IL is decentralized and has no central sanction, so enforcement runs through reciprocity, reputation, and collective security. Murphy's island hypothetical explains self-interest: if one person stops lighting fires, the other stops handing over coconuts, and a cheater is seen as untrustworthy. He applies this to the GATT, where retaliation and reputational harm mean that 'in most instances, the rational choice for a state is to abide by its trade agreements.'",
   "unit": 1
  },
  {
   "q": "A positivist is asked whether State C's use of torture violates IL. Which question does the positivist ask first?",
   "o": [
    "Have states enacted a treaty provision prohibiting the conduct, and is State C a party to it?",
    "Does torture violate fundamental human rights regardless of what states have agreed to?",
    "Whose interests did the rule against torture serve when it formed?",
    "Has an international court ever condemned torture?"
   ],
   "a": 0,
   "why": [
    "Correct. The positivist runs a consent checklist: is there a treaty prohibiting the conduct, is the state a party, did it file a reservation, and if no treaty applies, does general practice prohibit it without this state dissenting.",
    "That is the natural law question. Positivism asks what states have consented to, not what is right in the abstract.",
    "That is the kind of argument a critical approach such as TWAIL generates. It is not the positivist starting point.",
    "Court decisions are subsidiary means and bind only the parties. The positivist looks first for the state's own consent through treaty or custom."
   ],
   "e": "Positivism treats law as the product of state consent, through treaties (express consent) and custom (tacit consent). Murphy's torture example runs a checklist: a treaty provision prohibiting the conduct, whether the offending state is a party, whether it reserved, and, if no treaty applies, whether general and consistent practice prohibits the conduct and whether this state dissented. The outline notes this is the same sequence the exam rewards for any treaty.",
   "unit": 1
  },
  {
   "q": "A UN General Assembly (UNGA) resolution passed 120–30 'Requests' states to stop a practice. Standing alone, what is its legal effect?",
   "o": [
    "It binds all members under Charter art. 25.",
    "It binds only the states that voted yes.",
    "It becomes binding once registered with the UN Secretariat under art. 102.",
    "It is not binding, and its suggestive verb and split vote make it weak evidence of CIL."
   ],
   "a": 3,
   "why": [
    "Art. 25 obliges members to carry out decisions of the Security Council. It does not apply to GA resolutions.",
    "A yes vote on a GA resolution does not create a treaty-like obligation. The GA can only recommend.",
    "Art. 102 registration applies to treaties and affects whether they can be invoked before UN organs. It does not turn a resolution into binding law.",
    "Correct. GA resolutions do not create binding obligations on their own. Suggestive verbs ('Requests,' 'Deplores') and a non-unanimous vote are indicia of a nonbinding resolution."
   ],
   "e": "The GA's Charter powers are to discuss and recommend, so its resolutions do not bind on their own. A resolution can be evidence of CIL if it meets the criteria for custom: look at how many states adopted it and whether unanimously, its operative verbs, whether it treats the conduct as legally required, and later state practice. 'Requests' and a 120–30 split point to a nonbinding resolution.",
   "unit": 2
  },
  {
   "q": "Acting under Chapter VII, the Security Council (SC) decides that all members shall freeze a target's assets. State D says a bilateral treaty with the target requires it to keep the assets available. Which is correct?",
   "o": [
    "D must freeze the assets: members agreed to carry out SC decisions (art. 25), and Charter obligations prevail over other agreements (art. 103).",
    "D may follow the bilateral treaty under the later-in-time rule if the treaty was concluded after the resolution.",
    "D need not comply, because SC resolutions are recommendations like GA resolutions.",
    "D is bound only if it voted for the resolution as a Council member."
   ],
   "a": 0,
   "why": [
    "Correct. SC resolutions bind through arts. 24, 25, 48, and 103, and art. 103 resolves the conflict with the bilateral treaty in favor of the Charter.",
    "Charter art. 103 overrides the ordinary later-in-time rule: Charter obligations prevail over obligations under any other international agreement.",
    "That describes the GA. The SC can make decisions that bind every member.",
    "SC decisions bind all UN members, whether or not they sit on the Council or voted for the measure."
   ],
   "e": "SC resolutions can impose obligations on all UN members because of four Charter provisions: art. 24 (the SC acts on members' behalf for peace and security), art. 25 (members agree to carry out its decisions), art. 48 (members carry out the action the SC decides), and art. 103 (Charter obligations prevail over other international agreements). 'Acting under Chapter VII' signals an enforcement-type resolution. So D's bilateral treaty gives way.",
   "unit": 2
  },
  {
   "q": "The Security Council is handling a crisis in Region R. The General Assembly wants to adopt a resolution recommending specific measures for the same situation. What does the Charter say?",
   "o": [
    "The GA may not make recommendations on the matter while the SC is exercising its functions on it.",
    "The GA may adopt a binding decision because it represents all 193 members.",
    "The GA may recommend only if two-thirds of the P5 (permanent five) agree.",
    "The GA's recommendation overrides the SC because the GA approves the UN budget."
   ],
   "a": 0,
   "why": [
    "Correct. The GA's art. 14 power to recommend peaceful adjustment is limited: it may not recommend on a matter while the SC is dealing with it.",
    "The GA cannot enact binding IL, whatever its membership. Its powers are discussion and recommendation.",
    "No such requirement exists. Two-thirds voting applies to 'important questions' in the GA, and the P5 veto is an SC rule.",
    "Budget approval is arguably the GA's greatest operational power, but it gives the GA no priority over the SC on peace and security."
   ],
   "e": "Charter art. 10 lets the GA discuss any matter within the Charter and make recommendations, and art. 14 lets it recommend measures for the peaceful adjustment of situations. The limit is that the GA may not make recommendations on a matter while the SC is exercising its functions on that matter. The SC has primary responsibility for peace and security and has priority on issues it is handling.",
   "unit": 2
  },
  {
   "q": "In a dispute between States Y and Z, counsel cites an ICJ judgment between States W and X as binding on Y. What is wrong with the argument?",
   "o": [
    "Nothing; ICJ judgments are a primary source under art. 38(1)(a).",
    "ICJ judgments bind only if the GA endorses them.",
    "Under art. 59, a decision binds only the parties to that case; for others it is a subsidiary means of determining the law.",
    "ICJ judgments bind all states, but only after ten years."
   ],
   "a": 2,
   "why": [
    "Art. 38(1)(a) covers conventions. Judicial decisions fall under art. 38(1)(d) as subsidiary means.",
    "No GA endorsement step exists. The limit on judgments comes from art. 59 of the ICJ Statute.",
    "Correct. Art. 59 limits a judgment's binding force to the parties and the particular case, which is why art. 38(1)(d) lists decisions only as subsidiary means.",
    "No time-based rule exists in the sources. A judgment never becomes binding on non-parties."
   ],
   "e": "ICJ Statute art. 59 says a decision of the Court has no binding force except between the parties and in respect of that particular case. That is why art. 38(1)(d) lists judicial decisions only as 'subsidiary means for the determination of rules of law.' The judgment between W and X can be persuasive evidence of the law, but it does not bind Y.",
   "unit": 2
  },
  {
   "q": "Which statement about the order of sources in ICJ Statute art. 38(1) is accurate?",
   "o": [
    "It sets a strict ranking: a treaty under (a) always prevails over custom under (b).",
    "General principles under (c) are only 'subsidiary means,' like judicial decisions.",
    "Peremptory norms are listed as the first source in art. 38(1)(a).",
    "It contains no express hierarchy; for example, a treaty that conflicts with a peremptory norm gives rise to no obligation."
   ],
   "a": 3,
   "why": [
    "The reading warns against a strict ranking. A treaty can be displaced by later custom, and a treaty contrary to a peremptory norm creates no obligation.",
    "'Subsidiary means' describes only art. 38(1)(d): judicial decisions and the teachings of publicists.",
    "Peremptory norms are not listed in art. 38 at all. The Class 2 discussion asked why the Statute omits them.",
    "Correct. The (a)–(d) order does not dictate priority in all cases, and peremptory norms, though unlisted, prevail over every other source."
   ],
   "e": "Art. 38(1) lists conventions, custom, general principles, and judicial decisions plus publicists, but contains no express hierarchy. Treaties usually come first because a specific chosen obligation ordinarily prevails, yet a treaty can be displaced by later custom, and a treaty that conflicts with a peremptory norm creates no obligation at all. Peremptory norms are not in the list but prevail over all other sources.",
   "unit": 2
  },
  {
   "q": "Which combination of features most strongly suggests that a General Assembly resolution reflects customary law?",
   "o": [
    "Adopted by a narrow majority, uses 'Deplores,' and is not followed by any state practice.",
    "Adopted unanimously, uses 'Requests,' and addresses a single state's policy.",
    "Adopted by the GA after the SC failed to act, regardless of its wording.",
    "Adopted unanimously, 'solemnly declares' general legal obligations, and is followed by consistent state practice."
   ],
   "a": 3,
   "why": [
    "These are indicia of a nonbinding resolution: suggestive verbs, a split vote, and no supporting practice.",
    "Unanimity helps, but 'Requests' is suggestive language, and a resolution about one state's policy is not framed as a general legal obligation.",
    "The sources do not make SC inaction a factor. The indicia focus on adoption, wording, legal framing, and later practice.",
    "Correct. These match the law-making indicia, illustrated by GA Res. 1962 (XVIII) on outer space, which was followed by the Outer Space Treaty."
   ],
   "e": "A GA resolution is not binding on its own but may be evidence of CIL. The law-making indicia are: framed as general legal obligations, adopted unanimously, using 'solemnly declares' (which the professor said largely recites existing custom), and supported by later state practice. GA Res. 1962 (XVIII) on outer space is the slides' example; the later Outer Space Treaty is the subsequent practice.",
   "unit": 2
  },
  {
   "q": "A Security Council draft resolution on a nonprocedural matter receives 12 votes in favor, including four permanent members. France votes no. What is the result?",
   "o": [
    "It fails, because any permanent member can veto a nonprocedural resolution.",
    "It passes, because it has more than the nine votes required.",
    "It passes, but binds only the states that voted yes.",
    "It goes to the General Assembly for a two-thirds vote."
   ],
   "a": 0,
   "why": [
    "Correct. France is one of the P5 (China, France, Russia, the UK, the US), and each holds a veto on nonprocedural matters.",
    "Nine votes is necessary but not sufficient on nonprocedural matters. A negative vote by any permanent member is a veto.",
    "If an SC decision passes, it binds all members. Here the veto means it does not pass at all.",
    "The Charter sources in the course contain no automatic transfer to the GA after a veto."
   ],
   "e": "The SC has 15 members: five permanent members (China, France, Russia, the United Kingdom, the United States) and ten elected members on two-year terms. Nine votes are needed to pass a measure, and on nonprocedural matters any permanent member can veto. France's no vote defeats the resolution despite 12 votes in favor. The reading notes the veto has often stymied Council action.",
   "unit": 2
  },
  {
   "q": "Which of the following is NOT a way for a state to consent to ICJ contentious jurisdiction?",
   "o": [
    "A clause in a treaty in force between the parties giving the ICJ jurisdiction over disputes about the treaty (art. 36(1)).",
    "Becoming a party to the ICJ Statute by joining the UN.",
    "An optional clause declaration under art. 36(2), against a state that made the same declaration.",
    "A special agreement (compromis) submitting this particular dispute."
   ],
   "a": 1,
   "why": [
    "This is a recognized form of advance consent: treaties in force with clauses giving the ICJ jurisdiction over disputes about their interpretation or application.",
    "Correct. Joining the Statute is not consent to be sued; further consent is required. It does bind the state to arts. 36(6) and 41.",
    "This is a recognized basis: two states with declarations accept automatic jurisdiction as between them.",
    "This is consent for a particular case, a recognized basis (Gabon and Equatorial Guinea used one in 2016)."
   ],
   "e": "The ICJ has no compulsory jurisdiction; under Statute art. 36 it hears contentious cases only with consent, a corollary of sovereign equality. The recognized forms are a treaty clause, an optional clause declaration, a special agreement, informal consent (appearing and litigating), and a transferred PCIJ clause. Every UN member is automatically a party to the Statute, but that alone is not consent; it binds the state only to the Court's power to decide its own jurisdiction (art. 36(6)) and to order binding provisional measures (art. 41).",
   "unit": 3
  },
  {
   "q": "The World Health Organization (WHO) asks the ICJ whether the use of nuclear weapons is lawful. How should the Court respond?",
   "o": [
    "Answer, because the request presents a legal question.",
    "Refuse, because the question is political.",
    "Answer only if the Security Council consents.",
    "Refuse for lack of jurisdiction, because the question is not within the scope of the WHO's activities."
   ],
   "a": 3,
   "why": [
    "Being a legal question is necessary but not enough. The first step is authorization: whether this body may ask this question.",
    "Political aspects do not deprive a question of its legal character, and they go only to propriety, never to power.",
    "No SC consent requirement exists for advisory opinions. Authorization comes from the Charter and the requesting body's own treaty.",
    "Correct. Agencies authorized under Charter art. 96(2) may ask only about questions within their own activities. The Court refused the WHO request on that ground."
   ],
   "e": "Advisory jurisdiction runs a two-part inquiry: (1) is there treaty authorization for this body to ask this question (power), and (2) is it proper to answer (discretion). Under Charter art. 96(2), specialized agencies may request opinions only on questions within the scope of their activities. The Court held the legality of nuclear weapons was outside the WHO's scope and refused for lack of jurisdiction, then answered essentially the same question when the GA asked.",
   "unit": 3
  },
  {
   "q": "In the Nuclear Weapons Advisory Opinion, how did the Court treat the right to life under ICCPR (International Covenant on Civil and Political Rights) art. 6 during armed conflict?",
   "o": [
    "The right to life is suspended entirely in wartime.",
    "It continues to apply, but whether a death is an 'arbitrary' deprivation of life is judged by the law of armed conflict as lex specialis.",
    "It displaces the law of armed conflict, so any killing in war violates art. 6.",
    "It protects only civilians, not combatants."
   ],
   "a": 1,
   "why": [
    "The Court said the right does not stop in wartime and is non-derogable.",
    "Correct. Human rights law still applies, and the more specific law of armed conflict gives content to its open term 'arbitrary.'",
    "The relationship runs the other way: the law of armed conflict is the more specific body of law that governs when the facts call for it.",
    "The sources do not limit art. 6 to civilians. The Court's point concerned how 'arbitrary' is measured, not who is covered."
   ],
   "e": "The Court held that ICCPR art. 6 does not cease in wartime and is non-derogable. Whether a particular loss of life in hostilities is an 'arbitrary' deprivation is decided by the lex specialis, the law of armed conflict, which is designed for the conduct of hostilities. The Day 3 notes identify this lex specialis move as a recurring technique: the general body of law applies, and the specific one fills its open terms.",
   "unit": 3
  },
  {
   "q": "State A has filed an optional clause declaration under ICJ Statute art. 36(2). State B has not, and no treaty clause or special agreement exists. A files suit against B, and B refuses to appear or take part. Does the Court have jurisdiction?",
   "o": [
    "Yes, because A's declaration accepts compulsory jurisdiction over any state.",
    "Yes, because B is a party to the ICJ Statute as a UN member.",
    "No, because the optional clause requires both states to have accepted, and B has not consented by any other route.",
    "No, because only the Security Council can refer cases to the ICJ."
   ],
   "a": 2,
   "why": [
    "An optional clause declaration operates only against another state that has also filed one. B has not.",
    "Being a party to the Statute is not consent to jurisdiction. Further consent is required.",
    "Correct. Jurisdiction under art. 36(2) exists only between declarants, and B has given no other consent, formal or informal.",
    "States bring contentious cases themselves. In Corfu Channel, judges rejected the idea that even an SC recommendation to refer a dispute was binding."
   ],
   "e": "Under the optional clause, a state accepts automatic jurisdiction only when the case is brought by another state that has also filed a declaration; both must have accepted. B has no declaration, no treaty clause, and no special agreement. Informal consent arises from using the Court, such as appearing and litigating the case, and B has refused to take part. Had B appeared and litigated, that could have supplied consent.",
   "unit": 3
  },
  {
   "q": "While B's jurisdictional objection is pending, the ICJ orders provisional measures against B. B argues it is not bound until the Court rules that it has jurisdiction. Is B right?",
   "o": [
    "No. Every party to the Statute is bound by the Court's art. 41 power, provisional measures are binding (LaGrand), and the Court orders them without first deciding jurisdiction unless consent is plainly absent.",
    "Yes. Provisional measures are recommendations until jurisdiction is established.",
    "Yes. Provisional measures bind only states that filed optional clause declarations.",
    "No, but only because the Security Council must enforce every ICJ order."
   ],
   "a": 0,
   "why": [
    "Correct. Art. 41 binds all Statute parties, and LaGrand held provisional measures binding.",
    "LaGrand held provisional measures are binding. They do not wait on a final jurisdictional ruling.",
    "The art. 41 power binds every party to the Statute, regardless of the basis of consent.",
    "The binding force comes from art. 41 and LaGrand, not from SC enforcement."
   ],
   "e": "Joining the Statute is not consent to jurisdiction, but every party is bound by two powers: the Court's power to decide its own jurisdiction (art. 36(6)) and its power to indicate provisional measures to preserve the parties' rights (art. 41). Unless it is apparent there is no consent, the Court orders provisional measures without deciding jurisdiction on the merits, and LaGrand held those measures binding.",
   "unit": 3
  },
  {
   "q": "Which statement best describes how the ICJ treats its earlier decisions?",
   "o": [
    "It follows strict stare decisis, so earlier holdings bind later cases.",
    "It ignores earlier decisions because art. 59 makes them irrelevant.",
    "It regularly overrules earlier decisions expressly when it disagrees with them.",
    "It has no stare decisis but strives for consistency, distinguishes instead of overruling, and treats its procedural rulings as precedential."
   ],
   "a": 3,
   "why": [
    "Art. 59 was drafted to rule out binding precedent. The Court does not observe stare decisis.",
    "The Court strives for consistency to respect reliance interests and treats decisions as 'precedential-ish.'",
    "The Court distinguishes earlier decisions and, when it departs from them, tends to do so tacitly.",
    "Correct. This matches the sources: no formal precedent, consistency for reliance interests, distinguishing, and precedential practice on procedure and evidence."
   ],
   "e": "Art. 38(1)(d) makes judicial decisions subsidiary means, and art. 59 limits a judgment's binding force to the parties and the case, so the Court has no stare decisis. It still strives for consistency, mainly to respect states' reliance interests, distinguishes prior decisions instead of overruling them, and does not expect to reverse a jurisprudence constante. On court procedure and evidence, its practice is precedential.",
   "unit": 3
  },
  {
   "q": "You are given an excerpt of an ICJ opinion with several paragraphs of argument and counterargument. Where will you most likely find the Court's holding on that issue?",
   "o": [
    "In the first paragraph of the section, where the applicant's position is stated.",
    "In the sentence after the argument and counterargument that begins 'The Court notes / observes / finds.'",
    "In the separate opinions appended to the judgment.",
    "In the life-cycle summary listing the memorial and counter-memorial dates."
   ],
   "a": 1,
   "why": [
    "The opening of a section usually states one side's argument, not the Court's conclusion.",
    "Correct. The professor's method: nearly every section gives an argument, then the counterargument, then the Court's sentence stating its view.",
    "Separate opinions are individual judges' writings; they do not state the holding of the Court.",
    "The procedural history shows the filing schedule. It does not state the holding."
   ],
   "e": "The professor's bottom line is 'If the ICJ can IRAC, so can you.' An ICJ opinion runs in a predictable order (question and posture, propriety if advisory, facts, applicable law, application, summary of holdings). Within each section, the Court gives one side's argument, then the counterargument, then a sentence beginning 'The Court notes / observes / finds.' That sentence is the holding.",
   "unit": 3
  },
  {
   "q": "A state argues that the General Assembly's request for an advisory opinion is political, so the Court lacks jurisdiction. How does the Court treat this argument?",
   "o": [
    "Political aspects defeat jurisdiction, so the Court must decline.",
    "Political aspects are irrelevant to jurisdiction; they go only to propriety, and only 'compelling reasons' justify declining.",
    "The Court may answer only if every state concerned consents, as in Eastern Carelia.",
    "The Court defers to the Security Council on whether a question is political."
   ],
   "a": 1,
   "why": [
    "The Court has held that political aspects do not deprive a question of its legal character.",
    "Correct. A question framed in terms of law and raising problems of IL is a legal question, and the political issue is one of discretion, not power.",
    "Eastern Carelia involved an interstate dispute where the objecting state was not bound by the Covenant. Later opinions distinguished it for requests within the requesting organ's functions.",
    "The Court decides this itself. No SC deferral rule exists in the sources."
   ],
   "e": "A question's political aspects do not deprive it of its character as a legal question (Kosovo). The Court asks whether the question is framed in terms of law and raises problems of IL (Western Sahara). Political motives and implications are irrelevant to jurisdiction and go only to propriety, where only 'compelling reasons' justify refusal; the present Court has never refused on discretionary grounds.",
   "unit": 3
  },
  {
   "q": "What did the ICJ hold in paragraph 2 E of the Nuclear Weapons Advisory Opinion?",
   "o": [
    "The threat or use of nuclear weapons is unlawful in all circumstances.",
    "The threat or use of nuclear weapons is lawful whenever used in self-defense under art. 51.",
    "Threat or use would generally be contrary to the law of armed conflict, but the Court could not conclude whether it would be lawful in an extreme circumstance of self-defense in which a state's survival is at stake.",
    "The Court declined to answer because the question was political."
   ],
   "a": 2,
   "why": [
    "The Court did not find a comprehensive prohibition in treaty or custom, and it could not decide the extreme self-defense case.",
    "A lawful self-defense use must also satisfy the law of armed conflict. The Court found use would generally violate that law.",
    "Correct. This is the non liquet ('it is not clear'), adopted by the President's casting vote.",
    "The Court rejected the political-question objection and answered, though it left part of the question undecided."
   ],
   "e": "Paragraph 2 E holds that the threat or use of nuclear weapons would generally be contrary to the rules of international law applicable in armed conflict, especially humanitarian law. Given the current state of IL and the facts available, the Court could not conclude definitively whether threat or use would be lawful or unlawful in an extreme circumstance of self-defense in which a state's very survival is at stake. Judge Schwebel attacked this non liquet, arguing the Court should have declined to answer instead.",
   "unit": 3
  },
  {
   "q": "A judge agrees with the Court's outcome but for a different legal reason. What type of writing does that judge file?",
   "o": [
    "A dissenting opinion",
    "A declaration",
    "A separate opinion",
    "An advisory opinion"
   ],
   "a": 2,
   "why": [
    "A dissent disagrees with the decision, in whole or in part. This judge agrees with the outcome.",
    "A declaration is a more informal statement of a judge's position that can concur or dissent. The document for agreeing on different reasoning is the separate opinion.",
    "Correct. A separate opinion agrees with the outcome for a different legal reason, like a concurrence.",
    "An advisory opinion is the Court's own answer to a request from an authorized body. It is not an individual judge's writing."
   ],
   "e": "ICJ decisions come with four kinds of documents. The merits decision or advisory opinion contains the Court's holding. A separate opinion agrees with the outcome for a different legal reason. A declaration is a more informal statement that can concur or dissent, and a dissenting opinion disagrees, possibly only as to part of the decision.",
   "unit": 3
  },
  {
   "q": "State A signed, but has not ratified, a treaty that requires ratification. Before deciding whether to ratify, it takes an act that would defeat the treaty's core purpose. What is the best argument against A?",
   "o": [
    "Pacta sunt servanda (VCLT art. 26).",
    "VCLT art. 18: a signatory must refrain from acts that would defeat the treaty's object and purpose.",
    "Material breach under art. 60.",
    "Art. 27: internal law is no excuse for non-performance."
   ],
   "a": 1,
   "why": [
    "Art. 26 binds parties to a treaty in force. Signature subject to ratification does not make A a party.",
    "Correct. Signature does not establish consent to be bound, but art. 18 creates an interim good-faith obligation not to defeat the object and purpose.",
    "Material breach is a ground for an injured party to terminate or suspend a treaty in force. It is not an argument against a signatory before ratification.",
    "Art. 27 applies to performance of a treaty binding the state. A is not yet bound to perform."
   ],
   "e": "When a treaty requires ratification, signature does not establish consent to be bound and creates no obligation to ratify. It does qualify the state to ratify, and VCLT art. 18 imposes an interim good-faith obligation to refrain from acts that would defeat the treaty's object and purpose. The Day 4 notes flag this as the one way signature binds a state before ratification.",
   "unit": 4
  },
  {
   "q": "Under VCLT art. 32, when may an interpreter use the travaux préparatoires (preparatory work)?",
   "o": [
    "Always, as one of the primary tools alongside the text.",
    "Only with the consent of all the parties to the treaty.",
    "To confirm an art. 31 meaning, or to determine meaning when art. 31 leaves it ambiguous or obscure or leads to a manifestly absurd or unreasonable result.",
    "Only for bilateral treaties, because multilateral records are unreliable."
   ],
   "a": 2,
   "why": [
    "The primary tools are in art. 31. Preparatory work is a supplementary means that sits behind a gate.",
    "No consent requirement exists. Art. 32 sets triggers based on the result of the art. 31 analysis.",
    "Correct. These are the art. 32 gates, plus its use to confirm a meaning already reached.",
    "Art. 32 applies to all treaties. The unreliability of multilateral records explains why preparatory work is supplementary, not why it is excluded."
   ],
   "e": "Art. 31 supplies the primary tools: ordinary meaning, context, and object and purpose, applied in good faith. Art. 32 lets you use supplementary means, mainly the preparatory work and the circumstances of conclusion, to confirm an art. 31 meaning or to determine meaning where art. 31 leaves it ambiguous or obscure or produces a manifestly absurd or unreasonable result. The ICJ generally refuses to use preparatory work when the text is clear.",
   "unit": 4
  },
  {
   "q": "A treaty is shown to have been procured by the threat of force against the state in violation of the UN Charter. What is the treaty's status?",
   "o": [
    "Void.",
    "Voidable, if the coerced state invokes the defect.",
    "Valid until terminated for material breach under art. 60.",
    "Valid but unenforceable before UN organs."
   ],
   "a": 0,
   "why": [
    "Correct. Coercion of a state (art. 52) makes the treaty void without more, and the whole treaty falls; no clauses can be severed.",
    "Voidable grounds are internal-law incompetence, excess of authority, error, fraud, and probably corruption. Coercion of a state is void without more.",
    "Material breach concerns breach of a valid treaty. Coercion goes to validity from the start.",
    "That describes an unregistered treaty under Charter art. 102. Coercion produces voidness, not a registration problem."
   ],
   "e": "VCLT art. 52 makes a treaty procured by the threat or use of force in violation of the Charter void. Void grounds (coercion of a state, conflict with a peremptory norm, and coercion of a representative, which is without legal effect) operate without being invoked. Voidable grounds (internal law, excess of authority, error, fraud, probably corruption) require the affected state to invoke them. Under art. 44, separability is not available for coercion.",
   "unit": 4
  },
  {
   "q": "State B's dam, essential to a water-sharing treaty, was destroyed as a result of B's own violation of the treaty. B invokes supervening impossibility. What result?",
   "o": [
    "The treaty terminates automatically because the dam is gone.",
    "The treaty is suspended but not terminated.",
    "The plea converts into a fundamental change of circumstances claim under art. 62.",
    "B cannot invoke impossibility, because the impossibility resulted from its own breach."
   ],
   "a": 3,
   "why": [
    "Supervening impossibility is not automatic. A party must invoke it, and here the invoking party caused the impossibility.",
    "The issue is whether B can invoke impossibility at all. Its own breach bars the plea.",
    "Art. 62 is a separate ground with its own requirements. Nothing converts one plea into the other.",
    "Correct. Art. 61 is barred where the impossibility results from the invoking party's own breach."
   ],
   "e": "Supervening impossibility (VCLT art. 61) applies on the permanent disappearance or destruction of an object indispensable for executing the treaty, like a dam a water-sharing treaty depends on. It is not automatic: a party must invoke it. And it is barred where the impossibility results from the invoking party's own breach, so B cannot rely on it. The same logic appears in Gabčíkovo-Nagymaros, where Hungary could not terminate for a breach it provoked.",
   "unit": 4
  },
  {
   "q": "Two foreign ministries sign a document titled 'Memorandum of Understanding.' Its text says the parties 'shall' take specified steps and 'agree to be legally bound' under international law. Is it a treaty?",
   "o": [
    "No, because an MOU (memorandum of understanding) is by definition a non-binding instrument.",
    "No, because only instruments titled 'treaty' or 'convention' qualify under VCLT art. 2(1)(a).",
    "Yes, because it is governed by international law and its language shows an intention to create legally binding obligations.",
    "Yes, but only after it is registered with the UN Secretariat."
   ],
   "a": 2,
   "why": [
    "The name is not conclusive. MOUs usually record non-binding understandings, but the parties' intention as shown in the language decides.",
    "Art. 2(1)(a) applies 'whatever its particular designation.' There are no requirements of form.",
    "Correct. The two screens are governed by international law and intention to be bound. Both are met here, and the title does not matter.",
    "Registration under Charter art. 102 affects whether the treaty may be invoked before UN organs. It does not affect validity or treaty status."
   ],
   "e": "VCLT art. 2(1)(a) defines a treaty as an international agreement between states, in writing, governed by international law, 'whatever its particular designation.' The real tests are two screens: governed by international law, and intention to create legally binding obligations. An MOU is the classic non-treaty, but its name is not conclusive; an MOU written in binding language can be a treaty.",
   "unit": 4
  },
  {
   "q": "A treaty between States A and B states that State C shall pay a share of a canal's maintenance costs. C's foreign minister says orally that C agrees, and C pays for a year. Is C bound by the treaty obligation?",
   "o": [
    "Yes, because C's conduct shows it accepted the obligation.",
    "Yes, because a third state's assent is presumed unless it objects.",
    "No, because treaties can never affect third states under any circumstances.",
    "No, because art. 35 requires that the third state expressly accept the obligation in writing, and C accepted only orally and by conduct."
   ],
   "a": 3,
   "why": [
    "Under art. 35, conduct is not enough. Acceptance of an obligation must be express and in writing.",
    "Presumed assent applies to rights under art. 36, not to obligations.",
    "Too broad. Art. 35 allows an obligation for a third state if the parties intend it and the third state accepts it expressly in writing.",
    "Correct. Both art. 35 conditions must be met: the parties' intent and express written acceptance."
   ],
   "e": "Pacta tertiis (art. 34): a treaty creates neither obligations nor rights for a third state without its consent. For obligations, art. 35 requires both that the parties intend the provision to establish the obligation and that the third state expressly accept it in writing. Rights are looser: under art. 36, assent is presumed unless the third state indicates otherwise. C's oral statement and payments do not meet the written-acceptance requirement.",
   "unit": 4
  },
  {
   "q": "A human rights treaty has no reservations clause. State D ratifies with a reservation that would exclude the treaty's core obligation for D. Is the reservation permissible?",
   "o": [
    "Yes, because the treaty is silent, so any reservation is allowed.",
    "No, because a reservation incompatible with the treaty's object and purpose is barred under art. 19(c).",
    "Yes, as long as at least one party accepts it.",
    "No, because reservations are prohibited for all multilateral treaties."
   ],
   "a": 1,
   "why": [
    "Silence sends you to the fallback test, which still bars reservations incompatible with the object and purpose.",
    "Correct. When a treaty says nothing about reservations, the object-and-purpose compatibility test from Reservations to the Genocide Convention governs.",
    "Acceptance by another party is not one of the art. 19 bars. Art. 19(c) asks whether the reservation is compatible with the treaty's object and purpose, and a reservation excluding the core obligation fails that test.",
    "Reservations are generally allowed. The bars are the treaty's own prohibition, its list of permitted reservations, and incompatibility with object and purpose."
   ],
   "e": "A reservation is a unilateral statement at signature, ratification, acceptance, approval, or accession that purports to exclude or modify a provision's legal effect for the reserving state. Art. 19 bars a reservation that the treaty prohibits, that is not among the reservations the treaty permits, or that is incompatible with the object and purpose. The compatibility test comes from Reservations to the Genocide Convention (ICJ 1951). A reservation excluding the core obligation fails it.",
   "unit": 4
  },
  {
   "q": "State E violates a short procedural provision of a treaty that is essential to accomplishing the treaty's purpose. The violation was small in scale. Can State F treat this as a material breach?",
   "o": [
    "Yes, because material breach includes the violation of a provision essential to the object or purpose, and the importance of the provision matters, not the size of the breach.",
    "No, because only a large-scale violation can be material.",
    "No, because only an express repudiation of the treaty counts as material breach.",
    "Yes, but only if E's breach was caused by F's own prior breach."
   ],
   "a": 0,
   "why": [
    "Correct. Art. 60(3)(b) focuses on the importance of the provision violated.",
    "The size of the breach is not the test. The provision's importance to the treaty's object and purpose is.",
    "Repudiation is one form under art. 60(3)(a). Violation of an essential provision under art. 60(3)(b) is the other.",
    "That reverses Gabčíkovo-Nagymaros: a party that provoked the breach cannot rely on it."
   ],
   "e": "VCLT art. 60 lets an injured party invoke a material breach to terminate or suspend a treaty. Art. 60(3) defines material breach as (a) a repudiation not sanctioned by the VCLT, or (b) the violation of a provision essential to the accomplishment of the treaty's object or purpose. The focus is on the importance of the provision, not the size of the breach. Provisions protecting the human person in humanitarian treaties are excluded (art. 60(5)).",
   "unit": 4
  },
  {
   "q": "State G suffers a material breach of a humanitarian treaty by State H. G wants to respond by suspending the treaty's provisions protecting H's detained nationals. May it?",
   "o": [
    "Yes, material breach allows suspension of any provision.",
    "Yes, but only after twelve months' notice.",
    "No, because provisions protecting the human person in treaties of a humanitarian character cannot be suspended in response to breach.",
    "No, because material breach can never justify suspension, only termination."
   ],
   "a": 2,
   "why": [
    "Art. 60(5) carves out provisions protecting the human person in treaties of a humanitarian character.",
    "The twelve-month notice rule belongs to withdrawal from treaties without a withdrawal clause under art. 56. It does not unlock humanitarian protections.",
    "Correct. Art. 60(5) excludes these provisions, so a state cannot answer a breach by dropping humanitarian protections.",
    "Art. 60 allows an injured party to terminate or suspend. The limit here is the humanitarian carve-out."
   ],
   "e": "An injured party may invoke a material breach to terminate or suspend a treaty under art. 60. Art. 60(5) excludes provisions relating to the protection of the human person in treaties of a humanitarian character. So G cannot retaliate by withdrawing protections from H's detained nationals, even though H materially breached the treaty.",
   "unit": 4
  },
  {
   "q": "After a change of government, State J invokes a fundamental change of circumstances (rebus sic stantibus) to escape a treaty fixing its border with State K. What result?",
   "o": [
    "J may withdraw if the change was unforeseen.",
    "J may suspend the treaty but not terminate it.",
    "J may withdraw because a change of government always counts as fundamental.",
    "J cannot invoke art. 62, because treaties establishing a boundary are excluded."
   ],
   "a": 3,
   "why": [
    "Unforeseen change is only one requirement, and boundary treaties are excluded from the doctrine entirely.",
    "The exclusion for boundary treaties bars the plea altogether, not only termination.",
    "No change automatically qualifies. In Gabčíkovo-Nagymaros, political change was rejected as a fundamental change.",
    "Correct. Art. 62 excludes boundary treaties to avoid an obvious source of threats to the peace."
   ],
   "e": "Art. 62 lets a party invoke a fundamental change only if the change was unforeseen and the circumstances at conclusion were an essential basis of the parties' consent. Boundary treaties are excluded, to avoid an obvious source of threats to the peace. The plea applies only in exceptional cases: Fisheries Jurisdiction rejected new fishing techniques, and Gabčíkovo-Nagymaros rejected political, economic, and environmental changes.",
   "unit": 4
  },
  {
   "q": "State L's parliament passes a statute that makes performing a treaty obligation impossible under L's domestic law. L tells its treaty partners it is excused. Is it?",
   "o": [
    "Yes, because a state's constitution and statutes control its international obligations.",
    "No, because under art. 27 a state may not invoke its internal law to justify failure to perform a treaty.",
    "Yes, if the statute was passed before the treaty entered into force.",
    "No, but only if the treaty was registered under Charter art. 102."
   ],
   "a": 1,
   "why": [
    "Art. 27 provides the opposite on the international plane.",
    "Correct. A conflicting domestic law is no excuse for non-performance.",
    "Timing of the statute does not matter under art. 27. Internal law is not a justification either way.",
    "Registration affects invocation before UN organs, not whether internal law excuses non-performance."
   ],
   "e": "Pacta sunt servanda (art. 26) requires parties to perform treaties in force in good faith. Art. 27 adds that a state may not invoke its own internal law, such as its constitution or statutes, to justify failure to perform. L's new statute is no excuse on the international plane. Art. 46, which concerns a manifest violation of internal law on competence to conclude a treaty, is a separate and rarely successful invalidity ground.",
   "unit": 4
  },
  {
   "q": "An 1858 treaty grants navigation rights 'for the purposes of commerce.' A dispute arises over modern commercial tourism. How did the ICJ resolve this kind of issue in Navigational Rights?",
   "o": [
    "The term is frozen at its 1858 meaning under the principle of contemporaneity, so tourism is excluded.",
    "The term covers tourism, because parties using generic terms in a treaty of continuing duration are presumed to intend an evolving meaning.",
    "The term is ambiguous, so the Court must rely only on the travaux préparatoires.",
    "The term covers tourism only if both parties' legislatures approve."
   ],
   "a": 1,
   "why": [
    "Contemporaneity is the general rule, but the Court applied an evolutive exception for generic terms in a treaty of continuing duration.",
    "Correct. This is the evolutive exception from Navigational Rights.",
    "Art. 32 means are supplementary. The Court resolved the meaning through the evolutive reading of the text.",
    "Domestic approval plays no role in interpretation under art. 31."
   ],
   "e": "Ordinary meaning is generally the meaning at the time of negotiation (contemporaneity), which matters because many treaties are old. In Navigational Rights, the ICJ held that where parties use generic terms, knowing their meaning is likely to evolve, in a treaty of continuing duration, they are presumed to have intended an evolving meaning. 'For the purposes of commerce' in the 1858 treaty therefore covered modern commercial tourism. Brownlie's notes the tension with contemporaneity.",
   "unit": 4
  },
  {
   "q": "In the Class 5 deep seabed exercise, UNCLOS Annex III art. 5 required mandatory technology transfer, while the 1994 Implementing Agreement said Annex III art. 5 'shall not apply.' Which text controls, and why?",
   "o": [
    "Annex III art. 5, because the original treaty always prevails over later agreements.",
    "Neither, because conflicting provisions cancel each other out.",
    "The Implementing Agreement, because art. 2(1) makes it and Part XI a single instrument and says the Agreement prevails in case of inconsistency.",
    "Annex III art. 5, because a modification inter se is never allowed under UNCLOS art. 311(3)."
   ],
   "a": 2,
   "why": [
    "The Implementing Agreement contains a priority clause, and the later-in-time rule and context point the other way.",
    "Conflicting texts are resolved through context, including the instruments' own relationship and priority clauses.",
    "Correct. The priority clause and the treaties' modification provisions point to the Implementing Agreement controlling, leaving a duty to cooperate in promoting transfer.",
    "Art. 311(3) limits inter se modifications that undermine effective execution of the object and purpose. It does not displace a priority clause adopted to rewrite Part XI."
   ],
   "e": "When on-point texts contradict, context resolves the conflict: look at related agreements and the instruments' own amendment and priority clauses. Implementing Agreement art. 2(1) says the Agreement and Part XI are interpreted and applied together as a single instrument and the Agreement prevails over any inconsistency. So Annex III art. 5's mandatory transfer no longer applies; what remains is UNCLOS art. 144's duty to cooperate in promoting transfer plus the Agreement's open-market and cooperation scheme.",
   "unit": 4
  },
  {
   "q": "A treaty contains no clause on termination or withdrawal. State M wants to denounce it. Under VCLT art. 56, what must M show?",
   "o": [
    "Nothing; any state may withdraw from any treaty at will.",
    "That the parties intended to allow withdrawal or that a right of withdrawal is implied by the treaty's nature, and M must give at least twelve months' notice.",
    "That another party committed a material breach.",
    "That the treaty is a treaty of peace."
   ],
   "a": 1,
   "why": [
    "The baseline is that states cannot unilaterally withdraw. Art. 56 presumes against withdrawal from a silent treaty.",
    "Correct. These are the two art. 56 routes plus the notice requirement.",
    "Material breach is a separate termination ground under art. 60, not the test for denouncing a silent treaty.",
    "Treaties of peace are the clearest case where unilateral denunciation is not available."
   ],
   "e": "States cannot unilaterally withdraw from a treaty, though they can withdraw under the treaty's own terms or with all parties' consent (art. 54). For a treaty silent on termination, art. 56 presumes against withdrawal unless the parties intended to allow it or a right of withdrawal is implied by the nature of the treaty, and at least twelve months' notice is required. Treaties of peace are not open to unilateral denunciation.",
   "unit": 4
  },
  {
   "q": "Which of the following is NOT a requirement for a state to qualify as a persistent objector?",
   "o": [
    "The objection was made while the rule was forming.",
    "The objection was formally registered with the UN Secretariat.",
    "The objection was made known to other states.",
    "The objection was maintained persistently."
   ],
   "a": 1,
   "why": [
    "Timeliness is required: a state cannot object after the rule is established.",
    "Correct. No registration requirement exists. Registration under Charter art. 102 concerns treaties.",
    "This is required: other states must know of the objection, so a private or unannounced objection does not count.",
    "This is required: once the state stops objecting, it loses the exemption."
   ],
   "e": "A persistent objector is not bound by a CIL rule for as long as it keeps objecting (ILC Concl. 15). All four requirements must be met: the objection must come during formation, be clearly articulated, be made known to other states, and be maintained persistently. The case is stronger when other states acquiesce. The doctrine does not work against peremptory norms.",
   "unit": 5
  },
  {
   "q": "In North Sea Continental Shelf, why had the equidistance rule in art. 6 of the 1958 Convention not passed into CIL after the Convention entered into force?",
   "o": [
    "Germany had persistently objected to it during its formation.",
    "It conflicted with a peremptory norm.",
    "Too few states had ratified, ratifications were not widespread and representative, and too little time had passed.",
    "The ICJ lacked jurisdiction to decide the question."
   ],
   "a": 2,
   "why": [
    "The case did not turn on persistent objection. Germany was not a party, and the Court found no custom had formed.",
    "No peremptory norm was involved. The Court tested whether a customary rule existed.",
    "Correct. The Court found the post-Convention practice inadequate on each count.",
    "The Court decided the merits of the custom question, rejecting every route from treaty to custom."
   ],
   "e": "The Court tested each route by which art. 6 might bind Germany as custom. On passage into custom after entry into force, it found too few ratifications, not widespread and representative, and too little time, especially measured to when litigation began. No minimum duration is required, but practice must be extensive and virtually uniform, including specially affected states, and show recognition of a legal obligation. Separate reasons defeated codification, norm-creation, and independent practice.",
   "unit": 5
  },
  {
   "q": "For decades, states have fired ceremonial salutes when foreign warships visit. No state has ever said it does so because the law requires it. Is the salute a rule of CIL?",
   "o": [
    "No. It is a usage: the practice element exists, but there is no opinio juris.",
    "Yes. Long, uniform practice is enough to create custom.",
    "Yes, because comity automatically becomes custom after a fixed period.",
    "No, because ceremonial matters can only be governed by treaty."
   ],
   "a": 0,
   "why": [
    "Correct. A usage is something states do because they want to, without a sense of legal obligation.",
    "Practice alone is not enough. Repeated conduct does not prove opinio juris because courtesy and tradition also produce habitual conduct.",
    "Comity can ripen into custom only once states come to accept it as legally required. No fixed period triggers this.",
    "Nothing in the sources limits ceremonial matters to treaties. The problem is the missing opinio juris."
   ],
   "e": "CIL requires both state practice and opinio juris, each assessed separately (ILC Concls. 2–3). A usage, such as a ceremonial salute or a diplomatic parking courtesy, is something states do because they want to, with no sense of legal obligation. It has the practice element but lacks opinio juris, so it is not custom. Consistent comity can ripen into custom only once states accept it as legally required.",
   "unit": 5
  },
  {
   "q": "A customary rule has been firmly established for twenty years. State N, which never objected before, now announces that it rejects the rule. Is N bound?",
   "o": [
    "No, because a clear objection exempts any state from a customary rule.",
    "No, if other states acquiesce in N's objection.",
    "Yes, because the persistent objector exemption requires objection during formation, before the rule became established.",
    "Yes, but only if the rule is also a peremptory norm."
   ],
   "a": 2,
   "why": [
    "An objection exempts a state only if it was made during the rule's formation.",
    "Acquiescence strengthens a timely objection. It cannot revive an objection made after the rule is established.",
    "Correct. A state cannot object after the rule is already established.",
    "N is bound by an ordinary customary rule too. The peremptory norm point is a separate limit on the doctrine."
   ],
   "e": "The persistent objector doctrine protects state consent by letting a state avoid a rule it never accepted. It requires an objection made during the rule's formation, clearly articulated, made known to other states, and maintained over time. N's objection came after the rule was established, so it is untimely and N is bound.",
   "unit": 5
  },
  {
   "q": "Three neighboring states have for generations followed a rule on shared pearl fisheries, and each treats it as legally required. Distant states have no such practice. What is the legal status of the rule?",
   "o": [
    "It cannot be custom, because the practice is not followed by states worldwide.",
    "It is particular (local) CIL binding those three states, because there is a general practice accepted as law among them.",
    "It binds all states as general custom, because the three states accept it as law.",
    "It is an example of persistent objection by the distant states."
   ],
   "a": 1,
   "why": [
    "Particular custom measures 'general practice' within the relevant group, not the whole world.",
    "Correct. ILC Concl. 16 recognizes custom binding only a subset of states, usually in a shared geography, like the Gulf of Mannar pearl fisheries.",
    "Acceptance by a small group creates a rule only among that group. It does not bind states that do not participate.",
    "Persistent objection is one state opting out of a general rule. Particular custom is a group opting into a rule that does not bind everyone."
   ],
   "e": "Particular CIL is a customary rule binding only a subset of states, usually in a shared geography (ILC Concl. 16). Both elements still apply but are measured within the group: there must be a general practice accepted as law among those states themselves. The slides' example is the pearl fisheries rules binding the states around the Gulf of Mannar, now India and Sri Lanka.",
   "unit": 5
  },
  {
   "q": "Forty states from every region, including those specially affected, have consistently followed a practice for three years, and many have issued official statements that they act from legal obligation. A state argues three years is too short. Who is right?",
   "o": [
    "The objecting state, because custom requires at least a decade of practice.",
    "The objecting state, because the practice must be followed by every state.",
    "Neither, because only treaties can create rules in under ten years.",
    "The other states: no particular duration is required if the practice is sufficiently widespread, representative, and consistent and accompanied by opinio juris."
   ],
   "a": 3,
   "why": [
    "No fixed duration is required. A longer practice helps, but it is not a minimum.",
    "Practice must be widespread, representative, and consistent, not universal.",
    "No source sets a ten-year rule for custom or limits fast law-making to treaties.",
    "Correct. ILC Concl. 8 sets the widespread, representative, consistent standard, with no fixed duration."
   ],
   "e": "State practice must be the practice of states, substantially consistent, and, under ILC Concl. 8, sufficiently widespread, representative (including specially affected states), and consistent. No particular duration is required, though a longer practice strengthens the case. Opinio juris is assessed separately; official statements of legal obligation are written evidence of it. On these facts both elements can be met despite the short time.",
   "unit": 5
  },
  {
   "q": "State P never said anything about an emerging customary rule. Can its silence count as acceptance of the rule?",
   "o": [
    "Yes, silence always counts as acceptance.",
    "No, silence can never be evidence of opinio juris.",
    "Only if P was in a position to react and the circumstances called for a reaction.",
    "Only if a scholar or NGO documented P's silence."
   ],
   "a": 2,
   "why": [
    "Silence is ambiguous: it may show acceptance or just lack of interest.",
    "Silence can count in the right circumstances, so an absolute bar is wrong.",
    "Correct. These are the two conditions for treating a failure to react over time as acceptance.",
    "Only states' views count as opinio juris; documentation by other actors does not supply the conditions."
   ],
   "e": "A state's failure to react over time can show acceptance only if (1) the state was in a position to react and (2) the circumstances called for a reaction. Brownlie's notes silence is otherwise ambiguous: it may mean acceptance or only lack of interest. Opinio juris generally requires written evidence of the state's own legal view.",
   "unit": 5
  },
  {
   "q": "State Q is not a party to a treaty, but it is bound by a customary rule with identical content. Q wants to use the treaty's dispute-settlement mechanism against a treaty party. May it?",
   "o": [
    "Yes, because identical treaty and custom obligations merge into one rule.",
    "No, because a non-party bound by the parallel custom does not gain the treaty's rights, such as its dispute-settlement mechanism.",
    "Yes, because the customary rule codified the treaty.",
    "No, because custom can never overlap with a treaty."
   ],
   "a": 1,
   "why": [
    "Treaty and custom keep separate identities even when their content matches.",
    "Correct. The two obligations are independently binding, and treaty benefits stay with treaty parties.",
    "Codification runs from custom into a treaty. Either way, the non-party does not acquire treaty rights.",
    "Custom and treaties often overlap: a treaty can codify, crystallize, or generate custom."
   ],
   "e": "Treaties and custom keep separate identities even when their content matches: each is independently binding and each helps interpret the other. A non-party bound by the parallel custom does not gain the treaty's rights, such as its dispute-settlement mechanism (Brownlie's). The Climate AO adds that non-parties remain bound by customary duties independently of treaty membership.",
   "unit": 5
  },
  {
   "q": "State C shows that its rule against conduct X is followed by many states out of a sense of legal obligation. What else must it prove to show the rule is peremptory?",
   "o": [
    "Nothing more; proving custom proves peremptory status.",
    "Unanimous acceptance by every state of its non-derogable character.",
    "Separate evidence that a very large and representative majority of states accepts the rule as non-derogable.",
    "An ICJ judgment declaring the rule peremptory."
   ],
   "a": 2,
   "why": [
    "ILC Concl. 6 says acceptance of non-derogability is separate from acceptance as general law. Proving custom proves only the first criterion.",
    "Concl. 7 requires a very large and representative majority, not all states.",
    "Correct. This combines Concl. 6 (separate acceptance of non-derogability) and Concl. 7 (very large and representative majority).",
    "ICJ decisions are subsidiary means under Concl. 9. They help find acceptance but are not required and are not acceptance themselves."
   ],
   "e": "Concl. 4 requires two things: the norm is one of general international law (usually CIL), and the international community of states accepts it as non-derogable and changeable only by a later peremptory norm. Concl. 6 says the second criterion needs separate evidence; proving custom is not enough. Concl. 7 says acceptance by a very large and representative majority of states suffices.",
   "unit": 6
  },
  {
   "q": "Which of the following appears on the ILC's non-exhaustive list of peremptory norms?",
   "o": [
    "Diplomatic immunity",
    "Freedom of the high seas",
    "Pacta sunt servanda",
    "Prohibition of torture"
   ],
   "a": 3,
   "why": [
    "Not on the ILC list. Peremptory norms do not even displace immunity on their own (Arrest Warrant).",
    "Not on the list. The sources treat it as a general principle of international law that states can derogate from, such as by a stop-and-search agreement.",
    "Not on the ILC list. It is a grundnorm of treaty law rooted in natural law, but the ILC did not list it as a peremptory norm.",
    "Correct. Torture is one of the eight norms on the ILC's list."
   ],
   "e": "The ILC Annex lists, non-exhaustively (Concl. 23): the prohibitions of aggression, genocide, crimes against humanity, racial discrimination and apartheid, slavery, and torture; the basic rules of international humanitarian law; and the right of self-determination. The outline says to list these on the exam when defining a peremptory norm.",
   "unit": 6
  },
  {
   "q": "Two states conclude a treaty that, at the time of conclusion, conflicts with the prohibition of genocide. One article of the treaty, on customs duties, is unrelated. What happens?",
   "o": [
    "The whole treaty is void, with no severance of the unrelated article.",
    "Only the genocide-related provisions are void; the customs article survives.",
    "The treaty is voidable if one party invokes the conflict.",
    "The treaty stays valid between the parties because they consented."
   ],
   "a": 0,
   "why": [
    "Correct. Under VCLT art. 53 and Concls. 10(1) and 11(1), a treaty conflicting with a peremptory norm at conclusion is void in whole.",
    "Severance is available only under art. 64 for a new norm. A conflict at conclusion voids the whole treaty.",
    "Conflict with a peremptory norm makes a treaty void without being invoked.",
    "Consent cannot derogate from a peremptory norm, which is why the treaty creates no obligation."
   ],
   "e": "VCLT art. 53 makes a treaty void if, when concluded, it conflicts with a peremptory norm. Under ILC Concls. 10(1) and 11(1), it is void in whole and no provisions can be separated out and saved. The parties must eliminate, as far as possible, the consequences of acts done in reliance on the conflicting provision (Concl. 12(1)). Compare art. 64, where a later norm terminates a treaty and severance is possible.",
   "unit": 6
  },
  {
   "q": "A new peremptory norm emerges that conflicts with one provision of an existing treaty. The provision is separable in application and was not an essential basis of consent, and performing the rest would not be unjust. What happens?",
   "o": [
    "The entire treaty is void from the start.",
    "Nothing, because peremptory norms cannot affect treaties concluded before they emerged.",
    "The conflicting provision becomes void and terminates, and the rest of the treaty can continue.",
    "The treaty becomes voidable at the option of either party."
   ],
   "a": 2,
   "why": [
    "Art. 64 has no retroactive effect, and severance is possible under Concl. 11(2).",
    "Art. 64 provides that an existing treaty conflicting with a new peremptory norm becomes void and terminates.",
    "Correct. Under art. 64 and Concl. 11(2), the conflicting provision can be separated when all three conditions are met.",
    "Conflict with a peremptory norm is a void ground, not a voidable one."
   ],
   "e": "Under VCLT art. 64 and Concl. 10(2), a treaty that conflicts with a newly emerged peremptory norm becomes void and terminates, releasing the parties from further performance. The conflicting provisions can be separated if (a) they are separable in application, (b) they were not an essential basis of consent, and (c) continued performance of the rest would not be unjust (Concl. 11(2)). Rights created before termination survive only if maintaining them does not conflict with the new norm.",
   "unit": 6
  },
  {
   "q": "State R has objected clearly and consistently, since the rule began forming, to the prohibition of slavery. Is R bound by it?",
   "o": [
    "No, because R meets every requirement for persistent objection.",
    "Yes, because the persistent objector rule does not apply to peremptory norms, which bind regardless of consent.",
    "No, if R files a reservation to the slavery treaty.",
    "Yes, but only if R voted for a GA resolution against slavery."
   ],
   "a": 1,
   "why": [
    "The persistent objector rule does not apply to peremptory norms, and the prohibition of slavery is on the ILC list.",
    "Correct. Concl. 14(3) excludes persistent objection for peremptory norms.",
    "Concl. 13: a reservation cannot affect the binding nature of a peremptory norm.",
    "R's vote is irrelevant. Peremptory norms bind all states regardless of consent."
   ],
   "e": "Custom requires consent, and persistent objection can make a customary rule inapplicable to the objecting state. A peremptory norm binds regardless of consent, so the persistent objector rule does not apply to it (Concl. 14(3)). The prohibition of slavery is on the ILC list. The 'super custom' view raises the question whether a state could 'super oppose' a peremptory norm, which conflicts with this rule.",
   "unit": 6
  },
  {
   "q": "State S commits acts of torture and claims they were justified by necessity during a national emergency. Can necessity preclude wrongfulness?",
   "o": [
    "Yes, if the emergency was grave and imminent.",
    "Yes, but only if the injured state consents.",
    "Only if S is a persistent objector to the torture prohibition.",
    "No. No circumstance precluding wrongfulness may be invoked for conduct breaching a peremptory norm."
   ],
   "a": 3,
   "why": [
    "Concl. 18 bars any circumstance precluding wrongfulness for breach of a peremptory norm, however grave the emergency.",
    "Neither consent nor acquiescence can derogate from a peremptory norm.",
    "The persistent objector rule does not apply to peremptory norms.",
    "Correct. Concl. 18 removes the usual state responsibility defenses, such as necessity or self-defense."
   ],
   "e": "Torture is on the ILC list of peremptory norms. Under ILC Concl. 18, no circumstance precluding wrongfulness (for example, necessity or self-defense) may be invoked for conduct that breaches a peremptory norm. The Wall opinion applied the same idea when it rejected Israel's self-defense and necessity arguments.",
   "unit": 6
  },
  {
   "q": "A state commits a serious (gross or systematic) breach of a peremptory norm. Under ILC Concl. 19 and ARSIWA (Articles on Responsibility of States for Internationally Wrongful Acts) art. 41, which duties fall on all other states?",
   "o": [
    "Cooperate to end the breach through lawful means, not recognize the resulting situation as lawful, and not aid or assist in maintaining it.",
    "Each state must individually use force to end the breach.",
    "Recognize the new situation once it becomes effective, to restore stability.",
    "Only the injured state has any duties or rights; other states must stay neutral."
   ],
   "a": 0,
   "why": [
    "Correct. These are the three third-state duties for a serious breach.",
    "The duty is to cooperate through lawful means. Crawford calls these residual obligations with no strenuous individual duty to act.",
    "The duty is the opposite: non-recognition of the situation as lawful.",
    "Peremptory norms create erga omnes obligations, so all states have a legal interest and specific duties after a serious breach."
   ],
   "e": "For a serious breach of a peremptory norm, every state must cooperate to bring it to an end through lawful means, must not recognize the resulting situation as lawful, and must not render aid or assistance in maintaining it (Concl. 19, mirroring ARSIWA art. 41). Crawford says the customary core is collective non-recognition, traced to the Stimson doctrine. Because the obligations are erga omnes, any state may invoke responsibility.",
   "unit": 6
  },
  {
   "q": "State T sues State U at the ICJ for genocide. U has never consented to the Court's jurisdiction by any route. T argues that because genocide is a peremptory norm, the Court has jurisdiction anyway. What result?",
   "o": [
    "The Court has jurisdiction, because peremptory norms bind regardless of consent.",
    "The Court has jurisdiction if the Security Council recommends it.",
    "The Court lacks jurisdiction, because a dispute about a peremptory norm cannot of itself provide a basis for jurisdiction.",
    "The Court lacks jurisdiction because genocide is not on the ILC list."
   ],
   "a": 2,
   "why": [
    "Peremptory norms bind regardless of consent, but jurisdiction is a separate question that still rests on consent.",
    "An SC recommendation is not compulsory (Corfu Channel), and it would not supply U's consent.",
    "Correct. Armed Activities (DRC v. Rwanda) held exactly this.",
    "Genocide is on the ILC list. The problem is the absence of consent."
   ],
   "e": "A peremptory norm does not create jurisdiction, which always rests on consent. In Armed Activities (DRC v. Rwanda), the ICJ said a dispute about a peremptory norm (genocide) 'cannot of itself provide a basis for the jurisdiction of the Court.' Similarly, Arrest Warrant found no CIL exception to an incumbent foreign minister's immunity for alleged war crimes or crimes against humanity.",
   "unit": 6
  },
  {
   "q": "An entity has a permanent population, a defined territory, and a weak but stable government, yet few states recognize it. Under the prevailing view, what is its status?",
   "o": [
    "It cannot be a state until other states recognize it.",
    "Membership in international organizations decides whether it is a state.",
    "It is a state only for treaty purposes.",
    "Statehood exists once the criteria are met, and recognition only confirms it (declaratory view)."
   ],
   "a": 3,
   "why": [
    "That is the constitutive view, which leaves unanswered what to do with acts before recognition. It is not the prevailing view.",
    "Statehood cannot necessarily be implied from IO membership, though UN admission is evidence of it.",
    "No source recognizes partial statehood for treaty purposes.",
    "Correct. The declaratory view prevails and is 'the one to know.' A government need not be particularly effective."
   ],
   "e": "Under the declaratory view, statehood arises by operation of law once the criteria are met, and recognition affirms it, so acts before recognition are state acts. The constitutive view says there is no statehood until recognition. The Montevideo government criterion requires only some stable political community, not an effective government. Recognition by other states remains the best practical metric of statehood.",
   "unit": 7
  },
  {
   "q": "Under the course test, which approach determines whether an international organization has international legal personality?",
   "o": [
    "Personality exists automatically for any IO.",
    "Only UN specialized agencies have personality.",
    "Read the establishing treaty, then ask: permanent association of states, executive organs, distinct legal powers, and powers that exist generally.",
    "Personality requires Security Council recognition."
   ],
   "a": 2,
   "why": [
    "IOs do not have personality automatically. You start with the founding treaty and apply the four questions.",
    "The test is functional, not limited to specialized agencies. ECOWAS, for example, passes it.",
    "Correct. These are the four criteria, applied after reading the establishing treaty.",
    "No SC recognition step exists. In Reparation for Injuries, the ICJ inferred the UN's personality from its Charter."
   ],
   "e": "IO personality is not automatic. Start with the text of the establishing treaty, then ask whether the IO is a permanent association of entities with personality (usually states), has executive organs, has legal powers distinct from its members, and has powers that exist generally. Reparation for Injuries (ICJ 1949) inferred the UN's capacity to bring claims from the Charter as a whole because personality was indispensable to its tasks.",
   "unit": 7
  },
  {
   "q": "An entity seeking statehood has an active border dispute with a neighbor, so its frontiers are not fully settled. Does it fail the Montevideo 'defined territory' criterion?",
   "o": [
    "No. Defined territory requires some definite geographic extent, and frontiers need not be fully settled.",
    "Yes. All borders must be agreed by every neighboring state.",
    "Yes, unless its territory exceeds a minimum size.",
    "No, because territory is not one of the Montevideo criteria."
   ],
   "a": 0,
   "why": [
    "Correct. Albania was recognized in 1913 without settled frontiers, and Israel was admitted to the UN in 1949 despite border disputes.",
    "The criterion has a low threshold: you draw some line, but not everyone has to agree on it.",
    "There is no lower limit on size; microstates like Liechtenstein and Monaco were admitted to the UN.",
    "Defined territory is one of the four criteria in art. I."
   ],
   "e": "Montevideo art. I lists a permanent population, a defined territory, a government, and capacity to enter into relations with other states. Each has a low threshold. Defined territory requires some definite geographic extent, but frontiers need not be fully defined: Albania (1913) and Israel (1949) are the examples. There is also no minimum size.",
   "unit": 7
  },
  {
   "q": "After 1945, Germany was under Allied occupation, and Morocco was under a French protectorate. How do the sources treat their statehood?",
   "o": [
    "Both ceased to be states because foreign control defeats independence.",
    "Both remained states, because control under a legal title (occupation, treaty of protection) leaves statehood intact, and there is a strong presumption against loss of status.",
    "Germany remained a state, but Morocco did not.",
    "Their status depended on whether the UN admitted them."
   ],
   "a": 1,
   "why": [
    "Only foreign control that systematically and continuously overbears the entity's decisions defeats independence, and control under a legal title leaves statehood intact.",
    "Correct. Germany remained a state under Allied occupation, and US Nationals in Morocco held Morocco remained sovereign under the protectorate.",
    "US Nationals in Morocco held Morocco 'remained a sovereign State' under the French protectorate.",
    "UN admission is evidence of statehood but not the test applied in these examples."
   ],
   "e": "The course uses a minimal conception of independence, part of the government criterion: a state can be substantially under foreign control in fact and remain a state. Crawford calls independence 'the decisive criterion' but says only systematic, continuous control over a wide range of decisions defeats it. Control under a legal title, such as a treaty of protection or lawful occupation, leaves statehood intact, and there is a strong presumption against loss of status.",
   "unit": 7
  },
  {
   "q": "State V attends a multilateral conference with Entity W and joins the same multilateral treaty W has joined, but has no bilateral dealings with W. Has V impliedly recognized W as a state?",
   "o": [
    "Yes, joining the same multilateral treaty is implied recognition.",
    "Yes, attending a joint conference is implied recognition.",
    "No, because recognition must always be express.",
    "No, because implied recognition arises only from acts such as a bilateral treaty, formal diplomatic relations, and probably consular exequaturs."
   ],
   "a": 3,
   "why": [
    "Recognition is not implied from a shared multilateral treaty.",
    "Recognition is not implied from a joint conference or negotiations.",
    "Recognition can be implied, but only from specific acts such as a bilateral treaty or formal diplomatic relations.",
    "Correct. A shared multilateral treaty and a joint conference do not imply recognition."
   ],
   "e": "Recognition turns on intent and may be implied, but only from a bilateral treaty, formal diplomatic relations, and probably consular exequaturs. It is not implied from negotiations, unofficial representation, a shared multilateral treaty, or a joint conference. The indicia of recognition are formal diplomatic relations, official communications, and a pattern of practice treating the entity as a state.",
   "unit": 7
  },
  {
   "q": "A revolutionary regime takes secure control of all of State X's territory. Several states refuse to recognize it because it came to power irregularly. Later the regime grants concessions. Do the concessions bind State X?",
   "o": [
    "No, because non-recognition by other states means the regime never represented X.",
    "Yes, because the international standard for a government is secure de facto control of all or most of the territory (Tinoco Concessions).",
    "No, because only a de jure recognized government can bind a state.",
    "Yes, but only if the UN General Assembly accredits the regime."
   ],
   "a": 1,
   "why": [
    "Tinoco held non-recognition based on illegitimacy or irregular origin loses evidential weight against effective control.",
    "Correct. Costa Rica's Tinoco regime bound the state despite British and US non-recognition.",
    "Tinoco's standard is effective control. De jure recognition is not required to bind the state.",
    "GA accreditation is not part of the Tinoco standard."
   ],
   "e": "In Tinoco Concessions, arbitrator Taft held that Costa Rica's Tinoco regime bound the state despite British and US non-recognition. Non-recognition based on illegitimacy or irregular origin, instead of lack of control, loses evidential weight. The international standard for a government is secure de facto control of all or most of the state's territory.",
   "unit": 7
  },
  {
   "q": "Which feature of the Arctic Council caused it to fail the IO legal personality test discussed in class?",
   "o": [
    "It was not created by states.",
    "It has fewer than ten members.",
    "It has no organ with decision-making power, and its secretariat and working groups only support the states, which implement all decisions.",
    "It has a court whose decisions bind its members."
   ],
   "a": 2,
   "why": [
    "It was set up by eight states through the Ottawa Declaration. The failure lies elsewhere.",
    "Membership size is not one of the four criteria.",
    "Correct. It fails the executive-organ and distinct-legal-powers criteria.",
    "That describes ECOWAS, which passes the test. The Arctic Council has no such court."
   ],
   "e": "The four IO criteria are permanent association of states, executive organs, distinct legal powers, and powers that exist generally. The Arctic Council, set up by the Ottawa Declaration among 8 states, has no organ with decision-making power; its secretariat and working groups only support the states, which implement all decisions, and it has no treaty-making authority. ECOWAS, with a Commission, Parliament, and Court whose decisions bind independently, meets all four.",
   "unit": 7
  },
  {
   "q": "The US long recognized Venezuela as a state but did not recognize the Maduro government. What does this show?",
   "o": [
    "Venezuela lost its statehood while its government was unrecognized.",
    "State recognition and government recognition are separate acts: one concerns the existence of the actor, the other the legitimacy of its administering mechanism.",
    "Venezuela became a de facto state.",
    "Non-recognition of a government is prohibited under IL."
   ],
   "a": 1,
   "why": [
    "A state does not lose its status because its government is unrecognized; the state is the legal person.",
    "Correct. This is the distinction the slides draw using Venezuela.",
    "'There is no such thing as a de facto state.' The de jure/de facto distinction exists only for governments.",
    "States may decline to recognize governments; some, under the Estrada doctrine, no longer formally recognize governments at all."
   ],
   "e": "Recognizing a state acknowledges that an actor exists in IL; recognizing a government acknowledges that a particular internal mechanism legitimately administers it. The state is the legal person and does not lose its status because its government is unrecognized. Governments can be recognized de jure (formally) or de facto (worked with, without formal recognition), but there is no de facto state.",
   "unit": 7
  },
  {
   "q": "Liechtenstein naturalized a German national who had lived and done business in Guatemala for decades and had only briefly visited Liechtenstein. Guatemala later seized his property. Why may Guatemala refuse Liechtenstein's claim?",
   "o": [
    "Naturalization is never valid under international law.",
    "Jus soli controls, so only Guatemala could protect him.",
    "There was no genuine link between him and Liechtenstein, so Guatemala need not recognize the nationality for diplomatic protection.",
    "Individuals are direct subjects of IL and must bring their own claims."
   ],
   "a": 2,
   "why": [
    "Each state may naturalize consenting individuals under its own law. The issue is whether other states must recognize the nationality.",
    "Nottebohm did not apply a jus soli rule. It asked whether Liechtenstein had a genuine link to him.",
    "Correct. This is the Nottebohm rule; the claim was inadmissible.",
    "Individuals are not direct subjects; they rely on their state of nationality to espouse claims."
   ],
   "e": "In Nottebohm (ICJ 1955), the Court held that each state sets its own nationality rules, but whether it may exercise diplomatic protection is decided by IL. Nationality must reflect a genuine connection of existence, interests, and sentiments. Nottebohm's ties ran to Germany and Guatemala, his Liechtenstein ties were 'extremely tenuous,' and the purpose was to swap a belligerent nationality for a neutral one, so Guatemala need not recognize it.",
   "unit": 8
  },
  {
   "q": "A Canadian-incorporated company headquartered in Toronto, 88% owned by Belgian shareholders, is driven out of business by Spain. Which state may espouse the company's claim?",
   "o": [
    "Canada, as the state of incorporation.",
    "Belgium, because Belgians hold a preponderance of the shares.",
    "Both Canada and Belgium, jointly.",
    "Neither; the company must sue Spain directly before the ICJ."
   ],
   "a": 0,
   "why": [
    "Correct. Under Barcelona Traction, only the company's national state (incorporation or registered office) may claim for injury to the company.",
    "Corporate nationality is generally not the shareholders' state, even with a large majority of shares. The Court held Belgium had no jus standi.",
    "The Court rejected competing claims as creating 'an atmosphere of confusion and insecurity.' Only one entity's rights were infringed.",
    "Only states may be parties in ICJ contentious cases, and corporations usually rely on their state to espouse claims."
   ],
   "e": "A corporation's nationality is its state of incorporation or its registered office (siège social). In Barcelona Traction (ICJ 1970), 'the national State of the company alone' could claim for injury to the company. Belgium, the shareholders' state, had no standing, because a wrong to the company harms shareholders' interests but not their rights. Canada's decision to stop pressing the claim did not pass the right to Belgium.",
   "unit": 8
  },
  {
   "q": "Same company: Spain passes a measure confiscating dividends already declared to the Belgian shareholders. Can Belgium now bring a claim?",
   "o": [
    "No, because only the company's state may ever claim.",
    "No, because Belgium must first show a genuine link like Nottebohm.",
    "Yes, because confiscating declared dividends targets the shareholders' direct rights, which their own state may protect.",
    "Yes, because any harm to a company also harms its shareholders' rights."
   ],
   "a": 2,
   "why": [
    "That rule covers injury to the company. Acts aimed at shareholders' own direct rights are an exception.",
    "Barcelona Traction drew no analogy to Nottebohm, and the issue here is whose rights were infringed.",
    "Correct. Rights to declared dividends, to vote at general meetings, and to residual assets on liquidation belong to shareholders.",
    "Barcelona Traction says harm to the company affects shareholders' interests, not their rights. Only acts aimed at their direct rights qualify."
   ],
   "e": "Barcelona Traction separates injury to the company, which only the company's state may claim, from acts aimed at shareholders' direct rights, which the shareholders' state may claim. Direct rights include declared dividends, attending and voting at general meetings, and a share of residual assets on liquidation. Other exceptions include ILC Articles on Diplomatic Protection art. 11 and treaties providing otherwise.",
   "unit": 8
  },
  {
   "q": "Which body rejected a strict genuine-link requirement for an individual's nationality, limiting Nottebohm to its facts?",
   "o": [
    "The American Law Institute in Restatement (Third) § 211.",
    "The ILC in its 2006 Articles on Diplomatic Protection, art. 4.",
    "The ICJ in Barcelona Traction.",
    "The PCIJ in the Tunis and Morocco Nationality Decrees."
   ],
   "a": 1,
   "why": [
    "The Restatement recognized the genuine link test: states need not accept a nationality not based on a genuine link.",
    "Correct. Art. 4 requires only nationality acquired under the state's law 'not inconsistent with international law,' and the commentary limits Nottebohm to its facts.",
    "Barcelona Traction concerned corporate nationality and drew no analogy to Nottebohm. It did not address individual genuine link.",
    "That 1923 opinion held nationality is within a state's domestic jurisdiction. It predates Nottebohm."
   ],
   "e": "The status of Nottebohm's genuine link test is controversial. The ILC's Articles on Diplomatic Protection (2006) art. 4 define the state of nationality as one whose nationality the person acquired under its law 'not inconsistent with international law,' with no genuine link requirement, because a strict test 'would exclude millions of persons' from protection. The Restatement (Third) § 211 recognizes the test.",
   "unit": 8
  },
  {
   "q": "What is the baseline rule for who is a national of a state?",
   "o": [
    "International law sets uniform criteria for nationality that all states must apply.",
    "Each state's domestic law defines its nationals, and other states recognize that law insofar as it is consistent with conventions, custom, and generally recognized principles.",
    "Nationality is determined by the state where the person currently resides.",
    "Nationality is determined by the UN High Commissioner for Refugees."
   ],
   "a": 1,
   "why": [
    "No uniform international criteria exist. The baseline leaves nationality to each state's domestic law, subject to growing limits.",
    "Correct. This is the Tunis and Morocco Nationality Decrees rule and art. 1 of the 1930 Hague Convention.",
    "Residence is not the baseline rule. Nationality comes from jus soli, jus sanguinis, or naturalization under domestic law.",
    "No international body assigns nationality in the sources."
   ],
   "e": "Each state's domestic law defines the qualifications for nationality. The PCIJ in the Tunis and Morocco Nationality Decrees (1923) held this is within a state's exclusive domestic jurisdiction, and the 1930 Hague Convention art. 1 says 'It is for each State to determine under its own law who are its nationals.' Other states recognize that law insofar as it is consistent with conventions, custom, and principles on nationality, and treaties increasingly limit state discretion.",
   "unit": 8
  },
  {
   "q": "Which statement about jus sanguinis and jus soli is accurate?",
   "o": [
    "Jus soli (nationality by birthplace) is the predominant approach globally.",
    "Jus sanguinis (nationality from parents) is the majority approach in the Americas.",
    "Jus sanguinis is the predominant approach globally, and jus soli is the majority approach in the Americas.",
    "Neither supplies a genuine link under the Nottebohm approach."
   ],
   "a": 2,
   "why": [
    "Jus soli is a minority approach globally, though it is the majority approach in the Americas.",
    "Reversed: the Americas mostly follow jus soli (birthplace), not jus sanguinis.",
    "Correct. Jus sanguinis (through parents) predominates worldwide, while most countries in the Americas use jus soli (birthplace).",
    "Jus soli and jus sanguinis are generally understood to supply a genuine link; naturalization may not."
   ],
   "e": "Jus sanguinis grants nationality through biological parents and is the predominant approach globally. Jus soli grants nationality by birthplace; it is a minority approach globally but the majority approach in the Americas. Both are generally understood to supply the genuine link Nottebohm requires, while voluntary naturalization may be questioned without other ties such as residence.",
   "unit": 8
  },
  {
   "q": "Arcadian Energy & Ports Corp. is wholly state-owned. It runs retail gas station chains abroad and also issues port entry permits and collects import duties at home. How does the commercial/other-activities rule apply?",
   "o": [
    "It gets sovereign immunity for both activities because the state owns it.",
    "It gets no immunity for either activity because corporations lack international personality.",
    "It gets immunity for the gas stations, because foreign sales are a state function.",
    "No immunity for the retail gas chains (commercial activity); immunity for issuing port permits and collecting duties (governmental functions)."
   ],
   "a": 3,
   "why": [
    "Ownership alone does not decide immunity. The rule turns on the nature of the activity.",
    "A state-controlled corporation can be an arm of the state for non-commercial, governmental activities.",
    "Running retail gas chains is commercial activity, which gets no immunity.",
    "Correct. Commercial activity is not treated as an arm of the state; other activities are entitled to sovereign immunity."
   ],
   "e": "Corporations have no independent international personality, but a state-controlled corporation may be treated as part of the state depending on what it is doing. First ask whether it is so closely controlled that it is a state agency (degree of ownership, execution of state functions, other indicia of control). Commercial activities are not treated as an arm of the state and get no immunity; other activities get sovereign immunity and may be attributed to the state.",
   "unit": 8
  },
  {
   "q": "At Nuremberg, Nazi defendants argued that IL concerns only states and that individuals performing acts of state are not responsible. How did the International Military Tribunal respond?",
   "o": [
    "It accepted the defense and held Germany alone responsible.",
    "It rejected the defense: 'Crimes against international law are committed by men, not by abstract entities.'",
    "It held that only piracy creates individual responsibility under IL.",
    "It held individuals responsible only if their own state consented to the trial."
   ],
   "a": 1,
   "why": [
    "The Tribunal rejected the defense and held individuals responsible.",
    "Correct. The IMT held major war criminals individually responsible for crimes against peace, war crimes, crimes against humanity, and conspiracy.",
    "Piracy was historically the only individual responsibility, but Nuremberg expanded it to these new categories.",
    "The Tribunal was created by the London Agreement among France, the UK, the US, and the USSR, not by the defendants' consent."
   ],
   "e": "Historically, claims ran against the state, and individual responsibility existed only for piracy and, later, violations of the laws of war. Under the London Agreement, the International Military Tribunal at Nuremberg held major Nazi war criminals individually responsible for crimes against peace, war crimes, crimes against humanity, and conspiracy. It rejected the act-of-state defense with the statement that crimes against IL 'are committed by men, not by abstract entities.'",
   "unit": 8
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
     "Security Council decisions bind all UN members because members agreed to carry them out (Charter art. 25), and Charter obligations prevail over other agreements (art. 103)."
    ],
    [
     "UNGA resolution adopted unanimously “solemnly declaring” principles",
     "Not binding",
     "A General Assembly resolution never binds on its own because the GA can only recommend, though unanimity and “solemnly declares” make it strong evidence of custom."
    ],
    [
     "ICJ judgment, as applied to a non-party in a later case",
     "Not binding",
     "Under ICJ Statute art. 59 a judgment binds only the parties to that particular case, so for a non-party it is only persuasive evidence of the law."
    ],
    [
     "ICJ provisional measures order against a party",
     "Binding",
     "Every party to the ICJ Statute is bound by the Court's art. 41 power to indicate provisional measures, and LaGrand held those measures are binding."
    ],
    [
     "An MOU whose text says it records “political commitments only”",
     "Not binding",
     "An instrument is a treaty only if the parties intended to create legally binding obligations, and this text expressly disclaims that intention."
    ],
    [
     "A treaty obligation, on a third state that never accepted it in writing",
     "Not binding",
     "VCLT art. 35 lets a treaty impose an obligation on a non-party only if the parties intended it and the third state expressly accepts it in writing, which did not happen here."
    ],
    [
     "A treaty provision giving a right to a third state that stays silent: does the right take effect for that state?",
     "Binding",
     "Under VCLT art. 36 a third state's assent to a right is presumed unless it indicates otherwise, so silence is enough for the right to take effect."
    ],
    [
     "An ICJ advisory opinion",
     "Not binding",
     "Advisory opinions state the existing law for the requesting body and create no new legal obligations for anyone."
    ],
    [
     "UNGA resolution adopted 120–30 that “Requests” states to stop a practice",
     "Not binding",
     "General Assembly resolutions do not bind on their own, and a suggestive verb plus a split vote are indicia of a purely recommendatory resolution."
    ],
    [
     "A treaty in force that the UN member never registered with the Secretariat",
     "Binding",
     "Non-registration under Charter art. 102 only bars invoking the treaty before UN organs; it does not affect the treaty's validity between the parties."
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
     "Under VCLT art. 53 a treaty that conflicts with an existing peremptory norm when concluded is void in whole, with no severance of other provisions."
    ],
    [
     "Negotiator exceeded internal constitutional limits",
     "Voidable",
     "A violation of internal law on competence (art. 46) or a representative's excess of authority (art. 47) makes consent voidable only if the state invokes it, and art. 46 has never succeeded before the ICJ."
    ],
    [
     "State was coerced by threat of force",
     "Void",
     "Under VCLT art. 52 a treaty procured by the threat or use of force in violation of the Charter is void, and the whole treaty falls."
    ],
    [
     "Based on a mistaken essential fact",
     "Voidable",
     "Error under art. 48 is a ground the mistaken state must invoke, and only if the fact formed an essential basis of its consent and it did not contribute to the error."
    ],
    [
     "State fraudulently induced to sign",
     "Voidable",
     "Fraud by another negotiating state under art. 49 lets the defrauded state invoke the defect, so the treaty stands until it does."
    ],
    [
     "New peremptory norm emerges that conflicts",
     "Void",
     "Under VCLT art. 64 an existing treaty that conflicts with a newly emerged peremptory norm becomes void and terminates, without retroactive effect."
    ],
    [
     "The state's representative was blackmailed into signing",
     "Void",
     "Under art. 51 consent procured by coercing a representative, including blackmail or threats against the representative's family, is without legal effect."
    ],
    [
     "The state's representative was bribed by the other negotiating state",
     "Voidable",
     "Corruption of a representative (art. 50) was added because fraud did not adequately cover it, and the sources treat it as probably voidable."
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
     "The customary rule already existed when the treaty was concluded, so the provision only writes it down (ILC Concl. 11)."
    ],
    [
     "Rule was emerging; the treaty’s adoption completes it",
     "Crystallization",
     "The customary rule was still forming, and adoption of the treaty provision completed its emergence (ILC Concl. 11)."
    ],
    [
     "Provision was new, then widespread practice + opinio juris followed",
     "Generation",
     "The provision was new law when adopted and gave rise to a later general practice accepted as law, creating a new customary rule (ILC Concl. 11)."
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
