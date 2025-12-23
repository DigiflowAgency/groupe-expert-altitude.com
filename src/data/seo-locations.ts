// Villes cibles pour le SEO local (70 villes pour ~1000 pages)
export const villes = [
  // Grandes métropoles
  { slug: 'paris', name: 'Paris', region: 'Île-de-France' },
  { slug: 'lyon', name: 'Lyon', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'marseille', name: 'Marseille', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'toulouse', name: 'Toulouse', region: 'Occitanie' },
  { slug: 'nice', name: 'Nice', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'nantes', name: 'Nantes', region: 'Pays de la Loire' },
  { slug: 'montpellier', name: 'Montpellier', region: 'Occitanie' },
  { slug: 'bordeaux', name: 'Bordeaux', region: 'Nouvelle-Aquitaine' },
  { slug: 'lille', name: 'Lille', region: 'Hauts-de-France' },
  { slug: 'rennes', name: 'Rennes', region: 'Bretagne' },
  { slug: 'strasbourg', name: 'Strasbourg', region: 'Grand Est' },
  { slug: 'grenoble', name: 'Grenoble', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'toulon', name: 'Toulon', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'angers', name: 'Angers', region: 'Pays de la Loire' },
  { slug: 'nimes', name: 'Nîmes', region: 'Occitanie' },
  { slug: 'perpignan', name: 'Perpignan', region: 'Occitanie' },
  { slug: 'metz', name: 'Metz', region: 'Grand Est' },
  { slug: 'nancy', name: 'Nancy', region: 'Grand Est' },
  { slug: 'orleans', name: 'Orléans', region: 'Centre-Val de Loire' },
  { slug: 'rouen', name: 'Rouen', region: 'Normandie' },
  // Villes moyennes
  { slug: 'la-rochelle', name: 'La Rochelle', region: 'Nouvelle-Aquitaine' },
  { slug: 'caen', name: 'Caen', region: 'Normandie' },
  { slug: 'brest', name: 'Brest', region: 'Bretagne' },
  { slug: 'tours', name: 'Tours', region: 'Centre-Val de Loire' },
  { slug: 'reims', name: 'Reims', region: 'Grand Est' },
  { slug: 'amiens', name: 'Amiens', region: 'Hauts-de-France' },
  { slug: 'le-havre', name: 'Le Havre', region: 'Normandie' },
  { slug: 'le-mans', name: 'Le Mans', region: 'Pays de la Loire' },
  { slug: 'aix-en-provence', name: 'Aix-en-Provence', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'clermont-ferrand', name: 'Clermont-Ferrand', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'annecy', name: 'Annecy', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'limoges', name: 'Limoges', region: 'Nouvelle-Aquitaine' },
  { slug: 'besancon', name: 'Besançon', region: 'Bourgogne-Franche-Comté' },
  { slug: 'pau', name: 'Pau', region: 'Nouvelle-Aquitaine' },
  { slug: 'dijon', name: 'Dijon', region: 'Bourgogne-Franche-Comté' },
  // Nouvelles villes - Île-de-France
  { slug: 'boulogne-billancourt', name: 'Boulogne-Billancourt', region: 'Île-de-France' },
  { slug: 'saint-denis', name: 'Saint-Denis', region: 'Île-de-France' },
  { slug: 'montreuil', name: 'Montreuil', region: 'Île-de-France' },
  { slug: 'argenteuil', name: 'Argenteuil', region: 'Île-de-France' },
  { slug: 'versailles', name: 'Versailles', region: 'Île-de-France' },
  { slug: 'nanterre', name: 'Nanterre', region: 'Île-de-France' },
  { slug: 'creteil', name: 'Créteil', region: 'Île-de-France' },
  { slug: 'vitry-sur-seine', name: 'Vitry-sur-Seine', region: 'Île-de-France' },
  // Nouvelles villes - PACA & Côte d'Azur
  { slug: 'antibes', name: 'Antibes', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'cannes', name: 'Cannes', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'juan-les-pins', name: 'Juan-les-Pins', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'frejus', name: 'Fréjus', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'hyeres', name: 'Hyères', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'avignon', name: 'Avignon', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'salon-de-provence', name: 'Salon-de-Provence', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'arles', name: 'Arles', region: 'Provence-Alpes-Côte d\'Azur' },
  { slug: 'martigues', name: 'Martigues', region: 'Provence-Alpes-Côte d\'Azur' },
  // Nouvelles villes - Occitanie
  { slug: 'beziers', name: 'Béziers', region: 'Occitanie' },
  { slug: 'sete', name: 'Sète', region: 'Occitanie' },
  { slug: 'carcassonne', name: 'Carcassonne', region: 'Occitanie' },
  { slug: 'albi', name: 'Albi', region: 'Occitanie' },
  { slug: 'tarbes', name: 'Tarbes', region: 'Occitanie' },
  // Nouvelles villes - Auvergne-Rhône-Alpes
  { slug: 'saint-etienne', name: 'Saint-Étienne', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'villeurbanne', name: 'Villeurbanne', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'valence', name: 'Valence', region: 'Auvergne-Rhône-Alpes' },
  { slug: 'chambery', name: 'Chambéry', region: 'Auvergne-Rhône-Alpes' },
  // Nouvelles villes - Nouvelle-Aquitaine
  { slug: 'poitiers', name: 'Poitiers', region: 'Nouvelle-Aquitaine' },
  { slug: 'angouleme', name: 'Angoulême', region: 'Nouvelle-Aquitaine' },
  { slug: 'bayonne', name: 'Bayonne', region: 'Nouvelle-Aquitaine' },
  { slug: 'biarritz', name: 'Biarritz', region: 'Nouvelle-Aquitaine' },
  { slug: 'agen', name: 'Agen', region: 'Nouvelle-Aquitaine' },
  // Nouvelles villes - Autres régions
  { slug: 'dunkerque', name: 'Dunkerque', region: 'Hauts-de-France' },
  { slug: 'calais', name: 'Calais', region: 'Hauts-de-France' },
  { slug: 'saint-nazaire', name: 'Saint-Nazaire', region: 'Pays de la Loire' },
  { slug: 'lorient', name: 'Lorient', region: 'Bretagne' },
  { slug: 'quimper', name: 'Quimper', region: 'Bretagne' },
  { slug: 'saint-malo', name: 'Saint-Malo', region: 'Bretagne' },
  { slug: 'vannes', name: 'Vannes', region: 'Bretagne' },
  { slug: 'mulhouse', name: 'Mulhouse', region: 'Grand Est' },
  { slug: 'colmar', name: 'Colmar', region: 'Grand Est' },
  { slug: 'troyes', name: 'Troyes', region: 'Grand Est' },
  { slug: 'bourges', name: 'Bourges', region: 'Centre-Val de Loire' },
  { slug: 'chartres', name: 'Chartres', region: 'Centre-Val de Loire' },
];

// Services Pro avec mots-clés SEO
export const servicesPro = [
  {
    slug: 'cordiste',
    name: 'Cordiste',
    title: 'Cordiste',
    keywords: ['cordiste', 'travaux en hauteur', 'travaux sur corde'],
    description: 'Travaux en hauteur par cordistes certifiés CQP',
    parentService: 'travaux-en-hauteur',
  },
  {
    slug: 'ravalement-facade',
    name: 'Ravalement de façade',
    title: 'Ravalement de façade',
    keywords: ['ravalement façade', 'ravalement facade', 'renovation facade'],
    description: 'Ravalement et rénovation de façade avec peintures isolantes',
    parentService: 'travaux-en-hauteur',
  },
  {
    slug: 'panneaux-photovoltaiques',
    name: 'Panneaux photovoltaïques',
    title: 'Panneaux photovoltaïques',
    keywords: ['panneaux photovoltaïques', 'panneaux photovoltaiques', 'installation panneaux solaires'],
    description: 'Installation de panneaux photovoltaïques pour professionnels',
    parentService: 'photovoltaique',
  },
  {
    slug: 'etancheite-toiture',
    name: 'Étanchéité toiture',
    title: 'Étanchéité toiture',
    keywords: ['étanchéité toiture', 'etancheite toiture', 'toiture étanche'],
    description: 'Travaux d\'étanchéité de toiture pour bâtiments professionnels',
    parentService: 'travaux-en-hauteur',
  },
  {
    slug: 'couverture-toiture',
    name: 'Couverture toiture',
    title: 'Couverture toiture',
    keywords: ['couverture toiture', 'couvreur', 'toiture'],
    description: 'Travaux de couverture et réparation de toiture',
    parentService: 'travaux-en-hauteur',
  },
  {
    slug: 'zinguerie',
    name: 'Zinguerie',
    title: 'Zinguerie',
    keywords: ['zinguerie', 'zinc toiture', 'gouttière zinc'],
    description: 'Travaux de zinguerie et gouttières pour professionnels',
    parentService: 'eaux-pluviales',
  },
  {
    slug: 'gouttiere',
    name: 'Gouttière',
    title: 'Gouttière',
    keywords: ['gouttière', 'gouttiere', 'descente eaux pluviales'],
    description: 'Installation et réparation de gouttières',
    parentService: 'eaux-pluviales',
  },
  {
    slug: 'cool-roof',
    name: 'Cool Roof',
    title: 'Cool Roof',
    keywords: ['cool roof', 'toiture fraiche', 'peinture reflective'],
    description: 'Solution Cool Roof pour réduire la température de vos bâtiments',
    parentService: 'peintures-isolantes',
  },
  {
    slug: 'nettoyage-panneaux-solaires',
    name: 'Nettoyage panneaux solaires',
    title: 'Nettoyage panneaux solaires',
    keywords: ['nettoyage panneaux solaires', 'entretien photovoltaique'],
    description: 'Nettoyage et maintenance de panneaux solaires',
    parentService: 'photovoltaique',
  },
];

// Services Particuliers avec mots-clés SEO
export const servicesParticuliers = [
  {
    slug: 'panneaux-photovoltaiques',
    name: 'Panneaux photovoltaïques',
    title: 'Panneaux photovoltaïques',
    keywords: ['panneaux photovoltaïques', 'panneaux solaires', 'installation panneaux solaires'],
    description: 'Installation de panneaux solaires pour votre maison',
    parentService: 'photovoltaique',
  },
  {
    slug: 'terrasse-bois',
    name: 'Terrasse bois',
    title: 'Terrasse bois',
    keywords: ['terrasse bois', 'terrasse sur plot', 'pose terrasse'],
    description: 'Installation de terrasse bois sur plot',
    parentService: 'terrasses',
  },
  {
    slug: 'gouttiere',
    name: 'Gouttière',
    title: 'Gouttière',
    keywords: ['gouttière', 'gouttiere', 'descente eaux pluviales'],
    description: 'Installation et réparation de gouttières pour particuliers',
    parentService: 'eaux-pluviales',
  },
  {
    slug: 'ravalement-facade',
    name: 'Ravalement de façade',
    title: 'Ravalement de façade',
    keywords: ['ravalement façade', 'ravalement facade', 'peinture facade'],
    description: 'Ravalement de façade avec peintures isolantes pour particuliers',
    parentService: 'peintures-isolantes',
  },
  {
    slug: 'etancheite-toiture',
    name: 'Étanchéité toiture',
    title: 'Étanchéité toiture',
    keywords: ['étanchéité toiture', 'etancheite toiture', 'fuite toiture'],
    description: 'Travaux d\'étanchéité de toiture pour particuliers',
    parentService: 'eaux-pluviales',
  },
];

export function getVille(slug: string) {
  return villes.find(v => v.slug === slug);
}

export function getServicePro(slug: string) {
  return servicesPro.find(s => s.slug === slug);
}

export function getServiceParticulier(slug: string) {
  return servicesParticuliers.find(s => s.slug === slug);
}
