/* Site-wide settings: hub title, exam countdowns, and class order. */
window.SITE = {
  title: "2L Fall Review",
  kicker: "UHLC 2L · Fall 2026",
  title1: "Fall",
  title2: "Review",
  sub: "International Law, Asylum Law, and Professional Responsibility, built from your outlines and the class slides.",
  // Countdowns on the hub. Past dates hide themselves. date = YYYY-MM-DD, or "" for no countdown.
  exams: [
    { label: "days to IL + Asylum midterms · Mon 10.19", date: "2026-10-19" },
    { label: "Pro Res final · multiple choice, closed book · date TBD", date: "" }
  ],
  // Class order on the hub. Each id matches a file in data/.
  order: ["intl-law", "asylum", "pro-res"]
};
