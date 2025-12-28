import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Antibes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Antibes et sa région. Spécialistes reconnus, nous pro',
  keywords: 'etancheite toiture antibes, etancheite toit terrasse antibes, etancheite toiture terrasse antibes, reparation etancheite antibes, entreprise etancheite antibes, fuite toiture terrasse antibes',
};

export default function EtancheiteToitureAntibesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Antibes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Antibes et sa région. Spécialistes reconnus, nous protégeons vos bâtiments contre les infiltrations avec des solutions techniques innovantes et durables.</p>

        <h2>Nos services de étanchéité toiture terrasse a Antibes</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques de l&apos;environnement méditerranéen antibois. Nous intervenons sur tous types de surfaces, des résidences privées aux immeubles commerciaux, en utilisant des membranes haute performance garantissant une protection optimale contre l&apos;humidité. Notre processus comprend un diagnostic précis par caméra thermique, un nettoyage approfondi de la surface, puis l&apos;application de résines ou membranes synthétiques adaptées. Nos techniciens certifiés maîtrisent les techniques les plus récentes, assurant une étanchéité qui résiste aux fortes chaleurs comme aux épisodes pluvieux intenses.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Avec plus de 15 ans d&apos;expérience, nous nous distinguons par notre expertise technique unique. Nos interventions bénéficient de garanties décennales, nos équipes sont formées aux dernières normes NF, et nous proposons un diagnostic gratuit sur site. Chaque chantier à Antibes est traité avec une attention personnalisée, en utilisant des matériaux écologiques et certifiés.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, l&apos;état actuel et les matériaux choisis. Pour un projet moyen de 50m², comptez un investissement global entre 4 000€ et 12 500€. Un diagnostic précis permet d&apos;établir un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations, moisissures, décoloration des peintures ou matériaux gondolés. Une inspection professionnelle avec caméra thermique permet de localiser précisément l&apos;origine des infiltrations sans travaux destructifs.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans, selon les matériaux utilisés et l&apos;entretien régulier. Nos solutions intègrent des garanties décennales, avec des membranes synthétiques offrant une protection maximale contre les agressions climatiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Antibes ?
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
