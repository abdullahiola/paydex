import Image from 'next/image'
import Terminal from './terminal'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(2deg); }
          50% { transform: translateY(-30px) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-2deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.4)); }
          50% { filter: drop-shadow(0 0 40px rgba(34, 211, 238, 0.8)); }
        }
        .logo-float {
          animation: float 6s ease-in-out infinite;
        }
        .logo-container:hover .logo-float {
          animation: float 3.5s ease-in-out infinite;
        }
        .logo-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left side - Logo and Terminal */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="logo-container relative cursor-pointer group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 rounded-3xl blur-3xl group-hover:blur-2xl group-hover:from-cyan-400/40 group-hover:to-emerald-400/40 transition-all duration-300" />
              <div className="logo-float logo-glow relative">
                <Image
                  src="/pd.png"
                  alt="PayDex logo"
                  width={400}
                  height={400}
                  className="relative h-96 w-96 drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <span className="text-accent text-sm font-semibold"></span>
              </div>
            </div>
            <Terminal />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="inline-block rounded-full border border-accent/30 px-4 py-2 text-sm font-medium text-accent">
              Telegram Bot for Dex Payments
            </div>

            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Pay for DEX{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Without Hassle
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              PayDex handles all the complexity so you can focus on what matters – your trades.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://t.me/paydex_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground hover:bg-blue-600 transition-colors"
              >
                Pay Dex Now
              </a>
              <button className="inline-flex items-center justify-center rounded-full border border-accent/50 px-8 py-4 text-lg font-semibold text-accent hover:border-accent hover:bg-accent/5 transition-colors">
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-white">$1K+</div>
                <div className="text-sm text-muted-foreground">Processed</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
