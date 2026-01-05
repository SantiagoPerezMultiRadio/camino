import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Login } from './components/Login';
import { Account } from './components/Account';
import { RideDashboard } from './components/RideDashboard';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'login' | 'account' | 'ride'>('landing');

  return (
    <div className="size-full">
      {currentView === 'landing' && (
        <LandingPage onNavigateToLogin={() => setCurrentView('login')} />
      )}
      {currentView === 'login' && (
        <Login onLogin={() => setCurrentView('ride')} />
      )}
      {currentView === 'account' && (
        <Account onLogout={() => setCurrentView('landing')} />
      )}
      {currentView === 'ride' && (
        <RideDashboard 
          onLogout={() => setCurrentView('landing')} 
          onNavigateToAccount={() => setCurrentView('account')}
        />
      )}
    </div>
  );
}