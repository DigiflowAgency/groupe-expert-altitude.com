import Breadcrumb from '@/components/ui/Breadcrumb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | Groupe Expert Altitude',
  description: 'Mentions légales du site Groupe Expert Altitude - GEA SAS',
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  const breadcrumbItems = [
    { label: 'Mentions légales', href: '/mentions-legales' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gea-black mb-8">
              Mentions Légales
            </h1>

            <div className="prose prose-lg max-w-none">
              {/* Informations générales */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gea-black mb-4">
                  1. Informations générales
                </h2>

                <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-gray-900">
                  <p>
                    <strong>Dénomination sociale :</strong> GEA (Groupe Expert Altitude)
                  </p>
                  <p>
                    <strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)
                  </p>
                  <p>
                    <strong>Capital social :</strong> 1 000€
                  </p>
                  <p>
                    <strong>Siège social :</strong> 229 rue Saint-Honoré, 75001 Paris, France
                  </p>
                  <p>
                    <strong>SIRET :</strong> 942 173 972
                  </p>
                  <p>
                    <strong>RCS :</strong> Paris
                  </p>
                  <p>
                    <strong>Téléphone :</strong>{' '}
                    <a href="tel:0972143065" className="text-gea-blue hover:underline font-semibold">
                      09 72 14 30 65
                    </a>
                  </p>
                  <p>
                    <strong>Email :</strong>{' '}
                    <a
                      href="mailto:contact@groupe-expert-altitude.fr"
                      className="text-gea-blue hover:underline font-semibold"
                    >
                      contact@groupe-expert-altitude.fr
                    </a>
                  </p>
                  <p>
                    <strong>Directeur de publication :</strong> Jessica H
                  </p>
                </div>
              </section>

              {/* Hébergement */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gea-black mb-4">
                  2. Hébergement
                </h2>
                <p className="text-gray-900 leading-relaxed">
                  Le site <strong>groupe-expert-altitude.fr</strong> est hébergé par :
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4 text-gray-900">
                  <p>
                    <strong>Hébergeur :</strong> Infomaniak Network SA
                  </p>
                  <p>Rue Eugène-Marziano 25</p>
                  <p>1227 Les Acacias, Genève</p>
                  <p>Suisse</p>
                  <p>
                    <strong>Site web :</strong>{' '}
                    <a
                      href="https://www.infomaniak.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gea-blue hover:underline"
                    >
                      www.infomaniak.com
                    </a>
                  </p>
                </div>
              </section>

              {/* Conception et réalisation */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gea-black mb-4">
                  3. Conception et réalisation
                </h2>
                <p className="text-gray-900 leading-relaxed">
                  Le site internet a été conçu et réalisé par :
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4 text-gray-900">
                  <p>
                    <strong>DIGIFLOW AGENCY</strong>
                  </p>
                  <p>EJ INVEST</p>
                  <p>
                    <strong>Site web :</strong>{' '}
                    <a
                      href="https://digiflow-agency.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gea-blue hover:underline"
                    >
                      digiflow-agency.fr
                    </a>
                  </p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gea-black mb-4">
                  4. Propriété intellectuelle
                </h2>
                <p className="text-gray-900 leading-relaxed mb-4">
                  L'ensemble du contenu de ce site (textes, images, vidéos, graphismes, logos, icônes, etc.) est la propriété exclusive de <strong>GEA</strong> ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                </p>
                <p className="text-gray-900 leading-relaxed">
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de <strong>GEA</strong>.
                </p>
              </section>

              {/* Données personnelles */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gea-black mb-4">
                  5. Protection des données personnelles (RGPD)
                </h2>
                <p className="text-gray-900 leading-relaxed mb-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>

                <h3 className="text-xl font-bold text-gea-black mt-6 mb-3">
                  5.1 Collecte des données
                </h3>
                <p className="text-gray-900 leading-relaxed mb-4">
                  Les données personnelles collectées via le formulaire de contact sont :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-900 mb-4">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Nom de l'entreprise (facultatif)</li>
                  <li>Message et demande</li>
                </ul>

                <h3 className="text-xl font-bold text-gea-black mt-6 mb-3">
                  5.2 Finalité du traitement
                </h3>
                <p className="text-gray-900 leading-relaxed mb-4">
                  Ces données sont collectées uniquement dans le but de :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-900 mb-4">
                  <li>Répondre à vos demandes de contact ou de devis</li>
                  <li>Assurer le suivi de votre demande</li>
                  <li>Vous informer de nos services (avec votre consentement)</li>
                </ul>

                <h3 className="text-xl font-bold text-gea-black mt-6 mb-3">
                  5.3 Exercice de vos droits
                </h3>
                <p className="text-gray-900 leading-relaxed">
                  Pour exercer vos droits ou pour toute question relative au traitement de vos données personnelles, vous pouvez nous contacter à l'adresse :{' '}
                  <a
                    href="mailto:contact@groupe-expert-altitude.fr"
                    className="text-gea-blue hover:underline"
                  >
                    contact@groupe-expert-altitude.fr
                  </a>
                </p>
              </section>

              {/* Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gea-black mb-4">
                  6. Cookies
                </h2>
                <p className="text-gray-900 leading-relaxed mb-4">
                  Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites.
                </p>
                <p className="text-gray-900 leading-relaxed">
                  Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Cependant, cela peut affecter certaines fonctionnalités du site.
                </p>
              </section>

              {/* Responsabilité */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gea-black mb-4">
                  7. Limitation de responsabilité
                </h2>
                <p className="text-gray-900 leading-relaxed mb-4">
                  <strong>GEA</strong> s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, <strong>GEA</strong> ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                </p>
                <p className="text-gray-900 leading-relaxed">
                  <strong>GEA</strong> ne pourra être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données, les détériorations, destructions ou virus qui pourraient affecter votre équipement informatique.
                </p>
              </section>

              {/* Liens externes */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gea-black mb-4">
                  8. Liens externes
                </h2>
                <p className="text-gray-900 leading-relaxed">
                  Le site peut contenir des liens vers d'autres sites web. <strong>GEA</strong> n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </section>

              {/* Droit applicable */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gea-black mb-4">
                  9. Droit applicable et juridiction compétente
                </h2>
                <p className="text-gray-900 leading-relaxed">
                  Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </section>

              {/* Modification */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gea-black mb-4">
                  10. Modification des mentions légales
                </h2>
                <p className="text-gray-900 leading-relaxed">
                  <strong>GEA</strong> se réserve le droit de modifier les présentes mentions légales à tout moment. Il est conseillé de les consulter régulièrement.
                </p>
              </section>

              {/* Contact */}
              <section className="bg-gea-blue/10 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-gea-black mb-4">
                  Contact
                </h2>
                <p className="text-gray-900 mb-4">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                </p>
                <div className="space-y-2 text-gray-900">
                  <p>
                    <strong>Par téléphone :</strong>{' '}
                    <a
                      href="tel:0972143065"
                      className="text-gea-blue hover:underline font-semibold"
                    >
                      09 72 14 30 65
                    </a>
                  </p>
                  <p>
                    <strong>Par email :</strong>{' '}
                    <a
                      href="mailto:contact@groupe-expert-altitude.fr"
                      className="text-gea-blue hover:underline font-semibold"
                    >
                      contact@groupe-expert-altitude.fr
                    </a>
                  </p>
                  <p>
                    <strong>Par courrier :</strong> GEA, 229 rue Saint-Honoré, 75001 Paris
                  </p>
                </div>
              </section>

              <p className="text-sm text-gray-600 mt-8">
                <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
