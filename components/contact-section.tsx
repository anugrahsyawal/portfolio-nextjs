"use client"

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Mari Berkolaborasi</h2>
        <p className="text-foreground/60 mb-12 text-lg">
          Saya selalu terbuka untuk diskusi tentang infrastruktur, automation, dan solusi teknis. Hubungi saya untuk
          memulai percakapan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">Email</h3>
            <a href="mailto:admin@example.com" className="text-foreground/80 hover:text-accent transition-colors">
              admin@example.com
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">Social Media</h3>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                GitHub
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center text-foreground/50 text-sm">
          <p>© 2025 System Administrator & Infrastructure Engineer. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
