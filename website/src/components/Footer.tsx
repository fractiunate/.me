import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-700/50 py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-slate-300 text-sm sm:text-base">
              <div>
                <p className="text-xs sm:text-sm text-slate-400">Phone:</p>
                <a
                  href="tel:+4915209261143"
                  className="hover:text-[oklch(60%_.25_330)] transition-colors"
                >
                  +49 152 0926 1143
                </a>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-slate-400">Email:</p>
                <a
                  href="mailto:fractiunate@gmail.com"
                  className="hover:text-[oklch(60%_.25_330)] transition-colors break-all"
                >
                  fractiunate@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Legal Notice</h3>
            <div className="space-y-1 text-slate-300 text-xs sm:text-sm">
              <p>David Rahäuser</p>
              <p>Karl-Marx-Straße 179D</p>
              <p>12043 Berlin</p>
              <p className="pt-2">Fractiunate, vertreten durch: David Rahäuser</p>
              <p className="pt-2">
                Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
              </p>
              <p>DE337960737</p>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700/50 mb-6 sm:mb-8" />

        <p className="text-slate-400 text-xs sm:text-sm text-center">
          © {new Date().getFullYear()} fractiunate.me — All rights reserved
        </p>
      </div>
    </footer>
  )
}
