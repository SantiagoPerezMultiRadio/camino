import { useState } from 'react';
import { Car, Hexagon, Droplet, Battery, Heart, Zap, Settings, Home, LogOut, User, Sparkles } from 'lucide-react';

interface RideDashboardProps {
  onLogout: () => void;
  onNavigateToAccount: () => void;
}

export function RideDashboard({ onLogout, onNavigateToAccount }: RideDashboardProps) {
  const [rideData, setRideData] = useState({
    name: "NEON THUNDER",
    type: "driver", // walker, biker, driver
    health: 85,
    hydration: 60,
    fatigue: 35,
    morale: 90,
    voiceMessage: "Ready to roll!",
    level: 12,
    lastMaintenance: "2 hours ago",
  });

  const handleRitual = (ritual: string) => {
    const newData = { ...rideData };
    switch (ritual) {
      case 'hydrate':
        newData.hydration = Math.min(100, newData.hydration + 20);
        newData.voiceMessage = "Feeling refreshed! Let's hit the road!";
        break;
      case 'clean':
        newData.health = Math.min(100, newData.health + 15);
        newData.voiceMessage = "Sparkling clean! Performance optimized!";
        break;
      case 'boost':
        newData.morale = Math.min(100, newData.morale + 10);
        newData.fatigue = Math.max(0, newData.fatigue - 15);
        newData.voiceMessage = "Boosted and ready for action!";
        break;
    }
    setRideData(newData);
  };

  const getStatusColor = (value: number) => {
    if (value >= 70) return 'text-yellow-400';
    if (value >= 40) return 'text-orange-400';
    return 'text-red-400';
  };

  const getStatusBarColor = (value: number) => {
    if (value >= 70) return 'bg-yellow-400';
    if (value >= 40) return 'bg-orange-400';
    return 'bg-red-400';
  };

  return (
    <div className="min-h-screen bg-black text-yellow-400 relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(225, 175, 34, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(225, 175, 34, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-yellow-400/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
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

              <div className="flex items-center gap-2">
                <button 
                  onClick={onNavigateToAccount}
                  className="p-2 border border-yellow-400/50 rounded hover:border-yellow-400 hover:bg-yellow-400/10 transition-all">
                  <Home className="w-5 h-5" />
                </button>
                <button className="p-2 border border-yellow-400/50 rounded hover:border-yellow-400 hover:bg-yellow-400/10 transition-all">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <button 
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">LOGOUT</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-8">
        {/* Title */}
        <div className="mb-8 border-b-2 border-yellow-400 pb-3">
          <h1 className="text-2xl tracking-[0.3em]" 
            style={{ 
              fontFamily: 'monospace',
              textShadow: '0 0 10px rgba(225, 175, 34, 0.6)'
            }}>
            R.I.D.E.™ CUSTOMIZATION & STATUS
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel - Controls */}
          <div className="lg:col-span-3 space-y-6">
            {/* Name & Upgrade */}
            <div className="border-2 border-yellow-400/50 rounded-lg p-4"
              style={{ boxShadow: '0 0 15px rgba(225, 175, 34, 0.2)' }}>
              <h3 className="text-sm tracking-wider mb-3 text-yellow-400/70">NAME & UPGRADE</h3>
              <div className="space-y-3">
                <button className="w-full p-3 border-2 border-yellow-400 rounded flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black transition-all">
                  <Hexagon className="w-5 h-5" />
                </button>
                <button className="w-full p-3 border-2 border-yellow-400/50 rounded flex items-center justify-center gap-2 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all">
                  <Zap className="w-5 h-5" />
                </button>
                <button className="w-full p-3 border-2 border-yellow-400/50 rounded flex items-center justify-center gap-2 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all">
                  <Car className="w-5 h-5" />
                </button>
                <button className="w-full p-3 border-2 border-yellow-400/50 rounded flex items-center justify-center gap-2 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Daily Rituals */}
            <div className="border-2 border-yellow-400/50 rounded-lg p-4"
              style={{ boxShadow: '0 0 15px rgba(225, 175, 34, 0.2)' }}>
              <h3 className="text-sm tracking-wider mb-3 text-yellow-400/70">DAILY RITUALS</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => handleRitual('hydrate')}
                  className="w-full px-4 py-2 bg-yellow-400 text-black rounded text-sm hover:bg-yellow-300 transition-all"
                  style={{ boxShadow: '0 0 15px rgba(225, 175, 34, 0.4)' }}
                >
                  HYDRATE
                </button>
                <button 
                  onClick={() => handleRitual('clean')}
                  className="w-full px-4 py-2 bg-yellow-400 text-black rounded text-sm hover:bg-yellow-300 transition-all"
                  style={{ boxShadow: '0 0 15px rgba(225, 175, 34, 0.4)' }}
                >
                  CLEAN
                </button>
                <button 
                  onClick={() => handleRitual('boost')}
                  className="w-full px-4 py-2 bg-yellow-400 text-black rounded text-sm hover:bg-yellow-300 transition-all"
                  style={{ boxShadow: '0 0 15px rgba(225, 175, 34, 0.4)' }}
                >
                  BOOST MORALE
                </button>
              </div>
            </div>

            {/* Info Card */}
            <div className="border border-yellow-400/30 rounded-lg p-4 bg-yellow-400/5">
              <div className="text-xs space-y-2 text-yellow-400/70">
                <p><strong>Type:</strong> {rideData.type.toUpperCase()}</p>
                <p><strong>Level:</strong> {rideData.level}</p>
                <p><strong>Last Maintenance:</strong> {rideData.lastMaintenance}</p>
              </div>
            </div>
          </div>

          {/* Center Panel - Vehicle Display */}
          <div className="lg:col-span-6">
            <div className="border-2 border-yellow-400/50 rounded-lg p-8 h-full"
              style={{ boxShadow: '0 0 20px rgba(225, 175, 34, 0.2)' }}>
              
              {/* Top Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Health */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm tracking-wider flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      HEALTH
                    </span>
                    <span className={`text-sm ${getStatusColor(rideData.health)}`}>
                      {rideData.health}%
                    </span>
                  </div>
                  <div className="h-2 bg-yellow-400/20 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getStatusBarColor(rideData.health)} rounded-full transition-all duration-500`}
                      style={{ 
                        width: `${rideData.health}%`,
                        boxShadow: '0 0 10px rgba(225, 175, 34, 0.6)'
                      }}
                    />
                  </div>
                </div>

                {/* Hydration */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm tracking-wider flex items-center gap-2">
                      <Droplet className="w-4 h-4" />
                      HYDRATION
                    </span>
                    <span className={`text-sm ${getStatusColor(rideData.hydration)}`}>
                      {rideData.hydration}%
                    </span>
                  </div>
                  <div className="h-2 bg-yellow-400/20 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getStatusBarColor(rideData.hydration)} rounded-full transition-all duration-500`}
                      style={{ 
                        width: `${rideData.hydration}%`,
                        boxShadow: '0 0 10px rgba(225, 175, 34, 0.6)'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Display */}
              <div className="relative my-12 flex items-center justify-center min-h-[300px]">
                {/* Glow effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-96 h-96 bg-yellow-400 opacity-10 blur-3xl rounded-full" />
                </div>

                {/* Vehicle wireframe */}
                <div className="relative">
                  <svg width="400" height="200" viewBox="0 0 400 200" className="drop-shadow-[0_0_20px_rgba(225,175,34,0.8)]">
                    {/* Car body outline */}
                    <path 
                      d="M 50 150 L 80 100 L 120 80 L 280 80 L 320 100 L 350 150 Z" 
                      stroke="#E1AF22" 
                      strokeWidth="2" 
                      fill="none"
                      className="animate-pulse"
                    />
                    {/* Windshield */}
                    <path 
                      d="M 130 80 L 150 60 L 250 60 L 270 80" 
                      stroke="#E1AF22" 
                      strokeWidth="2" 
                      fill="none"
                    />
                    {/* Windows */}
                    <line x1="150" y1="100" x2="150" y2="80" stroke="#E1AF22" strokeWidth="2" />
                    <line x1="250" y1="100" x2="250" y2="80" stroke="#E1AF22" strokeWidth="2" />
                    
                    {/* Wheels */}
                    <circle cx="100" cy="150" r="25" stroke="#E1AF22" strokeWidth="3" fill="none" />
                    <circle cx="100" cy="150" r="15" stroke="#E1AF22" strokeWidth="2" fill="none" />
                    <circle cx="300" cy="150" r="25" stroke="#E1AF22" strokeWidth="3" fill="none" />
                    <circle cx="300" cy="150" r="15" stroke="#E1AF22" strokeWidth="2" fill="none" />
                    
                    {/* Details */}
                    <line x1="80" y1="120" x2="110" y2="120" stroke="#E1AF22" strokeWidth="1" opacity="0.6" />
                    <line x1="290" y1="120" x2="320" y2="120" stroke="#E1AF22" strokeWidth="1" opacity="0.6" />
                    
                    {/* Hexagon details */}
                    <path d="M 200 100 L 210 105 L 210 115 L 200 120 L 190 115 L 190 105 Z" 
                      stroke="#E1AF22" strokeWidth="1" fill="none" opacity="0.8" />
                  </svg>

                  {/* Name display */}
                  <div className="text-center mt-4">
                    <p className="text-2xl tracking-[0.2em]" 
                      style={{ 
                        fontFamily: 'monospace',
                        textShadow: '0 0 15px rgba(225, 175, 34, 0.8)'
                      }}>
                      {rideData.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {/* Fatigue */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm tracking-wider flex items-center gap-2">
                      <Battery className="w-4 h-4" />
                      FATIGUE
                    </span>
                    <span className={`text-sm ${getStatusColor(100 - rideData.fatigue)}`}>
                      {rideData.fatigue}%
                    </span>
                  </div>
                  <div className="h-2 bg-yellow-400/20 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${rideData.fatigue < 30 ? 'bg-yellow-400' : rideData.fatigue < 60 ? 'bg-orange-400' : 'bg-red-400'} rounded-full transition-all duration-500`}
                      style={{ 
                        width: `${rideData.fatigue}%`,
                        boxShadow: '0 0 10px rgba(225, 175, 34, 0.6)'
                      }}
                    />
                  </div>
                </div>

                {/* Morale */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      MORALE
                    </span>
                    <span className={`text-sm ${getStatusColor(rideData.morale)}`}>
                      {rideData.morale}%
                    </span>
                  </div>
                  <div className="h-2 bg-yellow-400/20 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getStatusBarColor(rideData.morale)} rounded-full transition-all duration-500`}
                      style={{ 
                        width: `${rideData.morale}%`,
                        boxShadow: '0 0 10px rgba(225, 175, 34, 0.6)'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Voice Message */}
              <div className="mt-8 border-2 border-yellow-400 rounded-lg p-4 text-center relative overflow-hidden"
                style={{ boxShadow: '0 0 20px rgba(225, 175, 34, 0.3)' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent animate-pulse" />
                <p className="text-xs tracking-wider mb-1 text-yellow-400/70">VOICE:</p>
                <p className="text-lg tracking-wide relative z-10" style={{ fontFamily: 'monospace' }}>
                  🔊 {rideData.voiceMessage}
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel - Status Indicators */}
          <div className="lg:col-span-3 space-y-6">
            {/* Health Status Circle */}
            <div className="border-2 border-yellow-400/50 rounded-lg p-6 text-center"
              style={{ boxShadow: '0 0 15px rgba(225, 175, 34, 0.2)' }}>
              <h3 className="text-sm tracking-wider mb-4 text-yellow-400/70">HEALTH</h3>
              <div className="relative w-32 h-32 mx-auto mb-3">
                <svg className="w-full h-full transform -rotate-90">
                  <circle 
                    cx="64" cy="64" r="56" 
                    stroke="rgba(225, 175, 34, 0.2)" 
                    strokeWidth="8" 
                    fill="none" 
                  />
                  <circle 
                    cx="64" cy="64" r="56" 
                    stroke="#E1AF22" 
                    strokeWidth="8" 
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - rideData.health / 100)}`}
                    className="transition-all duration-500"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(225, 175, 34, 0.8))' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Heart className="w-8 h-8 mb-1 text-yellow-400" />
                  <span className="text-xl" style={{ fontFamily: 'monospace' }}>
                    {rideData.health}%
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-yellow-400">
                <Zap className="w-4 h-4" />
              </div>
            </div>

            {/* Fatigue Status Circle */}
            <div className="border-2 border-yellow-400/50 rounded-lg p-6 text-center"
              style={{ boxShadow: '0 0 15px rgba(225, 175, 34, 0.2)' }}>
              <h3 className="text-sm tracking-wider mb-4 text-yellow-400/70">FATIGUE</h3>
              <div className="relative w-32 h-32 mx-auto mb-3">
                <svg className="w-full h-full transform -rotate-90">
                  <circle 
                    cx="64" cy="64" r="56" 
                    stroke="rgba(225, 175, 34, 0.2)" 
                    strokeWidth="8" 
                    fill="none" 
                  />
                  <circle 
                    cx="64" cy="64" r="56" 
                    stroke={rideData.fatigue < 30 ? '#E1AF22' : rideData.fatigue < 60 ? '#fb923c' : '#ef4444'}
                    strokeWidth="8" 
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - rideData.fatigue / 100)}`}
                    className="transition-all duration-500"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(225, 175, 34, 0.8))' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Battery className="w-8 h-8 mb-1 text-yellow-400" />
                  <span className="text-xl" style={{ fontFamily: 'monospace' }}>
                    {rideData.fatigue}%
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-yellow-400">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
