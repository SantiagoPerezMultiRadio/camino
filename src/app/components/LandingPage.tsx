import { Car, Trophy, Hexagon, Zap, Users, QrCode, Smartphone, Mail } from 'lucide-react';

interface LandingPageProps {
  onNavigateToLogin: () => void;
}

export function LandingPage({ onNavigateToLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen text-yellow-400 relative overflow-hidden">
      {/* Header/Navigation */}
      <header className="relative z-20 border-b border-yellow-400/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Hexagon 
                  className="w-10 h-10 text-yellow-400" 
                  strokeWidth={2}
                  style={{ filter: 'drop-shadow(0 0 8px rgba(225, 175, 34, 0.6))' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" 
                    style={{ boxShadow: '0 0 15px rgba(225, 175, 34, 0.8)' }}
                  />
                </div>
              </div>
              <span className="text-xl tracking-[0.2em]" 
                style={{ 
                  fontFamily: 'monospace',
                  textShadow: '0 0 10px rgba(225, 175, 34, 0.6)'
                }}>
                CAMINO
              </span>
            </div>
            
            <button 
              onClick={onNavigateToLogin}
              className="px-6 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition-all shadow-[0_0_20px_rgba(225,175,34,0.6)] hover:shadow-[0_0_30px_rgba(225,175,34,0.8)] tracking-wider"
              style={{ fontFamily: 'monospace' }}
            >
              LOGIN / SIGN UP
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <div className="mb-8">
            <div className="inline-block relative">
              <Hexagon 
                className="w-32 h-32 text-yellow-400 animate-pulse" 
                strokeWidth={2}
                style={{ filter: 'drop-shadow(0 0 20px rgba(225, 175, 34, 0.8))' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Car className="w-16 h-16 text-yellow-400" 
                  style={{ filter: 'drop-shadow(0 0 15px rgba(225, 175, 34, 0.8))' }}
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 tracking-[0.2em]"
            style={{ 
              fontFamily: 'monospace',
              textShadow: '0 0 20px rgba(225, 175, 34, 0.8)'
            }}>
            CAMINO
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 tracking-wider">
            Where You Earn on the Streets
          </p>
          
          <p className="text-xl text-yellow-400/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            A location-based urban strategy game where your real-world movement gives you control over streets, landmarks, and city zones.
          </p>

          <button 
            onClick={onNavigateToLogin}
            className="px-12 py-4 text-xl bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-all shadow-[0_0_30px_rgba(225,175,34,0.8)] hover:shadow-[0_0_40px_rgba(225,175,34,1)] tracking-wider"
            style={{ fontFamily: 'monospace' }}
          >
            START YOUR JOURNEY
          </button>
        </div>
      </section>

      {/* Core Loop Section */}
      <section className="relative z-10 py-20 border-y border-yellow-400/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-16 tracking-wider"
            style={{ 
              fontFamily: 'monospace',
              textShadow: '0 0 15px rgba(225, 175, 34, 0.6)'
            }}>
            THE CORE LOOP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Car, title: "MOVE", desc: "Walk, bike, or drive in real life" },
              { icon: Zap, title: "EARN GAS", desc: "Generate energy based on distance" },
              { icon: Hexagon, title: "CLAIM NODES", desc: "Take over streets & landmarks" },
              { icon: Trophy, title: "DOMINATE", desc: "Climb leaderboards & battle" },
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-black border-2 border-yellow-400/50 rounded-lg p-6 hover:border-yellow-400 transition-all h-full"
                  style={{ 
                    boxShadow: '0 0 15px rgba(225, 175, 34, 0.2)',
                  }}>
                  <div className="flex flex-col items-center text-center">
                    <step.icon className="w-12 h-12 mb-4" 
                      style={{ filter: 'drop-shadow(0 0 8px rgba(225, 175, 34, 0.6))' }}
                    />
                    <h3 className="text-xl mb-2 tracking-wider" style={{ fontFamily: 'monospace' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-yellow-400/70">
                      {step.desc}
                    </p>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 text-3xl text-yellow-400/30">
                      →
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R.I.D.E. Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 tracking-wider"
              style={{ 
                fontFamily: 'monospace',
                textShadow: '0 0 15px rgba(225, 175, 34, 0.6)'
              }}>
              MEET YOUR R.I.D.E.™
            </h2>
            <p className="text-xl text-yellow-400/80">
              (Reactive Identity-Driven Entity) 🏁
            </p>
            <p className="text-lg text-yellow-400/70 mt-4">
              It's not just your vehicle. It's your living machine. 🔥
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="border-2 border-yellow-400/50 rounded-lg p-8"
              style={{ boxShadow: '0 0 20px rgba(225, 175, 34, 0.2)' }}>
              <h3 className="text-2xl mb-6 tracking-wider flex items-center gap-3">
                <Hexagon className="w-6 h-6" />
                YOUR DIGITAL COMPANION
              </h3>
              <div className="space-y-4 text-yellow-400/80">
                <p>
                  Your R.I.D.E.™ is a digital companion that grows with your journey. Whether you walk, bike, or drive, it's the soul of your Camino identity.
                </p>
                <ul className="space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">→</span>
                    <span><strong>Walkers:</strong> Humanoid R.I.D.E.s with mood & health states</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">→</span>
                    <span><strong>Bikers:</strong> Agile machines that need oiling & maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">→</span>
                    <span><strong>Drivers:</strong> High-AI vehicles demanding care & upgrades</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-yellow-400/50 rounded-lg p-8"
              style={{ boxShadow: '0 0 20px rgba(225, 175, 34, 0.2)' }}>
              <h3 className="text-2xl mb-6 tracking-wider flex items-center gap-3">
                <Zap className="w-6 h-6" />
                R.I.D.E.™ MECHANICS
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Status Dashboard", desc: "Monitor hydration, fatigue, system health" },
                  { label: "Voice Personality", desc: "Talks back, reacts to weather & missions" },
                  { label: "Emotional Bond", desc: "Daily rituals build trust & efficiency" },
                  { label: "Skins & Upgrades", desc: "Faction-exclusive visuals & sound FX" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-yellow-400/5 rounded">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" 
                      style={{ boxShadow: '0 0 8px rgba(225, 175, 34, 0.8)' }}
                    />
                    <div>
                      <p className="tracking-wide">{item.label}</p>
                      <p className="text-sm text-yellow-400/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Modes Section */}
      <section className="relative z-10 py-20 border-y border-yellow-400/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-16 tracking-wider"
            style={{ 
              fontFamily: 'monospace',
              textShadow: '0 0 15px rgba(225, 175, 34, 0.6)'
            }}>
            SPECIAL MODES
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* QR Mode */}
            <div className="border-2 border-yellow-400 rounded-lg p-8 relative overflow-hidden"
              style={{ boxShadow: '0 0 25px rgba(225, 175, 34, 0.3)' }}>
              <div className="absolute top-0 right-0 opacity-5">
                <QrCode className="w-40 h-40" strokeWidth={1} />
              </div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <QrCode className="w-10 h-10" 
                    style={{ filter: 'drop-shadow(0 0 8px rgba(225, 175, 34, 0.6))' }}
                  />
                  <h3 className="text-2xl tracking-wider">QR MODE</h3>
                </div>
                <p className="text-yellow-400/80 mb-4">
                  Scan your real-world vehicle (bike, scooter, or car) and replicate it inside the game as a customized R.I.D.E.™ companion.
                </p>
                <ul className="space-y-2 text-sm text-yellow-400/70">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>Unique stats based on scanned vehicle type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>Custom skins & behavior matching your ride</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>Partnership opportunities with vehicle brands</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Passenger Mode */}
            <div className="border-2 border-yellow-400 rounded-lg p-8 relative overflow-hidden"
              style={{ boxShadow: '0 0 25px rgba(225, 175, 34, 0.3)' }}>
              <div className="absolute top-0 right-0 opacity-5">
                <Smartphone className="w-40 h-40" strokeWidth={1} />
              </div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <Smartphone className="w-10 h-10" 
                    style={{ filter: 'drop-shadow(0 0 8px rgba(225, 175, 34, 0.6))' }}
                  />
                  <h3 className="text-2xl tracking-wider">PASSENGER MODE</h3>
                </div>
                <p className="text-yellow-400/80 mb-4">
                  <strong>MEGO:</strong> Play skill-based mini-games during Uber/Lyft rides. Win before your destination to unlock discounted or free rides.
                </p>
                <ul className="space-y-2 text-sm text-yellow-400/70">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>Verify as passenger during trip</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>Earn real-world mobility incentives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400">✓</span>
                    <span>Attention economy: brands fund challenges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factions Preview */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-16 tracking-wider"
            style={{ 
              fontFamily: 'monospace',
              textShadow: '0 0 15px rgba(225, 175, 34, 0.6)'
            }}>
            ⚔️ JOIN A FACTION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "FACTION ALPHA", color: "red", emblem: "🔺" },
              { name: "FACTION BETA", color: "blue", emblem: "🔷" },
              { name: "FACTION GAMMA", color: "green", emblem: "⬢" },
            ].map((faction, index) => (
              <div key={index} 
                className="border-2 border-yellow-400/50 rounded-lg p-8 text-center hover:border-yellow-400 transition-all group"
                style={{ boxShadow: '0 0 15px rgba(225, 175, 34, 0.2)' }}>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {faction.emblem}
                </div>
                <h3 className="text-xl tracking-wider mb-2" style={{ fontFamily: 'monospace' }}>
                  {faction.name}
                </h3>
                <p className="text-sm text-yellow-400/60">
                  Choose your crew, dominate the streets
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-yellow-400/80 max-w-2xl mx-auto">
              Each faction has its own emblem, lore, and tactical style. Weekly crew battles reset territories with live events and domination rounds.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 border-t border-yellow-400/30" id="contact">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 tracking-wider"
              style={{ 
                fontFamily: 'monospace',
                textShadow: '0 0 15px rgba(225, 175, 34, 0.6)'
              }}>
              📩 CONTACT US
            </h2>
            <p className="text-xl text-yellow-400/80">
              Interested in partnering with CAMINO?
            </p>
            <p className="text-yellow-400/70 mt-2">
              We're looking to collaborate with mobility companies, brands, and innovators.
            </p>
          </div>

          <div className="border-2 border-yellow-400/50 rounded-lg p-8"
            style={{ boxShadow: '0 0 25px rgba(225, 175, 34, 0.2)' }}>
            <div className="space-y-6">
              {[
                { name: "Miguel Fernandez", email: "mfernandezpugnali@gmail.com" },
                { name: "Logan Fulcher", email: "loganfulcher@gmail.com" },
                { name: "Agustin Rolandelli", email: "rolandellia@hotmail.com" },
              ].map((contact, index) => (
                <div key={index} 
                  className="flex items-center justify-between p-4 bg-yellow-400/5 rounded border border-yellow-400/20 hover:border-yellow-400/50 transition-all">
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="tracking-wide">{contact.name}</p>
                      <a 
                        href={`mailto:${contact.email}`}
                        className="text-sm text-yellow-400/70 hover:text-yellow-400 transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="px-4 py-2 border border-yellow-400 rounded text-sm hover:bg-yellow-400 hover:text-black transition-all"
                  >
                    EMAIL
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-yellow-400/20 text-center">
              <p className="text-yellow-400/70 text-sm">
                <strong>Partnership Opportunities:</strong> Mobility Apps (Uber, Lyft) • Vehicle Brands • Transit Companies • Urban Sponsors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-yellow-400/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Hexagon 
                className="w-8 h-8 text-yellow-400" 
                strokeWidth={2}
                style={{ filter: 'drop-shadow(0 0 8px rgba(225, 175, 34, 0.6))' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" 
                  style={{ boxShadow: '0 0 10px rgba(225, 175, 34, 0.8)' }}
                />
              </div>
            </div>
            <span className="tracking-[0.2em] text-sm" style={{ fontFamily: 'monospace' }}>
              CAMINO
            </span>
          </div>
          <p className="text-yellow-400/60 text-sm">
            © 2026 Camino. Where You Earn on the Streets.
          </p>
        </div>
      </footer>
    </div>
  );
}
