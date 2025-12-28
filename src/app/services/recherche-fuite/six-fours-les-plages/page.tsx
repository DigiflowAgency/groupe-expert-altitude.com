import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Six-Fours-les-Plages | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Six-Fours-les-Plages et ses environs. Nos expe',
  keywords: 'recherche fuite six-fours-les-plages, detection fuite toiture six-fours-les-plages, recherche fuite eau six-fours-les-plages, fuite toiture six-fours-les-plages, detection infiltration six-fours-les-plages, entreprise recherche fuite six-fours-les-plages',
};

export default function RechercheFuiteSixFoursLesPlagesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Six-Fours-les-Plages</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Six-Fours-les-Plages et ses environs. Nos experts interviennent rapidement pour localiser précisément vos problèmes d&apos;infiltration avec une technologie de pointe.</p>

        <h2>Nos services de recherche et détection de fuites a Six-Fours-les-Plages</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution complète et non destructive pour identifier rapidement les sources d&apos;infiltration d&apos;eau dans votre habitat. Grâce à des équipements de haute technologie comme la caméra thermique et le détecteur électronique, nous réalisons un diagnostic précis sans endommager vos murs ou toitures. Notre méthode garantit une intervention ciblée et économique, limitant les travaux et les coûts associés. Nos techniciens hautement qualifiés analysent chaque situation avec une expertise reconnue sur Six-Fours-les-Plages, en traitant aussi bien les fuites de toiture que les infiltrations souterraines ou les problèmes de canalisations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans, 2) Un diagnostic rapide sous 24h, 3) Un matériel technologique dernier cri, 4) Une intervention non destructive certifiée. Nous intervenons sur toute la métropole varoise avec un taux de réussite de 95% dans la localisation des fuites.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 750€ selon la complexité, avec un diagnostic précis inclus. Nous proposons systématiquement un devis gratuit et détaillé avant toute intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration d&apos;eau, observez les signes comme les traces d&apos;humidité, les moisissures, les déformations de peinture ou les auréoles. Utilisez un détecteur d&apos;humidité ou contactez un professionnel pour un diagnostic précis et non invasif.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre ligne d&apos;astreinte au 06 XX XX XX XX. Nous intervenons 7j/7 sur Six-Fours-les-Plages et ses alentours pour tout problème de fuite nécessitant une action immédiate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Six-Fours-les-Plages ?
          Demandez votre devis gratuit.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Demander un devis gratuit
        </a>
      </section>
    </main>
  );
}
