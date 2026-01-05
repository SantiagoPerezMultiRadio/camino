import { Car, Trophy, Dices, Wallet, Settings, LogOut, Hexagon } from 'lucide-react';

interface AccountProps {
  onLogout: () => void;
}

export function Account({ onLogout }: AccountProps) {
  const userData = {
    username: "PLAYER_001",
    level: 42,
    gasEarned: 15840,
    wheelsCollected: 28,
    battlesWon: 156,
    totalRides: 342,
    balance: 2450,
    achievements: [
      { name: "SPEED DEMON", icon: Car, unlocked: true },
      { name: "BATTLE MASTER", icon: Trophy, unlocked: true },
      { name: "LUCKY ROLLER", icon: Dices, unlocked: false },
    ],
    stats: [
      { label: "GAS EARNED", value: "+5 GAS", icon: Car },
      { label: "WHEELS", value: "28/50", icon: Hexagon },
      { label: "BATTLES", value: "156", icon: Trophy },
      { label: "BALANCE", value: "$2,450", icon: Wallet },
    ]
  };

  return (
    <div className="min-h-screen text-yellow-400 relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 border-b border-yellow-400/30">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Hexagon 
                  className="w-12 h-12 text-yellow-400" 
                  strokeWidth={2}
                  style={{ filter: 'drop-shadow(0 0 8px rgba(225, 175, 34, 0.6))' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full" 
                    style={{ boxShadow: '0 0 15px rgba(225, 175, 34, 0.8)' }}
                  />
                </div>
              </div>
              <div>
                <h1 className="text-2xl tracking-[0.2em]" 
                  style={{ 
                    fontFamily: 'monospace',
                    textShadow: '0 0 10px rgba(225, 175, 34, 0.6)'
                  }}>
                  CAMINO
                </h1>
                <p className="text-xs text-yellow-400/60">YOUR URBAN BATTLEGROUND</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 border border-yellow-400/50 rounded hover:border-yellow-400 hover:bg-yellow-400/10 transition-all">
                <Settings className="w-5 h-5" />
              </button>
              <button 
                onClick={onLogout}
                className="flex items-center gap-2 px-4 py-2 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">LOGOUT</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        {/* User info header */}
        <div className="mb-12">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 border-2 border-yellow-400 rounded-full flex items-center justify-center relative"
              style={{ boxShadow: '0 0 20px rgba(225, 175, 34, 0.4)' }}>
              <div className="text-4xl">👤</div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs"
                style={{ boxShadow: '0 0 15px rgba(225, 175, 34, 0.6)' }}>
                LVL {userData.level}
              </div>
            </div>
            <div>
              <h2 className="text-3xl tracking-wider mb-2" style={{ fontFamily: 'monospace' }}>
                {userData.username}
              </h2>
              <p className="text-yellow-400/70">Member since January 2026</p>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {userData.stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Hexagonal card effect */}
              <div className="bg-black border-2 border-yellow-400/50 rounded-lg p-6 hover:border-yellow-400 transition-all relative overflow-hidden"
                style={{ 
                  boxShadow: '0 0 15px rgba(225, 175, 34, 0.2)',
                  clipPath: 'polygon(0 10%, 100% 0, 100% 90%, 0 100%)'
                }}>
                <div className="absolute top-0 right-0 opacity-10">
                  <stat.icon className="w-20 h-20" strokeWidth={1} />
                </div>
                <div className="relative">
                  <stat.icon className="w-8 h-8 mb-3" 
                    style={{ filter: 'drop-shadow(0 0 5px rgba(225, 175, 34, 0.6))' }}
                  />
                  <p className="text-xs text-yellow-400/70 mb-1 tracking-wider">{stat.label}</p>
                  <p className="text-2xl tracking-wide" style={{ fontFamily: 'monospace' }}>
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Game overview */}
          <div className="border-2 border-yellow-400/50 rounded-lg p-6"
            style={{ boxShadow: '0 0 20px rgba(225, 175, 34, 0.2)' }}>
            <h3 className="text-xl mb-6 tracking-wider flex items-center gap-3">
              <Hexagon className="w-5 h-5" />
              GAME OVERVIEW
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-yellow-400/20">
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5" />
                  <span>Move & Earn Gas</span>
                </div>
                <span className="text-yellow-400/70">+5 GAS</span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-yellow-400/20">
                <div className="flex items-center gap-3">
                  <Hexagon className="w-5 h-5" />
                  <span>Wheels Collected</span>
                </div>
                <span className="text-yellow-400/70">{userData.wheelsCollected}/50</span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-yellow-400/20">
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5" />
                  <span>Battles Won</span>
                </div>
                <span className="text-yellow-400/70">{userData.battlesWon}</span>
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5" />
                  <span>Total Rides</span>
                </div>
                <span className="text-yellow-400/70">{userData.totalRides}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6">
              <div className="flex justify-between text-xs mb-2">
                <span>Level Progress</span>
                <span>75%</span>
              </div>
              <div className="h-2 bg-yellow-400/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ 
                    width: '75%',
                    boxShadow: '0 0 10px rgba(225, 175, 34, 0.8)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="border-2 border-yellow-400/50 rounded-lg p-6"
            style={{ boxShadow: '0 0 20px rgba(225, 175, 34, 0.2)' }}>
            <h3 className="text-xl mb-6 tracking-wider flex items-center gap-3">
              <Trophy className="w-5 h-5" />
              ACHIEVEMENTS
            </h3>
            
            <div className="space-y-4">
              {userData.achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`p-4 border rounded-lg flex items-center gap-4 ${
                    achievement.unlocked 
                      ? 'border-yellow-400 bg-yellow-400/5' 
                      : 'border-yellow-400/20 opacity-50'
                  }`}
                >
                  <div className={`p-3 rounded-lg ${
                    achievement.unlocked 
                      ? 'bg-yellow-400/20 border border-yellow-400' 
                      : 'bg-yellow-400/5 border border-yellow-400/20'
                  }`}>
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="tracking-wider">{achievement.name}</p>
                    <p className="text-xs text-yellow-400/60">
                      {achievement.unlocked ? 'Unlocked' : 'Locked'}
                    </p>
                  </div>
                  {achievement.unlocked && (
                    <div className="text-2xl">✓</div>
                  )}
                </div>
              ))}
            </div>

            {/* Wallet section */}
            <div className="mt-8 p-4 bg-yellow-400/5 border border-yellow-400/30 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Wallet className="w-6 h-6" />
                  <div>
                    <p className="text-xs text-yellow-400/70">WALLET BALANCE</p>
                    <p className="text-2xl tracking-wide" style={{ fontFamily: 'monospace' }}>
                      ${userData.balance.toLocaleString()}
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-yellow-400 text-black rounded text-sm hover:bg-yellow-300 transition-all"
                  style={{ boxShadow: '0 0 15px rgba(225, 175, 34, 0.4)' }}>
                  ADD FUNDS
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="px-6 py-4 border-2 border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all text-center">
            <Car className="w-6 h-6 mx-auto mb-2" />
            <span className="tracking-wider">MOVE & EARN</span>
          </button>
          <button className="px-6 py-4 border-2 border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all text-center">
            <Trophy className="w-6 h-6 mx-auto mb-2" />
            <span className="tracking-wider">DOMINATE BATTLE</span>
          </button>
          <button className="px-6 py-4 border-2 border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all text-center">
            <Dices className="w-6 h-6 mx-auto mb-2" />
            <span className="tracking-wider">CLAIM STREETS</span>
          </button>
        </div>
      </div>
    </div>
  );
}
