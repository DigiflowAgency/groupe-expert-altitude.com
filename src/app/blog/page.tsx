import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { getAllBlogPosts } from '@/lib/googleSheets/blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Actualités | Groupe Expert Altitude',
  description: 'Découvrez nos actualités, conseils et réalisations en travaux en hauteur, couverture, façades et maintenance technique.',
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  const breadcrumbItems = [{ label: 'Blog', href: '/blog' }];

  // Grouper par catégories
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gea-black to-gea-blue/20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Blog & Actualités</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Retrouvez nos dernières actualités, conseils d&apos;experts et retours d&apos;expérience sur nos chantiers
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Catégories Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button className="px-6 py-2 bg-gea-blue text-white rounded-full font-semibold">
              Tous
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gea-blue/10 hover:text-gea-blue transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {posts[0] && (
            <div className="mb-16">
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="h-96 bg-green-300 flex items-center justify-center text-sm font-mono text-green-800">
                    [IMAGE ARTICLE PRINCIPAL]
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="text-sm text-gea-blue font-semibold mb-2">
                      {new Date(posts[0].publishedAt).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                      {' • '}
                      {posts[0].category}
                    </div>
                    <h2 className="text-3xl font-bold text-gea-black mb-4">
                      {posts[0].title}
                    </h2>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      {posts[0].excerpt}
                    </p>
                    <Link
                      href={`/blog/${posts[0].slug}`}
                      className="inline-flex items-center gap-2 text-gea-blue hover:text-gea-blue/80 font-semibold text-lg"
                    >
                      Lire l&apos;article
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* All Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="h-56 bg-green-300 flex items-center justify-center text-sm font-mono text-green-800">
                  [IMAGE {post.title.substring(0, 20).toUpperCase()}...]
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gea-blue font-semibold uppercase">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString('fr-FR')}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gea-black mb-3 group-hover:text-gea-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gea-blue hover:text-gea-blue/80 font-semibold inline-flex items-center gap-2"
                  >
                    Lire la suite
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No posts message */}
          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">
                Aucun article pour le moment. Revenez bientôt !
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gea-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Restez informé de nos actualités
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Recevez nos derniers articles et conseils directement dans votre boîte mail
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="bg-gea-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-gea-blue/90 transition-all">
                S&apos;inscrire
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Newsletter à configurer lors de la mise en production
            </p>
          </div>
        </div>
      </section>

      {/* Google Sheets Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-bold text-gea-black mb-3">
              📊 Gestion des articles via Google Sheets
            </h3>
            <p className="text-gray-700 mb-3">
              Les articles de ce blog sont gérés via Google Sheets. Pour ajouter ou modifier des articles :
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
              <li>Configurez l'API Google Sheets (voir <code className="bg-gray-100 px-2 py-1 rounded">/src/lib/googleSheets/blog.ts</code>)</li>
              <li>Créez un Google Sheet avec les colonnes : id, title, slug, excerpt, content, image, publishedAt, author, category</li>
              <li>Partagez le Sheet avec votre compte de service Google</li>
              <li>Ajoutez les variables d'environnement nécessaires</li>
              <li>Les articles seront automatiquement chargés depuis le Sheet</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
