import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Aulnay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Aulnay-sous-Bois, garantit des installations p',
  keywords: 'nettoyage panneaux solaires aulnay-sous-bois, maintenance photovoltaique aulnay-sous-bois, entretien panneaux solaires aulnay-sous-bois, nettoyage photovoltaique aulnay-sous-bois, maintenance panneaux photovoltaiques aulnay-sous-bois',
};

export default function MaintenancePhotovoltaiqueAulnaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Aulnay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Aulnay-sous-Bois, garantit des installations photovoltaïques performantes et durables. Nous optimisons votre production d&apos;énergie verte grâce à un service technique précis et innovant.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Aulnay-sous-Bois</h2>
        <div className="space-y-4">
          <p>Notre expertise en maintenance photovoltaïque couvre l&apos;intégralité des interventions nécessaires pour préserver l&apos;efficacité de vos installations. Notre équipe technique réalise un diagnostic complet incluant un nettoyage professionnel qui élimine poussières, mousses et résidus qui réduisent jusqu&apos;à 25% la performance de vos panneaux. À Aulnay-sous-Bois, nous intervenons avec du matériel écologique et des techniques non-abrasives, respectant l&apos;intégrité de vos équipements. Chaque intervention comprend un contrôle électrique, une vérification des connexions et un rapport détaillé pour vous garantir une production optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés et formés aux dernières technologies photovoltaïques
- Intervention rapide sur Aulnay-sous-Bois et communes limitrophes
- Matériel de nettoyage haute précision sans détergents chimiques
- Devis gratuit et transparent, sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;entretien annuel varie entre 150€ et 350€ selon la taille de l&apos;installation, avec un retour sur investissement rapide grâce à l&apos;amélioration de la performance énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou environnement poussiéreux comme certains secteurs industriels d&apos;Aulnay-sous-Bois.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous proposons un diagnostic complet incluant un test de rendement, l&apos;analyse des micro-onduleurs et un rapport détaillé. Un écart de performance supérieur à 10% par rapport aux données constructeur nécessite une intervention technique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Aulnay-sous-Bois ?
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
