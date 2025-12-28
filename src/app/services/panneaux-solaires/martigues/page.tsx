import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Martigues | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Martigues en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation ',
  keywords: 'panneaux solaires martigues, installation photovoltaique martigues, panneaux photovoltaiques martigues, installateur panneaux solaires martigues, pose panneaux solaires martigues, photovoltaique maison martigues',
};

export default function PanneauxSolairesMartiguesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Martigues</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Martigues en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous convertissons l&apos;énergie solaire en solution économique et durable pour les habitations de la région.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Martigues</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux habitants de Martigues de produire leur propre électricité verte et de réduire significativement leurs factures énergétiques. Notre expertise technique garantit une installation optimale, avec des panneaux haute performance atteignant jusqu&apos;à 22% de rendement énergétique. Nous réalisons une étude personnalisée de votre toiture, analysons son orientation, sa structure et son potentiel solaire pour maximiser la production électrique. Notre processus inclut un diagnostic précis, un conseil technique approfondi et une installation clé en main par nos techniciens certifiés, qui respectent les normes environnementales les plus strictes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour un installateur local avec plus de 10 ans d&apos;expérience sur Martigues et ses environs. Nous sommes certifiés RGE, garantissant une qualité de service irréprochable. Nos techniciens maîtrisent les dernières technologies photovoltaïques et vous accompagnent dans vos démarches de demandes de subventions et de raccordement au réseau électrique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État peuvent réduire jusqu&apos;à 30% du coût total, rendant le projet plus accessible.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation s&apos;étend généralement entre 4 à 8 semaines, incluant l&apos;étude technique, l&apos;obtention des autorisations et la pose effective des panneaux. Notre équipe à Martigues optimise chaque étape pour une intervention rapide et efficace.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIPV, consultez ses références locales, demandez plusieurs devis détaillés et assurez-vous de la présence de garanties écrites sur le matériel et la main-d&apos;œuvre. Notre entreprise répond à tous ces critères avec professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Martigues ?
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
