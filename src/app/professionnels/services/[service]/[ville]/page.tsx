import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { villes, servicesPro, getVille, getServicePro } from '@/data/seo-locations';

type Props = {
  params: Promise<{ service: string; ville: string }>;
};

export async function generateStaticParams() {
  const params: { service: string; ville: string }[] = [];

  for (const service of servicesPro) {
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
  const service = getServicePro(serviceSlug);
  const ville = getVille(villeSlug);

  if (!service || !ville) {
    return { title: 'Page non trouvée' };
  }

  return {
    title: `${service.title} ${ville.name} | ${service.name} Professionnels | GEA`,
    description: `${service.description} à ${ville.name} et en ${ville.region}. Devis gratuit, intervention rapide. Groupe Expert Altitude, spécialiste travaux en hauteur.`,
    keywords: [...service.keywords.map(k => `${k} ${ville.name}`), ville.name, ville.region],
  };
}

export default async function ServiceVillePro({ params }: Props) {
  const { service: serviceSlug, ville: villeSlug } = await params;
  const service = getServicePro(serviceSlug);
  const ville = getVille(villeSlug);

  if (!service || !ville) {
    notFound();
  }

  // Autres villes pour le maillage interne
  const autresVilles = villes.filter(v => v.slug !== ville.slug).slice(0, 8);

  // Contenu dynamique selon le service
  const getServiceContent = () => {
    switch (service.slug) {
      case 'cordiste':
        return {
          heroText: `Nos cordistes professionnels certifiés CQP interviennent à ${ville.name} pour tous vos travaux en hauteur : nettoyage de vitres, traitement de toiture, réparation de façade.`,
          avantages: [
            { title: '-40% de coût', desc: 'Par rapport aux nacelles et échafaudages', icon: '💰' },
            { title: 'Rapidité', desc: 'Installation en quelques heures', icon: '⚡' },
            { title: 'Sécurité', desc: 'Cordistes certifiés CQP', icon: '🛡️' },
            { title: 'Accessibilité', desc: 'Accès aux zones difficiles', icon: '🏗️' },
          ],
          services: ['Nettoyage de vitres en hauteur', 'Traitement de toiture', 'Réparation de fissures', 'Ravalement de façade', 'Pose de filets anti-pigeons', 'Inspection technique'],
        };
      case 'ravalement-facade':
        return {
          heroText: `Spécialistes du ravalement de façade à ${ville.name}, nous utilisons des peintures isolantes Thermo-Reflect pour un résultat esthétique et performant énergétiquement.`,
          avantages: [
            { title: 'Isolation', desc: 'Peintures thermiques haute performance', icon: '🌡️' },
            { title: 'Esthétique', desc: 'Rénovation complète de votre façade', icon: '✨' },
            { title: 'Durabilité', desc: 'Garantie 10 ans sur nos travaux', icon: '📅' },
            { title: 'Économies', desc: 'Réduction des coûts énergétiques', icon: '💶' },
          ],
          services: ['Ravalement complet', 'Nettoyage façade', 'Traitement anti-mousse', 'Peinture isolante', 'Réparation fissures', 'Imperméabilisation'],
        };
      case 'panneaux-photovoltaiques':
        return {
          heroText: `Installation de panneaux photovoltaïques à ${ville.name} pour les professionnels. Réduisez vos factures d'électricité jusqu'à 70% avec une installation sur-mesure.`,
          avantages: [
            { title: 'Économies', desc: 'Jusqu\'à 70% sur vos factures', icon: '💰' },
            { title: 'ROI rapide', desc: 'Rentabilité en 5-8 ans', icon: '📈' },
            { title: 'Écologique', desc: 'Réduisez votre empreinte carbone', icon: '🌱' },
            { title: 'Autonomie', desc: 'Indépendance énergétique', icon: '🔋' },
          ],
          services: ['Étude de faisabilité', 'Installation panneaux', 'Raccordement réseau', 'Maintenance', 'Nettoyage', 'Monitoring production'],
        };
      case 'etancheite-toiture':
        return {
          heroText: `Experts en étanchéité de toiture à ${ville.name}, nous intervenons sur tous types de toitures : terrasses, toits plats, toitures industrielles.`,
          avantages: [
            { title: 'Diagnostic', desc: 'Détection précise des fuites', icon: '🔍' },
            { title: 'Durabilité', desc: 'Solutions pérennes', icon: '🏗️' },
            { title: 'Garantie', desc: 'Travaux garantis 10 ans', icon: '📜' },
            { title: 'Réactivité', desc: 'Intervention rapide', icon: '⚡' },
          ],
          services: ['Diagnostic étanchéité', 'Membrane bitumineuse', 'Membrane EPDM', 'Résine polyuréthane', 'Traitement points singuliers', 'Réfection complète'],
        };
      case 'couverture-toiture':
        return {
          heroText: `Entreprise de couverture à ${ville.name}, nous réalisons tous vos travaux de toiture : rénovation, réparation, entretien.`,
          avantages: [
            { title: 'Expertise', desc: 'Plus de 15 ans d\'expérience', icon: '🏆' },
            { title: 'Qualité', desc: 'Matériaux premium', icon: '⭐' },
            { title: 'Garantie', desc: 'Travaux garantis', icon: '📜' },
            { title: 'Devis gratuit', desc: 'Estimation sans engagement', icon: '📋' },
          ],
          services: ['Rénovation toiture', 'Remplacement tuiles', 'Réparation ardoises', 'Traitement charpente', 'Isolation sous toiture', 'Velux et fenêtres de toit'],
        };
      case 'zinguerie':
        return {
          heroText: `Zingueur professionnel à ${ville.name}, nous réalisons tous vos travaux de zinguerie : gouttières, descentes, habillages.`,
          avantages: [
            { title: 'Savoir-faire', desc: 'Artisans qualifiés', icon: '🔧' },
            { title: 'Matériaux', desc: 'Zinc, cuivre, aluminium', icon: '🏗️' },
            { title: 'Sur-mesure', desc: 'Adaptation à votre bâtiment', icon: '📐' },
            { title: 'Durabilité', desc: 'Travaux pérennes', icon: '⏳' },
          ],
          services: ['Gouttières zinc', 'Descentes eaux pluviales', 'Habillage cheminée', 'Noue et arêtier', 'Bavette et abergement', 'Réparation zinguerie'],
        };
      case 'gouttiere':
        return {
          heroText: `Installation et réparation de gouttières à ${ville.name}. Protégez votre bâtiment des infiltrations avec des gouttières performantes.`,
          avantages: [
            { title: 'Protection', desc: 'Évacuation efficace des eaux', icon: '🌧️' },
            { title: 'Choix', desc: 'PVC, alu, zinc, cuivre', icon: '🎨' },
            { title: 'Installation', desc: 'Pose soignée', icon: '🔧' },
            { title: 'Entretien', desc: 'Nettoyage et débouchage', icon: '🧹' },
          ],
          services: ['Installation gouttières', 'Remplacement descentes', 'Débouchage gouttières', 'Réparation fuites', 'Pose crapaudines', 'Contrat entretien'],
        };
      case 'cool-roof':
        return {
          heroText: `Solution Cool Roof à ${ville.name} : réduisez la température de vos bâtiments jusqu'à 30°C avec notre peinture réflective haute performance.`,
          avantages: [
            { title: '-30°C', desc: 'Sur la surface de toiture', icon: '❄️' },
            { title: 'Économies', desc: 'Climatisation réduite', icon: '💰' },
            { title: 'Écologique', desc: 'Réduction îlot de chaleur', icon: '🌱' },
            { title: 'Durabilité', desc: 'Efficacité 15-20 ans', icon: '📅' },
          ],
          services: ['Diagnostic thermique', 'Application Cool Roof', 'Traitement toiture', 'Suivi performance', 'Certificat économie énergie', 'Maintenance'],
        };
      case 'nettoyage-panneaux-solaires':
        return {
          heroText: `Nettoyage professionnel de panneaux solaires à ${ville.name}. Optimisez le rendement de votre installation photovoltaïque.`,
          avantages: [
            { title: '+25%', desc: 'De rendement après nettoyage', icon: '📈' },
            { title: 'Sécurité', desc: 'Intervention par cordistes', icon: '🧗' },
            { title: 'Produits', desc: 'Eau déminéralisée', icon: '💧' },
            { title: 'Régularité', desc: 'Contrats annuels', icon: '📅' },
          ],
          services: ['Nettoyage panneaux', 'Inspection visuelle', 'Contrôle fixations', 'Rapport d\'intervention', 'Contrat maintenance', 'Dépannage'],
        };
      default:
        return {
          heroText: `${service.description} à ${ville.name}. Intervention professionnelle par Groupe Expert Altitude.`,
          avantages: [
            { title: 'Expertise', desc: 'Professionnels qualifiés', icon: '🏆' },
            { title: 'Qualité', desc: 'Travaux soignés', icon: '⭐' },
            { title: 'Rapidité', desc: 'Intervention rapide', icon: '⚡' },
            { title: 'Garantie', desc: 'Travaux garantis', icon: '📜' },
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
        <div className="absolute inset-0 bg-[url('/images/pro-service.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-gea-blue/20 text-gea-light-blue rounded-full text-sm font-semibold mb-6">
              {ville.name.toUpperCase()} - PROFESSIONNELS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {service.title} <span className="text-gea-light-blue">à {ville.name}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {content.heroText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gea-blue text-white rounded-lg font-semibold hover:bg-gea-blue/90 transition-all"
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
            Experts en {service.name.toLowerCase()} en {ville.region}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.avantages.map((avantage, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-gea-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gea-black text-center mb-12">
            Nos prestations {service.name.toLowerCase()} à {ville.name}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.services.map((prestation, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4">
                <svg className="w-6 h-6 text-gea-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            Zone d&apos;intervention autour de {ville.name}
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Nous intervenons à {ville.name} et dans toute la région {ville.region}
          </p>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-300 text-center mb-8">
              Groupe Expert Altitude intervient pour vos travaux de {service.name.toLowerCase()} à {ville.name},
              mais également dans les villes et communes environnantes de {ville.region}.
              N&apos;hésitez pas à nous contacter pour vérifier notre disponibilité dans votre secteur.
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
                href={`/professionnels/services/${service.slug}/${autreVille.slug}`}
                className="px-4 py-2 bg-gray-100 hover:bg-gea-blue hover:text-white rounded-lg transition-all text-sm font-medium"
              >
                {service.title} {autreVille.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gea-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d&apos;un {service.name.toLowerCase()} à {ville.name} ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit. Intervention rapide sur {ville.name} et sa région.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gea-blue rounded-lg font-semibold hover:bg-gray-100 transition-all"
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
            href={`/professionnels/services/${service.parentService}`}
            className="text-gea-blue hover:underline font-medium"
          >
            ← Retour aux services {service.parentService === 'travaux-en-hauteur' ? 'Travaux en hauteur' : service.parentService === 'photovoltaique' ? 'Photovoltaïque' : service.parentService === 'peintures-isolantes' ? 'Peintures isolantes' : 'Eaux pluviales'}
          </Link>
        </div>
      </section>
    </>
  );
}
