import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Mandelieu-la-Napoule | Groupe Expert Altitude Com',
  description: 'Sur la Côte d&apos;Azur, le Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Mandelieu-la',
  keywords: 'nettoyage panneaux solaires mandelieu-la-napoule, maintenance photovoltaique mandelieu-la-napoule, entretien panneaux solaires mandelieu-la-napoule, nettoyage photovoltaique mandelieu-la-napoule, maintenance panneaux photovoltaiques mandelieu-la-napoule',
};

export default function MaintenancePhotovoltaiqueMandelieuLaNapoulePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Mandelieu-la-Napoule</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Sur la Côte d&apos;Azur, le Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Mandelieu-la-Napoule. Nos experts garantissent des installations photovoltaïques performantes et durables, adaptées aux conditions climatiques locales.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Mandelieu-la-Napoule</h2>
        <div className="space-y-4">
          <p>Notre service complet de maintenance photovoltaïque assure l&apos;optimisation de votre installation solaire. Nos techniciens hautement qualifiés réalisent un diagnostic précis, nettoyant méticuleusement chaque panneau pour éliminer poussières, sel marin et résidus qui peuvent réduire jusqu&apos;à 30% l&apos;efficacité énergétique. À Mandelieu-la-Napoule, nous comprenons les enjeux spécifiques de l&apos;environnement méditerranéen. Notre processus inclut un contrôle électrique complet, un nettoyage écologique utilisant des techniques sans produits chimiques et une vérification des connexions et supports. Nous intervenons avec du matériel haute technologie, garantissant une performance maximale de vos installations solaires.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 10 ans, 2) Des techniciens certifiés et formés aux dernières technologies, 3) Un service sur-mesure adapté à chaque installation, 4) Une intervention rapide et professionnelle sur Mandelieu-la-Napoule et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût annuel d&apos;entretien varie entre 150€ et 350€ selon la taille de votre installation, avec un retour sur investissement garanti par l&apos;amélioration de la performance énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne, pour maintenir un rendement optimal de vos panneaux solaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos diagnostics incluent des tests de performance, une analyse thermographique et un contrôle des connexions. Un rendement inférieur à 90% de la capacité nominale nécessite une intervention approfondie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Mandelieu-la-Napoule ?
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
