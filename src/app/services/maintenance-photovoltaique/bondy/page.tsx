import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Bondy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires sur Bondy et ses environs. Nous garantissons des',
  keywords: 'nettoyage panneaux solaires bondy, maintenance photovoltaique bondy, entretien panneaux solaires bondy, nettoyage photovoltaique bondy, maintenance panneaux photovoltaiques bondy',
};

export default function MaintenancePhotovoltaiqueBondyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Bondy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires sur Bondy et ses environs. Nous garantissons des installations photovoltaïques performantes et durables grâce à notre expertise technique précise.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Bondy</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires représente une solution complète pour préserver l&apos;efficacité énergétique de vos installations. À Bondy, nous intervenons avec des techniques professionnelles qui permettent d&apos;éliminer poussières, débris et résidus qui peuvent réduire jusqu&apos;à 20% la production électrique. Notre équipe utilise des équipements spécialisés et des produits écologiques, sans risque pour vos panneaux photovoltaïques. Nous réalisons un diagnostic technique approfondi, nettoyons méticuleusement chaque panneau et vérifions l&apos;intégralité de votre système pour assurer une performance maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec plus de 10 ans d&apos;expérience, 2) Un service sur-mesure adapté à chaque installation, 3) Des techniciens formés et équipés des dernières technologies, 4) Une intervention rapide et professionnelle garantissant la pérennité de vos équipements solaires.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût annuel d&apos;entretien varie entre 150€ et 500€ selon la taille de votre installation, avec un prix moyen de 250€ pour un système résidentiel standard. Ce tarif inclut un nettoyage complet, une vérification électrique et un diagnostic technique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les panneaux solaires doivent être nettoyés idéalement 1 à 2 fois par an, généralement au printemps et à l&apos;automne. À Bondy, où la pollution et les conditions météorologiques peuvent varier, nous recommandons une intervention professionnelle annuelle pour maintenir une efficacité optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement de vos panneaux, surveillez votre production électrique via un monitoring, vérifiez l&apos;absence de traces, fissures ou décolorations, et faites réaliser un diagnostic technique annuel par des professionnels comme notre équipe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Bondy ?
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
