import React from 'react'
import './WorkoutDay.css'

const LegsDay = () => {
  const warmup = [
    'Hip Circles - 8 per direction, per leg',
    '90/90 Hip Switches - 8 per side',
    'World\'s Greatest Stretch - 4 per side',
    'Couch Stretch - 1 min per side (pre-workout activation)',
    'Leg Swings - 10 forward, 10 backward, 10 lateral per leg'
  ]

  const exercises = {
    squat: [
      { name: 'Squats', sets: '3 sets x 8-15 reps', options: 'Bodyweight → Goblet → Back squat → Front squat → Overhead squat' },
      { name: 'Goblet Squats', sets: '3 sets x 10-15 reps', options: 'Kettlebell or dumbbell, great for form' },
      { name: 'Bulgarian Split Squats', sets: '3 sets x 8-12 reps per leg', options: 'Bodyweight → Weighted → Kettlebell' },
      { name: 'Pistol Squats', sets: '3 sets x 3-8 reps per leg', options: 'Advanced bodyweight option' },
      { name: 'Jump Squats', sets: '3 sets x 8-10 reps', options: 'Explosive version' }
    ],
    hinge: [
      { name: 'Romanian Deadlifts (RDLs)', sets: '3 sets x 8-12 reps', options: 'Barbell → Dumbbell → Kettlebell → Single-leg', critical: 'Hinge from hips, not spine' },
      { name: 'Kettlebell Swings', sets: '3 sets x 15-20 reps', options: 'Explosive hip hinge, core stability' },
      { name: 'Single-Leg RDLs', sets: '3 sets x 8-10 reps per leg', options: 'Bodyweight → Kettlebell → Barbell' },
      { name: 'Good Mornings', sets: '3 sets x 8-12 reps', options: 'Barbell or band, teaches hinging pattern' }
    ],
    lunge: [
      { name: 'Walking Lunges', sets: '3 sets x 10-15 reps per leg', options: 'Bodyweight → Weighted → Kettlebell → Overhead' },
      { name: 'Reverse Lunges', sets: '3 sets x 10-15 reps per leg', options: 'Better for hip flexor stretch' },
      { name: 'Lateral Lunges', sets: '3 sets x 10-12 reps per leg', options: 'Adductor mobility' },
      { name: 'Rotational Lunges', sets: '3 sets x 8-10 reps per leg', options: 'Add rotation with weight or medicine ball' }
    ],
    plyometric: [
      { name: 'Box Jumps', sets: '3 sets x 5-8 reps', options: 'Low box → High box → Depth jumps' },
      { name: 'Broad Jumps', sets: '3 sets x 5 reps', options: 'Horizontal power' },
      { name: 'Jump Lunges', sets: '3 sets x 5-8 reps per leg', options: 'Explosive single-leg' },
      { name: 'Kettlebell Swings (Heavy)', sets: '3 sets x 10-15 reps', options: 'Explosive hip extension' },
      { name: 'Medicine Ball Slams', sets: '3 sets x 8-10 reps', options: 'Full-body explosive' },
      { name: 'Sprint Starts', sets: '3 sets x 3-5 reps', options: 'Explosive acceleration' }
    ],
    rotational: [
      { name: 'Kettlebell Windmill', sets: '3 sets x 8-10 reps per side', options: 'Rotational mobility + core strength' },
      { name: 'Turkish Get-ups', sets: '2 sets x 3-5 reps per side', options: 'Full-body rotational strength' },
      { name: 'Landmine Rotations', sets: '3 sets x 8-10 reps per side', options: 'Barbell or kettlebell' },
      { name: 'Cable/Band Woodchoppers', sets: '3 sets x 10-12 reps per side', options: 'High to low, low to high' },
      { name: 'Rotational Medicine Ball Slams', sets: '3 sets x 8-10 reps per side', options: 'Explosive rotation' },
      { name: 'Single-Arm Kettlebell Swings', sets: '3 sets x 10-12 reps per side', options: 'Anti-rotation core work' }
    ],
    accessory: [
      { name: 'Calf Raises', sets: '3 sets x 15-20 reps', options: 'Bodyweight → Weighted → Single-leg' },
      { name: 'Leg Curls', sets: '3 sets x 10-12 reps', options: 'Hamstring isolation' },
      { name: 'Leg Extensions', sets: '3 sets x 10-12 reps', options: 'Quad isolation' },
      { name: 'Hip Thrusts', sets: '3 sets x 10-15 reps', options: 'Glute strength, hip extension' }
    ]
  }

  const cooldown = [
    'Couch Stretch - 1.5 min per side',
    'Hip Flexor Lift-offs - 10 reps per side',
    'Pigeon Stretch - 1 min per side',
    'Deep Breathing - 5 breaths'
  ]

  return (
    <div className="workout-day">
      <div className="workout-header">
        <h1>🦵 LEGS DAY</h1>
        <p className="workout-subtitle">Lower Body + Athletic Power + Rotational Core</p>
        <div className="workout-meta">
          <span>⏱️ 60-75 minutes</span>
          <span>🎯 Build leg strength, improve hip mobility, explosive power</span>
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

      <section className="workout-section">
        <h2>💪 Main Work (40-50 min) - Pick 5-6 exercises</h2>
        
        <div className="exercise-category">
          <h3>1. SQUAT PATTERN (Choose 1-2)</h3>
          {exercises.squat.map((ex, idx) => (
            <div key={idx} className="exercise-card">
              <div className="exercise-name">{ex.name}</div>
              <div className="exercise-sets">{ex.sets}</div>
              <div className="exercise-options">{ex.options}</div>
            </div>
          ))}
        </div>

        <div className="exercise-category">
          <h3>2. HINGE PATTERN (Choose 1-2) - Critical for your pelvis issue</h3>
          {exercises.hinge.map((ex, idx) => (
            <div key={idx} className="exercise-card">
              <div className="exercise-name">{ex.name}</div>
              <div className="exercise-sets">{ex.sets}</div>
              <div className="exercise-options">{ex.options}</div>
              {ex.critical && <div className="exercise-critical">⚠️ {ex.critical}</div>}
            </div>
          ))}
        </div>

        <div className="exercise-category">
          <h3>3. LUNGE PATTERN (Choose 1)</h3>
          {exercises.lunge.map((ex, idx) => (
            <div key={idx} className="exercise-card">
              <div className="exercise-name">{ex.name}</div>
              <div className="exercise-sets">{ex.sets}</div>
              <div className="exercise-options">{ex.options}</div>
            </div>
          ))}
        </div>

        <div className="exercise-category">
          <h3>4. PLYOMETRIC/EXPLOSIVE (Choose 1-2)</h3>
          {exercises.plyometric.map((ex, idx) => (
            <div key={idx} className="exercise-card">
              <div className="exercise-name">{ex.name}</div>
              <div className="exercise-sets">{ex.sets}</div>
              <div className="exercise-options">{ex.options}</div>
            </div>
          ))}
        </div>

        <div className="exercise-category">
          <h3>5. ROTATIONAL CORE (Choose 1-2)</h3>
          {exercises.rotational.map((ex, idx) => (
            <div key={idx} className="exercise-card">
              <div className="exercise-name">{ex.name}</div>
              <div className="exercise-sets">{ex.sets}</div>
              <div className="exercise-options">{ex.options}</div>
            </div>
          ))}
        </div>

        <div className="exercise-category">
          <h3>6. ACCESSORY WORK (Choose 1)</h3>
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
    </div>
  )
}

export default LegsDay

