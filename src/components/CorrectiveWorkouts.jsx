import React, { useState } from 'react'
import './CorrectiveWorkouts.css'

const CorrectiveWorkouts = () => {
  const [activeWorkout, setActiveWorkout] = useState('A')

  const workouts = {
    A: {
      title: 'WORKOUT A: HIP FLEXOR + CORE FOCUS',
      theme: 'Fix the pelvis, strengthen deep core, open thoracic spine',
      duration: '20-25 minutes',
      warmup: [
        { name: 'Cat-Cow', details: '10 reps - Focus on thoracic extension, not just lumbar', zone: 'Calisthenics zone mat' },
        { name: '90/90 Hip Switches', details: '8 per side - Prepares hip flexors for work', zone: 'Fighting zone mat' }
      ],
      main: [
        { 
          name: 'Couch Stretch', 
          sets: '2 minutes per side (total 4 min)',
          details: 'Back foot elevated on bench, front leg in lunge',
          focus: 'Deep hip flexor stretch (iliacus + psoas)',
          note: 'This will be uncomfortable. That\'s the point.',
          zone: 'Powerlifting zone - bench or box'
        },
        { 
          name: 'Hip Flexor End-Range Lift-offs', 
          sets: '2 sets x 12 reps per side',
          details: 'Kneel on one knee, other leg forward at 90°. Lift back knee off ground, hold 2 sec, lower',
          focus: 'Teach hip flexors to relax while strengthening opposite muscles',
          zone: 'Calisthenics zone'
        },
        { 
          name: 'Dead Bugs', 
          sets: '2 sets x 10 reps per side',
          details: 'Keep lower back pressed to floor throughout',
          focus: 'Deep core activation, prevent rib flare',
          zone: 'Fighting zone mat'
        },
        { 
          name: 'Thoracic Extensions', 
          sets: '2 sets x 12 reps',
          details: 'Over foam roller or edge of bench',
          focus: 'Mid-back mobility, not lumbar extension',
          zone: 'Powerlifting zone - foam roller or bench'
        },
        { 
          name: 'Wall Slides', 
          sets: '2 sets x 12 reps',
          details: 'Back against wall, slide arms up',
          focus: 'Scapula upward rotation, lower trap activation',
          zone: 'Calisthenics zone - wall'
        },
        { 
          name: 'Lat Stretch', 
          sets: '1 minute per side',
          details: 'Hang from bar or lean against wall',
          focus: 'Open lats for overhead range',
          zone: 'Calisthenics zone - pull-up bar or wall'
        }
      ],
      cooldown: [
        'Pec Minor Doorway Stretch - 1 min per side',
        'Deep Breathing - 5 breaths, focus on rib control'
      ]
    },
    B: {
      title: 'WORKOUT B: THORACIC + SHOULDER FOCUS',
      theme: 'Open mid-back, fix overhead range, strengthen weak shoulders',
      duration: '20-25 minutes',
      warmup: [
        { name: 'Arm Circles', details: '10 forward, 10 backward', zone: '' },
        { name: 'Thread the Needle', details: '6 per side - Thoracic rotation prep', zone: 'Calisthenics zone mat' }
      ],
      main: [
        { 
          name: 'Thoracic Extensions Over Foam Roller', 
          sets: '2 sets x 15 reps',
          details: 'Place roller horizontally under mid-back. Extend over roller, pause 2 sec',
          focus: 'Mid-back mobility (your 5/5 priority)',
          zone: 'Powerlifting zone'
        },
        { 
          name: 'Pec Minor Doorway Stretch', 
          sets: '1.5 minutes per side (total 3 min)',
          details: 'Forearm on doorframe, lean forward',
          focus: 'Open anterior shoulder',
          zone: 'Calisthenics zone - doorway or rig'
        },
        { 
          name: 'Wall Slides', 
          sets: '3 sets x 12 reps',
          details: 'Extra volume for scapula control',
          focus: 'Lower traps + serratus anterior',
          zone: 'Calisthenics zone'
        },
        { 
          name: 'Lat Stretch Variations', 
          sets: '2 minutes per side',
          details: 'Option A: Hang from bar (if grip allows) | Option B: Lean against wall with arm overhead',
          focus: 'Full lat length',
          zone: 'Calisthenics zone - pull-up bar'
        },
        { 
          name: 'Prone Y-T-W', 
          sets: '2 sets x 8 reps each letter',
          details: 'Y: Lower traps | T: Mid traps | W: Scapular retraction',
          focus: 'Strengthen weak posterior chain',
          zone: 'Fighting zone mat'
        },
        { 
          name: 'Seated Good Morning', 
          sets: '2 sets x 12 reps',
          details: 'Seated, stick behind neck. Hinge from hips, not spine',
          focus: 'Retrain pelvis hinging',
          zone: 'Powerlifting zone - light barbell or stick'
        }
      ],
      cooldown: [
        'Couch Stretch - 1 min per side (maintenance)',
        'Deep Breathing - 5 breaths'
      ]
    },
    C: {
      title: 'WORKOUT C: POSTERIOR CHAIN + PELVIS INTEGRATION',
      theme: 'Open posterior chain, improve hip mobility, integrate everything',
      duration: '20-25 minutes',
      warmup: [
        { name: 'Hip Circles', details: '8 per direction, per leg', zone: '' },
        { name: 'World\'s Greatest Stretch', details: '4 per side - Opens hip flexors + thoracic rotation', zone: 'Fighting zone mat' }
      ],
      main: [
        { 
          name: 'Couch Stretch', 
          sets: '1.5 minutes per side (total 3 min)',
          details: 'Maintenance dose',
          focus: 'Hip flexor maintenance',
          zone: 'Powerlifting zone - bench'
        },
        { 
          name: 'Seated Good Morning With Stick', 
          sets: '2 sets x 12 reps',
          details: 'Focus: Pelvis hinging pattern',
          focus: 'This is critical for your seated 90° issue',
          zone: 'Powerlifting zone'
        },
        { 
          name: 'Butterfly Stretch + PNF', 
          sets: '2 sets x 30 seconds passive, then 10 reps PNF',
          details: 'PNF: Contract adductors for 5 sec, then relax deeper',
          focus: 'Adductor mobility for pancake',
          zone: 'Fighting zone mat'
        },
        { 
          name: 'Pancake Stretch + PNF', 
          sets: '2 sets x 30 seconds passive, then 10 reps PNF',
          details: 'Legs wide, fold forward. PNF: Contract adductors, then relax deeper',
          focus: 'Full posterior chain + adductor length',
          zone: 'Fighting zone mat'
        },
        { 
          name: 'Jefferson Curls', 
          sets: '1 set x 8 reps with 5kg max',
          details: 'Stand on box, curl down vertebra by vertebra',
          focus: 'Build mobility strength along spine',
          note: 'Go slow. This is about control, not weight.',
          zone: 'Powerlifting zone - light weight'
        },
        { 
          name: 'Hip Flexor Lift-offs', 
          sets: '2 sets x 10 reps per side',
          details: 'Maintenance dose',
          focus: 'Hip flexor maintenance',
          zone: 'Calisthenics zone'
        },
        { 
          name: 'Dead Bugs', 
          sets: '2 sets x 8 reps per side',
          details: 'Focus: Deep core, rib control',
          focus: 'Deep core, rib control',
          zone: 'Fighting zone mat'
        }
      ],
      cooldown: [
        'Lat Stretch - 1 min per side',
        'Pec Minor Stretch - 1 min per side',
        'Deep Breathing - 5 breaths'
      ]
    }
  }

  const currentWorkout = workouts[activeWorkout]

  return (
    <div className="corrective-workouts">
      <div className="corrective-header">
        <h1>🔄 Corrective Workouts</h1>
        <p className="subtitle">Based on Assessment 11.2025 - Fix mobility issues systematically</p>
        <div className="workout-meta">
          <span>⏱️ 20-25 minutes per session</span>
          <span>📅 4-5x per week</span>
          <span>🎯 Priority: Hip flexors (5/5), Thoracic spine (5/5), Lats/Pec (4/5)</span>
        </div>
      </div>

      <div className="workout-selector">
        <button 
          className={`workout-btn ${activeWorkout === 'A' ? 'active' : ''}`}
          onClick={() => setActiveWorkout('A')}
        >
          Workout A
          <span className="btn-subtitle">Hip Flexor + Core</span>
        </button>
        <button 
          className={`workout-btn ${activeWorkout === 'B' ? 'active' : ''}`}
          onClick={() => setActiveWorkout('B')}
        >
          Workout B
          <span className="btn-subtitle">Thoracic + Shoulder</span>
        </button>
        <button 
          className={`workout-btn ${activeWorkout === 'C' ? 'active' : ''}`}
          onClick={() => setActiveWorkout('C')}
        >
          Workout C
          <span className="btn-subtitle">Posterior Chain</span>
        </button>
      </div>

      <div className="workout-content">
        <div className="workout-title-section">
          <h2>{currentWorkout.title}</h2>
          <p className="workout-theme">{currentWorkout.theme}</p>
          <div className="workout-duration">⏱️ {currentWorkout.duration}</div>
        </div>

        <section className="workout-section">
          <h3>🔥 Warm-up (3-4 min)</h3>
          <div className="exercise-list">
            {currentWorkout.warmup.map((item, idx) => (
              <div key={idx} className="exercise-item">
                <div className="exercise-name">{item.name}</div>
                <div className="exercise-details">{item.details}</div>
                {item.zone && <div className="exercise-zone">📍 {item.zone}</div>}
              </div>
            ))}
          </div>
        </section>

        <section className="workout-section">
          <h3>💪 Main Work (15-18 min)</h3>
          <div className="exercise-list">
            {currentWorkout.main.map((item, idx) => (
              <div key={idx} className="exercise-item main-exercise">
                <div className="exercise-header">
                  <div className="exercise-name">{item.name}</div>
                  <div className="exercise-sets">{item.sets}</div>
                </div>
                <div className="exercise-details">{item.details}</div>
                <div className="exercise-focus">🎯 Focus: {item.focus}</div>
                {item.note && <div className="exercise-note">⚠️ {item.note}</div>}
                {item.zone && <div className="exercise-zone">📍 {item.zone}</div>}
              </div>
            ))}
          </div>
        </section>

        <section className="workout-section">
          <h3>🧘 Cooldown (2-3 min)</h3>
          <div className="exercise-list">
            {currentWorkout.cooldown.map((item, idx) => (
              <div key={idx} className="exercise-item cooldown-item">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="rotation-info">
        <h3>🔄 Rotation Schedule</h3>
        <p><strong>Frequency:</strong> 4-5x per week (rotate A, B, C)</p>
        <p><strong>Example Week:</strong> Mon: A | Tue: B | Wed: Rest | Thu: C | Fri: A | Sat: B | Sun: Rest</p>
        <p><strong>Remember:</strong> These workouts address your main issues systematically. Stick with it for 8 weeks!</p>
      </div>
    </div>
  )
}

export default CorrectiveWorkouts

