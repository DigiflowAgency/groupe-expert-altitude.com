import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaPrimary?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  backgroundVideo?: boolean;
  backgroundImage?: string;
  height?: 'small' | 'medium' | 'large';
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaPrimary,
  ctaSecondary,
  backgroundVideo = false,
  backgroundImage,
  height = 'large',
}: HeroProps) {
  const heightClasses = {
    small: 'min-h-[40vh]',
    medium: 'min-h-[60vh]',
    large: 'min-h-[85vh]',
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background - Video or Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gea-black/70 via-gea-black/60 to-gea-blue/30">
        {backgroundVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://image-flow.fr/uploads/43f9bf81-6b66-4d84-ac17-27d874b77ff3-a01e4c3c-9aab-414d-b164-85e7f5362d95.mp4"
              type="video/mp4"
            />
          </video>
        ) : backgroundImage ? (
          <img
            src={backgroundImage}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-green-300 opacity-10">
            {/* Placeholder pour image background */}
          </div>
        )}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gea-black/70 via-gea-black/50 to-transparent" />
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gea-blue rounded-full blur-3xl animate-float-up" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gea-blue rounded-full blur-3xl animate-float-up" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {subtitle && (
            <div className="inline-block mb-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-white font-semibold text-sm uppercase tracking-wide">
                {subtitle}
              </span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up px-4">
            {title}
          </h1>

          {description && (
            <div className="mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold leading-relaxed bg-gea-black/40 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-white/10">
                {description}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {ctaPrimary && (
              <Link
                href={ctaPrimary.href}
                className="bg-gea-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gea-blue/90 transition-all hover:scale-105 shadow-lg shadow-gea-blue/30"
              >
                {ctaPrimary.text}
              </Link>
            )}

            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                {ctaSecondary.text}
              </Link>
            )}
          </div>

          {/* Phone CTA - Responsive */}
          <div className="mt-8 flex items-center justify-center gap-2 text-white animate-slide-up px-4" style={{ animationDelay: '0.3s' }}>
            <a
              href="tel:0972143065"
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full border border-white/30 hover:bg-white/20 transition-all"
            >
              <div className="flex items-center gap-2">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-xs sm:text-sm">Appelez-nous :</span>
              </div>
              <span className="text-white font-bold text-lg sm:text-xl hover:text-white/90 transition-colors">
                09 72 14 30 65
              </span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
