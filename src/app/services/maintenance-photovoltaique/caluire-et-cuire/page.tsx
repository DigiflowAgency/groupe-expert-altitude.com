import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Caluire-et-Cuire | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Caluire-et-Cuire et ses environs',
  keywords: 'nettoyage panneaux solaires caluire-et-cuire, maintenance photovoltaique caluire-et-cuire, entretien panneaux solaires caluire-et-cuire, nettoyage photovoltaique caluire-et-cuire, maintenance panneaux photovoltaiques caluire-et-cuire',
};

export default function MaintenancePhotovoltaiqueCaluireEtCuirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Caluire-et-Cuire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Caluire-et-Cuire et ses environs. Nous garantissons des installations photovoltaïques performantes grâce à un service expert et personnalisé.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Caluire-et-Cuire</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés interviennent sur tous types d&apos;installations photovoltaïques, en utilisant des techniques et du matériel spécialisés. Nous réalisons un diagnostic complet, nettoyons méticuleusement chaque panneau sans risquer de les endommager et vérifions l&apos;intégralité du système électrique. Notre objectif : maintenir un rendement optimal, avec en moyenne 15% de performance supplémentaire après notre intervention. Sur Caluire-et-Cuire, nous comprenons les enjeux spécifiques liés à l&apos;environnement local et adaptons nos protocoles en conséquence.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec plus de 10 ans d&apos;expérience, 2) Un diagnostic précis et transparent, 3) Des techniciens formés aux dernières normes photovoltaïques, 4) Un service sur-mesure adapté à chaque installation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la taille et la complexité de votre installation. Notre tarif comprend un nettoyage complet, un contrôle électrique et un rapport détaillé de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou avec beaucoup d&apos;arbres à proximité. Un entretien régulier permet de maintenir 95% de l&apos;efficacité initiale de vos panneaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, observez votre production électrique via votre onduleur, comparez avec les données historiques et surveillez l&apos;absence d&apos;anomalies visuelles comme des traces, salissures ou micro-fissures. Un diagnostic annuel professionnel reste le moyen le plus fiable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Caluire-et-Cuire ?
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
