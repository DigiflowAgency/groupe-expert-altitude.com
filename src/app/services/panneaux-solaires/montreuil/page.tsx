import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Montreuil | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Montreuil en une centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de pan',
  keywords: 'panneaux solaires montreuil, installation photovoltaique montreuil, panneaux photovoltaiques montreuil, installateur panneaux solaires montreuil, pose panneaux solaires montreuil, photovoltaique maison montreuil',
};

export default function PanneauxSolairesMontreuilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Montreuil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Montreuil en une centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure qui valorisent votre patrimoine et réduisent significativement votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Montreuil</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux exigences techniques les plus pointues. Nous réalisons un diagnostic précis de votre toiture, évaluons votre consommation énergétique et proposons un système adapté à votre habitat montreuillois. Nos techniciens certifiés utilisent uniquement des panneaux de dernière génération, garantissant une efficacité énergétique supérieure à 22%. Chaque projet fait l&apos;objet d&apos;une étude personnalisée, intégrant les contraintes architecturales et les opportunités de production d&apos;énergie renouvelable. Nous gérons l&apos;intégralité du processus, des autorisations administratives à la mise en service, pour une transition énergétique clé en main.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts RGE avec plus de 10 ans d&apos;expérience
- Solutions 100% personnalisées pour Montreuil
- Accompagnement administratif complet
- Matériels garantis 25 ans
- Économies jusqu&apos;à 70% sur vos factures énergétiques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires coûte entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant atteindre 5 000€ à 10 000€. Un retour sur investissement est généralement constaté entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation varie entre 4 et 8 semaines, incluant l&apos;étude technique préalable (2-3 semaines), les autorisations administratives (3-4 semaines) et la pose effective (2-3 jours).
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez : son immatriculation SIRET, ses certifications officielles (Qualipv, Qualibat), ses références locales, les garanties proposées et les avis clients. Un bon professionnel propose systématiquement une étude technique gratuite avant intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Montreuil ?
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
