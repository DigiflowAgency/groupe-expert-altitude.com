# Groupe Expert Altitude (GEA) - Site Web V1

Site web professionnel B2B pour Groupe Expert Altitude, spécialiste des travaux en hauteur, enveloppe du bâtiment et couverture.

## 🚀 Stack Technique

- **Framework**: Next.js 14 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **SEO**: JSON-LD schemas, sitemap dynamique, meta tags optimisés
- **Blog**: Google Sheets API (à configurer)
- **Formulaire**: Placeholder (à connecter au serveur)
- **Paiements**: Placeholders Stripe, PayPal, Alma

## 📁 Structure du Projet

```
groupe-expert-altitude/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Homepage
│   │   ├── layout.tsx                  # Layout principal avec Header/Footer
│   │   ├── contact/page.tsx            # Page contact avec formulaire
│   │   ├── blog/
│   │   │   ├── page.tsx                # Index blog
│   │   │   └── [slug]/page.tsx         # Articles blog
│   │   ├── services/[slug]/page.tsx    # Pages services dynamiques
│   │   ├── seo/[ville]/page.tsx        # Pages SEO par ville
│   │   ├── mentions-legales/page.tsx   # Mentions légales
│   │   ├── sitemap.ts                  # Génération sitemap
│   │   └── robots.ts                   # Génération robots.txt
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Header sticky avec navigation
│   │   │   └── Footer.tsx              # Footer avec maillage interne
│   │   ├── sections/
│   │   │   └── Hero.tsx                # Composant Hero réutilisable
│   │   └── ui/
│   │       └── Breadcrumb.tsx          # Fil d'Ariane
│   ├── data/
│   │   ├── services.json               # Données services
│   │   └── cities.json                 # Données villes
│   ├── lib/
│   │   ├── schema.ts                   # Schémas JSON-LD SEO
│   │   └── googleSheets/
│   │       └── blog.ts                 # Intégration Google Sheets
│   └── types/
│       └── index.ts                    # Types TypeScript
├── tailwind.config.ts                  # Config Tailwind + couleurs GEA
└── README.md                           # Ce fichier
```

## 🎨 Design

### Couleurs
- **Noir GEA**: `#060D18`
- **Orange GEA**: `#FF6B00`
- **Bleu GEA**: `#007BFF`

### Animations
- `animate-float-up`: Animation flottante (altitude)
- `animate-slide-up`: Animation d'apparition verticale
- `animate-fade-in`: Fondu d'apparition

### Images
Tous les containers d'images sont des **DIV vertes** (`bg-green-300`) pour faciliter l'intégration future des vraies images.

## 🛠️ Installation

```bash
# Cloner le projet
cd groupe-expert-altitude

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📄 Pages Créées

### Pages Statiques
- ✅ **Homepage** (`/`) - Hero, À propos, Services, Actualités, Contact
- ✅ **Contact** (`/contact`) - Formulaire, carte, horaires
- ✅ **Blog** (`/blog`) - Liste des articles
- ✅ **Mentions Légales** (`/mentions-legales`)

### Pages Dynamiques
- ✅ **Services** (`/services/[slug]`) - 6 services différents
  - travaux-en-hauteur
  - enveloppe-batiment
  - couverture-toiture
  - cordistes
  - securisation
  - maintenance-technique

- ✅ **SEO Villes** (`/seo/[ville]`) - 12 villes
  - Paris, Île-de-France, Lyon, Marseille, Toulouse, Bordeaux
  - Lille, Strasbourg, Nantes, Montpellier, Nice, Rennes

- ✅ **Articles Blog** (`/blog/[slug]`) - Articles depuis Google Sheets

## 🔧 Configuration Google Sheets (Blog)

### 1. Créer le Google Sheet

Créez un Google Sheet avec les colonnes suivantes :

| id | title | slug | excerpt | content | image | publishedAt | author | category |
|----|-------|------|---------|---------|-------|-------------|--------|----------|

### 2. Activer l'API Google Sheets

1. Aller sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créer un nouveau projet
3. Activer l'API Google Sheets
4. Créer un compte de service
5. Télécharger le fichier JSON des credentials

### 3. Configurer les Variables d'Environnement

Créer un fichier `.env.local` :

```env
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

### 4. Implémenter l'Intégration

Modifier `/src/lib/googleSheets/blog.ts` pour utiliser l'API Google Sheets au lieu des données mock.

```typescript
// Installer le package
npm install google-spreadsheet

// Décommenter le code d'intégration dans blog.ts
```

## 💳 Configuration Paiements

### Stripe

```bash
npm install stripe @stripe/stripe-js
```

Ajouter dans `.env.local` :
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### PayPal

```bash
npm install @paypal/react-paypal-js
```

Ajouter dans `.env.local` :
```env
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_client_id
```

### Alma

```bash
npm install @alma/react-alma
```

Suivre la documentation d'Alma pour la configuration.

## 📧 Configuration Formulaire Contact

Le formulaire de contact est actuellement un placeholder. Pour le connecter :

1. Créer une API route dans `/src/app/api/contact/route.ts`
2. Implémenter l'envoi d'email (nodemailer, SendGrid, etc.)
3. Mettre à jour le `handleSubmit` dans `/src/app/contact/page.tsx`

Exemple avec Nodemailer :

```typescript
// /src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();

  // Configurer nodemailer
  const transporter = nodemailer.createTransport({...});

  // Envoyer l'email
  await transporter.sendMail({...});

  return NextResponse.json({ success: true });
}
```

## 🤖 Configuration Chatbot ChatGPT

Un bouton de chatbot est déjà intégré (coin bas-droit). Pour le connecter :

### Option 1: API OpenAI

```bash
npm install openai
```

Créer `/src/components/Chatbot.tsx` et gérer l'état du chat.

### Option 2: Widget tiers

Intégrer un widget comme:
- Crisp
- Intercom
- Drift
- Tidio

## 📊 SEO

### JSON-LD Schemas Implémentés
- ✅ LocalBusiness (toutes pages)
- ✅ BreadcrumbList (toutes pages)
- ✅ Service (pages services)
- ✅ Article (pages blog)
- ✅ FAQPage (prêt à utiliser)

### Meta Tags
Toutes les pages ont des meta tags optimisés :
- Title
- Description
- Keywords
- OpenGraph
- Twitter Cards

### Maillage Interne
- **Homepage**: 25+ liens internes
- **Footer**: 15+ liens internes avec sections contextuelles
- **Services**: Liens vers services connexes et villes
- **Villes**: Liens vers autres villes et services

## 🚀 Déploiement

### Build Production

```bash
npm run build
npm start
```

### Déploiement sur Infomaniak

1. Build le projet : `npm run build`
2. Uploader le dossier `.next` et les fichiers nécessaires
3. Configurer les variables d'environnement
4. Pointer le domaine vers le serveur

### Alternative : Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

## 📝 TODO après déploiement

- [ ] Remplacer tous les containers verts par de vraies images
- [ ] Configurer Google Sheets pour le blog
- [ ] Connecter le formulaire de contact au serveur
- [ ] Intégrer Stripe, PayPal, Alma
- [ ] Configurer le chatbot ChatGPT
- [ ] Ajouter Google Analytics / Matomo
- [ ] Configurer Google Search Console
- [ ] Tester tous les formulaires
- [ ] Optimiser les images (Next/Image avec des vraies images)
- [ ] Ajouter les réseaux sociaux (actuellement non intégrés)
- [ ] Configurer la newsletter

## 📞 Support

**Groupe Expert Altitude**
- Téléphone : 09 72 14 30 65
- Email : contact@groupe-expert-altitude.fr
- Adresse : 229 rue Saint-Honoré, 75001 Paris

**Développement**
- DIGIFLOW AGENCY (EJ INVEST)
- Site : https://digiflow.agency

## 📜 Licence

© 2024 Groupe Expert Altitude (GEA SAS) - Tous droits réservés
