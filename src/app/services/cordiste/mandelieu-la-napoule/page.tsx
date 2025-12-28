import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Mandelieu-la-Napoule | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Mandelieu-la-Napoule, offrant des solutions acrobatiques professionnelles',
  keywords: 'cordiste mandelieu-la-napoule, travaux sur corde mandelieu-la-napoule, travaux acrobatiques mandelieu-la-napoule, cordiste batiment mandelieu-la-napoule, intervention cordiste mandelieu-la-napoule, entreprise cordiste mandelieu-la-napoule',
};

export default function CordisteMandelieuLaNapoulePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Mandelieu-la-Napoule</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Mandelieu-la-Napoule, offrant des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus techniques de la Côte d&apos;Azur.</p>

        <h2>Nos services de travaux sur corde - cordistes a Mandelieu-la-Napoule</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent une solution innovante et sécurisée pour les interventions en milieux verticaux complexes. Que ce soit pour la rénovation de façades, l&apos;entretien de bâtiments industriels ou des missions de maintenance spécialisées, nos cordistes disposent d&apos;une expertise technique unique. Chaque intervention est précédée d&apos;un diagnostic précis, permettant une planification optimale et une exécution sans faille. Nos équipes utilisent un équipement dernier cri, garantissant une efficacité maximale tout en respectant les normes de sécurité les plus strictes. Sur Mandelieu-la-Napoule et ses environs, nous intervenons avec une réactivité et une précision qui font notre réputation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : plus de 15 ans d&apos;expérience en travaux acrobatiques, une certification QUALIBAT qui atteste de notre professionnalisme, des techniciens formés aux dernières normes de sécurité, et un taux de satisfaction client de 98%. Nous proposons une approche personnalisée, un devis gratuit et transparent, et une intervention rapide sur l&apos;ensemble du territoire de Mandelieu-la-Napoule.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité des travaux. Un diagnostic préalable gratuit nous permet de définir un devis précis adapté à votre projet spécifique. Les facteurs influençant le prix incluent la hauteur, la difficulté technique et les équipements nécessaires.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste professionnel, il faut obtenir une formation qualifiante de niveau CAP/BEP, réussir des certifications spécifiques comme le CQP Cordiste, justifier d&apos;une condition physique excellente et suivre régulièrement des formations de sécurité. Une expérience minimale de 3 ans est généralement recommandée par les entreprises.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : la certification QUALIBAT, l&apos;existence d&apos;une assurance responsabilité civile professionnelle, les références clients, les attestations de formations sécurité de l&apos;équipe et un historique de réalisations. N&apos;hésitez pas à demander un portfolio de leurs interventions précédentes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Mandelieu-la-Napoule ?
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
