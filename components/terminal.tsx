'use client'

import { useState, useEffect } from 'react'

const TEMPLATES = [
    "user {user} paid {currency} for DEX .",
    "user {user} resized a photo for icon upload.",
    "user {user} resized a photo for banner upload.",
    "user {user} interacted with the bot",
    "user {user} hasn't completed payment yet",
];

function generateUsername() {
  const prefixes = ['alpha', 'neo', 'moon', 'star', 'crypto', 'block', 'degen', 'oracle', 'flux', 'zephyr', 'nova', 'pixel', 'vault']
  const suffixes = ['_trader', '_hodler', '_builder', '_artist', '_collector', '_farmer', '_wizard', '_guru', '_node', '_pilot']
  const rand = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]
  const number = Math.floor(Math.random() * 9999)
  return `${rand(prefixes)}${rand(suffixes)}${number}`
}

async function generateCurrency() {
  const choices = ['USDC', 'USDT', 'SOLANA']
  const choice = choices[Math.floor(Math.random() * choices.length)]

  if (choice === 'SOLANA') {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd')
      const data = await res.json()
      const price = data?.solana?.usd
      if (price && typeof price === 'number' && price > 0) {
        const solAmount = 300 / price
        return `${solAmount.toFixed(4)} SOL`
      }
    } catch (e) {
      // fall through to fallback
    }
    return '$300 SOLANA'
  }

  return `$300 ${choice}`
}

export default function Terminal() {
  const [displayedText, setDisplayedText] = useState('')
  const [currentUpdateIndex, setCurrentUpdateIndex] = useState(0)
  const [currentUpdate, setCurrentUpdate] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (isTyping) {
      // ensure we have a currentUpdate to type
      const text = currentUpdate || ''
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1))
        }, 30)
      } else {
        // keep the full message visible for ~5 seconds
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 5000)
      }
    } else {
      timeout = setTimeout(() => {
        setCurrentUpdateIndex((prev) => (prev + 1) % TEMPLATES.length)
        setDisplayedText('')
        setIsTyping(true)
      }, 800)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, currentUpdateIndex, isTyping, currentUpdate])

  // Generate a new message string (with randomized username) whenever the index changes
  useEffect(() => {
    const template = TEMPLATES[currentUpdateIndex % TEMPLATES.length]

    ;(async () => {
      const username = generateUsername()
      const currencyStr = await generateCurrency()
      const message = template
        .replace('{user}', username)
        .replace('{currency}', currencyStr)
      setCurrentUpdate(message)
    })()
  }, [currentUpdateIndex])

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-xl">
        {/* Terminal Header */}
        <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-muted-foreground ml-2">dexbot-live-updates</span>
        </div>

        {/* Terminal Content */}
        <div className="bg-card px-4 py-4 font-mono text-sm">
          <div className="text-muted-foreground mb-3">$ dexbot --live-feed</div>
          <div className="space-y-2">
            <div className="text-accent">
              <span className="text-green-500">✓</span> Connected to transaction stream...
            </div>
            <div className="text-accent">
              <span className="text-green-500">✓</span> Listening for DEX payments...
            </div>
            <div className="h-px bg-border my-2" />
            <div className="min-h-6">
              <div className="text-foreground flex items-center">
                <span className="text-accent mr-2">›</span>
                <span>{displayedText}</span>
                {isTyping && <span className="ml-1 animate-pulse text-accent">▌</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// #testing