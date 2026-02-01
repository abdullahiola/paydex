import { CheckCircle2, Zap, Shield, Clock } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Secure & Convenient',
    description: 'Users can easily pay Dex on mobile with Bank-grade security.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Pay Dex in seconds with zero gas fees and instant confirmations.'
  },
  {
    icon: Clock,
    title: 'Always Available',
    description: '24/7 support and operations. Never miss a trading opportunity again.'
  },
  {
    icon: CheckCircle2,
    title: 'Zero Complexity',
    description: 'Simple interface handles all the technical details for you automatically.'
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Why Choose PayDex?</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Everything you need for frictionless DEX payment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-border bg-card p-8 hover:border-accent/50 hover:bg-card/50 transition-all"
              >
                <Icon className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
