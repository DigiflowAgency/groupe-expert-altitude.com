import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com - Traitement et démoussage toiture dans toutes nos zones d\'intervention. Devis gratuit.',
};

export default function TraitementToiturePage() {
  const cities = [
  {
    "name": "Paris",
    "slug": "paris"
  },
  {
    "name": "Paris 1er",
    "slug": "paris-1er"
  },
  {
    "name": "Paris 2e",
    "slug": "paris-2e"
  },
  {
    "name": "Paris 3e",
    "slug": "paris-3e"
  },
  {
    "name": "Paris 4e",
    "slug": "paris-4e"
  },
  {
    "name": "Paris 5e",
    "slug": "paris-5e"
  },
  {
    "name": "Paris 6e",
    "slug": "paris-6e"
  },
  {
    "name": "Paris 7e",
    "slug": "paris-7e"
  },
  {
    "name": "Paris 8e",
    "slug": "paris-8e"
  },
  {
    "name": "Paris 9e",
    "slug": "paris-9e"
  },
  {
    "name": "Boulogne-Billancourt",
    "slug": "boulogne-billancourt"
  },
  {
    "name": "Neuilly-sur-Seine",
    "slug": "neuilly-sur-seine"
  },
  {
    "name": "Issy-les-Moulineaux",
    "slug": "issy-les-moulineaux"
  },
  {
    "name": "Courbevoie",
    "slug": "courbevoie"
  },
  {
    "name": "Nanterre",
    "slug": "nanterre"
  },
  {
    "name": "Puteaux",
    "slug": "puteaux"
  },
  {
    "name": "Levallois-Perret",
    "slug": "levallois-perret"
  },
  {
    "name": "Clichy",
    "slug": "clichy"
  },
  {
    "name": "Asnières-sur-Seine",
    "slug": "asnieres-sur-seine"
  },
  {
    "name": "Colombes",
    "slug": "colombes"
  },
  {
    "name": "Saint-Denis",
    "slug": "saint-denis"
  },
  {
    "name": "Montreuil",
    "slug": "montreuil"
  },
  {
    "name": "Aubervilliers",
    "slug": "aubervilliers"
  },
  {
    "name": "Aulnay-sous-Bois",
    "slug": "aulnay-sous-bois"
  },
  {
    "name": "Drancy",
    "slug": "drancy"
  },
  {
    "name": "Noisy-le-Grand",
    "slug": "noisy-le-grand"
  },
  {
    "name": "Pantin",
    "slug": "pantin"
  },
  {
    "name": "Bondy",
    "slug": "bondy"
  },
  {
    "name": "Le Blanc-Mesnil",
    "slug": "le-blanc-mesnil"
  },
  {
    "name": "Épinay-sur-Seine",
    "slug": "epinay-sur-seine"
  },
  {
    "name": "Créteil",
    "slug": "creteil"
  },
  {
    "name": "Vitry-sur-Seine",
    "slug": "vitry-sur-seine"
  },
  {
    "name": "Champigny-sur-Marne",
    "slug": "champigny-sur-marne"
  },
  {
    "name": "Saint-Maur-des-Fossés",
    "slug": "saint-maur-des-fosses"
  },
  {
    "name": "Ivry-sur-Seine",
    "slug": "ivry-sur-seine"
  },
  {
    "name": "Maisons-Alfort",
    "slug": "maisons-alfort"
  },
  {
    "name": "Vincennes",
    "slug": "vincennes"
  },
  {
    "name": "Fontenay-sous-Bois",
    "slug": "fontenay-sous-bois"
  },
  {
    "name": "Villejuif",
    "slug": "villejuif"
  },
  {
    "name": "L'Haÿ-les-Roses",
    "slug": "l-hay-les-roses"
  },
  {
    "name": "Lyon",
    "slug": "lyon"
  },
  {
    "name": "Villeurbanne",
    "slug": "villeurbanne"
  },
  {
    "name": "Vénissieux",
    "slug": "venissieux"
  },
  {
    "name": "Caluire-et-Cuire",
    "slug": "caluire-et-cuire"
  },
  {
    "name": "Bron",
    "slug": "bron"
  },
  {
    "name": "Meyzieu",
    "slug": "meyzieu"
  },
  {
    "name": "Rillieux-la-Pape",
    "slug": "rillieux-la-pape"
  },
  {
    "name": "Décines-Charpieu",
    "slug": "decines-charpieu"
  },
  {
    "name": "Écully",
    "slug": "ecully"
  },
  {
    "name": "Tassin-la-Demi-Lune",
    "slug": "tassin-la-demi-lune"
  },
  {
    "name": "Marseille",
    "slug": "marseille"
  },
  {
    "name": "Aix-en-Provence",
    "slug": "aix-en-provence"
  },
  {
    "name": "Martigues",
    "slug": "martigues"
  },
  {
    "name": "Aubagne",
    "slug": "aubagne"
  },
  {
    "name": "Salon-de-Provence",
    "slug": "salon-de-provence"
  },
  {
    "name": "Istres",
    "slug": "istres"
  },
  {
    "name": "Marignane",
    "slug": "marignane"
  },
  {
    "name": "Vitrolles",
    "slug": "vitrolles"
  },
  {
    "name": "Arles",
    "slug": "arles"
  },
  {
    "name": "La Ciotat",
    "slug": "la-ciotat"
  },
  {
    "name": "Nice",
    "slug": "nice"
  },
  {
    "name": "Cannes",
    "slug": "cannes"
  },
  {
    "name": "Antibes",
    "slug": "antibes"
  },
  {
    "name": "Grasse",
    "slug": "grasse"
  },
  {
    "name": "Cagnes-sur-Mer",
    "slug": "cagnes-sur-mer"
  },
  {
    "name": "Le Cannet",
    "slug": "le-cannet"
  },
  {
    "name": "Fréjus",
    "slug": "frejus"
  },
  {
    "name": "Menton",
    "slug": "menton"
  },
  {
    "name": "Vallauris",
    "slug": "vallauris"
  },
  {
    "name": "Mandelieu-la-Napoule",
    "slug": "mandelieu-la-napoule"
  },
  {
    "name": "Toulon",
    "slug": "toulon"
  },
  {
    "name": "La Seyne-sur-Mer",
    "slug": "la-seyne-sur-mer"
  },
  {
    "name": "Hyères",
    "slug": "hyeres"
  },
  {
    "name": "Fréjus",
    "slug": "frejus"
  },
  {
    "name": "Draguignan",
    "slug": "draguignan"
  },
  {
    "name": "Six-Fours-les-Plages",
    "slug": "six-fours-les-plages"
  },
  {
    "name": "Saint-Raphaël",
    "slug": "saint-raphael"
  },
  {
    "name": "La Garde",
    "slug": "la-garde"
  },
  {
    "name": "Sanary-sur-Mer",
    "slug": "sanary-sur-mer"
  },
  {
    "name": "Ollioules",
    "slug": "ollioules"
  },
  {
    "name": "Toulouse",
    "slug": "toulouse"
  },
  {
    "name": "Colomiers",
    "slug": "colomiers"
  },
  {
    "name": "Tournefeuille",
    "slug": "tournefeuille"
  },
  {
    "name": "Muret",
    "slug": "muret"
  },
  {
    "name": "Blagnac",
    "slug": "blagnac"
  },
  {
    "name": "Plaisance-du-Touch",
    "slug": "plaisance-du-touch"
  },
  {
    "name": "Balma",
    "slug": "balma"
  },
  {
    "name": "Cugnaux",
    "slug": "cugnaux"
  },
  {
    "name": "L'Union",
    "slug": "l-union"
  },
  {
    "name": "Ramonville-Saint-Agne",
    "slug": "ramonville-saint-agne"
  },
  {
    "name": "Bordeaux",
    "slug": "bordeaux"
  },
  {
    "name": "Mérignac",
    "slug": "merignac"
  },
  {
    "name": "Pessac",
    "slug": "pessac"
  },
  {
    "name": "Talence",
    "slug": "talence"
  },
  {
    "name": "Villenave-d'Ornon",
    "slug": "villenave-d-ornon"
  },
  {
    "name": "Bègles",
    "slug": "begles"
  },
  {
    "name": "La Teste-de-Buch",
    "slug": "la-teste-de-buch"
  },
  {
    "name": "Gradignan",
    "slug": "gradignan"
  },
  {
    "name": "Cenon",
    "slug": "cenon"
  },
  {
    "name": "Lormont",
    "slug": "lormont"
  },
  {
    "name": "Nantes",
    "slug": "nantes"
  },
  {
    "name": "Saint-Nazaire",
    "slug": "saint-nazaire"
  },
  {
    "name": "Saint-Herblain",
    "slug": "saint-herblain"
  },
  {
    "name": "Rezé",
    "slug": "reze"
  },
  {
    "name": "Saint-Sébastien-sur-Loire",
    "slug": "saint-sebastien-sur-loire"
  },
  {
    "name": "Orvault",
    "slug": "orvault"
  },
  {
    "name": "Couëron",
    "slug": "coueron"
  },
  {
    "name": "Carquefou",
    "slug": "carquefou"
  },
  {
    "name": "Bouguenais",
    "slug": "bouguenais"
  },
  {
    "name": "La Chapelle-sur-Erdre",
    "slug": "la-chapelle-sur-erdre"
  }
];

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture</h1>

      <section className="prose max-w-none mb-8">
        <p>
          Groupe Expert Altitude Com propose ses services de traitement et démoussage toiture dans de nombreuses villes.
          Selectionnez votre ville pour plus d&apos;informations.
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/services/traitement-toiture/${city.slug}`}
            className="p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
          >
            {city.name}
          </Link>
        ))}
      </section>
    </main>
  );
}
