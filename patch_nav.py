import re
from pathlib import Path

path = Path("app/page.tsx")
src = path.read_text(encoding="utf-8")

# === REBRAND: Revenue Systems -> JobflowsOS (3 spots) ===
src = src.replace(
    '>Revenue Systems</div>',
    '>JobflowsOS</div>'
)
src = src.replace(
    'Revenue Systems · All rights reserved',
    'JobflowsOS · All rights reserved'
)

# === SMART NAV: replace the Nav component ===
new_nav = '''const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      if (y < 80) {
        setHidden(false);
      } else if (y > lastY.current + 4) {
        setHidden(true);
      } else if (y < lastY.current - 4) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ease-out ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-4">
        <div className={`flex items-center justify-between rounded-xl border border-[var(--border)] backdrop-blur-xl px-4 py-2.5 transition-colors duration-300 ${scrolled ? "bg-[var(--bg-primary)]/90 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.6)]" : "bg-[var(--bg-primary)]/75"}`}>
          <a href="#top" className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-md bg-[var(--blue)] flex items-center justify-center">
              <div className="absolute inset-0 rounded-md ring-1 ring-white/15" />
              <Layers className="w-4 h-4 text-white" strokeWidth={2.2} />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[var(--gold-bright)] ring-2 ring-[var(--bg-primary)]" />
            </div>
            <div className="leading-none">
              <div className="font-display font-semibold text-[14px] text-white tracking-tight">JobflowsOS</div>
              <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--text-4)] mt-0.5">
                For local service businesses
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 font-body text-[13px] text-[var(--text-2)]">
            <a href="#system" className="hover:text-white transition">System</a>
            <a href="#automations" className="hover:text-white transition">Automations</a>
            <a href="#pipeline" className="hover:text-white transition">Live view</a>
            <a href="#industries" className="hover:text-white transition">Industries</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="#pricing"
               className="hidden sm:inline-flex font-body font-medium text-[13px] text-white border border-[var(--border-strong)] bg-[var(--surface)]/60 hover:border-[var(--blue-soft)] px-3.5 py-2 rounded-lg transition">
              See Founder Offer
            </a>
            <a href="#cta"
               className="inline-flex items-center gap-1.5 font-body font-medium text-[13px] text-white bg-[var(--blue)] hover:bg-[var(--blue-hover)] px-3.5 py-2 rounded-lg transition">
              Book a Demo <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};'''

# Replace the old Nav component (greedy match from "const Nav = () => (" to the matching ");")
pattern = re.compile(r'const Nav = \(\) => \(.*?^\);', re.DOTALL | re.MULTILINE)
if not pattern.search(src):
    raise SystemExit("ERROR: Could not find the Nav component. File may have been modified.")
src = pattern.sub(new_nav, src, count=1)

path.write_text(src, encoding="utf-8")
print("Done. Nav rebranded to JobflowsOS and upgraded to smart-hide-on-scroll behavior.")
