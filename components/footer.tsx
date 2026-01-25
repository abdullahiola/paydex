import { Mail, MessageCircle, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Dexpay</h3>
            <p className="text-muted-foreground">
              Simplifying DEX payments for traders worldwide.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how" className="text-muted-foreground hover:text-foreground transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="https://t.me/paydex_bot" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  Telegram <ExternalLink className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a href="https://t.me/paydex_bot" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Telegram Support
              </a>
              <a href="mailto:support@dexpay.io" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Mail className="h-5 w-5" />
                support@dexpay.io
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Dexpay. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
