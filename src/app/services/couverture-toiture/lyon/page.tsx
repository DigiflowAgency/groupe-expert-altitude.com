import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Lyon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Lyon et dans sa métropole. Spécialistes depuis plus d',
  keywords: 'couverture toiture lyon, renovation toiture lyon, reparation toiture lyon, couvreur lyon, refection toiture lyon, entreprise couverture lyon',
};

export default function CouvertureToitureLyonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Lyon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Lyon et dans sa métropole. Spécialistes depuis plus de 15 ans, nous intervenons sur tous types de toitures résidentielles et professionnelles avec une expertise technique garantie.</p>

        <h2>Nos services de couverture et rénovation toiture a Lyon</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux problématiques spécifiques de l&apos;habitat lyonnais. Nous réalisons un diagnostic précis de votre toiture, identifiant les zones d&apos;usure et les potentiels risques d&apos;infiltration. Notre équipe qualifiée utilise des matériaux haute performance adaptés aux conditions climatiques locales, assurant une étanchéité maximale et une durabilité exceptionnelle. Nous proposons des solutions personnalisées, depuis les réparations partielles jusqu&apos;à la réfection complète, en privilégiant toujours la qualité et la technicité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Lyon, 2) Des techniciens certifiés et formés aux dernières normes, 3) Un devis gratuit et détaillé sous 48h, 4) Une intervention rapide et professionnelle garantissant la tranquillité de nos clients.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité. Pour une maison standard de 100m², comptez un budget global entre 8 000€ et 25 000€. Nos devis détaillés incluent tous les coûts sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou avant si signes de détérioration : tuiles cassées, infiltrations récurrentes, déformation de la charpente, mousses ou verdissement important. Un diagnostic précis permet de déterminer le moment opportun.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez : 1) Ses certifications professionnelles, 2) Son ancienneté sur le marché lyonnais, 3) Les avis clients vérifiés, 4) La présence de garanties décennales, 5) Un devis détaillé et transparent. Nous recommandons toujours une consultation technique préalable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Lyon ?
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
