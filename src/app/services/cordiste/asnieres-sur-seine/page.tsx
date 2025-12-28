import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Asnières-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre référence en travaux sur corde à Asnières-sur-Seine, propose des solutions acrobatiques innovantes pour tous vos défis en',
  keywords: 'cordiste asnières-sur-seine, travaux sur corde asnières-sur-seine, travaux acrobatiques asnières-sur-seine, cordiste batiment asnières-sur-seine, intervention cordiste asnières-sur-seine, entreprise cordiste asnières-sur-seine',
};

export default function CordisteAsnieresSurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Asnières-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre référence en travaux sur corde à Asnières-sur-Seine, propose des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus complexes avec précision et sécurité maximale.</p>

        <h2>Nos services de travaux sur corde - cordistes a Asnières-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions en hauteur nécessitant expertise et agilité. Nos cordistes professionnels maîtrisent parfaitement les techniques d&apos;accès difficile, permettant des réalisations impossibles avec des méthodes traditionnelles. Que ce soit pour des travaux de rénovation, de maintenance industrielle ou de nettoyage de façades à Asnières-sur-Seine, notre équipe dispose des certifications et équipements conformes aux plus hauts standards de sécurité. Chaque intervention est précédée d&apos;un diagnostic technique précis, garantissant une exécution optimale et sans risque.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Interventions 100% sécurisées selon les normes AFPS
- Matériel professionnel dernière génération
- Devis gratuit et personnalisé sous 48h
- Références auprès de grands donneurs d&apos;ordre en Île-de-France</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable permet d&apos;établir un devis précis, incluant la main-d&apos;œuvre, le matériel spécifique et les contraintes techniques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir le CTICAM (Certificat de Travailleur Intervenant en Cordage et Accès Difficile), suivre des formations en hauteur, détenir un CATEC et justifier d&apos;une condition physique irréprochable. Une formation continue est également obligatoire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs habilitations AFPS, demandez leurs références clients, assurez-vous de leur couverture d&apos;assurance responsabilité civile professionnelle et exigez les certifications individuelles de chaque technicien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Asnières-sur-Seine ?
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
