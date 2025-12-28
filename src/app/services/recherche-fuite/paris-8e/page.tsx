import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Paris 8e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la résolution des fuites sur Paris 8e et ses environs. Spécialisés dans l',
  keywords: 'recherche fuite paris 8e, detection fuite toiture paris 8e, recherche fuite eau paris 8e, fuite toiture paris 8e, detection infiltration paris 8e, entreprise recherche fuite paris 8e',
};

export default function RechercheFuiteParis8ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Paris 8e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la résolution des fuites sur Paris 8e et ses environs. Spécialisés dans la recherche précise de fuites, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Paris 8e</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique de pointe pour identifier précisément l&apos;origine des infiltrations d&apos;eau. Nos techniciens hautement qualifiés utilisent des équipements de détection non destructifs comme la thermographie infrarouge et l&apos;acoustique professionnelle, permettant de localiser avec une précision de 95% la source exacte des fuites. Nous intervenons sur tous types de structures : toitures, murs, canalisations, caves et terrasses, en garantissant une intervention minimale et un diagnostic rapide. Notre méthode permet de réduire jusqu&apos;à 60% les coûts de réparation traditionnels en ciblant directement le point d&apos;infiltration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique : notre équipe possède plus de 15 ans d&apos;expérience, un agrément professionnel, un matériel de détection dernier cri et une intervention garantie sous 24h. Nous proposons un diagnostic précis, un devis transparent et une intervention sur mesure adaptée à chaque situation spécifique sur Paris 8e.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un diagnostic précis inclus. Notre tarification transparente comprend le déplacement, les tests techniques et un rapport détaillé sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nos experts utilisent la thermographie infrarouge qui révèle les variations de température, l&apos;humidimètre professionnel et l&apos;analyse acoustique. Ces techniques permettent d&apos;identifier précisément la zone d&apos;infiltration sans démolir les surfaces.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur Paris 8e, contactez directement notre ligne d&apos;astreinte au 01 XX XX XX XX, disponible 7j/7 et 24h/24. Notre équipe intervient rapidement pour limiter les dégâts et sécuriser votre espace.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Paris 8e ?
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
