import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Meyzieu | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Meyzieu avec une terrasse bois sur plot élégante et durable, conçue par les experts du Groupe Altitude Com. Nos solutions inn',
  keywords: 'terrasse bois meyzieu, terrasse sur plot meyzieu, terrasse bois sur plot meyzieu, pose terrasse bois meyzieu, terrasse composite meyzieu, terrasse bois piscine meyzieu',
};

export default function TerrasseBoisMeyzieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Meyzieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Meyzieu avec une terrasse bois sur plot élégante et durable, conçue par les experts du Groupe Altitude Com. Nos solutions innovantes s&apos;adaptent parfaitement aux jardins et espaces extérieurs de la région lyonnaise.</p>

        <h2>Nos services de terrasse bois sur plot a Meyzieu</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente la solution idéale pour valoriser votre espace extérieur avec style et fonctionnalité. Notre expertise technique nous permet de créer des terrasses parfaitement nivelées, offrant une stabilité optimale grâce à un système de plots réglables. Nous travaillons principalement avec des matériaux haute qualité comme le bois composite et le bois exotique, garantissant une résistance aux intempéries et une durabilité jusqu&apos;à 25 ans. Notre processus comprend un diagnostic précis du terrain à Meyzieu, une préparation minutieuse du sol, et une pose selon les normes professionnelles, assurant un résultat impeccable et esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans, 2) Un devis personnalisé et gratuit, 3) Des matériaux certifiés et écologiques, 4) Une équipe de professionnels qualifiés et passionnés par leur métier. Nous garantissons une qualité de réalisation qui transformera durablement vos espaces extérieurs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite coûtera généralement autour de 120-150€/m², alors qu&apos;un bois exotique premium peut atteindre 200-250€/m². Notre équipe propose systématiquement un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité, mais en moyenne, comptez 2 à 5 jours pour un projet de 20-30 m². Notre équipe optimise chaque étape pour une réalisation rapide et précise, avec un planning clairement établi dès le début du chantier.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Meyzieu, nous recommandons le bois composite (très résistant), l&apos;ipé (bois exotique très dense), ou le mélèze (bois local naturellement traité). Le choix dépendra de votre budget, de l&apos;exposition et de l&apos;usage prévu. Nous conseillons systématiquement le matériau le plus adapté à votre projet spécifique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Meyzieu ?
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
