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
   "blocks": [
    {
     "title": "Getting Licensed",
     "items": [
      [
       "Standard route",
       "accredited law school + bar exam (UBE) + MPRE"
      ],
      [
       "Admission on motion",
       "no bar exam, usually years of practice required"
      ],
      [
       "Federal courts",
       "apply to each court; sponsor + good standing"
      ],
      [
       "Pro hac vice",
       "“for this occasion only”: one trial where not licensed"
      ],
      [
       "Character & fitness",
       "red flags: dishonesty on the application, recent crimes, fraud or financial misdeeds"
      ]
     ],
     "tip": "The cover-up is its own Rule 8.1 violation, often worse than the conduct disclosed."
    },
    {
     "title": "Rule 8.1",
     "multi": true,
     "text": "An applicant, or a lawyer in an admission or disciplinary matter, shall not:",
     "items": [
      [
       "(a)",
       "knowingly make a false statement of material fact"
      ],
      [
       "(b)",
       "fail to disclose a fact needed to correct a known misapprehension, or knowingly fail to respond to a lawful demand for information"
      ]
     ],
     "tip": "Doesn’t require disclosing Rule 1.6 information. Texas 8.01: adds reinstatement petitioners; cites 1.05; “fail to correct a misapprehension.”"
    },
    {
     "title": "Fraud Elements",
     "multi": true,
     "items": [
      [
       "1",
       "material misrepresentation"
      ],
      [
       "2",
       "known false, or asserted without knowing its truth"
      ],
      [
       "3",
       "intended to be acted on"
      ],
      [
       "4",
       "relied on"
      ],
      [
       "5",
       "caused injury"
      ]
     ],
     "tip": "Resurfaces in C&F, 8.1, 1.2(d), 1.16, and 8.4(c) (applies at all times)."
    },
    {
     "title": "Law Governing Lawyers",
     "items": [
      [
       "Rules of Professional Conduct",
       "each jurisdiction adopts its own; ABA Model Rules not binding"
      ],
      [
       "Who writes them",
       "courts (California: legislature too); federal courts set their own, often adopting local rules"
      ],
      [
       "Other law",
       "case law; procedure (FRCP 11, privilege); statutes (Sarbanes-Oxley); common law (malpractice, fraud)"
      ],
      [
       "Persuasive only",
       "Restatement (very influential); bar ethics opinions (deference; compliance can mitigate); ABA opinions bind nowhere"
      ],
      [
       "Inherent power (Restatement § 1)",
       "state high courts regulate lawyers as part of the judicial function"
      ]
     ]
    },
    {
     "title": "Profession or Business?",
     "items": [
      [
       "Profession",
       "a learned art pursued in the spirit of public service"
      ],
      [
       "Freidson’s four assumptions",
       "complex training and judgment; client must trust; client and public interest come first; self-regulation"
      ]
     ]
    }
   ]
  },
  {
   "title": "UPL & Multijurisdictional Practice",
   "blocks": [
    {
     "title": "Three Questions",
     "items": [
      [
       "WHO may deliver legal services?",
       "UPL by nonlawyers; Rule 5.5(a)"
      ],
      [
       "WITH WHOM?",
       "Rules 5.3, 5.4, 5.7"
      ],
      [
       "WHERE?",
       "Rules 5.5(b)–(d), 8.5"
      ]
     ],
     "tip": "One fact pattern usually raises more than one."
    },
    {
     "title": "Rule 5.5(a)",
     "items": [
      [
       "Rule",
       "don’t practice in violation of a jurisdiction’s regulation, “or assist another in doing so”"
      ],
      [
       "Assist clause",
       "makes UPL a lawyer’s problem; 5.3 + 5.5(a) = discipline for supervising a nonlawyer into UPL"
      ],
      [
       "Consequences",
       "criminal prosecution; injunction; restitution; disbarment; contempt"
      ],
      [
       "Definition",
       "varies by jurisdiction (cmt. [2]); most define it broadly"
      ]
     ]
    },
    {
     "title": "UPL by Nonlawyers (Brumbaugh)",
     "multi": true,
     "text": "Practice of law if, as a course of conduct for another, the service:",
     "items": [
      [
       "Affects important legal rights",
       ""
      ],
      [
       "Needs more than average-citizen skill",
       "for reasonable protection"
      ]
     ],
     "tip": "Forms seller MAY sell forms and legal info and type what the client wrote; MAY NOT advise on remedies, help pick or fill out forms, or say where to file. Reliance, not holding out or complaints, is what matters."
    },
    {
     "title": "Publishing & Software",
     "items": [
      [
       "Publishing exception",
       "a text or forms sold to the public at large isn’t practice: no personal contact or relationship of trust"
      ],
      [
       "Interactive software",
       "tailoring documents to answers can be UPL as a whole"
      ],
      [
       "Tex. Gov’t Code § 81.101",
       "software isn’t practice if it clearly and conspicuously says it’s no substitute for an attorney"
      ],
      [
       "Branching",
       "software that hides parts of a template makes choices for the user; a form book leaves every choice to the user"
      ],
      [
       "LegalZoom consent judgment (NC 2015)",
       "show the whole template; NC lawyer reviews templates; not-a-substitute notice; disclose name/address; no liability disclaimers; no out-of-state forum"
      ]
     ]
    },
    {
     "title": "Antitrust & Policy",
     "items": [
      [
       "State-action immunity lost",
       "when active market participants control a licensing board without active state supervision"
      ],
      [
       "For UPL limits",
       "competence; public protection; judicial control"
      ],
      [
       "Against",
       "monopoly; access-to-justice gap; unproven harm; antitrust exposure"
      ]
     ]
    },
    {
     "title": "UPL by Lawyers (Birbrower)",
     "items": [
      [
       "Test",
       "sufficient contact with the in-state client to make the service a clear legal representation; quantitative and qualitative"
      ],
      [
       "Physical presence",
       "a factor, neither required nor sufficient; advising remotely can violate § 6125"
      ],
      [
       "No exceptions",
       "for out-of-state license, arbitration, non-courtroom work, or disclosure"
      ],
      [
       "Consequence",
       "fee agreement void for UPL services; recover for severable services not in the state"
      ]
     ]
    },
    {
     "title": "Rule 5.5(b)–(d)",
     "multi": true,
     "items": [
      [
       "(b)",
       "no office or systematic and continuous presence; no holding out as admitted"
      ],
      [
       "(c) temporary",
       "(1) with an active local lawyer; (2) related to a tribunal proceeding you’re or expect to be authorized in; (3) related to ADR arising from home practice (no pro hac required); (4) otherwise arising from home practice"
      ],
      [
       "(d) not temporary",
       "(1) in-house for employer; (2) authorized by federal or local law"
      ]
     ]
    },
    {
     "title": "Rule 8.5",
     "items": [
      [
       "(a) authority",
       "licensing state disciplines wherever conduct occurs; a state where you offer services can too; both may"
      ],
      [
       "(b)(1)",
       "tribunal matter → the tribunal’s rules"
      ],
      [
       "(b)(2)",
       "other conduct → where it occurred, or where its predominant effect is"
      ],
      [
       "Safe harbor",
       "conform to where you reasonably believe the predominant effect will be"
      ]
     ]
    },
    {
     "title": "Nonlawyers · 5.3, 5.4, 5.7",
     "items": [
      [
       "5.3",
       "managers: measures for reasonable assurance; supervisors: reasonable efforts"
      ],
      [
       "5.4(a)",
       "no fee sharing with nonlawyers, except retirement/comp plans, deceased lawyer’s estate, sale of practice (1.17), court fees with a nonprofit"
      ],
      [
       "5.4(b)–(d)",
       "no partnership with nonlawyers for law practice; payer can’t direct judgment; no nonlawyer owners, directors, or controllers"
      ],
      [
       "Exceptions today",
       "D.C. partners; Washington LLLTs; Utah"
      ],
      [
       "5.7",
       "law-related services are subject to the Rules if not distinct from legal services, or through a controlled entity without telling the client protections don’t apply"
      ]
     ]
    }
   ]
  },
  {
   "title": "Forming & Ending Representation",
   "blocks": [
    {
     "title": "Restatement § 14",
     "multi": true,
     "text": "A lawyer-client relationship arises when a person manifests intent that the lawyer provide legal services, and either:",
     "items": [
      [
       "(a)",
       "the lawyer manifests consent; or"
      ],
      [
       "(b)",
       "the lawyer fails to manifest lack of consent, knowing or reasonably should know the person reasonably relies on the lawyer"
      ],
      [
       "§ 14(2)",
       "a tribunal appointment also creates it"
      ]
     ],
     "tip": "No contract, fee, long meeting, or express consent needed. Client’s viewpoint controls; a brief substantive consultation can create it. Protect yourself: written scope, prompt non-engagement letters, website disclaimers."
    },
    {
     "title": "Organizational Clients · 1.13",
     "items": [
      [
       "1.13(a)",
       "the lawyer represents the organization acting through authorized constituents"
      ],
      [
       "Constituents",
       "officers, directors, employees, shareholders; not automatically clients"
      ],
      [
       "Dual representation",
       "possible, but then full duties (1.7 conflicts, 1.4 communication) to each"
      ],
      [
       "Order",
       "identify the client first, then run conflicts client by client"
      ]
     ]
    },
    {
     "title": "Must Accept? · Rule 6.2",
     "multi": true,
     "text": "No general duty to take clients (no cab-rank rule). But don’t avoid a court appointment except for good cause:",
     "items": [
      [
       "(a)",
       "likely to violate the Rules or other law"
      ],
      [
       "(b)",
       "unreasonable financial burden"
      ],
      [
       "(c)",
       "client or cause so repugnant it will likely impair the relationship or representation"
      ]
     ],
     "tip": "Unfamiliar subject matter alone isn’t incompetence if study or co-counsel can fix it."
    },
    {
     "title": "Must Reject · 3.1, 1.2(d), Rule 11",
     "items": [
      [
       "Rule 3.1",
       "no frivolous claims; good-faith argument to change law is OK; criminal defense may require proof of every element"
      ],
      [
       "Not frivolous",
       "facts not yet substantiated, need discovery, or lawyer thinks client will lose"
      ],
      [
       "Rule 1.2(d)",
       "don’t counsel or assist known crime or fraud; may discuss consequences"
      ],
      [
       "FRCP 11(b)",
       "no improper purpose; warranted legal contentions; factual support; warranted denials"
      ],
      [
       "Rule 11(c)",
       "sanctions after notice; firm jointly responsible absent exceptional circumstances"
      ]
     ]
    },
    {
     "title": "Rule 1.16(a) · Mandatory Withdrawal",
     "multi": true,
     "items": [
      [
       "(1)",
       "representation will violate the Rules or other law"
      ],
      [
       "(2)",
       "lawyer’s physical or mental condition materially impairs representation"
      ],
      [
       "(3)",
       "lawyer is discharged"
      ],
      [
       "(4)",
       "client seeks to use or persists in using the lawyer to commit or further crime or fraud"
      ]
     ]
    },
    {
     "title": "Rule 1.16(b) · Permissive Withdrawal",
     "multi": true,
     "items": [
      [
       "(1)",
       "no material adverse effect on the client"
      ],
      [
       "(2)",
       "client persists in conduct the lawyer reasonably believes criminal or fraudulent"
      ],
      [
       "(3)",
       "client used the lawyer to commit crime or fraud"
      ],
      [
       "(4)",
       "repugnant action or fundamental disagreement"
      ],
      [
       "(5)",
       "client fails obligation after reasonable warning"
      ],
      [
       "(6)",
       "unreasonable financial burden or client made it unreasonably difficult"
      ],
      [
       "(7)",
       "other good cause"
      ]
     ]
    },
    {
     "title": "1.16(c)–(d) & Texas",
     "items": [
      [
       "(c)",
       "get tribunal permission where required; if ordered, keep representing despite good cause"
      ],
      [
       "(d)",
       "protect the client: notice; time to hire counsel; return papers and property; refund unearned fees; retaining lien only as law allows"
      ],
      [
       "Texas",
       "withdraw by written motion for good cause (TRCP 10); permissive (b)(4) adds “imprudent”; (b)(5) expressly covers unpaid fees"
      ],
      [
       "Functional conflict",
       "client-directed frivolous tactics + threatened malpractice suit can require withdrawal"
      ]
     ],
     "tip": "Exam trap: a ground under (a) or (b) doesn’t eliminate (c) court approval or (d) transition duties."
    }
   ]
  },
  {
   "title": "Competence & Liability",
   "blocks": [
    {
     "title": "Rules 1.1, 1.3, 1.4",
     "items": [
      [
       "1.1 Competence",
       "knowledge, skill, thoroughness, and preparation reasonably necessary; new lawyers can be competent through study or association"
      ],
      [
       "Emergency",
       "may help outside your field only as reasonably necessary"
      ],
      [
       "Technology",
       "keep abreast of benefits and risks"
      ],
      [
       "1.3 Diligence",
       "reasonable diligence and promptness; no dormant matters; control workload; fee disputes don’t excuse inaction"
      ],
      [
       "1.4 Communication",
       "inform of consent decisions; consult on means; keep informed; answer requests; explain limits; explain enough for informed decisions"
      ]
     ],
     "tip": "A bad outcome alone isn’t incompetence; one incident can support discipline without client harm."
    },
    {
     "title": "Rule 5.1 · Supervisors",
     "multi": true,
     "items": [
      [
       "(a)",
       "partners/managers: firm-wide measures giving reasonable assurance"
      ],
      [
       "(b)",
       "direct supervisors: reasonable efforts"
      ],
      [
       "(c)",
       "responsible if you order or knowingly ratify, or you’re a manager/supervisor who knows in time to fix it and don’t"
      ]
     ],
     "tip": "Sink-or-swim associate: sending an untrained associate to trial with no supervision violates 1.1 and 5.1, no bad verdict needed."
    },
    {
     "title": "Three Accountability Systems",
     "items": [
      [
       "Discipline",
       "protects public; no damages or injury needed; state disciplinary authority"
      ],
      [
       "Malpractice",
       "compensation; duty, breach, causation, injury; civil court"
      ],
      [
       "Ineffective assistance",
       "Sixth Amendment; deficient performance + prejudice; new trial, not money"
      ]
     ]
    },
    {
     "title": "Malpractice",
     "items": [
      [
       "§ 48 / § 52",
       "negligence; standard = care of lawyers in similar circumstances (specialists held higher)"
      ],
      [
       "Rule violations",
       "no private action, no presumption, but evidence of breach"
      ],
      [
       "§ 51 nonclients",
       "invited reliance; representation meant to benefit them; fiduciary client with a beneficiary"
      ],
      [
       "Case within a case",
       "but for the error the result would have been different"
      ],
      [
       "§ 53(d) criminal clients",
       "majority: prove actual innocence; Restatement: innocence not required"
      ],
      [
       "Settlements",
       "accepting one doesn’t bar malpractice; lawyers don’t guarantee results"
      ]
     ]
    },
    {
     "title": "Limiting Liability vs. Scope",
     "items": [
      [
       "1.8(h)(1)",
       "no prospective malpractice limit unless client independently represented"
      ],
      [
       "1.8(h)(2)",
       "settle a malpractice claim with an unrepresented client only after written advice to get counsel + reasonable chance"
      ],
      [
       "1.2(c)",
       "limit scope if reasonable + informed consent; still competent within scope"
      ],
      [
       "Trap",
       "a promise not to sue in an engagement letter violates 1.8(h)"
      ]
     ]
    },
    {
     "title": "Strickland",
     "multi": true,
     "items": [
      [
       "(1) Deficient performance",
       "below an objective standard of reasonableness under prevailing norms"
      ],
      [
       "(2) Prejudice",
       "reasonable probability the result would differ; undermines confidence"
      ]
     ],
     "tip": "Highly deferential, no hindsight. Duty to investigate: review the readily available prior-conviction file the prosecution will use."
    }
   ]
  },
  {
   "title": "Allocating Authority",
   "blocks": [
    {
     "title": "Rule 1.2(a)",
     "multi": true,
     "items": [
      [
       "Objectives",
       "client decides"
      ],
      [
       "Means",
       "lawyer consults (1.4); may take impliedly authorized action"
      ],
      [
       "Settlement",
       "client decides"
      ],
      [
       "Criminal",
       "client decides plea, jury waiver, whether to testify"
      ]
     ],
     "tip": "Cmt. [2]: clients defer on technical/tactical; lawyers defer on expense and third-party concerns. Fundamental disagreement → withdraw (1.16(b)(4)) or client fires lawyer."
    },
    {
     "title": "Authority Nuances",
     "items": [
      [
       "Advance authorization",
       "client may pre-authorize; lawyer relies absent material change; revocable"
      ],
      [
       "Restatement § 21 cmt. d",
       "needn’t follow instructions reasonably believed illegal or unethical"
      ],
      [
       "§ 23 cmt. d inherent authority",
       "act when the legal system demands an immediate decision"
      ],
      [
       "Appellate issues",
       "appointed counsel may winnow nonfrivolous issues; Anders brief if meritless"
      ],
      [
       "Right to maintain innocence",
       "defendant may insist counsel not concede guilt, even in a capital case; silence after explanation isn’t an objection"
      ]
     ]
    },
    {
     "title": "Crime-Fraud & Advice",
     "items": [
      [
       "1.2(d)",
       "describing consequences OK; advising how to avoid detection is not"
      ],
      [
       "Fleeing client with child",
       "advising and concealing → disbarment: 1.2(d), 3.3(a)(2), 8.4(b), 8.4(c)"
      ],
      [
       "Rule 2.1",
       "independent judgment and candid advice; may cite moral, economic, social, political factors"
      ]
     ]
    },
    {
     "title": "Rule 1.14",
     "multi": true,
     "text": "Keep a normal relationship as far as possible. Protective action allowed when the lawyer reasonably believes the client:",
     "items": [
      [
       "(1)",
       "has decision-making limitations"
      ],
      [
       "(2)",
       "is at risk of substantial harm unless action is taken"
      ],
      [
       "(3)",
       "can’t adequately act in her own interest"
      ]
     ],
     "tip": "1.14(c): may reveal information only as reasonably necessary to protect the client."
    }
   ]
  },
  {
   "title": "Advertising & Solicitation",
   "blocks": [
    {
     "title": "Rule 7.1",
     "items": [
      [
       "Rule",
       "no false or misleading communication about the lawyer or services"
      ],
      [
       "Misleading",
       "material misrepresentation, or omission making the whole misleading"
      ],
      [
       "Cmts. [7]–[8]",
       "don’t imply a firm that doesn’t exist; no public-office holder’s name during non-practice"
      ],
      [
       "What is a firm (1.0 cmt. [2])",
       "shared space alone no; holding out or acting as a firm yes"
      ]
     ]
    },
    {
     "title": "Rule 7.2",
     "items": [
      [
       "(a)",
       "communicate through any media"
      ],
      [
       "(b) nothing of value for recommendations, except",
       "ad costs; legal service plans and qualified referral services; buying a practice; non-exclusive disclosed reciprocal referrals; nominal thank-you gifts"
      ],
      [
       "(c) specialist",
       "only if certified by an approved/ABA-accredited body that is named"
      ],
      [
       "(d)",
       "include a responsible lawyer’s name and contact info"
      ]
     ]
    },
    {
     "title": "Rule 7.3 Solicitation",
     "multi": true,
     "text": "Solicitation: lawyer-initiated, to a specific person known to need services in a particular matter, offering services. No live person-to-person solicitation for pecuniary gain unless the target is a:",
     "items": [
      [
       "(b)(1)",
       "lawyer"
      ],
      [
       "(b)(2)",
       "family, close personal, or prior professional relationship"
      ],
      [
       "(b)(3)",
       "routine business user of those services"
      ]
     ],
     "tip": "(c): never if the target said no, or with coercion, duress, harassment. (d) court-ordered OK; (e) group plans OK. Delaware: no routine-business-user exception."
    },
    {
     "title": "Ohralik vs. Primus",
     "items": [
      [
       "Ohralik (1978)",
       "state may discipline in-person solicitation for gain without proof of harm (prophylactic)"
      ],
      [
       "In re Primus (1978)",
       "can’t discipline an ACLU letter offering free help for political/associational goals"
      ],
      [
       "Distinctions",
       "letter vs. in person; free vs. share of recovery; political expression vs. financial gain"
      ],
      [
       "States may still",
       "time/place/manner rules; ban misleading or overbearing solicitation; ban in-person for gain"
      ]
     ]
    }
   ]
  },
  {
   "title": "Fees & Client Property",
   "blocks": [
    {
     "title": "Rule 1.5(a) Reasonableness",
     "multi": true,
     "items": [
      [
       "(1)",
       "time, labor, novelty, difficulty, skill"
      ],
      [
       "(2)",
       "preclusion of other work"
      ],
      [
       "(3)",
       "customary local fee"
      ],
      [
       "(4)",
       "amount involved and results"
      ],
      [
       "(5)",
       "time limits"
      ],
      [
       "(6)",
       "nature and length of relationship"
      ],
      [
       "(7)",
       "experience, reputation, ability"
      ],
      [
       "(8)",
       "fixed or contingent"
      ]
     ]
    },
    {
     "title": "1.5(b)–(e)",
     "items": [
      [
       "(b)",
       "scope and rate communicated, preferably in writing, at or soon after start"
      ],
      [
       "(c) contingent",
       "writing signed by client; method and percentages; expenses and whether deducted before or after; expenses owed regardless; closing statement"
      ],
      [
       "(d) banned contingent",
       "divorce, alimony, support, property settlement; criminal defense"
      ],
      [
       "(e) fee division",
       "proportional or joint responsibility; client agrees in writing to shares; total reasonable"
      ]
     ]
    },
    {
     "title": "Rule 1.8 Money Rules",
     "items": [
      [
       "1.8(a) business deals",
       "fair and fully disclosed in writing; written advice to get counsel + chance; client’s signed informed consent"
      ],
      [
       "1.8(e) financial help",
       "may advance costs; may pay costs for indigent; pro bono may give modest gifts for basic living (not promised, not repaid, not advertised)"
      ],
      [
       "1.8(i)",
       "no proprietary interest in litigation, except a legal lien or a reasonable civil contingent fee"
      ],
      [
       "Property as fee",
       "may be a 1.8(a) transaction; can’t be a 1.8(i) interest"
      ]
     ]
    },
    {
     "title": "Rule 1.15 Trust Accounts",
     "items": [
      [
       "(a)",
       "separate account; complete records kept five years"
      ],
      [
       "(b)",
       "own funds only for bank charges"
      ],
      [
       "(c)",
       "advance fees in trust, withdraw as earned"
      ],
      [
       "(d)",
       "promptly notify, deliver, and account"
      ],
      [
       "(e)",
       "disputed funds stay separate; pay undisputed promptly"
      ]
     ]
    },
    {
     "title": "Court-Awarded Fees",
     "items": [
      [
       "American Rule",
       "each side pays its own"
      ],
      [
       "42 U.S.C. § 1988",
       "prevailing party (material alteration of legal relationship; no catalyst theory); fee belongs to the client"
      ],
      [
       "Lodestar",
       "reasonable hours × reasonable rate; presumptively sufficient"
      ],
      [
       "Perdue enhancement",
       "rare; not for factors already in the lodestar; applicant proves with specific evidence"
      ],
      [
       "Fee waivers",
       "settlement conditioned on waiving fees is allowed; FRCP 23(e) approval for classes"
      ]
     ]
    }
   ]
  },
  {
   "title": "Confidentiality & Privilege",
   "blocks": [
    {
     "title": "Three Pillars",
     "items": [
      [
       "Confidentiality (Rule 1.6)",
       "ethical duty; ALL information relating to the representation, any source, always"
      ],
      [
       "Privilege",
       "evidence rule; confidential lawyer-client communications for legal advice; compelled-disclosure settings"
      ],
      [
       "Work product",
       "discovery rule; materials prepared in anticipation of litigation; qualified"
      ]
     ],
     "tip": "None protects underlying facts. Permission under one doesn’t remove the others; 1.6 creates no discovery privilege."
    },
    {
     "title": "Rule 1.6(b) Exceptions (May, Not Must)",
     "multi": true,
     "items": [
      [
       "(1)",
       "prevent reasonably certain death or substantial bodily harm"
      ],
      [
       "(2)",
       "prevent client crime/fraud causing substantial financial injury, using the lawyer’s services"
      ],
      [
       "(3)",
       "prevent, mitigate, rectify that injury"
      ],
      [
       "(4)",
       "get ethics advice"
      ],
      [
       "(5)",
       "lawyer’s claim or defense in a controversy with the client or about the representation"
      ],
      [
       "(6)",
       "comply with law or court order"
      ],
      [
       "(7)",
       "detect conflicts from lateral moves, without prejudice"
      ]
     ]
    },
    {
     "title": "1.6 Cases",
     "items": [
      [
       "Belge",
       "lawyer who learned of other murders and located a victim’s body owed confidentiality; indictment dismissed"
      ],
      [
       "Spaulding",
       "defense knew of plaintiff’s aneurysm; settlement vacated; today (b)(1) likely permits (not requires) disclosure"
      ],
      [
       "Alton Logan",
       "(b)(1) doesn’t cover freeing an innocent prisoner (Massachusetts does)"
      ],
      [
       "O.P.M. Leasing",
       "silence about past fraud = 1.6; closing new fraudulent loans = 1.2(d)"
      ],
      [
       "1.6(c)",
       "reasonable efforts against unauthorized disclosure (sensitivity, likelihood, cost, difficulty, impact)"
      ]
     ]
    },
    {
     "title": "Privilege Elements",
     "multi": true,
     "text": "Restatement § 68 (proponent’s burden):",
     "items": [
      [
       "Communication",
       "not facts; lawyer’s own observations aren’t communications"
      ],
      [
       "Between privileged persons",
       "client, lawyer, their agents (§ 70)"
      ],
      [
       "In confidence",
       "reasonable belief no outsider learns it (elevator, work email kill it)"
      ],
      [
       "For legal assistance",
       "predominant purpose legal advice; no privilege for business, PR, or tax prep work"
      ]
     ]
    },
    {
     "title": "Organizations (Upjohn)",
     "items": [
      [
       "Upjohn",
       "rejects control group; employees at any level; at superiors’ direction; within duties; knew it was for legal advice; kept confidential"
      ],
      [
       "Holder",
       "the organization; may waive over an employee’s objection"
      ],
      [
       "Upjohn warning (1.13(f))",
       "“I represent the company; I do not represent you.”"
      ],
      [
       "Common interest",
       "shared legal interest plus some joint strategy"
      ],
      [
       "Kovel",
       "nonlawyer agent covered only if necessary to the lawyer’s advice (PR usually not)"
      ]
     ]
    },
    {
     "title": "Waiver & Mistakes",
     "items": [
      [
       "§ 79",
       "voluntary disclosure to a nonprivileged person waives"
      ],
      [
       "No selective waiver",
       "Westinghouse: disclosing to the government waives as to everyone"
      ],
      [
       "FRE 502(a)",
       "subject-matter waiver only if intentional, same subject, fairness requires"
      ],
      [
       "FRE 502(b)",
       "inadvertent disclosure isn’t waiver if reasonable steps to prevent and to rectify"
      ],
      [
       "Rule 4.4(b)",
       "receiving lawyer must promptly notify the sender; return is a matter of other law"
      ],
      [
       "In re Nitla (Tex.)",
       "disqualification needs actual harm + no lesser remedy"
      ]
     ]
    },
    {
     "title": "Crime-Fraud & Work Product",
     "items": [
      [
       "§ 82 crime-fraud",
       "consulting to commit future crime/fraud, or using the advice to do so; past crimes still protected"
      ],
      [
       "FRCP 26(b)(3)",
       "discoverable on substantial need + undue hardship; opinion work product still protected"
      ],
      [
       "Marten",
       "prepared because of litigation that is real and imminent"
      ],
      [
       "§ 91 waiver",
       "disclosure waives only if likely to reach an adversary (vs. any disclosure for privilege)"
      ]
     ]
    },
    {
     "title": "1.18, 1.9(c), 3.3, 4.1",
     "items": [
      [
       "1.18",
       "prospective client info can’t be used or revealed; disqualified if significantly harmful info, unless written consent from both or screening + notice"
      ],
      [
       "1.9(c)",
       "former client info: no use to their disadvantage unless generally known; no revealing"
      ],
      [
       "3.3",
       "candor to tribunal; remedial measures override 1.6; lasts to end of proceeding"
      ],
      [
       "4.1",
       "no false material statements to third persons; disclosure to avoid assisting fraud unless 1.6 prohibits"
      ],
      [
       "Texas reporting",
       "elder/disabled abuse (Hum. Res. Code § 48.051) and child abuse (Fam. Code § 261.101) apply to attorneys"
      ]
     ]
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
   "No knowingly false material statements; correct known misapprehensions; answer lawful demands. 1.6 info excepted."
  ],
  [
   "Brumbaugh test",
   "Affects important legal rights + needs more than average-citizen skill, done for another as a course of conduct."
  ],
  [
   "Forms seller line",
   "May sell forms and type client-written info; may not advise which forms, how to fill, where to file."
  ],
  [
   "Birbrower",
   "Sufficient contact with in-state client; physical presence a factor only; UPL fees void."
  ],
  [
   "Rule 5.5(c) (temporary)",
   "Local co-counsel; tribunal-related; ADR from home practice; arising from home practice."
  ],
  [
   "Rule 5.5(d)",
   "In-house for employer; authorized by federal or local law."
  ],
  [
   "Rule 8.5(b)",
   "Tribunal matter → tribunal’s rules; otherwise where conduct occurred or predominant effect."
  ],
  [
   "Rule 5.4(a) exceptions",
   "Retirement/comp plans; deceased lawyer’s estate; sale of practice; court fees with nonprofit."
  ],
  [
   "Restatement § 14",
   "Person manifests intent + lawyer consents, or fails to decline knowing reasonable reliance; or court appointment."
  ],
  [
   "Rule 6.2 good cause",
   "Violation of Rules/law; unreasonable financial burden; repugnance that impairs representation."
  ],
  [
   "1.16(a) mandatory",
   "Violation; impairment; discharged; client using lawyer for crime/fraud."
  ],
  [
   "1.16(d)",
   "Notice, time for new counsel, return papers/property, refund unearned fees."
  ],
  [
   "Rule 1.1",
   "Knowledge, skill, thoroughness, preparation reasonably necessary."
  ],
  [
   "Rule 5.1(c)",
   "Liable if you order/ratify, or as manager/supervisor know in time and fail to fix."
  ],
  [
   "Strickland",
   "Deficient performance + reasonable probability of different result."
  ],
  [
   "§ 53(d) majority rule",
   "Convicted client must prove actual innocence (Restatement: not required)."
  ],
  [
   "Rule 1.8(h)",
   "No prospective malpractice limit unless client independently represented; settlement needs written advice + chance."
  ],
  [
   "Rule 1.2(a) client decides",
   "Objectives; settlement; plea; jury waiver; whether to testify."
  ],
  [
   "Rule 1.14(b)",
   "Diminished capacity + risk of substantial harm + can’t act in own interest → protective action."
  ],
  [
   "Rule 7.3(b) exceptions",
   "Lawyer; family/close personal/prior professional; routine business user."
  ],
  [
   "Ohralik vs. Primus",
   "In-person for gain: may discipline. Free ACLU letter for political goals: may not."
  ],
  [
   "Rule 1.5(d)",
   "No contingent fee in divorce/alimony/support/property settlement or criminal defense."
  ],
  [
   "Contingent fee writing (1.5(c))",
   "Signed; method and percentages; expenses and timing of deduction; expenses owed win or lose."
  ],
  [
   "Rule 1.8(e)",
   "Advance costs; pay costs for indigent; pro bono modest living gifts, not promised, repaid, or advertised."
  ],
  [
   "Rule 1.8(a)",
   "Fair + written disclosure; written advice to get counsel; client’s signed informed consent."
  ],
  [
   "Rule 1.15(c)",
   "Advance fees go in trust; withdraw as earned."
  ],
  [
   "Perdue",
   "Lodestar presumptively sufficient; enhancement rare, not for factors in lodestar, specific evidence."
  ],
  [
   "Rule 1.6(b)(1)",
   "Prevent reasonably certain death or substantial bodily harm. Permissive."
  ],
  [
   "Privilege elements",
   "Communication; privileged persons; in confidence; for legal assistance."
  ],
  [
   "Upjohn warning",
   "“I represent the company, not you.” Company holds and may waive."
  ],
  [
   "FRE 502(b)",
   "Inadvertent + reasonable steps to prevent + prompt steps to rectify = no waiver."
  ],
  [
   "Rule 4.4(b)",
   "Inadvertently sent document: promptly notify the sender."
  ],
  [
   "Crime-fraud (§ 82)",
   "Future or ongoing crime/fraud, by purpose or use. Past crimes stay protected."
  ],
  [
   "Work product waiver (§ 91)",
   "Only disclosure likely to reach an adversary (privilege: any voluntary disclosure)."
  ],
  [
   "Rule 1.18(d)",
   "Written consent of both, or reasonable limits + screen + no fee share + written notice."
  ]
 ],
 "quiz": [
  {
   "q": "A bar applicant omits a shoplifting conviction from his application. The worst problem is likely:",
   "o": [
    "The conviction itself",
    "The omission, a separate Rule 8.1 violation",
    "Nothing if the conviction was expunged",
    "Only a Rule 1.1 problem"
   ],
   "a": 1,
   "e": "Dishonesty on the application is itself sanctionable and often worse than the conduct."
  },
  {
   "q": "A paralegal service sells divorce forms and, when asked, tells customers which forms to file and how to fill them in. Under Brumbaugh:",
   "o": [
    "Permitted as publishing",
    "UPL: advising on selection and completion",
    "Permitted if a disclaimer is posted",
    "UPL only if a customer complains"
   ],
   "a": 1,
   "e": "May sell forms, may not instruct on filling them out. Reliance, not complaints, is enough."
  },
  {
   "q": "A New York lawyer advises a California client on California law entirely by phone and email over months. Under Birbrower:",
   "o": [
    "No UPL, no physical presence",
    "Can be UPL: sufficient contact with the in-state client",
    "Always UPL",
    "UPL only in litigation"
   ],
   "a": 1,
   "e": "Physical presence is one factor, neither required nor sufficient."
  },
  {
   "q": "An out-of-state lawyer opens a small permanent office in Texas for his home-state clients. Rule 5.5:",
   "o": [
    "Permitted under 5.5(c)(4)",
    "Violates 5.5(b)(1): systematic and continuous presence",
    "Permitted under 5.5(d)(1)",
    "Permitted if he tells clients"
   ],
   "a": 1,
   "e": "(c) is temporary-only; an office is the (b)(1) bar unless (d) applies."
  },
  {
   "q": "A lawyer’s firm pays a nonlawyer marketing partner 20% of legal fees. Which rule?",
   "o": [
    "5.4(a)",
    "5.7",
    "1.5(e)",
    "7.3"
   ],
   "a": 0,
   "e": "No fee sharing with nonlawyers except the listed exceptions."
  },
  {
   "q": "A woman emails a lawyer’s website form describing her case in detail; the lawyer replies with specific advice and says nothing about not representing her. A relationship likely exists because:",
   "o": [
    "She paid nothing, so no",
    "§ 14(1)(b): lawyer failed to disclaim while knowing of her reasonable reliance",
    "Only a signed engagement creates one",
    "Websites can never form relationships"
   ],
   "a": 1,
   "e": "No contract, fee, or express consent needed; client’s reasonable reliance controls."
  },
  {
   "q": "A court appoints a lawyer to a case in an unfamiliar field. He may decline because:",
   "o": [
    "He lacks expertise, automatically",
    "Not on that ground alone if study or co-counsel can supply competence",
    "Appointments are voluntary",
    "Rule 1.1 bars it"
   ],
   "a": 1,
   "e": "Rule 6.2 good cause: violation, unreasonable financial burden, repugnance that impairs."
  },
  {
   "q": "The client fires the lawyer mid-trial. The lawyer:",
   "o": [
    "Must stop immediately without court involvement",
    "Must withdraw (1.16(a)(3)) but still needs court permission if required and must protect the client",
    "May stay if he disagrees",
    "Must first sue for fees"
   ],
   "a": 1,
   "e": "(a) grounds don’t eliminate (c) tribunal approval or (d) transition duties."
  },
  {
   "q": "Which is a PERMISSIVE withdrawal ground?",
   "o": [
    "Client uses the lawyer to further an ongoing fraud",
    "Lawyer’s illness materially impairs representation",
    "Client fails to pay after reasonable warning",
    "Lawyer is discharged"
   ],
   "a": 2,
   "e": "1.16(b)(5). The others are mandatory under 1.16(a)."
  },
  {
   "q": "A partner sends an untrained associate to try a case alone with no prep or supervision. The associate wins. Discipline?",
   "o": [
    "No, no harm",
    "Yes: 1.1 and 5.1 violated; bad outcome not required",
    "Only malpractice",
    "Only if the client complains"
   ],
   "a": 1,
   "e": "Discipline doesn’t require client injury."
  },
  {
   "q": "A convicted client sues his lawyer for malpractice. Under the majority rule he must also prove:",
   "o": [
    "Only negligence",
    "Actual innocence",
    "Bad faith",
    "A Rule violation"
   ],
   "a": 1,
   "e": "Majority: actual innocence; the Restatement doesn’t require it."
  },
  {
   "q": "An engagement letter says the client “agrees not to sue for malpractice.” The client had no separate lawyer. This:",
   "o": [
    "Is valid if in writing",
    "Violates Rule 1.8(h)(1)",
    "Is a valid 1.2(c) scope limit",
    "Is fine for flat fees"
   ],
   "a": 1,
   "e": "Prospective malpractice limits require independent representation."
  },
  {
   "q": "Defense counsel wants to concede guilt to avoid death; the defendant insists on maintaining innocence. Counsel:",
   "o": [
    "May concede as a strategic means decision",
    "Must honor the defendant’s objective",
    "Must withdraw",
    "Must ask the judge"
   ],
   "a": 1,
   "e": "Maintaining innocence is the defendant’s objective and prerogative."
  },
  {
   "q": "Which decision belongs to the client under 1.2(a)?",
   "o": [
    "Which witnesses to call",
    "Whether to settle",
    "Which motions to file",
    "Order of arguments"
   ],
   "a": 1,
   "e": "Objectives, settlement, plea, jury waiver, whether to testify."
  },
  {
   "q": "A lawyer calls an accident victim at the hospital to offer representation for a contingent fee. They’ve never met. Under 7.3:",
   "o": [
    "Permitted by phone",
    "Prohibited live solicitation for pecuniary gain",
    "Permitted if truthful",
    "Permitted if the victim is an adult"
   ],
   "a": 1,
   "e": "No live person-to-person solicitation for gain absent a (b) exception. Ohralik."
  },
  {
   "q": "An ACLU lawyer writes to a woman offering free representation to challenge a sterilization policy. Discipline?",
   "o": [
    "Yes, solicitation",
    "No: In re Primus",
    "Yes, unless she consented first",
    "Only if she declines"
   ],
   "a": 1,
   "e": "Letter, free, political and associational goals."
  },
  {
   "q": "A lawyer gives a referral source a $5,000 “thank you” for each client sent. Rule 7.2(b):",
   "o": [
    "Allowed as a nominal gift",
    "Prohibited: something of value for recommending",
    "Allowed if disclosed",
    "Allowed for reciprocal referrals"
   ],
   "a": 1,
   "e": "Nominal gifts only, not reasonably expected as compensation."
  },
  {
   "q": "Which fee is prohibited?",
   "o": [
    "A contingent fee in a personal injury case",
    "A contingent fee for criminal defense",
    "A flat fee in a divorce",
    "An hourly fee in a criminal case"
   ],
   "a": 1,
   "e": "1.5(d)(2). Divorce bar is on fees contingent on the divorce or amounts."
  },
  {
   "q": "A pro bono lawyer gives a homeless client $40 for groceries, unprompted, and doesn’t publicize it. Under 1.8(e):",
   "o": [
    "Prohibited financial assistance",
    "Permitted modest gift for basic living expenses",
    "Permitted only if repaid",
    "Permitted only for court costs"
   ],
   "a": 1,
   "e": "Not promised as inducement, not repaid, not advertised."
  },
  {
   "q": "A client deposits a $10,000 advance fee. The lawyer should put it:",
   "o": [
    "In the operating account",
    "In the client trust account, withdrawing as earned",
    "In a personal savings account",
    "Anywhere, if documented"
   ],
   "a": 1,
   "e": "Rule 1.15(c)."
  },
  {
   "q": "A client tells her lawyer she plans to poison her business partner next week. The lawyer:",
   "o": [
    "Must keep silent",
    "May reveal to prevent reasonably certain death or substantial bodily harm",
    "Must reveal",
    "May reveal only after it happens"
   ],
   "a": 1,
   "e": "1.6(b)(1) permits; it doesn’t require."
  },
  {
   "q": "An in-house lawyer interviews a mid-level employee about a bribe, at the CEO’s direction, to advise the company. Privileged?",
   "o": [
    "No, not the control group",
    "Yes, under Upjohn",
    "Only if the employee is a client",
    "Only the lawyer’s notes"
   ],
   "a": 1,
   "e": "Upjohn rejected the control-group test. Give the Upjohn warning."
  },
  {
   "q": "A company hands privileged documents to the SEC under a confidentiality agreement, then a private plaintiff seeks them. Result:",
   "o": [
    "Still privileged against private parties",
    "Waived: no selective waiver (Westinghouse)",
    "Privileged because of the agreement",
    "Protected by FRE 502(b)"
   ],
   "a": 1,
   "e": "Disclosure to the government waives as to everyone."
  },
  {
   "q": "Opposing counsel accidentally emails you their privileged memo. Rule 4.4(b) requires you to:",
   "o": [
    "Return it unread",
    "Promptly notify the sender",
    "Use it freely",
    "Report them to the bar"
   ],
   "a": 1,
   "e": "Whether to return or whether privilege was waived is other law."
  },
  {
   "q": "A client hires a lawyer to defend him for last year’s fraud. The crime-fraud exception:",
   "o": [
    "Applies, since fraud is involved",
    "Doesn’t apply: past crimes are protected; only ongoing or future misconduct",
    "Applies if the fraud was large",
    "Applies automatically in criminal cases"
   ],
   "a": 1,
   "e": "§ 82 reaches consultation to commit, or use of advice to commit, crime or fraud."
  },
  {
   "q": "A lawyer leaves notes of witness interviews in a shared folder a vendor can access; nothing suggests the adversary will see them. Work product:",
   "o": [
    "Waived by any disclosure",
    "Not waived: disclosure waives only if likely to reach an adversary",
    "Never existed",
    "Waived under FRE 502(a)"
   ],
   "a": 1,
   "e": "§ 91(4). Contrast privilege, waived by any voluntary disclosure (§ 79)."
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
     "1.16(a)(3)."
    ],
    [
     "Client refuses to pay after a clear warning",
     "May withdraw",
     "1.16(b)(5)."
    ],
    [
     "Client insists on using the lawyer to close a loan the lawyer knows is fraudulent",
     "Must withdraw",
     "1.16(a)(4) / (a)(1)."
    ],
    [
     "Lawyer fundamentally disagrees with the client’s lawful goal",
     "May withdraw",
     "1.16(b)(4)."
    ],
    [
     "Lawyer is mildly annoyed, and leaving would badly hurt the client mid-trial",
     "Neither",
     "No (a) ground; (b)(1) fails; no other good cause shown."
    ],
    [
     "Lawyer’s addiction materially impairs representation",
     "Must withdraw",
     "1.16(a)(2)."
    ],
    [
     "Withdrawal causes no material adverse effect",
     "May withdraw",
     "1.16(b)(1)."
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
     "All four elements."
    ],
    [
     "Lawyer’s memo of trial strategy drafted after suit was filed",
     "Work product",
     "Opinion work product."
    ],
    [
     "What the lawyer saw at the scene with her own eyes",
     "1.6 only",
     "Observations aren’t communications."
    ],
    [
     "Client info the lawyer learned from a newspaper",
     "1.6 only",
     "1.6 covers info from any source."
    ],
    [
     "Client’s statement made in a crowded elevator to the lawyer",
     "1.6 only",
     "Not in confidence."
    ],
    [
     "Business-only advice from a lawyer acting as marketing consultant",
     "1.6 only",
     "Not legal assistance; still 1.6 info."
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
     "Prior professional relationship."
    ],
    [
     "Live call to a stranger injured yesterday, for a contingent fee",
     "Prohibited",
     "Ohralik."
    ],
    [
     "Targeted letter to a stranger known to face foreclosure",
     "Permitted",
     "Written, not live; still subject to 7.1 and 7.3(c)."
    ],
    [
     "Live pitch to a company GC that routinely buys these services",
     "Permitted",
     "(b)(3) routine business user."
    ],
    [
     "Second email after the person replied “stop contacting me”",
     "Prohibited",
     "7.3(c)(1)."
    ],
    [
     "Free ACLU offer letter for a civil-rights challenge",
     "Permitted",
     "Primus."
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
