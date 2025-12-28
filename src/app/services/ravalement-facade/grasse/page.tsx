import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Grasse | Groupe Expert Altitude Com',
  description: 'Dans la cité parfumée de Grasse, le ravalement de façade est bien plus qu&apos;un simple coup de peinture : c&apos;est une véritable renaissance architecturale qui p',
  keywords: 'ravalement facade grasse, ravalement immeuble grasse, renovation facade grasse, peinture facade grasse, entreprise ravalement grasse, ravalement facade maison grasse',
};

export default function RavalementFacadeGrassePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Grasse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Dans la cité parfumée de Grasse, le ravalement de façade est bien plus qu&apos;un simple coup de peinture : c&apos;est une véritable renaissance architecturale qui protège et valorise votre patrimoine. Le Groupe Expert Altitude Com transforme vos murs en véritables chefs-d&apos;œuvre durables.</p>

        <h2>Nos services de ravalement de façade a Grasse</h2>
        <div className="space-y-4">
          <p>Notre expertise en ravalement de façade couvre tous types de bâtiments, des maisons individuelles aux immeubles collectifs à Grasse et ses environs. Nous intervenons avec une méthodologie précise : diagnostic technique complet, préparation des surfaces, traitement des imperfections, application de revêtements haute performance. Notre process garantit une rénovation esthétique et structurelle, qui résiste aux conditions climatiques méditerranéennes. Chaque chantier bénéficie d&apos;un suivi personnalisé, avec des techniques d&apos;application respectant l&apos;authenticité architecturale grassoise et les normes environnementales actuelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans à Grasse
• Équipe de 12 professionnels certifiés
• Devis gratuit et précis sous 48h
• Techniques écologiques et économiques
• Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen d&apos;un ravalement de façade varie entre 50€ et 120€ par m², selon la complexité du support, les matériaux choisis et l&apos;état initial. Pour une maison moyenne de 100m², comptez un budget global entre 5 000€ et 12 000€ avec préparation et finitions incluses.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, pour un immeuble de 4-5 étages à Grasse, le chantier dure entre 10 et 15 jours ouvrés, incluant préparation, réparations et finitions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans selon le Code de la Construction, ou en cas de dégradations significatives. Les copropriétés doivent également le réaliser si l&apos;état général nuit à l&apos;esthétique ou à la solidité du bâtiment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Grasse ?
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
