import React, { useState } from 'react';
import { Auth } from './components/Auth';
import { Dashboard } from './components/Dashboard';
import { User } from './types/auth';

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleAuth = (authenticatedUser: User) => {
    setUser(authenticatedUser);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      {!user ? (
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <img 
                    src="/noun-lomo-lc-a-70634.svg"
                    alt="App Logo" 
                    className="w-16 h-16 text-gray-900"
                  />
                  <h1 className="text-4xl text-gray-900 ml-4 font-['Space_Mono'] font-bold">Calligram</h1>
                </div>
              </div>
              <div className="flex-1 w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <Auth onAuth={handleAuth} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Dashboard user={user} onSignOut={() => setUser(null)} />
      )}
    </div>
  );
}

export default App;