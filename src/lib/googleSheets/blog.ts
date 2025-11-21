// Google Sheets API Integration for Blog
// Documentation: https://developers.google.com/sheets/api/quickstart/nodejs

import { BlogPost } from '@/types';

/*
 * CONFIGURATION GOOGLE SHEETS
 *
 * 1. Créer un Google Sheet avec les colonnes suivantes:
 *    - id (unique)
 *    - title (titre de l'article)
 *    - slug (URL-friendly, ex: "renovation-toiture-paris")
 *    - excerpt (résumé court)
 *    - content (contenu complet)
 *    - image (URL de l'image)
 *    - publishedAt (date au format ISO: 2024-01-15)
 *    - author (nom de l'auteur)
 *    - category (catégorie: travaux, actualites, conseils, etc.)
 *
 * 2. Activer l'API Google Sheets dans Google Cloud Console
 * 3. Créer un compte de service et télécharger les credentials
 * 4. Partager le Google Sheet avec l'email du compte de service
 * 5. Ajouter les variables d'environnement:
 *    - GOOGLE_SHEETS_SPREADSHEET_ID=...
 *    - GOOGLE_SERVICE_ACCOUNT_EMAIL=...
 *    - GOOGLE_PRIVATE_KEY=...
 */

// Mock data pour développement - Mode DEMO
const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Maintenance de toiture industrielle : les bonnes pratiques',
    slug: 'maintenance-toiture-industrielle',
    excerpt: 'Découvrez les meilleures pratiques pour entretenir votre toiture industrielle et éviter les coûts de réparation élevés.',
    content: `La maintenance préventive de votre toiture industrielle est essentielle pour garantir la durabilité de votre bâtiment et éviter des réparations coûteuses.

## Pourquoi la maintenance est-elle importante ?

Les toitures industrielles sont soumises à des conditions difficiles : intempéries, variations de température, accumulation de débris. Une maintenance régulière permet de détecter les problèmes avant leur aggravation, prolonger la durée de vie de votre toiture, maintenir une étanchéité optimale et éviter les interruptions coûteuses de votre activité.

## Fréquence recommandée

Nous recommandons une inspection bi-annuelle de votre toiture, idéalement au printemps et en automne. Ces inspections permettent de vérifier état général, étanchéité, et de nettoyer les évacuations pour garantir une évacuation optimale des eaux pluviales.

## Les points de contrôle essentiels

Lors de nos inspections, nos experts vérifient systématiquement les points critiques : membrane étanche, joints de dilatation, évacuations, points singuliers et fixations. Cette approche méthodique permet de détecter 95% des problèmes avant leur apparition.

Pour plus informations, contactez-nous au 09 72 14 30 65.`,
    image: '',
    publishedAt: '2024-01-15',
    author: 'Équipe Technique GEA',
    category: 'Conseils',
  },
  {
    id: '2',
    title: 'Travaux en hauteur : les normes de sécurité 2024',
    slug: 'normes-securite-travaux-hauteur-2024',
    excerpt: 'Panorama complet des nouvelles réglementations en matière de sécurité pour les travaux en hauteur en 2024.',
    content: `La sécurité lors des travaux en hauteur est notre priorité absolue. Découvrez les normes en vigueur en 2024 et comment Groupe Expert Altitude les applique rigoureusement.

## Obligations réglementaires renforcées

Tout travailleur intervenant en hauteur doit désormais être formé aux techniques spécifiques de travail en hauteur, utiliser exclusivement des EPI certifiés et à jour, suivre un contrôle médical adapté annuel et respecter les procédures de sécurité propres à chaque chantier.

## Équipements obligatoires certifiés

Nos cordistes professionnels disposent systématiquement de harnais antichute conformes à la norme EN 361, longes et absorbeurs énergie EN 355, casques de protection EN 397, cordes semi-statiques certifiées EN 1891 et systèmes antichute mobiles EN 353.

## Formation continue et certifications

Tous nos intervenants suivent une formation continue obligatoire et sont certifiés CQP Cordiste. Nous investissons dans la formation pour garantir les plus hauts standards de sécurité.

Notre équipe respecte scrupuleusement ces normes pour garantir votre sécurité et celle de vos installations.`,
    image: '',
    publishedAt: '2024-01-10',
    author: 'Service Sécurité GEA',
    category: 'Actualités',
  },
  {
    id: '3',
    title: 'Rénovation de façade à Paris : les étapes clés',
    slug: 'renovation-facade-paris-etapes',
    excerpt: 'Guide complet pour réussir votre projet de rénovation de façade à Paris avec nos cordistes professionnels.',
    content: `La rénovation de façade est un projet majeur qui nécessite une préparation minutieuse et une expertise technique pointue. Voici notre méthodologie éprouvée.

## 1. Diagnostic initial approfondi

Avant tout travail, un diagnostic complet de la façade est indispensable. Nos experts réalisent une inspection visuelle détaillée, une détection des fissures par thermographie, une vérification complète de étanchéité, une analyse des matériaux et de leur état et un relevé photographique exhaustif.

## 2. Choix des techniques adaptées

Selon état de votre façade et vos contraintes, plusieurs techniques peuvent être employées. Le ravalement traditionnel pour une rénovation complète, le nettoyage haute pression ou aérogommage pour un nettoyage en douceur, le traitement hydrofuge pour une protection durable, la réparation des fissures par injection ou pontage et le remplacement des joints si nécessaire.

## 3. Intervention par cordistes certifiés

Nos cordistes professionnels interviennent sans échafaudage lourd, ce qui permet une réduction significative des coûts (jusqu'à 40%), moins de nuisances pour les occupants et riverains, un accès facilité aux zones les plus difficiles, une rapidité intervention supérieure et aucune occupation de la voie publique.

## 4. Contrôle qualité et garantie

Chaque chantier fait objet un contrôle qualité rigoureux et nous garantissons nos interventions selon les normes en vigueur.

Contactez-nous pour un devis gratuit et personnalisé : 09 72 14 30 65`,
    image: '',
    publishedAt: '2024-01-05',
    author: 'Direction Technique GEA',
    category: 'Travaux',
  },
  {
    id: '4',
    title: 'Entretien des bâtiments industriels : un enjeu stratégique',
    slug: 'entretien-batiments-industriels',
    excerpt: 'Pourquoi la maintenance régulière de vos bâtiments industriels est un investissement rentable sur le long terme.',
    content: `La maintenance des bâtiments industriels ne doit pas être considérée comme une dépense mais comme un investissement stratégique pour la pérennité de votre activité.

## Les enjeux de la maintenance industrielle

Un bâtiment industriel mal entretenu présente des risques multiples. Arrêts de production coûteux en cas de défaillance, détérioration accélérée des installations, risques pour la sécurité du personnel, non-conformité réglementaire et perte de valeur patrimoniale.

## Notre approche préventive

Groupe Expert Altitude propose des contrats de maintenance sur mesure incluant des inspections programmées régulières, interventions préventives ciblées, rapports détaillés après chaque visite, disponibilité pour interventions urgence 7j/7 et conseils pour optimiser la durée de vie de vos installations.

## ROI de la maintenance préventive

Nos clients constatent en moyenne une réduction de 60% des coûts de réparation grâce à la détection précoce, une augmentation de 30% de la durée de vie des équipements, zéro interruption non planifiée de activité et une conformité réglementaire garantie.

## Zones critiques à surveiller

Pour les entrepôts et bâtiments industriels, nous surveillons particulièrement la toiture et étanchéité, les systèmes évacuation des eaux, les façades et bardages, les ouvertures et portails et les systèmes de sécurité incendie.

Contactez notre service commercial pour établir un programme de maintenance adapté à vos besoins : 09 72 14 30 65`,
    image: '',
    publishedAt: '2023-12-20',
    author: 'Service Commercial GEA',
    category: 'Conseils',
  },
  {
    id: '5',
    title: 'Cordistes vs Nacelle : quelle solution choisir ?',
    slug: 'cordistes-vs-nacelle-comparaison',
    excerpt: 'Analyse comparative des avantages et inconvénients entre intervention par cordistes et utilisation de nacelles.',
    content: `Le choix entre intervention par cordistes ou utilisation de nacelles dépend de nombreux facteurs. Voici notre analyse pour vous aider à faire le bon choix.

## Avantages des cordistes professionnels

Les cordistes offrent une flexibilité incomparable. Accès à toutes les zones même les plus difficiles, pas besoin de voie accès pour engins lourds, intervention rapide sans préparation lourde, coûts réduits de 30 à 50% par rapport aux nacelles, aucune occupation de espace public et impact environnemental minimal.

## Quand privilégier la nacelle ?

Les nacelles sont plus adaptées pour les travaux de longue durée sur une même zone, le transport de matériaux lourds, les interventions nécessitant une plateforme stable et les chantiers avec accès facile et espace disponible.

## Nos recommandations par type de travaux

Pour le nettoyage de façades, privilégiez les cordistes. Pour les réparations ponctuelles, optez pour les cordistes. Pour inspection et diagnostic, les cordistes sont idéaux. Pour ravalement complet grande surface, étudiez les deux options. Pour pose éléments lourds, la nacelle peut être nécessaire.

## Sécurité : même niveau exigence

Que ce soit en cordiste ou en nacelle, Groupe Expert Altitude applique les mêmes standards de sécurité maximale. Nos cordistes sont tous certifiés CQP et bénéficient une formation continue.

## Gain de temps significatif

Sur un chantier typique de nettoyage de façade, nos cordistes interviennent 2 à 3 fois plus rapidement que avec une nacelle, grâce à leur mobilité et absence de contraintes logistiques.

Pour déterminer la solution optimale pour votre projet, contactez nos experts : 09 72 14 30 65`,
    image: '',
    publishedAt: '2023-12-15',
    author: 'Équipe Technique GEA',
    category: 'Conseils',
  },
  {
    id: '6',
    title: 'Étanchéité de toiture : détecter les fuites avant les dégâts',
    slug: 'etancheite-toiture-detection-fuites',
    excerpt: 'Les techniques modernes de détection des fuites pour protéger vos bâtiments des infiltrations.',
    content: `Les infiltrations eau sont ennemi numéro un des toitures industrielles. Détectées trop tard, elles peuvent causer des dégâts considérables. Voici comment les anticiper.

## Les signes avant-coureurs

Plusieurs indices doivent vous alerter sur une possible défaillance étanchéité. Traces humidité ou auréoles au plafond, moisissures ou odeurs caractéristiques, dégradation des revêtements intérieurs, flaques eau stagnante sur toiture plate et végétation anormale sur la couverture.

## Nos techniques de détection avancées

Groupe Expert Altitude utilise des technologies de pointe pour localiser précisément les défauts. Thermographie infrarouge pour cartographie des zones humides, gaz traceur pour fuites invisibles, inspection par drone pour toitures grande surface, test étanchéité à eau sous pression et caméra endoscopique pour les réseaux évacuation.

## Intervention rapide pour limiter les dégâts

Une fois la fuite localisée, nos cordistes interviennent rapidement pour une réparation durable. Colmatage immédiat en urgence, réfection complète de la zone défaillante, traitement préventif des zones à risque et garantie décennale sur tous nos travaux.

## Prévention : la meilleure solution

Plutôt que attendre apparition une fuite, nous recommandons des inspections régulières programmées. Un contrôle bi-annuel permet de détecter 90% des problèmes avant infiltration.

## Coût une fuite non détectée

Les études montrent qu une fuite non traitée peut générer des coûts 10 fois supérieurs au prix une réparation préventive. Sans compter les pertes exploitation et les risques pour activité.

Ne prenez pas de risques avec étanchéité de vos toitures. Contactez-nous pour un diagnostic gratuit : 09 72 14 30 65`,
    image: '',
    publishedAt: '2023-12-10',
    author: 'Service Technique GEA',
    category: 'Travaux',
  },
];

/**
 * Récupère tous les articles du blog depuis Google Sheets
 * En mode développement, retourne des données mock
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // TODO: Implémenter la récupération depuis Google Sheets
  // const { GoogleSpreadsheet } = require('google-spreadsheet');
  // const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SPREADSHEET_ID);
  // await doc.useServiceAccountAuth({...});
  // await doc.loadInfo();
  // const sheet = doc.sheetsByIndex[0];
  // const rows = await sheet.getRows();
  // return rows.map(row => ({ id: row.id, title: row.title, ... }));

  // Mode développement : retourner les données mock
  return mockBlogPosts;
}

/**
 * Récupère un article spécifique par son slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}

/**
 * Récupère les N derniers articles
 */
export async function getRecentBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

/**
 * Récupère les articles d'une catégorie spécifique
 */
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
}
