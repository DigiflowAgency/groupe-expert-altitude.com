import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Clichy | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Clichy avec des solutions photovoltaïques innovantes du Groupe Expert Altitude Com. Nous sommes votre partenaire local spéciali',
  keywords: 'panneaux solaires clichy, installation photovoltaique clichy, panneaux photovoltaiques clichy, installateur panneaux solaires clichy, pose panneaux solaires clichy, photovoltaique maison clichy',
};

export default function PanneauxSolairesClichyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Clichy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Clichy avec des solutions photovoltaïques innovantes du Groupe Expert Altitude Com. Nous sommes votre partenaire local spécialisé dans l&apos;installation de panneaux solaires, offrant une transition énergétique performante et économique pour les habitants de la région parisienne.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Clichy</h2>
        <div className="space-y-4">
          <p>Nos installations de panneaux solaires photovoltaïques représentent la solution moderne et durable pour réduire votre empreinte carbone et vos factures énergétiques. Notre expertise technique nous permet de concevoir des systèmes sur-mesure parfaitement adaptés à chaque configuration de toiture à Clichy et ses environs. Nous utilisons uniquement des technologies de pointe garantissant un rendement optimal, avec des panneaux atteignant jusqu&apos;à 22% d&apos;efficacité énergétique. Notre processus complet comprend un diagnostic précis, un dimensionnement personnalisé, l&apos;installation professionnelle et le suivi technique, assurant une production électrique maximale pour votre habitation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Certification RGE officielle garantissant une qualité d&apos;intervention supérieure
• Techniciens hautement qualifiés avec plus de 10 ans d&apos;expérience
• Solutions 100% personnalisées adaptées à chaque configuration
• Accompagnement administratif complet pour vos demandes de subventions</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un système de 3 à 6 kWc représente en moyenne un investissement de 12 500€, amortissable en 8 à 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend généralement entre 4 et 8 semaines, incluant le diagnostic initial, les démarches administratives, la préparation du site et la pose effective des panneaux. La pose technique elle-même dure entre 1 et 3 jours selon la complexité du projet.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez systématiquement : son numéro de certification, ses références clients, ses garanties officielles, son appartenance à des organisations professionnelles reconnues, et exigez un devis détaillé avec engagement de performance énergétique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Clichy ?
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
