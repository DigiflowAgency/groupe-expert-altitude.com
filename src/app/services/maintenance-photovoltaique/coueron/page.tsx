import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Couëron | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires sur Couëron et ses environs. Nous gar',
  keywords: 'nettoyage panneaux solaires couëron, maintenance photovoltaique couëron, entretien panneaux solaires couëron, nettoyage photovoltaique couëron, maintenance panneaux photovoltaiques couëron',
};

export default function MaintenancePhotovoltaiqueCoueronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Couëron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires sur Couëron et ses environs. Nous garantissons des installations photovoltaïques performantes grâce à notre expertise technique et un service sur-mesure.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Couëron</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés interviennent sur l&apos;ensemble des installations photovoltaïques, en utilisant des techniques et équipements spécialisés. Nous réalisons un diagnostic complet avant chaque intervention, vérifiant l&apos;état des connexions, l&apos;efficacité des modules et l&apos;absence de micro-rayures ou salissures qui pourraient réduire la production énergétique. Sur Couëron, nous proposons une approche préventive qui permet de maintenir un rendement optimal de vos installations, avec des interventions adaptées à chaque configuration de toiture et type de panneaux.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre approche technique précise : 1) Une équipe certifiée avec plus de 15 ans d&apos;expérience, 2) Un diagnostic personnalisé avant chaque intervention, 3) Un matériel de nettoyage haute technologie respectant l&apos;intégrité des panneaux, 4) Un suivi énergétique détaillé après chaque maintenance.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de l&apos;installation, avec un prix moyen de 250€ pour une installation domestique standard. Notre tarification transparente inclut le diagnostic, le nettoyage et la vérification technique complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou proche des zones industrielles. Un nettoyage régulier peut augmenter la production énergétique de 5 à 10%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production mensuelle, comparez-la aux données constructeurs, et faites réaliser un diagnostic technique annuel. Des variations importantes peuvent indiquer un besoin de maintenance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Couëron ?
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
