import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service',
}

export default function TermsPage() {
  return (
    <main className="flex justify-center px-6 py-16">
      <article className="prose prose-lg mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: January 25, 2026</p>

        <hr />

        <p>
          <strong>
            These Terms of Service apply <em>only</em> to dexpay's processing of DEX
            payments. They do <em>not</em> apply to token swap execution, trading
            mechanisms, or services provided by third parties.
          </strong>
        </p>

        <h2>Scope</h2>
        <p>
          dexpay provides a payment-processing layer to facilitate DEX payment
          flows. This page defines the terms for that payment-processing service
          only.
        </p>

        <h2>Key Points</h2>
        <ul>
          <li><strong>Purpose:</strong> Processing of DEX payments only.</li>
          <li><strong>Exclusions:</strong> Swaps, trade execution, and settlement by third parties are excluded.</li>
          <li><strong>Fees:</strong> Users are responsible for network and third-party fees.</li>
          <li><strong>Liability:</strong> dexpay is not liable for indirect or consequential damages to the fullest extent allowed by law.</li>
        </ul>

        <h2>Contact</h2>
        <p>
          For a full legal draft or specific questions, please contact{' '}
          <a href="mailto:support@dexpay.io" className="text-accent hover:underline">support@dexpay.io</a>.
        </p>

        <p>
          Back to <Link href="/" className="text-accent hover:underline">home</Link>.
        </p>
      </article>
    </main>
  )
}
