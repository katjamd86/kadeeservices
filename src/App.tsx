import { motion } from "motion/react";
import { 
  Mail, 
  Linkedin, 
  Calendar, 
  ChevronRight, 
  CheckCircle2, 
  Globe, 
  Mic2, 
  Database, 
  Settings,
  ArrowRight
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
        <div className="text-2xl font-bold tracking-tighter text-zinc-900">
          KaDee<span className="text-emerald-600">.</span>Services
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-600">
          <a href="#home" className="hover:text-emerald-600 transition-colors">Home</a>
          <a href="#diensten" className="hover:text-emerald-600 transition-colors">Diensten</a>
          <a href="#over-mij" className="hover:text-emerald-600 transition-colors">Over Mij</a>
          <a href="#portfolio" className="hover:text-emerald-600 transition-colors">Portfolio</a>
          <a href="#tarieven" className="hover:text-emerald-600 transition-colors">Tarieven</a>
          <a href="#contact" className="bg-zinc-900 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition-all">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="section-padding pt-32 pb-24 flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-8"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
          KaDee Services | Strategische Remote Support
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-zinc-900">
          Meer focus. <br />
          <span className="heading-serif text-emerald-800">Strakkere systemen.</span> <br />
          Grenzeloze groei.
        </h1>
        <p className="text-lg text-zinc-600 max-w-xl leading-relaxed">
          Je bedrijf groeit, maar de waan van de dag remt je af. Als meertalige strategische partner en Virtual Assistant in Nederland neem ik niet zomaar taken over; ik optimaliseer jouw backoffice, stroomlijn je klantcontact en ondersteun bij AI- en audioprojecten.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/10">
            <Calendar size={18} />
            Plan een strategisch gesprek
          </a>
          <a href="#diensten" className="flex items-center gap-2 border border-zinc-200 px-8 py-4 rounded-full font-semibold hover:bg-zinc-50 transition-all">
            Ontdek mijn diensten
            <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex-1 relative"
      >
        <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
          <img 
            src="https://picsum.photos/seed/katja-headshot/800/1000" 
            alt="Katja - KaDee Services" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-100 rounded-2xl -z-0" />
        <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-emerald-50 rounded-full -z-0" />
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Virtual Assistance & Operations",
      icon: <Settings className="text-emerald-600" size={32} />,
      items: ["Inbox- en agendabeheer", "Structuur & Systemen (Notion)", "E-mailmarketing (Mailblue)", "Klantcommunicatie & Relatiebeheer", "Content Creatie (Canva)"]
    },
    {
      title: "AI & Data Projecten",
      icon: <Database className="text-emerald-600" size={32} />,
      items: ["Audio segmentatie & Datacorrectie", "Kwaliteitscontrole (Speech review)", "Accurate transcripties (NL/EN/PL)"]
    },
    {
      title: "Voice-Over & Audio",
      icon: <Mic2 className="text-emerald-600" size={32} />,
      items: ["Bedrijfsvideo’s & E-learning", "Podcast intro's & outro's", "Voice training voor AI-modellen"]
    },
    {
      title: "Poolse Markt Expansie",
      icon: <Globe className="text-emerald-600" size={32} />,
      items: ["Poolse vertaling Nederlands ↔ Pools", "Eerstelijns klantenservice Pools", "Zakelijke communicatie partners"]
    }
  ];

  return (
    <section id="diensten" className="section-padding bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-zinc-900">Diensten & Oplossingen</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Bij KaDee Services geloven we niet in "losse klusjes". We bouwen aan schaalbare processen en vlekkeloze communicatie.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-zinc-100 flex flex-col gap-6"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">{service.title}</h3>
              <ul className="space-y-3 flex-grow">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-600">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="over-mij" className="section-padding max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
      <div className="flex-1 relative">
        <div className="rounded-[40px] overflow-hidden shadow-xl">
          <img 
            src="https://picsum.photos/seed/katja-business/800/800" 
            alt="Katja aan het werk" 
            className="w-full aspect-square object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="flex-1 space-y-8">
        <h2 className="text-4xl font-bold text-zinc-900">Aangenaam, ik ben Katja.</h2>
        <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
          <p className="italic heading-serif text-2xl text-emerald-800">
            "Als ondernemer weet ik als geen ander: je wilt je bedrijf niet loslaten, je wilt het in vertrouwde handen leggen."
          </p>
          <p>
            Vanuit KaDee Services bied ik high-end remote support met een unieke combinatie: de strakke structuur van een manager, de creativiteit van een contentmaker, en de nauwkeurigheid van een data-specialist.
          </p>
          <p>
            Door mijn ervaring in o.a. de software/SaaS-sector (waar ik verantwoordelijk was voor het volledige klantcontact en tevredenheidsonderzoeken), weet ik hoe cruciaal de klantervaring is. Ik ben proactief, AI-minded en meertalig (Nederlands, Engels en Pools).
          </p>
        </div>
        <div className="pt-4">
          <a href="#contact" className="inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-900 transition-colors">
            Laten we kennismaken <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-zinc-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Praktijkvoorbeelden & Stack</h2>
          <p className="text-zinc-400">Hoe ik waarde toevoeg voor mijn partners.</p>
        </div>
        
        <div className="bg-zinc-800/50 p-8 md:p-12 rounded-[40px] border border-zinc-700 mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="text-emerald-400 font-semibold uppercase tracking-widest text-sm">Uitgelichte Case</div>
              <h3 className="text-3xl font-bold">Rylee (Softwarebedrijf)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-emerald-400 mb-1">Uitdaging</h4>
                  <p className="text-zinc-300">Behoefte aan professionalisering van het klantcontact en het inzichtelijk maken van klanttevredenheid voor deze software-scale-up.</p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-400 mb-1">Mijn rol</h4>
                  <p className="text-zinc-300">Verantwoordelijk voor de complete klantenservice, proactief klantonderhoud en het opzetten van klanttevredenheidsonderzoeken.</p>
                </div>
                <div>
                  <h4 className="font-bold text-emerald-400 mb-1">Resultaat</h4>
                  <p className="text-zinc-300">Verhoogde klantretentie, structurele feedbackloops voor de developers, en een professionele uitstraling.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-zinc-700/50 p-6 rounded-2xl border border-zinc-600 flex flex-col items-center justify-center gap-2 group hover:bg-zinc-700 transition-all">
                  <div className="font-bold text-lg">Notion</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest">Systems</div>
                </div>
                <div className="bg-zinc-700/50 p-6 rounded-2xl border border-zinc-600 flex flex-col items-center justify-center gap-2 group hover:bg-zinc-700 transition-all">
                  <div className="font-bold text-lg">Mailblue</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest">Marketing</div>
                </div>
                <div className="bg-zinc-700/50 p-6 rounded-2xl border border-zinc-600 flex flex-col items-center justify-center gap-2 group hover:bg-zinc-700 transition-all">
                  <div className="font-bold text-lg">Canva</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest">Design</div>
                </div>
                <div className="bg-zinc-700/50 p-6 rounded-2xl border border-zinc-600 flex flex-col items-center justify-center gap-2 group hover:bg-zinc-700 transition-all">
                  <div className="font-bold text-lg">AI Tools</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-widest">Data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Rates = () => {
  const tiers = [
    {
      name: "Starter",
      hours: "8 uur / maand",
      desc: "Ideaal voor structureel inboxbeheer of lichte administratieve support.",
      price: "Op aanvraag"
    },
    {
      name: "Groei",
      hours: "16 uur / maand",
      desc: "Perfect voor serieuze operations support of e-mailmarketing beheer.",
      price: "Meest gekozen",
      highlight: true
    },
    {
      name: "Partner",
      hours: "24+ uur / maand",
      desc: "Je volledige backoffice en operations uit handen. Ik fungeer als integrator.",
      price: "Op aanvraag"
    }
  ];

  return (
    <section id="tarieven" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-zinc-900">Investering in groei</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Ik werk het liefst met vaste maandpakketten (retainers) voor de beste kwaliteit en een echt partnerschap.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div 
              key={idx}
              className={`p-10 rounded-[40px] border-2 flex flex-col gap-6 transition-all ${tier.highlight ? 'border-emerald-600 bg-emerald-50/30 shadow-xl' : 'border-zinc-100 bg-zinc-50'}`}
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-zinc-900">{tier.name}</h3>
                <div className="text-3xl font-bold text-emerald-700">{tier.hours}</div>
              </div>
              <p className="text-zinc-600 flex-grow">{tier.desc}</p>
              <div className="pt-6 border-t border-zinc-200">
                <div className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-4">{tier.price}</div>
                <a href="#contact" className={`block text-center py-4 rounded-full font-bold transition-all ${tier.highlight ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}>
                  Plan gesprek
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-zinc-500 text-sm">
          Losse uren of projectbasis (voice-over/vertaling) beschikbaar vanaf €45,- per uur (excl. btw).
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-zinc-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-zinc-900">Laten we de krachten bundelen.</h2>
          <p className="text-lg text-zinc-600">
            Klaar om de volgende stap te zetten? Neem contact op of plan direct een virtuele koffie in mijn agenda.
          </p>
          <div className="space-y-4">
            <a href="mailto:info@kadeeservices.nl" className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-zinc-100 hover:border-emerald-200 transition-all group">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-zinc-500">E-mail</div>
                <div className="font-bold text-zinc-900">info@kadeeservices.nl</div>
              </div>
            </a>
            <a href="#" className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-zinc-100 hover:border-emerald-200 transition-all group">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Linkedin size={24} />
              </div>
              <div>
                <div className="text-sm text-zinc-500">LinkedIn</div>
                <div className="font-bold text-zinc-900">Connect met Katja</div>
              </div>
            </a>
          </div>
        </div>
        <div className="bg-white p-10 rounded-[40px] shadow-xl border border-zinc-100">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700">Naam</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="Je naam" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700">Bedrijfsnaam</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="Je bedrijf" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700">E-mailadres</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="email@voorbeeld.nl" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700">Waar kan ik je mee helpen?</label>
              <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none bg-white">
                <option>Virtual Assistance</option>
                <option>AI & Data</option>
                <option>Voice-over</option>
                <option>Poolse Markt</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700">Jouw bericht</label>
              <textarea className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all h-32" placeholder="Vertel me over je uitdaging..."></textarea>
            </div>
            <button type="button" className="w-full py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-emerald-700 transition-all shadow-lg">
              Versturen
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-zinc-100 text-center text-zinc-500 text-sm">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="font-bold text-zinc-900 text-lg">KaDee Services</div>
        <p>© {new Date().getFullYear()} KaDee Services. Alle rechten voorbehouden.</p>
        <p>Strategische Remote Support | NL • EN • PL</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Rates />
      <Contact />
      <Footer />
    </div>
  );
}
