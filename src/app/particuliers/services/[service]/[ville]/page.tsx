import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { villes, servicesParticuliers, getVille, getServiceParticulier } from '@/data/seo-locations';

type Props = {
  params: Promise<{ service: string; ville: string }>;
};

export async function generateStaticParams() {
  const params: { service: string; ville: string }[] = [];

  for (const service of servicesParticuliers) {
    for (const ville of villes) {
      params.push({
        service: service.slug,
        ville: ville.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, ville: villeSlug } = await params;
  const service = getServiceParticulier(serviceSlug);
  const ville = getVille(villeSlug);

  if (!service || !ville) {
    return { title: 'Page non trouvée' };
  }

  return {
    title: `${service.title} ${ville.name} | ${service.name} Particuliers | GEA`,
    description: `${service.description} à ${ville.name} et en ${ville.region}. Devis gratuit pour particuliers. Groupe Expert Altitude.`,
    keywords: [...service.keywords.map(k => `${k} ${ville.name}`), ville.name, ville.region],
  };
}

export default async function ServiceVilleParticuliers({ params }: Props) {
  const { service: serviceSlug, ville: villeSlug } = await params;
  const service = getServiceParticulier(serviceSlug);
  const ville = getVille(villeSlug);

  if (!service || !ville) {
    notFound();
  }

  // Autres villes pour le maillage interne
  const autresVilles = villes.filter(v => v.slug !== ville.slug).slice(0, 8);

  // Contenu dynamique selon le service
  const getServiceContent = () => {
    switch (service.slug) {
      case 'panneaux-photovoltaiques':
        return {
          heroText: `Installation de panneaux photovoltaïques pour votre maison à ${ville.name}. Produisez votre propre électricité et réduisez vos factures jusqu'à 70%.`,
          avantages: [
            { title: 'Économies', desc: 'Jusqu\'à 70% sur vos factures', icon: '💰' },
            { title: 'Aides', desc: 'Prime autoconsommation disponible', icon: '🏛️' },
            { title: 'Écologique', desc: 'Énergie propre et renouvelable', icon: '🌱' },
            { title: 'Valorisation', desc: 'Plus-value immobilière', icon: '🏠' },
          ],
          services: ['Étude de toiture gratuite', 'Installation panneaux solaires', 'Raccordement EDF OA', 'Démarches administratives', 'Garantie 25 ans panneaux', 'SAV et maintenance'],
        };
      case 'terrasse-bois':
        return {
          heroText: `Création de terrasse bois sur plot à ${ville.name}. Bois naturel ou composite, nous réalisons la terrasse de vos rêves.`,
          avantages: [
            { title: 'Rapidité', desc: 'Installation en quelques jours', icon: '⚡' },
            { title: 'Pas de béton', desc: 'Pose sur plots réglables', icon: '🌿' },
            { title: 'Choix', desc: 'Bois, composite, carrelage', icon: '🎨' },
            { title: 'Sur-mesure', desc: 'Adapté à votre extérieur', icon: '📐' },
          ],
          services: ['Terrasse bois pin traité', 'Terrasse bois exotique', 'Terrasse composite', 'Contour de piscine', 'Rénovation terrasse', 'Pose margelles'],
        };
      case 'gouttiere':
        return {
          heroText: `Installation et réparation de gouttières à ${ville.name}. Protégez votre maison des infiltrations d'eau.`,
          avantages: [
            { title: 'Protection', desc: 'Évacuation efficace des eaux', icon: '🌧️' },
            { title: 'Durabilité', desc: 'Matériaux résistants', icon: '🏗️' },
            { title: 'Esthétique', desc: 'Finitions soignées', icon: '✨' },
            { title: 'Entretien', desc: 'Nettoyage régulier possible', icon: '🧹' },
          ],
          services: ['Installation gouttières', 'Remplacement descentes', 'Débouchage', 'Réparation fuites', 'Pose crapaudines', 'Nettoyage annuel'],
        };
      case 'ravalement-facade':
        return {
          heroText: `Ravalement de façade pour particuliers à ${ville.name}. Rénovez votre maison avec nos peintures isolantes écologiques.`,
          avantages: [
            { title: 'Esthétique', desc: 'Façade comme neuve', icon: '✨' },
            { title: 'Isolation', desc: 'Peintures thermiques', icon: '🌡️' },
            { title: 'Économies', desc: 'Réduction factures énergie', icon: '💶' },
            { title: 'Durabilité', desc: 'Résistance 15-20 ans', icon: '📅' },
          ],
          services: ['Diagnostic façade', 'Nettoyage haute pression', 'Traitement anti-mousse', 'Rebouchage fissures', 'Peinture isolante', 'Finitions'],
        };
      case 'etancheite-toiture':
        return {
          heroText: `Travaux d'étanchéité toiture à ${ville.name}. Détection et réparation de fuites pour protéger votre maison.`,
          avantages: [
            { title: 'Diagnostic', desc: 'Localisation précise des fuites', icon: '🔍' },
            { title: 'Réparation', desc: 'Solutions durables', icon: '🔧' },
            { title: 'Prévention', desc: 'Évitez les dégâts des eaux', icon: '🛡️' },
            { title: 'Garantie', desc: 'Travaux garantis', icon: '📜' },
          ],
          services: ['Recherche de fuites', 'Réparation infiltrations', 'Traitement toiture', 'Remplacement tuiles', 'Étanchéité terrasse', 'Contrat entretien'],
        };
      default:
        return {
          heroText: `${service.description} à ${ville.name}. Intervention professionnelle par Groupe Expert Altitude.`,
          avantages: [
            { title: 'Qualité', desc: 'Travaux soignés', icon: '⭐' },
            { title: 'Conseil', desc: 'Accompagnement personnalisé', icon: '💬' },
            { title: 'Garantie', desc: 'Travaux garantis', icon: '📜' },
            { title: 'Prix', desc: 'Devis transparent', icon: '💰' },
          ],
          services: ['Diagnostic', 'Devis gratuit', 'Intervention', 'Suivi qualité'],
        };
    }
  };

  const content = getServiceContent();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-gea-black via-gea-dark to-gea-black">
        <div className="absolute inset-0 bg-[url('/images/particulier-service.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold mb-6">
              {ville.name.toUpperCase()} - PARTICULIERS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {service.title} <span className="text-green-400">à {ville.name}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {content.heroText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all"
              >
                Devis gratuit à {ville.name}
              </Link>
              <a
                href="tel:0972143065"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                09 72 14 30 65
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gea-black text-center mb-4">
            Pourquoi choisir GEA pour votre {service.name.toLowerCase()} à {ville.name} ?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Des professionnels qualifiés pour votre projet en {ville.region}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.avantages.map((avantage, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{avantage.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gea-black mb-2">{avantage.title}</h3>
                <p className="text-gray-600">{avantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gea-black text-center mb-12">
            Nos prestations {service.name.toLowerCase()} à {ville.name}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.services.map((prestation, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium text-gea-black">{prestation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 bg-gea-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Intervention à {ville.name} et ses environs
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Nous intervenons à {ville.name} et dans toute la région {ville.region}
          </p>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-center mb-8">
              Groupe Expert Altitude intervient pour votre {service.name.toLowerCase()} à {ville.name},
              mais également dans les communes et villages environnants.
              Contactez-nous pour vérifier notre disponibilité dans votre secteur.
            </p>
          </div>
        </div>
      </section>

      {/* Maillage interne - Autres villes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gea-black text-center mb-8">
            {service.title} dans d&apos;autres villes
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {autresVilles.map((autreVille) => (
              <Link
                key={autreVille.slug}
                href={`/particuliers/services/${service.slug}/${autreVille.slug}`}
                className="px-4 py-2 bg-gray-100 hover:bg-green-500 hover:text-white rounded-lg transition-all text-sm font-medium"
              >
                {service.title} {autreVille.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Votre projet {service.name.toLowerCase()} à {ville.name}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Intervention rapide sur {ville.name} et sa région.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Devis gratuit
            </Link>
            <a
              href="tel:0972143065"
              className="inline-flex items-center justify-center px-8 py-4 bg-gea-black text-white rounded-lg font-semibold hover:bg-gea-black/90 transition-all"
            >
              09 72 14 30 65
            </a>
          </div>
        </div>
      </section>

      {/* Lien retour */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Link
            href={`/particuliers/services/${service.parentService}`}
            className="text-green-600 hover:underline font-medium"
          >
            ← Retour aux services {service.parentService === 'photovoltaique' ? 'Panneaux solaires' : service.parentService === 'terrasses' ? 'Terrasses' : service.parentService === 'peintures-isolantes' ? 'Peintures isolantes' : 'Eaux pluviales'}
          </Link>
        </div>
      </section>
    </>
  );
}
