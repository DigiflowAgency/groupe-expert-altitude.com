import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Vénissieux | Groupe Expert Altitude Com',
  description: 'Transformez votre maison de Vénissieux en une source d&apos;énergie propre et économique avec Groupe Expert Altitude Com, votre partenaire spécialiste en instal',
  keywords: 'panneaux solaires vénissieux, installation photovoltaique vénissieux, panneaux photovoltaiques vénissieux, installateur panneaux solaires vénissieux, pose panneaux solaires vénissieux, photovoltaique maison vénissieux',
};

export default function PanneauxSolairesVenissieuxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Vénissieux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre maison de Vénissieux en une source d&apos;énergie propre et économique avec Groupe Expert Altitude Com, votre partenaire spécialiste en installation de panneaux solaires photovoltaïques. Nous vous accompagnons vers une transition énergétique intelligente et durable.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Vénissieux</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation de panneaux photovoltaïques répond aux besoins croissants des habitants de Vénissieux en matière d&apos;énergie renouvelable. Nous proposons des solutions clés en main, adaptées à chaque configuration de toiture et budget. Notre processus commence par un diagnostic technique précis, où nos experts évaluent le potentiel solaire de votre propriété et dimensionnent le système optimal. Nos panneaux haute performance garantissent un rendement énergétique jusqu&apos;à 22% supérieur aux installations traditionnelles, permettant de réduire significativement vos factures d&apos;électricité et votre empreinte carbone.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise certifiée RGE avec plus de 10 ans d&apos;expérience, 2) Des techniciens hautement qualifiés et formés aux dernières technologies photovoltaïques, 3) Un accompagnement complet incluant études, installation et suivi de performance, 4) Des solutions personnalisées et des financements adaptés.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface, avec un retour sur investissement moyen de 8 à 12 ans. Des aides de l&apos;État comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent réduire jusqu&apos;à 40% du coût total.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend généralement de 4 à 8 semaines, incluant l&apos;étude technique, l&apos;obtention des autorisations, la pose des panneaux et le raccordement au réseau électrique. Notre équipe de Vénissieux optimise chaque étape pour minimiser les délais.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez : 1) L&apos;inscription sur le site officiel Qualibat, 2) Les références clients et avis, 3) La proposition d&apos;un devis détaillé, 4) La garantie décennale, 5) Les certifications professionnelles spécifiques au photovoltaïque.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Vénissieux ?
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
