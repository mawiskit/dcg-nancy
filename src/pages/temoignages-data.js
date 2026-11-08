/* Témoignages d’étudiants : unique source de contenu de la page /temoignages/.

   POUR AJOUTER UN TÉMOIGNAGE : copier un bloc ci-dessous, le coller à la bonne place dans la liste
   `brut`, puis remplacer les textes. La page, la navigation et les cartes se mettent à jour seules.
   Aucun autre fichier n’est à modifier.

   Champs :
   - id          identifiant court, sans accent ni espace (sert d’ancre : /temoignages/#nabintou)
   - prenom      prénom affiché
   - profil      'etudiant' | 'ancien' | 'diplome'            (réservé aux futurs filtres)
   - annee       1, 2 ou 3 pour un étudiant ; laisser null pour un ancien ou un diplômé
   - statut      ligne d’identité affichée sous le prénom, ex. « Étudiante en DCG 1re année »
   - roles       fonction associative ou autre, ex. ['Président du Bureau des étudiants'] ; [] si aucune
   - accroche    phrase d’introduction du témoignage ; '' si aucune
   - qa          liste de { q: question, r: [paragraphes de la réponse] } : texte intégral, sans coupe
   - signature   signature en fin de témoignage
   - sources     [{ plateforme, date: '1er mars 2025', datetime: '2025-03-01', compte }] ; [] si inconnue.
                 Ne jamais inventer de date.
   - photos      [{ src, alt, width, height, legende }] ; [] tant qu’il n’y a pas de photo autorisée
   - videos      [{ src, poster, legende }] ; [] tant qu’il n’y a pas de vidéo autorisée
*/

const brut = [
  {
    id: 'nabintou',
    prenom: 'Nabintou',
    profil: 'etudiant',
    annee: 1,
    statut: 'Étudiante en DCG 1re année',
    roles: [],
    accroche: 'Parole aux étudiants ! Qui de mieux que Nabintou pour vous parler de la formation DCG ?',
    qa: [
      { q: 'Comment as-tu découvert le DCG ?', r: ['J’ai découvert le DCG, suite à un échange avec mes professeurs en Terminale. J’ai eu davantage connaissance de cette formation lors de l’exposition Oriaction à Vandœuvre.'] },
      { q: 'Comment as-tu accédé au DCG ? (Bac / BTS / réorientation…)', r: ['J’ai accédé au DCG suite à un bac STMG spécialité gestion-finance et options section euro espagnole et DGEMC.'] },
      { q: 'Comment trouves-tu la difficulté en première année de DCG ?', r: ['Le rythme de travail est évidemment plus intense que celui de terminale, mais rien d’insurmontable.'] },
      { q: 'Comment te sens-tu dans la classe ?', r: ['Étant une personne très positive et sociable, je me suis rapidement intégrée dans la classe. Nous sommes une classe soudée et investie, où globalement tout le monde a réussi à s’intégrer (même les plus timides) !'] },
      { q: 'Quelle est la matière que tu as trouvée la plus difficile et pourquoi ?', r: ['Je trouve que la SIG est une matière compliquée. C’est une matière technique qui repose en partie sur un aspect informatique, ainsi que sur des notions complexes. Je préfère largement les matières littéraires et rédactionnelles.'] },
      { q: 'Quelle est la matière que tu as trouvée la plus facile et pourquoi ?', r: ['Pour moi, c’est l’économie. C’est ma matière préférée et c’est une matière que j’avais déjà étudiée depuis 2 ans. Je la trouve accessible puisqu’il suffit d’être curieux, de travailler et d’un peu de bonne volonté pour réussir.'] },
      { q: 'Comment trouves-tu l’ambiance entre les trois classes de DCG ?', r: ['Les différentes activités/sorties organisées par l’association permettent de créer et souder des liens entre les différentes classes. Ce qui permet de créer une bonne entente qui transcende les murs du lycée.'] },
    ],
    signature: 'Nabintou – Étudiante en DCG 1re année.',
    sources: [{ plateforme: 'Instagram', date: '1er mars 2025', datetime: '2025-03-01', compte: '@dcg_gdlt' }],
    photos: [],
    videos: [],
  },
  {
    id: 'lucas',
    prenom: 'Lucas',
    profil: 'etudiant',
    annee: 1,
    statut: 'Étudiant en DCG 1re année',
    roles: [],
    accroche: '',
    qa: [
      { q: 'Comment as-tu découvert le DCG ?', r: ['J’ai un ami qui a suivi cette formation et qui m’en a parlé.'] },
      { q: 'Comment as-tu accédé au DCG ?', r: ['J’ai accédé au DCG après un bac avec les spécialités mathématiques et physique-chimie.'] },
      { q: 'Comment trouves-tu la difficulté en première année de DCG ?', r: ['La difficulté est légèrement plus élevée que celle de la terminale, mais elle peut paraître plus forte étant donné que les méthodes ainsi que les matières enseignées changent radicalement par rapport au parcours général.'] },
      { q: 'Comment trouves-tu la charge de travail ?', r: ['Étant donné que nous avons beaucoup de cours, il faut travailler à la maison en rentrant à 17 ou 18 h, ce qui peut nous amener à nous coucher assez tard si nous ne prenons pas d’avance dans nos devoirs et nos révisions.', 'De plus, il y a des DS tous les vendredis, donc il faut réviser toute la semaine.'] },
      { q: 'Comment te sens-tu dans la classe ?', r: ['Je me sens bien intégré au sein de ma classe.', 'De plus, l’association de la formation nous permet de partager de bons moments entre les trois classes de DCG.', 'On peut donc relâcher la pression lors des sorties !'] },
      { q: 'Quelle est la matière que tu as trouvée la plus difficile et pourquoi ?', r: ['Pour moi, la matière la plus difficile est l’économie, car il faut savoir rédiger selon une méthode.', 'Or, je viens d’un bac « scientifique » et je n’ai pas l’habitude de rédiger.'] },
      { q: 'Quelle est la matière que tu as trouvée la plus facile et pourquoi ?', r: ['La matière la plus facile pour moi est la SIG (Système d’information et de gestion), car cette matière est en lien avec Excel ainsi que le langage de programmation, que j’aime bien pratiquer et qui n’est pas compliqué.'] },
      { q: 'Comment trouves-tu l’ambiance entre les trois classes de DCG ?', r: ['L’ambiance est vraiment superbe grâce à l’association, qui nous permet de nous retrouver pour faire des activités tous ensemble.', 'En plus, les classes supérieures sont là pour répondre à nos questions si nous en avons besoin.'] },
    ],
    signature: 'Lucas – Étudiant en DCG 1re année.',
    sources: [], /* aucune date de publication connue : ne pas en inventer */
    photos: [],
    videos: [],
  },
  {
    id: 'yoan',
    prenom: 'Yoan',
    profil: 'etudiant',
    annee: 3,
    statut: 'Étudiant en DCG 3e année',
    roles: ['Président du Bureau des étudiants'],
    accroche: 'Vous vous demandez ce que réserve le parcours en DCG et comment il peut transformer votre avenir ?',
    qa: [
      { q: 'Comment as-tu découvert le DCG ?', r: ['Grâce à un ami de mes parents qui est expert-comptable et qui m’a conseillé de prendre cette filière aux multiples débouchés.'] },
      { q: 'Comment as-tu accédé au DCG ? (Bac / BTS / réorientation…)', r: ['J’ai choisi le DCG après un bac général, spécialités SES et HGGSP.'] },
      { q: 'Comment trouves-tu la difficulté en troisième année de DCG ?', r: ['Après la deuxième année qui est la plus chargée, la troisième paraît plus légère car le nombre de matières est diminué mais les matières restent techniques. Les efforts ne doivent donc pas être relâchés d’autant plus que nous devons aussi rendre notre mémoire très chronophage en première partie d’année.'] },
      { q: 'Comment trouves-tu la charge de travail ?', r: ['Le planning est assez léger ce qui nous laisse du temps pour travailler à la maison. Le contenu des cours étant très dense, le temps passé à réviser à la maison est le plus long sans être insurmontable. Il ne faut pas relâcher les efforts tout au long de l’année et surtout pendant les périodes de devoirs.'] },
      { q: 'Comment te sens-tu dans la classe ?', r: ['Nous sommes un bon groupe d’étudiants investis. Les relations sont bonnes et même amicales. S’entraider est important en DCG, d’où l’importance d’une classe unie dans la joie comme dans la difficulté.'] },
      { q: 'Quelle est la matière que tu as trouvée la plus difficile et pourquoi ?', r: ['Pour moi, la matière la plus difficile se joue entre la comptabilité approfondie et le droit des sociétés. Ce sont deux matières techniques et riches en contenu qui demandent une grosse charge de travail pour en comprendre tous les aspects.'] },
      { q: 'Quelle est la matière que tu as trouvée la plus facile et pourquoi ?', r: ['La matière la plus facile est pour moi l’anglais. J’ai beaucoup de facilités dans les langues ce qui rend l’apprentissage beaucoup plus simple mais le niveau requis est accessible, tout le monde peut y arriver.'] },
      { q: 'Comment trouves-tu l’ambiance entre les trois classes de DCG ?', r: ['L’ambiance entre les classes est excellente cette année. L’association étudiante que je préside fait beaucoup pour faire des activités en dehors des cours (fives, accrobranche, grosse sortie à Europa Park...) ce qui nous aide à bien nous entendre et à aider les élèves des autres classes.'] },
    ],
    signature: 'Yoan – Président du Bureau des étudiants.',
    sources: [{ plateforme: 'Instagram', date: '24 janvier 2025', datetime: '2025-01-24', compte: '@dcg_gdlt' }],
    photos: [],
    videos: [],
  },
];

/* Typographie française : espace fine insécable avant ? ! ; : » et après «, espace insécable avant « h ». */
const fr = (s) => s
  .replace(/ ([?!;:»])/g, ' $1')
  .replace(/« /g, '« ')
  .replace(/(\d) h\b/g, '$1 h');

export const temoignages = brut.map((t) => ({
  ...t,
  statut: fr(t.statut),
  accroche: fr(t.accroche),
  signature: fr(t.signature),
  qa: t.qa.map((x) => ({ q: fr(x.q), r: x.r.map(fr) })),
}));
