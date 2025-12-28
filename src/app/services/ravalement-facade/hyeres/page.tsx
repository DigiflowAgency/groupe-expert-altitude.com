import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Hyères | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Hyères, transforme vos bâtiments avec une expertise technique et esthétiqu',
  keywords: 'ravalement facade hyères, ravalement immeuble hyères, renovation facade hyères, peinture facade hyères, entreprise ravalement hyères, ravalement facade maison hyères',
};

export default function RavalementFacadeHyeresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Hyères</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référence en ravalement de façade à Hyères, transforme vos bâtiments avec une expertise technique et esthétique inégalée. Nous rénovons et protégeons vos facades dans le respect des normes et du charme architectural varois.</p>

        <h2>Nos services de ravalement de façade a Hyères</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade à Hyères combine précision technique et esthétique raffinée. Nos experts interviennent sur tous types de bâtiments, des maisons individuelles aux immeubles collectifs, en utilisant des techniques et matériaux de dernière génération. Nous réalisons un diagnostic personnalisé, préparons méticuleusement les surfaces par un décapage et un traitement adapté, puis appliquons des enduits et peintures haute performance garantissant une protection durable contre les intempéries et l&apos;usure. Notre processus inclut un contrôle qualité rigoureux pour assurer un résultat impeccable et une valorisation de votre patrimoine immobilier.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Hyères, 2) Des techniciens certifiés et formés aux dernières normes, 3) Des matériaux écologiques et haute résistance, 4) Un devis transparent sans frais cachés. Nous garantissons une intervention sur-mesure et un résultat qui sublimera votre patrimoine.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité, les matériaux et l&apos;état initial. Pour une maison moyenne de 100m² à Hyères, comptez un budget global entre 3 000€ et 8 000€. Un diagnostic précis permet d&apos;affiner ce premier estimatif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, un immeuble de 3 étages nécessite 10 à 15 jours de travaux. Notre équipe optimise chaque intervention pour minimiser la gêne et respecter les délais convenus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10 ans selon le Code de la Construction, ou en cas de dégradations significatives. À Hyères, le climat méditerranéen peut accélérer la détérioration, rendant ces travaux encore plus essentiels pour préserver la structure et l&apos;esthétique de votre bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Hyères ?
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
