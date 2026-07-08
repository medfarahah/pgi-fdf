const addDays = (n) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
};

const today = () => new Date().toISOString().slice(0, 10);

export function getDemoData() {
  const d = (n) => addDays(n);

  const clubs = [
    { id: 1, nom: 'AS Port', ville: 'Djibouti', stade: 'Stade de Ville', couleurs: 'Bleu et blanc', coach: 'Mohamed Darar', telephone: '+253 77 12 34 56', email: 'contact@asport.dj', notes: '' },
    { id: 2, nom: 'CF Gendarmerie', ville: 'Djibouti', stade: 'Stade El Hadj Hassan Gouled', couleurs: 'Rouge et noir', coach: 'Abdi Waberi', telephone: '+253 77 23 45 67', email: '', notes: '' },
    { id: 3, nom: 'ASES', ville: 'Ali Sabieh', stade: 'Stade d\'Ali Sabieh', couleurs: 'Vert et jaune', coach: 'Houssein Ali', telephone: '+253 77 34 56 78', email: '', notes: '' },
    { id: 4, nom: 'Dikhil FC', ville: 'Dikhil', stade: 'Stade de Dikhil', couleurs: 'Orange et noir', coach: 'Omar Barkat', telephone: '+253 77 45 67 89', email: '', notes: '' },
    { id: 5, nom: 'Arta Solar', ville: 'Arta', stade: 'Stade d\'Arta', couleurs: 'Jaune et vert', coach: 'Yacin Hassan', telephone: '+253 77 56 78 90', email: '', notes: '' },
    { id: 6, nom: 'UNFD', ville: 'Djibouti', stade: 'Stade de Ville', couleurs: 'Blanc et bleu', coach: 'Ibrahim Osman', telephone: '+253 77 67 89 01', email: 'unfd@fdf.dj', notes: '' },
  ];

  const arbitres = [
    { id: 1, nom: 'Hassan', prenom: 'Ahmed', type: 'Central', niveau: 'FIFA', telephone: '+253 77 11 22 33', email: 'ahmed.hassan@fdf.dj', licence: 'DJ-2024-001', statut: 'Actif', nbMatchs: 3 },
    { id: 2, nom: 'Youssouf', prenom: 'Omar', type: 'Central', niveau: 'CAF', telephone: '+253 77 22 33 44', email: 'omar.youssouf@fdf.dj', licence: 'DJ-2024-002', statut: 'Actif', nbMatchs: 2 },
    { id: 3, nom: 'Ali', prenom: 'Mahmoud', type: 'Central', niveau: 'National', telephone: '+253 77 33 44 55', email: '', licence: 'DJ-2024-003', statut: 'Actif', nbMatchs: 1 },
    { id: 4, nom: 'Farah', prenom: 'Said', type: 'Assistant', niveau: 'CAF', telephone: '+253 77 44 55 66', email: 'said.farah@fdf.dj', licence: 'DJ-2024-004', statut: 'Actif', nbMatchs: 3 },
    { id: 5, nom: 'Moussa', prenom: 'Ibrahim', type: 'Assistant', niveau: 'National', telephone: '+253 77 55 66 77', email: '', licence: 'DJ-2024-005', statut: 'Actif', nbMatchs: 2 },
    { id: 6, nom: 'Djama', prenom: 'Ismaël', type: 'Assistant', niveau: 'Régional', telephone: '+253 77 66 77 88', email: '', licence: 'DJ-2024-006', statut: 'Actif', nbMatchs: 2 },
  ];

  const saisons = [
    { id: 1, libelle: '2024-2025', dateDebut: '2024-09-01', dateFin: '2025-06-30', statut: 'Active' },
    { id: 2, libelle: '2023-2024', dateDebut: '2023-09-01', dateFin: '2024-06-30', statut: 'Clôturée' },
  ];

  const divisions = [
    { id: 101, saisonId: 1, nom: 'D1', rang: 1, clubIds: [1, 2, 5, 6], arbitreIds: [1, 2, 3, 4, 5, 6] },
    { id: 102, saisonId: 1, nom: 'D2', rang: 2, clubIds: [3, 4], arbitreIds: [2, 3, 4, 5, 6] },
  ];

  const competitions = [
    { id: 201, saisonId: 1, nom: 'Championnat National D1', type: 'Championnat', divisionIds: [101] },
    { id: 202, saisonId: 1, nom: 'Coupe de Djibouti', type: 'Coupe', divisionIds: [101, 102] },
  ];

  const mkTaux = (saisonId, divisionId, division, rang, central, assistant, quatrieme) => [
    { id: divisionId * 10 + 1, saisonId, divisionId, division, rang, role: 'Central', montant: central },
    { id: divisionId * 10 + 2, saisonId, divisionId, division, rang, role: 'Assistant', montant: assistant },
    { id: divisionId * 10 + 3, saisonId, divisionId, division, rang, role: '4ème Arbitre', montant: quatrieme },
  ];

  const taux = [
    ...mkTaux(1, 101, 'D1', 1, 15000, 8000, 6000),
    ...mkTaux(1, 102, 'D2', 2, 10000, 5000, 4000),
  ];

  const sanctions = [
    { id: 1, libelle: 'Absence non justifiée', modeCalcul: 'Fixe', valeur: 5000 },
    { id: 2, libelle: 'Retard signalé', modeCalcul: 'Fixe', valeur: 2000 },
    { id: 3, libelle: 'Tenue incorrecte', modeCalcul: 'Pourcentage', valeur: 25 },
  ];

  const matchs = [
    { id: 301, competition: 'Championnat National D1', dom: 'AS Port', vis: 'CF Gendarmerie', date: d(-14), heure: '16:00', journee: 'J8', stade: 'Stade de Ville', statut: 'Terminé', notes: '', assigned: true, submitted: true, ac: 'Hassan Ahmed', a1: 'Farah Said', a2: 'Moussa Ibrahim', a4: 'Youssouf Omar' },
    { id: 302, competition: 'Coupe de Djibouti', dom: 'ASES', vis: 'Dikhil FC', date: d(-10), heure: '15:30', journee: '8e de finale', stade: 'Stade d\'Ali Sabieh', statut: 'Terminé', notes: 'Match tendu en seconde période', assigned: true, submitted: true, ac: 'Youssouf Omar', a1: 'Djama Ismaël', a2: 'Farah Said', a4: 'Ali Mahmoud' },
    { id: 303, competition: 'Championnat National D1', dom: 'Arta Solar', vis: 'UNFD', date: d(-5), heure: '17:00', journee: 'J9', stade: 'Stade d\'Arta', statut: 'Terminé', notes: '', assigned: true, submitted: true, ac: 'Ali Mahmoud', a1: 'Moussa Ibrahim', a2: 'Djama Ismaël', a4: 'Hassan Ahmed' },
    { id: 304, competition: 'Championnat National D1', dom: 'AS Port', vis: 'Arta Solar', date: d(7), heure: '16:00', journee: 'J10', stade: 'Stade de Ville', statut: 'Programmé', notes: '', assigned: true, submitted: true, ac: 'Hassan Ahmed', a1: 'Farah Said', a2: 'Moussa Ibrahim', a4: 'Youssouf Omar' },
    { id: 305, competition: 'Coupe de Djibouti', dom: 'CF Gendarmerie', vis: 'ASES', date: d(14), heure: '15:00', journee: 'Quarts de finale', stade: 'Stade El Hadj Hassan Gouled', statut: 'Programmé', notes: '', assigned: true, submitted: true, ac: 'Youssouf Omar', a1: 'Djama Ismaël', a2: 'Farah Said', a4: 'Ali Mahmoud' },
    { id: 306, competition: 'Championnat National D1', dom: 'Dikhil FC', vis: 'AS Port', date: d(10), heure: '16:30', journee: 'J10', stade: 'Stade de Dikhil', statut: 'Programmé', notes: '', assigned: true, submitted: false, ac: 'Ali Mahmoud', a1: 'Moussa Ibrahim', a2: 'Djama Ismaël', a4: 'Hassan Ahmed' },
    { id: 307, competition: 'Championnat National D1', dom: 'UNFD', vis: 'Arta Solar', date: d(21), heure: '17:00', journee: 'J11', stade: 'Stade de Ville', statut: 'Programmé', notes: '', assigned: false, submitted: false, ac: '', a1: '', a2: '', a4: '' },
    { id: 308, competition: 'Championnat National D1', dom: 'Arta Solar', vis: 'CF Gendarmerie', date: d(5), heure: '16:00', journee: 'J10', stade: 'Stade d\'Arta', statut: 'Programmé', notes: '', assigned: true, submitted: true, ac: 'Hassan Ahmed', a1: 'Farah Said', a2: 'Djama Ismaël', a4: 'Youssouf Omar' },
    { id: 309, competition: 'Championnat National D1', dom: 'UNFD', vis: 'CF Gendarmerie', date: d(-3), heure: '17:00', journee: 'J9', stade: 'Stade de Ville', statut: 'Terminé', notes: '', assigned: true, submitted: true, ac: 'Hassan Ahmed', a1: 'Farah Said', a2: 'Moussa Ibrahim', a4: 'Youssouf Omar' },
  ];

  const feuilles = [
    {
      id: 401, matchId: 301, saisonId: 1, domicile: 'AS Port', visiteur: 'CF Gendarmerie',
      competition: 'Championnat National D1', dateMatch: d(-14), scoreDom: '2', scoreVis: '1',
      incidents: 'Aucun incident majeur', divisionDom: 'D1', divisionVis: 'D1', divisionRetenue: 'D1',
      statut: 'Validée', dateValidation: d(-13),
    },
    {
      id: 402, matchId: 302, saisonId: 1, domicile: 'ASES', visiteur: 'Dikhil FC',
      competition: 'Coupe de Djibouti', dateMatch: d(-10), scoreDom: '1', scoreVis: '0',
      incidents: 'Carton jaune retard assistant', divisionDom: 'D2', divisionVis: 'D2', divisionRetenue: 'D2',
      statut: 'Validée', dateValidation: d(-9),
    },
  ];

  const presences = [
    { id: 501, feuilleId: 401, nomArbitre: 'Hassan Ahmed', roleArbitre: 'Central', present: true },
    { id: 502, feuilleId: 401, nomArbitre: 'Farah Said', roleArbitre: 'Assistant', present: true },
    { id: 503, feuilleId: 401, nomArbitre: 'Moussa Ibrahim', roleArbitre: 'Assistant', present: true },
    { id: 504, feuilleId: 401, nomArbitre: 'Youssouf Omar', roleArbitre: '4ème Arbitre', present: true },
    { id: 505, feuilleId: 402, nomArbitre: 'Youssouf Omar', roleArbitre: 'Central', present: true },
    { id: 506, feuilleId: 402, nomArbitre: 'Djama Ismaël', roleArbitre: 'Assistant', present: true },
    { id: 507, feuilleId: 402, nomArbitre: 'Farah Said', roleArbitre: 'Assistant', present: true },
    { id: 508, feuilleId: 402, nomArbitre: 'Ali Mahmoud', roleArbitre: '4ème Arbitre', present: true },
  ];

  const sancApp = [
    { id: 601, presenceId: 506, typeSanctionId: 2, montantApplique: 2000, commentaire: 'Arrivée 10 min après l\'heure' },
  ];

  const refConfirmations = [
    { matchId: 304, arbitreId: 1, date: d(-1) },
    { matchId: 308, arbitreId: 1, date: today() },
  ];

  const rapports = [
    {
      id: 701,
      matchId: 303,
      saisonId: 1,
      arbitreId: 3,
      redacteurNom: 'Ali Mahmoud',
      scoreDom: '1',
      scoreVis: '1',
      discipline: '2 cartons jaunes AS Arta Solar, 1 carton jaune UNFD',
      incidents: 'L\u00e9ger retard au coup d\u2019envoi de la 2e p\u00e9riode (3 min)',
      observations: 'Terrain en bon \u00e9tat. Public calme.',
      numMatch: '303',
      enFaveurDe: 'Nul',
      assesseur: 'Ahmed Youssouf',
      commentaires: '2 cartons jaunes AS Arta Solar, 1 carton jaune UNFD\nL\u00e9ger retard au coup d\u2019envoi de la 2e p\u00e9riode (3 min)\nTerrain en bon \u00e9tat. Public calme.',
      decisionsImpacte: 'Non',
      arbitreRecommande: 'Oui',
      suiviParticulier: 'Non',
      equipe: [
        { nom: 'Ali Mahmoud', role: 'Central', present: true, remarque: '' },
        { nom: 'Moussa Ibrahim', role: 'Assistant', present: true, remarque: '' },
        { nom: 'Djama Ismaël', role: 'Assistant', present: true, remarque: '' },
        { nom: 'Hassan Ahmed', role: '4ème Arbitre', present: true, remarque: '' },
      ],
      statut: 'Envoyé',
      dateEnvoi: d(-4),
    },
  ];

  return {
    clubs,
    arbitres,
    saisons,
    divisions,
    competitions,
    taux,
    sanctions,
    matchs,
    feuilles,
    presences,
    sancApp,
    refId: 1,
    refConfirmations,
    rapports,
  };
}

const LS_KEYS = {
  clubs: 'pgi3:clubs',
  arbitres: 'pgi3:arbitres',
  saisons: 'pgi3:saisons',
  divisions: 'pgi3:divisions',
  competitions: 'pgi3:competitions',
  taux: 'pgi3:taux',
  sanctions: 'pgi3:sanctions',
  matchs: 'pgi3:matchs',
  feuilles: 'pgi3:feuilles',
  presences: 'pgi3:presences',
  sancApp: 'pgi3:sancapp',
  refId: 'pgi3:refId',
  refConfirmations: 'pgi3:refConfirm',
  rapports: 'pgi3:rapports',
};

const DEMO_FLAG = 'pgi3:demoLoaded';

export function applyDemoData() {
  const demo = getDemoData();
  Object.entries(LS_KEYS).forEach(([field, key]) => {
    localStorage.setItem(key, JSON.stringify(demo[field]));
  });
  localStorage.setItem(DEMO_FLAG, '1');
  return demo;
}

export function ensureDemoSeed() {
  if (localStorage.getItem(DEMO_FLAG) === '1') return false;
  try {
    const clubs = localStorage.getItem(LS_KEYS.clubs);
    if (clubs && JSON.parse(clubs).length > 0) {
      localStorage.setItem(DEMO_FLAG, '1');
      return false;
    }
  } catch {
    /* seed below */
  }
  applyDemoData();
  return true;
}
