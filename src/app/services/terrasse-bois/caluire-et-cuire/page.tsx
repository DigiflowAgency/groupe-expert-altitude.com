import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Caluire-et-Cuire | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot, la solution élégante et durable par Groupe Expert Altitude Com. Spécialistes à Caluire-et-Cuir',
  keywords: 'terrasse bois caluire-et-cuire, terrasse sur plot caluire-et-cuire, terrasse bois sur plot caluire-et-cuire, pose terrasse bois caluire-et-cuire, terrasse composite caluire-et-cuire, terrasse bois piscine caluire-et-cuire',
};

export default function TerrasseBoisCaluireEtCuirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Caluire-et-Cuire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot, la solution élégante et durable par Groupe Expert Altitude Com. Spécialistes à Caluire-et-Cuire, nous concevons des espaces extérieurs qui allient esthétique et fonctionnalité pour sublimer votre habitat.</p>

        <h2>Nos services de terrasse bois sur plot a Caluire-et-Cuire</h2>
        <div className="space-y-4">
          <p>Notre expertise en terrasse bois sur plot répond aux exigences des propriétaires de Caluire-et-Cuire recherchant un aménagement extérieur haut de gamme. Nous proposons une installation précise sur plots techniques qui garantit une parfaite horizontalité, même sur des surfaces légèrement pentues. Nos matériaux sélectionnés - bois composite ou bois exotique - offrent une résistance optimale aux intempéries et aux UV. Chaque projet est personnalisé, avec une attention méticuleuse aux détails : choix des essences, design, finitions et adaptation parfaite à votre environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son savoir-faire unique : 15 ans d&apos;expérience, une équipe de 6 professionnels certifiés, un taux de satisfaction client de 98%. Nous maîtrisons les techniques les plus récentes de pose de terrasse sur plot et proposons un devis détaillé sous 48h. Notre engagement qualité inclut une garantie décennale et un suivi personnalisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un projet moyen de 30m² représente un investissement de 3 000€ à 7 500€, incluant pose et matériaux de qualité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot est généralement de 2 à 5 jours pour une surface de 30m². Notre équipe optimise chaque étape : préparation du sol, pose des plots, installation des lames, finitions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour Caluire-et-Cuire, nous recommandons le bois composite (très durable) ou l&apos;ipé (bois exotique résistant). Le composite offre 25 ans de garantie, tandis que l&apos;ipé peut durer jusqu&apos;à 50 ans avec un entretien adapté.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Caluire-et-Cuire ?
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
