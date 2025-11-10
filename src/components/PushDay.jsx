import React from 'react'
import './WorkoutDay.css'

const PushDay = () => {
  const warmup = [
    'Arm Circles - 10 forward, 10 backward',
    'Wall Slides - 2 sets x 12 reps',
    'Pec Minor Doorway Stretch - 30 sec per side',
    'Thoracic Extensions - 10 reps over foam roller',
    'Wrist Mobility - 30 sec'
  ]

  const skillWork = {
    handstand: {
      beginner: 'Wall handstand holds - 3-5 sets x 10-30 sec',
      intermediate: 'Wall handstand push-ups - 3 sets x 3-8 reps',
      advanced: 'Free handstand holds - 3-5 sets x 10-30 sec',
      cues: 'Ribs down, thoracic extension, shoulders over wrists'
    },
    planche: {
      beginner: 'Plank holds - 3 sets x 30-60 sec',
      intermediate: 'Tucked planche holds - 3 sets x 5-15 sec',
      advanced: 'Advanced tuck planche - 3 sets x 5-10 sec',
      cues: 'Protraction, core engaged, lean forward'
    }
  }

  const exercises = {
    pushing: [
      { name: 'Push-ups', sets: '3 sets x 8-15 reps', options: 'Standard → Decline → Archer → One-arm → Weighted' },
      { name: 'Dips', sets: '3 sets x 6-12 reps', options: 'Bench dips → Parallel bars → Weighted → Ring dips' },
      { name: 'Pike Push-ups', sets: '3 sets x 8-12 reps', options: 'Progress to handstand push-ups' },
      { name: 'Kettlebell Press', sets: '3 sets x 6-10 reps per side', options: 'Single-arm overhead press' },
      { name: 'Dumbbell/Barbell Bench Press', sets: '3 sets x 6-10 reps', options: 'Horizontal pressing' }
    ],
    explosive: [
      { name: 'Plyometric Push-ups', sets: '3 sets x 5-8 reps', options: 'Clap push-ups, depth push-ups' },
      { name: 'Medicine Ball Chest Pass', sets: '3 sets x 6-8 reps', options: 'Explosive pushing power' },
      { name: 'Kettlebell Snatch', sets: '3 sets x 5-8 reps per side', options: 'Full-body explosive' },
      { name: 'Box Jumps', sets: '3 sets x 5-8 reps', options: 'Lower body power' }
    ],
    rotational: [
      { name: 'Russian Twists', sets: '3 sets x 15-20 reps per side', options: 'With weight, medicine ball, or kettlebell' },
      { name: 'Pallof Press', sets: '3 sets x 10-12 reps per side', options: 'Cable or band anti-rotation' },
      { name: 'Kettlebell Windmill', sets: '3 sets x 8-10 reps per side', options: 'Rotational mobility + core strength' },
      { name: 'Cable/Band Woodchoppers', sets: '3 sets x 10-12 reps per side', options: 'High to low, low to high' },
      { name: 'Landmine Rotations', sets: '3 sets x 8-10 reps per side', options: 'Barbell or kettlebell' },
      { name: 'Turkish Get-ups', sets: '2 sets x 3-5 reps per side', options: 'Full-body rotational strength' },
      { name: 'Rotational Medicine Ball Slams', sets: '3 sets x 8-10 reps per side', options: 'Explosive rotation' }
    ],
    accessory: [
      { name: 'Lateral Raises', sets: '3 sets x 12-15 reps', options: 'Light weight, focus on lower traps' },
      { name: 'Face Pulls', sets: '3 sets x 15-20 reps', options: 'For weak lower traps/serratus' },
      { name: 'Tricep Extensions', sets: '3 sets x 10-12 reps', options: 'Cable, dumbbell, or bodyweight' }
    ]
  }

  const cooldown = [
    'Pec Minor Stretch - 1 min per side',
    'Lat Stretch - 1 min per side',
    'Wrist Stretch - 30 sec per side',
    'Deep Breathing - 5 breaths'
  ]

  const cues = {
    skill: [
      'Handstand: "Ribs down, thoracic extension, shoulders over wrists"',
      'Planche: "Protract shoulders, core tight, lean forward"'
    ],
    push: [
      '"Extend from mid-back" - Thoracic extension, not lumbar',
      '"Full range" - Don\'t cheat the bottom of push-ups',
      '"Shoulders over wrists" - For handstand work'
    ],
    rotational: [
      '"Control the rotation" - Slow and controlled',
      '"Anti-rotate" - Resist rotation on single-arm work',
      '"Core engaged" - Deep core, not just abs',
      '"Breathe" - Don\'t hold your breath'
    ]
  }

  return (
    <div className="workout-day">
      <div className="workout-header">
        <h1>💪 PUSH DAY</h1>
        <p className="workout-subtitle">Upper Body Push + Handstand/Planche Skills + Rotational Core</p>
        <div className="workout-meta">
          <span>⏱️ 60-75 minutes</span>
          <span>🎯 Build pressing strength, handstand/planche progressions, rotational core</span>
        </div>
      </div>

      <section className="workout-section">
        <h2>🔥 Warm-up (7-10 min)</h2>
        <ul className="exercise-list">
          {warmup.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="workout-section skill-section">
        <h2>⭐ Skill Work (10-15 min) - Do this first while fresh</h2>
        
        <div className="skill-card">
          <h3>HANDSTAND PROGRESSION</h3>
          <div className="skill-levels">
            <div className="skill-level">
              <strong>Beginner:</strong> {skillWork.handstand.beginner}
            </div>
            <div className="skill-level">
              <strong>Intermediate:</strong> {skillWork.handstand.intermediate}
            </div>
            <div className="skill-level">
              <strong>Advanced:</strong> {skillWork.handstand.advanced}
            </div>
          </div>
          <div className="skill-cues">
            <strong>Form cues:</strong> {skillWork.handstand.cues}
          </div>
        </div>

        <div className="skill-card">
          <h3>PLANCHE PROGRESSION</h3>
          <div className="skill-levels">
            <div className="skill-level">
              <strong>Beginner:</strong> {skillWork.planche.beginner}
            </div>
            <div className="skill-level">
              <strong>Intermediate:</strong> {skillWork.planche.intermediate}
            </div>
            <div className="skill-level">
              <strong>Advanced:</strong> {skillWork.planche.advanced}
            </div>
          </div>
          <div className="skill-cues">
            <strong>Form cues:</strong> {skillWork.planche.cues}
          </div>
        </div>
      </section>

      <section className="workout-section">
        <h2>💪 Main Work (35-45 min) - Pick 4-5 exercises</h2>
        
        <div className="exercise-category">
          <h3>1. PUSHING STRENGTH (Choose 1-2)</h3>
          {exercises.pushing.map((ex, idx) => (
            <div key={idx} className="exercise-card">
              <div className="exercise-name">{ex.name}</div>
              <div className="exercise-sets">{ex.sets}</div>
              <div className="exercise-options">{ex.options}</div>
            </div>
          ))}
        </div>

        <div className="exercise-category">
          <h3>2. EXPLOSIVE POWER (Choose 1)</h3>
          {exercises.explosive.map((ex, idx) => (
            <div key={idx} className="exercise-card">
              <div className="exercise-name">{ex.name}</div>
              <div className="exercise-sets">{ex.sets}</div>
              <div className="exercise-options">{ex.options}</div>
            </div>
          ))}
        </div>

        <div className="exercise-category">
          <h3>3. ROTATIONAL CORE (Choose 1-2)</h3>
          {exercises.rotational.map((ex, idx) => (
            <div key={idx} className="exercise-card">
              <div className="exercise-name">{ex.name}</div>
              <div className="exercise-sets">{ex.sets}</div>
              <div className="exercise-options">{ex.options}</div>
            </div>
          ))}
        </div>

        <div className="exercise-category">
          <h3>4. ACCESSORY WORK (Choose 1)</h3>
          {exercises.accessory.map((ex, idx) => (
            <div key={idx} className="exercise-card">
              <div className="exercise-name">{ex.name}</div>
              <div className="exercise-sets">{ex.sets}</div>
              <div className="exercise-options">{ex.options}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="workout-section">
        <h2>🧘 Cooldown (3-5 min)</h2>
        <ul className="exercise-list">
          {cooldown.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="workout-section cues-section">
        <h2>🎯 Key Cues</h2>
        <div className="cues-grid">
          <div className="cues-card">
            <h3>Skill Work</h3>
            <ul>
              {cues.skill.map((cue, idx) => (
                <li key={idx}>{cue}</li>
              ))}
            </ul>
          </div>
          <div className="cues-card">
            <h3>Push Work</h3>
            <ul>
              {cues.push.map((cue, idx) => (
                <li key={idx}>{cue}</li>
              ))}
            </ul>
          </div>
          <div className="cues-card">
            <h3>Rotational Core</h3>
            <ul>
              {cues.rotational.map((cue, idx) => (
                <li key={idx}>{cue}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PushDay

