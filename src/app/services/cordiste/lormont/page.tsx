import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Lormont | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Lormont et dans toute la région bordelaise. Nos cordistes hauteme',
  keywords: 'cordiste lormont, travaux sur corde lormont, travaux acrobatiques lormont, cordiste batiment lormont, intervention cordiste lormont, entreprise cordiste lormont',
};

export default function CordisteLormontPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Lormont</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Lormont et dans toute la région bordelaise. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus complexes, garantissant sécurité et précision à chaque intervention.</p>

        <h2>Nos services de travaux sur corde - cordistes a Lormont</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques représentent la solution technique ultime pour tous les défis en hauteur. Nos cordistes professionnels maîtrisent parfaitement les techniques d&apos;accès difficile, que ce soit pour des interventions industrielles, des rénovations de bâtiments ou des travaux de maintenance. Chaque membre de notre équipe dispose d&apos;une certification IRATA internationale, gage de compétences techniques et de respect strict des normes de sécurité. À Lormont, nous intervenons avec un équipement de pointe, permettant des réalisations précises et rapides dans des environnements où les moyens traditionnels seraient inefficaces. Notre approche combine technicité, rapidité et un engagement total envers la qualité et la sécurité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Équipe certifiée IRATA avec plus de 15 ans d&apos;expérience
• Interventions 100% sécurisées sur Lormont et sa région
• Matériel professionnel dernier cri
• Devis gratuit et personnalisé sous 48h
• Réactivité et expertise technique garanties</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs d&apos;un cordiste varient entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, la hauteur, et les équipements spécifiques nécessaires. Un diagnostic préalable gratuit nous permet de proposer un devis précis et transparent adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle intensive, obtenir la certification IRATA (niveau 1, 2 ou 3), réussir des tests techniques et médicaux rigoureux, et justifier d&apos;une condition physique irréprochable. La formation dure généralement entre 5 et 10 jours selon le niveau visé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : la certification IRATA des techniciens, l&apos;existence d&apos;une assurance responsabilité civile professionnelle, les références clients, et les avis externes. Un professionnel sérieux fournira systématiquement ces justificatifs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Lormont ?
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
