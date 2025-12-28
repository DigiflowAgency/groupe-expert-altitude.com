import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Cugnaux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne la transition énergétique à Cugnaux avec des solutions d&apos;installation de panneaux solaires photovoltaïques sur m',
  keywords: 'panneaux solaires cugnaux, installation photovoltaique cugnaux, panneaux photovoltaiques cugnaux, installateur panneaux solaires cugnaux, pose panneaux solaires cugnaux, photovoltaique maison cugnaux',
};

export default function PanneauxSolairesCugnauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Cugnaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne la transition énergétique à Cugnaux avec des solutions d&apos;installation de panneaux solaires photovoltaïques sur mesure. Nous transformons votre habitat en une source d&apos;énergie propre et économique, directement adaptée aux spécificités de votre région.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Cugnaux</h2>
        <div className="space-y-4">
          <p>Nos experts en installation photovoltaïque accompagnent les habitants de Cugnaux et ses environs dans leur projet de production d&apos;énergie renouvelable. Nous proposons une approche complète, depuis l&apos;étude technique personnalisée jusqu&apos;à la pose finale des panneaux solaires. Notre méthode intègre une analyse précise de l&apos;orientation de votre toiture, un dimensionnement optimal selon votre consommation et les caractéristiques climatiques locales. Chaque installation est conçue pour maximiser votre rendement énergétique et réduire significativement vos factures d&apos;électricité, avec un retour sur investissement généralement estimé entre 8 et 12 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique certifiée RGE, notre accompagnement personnalisé et notre engagement local à Cugnaux. Nos techniciens hautement qualifiés garantissent une installation professionnelle, nos équipements sont sélectionnés auprès des meilleurs fabricants européens, et nous proposons un suivi technique complet après l&apos;installation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface, avec des aides de l&apos;État pouvant atteindre 5 000€. Un foyer moyen à Cugnaux peut espérer une économie annuelle de 500 à 800€ sur ses factures d&apos;électricité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation de panneaux photovoltaïques s&apos;étend généralement de 4 à 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose effective. Notre équipe s&apos;engage à minimiser les perturbations et à respecter un planning précis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement son numéro de qualification, consultez ses références locales, demandez plusieurs devis détaillés et assurez-vous de la garantie des équipements et de l&apos;installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Cugnaux ?
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
