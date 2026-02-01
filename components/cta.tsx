export default function CTA() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-accent/30 bg-gradient-to-br from-card via-card/50 to-accent/5 p-12 sm:p-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-blue-600/10 rounded-3xl blur-3xl -z-10" />

          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Ready To Pay Dex Faster?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of traders using PayDex for seamless DEX Payments. No complications, no delays.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <a
              href="https://t.me/paydex_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground hover:bg-blue-600 transition-colors"
            >
              Launch Bot on Telegram
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full border border-accent/50 px-8 py-4 text-lg font-semibold text-accent hover:border-accent hover:bg-accent/5 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
