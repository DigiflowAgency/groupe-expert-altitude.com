import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Le Cannet | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne la transition énergétique au Cannet avec des solutions d&apos;installation de panneaux solaires photovoltaïques innovant',
  keywords: 'panneaux solaires le cannet, installation photovoltaique le cannet, panneaux photovoltaiques le cannet, installateur panneaux solaires le cannet, pose panneaux solaires le cannet, photovoltaique maison le cannet',
};

export default function PanneauxSolairesLeCannetPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Le Cannet</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne la transition énergétique au Cannet avec des solutions d&apos;installation de panneaux solaires photovoltaïques innovantes et sur-mesure. Nous transformons votre habitat en une source d&apos;énergie propre et économique, en plein cœur des Alpes-Maritimes.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Le Cannet</h2>
        <div className="space-y-4">
          <p>Nos experts en photovoltaïque proposent une solution complète et personnalisée pour équiper votre maison au Cannet. Nous réalisons un diagnostic précis de votre toiture, calculons le potentiel énergétique et concevons un système adapté à vos besoins. Notre approche technique garantit un rendement optimal, avec des panneaux haute performance atteignant jusqu&apos;à 22% d&apos;efficacité énergétique. Chaque installation est conçue pour maximiser votre production électrique tout en réduisant significativement votre facture énergétique, avec des économies pouvant atteindre 70% sur vos consommations annuelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous garantissons une qualité d&apos;installation irréprochable. Notre équipe dispose de plus de 15 ans d&apos;expérience dans le photovoltaïque. Nous proposons un accompagnement complet, des études techniques jusqu&apos;aux démarches administratives. Nos solutions sont éligibles aux aides gouvernementales et crédits d&apos;impôts.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État peuvent réduire jusqu&apos;à 30% du coût total, rendant le projet plus accessible.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend généralement entre 4 et 6 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose effective. Notre équipe optimise chaque étape pour une mise en service rapide et efficace.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIBAT ou QUALIPV, consultez ses références clients, demandez plusieurs devis détaillés et assurez-vous de la garantie proposée sur les équipements et l&apos;installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Le Cannet ?
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
