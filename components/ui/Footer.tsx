import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { navLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/40 bg-transparent">
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.02]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 md:px-12 lg:px-20">
        <div>
          <p className="font-display text-xl text-text">{siteConfig.fullName}</p>
          <p className="mt-2 text-sm text-muted">{siteConfig.title}</p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-muted">
            Hızlı Linkler
          </p>
          <ul className="space-y-2">
            {navLinks
              .filter((l) => !l.disabled)
              .map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-muted">
            Sosyal Medya
          </p>
          {siteConfig.instagram ? (
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
            >
              <InstagramIcon size={18} />
              Instagram
            </a>
          ) : (
            <p className="text-sm text-muted/60">Yakında eklenecek</p>
          )}
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 text-center text-xs text-muted md:px-12 lg:px-20">
        © {currentYear} {siteConfig.fullName}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
