import React, { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import PushDay from './components/PushDay'
import PullDay from './components/PullDay'
import LegsDay from './components/LegsDay'
import SkillsProgression from './components/SkillsProgression'
import QuickReference from './components/QuickReference'

function App() {
  const [currentView, setCurrentView] = useState('dashboard')

  const navigation = [
    { id: 'dashboard', label: '📅 Schedule', icon: '📅' },
    { id: 'push', label: '💪 Push Day', icon: '💪' },
    { id: 'pull', label: '🏋️ Pull Day', icon: '🏋️' },
    { id: 'legs', label: '🦵 Legs Day', icon: '🦵' },
    { id: 'skills', label: '⭐ Skills', icon: '⭐' },
    { id: 'reference', label: '📖 Reference', icon: '📖' },
  ]

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />
      case 'push':
        return <PushDay />
      case 'pull':
        return <PullDay />
      case 'legs':
        return <LegsDay />
      case 'skills':
        return <SkillsProgression />
      case 'reference':
        return <QuickReference />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>🏋️ Workout Plan</h1>
        </div>
        <div className="nav-links">
          {navigation.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${currentView === item.id ? 'active' : ''}`}
              onClick={() => setCurrentView(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
      <main className="main-content">
        {renderView()}
      </main>
    </div>
  )
}

export default App

