import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Draguignan | Groupe Expert Altitude Com',
  description: 'Spécialiste du ravalement de façade à Draguignan depuis plus de 15 ans, le Groupe Expert Altitude Com transforme l&apos;apparence de vos bâtiments avec précisio',
  keywords: 'ravalement facade draguignan, ravalement immeuble draguignan, renovation facade draguignan, peinture facade draguignan, entreprise ravalement draguignan, ravalement facade maison draguignan',
};

export default function RavalementFacadeDraguignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Draguignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste du ravalement de façade à Draguignan depuis plus de 15 ans, le Groupe Expert Altitude Com transforme l&apos;apparence de vos bâtiments avec précision et élégance. Nous sommes votre partenaire de confiance pour redonner vie et modernité à vos façades dans tout le Var.</p>

        <h2>Nos services de ravalement de façade a Draguignan</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une expertise technique complète qui protège durablement votre patrimoine immobilier. Nos équipes qualifiées utilisent des techniques et matériaux de pointe, adaptés à chaque type de support - pierre, crépi, enduit ou brique. À Draguignan et ses environs, nous réalisons des interventions sur mesure, en respectant les normes environnementales et techniques les plus exigeantes. Chaque chantier fait l&apos;objet d&apos;un diagnostic précis, permettant de traiter les problématiques d&apos;étanchéité, d&apos;isolation et de finition avec une approche professionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Draguignan
- Équipe de 12 professionnels certifiés
- Devis gratuit et détaillé sous 48h
- Garantie décennale sur tous nos travaux
- Techniques éco-responsables et économes en énergie</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 35€ et 80€ par m², selon la complexité du support, les matériaux choisis et l&apos;état initial. Pour une maison moyenne de 100m², comptez un budget global entre 3 500€ et 8 000€. Nos devis personnalisés incluent toujours une analyse précise pour un tarif transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de sa configuration. Pour un immeuble de 3-4 étages, notre équipe réalise généralement le chantier entre 10 et 15 jours ouvrés. Nous optimisons chaque étape : préparation, réparations, application des enduits et finitions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10-15 ans selon l&apos;arrêté du 10 septembre 1970. Il est notamment requis quand l&apos;état de dégradation présente des risques pour la sécurité, l&apos;isolation thermique ou l&apos;esthétique générale. À Draguignan, nous conseillons une inspection professionnelle tous les 8-10 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Draguignan ?
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
