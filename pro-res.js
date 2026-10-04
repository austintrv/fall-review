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
window.COURSES["pro-res"] = {
 "id": "pro-res",
 "title": "Pro Res",
 "t1": "Professional",
 "t2": "Responsibility",
 "hue": "#ffc400",
 "kicker": "Professional Responsibility · Classes 1–11",
 "sub": "Admission, UPL, forming and ending the relationship, competence, authority, advertising, fees, confidentiality and privilege.",
 "exam": {
  "label": "Final · MC · closed book",
  "when": "90% of grade · date TBD",
  "date": ""
 },
 "cover": "Classes 1–11",
 "units": [
  {
   "title": "Bar Admission & Sources",
   "overview": [
    "This unit answers two starting questions: how a person becomes a licensed lawyer, and what body of law tells lawyers how to behave once they are licensed. Every later unit builds on these answers.",
    "Getting licensed runs through each jurisdiction separately: law school, the bar exam, the MPRE (Multistate Professional Responsibility Exam), and a character and fitness review. Rule 8.1 polices honesty in that process, and the same rule follows a lawyer into later disciplinary matters.",
    "The law governing lawyers comes from several sources. Some are binding (each state's adopted Rules, case law, procedural rules, statutes, common law such as malpractice and fraud) and some are only persuasive (the ABA Model Rules themselves, the Restatement, bar ethics opinions). The judiciary is the main regulator because state high courts treat that power as inherent in the judicial function.",
    "The unit closes with the policy frame for the whole course: whether law is a profession or a business. That debate is what justifies the lawyer monopoly and self-regulation, which Unit 2 then tests through UPL (unauthorized practice of law). On a multiple-choice exam, expect questions on which sources bind, the elements of Rule 8.1, and the fraud elements."
   ],
   "check": {
    "status": "complete",
    "note": "Texas MPRE requirement and Texas attorney oath slides (Class 1 slides 25 to 27) are image-only in the extracted text, so their content is not reflected."
   },
   "blocks": [
    {
     "title": "Getting Licensed",
     "explain": [
      "The United States licenses lawyers jurisdiction by jurisdiction. A lawyer applies to the licensing authority in each state, D.C., Puerto Rico, or U.S. territory where the lawyer wants to practice. The National Conference of Bar Examiners identifies each jurisdiction's agency and summarizes its requirements.",
      "Most jurisdictions require three things: graduation from an accredited law school, passage of that jurisdiction's bar exam, and passage of the MPRE (Multistate Professional Responsibility Exam). The MPRE tests the ABA rules for lawyers and judges, controlling constitutional decisions, and generally accepted principles from leading federal and state cases and procedural and evidentiary rules.",
      "Separate routes exist for lawyers who want to practice in more than one place, for federal courts, and for a single trial in a place where the lawyer is not licensed. On top of the exams, applicants must pass a character and fitness review."
     ],
     "items": [
      [
       "Standard route",
       "Graduate from an accredited law school, pass the jurisdiction's bar exam, and pass the MPRE. The casebook notes that almost every jurisdiction requires the MPRE for admission.",
       [
        "UBE (Uniform Bar Examination): in many jurisdictions, taking the UBE lets an applicant use one exam toward admission in multiple jurisdictions instead of taking several separate bar exams."
       ]
      ],
      [
       "Admission on motion",
       "Many jurisdictions admit an already-licensed lawyer without a bar exam. The trade-off is experience: admission on motion usually requires a set number of years in practice.",
       []
      ],
      [
       "Federal courts",
       "Admission to a state bar does not admit a lawyer to federal court. The lawyer applies separately to each federal court. There is no additional bar exam, but the lawyer generally needs a sponsor already admitted in that court and proof of good standing in the state of admission.",
       []
      ],
      [
       "Pro hac vice",
       "Latin for \"for this occasion only.\" A lawyer who will appear in a trial in a state or federal court where the lawyer is not licensed can apply for admission limited to that one case. The rules vary by jurisdiction.",
       []
      ],
      [
       "Character & fitness",
       "Most jurisdictions require applicants to meet character and fitness standards before admission. The casebook names the issues most likely to cause concern: dishonesty on the bar application, recent criminal conduct, and fraud or other financial misdeeds.",
       [
        "Rule 8.1 governs the application itself, so how the applicant answers is judged separately from the underlying conduct."
       ]
      ]
     ],
     "tip": "The cover-up is its own Rule 8.1 violation and is often worse than the conduct disclosed. An applicant who hides an old problem converts a fitness question into a dishonesty violation.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 8.1 – Bar Admission & Disciplinary Matters",
     "text": "An applicant, or a lawyer in an admission or disciplinary matter, shall not:",
     "explain": [
      "Rule 8.1 requires honesty toward the bodies that admit and discipline lawyers. It answers three questions the professor walked through on the slides: WHO is covered, WHAT conduct is barred, and HOW (the knowledge requirement).",
      "WHO: an applicant for admission, or a lawyer acting in connection with a bar admission application or a disciplinary matter. That covers a lawyer's own admission or discipline and also someone else's, such as a lawyer writing a reference letter.",
      "WHAT and HOW: paragraph (a) bars knowing false statements of material fact. Paragraph (b) bars two kinds of silence: failing to correct a misapprehension the person knows has arisen, and knowingly ignoring a lawful demand for information. The rule carves out information protected by Rule 1.6 (confidentiality)."
     ],
     "items": [
      [
       "(a)",
       "Shall not knowingly make a false statement of material fact. Three parts: the statement must be false, the fact must be material, and the person must know it is false. An honest mistake does not meet the \"knowingly\" element.",
       []
      ],
      [
       "(b)",
       "Shall not fail to disclose a fact necessary to correct a misapprehension known by the person to have arisen in the matter, or knowingly fail to respond to a lawful demand for information from an admissions or disciplinary authority.",
       [
        "Correction duty: if the applicant or lawyer knows the authority has a mistaken impression, the person must disclose what is needed to fix it.",
        "Response duty: a lawful request for information from the admissions or disciplinary authority must be answered."
       ]
      ],
      [
       "Exception: Rule 1.6",
       "Rule 8.1 does not require disclosure of information otherwise protected by Rule 1.6, the confidentiality rule. Rule 1.6(a) bars a lawyer from revealing information relating to a client's representation unless the client gives informed consent, disclosure is impliedly authorized, or a Rule 1.6(b) exception applies. A lawyer answering a disciplinary inquiry therefore cannot be forced by Rule 8.1 to breach a client's confidence.",
       []
      ],
      [
       "Texas Rule 8.01",
       "Same substance as Model Rule 8.1, with three differences:",
       [
        "It expressly extends to a petitioner for reinstatement to the bar and to petitions for reinstatement.",
        "It cross-references Texas Rule 1.05 (Texas's confidentiality rule) instead of Rule 1.6.",
        "Paragraph (b) reads \"fail to correct a misapprehension\" instead of \"fail to disclose a fact necessary to correct a misapprehension.\""
       ]
      ]
     ],
     "tip": "Watch the knowledge element. The slide practice question involved an applicant who forgot a missed child support payment when filling out the application, later remembered during law school, and was admitted without telling the bar. Separate the original omission (no knowing false statement) from what happened after the applicant remembered, which is where comment [1]'s correction duty applies.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 8.1 Comments",
     "explain": [
      "The comments explain how far Rule 8.1 reaches in time and how it interacts with constitutional rights and with a lawyer who represents an applicant or a respondent lawyer."
     ],
     "items": [
      [
       "Cmt. [1]: applicants and later discipline",
       "The duty covers persons seeking admission as well as lawyers. A material false statement on an admission application can be the basis for discipline after the person is admitted, and it may also count against the person in a later admission application.",
       [
        "The duty applies to a lawyer's own admission or discipline and to that of others.",
        "Lying or omitting facts during a disciplinary investigation of the lawyer's own conduct is a separate professional offense.",
        "Paragraph (b) requires correcting any prior misstatement the applicant or lawyer made, and affirmatively clarifying any misunderstanding by the authority that the person becomes aware of."
       ]
      ],
      [
       "Cmt. [2]: Fifth Amendment",
       "The rule is subject to the Fifth Amendment and matching state constitutional provisions. A person who relies on that privilege must do so openly and may not use the right of nondisclosure as cover for failing to comply with the rule.",
       []
      ],
      [
       "Cmt. [3]: lawyer for the applicant or respondent",
       "A lawyer who represents a bar applicant, or a lawyer under disciplinary investigation, is governed by the ordinary client-lawyer rules, including Rule 1.6 (confidentiality) and in some cases Rule 3.3 (candor toward the tribunal). Rule 8.1 does not turn that lawyer into an informant against the client.",
       []
      ]
     ],
     "tip": "An applicant admitted after a material false statement is still exposed: cmt. [1] lets the false application statement support discipline after admission.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Fraud Elements",
     "explain": [
      "Fraud is a common law doctrine that applies to lawyers, and the professor listed its elements in class. All five must be present.",
      "The elements matter in this course because fraud resurfaces across many rules. Knowing the elements helps decide whether conduct is \"fraud\" for purposes of those rules."
     ],
     "items": [
      [
       "1",
       "A material misrepresentation: a false statement about something that matters to the decision.",
       []
      ],
      [
       "2",
       "Made with knowledge of its falsity, or asserted without knowledge of its truth. Recklessly asserting something the speaker does not know to be true satisfies this element.",
       []
      ],
      [
       "3",
       "Made with the intention that the other party act on it.",
       []
      ],
      [
       "4",
       "The other party relied on it.",
       []
      ],
      [
       "5",
       "The reliance caused injury to the plaintiff.",
       []
      ]
     ],
     "tip": "Where fraud resurfaces: character and fitness (financial misdeeds); Rule 8.1 (false statements); Rule 1.2(d) (assisting a client's crime or fraud); Rule 1.16(a)(4) and (b)(2)–(3) (withdrawal); Rule 8.4(c) (dishonesty, fraud, deceit), which applies at all times.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Law Governing Lawyers",
     "explain": [
      "The casebook lists the basic sources of lawyers' legal obligations: the ethics rules, bar association opinions, the Restatement of the Law Governing Lawyers, case law, and statutes. The exam question is usually which of these bind.",
      "Binding: the version of the Rules a jurisdiction has adopted, case law interpreting them, procedural and evidence rules, statutes, and common law such as malpractice and fraud. Persuasive only: the ABA Model Rules as such, the Restatement, and bar association and ABA ethics opinions.",
      "The judiciary is the predominant regulator. State high courts write the ethics rules (California's legislature also plays a major role) and enforce them through discipline and court rulings."
     ],
     "items": [
      [
       "Rules of Professional Conduct",
       "The basic source of rules governing lawyer conduct. The ABA Model Rules are a model: they bind no government, but every jurisdiction has adopted its own version, accepting, rejecting, or modifying them.",
       []
      ],
      [
       "Who writes them",
       "In each jurisdiction the courts promulgate the ethics rules, except in California, where the legislature has a major role. Federal courts set their own ethics rules for lawyers appearing before them and often adopt the rules of the local jurisdiction.",
       []
      ],
      [
       "Other law",
       "Several other bodies of law also bind lawyers:",
       [
        "Case law: courts interpret the Rules when reviewing discipline and in court matters such as motions to disqualify.",
        "Procedure and evidence: for example, Fed. R. Civ. P. 11 (Federal Rule of Civil Procedure 11) and the attorney-client evidentiary privilege.",
        "Statutes: legislatures regulate lawyers directly, for example Sarbanes-Oxley provisions for lawyers practicing before the SEC (Securities and Exchange Commission) and the Bankruptcy Reform Act, and also through general laws such as criminal law.",
        "Common law: the most familiar is malpractice, and other doctrines such as fraud also apply."
       ]
      ],
      [
       "Persuasive only",
       "These sources guide courts and lawyers but do not bind:",
       [
        "Restatement of the Law Governing Lawyers (American Law Institute): \"not binding but has proven very influential\" with courts and bar associations.",
        "Bar association ethics opinions: typically not binding on courts in discipline or other matters, but courts give them some deference, and following a bar opinion can mitigate discipline even when the court disagrees with the opinion.",
        "ABA opinions: the ABA is a voluntary trade organization that lawyers need not join, so its ethics opinions bind lawyers in no jurisdiction. A majority of jurisdictions have mandatory (\"unified\") state bars, but their opinions are also persuasive only."
       ]
      ],
      [
       "Inherent power (Restatement § 1)",
       "Restatement § 1(c): the highest courts in most states have held, as a matter of state constitutional law, that their power to regulate lawyers is inherent in the judicial function. The power comes from courts' historical role in admitting and disbarring lawyers and from English court practice. This is why the judiciary is the predominant authority.",
       []
      ]
     ],
     "tip": "Casebook Q 1-4: the Restatement is the source that is NOT binding. Malpractice case law, criminal law, and Sarbanes-Oxley regulations all bind. Q 1-3: the predominant authority is the judiciary.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "History of the ABA Codes",
     "explain": [
      "The ABA has issued three codifications of lawyer ethics. The shift over time runs from aspirational statements toward mandatory rules."
     ],
     "items": [
      [
       "Canons of Professional Ethics (1908)",
       "Hortatory (urging good conduct), but courts and bar associations applied them anyway to govern lawyers' conduct.",
       []
      ],
      [
       "Model Code of Professional Responsibility (1970)",
       "Mixed two kinds of provisions: aspirational Ethical Considerations and binding Disciplinary Rules.",
       []
      ],
      [
       "Model Rules of Professional Conduct (1983)",
       "Rules most of which require compliance. Amended from time to time; recent amendments add an explicit anti-bias requirement and respond to technology and the globalization of practice.",
       []
      ],
      [
       "Judicial codes",
       "Canons of Judicial Ethics (1924), then the Model Code of Judicial Conduct (1990, since amended).",
       []
      ],
      [
       "Global comparison",
       "The U.S. mainly uses state-based judicial regulation. The United Kingdom, Scotland, and Australia use co-regulation: in the U.K. and Scotland a board with a nonlawyer majority and nonlawyer chair oversees lawyers; in Australia, statutory commissions or boards do.",
       []
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Profession or Business?",
     "explain": [
      "The readings ask whether law is a profession or a business. The traditional answer, the business-profession dichotomy, treats law as a profession. That answer is what justifies lawyers' exclusive right to practice and their power to regulate themselves.",
      "Pound and Freidson supply the definitions. Later scholars question the dichotomy, and Luban describes a separate idea, the dominant conception of the lawyer's role."
     ],
     "items": [
      [
       "Profession",
       "Dean Roscoe Pound: \"a group ... pursuing a learned art as a common calling in the spirit of public service, no less a public service because it may incidentally be a means of livelihood. Pursuit of the learned art in the spirit of a public service is the primary purpose.\" Earning a living is incidental; public service is the main goal.",
       []
      ],
      [
       "Freidson's four assumptions",
       "Prof. Eliot Freidson: a profession is an occupation with special privileges, such as exclusive licensing, justified by four assumptions:",
       [
        "(1) The work requires substantial intellectual training and complex judgments.",
        "(2) Clients cannot evaluate the quality of the work, so they must trust the person they consult.",
        "(3) The practitioner puts the client's and the public's interest above the practitioner's own.",
        "(4) The occupation regulates itself, assuring the public and courts that members are competent, keep client trust, and rise above self-interest."
       ]
      ],
      [
       "Business-profession dichotomy (Pearce)",
       "Business people work to make money and consumers can judge their goods. Lawyers work mainly for the public good and consumers cannot judge their expertise. That contrast justifies limits on market competition: only lawyers may provide legal services, and lawyers largely regulate themselves.",
       []
      ],
      [
       "Critics",
       "Later scholars reject the dichotomy in different ways:",
       [
        "Tom Morgan: ABA-style professionalism is \"dead\"; market competition by any legal services provider, lawyer or not, can lower prices, improve quality, and increase access to justice.",
        "Dana Remus and Rebecca Roiphe: reject the dichotomy but oppose a market-driven approach; they seek to reconstruct professionalism through professional structures and ethical rules.",
        "Wald & Pearce: law work is relational, and lawyers are business people and professionals at the same time."
       ]
      ],
      [
       "Dominant conception of the lawyer's role (Luban)",
       "Also called the neutral partisan or hired gun. It rests on role morality (special duties that come with a role) and has two parts: (1) the principle of partisanship, extreme partisan zeal for the client; and (2) the principle of nonaccountability, the lawyer bears no moral responsibility for the client's goals or means.",
       []
      ]
     ],
     "tip": "Casebook questions: zealous representation within the law belongs to the dominant conception of the lawyer's role; the other choices (inaccessible expertise, public good over self-interest, autonomy from regulation) are traditional professionalism elements (Q 1-6). The public good belongs to professionalism, not to the dominant conception (Q 1-11). The dichotomy justified lawyers' exclusive right to practice (Q 1-7).",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Character and Professional Values",
     "explain": [
      "The casebook closes Chapter 1 with the view that ethics can be taught and with a character and fitness example."
     ],
     "items": [
      [
       "Teaching ethics (Pearce, 1998)",
       "The ABA mandated professional responsibility courses in 1974 after Watergate. Pearce rejects the view that students' values are fixed before law school: students still must apply their values to law practice, and research shows moral development continues after age 18.",
       []
      ],
      [
       "Matthew Hale",
       "The Illinois character and fitness committee denied admission to Hale, a white supremacist, reasoning that lawyers, as guardians of the principle that every person is judged on individual conduct, cannot have as their mission the incitement of racial hatred. The casebook notes most state bars appear to take the contrary view that white supremacist beliefs are neither a bar to admission nor a ground for discipline.",
       []
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
   "title": "UPL & Multijurisdictional Practice",
   "overview": [
    "Licensed lawyers hold a monopoly on certain legal services. This unit asks how far that monopoly reaches and where a lawyer may use a license. It splits into three questions: WHO may deliver legal services, WITH WHOM a lawyer may deliver them, and WHERE a lawyer may deliver them.",
    "WHO: nonlawyers who give legal help commit UPL (unauthorized practice of law). Florida Bar v. Brumbaugh supplies the test, and later cases on books, software, and websites show where the line sits. Rule 5.5(a) makes UPL a lawyer's problem by barring lawyers from assisting it.",
    "WITH WHOM: Rules 5.3, 5.4, and 5.7 control supervising nonlawyers, sharing fees and ownership with nonlawyers, and running law-related businesses. WHERE: a lawyer licensed in one state can commit UPL in another (Birbrower). Rule 5.5(b) to (d) sets the safe harbors, and Rule 8.5 says who may discipline and which state's rules apply.",
    "The policy fight runs throughout: protecting the public from unqualified advisors versus access to justice, competition, and antitrust limits on self-regulation. On the exam, expect fact patterns that require running Rule 5.5 in order and deciding whether a nonlawyer crossed from selling information into giving advice."
   ],
   "check": {
    "status": "complete",
    "note": ""
   },
   "blocks": [
    {
     "title": "Three Questions",
     "explain": [
      "Chapter 2 builds the lawyer-client relationship, and this unit begins by defining the practice of law. Technology now delivers services that look like legal services, which makes the definition a live question.",
      "Keep the three questions separate. Each points to different rules, and one fact pattern can raise more than one."
     ],
     "items": [
      [
       "WHO may deliver legal services?",
       "Whether a nonlawyer is practicing law. Governed by state UPL law (statutes and cases such as Brumbaugh) and by Rule 5.5(a), which bars lawyers from practicing in violation of a jurisdiction's rules or assisting another to do so.",
       []
      ],
      [
       "WITH WHOM?",
       "Whether and how a lawyer may work with nonlawyers. Rule 5.3 (supervising nonlawyer assistants), Rule 5.4 (no fee sharing, partnership, or nonlawyer ownership or control), Rule 5.7 (law-related services).",
       []
      ],
      [
       "WHERE?",
       "Whether a lawyer may practice in a jurisdiction where the lawyer is not licensed, and which jurisdiction disciplines. Rule 5.5(b)–(d) (multijurisdictional practice) and Rule 8.5 (disciplinary authority and choice of law).",
       []
      ]
     ],
     "tip": "One fact pattern usually raises more than one. The listed learning outcomes are the exam verbs: evaluate fee sharing and law-related businesses, analyze nonlawyer UPL, determine whether a lawyer is inside a Rule 5.5 safe harbor, and argue for and against UPL in technology settings.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "What Counts as the Practice of Law",
     "explain": [
      "The professor's opening frame: there is no single definition of the practice of law. It depends on the jurisdiction, and the definition comes from statutes and case law.",
      "Most states today define it broadly, so transactional, litigation, and regulatory work all fall inside the lawyer monopoly. Historically this was narrower: until the 20th century, nonlawyer businesses and nonprofits routinely provided transactional and litigation services."
     ],
     "items": [
      [
       "No single definition",
       "It depends on the jurisdiction and comes from statutes and case law. Some states define it by statute, others by case law; Colorado spells out in its Rule 5.5 what a disbarred lawyer may not do; some states use handbooks or policy manuals.",
       []
      ],
      [
       "Rule 5.5 cmt. [2]",
       "The definition \"is established by law and varies from one jurisdiction to another.\" Whatever the definition, limiting practice to bar members \"protects the public against rendition of legal services by unqualified persons.\"",
       [
        "The rule does not bar lawyers from employing paraprofessionals and delegating work to them, as long as the lawyer supervises the work and keeps responsibility for it (Rule 5.3)."
       ]
      ],
      [
       "Scope of the monopoly",
       "Most states define the practice of law broadly, covering transactional, litigation, and regulatory work.",
       []
      ],
      [
       "Standing carve-outs",
       "Activities allowed even though they involve law:",
       [
        "Self-representation (pro se).",
        "Accountants giving tax advice.",
        "Nonlawyer representatives for Social Security disability claimants."
       ]
      ],
      [
       "California §§ 6125 and 6126",
       "California Business and Professions Code § 6125 is the prohibition on practicing without a license. § 6126(a) is the penalty: holding out as entitled to practice, or practicing, without active State Bar membership is a misdemeanor punishable by up to 1 year in county jail and/or a $1,000 fine.",
       [
        "California defines practice as \"legal advice and legal instrument and contract preparation, whether or not these subjects were rendered in the course of litigation,\" so a violation can occur with no case pending in court."
       ]
      ]
     ],
     "tip": "Professor-flagged answer to \"What is the meaning of law practice?\": no one definition; depends on jurisdiction; comes from statutes and case law.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 5.5(a) – The Prohibition",
     "explain": [
      "Rule 5.5(a) bars a lawyer from practicing law in a jurisdiction in violation of that jurisdiction's regulation of the profession, or from assisting another in doing so. The first clause covers a lawyer practicing where not authorized. The second clause, the assist clause, reaches lawyers who help nonlawyers practice.",
      "UPL carries serious consequences, and enforcement usually comes from public officials or the bar."
     ],
     "items": [
      [
       "Rule",
       "A lawyer shall not practice law in a jurisdiction in violation of the regulation of the legal profession in that jurisdiction, \"or assist another in doing so.\"",
       []
      ],
      [
       "Assist clause",
       "Extends UPL liability to lawyers who help a nonlawyer practice. Combined with Rule 5.3 (duty to supervise nonlawyers), a lawyer can be disciplined for failing to supervise a nonlawyer who then engages in UPL. The casebook notes the line is unclear (Tremblay calls the authority \"confused and incoherent\").",
       []
      ],
      [
       "Consequences",
       "Five professor-flagged consequences of UPL:",
       [
        "Criminal prosecution.",
        "Civil injunctions.",
        "Restitution.",
        "Disbarment.",
        "Contempt of court."
       ]
      ],
      [
       "Who enforces",
       "The state Attorney General, the local District Attorney, or the bar association. A private cause of action is a newer development available only in some states.",
       []
      ],
      [
       "Definition",
       "Varies by jurisdiction (cmt. [2]); most states define it broadly.",
       []
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "UPL by Nonlawyers (Brumbaugh)",
     "text": "Practice of law if, as a course of conduct for another, the service:",
     "explain": [
      "Florida Bar v. Brumbaugh (Fla. 1978) sets the test for when a nonlawyer is practicing law. Marilyn Brumbaugh ran a secretarial service advertising do-it-yourself divorces, wills, résumés, and bankruptcies for $50 (about $248 today). She kept four sets of dissolution papers and chose which fit, asked customers about custody, support, and alimony, told them how to sign, where to file, and what testimony the hearing required, and once prepared a quitclaim deed.",
      "The test has two parts, and it applies when the person does the work for another as a course of conduct. The court made it broad on purpose, to be filled in case by case, because any \"lasting, all encompassing definition\" is \"doomed to failure\" as practice changes.",
      "The court explained that UPL restrictions exist to protect the public from unqualified advisors the judiciary cannot control; the court said they do not exist to create or maintain \"a monopoly or closed shop.\" Because professions tend to act in self-interest, courts must closely scrutinize rules that limit competition and ask whether they serve the public interest."
     ],
     "items": [
      [
       "Affects important legal rights",
       "The advice or service must affect important legal rights of the person served.",
       []
      ],
      [
       "Needs more than average-citizen skill",
       "Reasonable protection of those rights must require legal skill and knowledge greater than the average citizen has.",
       []
      ],
      [
       "MAY",
       "A nonlawyer may:",
       [
        "Sell printed material explaining legal practice and procedure to the public in general.",
        "Sell sample forms.",
        "Type forms, if she only copies information the client gave her in writing.",
        "Advertise the secretarial, notary, and forms business."
       ]
      ],
      [
       "MAY NOT",
       "A nonlawyer may not:",
       [
        "Advise clients on the various remedies available.",
        "Assist in preparing forms.",
        "Make inquiries or answer questions about which forms are necessary, how best to fill them out, where to file, or how to present evidence, including correcting errors and omissions.",
        "The same limits apply to wills and real estate documents."
       ]
      ],
      [
       "Reliance",
       "No customer complained and none thought she was a lawyer; the Bar brought the case. She \"never held herself out as an attorney,\" but her clients \"placed some reliance upon her,\" and that is where she overstepped. Reliance is enough; a complaint or holding out is not required.",
       []
      ],
      [
       "Why the court loosened its precedent",
       "Citizens need information to decide intelligently whether a problem needs a lawyer; uncontested dissolution forms can be standardized; and the risk that some published material misleads does not justify a total ban.",
       []
      ]
     ],
     "tip": "Class note: she can sell the form by itself but cannot instruct on filling it out. Professor-flagged: the dispositive fact is the clients' reliance; the label she used does not decide the case. Slide question: how many of Brumbaugh's clients complained? None.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Publishing & Software",
     "explain": [
      "Later cases ask whether books, software, and websites practice law. The common thread is personal advice: a general publication leaves every choice with the reader, while a product that interviews the user and makes choices for the user starts to look like a lawyer.",
      "Courts drew the line first (Dacey, Parsons), then legislatures and consent judgments refined it (Texas § 81.101, the LegalZoom consent judgment)."
     ],
     "items": [
      [
       "Publishing exception (Dacey)",
       "NY County Lawyers' Ass'n v. Dacey (N.Y. 1967): publishing the book How to Avoid Probate! is not the practice of law. New York's high court reversed and adopted the lower-court dissent.",
       [
        "Publishing a legal text saying what the law is is not practice; forms are commonplace, and many statutes and court rules contain forms.",
        "A book sold to the public at large involves no personal contact and no relation of confidence and trust. \"This is the essential of legal practice: the representation and the advising of a particular person in a particular situation.\"",
        "Main argument (slide): readers can give a book appropriate weight and are unlikely to rely on it as they would on an attorney; buyers who cannot afford trusts and wills, and even those who can, may represent themselves and accept the risk.",
        "Split: some states follow Dacey but still bar all personal contact (consultation, explanation, recommendation, or help selecting or filling out forms). Florida had rejected Dacey; Brumbaugh partly moved toward it."
       ]
      ],
      [
       "Interactive software (Parsons)",
       "UPL Committee v. Parsons Technology (N.D. Tex. 1999): Quicken Family Lawyer offered 100+ forms and promised to \"interview you in a logical order, tailoring documents to your situation.\" No single feature was necessarily practice, but taken as a whole the program went beyond a sample form book with instructions, so it was UPL and was enjoined.",
       []
      ],
      [
       "Tex. Gov't Code § 81.101",
       "The legislative backlash to Parsons. Texas immediately amended the statute: the practice of law does not include the design, creation, publication, distribution, display, or sale of computer software or similar products if they clearly and conspicuously state that they are not a substitute for the advice of an attorney. The Fifth Circuit then vacated the injunction.",
       [
        "Legislatures also define the practice of law, and they can move faster than courts.",
        "This is the origin of the disclaimer term later seen in the LegalZoom consent judgment."
       ]
      ],
      [
       "Branching",
       "From the LegalZoom trial court order (2014): the self-representation exception does not apply, but the scrivener's exception might. A scrivener may record information another person provides, as long as the scrivener gives no advice or legal judgment. The concern is branching software: if a customer's answer causes parts of the template never to be shown, the software is making the choice. A form book shows the whole form and leaves every choice, and the risk of a wrong choice, with the customer.",
       []
      ],
      [
       "LegalZoom consent judgment (NC 2015)",
       "LegalZoom sued the North Carolina State Bar in 2012, and the Bar counterclaimed for a UPL injunction. Under the 2015 consent judgment, North Carolina's statutory definition of practice of law does not cover LegalZoom's interactive document website as long as LegalZoom:",
       [
        "(a) lets the consumer see the whole blank template or the completed final document before purchase;",
        "(b) has an NC-licensed attorney review each blank template and every potential part of it, with the reviewing attorney's name and address kept on file;",
        "(c) states that the forms and templates are not a substitute for the advice or services of an attorney;",
        "(d) discloses its legal name and physical location and address;",
        "(e) does not disclaim warranties or liability or limit the consumer's recovery of damages or other remedies; and",
        "(f) does not require the consumer to agree to jurisdiction or venue outside North Carolina.",
        "Terms ran 2 years or until NC revised the statutory definition; neither party admitted liability."
       ]
      ],
      [
       "Boundary cases",
       "Two cases cut in opposite directions:",
       [
        "In re Serendipity Morales (Vt. 2016): no probable cause that a jailhouse lawyer committed UPL by doing legal research and drafting motions for fellow inmates.",
        "Lola v. Skadden (2d Cir. 2015): the court refused to dismiss a claim that document review \"devoid of legal judgment\" was not practice of law, so the reviewer was owed overtime. Here the lawyer argued he was not practicing."
       ]
      ],
      [
       "Technology context",
       "Legal startups grew from 15 (2009) to 400+ (2016); LegalZoom formed 20% of new California LLCs in 2011; a ticket bot beat 160,000+ parking tickets in under two years (2016).",
       []
      ]
     ],
     "tip": "Read the six LegalZoom terms as Brumbaugh, Dacey, and Parsons combined: attorney review (competence), full template display (no hidden choices), disclaimer (no reliance), and identity disclosure plus no liability waiver (consumer protection).",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Antitrust & Policy",
     "explain": [
      "Lawyer self-regulation now faces antitrust limits. In NC State Board of Dental Examiners v. FTC (2015), a board rule limited teeth whitening to licensed dentists. The board could not claim state-action antitrust immunity because a controlling number of its decision-makers were active participants in the market it regulated and the State did not actively supervise it.",
      "That holding reaches bar UPL committees run by practicing lawyers. The professor asked whether UPL should be in the rules at all, and expects both sides to be argued."
     ],
     "items": [
      [
       "State-action immunity lost",
       "When a controlling number of a licensing board's decision-makers are active market participants in the occupation it regulates, and the State does not actively supervise the board.",
       [
        "Fallout: Oregon capped private-practice lawyers at no more than one quarter of its UPL committee; Virginia's Supreme Court took over UPL opinions and then eliminated the bar's UPL committee; Washington created a Bar Structure Work Group (2018); at least one suit has challenged bar UPL activities."
       ]
      ],
      [
       "2016 Futures Report",
       "Five professor-flagged findings:",
       [
        "(1) Most people in poverty and a majority of moderate-income people do not get the legal help they need.",
        "(2) The public often does not get effective help, from lack of resources or not knowing a legal problem exists.",
        "(3) The large number of unrepresented parties hurts all litigants, including represented ones.",
        "(4) Many lawyers, especially recent graduates, are unemployed or underemployed despite the need.",
        "(5) The traditional law practice business model constrains innovations that would expand access."
       ]
      ],
      [
       "ABA response",
       "Model Regulatory Objectives (2016) and a Center for Innovation. Client protection is a legitimate regulatory objective; preventing innovation or shielding lawyers from competition is not. Arizona, California, Illinois, and Utah are reconsidering their rules.",
       []
      ],
      [
       "For UPL limits",
       "Competence and public protection; judicial control over the advisor.",
       []
      ],
      [
       "Against",
       "Monopoly protection; the access-to-justice gap; consumer harm that is \"proclaimed rather than proven\"; antitrust exposure after Dental Board.",
       [
        "Deborah Rhode's critique: UPL enforcement sits with those least able to act disinterestedly; standards are conclusory or circular; courts ask whether an activity calls for legal skill instead of whether lay providers have it; absent proof of injury, consumers should choose for themselves."
       ]
      ]
     ],
     "tip": "Professor-flagged slide: \"To Restrict or Not to Restrict: should the unauthorized practice of law be in the rules of professional conduct?\" Be ready to argue both sides.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "UPL by Lawyers (Birbrower)",
     "explain": [
      "A licensed lawyer commits UPL by practicing in a state where the lawyer is not licensed. Litigators can use pro hac vice, but before Birbrower transactional and arbitration lawyers had no comparable mechanism.",
      "Birbrower v. Superior Court (Cal. 1998): a New York firm with no California licenses represented ESQ, a California corporation, against Tandem under a contract governed by California law. The firm made several California trips: strategy meetings with the client and its accountants, a $15 million demand, interviewing arbitrators, filing an AAA (American Arbitration Association) arbitration demand in San Francisco, and settlement advice. ESQ sued for malpractice and the firm counterclaimed for over $1 million in fees.",
      "Issue: whether the firm's services were UPL under California § 6125, making the fee agreement unenforceable. The court held they were, as to the California work."
     ],
     "items": [
      [
       "Test",
       "Practicing law \"in California\" requires sufficient contact with the California client to make the nature of the legal service a clear legal representation. The inquiry is both quantitative and qualitative; \"mere fortuitous or attenuated contacts\" do not count.",
       [
        "Primary question: whether there were sufficient activities in the state, or a continuing relationship with the California client that included legal duties and obligations."
       ]
      ],
      [
       "Physical presence",
       "One factor, neither required nor sufficient. Advising a California client on California law by telephone, fax, or computer can violate § 6125. A lawyer does not automatically practice \"in California\" just by practicing California law elsewhere or \"virtually\" entering the state.",
       []
      ],
      [
       "No exceptions",
       "The court rejected each argument the firm made:",
       [
        "§ 6125 reaches only nonlawyers: rejected, because the statute says \"no person.\"",
        "Out-of-state licensure proves competence: rejected, because competence in one jurisdiction does not guarantee competence in another.",
        "Arbitration exception: rejected and left to the Legislature.",
        "Exception for services not involving a courtroom appearance: rejected as too broad given California's broad definition of practice.",
        "Full disclosure of non-licensure: rejected.",
        "Federal court exception: not applicable on these facts."
       ]
      ],
      [
       "Consequence",
       "The fee agreement is void as to the services that were UPL, because enforcing it would enforce an illegal contract. The Court of Appeal erred in voiding the whole agreement: if severable, the firm may recover for the limited New York services that did not amount to practicing in California. Remanded.",
       []
      ],
      [
       "Aftermath",
       "California amended CCP § 1282.4 (Code of Civil Procedure) to let out-of-state lawyers appear in arbitrations on conditions, but adopted no broad exceptions. Birbrower helped prompt the ABA Commission on Multijurisdictional Practice and the 2002 amendments to Rules 5.5 and 8.5.",
       []
      ]
     ],
     "tip": "Class note emphasized the California arbitration exception: Birbrower refused to create one and left it to the Legislature, which then amended CCP § 1282.4. Keep the numbers straight: § 6125 is the prohibition, § 6126 is the penalty.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 5.5(b)–(d)",
     "explain": [
      "These paragraphs, added in 2002 after Birbrower, govern a lawyer licensed elsewhere. Paragraph (b) states what the lawyer may not do. Paragraph (c) lists safe harbors for temporary practice. Paragraph (d) lists two safe harbors that allow even an office or continuous presence.",
      "Run Rule 5.5 in order: (a) is the prohibition and the assist clause; (b) is the presence and holding-out bar; (c) is temporary-only; (d) is the two non-temporary exceptions. A lawyer with an office in the state is outside (c) because the practice is not temporary, so only (d) can help."
     ],
     "items": [
      [
       "(b)",
       "A lawyer not admitted in this jurisdiction shall not:",
       [
        "(1) except as authorized by the Rules or other law, establish an office or other systematic and continuous presence here for the practice of law; or",
        "(2) hold out to the public or otherwise represent that the lawyer is admitted here."
       ]
      ],
      [
       "(c) temporary",
       "A lawyer admitted in another U.S. jurisdiction, and not disbarred or suspended anywhere, may provide legal services here on a temporary basis that:",
       [
        "(1) are undertaken in association with a locally admitted lawyer who actively participates in the matter;",
        "(2) are in or reasonably related to a pending or potential proceeding before a tribunal, if the lawyer, or a person the lawyer is assisting, is authorized to appear or reasonably expects to be;",
        "(3) are in or reasonably related to a pending or potential arbitration, mediation, or other ADR (alternative dispute resolution) proceeding, if the services arise out of or are reasonably related to the lawyer's home-jurisdiction practice and the forum does not require pro hac vice admission; or",
        "(4) catch-all: are not within (c)(2) or (c)(3) but arise out of or are reasonably related to the lawyer's practice in a jurisdiction where the lawyer is admitted."
       ]
      ],
      [
       "(d) not temporary",
       "A lawyer admitted in another U.S. or foreign jurisdiction, not disbarred or suspended, may practice through an office or other systematic and continuous presence here if the services:",
       [
        "(1) are provided to the lawyer's employer or its organizational affiliates (in-house counsel) and are not services for which the forum requires pro hac vice; a foreign lawyer advising on U.S. law must base that advice on the advice of a U.S.-licensed lawyer; or",
        "(2) are services the lawyer is authorized by federal or other law or rule to provide here."
       ]
      ],
      [
       "(e) foreign lawyers",
       "For paragraph (d), a foreign lawyer must be a member in good standing of a recognized, regulated legal profession abroad; foreign in-house counsel must be authorized by the jurisdiction's highest court. Added 2013 and 2016; few states adopted (e).",
       []
      ],
      [
       "Other routes",
       "The ABA's 2012 Model Rule on Practice Pending Admission can cover a relocating lawyer. Foreign lawyers have five routes: full license, foreign legal consultant, pro hac vice, temporary transactional work, and in-house license.",
       []
      ]
     ],
     "tip": "Slide hypo: Taylor, licensed only in New Mexico, runs a law office in Houston and prepares USCIS (U.S. Citizenship and Immigration Services) family petitions after asking clients extensive questions. 5.5(b)(1) is violated by the office; (c) cannot help because it is not temporary; the only door is 5.5(d)(2), services authorized by federal law, which also requires good standing in the licensing state. Rule 8.5(a) lets Texas discipline Taylor.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 8.5",
     "explain": [
      "Rule 8.5 answers two questions. Paragraph (a) says which jurisdictions may discipline a lawyer. Paragraph (b) says which jurisdiction's rules apply to the conduct.",
      "More than one state can discipline the same lawyer for the same conduct, but the choice-of-law rule picks one set of rules to apply."
     ],
     "items": [
      [
       "(a) authority",
       "A lawyer admitted in a jurisdiction is subject to its discipline wherever the conduct occurs. A lawyer not admitted there is also subject to its discipline if the lawyer provides or offers to provide any legal services there. Both may discipline the lawyer for the same conduct.",
       []
      ],
      [
       "(b)(1)",
       "Conduct in connection with a matter pending before a tribunal: apply the rules of the jurisdiction where the tribunal sits, unless the tribunal's rules provide otherwise.",
       []
      ],
      [
       "(b)(2)",
       "Any other conduct: apply the rules of the jurisdiction where the conduct occurred, or, if the predominant effect of the conduct is in a different jurisdiction, that jurisdiction's rules.",
       []
      ],
      [
       "Safe harbor",
       "A lawyer is not subject to discipline if the conduct conforms to the rules of a jurisdiction where the lawyer reasonably believes the predominant effect of the conduct will occur.",
       []
      ],
      [
       "Known ambiguities",
       "Open questions noted in the reading:",
       [
        "Conduct before filing but in anticipation of litigation.",
        "\"Tribunal\" includes arbitration but not mediation, leaving court-annexed mandatory mediation unclear.",
        "Appellate courts that never specified governing rules.",
        "A 2013 comment: for conflicts, a written agreement reasonably specifying a jurisdiction may be considered if obtained with informed consent confirmed in the agreement."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Nonlawyers · 5.3, 5.4, 5.7",
     "explain": [
      "These rules govern lawyers working with nonlawyers. Rule 5.3 makes lawyers responsible for supervising nonlawyer staff. Rule 5.4 protects the lawyer's independent judgment by barring fee sharing, partnerships, and ownership or control by nonlawyers. Rule 5.7 decides when the Rules follow a lawyer into a law-related business.",
      "Rule 5.4's limits have a long and contested history, and some jurisdictions now relax them."
     ],
     "items": [
      [
       "5.3",
       "Supervision of nonlawyers employed by, retained by, or associated with a lawyer:",
       [
        "5.3(a): partners and lawyers with comparable managerial authority must make reasonable efforts to ensure the firm has measures giving reasonable assurance that nonlawyer conduct is compatible with the lawyer's professional obligations.",
        "5.3(b): a lawyer with direct supervisory authority over the nonlawyer must make reasonable efforts to ensure the person's conduct is compatible with the lawyer's obligations."
       ]
      ],
      [
       "5.4(a)",
       "\"A lawyer or law firm shall not share legal fees with a nonlawyer.\" Exceptions:",
       [
        "Nonlawyer employees in a compensation or retirement plan, even if based on profit-sharing.",
        "Payments to a deceased lawyer's estate over a reasonable period.",
        "Sale of a practice under Rule 1.17.",
        "Sharing court-awarded fees with a nonprofit that employed, retained, or recommended the lawyer."
       ]
      ],
      [
       "5.4(b)–(d)",
       "Further independence rules:",
       [
        "(b) No partnership with a nonlawyer if any partnership activity is the practice of law.",
        "(c) No letting the person who recommends, employs, or pays the lawyer to serve another direct or regulate the lawyer's professional judgment.",
        "(d) No practicing in a for-profit professional corporation or association if a nonlawyer (1) owns any interest (except a lawyer's estate representative holding the lawyer's stock for a reasonable time during administration), (2) is a director or officer or holds a similar position, or (3) has the right to direct or control a lawyer's professional judgment.",
        "In-house counsel is permitted because organizations may represent themselves, and in-house lawyers assist that effort instead of representing an outside client."
       ]
      ],
      [
       "History",
       "The Kutak Commission's 1983 proposal to allow lawyer-nonlawyer partnerships failed after \"Does this mean Sears can open a law firm?\" \"Yes.\" MDP (multidisciplinary practice) proposals were rejected in 1999 and 2000, and Sarbanes-Oxley (2002) ended the debate for a decade. Abroad, Australia's Slater & Gordon (2007) became the first publicly traded firm and the UK Legal Services Act 2007 created ABS (alternative business structure) licenses.",
       []
      ],
      [
       "Exceptions today",
       "D.C. has allowed lawyer-nonlawyer partners for 20+ years; Washington (LLLTs, limited license legal technicians) and Utah allow limited licensees that lawyers may partner and share fees with. Utah and Arizona recommended eliminating or relaxing Rule 5.4 (2019).",
       []
      ],
      [
       "5.7",
       "Law-related services are services that might reasonably be performed with, and in substance relate to, legal services, and that are not UPL when a nonlawyer provides them (5.7(b)). The lawyer is subject to the Rules for those services (5.7(a)) if they are provided:",
       [
        "(1) by the lawyer in circumstances not distinct from the lawyer's legal services; or",
        "(2) through an entity the lawyer controls, if the lawyer fails to take reasonable measures to make sure the recipient knows the services are not legal services and that client-lawyer protections do not apply.",
        "Cmt. [6]: communicate this before the engagement, preferably in writing. Cmt. [7]: the burden is on the lawyer; a sophisticated user such as a public corporation needs less explanation than an individual.",
        "Cmt. [5]: referring a client to a lawyer-controlled law-related entity triggers Rule 1.8(a) (business transactions with clients).",
        "Rule 8.4(c) (dishonesty, fraud, deceit) applies at all times, including in an ancillary business."
       ]
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
   "title": "Forming & Ending Representation",
   "overview": [
    "This unit covers how a lawyer-client relationship begins and how it ends. It matters because most of a lawyer’s duties (confidentiality, conflicts, competence, communication) attach only once a relationship exists. So the first question on many fact patterns is: who is the client, and when did that person become one?",
    "Formation is governed by substantive law, mainly Restatement § 14, and is judged largely from the would-be client’s point of view. A relationship can form from conduct during a short consultation, even if the lawyer never agreed to take the case and no fee was paid (Morris v. Margulis). When the client is an organization, Rule 1.13 says the lawyer represents the entity, and its officers and employees are not automatically clients.",
    "Lawyers in the U.S. generally choose whom to represent, with two limits on that choice. A lawyer should not dodge a court appointment without good cause (Rule 6.2), and a lawyer must turn away matters that would violate the Rules or other law, including frivolous claims (Rule 3.1, FRCP 11) and helping with a known crime or fraud (Rule 1.2(d)).",
    "Ending the relationship runs through Rule 1.16 in a fixed order: mandatory withdrawal under (a), permissive withdrawal under (b), tribunal permission under (c), and duties to protect the client on the way out under (d). The exam trap is that having a valid ground to withdraw does not remove the need for court permission or the transition duties. Texas uses a written motion for good cause and has its own version of the rule."
   ],
   "check": {
    "status": "complete",
    "note": ""
   },
   "blocks": [
    {
     "title": "Formation · Restatement § 14",
     "explain": [
      "Lawyers choose whom to represent, and whether a relationship formed is a question of substantive law, not the Model Rules. The test is Restatement § 14. It looks at what the person seeking help communicated, and then at how the lawyer responded or failed to respond.",
      "The test has a required first step and then two alternative routes. The person must show the lawyer that they want legal services. Then either the lawyer agrees (expressly or by conduct), or the lawyer stays silent while knowing or having reason to know the person is reasonably relying on the lawyer. Section 14(2) adds a separate route: a valid court appointment."
     ],
     "items": [
      [
       "§ 14(1) · Client’s manifested intent",
       "A person manifests to a lawyer the person’s intent that the lawyer provide legal services for the person. “Manifests” means the intent is shown through words or conduct the lawyer can perceive. This step is always required, and then one of (a) or (b) must also be met."
      ],
      [
       "(a) Lawyer manifests consent",
       "The lawyer shows the person, by words or conduct, that the lawyer agrees to provide the services. The consent does not have to be a signed agreement or an express statement; conduct such as giving substantive legal advice can show it."
      ],
      [
       "(b) Lawyer fails to manifest lack of consent + reasonable reliance",
       "The lawyer never says no, and the lawyer knows or reasonably should know that the person reasonably relies on the lawyer to provide the services. This route catches the lawyer who lets a person believe they are being represented. It explains why lawyers are advised to decline clearly and promptly."
      ],
      [
       "§ 14(2) · Tribunal appointment",
       "A lawyer-client relationship also arises when a tribunal with power to do so appoints the lawyer to provide services. No consent from the lawyer is needed under this route. This is the main exception to the U.S. rule that lawyers choose their clients (see Rule 6.2)."
      ],
      [
       "What is NOT required",
       "No signed contract, no fee payment, no lengthy meeting, and no express consent from the lawyer. A relationship can exist without any of these."
      ],
      [
       "The focus",
       "The would-be client’s manifested intent and reasonable belief, viewed against the lawyer’s conduct. The slides stressed that formation can happen during the initial consultation and is judged by conduct, not by labels the lawyer puts on the meeting."
      ],
      [
       "Why formation matters",
       "Most professional duties attach once the relationship exists, so identify the client before applying any other rule."
      ],
      [
       "Practice protection",
       "Because formation can be implied, lawyers protect themselves in three ways.",
       [
        "Define the scope of the representation in writing.",
        "Send prompt non-engagement letters to people the lawyer is not representing.",
        "Use conspicuous disclaimers on the firm website."
       ]
      ]
     ],
     "tip": "The slides emphasized that formation can occur in the first consultation and from conduct. Look at what the lawyer did, not what the lawyer called it.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Morris v. Margulis",
     "explain": [
      "Morris is the course’s main formation case. It shows that a firm can form a relationship through its lawyers’ conduct even after formally declining the representation. The court summed up the idea as “acta non verba”: deeds, not words, control.",
      "The six propositions the slides list from Morris are the working checklist for formation questions. Most of them tell you what does not matter (time spent, fees, a contract, the lawyer’s consent), and the last two tell you what does: the client’s viewpoint and an evident purpose of getting legal advice."
     ],
     "items": [
      [
       "Facts",
       "Morris was a former officer of Germania. After Germania failed, Morris faced civil and criminal proceedings arising from the collapse. Bryan Cave, whose lawyers had handled Morris’s personal matters, formally declined the Germania representation, and Morris hired other counsel. Firm lawyers still met with Morris, discussed Germania, and helped prepare a Wells submission (a written submission to the regulator)."
      ],
      [
       "Issue",
       "Could those contacts create a lawyer-client relationship on the Germania matters despite the firm’s stated refusal?"
      ],
      [
       "Holding",
       "Possibly yes. There was a factual dispute about whether a relationship formed, so summary judgment was improper. The court reversed and remanded."
      ],
      [
       "Rule",
       "Formation may be implied. Fees, a retainer, how long the relationship lasted, and the lawyer’s subjective intent are not controlling."
      ],
      [
       "Reasoning",
       "Morris sought legal advice from his longtime counsel and treated the Germania discussions as confidential. If substantive legal discussions occurred with a person seeking legal advice who treats them as confidential, a relationship arises as a matter of law."
      ],
      [
       "The six formation propositions",
       "The slides list these from Morris:",
       [
        "(a) Formation need not be explicit.",
        "(b) It does not depend on the amount of time spent with the attorney, the payment of fees, or the execution of a contract.",
        "(c) It does not depend on the attorney’s consent or on the attorney being employed.",
        "(d) It can be created during the initial contact, and turns on the client’s belief that he is consulting a lawyer in that capacity and his manifested intention to seek professional legal advice.",
        "(e) It is judged from the client’s viewpoint, not the attorney’s.",
        "(f) If the client consults the attorney for the evident purpose of getting legal advice, a relationship will be found regardless of the attorney’s intent or the fact that no further relationship developed from that first consultation."
       ]
      ],
      [
       "Brief consultation rule",
       "A relationship may arise from a brief substantive consultation even when the lawyer has formally rejected the representation."
      ]
     ],
     "tip": "Cold-call point: “acta non verba.” The firm’s denial did not control; the substantive meetings and help with the Wells submission did.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Emails, Websites & Intake",
     "explain": [
      "The slides asked whether emails can form a lawyer-client relationship. The notes answer by applying the same § 14 test to online contact: look at whether the lawyer invited the contact, how the lawyer responded, whether legal advice was given, and whether the person reasonably relied on it.",
      "The point is that the medium does not change the test. An email or website exchange is analyzed like any other consultation."
     ],
     "items": [
      [
       "Apply § 14 online",
       "Invitation, response, legal advice, and reasonable reliance all matter. A lawyer who invites inquiries and answers with substantive advice is closer to forming a relationship than one who receives an unsolicited message and does nothing."
      ],
      [
       "Unsolicited email",
       "Opening an unsolicited email alone should not decide formation. The lawyer’s manifestations and follow-up remain the critical facts."
      ],
      [
       "Website disclaimers",
       "Conspicuous website disclaimers are one of the listed ways to protect against an implied relationship."
      ],
      [
       "Class practice question (intake questionnaire)",
       "A lawyer emailed a prospective client (PC) an intake questionnaire, and the PC returned it with information about a dispute with his employer, Valiant. Before the meeting, Valiant asked the lawyer to handle all its legal matters. The lawyer dismissed the PC on arrival and then represented Valiant against him. The slide’s answer was “Unable to answer,” which reflects that formation under § 14 and Morris turns on facts (what the lawyer manifested, whether reliance was reasonable) that the question did not supply."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Organizational Clients · Rule 1.13",
     "explain": [
      "When a lawyer is hired by a company or other organization, the client is the organization itself. An organization can act only through people, so the lawyer takes direction from its authorized constituents, but those people are not the lawyer’s clients just because they speak for the entity.",
      "A lawyer can also represent a constituent individually (dual representation), but then that person is a full client. In re Robbins shows the consequence: once the individual became a client, the lawyer owed him all the duties in the Rules, including conflict and communication duties."
     ],
     "items": [
      [
       "Rule 1.13(a)",
       "A lawyer employed or retained by an organization represents the organization acting through its duly authorized constituents."
      ],
      [
       "Cmt. [1] · Constituents",
       "An organizational client is a legal entity that cannot act except through its officers, directors, employees, shareholders, and other constituents. For corporations, those are the officers, directors, employees, and shareholders. The Comment’s duties apply equally to unincorporated associations, where “other constituents” means the equivalent positions."
      ],
      [
       "Who counts as a “duly authorized constituent”",
       "Officers and higher-ups, but also lower-ranked employees when they act for the organization."
      ],
      [
       "Constituents are not automatically clients",
       "Dual representation is possible, but formation, conflicts, consent, and communication must each be handled expressly for the individual."
      ],
      [
       "In re Robbins",
       "Once Day became Robbins’s client, Robbins had to follow the Rules of Professional Conduct as to Day. Robbins violated:",
       [
        "Rule 1.7(b)(2): his representation of Day was adversely affected by his representation of Persuad (simultaneous representation).",
        "Rule 1.7(b)(4): his own interest in Chesapeake created a conflict affecting Day.",
        "Rule 1.4(a): he failed to keep Day reasonably informed."
       ]
      ],
      [
       "Order of analysis",
       "Identify the client first, then test conflicts and communication duties client by client."
      ]
     ],
     "tip": "Cold-call point from Robbins: identify the client first, then run the conflicts (1.7) and communication (1.4) analysis separately for each client.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Must Accept? · Rule 6.2",
     "explain": [
      "In the U.S. there is no general duty to accept every paying client or unpopular cause. The class contrasted this with the English cab-rank rule, under which a barrister must take any brief in a court where he practices regardless of the client, the case, or his opinion of the client.",
      "The exception is a court appointment. A valid appointment creates the relationship under Restatement § 14(2), and Rule 6.2 says a lawyer should not try to avoid one except for good cause. The rule lists three examples of good cause."
     ],
     "items": [
      [
       "Cab-rank rule (contrast)",
       "A barrister must accept any brief to appear before a court in which he professes to practice, irrespective of (1) the party he is instructed for, (2) the nature of the case, and (3) any belief or opinion he has formed about that person’s character, cause, conduct, guilt, or innocence. In the U.S. a lawyer may accept or decline."
      ],
      [
       "Default rule",
       "No general U.S. duty to accept every paying client or unpopular cause."
      ],
      [
       "Rule 6.2",
       "A lawyer shall not seek to avoid appointment by a tribunal to represent a person except for good cause, such as:",
       [
        "(a) representing the client is likely to result in a violation of the Rules of Professional Conduct or other law;",
        "(b) representing the client is likely to result in an unreasonable financial burden on the lawyer; or",
        "(c) the client or the cause is so repugnant to the lawyer that it is likely to impair the client-lawyer relationship or the lawyer’s ability to represent the client."
       ]
      ],
      [
       "6.2(c) · Repugnance",
       "Personal dislike is not enough. The repugnance must be likely to cause actual impairment of the relationship or the representation."
      ],
      [
       "Cunningham v. Sommerville · financial burden",
       "Held that appointing an in-house business or government lawyer whose employer forbids the outside practice of law would impose an unreasonable financial burden on that lawyer under 6.2(b)."
      ],
      [
       "Cunningham · competence analysis",
       "Competent representation requires the legal knowledge, skill, thoroughness, and preparation reasonably necessary for the representation. A lawyer unfamiliar with an area should be given enough time to study and perhaps have knowledgeable, experienced co-counsel appointed. Unfamiliar subject matter alone is not incompetence if study or co-counsel can cure the gap."
      ],
      [
       "Rule 1.2(b) · No endorsement",
       "Representing a client, including by appointment, does not endorse the client’s political, economic, social, or moral views or activities. This is why an unpopular client or cause is not, by itself, a reason to refuse."
      ]
     ],
     "tip": "The slides emphasized that dislike of the client is not good cause; tie any repugnance argument to actual impairment under 6.2(c). Unfamiliar subject matter is also not good cause if study or co-counsel can fix it.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Must Reject · Rules 1.16(a), 3.1, 1.2(d)",
     "explain": [
      "Some matters a lawyer must turn down. Rule 1.16(a) applies at intake as well as during the representation: a lawyer may not accept a matter the lawyer could not continue. Rules 3.1 and 1.2(d) supply two of the most common reasons a matter cannot be taken.",
      "Rule 3.1 bars frivolous claims and defenses, but its standard is low: there must be some good-faith basis in law and fact, and a good-faith argument to change the law counts. Rule 1.2(d) bars counseling or assisting a client in conduct the lawyer knows is criminal or fraudulent, while still allowing the lawyer to explain legal consequences."
     ],
     "items": [
      [
       "Rule 1.16(a) at intake",
       "The lawyer must inquire into and assess each representation before accepting it. If representing the client would violate the Rules or other law, if the lawyer’s condition materially impairs the lawyer, or if the client seeks to use the lawyer for a crime or fraud, the lawyer must decline (see the 1.16(a) block)."
      ],
      [
       "Rule 3.1 · Meritorious claims",
       "A lawyer shall not bring or defend a proceeding, or assert or contest an issue in it, unless there is a basis in law and fact that is not frivolous. A good-faith argument for extending, modifying, or reversing existing law is a non-frivolous basis."
      ],
      [
       "3.1 · Criminal-defense carve-out",
       "A lawyer for a criminal defendant, or for a respondent in a proceeding that could result in incarceration, may defend so as to require that every element of the case be proven, even without an affirmative defense."
      ],
      [
       "Cmt. [1]",
       "The advocate must use legal procedure for the client’s fullest benefit but must not abuse it. Because the law is often unclear and changes, the scope of proper advocacy accounts for the law’s ambiguities and potential for change."
      ],
      [
       "Cmt. [2] · What is not frivolous",
       "An action is not frivolous merely because:",
       [
        "the facts have not first been fully substantiated;",
        "the lawyer expects to develop vital evidence only through discovery; or",
        "the lawyer believes the client’s position will ultimately lose."
       ]
      ],
      [
       "Cmt. [2] · What is frivolous",
       "The lawyer must learn the facts and the law and determine that good-faith arguments exist. The action is frivolous if the lawyer cannot make a good-faith argument on the merits or a good-faith argument for extending, modifying, or reversing existing law."
      ],
      [
       "Cmt. [3]",
       "Rule 3.1 gives way to federal or state constitutional law that entitles a criminal defendant to counsel’s help presenting a claim or contention the rule would otherwise bar."
      ],
      [
       "Rule 1.2(d) · Client crime or fraud",
       "A lawyer shall not counsel a client to engage in, or assist a client in, conduct the lawyer knows is criminal or fraudulent. The lawyer may still discuss the legal consequences of any proposed course of conduct and may help the client make a good-faith effort to determine the validity, scope, meaning, or application of the law."
      ],
      [
       "Money-laundering hypo",
       "Forming a Delaware corporation, or a series of them, is ordinarily lawful. It becomes unlawful when used knowingly to conceal criminal proceeds. 18 U.S.C. § 1956 makes it a felony to conceal or disguise the proceeds of crime, including their nature, source, ownership, location, or control. Answer: reject the representation, because Rules 1.16(a) and 1.2(d) incorporate the criminal-law limit.",
       [
        "Placement: dirty money is placed into the financial system.",
        "Layering: the funds are moved around to disguise their origin.",
        "Integration (extraction): the money is reintroduced as legitimate wealth."
       ]
      ]
     ],
     "tip": "A claim is not frivolous just because the lawyer thinks it will lose or needs discovery to prove it. Frivolous means no good-faith argument at all.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "FRCP 11 · Certification & Sanctions",
     "explain": [
      "Federal Rule of Civil Procedure (FRCP) 11 is the litigation rule behind Rule 3.1. Every time a lawyer signs, files, submits, or later argues a paper to a federal court, the lawyer certifies four things, each based on an inquiry reasonable under the circumstances.",
      "Rule 11 connects to withdrawal in Whiting v. Lacara: a client who insists on tactics that would violate Rule 11 puts the lawyer in a position where following instructions risks sanctions."
     ],
     "items": [
      [
       "Rule 11(b) · The certification",
       "By presenting a pleading, written motion, or other paper (by signing, filing, submitting, or later advocating it), an attorney or unrepresented party certifies, to the best of the person’s knowledge, information, and belief formed after a reasonable inquiry, that all four of the following are true."
      ],
      [
       "(b)(1) No improper purpose",
       "The paper is not presented to harass, cause unnecessary delay, or needlessly increase the cost of litigation."
      ],
      [
       "(b)(2) Legal contentions warranted",
       "Claims, defenses, and legal contentions are warranted by existing law or by a nonfrivolous argument for extending, modifying, or reversing existing law or establishing new law."
      ],
      [
       "(b)(3) Factual support",
       "Factual contentions have evidentiary support or, if specifically identified as such, will likely have support after a reasonable opportunity for further investigation or discovery."
      ],
      [
       "(b)(4) Denials warranted",
       "Denials of factual contentions are warranted on the evidence or, if specifically identified as such, are reasonably based on belief or a lack of information."
      ],
      [
       "Rule 11(c) · Sanctions",
       "After notice and a reasonable opportunity to respond, if the court finds Rule 11(b) was violated, it may impose an appropriate sanction on any attorney, law firm, or party that violated the rule or is responsible for the violation."
      ],
      [
       "Firm responsibility",
       "Absent exceptional circumstances, a law firm must be held jointly responsible for a violation committed by its partner, associate, or employee."
      ]
     ],
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Ending the Relationship · Rule 1.16(a) Mandatory",
     "explain": [
      "Rule 1.16 governs both declining a new matter and ending an existing one. The relationship is asymmetric: a client can generally fire the lawyer at any time, but a lawyer cannot always leave just because leaving would be convenient.",
      "Analyze termination in order: mandatory withdrawal under (a), then permissive withdrawal under (b), then whether a tribunal must approve under (c), then the client-protection duties under (d). Under (a), if any one of the four grounds applies, the lawyer must decline or withdraw, subject to a court order under (c)."
     ],
     "items": [
      [
       "Duty to assess",
       "A lawyer shall inquire into and assess the facts and circumstances of each representation to determine whether the lawyer may accept or continue it. Except as stated in (c), the lawyer shall not represent the client, or shall withdraw, if any ground below applies."
      ],
      [
       "(1) Violation of Rules or law",
       "The representation will result in a violation of the Rules of Professional Conduct or other law."
      ],
      [
       "(2) Lawyer’s impairment",
       "The lawyer’s physical or mental condition materially impairs the lawyer’s ability to represent the client."
      ],
      [
       "(3) Discharge",
       "The lawyer is discharged. Because the client can end the relationship, the lawyer must stop once fired (still subject to (c) and (d))."
      ],
      [
       "(4) Client crime or fraud",
       "The client or prospective client seeks to use, or persists in using, the lawyer’s services to commit or further a crime or fraud, despite the lawyer having discussed with the client the limits on what the lawyer can do. That discussion is required by Rule 1.2(d) and Rule 1.4(a)(5) (consulting with a client who expects assistance the Rules do not allow). This is the updated version of (a)(4), and it covers prospective clients, which makes it an intake rule too."
      ]
     ],
     "tip": "Rule 1.16 covers intake and termination. A ground that would force withdrawal also forces the lawyer to decline the matter at the start.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.16(b) · Permissive Withdrawal",
     "explain": [
      "Rule 1.16(b) lists situations where the lawyer may withdraw but is not required to. Any one ground is enough. Ground (1) is the simplest: if leaving will not materially harm the client’s interests, the lawyer can leave for any reason.",
      "The other grounds let a lawyer leave even when withdrawal would hurt the client, because of something the client did or because continuing would be unfair to the lawyer. All permissive withdrawals remain subject to tribunal permission under (c) and the transition duties under (d)."
     ],
     "items": [
      [
       "(1) No material adverse effect",
       "Withdrawal can be accomplished without material adverse effect on the client’s interests."
      ],
      [
       "(2) Ongoing criminal or fraudulent conduct",
       "The client persists in a course of action involving the lawyer’s services that the lawyer reasonably believes is criminal or fraudulent. Compare (a)(4): when the client persists in using the lawyer to commit crime or fraud despite the 1.2(d) discussion, withdrawal is mandatory."
      ],
      [
       "(3) Past crime or fraud",
       "The client has used the lawyer’s services to perpetrate a crime or fraud."
      ],
      [
       "(4) Repugnance or fundamental disagreement",
       "The client insists on action the lawyer considers repugnant or with which the lawyer fundamentally disagrees."
      ],
      [
       "(5) Client fails an obligation",
       "The client substantially fails to fulfill an obligation to the lawyer regarding the lawyer’s services (such as paying the fee) and has been given reasonable warning that the lawyer will withdraw unless it is fulfilled. The warning is required."
      ],
      [
       "(6) Financial burden or unreasonable difficulty",
       "The representation will result in an unreasonable financial burden on the lawyer, or the client has made it unreasonably difficult."
      ],
      [
       "(7) Other good cause",
       "Any other good cause for withdrawal."
      ]
     ],
     "tip": "Nonpayment is handled through (b)(5): warn the client, then withdraw through proper procedure. It does not permit the lawyer to stop working silently (see Rule 1.3).",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.16(c)–(d) · Tribunal Control & Protecting the Client",
     "explain": [
      "Even with a valid ground under (a) or (b), the lawyer may need a court’s permission to leave a pending case, and a court can order the lawyer to stay. Paragraph (d) then requires the lawyer to take reasonable steps so the client is not harmed by the departure.",
      "These two paragraphs apply every time. They are the most common exam trap in this area."
     ],
     "items": [
      [
       "1.16(c) · Tribunal permission",
       "A lawyer must comply with applicable law requiring notice to or permission of a tribunal when ending a representation. When a tribunal orders the lawyer to continue, the lawyer shall continue even if good cause to withdraw exists."
      ],
      [
       "1.16(d) · Protect the client",
       "On termination, the lawyer shall take steps, to the extent reasonably practicable, to protect the client’s interests, such as:",
       [
        "giving reasonable notice to the client;",
        "allowing time for the client to hire other counsel;",
        "surrendering papers and property to which the client is entitled; and",
        "refunding any advance payment of fees or expenses not yet earned or incurred."
       ]
      ],
      [
       "Retaining lien",
       "The lawyer may keep papers relating to the client only to the extent other law permits."
      ]
     ],
     "tip": "Exam trap: a ground under (a) or (b) does not eliminate (c) court approval or (d) transition duties.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Texas Withdrawal · TRCP 10 & Texas Rule 1.16",
     "explain": [
      "Texas requires a lawyer to withdraw by written motion showing good cause. Because the procedural rule does not define good cause, Texas courts look to the Texas Disciplinary Rules, and a court should confirm the lawyer has complied with them before allowing withdrawal.",
      "The Texas withdrawal rule tracks the Model Rule with a few differences in wording that the slides highlighted."
     ],
     "items": [
      [
       "Harrison v. Harrison (Tex. App.–Houston [14th Dist.])",
       "An attorney may withdraw only on written motion for good cause shown under Texas Rule of Civil Procedure (TRCP) 10. TRCP 10 does not define good cause, so courts look to the Texas Disciplinary Rules (the withdrawal rule cited there as Rule 1.15). Before allowing withdrawal, the court should see that the attorney has complied with the disciplinary rules (Villegas v. Carter)."
      ],
      [
       "Texas mandatory grounds",
       "A lawyer shall decline or withdraw if:",
       [
        "the representation will violate Rule 3.08 (lawyer as witness), other rules, or other law;",
        "the lawyer’s physical, mental, or psychological condition materially impairs the lawyer’s fitness to represent the client; or",
        "the lawyer is discharged, with or without good cause."
       ]
      ],
      [
       "Texas permissive framing",
       "Texas (b) is phrased as a prohibition: a lawyer shall not withdraw unless one of the listed grounds exists. (b)(2) covers a course of action the lawyer reasonably believes may be criminal or fraudulent."
      ],
      [
       "Texas (b)(4)",
       "Adds “imprudent”: the client insists on an objective the lawyer considers repugnant or imprudent, or with which the lawyer fundamentally disagrees."
      ],
      [
       "Texas (b)(5)",
       "Expressly includes failing to pay the lawyer’s fee as agreed, after reasonable warning that the lawyer will withdraw."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Whiting v. Lacara",
     "explain": [
      "Whiting shows when a court must let a lawyer out of a case even close to trial. Courts have broad discretion to deny withdrawal to protect their dockets, but they cannot force a lawyer to stay in an impossible conflict.",
      "The conflict here came from the client: he demanded tactics that would expose the lawyer to Rule 11 sanctions and threatened a malpractice suit if the lawyer refused."
     ],
     "items": [
      [
       "Facts",
       "Whiting, a former police officer, was a civil-rights plaintiff and Lacara was his third attorney. Whiting demanded that Lacara pursue claims already dismissed, call harmful witnesses, seek publicity, and use a client-drafted Rule 68 offer. Lacara moved to withdraw shortly before trial, and the district court denied the motions."
      ],
      [
       "Standard of review",
       "Denial of withdrawal is reviewed for abuse of discretion, with substantial deference to the trial court’s docket management."
      ],
      [
       "Local Rule 1.4 (S.D.N.Y. & E.D.N.Y.)",
       "An attorney of record may be relieved or displaced only by court order, granted only on a showing by affidavit or otherwise of satisfactory reasons for withdrawal and the posture of the case, including its position on the calendar."
      ],
      [
       "Papers alone were insufficient",
       "The fee dispute lacked detail, Whiting disputed the misconduct claims, and Lacara knew he was taking on a difficult client."
      ],
      [
       "Oral argument changed the result",
       "Whiting stated he could dictate witnesses and arguments, including dismissed claims, planned to use the trial to publicize alleged police corruption beyond the remaining claims, and threatened malpractice if Lacara did not litigate as instructed."
      ],
      [
       "Holding · Functional conflict",
       "Withdrawal was required, and the Second Circuit reversed and ordered it. Following Whiting risked Rule 11 sanctions; refusing him invited an actively pursued malpractice action. The court’s docket interests could not require counsel to stay in that conflict."
      ],
      [
       "Exit terms",
       "Lacara waived outstanding fees and agreed to turn over all pertinent files, which satisfied the 1.16(d)-type protections for the client."
      ]
     ],
     "tip": "Cold-call point: the result turned on Whiting’s own answers at oral argument, not on Lacara’s papers. A client who both dictates strategy and threatens to sue if it is not followed creates the functional conflict.",
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "Competence & Liability",
   "overview": [
    "This unit covers the duty to do the work well and the consequences when a lawyer does not. Three Model Rules set the baseline: Rule 1.1 (was the work competent), Rule 1.3 (was it pursued promptly), and Rule 1.4 (was the client kept informed). Rules 5.1 and 5.3 make competence a firm-wide responsibility for partners and supervisors.",
    "Poor work can be addressed through three separate systems. Discipline protects the public and needs no client harm. Malpractice is a civil suit for money and requires duty, breach, causation, and injury. Ineffective assistance of counsel is a Sixth Amendment claim by a criminal defendant under Strickland, and the remedy is a new trial or sentencing. The same conduct can trigger all three, but the elements differ.",
    "The malpractice part covers the Restatement rules on the standard of care, firm liability, duties to nonclients and prospective clients, the case-within-a-case causation requirement, and the special rule for convicted criminal defendants.",
    "The unit ends with a distinction tested often: a lawyer may limit the scope of the work with informed consent (Rule 1.2(c), Lerner v. Laufer), but may not prospectively limit malpractice liability unless the client has independent counsel (Rule 1.8(h))."
   ],
   "check": {
    "status": "thin",
    "note": "One block thin: Rule 1.18 (prospective clients) is named in the Day 4 notes and outline but its content is not set out in the Class 4 slides, Day 4 notes, or outline section IV."
   },
   "blocks": [
    {
     "title": "Rule 1.1 · Competence",
     "explain": [
      "Rule 1.1 requires competent representation, defined as the legal knowledge, skill, thoroughness, and preparation reasonably necessary for the matter. Competence is measured against what the particular matter required. It is not limited to specialists, and a new lawyer can meet it.",
      "The comments give factors for judging competence and several ways a lawyer without experience can become competent: study, association with an experienced lawyer, or reasonable preparation. They also allow limited help in an emergency. The measure is the lawyer’s process when the work was done, not the outcome."
     ],
     "items": [
      [
       "Rule 1.1",
       "A lawyer shall provide competent representation to a client. Competent representation requires the legal knowledge, skill, thoroughness, and preparation reasonably necessary for the representation."
      ],
      [
       "Cmt. [1] · Factors",
       "In deciding whether a lawyer has the needed knowledge and skill, relevant factors include:",
       [
        "the relative complexity and specialized nature of the matter;",
        "the lawyer’s general experience;",
        "the lawyer’s training and experience in the field in question;",
        "the preparation and study the lawyer is able to give the matter; and",
        "whether it is feasible to refer the matter to, or associate or consult with, a lawyer of established competence in the field."
       ]
      ],
      [
       "General practitioner level",
       "In many matters the required proficiency is that of a general practitioner. Expertise in a particular field is required only in some circumstances, where the matter’s complexity or stakes demand it."
      ],
      [
       "Cmt. [2] · New lawyers and novel fields",
       "A lawyer does not need special training or prior experience to handle an unfamiliar type of problem, and a newly admitted lawyer can be as competent as a long-time practitioner. Skills such as analyzing precedent, evaluating evidence, and legal drafting apply to every legal problem, and the most basic skill is identifying what kinds of legal problems a situation involves. A lawyer can become competent in a new field through necessary study or by associating with a lawyer of established competence."
      ],
      [
       "Cmt. [3] · Emergency exception",
       "In an emergency, a lawyer without the ordinary skill may give advice or assistance when referral to, consultation with, or association with another lawyer would be impractical. Even then, the help should be limited to what is reasonably necessary, because ill-considered action in an emergency can hurt the client."
      ],
      [
       "Cmt. [4] · Reasonable preparation",
       "A lawyer may accept a matter if the needed competence can be achieved through reasonable preparation. This also applies to a lawyer appointed to represent an unrepresented person (see Rule 6.2)."
      ],
      [
       "Technology competence",
       "Keep abreast of the benefits and risks of relevant technology, and use appropriate safeguards and training."
      ],
      [
       "One incident is enough",
       "A single incident may support discipline, and actual client harm is not required."
      ]
     ],
     "tip": "Exam trap: a bad outcome alone does not prove incompetence; ask whether the lawyer’s process was reasonable when undertaken. Slide hypo: a family-law specialist who goes to the jail at night to seek bail for a client, because no referral or consultation was practical, fits the emergency exception even though the effort failed.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.3 · Diligence",
     "explain": [
      "Rule 1.3 requires reasonable diligence and promptness. Where Rule 1.1 asks whether the lawyer knew how to do the work, Rule 1.3 asks whether the lawyer did it. Neglect, procrastination, and letting a matter sit are the classic violations.",
      "A fee dispute does not excuse inaction. If the client has not paid, the lawyer should communicate with the client and, if needed, use the Rule 1.16 withdrawal procedures, not simply stop working."
     ],
     "items": [
      [
       "Rule 1.3",
       "A lawyer shall act with reasonable diligence and promptness in representing a client."
      ],
      [
       "Neglect and abandonment",
       "Procrastination and inaction are the classic violations. A matter may not be allowed to go dormant."
      ],
      [
       "Workload control",
       "A lawyer must control the workload so each matter receives competent attention."
      ],
      [
       "Nonpayment",
       "A payment dispute does not authorize silent inaction. Address nonpayment through communication with the client and the Rule 1.16 procedures (for example, warning under 1.16(b)(5) and then withdrawing properly)."
      ]
     ],
     "tip": "Slide hypo (inventor’s patent): the lawyer stopped work for six months because bills went unpaid, though the client never received them, and only resumed when paid. Under the notes, nonpayment does not permit silent inaction, and discipline does not require client harm, so the fact that no competitor filed first does not excuse the delay.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.4 · Communication",
     "explain": [
      "Rule 1.4 requires the lawyer to keep the client informed enough to take part in the representation in a meaningful way. It lists specific duties in (a) and a general duty to explain in (b).",
      "The three core rules fit together: Rule 1.1 asks whether the work was competent, Rule 1.3 whether it was pursued, and Rule 1.4 whether the client was kept meaningfully involved."
     ],
     "items": [
      [
       "(a)(1) Informed-consent decisions",
       "Promptly inform the client of any decision or circumstance for which the Rules require the client’s informed consent (as defined in Rule 1.0(e))."
      ],
      [
       "(a)(2) Consult on means",
       "Reasonably consult with the client about the means used to accomplish the client’s objectives."
      ],
      [
       "(a)(3) Status",
       "Keep the client reasonably informed about the status of the matter."
      ],
      [
       "(a)(4) Requests for information",
       "Promptly comply with the client’s reasonable requests for information."
      ],
      [
       "(a)(5) Limits on the lawyer",
       "Consult with the client about any relevant limitation on the lawyer’s conduct when the lawyer knows the client expects help the Rules or other law do not permit. This is the discussion Rule 1.16(a)(4) refers to before mandatory withdrawal for client crime or fraud."
      ],
      [
       "(b) Explain",
       "Explain a matter to the extent reasonably necessary to permit the client to make informed decisions about the representation."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Competence as a Firm Obligation · Rules 5.1 & 5.3",
     "explain": [
      "Rules 5.1 and 5.3 make firm leaders and supervisors responsible for building systems and supervising others. Rule 5.1 covers other lawyers; Rule 5.3 applies the same three-part structure to nonlawyer assistants.",
      "The structure is: (a) partners and managers must put firm-wide measures in place; (b) direct supervisors must make reasonable efforts as to the people they supervise; and (c) a lawyer is personally responsible for someone else’s violation if the lawyer ordered or knowingly ratified it, or was a manager or supervisor who knew in time to fix it and did not."
     ],
     "items": [
      [
       "5.1(a) · Partners and managers",
       "A partner, or a lawyer with comparable managerial authority, shall make reasonable efforts to ensure the firm has measures in effect giving reasonable assurance that all firm lawyers conform to the Rules."
      ],
      [
       "5.1(b) · Direct supervisors",
       "A lawyer with direct supervisory authority over another lawyer shall make reasonable efforts to ensure that lawyer conforms to the Rules."
      ],
      [
       "5.1(c) · Responsibility for another’s violation",
       "A lawyer is responsible for another lawyer’s violation if:",
       [
        "(1) the lawyer orders the conduct or, knowing of the specific conduct, ratifies it; or",
        "(2) the lawyer is a partner, comparable manager, or direct supervisor, knows of the conduct when its consequences can still be avoided or mitigated, and fails to take reasonable remedial action."
       ]
      ],
      [
       "Rule 5.3 · Nonlawyer assistance",
       "Same structure for nonlawyers employed, retained by, or associated with a lawyer:",
       [
        "(a) managers must have measures giving reasonable assurance the nonlawyer’s conduct is compatible with the lawyer’s professional obligations;",
        "(b) a direct supervisor must make reasonable efforts to the same end;",
        "(c) a lawyer is responsible for a nonlawyer’s conduct that would violate the Rules if done by a lawyer, on the same ordered, ratified, or known-and-unremedied terms as 5.1(c)."
       ]
      ],
      [
       "Reasonable measures",
       "Docket and deadline controls, conflict checks, file review, training, escalation paths, technology and security protocols, and meaningful supervision."
      ],
      [
       "Sink-or-swim associate hypo",
       "A partner assigned a new associate who had only done trusts and estates work, had never seen a trial, and had not taken evidence or trial advocacy, to try a case the next week, and refused to seek a continuance. Her questions drew sustained objections and key evidence was excluded. This violates Rules 1.1 and 5.1 (no reasonable efforts at measures assuring competence), and the partner is subject to discipline whether or not her performance caused the verdict."
      ]
     ],
     "tip": "Discipline under 1.1 and 5.1 does not require proof that the poor performance caused the loss. The slide labeled “Prospective Clients” in the notes reproduces Rule 5.3(c), not a prospective-client rule.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Three Accountability Systems",
     "explain": [
      "The same poor performance can lead to three different proceedings. Each has its own purpose, decision maker, elements, and remedy, so a question asking about one should be answered with that system’s test.",
      "A Rule violation is not automatically malpractice, and a losing result is not automatically ineffective assistance."
     ],
     "items": [
      [
       "Discipline",
       "Purpose: protect the public and the profession. Decision maker: the state disciplinary authority. A Rule violation may be sanctioned without damages or client injury."
      ],
      [
       "Malpractice",
       "Purpose: civil compensation under state law. Decision maker: a court in a civil action. Elements: duty, breach of the standard of care, legal causation, and injury."
      ],
      [
       "Ineffective assistance",
       "Purpose: protect a criminal defendant’s Sixth Amendment right to counsel. Test: whether counsel’s deficient performance prejudiced the defense (Strickland). Remedy: a new trial or sentencing, not money."
      ]
     ],
     "tip": "Exam trap: the same conduct can trigger all three, but the elements, purposes, decision makers, and remedies differ.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Malpractice · Elements & Standard of Care",
     "explain": [
      "Legal malpractice is professional negligence. Restatement § 48 sets out the elements and § 52 sets the standard of care: what lawyers normally do in similar circumstances. A lawyer who claims special skill is held to that higher level.",
      "A violation of the Rules of Professional Conduct does not by itself establish malpractice, though it can be used as evidence. A firm can also be liable for its lawyers’ wrongs under § 58."
     ],
     "items": [
      [
       "Restatement § 48 · Professional negligence",
       "A lawyer is civilly liable for professional negligence to a person to whom the lawyer owes a duty of care, if the lawyer fails to exercise care and that failure is a legal cause of injury. All elements are required: duty, failure to exercise care (breach), legal causation, and injury."
      ],
      [
       "Restatement § 52 · Standard of care",
       "The competence and diligence normally exercised by lawyers in similar circumstances."
      ],
      [
       "Benchmark",
       "Local professional practice ordinarily supplies the benchmark; some federal fields apply a national standard."
      ],
      [
       "What raises the standard",
       "A specialist, or a lawyer who claims superior competence, is held to the higher standard the lawyer professes."
      ],
      [
       "Rule violations",
       "Violating a Rule of Professional Conduct is not automatically malpractice. It creates no private cause of action and no presumption of breach, but it may be evidence of a breach."
      ],
      [
       "Restatement § 58(1) · Firm liability",
       "A law firm is subject to civil liability for injury legally caused by any wrongful act or omission of a principal or employee of the firm who was acting in the ordinary course of the firm’s business or with actual or apparent authority."
      ]
     ],
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Duties to Nonclients & Prospective Clients",
     "explain": [
      "Malpractice duty usually runs to clients, but Restatement § 51 recognizes limited duties to nonclients in three situations. Each involves a nonclient the lawyer’s work was meant to reach or protect.",
      "Restatement § 15 covers prospective and rejected clients. Even if no relationship forms, a lawyer who provides some legal services must use reasonable care in doing so, which is why the way a lawyer declines a matter matters."
     ],
     "items": [
      [
       "§ 51 · Invited reliance",
       "The lawyer, or the client with the lawyer’s acquiescence, invites the nonclient to rely on the lawyer’s opinion, the nonclient relies reasonably, and the nonclient is not too remote."
      ],
      [
       "§ 51 · Intended beneficiary",
       "The lawyer knows the client intends, as one of the primary objectives of the representation, to benefit the nonclient, and recognizing a duty would not impair the lawyer’s obligations to the client."
      ],
      [
       "§ 51 · Fiduciary client",
       "The client is a trustee, guardian, executor, or fiduciary acting for the nonclient; the lawyer’s action is necessary to prevent a breach of duty to the nonclient; and that breach is a crime or fraud or the lawyer has assisted in it."
      ],
      [
       "§ 15 · Prospective and rejected clients",
       "Prospective clients owed a duty of care include rejected clients. Even where no full relationship forms, the lawyer must use reasonable care to the extent the lawyer provides legal services."
      ],
      [
       "Rule 1.18",
       "Supplies the professional-conduct duties to prospective clients that parallel § 15. The unit sources name the rule without setting out its terms."
      ],
      [
       "Non-engagement practice",
       "When considering a matter and planning to give the person an answer, avoid unreasonable delay in answering. Watch for:",
       [
        "upcoming court hearings;",
        "upcoming deadlines; and",
        "statutes of limitations (SOLs).",
        "Give clear written notice of non-engagement, identify any known imminent deadline, and make referrals carefully."
       ]
      ]
     ],
     "check": {
      "status": "thin",
      "note": "Rule 1.18’s content is not set out in the Class 4 slides, Day 4 notes, or outline section IV; they only state that it supplies the professional-conduct duties to prospective clients."
     }
    },
    {
     "title": "Malpractice · Causation, Criminal Clients & Settlements",
     "explain": [
      "To prove causation, a malpractice plaintiff must show the result would have been different without the lawyer’s mistake. In litigation malpractice this means trying a “case within a case”: comparing the case as litigated with the hypothetical case that competent representation would have produced.",
      "Convicted criminal defendants face an extra hurdle in most jurisdictions: proof of actual innocence. The Restatement does not require it. Separately, accepting a settlement does not bar a later malpractice claim about how the lawyer handled it."
     ],
     "items": [
      [
       "Case within a case · Rogers v. Zanetti (Tex. 2017)",
       "Proximate cause requires cause in fact: proof that, but for the attorney’s mistake, the harm would not have occurred. Every trial-malpractice case compares two cases: the one litigated, whose result is fixed, and the hypothetical mistake-free one."
      ],
      [
       "Omitted evidence",
       "When the mistake is omitted evidence, the hypothetical case must include that evidence, and the plaintiff must show the result more likely than not would have been different because of it."
      ],
      [
       "Restatement § 53(d) · Convicted criminal defendants",
       "The defendant must prove that the lawyer failed to act properly and that, but for that failure, the result would have been different, for example because a double-jeopardy defense would have prevented conviction."
      ],
      [
       "Majority rule",
       "Most jurisdictions addressing the issue apply stricter rules: a convicted defendant usually cannot sue defense counsel for malpractice without first proving actual innocence and overturning the conviction."
      ],
      [
       "Restatement approach",
       "Proof that the defendant was in fact innocent is not necessary."
      ],
      [
       "Settlements · Ziegelheim v. Apollo",
       "Accepting a settlement does not automatically bar malpractice. Settlement advice, investigation, drafting, and communication remain subject to ordinary reasonable care."
      ],
      [
       "No guarantee",
       "Lawyers need not be perfect and do not guarantee an optimal result. Reasonable strategy and advice that produce a bad outcome are not negligence."
      ]
     ],
     "tip": "On a convicted client’s malpractice claim, know both answers: majority rule requires actual innocence; the Restatement § 53(d) does not.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Limiting Liability vs. Limiting Scope",
     "explain": [
      "Two different things are being limited here. Rule 1.8(h) restricts agreements that limit the lawyer’s malpractice liability, because a client cannot fairly bargain away claims against the lawyer while relying on that lawyer for advice. Rule 1.2(c) allows the lawyer and client to narrow the tasks the lawyer will perform.",
      "Narrowing scope is permitted with reasonableness and informed consent, and it changes what the lawyer must do. It does not lower the quality required for the tasks the lawyer does take on."
     ],
     "items": [
      [
       "Rule 1.8(h)(1) · Prospective limits",
       "A lawyer shall not make an agreement prospectively limiting the lawyer’s liability for malpractice unless the client is independently represented in making the agreement."
      ],
      [
       "Rule 1.8(h)(2) · Settling a malpractice claim",
       "A lawyer shall not settle a claim or potential claim for malpractice with an unrepresented client or former client unless that person is:",
       [
        "advised in writing of the desirability of seeking independent legal counsel; and",
        "given a reasonable opportunity to seek that advice."
       ]
      ],
      [
       "Rule 1.2(c) · Limited scope",
       "A lawyer may limit the scope of the representation if both conditions are met:",
       [
        "the limitation is reasonable under the circumstances; and",
        "the client gives informed consent."
       ]
      ],
      [
       "Scope does not excuse incompetence",
       "A limited scope narrows the tasks undertaken; it does not excuse incompetence within those tasks."
      ],
      [
       "One tailored agreement",
       "Use one precise, tailored engagement agreement. Conflicting boilerplate expands the client’s expectations and undermines informed consent."
      ],
      [
       "No-suit promise",
       "A promise not to sue the lawyer in an engagement letter violates Rule 1.8(h) unless the client is independently represented."
      ]
     ],
     "tip": "Trap: a clause saying the client will not sue is a 1.8(h) liability limit, not a 1.2(c) scope limit.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Lerner v. Laufer",
     "explain": [
      "Lerner applies Rule 1.2(c). A precise, informed, and reasonable limited-scope agreement can define the standard of care in a later malpractice case, so the lawyer is judged only against the work agreed to. The same agreement cannot waive malpractice liability in advance.",
      "The slides compared this to assumption of the risk in tort law: the client knowingly accepts the risk of narrower help, much as a tort plaintiff who voluntarily accepts a risk cannot recover for it."
     ],
     "items": [
      [
       "Facts",
       "After mediation produced a property-settlement agreement, Lynne Lerner hired experienced matrimonial counsel William Laufer to review it without discovery or asset valuation. Laufer’s February 2 letter listed the work he would not do and warned he could not opine on overall fairness or advise whether to sign. Lerner discussed every term and signed after Laufer suggested clarifying changes. The letter also contained a promise not to sue, and a later boilerplate retainer described broader services."
      ],
      [
       "Procedure",
       "The trial court dismissed Lerner’s malpractice action; she appealed."
      ],
      [
       "Holding",
       "It is not a breach of the standard of care for a lawyer, under a signed, precisely drafted consent agreement, to limit the scope of representation of a matrimonial client and not perform services the lawyer would otherwise perform. The limitation must be reasonable and made with informed consent under Rule 1.2(c). Affirmed."
      ],
      [
       "Reasoning",
       "Three grounds:",
       [
        "Client autonomy: a competent, informed client may resolve a dispute through mediation and choose narrower legal help.",
        "Defined undertaking: the standard of care is measured against the agreed service, and the letter unmistakably excluded discovery and fairness advice.",
        "Conduct stayed within scope: suggesting clarifying textual changes did not enlarge the representation, because the client’s expectations and requested service never changed."
       ]
      ],
      [
       "Limits",
       "Laufer should not have included the no-suit clause, which violated Rule 1.8(h), and should not have sent the conflicting boilerplate retainer. Neither changed the proven scope on this record."
      ],
      [
       "Assumption of the risk (analogy)",
       "A common law doctrine that bars a plaintiff from recovering for a negligent party’s conduct where the plaintiff voluntarily accepted the risk of that conduct. It was formerly an affirmative defense and has since been absorbed into contributory and comparative negligence in most jurisdictions. In malpractice it is the tort-side counterpart to a client’s informed consent to a limited scope."
      ]
     ],
     "tip": "Memory jogger: a limited-scope agreement can define the standard of care, but it cannot prospectively waive malpractice liability.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Ineffective Assistance · Strickland",
     "explain": [
      "The Sixth Amendment guarantees criminal defendants the assistance of counsel. A defendant claiming counsel was ineffective must satisfy both prongs of Strickland v. Washington: deficient performance and prejudice.",
      "Courts review counsel’s choices with heavy deference, judging them from counsel’s perspective at the time, without hindsight. A losing result does not by itself show either prong."
     ],
     "items": [
      [
       "Sixth Amendment",
       "In all criminal prosecutions, the accused shall enjoy the right to have the assistance of counsel for his defense."
      ],
      [
       "(1) Deficient performance",
       "Counsel’s representation fell below an objective standard of reasonableness under prevailing professional norms."
      ],
      [
       "(2) Prejudice",
       "A reasonable probability that, but for counsel’s errors, the result of the proceeding would have been different. A reasonable probability is one sufficient to undermine confidence in the outcome."
      ],
      [
       "Deferential review",
       "There is a strong presumption of sound strategy. Counsel’s choices are assessed from counsel’s perspective at the time, without hindsight."
      ]
     ],
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rompilla v. Beard · Duty to Investigate",
     "explain": [
      "Rompilla applies Strickland to a failure to investigate. Counsel does not have to search every possible source, but must reasonably examine material counsel knows the prosecution will use and that is easy to get.",
      "The failure in Rompilla satisfied both prongs: it was unreasonable, and the mitigation it missed created a reasonable probability of a different sentence."
     ],
     "items": [
      [
       "Facts",
       "Capital defense counsel knew the prosecution would use Rompilla’s prior rape-and-assault conviction and the victim’s testimony as an aggravator, but did not examine the public courthouse file on that conviction. The file contained prison, childhood, cognitive, mental-health, and alcoholism information that opened strong mitigation leads. Family interviews and earlier experts had not uncovered this mitigation case."
      ],
      [
       "Issue",
       "Was failing to review the known, readily available prior-conviction file deficient and prejudicial under Strickland?"
      ],
      [
       "Holding",
       "Yes. Counsel acted unreasonably, and the undiscovered mitigation created a reasonable probability of a different sentencing result. The Third Circuit was reversed, and Pennsylvania had to retry the penalty phase or stipulate to life imprisonment. Vote: 5-4."
      ],
      [
       "Duty to investigate",
       "Counsel who knows the prosecution will use a prior conviction as an aggravator must make a reasonable effort to examine the readily available file, even where the client and family suggest no mitigation exists."
      ],
      [
       "Limit",
       "The duty attached because this file was a sure source of what the prosecution planned to use and was easily obtainable. The holding is circumstance-specific, not a per se rule to review every prior-conviction file."
      ]
     ],
     "tip": "Memory jogger: known, readily available prosecution material that will be used as aggravating evidence must be reasonably investigated; failing to do so can satisfy both Strickland prongs.",
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "Allocating Authority",
   "overview": [
    "This unit answers one question: inside a representation, who decides what, the client or the lawyer? The Restatement describes three possible models, and the Model Rules adopt the middle one: the client sets the goals, the lawyer carries them out, and each consults with the other.",
    "Rule 1.2(a) is the core rule. It gives the client the objectives of the representation, the decision whether to settle, and, in a criminal case, the plea, whether to waive a jury, and whether to testify. The means of reaching those goals usually belong to the lawyer, after consultation under Rule 1.4. Everything the rule does not expressly assign has to be sorted into objectives or means, unless the parties avoid the question by limiting the scope of the representation under Rule 1.2(c).",
    "Three cases test where the line falls. Jones v. Barnes lets appointed appellate counsel choose which issues to raise. McCoy v. Louisiana gives a criminal defendant the right to stop counsel from conceding guilt. Boyd v. Brett-Major makes following a well-advised client's explicit instructions a defense to malpractice.",
    "The unit then covers the outer limits on the lawyer's role: Rule 1.2(d) bars counseling or assisting client crime or fraud (People v. Chappell, disbarment), Rule 2.1 requires independent judgment and allows advice beyond the law, and Rule 1.14 adjusts the relationship when a client has decision-making limitations. The professor's slide questions (Questions 2-20 to 2-24) test settlement authority, following instructions, describing consequences versus helping avoid detection, business advice, and protective action."
   ],
   "check": {
    "status": "complete",
    "note": "Class 5 slides showing the Rule 1.14 comments are image-only in the extracted text, so the 1.14 comments are not reflected beyond what the rule text and Day 5 notes give."
   },
   "blocks": [
    {
     "title": "Models of Authority",
     "explain": [
      "Before the rule, the reading sets out three ways to divide authority between lawyer and client. The slide 'Roads of Decision Making' shows the same range: decisions sitting with the client, with the attorney, or shared.",
      "The Model Rules adopt the middle view. That choice explains why Rule 1.2(a) gives the client the goals while still requiring the lawyer to consult about how to reach them."
     ],
     "items": [
      [
       "Traditional view",
       "The client puts the matter in the lawyer's hands, and the lawyer manages it as the lawyer thinks best. The client has little ongoing say.",
       []
      ],
      [
       "Opposite view",
       "The lawyer is a servant who does whatever the client wants, as long as it is within the law.",
       []
      ],
      [
       "Middle view",
       "The client defines the goals of the representation and the lawyer implements them, but each consults with the other. This is the approach the Rules of Professional Conduct use.",
       []
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.2(a) – Objectives vs. Means",
     "explain": [
      "Rule 1.2(a) divides decisions into objectives, which belong to the client, and means, which the lawyer generally controls after consulting the client as Rule 1.4 (communication) requires. The rule then names a few specific decisions that always belong to the client.",
      "The rule expressly allocates only a handful of decisions. Everything else must be classified: if it is an objective, the client decides; if it is a means, the lawyer usually decides, but only after consultation.",
      "The whole paragraph is 'subject to paragraphs (c) and (d)': the client's control over objectives does not extend past an agreed limit on scope (1.2(c)) or into crime or fraud (1.2(d))."
     ],
     "items": [
      [
       "Objectives",
       "The lawyer shall abide by the client's decisions about the objectives of the representation, meaning what the client is trying to achieve.",
       []
      ],
      [
       "Means",
       "The lawyer shall consult with the client, as Rule 1.4 requires, about the means used to pursue those objectives. Consultation is required, but the decision on technical and tactical means usually rests with the lawyer.",
       []
      ],
      [
       "Impliedly authorized action",
       "The lawyer may take action on the client's behalf that is impliedly authorized to carry out the representation, without asking permission for every step.",
       []
      ],
      [
       "Settlement",
       "The lawyer shall abide by the client's decision whether to settle a matter. This is the client's call even when the lawyer thinks a better result is available.",
       []
      ],
      [
       "Criminal cases",
       "In a criminal case, the lawyer shall abide by the client's decision, after consultation with the lawyer, on three matters.",
       [
        "The plea to be entered.",
        "Whether to waive a jury trial.",
        "Whether the client will testify."
       ]
      ],
      [
       "Subject to (c) and (d)",
       "The allocation operates within Rule 1.2(c) (agreed limits on the scope of the representation) and Rule 1.2(d) (no counseling or assisting crime or fraud).",
       []
      ]
     ],
     "tip": "Slide Question 2-20: a client hard pressed financially directs the attorney to accept a settlement offer while the defendant's appeal is pending, and the attorney refuses because the attorney believes the appeal is meritless. The attorney is subject to discipline because the client did not get to make the settlement decision. Rule 1.2(a) makes settlement the client's decision; it is not a tactical matter, and the lawyer's view of the appeal's merits does not change that.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Sorting Means from Objectives & Rule 1.2(c)",
     "explain": [
      "Allocation problems arise in civil cases as well as criminal ones. Some are easy because Rule 1.2(a) plainly assigns the decision to the client; others require deciding whether a choice is an objective or a means. The slide 'Ends or Means?' uses McCoy's position ('I didn't do it. The police did it.') to pose that classification question.",
      "Rule 1.2(c) offers a way around the classification problem. If lawyer and client agree in advance to limit what the lawyer will do, the questions become whether the client gave informed consent and whether the limit is reasonable."
     ],
     "items": [
      [
       "Classification",
       "Any decision not expressly allocated by Rule 1.2(a) must be labeled an objective (the client decides) or a means (often the lawyer decides, with consultation under Rule 1.4).",
       []
      ],
      [
       "Rule 1.2(c) – limiting scope",
       "A lawyer may limit the scope of the representation if the limitation is reasonable under the circumstances and the client gives informed consent.",
       [
        "Reasonable under the circumstances.",
        "Informed consent from the client."
       ]
      ],
      [
       "Effect of a 1.2(c) limit",
       "A valid limitation makes it unnecessary to classify the decision at all. The analysis shifts to informed consent and reasonableness.",
       []
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Disagreements, Advance Authority & Inherent Authority",
     "explain": [
      "Rule 1.2 does not say how a disagreement over means gets resolved. Comment [2] gives default expectations about who usually defers to whom, tells the lawyer to consult and seek a mutually acceptable resolution, and points to withdrawal or discharge if the disagreement is fundamental.",
      "Comment [3] and the Restatement fill in three more situations: the client authorizes action in advance, the client instructs the lawyer to do something improper, and the legal system demands a decision before the lawyer can consult."
     ],
     "items": [
      [
       "Rule 1.2 cmt. [2] – who defers",
       "Clients normally defer to the lawyer's special knowledge and skill on technical, legal, and tactical matters. Lawyers usually defer to the client on the expense to be incurred and on concern for third persons who might be adversely affected.",
       [
        "Because disagreements vary and can affect a tribunal or other persons, the Rule does not prescribe how they are resolved; other law may apply and should be consulted.",
        "The lawyer should consult the client and seek a mutually acceptable resolution."
       ]
      ],
      [
       "Fundamental disagreement",
       "If consultation fails and the lawyer has a fundamental disagreement with the client, the lawyer may withdraw under Rule 1.16(b)(4). The client may resolve the disagreement by discharging the lawyer under Rule 1.16(a)(3).",
       []
      ],
      [
       "Rule 1.2 cmt. [3] – advance authorization",
       "At the outset, the client may authorize the lawyer to take specific action without further consultation. Absent a material change in circumstances, and subject to Rule 1.4, the lawyer may rely on that authorization. The client may revoke it at any time.",
       []
      ],
      [
       "Restatement § 21 cmt. d – improper instructions",
       "A lawyer is not required to carry out an instruction the lawyer reasonably believes is contrary to professional rules or other law, or is unethical or similarly objectionable.",
       []
      ],
      [
       "Restatement § 23 cmt. d – inherent authority",
       "Lawyers have inherent authority, which cannot be changed by contract with the client, to act and decide for the client when the legal system requires an immediate decision and there is no time to consult.",
       [
        "Whether a decision falls in this category depends on procedural requirements and court orders, the client's availability for immediate consultation, and the effect an interruption would have on the orderly and effective presentation of the matter.",
        "When time permits, the lawyer must comply with the client's expressed wishes to be consulted about specified matters.",
        "A client may give advance instructions, which the lawyer must honor to the extent court rules and professional obligations permit."
       ]
      ]
     ],
     "tip": "Comment [2] gives the defaults in both directions: technical, legal, and tactical matters go to the lawyer; expense and effects on third persons go to the client.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Jones v. Barnes – Appellate Issues",
     "explain": [
      "Jones v. Barnes, 463 U.S. 745 (1983), decides whether choosing which issues to raise on appeal belongs to the defendant or to appointed counsel. The Court treats it as a matter of counsel's professional judgment, so the defendant cannot force counsel to argue every nonfrivolous point.",
      "The case is the counterpoint to the client-controlled decisions in Rule 1.2(a). The slides frame the majority as resting on professional judgment and the dissent on the autonomy of the person and who holds ultimate authority."
     ],
     "items": [
      [
       "Facts",
       "Barnes was convicted of robbery and assault after the victim, Butts, identified him as 'Froggy.' Barnes sent his assigned appellate counsel, Melinger, a list of claims and a pro se brief. Melinger raised some and rejected most, saying they would not win a new trial and were not based on record evidence.",
       []
      ],
      [
       "Procedure",
       "The district court dismissed Barnes's habeas petition alleging ineffective assistance of appellate counsel. The Second Circuit reversed, holding that counsel must argue additional colorable points the appellant requests, reading Anders v. California to bar abandoning a nonfrivolous issue.",
       []
      ],
      [
       "Issue",
       "Whether criminal defense counsel appointed to prosecute an appeal has a constitutional duty to raise every nonfrivolous issue the defendant requests.",
       []
      ],
      [
       "Holding",
       "No. An indigent defendant has no constitutional right to compel appointed counsel to press nonfrivolous points the client requests if counsel, as a matter of professional judgment, decides not to present them. Reversed.",
       []
      ],
      [
       "Reasoning",
       "A rule letting the client decide which issues are pressed would seriously undermine counsel's ability to present the case according to counsel's professional evaluation.",
       [
        "Winnowing: experienced advocates cut weaker arguments and focus on one central issue or a few. A brief raising every colorable issue buries the arguments that 'go for the jugular' (John W. Davis) under a mound of strong and weak contentions.",
        "The point is stronger with oral argument as short as 15 minutes and page limits, but the Court says the per se rule fails even without limits."
       ]
      ],
      [
       "Anders brief",
       "A brief that examines the record and each issue that might arise in the appeal, filed by counsel who believes the appeal is meritless. The defendant can then address the legal issues in the defendant's own brief.",
       []
      ],
      [
       "Brennan dissent",
       "Joined by Marshall. The right to the assistance of counsel includes a personal right of the defendant to decide which nonfrivolous issues are presented, even against counsel's advice.",
       [
        "Relies on Faretta v. California: counsel's function is to protect the dignity and autonomy of the accused by helping him make choices that are his to make.",
        "Anders shows the right to counsel is not all-or-nothing, since the client may raise any points he chooses.",
        "Indigent clients often mistrust appointed counsel, and flat fees create incentives to close cases quickly. 'I cannot accept the notion that lawyers are one of the punishments a person receives merely for being accused of a crime.'"
       ]
      ]
     ],
     "tip": "The slides ask 'What is an Anders brief?' Know the definition and that it lets the defendant raise his own points when counsel finds the appeal meritless.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Boyd v. Brett-Major – Following Client Instructions",
     "explain": [
      "Boyd v. Brett-Major, 449 So. 2d 952 (Fla. Dist. Ct. App. 1984), addresses what happens when a lawyer follows the client's instructions and the client later sues for malpractice. Following the explicit directions of an otherwise well-advised client is a defense, so long as no criminal or fraudulent end is intended.",
      "Class notes add a related point: violating an ethics rule does not by itself mean malpractice, though it can be evidence of malpractice. Ethics rules and client instructions are separate questions from malpractice liability."
     ],
     "items": [
      [
       "Facts",
       "Plaintiffs mortgaged their home so a bonding company would post their son's $100,000 appearance bond. The company had failed to file an affidavit required by Florida statute, which gave the plaintiffs an absolute defense to foreclosure. When the son failed to appear, the company foreclosed, and the retained attorney did not adequately plead that defense; summary judgment was entered against the plaintiffs.",
       []
      ],
      [
       "Competing accounts",
       "Plaintiffs said they hired the attorney to win. She said they wanted only delay so they could raise funds, because they intended to honor the debt and stay on good terms with the bondsman. The trial proof supported her account.",
       []
      ],
      [
       "Jury instruction",
       "An attorney is duty bound to carry out the specific instructions of a client provided criminal or fraudulent ends are not intended. If she was carrying out those instructions, the verdict should be for her.",
       []
      ],
      [
       "Holding",
       "Affirmed. Following the explicit directions of an otherwise well-advised client is a defense to a malpractice claim, and whether the attorney did so is a question of fact.",
       []
      ],
      [
       "'Parade of horribles'",
       "Plaintiffs argued that attorneys could escape liability simply by claiming the client directed them. The court rejected the argument, and the slides note the holding does not result in a parade of horribles.",
       []
      ]
     ],
     "tip": "Slide Question 2-21: the client insists the attorney not use evidence of the spouse's adultery after the attorney explains it would help on custody; the client gets joint custody and sues. The client is unlikely to succeed because the attorney explained the alternatives and then followed the client's instructions. Option (D) gives the wrong reason: the defense comes from following the informed client's instruction under Boyd, and calling evidence choice a 'means' decision would point toward the lawyer deciding.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "McCoy v. Louisiana – Right to Maintain Innocence",
     "explain": [
      "McCoy v. Louisiana, 138 S. Ct. 1500 (2018), holds that whether to admit guilt or maintain innocence is the objective of the defense, so it belongs to the defendant. Counsel may not concede guilt over the defendant's objection, even when counsel believes conceding is the best way to avoid the death penalty.",
      "It contrasts with Jones v. Barnes: choosing appellate issues is strategy for counsel, while the basic aim of the defense is the client's."
     ],
     "items": [
      [
       "Facts",
       "McCoy was charged with three counts of first-degree murder. He pleaded not guilty and insisted he was out of state and that corrupt police killed the victims. His public defender, Larry English, planned to concede the killings and argue McCoy lacked the specific intent for first-degree murder. McCoy objected, his motion for new counsel two days before trial was denied, and English told the jury in opening and closing that McCoy committed the murders.",
       []
      ],
      [
       "Holding",
       "A defendant has the right to insist that counsel refrain from admitting guilt, even when counsel's experience-based view is that confessing guilt offers the best chance to avoid the death penalty. The Sixth Amendment demands it (Ginsburg, J.).",
       []
      ],
      [
       "Why it is the client's decision",
       "With liberty, and in a capital case life, at stake, it is the defendant's prerogative to decide the objective of the defense: admit guilt and hope for mercy at sentencing, or maintain innocence and hold the State to its proof.",
       []
      ],
      [
       "Florida v. Nixon distinguished",
       "Where counsel explains a proposed concession strategy and the defendant is unresponsive, neither consenting nor objecting, no blanket rule requires the defendant's explicit consent. McCoy differs because he objected.",
       []
      ],
      [
       "Alito dissent",
       "Joined by Thomas and Gorsuch. English never admitted guilt of first-degree murder; facing overwhelming evidence, he conceded one element (the killing) while arguing the required mental state was missing.",
       [
        "The practical difference between conceding the killing and not endorsing the client's story is negligible, since the jury would get the message either way.",
        "The case came from 'a freakish confluence of factors that is unlikely to recur.'"
       ]
      ]
     ],
     "tip": "Silence is not an objection: under Nixon, a defendant who hears the concession strategy explained and says nothing has not triggered the McCoy right.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.2(d) – Client Crime or Fraud",
     "explain": [
      "Rule 1.2(d) sets the outer limit on carrying out client objectives. A lawyer may not counsel a client to engage in, or assist a client in, conduct the lawyer knows is criminal or fraudulent.",
      "The rule keeps the lawyer's advising role intact. A lawyer may explain what will happen if the client takes a proposed course of action and may help the client test in good faith what the law means. The line falls between describing consequences (allowed) and helping the client avoid detection (not allowed)."
     ],
     "items": [
      [
       "Prohibition",
       "A lawyer shall not counsel a client to engage, or assist a client, in conduct the lawyer knows is criminal or fraudulent.",
       []
      ],
      [
       "Permitted: discuss consequences",
       "A lawyer may discuss the legal consequences of any proposed course of conduct with the client. Accurately describing the likely consequences of breaking a law is permitted.",
       []
      ],
      [
       "Permitted: good-faith testing of the law",
       "A lawyer may counsel or assist a client to make a good faith effort to determine the validity, scope, meaning, or application of the law.",
       []
      ],
      [
       "Not permitted: avoiding detection",
       "Advising the client on how to avoid detection crosses from describing consequences into assisting the conduct.",
       []
      ]
     ],
     "tip": "Slide Question 2-22: a client who skips estimated quarterly tax payments asks whether anyone has been prosecuted for that alone and how to minimize detection. The attorney accurately says she found no such prosecutions and that it would be improper to advise on avoiding detection. She is not subject to discipline: she gave an honest opinion about likely consequences, which 1.2(d) allows. She had no duty to discourage the client, and discussing ways to avoid detection would not be allowed.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "People v. Chappell – Assisting a Fleeing Client",
     "explain": [
      "People v. Chappell, 927 P.2d 829 (Colo. 1996), shows what crossing the Rule 1.2(d) line looks like and how severe the sanction can be. A lawyer who advised and helped a client flee with a child in violation of custody orders, then concealed the client's whereabouts from the court, was disbarred.",
      "Class notes record that the attorney was trying to help the client out of an abusive situation. That motive did not prevent disbarment."
     ],
     "items": [
      [
       "Facts",
       "Respondent represented the wife in a dissolution. After the custody evaluator said she would recommend sole custody to the husband, respondent advised the client 'as her attorney to stay, but as a mother to run,' told her about a network of safehouses, helped her liquidate assets and empty bank accounts, and arranged for her belongings to be packed and stored, keeping the storage key.",
       []
      ],
      [
       "Conduct before the court",
       "At the hearing she appeared without her client, got a continuance, argued against changing the interim orders, claimed privilege barred her from saying where the client was, and accepted the husband's offer to keep paying support while knowing the client had fled with the child. The court found she perpetrated a fraud on the court. The wife later pleaded guilty to violating a custody order, a felony.",
       []
      ],
      [
       "Violations",
       "Four rules were violated.",
       [
        "Rule 1.2(d): counseling or assisting criminal or fraudulent conduct.",
        "Rule 3.3(a)(2): failing to disclose a material fact to a tribunal when disclosure is necessary to avoid assisting a client's criminal or fraudulent act.",
        "Rule 8.4(b): committing a criminal act by aiding the client's crime.",
        "Rule 8.4(c): conduct involving dishonesty, fraud, deceit, or misrepresentation."
       ]
      ],
      [
       "Disposition",
       "Disbarment. 'The respondent used her license to violate the core ethical and professional standards of her profession. Disbarment is the only appropriate form of discipline.'",
       []
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 2.1 – Advisor",
     "explain": [
      "Rule 2.1 describes the lawyer's role as counselor. The lawyer must use independent professional judgment and give candid advice, and may go beyond the law to include moral, economic, social, and political considerations relevant to the client's situation.",
      "Rule 1.2(d) limits what advice a lawyer may give; Rule 2.1 requires independent judgment and permits advice that is not strictly legal. Non-legal considerations are permitted, not required."
     ],
     "items": [
      [
       "Independent professional judgment",
       "In representing a client, a lawyer shall exercise independent professional judgment.",
       []
      ],
      [
       "Candid advice",
       "The lawyer shall render candid advice, meaning honest advice even when it is not what the client wants to hear.",
       []
      ],
      [
       "Non-legal factors",
       "In rendering advice, a lawyer may refer not only to law but to other considerations, such as moral, economic, social, and political factors, that may be relevant to the client's situation. These considerations are permitted, not required.",
       []
      ]
     ],
     "tip": "Slide Question 2-23: the attorney advises the widget company that it legally owes refunds only for returns within 14 days but recommends refunding everyone for long-term business reasons. The conduct is proper because the attorney was permitted, not required, to refer to relevant business considerations.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.14 – Client With Decision-Making Limitations",
     "text": "Keep an ordinary client-lawyer relationship as far as reasonably possible. Protective action is allowed when the lawyer reasonably believes the client:",
     "explain": [
      "Rule 1.14 changes the rules that would otherwise govern the relationship, including the Rule 1.2(a) allocation of decision-making authority. The default stays the same: treat the client as an ordinary client as far as reasonably possible.",
      "Paragraph (b) lets the lawyer step in with protective action only when the lawyer reasonably believes all three conditions exist. Paragraph (c) keeps the client's information confidential under Rule 1.6 but allows disclosure to the extent reasonably necessary to carry out that protective action.",
      "The amended rule uses 'decision-making limitations' (the slides' comment pages still use the older 'diminished capacity') and removed the former examples of protective action, such as consulting others or seeking a guardian ad litem, conservator, or guardian."
     ],
     "items": [
      [
       "Rule 1.14(a) – ordinary relationship",
       "A lawyer shall, as far as reasonably possible, maintain an ordinary client-lawyer relationship with a client with decision-making limitations, including when those limitations affect the client's ability to direct the lawyer or make reasoned, informed choices.",
       []
      ],
      [
       "Decision-making limitations (definition)",
       "A person has decision-making limitations if the person has substantial difficulty receiving and understanding information, evaluating information, or making or communicating decisions, even with appropriate supports or accommodations.",
       []
      ],
      [
       "(b)(1)",
       "The client has decision-making limitations.",
       []
      ],
      [
       "(b)(2)",
       "The client is at risk of substantial physical, financial, or other harm unless action is taken.",
       []
      ],
      [
       "(b)(3)",
       "The client cannot adequately act in the client's own interest to address the risk.",
       []
      ],
      [
       "Protective action",
       "When the lawyer reasonably believes (1) through (3) are all present, the lawyer may take reasonably necessary protective action to address the risk.",
       []
      ],
      [
       "Rule 1.14(c) – confidentiality",
       "Information relating to the representation of a client with decision-making limitations is protected by Rule 1.6 (confidentiality). When taking protective action under (b), the lawyer may reveal information to the extent the lawyer reasonably believes necessary to protect the client's interests.",
       []
      ],
      [
       "Removed language",
       "The amended rule removed the former examples of protective action (consulting with others, or seeking appointment of a guardian ad litem, conservator, or guardian).",
       []
      ]
     ],
     "tip": "Slide Question 2-24 (client refusing rent over 'gamma rays'; attorney consults the client's daughter, shares information, and prepares a guardianship petition) tests these elements. Answer choices citing confidentiality or loyalty are the objections 1.14(b) and (c) are written to address: protective action and limited disclosure are permitted when the lawyer reasonably believes all three conditions are met.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": "The Rule 1.14 comment slides (Class 5) are image-only in the extracted text; comments are not reflected."
     }
    }
   ]
  },
  {
   "title": "Advertising & Solicitation",
   "overview": [
    "This unit is about how lawyers find clients and what the ethics rules let them say and do to get them. The readings frame the problem as a business need (find clients and get paid) running into two goals of the ethics rules: protecting clients and the public as consumers, and protecting the professional identity of lawyers. The same rules can also shield lawyers from competition.",
    "The bar banned lawyer advertising for most of the twentieth century. Bates v. State Bar of Arizona (1977) struck that ban under the First Amendment, and regulation now runs through three Model Rules: 7.1 (no false or misleading communications), 7.2 (communicating about services, with limits on paying for recommendations, specialist claims, and required contact information), and 7.3 (solicitation). States vary widely.",
    "Solicitation is targeted contact with a specific person known to need help in a particular matter. Marketing literature treats direct contact as the most effective way to get business; the rules treat it as the greatest threat to consumers. Rule 7.3 bars live person-to-person solicitation when pecuniary gain is a significant motive, with exceptions.",
    "Two 1978 Supreme Court cases mark the constitutional limits: Ohralik (a state may discipline in-person solicitation for gain without proof of harm) and In re Primus (a state may not discipline a letter offering free ACLU help for political goals). For the exam, sort each fact pattern by method (live or written), motive (pecuniary gain or not), and target (lawyer, prior relationship, routine business user, or stranger)."
   ],
   "check": {
    "status": "complete",
    "note": "Class 6 slides on Rules 7.1 to 7.3 are image-only in the extracted text; rule content comes from the outline, Day 6 notes, and textbook pp. 190 to 202. ABA Formal Op. 501 is named in Day 6 notes without its content."
   },
   "blocks": [
    {
     "title": "The Business of Law & Why Advertising Is Allowed",
     "explain": [
      "To succeed, a lawyer must find clients and get paid, and both are business activities even when professionals do them. Ethics rules on marketing try to protect consumers and the profession's identity, but professional regulation can also protect lawyers from competition and stricter oversight while being justified as consumer protection.",
      "Bates v. State Bar of Arizona is the starting point for modern advertising law. The ABA banned advertising in 1908 and reaffirmed the ban in 1969; Bates struck down the blanket ban under the First Amendment, and regulation continued through differing state restrictions rather than a complete ban."
     ],
     "items": [
      [
       "Profession vs. business",
       "The ideal that 'justice cannot be sold' conflicts with selling legal services in a competitive market. Money buys a more skilled lawyer and more of the lawyer's time, so 'justice at the margin can often be bought.' Advertising exposes that conflict, and resistance to it helps the profession avoid acknowledging inequality built into the market.",
       []
      ],
      [
       "Bates v. State Bar of Arizona (1977)",
       "Bates and O'Steen advertised routine services at flat fees to reach people too well-off for legal aid but unable to afford conventional representation. Arizona argued advertising undermines professionalism, creates unjustified expectations, and stirs up unnecessary litigation. The Court rejected the ban under the First Amendment.",
       [
        "Fear of cost and inability to locate a lawyer burden access to justice.",
        "More use of the courts is not inherently bad when people otherwise suffer unremedied wrongs.",
        "Consumers do not need perfect information: some useful information is better than none."
       ]
      ],
      [
       "Economic case for advertising",
       "Consumers need information to find 'the lowest cost seller of acceptable ability.' Advertising bans protect lawyers from competition and weaken incentives to lower prices. Advertising can bring economies of scale, but it costs more than the ad itself, may produce no change in consumer choice, and can spread news of poor quality to a larger audience.",
       []
      ],
      [
       "Behavioral market failure",
       "The access problem persisted after Bates: a 2015 study named lack of information, then cost, as reasons for unmet legal need. One explanation is behavioral market failure: consumers make systematically poor choices, so more advertising does not necessarily produce better decisions.",
       [
        "Research on DWI/DUI and personal-injury websites found advertising that exploits poor decision-making, text many potential clients cannot read, and images focused on white men.",
        "Proposed reforms: require disclaimers for past successes and testimonials, require substantiation for endorsements, improve readability and images, and use public education. Regulation should rest on empirical evidence."
       ]
      ],
      [
       "Rule 1.1 cmt. [8] – technology",
       "Competence includes keeping up with 'the benefits and risks associated with relevant technology.' Day 6 notes flag this as especially important now because of AI.",
       []
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Marketing, Technology & Access to Justice",
     "explain": [
      "The Day 6 readings describe how lawyers develop business and how technology and new service models change legal practice. These readings supply background for why the advertising and solicitation rules matter in practice."
     ],
     "items": [
      [
       "Personal marketing plan",
       "Business development needs a written plan and regular time (100 to 200 hours a year). New business comes from relationships: websites and articles generate leads, and personal contact converts them. 'A sales call is not a pitch'; it is an interview about the client's needs. Existing contacts beat cold calls.",
       []
      ],
      [
       "Virtual law practice",
       "Delivering legal services through a secure online portal, so discussion, document exchange, drafting, and transactions happen online.",
       []
      ],
      [
       "Marketing in law firms",
       "'Technical legal competence alone is not a guarantee of success.' Competition from deregulation, globalization, and technology turns specialized services into commodities, and online providers such as LegalZoom narrow the knowledge gap. Individualized advice and personal care become the reason to choose a lawyer.",
       []
      ],
      [
       "Delivery and matching problems",
       "The justice gap: people cannot afford conventional hourly rates but do not qualify for legal aid. The delivery problem is the lack of an affordable model clients adopt; the matching problem is that people needing help are not connected with qualified lawyers. Help must be 'affordable, accessible, and adopted widely.'",
       []
      ],
      [
       "Big data analytics",
       "Analytics can help find clients, research, draft, and predict outcomes, but accurate inferences can be intrusive. Existing duties (competence, communication, confidentiality, advertising and solicitation, supervision) do not resolve every issue of data ownership, anonymity, consent, privacy, purpose, and source. The proposed response is firm data-use policies plus bar-association best practices.",
       []
      ],
      [
       "Firm public statements (2020)",
       "After George Floyd's death, Biglaw firms responded with statements, donations, and pro bono commitments (for example, Skadden's $100,000 donation to the NAACP Legal Defense Fund).",
       []
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule Framework & the 2018 Amendments",
     "explain": [
      "Three Model Rules govern lawyer marketing. Rule 7.1 is the basic rule for every communication about a lawyer's services; Rule 7.2 permits communicating about services subject to restrictions; Rule 7.3 governs solicitation. States adopted versions of these rules but vary widely.",
      "The key sorting question is advertising versus solicitation. Advertising goes to the public at large; solicitation targets a specific person known to need help in a particular matter, and it receives stricter treatment."
     ],
     "items": [
      [
       "Three rules",
       "7.1 prohibits false or misleading communications; 7.2 permits communicating about services subject to restrictions; 7.3 governs solicitation.",
       []
      ],
      [
       "State variation",
       "No jurisdiction bans lawyer advertising completely. Some only prohibit false or misleading advertising; others impose mandatory disclaimers, waiting periods, and pre-approval of advertising content.",
       []
      ],
      [
       "Solicitation vs. advertising",
       "Solicitation is a targeted communication initiated by a lawyer to a specific person known or reasonably believed to need legal services in a particular matter. Advertising is communication to the public at large.",
       []
      ],
      [
       "2018 amendments",
       "The ABA amended Rules 7.1 to 7.3 in 2018 and deleted Rules 7.4 and 7.5, moving their content into Rule 7.2 and the Comment to Rule 7.1. The stated goal was to streamline the rules by putting similar concepts together, while respecting constitutional limits on restricting commercial speech and the interest in protecting the public from misleading information.",
       []
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 7.1 – False or Misleading Communications",
     "explain": [
      "Rule 7.1 applies to every communication about a lawyer or the lawyer's services, including both advertising and solicitation. A communication violates the rule if it is false, or if it is literally true but misleading because of a material misstatement or a material omission.",
      "The Comment, which absorbed former Rule 7.5, applies the rule to firm names: lawyers may not suggest a firm that does not exist or trade on the name of a lawyer in public office. Rule 1.0 cmt. [2] supplies the test for what counts as a firm."
     ],
     "items": [
      [
       "Rule 7.1",
       "A lawyer shall not make a false or misleading communication about the lawyer or the lawyer's services.",
       []
      ],
      [
       "False or misleading",
       "A communication is false or misleading if it contains a material misrepresentation of fact or law, or omits a fact necessary to make the statement, considered as a whole, not materially misleading.",
       [
        "Under the pre-amendment Comment (Delaware Rule 7.1 cmt. 3), even a truthful advertisement may be misleading if it leads a reasonable person to form an unjustified expectation about the results the lawyer can obtain."
       ]
      ],
      [
       "Cmt. [7] – implied firms",
       "Lawyers may not state or imply that they practice together in one firm when they are not a firm. Former Rule 7.5(d) allowed lawyers to state or imply they practice in a partnership or other organization only when that is the fact.",
       []
      ],
      [
       "Cmt. [8] – public office",
       "It is misleading to use the name of a lawyer holding public office in the firm name during any substantial period in which the lawyer is not actively and regularly practicing with the firm.",
       []
      ],
      [
       "Rule 1.0 cmt. [2] – what is a firm",
       "Whether lawyers are a firm depends on the facts. Lawyers who share office space and occasionally consult with each other ordinarily are not a firm. If they present themselves to the public as a firm or conduct themselves as one, they are treated as a firm.",
       [
        "Relevant factors: the terms of any formal agreement, whether the lawyers have mutual access to client information, and the purpose of the Rule involved."
       ]
      ],
      [
       "False advertising and the Constitution",
       "The Constitution does not preclude discipline for advertisements that are false and misleading, and rules against them are strictly enforced. Advertising that informs consumers about their rights and the availability and cost of legal services increases access to representation and receives constitutional protection.",
       []
      ]
     ],
     "tip": "Combine Cmt. [7] with Rule 1.0 cmt. [2]: sharing space alone does not make a firm, but holding out as a firm does, and holding out as a firm when the lawyers are not one is misleading under 7.1.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 7.2 – Communicating About Services",
     "explain": [
      "Rule 7.2 is the permission rule: lawyers may communicate about their services through any media. It then adds three limits: no paying people for recommendations (with listed exceptions), no claiming specialist certification without an approved and named certifying body, and every communication must identify a responsible lawyer or firm.",
      "The 2018 amendments replaced 'advertise' with 'communicate information regarding the lawyer's services,' dropped the list of specific media, moved the specialist rule in from former Rule 7.4, changed 'office address' to 'contact information,' and added the nominal-gift exception."
     ],
     "items": [
      [
       "7.2(a) – any media",
       "A lawyer may communicate information regarding the lawyer's services through any media. The amended rule no longer lists specific media such as directories, newspapers, or television.",
       []
      ],
      [
       "7.2(b) – nothing of value for recommendations",
       "A lawyer shall not give anything of value to a person for recommending the lawyer's services. The exceptions:",
       [
        "(1) Pay the reasonable costs of permitted advertisements or communications.",
        "(2) Pay the usual charges of a legal service plan or a not-for-profit or qualified lawyer referral service.",
        "(3) Pay for a law practice purchased under Rule 1.17.",
        "(4) Enter a reciprocal referral agreement with another lawyer or a nonlawyer professional, if the agreement is not exclusive and the client is informed of its existence and nature.",
        "(5) Give nominal gifts as an expression of appreciation that are neither intended nor reasonably expected to be compensation for recommending the lawyer. The Comment limits this to a token item, such as a holiday gift or ordinary social hospitality."
       ]
      ],
      [
       "7.2(c) – specialist claims",
       "A lawyer shall not state or imply that the lawyer is certified as a specialist in a particular field unless both conditions are met.",
       [
        "(1) The certifying organization is approved by an appropriate state authority or accredited by the ABA.",
        "(2) The certifying organization is clearly identified in the communication."
       ]
      ],
      [
       "7.2(d) – responsible lawyer",
       "Every communication must include the name and contact information of at least one lawyer or law firm responsible for its content. The pre-amendment rule required a name and office address.",
       []
      ]
     ],
     "tip": "The nominal-gift exception (b)(5) is new in 2018. Under the former rule, a thank-you gift to someone who recommended the lawyer fell under the near-blanket ban on giving anything of value for a recommendation.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 7.3 – Solicitation",
     "text": "Solicitation: a lawyer-initiated communication to a specific person the lawyer knows or reasonably should know needs legal services in a particular matter, offering those services. No live person-to-person solicitation when a significant motive is pecuniary gain, unless the contact is with a:",
     "explain": [
      "Rule 7.3(a) defines solicitation, and 7.3(b) bans one form of it: live person-to-person contact when a significant motive is the lawyer's or firm's pecuniary gain. Written or recorded solicitation and live contact without a profit motive fall outside the 7.3(b) ban.",
      "The ban has three exceptions for people who do not need the protection: other lawyers, people with an existing relationship with the lawyer, and sophisticated repeat buyers of the type of legal services offered. The routine-business-user exception was added by the amendment."
     ],
     "items": [
      [
       "7.3(a) – definition",
       "A communication initiated by or on behalf of a lawyer, directed to a specific person the lawyer knows or reasonably should know needs legal services in a particular matter, that offers, or reasonably can be understood as offering, legal services for that matter.",
       []
      ],
      [
       "7.3(b) – the ban",
       "A lawyer shall not solicit by live person-to-person contact when a significant motive is the lawyer's or firm's pecuniary gain, unless an exception applies.",
       []
      ],
      [
       "(b)(1)",
       "The person contacted is a lawyer.",
       []
      ],
      [
       "(b)(2)",
       "The person has a family, close personal, or prior business or professional relationship with the lawyer or firm.",
       []
      ],
      [
       "(b)(3)",
       "The person routinely uses for business purposes the type of legal services offered by the lawyer. Sophisticated repeat purchasers of legal services may be solicited directly.",
       []
      ]
     ],
     "tip": "Day 6 Question 3-1: a criminal defense lawyer texts former clients whose arrests appear in police records. Not subject to discipline: former clients have a prior professional relationship, and a text is not live contact. Question 3-2: a lawyer solicits pregnant mothers in person to challenge a sterilization condition, offering to work for no fee. Not subject to discipline: pecuniary gain was not a motive (the Primus fact pattern).",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 7.3(c)–(e) – Absolute Limits & Permitted Contacts",
     "explain": [
      "Paragraph (c) applies to every form of solicitation, written or live, and even where (b) would allow it. Paragraphs (d) and (e) carve out communications the Rule does not reach."
     ],
     "items": [
      [
       "7.3(c) – never permitted",
       "A lawyer shall not solicit, even when (b) does not prohibit it, if either condition exists.",
       [
        "(1) The target has made known to the lawyer a desire not to be solicited.",
        "(2) The solicitation involves coercion, duress, or harassment."
       ]
      ],
      [
       "7.3(d) – authorized or ordered communications",
       "The Rule does not prohibit communications authorized by law or ordered by a court or other tribunal.",
       []
      ],
      [
       "7.3(e) – group and prepaid plans",
       "A lawyer may participate in a prepaid or group legal service plan, not owned or directed by the lawyer, that uses live person-to-person contact to enroll members from persons not known to need legal services in a particular matter.",
       []
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "State Variations",
     "explain": [
      "States have adopted different versions of Rule 7.3. Delaware follows the former Model Rule, while Washington has nearly eliminated solicitation restrictions."
     ],
     "items": [
      [
       "Delaware Rule 7.3",
       "Based on former Model Rule 7.3. Bars solicitation by in-person, live telephone, or real-time electronic contact when a significant motive is pecuniary gain, unless the person contacted is a lawyer or has a family, close personal, or prior professional relationship with the lawyer. There is no exception for routine business users.",
       [
        "Also bars solicitation by written, recorded, or electronic communication, or by live contact otherwise permitted, if the target has made known a desire not to be solicited or the solicitation involves coercion, duress, or harassment."
       ]
      ],
      [
       "Washington (2021)",
       "Eliminated almost all prohibitions on solicitation. Lawyers may solicit freely unless the communication is false or misleading, the lawyer knows the potential client lacks capacity to exercise reasonable judgment in employing a lawyer, the target has said they do not want to be solicited, or the solicitation involves coercion, duress, or harassment. Oregon and a few others are similarly loose.",
       []
      ],
      [
       "ABA Formal Op. 501 (2022)",
       "Addresses the scope of Model Rule 7.3's restriction on others soliciting on a lawyer's behalf.",
       []
      ]
     ],
     "tip": "Delaware has no routine-business-user exception; under the amended Model Rule, a sophisticated repeat buyer may be solicited live.",
     "check": {
      "status": "thin",
      "note": "Day 6 notes name ABA Formal Op. 501 and its subject only; the notes, Class 6 slides, and outline do not state what the opinion concludes."
     }
    },
    {
     "title": "Ohralik v. Ohio State Bar Association (1978)",
     "explain": [
      "Ohralik v. Ohio State Bar Ass'n, 436 U.S. 447 (1978), holds that a state may discipline a lawyer for in-person solicitation for pecuniary gain without proving the solicitation caused actual harm. The rule is prophylactic: it prevents harm before it happens.",
      "The slides quote the core: the State has a strong interest in protecting consumers from in-person solicitation for gain, may presume that such solicitation more often than not will be injurious, and the rule would lose its effect if actual injury had to be proven."
     ],
     "items": [
      [
       "Facts",
       "Ohralik learned that Carol McClintock was injured in a crash with an uninsured motorist. He visited her in the hospital while she was in traction, secretly recorded her parents, learned of $12,500 in uninsured-motorist coverage, and had her sign a one-third contingent fee contract. He then visited the passenger, Wanda Lou Holbert, 18, uninvited, and got an 'O.K.' after she said she did not understand. Wanda repudiated; Ohralik insisted she was bound. Both women filed grievances.",
       []
      ],
      [
       "Issue",
       "Whether, consistent with the First Amendment, a State may discipline a lawyer for in-person solicitation of employment for pecuniary gain without proving actual harm.",
       []
      ],
      [
       "Holding",
       "Yes (Powell, J.). Applying Ohio's anti-solicitation rules to Ohralik does not offend the Constitution. Affirmed.",
       []
      ],
      [
       "Bates does not control",
       "Bates protected truthful, restrained advertising of routine services. In-person solicitation is 'a business transaction in which speech is an essential but subordinate component,' so it gets lower scrutiny.",
       []
      ],
      [
       "Why in-person is worse than an ad",
       "An ad gives information and leaves the recipient free to act. In-person solicitation may pressure the person and demand an immediate response, with no chance for comparison, reflection, or counter-advice from the bar or people close to the person.",
       []
      ],
      [
       "State interests ('the evils')",
       "Stirring up litigation, fraudulent claims, debasing the profession, and harm to the client through overreaching, overcharging, underrepresentation, and misrepresentation. The State also has special responsibility for licensed professionals, and lawyers are officers of the court.",
       []
      ],
      [
       "Prophylactic rule / proof problem",
       "No proof of injury is needed. A lawyer 'trained in the art of persuasion' soliciting 'an unsophisticated, injured, or distressed lay person' is inherently conducive to overreaching, and the intrusion itself can be harm. In-person solicitation is not open to public scrutiny, and often the only witnesses are the lawyer and a distressed layperson, so a proof requirement would make it immune from oversight.",
       []
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "In re Primus (1978)",
     "explain": [
      "In re Primus, 436 U.S. 412 (1978), decided the same day as Ohralik, holds that a state may not discipline a lawyer who, pursuing political and ideological goals, advises a layperson of her rights and then writes to tell her free legal help is available from a nonprofit (the ACLU).",
      "The difference from Ohralik is the type of speech. Litigation by a group like the ACLU is political expression and association, so the State's rules get exacting scrutiny and must target actual misconduct, not merely potential harm."
     ],
     "items": [
      [
       "Facts",
       "Primus, an ACLU cooperating lawyer, spoke at a meeting of women on public assistance in Aiken County, South Carolina, who had been sterilized or threatened with sterilization as a condition of Medicaid. She then wrote Mary Etta Williams that free ACLU representation was available. Williams declined to sue. South Carolina publicly reprimanded Primus for soliciting on the ACLU's behalf.",
       []
      ],
      [
       "Holding",
       "Applying the solicitation rules to Primus's letter on behalf of the ACLU violates the First and Fourteenth Amendments (Powell, J.). Reversed.",
       []
      ],
      [
       "NAACP v. Button controls",
       "Litigation by such an organization is 'a form of political expression' and 'political association,' and collective action to obtain meaningful access to the courts is a fundamental First Amendment right. Government may regulate it 'only with narrow specificity.' The ACLU's requests for court-awarded fees did not change this: awards are discretionary, are not taken from the client's recovery, and would have gone to the ACLU, and Primus was uncompensated.",
       []
      ],
      [
       "Exacting scrutiny",
       "The State must show a compelling interest pursued by means closely drawn to avoid unnecessary abridgment of associational freedom. The rules swept too broadly because they barred ever advising a layperson to use the ACLU's free services.",
       []
      ],
      [
       "Actual misconduct required",
       "Ohralik's approach of banning conduct likely to cause harm does not apply to political association. The record showed no undue influence, overreaching, misrepresentation, or invasion of privacy. The letter followed a protected meeting, added material information, and left Williams free to choose, which she did; a letter also makes policing easier.",
       []
      ],
      [
       "Rehnquist dissent",
       "No decision compels a State to permit uninvited individual solicitation. Political motive does not reduce the danger, since a lawyer's desire to resolve 'substantial civil liberties questions' may take precedence over the client's interests.",
       []
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Ohralik vs. Primus",
     "explain": [
      "Read the two cases together. Ohralik sets the rule for commercial in-person solicitation; Primus protects solicitation that is political association. The Court distinguished them on three points, and the slides list what States may still regulate after Primus."
     ],
     "items": [
      [
       "Distinctions",
       "The Court distinguished Primus from Ohralik on three grounds.",
       [
        "Method: a letter, not in-person contact.",
        "Fee: an offer of free assistance, not representation predicated on a share of the recovery.",
        "Purpose: expressing political beliefs and advancing the ACLU's civil-liberties objectives, not financial gain."
       ]
      ],
      [
       "Standard of review",
       "Ohralik: lower scrutiny for in-person commercial solicitation, and the State may presume harm. Primus: exacting scrutiny for political association, and the State must show actual misconduct.",
       []
      ],
      [
       "What States may still do",
       "After Primus, a State may still regulate in four ways.",
       [
        "Impose reasonable time, place, and manner restrictions on solicitation.",
        "Apply narrowly drawn rules against solicitation that is in fact misleading, overbearing, deceptive, or improperly influential.",
        "Forbid in-person solicitation for pecuniary gain under circumstances likely to produce the evils identified in Ohralik.",
        "Bar lawyers from soliciting on behalf of lay organizations that control the conduct of the resulting litigation."
       ]
      ]
     ],
     "tip": "The slides close with Primus's statement that nothing in the opinion forecloses tailored regulation that does not unnecessarily abridge the associational freedom of organizations like the ACLU and NAACP.",
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "Fees & Client Property",
   "overview": [
    "This unit covers how lawyers get paid and how they handle money and property that belongs to clients. The big question is what a lawyer may charge, how the fee must be set up and explained, and what the lawyer must do with funds that are not yet the lawyer's.",
    "The casebook says the main reason for the fee rules is consumer protection: fees must be reasonable and lawyers must not take advantage of clients. Some rules also keep an older concern with lawyer independence and with lawyers stirring up litigation. That older concern explains the ban on owning part of a client's lawsuit, the bans on contingent fees in divorce and criminal defense, and the limits on lending clients money.",
    "The pieces fit in this order. Rule 1.5 sets the fee itself (reasonableness, communication, contingent fees, banned contingent fees, splitting fees between firms). Rule 1.8 adds special money rules: business deals with clients (1.8(a)), financial help to clients (1.8(e)), media rights (1.8(d)), third-party payors (1.8(f)), and no ownership stake in the litigation (1.8(i)). Rule 1.15 governs the client trust account. The unit ends with court-awarded fees: the American Rule, fee-shifting statutes such as 42 U.S.C. § 1988, the lodestar method from Perdue v. Kenny A., and fee-waiver settlements from Evans v. Jeff D.",
    "On a closed-book multiple-choice exam, expect fact patterns testing: whether a fee arrangement needed a writing, whether a contingent fee is banned, whether a property or stock fee triggers Rule 1.8(a), whether a gift or loan to a client is allowed, what to do with advance fees and disputed funds, and when a court may enhance a lodestar fee."
   ],
   "check": {
    "status": "thin",
    "note": "One block thin: Rule 1.5(e) fee division appears only in the outline (three conditions). The Class 7 slides on Rule 1.5 are image-only in the extracted text, and the textbook pages read (pp. 203-244) do not reproduce 1.5(e) or explain its purpose. Day 7 notes are an empty template."
   },
   "blocks": [
    {
     "title": "Fee Methods & Purpose of the Fee Rules",
     "explain": [
      "The casebook identifies the common ways lawyers charge. Hourly billing and contingent fees are the most common. Hourly billing dominates large-firm practice, and contingent fees are most often used for plaintiffs. Lawyers may also charge flat fees, which are common for routine work, and some lawyers for start-up businesses accept an equity (ownership) interest in the client as payment.",
      "Any of these methods is allowed if the lawyer meets the ethics rules. The rules exist mainly to protect consumers by keeping fees reasonable. Some rules also protect lawyer independence and discourage lawyers from encouraging litigation."
     ],
     "items": [
      [
       "Hourly billing",
       "The lawyer charges for time spent. William Ross argues time-based billing tempts lawyers to pad hours (record time not worked) or churn (do unnecessary work), and that liberal time-recording and low-value work are harder ethical problems because clear standards are hard to draw. Douglas Richmond defends the billable hour: it forces clients and lawyers to budget, and the ethics rules and fiduciary duties already protect clients from abuse."
      ],
      [
       "Contingent fee",
       "The lawyer is paid a share of the recovery and gets nothing if the client loses. The casebook notes the one-third fee is the industry standard and presents the debate over whether a standard percentage over- or under-compensates lawyers in particular cases."
      ],
      [
       "Flat fee",
       "A set price for the work regardless of time. Richmond argues flat fees can discourage zealous advocacy because they reward doing as little work as possible."
      ],
      [
       "Equity (stock) as a fee",
       "The lawyer takes an ownership interest in the client's business instead of cash. This is allowed, but it is treated as a business transaction with the client and must satisfy Rule 1.8(a) (see that block)."
      ]
     ],
     "tip": "No single billing method is banned outright. A question that turns on the method usually tests a specific rule tied to it: writing for contingent fees (1.5(c)), banned contingent fees (1.5(d)), or Rule 1.8(a) for property or stock fees.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.5(a) · Reasonableness",
     "explain": [
      "Rule 1.5(a) says a lawyer shall not make an agreement for, charge, or collect an unreasonable fee or an unreasonable amount for expenses. The rule covers three separate acts: agreeing to the fee, billing it, and collecting it. Each one can be a violation on its own.",
      "The rule lists eight factors for deciding whether a fee is reasonable. No single factor controls; the factors are weighed together. The same rule covers expenses, so overcharging for costs such as copying can also violate 1.5(a)."
     ],
     "items": [
      [
       "(1) Time, labor, novelty, difficulty, skill",
       "The time and labor required, how new and hard the legal questions are, and the skill needed to do the work properly. Harder, newer, more skill-intensive work supports a higher fee."
      ],
      [
       "(2) Preclusion of other work",
       "The likelihood, if apparent to the client, that taking this matter will prevent the lawyer from taking other work. The factor counts only when the client could see that the lawyer would be giving up other business."
      ],
      [
       "(3) Customary local fee",
       "The fee customarily charged in the locality for similar legal services. This compares the fee to what other lawyers in the area charge for the same kind of work."
      ],
      [
       "(4) Amount involved and results obtained",
       "How much is at stake in the matter and what the lawyer achieved for the client."
      ],
      [
       "(5) Time limits",
       "Time limitations imposed by the client or by the circumstances. Rush work under tight deadlines can justify a higher fee."
      ],
      [
       "(6) Nature and length of the relationship",
       "The nature and length of the lawyer's professional relationship with the client."
      ],
      [
       "(7) Experience, reputation, ability",
       "The experience, reputation, and ability of the lawyer or lawyers doing the work. A more experienced, better-known lawyer may reasonably charge more."
      ],
      [
       "(8) Fixed or contingent",
       "Whether the fee is fixed or contingent. A contingent fee carries the risk that the lawyer is paid nothing, which can justify a larger amount if the case succeeds."
      ]
     ],
     "tip": "Client satisfaction or a good result does not make an otherwise improper fee proper. The Day 8 notes also stress that these 1.5(a) factors are not automatic grounds for a Perdue enhancement of a court-awarded fee.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.5(b) · Communicating the Fee",
     "explain": [
      "Rule 1.5(b) requires the lawyer to tell the client the scope of the representation and the basis or rate of the fee and expenses the client will pay. The rule's purpose is that the client knows what work is covered and how the bill will be calculated.",
      "The communication must come before, or within a reasonable time after, the lawyer starts the work. A writing is preferred but is not required for an ordinary (non-contingent) fee. Changes to the basis or rate must also be communicated."
     ],
     "items": [
      [
       "What must be communicated",
       "The scope of the representation (what the lawyer will do) and the basis or rate of the fee and expenses (for example, an hourly rate and an expense reimbursement policy)."
      ],
      [
       "Timing",
       "Before, or within a reasonable time after, commencing the representation. Starting work before discussing the fee does not violate the rule if the fee is explained within a reasonable time."
      ],
      [
       "\"Preferably in writing\"",
       "A writing is recommended. Failing to put an hourly fee in writing does not by itself violate 1.5(b). Compare 1.5(c), which requires a writing signed by the client for contingent fees."
      ],
      [
       "Regular-client exception",
       "No new communication is needed when the lawyer will charge a regularly represented client on the same basis or rate as before."
      ],
      [
       "Changes",
       "Any change in the basis or rate of the fee or expenses must also be communicated to the client."
      ]
     ],
     "tip": "Casebook Question 3-6 tests this: a defense attorney began work, explained her hourly rate at an in-person meeting the next week, forgot to send a confirming letter, and billed a reasonable amount. Under the text of 1.5(b), the oral explanation within a reasonable time after starting satisfies the rule; the missing writing is only \"preferred.\"",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.5(c) · Contingent Fee Requirements",
     "explain": [
      "A contingent fee is a fee that depends on the outcome of the matter. Rule 1.5(c) allows contingent fees except where paragraph (d) or other law bans them. Because a contingent fee is harder for a client to understand and evaluate than an hourly rate, the rule requires a signed writing with specific terms.",
      "The rule also requires a closing statement at the end of the matter, so the client can see how the recovery was divided."
     ],
     "items": [
      [
       "Writing signed by the client",
       "The agreement must be in writing and signed by the client. An oral contingent fee agreement violates 1.5(c) even if the percentage is reasonable."
      ],
      [
       "Method and percentages",
       "The writing must state how the fee is determined, including the percentage or percentages the lawyer receives if the case settles, goes to trial, or goes to appeal."
      ],
      [
       "Expenses and before/after",
       "The writing must state the litigation and other expenses to be deducted from the recovery and whether they are deducted before or after the contingent fee is calculated. The order matters because taking the percentage before subtracting expenses gives the lawyer a larger fee."
      ],
      [
       "Expenses owed regardless",
       "The agreement must clearly tell the client about any expenses the client will owe whether or not the client wins."
      ],
      [
       "Closing statement",
       "When the matter ends, the lawyer must give the client a written statement of the outcome and, if there is a recovery, show the amount paid to the client and how it was calculated."
      ],
      [
       "Restatement § 35 cmt. b · why contingent fees are allowed",
       "Three reasons: (1) they let people who could not otherwise afford counsel assert their rights, paying only if they win; (2) they give lawyers an extra incentive to win and to take only claims with a substantial likelihood of success; and (3) they let the client share the risk of losing with a lawyer, who is usually better able to assess and bear that risk across many cases. The professor put this comment on a slide."
      ],
      [
       "Moore v. Board of Professional Responsibility (Tenn. 2019)",
       "A contingent fee agreement gave the lawyer 40% of any settlement offer the lawyer advised the client to accept, even if the client rejected it. The court held this violated Rule 1.5 because the fee depended on the lawyer's recommendation instead of the outcome, and violated Rule 1.8(i) because it gave the lawyer a proprietary interest in the settlement offer."
      ]
     ],
     "tip": "Writing requirements differ by paragraph: 1.5(b) ordinary fee, writing preferred; 1.5(c) contingent fee, writing signed by the client required; 1.5(e) fee division, client's agreement confirmed in writing.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.5(d) · Prohibited Contingent Fees",
     "explain": [
      "Rule 1.5(d) bans two kinds of contingent fees outright. A lawyer shall not arrange for, charge, or collect them, so even a signed writing and a happy client do not cure the violation.",
      "The casebook gives the policy reasons for each ban. They reflect the older concerns about lawyer independence and about lawyers encouraging conflict."
     ],
     "items": [
      [
       "(d)(1) Domestic relations",
       "No fee in a domestic relations matter whose payment or amount depends on securing a divorce or on the amount of alimony, support, or a property settlement in place of alimony or support.",
       [
        "Comment [6]: the ban does not cover a contingent fee for collecting post-judgment balances owed under support, alimony, or other financial orders, because those contracts do not raise the same policy concerns.",
        "Restatement § 35 cmt. g: the traditional reason is that such a fee gives lawyers an incentive to discourage reconciliation and encourages bitter court battles. The Restatement notes this has less force under no-fault divorce laws.",
        "A second reason: the fee is usually unnecessary, because if the other spouse has assets, courts usually order that spouse to pay reasonable attorney fees."
       ]
      ],
      [
       "(d)(2) Criminal defense",
       "No contingent fee for representing a defendant in a criminal case.",
       [
        "Reasons given in the casebook: there is no res (no fund of money recovered to pay from); the fee could create conflicts that discourage the lawyer from seeking a plea bargain or a lesser-included-offense instruction; and court-appointed counsel is available for indigent defendants.",
        "Professor Lushing argues the ban rests on unverified conflict concerns and prejudice against criminal lawyers, and that repeal would help middle-class clients."
       ]
      ]
     ],
     "tip": "Casebook Question 3-9: a divorce client agreed in writing to pay 10% of the settlement if the divorce was final within three months, then happily paid. The fee is contingent on securing a divorce, so it falls within 1.5(d)(1); the client's written agreement and satisfaction do not matter.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.5(e) · Fee Division Between Firms",
     "explain": [
      "Rule 1.5(e) governs splitting a single fee between lawyers who are not in the same firm. It is permitted only if all three conditions are met.",
      "The conditions protect the client: the split must track work or responsibility, the client must know and agree to each lawyer's share, and the client must not pay more in total than a reasonable fee."
     ],
     "items": [
      [
       "(1) Proportion or joint responsibility",
       "The division is in proportion to the services each lawyer performs, or each lawyer assumes joint responsibility for the representation."
      ],
      [
       "(2) Client agreement confirmed in writing",
       "The client agrees to the arrangement, including the share each lawyer will receive, and the agreement is confirmed in writing."
      ],
      [
       "(3) Reasonable total",
       "The total fee charged to the client is reasonable under 1.5(a)."
      ]
     ],
     "multi": true,
     "check": {
      "status": "thin",
      "note": "Only the outline states 1.5(e). The Class 7 Rule 1.5 slides are image-only in the extracted text, Day 7 notes are an empty template, and textbook pp. 203-228 do not reproduce 1.5(e) or its comments, so no source explains what \"joint responsibility\" means or why the rule exists."
     }
    },
    {
     "title": "Advance Fees, Property Fees & Late Fee Contracts",
     "explain": [
      "Rule 1.5 comment [4] covers two payment issues the professor put on a slide: advance payment and payment in property. Restatement § 18 comment e covers fee contracts made after the work has started.",
      "These points connect Rule 1.5 to Rules 1.8(a), 1.8(i), 1.15(c), and 1.16(d)."
     ],
     "items": [
      [
       "Advance payment (cmt. [4])",
       "A lawyer may require payment in advance but must return any unearned portion, as Rule 1.16(d) requires at the end of a representation. Under Rule 1.15(c), the advance stays in the trust account until earned."
      ],
      [
       "Property as payment (cmt. [4])",
       "A lawyer may accept property, such as an ownership interest in an enterprise, as payment. Two limits apply: the fee may be a business transaction that must meet Rule 1.8(a), because such fees often have the qualities of a business deal; and it may not be a proprietary interest in the cause of action or subject matter of the litigation, which Rule 1.8(i) bans."
      ],
      [
       "Restatement § 18 cmt. e · fee contracts made after the matter is under way",
       "Contracts entered after the matter has started receive special scrutiny. To enforce one, the lawyer must show it was fair and reasonable to the client when made, which has two elements.",
       [
        "(1) The client was adequately aware of the effects and material disadvantages of the contract. Less disclosure is needed for an experienced client or one advised by an independent lawyer, and it helps if the client asked for the change (for example, a client in financial trouble asking to switch from hourly to contingent).",
        "(2) The client was not pressured into agreeing to avoid changing counsel, alienating the lawyer, missing a deadline, losing an opportunity, or paying a new lawyer to repeat work.",
        "Overall, the lawyer must show a reasonable client might have accepted the late contract, usually because it benefited the client in a substantial way other than avoiding a search for a new lawyer.",
        "If the late contract modifies an earlier one and the lawyer cannot make these showings, the client may avoid it."
       ]
      ]
     ],
     "tip": "Mid-representation fee increases are the classic special-scrutiny scenario: the lawyer carries the burden of proving awareness and lack of pressure.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.8(i) · Proprietary Interest in Litigation",
     "explain": [
      "Rule 1.8(i) says a lawyer shall not acquire a proprietary (ownership) interest in the cause of action or subject matter of litigation the lawyer is conducting for a client. The concern is that a lawyer who owns part of the lawsuit has a personal stake that can compromise independent judgment.",
      "There are two exceptions, both of which let a lawyer secure or earn a fee tied to the case."
     ],
     "items": [
      [
       "Exception (1) · Lien",
       "The lawyer may acquire a lien authorized by law to secure the lawyer's fee or expenses."
      ],
      [
       "Exception (2) · Contingent fee",
       "The lawyer may contract with the client for a reasonable contingent fee in a civil case. A contingent fee is in effect a share of the recovery, so the rule carves it out expressly. The exception is limited to civil cases, consistent with 1.5(d)(2)."
      ],
      [
       "Property fee limit",
       "Under Rule 1.5 cmt. [4], property accepted as a fee cannot be an interest in the subject matter of the litigation."
      ]
     ],
     "tip": "Casebook Question 3-8: an oil and gas developer proposed paying 20% of first-year royalties recovered in her ownership suit, in a signed writing. That is a contingent fee in a civil case, which 1.8(i)(2) permits; advice to seek independent counsel is a Rule 1.8(a) requirement, which does not apply to an ordinary contingent fee arrangement.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.8(a) · Business Transactions With Clients",
     "explain": [
      "Rule 1.8(a) says a lawyer shall not enter a business transaction with a client, or knowingly acquire an ownership, possessory, security, or other pecuniary interest adverse to a client, unless three conditions are met. The rule exists because the client depends on the lawyer's independent judgment, and a lawyer with a financial stake in a deal with the client may favor the lawyer's own interest.",
      "The Rule 1.8 comment says 1.8(a) does not apply to ordinary fee arrangements, which Rule 1.5 governs. Its requirements must be met when the lawyer accepts an interest in the client's business or other nonmonetary property as all or part of a fee."
     ],
     "items": [
      [
       "(1) Fair, reasonable, and disclosed in writing",
       "The transaction and its terms are fair and reasonable to the client and are fully disclosed and sent to the client in writing in a way the client can reasonably understand."
      ],
      [
       "(2) Written advice to seek independent counsel",
       "The client is advised in writing that it is desirable to get independent legal advice on the transaction and is given a reasonable opportunity to do so. The client does not have to actually consult another lawyer."
      ],
      [
       "(3) Signed informed consent",
       "The client gives informed consent, in a writing signed by the client, to the essential terms of the transaction and to the lawyer's role, including whether the lawyer is representing the client in the transaction."
      ],
      [
       "Equity-for-fees debate",
       "Theresa Maynard notes lawyers long avoided taking client stock in place of fees; Bill Fenwick's firm declined $50,000 in Apple stock that became worth $12 million. An ABA opinion in 2000 permitted it if the rules are met. Dzienkowski and Peroni argue equity stakes undermine lawyer independence and urge strict enforcement with the burden on the lawyer."
      ]
     ],
     "tip": "Casebook Question 3-10: an attorney took a 2% equity stake in a start-up as her IPO fee, gave a written, fair agreement, advised in writing to seek independent counsel with a reasonable opportunity, and the client signed. All three 1.8(a) conditions are met; the stock's later rise to $10 million and the client's choice not to consult counsel do not create a violation.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.8(e) · Financial Assistance to Clients",
     "explain": [
      "Rule 1.8(e) says a lawyer shall not provide financial assistance to a client in connection with pending or contemplated litigation, with three exceptions. Comment [10] gives two reasons for the ban: subsidizing suits would encourage clients to bring lawsuits they might not otherwise bring, and it would give lawyers too great a financial stake in the litigation.",
      "The first two exceptions are about litigation costs. The third, added by the ABA in August 2020, is a narrow humanitarian exception for basic living expenses of indigent pro bono clients."
     ],
     "items": [
      [
       "(1) Advancing costs",
       "A lawyer may advance court costs and litigation expenses, and repayment may depend on the outcome. Comment [10] says advances are allowed because they are virtually indistinguishable from contingent fees and help ensure access to the courts. Expenses include medical examinations and the costs of obtaining and presenting evidence."
      ],
      [
       "(2) Paying costs for indigent clients",
       "A lawyer representing an indigent client may pay court costs and litigation expenses on the client's behalf, whether or not they are repaid."
      ],
      [
       "(3) Modest gifts for indigent pro bono clients",
       "A lawyer representing an indigent client pro bono (directly, through a nonprofit, or through a law school clinic) may give modest gifts for food, rent, transportation, medicine, and other basic living expenses.",
       [
        "The lawyer may not promise or imply the gifts before being retained or as an inducement to continue the relationship.",
        "The lawyer may not seek or accept reimbursement from the client or anyone affiliated with the client.",
        "The lawyer may not publicize or advertise a willingness to provide the gifts."
       ]
      ],
      [
       "What stays banned",
       "Lawyers may not subsidize lawsuits, including making or guaranteeing loans to clients for living expenses. Outside exception (3), help with living costs is prohibited."
      ]
     ],
     "tip": "Casebook Question 3-11: a legal services attorney representing a client pro bono in an eviction bought school shoes for the client's child. The client is indigent, the representation is pro bono, and the shoes are a modest basic-living gift, so the conduct fits 1.8(e)(3). Watch for the elements: a paying client, a loan, or an advertised offer of gifts would fall outside the exception.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.8(d) & (f) · Other Compensation Limits",
     "explain": [
      "The casebook notes Rule 1.8 also limits how lawyers may be paid in two other ways. These are not in the outline but appear in the assigned fees reading (p. 226)."
     ],
     "items": [
      [
       "1.8(d) · Literary and media rights",
       "Before the representation ends, a lawyer shall not make or negotiate an agreement giving the lawyer literary or media rights to a portrayal or account based in substantial part on information relating to the representation."
      ],
      [
       "1.8(f) · Payment from someone other than the client",
       "A lawyer shall not accept compensation for representing a client from someone other than the client unless: (1) the client gives informed consent; (2) there is no interference with the lawyer's independent professional judgment or with the client-lawyer relationship; and (3) information relating to the representation is protected as Rule 1.6 requires. The casebook notes insurance defense, where an insurer pays for the insured's lawyer, often raises these issues."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.15 · Safekeeping Property (Trust Accounts)",
     "explain": [
      "Rule 1.15 governs money and property of clients and third persons that a lawyer holds in connection with a representation. The core duty is separation: the lawyer keeps others' property apart from the lawyer's own, so it is protected and easy to account for.",
      "The casebook warns that Rule 1.15 varies by state, so a lawyer should check the version where the lawyer practices. It uses Utah's rule, which is virtually identical to the Model Rule."
     ],
     "items": [
      [
       "(a) Keep it separate; keep records",
       "Hold client and third-party property separate from the lawyer's own.",
       [
        "Funds go in a separate account in the state where the lawyer's office is located, or elsewhere with the consent of the client or third person.",
        "Other property must be identified as belonging to the client and safeguarded.",
        "Complete records of the account funds and other property must be kept and preserved for five years after the representation ends."
       ]
      ],
      [
       "(b) Lawyer's own money only for bank charges",
       "A lawyer may deposit the lawyer's own funds in a client trust account only to pay bank service charges on that account, and only in the amount needed for that purpose. Depositing the lawyer's own money for any other purpose violates this paragraph."
      ],
      [
       "(c) Advance fees stay in trust until earned",
       "Legal fees and expenses paid in advance go into the client trust account. The lawyer may withdraw them only as fees are earned or expenses are incurred."
      ],
      [
       "(d) Notify, deliver, account",
       "When the lawyer receives funds or property in which a client or third person has an interest, the lawyer must promptly notify that person, promptly deliver what that person is entitled to receive (unless the rule, other law, or an agreement with the client permits otherwise), and, on request, promptly give a full accounting."
      ],
      [
       "(e) Disputed property stays separate",
       "When two or more persons (one of whom may be the lawyer) claim an interest in property the lawyer holds, the disputed portion stays separate until the dispute is resolved. The lawyer must promptly distribute any portion not in dispute."
      ]
     ],
     "tip": "Casebook Questions 3-12 and 3-13 apply (c) and (e). In 3-12, a lawyer moved $2,000 of a $10,000 advance to her business account before doing the work; under (c) the money could leave the trust account only as earned, and the rule's text has no exception for client approval or accurate predictions. In 3-13, the lawyer billed $2,000 for 10 hours and the client demanded a full refund of the $10,000; under (e) the disputed $2,000 stays in trust and the undisputed $8,000 is returned promptly.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "American Rule & Fee-Shifting Statutes",
     "explain": [
      "Under the American Rule, each party ordinarily pays its own attorney's fees, regardless of who wins. Fee-shifting provisions are the exception: they let a prevailing party recover fees from the opposing party.",
      "Restatement § 38 comment f says prevailing litigants in some types of litigation may recover fees from the other side. Examples are matrimonial and contempt matters, and statutes in civil rights, securities, antitrust, and qui tam actions. These statutes give an incentive to enforce particular laws."
     ],
     "items": [
      [
       "Qui tam action",
       "An action under a statute that lets a private person sue for a penalty, part of which goes to the government or a specified public institution (Black's Law Dictionary, quoted in the casebook)."
      ],
      [
       "Four common characteristics of fee-shifting statutes (slides; Compton)",
       "The professor's slide lists four.",
       [
        "Promote private enforcement of rights in cases too discrete to attract government (DOJ) enforcement; without fee recovery, litigation costs could eliminate that enforcement.",
        "Usually involve civil rights or other rights that should be enforced. The Day 8 notes phrase this as letting people with little or no money vindicate civil rights by recovering the cost.",
        "The relief sought is often injunctive or otherwise non-monetary, so there is no damages recovery from which to pay a contingent fee.",
        "Deter frivolous, bad-faith suits brought under the guise of enforcing federal rights."
       ]
      ]
     ],
     "tip": "Link characteristic three to Rule 1.5(c): an injunction-only civil rights case produces no recovery from which a contingent fee could be paid, so fee-shifting supplies the lawyer's payment.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "42 U.S.C. § 1988 · Prevailing Party",
     "explain": [
      "42 U.S.C. § 1988 (the Civil Rights Attorney's Fees Awards Act, also called the Fees Act) lets a court, in its discretion, award a prevailing party a reasonable attorney's fee as part of costs. Two features matter: the award is discretionary, and the entitlement belongs to the client, not the lawyer.",
      "Only a prevailing party can recover. A settlement can support a fee award, but not every favorable change a lawsuit causes makes the plaintiff a prevailing party."
     ],
     "items": [
      [
       "Fee belongs to the client",
       "The statutory right to fees is the client's. This is why, in Evans v. Jeff D., the client could trade away fees in a settlement, and why Ratliff (noted in the casebook) treated the award as the client's property, allowing a government debt offset that can leave counsel unpaid."
      ],
      [
       "Prevailing party (Buckhannon)",
       "Requires a material alteration of the parties' legal relationship, such as a judgment on the merits or a consent decree."
      ],
      [
       "Catalyst theory rejected",
       "Under Buckhannon, it is not enough that the lawsuit prompted the defendant to change its conduct voluntarily. Waterstone notes this limits fee recovery in injunction suits where defendants change course before judgment, which weakens the incentive to bring those cases."
      ],
      [
       "The governing statute matters",
       "The casebook notes Hardt allows ERISA fees on some degree of success on the merits without prevailing-party status, and some state fee regimes do not require Perdue-style explanations."
      ]
     ],
     "tip": "A defendant's voluntary change after suit is filed does not make the plaintiff a prevailing party; a consent decree does.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Lodestar & Perdue v. Kenny A.",
     "explain": [
      "Courts calculate a statutory fee using the lodestar: reasonable hours worked multiplied by prevailing reasonable hourly rates. Excessive or poorly documented hours may be cut, so the court does not simply accept every hour billed.",
      "Perdue v. Kenny A. ex rel. Winn (2010) addressed when a court may increase (enhance) the lodestar. Children in Georgia's foster-care system (about 3,000) sued over conditions; a consent decree resolved the merits and left § 1988 fees to the court. The district court set the lodestar at about $6 million and added a 75% enhancement ($4.5 million) for performance, results, expenses, and delayed payment. The Supreme Court reversed because the enhancement lacked specific, objective justification.",
      "Holding: superior performance can justify an enhancement only in rare and exceptional circumstances. There is a strong presumption the lodestar is sufficient, and a factor already reflected in the lodestar cannot support an additional award."
     ],
     "items": [
      [
       "Perdue principle (i)",
       "A reasonable fee is one sufficient to induce a capable attorney to take a meritorious civil rights case. Section 1988 aims to promote enforcement, not to enrich attorneys."
      ],
      [
       "Perdue principle (ii)",
       "The lodestar method yields a fee that is presumptively sufficient to meet that goal."
      ],
      [
       "Perdue principle (iii)",
       "An enhancement may be awarded only in rare and exceptional circumstances."
      ],
      [
       "Perdue principle (iv)",
       "The lodestar already includes most, if not all, relevant factors of a reasonable fee, so an enhancement cannot rest on a factor already reflected in it."
      ],
      [
       "Perdue principle (v)",
       "The fee applicant bears the burden of proving the enhancement is necessary."
      ],
      [
       "Perdue principle (vi)",
       "The applicant must produce specific evidence supporting the award, so the calculation is objective and reviewable on appeal."
      ],
      [
       "Exceptional circumstances",
       "The Court identified three situations that may justify an enhancement.",
       [
        "The hourly-rate method fails to capture the attorney's true market value; specific proof must link the attorney's ability to a prevailing market rate.",
        "Extraordinary expense outlays in exceptionally protracted litigation; the enhancement must measure the burden objectively, for example by interest on the expenses.",
        "Exceptional delay in payment beyond ordinary expectations, especially from unjustified defense conduct. Ordinary delay is handled by using current rates or adjusting historical rates to present value."
       ]
      ],
      [
       "Double counting",
       "Complexity and novelty are usually reflected in the number of hours, and counsel's skill and quality in the hourly rate. Using them again to enhance would count them twice. A superior result alone is not enough, because it may reflect weak opponents, favorable rulings, a sympathetic jury, or luck; the applicant must tie the result to superior performance the lodestar does not compensate."
      ],
      [
       "Why the 75% failed",
       "The district judge did not explain the 75% figure, did not connect the resulting top rate of more than $866 per hour to the market, and did not calculate the cost of the extraordinary expenses or delay. The judge's praise based on experience with other cases could not replace reviewable evidence. Specific explanations also let defendants assess settlement exposure and protect public funds when governments pay the award."
      ]
     ],
     "tip": "Casebook Question 3-14 (answer A in the Day 8 notes): an enhancement is legally possible only if extraordinary circumstances are specifically proven. A long, hard case and the judge's sense that counsel deserves more are not enough.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Fee-Waiver Settlements · Evans v. Jeff D. & FRCP 23(e)",
     "explain": [
      "Evans v. Jeff D. (1986) held that § 1988 does not prohibit a settlement conditioned on the plaintiffs waiving attorney's fees. Because the fee entitlement belongs to the client, fees are one remedy the client may trade for better substantive relief.",
      "Federal Rule of Civil Procedure 23(e) adds a check in class actions: the claims, issues, or defenses of a certified class (or a class proposed for settlement) may be settled, voluntarily dismissed, or compromised only with the court's approval."
     ],
     "items": [
      [
       "Facts",
       "One week before trial in a civil rights class action, Idaho offered virtually all the injunctive relief requested, on the condition that the class waive fees and costs. Class counsel (legal aid) accepted because the deal served the clients, then asked the court to approve the relief but strike the waiver. The district court approved the whole agreement and denied fees; the court of appeals struck the waiver; the Supreme Court reversed."
      ],
      [
       "Reasoning",
       "Congress made prevailing parties eligible for a discretionary fee award and gave lawyers no independent, nonwaivable right to fees. Defendants consider their total exposure, including fees, when deciding to settle, so forcing fees outside the bargain could block settlements that give clients faster, more certain relief."
      ],
      [
       "The tension",
       "A waiver can win excellent relief for present clients while leaving counsel unpaid and weakening incentives to bring future civil rights cases. Evans permits that tradeoff while recognizing the tension."
      ],
      [
       "Limits",
       "A court need not approve every fee-waiver settlement. Under Rule 23(e) it evaluates the entire bargain and protects class members. Evans did not decide challenges to systematic state policies or vindictive demands designed to deter civil rights counsel, because the record did not show them."
      ],
      [
       "No cherry-picking",
       "The class could not keep the favorable relief while discarding the fee waiver that induced the offer."
      ]
     ],
     "tip": "Casebook Question 3-15 (answer A in the Day 8 notes): uphold the settlement because § 1988 does not prohibit a settlement conditioned on a fee waiver. Class-action status alone does not make the settlement valid; the court still reviews it under Rule 23(e).",
     "check": {
      "status": "complete",
      "note": ""
     }
    }
   ]
  },
  {
   "title": "Confidentiality & Privilege",
   "overview": [
    "This unit covers three different protections for information in a representation: the ethical duty of confidentiality (Rule 1.6), the evidentiary attorney-client privilege, and work-product protection for litigation materials. The big question on any fact pattern is which protection applies, whether an exception or waiver removes it, and whether the lawyer may (or must) disclose.",
    "The privilege part asks whether a communication meets the four Restatement § 68 elements (communication, privileged persons, in confidence, for legal assistance), how it works for companies (Upjohn, § 73) and nonlawyer agents (Kovel), and how it is lost: exceptions, waiver (Westinghouse, John Doe, § 79), mistaken disclosure (FRE 502, Rule 4.4(b), Nitla), and the crime-fraud exception (§ 82). Work product (§ 87, FRCP 26(b)(3), Marten) protects litigation materials and is harder to waive.",
    "The confidentiality part covers Rule 1.6(a) and its three verbs (reveal, use, safeguard), prospective and former clients (Rules 1.18 and 1.9(c)), and the seven permissive exceptions in Rule 1.6(b), taught through Belge, Spaulding, Alton Logan, and O.P.M. Leasing. It ends with the rules that require disclosure: Rules 3.3 and 4.1 and the Texas abuse-reporting statutes.",
    "On a closed-book multiple-choice exam, expect to identify which doctrine is being tested, find the one privilege element that fails, sort past from future crimes, and remember that Rule 1.6(b) says \"may,\" not \"must.\""
   ],
   "check": {
    "status": "thin",
    "note": "Two blocks thin: (1) Exceptions to the Privilege: the deceased-client and trustee exceptions are only listed in the Day 9 notes and outline, with no rationale or example; (2) Rule 1.6(a): the Class 11 slides comparing Rule 1.6 with Texas Rule 1.05 are image-only in the extracted text, so the Texas comparison is limited to 1.05(a) and (c) from the outline."
   },
   "blocks": [
    {
     "title": "Three Pillars of Protection",
     "explain": [
      "Three separate doctrines protect what passes between a lawyer and a client: the duty of confidentiality, the attorney-client privilege, and work-product protection. They overlap because good representation needs candid communication and some protection from adversaries, but each has its own source, its own coverage, the setting where it applies, and its own exceptions.",
      "Confidentiality is the broadest in coverage and setting. The privilege is narrower and applies only when someone tries to compel evidence. Work product is narrower than confidentiality and more qualified than the privilege. Because the three operate independently, permission to disclose under one does not remove the protection of another."
     ],
     "items": [
      [
       "Duty of confidentiality (Rule 1.6)",
       "An ethical duty from the Rules of Professional Conduct. It covers all information relating to the representation, from any source (not only the client), whether or not the information is secret. It applies at all times: at home, on vacation, and at social events.",
       [
        "Third-party information can be confidential under Rule 1.6 even though it is not privileged.",
        "State versions vary, so the Model Rule and a state's adopted rule are not automatically identical."
       ]
      ],
      [
       "Attorney-client privilege",
       "An evidentiary rule that comes from each jurisdiction's common law or statutes. It protects confidential communications between privileged persons made to get or give legal advice, and it applies only in testimonial or compelled-disclosure settings: trial testimony, depositions, subpoenas, interrogatories, and compelled document production."
      ],
      [
       "Work-product protection",
       "A procedural discovery rule. It covers materials prepared in anticipation of litigation, such as notes, analyses, legal theories, mental impressions, and witness-interview notes. It can reach more than lawyer-client communications, but only if the material was prepared for litigation or trial.",
       [
        "It is qualified: ordinary work product can be obtained on a showing of substantial need and inability to get the equivalent without undue hardship.",
        "Opinions and mental impressions receive stronger protection."
       ]
      ],
      [
       "Underlying facts",
       "None of the three doctrines makes facts immune from discovery. They protect particular communications or materials, or restrict what the lawyer may reveal; they do not erase a witness's own knowledge.",
       [
        "A client's description of an accident to counsel may be privileged, but the client can still be made to testify about the accident itself.",
        "A lawyer's witness-interview notes may be work product, but the opponent can depose the witness about what happened."
       ]
      ],
      [
       "Independent operation",
       "Each doctrine is applied separately. Rule 1.6 creates no discovery privilege, so information that is confidential but not privileged must be produced on a lawful discovery demand. Rule 1.6(b)(6) permits disclosure to comply with other law or a court order.",
       [
        "Question 4-1: a lawyer's dinner-party story about a client seen leaving an adult theater violates Rule 1.6 even though the source was a surveillance tape, not a client communication.",
        "Question 4-2: the preexisting surveillance tape is not privileged and must be produced in response to a lawful discovery demand; acquiring existing evidence does not make it a privileged communication or work product.",
        "Question 4-3: the lawyer's notes of a witness interview are work product, not privileged merely because a lawyer conducted the interview; a discovery request alone does not overcome the protection."
       ]
      ]
     ],
     "tip": "Confidentiality is not a perfect outer circle around the other two: some Rule 1.6 exceptions permit disclosure where no matching privilege exception exists. Ask each doctrine separately on every fact pattern.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Privilege: Rationale & Governing Law",
     "explain": [
      "The privilege is a rule of evidence, while confidentiality is a rule of professional responsibility. The two connect because the lawyer's duty to invoke and protect the privilege is part of the Rule 1.6 duty of confidentiality.",
      "The privilege exists to encourage clients to talk fully and frankly with their lawyers. Sound legal advice requires a fully informed lawyer, and good advice serves public ends: obeying the law and administering justice. The cost is that the privilege keeps relevant, reliable evidence away from the factfinder, so courts read it narrowly."
     ],
     "items": [
      [
       "Rationale (Upjohn)",
       "Full and frank communication lets the lawyer be fully informed, which promotes the broader public interest in observance of law and the administration of justice.",
       [
        "The rationale rests on an untested assumption that without the privilege clients would hold back.",
        "Critics say lawyers created the privilege for themselves (there is no common-law accountant-client privilege), long-standing exceptions have not visibly chilled candor, and the corporate privilege shields entrenched interests."
       ]
      ],
      [
       "Construed narrowly",
       "Because the privilege withholds relevant, reliable evidence, courts interpret it narrowly."
      ],
      [
       "FRE 501 (Federal Rule of Evidence 501)",
       "Federal common law, as interpreted by federal courts in light of reason and experience, governs privilege unless the Constitution, a federal statute, or Supreme Court rules provide otherwise. In a civil case, state law governs privilege for a claim or defense on which state law supplies the rule of decision (for example, a diversity case).",
       [
        "State law governs in state court.",
        "No Federal Rule of Evidence defines the privilege's scope; a 2010 draft rule adopting the Restatement definition never moved forward."
       ]
      ],
      [
       "FRE 502",
       "Adopted in 2008, it governs when disclosure waives the privilege or work product, with effect in both state and federal court. It does not define what is privileged."
      ],
      [
       "FRCP 26(b)(5) (Federal Rule of Civil Procedure 26(b)(5))",
       "In federal court, a party claims privilege through a privilege log listing the withheld documents."
      ],
      [
       "Burden",
       "The party invoking the privilege bears the burden of establishing each element."
      ],
      [
       "Restatement as authority",
       "The Restatement is secondary authority, but it tracks the law as state courts nationwide apply it."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Privilege Elements",
     "explain": [
      "Restatement § 68 sets the four elements of the privilege. The proponent must prove all four. Restatement §§ 69 through 72 then define each element in more detail.",
      "In re County of Erie states the Second Circuit's version of the test in three parts. It folds the privileged-persons element into the phrase \"between client and counsel\" and adds that the communication must actually be kept confidential, not only intended to be."
     ],
     "items": [
      [
       "Restatement § 68",
       "The privilege protects (1) a communication, (2) made between privileged persons, (3) in confidence, (4) for the purpose of obtaining or providing legal assistance for the client. It is invoked as provided in § 86.",
       [
        "Communication: defined in § 69.",
        "Privileged persons: defined in § 70.",
        "In confidence: defined in § 71.",
        "Legal assistance: defined in § 72."
       ]
      ],
      [
       "County of Erie test",
       "The proponent must show a communication (1) between client and counsel that (2) was intended to be and was in fact kept confidential and (3) was made for the purpose of obtaining or providing legal advice, as opposed to advice on policy."
      ],
      [
       "In re County of Erie (2d Cir. 2007)",
       "Arrestees sued Erie County under § 1983 over a blanket strip-search policy. The County withheld emails in which an Assistant County Attorney reviewed strip-search law, assessed the existing policy, recommended alternatives, and monitored implementation. The magistrate ordered ten emails produced as policymaking. The Second Circuit granted mandamus and held each email was sent for the predominant purpose of soliciting or rendering legal advice, so it was privileged.",
       [
        "Remanded to decide whether distribution within the Sheriff's Office waived the privilege.",
        "Mandamus was granted because the issue was one of first impression and the privilege would be lost if review waited; Mohawk Industries v. Carpenter (2009) later held post-judgment appeal is an adequate safeguard for disclosure orders."
       ]
      ]
     ],
     "tip": "Every element must be present. On an exam, find the one element that fails: no communication (a lawyer's own observation), an outsider present, or a nonlegal purpose.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Legal Assistance, Communication & Privileged Persons",
     "explain": [
      "The legal-assistance element asks why the client went to the lawyer. If the predominant purpose was legal advice, the whole communication is protected, including practical and business considerations that are part of good legal advice. If the lawyer was doing work a nonlawyer could do, there is no privilege.",
      "The communication element protects what was said or written, not the facts underneath. The privileged-persons element defines who can be inside the circle: the client, the lawyer, and agents who help them communicate or help the lawyer represent the client."
     ],
     "items": [
      [
       "Restatement § 72 (legal assistance)",
       "A communication is for legal assistance if it is made to, or to assist, a person who is a lawyer, or whom the client reasonably believes is a lawyer, and whom the client consults to obtain legal assistance."
      ],
      [
       "Predominant purpose",
       "A communication is privileged if its predominant purpose is legal advice. Legal advice interprets and applies legal principles to guide future conduct or assess past conduct. It relies on legal education to inform judgment, but there is no bright line.",
       [
        "Question 4-4: a client whose dominant intent was legal advice on a transaction keeps the privilege even though he also asked whether it was \"a good and workable deal.\""
       ]
      ],
      [
       "The complete lawyer",
       "A full answer to a legal question also covers feasibility, implementation, risks, alternatives, what others are doing, and collateral costs such as expense, politics, morals, and appearances. When the predominant purpose is legal, those considerations are part of the legal advice and cannot be cut out. Purpose is judged by the advice sought as a whole, not passage by passage."
      ],
      [
       "Compliance advice",
       "Once a lawyer is asked to assess whether a client complies with the law, the lawyer's recommending a compliant policy, promoting compliance, or overseeing implementation is legal advice (County of Erie). The County wanted to learn its Fourth Amendment duties and how to meet them, which is a legal objective."
      ],
      [
       "Government clients",
       "In civil litigation with private parties, a government's claim to the privilege is on par with an individual's or a corporation's. The rationale applies with special force because officials must follow the law and should be encouraged to seek legal advice."
      ],
      [
       "Nonlegal services",
       "A client cannot buy a privilege by hiring a lawyer to do what a nonlawyer could do, such as business, marketing, or policy advice, records-custodian work, or tax-return preparation. A lawyer consulted in another capacity (policy advisor, media expert, business consultant, banker, friend) is not giving privileged advice.",
       [
        "There is no common-law accountant or tax-preparer privilege, so hiring a lawyer to prepare a return adds no protection.",
        "The information is still Rule 1.6 information: the lawyer may not volunteer it, but must produce it on a lawful demand.",
        "A lawyer's lack of formal policymaking authority is not decisive, and dual roles (such as in-house counsel) bear on purpose."
       ]
      ],
      [
       "Restatement § 69 (communication)",
       "Any expression through which a privileged person undertakes to convey information to another privileged person, and any document or record revealing that expression."
      ],
      [
       "Facts vs. communications",
       "The privilege protects communications, not underlying facts. Facts employees gathered at counsel's direction are discoverable, but a question whose answer would reveal the communication, such as \"With whom did you discuss this analysis?\", is improper (In re Six Grand Jury Witnesses)."
      ],
      [
       "Lawyer's own observations",
       "What the lawyer personally sees is not a communication and is not privileged, though it remains Rule 1.6 information.",
       [
        "Question 4-5: a lawyer who sees the client skiing without the claimed body cast may be subpoenaed about it. The lawyer cannot volunteer it but must comply with the subpoena (Rule 1.6(b)(6)). Withdrawal does not matter."
       ]
      ],
      [
       "Restatement § 70 (privileged persons)",
       "The client (including a prospective client), the client's lawyer, agents of either who facilitate communications between them, and agents of the lawyer who facilitate the representation (for example, a paralegal)."
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Expectation of Confidentiality",
     "explain": [
      "A communication is \"in confidence\" only if the speaker reasonably believed, at the moment of speaking, that no one outside the privileged circle would learn its contents. The test looks at the time of the communication and the surrounding circumstances.",
      "The privilege fails when an outsider is present or the speaker knows others have access. It also fails for information given so it can be made public, or a draft meant for the other side. The \"You Be the Judge\" email simulation applies these rules to a chain of business emails."
     ],
     "items": [
      [
       "Restatement § 71",
       "A communication is in confidence if, at the time and in the circumstances of the communication, the communicating person reasonably believes that no one will learn its contents except a privileged person or another person covered by a similar privilege."
      ],
      [
       "No expectation",
       "There is no expectation of confidentiality if a nonprivileged person overhears the conversation (in an elevator or restaurant) or if the person knows others have access (a work email account, an unprotected shared home computer).",
       [
        "Unlawful interception, such as hacking or illegal recording, does not destroy the expectation."
       ]
      ],
      [
       "Timing",
       "Confidentiality is judged at the time of the communication. Information given for public disclosure is not in confidence.",
       [
        "Question 4-6: company personnel gave information knowing it would appear in public offering filings, so it was never confidential; cancelling the offering later does not restore the privilege."
       ]
      ],
      [
       "Physical evidence (People v. Meredith)",
       "The client's statement about where he left a burned wallet was privileged. When the defense removed the wallet, the privilege no longer covered its original location and condition. If counsel leaves evidence in place, observations derived from privileged communications stay protected."
      ],
      [
       "Rule 3.4(a)",
       "A lawyer shall not unlawfully obstruct access to evidence or unlawfully alter, destroy, or conceal material with potential evidentiary value, or counsel or assist another person to do so."
      ],
      [
       "Email simulation (Restatement jurisdiction)",
       "In-house counsel communications are protected the same as outside counsel's.",
       [
        "Privileged: President asks the GC (general counsel) for contract requirements; GC lists them; President relays the advice to the VP who needs it to act for the company (§ 73(4)(b)); President asks GC to draft; GC writes to the in-house paralegal (lawyer's agent, § 70).",
        "Not privileged: business instructions and reports among nonlawyers with no legal advice; the draft sent to the VP to show the other side (no expectation of confidentiality); anything sent to the opposing party; post-dispute emails among nonlawyers, even if they mention relying on counsel.",
        "Privileged when made but waived: a GC email that is later forwarded to the other side."
       ]
      ]
     ],
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Organizational Clients: Upjohn & § 73",
     "explain": [
      "When the client is a company, the question is which employees' communications with counsel are privileged. Before Upjohn, some courts used the control group test, which protected only senior managers who direct the company's response to legal advice. Upjohn rejected that test.",
      "The Court reasoned that the privilege protects the flow of information to the lawyer, and in a company the facts are often held by middle- and lower-level employees. Restatement § 73 states the organizational rule in four parts."
     ],
     "items": [
      [
       "Upjohn Co. v. United States (1981)",
       "Auditors found a foreign subsidiary paid foreign officials to win government business. The General Counsel ran an internal investigation through a \"highly confidential\" questionnaire to foreign managers and interviews with them and 33 other employees. The IRS summoned the questionnaires and notes. The Supreme Court rejected the control group test and held the communications were protected, to be decided case by case under FRE 501.",
       [
        "The control group test discourages employee candor, hampers compliance work, and is unpredictable: \"An uncertain privilege ... is little better than no privilege at all.\"",
        "It is the communication that is protected, not the facts."
       ]
      ],
      [
       "Upjohn factors (employee communications privileged where)",
       "The facts that made the employees' communications privileged:",
       [
        "Made by employees to counsel acting as counsel, at the direction of corporate superiors, to secure legal advice for the company.",
        "The information was not available from upper management.",
        "The matters were within the employees' corporate duties.",
        "The employees knew they were questioned so the company could obtain legal advice.",
        "The communications were treated as confidential when made and kept confidential."
       ]
      ],
      [
       "No zone of silence",
       "The opponent is in no worse position than if the communications never happened. It can still question the employees about the underlying facts (the IRS had the list and had interviewed about 25). Convenience does not overcome the privilege."
      ],
      [
       "Restatement § 73",
       "For an organizational client (corporation, partnership, association, trust, estate, sole proprietorship, for-profit or nonprofit), the privilege extends to a communication that:",
       [
        "(1) otherwise qualifies as privileged under §§ 68–72;",
        "(2) is between an agent of the organization and a privileged person under § 70;",
        "(3) concerns a legal matter of interest to the organization; and",
        "(4) is disclosed only to privileged persons and to other agents of the organization who reasonably need to know it to act for the organization."
       ]
      ],
      [
       "Intra-corporate communications (In re New York Renu)",
       "Communications within the company to counsel are privileged if the predominant intent is to seek legal advice. The privilege survives internal distribution limited to people who need to know, and the company bears the burden of showing that."
      ],
      [
       "Who holds the privilege",
       "The organization holds the privilege and may waive it, even over an employee's objection."
      ],
      [
       "Global perspective (Akzo Nobel, 2010)",
       "The European Court of Justice held there is no EU-level privilege for in-house counsel because they lack independence, and suggested the privilege may not reach non-EU lawyers."
      ]
     ],
     "tip": "Upjohn protects the employee's communication, not the facts the employee knows. The opponent can still depose the employee about what happened.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Employees, Upjohn Warnings & Common Interest",
     "explain": [
      "When company counsel interviews an employee, the employee may assume counsel is also the employee's lawyer. If that assumption is unreasonable, the employee has no personal privilege and the company can waive the privilege and hand the interview to prosecutors. Rule 1.13(f) and the Upjohn warning address this risk.",
      "Separate parties can sometimes share privileged information without waiving it, through a common interest (joint defense) arrangement or as co-clients of the same lawyer. These arrangements have limits."
     ],
     "items": [
      [
       "In re Grand Jury Subpoena: Under Seal (4th Cir. 2005)",
       "AOL's outside counsel interviewed three employees and told them counsel represented AOL, the privilege belonged to AOL, AOL could waive it, and counsel \"could\" represent them if no conflict appeared. AOL later waived and a grand jury subpoenaed the interview memos. The court held the employees had no personal privilege: the privilege belonged to AOL alone and AOL waived it.",
       [
        "No one said \"we represent you,\" no employee asked for representation, and no personal legal advice was sought or given.",
        "\"We can represent you\" is not \"we do represent you.\"",
        "Had counsel actually represented the employees, it could not have waived their privilege when a conflict arose; it would have had to withdraw from all representation and keep all confidences.",
        "The court did not endorse these \"watered-down\" Upjohn warnings."
       ]
      ],
      [
       "Individual employee claims",
       "A person claiming a personal privilege must prove he was a client or affirmatively sought to become one. There must be an objectively reasonable, mutual understanding; a subjective belief alone is not enough, and the putative client must show the belief was reasonable."
      ],
      [
       "Rule 1.13(f)",
       "A lawyer for an organization must explain the identity of the client when the lawyer knows or reasonably should know that the organization's interests are adverse to the constituent's."
      ],
      [
       "Upjohn warning",
       "The warning must say both \"I represent the company\" and \"I do not represent you.\""
      ],
      [
       "Common interest (joint defense) privilege",
       "Protects communications among parties who share a common legal interest in litigation, letting them pool information without waiving the privilege as to outsiders. The proponent must show some common legal interest and some form of joint strategy; timing matters.",
       [
        "Cooperating in an internal investigation is not enough. In the AOL case, the common interest agreement came months after the interviews, so it did not cover them.",
        "It fails if the parties' interests are fundamentally different.",
        "If members later become adverse, shared communications can be used against each other, and their lawyers are ordinarily disqualified (Rule 1.9(c)(1))."
       ]
      ],
      [
       "Co-clients",
       "A communication on a matter of common interest is privileged against third persons, and any co-client may invoke it unless the communicating client waived. Unless the clients agree otherwise, it is not privileged as between the clients. Communications among clients outside the lawyer's presence are not privileged."
      ]
     ],
     "tip": "A company lawyer's interview notes belong to the company. If the warning only says counsel \"can\" represent the employee, the employee has no privilege to stop the company from waiving.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Nonlawyer Agents (Kovel)",
     "explain": [
      "Bringing a nonlawyer into a lawyer-client communication normally destroys confidentiality. The Kovel doctrine is a narrow exception: the nonlawyer counts as part of the privileged circle only if the nonlawyer's work is necessary for the lawyer to give legal advice.",
      "In re New York Renu applied the doctrine to a public relations firm and held that copying the firm on emails seeking legal advice destroyed the privilege for those emails."
     ],
     "items": [
      [
       "Kovel doctrine",
       "A communication to a nonlawyer is privileged only if the nonlawyer's services are necessary to the lawyer's legal representation, not merely helpful to the client. Importance to the lawyer's work alone is not enough (Ackert)."
      ],
      [
       "In re New York Renu with Moistureloc (D.S.C. 2008)",
       "In multidistrict litigation over contaminated contact-lens solution, Bausch & Lomb withheld emails on which it had copied its public relations firm, Hill & Knowlton. The special master held the emails sent to the PR firm were not privileged; a later email in the same chain not sent to the firm stayed privileged.",
       [
        "B&L offered only a conclusory affidavit that the firm was \"necessary\" and showed no link to legal advice.",
        "In one email the PR firm suggested using optical shops for product returns and had to be told that was illegal: it was giving business advice contrary to the legal advice.",
        "Diversity case, so New York privilege law applied under FRE 501."
       ]
      ],
      [
       "Public relations",
       "Standard PR advice is not within the privilege. \"A media campaign is not a litigation strategy\" (Haugh). Copying a PR firm on a request for legal advice destroys the privilege for that communication.",
       [
        "Outliers on extreme facts: Copper Market (PR firm was the functional equivalent of an in-house department); In re Grand Jury Subpoenas (PR firm hired by counsel to influence prosecutors' charging decision).",
        "A later Renu opinion held regulatory experts hired by outside counsel to help respond to the FDA (Food and Drug Administration) fell within Kovel."
       ]
      ],
      [
       "Retention practice pointer",
       "To support Kovel protection in a close case: have the lawyer retain the nonlawyer, define the engagement as assisting the lawyer's legal advice, and document in the file why the services are necessary."
      ]
     ],
     "tip": "The test is necessity to the lawyer's legal advice. \"Helpful to the client\" or \"important to the case\" is not enough.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Exceptions to the Privilege",
     "explain": [
      "Even when every element is met, some categories of communication are not privileged. The 2010 draft federal rule, which tracks the Restatement, lists them. The crime-fraud exception is covered in its own block."
     ],
     "items": [
      [
       "Deceased client",
       "No privilege where the parties are claiming through the same deceased client, such as competing heirs."
      ],
      [
       "Crime or fraud",
       "No privilege where the client consulted the lawyer to get help with a crime or fraud, or later used the lawyer's advice or services to commit one."
      ],
      [
       "Waiver by the client",
       "The client's waiver removes the privilege (see the waiver block)."
      ],
      [
       "Trustees",
       "No privilege for a trustee's communications with counsel about trust administration, when relevant to a beneficiary's claim that the trustee breached its duties."
      ],
      [
       "Organizations in constituent disputes",
       "In a dispute between an organization and its shareholders or other constituents, there is no privilege if:",
       [
        "the managers are charged with breach of their duties;",
        "the communication predates and relates directly to the charges; and",
        "the requesting party's need for it is sufficiently compelling."
       ]
      ],
      [
       "Forwarding",
       "Forwarding a privileged communication to the opposing party waives the privilege for that communication. A draft meant for the other side was never in confidence."
      ]
     ],
     "check": {
      "status": "thin",
      "note": "Day 9 notes (draft federal rule excerpt) and the outline only list the deceased-client and trustee exceptions; no source explains their rationale or gives an example beyond the one-line description."
     }
    },
    {
     "title": "Waiver of the Privilege",
     "explain": [
      "Waiver means the privilege is lost even though every element is met. Courts use the term broadly: it covers forfeiture by conduct or mistake, not only a knowing, voluntary giving up of the privilege. Waiver by conduct is often a finding that it would be unfair to let the holder assert the privilege later.",
      "The client holds the privilege, so the client (or someone acting with the client's authority) waives it. Two cases reject arguments that a disclosure for a good reason should not count: Westinghouse (disclosure to the government) and In re John Doe Corp. (disclosure for business due diligence)."
     ],
     "items": [
      [
       "Who can waive",
       "The client holds the privilege and the power to waive it. The lawyer has implied authority to waive in the course of the representation."
      ],
      [
       "Corporations",
       "The power to waive rests with management and is normally exercised by the officers and directors (CFTC v. Weintraub).",
       [
        "An officer who resigned can no longer assert or waive the privilege.",
        "When control passes to new management, the authority to assert and waive passes with it.",
        "A bankruptcy trustee can waive, even over the objection of former and current officers. The same applies to a bankrupt partnership."
       ]
      ],
      [
       "Westinghouse Elec. Corp. v. Republic of the Philippines (3d Cir. 1991)",
       "Outside counsel investigated whether Westinghouse bribed Philippine officials. Westinghouse gave the report to the SEC and DOJ to cooperate, and the Republic later sued and demanded it. Held: a party who discloses privileged information to the government does not keep the privilege as to private parties. There is no selective waiver.",
       [
        "Corporations already have strong incentives to cooperate (fines, indictment, regulatory duties), so selective waiver is not needed to encourage cooperation.",
        "Giving information to one side and shielding it from others is unfair.",
        "A confidentiality agreement with the government does not preserve the privilege. Clear majority of circuits; Diversified Industries (8th Cir. 1977) is the outlier.",
        "Question 4-7: disclosing the report to the DOJ waived the privilege, and the DOJ confidentiality agreement does not bind private plaintiffs."
       ]
      ],
      [
       "In re John Doe Corp. (2d Cir. 1982)",
       "The company showed an internal investigation report to the underwriter's counsel during due diligence for a public offering and argued the disclosure was required, not voluntary. Held: no due diligence exception. \"The calculated use of otherwise privileged materials for commercial purposes will waive the privilege,\" no matter what the economic pressures."
      ],
      [
       "Restatement § 79",
       "The privilege is waived if the client, the client's lawyer, or another authorized agent of the client voluntarily discloses the communication in a nonprivileged communication. This applies where FRE 502 does not."
      ]
     ],
     "tip": "Cooperating with the government or a business partner is a choice with a price: sharing privileged material with anyone outside the circle waives it as to everyone.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Mistaken Disclosures & Receiving Privileged Material",
     "explain": [
      "Mistaken disclosure is mostly a problem in large electronic discovery, where privilege review can cost millions. Parties can agree in advance that a mistaken production is not a waiver (quick peek and clawback agreements), and FRE 502 sets uniform rules for scope of waiver and inadvertent disclosure.",
      "On the receiving side, Rule 4.4(b) requires a lawyer who gets something obviously sent by mistake to notify the sender. Whether the recipient must return it, and whether the privilege was waived, are questions for other law. In re Nitla sets the Texas standard for disqualifying a lawyer who reviewed the other side's privileged documents."
     ],
     "items": [
      [
       "Quick peek",
       "The responding party provides requested materials for initial examination without waiving any privilege or protection. The requesting party then designates what it wants, and only those documents are screened for privilege."
      ],
      [
       "Clawback agreement",
       "Production without intent to waive is not a waiver so long as the responding party identifies the documents mistakenly produced; those documents must then be returned. A party that signs one cannot later argue the other side's mistake was a waiver.",
       [
        "Quick peek and clawback agreements bind only the parties in that proceeding, so a third party in later litigation can still argue waiver.",
        "Both sides must agree, and a side with little data to produce has little reason to."
       ]
      ],
      [
       "FRE 502 purpose",
       "Settles inadvertent-disclosure and subject-matter-waiver disputes with uniform rules and cuts privilege-review costs. It does not decide whether something is privileged and does not address waivers without disclosure (such as an advice-of-counsel defense)."
      ],
      [
       "FRE 502(a) (scope of waiver)",
       "A waiver by disclosure in a federal proceeding or to a federal office or agency extends to undisclosed communications only if:",
       [
        "(1) the waiver is intentional;",
        "(2) the disclosed and undisclosed communications concern the same subject matter; and",
        "(3) they ought in fairness to be considered together."
       ]
      ],
      [
       "FRE 502(b) (inadvertent disclosure)",
       "A disclosure in a federal proceeding or to a federal office or agency is not a waiver if:",
       [
        "(1) the disclosure is inadvertent;",
        "(2) the holder took reasonable steps to prevent disclosure; and",
        "(3) the holder promptly took reasonable steps to rectify the error, including following FRCP 26(b)(5)(B).",
        "This is the majority middle-ground view. Factors include precautions taken, time to rectify, scope of discovery, extent of disclosure, and fairness. There is no duty to review after production, but the holder must follow up on obvious signs of a mistake."
       ]
      ],
      [
       "FRE 502(c)",
       "A disclosure in a state proceeding, not subject to a state-court order, is not a waiver in a federal proceeding if it would not be a waiver under Rule 502 had it been made in a federal proceeding, or is not a waiver under the law of the state where it occurred."
      ],
      [
       "FRE 502(d)",
       "A federal court may order that disclosure connected with the pending litigation is not a waiver. The order controls in every other federal or state proceeding and binds nonparties, whether or not the parties agreed.",
       [
        "Question 4-8: a 502(d) order protects against waiver in later litigation, even against a third party not in the first case."
       ]
      ],
      [
       "FRE 502(e)",
       "A party agreement on the effect of disclosure binds only the parties unless it is incorporated into a court order."
      ],
      [
       "FRE 502(f)",
       "The rule applies to state proceedings and to federal court-annexed and court-mandated arbitration, even if state law supplies the rule of decision."
      ],
      [
       "Rule 4.4(a)",
       "In representing a client, a lawyer shall not use means that have no substantial purpose other than to embarrass, delay, or burden a third person, or use methods of obtaining evidence that violate the legal rights of such a person."
      ],
      [
       "Rule 4.4(b)",
       "A lawyer who receives a document or electronically stored information relating to the representation and knows or reasonably should know it was inadvertently sent shall promptly notify the sender.",
       [
        "Comment [2]: a document is inadvertently sent when it is accidentally transmitted, such as a misaddressed email or a document accidentally included. Whether the lawyer must do more, such as return it, and whether the privilege was waived, are matters of law beyond the Rules.",
        "Covers metadata, but only if the receiving lawyer knows or reasonably should know the metadata was inadvertently sent.",
        "States vary: New Jersey requires the lawyer to stop reading, notify, and return; others let the recipient read and use it."
       ]
      ],
      [
       "In re Nitla S.A. de C.V. (Tex. 2002)",
       "The trial court ordered Bank of America to produce documents over its privilege objection and handed them directly to Nitla's counsel, who reviewed them in reliance on the order. A reviewing court later held most were privileged, and the bank moved to disqualify. Held: no disqualification. The movant must show:",
       [
        "(1) opposing counsel's review of the privileged documents caused actual harm to the moving party; and",
        "(2) disqualification is necessary because the trial court lacks any lesser means to remedy the harm.",
        "Disqualification is severe: it takes away chosen counsel, disrupts the case, and invites dilatory use. Disciplinary rules are guidelines, and even a violation requires actual prejudice; here counsel violated no rule.",
        "The bank showed only that the documents might have led to four new witnesses; quashing those depositions was a lesser cure."
       ]
      ]
     ],
     "tip": "Rule 4.4(b) requires only notice to the sender. Return of the document and waiver are left to other law, such as FRE 502(b) or a clawback agreement.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Crime-Fraud Exception",
     "explain": [
      "The privilege protects clients who seek advice about the law, including advice about past wrongdoing. It does not protect a client who uses the lawyer to commit or further a crime or fraud. Restatement § 82 states the majority rule.",
      "The line is between past and future: getting a defense for a past crime is at the core of the privilege, while getting help with an ongoing or future crime or fraud is outside it. The client's intent controls, so the exception applies even if the lawyer had no idea."
     ],
     "items": [
      [
       "Restatement § 82",
       "The privilege does not apply to a communication occurring when a client:",
       [
        "(a) consults a lawyer for the purpose, later accomplished, of obtaining assistance to engage in a crime or fraud or aiding a third person to do so; or",
        "(b) regardless of the client's purpose at the time of consultation, uses the lawyer's advice or other services to engage in or assist a crime or fraud.",
        "Under (b), a client who consulted innocently still loses the privilege if he later uses the advice to commit a crime or fraud."
       ]
      ],
      [
       "Required showing (In re Grand Jury, 11th Cir. 1988)",
       "The party seeking the communication must make:",
       [
        "(1) a prima facie showing that the client was engaged in or planning a crime or fraud when he sought the advice, or committed one after receiving it; and",
        "(2) a showing that the lawyer's assistance was obtained in furtherance of, or was closely related to, the crime or fraud."
       ]
      ],
      [
       "Completed crime",
       "A completed crime is not required if the client consulted the lawyer in an effort to complete one (In re Grand Jury Proceedings, 9th Cir. 1996). That court's requirement that the client intend the crime at the time of consultation is a minority view that conflicts with § 82(b)."
      ],
      [
       "Lawyer's knowledge irrelevant",
       "The client's knowledge and intent control. The lawyer may be an unwitting instrument, because the privilege exists for the client."
      ],
      [
       "Past vs. future",
       "Seeking representation for a past crime or fraud is protected. Only ongoing or future misconduct falls outside.",
       [
        "Asking whether a proposed course of conduct is lawful is protected; that is where the privilege's justification is strongest.",
        "Not protected: a client who already knows a plan is unlawful and uses counsel to carry it out (asking for ideas to backdate questionable loans), or who seeks help covering up past misconduct.",
        "Question 4-9: \"I already destroyed documents\" concerns a past act and is privileged; \"Which documents should I destroy?\" seeks help with a crime or fraud and is not privileged, even though nothing more was destroyed."
       ]
      ],
      [
       "Restatement § 93",
       "The crime-fraud exception applies to work product the same way: it reaches ongoing or future crimes or frauds, not work product prepared to represent a client for a past one."
      ]
     ],
     "tip": "Sort each client statement by time: a statement about what the client already did is protected; a request for help with what the client is about to do is not.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Work-Product Protection",
     "explain": [
      "Work-product protection keeps an adversary from getting the materials a lawyer prepares for litigation. Hickman v. Taylor explained why: if opposing counsel could get such materials on demand, \"much of what is now put down in writing would remain unwritten.\" It is separate from the privilege but also limits compelled disclosure.",
      "There are two tiers. Ordinary work product can be discovered on a showing of substantial need and undue hardship. Opinion work product (the lawyer's mental impressions, conclusions, opinions, and legal theories) gets much stronger protection. The material must have been prepared because of litigation that was real and imminent (Marten)."
     ],
     "items": [
      [
       "Restatement § 87",
       "Work product is tangible material or its intangible equivalent in unwritten or oral form, other than underlying facts, prepared by the lawyer for litigation then in progress or in reasonable anticipation of future litigation.",
       [
        "Opinion work product: the lawyer's opinions or mental impressions. All other work product is ordinary work product.",
        "Immune from discovery to the extent stated in § 88 (ordinary) and § 89 (opinion), when invoked as described in § 90.",
        "Examples: documents assembled for the case, notes and impressions of evidence, witness-interview notes, outlines of direct and cross.",
        "\"Litigation\" includes court and administrative proceedings, grand juries, agency appeals, and agency investigations deciding whether to bring proceedings."
       ]
      ],
      [
       "FRCP 26(b)(3)(A)",
       "Documents and tangible things prepared in anticipation of litigation or for trial by or for a party or its representative are ordinarily not discoverable, but may be discovered if (i) they are otherwise discoverable under Rule 26(b)(1), and (ii) the party shows substantial need for them and cannot, without undue hardship, obtain their substantial equivalent by other means.",
       [
        "Criminal counterpart: FRCrP 16 (Federal Rule of Criminal Procedure 16)."
       ]
      ],
      [
       "FRCP 26(b)(3)(B)",
       "Even if discovery is ordered, the court must protect the mental impressions, conclusions, opinions, or legal theories of a party's attorney or representative."
      ],
      [
       "FRCP 26(b)(3)(C)",
       "A party or other person may obtain its own previous statement about the action without the required showing."
      ],
      [
       "Upjohn Co. v. United States (1981) (work product)",
       "The IRS summoned the General Counsel's notes and memos of employee interviews, which went beyond recording the employees' answers. The magistrate ordered disclosure on a substantial need and undue hardship showing. Held: work product applies to IRS summonses, and the magistrate used the wrong standard.",
       [
        "To the extent the notes reveal communications, they are covered by the attorney-client privilege.",
        "To the extent they reveal the attorney's mental processes, substantial need plus undue hardship is not enough to compel them.",
        "They are not necessarily never discoverable; the Court required \"a far stronger showing of necessity and unavailability by other means.\""
       ]
      ],
      [
       "Marten v. Yellow Freight System, Inc. (D. Kan. 1998)",
       "A fired employee who had filed an EEOC (Equal Employment Opportunity Commission) charge sought meeting minutes of the Employee Review Committee, drafted by an in-house lawyer who was a voting member. Held: not work product, because the company did not show the minutes were created primarily for litigation. The test has two parts:",
       [
        "Causation: the document was prepared because of anticipated litigation, judged by its primary motivating purpose.",
        "Reasonableness: the threat of litigation was real and imminent, not an inchoate possibility or even a likely chance.",
        "The EEOC charge made litigation imminent, but there must be a nexus to that litigation; minutes of an ordinary business meeting are a business record.",
        "An attorney's authorship alone does not make a business document work product: a party may not cloak a document by having business matters handled by attorneys."
       ]
      ],
      [
       "Question 4-10",
       "A lawyer's notes of a call were not work product because no investigation was pending or anticipated at the time of the call. The fact that the notes contained mental impressions does not matter when the anticipation-of-litigation element fails."
      ],
      [
       "Who holds it",
       "The privilege mainly protects the client's interest; work product mainly protects the attorney's. Under the majority view and the Restatement, both the attorney and the client may assert and waive work-product protection (minority: only the attorney may assert it)."
      ],
      [
       "Restatement § 91 (waiver)",
       "Work-product immunity is waived if the client, the client's lawyer, or another authorized agent:",
       [
        "(1) agrees to waive the immunity;",
        "(2) disclaims protection and (a) another person reasonably relies on the disclaimer to that person's detriment, or (b) reasons of judicial administration require that the disclaimer not be revoked;",
        "(3) in a proceeding before a tribunal, fails to object properly to an attempt to give or extract evidence of work product; or",
        "(4) discloses the material to third persons in circumstances where there is a likelihood that an adversary or potential adversary will obtain it."
       ]
      ],
      [
       "Waiver contrast (§ 79 vs. § 91)",
       "Any voluntary disclosure to a third person waives the privilege (§ 79). Disclosure waives work product only when it is likely to reach an adversary (§ 91(4)). Work product is harder to waive by disclosure because its purpose is protection from adversaries, not secrecy from everyone."
      ]
     ],
     "tip": "Two traps: a document written by a lawyer is not work product unless it was prepared because of real, imminent litigation; and opinion work product cannot be compelled on the ordinary substantial-need showing.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.6(a): The Duty of Confidentiality",
     "explain": [
      "Rule 1.6(a) is the basic ethical rule: a lawyer shall not reveal information relating to the representation of a client. It covers more information than the privilege. Rule 1.6(a) itself contains two exceptions, client informed consent and implied authorization, and paragraph (b) adds seven more.",
      "People v. Belge shows how far the duty reaches: a defense lawyer who learned from his client about other murders and found a victim's body owed the client confidentiality. Texas uses Rule 1.05 in place of Model Rule 1.6."
     ],
     "items": [
      [
       "Rule 1.6(a)",
       "A lawyer shall not reveal information relating to the representation of a client unless (1) the client gives informed consent, (2) the disclosure is impliedly authorized to carry out the representation, or (3) paragraph (b) permits it."
      ],
      [
       "Rule 1.0(e) (informed consent)",
       "Informed consent is the client's agreement to a proposed course of conduct after the lawyer has communicated adequate information and explanation about the material risks of, and reasonably available alternatives to, that conduct."
      ],
      [
       "Broader than the privilege",
       "The duty covers more information than the evidentiary privilege: information from any source, whether or not secret."
      ],
      [
       "\"Information relating to the representation\"",
       "The phrase is broad and, depending on the matter, can cover all kinds of background and personal information about the client.",
       [
        "Broader states: New York covers information gained \"during or relating to\" the representation.",
        "Narrower states: D.C. and Michigan limit protected third-party information to information that is embarrassing or detrimental to the client or that the client asked be held inviolate."
       ]
      ],
      [
       "Widely known information",
       "Widely known information is still confidential under Model Rule 1.6. New York's rule ordinarily excludes information generally known in the local community or in the trade, field, or profession. Discipline for disclosing widely known information is unlikely, but the lawyer should get client consent before any disclosure."
      ],
      [
       "People v. Belge (N.Y. Sup. Ct. 1975)",
       "Robert Garrow, charged with murder, was represented by Frank Armani and Francis Belge, who raised an insanity defense. Garrow admitted three other murders. Belge found and inspected Alicia Hauck's body and told no one. When this came out at trial, Belge was indicted under the Public Health Law for failing to ensure decent burial and to report a death. Held: indictment dismissed both on the ground of privileged communication and in the interests of justice.",
       [
        "The court weighed the privilege of confidentiality in the lawyer's duties against the fair administration of criminal justice, balancing the rights of the individual against the rights of society as a whole.",
        "Garrow had a Fifth Amendment right not to incriminate himself. That right would be meaningless if disclosure could be compelled through his attorney, so Belge was equally exempt and in fact barred from disclosing.",
        "\"The effectiveness of counsel is only as great as the confidentiality of its client-attorney relationship\"; an insanity defense required Garrow to disclose other crimes.",
        "Most commentators agree the lawyers owed Garrow confidentiality; Belge produced no change to the Rule 1.6 exceptions.",
        "Question 4-12: information about bodies learned while representing the client is information relating to the representation even though the other murders were unrelated to the pending charge; no exception requires disclosure."
       ]
      ],
      [
       "Texas Rule 1.05(a)",
       "Texas defines \"confidential information\" to include both privileged information (protected by the Texas or federal attorney-client privilege) and unprivileged client information, meaning all information relating to or furnished by the client acquired during the course of or by reason of the representation."
      ],
      [
       "Texas Rule 1.05(c)",
       "Like Model Rule 1.6(b), it lists the circumstances in which a lawyer may reveal confidential information."
      ]
     ],
     "tip": "On closed-book questions, \"the information was unrelated to the charge\" or \"other people already knew\" does not take information outside Rule 1.6. If it was learned in the representation, it is covered.",
     "check": {
      "status": "thin",
      "note": "The Class 11 slides titled \"Rule 1.6 versus Texas 1.5\" are image-only in the extracted text; the outline and notes do not state how the Texas exceptions differ from Model Rule 1.6(b), so the comparison is limited to Texas 1.05(a) and (c)."
     }
    },
    {
     "title": "Three Verbs: Reveal, Use, Safeguard",
     "explain": [
      "The confidentiality rules protect client information in three ways. A lawyer may not reveal it (Rule 1.6(a)), may not use it against the client (Rules 1.8(b), 1.9(c), 1.18(b)), and must take reasonable steps to prevent it from being disclosed or accessed improperly (Rule 1.6(c)).",
      "Rule 1.6(c) ties into the duty of competence. A lawyer must keep up with the risks of technology, and comments [18] and [19] give factors for deciding whether the lawyer's safeguards were reasonable."
     ],
     "items": [
      [
       "Reveal (Rule 1.6(a))",
       "A lawyer shall not reveal information relating to the representation unless an exception applies."
      ],
      [
       "Use (Rule 1.8(b))",
       "A lawyer shall not use information relating to representation of a client to the disadvantage of the client unless the client gives informed consent, except as permitted or required by the Rules. Rule 1.9(c) applies the same idea to former clients and Rule 1.18(b) to prospective clients."
      ],
      [
       "Safeguard (Rule 1.6(c))",
       "A lawyer shall make reasonable efforts to prevent the inadvertent or unauthorized disclosure of, or unauthorized access to, information relating to the representation of a client."
      ],
      [
       "Rule 1.6 cmt. [18] factors",
       "There is no violation of 1.6(c) if the lawyer made reasonable efforts to prevent the access or disclosure. Factors for reasonableness:",
       [
        "the sensitivity of the information;",
        "the likelihood of disclosure if additional safeguards are not employed;",
        "the cost of employing additional safeguards;",
        "the difficulty of implementing the safeguards; and",
        "the extent to which the safeguards adversely affect the lawyer's ability to represent clients (for example, making a device or important software excessively hard to use)."
       ]
      ],
      [
       "Rule 1.6 cmt. [19]",
       "When transmitting client information, the lawyer must take reasonable precautions to keep it from unintended recipients (do not click \"reply all\"). Special security measures are not required if the method affords a reasonable expectation of privacy, judged by the sensitivity of the information and how far privacy is protected by law or agreement.",
       [
        "Under both comments, the client may require special security measures beyond the Rule, or give informed consent to forgo measures the Rule would otherwise require."
       ]
      ],
      [
       "Competence link (Rule 1.1 cmts. [5], [8])",
       "Comment [8] requires keeping abreast of the benefits and risks of relevant technology; comment [5] requires methods and procedures meeting the standards of competent practitioners. As more lawyers adopt email encryption and metadata scrubbing, a lawyer who lags behind risks being found incompetent at safeguarding client information."
      ],
      [
       "Easy inadvertent disclosures",
       "Common ways lawyers breach confidentiality without meaning to:",
       [
        "discussing the matter with the client's family or roommate without consent;",
        "naming clients in a firm brochure or website without permission;",
        "talking about a matter in an elevator or other public place;",
        "reviewing client files in a coffee shop where others can see; and",
        "discussing a matter with the lawyer's own family or friends."
       ]
      ]
     ],
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Prospective & Former Clients (1.18, 1.9(c))",
     "explain": [
      "The duty of confidentiality applies once a lawyer-client relationship forms, but it also reaches people who only consulted the lawyer (prospective clients) and people the lawyer used to represent (former clients). Rule 1.18 gives prospective clients both confidentiality and conflict protection, even though they do not get the full set of client duties.",
      "Rule 1.9(c) carries the current-client confidentiality rules over to former clients, with one extra exception: the lawyer may use former-client information that has become generally known."
     ],
     "items": [
      [
       "Rule 1.18(a)",
       "A person who consults with a lawyer about the possibility of forming a client-lawyer relationship with respect to a matter is a prospective client. \"Consults\" suggests some mutual communication between the person and the lawyer."
      ],
      [
       "Rule 1.18 cmt. [2]",
       "Whether a consultation occurred depends on the circumstances.",
       [
        "A consultation likely occurs if the lawyer specifically requests or invites the submission of information about a potential representation without clear cautionary statements limiting the lawyer's obligations, and the person provides it.",
        "No consultation where a person responds to advertising that merely describes the lawyer's background, practice areas, and contact information, or communicates unilaterally without a reasonable expectation that the lawyer is willing to discuss a relationship.",
        "A person who communicates with a lawyer for the purpose of disqualifying the lawyer is not a prospective client.",
        "Lawyers using websites and social media must take care not to form unintended prospective-client relationships."
       ]
      ],
      [
       "Rule 1.18(b)",
       "Even when no relationship follows, the lawyer shall not use or reveal information learned in the consultation, except as Rule 1.9 would permit for a former client.",
       [
        "Question 4-11: an attorney who declined a homeowner's case could not use the homeowner's information for the building owner. That the homeowner still won does not matter."
       ]
      ],
      [
       "Rule 1.18(c)",
       "The lawyer shall not represent a client with interests materially adverse to the prospective client in the same or a substantially related matter if the lawyer received information that could be significantly harmful to that person. If the lawyer is disqualified, no lawyer in the firm may take the matter, except as provided in (d)."
      ],
      [
       "Rule 1.18(d)",
       "When the lawyer received disqualifying information, the representation is still permitted if either:",
       [
        "(1) both the affected client and the prospective client give informed consent, confirmed in writing; or",
        "(2) the lawyer who received the information took reasonable measures to avoid exposure to more disqualifying information than reasonably necessary to decide whether to take the case, and (i) the disqualified lawyer is timely screened from any participation and apportioned no part of the fee, and (ii) written notice is promptly given to the prospective client."
       ]
      ],
      [
       "Rule 1.9(c)",
       "A lawyer who formerly represented a client in a matter, or whose present or former firm did, shall not thereafter:",
       [
        "(1) use information relating to the representation to the former client's disadvantage, except as the Rules would permit or require for a client, or when the information has become generally known; or",
        "(2) reveal information relating to the representation, except as the Rules would permit or require for a client.",
        "The generally-known exception applies only to use, not to revealing."
       ]
      ]
     ],
     "tip": "The screening route in 1.18(d)(2) works only if the consulting lawyer limited what he heard to what was needed to decide whether to take the case.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Rule 1.6(b) Exceptions (May, Not Must)",
     "explain": [
      "Rule 1.6(b) lists seven situations in which a lawyer may reveal confidential information. In each, the lawyer may disclose only to the extent the lawyer reasonably believes necessary. The exceptions are alternatives: any one is enough.",
      "The exceptions permit disclosure; they do not require it. A lawyer cannot be disciplined for disclosing when an exception applies, or for choosing not to disclose. Some states (for example, New Jersey) make some exceptions mandatory."
     ],
     "items": [
      [
       "(1) Death or bodily harm",
       "To prevent reasonably certain death or substantial bodily harm. This is not limited to a client crime or to harm to third persons."
      ],
      [
       "(2) Client crime or fraud: prevent",
       "To prevent the client from committing a crime or fraud that is reasonably certain to cause substantial injury to another's financial interests or property, and in furtherance of which the client has used or is using the lawyer's services."
      ],
      [
       "(3) Client crime or fraud: mitigate or rectify",
       "To prevent, mitigate, or rectify substantial financial or property injury that is reasonably certain to result or has resulted from the client's crime or fraud in furtherance of which the client used the lawyer's services."
      ],
      [
       "(4) Ethics advice",
       "To secure legal advice about the lawyer's own compliance with the Rules. Lawyers often seek ethics advice from lawyers outside their firm."
      ],
      [
       "(5) Lawyer self-protection",
       "To establish a claim or defense for the lawyer in a controversy between the lawyer and the client; to defend against a criminal charge or civil claim against the lawyer based on conduct the client was involved in; or to respond to allegations in any proceeding concerning the lawyer's representation of the client."
      ],
      [
       "(6) Other law or court order",
       "To comply with other law or a court order. When a court denies a privilege claim, the lawyer may reveal the information as ordered, or refuse and risk contempt. Sarbanes-Oxley is an example of other law."
      ],
      [
       "(7) Conflict checks",
       "To detect and resolve conflicts of interest arising from the lawyer's change of employment or from changes in a firm's composition or ownership, but only if the disclosure would not compromise the privilege or otherwise prejudice the client. Added by many states after 2012 on the ABA Ethics 20/20 Commission's recommendation."
      ]
     ],
     "tip": "Answer choices that say the lawyer \"must\" disclose under 1.6(b) are wrong under the Model Rules. The mandatory duties come from Rules 3.3 and 4.1 or from statutes such as the Texas reporting laws.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "(b)(1): Death or Substantial Bodily Harm",
     "explain": [
      "Exception (b)(1) reflects that life and physical integrity outweigh confidentiality. Harm counts as reasonably certain if it will happen soon or if there is a present and substantial threat it will happen later unless the lawyer acts. It does not require that the client caused the threat or committed a crime.",
      "Spaulding v. Zimmerman drove the 2002 change to the current wording. The Alton Logan story shows the exception's limit: wrongful imprisonment is not death or bodily harm."
     ],
     "items": [
      [
       "Rule 1.6 cmt. [6]",
       "Confidentiality usually serves the public best, but (b)(1) recognizes the overriding value of life and physical integrity. Harm is reasonably certain if it will be suffered imminently, or if there is a present and substantial threat that a person will suffer it later if the lawyer fails to act.",
       [
        "Toxic-waste example: a client accidentally discharged toxic waste into a town's water supply. The lawyer may tell the authorities if there is a present and substantial risk that people who drink the water will contract a life-threatening or debilitating disease and disclosure is necessary to eliminate the threat or reduce the number of victims."
       ]
      ],
      [
       "Class 11 practice question (toxic waste)",
       "An employee mistakenly dumped toxic waste near the city water source; the president refused to report it; the attorney withdrew and reported it. The attorney is not subject to discipline because she reasonably believed the disposal was reasonably certain to cause substantial bodily harm. Lack of client consent, the conduct being unintentional, and the attorney's view that the decision was immoral do not control."
      ],
      [
       "Spaulding v. Zimmerman (Minn. 1962)",
       "David Spaulding, a minor, was injured in a car crash and sued. His own doctors missed an aortic aneurysm, but the defense's examining neurologist found it and warned it might rupture and cause death. Defense counsel told no one and urged the court to approve a $6,500 settlement. After the aneurysm was found two years later, the trial court vacated the settlement, and the Minnesota Supreme Court affirmed.",
       [
        "No canon of ethics may have required disclosure, but counsel knew the settlement did not account for the aneurysm, which let the court vacate it.",
        "Pre-2002 (b)(1): a lawyer could reveal only to prevent a client criminal act likely to result in imminent death or substantial bodily harm. That did not reach these facts.",
        "Current (b)(1) (Ethics 2000, adopted 2002): \"reasonably certain death or substantial bodily harm,\" not tied to client crime, so counsel likely could disclose today, but still need not."
       ]
      ],
      [
       "Alton Logan (wrongful incarceration)",
       "Logan was convicted in 1982 of a Chicago murder he did not commit. Andrew Wilson confessed the crime to his public defenders, who saw no exception permitting disclosure without consent. They kept a notarized affidavit in a locked box for decades, ready to speak if Logan were sentenced to death; he got life. Wilson allowed disclosure after his death in 2007, and Logan's conviction was vacated in 2008 after 26 years in prison.",
       [
        "Today's (b)(1) does not reach this situation because wrongful imprisonment is not death or substantial bodily harm.",
        "Massachusetts Rule 1.6(b)(1) also permits disclosure \"to prevent the wrongful execution or incarceration of another.\""
       ]
      ],
      [
       "Book questions on (b)(1)",
       "Applications from the reading:",
       [
        "Question 4-13: an innocent person scheduled for execution in two days faces reasonably certain death, so the attorney may, but need not, disclose.",
        "Question 4-14: a client who threw a gun in a swamp destroyed evidence; that is not a threat of death or bodily harm and not a financial crime using the lawyer's services, so no exception applies.",
        "Question 4-15: a client's credible suicide threat is reasonably certain death; (b)(1) is not limited to harm to third persons."
       ]
      ]
     ],
     "tip": "Wrongful imprisonment, destruction of evidence, and a body of someone already dead do not fit (b)(1) under the Model Rule. Execution of an innocent person and a credible suicide threat do.",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "(b)(2)–(3): Client Fraud Using the Lawyer's Services",
     "explain": [
      "Exceptions (b)(2) and (b)(3) let a lawyer disclose to prevent or repair financial harm from a client's crime or fraud, but only when the client used the lawyer's services to commit it. The idea is that a client who abuses the lawyer-client relationship this way forfeits the Rule's protection. (b)(2) looks forward (preventing the crime); (b)(3) looks back (mitigating or rectifying harm after the lawyer learns of it).",
      "These were among the most controversial exceptions. The ABA House of Delegates rejected them in the Ethics 2000 package and adopted them in 2003, after Enron and the Sarbanes-Oxley Act of 2002. State versions vary widely. Even without disclosure, Rule 1.2(d) bars the lawyer from assisting the fraud, so withdrawal may be required."
     ],
     "items": [
      [
       "Rule 1.6 cmt. [7] ((b)(2))",
       "A limited exception permitting disclosure to the extent necessary for affected persons or authorities to prevent a client crime or fraud reasonably certain to cause substantial financial or property injury, in furtherance of which the client has used or is using the lawyer's services.",
       [
        "The client's serious abuse of the client-lawyer relationship forfeits the Rule's protection, and the client can prevent disclosure by refraining from the wrongful conduct.",
        "(b)(2) does not require disclosure, but the lawyer may not counsel or assist conduct the lawyer knows is criminal or fraudulent (Rule 1.2(d)) and may have to withdraw (Rule 1.16)."
       ]
      ],
      [
       "Rule 1.6 cmt. [8] ((b)(3))",
       "Applies when the lawyer learns of the crime or fraud only after it is consummated. The client can no longer avoid disclosure by refraining, but losses may still be prevented, mitigated, or recouped, so the lawyer may disclose to the extent necessary for victims to do that.",
       [
        "Not available when a person who committed a crime or fraud later hires a lawyer to represent them concerning that offense and the lawyer's services were not used in it."
       ]
      ],
      [
       "Rule 1.2(d)",
       "A lawyer shall not counsel a client to engage, or assist a client, in conduct the lawyer knows is criminal or fraudulent, but may discuss the legal consequences of any proposed course of conduct and help the client determine in good faith the validity, scope, meaning, or application of the law."
      ],
      [
       "O.P.M. Leasing",
       "O.P.M. (\"other people's money\") Leasing defrauded lenders of more than $210 million with falsified lease documents. Its law firm, Singer Hutner, issued opinion letters lenders relied on. After learning more than $60 million of new loans were fraudulent, it kept silent and withdrew; the client used new lawyers to take another $15 million. This happened before any exception allowed disclosure.",
       [
        "Silence toward lenders about past and existing fraudulent leases is a Rule 1.6 problem.",
        "Closing new loans that appear fraudulent is a Rule 1.2(d) problem.",
        "The scandal, with Enron and Sarbanes-Oxley, led to adoption of (b)(2) and (b)(3) in 2003."
       ]
      ],
      [
       "Maryland State Bar Ethics Docket No. 2001-18",
       "Two scenarios applying Maryland's version of the exceptions:",
       [
        "Estate scenario: a lawyer for a personal representative found evidence the client misused estate funds while the elderly sole beneficiary's nursing-home bills went unpaid. The lawyer could not report to Adult Protective Services: the prevention exception is forward-looking and the known fraud was past, and the rectification exception required that the client used the lawyer's services, which the facts did not show.",
        "Withdrawing does not end the duty; confidentiality survives the relationship. If the lawyer stays on, Rules 3.3 and 4.1 apply.",
        "Household-tax scenario: a client who refused advice to pay household employment taxes was speaking to the lawyer as her attorney, so the conversation was within 1.6. Disclosure would be permitted only if she said she would continue and it would cause substantial financial injury to another; nothing showed that."
       ]
      ],
      [
       "Class 11 practice question (nonprofit merger)",
       "An attorney found that a nonprofit client had earlier engaged in activities jeopardizing its status, and concluded nondisclosure to the merger partner would be fraud. The attorney had not represented the client at the time and made no false statements. He told the board he would withdraw unless it disclosed, it refused, and he withdrew without disclosing. He is not subject to discipline: his services were not used in the fraud, the exceptions permit rather than require disclosure, and withdrawing avoided assisting the fraud."
      ]
     ],
     "tip": "Ask first whether the client used this lawyer's services in the crime or fraud. If not, (b)(2) and (b)(3) do not apply, and the lawyer's options are counseling the client and withdrawing.",
     "multi": true,
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "(b)(4)–(7): Self-Protection & Other Exceptions",
     "explain": [
      "Exception (b)(5) lets a lawyer use client information to protect the lawyer: to sue for a fee, to defend against a claim or charge, or to respond to allegations in a proceeding about the representation. The reasoning is that a client who benefits from a fiduciary relationship may not exploit it against the lawyer.",
      "Exceptions (b)(4), (b)(6), and (b)(7) are newer. They codified things lawyers already commonly did without an explicit exception."
     ],
     "items": [
      [
       "Rule 1.6(b)(5) situations",
       "Three separate situations:",
       [
        "a claim or defense in a controversy between the lawyer and the client;",
        "a defense to a criminal charge or civil claim against the lawyer based on conduct in which the client was involved; and",
        "responding to allegations in any proceeding concerning the lawyer's representation of the client."
       ]
      ],
      [
       "Rule 1.6 cmt. [10]",
       "Where a legal claim or disciplinary charge alleges the lawyer's complicity in the client's conduct, or other misconduct in the representation, the lawyer may respond to the extent reasonably necessary to establish a defense.",
       [
        "Applies to former clients and to civil, criminal, disciplinary, or other proceedings; the claim may come from the client or a third person (for example, someone claiming the lawyer and client defrauded them together).",
        "The right arises once complicity is asserted. The lawyer need not wait for a proceeding and may respond directly to the third party making the assertion.",
        "Question 4-16: the attorney may reveal information to the extent reasonably necessary to defend against a purchaser's civil fraud claim, even though it helps the attorney and hurts the client, and without the client's approval."
       ]
      ],
      [
       "Rule 1.6 cmt. [11]",
       "A lawyer entitled to a fee may prove the services rendered in an action to collect it. The beneficiary of a fiduciary relationship may not exploit it to the fiduciary's detriment."
      ],
      [
       "Online review simulation",
       "A former client posts a negative review and the firm wants to post a rebuttal that includes information about the representation. The third clause of (b)(5) covers allegations \"in any proceeding,\" and a review website is not a legal claim, charge, or proceeding."
      ],
      [
       "(b)(4) ethics advice",
       "Permits disclosure to get legal advice about the lawyer's own compliance with the Rules."
      ],
      [
       "(b)(6) other law or court order",
       "Gives the lawyer discretion when a court denies a privilege claim: reveal as ordered, or refuse and risk contempt. Other law, such as the EU's GDPR (General Data Protection Regulation), can also impose confidentiality duties."
      ],
      [
       "(b)(7) conflict checks",
       "Permits limited disclosure to detect and resolve conflicts from lateral moves or firm changes, only if it does not compromise the privilege or otherwise prejudice the client."
      ]
     ],
     "tip": "(b)(5) lets the lawyer defend against a third party's claim even when the disclosure hurts the client. A bad online review is not a \"proceeding.\"",
     "check": {
      "status": "complete",
      "note": ""
     }
    },
    {
     "title": "Mandatory Disclosure: Rules 3.3, 4.1 & Texas Statutes",
     "explain": [
      "Rule 1.6(b) only permits disclosure. Some other rules require it. Rule 3.3 (candor toward the tribunal) requires remedial measures, including disclosure to the court, even if the information is protected by Rule 1.6. Rule 4.1 bars false statements to third persons and requires disclosure to avoid assisting a client crime or fraud, unless Rule 1.6 prohibits it.",
      "Texas statutes also require anyone, expressly including attorneys, to report abuse of elderly or disabled persons and of children. These statutes are \"other law\" that override confidentiality."
     ],
     "items": [
      [
       "Rule 3.3(a)",
       "A lawyer shall not knowingly:",
       [
        "(1) make a false statement of fact or law to a tribunal or fail to correct a false statement of material fact or law previously made to the tribunal by the lawyer;",
        "(2) fail to disclose to the tribunal legal authority in the controlling jurisdiction known to the lawyer to be directly adverse to the position of the client and not disclosed by opposing counsel; or",
        "(3) offer evidence the lawyer knows to be false. If the lawyer, the client, or a witness called by the lawyer has offered material evidence and the lawyer comes to know of its falsity, the lawyer shall take reasonable remedial measures, including, if necessary, disclosure to the tribunal.",
        "A lawyer may refuse to offer evidence, other than the testimony of a criminal defendant, that the lawyer reasonably believes is false."
       ]
      ],
      [
       "Rule 3.3(b)",
       "A lawyer representing a client in an adjudicative proceeding who knows that a person intends to engage, is engaging, or has engaged in criminal or fraudulent conduct related to the proceeding shall take reasonable remedial measures, including, if necessary, disclosure to the tribunal."
      ],
      [
       "Rule 3.3(c)",
       "The duties in (a) and (b) continue to the conclusion of the proceeding and apply even if compliance requires disclosure of information otherwise protected by Rule 1.6."
      ],
      [
       "Rule 4.1",
       "In the course of representing a client, a lawyer shall not knowingly (a) make a false statement of material fact or law to a third person, or (b) fail to disclose a material fact to a third person when disclosure is necessary to avoid assisting a criminal or fraudulent act by a client, unless disclosure is prohibited by Rule 1.6."
      ],
      [
       "Mandatory, unlike 1.6(b)",
       "A lawyer who stays in the representation must comply with Rules 3.3 and 4.1. Withdrawal does not end the duty of confidentiality, which survives the relationship."
      ],
      [
       "Tex. Hum. Res. Code § 48.051 (elder and disabled abuse)",
       "A person having cause to believe that an elderly person or a person with a disability is in a state of abuse, neglect, or exploitation shall report immediately to the department.",
       [
        "§ 48.051(c): the duty applies without exception to a person whose professional communications are generally confidential, including an attorney.",
        "§ 48.052: knowingly failing to report is a Class A misdemeanor, or a state jail felony in certain facility cases involving serious bodily injury."
       ]
      ],
      [
       "Tex. Fam. Code § 261.101 (child abuse)",
       "A person having reasonable cause to believe that a child's physical or mental health or welfare has been adversely affected by abuse or neglect shall immediately report.",
       [
        "§ 261.101(b): a professional (licensed or certified by the state, with direct contact with children in official duties, such as teachers, nurses, and doctors) must report within 24 hours and may not delegate the report.",
        "§ 261.101(c): the requirement applies without exception to an individual whose personal communications may otherwise be privileged, including an attorney.",
        "§ 261.109: knowingly failing to report is a Class A misdemeanor, or a state jail felony in certain cases."
       ]
      ]
     ],
     "tip": "Rule 3.3 overrides Rule 1.6; Rule 4.1(b) yields to Rule 1.6. The Texas reporting statutes apply to attorneys without exception.",
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
   "title": "Rule 5.5: Can I Practice Here?",
   "kind": "flow",
   "caption": "Run (a) → (b) → (c) → (d) in order.",
   "steps": [
    {
     "q": "Licensed in this jurisdiction?",
     "out": [
      "YES",
      "Practice freely"
     ],
     "go": "NO"
    },
    {
     "q": "Office or systematic and continuous presence, or holding out as admitted here (5.5(b))?",
     "out": [
      "YES",
      "Violation, unless (d)"
     ],
     "go": "NO"
    },
    {
     "q": "Is it temporary AND with active local counsel, tied to a proceeding, ADR from home practice, or arising from home practice (5.5(c))?",
     "out": [
      "YES",
      "Permitted"
     ],
     "go": "NO"
    },
    {
     "q": "In-house for your employer, or authorized by federal/local law (5.5(d))?",
     "out": [
      "YES",
      "Permitted, even if not temporary"
     ],
     "go": "NO"
    }
   ],
   "end": "UPL. Discipline under 5.5(a) and 8.5(a); fees void (Birbrower)."
  },
  {
   "title": "Can I Withdraw?",
   "kind": "flow",
   "caption": "Rule 1.16 in order.",
   "steps": [
    {
     "q": "Any 1.16(a) ground: violation of law/Rules, impairment, fired, client using you for crime or fraud?",
     "out": [
      "YES",
      "MUST withdraw"
     ],
     "go": "NO"
    },
    {
     "q": "Any 1.16(b) ground: no material harm, crime/fraud, repugnance, nonpayment after warning, burden, good cause?",
     "out": [
      "NO",
      "Must stay"
     ],
     "go": "YES"
    },
    {
     "q": "Does a tribunal require permission (1.16(c); Texas TRCP 10 motion)?",
     "out": [
      "DENIED",
      "Keep representing"
     ],
     "go": "OK"
    }
   ],
   "end": "Leave, but protect the client (1.16(d)): notice, time, papers, unearned fees."
  },
  {
   "title": "Is It Privileged?",
   "kind": "flow",
   "caption": "Restatement §§ 68–72; the proponent bears the burden.",
   "steps": [
    {
     "q": "A communication, not an underlying fact or the lawyer’s own observation?",
     "out": [
      "NO",
      "Not privileged (still 1.6 info)"
     ],
     "go": "YES"
    },
    {
     "q": "Between privileged persons (client, lawyer, necessary agents; Kovel)?",
     "out": [
      "NO",
      "Not privileged"
     ],
     "go": "YES"
    },
    {
     "q": "Made in confidence?",
     "out": [
      "NO",
      "Not privileged"
     ],
     "go": "YES"
    },
    {
     "q": "Predominant purpose legal assistance?",
     "out": [
      "NO",
      "Business/PR advice: not privileged"
     ],
     "go": "YES"
    },
    {
     "q": "Any exception or waiver (crime-fraud, voluntary disclosure, selective waiver)?",
     "out": [
      "YES",
      "Privilege lost"
     ],
     "go": "NO"
    }
   ],
   "end": "Privileged. Still produce underlying facts."
  },
  {
   "title": "Solicitation Check · Rule 7.3",
   "kind": "flow",
   "caption": "Model Rule version.",
   "steps": [
    {
     "q": "Directed to a specific person known to need services in a particular matter?",
     "out": [
      "NO",
      "Advertising: run 7.1 and 7.2"
     ],
     "go": "YES"
    },
    {
     "q": "Target said no, or coercion/duress/harassment?",
     "out": [
      "YES",
      "Prohibited, any medium (7.3(c))"
     ],
     "go": "NO"
    },
    {
     "q": "Live person-to-person contact with pecuniary motive?",
     "out": [
      "NO",
      "Permitted (written, or no pecuniary motive: Primus)"
     ],
     "go": "YES"
    },
    {
     "q": "Lawyer, family/close/prior relationship, or routine business user?",
     "out": [
      "YES",
      "Permitted (7.3(b))"
     ],
     "go": "NO"
    }
   ],
   "end": "Prohibited (Ohralik: no proof of harm needed)."
  },
  {
   "title": "The Three Pillars",
   "kind": "compare",
   "caption": "Keep them separate on every question.",
   "cols": [
    "",
    "Confidentiality",
    "Privilege",
    "Work product"
   ],
   "rows": [
    [
     "Source",
     "Rule 1.6",
     "Evidence law",
     "FRCP 26(b)(3)"
    ],
    [
     "Covers",
     "All info relating to rep.",
     "Confidential communications for legal advice",
     "Litigation materials"
    ],
    [
     "Setting",
     "Always",
     "Compelled disclosure",
     "Discovery"
    ],
    [
     "Strength",
     "Yields to 1.6(b), law, orders",
     "Absolute unless exception/waiver",
     "Qualified (need + hardship)"
    ],
    [
     "Waiver",
     "N/A",
     "Any voluntary disclosure",
     "Only if likely to reach adversary"
    ]
   ]
  },
  {
   "title": "Discipline vs. Malpractice vs. IAC",
   "kind": "compare",
   "caption": "Same conduct, three systems.",
   "cols": [
    "",
    "Discipline",
    "Malpractice",
    "Ineffective assistance"
   ],
   "rows": [
    [
     "Purpose",
     "Protect public",
     "Compensate client",
     "Fair criminal trial"
    ],
    [
     "Elements",
     "Rule violation",
     "Duty, breach, cause, injury",
     "Deficiency + prejudice"
    ],
    [
     "Harm needed?",
     "No",
     "Yes",
     "Prejudice"
    ],
    [
     "Decider",
     "Disciplinary authority",
     "Civil court",
     "Criminal/habeas court"
    ],
    [
     "Remedy",
     "Sanction",
     "Damages",
     "New trial or sentencing"
    ]
   ]
  }
 ],
 "cards": [
  [
   "Rule 8.1",
   "An applicant, or a lawyer in a bar admission or disciplinary matter, may not knowingly make a false statement of material fact, fail to correct a misapprehension the person knows has arisen, or knowingly ignore a lawful demand for information. Information protected by Rule 1.6 (confidentiality) does not have to be disclosed.",
   0
  ],
  [
   "Rule 8.1 cmt. [1]",
   "A material false statement on a bar application can be the basis for discipline after the person is admitted. The duty also covers a lawyer's statements about someone else's admission or discipline, such as a reference letter.",
   0
  ],
  [
   "Rule 8.1 cmt. [2]",
   "Rule 8.1 is subject to the Fifth Amendment. A person relying on the privilege must invoke it openly and may not use it as cover for failing to comply with the rule.",
   0
  ],
  [
   "Fraud elements (5)",
   "A material misrepresentation, made knowing it is false or without knowing whether it is true, intended to make the other party act, actually relied on, and causing injury.",
   0
  ],
  [
   "Binding vs. persuasive sources",
   "Binding: the jurisdiction's adopted Rules, case law, procedure and evidence rules, statutes, and common law such as malpractice. Persuasive only: the ABA Model Rules as such, the Restatement, and bar association and ABA ethics opinions.",
   0
  ],
  [
   "Inherent power (Restatement § 1)",
   "Most state high courts hold that their power to regulate lawyers is inherent in the judicial function, based on courts' historical role in admitting and disbarring lawyers. This is why the judiciary is the predominant regulator.",
   0
  ],
  [
   "Dominant conception (Luban)",
   "The neutral partisan or hired gun model of the lawyer's role: the principle of partisanship (extreme zeal for the client) plus the principle of nonaccountability (no moral responsibility for the client's ends or means).",
   0
  ],
  [
   "Brumbaugh test",
   "A nonlawyer practices law when the service affects important legal rights and protecting those rights requires more legal skill than the average citizen has, done for another person as a course of conduct.",
   1
  ],
  [
   "Forms seller line (Brumbaugh)",
   "A nonlawyer may sell forms and printed guides and type forms using only information the client gave in writing. She may not advise which forms to use, how to fill them out, where to file, or how to present evidence.",
   1
  ],
  [
   "Reliance (Brumbaugh)",
   "Brumbaugh never claimed to be a lawyer and no customer complained, but her customers relied on her advice. Reliance alone was enough for UPL.",
   1
  ],
  [
   "Birbrower",
   "A lawyer practices law in California when contact with the California client is sufficient to make the service a clear legal representation. Physical presence is only one factor, and fees for the UPL work are unenforceable.",
   1
  ],
  [
   "Rule 5.5(b)",
   "A lawyer not admitted in a jurisdiction may not establish an office or other systematic and continuous presence there for practicing law, unless the Rules or other law authorize it, and may not hold out as admitted there.",
   1
  ],
  [
   "Rule 5.5(c) (temporary practice)",
   "A lawyer admitted elsewhere may practice temporarily if the work is (1) with actively participating local counsel, (2) related to a tribunal proceeding the lawyer is or expects to be authorized to appear in, (3) related to ADR and arising from home practice, or (4) otherwise reasonably related to home practice.",
   1
  ],
  [
   "Rule 5.5(d)",
   "Two exceptions that allow even an office: (1) services to the lawyer's own employer (in-house counsel), and (2) services federal or other law authorizes the lawyer to provide.",
   1
  ],
  [
   "Rule 8.5(b) choice of law",
   "For conduct in a matter pending before a tribunal, apply the tribunal's jurisdiction's rules. For other conduct, apply the rules where the conduct occurred, or where its predominant effect is if that is elsewhere.",
   1
  ],
  [
   "Rule 5.4(a) exceptions",
   "A lawyer may not share legal fees with a nonlawyer, except: nonlawyer employee compensation or retirement plans, payments to a deceased lawyer's estate, the sale of a practice, and sharing court-awarded fees with a nonprofit that employed or recommended the lawyer.",
   1
  ],
  [
   "Rule 5.7",
   "The Rules apply to law-related services if the lawyer provides them in circumstances not distinct from legal services, or through a lawyer-controlled entity without reasonable steps to tell recipients the services are not legal services.",
   1
  ],
  [
   "Tex. Gov't Code § 81.101",
   "Texas's response to Parsons: legal software is not the practice of law if it clearly and conspicuously states it is not a substitute for an attorney's advice.",
   1
  ],
  [
   "Restatement § 14",
   "A relationship forms when a person manifests intent that the lawyer provide legal services and either the lawyer consents or the lawyer fails to decline while knowing or having reason to know the person reasonably relies on him. A valid court appointment also forms one.",
   2
  ],
  [
   "Morris v. Margulis",
   "A firm that formally declined a representation could still form a relationship through its lawyers' substantive meetings and help with a Wells submission. Formation is judged from the client's viewpoint and does not depend on fees, a contract, or the lawyer's consent.",
   2
  ],
  [
   "Rule 6.2 good cause",
   "A lawyer may seek to avoid a court appointment only for good cause, such as a likely violation of the Rules or law, an unreasonable financial burden, or repugnance so strong it is likely to impair the representation.",
   2
  ],
  [
   "Rule 3.1",
   "A lawyer may not bring or defend a proceeding without a non-frivolous basis in law and fact. A good-faith argument to change the law counts, and a criminal defense lawyer may require the prosecution to prove every element.",
   2
  ],
  [
   "Rule 1.16(a) mandatory withdrawal",
   "A lawyer must decline or withdraw if the representation will violate the Rules or law, the lawyer's condition materially impairs the lawyer, the lawyer is discharged, or the client persists in using the lawyer for a crime or fraud after the lawyer explained the limits.",
   2
  ],
  [
   "Rule 1.16(b)(5)",
   "A lawyer may withdraw if the client substantially fails to fulfill an obligation to the lawyer, such as paying the fee, after a reasonable warning that the lawyer will withdraw.",
   2
  ],
  [
   "Rule 1.16(c)",
   "Even with a valid ground, a lawyer must follow any rule requiring notice to or permission from the tribunal to withdraw, and must continue if the tribunal orders it.",
   2
  ],
  [
   "Rule 1.16(d)",
   "On termination, the lawyer must take reasonable steps to protect the client: reasonable notice, time to hire new counsel, return of papers and property, and refund of unearned fees and expenses.",
   2
  ],
  [
   "Whiting v. Lacara",
   "The court had to allow withdrawal where the client demanded tactics that risked Rule 11 sanctions and threatened malpractice if refused. That functional conflict outweighed the court's docket interests.",
   2
  ],
  [
   "Rule 1.13(a)",
   "A lawyer retained by an organization represents the organization itself, acting through its duly authorized constituents. Officers and employees are not clients just because they speak for the entity.",
   2
  ],
  [
   "Rule 1.1",
   "Competent representation requires the legal knowledge, skill, thoroughness, and preparation reasonably necessary for the matter. It is judged by the lawyer's process, not the outcome.",
   3
  ],
  [
   "Rule 1.1 cmt. [3] (emergency)",
   "In an emergency, a lawyer without ordinary skill in the field may give limited help when referral or consultation is impractical, limited to what is reasonably necessary.",
   3
  ],
  [
   "Rule 1.3 and nonpayment",
   "Rule 1.3 requires reasonable diligence and promptness. Nonpayment does not justify silently stopping work; the lawyer must communicate and, if needed, withdraw properly under Rule 1.16.",
   3
  ],
  [
   "Rule 5.1(c)",
   "A lawyer is responsible for another lawyer's violation if the lawyer ordered or knowingly ratified it, or was a partner, manager, or supervisor who knew of it in time to avoid or reduce its consequences and failed to act.",
   3
  ],
  [
   "Malpractice elements (Restatement § 48)",
   "Duty of care, failure to exercise care (breach), legal causation, and injury. The standard of care is what lawyers normally do in similar circumstances (§ 52).",
   3
  ],
  [
   "Strickland",
   "Ineffective assistance requires (1) performance below an objective standard of reasonableness and (2) a reasonable probability that, without the errors, the result would have been different.",
   3
  ],
  [
   "Restatement § 53(d) vs. majority rule",
   "A convicted client suing defense counsel must show the result would have been different but for the lawyer's failure. Most jurisdictions also require proof of actual innocence; the Restatement does not.",
   3
  ],
  [
   "Rule 1.8(h)",
   "A lawyer may not prospectively limit malpractice liability unless the client is independently represented. Settling a malpractice claim with an unrepresented client requires written advice to get counsel and a reasonable chance to do so.",
   3
  ],
  [
   "Lerner v. Laufer",
   "A precise, reasonable limited-scope agreement made with informed consent under Rule 1.2(c) defines the standard of care, so the lawyer is judged only on the agreed work. It cannot waive malpractice liability in advance.",
   3
  ],
  [
   "Rompilla v. Beard",
   "Counsel who knows the prosecution will use a prior conviction as an aggravator must reasonably examine the readily available file. Failing to do so was deficient and prejudicial under Strickland.",
   3
  ],
  [
   "Rule 1.2(a): client decides",
   "The client decides the objectives, whether to settle, and in a criminal case the plea, whether to waive a jury, and whether to testify. The lawyer controls means after consulting the client.",
   4
  ],
  [
   "Rule 1.2 cmt. [2]: who defers",
   "Clients normally defer to the lawyer on technical, legal, and tactical matters. Lawyers usually defer to the client on expense and on concern for third persons who might be harmed.",
   4
  ],
  [
   "McCoy v. Louisiana",
   "Whether to admit guilt or maintain innocence is the objective of the defense, so counsel may not concede guilt over the defendant's objection, even to avoid the death penalty.",
   4
  ],
  [
   "Florida v. Nixon",
   "Where counsel explains a concession strategy and the defendant neither consents nor objects, no blanket rule requires the defendant's explicit consent. Silence is not a McCoy objection.",
   4
  ],
  [
   "Jones v. Barnes",
   "Appointed appellate counsel need not raise every nonfrivolous issue the defendant requests. Choosing issues is a matter of counsel's professional judgment.",
   4
  ],
  [
   "Boyd v. Brett-Major",
   "Following the explicit instructions of an otherwise well-advised client, with no criminal or fraudulent end intended, is a defense to malpractice.",
   4
  ],
  [
   "Rule 1.2(d)",
   "A lawyer may not counsel or assist conduct the lawyer knows is criminal or fraudulent, but may discuss the legal consequences of any proposed course of conduct and help the client test the law in good faith.",
   4
  ],
  [
   "Rule 2.1",
   "A lawyer must use independent judgment and give candid advice, and may refer to moral, economic, social, and political factors. Those non-legal factors are permitted, not required.",
   4
  ],
  [
   "Rule 1.14(b)",
   "A lawyer may take reasonably necessary protective action when the lawyer reasonably believes the client has decision-making limitations, is at risk of substantial harm, and cannot adequately act in the client's own interest.",
   4
  ],
  [
   "Bates v. State Bar of Arizona",
   "The First Amendment protects truthful lawyer advertising, so a blanket ban on advertising is unconstitutional. States may still regulate it.",
   5
  ],
  [
   "Rule 7.1",
   "A lawyer may not make a false or misleading communication about the lawyer's services. A true statement is misleading if it omits a fact needed to keep it from being materially misleading.",
   5
  ],
  [
   "Rule 7.2(b)",
   "A lawyer may not give anything of value for a recommendation, except reasonable advertising costs, legal service plan or qualified referral service charges, buying a practice, non-exclusive reciprocal referral agreements with client notice, and nominal thank-you gifts.",
   5
  ],
  [
   "Rule 7.2(c)",
   "A lawyer may claim certification as a specialist only if the certifying body is approved by a state authority or accredited by the ABA and is clearly named in the communication.",
   5
  ],
  [
   "Rule 7.2(d)",
   "Every communication about a lawyer's services must include the name and contact information of at least one lawyer or firm responsible for its content.",
   5
  ],
  [
   "Rule 7.3(b) exceptions",
   "Live person-to-person solicitation for pecuniary gain is barred unless the person is a lawyer, has a family, close personal, or prior business or professional relationship with the lawyer, or routinely uses the type of legal services for business.",
   5
  ],
  [
   "Rule 7.3(c)",
   "No solicitation of any kind, written or live, if the person has said they do not want to be solicited or the solicitation involves coercion, duress, or harassment.",
   5
  ],
  [
   "Ohralik vs. Primus",
   "Ohralik: a State may discipline in-person solicitation for pecuniary gain without proving harm. Primus: a State may not discipline a free ACLU letter offering help for political and associational goals.",
   5
  ],
  [
   "Rule 1.5(a)",
   "A lawyer may not agree to, charge, or collect an unreasonable fee or expense. Reasonableness is weighed using eight factors, including time and skill, customary fees, results, experience, and whether the fee is fixed or contingent.",
   6
  ],
  [
   "Rule 1.5(b)",
   "The lawyer must tell the client the scope of the work and the basis or rate of the fee and expenses, before or within a reasonable time after starting. A writing is preferred but not required.",
   6
  ],
  [
   "Contingent fee writing (1.5(c))",
   "A contingent fee needs a writing signed by the client stating the percentages, the expenses deducted and whether before or after the fee, and any expenses owed win or lose. A written closing statement is required at the end.",
   6
  ],
  [
   "Rule 1.5(d)",
   "No contingent fee in a domestic relations matter that depends on securing a divorce or the amount of alimony, support, or property settlement, and no contingent fee for criminal defense.",
   6
  ],
  [
   "Rule 1.5(e)",
   "Lawyers in different firms may split a fee only if the split tracks services or each assumes joint responsibility, the client agrees to each lawyer's share and the agreement is confirmed in writing, and the total fee is reasonable.",
   6
  ],
  [
   "Rule 1.8(a)",
   "A business transaction with a client requires fair terms disclosed in writing, written advice to seek independent counsel with a reasonable chance to do so, and the client's signed informed consent.",
   6
  ],
  [
   "Rule 1.8(e)",
   "No financial assistance to a litigation client, except advancing costs, paying costs for indigent clients, and modest gifts for basic living expenses to indigent pro bono clients that are not promised, repaid, or advertised.",
   6
  ],
  [
   "Rule 1.8(i)",
   "A lawyer may not acquire an ownership interest in the client's lawsuit, except a lien authorized by law to secure fees or a reasonable contingent fee in a civil case.",
   6
  ],
  [
   "Rule 1.15(c)",
   "Fees and expenses paid in advance go into the client trust account and may be withdrawn only as fees are earned or expenses incurred.",
   6
  ],
  [
   "Rule 1.15(e)",
   "When the lawyer and client (or others) dispute property the lawyer holds, the disputed portion stays separate until resolved, and the undisputed portion must be promptly distributed.",
   6
  ],
  [
   "Perdue v. Kenny A.",
   "The lodestar (reasonable hours times reasonable rates) is presumptively sufficient. An enhancement is allowed only in rare and exceptional circumstances, cannot rest on factors already in the lodestar, and needs specific evidence.",
   6
  ],
  [
   "Buckhannon (prevailing party)",
   "A prevailing party under a fee-shifting statute needs a material change in the parties' legal relationship, such as a judgment or consent decree. A defendant's voluntary change does not count.",
   6
  ],
  [
   "Evans v. Jeff D.",
   "Section 1988 does not bar a settlement conditioned on waiving attorney's fees, because the fee entitlement belongs to the client, who may trade it for relief.",
   6
  ],
  [
   "Rule 1.6(b)(1)",
   "A lawyer may reveal information to the extent reasonably necessary to prevent reasonably certain death or substantial bodily harm. The exception is permissive and is not limited to client crimes or third persons.",
   7
  ],
  [
   "Privilege elements (Restatement § 68)",
   "A communication, between privileged persons, made in confidence, for the purpose of getting or giving legal assistance. The party claiming the privilege must prove every element.",
   7
  ],
  [
   "Upjohn",
   "Rejected the control group test. Employee communications to company counsel, made at superiors' direction to get legal advice for the company and kept confidential, are privileged. The facts themselves are not.",
   7
  ],
  [
   "Upjohn warning",
   "Company counsel interviewing an employee should say both 'I represent the company' and 'I do not represent you.' The company holds the privilege and may waive it over the employee's objection.",
   7
  ],
  [
   "Kovel doctrine",
   "A communication shared with a nonlawyer stays privileged only if the nonlawyer's services are necessary to the lawyer's legal advice. Being helpful to the client, like ordinary PR advice, is not enough.",
   7
  ],
  [
   "Westinghouse (no selective waiver)",
   "Disclosing privileged material to the government waives the privilege as to everyone, even under a confidentiality agreement.",
   7
  ],
  [
   "FRE 502(b)",
   "An inadvertent disclosure in a federal proceeding is not a waiver if the holder took reasonable steps to prevent it and promptly took reasonable steps to fix it.",
   7
  ],
  [
   "Rule 4.4(b)",
   "A lawyer who receives a document the lawyer knows or should know was sent by mistake must promptly notify the sender. Whether to return it and whether privilege was waived are left to other law.",
   7
  ],
  [
   "Crime-fraud exception (§ 82)",
   "No privilege when the client consults the lawyer to get help with a crime or fraud, or later uses the lawyer's services to commit one. Seeking a defense for a past crime stays protected.",
   7
  ],
  [
   "Work product (Marten test)",
   "A document is work product only if prepared because of anticipated litigation (primary purpose) and the threat was real and imminent. A lawyer's authorship alone is not enough.",
   7
  ],
  [
   "Work product waiver (§ 91) vs. privilege waiver (§ 79)",
   "Any voluntary disclosure outside the privileged circle waives the privilege. Disclosure waives work product only if it is likely to reach an adversary.",
   7
  ],
  [
   "Rule 1.6(c)",
   "A lawyer must make reasonable efforts to prevent inadvertent or unauthorized disclosure of, or access to, client information. Reasonableness turns on sensitivity, likelihood of disclosure, cost, difficulty, and effect on the lawyer's work.",
   7
  ],
  [
   "Rule 1.18(d)",
   "A lawyer who received disqualifying information from a prospective client may still take the adverse matter with both clients' written informed consent, or if the lawyer limited what he heard, is screened, gets no part of the fee, and written notice goes to the prospective client.",
   7
  ],
  [
   "Rule 1.9(c)",
   "A lawyer may not use a former client's information to its disadvantage, unless the Rules permit or the information has become generally known, and may not reveal it except as the Rules permit.",
   7
  ],
  [
   "Rule 3.3(c)",
   "The duties of candor to the tribunal, including remedial measures for false evidence, continue to the end of the proceeding and apply even if they require revealing Rule 1.6 information.",
   7
  ]
 ],
 "quiz": [
  {
   "q": "A bar applicant leaves a shoplifting conviction off his bar application. When the omission comes to light, what is likely the most serious problem for him?",
   "o": [
    "Nothing, because Rule 8.1 governs only lawyers who are already admitted",
    "Only a Rule 1.1 competence problem",
    "The conviction itself, because recent criminal conduct is the only issue the bar will look at",
    "The omission itself, which is a separate Rule 8.1 violation for knowingly making a false statement of material fact"
   ],
   "a": 3,
   "why": [
    "Rule 8.1 expressly covers applicants for admission. Comment [1] adds that a false statement on an application can support discipline even after the person is admitted.",
    "Rule 1.1 requires competent representation of clients. Honesty toward the admissions authority is governed by Rule 8.1, not the competence rule.",
    "Recent criminal conduct is one character and fitness concern, but dishonesty on the application is listed alongside it. The cover-up turns a fitness question into a dishonesty violation and is often treated as worse than the conduct disclosed.",
    "Correct. Rule 8.1(a) bars an applicant from knowingly making a false statement of material fact in a bar application. Hiding the conviction is its own violation, and the casebook lists dishonesty on the application as a leading character and fitness concern."
   ],
   "e": "Rule 8.1 requires applicants and lawyers to be honest with admissions and disciplinary authorities. Paragraph (a) bars knowingly making a false statement of material fact. Leaving a known conviction off the application is a knowing, material falsehood, so the omission is a separate violation that is often worse than the underlying conduct.",
   "unit": 0
  },
  {
   "q": "When filling out her bar application, an applicant honestly forgot that she once missed a child support payment, so she answered that she had no missed payments. She remembered the missed payment during law school but said nothing and was admitted. Which statement best describes her exposure under Rule 8.1?",
   "o": [
    "She violated Rule 8.1(a) the moment she submitted the inaccurate answer",
    "She has no exposure, because Rule 8.1 duties end once a person is admitted",
    "Her original answer was not a knowing false statement, but once she remembered, Rule 8.1(b) required her to correct the bar's mistaken impression",
    "She has no exposure, because Rule 8.1 reaches only affirmative false statements and never silence"
   ],
   "a": 2,
   "why": [
    "Rule 8.1(a) bars only knowingly false statements. She did not know the answer was false when she gave it, so the knowledge element was missing at that point.",
    "Comment [1] says a material false statement on an application can be the basis for discipline after admission. The duty to correct does not disappear because the bar admitted her.",
    "Correct. Rule 8.1(a) requires knowledge of falsity, and an honest mistake does not meet it. Rule 8.1(b) and comment [1] separately require the person to correct a misapprehension she knows has arisen, which applied once she remembered.",
    "Rule 8.1(b) reaches silence. It bars failing to disclose a fact necessary to correct a misapprehension the person knows has arisen, and failing to respond to a lawful demand for information."
   ],
   "e": "Rule 8.1 has a knowledge element. Paragraph (a) bars knowing false statements of material fact, and paragraph (b) requires correcting a misapprehension the person knows has arisen. Her first answer was an honest mistake, so (a) was not violated then. Once she remembered and knew the bar had a mistaken impression, (b) required her to correct it, and comment [1] lets the problem support discipline after admission.",
   "unit": 0
  },
  {
   "q": "Which of the following sources is NOT binding on a lawyer?",
   "o": [
    "Sarbanes-Oxley regulations for lawyers practicing before the SEC (Securities and Exchange Commission)",
    "The Restatement of the Law Governing Lawyers",
    "State malpractice case law",
    "Criminal statutes of general application"
   ],
   "a": 1,
   "why": [
    "Sarbanes-Oxley is a statute that regulates lawyers directly, and its regulations are binding on lawyers who practice before the SEC.",
    "Correct. The Restatement, written by the American Law Institute, is not binding, though the casebook says it has proven very influential with courts and bar associations.",
    "Malpractice is common law, and the common law binds lawyers. The casebook calls malpractice the most familiar common law doctrine governing lawyers.",
    "Legislatures regulate lawyers through general laws such as the criminal law, and those statutes bind lawyers like anyone else."
   ],
   "e": "The casebook divides the law governing lawyers into binding and persuasive sources. Binding sources include the jurisdiction's adopted Rules, case law, procedure and evidence rules, statutes, and common law such as malpractice and fraud. The Restatement, the ABA Model Rules as such, and bar association and ABA ethics opinions are persuasive only.",
   "unit": 0
  },
  {
   "q": "Which body is the predominant regulator of lawyers in the United States?",
   "o": [
    "Federal agencies",
    "The American Bar Association",
    "State legislatures",
    "The judiciary, especially each state's highest court"
   ],
   "a": 3,
   "why": [
    "Some federal statutes, such as Sarbanes-Oxley, regulate lawyers in particular settings, but federal agencies are not the main regulator of the profession.",
    "The ABA is a voluntary trade organization that lawyers need not join. Its Model Rules and ethics opinions bind no jurisdiction until a court adopts a version of the rules.",
    "Legislatures do regulate lawyers through statutes, but the courts promulgate the ethics rules in every jurisdiction except California, where the legislature has a major role.",
    "Correct. State high courts write the ethics rules and enforce them through discipline and court rulings. Restatement section 1 explains that most state high courts treat this power as inherent in the judicial function."
   ],
   "e": "The casebook names the judiciary as the predominant authority over lawyers. State high courts adopt the Rules of Professional Conduct and enforce them, and most hold, as a matter of state constitutional law, that the power to regulate lawyers is inherent in the judicial function (Restatement section 1). The power traces to courts' historical role in admitting and disbarring lawyers.",
   "unit": 0
  },
  {
   "q": "A disciplinary authority investigating another lawyer sends Lawyer L a lawful demand for information. Answering fully would require L to reveal information relating to the representation of one of L's own clients, and none of the Rule 1.6 exceptions applies. What does Rule 8.1 require?",
   "o": [
    "L must disclose the information but may ask the authority to keep it confidential",
    "L must disclose everything, because Rule 8.1(b) requires answering any lawful demand from a disciplinary authority",
    "L may withhold the information only by invoking the Fifth Amendment",
    "L need not reveal the client information, because Rule 8.1 does not require disclosure of information protected by Rule 1.6"
   ],
   "a": 3,
   "why": [
    "Rule 8.1 does not require the disclosure in the first place. Rule 1.6(a) bars revealing the information unless the client consents, disclosure is impliedly authorized, or a 1.6(b) exception applies.",
    "The duty to respond to lawful demands in Rule 8.1(b) is subject to the rule's express exception for Rule 1.6 information.",
    "Comment [2] addresses the Fifth Amendment for a person's own exposure, but the protection here comes from the Rule 1.6 carve-out, which does not depend on self-incrimination.",
    "Correct. Rule 8.1 expressly carves out information protected by Rule 1.6, so a disciplinary demand cannot force L to breach a client's confidence."
   ],
   "e": "Rule 8.1 requires honesty with admissions and disciplinary authorities, including responding to lawful demands for information. The rule carves out information protected by Rule 1.6, which bars revealing information relating to a client's representation absent informed consent, implied authorization, or a 1.6(b) exception. Because no exception applies, L does not have to reveal the client information.",
   "unit": 0
  },
  {
   "q": "Under Luban's description, which of the following belongs to the dominant conception of the lawyer's role, as opposed to traditional professionalism?",
   "o": [
    "Placing the public good above self-interest",
    "Autonomy from outside regulation",
    "Expertise that clients cannot evaluate",
    "Zealous representation of the client within the bounds of the law"
   ],
   "a": 3,
   "why": [
    "Putting the client's and the public's interest above one's own is a traditional professionalism element (Pound and Freidson), not part of the dominant conception.",
    "Self-regulation is Freidson's fourth assumption supporting professional privileges. It belongs to traditional professionalism, not to the dominant conception.",
    "Inaccessible expertise is one of Freidson's assumptions supporting traditional professionalism: clients cannot judge the work, so they must trust the professional.",
    "Correct. The dominant conception (the neutral partisan or hired gun) rests on the principle of partisanship, extreme zeal for the client, and the principle of nonaccountability for the client's goals and means."
   ],
   "e": "Luban describes the dominant conception of the lawyer's role as resting on role morality with two parts: partisanship (extreme zeal for the client) and nonaccountability (no moral responsibility for the client's ends or means). Traditional professionalism, by contrast, is built on inaccessible expertise, public service over self-interest, and self-regulation. Casebook Question 1-6 makes this distinction.",
   "unit": 0
  },
  {
   "q": "A seller tells a buyer that a building has no structural problems. The seller has never checked and has no idea whether that is true, but says it so the buyer will close. The buyer relies on it and is harmed when serious defects appear. Which statement about the fraud elements the professor listed is correct?",
   "o": [
    "Fraud fails, because the professor's list does not require reliance or injury",
    "Fraud fails, because the seller did not know the statement was false",
    "The knowledge element can be met, because asserting a fact without knowledge of its truth satisfies it",
    "Fraud fails, because a statement about a building is never material"
   ],
   "a": 2,
   "why": [
    "Reliance and injury caused by the reliance are the fourth and fifth elements. Here the buyer relied and was harmed, so those elements are present.",
    "Actual knowledge of falsity is one way to meet the element, but asserting something without knowing whether it is true is the other.",
    "Correct. The second element is a statement made with knowledge of its falsity or asserted without knowledge of its truth, so a reckless assertion meets it.",
    "Materiality asks whether the fact matters to the decision. The structural condition of a building matters to a decision to buy it."
   ],
   "e": "The professor listed five elements of fraud: a material misrepresentation; made with knowledge of its falsity or asserted without knowledge of its truth; intended to induce the other party to act; actual reliance; and injury caused by the reliance. The seller's reckless assertion meets the knowledge element, and the other facts supply materiality, intent, reliance, and injury. Fraud resurfaces in Rule 8.1, Rule 1.2(d), Rule 1.16, and Rule 8.4(c).",
   "unit": 0
  },
  {
   "q": "A nonlawyer runs a paralegal service that sells divorce forms. When customers ask, she tells them which forms to file and how to fill them in. No customer has complained, and she never claims to be a lawyer. Under Florida Bar v. Brumbaugh, her conduct is:",
   "o": [
    "Permitted as publishing under the Dacey rationale",
    "UPL, because advising customers which forms to use and how to complete them goes beyond selling forms",
    "Permitted, as long as she posts a disclaimer that she is not a lawyer",
    "UPL only if a customer complains"
   ],
   "a": 1,
   "why": [
    "Dacey protects a general publication sold to the public with no personal contact. Answering a particular customer's questions about her own forms is personal advice, which Dacey called the essential of legal practice.",
    "Correct. Brumbaugh lets a nonlawyer sell forms and type information the client gives in writing, but bars advising on which forms are needed, how to fill them out, or where to file.",
    "Brumbaugh never held herself out as a lawyer and still committed UPL because her clients relied on her. The disclaimer concept comes from the Texas software statute, not from Brumbaugh.",
    "No customer complained in Brumbaugh; the Bar brought the case. The court found UPL because clients placed some reliance on her, and a complaint is not required."
   ],
   "e": "Brumbaugh's test asks whether the service affects important legal rights and requires more legal skill than the average citizen has, done for another as a course of conduct. A nonlawyer may sell forms and type client-written information, but may not advise on which forms, how to complete them, or where to file. Reliance by the customer is enough, so the lack of complaints and the lack of holding out do not matter.",
   "unit": 1
  },
  {
   "q": "A New York lawyer, not licensed in California, advises a California client about California law for several months, entirely by phone and email, and never enters the state. Under Birbrower v. Superior Court:",
   "o": [
    "It is UPL only if the matter is in litigation",
    "This can be UPL, because practicing law in California turns on sufficient contact with the California client, and physical presence is only one factor",
    "There is no UPL, because the lawyer was never physically present in California",
    "It is always UPL whenever an out-of-state lawyer touches California law"
   ],
   "a": 1,
   "why": [
    "California defines practice to include legal advice and instrument preparation whether or not in litigation, and Birbrower rejected an exception for services not involving a courtroom appearance.",
    "Correct. Birbrower held that advising a California client on California law by telephone, fax, or computer can violate section 6125. The test is sufficient contact with the client to make the service a clear legal representation.",
    "Birbrower said physical presence is one factor, neither required nor sufficient, so its absence does not end the inquiry.",
    "The court said a lawyer does not automatically practice in California just by practicing California law elsewhere. Mere fortuitous or attenuated contacts do not count."
   ],
   "e": "Birbrower asks whether the out-of-state lawyer had sufficient contact with the California client to make the service a clear legal representation, looking at quantity and quality. Physical presence is one factor, neither required nor sufficient. Months of advice to a California client on California law can meet the test even with no visit, and the consequence is that fees for the UPL work are unenforceable.",
   "unit": 1
  },
  {
   "q": "A lawyer licensed only in Oklahoma opens a small permanent office in Texas to serve his Oklahoma clients. Under Model Rule 5.5:",
   "o": [
    "He is permitted under 5.5(d)(1)",
    "He violates 5.5(b)(1), because he has established an office or other systematic and continuous presence for practicing law in a state where he is not admitted",
    "He is permitted as long as he tells his clients he is not licensed in Texas",
    "He is permitted under 5.5(c)(4), because the work arises out of his home-state practice"
   ],
   "a": 1,
   "why": [
    "Rule 5.5(d)(1) covers services provided to the lawyer's own employer or its organizational affiliates (in-house counsel). He serves outside clients, so it does not apply.",
    "Correct. Rule 5.5(b)(1) bars an unadmitted lawyer from establishing an office or systematic and continuous presence except as the Rules or other law authorize. An office is not temporary, so only paragraph (d) could help, and neither (d) exception fits.",
    "Rule 5.5(b)(1) bars the office itself regardless of disclosure. Birbrower also rejected full disclosure of non-licensure as an exception.",
    "Every paragraph (c) safe harbor covers services provided on a temporary basis. A permanent office is not temporary, so (c)(4) cannot apply."
   ],
   "e": "Rule 5.5 runs in order: (a) prohibition, (b) no office or continuous presence and no holding out, (c) temporary safe harbors, and (d) two non-temporary safe harbors. A permanent office is a systematic and continuous presence under (b)(1), and it is outside (c) because it is not temporary. Only (d) can authorize an office, and he is neither in-house counsel nor providing services federal law authorizes.",
   "unit": 1
  },
  {
   "q": "A law firm agrees to pay a nonlawyer marketing partner 20% of the firm's legal fees. Which rule most directly prohibits this?",
   "o": [
    "Rule 5.7, which governs law-related services",
    "Rule 1.5(e), which governs dividing a fee between lawyers in different firms",
    "Rule 5.4(a), which bars a lawyer or firm from sharing legal fees with a nonlawyer",
    "Rule 7.3, which governs solicitation"
   ],
   "a": 2,
   "why": [
    "Rule 5.7 decides when the Rules follow a lawyer into a law-related business such as an ancillary service. It does not address paying a nonlawyer a share of legal fees.",
    "Rule 1.5(e) covers splitting a fee between lawyers who are not in the same firm. The recipient here is a nonlawyer, which Rule 5.4(a) governs.",
    "Correct. Rule 5.4(a) says a lawyer or law firm shall not share legal fees with a nonlawyer. A percentage of fees paid to a marketing partner fits none of the listed exceptions.",
    "Rule 7.3 regulates targeted communications offering legal services to a specific person. It does not address fee sharing with a nonlawyer."
   ],
   "e": "Rule 5.4 protects the lawyer's independent judgment. Paragraph (a) bars sharing legal fees with nonlawyers, with narrow exceptions: compensation or retirement plans for nonlawyer employees, payments to a deceased lawyer's estate, the sale of a practice under Rule 1.17, and sharing court-awarded fees with a nonprofit that employed or recommended the lawyer. A 20% share of fees to a marketing partner is none of these.",
   "unit": 1
  },
  {
   "q": "Taylor, licensed only in New Mexico and in good standing there, runs a law office in Houston where she prepares USCIS (U.S. Citizenship and Immigration Services) family petitions. Which provision is her only possible route to practicing this way in Texas?",
   "o": [
    "Rule 5.5(c)(1), association with a locally admitted lawyer",
    "Rule 5.5(c)(4), services arising out of her home-state practice",
    "Rule 5.5(d)(2), services the lawyer is authorized by federal or other law to provide",
    "Rule 5.5(d)(1), services to the lawyer's employer"
   ],
   "a": 2,
   "why": [
    "Paragraph (c) covers only temporary practice. A permanent Houston office is not temporary, so association with local counsel cannot cure the (b)(1) problem.",
    "This catch-all is still limited to temporary services. An office in Texas is a systematic and continuous presence, which (c) does not reach.",
    "Correct. Paragraph (d) is the only part of Rule 5.5 that allows an office, and (d)(2) covers services federal law authorizes. The slide hypo identified it as the only door, conditioned on good standing in the licensing state.",
    "Rule 5.5(d)(1) is the in-house counsel exception. Taylor serves outside clients, not an employer."
   ],
   "e": "Taylor's Houston office is an office or systematic and continuous presence under Rule 5.5(b)(1). Paragraph (c) cannot help because it covers only temporary practice. Paragraph (d)(2) allows a lawyer admitted elsewhere, and not disbarred or suspended, to practice through an office when federal or other law authorizes the services. Rule 8.5(a) also lets Texas discipline her because she provides legal services there.",
   "unit": 1
  },
  {
   "q": "A lawyer admitted in both Texas and Louisiana engages in questionable conduct during a case pending in a Louisiana court. The court's rules say nothing about which ethics rules apply. Under Rule 8.5:",
   "o": [
    "Both states may discipline her, and each applies its own rules",
    "Texas's rules apply because the predominant effect of the conduct was in Texas",
    "Both states may discipline her, and Louisiana's rules apply to the conduct",
    "Only Louisiana may discipline her, applying Louisiana's rules"
   ],
   "a": 2,
   "why": [
    "Rule 8.5(b) picks one set of rules. For conduct connected to a matter pending before a tribunal, that is the tribunal's jurisdiction.",
    "The predominant-effect test is in Rule 8.5(b)(2) and applies only to conduct not connected to a matter pending before a tribunal.",
    "Correct. Rule 8.5(a) lets every jurisdiction where a lawyer is admitted discipline her wherever the conduct occurs. Rule 8.5(b)(1) applies the rules of the jurisdiction where the tribunal sits unless the tribunal's rules provide otherwise.",
    "Rule 8.5(a) says a lawyer admitted in a jurisdiction is subject to its discipline regardless of where the conduct occurs, so Texas may also discipline her."
   ],
   "e": "Rule 8.5(a) answers who may discipline: any jurisdiction where the lawyer is admitted, plus any jurisdiction where she provides or offers legal services, and more than one may act for the same conduct. Rule 8.5(b) answers which rules apply: for conduct in a matter pending before a tribunal, the rules of the jurisdiction where the tribunal sits, unless the tribunal's rules say otherwise. Here both states may discipline, and Louisiana's rules govern.",
   "unit": 1
  },
  {
   "q": "After UPL Committee v. Parsons Technology enjoined Quicken Family Lawyer, Texas amended its Government Code section 81.101. Under the amended statute, selling interactive legal-document software in Texas is not the practice of law if:",
   "o": [
    "The seller registers with the State Bar",
    "The software never asks the user any questions",
    "The product clearly and conspicuously states that it is not a substitute for the advice of an attorney",
    "A Texas-licensed attorney reviews every template"
   ],
   "a": 2,
   "why": [
    "Nothing in section 81.101 requires registration with the State Bar. The only condition is the clear and conspicuous disclaimer.",
    "The Texas statute does not turn on whether the program interviews the user. Branching and interviewing were concerns in Parsons and the LegalZoom trial court order, which the statute overrode for software carrying the disclaimer.",
    "Correct. Section 81.101 excludes the design, creation, publication, distribution, display, or sale of software and similar products from the practice of law if they clearly and conspicuously make that statement.",
    "Attorney review of each template is a term of the North Carolina LegalZoom consent judgment, not a condition in the Texas statute."
   ],
   "e": "In Parsons, the court held that Quicken Family Lawyer, taken as a whole, went beyond a form book and was UPL. Texas immediately amended Government Code section 81.101 so that software and similar products are not the practice of law if they clearly and conspicuously state they are not a substitute for an attorney's advice, and the Fifth Circuit vacated the injunction. The episode shows legislatures also define the practice of law.",
   "unit": 1
  },
  {
   "q": "Under NC State Board of Dental Examiners v. FTC (2015), when does a professional licensing board lose state-action immunity from the antitrust laws?",
   "o": [
    "Never, because licensing boards are arms of the State",
    "Whenever any member of the board practices the profession",
    "Only when the board's rule is shown to raise consumer prices",
    "When a controlling number of its decision-makers are active participants in the market it regulates and the State does not actively supervise it"
   ],
   "a": 3,
   "why": [
    "Dental Board rejected automatic immunity for a board controlled by active market participants and not actively supervised by the State.",
    "The test asks whether a controlling number of decision-makers are active market participants, and whether the State actively supervises. One practicing member alone does not meet it.",
    "The holding turned on the board's composition and the lack of active state supervision, not on proof of price effects.",
    "Correct. Both conditions were present in Dental Board, where dentists on the board restricted teeth whitening to licensed dentists without active state supervision."
   ],
   "e": "Dental Board held that a licensing board loses state-action antitrust immunity when a controlling number of its decision-makers are active market participants in the occupation it regulates and the State does not actively supervise it. The holding reaches bar UPL committees run by practicing lawyers. Oregon capped lawyers on its UPL committee and Virginia eliminated its bar UPL committee in response.",
   "unit": 1
  },
  {
   "q": "A lawyer owns a title insurance company that she runs out of her law office. She does not tell customers that the title services are not legal services or that client-lawyer protections do not apply. Under Rule 5.7:",
   "o": [
    "She violates Rule 5.4(b) by owning the company",
    "She is not subject to the Rules, because title work is not legal work",
    "She is subject to the Rules only if a customer is harmed",
    "She is subject to the Rules of Professional Conduct in providing the title services"
   ],
   "a": 3,
   "why": [
    "Rule 5.4(b) bars partnerships with nonlawyers where any partnership activity is the practice of law. Owning a law-related business is addressed by Rule 5.7, not 5.4(b).",
    "Law-related services are services that in substance relate to legal services and are not UPL when done by a nonlawyer. Rule 5.7 exists to decide when the Rules follow the lawyer into that kind of business, and here they do.",
    "Rule 5.7(a) turns on how the services are provided and whether the lawyer gave the required notice, not on harm to a customer.",
    "Correct. Rule 5.7(a) applies the Rules to law-related services provided in circumstances not distinct from the lawyer's legal services, or through a lawyer-controlled entity when the lawyer fails to take reasonable measures to tell recipients the services are not legal services."
   ],
   "e": "Rule 5.7 makes the Rules apply to law-related services in two situations: when the lawyer provides them in circumstances not distinct from her legal services, or through an entity she controls without taking reasonable measures to make sure recipients know the services are not legal services and lack client-lawyer protections. Comment [6] says to communicate this before the engagement, preferably in writing, and comment [7] puts the burden on the lawyer. She gave no notice and ran the business from her law office, so the Rules apply.",
   "unit": 1
  },
  {
   "q": "Under Florida Bar v. Brumbaugh, which of the following may a nonlawyer secretarial service do?",
   "o": [
    "Explain what testimony the customer will need at the final hearing",
    "Correct errors and omissions the customer made on the form",
    "Type a divorce form using only the information the customer wrote down and handed over",
    "Tell the customer which of several dissolution forms fits the customer's situation"
   ],
   "a": 2,
   "why": [
    "Advising on how to present evidence at the hearing is on the MAY NOT list. Brumbaugh herself gave this kind of advice, and it was part of her UPL.",
    "Brumbaugh bars making inquiries and answering questions about how best to fill out forms, including correcting errors and omissions.",
    "Correct. Brumbaugh lets a nonlawyer type forms if she only copies information the client gave her in writing.",
    "Choosing which forms are necessary is on Brumbaugh's MAY NOT list, because it applies legal judgment to the customer's situation."
   ],
   "e": "Brumbaugh draws a line between selling and typing on one side and advising on the other. A nonlawyer may sell printed material and sample forms, type forms using the client's own written information, and advertise the business. She may not advise on remedies, help prepare forms, or answer questions about which forms to use, how to fill them out, where to file, or how to present evidence.",
   "unit": 1
  },
  {
   "q": "A woman uses a lawyer's website form to describe her employment dispute in detail and asks what she should do. The lawyer replies with specific advice about her claim and says nothing about whether he represents her. She relies on the advice. Does a lawyer-client relationship likely exist?",
   "o": [
    "No, because a website exchange can never form a relationship",
    "No, because only a signed engagement agreement creates a relationship",
    "Yes, under Restatement section 14(1)(b): the lawyer did not decline while knowing or having reason to know she was reasonably relying on him",
    "No, because she paid no fee"
   ],
   "a": 2,
   "why": [
    "The notes apply the same section 14 test to online contact. The medium does not change the test; invitation, response, legal advice, and reliance all matter.",
    "No signed contract is required. A relationship can be implied from conduct, and Morris summed this up as acta non verba (deeds, not words).",
    "Correct. Section 14(1) requires the person to manifest intent to receive legal services, then either the lawyer's consent or the lawyer's failure to decline when he knows or should know of her reasonable reliance. She asked for help, he gave substantive advice, and he never said no.",
    "Section 14 and Morris v. Margulis both say formation does not depend on payment of fees."
   ],
   "e": "Restatement section 14 forms a relationship when a person manifests intent that the lawyer provide legal services and either the lawyer consents or the lawyer fails to manifest lack of consent while knowing or having reason to know the person reasonably relies on him. No contract, fee, or express consent is needed. The lawyer here answered with specific advice and never declined, so her reliance was reasonable and a relationship likely formed.",
   "unit": 2
  },
  {
   "q": "A court appoints a lawyer to represent an indigent party in a type of case the lawyer has never handled. He moves to be excused, arguing only that he lacks expertise in the field. Under Rule 6.2 and Cunningham v. Sommerville:",
   "o": [
    "He may decline freely, because in the U.S. lawyers choose their clients",
    "He should not be excused on that ground alone, because study or the appointment of experienced co-counsel can supply competence",
    "Rule 1.1 requires him to decline the appointment",
    "He must be excused, because lack of expertise is automatically good cause"
   ],
   "a": 1,
   "why": [
    "Lawyers usually choose their clients, but a valid court appointment is the main exception. Restatement section 14(2) forms the relationship, and Rule 6.2 bars seeking to avoid it without good cause.",
    "Correct. Cunningham said a lawyer unfamiliar with an area should be given time to study and perhaps experienced co-counsel. Rule 1.1 comment [4] likewise lets an appointed lawyer reach competence through reasonable preparation.",
    "Rule 1.1 does not require specialists. A newly admitted lawyer can be competent, and competence can be gained through study or association with an experienced lawyer.",
    "Rule 6.2's examples of good cause are a likely Rules or law violation, an unreasonable financial burden, and repugnance likely to impair the representation. Unfamiliar subject matter is not good cause if study or co-counsel can cure it."
   ],
   "e": "Rule 6.2 says a lawyer shall not seek to avoid a tribunal's appointment except for good cause, such as a likely violation of the Rules or law, an unreasonable financial burden, or repugnance likely to impair the representation. Rule 1.1 measures competence by what the matter requires and allows competence through preparation. Cunningham said unfamiliarity can be cured with time to study and possibly co-counsel, so lack of expertise alone is not good cause.",
   "unit": 2
  },
  {
   "q": "In the middle of trial, the client fires her lawyer. What must the lawyer do?",
   "o": [
    "Withdraw under Rule 1.16(a)(3), while still complying with any requirement of court permission and taking reasonable steps to protect the client",
    "Stop work immediately, with no need to involve the court",
    "Stay in the case if he believes the discharge is unwise",
    "First sue the client for any unpaid fees"
   ],
   "a": 0,
   "why": [
    "Correct. Discharge is a mandatory withdrawal ground, but Rule 1.16(c) requires compliance with rules requiring notice to or permission of the tribunal, and 1.16(d) requires steps such as notice, time to find new counsel, and returning papers and unearned fees.",
    "A valid ground under 1.16(a) does not eliminate 1.16(c). If the court's rules require permission to withdraw, the lawyer must get it, and must continue if the court orders it.",
    "Rule 1.16(a)(3) makes withdrawal mandatory when the lawyer is discharged. The client may end the relationship whether or not the lawyer agrees.",
    "Nothing in Rule 1.16 conditions withdrawal on resolving fees. Paragraph (d) instead requires the lawyer to protect the client's interests, including refunding unearned advance fees."
   ],
   "e": "Rule 1.16(a)(3) requires a lawyer to withdraw once discharged, because the client may end the relationship at any time. That ground does not remove the other two layers: 1.16(c) requires compliance with any rule requiring the tribunal's permission, and the lawyer must continue if ordered to. Rule 1.16(d) requires reasonable notice, time to hire new counsel, return of papers and property, and refund of unearned fees.",
   "unit": 2
  },
  {
   "q": "Which of the following is a PERMISSIVE ground for withdrawal under Model Rule 1.16?",
   "o": [
    "The lawyer's illness materially impairs the lawyer's ability to represent the client",
    "The client discharges the lawyer",
    "The client fails to pay the fee after a reasonable warning that the lawyer will withdraw unless paid",
    "The client persists in using the lawyer's services to commit a fraud after the lawyer has explained the limits on what the lawyer can do"
   ],
   "a": 2,
   "why": [
    "Rule 1.16(a)(2) makes withdrawal mandatory when the lawyer's physical or mental condition materially impairs the representation.",
    "Rule 1.16(a)(3) makes withdrawal mandatory when the lawyer is discharged.",
    "Correct. Rule 1.16(b)(5) permits withdrawal when the client substantially fails to fulfill an obligation to the lawyer, such as paying the fee, after a reasonable warning.",
    "This is mandatory under Rule 1.16(a)(4): the client persists in using the lawyer to commit a crime or fraud despite the discussion Rules 1.2(d) and 1.4(a)(5) require."
   ],
   "e": "Rule 1.16(a) lists four mandatory grounds: the representation will violate the Rules or law, the lawyer's condition materially impairs the lawyer, the lawyer is discharged, and the client persists in using the lawyer for a crime or fraud after the required discussion. Rule 1.16(b) lists permissive grounds, including (b)(5), the client's substantial failure to meet an obligation such as payment after a reasonable warning. The warning is required before withdrawing on that ground.",
   "unit": 2
  },
  {
   "q": "A firm formally declines to represent a former bank officer in matters arising from the bank's collapse, and he hires other counsel. Firm lawyers, who had handled his personal matters, then meet with him, discuss the bank matters, and help prepare his Wells submission. He later sues the firm, claiming it represented him. Under Morris v. Margulis:",
   "o": [
    "No relationship could form, because the firm expressly declined the representation",
    "A relationship may have formed despite the formal refusal, because formation turns on conduct and the client's viewpoint",
    "No relationship could form, because he paid no fee for the Wells submission work",
    "A relationship formed only if the firm's lawyers subjectively intended to represent him"
   ],
   "a": 1,
   "why": [
    "Morris rejected that argument. A brief substantive consultation can create a relationship even when the lawyer has formally rejected the representation.",
    "Correct. Morris held that substantive legal discussions with a person seeking legal advice who treats them as confidential can create a relationship. The court summed it up as acta non verba, and summary judgment for the firm was reversed.",
    "Morris lists payment of fees among the factors that do not control formation.",
    "Morris says formation does not depend on the attorney's consent or intent and is judged from the client's viewpoint."
   ],
   "e": "Morris v. Margulis held that a lawyer-client relationship may be implied from conduct. Formation does not depend on time spent, fees, a contract, or the lawyer's consent, and it is judged from the client's viewpoint. Because firm lawyers held substantive discussions about the bank matters and helped with the Wells submission, a factfinder could find a relationship despite the formal refusal.",
   "unit": 2
  },
  {
   "q": "A lawyer is asked to file a civil claim. She has learned the facts and the law and has a good-faith argument on the merits, but she believes the client will probably lose and that vital evidence can be developed only through discovery. Under Rule 3.1:",
   "o": [
    "She may not file until she has fully substantiated the facts",
    "She may file, because a claim is not frivolous merely because facts are not yet substantiated, evidence must come from discovery, or the lawyer expects to lose",
    "She may file only if she adds a good-faith argument to reverse existing law",
    "She may not file, because she believes the claim will ultimately lose"
   ],
   "a": 1,
   "why": [
    "Comment [2] says an action is not frivolous merely because the facts have not first been fully substantiated.",
    "Correct. Rule 3.1 comment [2] lists exactly these three situations as not making a claim frivolous. A claim is frivolous only if the lawyer cannot make a good-faith argument on the merits or for changing the law.",
    "A good-faith argument to extend, modify, or reverse the law is one non-frivolous basis, but a good-faith argument on the merits under existing law is enough.",
    "Comment [2] says an action is not frivolous because the lawyer believes the client's position will ultimately not prevail."
   ],
   "e": "Rule 3.1 bars bringing or defending a proceeding unless there is a non-frivolous basis in law and fact, and a good-faith argument for extending, modifying, or reversing the law counts. Comment [2] says a claim is not frivolous just because the facts are not yet substantiated, vital evidence must come through discovery, or the lawyer thinks the client will lose. The lawyer here has a good-faith argument, so she may file.",
   "unit": 2
  },
  {
   "q": "A city appoints its full-time in-house government lawyer to represent an indigent defendant. Her employer forbids its lawyers from practicing law outside their employment. Under Cunningham v. Sommerville, the appointment:",
   "o": [
    "Is void, because government lawyers can never be appointed",
    "Must be accepted, because unfamiliarity with criminal law is not good cause",
    "Must be accepted, because only repugnance can be good cause",
    "Would impose an unreasonable financial burden on her, which is good cause under Rule 6.2(b)"
   ],
   "a": 3,
   "why": [
    "Cunningham did not create a categorical bar. It held that this kind of appointment imposes an unreasonable financial burden, which is good cause under 6.2(b).",
    "Unfamiliarity is not good cause when study or co-counsel can cure it, but the issue here is the employer's ban on outside practice, which Cunningham treated as a financial burden.",
    "Rule 6.2 lists three examples of good cause: a likely violation of the Rules or law, an unreasonable financial burden, and repugnance likely to impair the representation.",
    "Correct. Cunningham held that appointing an in-house business or government lawyer whose employer forbids outside practice would impose an unreasonable financial burden under Rule 6.2(b)."
   ],
   "e": "Rule 6.2 says a lawyer shall not seek to avoid a court appointment except for good cause, and (b) lists an unreasonable financial burden on the lawyer. Cunningham v. Sommerville held that appointing an in-house business or government lawyer whose employer forbids outside practice imposes that kind of burden. She therefore has good cause to seek to avoid the appointment.",
   "unit": 2
  },
  {
   "q": "Shortly before trial, a civil-rights plaintiff tells the court at oral argument that he can dictate which witnesses his lawyer calls and which arguments he makes, including claims already dismissed, and that he will sue for malpractice if the lawyer does not follow his instructions. Under Whiting v. Lacara:",
   "o": [
    "The lawyer must follow the client, because the client controls all decisions",
    "The lawyer's written motion papers alone required withdrawal",
    "The court must allow withdrawal, because the client created a functional conflict between Rule 11 sanctions and a threatened malpractice suit",
    "The court may deny withdrawal because trial is close, which ends the analysis"
   ],
   "a": 2,
   "why": [
    "Whiting does not hold that the client may dictate everything. The client's demand to pursue dismissed claims would expose the lawyer to Rule 11 sanctions.",
    "The papers were insufficient: the fee dispute lacked detail and the client disputed the misconduct claims. The client's own statements at oral argument changed the result.",
    "Correct. The Second Circuit reversed the denial of withdrawal. Following the client risked Rule 11 sanctions, refusing him invited an actively pursued malpractice action, and the court's docket interests could not force counsel to stay in that conflict.",
    "Courts have broad discretion over their dockets, but Whiting held that discretion cannot require counsel to stay in an impossible conflict."
   ],
   "e": "Whiting v. Lacara reviewed the denial of a withdrawal motion for abuse of discretion. The lawyer's papers alone did not justify withdrawal, but at oral argument the client said he would dictate strategy, including dismissed claims, and would sue for malpractice otherwise. That created a functional conflict: complying risked Rule 11 sanctions and refusing invited a malpractice suit, so the Second Circuit ordered withdrawal.",
   "unit": 2
  },
  {
   "q": "A corporation retains a lawyer. The CEO directs the lawyer's work on the matter. Under Rule 1.13(a), who is the lawyer's client?",
   "o": [
    "The CEO and the corporation jointly, by default",
    "The board of directors as individuals",
    "The corporation, acting through its duly authorized constituents",
    "The CEO, because the CEO directs the lawyer's work"
   ],
   "a": 2,
   "why": [
    "Dual representation of a constituent is possible, but only if formation, conflicts, consent, and communication are handled expressly for the individual. It is not the default.",
    "Directors are constituents of the organization. The client is the entity itself, not the individuals who run it.",
    "Correct. Rule 1.13(a) says a lawyer employed or retained by an organization represents the organization acting through its duly authorized constituents.",
    "The CEO is a constituent through whom the organization acts. Constituents are not automatically clients just because they speak for the entity."
   ],
   "e": "Rule 1.13(a) makes the organization itself the client, acting through its duly authorized constituents such as officers, directors, and employees acting for it. Those constituents are not clients merely because they direct the lawyer. In re Robbins shows that once a constituent does become a client, the lawyer owes that person every duty, including conflict and communication duties, so identify the client first.",
   "unit": 2
  },
  {
   "q": "A partner assigns a new associate, who has done only trusts and estates work and has never seen a trial, to try a case alone the next week, and refuses to seek a continuance. The associate is unprepared, but the client wins anyway. Is the partner subject to discipline?",
   "o": [
    "Yes, under Rules 1.1 and 5.1, because discipline does not require a bad outcome or client injury",
    "No, because the client was not harmed",
    "No, the only remedy is a malpractice action",
    "Only if the client files a grievance"
   ],
   "a": 0,
   "why": [
    "Correct. The partner failed to make reasonable efforts to ensure competent representation, which violates Rules 1.1 and 5.1. Discipline does not depend on whether the poor performance caused a loss.",
    "The disciplinary system protects the public and the profession, and a Rule violation can be sanctioned without damages or client injury.",
    "Discipline and malpractice are separate systems. A Rule violation may be disciplined even where malpractice, which requires injury, would fail.",
    "Nothing in Rules 1.1 or 5.1 makes discipline depend on a client complaint. A single incident may support discipline."
   ],
   "e": "Rule 1.1 requires the knowledge, skill, thoroughness, and preparation reasonably necessary, and Rule 5.1 requires partners and supervisors to make reasonable efforts to ensure other lawyers comply with the Rules. Sending an untrained associate to trial with no preparation fails both. The win does not matter, because discipline does not require proof that the performance caused harm.",
   "unit": 3
  },
  {
   "q": "A client convicted of a crime sues his former defense lawyer for malpractice. Under the majority rule, what must he prove in addition to the ordinary malpractice elements?",
   "o": [
    "That the lawyer violated a Rule of Professional Conduct",
    "Only ordinary negligence",
    "Actual innocence, usually along with having the conviction overturned",
    "That the lawyer acted in bad faith"
   ],
   "a": 2,
   "why": [
    "A Rule violation is neither required nor sufficient for malpractice. It may be evidence of breach but creates no cause of action.",
    "Ordinary negligence is the baseline for any malpractice claim, but the majority rule adds an actual-innocence requirement for convicted criminal defendants.",
    "Correct. Most jurisdictions addressing the issue require a convicted defendant to prove actual innocence and overturn the conviction before suing defense counsel.",
    "Neither the majority rule nor Restatement section 53(d) adds a bad-faith requirement."
   ],
   "e": "Restatement section 53(d) requires a convicted defendant to prove that the lawyer failed to act properly and that, but for the failure, the result would have been different. Most jurisdictions are stricter and require proof of actual innocence, usually after overturning the conviction. The Restatement says proof of actual innocence is not necessary, so know both answers.",
   "unit": 3
  },
  {
   "q": "A lawyer's engagement letter says the client 'agrees not to sue the lawyer for malpractice.' The client had no separate lawyer when she signed. This clause:",
   "o": [
    "Is valid because it is in writing",
    "Is valid if the matter is billed at a flat fee",
    "Is a valid limitation of scope under Rule 1.2(c)",
    "Violates Rule 1.8(h)(1), because a lawyer may not prospectively limit malpractice liability unless the client is independently represented"
   ],
   "a": 3,
   "why": [
    "A writing does not satisfy Rule 1.8(h)(1). The rule requires independent representation of the client, which she did not have.",
    "The fee arrangement has no bearing on Rule 1.8(h)(1). The only condition is independent representation.",
    "Rule 1.2(c) lets a lawyer narrow the tasks performed. A promise not to sue limits liability, not scope, so it falls under 1.8(h).",
    "Correct. Rule 1.8(h)(1) bars agreements prospectively limiting malpractice liability unless the client is independently represented in making the agreement. A no-suit promise is such an agreement."
   ],
   "e": "Rule 1.8(h)(1) bars a lawyer from making an agreement that prospectively limits malpractice liability unless the client is independently represented in making it. A no-suit clause is a liability limit. Lerner v. Laufer said the no-suit clause in that case violated 1.8(h), even though the limited-scope agreement itself was valid under 1.2(c).",
   "unit": 3
  },
  {
   "q": "A family-law specialist learns late at night that a client's relative has been arrested. No criminal lawyer can be reached, so she goes to the jail and tries to get bail set. She fails. Did she violate Rule 1.1?",
   "o": [
    "Yes, because she lacks criminal-law experience",
    "No, because comment [3] allows a lawyer without the usual skill to give limited help in an emergency when referral or consultation is impractical",
    "Yes, because the effort failed",
    "No, because Rule 1.1 applies only to paying clients"
   ],
   "a": 1,
   "why": [
    "Comment [3] exists for exactly this gap. Lack of experience in the field does not bar limited help when no referral is practical.",
    "Correct. Comment [3] permits emergency assistance when referral, consultation, or association is impractical, limited to what is reasonably necessary. The slide hypo used these facts.",
    "Competence is measured by the lawyer's process when the work was done, not by the outcome.",
    "Rule 1.1 applies to the representation of any client. The answer rests on the emergency exception, not on the absence of a fee."
   ],
   "e": "Rule 1.1 requires the knowledge, skill, thoroughness, and preparation reasonably necessary. Comment [3] creates an emergency exception: a lawyer without ordinary skill in the field may give advice or help when referral, consultation, or association is impractical, limited to what is reasonably necessary. Her late-night bail effort fits, and the failed result does not prove incompetence.",
   "unit": 3
  },
  {
   "q": "A patent lawyer stops working on an inventor's application for six months because his bills went unpaid, though the client never actually received the bills. He resumes only when paid. No competitor filed first. Under Rule 1.3:",
   "o": [
    "No violation, because Rule 1.3 covers only litigation deadlines",
    "He violated Rule 1.3, because nonpayment does not justify silent inaction and discipline does not require harm",
    "No violation, because no competitor filed first",
    "No violation, because the client did not pay"
   ],
   "a": 1,
   "why": [
    "Rule 1.3 applies to every representation. Procrastination and inaction in any matter are the classic violations.",
    "Correct. Rule 1.3 requires reasonable diligence and promptness. A payment dispute must be handled through communication and the Rule 1.16 withdrawal procedures, not by quietly stopping work.",
    "Discipline does not require client harm, so the lucky outcome does not excuse the delay.",
    "Nonpayment allows the lawyer to warn the client and then seek to withdraw under Rule 1.16(b)(5). It does not permit letting the matter go dormant."
   ],
   "e": "Rule 1.3 requires reasonable diligence and promptness, and letting a matter sit is the classic violation. If a client has not paid, the lawyer must communicate and, if needed, use Rule 1.16, for example by warning under 1.16(b)(5) and then withdrawing properly. Stopping work for six months violated 1.3, and the absence of harm does not change that.",
   "unit": 3
  },
  {
   "q": "Before signing a mediated property settlement, a divorce client hires an experienced lawyer to review it. His signed letter precisely states that he will not conduct discovery or value assets and cannot advise on overall fairness or whether to sign. The client later sues him for malpractice for failing to do those things. Under Lerner v. Laufer:",
   "o": [
    "The limited-scope letter is void under Rule 1.8(h)",
    "He did not breach the standard of care, because a precise, reasonable limitation made with informed consent under Rule 1.2(c) defines what he had to do",
    "He breached the standard of care, because a matrimonial lawyer must always perform discovery",
    "He enlarged the representation by suggesting clarifying changes to the agreement"
   ],
   "a": 1,
   "why": [
    "Rule 1.8(h) bars prospective malpractice waivers. The limited-scope agreement narrowed the tasks, which Rule 1.2(c) allows; only the separate no-suit clause violated 1.8(h).",
    "Correct. Lerner held it is not a breach of the standard of care to limit scope under a signed, precisely drafted consent agreement, if the limitation is reasonable and made with informed consent.",
    "Lerner rejected that view. A competent, informed client may choose narrower legal help, and the standard of care is measured against the agreed service.",
    "The court held that suggesting clarifying textual changes did not enlarge the representation, because the client's expectations and requested service never changed."
   ],
   "e": "Lerner v. Laufer applied Rule 1.2(c), which permits limiting the scope of a representation if the limitation is reasonable and the client gives informed consent. A precise limited-scope agreement can define the standard of care, so the lawyer is judged only against the work agreed to. The same agreement cannot prospectively waive malpractice liability, which Rule 1.8(h) governs.",
   "unit": 3
  },
  {
   "q": "A defendant claims ineffective assistance of counsel. Under the prejudice prong of Strickland v. Washington, he must show:",
   "o": [
    "That he is actually innocent",
    "That counsel's performance fell below an objective standard of reasonableness",
    "That counsel violated a Rule of Professional Conduct",
    "A reasonable probability that, but for counsel's errors, the result of the proceeding would have been different"
   ],
   "a": 3,
   "why": [
    "Actual innocence is the majority rule for a convicted client's civil malpractice claim. It is not the Strickland prejudice standard.",
    "That is the first Strickland prong, deficient performance. Prejudice is the separate second prong.",
    "Strickland asks about deficient performance and prejudice under the Sixth Amendment. A Rule violation is a disciplinary question, not an element of ineffective assistance.",
    "Correct. A reasonable probability is one sufficient to undermine confidence in the outcome."
   ],
   "e": "Strickland has two prongs, and both must be met. First, counsel's performance fell below an objective standard of reasonableness under prevailing professional norms. Second, prejudice: a reasonable probability that, but for counsel's errors, the result would have been different, meaning a probability sufficient to undermine confidence in the outcome.",
   "unit": 3
  },
  {
   "q": "Capital defense counsel knows the prosecution will use the defendant's prior conviction as an aggravating factor, but never looks at the public court file on that conviction. The file contained leads to strong mitigation evidence. The client and his family had said there was no mitigation. Under Rompilla v. Beard:",
   "o": [
    "Counsel was not ineffective, because the client and family said there was no mitigation",
    "Counsel was ineffective, because counsel must make reasonable efforts to examine readily available material the prosecution will use, and the missed mitigation was prejudicial",
    "Counsel was not ineffective, because courts never second-guess investigation choices",
    "Counsel must review every prior-conviction file in every case"
   ],
   "a": 1,
   "why": [
    "Rompilla held the duty applied even where the client and family suggested no mitigation existed.",
    "Correct. Rompilla held the failure was unreasonable and created a reasonable probability of a different sentence, satisfying both Strickland prongs.",
    "Strickland review is deferential, but it is not absolute. Rompilla found this failure fell below an objective standard of reasonableness.",
    "The holding is circumstance-specific. The duty attached because this file was a sure source of what the prosecution planned to use and was easy to get."
   ],
   "e": "Rompilla v. Beard applied Strickland to a failure to investigate. Counsel who knows the prosecution will use a prior conviction as an aggravator must make a reasonable effort to examine the readily available file, even if the client and family say there is no mitigation. The failure was deficient, and the mitigation it missed created a reasonable probability of a different sentence.",
   "unit": 3
  },
  {
   "q": "A client sues her lawyer for malpractice and proves the lawyer violated a Rule of Professional Conduct during the representation. What effect does the violation have in the malpractice case?",
   "o": [
    "It may be evidence of a breach of the standard of care, but it does not by itself establish malpractice",
    "It automatically establishes malpractice",
    "It creates a presumption of breach that the lawyer must rebut",
    "It is irrelevant and inadmissible"
   ],
   "a": 0,
   "why": [
    "Correct. A Rule violation creates no private cause of action and no presumption of breach, but it may be used as evidence of breach.",
    "Malpractice requires duty, breach, legal causation, and injury under Restatement section 48. A Rule violation does not supply all of those elements.",
    "The unit sources say a Rule violation creates no presumption of breach.",
    "A Rule violation may be used as evidence of breach, so it is not irrelevant."
   ],
   "e": "Legal malpractice under Restatement section 48 requires a duty of care, a failure to exercise care, legal causation, and injury, measured against the competence and diligence lawyers normally exercise (section 52). Violating a Rule of Professional Conduct is not automatically malpractice. It creates no cause of action or presumption of breach but may be evidence of breach.",
   "unit": 3
  },
  {
   "q": "A client accepts a settlement on her lawyer's advice and later claims the lawyer negligently investigated and advised her on the settlement. Under Ziegelheim v. Apollo:",
   "o": [
    "Accepting the settlement does not automatically bar a malpractice claim about the lawyer's settlement work",
    "Her acceptance of the settlement bars any malpractice claim",
    "She must prove actual innocence",
    "The lawyer is liable for any settlement that turns out worse than a trial result might have been"
   ],
   "a": 0,
   "why": [
    "Correct. Ziegelheim held settlement advice, investigation, drafting, and communication remain subject to ordinary reasonable care.",
    "Ziegelheim rejected an automatic bar. The client's acceptance does not shield negligent settlement work.",
    "Actual innocence is the majority rule for convicted criminal defendants suing defense counsel, not for civil settlement claims.",
    "Lawyers do not guarantee an optimal result. Reasonable strategy and advice that produce a bad outcome are not negligence."
   ],
   "e": "Ziegelheim v. Apollo held that a client's acceptance of a settlement does not automatically bar a later malpractice claim. The lawyer's settlement advice, investigation, drafting, and communication are judged by ordinary reasonable care. The client still must prove negligence, because lawyers need not be perfect and do not guarantee the best result.",
   "unit": 3
  },
  {
   "q": "A capital defendant insists he is innocent and objects to any admission of guilt. His lawyer believes conceding that the defendant committed the killings is the best way to avoid the death penalty. Under McCoy v. Louisiana, the lawyer:",
   "o": [
    "May concede guilt as long as he explains the strategy first",
    "May concede guilt as a strategic choice of means",
    "May concede guilt because the defendant's position is implausible",
    "Must honor the defendant's objection, because whether to maintain innocence is the objective of the defense and belongs to the defendant"
   ],
   "a": 3,
   "why": [
    "Under Florida v. Nixon, an explanation suffices only when the defendant is unresponsive. McCoy objected, and his objection controls.",
    "McCoy treated admitting guilt versus maintaining innocence as the objective of the defense, not a tactical means decision for counsel.",
    "The defendant's prerogative does not depend on how plausible his claim is. With liberty and life at stake, he decides the defense objective.",
    "Correct. McCoy held the Sixth Amendment gives the defendant the right to insist that counsel refrain from admitting guilt, even when counsel thinks confessing gives the best chance to avoid death."
   ],
   "e": "McCoy v. Louisiana held that a defendant has the right to insist that counsel not admit guilt, even when counsel's experience suggests conceding is the best way to avoid a death sentence. Deciding whether to admit guilt and hope for mercy or maintain innocence and hold the State to its proof is the objective of the defense, so it belongs to the client. Nixon is different because that defendant neither consented nor objected.",
   "unit": 4
  },
  {
   "q": "Which of the following decisions belongs to the client under Rule 1.2(a)?",
   "o": [
    "Whether to accept a settlement offer",
    "Which witnesses to call at trial",
    "Which pretrial motions to file",
    "The order in which to present arguments"
   ],
   "a": 0,
   "why": [
    "Correct. Rule 1.2(a) expressly says the lawyer shall abide by the client's decision whether to settle a matter.",
    "Choosing witnesses is a technical and tactical means decision. The lawyer usually decides after consulting the client under Rule 1.4.",
    "Motion practice is a means of pursuing the client's objectives, which the lawyer generally controls after consultation.",
    "Structuring arguments is a tactical matter on which clients normally defer to the lawyer's skill (Rule 1.2 comment [2])."
   ],
   "e": "Rule 1.2(a) gives the client the objectives of the representation and the lawyer the means, after consultation under Rule 1.4. It expressly assigns certain decisions to the client: whether to settle, and in a criminal case the plea, whether to waive a jury trial, and whether the client will testify. Witnesses, motions, and argument order are means decisions.",
   "unit": 4
  },
  {
   "q": "A financially strapped client directs her lawyer to accept a pending settlement offer while the defendant's appeal is pending. The lawyer refuses because he believes the defendant's appeal is meritless and the client will do better by waiting. Is the lawyer subject to discipline?",
   "o": [
    "No, because evaluating the appeal is a tactical judgment for the lawyer",
    "Yes, because Rule 1.2(a) makes the settlement decision the client's, regardless of the lawyer's view of the appeal",
    "No, as long as the lawyer explained his reasons to the client",
    "No, because the lawyer acted in the client's best financial interest"
   ],
   "a": 1,
   "why": [
    "Assessing the appeal informs the lawyer's advice, but the decision to settle is not a tactical matter. Rule 1.2(a) assigns it to the client.",
    "Correct. Slide Question 2-20: settlement is expressly allocated to the client, and the lawyer's belief about the appeal's merits does not change that.",
    "Consultation is required, but after consulting, the lawyer must follow the client's decision on settlement.",
    "Rule 1.2(a) requires the lawyer to abide by the client's settlement decision even when the lawyer thinks a better result is available."
   ],
   "e": "Rule 1.2(a) says the lawyer shall abide by the client's decision whether to settle. The lawyer may advise against it and explain why, but the decision is the client's. Refusing to accept the offer took the decision away from her, so the lawyer is subject to discipline, as in Slide Question 2-20.",
   "unit": 4
  },
  {
   "q": "A convicted defendant sends his appointed appellate lawyer a list of nonfrivolous issues to raise. The lawyer raises some and, as a matter of professional judgment, omits the rest to focus on the strongest arguments. Under Jones v. Barnes:",
   "o": [
    "The choice of appellate issues is a client objective under Rule 1.2(a)",
    "The lawyer did not violate the defendant's constitutional rights, because an indigent defendant cannot compel appointed counsel to press every nonfrivolous issue",
    "The lawyer had to file an Anders brief instead",
    "The lawyer had to raise every nonfrivolous issue the defendant requested"
   ],
   "a": 1,
   "why": [
    "The Court treated issue selection as a matter of counsel's professional judgment. Justice Brennan's dissent argued the defendant should decide, but that view did not prevail.",
    "Correct. Jones v. Barnes held there is no constitutional right to compel appointed counsel to raise nonfrivolous points counsel decides, as a matter of professional judgment, not to present.",
    "An Anders brief is filed when counsel believes the appeal is meritless. Here counsel found issues worth raising.",
    "That was the Second Circuit's rule, which the Supreme Court reversed. Winnowing weaker arguments is part of effective advocacy."
   ],
   "e": "Jones v. Barnes held that appointed appellate counsel has no constitutional duty to raise every nonfrivolous issue the defendant requests. Selecting issues is a matter of professional judgment, and experienced advocates winnow weaker arguments to focus on the strongest. Justice Brennan's dissent would have given the defendant the choice as a matter of autonomy.",
   "unit": 4
  },
  {
   "q": "Defense counsel explains to a capital defendant that he plans to concede guilt at trial and focus on avoiding a death sentence. The defendant neither agrees nor objects; he says nothing. Counsel concedes guilt. Under Florida v. Nixon as distinguished in McCoy:",
   "o": [
    "No blanket rule required the defendant's explicit consent, because he was unresponsive rather than objecting",
    "The concession violated McCoy, because counsel needed the defendant's express consent",
    "Counsel was required to withdraw once the defendant went silent",
    "Counsel had to get the court's permission before conceding"
   ],
   "a": 0,
   "why": [
    "Correct. Nixon held that where counsel explains a concession strategy and the defendant neither consents nor objects, explicit consent is not required. McCoy differs because McCoy objected.",
    "McCoy protects a defendant who objects. Silence is not an objection, so the McCoy right was not triggered.",
    "No source requires withdrawal. Nixon addressed whether counsel could proceed with the explained strategy, and held counsel could.",
    "Nixon did not condition the strategy on court approval. It held that no blanket rule requires the defendant's explicit consent when the defendant is unresponsive."
   ],
   "e": "McCoy gives the defendant the right to insist that counsel not admit guilt. Florida v. Nixon addresses a different situation: counsel explains a concession strategy and the defendant is unresponsive. In that case no blanket rule requires the defendant's explicit consent, so silence does not trigger the McCoy right.",
   "unit": 4
  },
  {
   "q": "A client who has not been making required estimated quarterly tax payments asks his lawyer whether anyone has ever been prosecuted for that alone, and how to minimize the chance of detection. The lawyer accurately says she found no such prosecutions and tells him it would be improper for her to advise on avoiding detection. Is she subject to discipline?",
   "o": [
    "No, but only because tax matters are outside Rule 1.2(d)",
    "Yes, because she assisted the client's crime by telling him prosecutions are rare",
    "Yes, because she had a duty to discourage him from skipping payments",
    "No, because Rule 1.2(d) allows a lawyer to discuss the legal consequences of a proposed course of conduct"
   ],
   "a": 3,
   "why": [
    "Rule 1.2(d) applies to any criminal or fraudulent conduct. She is protected because she only discussed consequences, not because of the subject matter.",
    "Accurately describing the likely consequences of breaking a law is expressly permitted by Rule 1.2(d). It is not assisting the conduct.",
    "The slide answer notes she had no duty to discourage the client. Rule 2.1 permits, but does not require, moral or similar advice.",
    "Correct. Slide Question 2-22: an honest opinion about likely consequences is permitted, and she properly refused to advise on avoiding detection."
   ],
   "e": "Rule 1.2(d) bars a lawyer from counseling or assisting conduct the lawyer knows is criminal or fraudulent, but allows the lawyer to discuss the legal consequences of any proposed course of conduct. The line falls between describing consequences, which is allowed, and helping the client avoid detection, which is not. The lawyer stayed on the permitted side.",
   "unit": 4
  },
  {
   "q": "In a custody dispute, a lawyer learns the custody evaluator will recommend that the father get sole custody. She tells her client 'as your attorney, stay, but as a mother, run,' tells her about a network of safehouses, helps her empty bank accounts, and later tells the court she cannot reveal the client's whereabouts. The client flees with the child. Under People v. Chappell, the likely sanction is:",
   "o": [
    "No discipline, because she was trying to protect the client from an abusive situation",
    "Disbarment, for violating Rules 1.2(d), 3.3(a)(2), 8.4(b), and 8.4(c)",
    "No discipline, because the client's whereabouts were privileged",
    "A private reprimand, because she told the client to stay 'as your attorney'"
   ],
   "a": 1,
   "why": [
    "Class notes record that she was trying to help the client escape abuse, but that motive did not prevent disbarment.",
    "Correct. The Colorado Supreme Court disbarred the lawyer, stating she used her license to violate the core ethical standards of her profession.",
    "Claiming privilege while knowing the client had fled with the child was part of the fraud on the court and the Rule 3.3(a)(2) violation.",
    "The disclaimer did not help. She advised and actively assisted the flight and concealed it from the court, which the court found to be a fraud on the court."
   ],
   "e": "People v. Chappell shows what crossing the Rule 1.2(d) line looks like. The lawyer counseled and assisted the client's flight with the child in violation of custody orders, concealed it from the court, and accepted continued support payments knowing the client had fled. She violated Rules 1.2(d), 3.3(a)(2), 8.4(b), and 8.4(c) and was disbarred.",
   "unit": 4
  },
  {
   "q": "A company asks its lawyer whether it must refund customers who return widgets. The lawyer says it is legally required to refund only returns made within 14 days, but recommends refunding everyone for long-term business reasons. Is this proper?",
   "o": [
    "Yes, because Rule 2.1 permits a lawyer to refer to relevant considerations beyond the law, such as economic factors",
    "No, because a lawyer must limit advice to legal questions",
    "No, because recommending more than the law requires is not candid advice",
    "Yes, because Rule 2.1 requires lawyers to give business advice"
   ],
   "a": 0,
   "why": [
    "Correct. Slide Question 2-23: the lawyer was permitted, but not required, to refer to relevant business considerations.",
    "Rule 2.1 allows advice that refers to moral, economic, social, and political factors relevant to the client's situation.",
    "Candid advice means honest advice. The lawyer accurately stated the legal requirement and then gave an honest business recommendation.",
    "Non-legal considerations are permitted, not required, under Rule 2.1."
   ],
   "e": "Rule 2.1 requires the lawyer to exercise independent professional judgment and give candid advice. In rendering advice, the lawyer may refer to moral, economic, social, and political factors relevant to the client's situation. The lawyer accurately described the legal minimum and then permissibly recommended a broader refund policy for business reasons.",
   "unit": 4
  },
  {
   "q": "An elderly client stops paying rent because she believes the landlord is beaming 'gamma rays' into her apartment, and she faces eviction. Her lawyer reasonably believes she has decision-making limitations, is at risk of substantial harm, and cannot adequately act in her own interest. The lawyer consults her daughter, shares information about the case, and prepares a guardianship petition. Under Rule 1.14:",
   "o": [
    "The lawyer violated the duty of loyalty by acting against the client's wishes",
    "The lawyer acted properly, because protective action and limited disclosure are permitted when the lawyer reasonably believes all three conditions exist",
    "The lawyer violated Rule 1.6 by sharing information with the daughter",
    "The lawyer had to withdraw instead of acting"
   ],
   "a": 1,
   "why": [
    "Rule 1.14(b) is written to permit protective action in this situation. The loyalty objection is what the rule addresses.",
    "Correct. Rule 1.14(b) permits reasonably necessary protective action when the lawyer reasonably believes the three conditions are present, and 1.14(c) allows disclosure to the extent reasonably necessary to protect the client.",
    "Rule 1.14(c) keeps the information under Rule 1.6 but expressly allows disclosure to the extent reasonably necessary when taking protective action.",
    "Rule 1.14 tells the lawyer to maintain an ordinary relationship as far as possible and permits protective action. It does not require withdrawal."
   ],
   "e": "Rule 1.14(a) tells the lawyer to keep an ordinary relationship with a client with decision-making limitations as far as reasonably possible. Under 1.14(b), when the lawyer reasonably believes the client has such limitations, is at risk of substantial harm, and cannot adequately act in her own interest, the lawyer may take reasonably necessary protective action. Rule 1.14(c) allows disclosure to the extent reasonably necessary to do so, as in Slide Question 2-24.",
   "unit": 4
  },
  {
   "q": "In a custody case, the lawyer explains that evidence of the other spouse's adultery would help the client win sole custody. The client, fully informed, instructs the lawyer not to use it. The lawyer complies, the client gets only joint custody, and the client sues for malpractice. Under Boyd v. Brett-Major, the client is:",
   "o": [
    "Unlikely to succeed, because following the explicit instructions of an otherwise well-advised client is a defense to malpractice",
    "Likely to succeed, because the lawyer should have overridden an unwise instruction",
    "Unlikely to succeed, because malpractice never applies to family-law matters",
    "Likely to succeed, because the lawyer controls the means of the representation"
   ],
   "a": 0,
   "why": [
    "Correct. Boyd held that carrying out an informed client's specific instructions, where no criminal or fraudulent end is intended, is a defense. Slide Question 2-21 applied this.",
    "Boyd holds the opposite: an attorney is duty bound to carry out an informed client's specific lawful instructions.",
    "Malpractice applies in every practice area. The defense here rests on the client's informed instruction.",
    "Calling the evidence choice a means decision would point toward the lawyer deciding. The defense comes from following the informed client's instruction under Boyd."
   ],
   "e": "Boyd v. Brett-Major held that an attorney who follows the specific instructions of an otherwise well-advised client, with no criminal or fraudulent end intended, has a defense to malpractice. Whether the attorney followed such instructions is a question of fact. The lawyer explained the advantage of the evidence and then followed the client's informed decision.",
   "unit": 4
  },
  {
   "q": "A lawyer and client disagree about how much money to spend on expert witnesses. Under Rule 1.2 comment [2], who usually defers to whom?",
   "o": [
    "The lawyer must withdraw immediately",
    "The lawyer usually defers to the client on the expense to be incurred",
    "The client always defers to the lawyer, because experts are a tactical matter",
    "Neither; Rule 1.2 requires the court to resolve it"
   ],
   "a": 1,
   "why": [
    "Withdrawal under Rule 1.16(b)(4) is an option only if consultation fails and the disagreement is fundamental.",
    "Correct. Comment [2] says lawyers usually defer to the client on expense and on concern for third persons who might be adversely affected.",
    "Clients normally defer on technical, legal, and tactical matters, but comment [2] singles out expense as an area where the lawyer usually defers to the client.",
    "Comment [2] says the Rule does not prescribe how disagreements are resolved and tells the lawyer to consult and seek a mutually acceptable resolution."
   ],
   "e": "Rule 1.2 comment [2] sets default expectations. Clients normally defer to the lawyer on technical, legal, and tactical matters, and lawyers usually defer to the client on expense and on concern for affected third persons. The lawyer should consult and seek a mutually acceptable resolution, and a fundamental disagreement can lead to withdrawal under 1.16(b)(4) or discharge under 1.16(a)(3).",
   "unit": 4
  },
  {
   "q": "A lawyer telephones an accident victim in the hospital, whom he has never met, and offers to represent her for a contingent fee. Under Model Rule 7.3:",
   "o": [
    "This is prohibited live person-to-person solicitation for pecuniary gain",
    "It is permitted because the victim is an adult",
    "It is permitted because a phone call is not in person",
    "It is permitted if everything he says is truthful"
   ],
   "a": 0,
   "why": [
    "Correct. Rule 7.3(b) bars live person-to-person solicitation when a significant motive is pecuniary gain, and no (b) exception applies to a stranger. Ohralik upheld discipline for similar conduct.",
    "Rule 7.3(b)'s exceptions are for lawyers, people with a family, close personal, or prior professional relationship, and routine business users of the services. Adulthood is not an exception.",
    "Rule 7.3(b) covers live person-to-person contact, which includes a live telephone call.",
    "Truthfulness satisfies Rule 7.1 but does not cure a 7.3(b) violation. Ohralik held a State may ban this kind of solicitation without proof of harm."
   ],
   "e": "Rule 7.3(b) bars soliciting by live person-to-person contact when a significant motive is the lawyer's pecuniary gain, unless the person is a lawyer, has a family, close personal, or prior business or professional relationship with the lawyer, or routinely uses the type of services for business. The victim is a stranger and the call seeks a contingent fee, so it is prohibited. Ohralik upheld this kind of ban as a prophylactic rule.",
   "unit": 5
  },
  {
   "q": "An ACLU cooperating lawyer speaks at a meeting of women sterilized as a condition of Medicaid, then writes to one of them that free ACLU representation is available if she wants to challenge the policy. The State seeks to discipline the lawyer for solicitation. Under In re Primus:",
   "o": [
    "Discipline is proper unless the woman asked for help first",
    "Discipline is proper, because any targeted offer of legal services is solicitation",
    "Discipline violates the First Amendment, because the letter was political expression and association offering free help",
    "Discipline is proper only if the woman declined to sue"
   ],
   "a": 2,
   "why": [
    "The letter was uninvited, and Primus still protected it because of its method, the free offer, and the political purpose.",
    "Primus applied exacting scrutiny to solicitation that is political association and held the State's rules swept too broadly.",
    "Correct. Primus held that applying the solicitation rules to this letter violated the First and Fourteenth Amendments.",
    "Williams did decline to sue in Primus, and the Court still reversed the discipline. Her choice showed the letter left her free to decide."
   ],
   "e": "In re Primus held that a State may not discipline a lawyer who, pursuing political and ideological goals through a nonprofit, writes to offer free legal help. Litigation by groups like the ACLU is political expression and association, so the State's rules get exacting scrutiny and must target actual misconduct. The Court distinguished Ohralik on method (letter), fee (free), and purpose (political).",
   "unit": 5
  },
  {
   "q": "A lawyer pays a local chiropractor $5,000 as a 'thank you' for each client the chiropractor refers. Under Rule 7.2(b):",
   "o": [
    "This is allowed if the lawyer discloses the payments to clients",
    "This is allowed as a nominal gift",
    "This is allowed as a reciprocal referral agreement",
    "This is prohibited, because a lawyer may not give anything of value to a person for recommending the lawyer's services"
   ],
   "a": 3,
   "why": [
    "Disclosure is part of the reciprocal-referral exception, not a general cure for paying for recommendations.",
    "The nominal-gift exception in 7.2(b)(5) covers token items, such as a holiday gift, that are neither intended nor reasonably expected as compensation. $5,000 per referral is compensation.",
    "Rule 7.2(b)(4) allows non-exclusive reciprocal agreements to refer clients, with client notice. It does not allow cash payments per referral.",
    "Correct. Rule 7.2(b) bars giving anything of value for a recommendation, and a $5,000 payment per client fits none of the exceptions."
   ],
   "e": "Rule 7.2(b) says a lawyer shall not give anything of value to a person for recommending the lawyer's services. The exceptions are reasonable advertising costs, usual charges of a legal service plan or qualified referral service, the purchase of a practice, non-exclusive reciprocal referral agreements with client notice, and nominal gifts not intended or expected as compensation. A $5,000 payment per client is none of these.",
   "unit": 5
  },
  {
   "q": "A criminal defense lawyer sends text messages offering representation to his former clients whose new arrests appear in police records. Is he subject to discipline under Model Rule 7.3?",
   "o": [
    "Yes, because using police records is coercive",
    "Yes, because he targeted people known to need legal services in a particular matter",
    "No, but only because criminal cases are exempt from Rule 7.3",
    "No, because former clients have a prior professional relationship with him and a text message is not live contact"
   ],
   "a": 3,
   "why": [
    "Rule 7.3(c) bars coercion, duress, or harassment. Nothing in the facts suggests the texts involved any of these.",
    "Targeting makes it solicitation under 7.3(a), but 7.3(b) bans only live contact for pecuniary gain, and these recipients are former clients.",
    "Rule 7.3 contains no exemption for criminal matters. The texts are permitted because of the method and the prior relationship.",
    "Correct. Day 6 Question 3-1. Rule 7.3(b) reaches only live person-to-person contact, and (b)(2) also exempts people with a prior professional relationship."
   ],
   "e": "Rule 7.3(a) defines solicitation as a targeted communication offering legal services to a person known to need them in a particular matter. Rule 7.3(b) bans only live person-to-person solicitation for pecuniary gain, with exceptions including people who have a prior professional relationship with the lawyer. A written text to former clients falls outside the ban on two grounds.",
   "unit": 5
  },
  {
   "q": "A lawyer makes a live sales call to the general counsel of a large company that routinely buys the kind of legal services the lawyer offers. Under the amended Model Rule 7.3:",
   "o": [
    "It is permitted only if the general counsel is a former client",
    "It is prohibited, because Delaware's rule controls under the Model Rules",
    "It is prohibited, because all live solicitation for pecuniary gain is barred",
    "It is permitted, because 7.3(b)(3) exempts persons who routinely use the type of legal services offered for business purposes"
   ],
   "a": 3,
   "why": [
    "A prior professional relationship is a separate exception under (b)(2). The routine-business-user exception does not require one.",
    "Delaware follows the former Model Rule and lacks the routine-business-user exception, but the question asks about the amended Model Rule.",
    "Rule 7.3(b) has three exceptions, and the routine business user is one of them.",
    "Correct. The 2018 amendments added the routine-business-user exception, so sophisticated repeat purchasers may be solicited directly."
   ],
   "e": "Rule 7.3(b) bars live person-to-person solicitation for pecuniary gain unless the person is a lawyer, has a family, close personal, or prior business or professional relationship with the lawyer, or routinely uses the type of legal services offered for business purposes. The general counsel's company is a routine business user, so the call is permitted. Delaware's rule, based on the former Model Rule, has no such exception.",
   "unit": 5
  },
  {
   "q": "A person tells a lawyer, 'Please stop contacting me.' The lawyer then sends a polite, truthful letter offering to represent her in her pending dispute. Under Rule 7.3:",
   "o": [
    "The letter is prohibited, because 7.3(c)(1) bars any solicitation of a person who has made known a desire not to be solicited",
    "The letter is prohibited only if it involves coercion",
    "The letter is permitted, because it is truthful",
    "The letter is permitted, because written solicitation is outside 7.3(b)"
   ],
   "a": 0,
   "why": [
    "Correct. Rule 7.3(c) applies to every form of solicitation, written or live, even where (b) would allow it.",
    "Coercion, duress, or harassment is 7.3(c)(2). The target's stated wish not to be solicited is a separate, independent bar under (c)(1).",
    "Truthfulness satisfies Rule 7.1 but does not override the absolute limits in 7.3(c).",
    "Rule 7.3(b) does not reach written contact, but 7.3(c) does, and it bars solicitation of a person who has said she does not want it."
   ],
   "e": "Rule 7.3(c) sets absolute limits that apply to all solicitation, written or live, even when 7.3(b) does not prohibit it. A lawyer may not solicit someone who has made known a desire not to be solicited, or solicit with coercion, duress, or harassment. Because she told the lawyer to stop, the letter is prohibited.",
   "unit": 5
  },
  {
   "q": "A lawyer's website states that she is 'Board Certified in Family Law.' Under Rule 7.2(c), what is required for this statement to be permitted?",
   "o": [
    "A disclaimer that certification does not guarantee results",
    "Only that the lawyer have practiced family law for a set number of years",
    "The certifying organization must be approved by an appropriate state authority or accredited by the ABA, and it must be clearly identified in the communication",
    "Only that the statement be truthful"
   ],
   "a": 2,
   "why": [
    "Rule 7.2(c) does not require that disclaimer. It requires an approved or accredited certifying body that is clearly named.",
    "Rule 7.2(c) says nothing about years of practice. It focuses on the certifying body's approval and identification.",
    "Correct. Rule 7.2(c) requires both conditions before a lawyer may state or imply certification as a specialist.",
    "Truth is required by Rule 7.1, but Rule 7.2(c) adds specific conditions about the certifying organization."
   ],
   "e": "Rule 7.2(c), moved from former Rule 7.4 in 2018, bars a lawyer from stating or implying certification as a specialist unless the certifying organization is approved by an appropriate state authority or accredited by the ABA, and the organization is clearly identified in the communication. Both conditions must be met.",
   "unit": 5
  },
  {
   "q": "Two solo lawyers share office space and occasionally consult with each other. They put up a sign reading 'Smith & Jones, Attorneys at Law.' Which statement is correct?",
   "o": [
    "The sign violates the rules only if a client is harmed",
    "The sign is proper, because sharing office space makes them a firm",
    "The sign is misleading under Rule 7.1 because it implies they practice together in a firm when they do not",
    "The sign is proper, because both names are accurate"
   ],
   "a": 2,
   "why": [
    "Rule 7.1 bars false or misleading communications without any requirement of client harm.",
    "Rule 1.0 comment [2] says lawyers who share office space and occasionally consult ordinarily are not a firm.",
    "Correct. Rule 7.1 comment [7] bars stating or implying that lawyers practice together in a firm when they are not a firm.",
    "A literally true statement can still be misleading under Rule 7.1. The sign implies a firm that does not exist."
   ],
   "e": "Rule 7.1 bars false or misleading communications about a lawyer's services, and comment [7] applies this to firm names: lawyers may not imply they practice in one firm when they do not. Rule 1.0 comment [2] says sharing space and occasional consultation ordinarily do not make a firm, but holding out as a firm can lead to being treated as one. The sign implies a firm that does not exist.",
   "unit": 5
  },
  {
   "q": "In Ohralik v. Ohio State Bar Association, the lawyer argued he could not be disciplined because no one proved his in-person solicitation actually harmed anyone. The Court held:",
   "o": [
    "A State may discipline in-person solicitation for pecuniary gain without proving actual harm, because the rule is prophylactic",
    "The State must show that the client did not understand the contract",
    "Bates requires the State to prove actual harm",
    "The discipline violated the First Amendment"
   ],
   "a": 0,
   "why": [
    "Correct. The State may presume such solicitation will more often than not be injurious, and requiring proof of injury would make it immune from oversight.",
    "No such showing is required. The Court relied on the inherent risks of in-person solicitation, not proof about a particular client.",
    "Bates protected truthful, restrained advertising. Ohralik held in-person solicitation is a business transaction in which speech is subordinate, so it gets lower scrutiny.",
    "The Court affirmed the discipline. Applying Ohio's anti-solicitation rules to Ohralik did not offend the Constitution."
   ],
   "e": "Ohralik held that a State may discipline a lawyer for in-person solicitation for pecuniary gain without proving actual harm. In-person solicitation pressures the person for an immediate response with no chance to reflect or get other advice, and often the only witnesses are the lawyer and a distressed layperson. A proof requirement would make the conduct nearly impossible to police, so the rule is prophylactic.",
   "unit": 5
  },
  {
   "q": "Under Rule 7.2(d), what must every communication about a lawyer's services include?",
   "o": [
    "The lawyer's office street address",
    "The name and contact information of at least one lawyer or law firm responsible for its content",
    "A statement that the communication is an advertisement",
    "The lawyer's fee schedule"
   ],
   "a": 1,
   "why": [
    "That was the pre-amendment requirement. The amended rule requires contact information, not specifically an office address.",
    "Correct. The 2018 amendments changed the former requirement of an office address to contact information.",
    "Some states require disclaimers, but Model Rule 7.2(d) requires only the responsible lawyer's or firm's name and contact information.",
    "Rule 7.2 permits communicating information about services but does not require listing fees."
   ],
   "e": "Rule 7.2(d) requires every communication about a lawyer's services to include the name and contact information of at least one lawyer or law firm responsible for its content. The 2018 amendments replaced the former name-and-office-address requirement with name and contact information.",
   "unit": 5
  },
  {
   "q": "In Bates v. State Bar of Arizona (1977), what did the Supreme Court hold about Arizona's ban on lawyer advertising?",
   "o": [
    "The blanket ban violated the First Amendment",
    "States may ban advertising that stirs up litigation",
    "The ban was valid because advertising undermines professionalism",
    "The ban was valid because ads give consumers incomplete information"
   ],
   "a": 0,
   "why": [
    "Correct. Bates struck down the blanket ban, and regulation continued through varying state restrictions rather than a complete ban.",
    "The Court said more use of the courts is not inherently bad when people otherwise suffer unremedied wrongs.",
    "The Court rejected Arizona's professionalism argument, reasoning that fear of cost and inability to find a lawyer burden access to justice.",
    "The Court said consumers do not need perfect information; some useful information is better than none."
   ],
   "e": "Bates involved lawyers who advertised routine services at flat fees to reach people who were not poor enough for legal aid but could not afford conventional representation. Arizona argued advertising undermines professionalism, creates unjustified expectations, and stirs up litigation. The Court rejected each argument and struck down the blanket ban under the First Amendment.",
   "unit": 5
  },
  {
   "q": "Which of the following fee arrangements is prohibited by the Model Rules?",
   "o": [
    "A contingent fee for defending a client charged with a crime",
    "An hourly fee for defending a criminal case",
    "A one-third contingent fee in a personal injury case, in a signed writing",
    "A flat fee for handling a divorce"
   ],
   "a": 0,
   "why": [
    "Correct. Rule 1.5(d)(2) bars a contingent fee for representing a defendant in a criminal case.",
    "The criminal-case ban in 1.5(d)(2) applies only to contingent fees. Hourly billing is allowed if reasonable under 1.5(a).",
    "Contingent fees are allowed in civil cases if they meet Rule 1.5(c)'s writing requirements. One-third is the industry standard.",
    "Rule 1.5(d)(1) bars fees contingent on securing a divorce or on the amount of alimony, support, or property settlement. A flat fee does not depend on the outcome."
   ],
   "e": "Rule 1.5(d) bans two kinds of contingent fees outright: fees in domestic relations matters contingent on securing a divorce or on the amount of alimony, support, or property settlement, and contingent fees for criminal defense. The casebook explains the criminal ban: there is no fund recovered to pay from, the fee could discourage plea bargaining, and appointed counsel is available for indigent defendants. Flat and hourly fees are allowed in both kinds of cases.",
   "unit": 6
  },
  {
   "q": "A lawyer represents a homeless client pro bono in a benefits case. Without having promised anything beforehand, she gives the client $40 for groceries. She does not expect repayment and does not advertise that she does this. Under Rule 1.8(e):",
   "o": [
    "This is permitted only for court costs",
    "This is a permitted modest gift for basic living expenses to an indigent pro bono client",
    "This is prohibited financial assistance in connection with litigation",
    "This is permitted only if the client repays it"
   ],
   "a": 1,
   "why": [
    "Court costs fall under the first two exceptions. The third exception covers basic living expenses.",
    "Correct. Rule 1.8(e)(3), added in 2020, allows modest gifts for food, rent, transportation, medicine, and other basic living expenses to indigent clients represented pro bono.",
    "The general ban in 1.8(e) has three exceptions, and this gift meets every condition of the third.",
    "Rule 1.8(e)(3) forbids the lawyer from seeking or accepting reimbursement. Repayment would take the gift outside the exception."
   ],
   "e": "Rule 1.8(e) bars financial assistance to a client in connection with pending or contemplated litigation, because it would encourage suits and give lawyers too great a stake. The exceptions allow advancing costs, paying costs for indigent clients, and modest gifts for basic living expenses to indigent pro bono clients. The gift may not be promised as an inducement, may not be repaid, and may not be advertised, and this one meets those conditions.",
   "unit": 6
  },
  {
   "q": "A client pays a lawyer a $10,000 advance fee for work not yet done. Where should the lawyer put the money?",
   "o": [
    "In the firm's operating account, since the fee will be earned eventually",
    "In the client trust account, withdrawing it only as fees are earned",
    "In the lawyer's personal savings account",
    "Anywhere, as long as the lawyer documents it"
   ],
   "a": 1,
   "why": [
    "Moving unearned fees into the operating account mixes client money with the lawyer's own. Rule 1.15(c) keeps the advance in trust until earned.",
    "Correct. Rule 1.15(c) requires advance fees and expenses to be deposited in the client trust account and withdrawn only as earned or incurred.",
    "Rule 1.15(a) requires client funds to be held separate from the lawyer's own property in a separate account.",
    "Recordkeeping is required under 1.15(a), but it does not replace the duty to keep advance fees in the trust account."
   ],
   "e": "Rule 1.15 requires a lawyer to keep client property separate from the lawyer's own. Paragraph (c) says legal fees and expenses paid in advance go into the client trust account and may be withdrawn only as fees are earned or expenses incurred. Comment [4] to Rule 1.5 and Rule 1.16(d) add that any unearned portion must be refunded.",
   "unit": 6
  },
  {
   "q": "A criminal defense lawyer starts work on a new case. A week later, at an in-person meeting, she explains her hourly rate to the client. She forgets to send a confirming letter. Her bill is reasonable. Did she violate Rule 1.5(b)?",
   "o": [
    "No, because she communicated the basis of the fee within a reasonable time after starting, and a writing is only preferred",
    "Yes, because every fee agreement must be in writing",
    "Yes, because the fee had to be explained before any work began",
    "Yes, because criminal fees must be signed by the client"
   ],
   "a": 0,
   "why": [
    "Correct. Casebook Question 3-6: Rule 1.5(b) allows communication before or within a reasonable time after commencing, preferably in writing, so the oral explanation satisfied it.",
    "Only contingent fees require a writing signed by the client (1.5(c)). For ordinary fees, a writing is preferred but not required.",
    "Rule 1.5(b) allows the communication within a reasonable time after the representation begins.",
    "Rule 1.5 has no special writing requirement for hourly criminal fees. The criminal-case rule in 1.5(d)(2) bans only contingent fees."
   ],
   "e": "Rule 1.5(b) requires the lawyer to communicate the scope of the representation and the basis or rate of the fee and expenses, preferably in writing, before or within a reasonable time after starting. Explaining the hourly rate a week into the case is within a reasonable time. The missing letter is not a violation because the writing is only preferred for an ordinary fee.",
   "unit": 6
  },
  {
   "q": "A lawyer and client orally agree that the lawyer will receive 30% of any recovery in a personal injury case. Nothing is put in writing. The case settles and the lawyer takes 30%. Under Rule 1.5(c):",
   "o": [
    "There is a violation only if the client complains about the fee",
    "There is no violation, because a writing is only preferred",
    "There is no violation, because 30% is reasonable",
    "The lawyer violated Rule 1.5(c), because a contingent fee agreement must be in a writing signed by the client"
   ],
   "a": 3,
   "why": [
    "Rule 1.5(c) does not depend on a client complaint. The missing signed writing is itself the violation.",
    "The 'preferably in writing' language is in 1.5(b) for ordinary fees. Contingent fees require a signed writing.",
    "Reasonableness under 1.5(a) is a separate requirement. Rule 1.5(c) independently requires a signed writing for contingent fees.",
    "Correct. Rule 1.5(c) requires a writing signed by the client stating the method of calculating the fee, expenses, and related terms. An oral agreement violates the rule even if the percentage is reasonable."
   ],
   "e": "Because contingent fees are harder for clients to evaluate, Rule 1.5(c) requires a writing signed by the client. The writing must state the method of determining the fee, including percentages at settlement, trial, or appeal, the expenses to be deducted and whether before or after the fee is calculated, and any expenses the client owes regardless of outcome. At the end, the lawyer must give a written closing statement.",
   "unit": 6
  },
  {
   "q": "A divorce client agrees in a signed writing to pay her lawyer 10% of the property settlement if the divorce is final within three months. It is, and the client happily pays. Is the lawyer subject to discipline?",
   "o": [
    "Yes, because the fee depended on securing a divorce, which Rule 1.5(d)(1) prohibits",
    "No, because the client was satisfied and paid willingly",
    "No, because the client agreed in writing",
    "No, because 10% is a reasonable percentage"
   ],
   "a": 0,
   "why": [
    "Correct. Casebook Question 3-9: the fee is contingent on securing a divorce, so it falls within the 1.5(d)(1) ban regardless of the writing or the client's satisfaction.",
    "Rule 1.5(d) says a lawyer shall not arrange for, charge, or collect the prohibited fee. Client satisfaction does not cure the violation.",
    "A signed writing satisfies 1.5(c) for permitted contingent fees, but 1.5(d) bans this type of fee outright.",
    "The ban in 1.5(d)(1) applies regardless of the amount. Reasonableness under 1.5(a) does not matter once the fee type is prohibited."
   ],
   "e": "Rule 1.5(d)(1) bars a fee in a domestic relations matter whose payment or amount depends on securing a divorce or on the amount of alimony, support, or property settlement. The traditional reason is that such fees discourage reconciliation and encourage bitter court battles. This fee depended on the divorce becoming final, so it is prohibited despite the writing and the client's satisfaction.",
   "unit": 6
  },
  {
   "q": "A former spouse owes a client $30,000 in past-due child support under a final judgment. The client hires a lawyer to collect it for a percentage of whatever is collected. Under Rule 1.5(d)(1) and comment [6]:",
   "o": [
    "The fee is prohibited, because any contingent fee involving support is banned",
    "The fee is permitted only if it is a flat fee",
    "The contingent fee is permitted, because the ban does not cover collecting post-judgment balances owed under support orders",
    "The fee is prohibited unless the court approves it"
   ],
   "a": 2,
   "why": [
    "The ban covers fees contingent on securing a divorce or on the amount of alimony, support, or property settlement. Comment [6] excludes collecting amounts already owed under a judgment.",
    "Comment [6] permits a contingent fee for post-judgment collection. A flat fee would be permitted too, but it is not required.",
    "Correct. Comment [6] says the domestic relations ban does not apply to collecting post-judgment balances due under support, alimony, or other financial orders, because those contracts do not raise the same policy concerns.",
    "Nothing in 1.5(d) or comment [6] requires court approval for this kind of collection fee."
   ],
   "e": "Rule 1.5(d)(1) bans contingent fees in domestic relations matters that depend on securing a divorce or on the amount of alimony, support, or property settlement. Comment [6] carves out contingent fees for collecting post-judgment balances owed under support, alimony, or other financial orders. Collecting past-due support under a final judgment does not create the incentive against reconciliation that the ban targets.",
   "unit": 6
  },
  {
   "q": "An oil and gas developer suing to establish ownership of mineral rights proposes, in a signed writing, to pay her lawyer 20% of the first year's royalties she recovers. The lawyer does not advise her in writing to consult independent counsel. Is the arrangement proper?",
   "o": [
    "No, because the lawyer failed to advise her in writing to seek independent counsel",
    "Yes, because it is a reasonable contingent fee in a civil case, which Rule 1.8(i)(2) expressly permits",
    "No, because contingent fees are banned in property disputes",
    "No, because the lawyer acquired a proprietary interest in the subject matter of the litigation"
   ],
   "a": 1,
   "why": [
    "Written advice to seek independent counsel is a Rule 1.8(a) requirement for business transactions. Rule 1.8(a) does not apply to ordinary fee arrangements.",
    "Correct. Casebook Question 3-8: Rule 1.8(i) bars a proprietary interest in the litigation but excepts a reasonable contingent fee in a civil case.",
    "Rule 1.5(d) bans contingent fees only in certain domestic relations matters and in criminal defense.",
    "A contingent fee is in effect a share of the recovery, and Rule 1.8(i)(2) carves it out expressly in civil cases."
   ],
   "e": "Rule 1.8(i) bars a lawyer from acquiring a proprietary interest in the cause of action or subject matter of litigation, with two exceptions: a lien authorized by law and a reasonable contingent fee in a civil case. A percentage of royalties recovered is a contingent fee in a civil case. Rule 1.8(a)'s independent-counsel advice applies to business transactions, not ordinary fee arrangements.",
   "unit": 6
  },
  {
   "q": "A lawyer takes a 2% equity stake in a start-up client as her fee for handling its IPO. She gives the client a fair written agreement it can understand, advises it in writing to seek independent counsel and gives it a reasonable chance to do so, and the client signs its informed consent. The client chooses not to consult another lawyer. The stock later becomes worth $10 million. Did the lawyer violate Rule 1.8(a)?",
   "o": [
    "No, because all three Rule 1.8(a) conditions were met",
    "Yes, because the stock's value made the fee unreasonable",
    "Yes, because lawyers may never accept stock as a fee",
    "Yes, because the client never actually consulted independent counsel"
   ],
   "a": 0,
   "why": [
    "Correct. Casebook Question 3-10: the terms were fair and disclosed in writing, the client was advised in writing to seek independent counsel with a reasonable opportunity, and it gave signed informed consent.",
    "Fairness is judged when the transaction is made. The later rise in value does not create a violation.",
    "Rule 1.5 comment [4] allows a lawyer to accept property, including an ownership interest, as a fee if Rule 1.8(a) is satisfied.",
    "Rule 1.8(a)(2) requires written advice and a reasonable opportunity to seek independent counsel. The client does not have to use it."
   ],
   "e": "When a lawyer accepts an interest in a client's business as a fee, Rule 1.8(a) applies. The transaction must be fair and reasonable and fully disclosed in writing; the client must be advised in writing to seek independent counsel and given a reasonable opportunity to do so; and the client must give signed informed consent to the essential terms and the lawyer's role. All three conditions were met here.",
   "unit": 6
  },
  {
   "q": "A client pays a $10,000 advance. Before doing any work, the lawyer moves $2,000 to her business account because she is confident she will earn at least that much, and the client approves. Under Rule 1.15(c):",
   "o": [
    "There is no violation, because she later earned more than $2,000",
    "There is no violation, because the client approved the transfer",
    "She violated the rule, because advance fees may be withdrawn from the trust account only as they are earned",
    "There is no violation, because Rule 1.15 covers only money owed to third persons"
   ],
   "a": 2,
   "why": [
    "The violation occurs when unearned money leaves the trust account. Later earning the fee does not cure it.",
    "Rule 1.15(c) does not contain a client-approval exception for withdrawing unearned fees.",
    "Correct. Casebook Question 3-12: the rule's text has no exception for client approval or accurate predictions.",
    "Rule 1.15 covers property of clients and third persons, and paragraph (c) specifically addresses advance fees from clients."
   ],
   "e": "Rule 1.15(c) requires legal fees and expenses paid in advance to be deposited in the client trust account and withdrawn only as fees are earned or expenses incurred. The lawyer moved money before earning it. Neither the client's approval nor her accurate prediction is an exception in the rule's text.",
   "unit": 6
  },
  {
   "q": "A lawyer holding a client's $10,000 advance bills $2,000 for 10 hours of work. The client disputes the bill and demands a full refund. Under Rule 1.15(e), the lawyer should:",
   "o": [
    "Keep the disputed $2,000 in trust until the dispute is resolved and promptly return the undisputed $8,000",
    "Refund the entire $10,000 immediately",
    "Move the $2,000 to her operating account and refund $8,000",
    "Hold the entire $10,000 until the dispute is resolved"
   ],
   "a": 0,
   "why": [
    "Correct. Casebook Question 3-13: disputed property stays separate, and any portion not in dispute must be promptly distributed.",
    "Rule 1.15(e) lets the lawyer keep the disputed portion separate while the dispute is resolved. A full refund is not required.",
    "The disputed portion must stay separate in trust until the dispute is resolved. Taking it as earned would resolve the dispute in her own favor.",
    "Only the disputed portion may be held. Rule 1.15(e) requires prompt distribution of the undisputed $8,000."
   ],
   "e": "Rule 1.15(e) says that when two or more persons, one of whom may be the lawyer, claim an interest in property the lawyer holds, the disputed portion stays separate until the dispute is resolved. The lawyer must promptly distribute any portion not in dispute. Here $2,000 is disputed and $8,000 is not.",
   "unit": 6
  },
  {
   "q": "After a long civil rights case, a district judge awards a lodestar fee and then adds a 75% enhancement, saying counsel performed superbly and obtained excellent results. The judge does not explain how the 75% figure was chosen or tie it to market rates. Under Perdue v. Kenny A.:",
   "o": [
    "The enhancement is proper, because the judge has broad discretion based on experience",
    "Enhancements are never permitted under section 1988",
    "The enhancement is proper, because superior results justify an enhancement",
    "The enhancement is improper, because enhancements require rare and exceptional circumstances proven with specific evidence"
   ],
   "a": 3,
   "why": [
    "Perdue held that the judge's praise based on experience with other cases could not replace reviewable evidence.",
    "Perdue recognized enhancements in rare and exceptional circumstances, such as when the hourly rate fails to capture true market value, extraordinary expense outlays, or exceptional delay in payment.",
    "A superior result alone is not enough; it may reflect weak opponents, favorable rulings, or luck. The applicant must tie it to performance the lodestar does not compensate.",
    "Correct. Perdue reversed a 75% enhancement on similar facts. The lodestar is presumptively sufficient, and an enhancement needs specific, objective justification."
   ],
   "e": "Courts calculate statutory fees using the lodestar: reasonable hours times reasonable rates. Perdue held the lodestar is presumptively sufficient, enhancements are allowed only in rare and exceptional circumstances, factors already reflected in the lodestar (such as complexity and skill) cannot support an enhancement, and the applicant must prove the need with specific evidence. The unexplained 75% figure failed those requirements.",
   "unit": 6
  },
  {
   "q": "Plaintiffs sue a city under a civil rights statute seeking an injunction. Before any judgment or consent decree, the city voluntarily changes the challenged policy, and the plaintiffs seek fees under 42 U.S.C. section 1988. Under Buckhannon:",
   "o": [
    "They are not prevailing parties, because a voluntary change prompted by the suit is not a material alteration of the parties' legal relationship",
    "Their lawyer may recover fees directly, because the fee belongs to the lawyer",
    "They are prevailing parties, because their lawsuit caused the change",
    "They are entitled to fees as of right, because section 1988 fees are mandatory"
   ],
   "a": 0,
   "why": [
    "Correct. Buckhannon rejected the catalyst theory. Prevailing-party status requires a judgment on the merits, a consent decree, or a similar material change in the legal relationship.",
    "The statutory right to fees belongs to the client, not the lawyer, which is why Evans v. Jeff D. let the client waive it.",
    "That is the catalyst theory, which Buckhannon rejected.",
    "Section 1988 makes fee awards discretionary, and only prevailing parties are eligible."
   ],
   "e": "Section 1988 lets a court, in its discretion, award a reasonable attorney's fee to a prevailing party, and the entitlement belongs to the client. Buckhannon defines a prevailing party as one who obtains a material alteration of the parties' legal relationship, such as a judgment on the merits or a consent decree. A defendant's voluntary change after suit does not qualify, which limits fee recovery in injunction cases.",
   "unit": 6
  },
  {
   "q": "One week before trial in a civil rights class action, the State offers virtually all the injunctive relief the class seeks, on condition that the class waive attorney's fees. Class counsel accepts because the deal serves the clients, then asks the court to strike the fee waiver. Under Evans v. Jeff D.:",
   "o": [
    "The court may approve the settlement with the waiver, because section 1988 does not prohibit a settlement conditioned on waiving fees",
    "The settlement is automatically valid because it is a class action",
    "The waiver must be struck, because lawyers have a nonwaivable right to statutory fees",
    "The class may keep the relief and discard the waiver"
   ],
   "a": 0,
   "why": [
    "Correct. Casebook Question 3-15: the fee entitlement belongs to the client, who may trade it for better substantive relief.",
    "Class status alone does not make it valid. Under FRCP 23(e) the court must approve the settlement after evaluating the whole bargain.",
    "Evans held Congress gave lawyers no independent, nonwaivable right to fees under section 1988.",
    "Evans rejected cherry-picking. The class could not keep the favorable relief while discarding the waiver that induced the offer."
   ],
   "e": "Evans v. Jeff D. held that 42 U.S.C. section 1988 does not prohibit a settlement conditioned on waiving attorney's fees. Because the right to fees belongs to the client, fees are a remedy the client may trade for faster, more certain relief. In a class action, FRCP 23(e) requires the court to approve the settlement, and the class cannot keep the relief while striking the waiver.",
   "unit": 6
  },
  {
   "q": "Two lawyers in different firms want to split the fee in a case. Which arrangement satisfies Rule 1.5(e)?",
   "o": [
    "The lawyers split the fee 50/50 in proportion to their work, without telling the client",
    "The client agrees in writing to the split, and the total fee is double what one lawyer would charge",
    "Each lawyer assumes joint responsibility, the client agrees to each lawyer's share and the agreement is confirmed in writing, and the total fee is reasonable",
    "The referring lawyer does no work and takes no responsibility but receives one-third, with the client's written consent"
   ],
   "a": 2,
   "why": [
    "Rule 1.5(e) requires the client to agree to the arrangement, including each lawyer's share, confirmed in writing.",
    "The total fee must be reasonable under Rule 1.5(a). The client may not pay more in total because two lawyers share it.",
    "Correct. Rule 1.5(e) requires proportion to services or joint responsibility, the client's agreement to the shares confirmed in writing, and a reasonable total fee.",
    "Without work in proportion to the share or joint responsibility, the first condition of 1.5(e) is not met."
   ],
   "e": "Rule 1.5(e) allows lawyers in different firms to divide a fee only if all three conditions are met: the division is in proportion to the services each performs or each assumes joint responsibility; the client agrees to the arrangement, including each lawyer's share, and the agreement is confirmed in writing; and the total fee is reasonable. The conditions keep the split tied to work or responsibility and protect the client.",
   "unit": 6
  },
  {
   "q": "A contingent fee agreement gives the lawyer 40% of any settlement offer the lawyer advises the client to accept, even if the client rejects the offer. Under Moore v. Board of Professional Responsibility (Tenn. 2019):",
   "o": [
    "The agreement violates Rule 1.5 and Rule 1.8(i)",
    "The agreement is valid because 40% is within the range of contingent fees",
    "The agreement violates only Rule 1.2(a)",
    "The agreement is valid because it is in writing and signed"
   ],
   "a": 0,
   "why": [
    "Correct. The fee depended on the lawyer's recommendation instead of the outcome, violating Rule 1.5, and it gave the lawyer a proprietary interest in the settlement offer, violating Rule 1.8(i).",
    "The problem was not the percentage. The fee was tied to the lawyer's own advice instead of the result.",
    "The court found violations of Rule 1.5 and Rule 1.8(i): the fee turned on the lawyer's recommendation, and it gave the lawyer a proprietary interest in the settlement offer.",
    "A signed writing satisfies 1.5(c)'s form requirements, but the substance of this fee violated Rules 1.5 and 1.8(i)."
   ],
   "e": "A contingent fee depends on the outcome of the matter. In Moore, the fee depended on the lawyer's recommendation to accept an offer, whether or not the client accepted it. The Tennessee Supreme Court held this violated Rule 1.5 and gave the lawyer a proprietary interest in the settlement offer, violating Rule 1.8(i).",
   "unit": 6
  },
  {
   "q": "A client tells her lawyer she plans to poison her business partner next week. Under Model Rule 1.6, the lawyer:",
   "o": [
    "Must reveal the information",
    "May reveal only after the harm occurs",
    "Must keep silent, because the information came from the client",
    "May reveal the information to the extent reasonably necessary to prevent reasonably certain death or substantial bodily harm"
   ],
   "a": 3,
   "why": [
    "The Rule 1.6(b) exceptions permit disclosure; they do not require it. Some states make certain exceptions mandatory, but the Model Rule does not.",
    "Rule 1.6(b)(1) is preventive. Harm is reasonably certain if it will happen imminently or there is a present and substantial threat it will happen later.",
    "Rule 1.6(b)(1) is an exception to the duty of confidentiality, and it applies whatever the source of the information.",
    "Correct. Rule 1.6(b)(1) permits disclosure to prevent reasonably certain death or substantial bodily harm, to the extent the lawyer reasonably believes necessary."
   ],
   "e": "Rule 1.6(b)(1) permits a lawyer to reveal information to the extent reasonably necessary to prevent reasonably certain death or substantial bodily harm. The exception is permissive, so the lawyer may disclose but is not required to. A planned poisoning next week is a present and substantial threat of death.",
   "unit": 7
  },
  {
   "q": "At the CEO's direction, a company's in-house lawyer interviews a mid-level employee about suspected bribes so the lawyer can advise the company. The employee knows the purpose and the interview is kept confidential. The government later seeks the lawyer's interview notes. Under Upjohn Co. v. United States, the employee's communications are:",
   "o": [
    "Not privileged, because the employee is not in the control group",
    "Privileged, because Upjohn rejected the control group test and protects employee communications made to counsel at superiors' direction to secure legal advice for the company",
    "Privileged only if the employee is also the lawyer's client",
    "Not privileged, because in-house lawyers are not protected"
   ],
   "a": 1,
   "why": [
    "Upjohn rejected the control group test because the facts are often held by middle- and lower-level employees.",
    "Correct. These facts match the Upjohn factors: communications to counsel acting as counsel, at superiors' direction, on matters within the employee's duties, for legal advice, kept confidential.",
    "The company is the client and holds the privilege. The employee's communications are protected as the company's.",
    "The email simulation treats in-house counsel's communications the same as outside counsel's, and Upjohn itself involved the General Counsel. Akzo Nobel's contrary view is an EU-level rule."
   ],
   "e": "Upjohn rejected the control group test, which protected only senior managers. The Court protected communications from employees to counsel acting as counsel, made at superiors' direction to secure legal advice, on matters within their duties, where employees knew the purpose and the communications were kept confidential. The company holds the privilege and may waive it, which is why counsel should give an Upjohn warning.",
   "unit": 7
  },
  {
   "q": "A company gives privileged internal investigation documents to the SEC under a confidentiality agreement. A private plaintiff later demands the same documents. Under Westinghouse v. Republic of the Philippines:",
   "o": [
    "The documents remain privileged against private parties",
    "The documents are protected by FRE 502(b)",
    "The documents remain privileged because of the confidentiality agreement",
    "The privilege is waived as to the private plaintiff, because there is no selective waiver"
   ],
   "a": 3,
   "why": [
    "That would be selective waiver, which Westinghouse and a clear majority of circuits reject. Diversified Industries is the outlier.",
    "FRE 502(b) protects inadvertent disclosures. Handing documents to the SEC was intentional.",
    "Westinghouse held a confidentiality agreement with the government does not preserve the privilege against others.",
    "Correct. Westinghouse held that disclosing privileged information to the government waives the privilege as to private parties too."
   ],
   "e": "Westinghouse held there is no selective waiver: a party that discloses privileged information to the government loses the privilege as to everyone. The court reasoned that corporations already have strong incentives to cooperate, and sharing with one side while shielding from others is unfair. A confidentiality agreement with the government does not change the result.",
   "unit": 7
  },
  {
   "q": "Opposing counsel accidentally emails you a privileged strategy memo. What does Model Rule 4.4(b) require you to do?",
   "o": [
    "Return the memo unread",
    "Report opposing counsel to the bar",
    "Promptly notify the sender",
    "Use the memo freely, since the privilege was waived"
   ],
   "a": 2,
   "why": [
    "Comment [2] says whether the lawyer must do more, such as return the document, is a matter of law beyond the Rules. Some states, like New Jersey, require return.",
    "Rule 4.4(b) does not require reporting the sender. Its only requirement is prompt notice.",
    "Correct. Rule 4.4(b) requires a lawyer who knows or reasonably should know a document was inadvertently sent to promptly notify the sender.",
    "Whether the privilege was waived is a matter of other law, such as FRE 502(b). Rule 4.4(b) itself requires notice."
   ],
   "e": "Rule 4.4(b) says a lawyer who receives a document or electronically stored information relating to the representation, and knows or reasonably should know it was inadvertently sent, shall promptly notify the sender. Comment [2] leaves return of the document and the waiver question to other law. States vary on whether the recipient must stop reading and return it.",
   "unit": 7
  },
  {
   "q": "A client hires a lawyer to defend him against charges for a fraud he committed last year, and tells the lawyer everything about it. The prosecution argues the crime-fraud exception defeats the privilege. The exception:",
   "o": [
    "Applies automatically in criminal cases",
    "Applies, because the communications concern fraud",
    "Applies, because the fraud was large",
    "Does not apply, because seeking representation for a past crime is protected; the exception reaches only ongoing or future crimes or frauds"
   ],
   "a": 3,
   "why": [
    "There is no automatic rule for criminal cases. The party seeking the communication must make a prima facie showing of ongoing or future crime or fraud and that the lawyer's help furthered it.",
    "The exception depends on whether the client sought or used the lawyer's help to commit a crime or fraud, not on the subject of the communications.",
    "The size of the past fraud is irrelevant. The question is whether the client used the lawyer to further a crime or fraud.",
    "Correct. Restatement section 82 covers consulting a lawyer to get help with a crime or fraud, or using the lawyer's services to commit one. Defense of a past crime is at the core of the privilege."
   ],
   "e": "Restatement section 82 removes the privilege when a client consults a lawyer to get help with a crime or fraud that is later accomplished, or uses the lawyer's advice or services to commit one. The line is between past and future: getting a defense for a past crime is protected, while help with an ongoing or future crime is not. A client seeking defense for last year's fraud keeps the privilege.",
   "unit": 7
  },
  {
   "q": "A lawyer stores her notes of witness interviews, prepared for a pending lawsuit, in a shared folder that a document-management vendor can access. Nothing suggests the adversary will see them. Is work-product protection waived?",
   "o": [
    "No, because disclosure waives work product only when it is likely to reach an adversary",
    "No, because witness-interview notes are never work product",
    "Yes, because any voluntary disclosure to a third person waives it",
    "Yes, under FRE 502(a)"
   ],
   "a": 0,
   "why": [
    "Correct. Restatement section 91(4) waives work product only for disclosure in circumstances where an adversary is likely to obtain it.",
    "Witness-interview notes prepared for litigation are a listed example of work product under section 87.",
    "That is the waiver rule for the attorney-client privilege (section 79). Work product is harder to waive because its purpose is protection from adversaries.",
    "FRE 502(a) addresses the scope of a waiver that has already occurred by disclosure in a federal proceeding. It does not make storage with a vendor a waiver."
   ],
   "e": "Restatement section 91 lists the ways work-product immunity is waived, including (4) disclosing the material to third persons when an adversary is likely to obtain it. The privilege is different: section 79 waives it by any voluntary disclosure outside the privileged circle. Because nothing suggests the adversary will see the notes, the work product is not waived.",
   "unit": 7
  },
  {
   "q": "At a dinner party, a lawyer tells a story about seeing his client on a surveillance tape leaving an adult theater. The lawyer learned this from the tape, which was produced in the case, not from the client. Did the lawyer violate Rule 1.6?",
   "o": [
    "No, because the information did not come from the client",
    "No, because the tape is not privileged",
    "No, because the lawyer was not at work",
    "Yes, because Rule 1.6 covers all information relating to the representation, from any source"
   ],
   "a": 3,
   "why": [
    "Rule 1.6 is broader than the privilege. It covers information relating to the representation whatever its source.",
    "Confidentiality and privilege operate independently. Information can be protected by Rule 1.6 even though it is not privileged.",
    "The duty of confidentiality applies at all times: at home, on vacation, and at social events.",
    "Correct. Question 4-1: the duty covers information from any source, not only client communications, and it applies at all times, including social events."
   ],
   "e": "Rule 1.6(a) bars a lawyer from revealing information relating to the representation unless the client consents, disclosure is impliedly authorized, or an exception applies. The duty covers information from any source, secret or not, and applies at all times. The dinner-party story revealed information learned in the representation, so it violated Rule 1.6.",
   "unit": 7
  },
  {
   "q": "Before litigation, a client gives her lawyer a preexisting surveillance tape relevant to the case. The opposing party serves a lawful discovery request for it. Must the lawyer produce the tape?",
   "o": [
    "No, because it is work product",
    "Yes, because a preexisting tape is not a privileged communication or work product, and Rule 1.6 creates no discovery privilege",
    "No, because it is protected by Rule 1.6",
    "No, because the client gave it to the lawyer in confidence"
   ],
   "a": 1,
   "why": [
    "Work product covers materials prepared in anticipation of litigation. A tape made before and apart from the litigation was not prepared for it.",
    "Correct. Question 4-2: acquiring existing evidence does not make it privileged, and confidential but unprivileged information must be produced on a lawful discovery demand.",
    "Rule 1.6 is an ethical duty, not a discovery privilege. Rule 1.6(b)(6) permits disclosure to comply with other law or a court order.",
    "The privilege protects communications made for legal advice, not preexisting evidence a client hands over."
   ],
   "e": "The three protections operate independently. Rule 1.6 bars the lawyer from volunteering client information but creates no discovery privilege. The privilege protects communications, not preexisting evidence, and work product covers only materials prepared for litigation. The tape fits neither, so it must be produced on a lawful demand.",
   "unit": 7
  },
  {
   "q": "A client asked his lawyer for legal advice about a proposed transaction, and in the same email asked whether it was 'a good and workable deal.' The opposing party argues the email is not privileged because it sought business advice. Under the predominant-purpose test:",
   "o": [
    "Only the legal portion of the email is privileged",
    "The email is not privileged, because it asked for business advice",
    "The email is privileged, because its predominant purpose was legal advice, and business considerations that are part of good legal advice are included",
    "The email is privileged only if the lawyer had policymaking authority"
   ],
   "a": 2,
   "why": [
    "Purpose is judged by the advice sought as a whole, not passage by passage, so the business question cannot be cut out.",
    "Purpose is judged by the advice sought as a whole. When the predominant purpose is legal, practical considerations are part of the legal advice.",
    "Correct. Question 4-4: a client whose dominant intent was legal advice keeps the privilege even though he also asked a business question.",
    "A lawyer's lack of formal policymaking authority is not decisive. The question is the predominant purpose of the communication."
   ],
   "e": "Restatement section 72 and County of Erie ask whether the predominant purpose of a communication was to get or give legal advice. A complete legal answer includes feasibility, risks, alternatives, and costs, so those considerations are part of the legal advice when the predominant purpose is legal. Purpose is judged by the advice sought as a whole.",
   "unit": 7
  },
  {
   "q": "A lawyer representing a client in a personal injury suit, in which the client claims to wear a full body cast, sees the client skiing without a cast. The defense subpoenas the lawyer to testify about what he saw. What should the lawyer do?",
   "o": [
    "Comply with the subpoena, because his own observation is not a privileged communication, though he may not volunteer it",
    "Volunteer the information to the defense before the subpoena issued",
    "Withdraw, which ends any obligation to testify",
    "Refuse, because the observation is privileged"
   ],
   "a": 0,
   "why": [
    "Correct. Question 4-5: what the lawyer personally sees is not a communication, so it is not privileged. It is Rule 1.6 information, but Rule 1.6(b)(6) permits disclosure to comply with a court order or other law.",
    "The observation is still Rule 1.6 information, so he may not volunteer it. He may disclose only as the subpoena requires.",
    "Withdrawal does not matter. The subpoena is directed to what he observed, and withdrawing does not make the observation privileged.",
    "The privilege protects communications between privileged persons. A lawyer's own observation of the client is not a communication."
   ],
   "e": "The privilege protects communications, not facts the lawyer observes. A lawyer's own observation is not privileged, but it is still information relating to the representation under Rule 1.6, so the lawyer may not volunteer it. When lawfully subpoenaed, he must comply, and Rule 1.6(b)(6) permits disclosure to comply with other law or a court order.",
   "unit": 7
  },
  {
   "q": "Company personnel give their lawyer information knowing it will appear in public offering filings. The offering is later cancelled, and the company claims the communications are privileged. Are they?",
   "o": [
    "Yes, because they were communicating with the company's lawyer",
    "No, because information given for public disclosure was never made in confidence, and cancelling the offering does not restore the privilege",
    "Yes, because the information was never actually published",
    "Yes, because cancelling the offering restored confidentiality"
   ],
   "a": 1,
   "why": [
    "A communication with a lawyer must also be in confidence. Information given for public filings fails that element.",
    "Correct. Question 4-6: confidentiality is judged at the time of the communication.",
    "The test asks whether the speaker reasonably believed, when speaking, that only privileged persons would learn the contents. They expected publication.",
    "Confidentiality is measured at the time of the communication. Later events do not create it retroactively."
   ],
   "e": "Restatement section 71 says a communication is in confidence only if the speaker reasonably believes, at the time and in the circumstances, that no one outside the privileged circle will learn its contents. Information given so it can be made public fails that test. Because confidentiality is judged when the communication occurs, cancelling the offering does not restore the privilege.",
   "unit": 7
  },
  {
   "q": "A client under investigation tells his lawyer two things: 'I already destroyed some documents,' and 'Which of the remaining documents should I destroy?' No further documents are destroyed. Which statement is privileged?",
   "o": [
    "Only the second statement, because no more documents were destroyed",
    "Neither statement",
    "Both statements",
    "Only the first statement, about documents already destroyed"
   ],
   "a": 3,
   "why": [
    "A completed crime is not required if the client consulted the lawyer to try to commit one. The second statement is unprotected even though nothing more was destroyed.",
    "The first concerns a completed past act. Seeking advice about past conduct is at the core of the privilege.",
    "The second statement asks for help committing a future crime or fraud, so the crime-fraud exception removes the privilege.",
    "Correct. Question 4-9: a statement about a past act is protected, while asking which documents to destroy seeks help with a crime or fraud and falls within the crime-fraud exception."
   ],
   "e": "Restatement section 82 removes the privilege when the client consults the lawyer to get help with a crime or fraud, or uses the lawyer's services to commit one. A client's statement about a past act is protected. A request for help with a future act is not, and the exception applies even if the crime was never completed.",
   "unit": 7
  },
  {
   "q": "A lawyer took notes of a phone call with a client about a business matter. At the time, no investigation or lawsuit was pending or anticipated. Later, litigation arises and the opponent seeks the notes. The notes include the lawyer's mental impressions. Are they work product?",
   "o": [
    "No, because they were not prepared in anticipation of litigation",
    "Yes, because a lawyer wrote them",
    "Yes, because litigation later arose",
    "Yes, because they contain the lawyer's mental impressions"
   ],
   "a": 0,
   "why": [
    "Correct. Question 4-10: work product requires anticipation of litigation, and the mental impressions do not matter when that element fails.",
    "Marten held that attorney authorship alone does not make a document work product.",
    "The test looks at why the document was prepared when it was created. Marten requires that the threat of litigation was real and imminent at that time.",
    "Mental impressions get stronger protection only if the material is work product in the first place, which requires preparation for litigation."
   ],
   "e": "Work product covers material prepared for litigation in progress or reasonably anticipated (Restatement section 87; FRCP 26(b)(3)). Marten requires that the document be prepared because of litigation that was real and imminent. Notes taken when no litigation was anticipated are not work product, even if they contain mental impressions.",
   "unit": 7
  },
  {
   "q": "A homeowner consults a lawyer about suing a building owner, sharing details of her case. The lawyer declines. Later, the building owner hires the same lawyer, who uses the homeowner's information in the owner's defense. The homeowner wins anyway. Under Rule 1.18(b):",
   "o": [
    "The lawyer violated the rule, because he may not use information learned in a consultation with a prospective client",
    "No violation, because no lawyer-client relationship formed",
    "No violation, because the homeowner won",
    "No violation, because the information was generally known"
   ],
   "a": 0,
   "why": [
    "Correct. Question 4-11: Rule 1.18(b) bars using or revealing a prospective client's information except as Rule 1.9 would permit for a former client, and the homeowner's win does not matter.",
    "Rule 1.18 protects prospective clients precisely because no relationship formed.",
    "Rule 1.18(b) bars the use itself. It does not require that the use cause harm.",
    "Nothing suggests the information was generally known. Even under Rule 1.9(c), that exception applies only to use of information that has become generally known."
   ],
   "e": "Rule 1.18(a) defines a prospective client as a person who consults a lawyer about possibly forming a relationship. Under 1.18(b), even when no relationship follows, the lawyer may not use or reveal information from the consultation except as Rule 1.9 would allow for a former client. Using the homeowner's information against her violated the rule, regardless of the outcome.",
   "unit": 7
  },
  {
   "q": "While defending a client on a murder charge, a lawyer learns from the client about other, unrelated murders and the location of a victim's body. The lawyer tells no one. Under People v. Belge and Rule 1.6:",
   "o": [
    "The information is not protected, because it concerns crimes unrelated to the charge",
    "The information is protected, because it relates to the representation even though the other murders are unrelated to the pending charge",
    "The information is not protected, because the lawyer personally saw the body",
    "The lawyer must disclose the location under Rule 1.6(b)(1)"
   ],
   "a": 1,
   "why": [
    "Belge and Question 4-12 reject this. The information was learned in the representation, so it is covered.",
    "Correct. Question 4-12 and Belge: information learned while representing the client is information relating to the representation, and no exception requires disclosure.",
    "Belge found and inspected the body after learning of it from the client, and the court still dismissed his indictment on privilege grounds.",
    "The victim is already dead, so disclosure would not prevent death or bodily harm. And 1.6(b) exceptions permit disclosure; none requires it."
   ],
   "e": "Rule 1.6(a) covers all information relating to the representation. In People v. Belge, the defense lawyer learned of other murders from his client and found a victim's body, and the court dismissed his indictment for failing to report it, citing the privilege and the client's Fifth Amendment rights. Information learned in the representation is covered even if unrelated to the charge, and no exception requires disclosure.",
   "unit": 7
  },
  {
   "q": "A lawyer learns from a client that an innocent person is scheduled to be executed in two days for a crime the client committed. Under Model Rule 1.6(b)(1), the lawyer:",
   "o": [
    "May not disclose, because the harm is to a third person",
    "May not disclose, because (b)(1) applies only to client crimes",
    "May, but need not, disclose to prevent reasonably certain death",
    "Must disclose"
   ],
   "a": 2,
   "why": [
    "Rule 1.6(b)(1) is not limited to particular victims. It reaches reasonably certain death or substantial bodily harm to anyone.",
    "The pre-2002 version was limited to client criminal acts. The current version is not tied to a client crime.",
    "Correct. Question 4-13: execution in two days is reasonably certain death, so (b)(1) permits disclosure but does not require it.",
    "The 1.6(b) exceptions are permissive under the Model Rules."
   ],
   "e": "Rule 1.6(b)(1) permits disclosure to prevent reasonably certain death or substantial bodily harm, and since 2002 it is not tied to a client crime. An execution scheduled in two days is reasonably certain death. The exception is permissive, so the lawyer may disclose but need not.",
   "unit": 7
  },
  {
   "q": "Andrew Wilson confessed to his public defenders that he committed the murder for which Alton Logan was serving a life sentence. Under the current Model Rule 1.6(b)(1), may the lawyers disclose the confession to free Logan?",
   "o": [
    "Yes, because (b)(3) allows rectifying the results of a crime",
    "Yes, because the confession is not privileged",
    "No, because wrongful imprisonment is not death or substantial bodily harm",
    "Yes, because (b)(1) covers any serious injustice"
   ],
   "a": 2,
   "why": [
    "Rule 1.6(b)(3) covers financial or property injury from a client crime or fraud in which the client used the lawyer's services. It does not reach this situation.",
    "Wilson's confession to his own lawyers was confidential and covered by Rule 1.6. The question is whether an exception applies, and none does.",
    "Correct. Today's (b)(1) does not reach wrongful incarceration. Massachusetts goes further and permits disclosure to prevent wrongful execution or incarceration.",
    "Rule 1.6(b)(1) is limited to reasonably certain death or substantial bodily harm."
   ],
   "e": "Rule 1.6(b)(1) permits disclosure only to prevent reasonably certain death or substantial bodily harm. Logan was sentenced to life, not death, so the exception did not apply; the lawyers kept an affidavit ready in case he were sentenced to death. Wilson allowed disclosure after his own death, and Logan's conviction was vacated after 26 years.",
   "unit": 7
  },
  {
   "q": "A client tells his lawyer that after the shooting he threw the gun into a swamp. May the lawyer reveal this under Rule 1.6(b)?",
   "o": [
    "Yes, under (b)(2), because the client committed a crime",
    "Yes, under (b)(6), because disclosure is always allowed in criminal cases",
    "No, because destroying evidence is not a threat of death or bodily harm and is not a financial crime using the lawyer's services",
    "Yes, under (b)(1), because the case involves a shooting"
   ],
   "a": 2,
   "why": [
    "Rule 1.6(b)(2) requires a crime or fraud causing substantial financial or property injury in which the client used the lawyer's services.",
    "Rule 1.6(b)(6) permits disclosure to comply with other law or a court order. Nothing here requires disclosure.",
    "Correct. Question 4-14: none of the 1.6(b) exceptions fits a client's past destruction of evidence.",
    "Rule 1.6(b)(1) requires that disclosure prevent reasonably certain death or substantial bodily harm. Revealing a past disposal of a gun does not prevent any harm."
   ],
   "e": "The 1.6(b) exceptions are specific. (b)(1) requires a need to prevent reasonably certain death or substantial bodily harm, and (b)(2) and (b)(3) require a crime or fraud causing financial or property injury in which the client used the lawyer's services. A client's past disposal of a gun fits none of them, so the lawyer may not reveal it.",
   "unit": 7
  },
  {
   "q": "A client credibly tells her lawyer she intends to kill herself. May the lawyer reveal this to prevent it?",
   "o": [
    "No, because suicide is not a crime by the client against another",
    "No, because (b)(1) protects only third persons",
    "Yes, because (b)(1) covers reasonably certain death, and it is not limited to harm to third persons",
    "Yes, and the lawyer must disclose"
   ],
   "a": 2,
   "why": [
    "The current (b)(1) is not tied to a client crime.",
    "Rule 1.6(b)(1) is not limited to harm to others.",
    "Correct. Question 4-15: a credible suicide threat is reasonably certain death, and the exception does not require that someone other than the client be at risk.",
    "The exception permits disclosure; it does not require it."
   ],
   "e": "Rule 1.6(b)(1) permits a lawyer to reveal information to the extent reasonably necessary to prevent reasonably certain death or substantial bodily harm. The exception is not limited to client crimes or to harm to third persons. A credible suicide threat is reasonably certain death, so the lawyer may disclose.",
   "unit": 7
  },
  {
   "q": "A purchaser sues a lawyer and his client for civil fraud, claiming they defrauded the purchaser together in a sale the lawyer handled. The client objects to the lawyer revealing anything. Under Rule 1.6(b)(5), the lawyer:",
   "o": [
    "May reveal only if the client is the one suing",
    "May reveal information to the extent reasonably necessary to defend against the claim, even though it hurts the client",
    "May reveal anything about the client, without limit",
    "May not reveal anything without the client's consent"
   ],
   "a": 1,
   "why": [
    "Comment [10] says the claim may come from the client or a third person, such as someone claiming the lawyer and client defrauded them together.",
    "Correct. Question 4-16: (b)(5) permits disclosure to defend against a civil claim based on conduct in which the client was involved, without the client's approval.",
    "Disclosure under (b)(5) is limited to what is reasonably necessary to establish the defense.",
    "Rule 1.6(b)(5) is an exception to the consent requirement in 1.6(a)."
   ],
   "e": "Rule 1.6(b)(5) permits disclosure to establish a claim or defense in a controversy with the client, to defend against a criminal charge or civil claim based on conduct in which the client was involved, or to respond to allegations in any proceeding concerning the representation. Comment [10] says the claim may come from a third person, and the lawyer may respond to the extent reasonably necessary. The client's objection does not bar the defense.",
   "unit": 7
  },
  {
   "q": "A former client posts a harsh online review of a law firm. The firm wants to post a rebuttal that includes details about the representation. Does Rule 1.6(b)(5) permit it?",
   "o": [
    "Yes, because the client made allegations about the representation",
    "Yes, because the client is a former client",
    "Yes, because the information is about the firm's own services",
    "No, because a review website is not a legal claim, charge, or proceeding"
   ],
   "a": 3,
   "why": [
    "Rule 1.6(b)(5) covers allegations in a proceeding. An online review does not qualify.",
    "Confidentiality survives the end of the relationship, and Rule 1.9(c) protects former clients' information.",
    "The information still relates to the client's representation, so Rule 1.6 protects it absent an exception.",
    "Correct. The third clause of (b)(5) covers responding to allegations in any proceeding concerning the representation, and an online review is not a proceeding."
   ],
   "e": "Rule 1.6(b)(5) lets a lawyer reveal information to establish a claim or defense against the client, to defend against a charge or claim based on conduct involving the client, or to respond to allegations in any proceeding about the representation. An online review is not a claim, charge, or proceeding. The firm may not reveal client information in its rebuttal.",
   "unit": 7
  },
  {
   "q": "A company's lawyer copies the company's public relations firm on emails seeking legal advice about a product recall. The company offers only a conclusory affidavit that the PR firm was 'necessary.' Under the Kovel doctrine as applied in In re New York Renu:",
   "o": [
    "The emails are privileged, because the affidavit called the PR firm necessary",
    "The emails sent to the PR firm are not privileged, because the company did not show the PR firm's services were necessary to the lawyer's legal advice",
    "The emails are privileged, because the PR firm was helpful to the company",
    "The entire email chain, including later emails not sent to the PR firm, lost the privilege"
   ],
   "a": 1,
   "why": [
    "Renu rejected the conclusory affidavit because it showed no link between the PR firm's work and legal advice.",
    "Correct. Kovel protects a nonlawyer only if the services are necessary to the lawyer's representation. Copying a PR firm on a request for legal advice destroyed the privilege for those emails.",
    "Helpfulness to the client is not enough under Kovel. The services must be necessary to the lawyer's legal advice.",
    "In Renu, a later email in the same chain that was not sent to the PR firm stayed privileged."
   ],
   "e": "Bringing a nonlawyer into a lawyer-client communication normally destroys confidentiality. Under Kovel, the nonlawyer is inside the privileged circle only if the nonlawyer's work is necessary to the lawyer's legal advice, not merely helpful. In Renu, Bausch & Lomb's PR firm gave business advice and the company showed no necessity, so emails sent to it lost the privilege.",
   "unit": 7
  },
  {
   "q": "Outside counsel for a company interviews three employees and tells them counsel represents the company, the privilege belongs to the company, the company may waive it, and counsel 'could' represent them if no conflict appears. The company later waives, and a grand jury subpoenas the interview memos. Can the employees block disclosure?",
   "o": [
    "Yes, because company counsel can never waive an employee interview",
    "Yes, because they subjectively believed counsel represented them",
    "Yes, because counsel's warning was adequate to create a joint representation",
    "No, because they had no personal privilege: 'we can represent you' is not 'we do represent you,' and the company held and waived the privilege"
   ],
   "a": 3,
   "why": [
    "The company holds the privilege for these interviews and may waive it, even over an employee's objection.",
    "A person claiming a personal privilege must show an objectively reasonable, mutual understanding. A subjective belief alone is not enough.",
    "The warning said counsel 'could' represent them, which does not create representation. The court did not endorse these watered-down warnings.",
    "Correct. In re Grand Jury Subpoena: Under Seal held the privilege belonged to the company alone. No one said counsel represented the employees, and no personal legal advice was sought or given."
   ],
   "e": "When company counsel interviews employees, the company is the client and holds the privilege. In re Grand Jury Subpoena: Under Seal held the employees had no personal privilege because counsel never said it represented them, they never asked, and no personal advice was given. A proper Upjohn warning says both 'I represent the company' and 'I do not represent you.'",
   "unit": 7
  },
  {
   "q": "A company inadvertently produces privileged documents in federal discovery. It had used a reasonable privilege-review process and, when it learned of the mistake, promptly asked for the documents back under FRCP 26(b)(5)(B). Under FRE 502(b):",
   "o": [
    "There is no waiver, because the disclosure was inadvertent, the holder took reasonable steps to prevent it, and promptly took reasonable steps to rectify it",
    "There is no waiver only if the parties signed a clawback agreement",
    "The privilege is waived, because any disclosure waives it",
    "The privilege is waived as to all documents on the same subject"
   ],
   "a": 0,
   "why": [
    "Correct. FRE 502(b) sets these three requirements for an inadvertent disclosure in a federal proceeding not to waive the privilege.",
    "A clawback agreement can help, but FRE 502(b) protects inadvertent disclosures that meet its three conditions without one.",
    "Any voluntary disclosure waives under Restatement section 79, but FRE 502(b) governs inadvertent disclosures in federal proceedings and protects this one.",
    "Subject-matter waiver under 502(a) applies only to intentional waivers. This disclosure was inadvertent."
   ],
   "e": "FRE 502(b) says a disclosure in a federal proceeding is not a waiver if it was inadvertent, the holder took reasonable steps to prevent it, and the holder promptly took reasonable steps to rectify the error, including following FRCP 26(b)(5)(B). This is the majority middle-ground approach. The company met all three requirements.",
   "unit": 7
  },
  {
   "q": "In federal litigation, the court enters an order under FRE 502(d) that disclosure in connection with the case is not a waiver. Privileged documents are produced. In a later case, a third party who was not in the first case argues the production waived the privilege. Result?",
   "o": [
    "Waiver, because the order binds only the parties to the first case",
    "No waiver, but only if the later case is in federal court",
    "Waiver, because 502(d) protects only inadvertent disclosures",
    "No waiver, because a 502(d) order controls in other federal and state proceedings and binds nonparties"
   ],
   "a": 3,
   "why": [
    "That describes a party agreement under 502(e). A 502(d) court order binds nonparties.",
    "A 502(d) order controls in every other federal or state proceeding.",
    "A 502(d) order may provide that disclosure connected with the litigation is not a waiver, whether or not the parties agreed.",
    "Correct. Question 4-8: a 502(d) order protects against waiver in later litigation, even against a third party."
   ],
   "e": "FRE 502(d) lets a federal court order that disclosure connected with the pending litigation is not a waiver. Unlike a private agreement, which binds only the parties under 502(e), a 502(d) order controls in every other federal or state proceeding and binds nonparties. The third party cannot argue waiver.",
   "unit": 7
  },
  {
   "q": "After an employee files an EEOC (Equal Employment Opportunity Commission) charge, the company's Employee Review Committee meets to review the employee's termination as part of its ordinary business. An in-house lawyer, a voting member, writes the minutes. The employee seeks them. Under Marten v. Yellow Freight System:",
   "o": [
    "The minutes are work product, because a lawyer wrote them",
    "The minutes are privileged as opinion work product",
    "The minutes are not work product, because the company did not show they were prepared primarily because of the anticipated litigation",
    "The minutes are work product, because the EEOC charge made litigation imminent"
   ],
   "a": 2,
   "why": [
    "Marten held a party may not cloak a document by having business matters handled by attorneys.",
    "Opinion work product requires that the material be work product first. The minutes failed the causation requirement.",
    "Correct. Marten held the minutes of an ordinary business meeting were a business record. The EEOC charge made litigation imminent, but there was no nexus between the minutes and that litigation.",
    "Imminence is the reasonableness part of the test. The document must also have been prepared because of the litigation, judged by its primary motivating purpose."
   ],
   "e": "Marten sets a two-part test for work product: causation (the document was prepared because of anticipated litigation, judged by its primary motivating purpose) and reasonableness (the threat was real and imminent). The EEOC charge satisfied imminence, but the minutes recorded an ordinary business meeting. Attorney authorship alone does not make a business document work product.",
   "unit": 7
  },
  {
   "q": "A lawyer for a nonprofit learns that, before he began representing it, the nonprofit engaged in activities that jeopardized its tax status. He concludes that hiding this from its merger partner would be fraud. He made no false statements. He tells the board he will withdraw unless it discloses; it refuses, and he withdraws without disclosing. Is he subject to discipline?",
   "o": [
    "Yes, because he had to disclose the fraud to the merger partner",
    "Yes, because he withdrew instead of continuing to advise the client",
    "Yes, because he threatened to withdraw",
    "No, because his services were not used in the fraud, the 1.6(b) exceptions permit rather than require disclosure, and withdrawing avoided assisting the fraud"
   ],
   "a": 3,
   "why": [
    "Rule 1.6(b) never requires disclosure, and (b)(2) and (b)(3) did not even apply because his services were not used in the fraud.",
    "Withdrawing avoided assisting the fraud, which Rule 1.2(d) forbids. Rule 1.16 permits or requires withdrawal in this situation.",
    "Counseling the client to disclose and stating he would withdraw otherwise are proper responses. Nothing in the Rules forbids them.",
    "Correct. Class 11 practice question. Rules 1.6(b)(2) and (b)(3) require that the client used the lawyer's services, and even when they apply, disclosure is optional."
   ],
   "e": "Rules 1.6(b)(2) and (b)(3) permit disclosure of a client's crime or fraud causing financial injury only when the client used the lawyer's services in it, and even then disclosure is optional. Rule 1.2(d) bars assisting the fraud, so counseling the client and withdrawing are the lawyer's tools. The lawyer's services were not used, so he could not disclose under those exceptions, and he properly withdrew.",
   "unit": 7
  },
  {
   "q": "A lawyer who formerly represented a client wants to use information from that representation to the former client's disadvantage in a new matter. The information has since become generally known. Under Rule 1.9(c):",
   "o": [
    "He may use the information, but he still may not reveal information relating to the representation except as the Rules permit",
    "He may freely reveal it, because it is generally known",
    "He may neither use nor reveal it, because confidentiality never ends",
    "He may use it only with the former client's consent"
   ],
   "a": 0,
   "why": [
    "Correct. Rule 1.9(c)(1) allows use of former-client information that has become generally known, but that exception applies only to use, not to revealing under 1.9(c)(2).",
    "The generally-known exception applies only to use. Revealing is governed by 1.9(c)(2), which has no such exception.",
    "Confidentiality survives the relationship, but 1.9(c)(1) expressly allows using information that has become generally known.",
    "Consent is one route, but the generally-known exception in 1.9(c)(1) permits use without it."
   ],
   "e": "Rule 1.9(c) carries the confidentiality rules over to former clients. Paragraph (c)(1) bars using the former client's information to its disadvantage except as the Rules permit for a client or when the information has become generally known. Paragraph (c)(2) bars revealing it except as the Rules permit, with no generally-known exception.",
   "unit": 7
  },
  {
   "q": "A lawyer representing a client at trial learns that the client testified falsely about a material fact. The client refuses to correct it. Rule 1.6 would otherwise protect the information. Under Rule 3.3:",
   "o": [
    "The lawyer's only duty is to withdraw",
    "The lawyer may not disclose, because Rule 1.6 controls",
    "The lawyer must take reasonable remedial measures, including disclosure to the tribunal if necessary, even though the information is protected by Rule 1.6",
    "The lawyer may disclose but is not required to"
   ],
   "a": 2,
   "why": [
    "Rule 3.3 requires reasonable remedial measures, including disclosure if necessary, and the duty continues to the conclusion of the proceeding.",
    "Rule 3.3(c) overrides Rule 1.6. Rule 4.1(b) is the provision that yields to Rule 1.6.",
    "Correct. Rule 3.3(a)(3) requires remedial measures when a client's material evidence is false, and 3.3(c) says the duty applies even if it requires disclosing information otherwise protected by Rule 1.6.",
    "Unlike the permissive 1.6(b) exceptions, Rule 3.3 is mandatory for a lawyer who stays in the representation."
   ],
   "e": "Rule 3.3(a)(3) bars offering evidence the lawyer knows is false and requires reasonable remedial measures, including disclosure to the tribunal if necessary, when the lawyer learns a client's material evidence was false. Rule 3.3(c) says the duty continues to the end of the proceeding and applies even if it requires revealing Rule 1.6 information. This is a mandatory duty, unlike the 1.6(b) exceptions.",
   "unit": 7
  },
  {
   "q": "A Texas lawyer learns from a client facts giving reasonable cause to believe a child's welfare has been adversely affected by abuse. Under Texas Family Code section 261.101:",
   "o": [
    "The lawyer may report but is not required to",
    "The lawyer may not report, because Rule 1.05 protects client information",
    "The lawyer must report only if the client consents",
    "The lawyer must report, because the statute applies without exception to individuals whose communications may otherwise be privileged, including attorneys"
   ],
   "a": 3,
   "why": [
    "The statute says a person having reasonable cause to believe a child has been abused shall immediately report. It is mandatory.",
    "The reporting statute is other law that overrides confidentiality, and it expressly includes attorneys.",
    "The statute contains no consent condition, and it applies to attorneys without exception.",
    "Correct. Section 261.101(c) applies the reporting duty to attorneys without exception, and knowingly failing to report is a crime under section 261.109."
   ],
   "e": "Texas Family Code section 261.101 requires a person with reasonable cause to believe a child's physical or mental health or welfare has been adversely affected by abuse or neglect to report immediately. Subsection (c) applies the duty without exception to individuals whose communications may otherwise be privileged, including attorneys, and section 261.109 makes knowingly failing to report a crime. These statutes are other law that overrides confidentiality.",
   "unit": 7
  }
 ],
 "drills": [
  {
   "title": "Mandatory or Permissive Withdrawal?",
   "prompt": "Under Model Rule 1.16:",
   "cats": [
    "Must withdraw",
    "May withdraw",
    "Neither"
   ],
   "items": [
    [
     "Client fires the lawyer",
     "Must withdraw",
     "Rule 1.16(a)(3) requires withdrawal when the lawyer is discharged, because the client may end the relationship at any time, though court permission under (c) may still be needed."
    ],
    [
     "Client refuses to pay after a clear warning",
     "May withdraw",
     "Rule 1.16(b)(5) permits withdrawal when the client substantially fails to meet an obligation such as paying the fee after a reasonable warning that the lawyer will withdraw."
    ],
    [
     "Client insists on using the lawyer to close a loan the lawyer knows is fraudulent",
     "Must withdraw",
     "Continuing would mean assisting a known fraud, which Rule 1.2(d) forbids, so Rule 1.16(a)(1) and (a)(4) make withdrawal mandatory when the client persists after the lawyer explains the limits."
    ],
    [
     "Lawyer fundamentally disagrees with the client’s lawful goal",
     "May withdraw",
     "Rule 1.16(b)(4) permits withdrawal when the client insists on action the lawyer considers repugnant or with which the lawyer fundamentally disagrees, but does not require it."
    ],
    [
     "Lawyer is mildly annoyed, and leaving would badly hurt the client mid-trial",
     "Neither",
     "No mandatory ground in 1.16(a) applies, (b)(1) fails because leaving would materially harm the client, and mild annoyance is not a fundamental disagreement or other good cause, so the lawyer must stay."
    ],
    [
     "Lawyer’s addiction materially impairs representation",
     "Must withdraw",
     "Rule 1.16(a)(2) requires withdrawal when the lawyer's physical or mental condition materially impairs the lawyer's ability to represent the client."
    ],
    [
     "Withdrawal causes no material adverse effect",
     "May withdraw",
     "Rule 1.16(b)(1) lets a lawyer withdraw for any reason when it can be done without material adverse effect on the client's interests."
    ]
   ]
  },
  {
   "title": "Privilege, Work Product, or 1.6 Only?",
   "prompt": "Strongest protection that applies:",
   "cats": [
    "Privilege",
    "Work product",
    "1.6 only"
   ],
   "items": [
    [
     "Client’s confidential email asking the lawyer for legal advice",
     "Privilege",
     "It meets all four privilege elements: a communication, between client and lawyer, made in confidence, for the purpose of getting legal advice."
    ],
    [
     "Lawyer’s memo of trial strategy drafted after suit was filed",
     "Work product",
     "The memo was prepared because of pending litigation and reflects the lawyer's mental impressions and legal theories, so it is opinion work product with the strongest work-product protection."
    ],
    [
     "What the lawyer saw at the scene with her own eyes",
     "1.6 only",
     "A lawyer's own observation is not a communication, so it is not privileged, but it is still information relating to the representation that Rule 1.6 protects."
    ],
    [
     "Client info the lawyer learned from a newspaper",
     "1.6 only",
     "Rule 1.6 covers information relating to the representation from any source, even if public, but a newspaper report is not a privileged communication or material prepared for litigation."
    ],
    [
     "Client’s statement made in a crowded elevator to the lawyer",
     "1.6 only",
     "The privilege requires a communication made in confidence, and speaking where outsiders can overhear defeats that expectation, but the information still falls under Rule 1.6."
    ],
    [
     "Business-only advice from a lawyer acting as marketing consultant",
     "1.6 only",
     "The privilege requires a predominant purpose of legal assistance, and a lawyer doing work a nonlawyer could do gives no privileged advice, though the information is still Rule 1.6 information."
    ]
   ]
  },
  {
   "title": "Solicitation: OK or Not?",
   "prompt": "Under Model Rule 7.3:",
   "cats": [
    "Permitted",
    "Prohibited"
   ],
   "items": [
    [
     "In-person pitch to a former client about a new matter",
     "Permitted",
     "Rule 7.3(b)(2) exempts people who have a prior professional relationship with the lawyer from the ban on live solicitation for pecuniary gain."
    ],
    [
     "Live call to a stranger injured yesterday, for a contingent fee",
     "Prohibited",
     "Rule 7.3(b) bars live person-to-person solicitation of a stranger when pecuniary gain is a significant motive, and Ohralik upheld discipline for this kind of contact without proof of harm."
    ],
    [
     "Targeted letter to a stranger known to face foreclosure",
     "Permitted",
     "Rule 7.3(b) bans only live person-to-person solicitation, so a written letter is allowed, though it must still be truthful under Rule 7.1 and respect the limits in Rule 7.3(c)."
    ],
    [
     "Live pitch to a company GC that routinely buys these services",
     "Permitted",
     "Rule 7.3(b)(3) exempts persons who routinely use the type of legal services offered for business purposes, so sophisticated repeat buyers may be solicited live."
    ],
    [
     "Second email after the person replied “stop contacting me”",
     "Prohibited",
     "Rule 7.3(c)(1) bars any solicitation, written or live, of a person who has made known a desire not to be solicited."
    ],
    [
     "Free ACLU offer letter for a civil-rights challenge",
     "Permitted",
     "In re Primus held a State may not discipline a lawyer for a letter offering free ACLU representation to pursue political and associational goals, and no pecuniary gain motive is present."
    ]
   ]
  }
 ],
 "hypos": [
  {
   "title": "The Leaked Memo",
   "facts": "Megacorp’s outside counsel interviews a warehouse employee about safety violations, at the GC’s request, and writes a memo with her impressions. Megacorp later shares the memo with OSHA under a confidentiality deal. A worker sues and requests the memo.",
   "ask": "Privilege and work product?",
   "answer": [
    "Privilege: Upjohn covers the employee’s communications (at superiors’ direction, within duties, for legal advice, kept confidential). The organization holds it.",
    "Waiver: disclosure to OSHA waives privilege as to everyone; no selective waiver (Westinghouse), even with a confidentiality agreement.",
    "Work product: prepared in anticipation of litigation? Marten: real and imminent threat. Disclosure waives only if likely to reach an adversary (§ 91), which a government regulator arguably is.",
    "Opinion portions: the lawyer’s mental impressions stay strongly protected (FRCP 26(b)(3)(B); Upjohn)."
   ]
  },
  {
   "title": "Moving Money",
   "facts": "A client asks her lawyer to structure deposits so they won’t trigger bank reporting. Separately, she mentions she defrauded investors last year using documents the lawyer drafted. The lawyer wants out.",
   "ask": "What may or must the lawyer do?",
   "answer": [
    "1.2(d): may explain consequences of the reporting law; may not advise on avoiding detection.",
    "Withdrawal: if she persists in using the lawyer for crime/fraud, 1.16(a)(4) mandates it; otherwise (b)(2)/(b)(3) permit it. Still need (c) permission and (d) protection.",
    "Disclosure: 1.6(b)(3) permits (doesn’t require) disclosure to mitigate or rectify financial injury from a fraud that used the lawyer’s services.",
    "Privilege: crime-fraud (§ 82) removes protection for communications used to commit the fraud; asking for help with the structuring now is future misconduct."
   ]
  }
 ]
};
