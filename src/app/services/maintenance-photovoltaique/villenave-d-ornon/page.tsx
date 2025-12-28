import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Villenave-d\'Ornon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Villenave-d&apos;Ornon, vous garantit des installat',
  keywords: 'nettoyage panneaux solaires villenave-d'ornon, maintenance photovoltaique villenave-d'ornon, entretien panneaux solaires villenave-d'ornon, nettoyage photovoltaique villenave-d'ornon, maintenance panneaux photovoltaiques villenave-d'ornon',
};

export default function MaintenancePhotovoltaiqueVillenaveDOrnonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Villenave-d'Ornon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Villenave-d&apos;Ornon, vous garantit des installations photovoltaïques performantes et durables. Nous intervenons sur tout le territoire girondin pour maximiser la production énergétique de vos équipements.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Villenave-d'Ornon</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés utilisent des techniques non-abrasives et respectueuses de vos installations photovoltaïques. Nous réalisons un diagnostic complet incluant le nettoyage, la vérification électrique et le contrôle des connectiques. Notre intervention permet en moyenne d&apos;augmenter la production énergétique de 15% et de prolonger la durée de vie de vos panneaux. À Villenave-d&apos;Ornon, nous intervenons rapidement avec un matériel adapté aux toitures résidentielles et professionnelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 10 ans d&apos;expérience
- Équipe de techniciens certifiés et formés aux dernières technologies
- Interventions rapides et sur-mesure dans toute la Gironde
- Devis gratuit et transparent sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel varie entre 150€ et 350€ selon la surface et la configuration de vos panneaux solaires. Notre tarification comprend le nettoyage, le diagnostic technique et le rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou proche de zones agricoles. Un nettoyage régulier permet de maintenir un rendement optimal.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens réalisent un diagnostic complet vérifiant le rendement, l&apos;intégrité des connexions et l&apos;absence de micro-fissures. Nous utilisons des caméras thermiques pour détecter les éventuels dysfonctionnements invisibles à l&apos;œil nu.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Villenave-d'Ornon ?
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
