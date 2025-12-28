import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Noisy-le-Grand | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Noisy-le-Grand, offrant des solutions acrobatiques professionnelles po',
  keywords: 'cordiste noisy-le-grand, travaux sur corde noisy-le-grand, travaux acrobatiques noisy-le-grand, cordiste batiment noisy-le-grand, intervention cordiste noisy-le-grand, entreprise cordiste noisy-le-grand',
};

export default function CordisteNoisyLeGrandPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Noisy-le-Grand</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Noisy-le-Grand, offrant des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés transforment les interventions complexes en missions de précision et de sécurité.</p>

        <h2>Nos services de travaux sur corde - cordistes a Noisy-le-Grand</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution ultime pour les interventions techniques en milieux verticaux et difficiles d&apos;accès. Que ce soit pour la rénovation de façades, l&apos;entretien industriel ou des missions de maintenance spécifiques, nos cordistes disposent d&apos;un équipement de pointe et de certifications garantissant une intervention optimale. À Noisy-le-Grand et ses environs, nous intervenons avec une technicité qui nous distingue : 98% de nos missions sont réalisées sans incident et dans le respect strict des normes de sécurité. Nos experts maîtrisent parfaitement les techniques d&apos;accès difficile, permettant des interventions rapides, économiques et totalement sécurisées.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Équipe certifiée avec plus de 15 ans d&apos;expérience
• Matériel professionnel dernière génération
• Interventions 100% sécurisées et conformes aux normes
• Devis gratuit et personnalisé sous 24h
• Disponibilité immédiate sur Noisy-le-Grand et la région parisienne</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier, l&apos;équipement nécessaire et la durée d&apos;intervention. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir le CMIC (Certificat Monteur Intervenant Cordiste), suivre des formations spécifiques en hauteur, justifier d&apos;une condition physique irréprochable et maîtriser parfaitement les techniques de sécurité et de progression.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une entreprise de cordistes certifiée doit disposer de l&apos;habilitation AFPS, proposer des techniciens diplômés, justifier d&apos;assurances professionnelles complètes et présenter un historique de missions réussies avec références clients.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Noisy-le-Grand ?
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
