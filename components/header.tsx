import Image from 'next/image'

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/pd.png"
                            alt="PayDex logo"
                            width={48}
                            height={48}
                            className="h-12 w-12 rounded-lg"
                        />
                        <span className="text-2xl font-bold text-white">
                            PayDex
                        </span>
                    </div>
                    <nav className="hidden items-center gap-8 md:flex">
                        <a
                            href="#features"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="#how"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            How it Works
                        </a>
                        <a
                            href="#faq"
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            FAQ
                        </a>
                    </nav>
                    <a
                        href="https://t.me/paydex_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-accent px-6 py-2 text-sm font-semibold text-accent-foreground hover:bg-blue-600 transition-colors"
                    >
                        Launch Bot
                    </a>
                </div>
            </div>
        </header>
    );
}
