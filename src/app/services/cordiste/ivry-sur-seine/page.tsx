import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Ivry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Ivry-sur-Seine, proposant des solutions acrobatiques professionnelles pou',
  keywords: 'cordiste ivry-sur-seine, travaux sur corde ivry-sur-seine, travaux acrobatiques ivry-sur-seine, cordiste batiment ivry-sur-seine, intervention cordiste ivry-sur-seine, entreprise cordiste ivry-sur-seine',
};

export default function CordisteIvrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Ivry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Ivry-sur-Seine, proposant des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus techniques de la région parisienne.</p>

        <h2>Nos services de travaux sur corde - cordistes a Ivry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos interventions de cordistes couvrent un large éventail de prestations, depuis le ravalement de façades jusqu&apos;aux travaux industriels complexes. Chaque mission est réalisée avec une précision chirurgicale, en respectant les normes de sécurité les plus strictes. Notre expertise technique nous permet de réaliser des travaux là où les méthodes traditionnelles échouent, offrant des solutions innovantes et économiques. Plus de 95% de nos clients nous recommandent grâce à notre approche sur-mesure et notre engagement qualité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une équipe certifiée avec plus de 15 ans d&apos;expérience, 2) Un équipement professionnel dernier cri, 3) Une couverture assurance complète, 4) Une intervention rapide sur Ivry-sur-Seine et ses environs. Nous garantissons des résultats irréprochables et une sécurité maximale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. À Ivry-sur-Seine, nos devis sont transparents et détaillés, incluant le matériel, la main-d&apos;œuvre et les contraintes techniques spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications officielles comme le CQP Cordiste, suivre des formations en hauteur, posséder une condition physique irréprochable et maîtriser les techniques de sécurité. Une formation continue est également obligatoire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs diplômes IRATA/SPRAT, leur assurance responsabilité civile professionnelle, leurs références clients et leurs certifications de sécurité. Nous recommandons toujours une visite préalable du site et un devis détaillé.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Ivry-sur-Seine ?
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
