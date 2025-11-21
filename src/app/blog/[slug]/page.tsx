import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { getAllBlogPosts, getBlogPostBySlug, getRecentBlogPosts } from '@/lib/googleSheets/blog';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Article non trouvé',
    };
  }

  return {
    title: `${post.title} | Blog GEA`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const recentPosts = await getRecentBlogPosts(3);
  const otherPosts = recentPosts.filter((p) => p.id !== post.id).slice(0, 2);

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    publishedDate: post.publishedAt,
    author: post.author,
    image: post.image,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Article Header */}
      <article className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-gea-blue/10 text-gea-blue rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <span className="text-gray-600">
                {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span className="text-gray-600">• Par {post.author}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gea-black mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Featured Image */}
            <div className="mb-12">
              <div className="h-96 bg-green-300 rounded-xl flex items-center justify-center text-sm font-mono text-green-800">
                [IMAGE ARTICLE : {post.title.substring(0, 30).toUpperCase()}...]
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Simple markdown parsing pour les titres
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2
                      key={index}
                      className="text-3xl font-bold text-gea-black mt-12 mb-6"
                    >
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }

                if (paragraph.startsWith('### ')) {
                  return (
                    <h3
                      key={index}
                      className="text-2xl font-bold text-gea-black mt-8 mb-4"
                    >
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }

                // Listes
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n');
                  return (
                    <ul key={index} className="space-y-2 my-6">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg
                            className="w-6 h-6 text-gea-blue mt-1 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{item.replace('- ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Paragraphes normaux
                return (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed mb-6 text-lg"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* CTA */}
            <div className="bg-gea-blue/10 p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-bold text-gea-black mb-4">
                Besoin d&apos;un expert pour vos travaux en hauteur ?
              </h3>
              <p className="text-gray-700 mb-6">
                Contactez Groupe Expert Altitude pour un devis gratuit et des conseils personnalisés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gea-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-gea-blue/90 transition-all text-center"
                >
                  Demander un devis
                </Link>
                <a
                  href="tel:0972143065"
                  className="bg-gea-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gea-black/90 transition-all text-center"
                >
                  Appeler le 09 72 14 30 65
                </a>
              </div>
            </div>

            {/* Share buttons placeholder */}
            <div className="mt-8 pt-8 border-t">
              <p className="text-gray-700 font-semibold mb-4">Partager cet article :</p>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-xs font-bold">f</span>
                </button>
                <button className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <span className="text-xs font-bold">𝕏</span>
                </button>
                <button className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <span className="text-xs font-bold">in</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gea-black text-center mb-12">
              Vous pourriez aussi aimer
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="h-48 bg-green-300 flex items-center justify-center text-sm font-mono text-green-800">
                    [IMAGE {relatedPost.title.substring(0, 20).toUpperCase()}...]
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gea-blue font-semibold mb-2">
                      {new Date(relatedPost.publishedAt).toLocaleDateString('fr-FR')}
                    </div>
                    <h3 className="text-xl font-bold text-gea-black mb-3 group-hover:text-gea-blue transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-700 line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-block bg-gea-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gea-black/90 transition-all"
              >
                Voir tous les articles
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
