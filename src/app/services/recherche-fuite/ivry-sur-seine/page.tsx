import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Ivry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en recherche et détection de fuites sur Ivry-sur-Seine et ses environs. Forts de plus de 15 ans ',
  keywords: 'recherche fuite ivry-sur-seine, detection fuite toiture ivry-sur-seine, recherche fuite eau ivry-sur-seine, fuite toiture ivry-sur-seine, detection infiltration ivry-sur-seine, entreprise recherche fuite ivry-sur-seine',
};

export default function RechercheFuiteIvrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Ivry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en recherche et détection de fuites sur Ivry-sur-Seine et ses environs. Forts de plus de 15 ans d&apos;expérience, nous intervenons rapidement pour localiser précisément toute source d&apos;infiltration avec des technologies de pointe.</p>

        <h2>Nos services de recherche et détection de fuites a Ivry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution complète et non destructive pour protéger votre patrimoine immobilier. Grâce à nos équipements technologiques avancés comme la caméra thermique et le détecteur acoustique, nous réalisons un diagnostic précis sans endommager vos murs ou toitures. Notre processus débute par un état des lieux technique détaillé, suivi d&apos;une analyse approfondie des zones suspectées. Nos techniciens certifiés interviennent sur l&apos;ensemble des types de fuites : toiture, canalisations, caves, terrasses, avec une efficacité garantie à 95%. Chaque intervention fait l&apos;objet d&apos;un rapport technique complet et d&apos;un devis transparent.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 techniciens experts spécialisés en recherche de fuites
- Technologies de détection non invasives
- Intervention sous 24h sur Ivry-sur-Seine et départements limitrophes
- Diagnostic précis avec rapport technique détaillé
- Plus de 500 interventions réussies par an</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 250€ et 650€ selon la complexité, avec un forfait diagnostic à partir de 180€. Nous proposons un devis gratuit et sans engagement pour évaluer précisément votre situation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration d&apos;eau dans un mur, nous utilisons une caméra thermique qui révèle les variations de température, un hygromètre pour mesurer l&apos;humidité et un détecteur acoustique pour identifier le moindre écoulement. Ces techniques permettent de localiser la source sans faire de tranchées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre ligne d&apos;astreinte au 01 XX XX XX XX, disponible 7j/7. Nous intervenons sous 2h dans les situations critiques sur Ivry-sur-Seine et communes adjacentes pour limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Ivry-sur-Seine ?
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
