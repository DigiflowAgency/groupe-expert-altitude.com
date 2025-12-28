import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Villeurbanne | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Villeurbanne, offrant des solutions acrobatiques professionnelles et s',
  keywords: 'cordiste villeurbanne, travaux sur corde villeurbanne, travaux acrobatiques villeurbanne, cordiste batiment villeurbanne, intervention cordiste villeurbanne, entreprise cordiste villeurbanne',
};

export default function CordisteVilleurbannePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Villeurbanne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Villeurbanne, offrant des solutions acrobatiques professionnelles et sécurisées pour tous vos défis en hauteur. Nos cordistes experts interviennent sur les chantiers les plus complexes de la région lyonnaise.</p>

        <h2>Nos services de travaux sur corde - cordistes a Villeurbanne</h2>
        <div className="space-y-4">
          <p>Nos services de cordistes représentent une solution technique révolutionnaire pour les interventions en milieux verticaux et difficiles d&apos;accès. Grâce à une formation pointue et un équipement de haute technologie, nous réalisons des travaux de maintenance, nettoyage, rénovation et inspection sur des structures variées : bâtiments industriels, monuments historiques, facades commerciales ou sites techniques. Notre approche garantit une précision chirurgicale tout en minimisant les risques et les perturbations pour nos clients à Villeurbanne et ses environs. Plus de 95% de nos interventions sont réalisées sans échafaudage, réduisant ainsi les coûts et les délais d&apos;exécution.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence en travaux acrobatiques. Nos cordistes sont certifiés IRATA niveau 3, possèdent plus de 15 ans d&apos;expérience collective et interviennent avec un taux de satisfaction client de 98%. Nous disposons de toutes les assurances professionnelles et respectons scrupuleusement les normes de sécurité les plus exigeantes.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs d&apos;un cordiste varient entre 80€ et 250€ de l&apos;heure selon la complexité des travaux, la hauteur d&apos;intervention et les équipements spécifiques nécessaires. Un devis personnalisé gratuit permet de définir précisément le coût de votre projet à Villeurbanne.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle intensive, obtenir des certifications IRATA ou AFPS, réussir des examens techniques et médicaux, et justifier d&apos;une excellente condition physique. Une formation dure généralement entre 3 et 6 mois avec des stages pratiques obligatoires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA, leur assurance responsabilité civile professionnelle, leurs références clients, et demandez systématiquement un portfolio de réalisations récentes. Le Groupe Expert Altitude Com met à votre disposition tous ces éléments de transparence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Villeurbanne ?
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
