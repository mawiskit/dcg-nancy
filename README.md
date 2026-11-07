# DCG Nancy – site de recrutement

Site Astro (HTML sémantique, CSS personnalisé, JavaScript natif) pour la formation DCG du lycée Georges-de-la-Tour, à Nancy.

Phase 1 : page d'accueil uniquement. Les pages intérieures sont à développer ; en attendant, leurs liens affichent la page « Cette page arrive bientôt » (`src/pages/404.astro`).

## Lancer en local

    npm install
    npm run dev        # http://localhost:4321
    npm run build      # génère dist/

## Polices

Déposer les fichiers `.woff2` dans `public/fonts/` (noms indiqués dans `public/fonts/LISEZMOI.txt`). Sans eux, des polices système de repli s'affichent.

## Déploiement sur GitHub Pages avec le nom de domaine

Le site est configuré pour **https://dcg-nancy.fr** (fichier `public/CNAME` et workflow `.github/workflows/deploy.yml`).

1. Réserver `dcg-nancy.fr` chez Infomaniak.
2. Créer le dépôt GitHub (public) et y déposer le contenu de ce dossier (branche `main`).
3. Settings > Pages > Source : **GitHub Actions**.
4. Chez Infomaniak, zone DNS du domaine : quatre enregistrements **A** vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, et un **CNAME** `www` vers `VOTRE-COMPTE.github.io`. Ne pas supprimer les enregistrements MX et TXT (messagerie). Vérifier ces adresses dans la documentation GitHub Pages.
5. Settings > Pages > Custom domain : saisir `dcg-nancy.fr`, enregistrer, puis cocher **Enforce HTTPS** quand c'est possible.
6. Onglet Actions > Déploiement GitHub Pages > Run workflow.

Variables facultatives (Settings > Secrets and variables > Actions > Variables) : `PUBLIC_GA_ID`, `PUBLIC_FORM_ENDPOINT`, `PUBLIC_GSC_TOKEN`, `CUSTOM_DOMAIN` (autre domaine), `NOINDEX` = `true` (garder le site hors de Google).

## Formulaire de contact

Le site étant statique, l'envoi passe par un service de formulaires. Solution simple et gratuite : Formspree.
1. Créer un compte sur formspree.io, puis un formulaire (adresse qui recevra les messages).
2. Copier l'adresse d'envoi (ex. `https://formspree.io/f/xxxxxxxx`) dans la variable `PUBLIC_FORM_ENDPOINT` (GitHub : Settings > Secrets and variables > Actions > Variables).
3. Relancer le déploiement. Tant que la variable est vide, le formulaire s'affiche mais indique qu'il n'est pas relié.

Le formulaire s'ouvre en fenêtre depuis le lien « Contact » du bas de l'accueil, et existe aussi sur la page `/contact/`.

## Pages légales

`/mentions-legales/` et `/confidentialite/` sont rédigées avec les informations connues (éditrice, hébergeur GitHub, domaine Infomaniak, formulaire, GA4). À relire et adapter : durée de conservation des messages (12 mois proposés), prestataire de formulaire, adresse de contact éventuelle.

## Référencement (SEO)

Inclus sur l'accueil : titre et description centrés sur « formation DCG comptabilité et gestion Nancy », h1 visible dans le bandeau sous l'en-tête, balises Open Graph, canonical, données structurées schema.org (EducationalOrganization, Course, WebSite), plan du site (`/sitemap-index.xml`) et `robots.txt`.

Après la mise en ligne :
1. Créer la propriété du site dans Google Search Console ; si Google propose la balise HTML de vérification, copier son contenu dans la variable `PUBLIC_GSC_TOKEN` (même méthode que `PUBLIC_GA_ID`).
2. Y envoyer le plan du site et demander l'indexation de l'accueil.
3. Créer une fiche Google Business Profile pour la formation (levier majeur pour la recherche « Nancy »).
4. Développer les pages intérieures avec du vrai contenu (programme du DCG, débouchés, admissions) : c'est ce qui fera monter le référencement, une page d'accueil compacte ne suffit pas seule.

## À prévoir avant la mise en ligne publique

Mentions légales (éditrice du site), politique de confidentialité et formulaire de contact.
