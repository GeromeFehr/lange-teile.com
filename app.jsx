import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Ladder,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  BadgePercent,
  Sparkles,
  PhoneCall,
  MapPin,
  Clock3,
  CheckCircle2,
  ChevronRight,
  Store,
  PartyPopper,
  Search,
  Menu,
  X,
  Home,
  Package,
  Info,
  FileText,
  HelpCircle,
  Mail,
  Building2,
  Star,
  Receipt,
  Scale,
  Shield,
  RefreshCw,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const products = [
  {
    id: 1,
    name: "Club-Klassiker 2,5 m",
    category: "Spontaneinsätze",
    price: 59.9,
    tagline: "Wenn die Nacht hoch hinaus will.",
    description:
      "Die elegante Leiter für Clubs, Bars und Locations, in denen plötzlich niemand mehr an das obere Regal, die Deko oder den Technikschrank kommt.",
    stock: 18,
    badge: "Bestseller",
    humor: "Für alle, die nachts Verantwortung tragen. Oder so tun.",
  },
  {
    id: 2,
    name: "Backstage Deluxe 3,2 m",
    category: "Event & Bühne",
    price: 89.9,
    tagline: "Steht stabil. Im Gegensatz zu manchen Gästen.",
    description:
      "Ideal für Bühnenbau, Lichttechnik und den einen Kollegen, der 'nur ganz kurz oben ran' muss.",
    stock: 12,
    badge: "Event-Profi",
    humor: "Mehr Aufstiegschancen als in manchen Firmen.",
  },
  {
    id: 3,
    name: "Wohnungsretter Mini 1,8 m",
    category: "Zuhause",
    price: 39.9,
    tagline: "Für Lampen, Schränke und spontane Erwachsenheit.",
    description:
      "Kompakt, leicht und perfekt für die Momente, in denen du merkst, dass du doch nicht 2,10 m groß bist.",
    stock: 26,
    badge: "Klein aber oho",
    humor: "Passt in fast jede Wohnung und in fast jedes Ego.",
  },
  {
    id: 4,
    name: "VIP-Lounge Reach 4,1 m",
    category: "Gastro & Club",
    price: 129.9,
    tagline: "Wenn oben plötzlich sehr wichtig wird.",
    description:
      "Für hohe Decken, exklusive Bereiche und Situationen, in denen man diskret an Dinge herankommen möchte – rein handwerklich natürlich.",
    stock: 7,
    badge: "Premium",
    humor: "Die wahrscheinlich seriöseste Art, irgendwo hochzukommen.",
  },
  {
    id: 5,
    name: "Festival Flex 3,8 m",
    category: "Outdoor",
    price: 99.9,
    tagline: "Matschfest. Stressfest. Fast allesfest.",
    description:
      "Robust für Outdoor-Einsätze, provisorische Installationen und das übliche 'Kannst du das mal eben fixen?' auf Festivals.",
    stock: 9,
    badge: "Outdoor",
    humor: "Für die wenigen Dinge, die auf Festivals noch stehen müssen.",
  },
  {
    id: 6,
    name: "Afterparty Emergency 2,2 m",
    category: "Notfälle",
    price: 49.9,
    tagline: "Wenn's plötzlich dringend wird. Also leitermäßig.",
    description:
      "Die schnelle Lösung für spontane Einsätze in Kellerbars, Partyräumen und allen Orten, an denen Improvisation als Konzept gilt.",
    stock: 21,
    badge: "Soforthilfe",
    humor: "Hilft bei Höhenproblemen jeder Art – fast jeder.",
  },
  {
    id: 7,
    name: "Lagerboss Pro 5,0 m",
    category: "Gewerbe",
    price: 179.9,
    tagline: "Wenn ganz oben wirklich ganz oben ist.",
    description:
      "Für Lager, Hallen, Werkstätten und alle Orte, an denen man den Überblick behalten muss – oder wenigstens so wirken möchte.",
    stock: 5,
    badge: "Business",
    humor: "Für Menschen mit Verantwortung und Regalen mit Gottkomplex.",
  },
  {
    id: 8,
    name: "Barhocker-Bändiger 2,9 m",
    category: "Gastro & Club",
    price: 74.9,
    tagline: "Für spontane Lösungen mit überraschend viel Klasse.",
    description:
      "Wenn Improvisation keine Option mehr ist und man lieber professionell aufsteigt statt fragwürdig zu balancieren.",
    stock: 14,
    badge: "Empfohlen",
    humor: "Deutlich seriöser als 'halt mal kurz fest'.",
  },
];

const features = [
  { icon: Truck, title: "Schneller Versand", text: "Heute bestellt, bald schon oben dran." },
  { icon: ShieldCheck, title: "Stabil & verlässlich", text: "Mehr Halt als manche Situationship." },
  { icon: BadgePercent, title: "Mengenrabatte", text: "Für Clubs, Firmen und Menschen mit erstaunlich vielen Deckenlampen." },
  { icon: Sparkles, title: "Mit Humor geliefert", text: "Weil Leitern ernst genug aussehen." },
];

const testimonials = [
  {
    name: "Mara, Clubmanagerin",
    text: "Wir brauchten um 23:40 Uhr spontan eine Leiter. LangeTeile hat verstanden, worauf es ankommt: Timing und Höhe.",
  },
  {
    name: "Deniz, Veranstaltungstechniker",
    text: "Top Qualität. Stand fester als mein Schlafrhythmus während der Festivalsaison.",
  },
  {
    name: "Timo, WG mit hohen Ansprüchen",
    text: "Seitdem kommen wir an das obere Küchenfach. Das hat die Gruppendynamik nachhaltig verändert.",
  },
];

const navItems = [
  { key: "home", label: "Startseite", icon: Home },
  { key: "shop", label: "Shop", icon: Package },
  { key: "about", label: "Über uns", icon: Info },
  { key: "b2b", label: "B2B / Großkunden", icon: Building2 },
  { key: "faq", label: "FAQ", icon: HelpCircle },
  { key: "contact", label: "Kontakt", icon: Mail },
  { key: "legal", label: "Rechtliches", icon: FileText },
];

const legalTabs = [
  { key: "impressum", label: "Impressum", icon: Receipt },
  { key: "datenschutz", label: "Datenschutz", icon: Shield },
  { key: "agb", label: "AGB", icon: Scale },
  { key: "widerruf", label: "Widerruf", icon: RefreshCw },
];

function formatPrice(value) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(value);
}

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="mb-8">
      <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">{kicker}</div>
      <h2 className="mt-2 text-3xl font-black">{title}</h2>
      {text ? <p className="mt-3 max-w-3xl text-zinc-400">{text}</p> : null}
    </div>
  );
}

function ProductCard({ product, onAdd }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
      <Card className="h-full rounded-3xl border-white/10 bg-white/5 text-white">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div>
              <CardTitle className="text-2xl">{product.name}</CardTitle>
              <CardDescription className="mt-1 text-zinc-400">{product.category}</CardDescription>
            </div>
            <Badge className="rounded-full bg-white text-black hover:bg-white">{product.badge}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex h-full flex-col">
          <div className="mb-4 rounded-3xl border border-white/10 bg-black/20 p-6">
            <div className="flex items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/5 py-10">
              <Ladder className="h-16 w-16 text-zinc-300" />
            </div>
          </div>
          <p className="text-lg font-semibold text-zinc-100">{product.tagline}</p>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{product.description}</p>
          <p className="mt-3 text-sm italic text-zinc-500">{product.humor}</p>
          <div className="mt-5 flex items-end justify-between gap-4">
            <div>
              <div className="text-3xl font-black">{formatPrice(product.price)}</div>
              <div className="text-xs text-zinc-500">Lager: {product.stock} Stück</div>
            </div>
            <Button className="rounded-2xl" onClick={() => onAdd(product)}>
              In den Warenkorb
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function LangeTeileShop() {
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Alle");
  const [activePage, setActivePage] = useState("home");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderDone, setOrderDone] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeLegalTab, setActiveLegalTab] = useState("impressum");
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    note: "",
  });

  const categories = ["Alle", ...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.tagline.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "Alle" || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const featuredProducts = products.slice(0, 3);
  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.qty * item.price, 0), [cart]);
  const shipping = subtotal > 120 ? 0 : cartCount > 0 ? 6.9 : 0;
  const total = subtotal + shipping;

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const placeOrder = (e) => {
    e.preventDefault();
    if (!customer.name || !customer.email || !customer.address || cart.length === 0) return;
    setOrderDone(true);
    setCart([]);
    setCheckoutOpen(false);
  };

  const switchPage = (page) => {
    setActivePage(page);
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const HomePage = () => (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.09),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_25%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <Badge className="mb-4 w-fit rounded-full border-white/10 bg-white/10 text-white hover:bg-white/10">
              Hochwertige Leitern für Zuhause, Events, Clubs & spontane Eskalationen
            </Badge>
            <h1 className="max-w-2xl text-4xl font-black tracking-tight md:text-6xl">
              Der Online-Shop für Leitern, wenn's <span className="text-zinc-300">plötzlich höher</span> werden muss.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-zinc-300">
              Bei <strong>langeteile.com</strong> findest du Leitern für Clubs, Wohnungen, Bühnen, Festivals und alle anderen Orte, an denen man überraschend schnell irgendwo ran muss. Funktional, hochwertig und mit genau der Art Humor, die man eigentlich nicht haben sollte – aber trotzdem feiert.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-2xl" onClick={() => switchPage("shop")}>
                Jetzt stöbern <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-white/15 bg-transparent text-white hover:bg-white/10" onClick={() => switchPage("b2b")}>
                Großkunden & Clubs
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-400">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Hohe Qualität</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Versand in DE</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Shop mit Augenzwinkern</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-4"
          >
            <Card className="rounded-3xl border-white/10 bg-white/5 text-white shadow-2xl shadow-black/30">
              <CardContent className="p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-zinc-400">Beliebter Einsatzort</div>
                    <div className="text-2xl font-bold">Club & Eventbereich</div>
                  </div>
                  <PartyPopper className="h-10 w-10 text-zinc-300" />
                </div>
                <div className="grid gap-3">
                  {[
                    "Lichttechnik nachjustieren",
                    "Deko anbringen ohne Akrobatikvertrag",
                    "An die obere Lagerkiste kommen",
                    "Improvisiert professionell wirken",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-zinc-200">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
                <CardContent className="p-6">
                  <div className="text-sm text-zinc-400">Lieferzusage</div>
                  <div className="mt-1 text-3xl font-black">Zügig</div>
                  <div className="mt-2 text-sm text-zinc-300">Schneller da als die Frage: „Hat jemand zufällig eine Leiter?“</div>
                </CardContent>
              </Card>
              <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
                <CardContent className="p-6">
                  <div className="text-sm text-zinc-400">Stabilitätslevel</div>
                  <div className="mt-1 text-3xl font-black">Sehr</div>
                  <div className="mt-2 text-sm text-zinc-300">Eher belastbar als Gruppenchats nach 2 Uhr nachts.</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="rounded-3xl border-white/10 bg-white/5 text-white">
                <CardContent className="p-6">
                  <Icon className="mb-4 h-8 w-8 text-zinc-300" />
                  <div className="font-bold">{feature.title}</div>
                  <div className="mt-2 text-sm text-zinc-400">{feature.text}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <SectionTitle
          kicker="Highlights"
          title="Unsere beliebtesten langen Teile"
          text="Die Favoriten für alle, die professionell hochkommen wollen, ohne dass es aussieht wie eine schlechte Idee."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle kicker="Einsatzorte" title="Überall dort, wo man spontan eine Leiter braucht" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Clubs & Bars",
              text: "Deko, Technik, Lager, VIP-Bereich – manchmal braucht die Nacht einfach ein wenig Aufstiegshilfe.",
            },
            {
              title: "Wohnungen & WGs",
              text: "Ob Lampenmontage oder das obere Küchenfach: Man muss nicht groß sein, nur gut vorbereitet.",
            },
            {
              title: "Events & Festivals",
              text: "Wenn alles provisorisch professionell aussieht, war meistens irgendwo eine Leiter im Spiel.",
            },
          ].map((item) => (
            <Card key={item.title} className="rounded-3xl border-white/10 bg-white/5 text-white">
              <CardContent className="p-6">
                <Store className="mb-4 h-8 w-8 text-zinc-300" />
                <div className="text-xl font-bold">{item.title}</div>
                <div className="mt-3 text-zinc-400">{item.text}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <SectionTitle kicker="Kundenstimmen" title="Menschen, die jetzt höher hinauskommen" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="rounded-3xl border-white/10 bg-white/5 text-white">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-1 text-zinc-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="text-lg leading-7 text-zinc-300">“{item.text}”</div>
                <div className="mt-5 text-sm font-semibold text-zinc-500">{item.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );

  const ShopPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle
        kicker="Sortiment"
        title="Unsere langen Teile"
        text="Leitern für spontane Heldentaten, geplante Einsätze und die Art von Situationen, die man später lieber charmant umschreibt."
      />
      <div className="mb-8 grid gap-3 md:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Leiter suchen, z. B. Club, Bühne, spontan..."
            className="rounded-2xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-zinc-500"
          />
        </div>
        <div className="flex flex-wrap gap-2 md:justify-end">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              className={`rounded-2xl ${category !== cat ? "border-white/10 bg-transparent text-white hover:bg-white/10" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={addToCart} />
        ))}
      </div>
    </section>
  );

  const AboutPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle
        kicker="Über uns"
        title="langeteile.com – ernsthafte Leitern, unseriös gut präsentiert"
        text="Wir verkaufen Leitern für genau die Momente, in denen niemand eine da hat, aber plötzlich alle so tun, als wäre das nie ein Problem gewesen."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
          <CardContent className="p-8">
            <div className="text-2xl font-black">Unsere Mission</div>
            <p className="mt-4 leading-7 text-zinc-300">
              Gute Leitern sollten leicht zu finden sein, gut aussehen und in jeder Lage das Gefühl geben, dass man alles im Griff hat. Selbst wenn die Situation objektiv betrachtet erst vor vier Minuten eskaliert ist.
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
          <CardContent className="p-8">
            <div className="text-2xl font-black">Unsere Haltung</div>
            <p className="mt-4 leading-7 text-zinc-300">
              Qualität zuerst, Humor direkt dahinter. Wir nehmen Produkte ernst – nur uns selbst nicht immer. Das macht den Shop sympathisch und die Leitern trotzdem belastbar.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  const B2BPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle
        kicker="B2B / Großkunden"
        title="Für Clubs, Firmen, Eventlocations und alle mit regelmäßigem Höhenbedarf"
        text="Du brauchst mehrere Leitern für Lager, Backstage, Gastronomie oder Veranstaltungen? Dann liefern wir dir ein Setup, das professioneller aussieht als 'wir nehmen kurz den Stuhl'."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: "Clubs & Bars", text: "Leitern für Technikräume, Lager, Deko und spontane Nachtlösungen." },
          { title: "Events & Festivals", text: "Robuste Modelle für Bühnen, Licht und temporäre Aufbauten." },
          { title: "Gewerbe & Lager", text: "Für Orte, an denen man regelmäßig oben ran muss – und zwar ordentlich." },
        ].map((item) => (
          <Card key={item.title} className="rounded-3xl border-white/10 bg-white/5 text-white">
            <CardContent className="p-6">
              <div className="text-xl font-bold">{item.title}</div>
              <div className="mt-3 text-zinc-400">{item.text}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6 rounded-3xl border-white/10 bg-white text-black">
        <CardContent className="p-8">
          <div className="text-2xl font-black">Business-Anfrage</div>
          <p className="mt-3 max-w-3xl text-zinc-700">
            Für Mengenrabatte, wiederkehrende Bestellungen oder Sonderabsprachen einfach anfragen. Wir machen dir ein Angebot, das Hand und Fuß hat. Und natürlich auch Sprossen.
          </p>
          <Button className="mt-5 rounded-2xl" onClick={() => switchPage("contact")}>
            Jetzt Kontakt aufnehmen
          </Button>
        </CardContent>
      </Card>
    </section>
  );

  const FaqPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle kicker="FAQ" title="Häufig gestellte Fragen" />
      <div className="grid gap-5">
        {[
          ["Verkauft ihr wirklich nur Leitern?", "Aktuell ja. Wir konzentrieren uns auf das Wesentliche: hochwertige Aufstiegslösungen mit gutem Timing und fragwürdig guten Slogans."],
          ["Sind die Texte absichtlich zweideutig?", "Ja. Aber immer so, dass man noch seriös einkaufen kann, ohne rot zu werden. Meistens jedenfalls."],
          ["Kann ich größere Mengen bestellen?", "Ja, besonders für Clubs, Firmen, Lager und Events. Dafür gibt es unseren B2B-Bereich."],
          ["Gibt es echten Checkout?", "Im aktuellen Stand ist das ein Frontend-Demo-Checkout. Für Livebetrieb müssten Zahlungsanbieter und Backend angebunden werden."],
          ["Wie schnell liefert ihr?", "Im Demo-Shop steht: zügig. In echt würdest du Versandzeiten natürlich sauber im System pflegen."],
        ].map(([q, a]) => (
          <Card key={q} className="rounded-3xl border-white/10 bg-white/5 text-white">
            <CardContent className="p-6">
              <div className="text-lg font-bold">{q}</div>
              <div className="mt-2 text-zinc-400">{a}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );

  const ContactPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle
        kicker="Kontakt"
        title="Schreib uns, bevor du wieder auf fragwürdige Alternativen zurückgreifst"
        text="Für Fragen, Business-Anfragen oder den diskreten Bedarf an mehreren langen Teilen am Stück."
      />
      <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
        <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
          <CardContent className="p-8 space-y-4">
            <div>
              <label className="mb-2 block text-sm text-zinc-400">Name</label>
              <Input className="rounded-2xl border-white/10 bg-white/5 text-white" placeholder="Dein Name" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-zinc-400">E-Mail</label>
              <Input className="rounded-2xl border-white/10 bg-white/5 text-white" placeholder="mail@beispiel.de" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-zinc-400">Nachricht</label>
              <Textarea className="rounded-2xl border-white/10 bg-white/5 text-white" placeholder="Worum geht's?" />
            </div>
            <Button className="rounded-2xl">Anfrage senden</Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-white/10 bg-white text-black">
          <CardContent className="p-8 space-y-4">
            <div className="text-2xl font-black">Kontaktinfos</div>
            <div className="flex items-center gap-3 text-zinc-700"><Mail className="h-4 w-4" /> hochstapeln@langeteile.com</div>
            <div className="flex items-center gap-3 text-zinc-700"><PhoneCall className="h-4 w-4" /> +49 40 00000000</div>
            <div className="flex items-center gap-3 text-zinc-700"><MapPin className="h-4 w-4" /> Musterstraße 12, 20095 Hamburg</div>
            <div className="flex items-center gap-3 text-zinc-700"><Clock3 className="h-4 w-4" /> Mo–Fr, 09:00–17:00</div>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  const LegalPage = () => (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <SectionTitle
        kicker="Rechtliches"
        title="Die ernsten Seiten des Shops"
        text="Hier würden im Livebetrieb deine finalen Rechtstexte rein. Aktuell ist das eine stilvolle Platzhalter-Struktur mit realistischen Bereichen."
      />
      <div className="mb-6 flex flex-wrap gap-2">
        {legalTabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Button
              key={tab.key}
              variant={activeLegalTab === tab.key ? "default" : "outline"}
              className={`rounded-2xl ${activeLegalTab !== tab.key ? "border-white/10 bg-transparent text-white hover:bg-white/10" : ""}`}
              onClick={() => setActiveLegalTab(tab.key)}
            >
              <Icon className="mr-2 h-4 w-4" />
              {tab.label}
            </Button>
          );
        })}
      </div>

      <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
        <CardContent className="p-8 leading-7 text-zinc-300">
          {activeLegalTab === "impressum" && (
            <div>
              <div className="text-2xl font-black text-white">Impressum</div>
              <p className="mt-4">LangeTeile GmbH<br />Musterstraße 12<br />20095 Hamburg</p>
              <p className="mt-4">Vertreten durch: Max Musterleiter<br />Kontakt: hochstapeln@langeteile.com</p>
            </div>
          )}
          {activeLegalTab === "datenschutz" && (
            <div>
              <div className="text-2xl font-black text-white">Datenschutz</div>
              <p className="mt-4">Hier würdest du Informationen zur Verarbeitung personenbezogener Daten, zu Cookies, Kontaktformularen, Zahlungsanbietern und Hosting einpflegen.</p>
            </div>
          )}
          {activeLegalTab === "agb" && (
            <div>
              <div className="text-2xl font-black text-white">AGB</div>
              <p className="mt-4">Hier würden allgemeine Geschäftsbedingungen zu Bestellungen, Lieferung, Zahlung, Eigentumsvorbehalt und Haftung stehen.</p>
            </div>
          )}
          {activeLegalTab === "widerruf" && (
            <div>
              <div className="text-2xl font-black text-white">Widerruf</div>
              <p className="mt-4">Hier würdest du Widerrufsbelehrung, Fristen, Rücksendeablauf und Folgen des Widerrufs sauber hinterlegen.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );

  const renderPage = () => {
    switch (activePage) {
      case "shop":
        return <ShopPage />;
      case "about":
        return <AboutPage />;
      case "b2b":
        return <B2BPage />;
      case "faq":
        return <FaqPage />;
      case "contact":
        return <ContactPage />;
      case "legal":
        return <LegalPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button className="flex items-center gap-3 text-left" onClick={() => switchPage("home")}>
            <div className="rounded-2xl bg-white/10 p-2">
              <Ladder className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight">langeteile.com</div>
              <div className="text-xs text-zinc-400">Der Shop für Leitern mit Höhengefühl</div>
            </div>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activePage === item.key;
              return (
                <Button
                  key={item.key}
                  variant="ghost"
                  className={`rounded-2xl ${active ? "bg-white text-black hover:bg-white" : "text-zinc-300 hover:bg-white/10 hover:text-white"}`}
                  onClick={() => switchPage(item.key)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button onClick={() => setCheckoutOpen(true)} className="rounded-2xl">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Warenkorb ({cartCount})
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl border-white/10 bg-transparent text-white hover:bg-white/10 md:hidden"
              onClick={() => setMobileNavOpen((v) => !v)}
            >
              {mobileNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.key}
                      variant="ghost"
                      className="justify-start rounded-2xl text-zinc-200 hover:bg-white/10 hover:text-white"
                      onClick={() => switchPage(item.key)}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>{renderPage()}</main>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <Card className="rounded-3xl border-white/10 bg-white text-black">
          <CardContent className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h3 className="text-3xl font-black">Bereit für langeteile.com?</h3>
              <p className="mt-3 max-w-2xl text-zinc-700">
                Diese Version enthält mehrere Reiter, Shop-Struktur, Kontakt, B2B, FAQ und Rechtliches. Genau die Art Basis, auf der man ein echtes Repo sauber weiterbauen kann.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-zinc-700">
              <div className="flex items-center gap-3"><PhoneCall className="h-4 w-4" /> Support: hochstapeln@langeteile.com</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Versandgebiet: Deutschlandweit</div>
              <div className="flex items-center gap-3"><Clock3 className="h-4 w-4" /> Bearbeitung: zügig und ohne Höhenangst</div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-black text-white">langeteile.com</div>
            <div className="text-sm text-zinc-500">Leitern für hohe Ansprüche und noch höhere Regale.</div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="ghost" className="rounded-2xl text-zinc-400 hover:bg-white/10 hover:text-white" onClick={() => switchPage("about")}>Über uns</Button>
            <Button variant="ghost" className="rounded-2xl text-zinc-400 hover:bg-white/10 hover:text-white" onClick={() => switchPage("faq")}>FAQ</Button>
            <Button variant="ghost" className="rounded-2xl text-zinc-400 hover:bg-white/10 hover:text-white" onClick={() => switchPage("contact")}>Kontakt</Button>
            <Button variant="ghost" className="rounded-2xl text-zinc-400 hover:bg-white/10 hover:text-white" onClick={() => switchPage("legal")}>Rechtliches</Button>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {checkoutOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4"
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[2rem] border border-white/10 bg-zinc-950 p-6 text-white shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-black">Checkout</h3>
                  <p className="text-zinc-400">Fast geschafft. Gleich gehört die Höhe dir.</p>
                </div>
                <Button variant="outline" className="rounded-2xl border-white/10 bg-transparent text-white hover:bg-white/10" onClick={() => setCheckoutOpen(false)}>
                  Schließen
                </Button>
              </div>

              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
                <form className="space-y-4" onSubmit={placeOrder}>
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">Name</label>
                    <Input
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      className="rounded-2xl border-white/10 bg-white/5 text-white"
                      placeholder="Dein Name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">E-Mail</label>
                    <Input
                      type="email"
                      value={customer.email}
                      onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                      className="rounded-2xl border-white/10 bg-white/5 text-white"
                      placeholder="name@mail.de"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">Lieferadresse</label>
                    <Textarea
                      value={customer.address}
                      onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                      className="rounded-2xl border-white/10 bg-white/5 text-white"
                      placeholder="Straße, Hausnummer, PLZ, Ort"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">Bestellnotiz</label>
                    <Textarea
                      value={customer.note}
                      onChange={(e) => setCustomer({ ...customer, note: e.target.value })}
                      className="rounded-2xl border-white/10 bg-white/5 text-white"
                      placeholder="z. B. Bitte diskret liefern, die WG soll nichts ahnen"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-2xl">
                    Bestellung abschließen
                  </Button>
                  <p className="text-xs text-zinc-500">
                    Demo-Checkout ohne echte Zahlung. Für Livebetrieb würden Stripe, PayPal oder Shopify/Headless angebunden werden.
                  </p>
                </form>

                <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold">Deine Auswahl</h4>
                    <Separator className="my-4 bg-white/10" />
                    <div className="space-y-4">
                      {cart.length === 0 ? (
                        <div className="text-zinc-400">Dein Warenkorb ist leer. Noch gar nichts zum Hochtragen also.</div>
                      ) : (
                        cart.map((item) => (
                          <div key={item.id} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <div className="font-semibold">{item.name}</div>
                                <div className="text-sm text-zinc-400">{formatPrice(item.price)} pro Stück</div>
                              </div>
                              <div className="text-right font-bold">{formatPrice(item.qty * item.price)}</div>
                            </div>
                            <div className="mt-3 flex items-center gap-2">
                              <Button size="icon" type="button" variant="outline" className="rounded-xl border-white/10 bg-transparent text-white hover:bg-white/10" onClick={() => updateQty(item.id, -1)}>
                                <Minus className="h-4 w-4" />
                              </Button>
                              <div className="min-w-8 text-center">{item.qty}</div>
                              <Button size="icon" type="button" variant="outline" className="rounded-xl border-white/10 bg-transparent text-white hover:bg-white/10" onClick={() => updateQty(item.id, 1)}>
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                    <Separator className="my-4 bg-white/10" />
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-zinc-400">Zwischensumme</span><span>{formatPrice(subtotal)}</span></div>
                      <div className="flex justify-between"><span className="text-zinc-400">Versand</span><span>{shipping === 0 ? "Kostenlos" : formatPrice(shipping)}</span></div>
                      <div className="flex justify-between text-lg font-bold"><span>Gesamt</span><span>{formatPrice(total)}</span></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {orderDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-4"
            onClick={() => setOrderDone(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              className="max-w-lg rounded-[2rem] border border-white/10 bg-zinc-950 p-8 text-center text-white shadow-2xl"
            >
              <CheckCircle2 className="mx-auto h-14 w-14" />
              <h3 className="mt-4 text-3xl font-black">Bestellung erfasst</h3>
              <p className="mt-3 text-zinc-400">
                Danke für deine Bestellung bei langeteile.com. Deine Aufstiegshilfe ist vorgemerkt und bald auf dem Weg zu dir.
              </p>
              <Button className="mt-6 rounded-2xl" onClick={() => setOrderDone(false)}>
                Weiter shoppen
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
