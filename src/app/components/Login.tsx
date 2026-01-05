import { useState } from 'react';
import { Hexagon } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {/* Grid lines */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(225, 175, 34, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(225, 175, 34, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: 'perspective(1000px) rotateX(60deg)',
              transformOrigin: 'center bottom'
            }}
          />
        </div>
        
        {/* Speed lines effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: '-100%',
                width: '200%',
                animation: `speedLine ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Floating cars */}
        <div className="absolute bottom-10 left-10 opacity-20 animate-pulse">
          <svg width="100" height="50" viewBox="0 0 100 50" fill="none">
            <path d="M20 30 L35 20 L65 20 L80 30 L80 40 L20 40 Z" stroke="#E1AF22" strokeWidth="2" fill="none"/>
            <circle cx="30" cy="42" r="4" stroke="#E1AF22" strokeWidth="2" fill="none"/>
            <circle cx="70" cy="42" r="4" stroke="#E1AF22" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        <div className="absolute top-20 right-20 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <svg width="80" height="40" viewBox="0 0 100 50" fill="none">
            <path d="M20 30 L35 20 L65 20 L80 30 L80 40 L20 40 Z" stroke="#E1AF22" strokeWidth="2" fill="none"/>
            <circle cx="30" cy="42" r="4" stroke="#E1AF22" strokeWidth="2" fill="none"/>
            <circle cx="70" cy="42" r="4" stroke="#E1AF22" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Login/Signup card */}
      <div className="relative z-10">
        <div className="w-96 relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-yellow-400 opacity-20 blur-3xl rounded-3xl" />
          
          {/* Main border with glow */}
          <div className="relative bg-black border-2 border-yellow-400 rounded-2xl p-8 shadow-[0_0_30px_rgba(225,175,34,0.5)]">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Hexagon 
                  className="w-16 h-16 text-yellow-400" 
                  strokeWidth={2}
                  style={{ filter: 'drop-shadow(0 0 10px rgba(225, 175, 34, 0.8))' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full" 
                    style={{ boxShadow: '0 0 20px rgba(225, 175, 34, 0.8)' }}
                  />
                </div>
              </div>
            </div>

            <h1 className="text-center text-yellow-400 text-3xl tracking-[0.3em] mb-2"
              style={{ 
                fontFamily: 'monospace',
                textShadow: '0 0 10px rgba(225, 175, 34, 0.8)'
              }}>
              CAMINO
            </h1>
            
            <p className="text-center text-yellow-400/70 text-sm mb-8">
              {isSignUp ? 'Create New Account' : 'Login & New Account'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div>
                  <label className="block text-yellow-400/90 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black border border-yellow-400/50 rounded px-4 py-2 text-yellow-400 placeholder-yellow-400/30 focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(225,175,34,0.5)] transition-all"
                    placeholder="Enter email"
                  />
                </div>
              )}

              <div>
                <label className="block text-yellow-400/90 text-sm mb-2">Usuario</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-black border border-yellow-400/50 rounded px-4 py-2 text-yellow-400 placeholder-yellow-400/30 focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(225,175,34,0.5)] transition-all"
                  placeholder="Enter username"
                />
              </div>

              <div>
                <label className="block text-yellow-400/90 text-sm mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black border border-yellow-400/50 rounded px-4 py-2 text-yellow-400 placeholder-yellow-400/30 focus:outline-none focus:border-yellow-400 focus:shadow-[0_0_10px_rgba(225,175,34,0.5)] transition-all"
                  placeholder="Enter password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 rounded uppercase tracking-wider hover:bg-yellow-300 transition-all shadow-[0_0_20px_rgba(225,175,34,0.6)] hover:shadow-[0_0_30px_rgba(225,175,34,0.8)]"
                style={{ fontFamily: 'monospace' }}
              >
                {isSignUp ? 'CREATE ACCOUNT' : 'LOGIN'}
              </button>

              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="w-full bg-transparent border border-yellow-400 text-yellow-400 py-2 rounded text-sm hover:bg-yellow-400/10 transition-all"
              >
                {isSignUp ? 'BACK TO LOGIN' : 'CREATE NEW ACCOUNT'}
              </button>
            </form>

            {/* Social icons */}
            <div className="flex justify-center gap-4 mt-6">
              {['G', 'D', 'F'].map((letter, i) => (
                <button
                  key={i}
                  className="w-8 h-8 border border-yellow-400/50 rounded flex items-center justify-center text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all text-xs"
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes speedLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}