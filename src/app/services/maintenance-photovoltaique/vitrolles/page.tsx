import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Vitrolles | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires sur Vitrolles et ses environs. Nos te',
  keywords: 'nettoyage panneaux solaires vitrolles, maintenance photovoltaique vitrolles, entretien panneaux solaires vitrolles, nettoyage photovoltaique vitrolles, maintenance panneaux photovoltaiques vitrolles',
};

export default function MaintenancePhotovoltaiqueVitrollesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Vitrolles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires sur Vitrolles et ses environs. Nos techniciens spécialisés garantissent des installations photovoltaïques performantes et durables, en optimisant leur rendement énergétique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Vitrolles</h2>
        <div className="space-y-4">
          <p>Notre service complet de maintenance et nettoyage des panneaux solaires répond aux exigences techniques les plus strictes. Sur Vitrolles, nous intervenons avec du matériel high-tech permettant un nettoyage sans rayure et une inspection précise de vos installations. Nos techniciens utilisent des techniques écologiques qui préservent l&apos;intégrité de vos panneaux, avec des produits biodégradables et un système de nettoyage à l&apos;eau pure. Nous réalisons un diagnostic complet comprenant le contrôle électrique, le nettoyage des modules et la vérification des connectiques, assurant ainsi une performance optimale de votre système photovoltaïque.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 10 ans d&apos;expérience sur Vitrolles
- Techniciens certifiés et équipements professionnels
- Intervention rapide sous 48h
- Amélioration moyenne de 15% du rendement après notre entretien</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la taille de votre installation, mais représente un investissement rentable qui permet de maintenir une efficacité énergétique maximale et de prévenir des réparations coûteuses.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans la région de Vitrolles, l&apos;ensoleillement et les conditions climatiques peuvent nécessiter un entretien plus fréquent selon l&apos;exposition de vos panneaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un diagnostic complet incluant le test de performance, la mesure du courant électrique et l&apos;analyse thermique. Des signes comme une baisse de production, des micro-fissures ou des traces d&apos;usure indiquent la nécessité d&apos;un contrôle approfondi.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Vitrolles ?
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
