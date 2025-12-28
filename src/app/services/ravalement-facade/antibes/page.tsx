import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Antibes | Groupe Expert Altitude Com',
  description: 'Dans la magnifique région d&apos;Antibes, Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade qui transforment et protèg',
  keywords: 'ravalement facade antibes, ravalement immeuble antibes, renovation facade antibes, peinture facade antibes, entreprise ravalement antibes, ravalement facade maison antibes',
};

export default function RavalementFacadeAntibesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Antibes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Dans la magnifique région d&apos;Antibes, Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade qui transforment et protègent votre patrimoine immobilier. Spécialistes depuis plus de 15 ans, nous redonnons vie et élégance à vos murs avec un savoir-faire 100% méditerranéen.</p>

        <h2>Nos services de ravalement de façade a Antibes</h2>
        <div className="space-y-4">
          <p>Le ravalement de façade représente bien plus qu&apos;un simple rafraîchissement esthétique. C&apos;est un investissement stratégique qui préserve la structure et la valeur de votre bien. Notre équipe d&apos;experts intervient sur tous types de bâtiments à Antibes, des maisons individuelles aux immeubles collectifs, en utilisant des techniques et matériaux de haute qualité. Nous réalisons un diagnostic précis avant chaque intervention, identifiant les zones nécessitant réparation, traitant l&apos;étanchéité et les micro-fissures. Notre processus complet comprend le décapage, les réparations structurelles, l&apos;application de primaires techniques et de peintures durables garantissant une protection optimale contre les agressions climatiques méditerranéennes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale avec plus de 500 chantiers réalisés à Antibes et ses environs
✓ Équipe certifiée et formée aux dernières normes techniques
✓ Devis gratuit et précis sous 48h
✓ Garantie décennale sur tous nos travaux
✓ Respect des délais et des budgets</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité, l&apos;état initial du support et les finitions choisies. Pour une maison moyenne de 100m², comptez entre 3 000€ et 8 000€. Un diagnostic préalable gratuit permettra de définir un devis personnalisé précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de son état. En moyenne, pour un immeuble de 3-4 étages, prévoyez 2 à 4 semaines de travaux. Notre méthode optimisée permet de minimiser la gêne et de respecter scrupuleusement les délais convenus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement devient obligatoire tous les 10 ans dans les copropriétés de plus de 3 étages, selon le Code de la Construction. À Antibes, nous recommandons une inspection tous les 7-8 ans en raison des conditions climatiques marines qui accélèrent la dégradation des façades. Un ravalement préventif permet d&apos;éviter des réparations coûteuses à long terme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Antibes ?
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
