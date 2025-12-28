import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Levallois-Perret | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Levallois-Perret, offre des solutions acrobatiques professionnelles pour tou',
  keywords: 'cordiste levallois-perret, travaux sur corde levallois-perret, travaux acrobatiques levallois-perret, cordiste batiment levallois-perret, intervention cordiste levallois-perret, entreprise cordiste levallois-perret',
};

export default function CordisteLevalloisPerretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Levallois-Perret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Levallois-Perret, offre des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes experts interviennent rapidement et en toute sécurité sur l&apos;ensemble de la région parisienne.</p>

        <h2>Nos services de travaux sur corde - cordistes a Levallois-Perret</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions complexes en milieux verticaux et difficiles d&apos;accès. Nos cordistes hautement qualifiés utilisent des techniques d&apos;escalade professionnelle permettant des interventions précises et sécurisées, que ce soit pour la rénovation de façades, le nettoyage de vitres, la maintenance industrielle ou des travaux de réparation à Levallois-Perret et ses environs. Notre équipe maîtrise parfaitement les normes de sécurité AFPS et dispose d&apos;un équipement technique dernier cri, garantissant des prestations de qualité supérieure. Chaque intervention fait l&apos;objet d&apos;une étude préalable précise pour optimiser l&apos;efficacité et minimiser les risques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique, notre engagement sécuritaire et notre réactivité. Nos cordistes sont certifiés IRATA, possèdent plus de 15 ans d&apos;expérience collective et interviennent sur des chantiers complexes avec une précision chirurgicale. Notre taux de satisfaction client dépasse les 98% et nous sommes assurés pour tous types d&apos;interventions.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, son accessibilité et les équipements nécessaires. Un diagnostic préalable gratuit permet de définir un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation qualifiante IRATA/AFPS, obtenir des certifications de travail en hauteur, réussir des tests physiques et techniques rigoureux, et justifier d&apos;une condition physique excellente. Une formation continue est également obligatoire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez une entreprise de cordistes certifiée IRATA, disposant de références professionnelles solides, d&apos;une assurance responsabilité civile complète, et proposant un diagnostic technique préalable. Vérifiez leurs certifications, leur expérience et leurs avis clients.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Levallois-Perret ?
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
