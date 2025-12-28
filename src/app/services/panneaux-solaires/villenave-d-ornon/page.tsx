import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Villenave-d\'Ornon | Groupe Expert Altitude Com',
  description: 'À Villenave-d&apos;Ornon, le Groupe Expert Altitude Com révolutionne votre consommation énergétique avec des solutions d&apos;installation de panneaux solaires photo',
  keywords: 'panneaux solaires villenave-d'ornon, installation photovoltaique villenave-d'ornon, panneaux photovoltaiques villenave-d'ornon, installateur panneaux solaires villenave-d'ornon, pose panneaux solaires villenave-d'ornon, photovoltaique maison villenave-d'ornon',
};

export default function PanneauxSolairesVillenaveDOrnonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Villenave-d'Ornon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">À Villenave-d&apos;Ornon, le Groupe Expert Altitude Com révolutionne votre consommation énergétique avec des solutions d&apos;installation de panneaux solaires photovoltaïques sur mesure. Transformez votre habitat en une source d&apos;énergie propre et économique, directement adaptée aux spécificités de votre région girondine.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Villenave-d'Ornon</h2>
        <div className="space-y-4">
          <p>Nos experts en installation photovoltaïque proposent une approche globale et personnalisée pour équiper votre maison de panneaux solaires performants. Chaque projet commence par un diagnostic technique précis, évaluant l&apos;orientation, l&apos;inclinaison et la surface disponible de votre toiture. Nos solutions haut de gamme permettent de produire jusqu&apos;à 70% de votre consommation électrique annuelle, avec des rendements atteignant 22% grâce à des technologies de pointe. Nous garantissons une installation clé en main, du dimensionnement jusqu&apos;au raccordement au réseau électrique, en minimisant les contraintes pour nos clients de Villenave-d&apos;Ornon et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous maîtrisons tous les aspects techniques de l&apos;installation photovoltaïque. Notre équipe dispose de plus de 10 ans d&apos;expérience, avec des techniciens formés aux dernières normes. Nous proposons des financements adaptés, des panneaux avec 25 ans de garantie, et un accompagnement personnalisé de A à Z.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une maison standard de 100m², le coût d&apos;installation varie entre 9 000€ et 15 000€, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un retour sur investissement est généralement constaté entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai moyen d&apos;installation de panneaux photovoltaïques est de 3 à 5 semaines, incluant le diagnostic initial, les démarches administratives et la pose technique. Notre équipe s&apos;engage à respecter un planning précis et transparent.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez impérativement sa certification Qualibat, Qualit&apos;EnR ou AFCEE. Demandez ses références locales, son ancienneté, et assurez-vous qu&apos;il propose un accompagnement complet incluant études, installation et suivi.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Villenave-d'Ornon ?
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
