import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a L\'Haÿ-les-Roses | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à L&apos;Haÿ-les-Roses, vous garantit des ins',
  keywords: 'nettoyage panneaux solaires l'haÿ-les-roses, maintenance photovoltaique l'haÿ-les-roses, entretien panneaux solaires l'haÿ-les-roses, nettoyage photovoltaique l'haÿ-les-roses, maintenance panneaux photovoltaiques l'haÿ-les-roses',
};

export default function MaintenancePhotovoltaiqueLHayLesRosesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a L'Haÿ-les-Roses</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à L&apos;Haÿ-les-Roses, vous garantit des installations photovoltaïques performantes et durables. Nous intervenons sur l&apos;ensemble du Val-de-Marne pour préserver l&apos;efficacité énergétique de vos équipements.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a L'Haÿ-les-Roses</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés utilisent des techniques innovantes pour éliminer poussières, mousses et résidus qui réduisent jusqu&apos;à 30% la performance de vos installations. À L&apos;Haÿ-les-Roses, nous proposons un diagnostic précis avant chaque intervention, avec un nettoyage respectueux de vos équipements photovoltaïques. Notre process comprend un contrôle électrique complet, un nettoyage écologique sans produits chimiques agressifs et une vérification de l&apos;intégrité des supports et connexions.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise technique certifiée avec plus de 15 ans d&apos;expérience
✓ Techniciens formés et habilités interventions photovoltaïques
✓ Matériel de nettoyage haute précision
✓ Devis gratuit et transparent
✓ Intervention rapide sur L&apos;Haÿ-les-Roses et communes limitrophes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la surface et la configuration de vos panneaux solaires. Notre tarification inclut le diagnostic, le nettoyage et le contrôle technique complet, garantissant un investissement optimal pour votre installation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou avec beaucoup d&apos;arbres à proximité. Un entretien régulier permet de maintenir une efficacité énergétique maximale de 95-98%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens réalisent un diagnostic complet vérifiant la production électrique, l&apos;état des connexions et l&apos;absence de microfissures. Un test de performance avec analyse thermographique permet de détecter d&apos;éventuels dysfonctionnements avant qu&apos;ils ne deviennent critiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a L'Haÿ-les-Roses ?
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
