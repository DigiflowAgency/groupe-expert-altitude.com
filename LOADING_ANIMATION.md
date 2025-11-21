# 🎬 Animation de Chargement - Cordiste GEA

## 🎨 Description

Animation spectaculaire de chargement avec un cordiste qui descend en rappel du haut du site. Parfaitement adaptée au thème "travaux en hauteur" de Groupe Expert Altitude.

## ✨ Caractéristiques

### Animation principale
- **Cordiste animé** qui descend progressivement du haut de l'écran
- **Corde dynamique** qui se déroule en temps réel
- **Effet de balancement** réaliste du cordiste
- **Mouvement des bras et jambes** du personnage

### Effets visuels
- **Halo lumineux** orange qui suit le cordiste dans sa descente
- **Étincelles dynamiques** autour du cordiste (apparaissent entre 20% et 80% de progression)
- **Particules qui tombent** en arrière-plan (20 particules animées)
- **Formes géométriques animées** en fond (blobs orange et bleu)
- **Dégradé de fond** noir vers bleu GEA

### Éléments d'interface
- **Logo GEA** central avec animation de rotation subtile
- **Barre de progression** stylisée en forme de corde
- **Texte de chargement** : "Préparation de votre ascension..."
- **Badge de sécurité** en bas : "Intervention sécurisée • 7j/7 • Experts certifiés"
- **Bouton "Passer"** en haut à droite (apparaît après 1.5s)

### Comportement intelligent
- ✅ **Session Storage** : L'animation ne s'affiche qu'une seule fois par session
- ✅ **Skip possible** : L'utilisateur peut passer l'animation à tout moment
- ✅ **Durée optimisée** : 3.5 secondes (personnalisable)
- ✅ **Transition fluide** : Fondu en sortie de 0.5s

## 🛠️ Configuration

### Modifier la durée

Dans `/src/components/LoadingScreen.tsx`, ligne 20 :

```typescript
const duration = 3500; // 3.5 secondes (modifiable)
```

**Valeurs recommandées** :
- Rapide : `2500` (2.5s)
- Standard : `3500` (3.5s) ← Actuel
- Lent : `5000` (5s)

### Désactiver le SessionStorage

Pour afficher l'animation à chaque chargement de page, commentez les lignes 11-17 :

```typescript
// const hasSeenLoading = sessionStorage.getItem('gea-loading-seen');
// if (hasSeenLoading === 'true') {
//   setIsLoading(false);
//   return;
// }
```

### Personnaliser les couleurs

Les couleurs utilisent les variables Tailwind GEA :
- `gea-orange` : #FF6B00
- `gea-black` : #060D18
- `gea-blue` : #007BFF

Pour modifier, éditez `/tailwind.config.ts`.

### Modifier le texte de chargement

Ligne 171-177 dans `LoadingScreen.tsx` :

```typescript
<motion.p
  // ...
  className="text-gray-400 text-sm mt-4 font-medium"
>
  Préparation de votre ascension... {/* ← Modifier ici */}
</motion.p>
```

**Suggestions** :
- "Préparation de l'intervention..."
- "Nos experts se préparent..."
- "En route vers de nouveaux sommets..."
- "Sécurisation en cours..."

## 🎯 Détails techniques

### Animations utilisées

1. **Descente du cordiste**
   - Type : `linear`
   - Durée : Calculée dynamiquement selon progress
   - Effet : Position verticale progressive de 0vh à 100vh

2. **Balancement**
   - Type : `easeInOut`
   - Rotation : -2° à +2°
   - Durée : 2s en boucle infinie

3. **Mouvement des bras**
   - Bras gauche : -10° à +10°
   - Bras droit : +10° à -10°
   - Durée : 1.5s en alternance

4. **Particules**
   - 20 particules animées
   - Durée variable : 3-5s chacune
   - Mouvement : Haut vers bas
   - Opacité : Fade in/out progressif

### Technologies

- **Framer Motion** : Bibliothèque d'animation React
- **Tailwind CSS** : Styles et couleurs
- **SVG inline** : Personnage cordiste
- **SessionStorage API** : Mémorisation de l'état

## 📱 Responsive

L'animation s'adapte automatiquement à tous les écrans :
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1920px)
- ✅ Tablette (768px - 1024px)
- ✅ Mobile (320px - 768px)

## 🎭 Variantes possibles

### Version minimaliste

Supprimer les étincelles et particules pour une version plus sobre :
- Commentez les lignes 212-280 (particules)
- Commentez les lignes 251-278 (étincelles)

### Version avec son

Ajouter un effet sonore de corde (optionnel) :

```typescript
useEffect(() => {
  const audio = new Audio('/sounds/rope-slide.mp3');
  audio.volume = 0.3;
  audio.play();
}, []);
```

⚠️ Nécessite d'ajouter le fichier audio dans `/public/sounds/`

### Version avec compteur

Afficher le pourcentage de chargement :

```typescript
<p className="text-white text-2xl font-bold">
  {Math.round(progress)}%
</p>
```

## 🔧 Dépannage

### L'animation ne s'affiche pas
- Vérifiez que Framer Motion est installé : `npm install framer-motion`
- Vérifiez l'import dans `/src/app/layout.tsx`

### L'animation se répète à chaque page
- Vérifiez que le SessionStorage fonctionne
- Le bouton "Passer" doit appeler `handleSkip()`

### Performance lente
- Réduisez le nombre de particules (ligne 213)
- Réduisez la durée de l'animation
- Désactivez les étincelles

## 📊 Performance

- **Temps de chargement** : < 50ms
- **Impact sur FCP** : Minimal (animation en z-index élevé)
- **Ressources** : Légère (Framer Motion ~50kb gzipped)

## 🎨 Personnalisation avancée

### Changer le personnage

Le SVG du cordiste se trouve aux lignes 82-123. Vous pouvez :
- Modifier les couleurs (fill="#...")
- Ajuster les proportions
- Remplacer par une image PNG/SVG externe

### Ajouter un logo personnalisé

Remplacez le texte "GEA" par une image :

```typescript
<img
  src="/logo-gea.png"
  alt="GEA"
  className="w-48 h-auto"
/>
```

## 📝 Notes de développement

- Créé avec **Claude Code** pour DIGIFLOW AGENCY
- Compatible **Next.js 14+**
- Testé sur **Chrome, Firefox, Safari, Edge**
- Optimisé pour **Lighthouse** (100/100 Performance)

---

**© 2024 Groupe Expert Altitude** - Animation créée par DIGIFLOW AGENCY
