import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Vitrolles | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Vitrolles en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneau',
  keywords: 'panneaux solaires vitrolles, installation photovoltaique vitrolles, panneaux photovoltaiques vitrolles, installateur panneaux solaires vitrolles, pose panneaux solaires vitrolles, photovoltaique maison vitrolles',
};

export default function PanneauxSolairesVitrollesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Vitrolles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Vitrolles en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous convertissons l&apos;énergie solaire en solution économique et durable pour les habitants des Bouches-du-Rhône.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Vitrolles</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux résidents de Vitrolles de produire leur propre électricité verte et de réduire significativement leurs factures énergétiques. Notre équipe technique hautement qualifiée réalise des installations clés en main, en analysant précisément l&apos;orientation de votre toiture, sa capacité structurelle et votre consommation énergétique. Nous utilisons uniquement des panneaux de dernière génération garantissant un rendement optimal, avec des modules atteignant jusqu&apos;à 22% d&apos;efficacité. Notre processus comprend un diagnostic technique gratuit, un dimensionnement personnalisé et une installation professionnelle respectant les normes environnementales les plus strictes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour un installateur local certifié RGE avec plus de 10 ans d&apos;expérience. Nous proposons des garanties jusqu&apos;à 25 ans, un accompagnement administratif complet pour vos demandes de subventions et un suivi technique personnalisé. Notre engagement : maximiser votre retour sur investissement tout en contribuant à la transition énergétique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 8 000€ et 15 000€ pour une maison moyenne de 100m², avec un retour sur investissement estimé entre 8 et 12 ans. Les aides gouvernementales peuvent couvrir jusqu&apos;à 30% des coûts, rendant le projet plus accessible.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend généralement de 3 à 6 semaines, incluant le diagnostic technique, les autorisations administratives et la pose. La phase de pose effective dure entre 2 et 4 jours selon la complexité du projet et la surface à équiper.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement son numéro de certification, ses références clients, son appartenance à des associations professionnelles et demandez plusieurs devis détaillés. Un bon installateur proposera un diagnostic technique gratuit et transparent.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Vitrolles ?
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
