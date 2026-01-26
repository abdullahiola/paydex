'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const steps = [
    {
        number: "01",
        title: "Open Telegram",
        description:
            "Start a chat with the Dexpay bot on Telegram. No downloads, no wallets to manage.",
    },
    {
        number: "02",
        title: "Select Chain",
        description: "Select the blockchain and enter the CA",
    },
    {
        number: "03",
        title: "Enter Token Info",
        description: "Add Basic details, Description and socials for the token",
    },
    {
        number: "04",
        title: "Upload Icon & Banner",
        description:
            "Icon & Banner gets automatically Resized",
    },
    {
        number: "05",
        title: "Confirm & Done",
        description:
            "Review the order and prepare for Dex payment. Transaction confirmed in seconds.",
    },
];

export default function HowItWorks() {
  const [expanded, setExpanded] = useState(0)

  return (
    <section id="how" className="py-20 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">How It Works</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Get started in four simple steps
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setExpanded(expanded === idx ? -1 : idx)}
              className="w-full text-left"
            >
              <div className="rounded-2xl border border-border bg-card p-6 hover:border-accent/50 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="text-4xl font-bold text-accent/30">{step.number}</div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                      <p className={`mt-1 text-muted-foreground transition-all overflow-hidden ${
                        expanded === idx ? 'max-h-20' : 'max-h-0'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 text-accent transition-transform ${
                      expanded === idx ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
