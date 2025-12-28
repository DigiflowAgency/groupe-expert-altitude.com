import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Carquefou | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne la transition énergétique à Carquefou avec ses solutions innovantes d&apos;installation de panneaux solaires photovoltaï',
  keywords: 'panneaux solaires carquefou, installation photovoltaique carquefou, panneaux photovoltaiques carquefou, installateur panneaux solaires carquefou, pose panneaux solaires carquefou, photovoltaique maison carquefou',
};

export default function PanneauxSolairesCarquefouPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Carquefou</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne la transition énergétique à Carquefou avec ses solutions innovantes d&apos;installation de panneaux solaires photovoltaïques. Notre expertise locale vous permet de transformer votre habitat en une source d&apos;énergie propre et économique, directement adaptée aux spécificités climatiques de la région.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Carquefou</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques représentent bien plus qu&apos;une simple installation technique : c&apos;est un investissement durable pour votre patrimoine. Notre équipe d&apos;experts réalise une étude personnalisée de votre toiture, en évaluant précisément son orientation, sa superficie et son potentiel énergétique. Nous utilisons uniquement des panneaux de haute performance, garantissant un rendement optimal pouvant atteindre 22% d&apos;efficacité énergétique. Notre processus complet comprend le diagnostic technique, les démarches administratives, l&apos;installation professionnelle et le raccordement au réseau électrique, le tout dans le respect des normes RGE.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale avec 15 ans d&apos;expérience sur Carquefou et ses environs, 2) Des techniciens certifiés et formés aux dernières technologies photovoltaïques, 3) Un accompagnement complet incluant les demandes de subventions et aides gouvernementales, 4) Une garantie décennale sur nos installations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État peuvent réduire ce coût jusqu&apos;à 30%, rendant le projet plus accessible.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique préalable, les autorisations administratives et la pose effective. Notre équipe s&apos;engage à minimiser les perturbations et à respecter scrupuleusement le planning convenu.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez impérativement : la certification Qualibel, les références clients, les avis en ligne, la présence d&apos;une assurance décennale et la transparence des devis. Nos équipes à Carquefou répondent à l&apos;ensemble de ces critères avec rigueur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Carquefou ?
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
