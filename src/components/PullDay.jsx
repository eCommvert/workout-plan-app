import React from 'react'
import './WorkoutDay.css'

const PullDay = () => {
  const warmup = [
    'Arm Circles - 10 forward, 10 backward',
    'Lat Stretch - 1 min per side',
    'Thread the Needle - 6 per side (thoracic rotation)',
    'Cat-Cow - 10 reps',
    'Scapular Wall Slides - 2 sets x 12 reps'
  ]

  const skillWork = {
    frontLever: {
      beginner: 'Tucked front lever holds - 3-5 sets x 5-15 sec',
      intermediate: 'Advanced tuck front lever - 3-5 sets x 5-10 sec',
      advanced: 'One-leg front lever - 3-5 sets x 3-8 sec',
      elite: 'Full front lever - 3-5 sets x 3-10 sec',
      cues: 'Hollow body, lats engaged, core tight'
    }
  }

  const exercises = {
    pulling: [
      { name: 'Pull-ups/Chin-ups', sets: '3 sets x 3-12 reps', options: 'Negatives → Assisted → Full → Weighted → L-sit pull-ups' },
      { name: 'Rows', sets: '3 sets x 8-12 reps', options: 'Inverted rows → Barbell rows → T-bar rows → Kettlebell rows' },
      { name: 'Kettlebell Rows', sets: '3 sets x 8-12 reps per side', options: 'Single-arm, focus on scapular retraction' },
      { name: 'Cable/Band Rows', sets: '3 sets x 10-12 reps', options: 'Seated, standing, or single-arm' },
      { name: 'Australian Pull-ups', sets: '3 sets x 10-15 reps', options: 'Vary grip width (wide, narrow, underhand)' }
    ],
    posterior: [
      { name: 'Face Pulls', sets: '3 sets x 15-20 reps', options: 'Critical for weak lower traps/serratus' },
      { name: 'Reverse Flyes', sets: '3 sets x 12-15 reps', options: 'Dumbbells, bands, or cable' },
      { name: 'Band Pull-aparts', sets: '3 sets x 15-20 reps', options: 'Scapular retraction' },
      { name: 'Prone Y-T-W', sets: '2 sets x 8 reps each letter', options: 'Lower traps, mid traps, rhomboids' }
    ],
    rotational: [
      { name: 'Hanging Leg Raises', sets: '3 sets x 8-15 reps', options: 'Knee raises → Leg raises → Toes-to-bar → Windshield wipers' },
      { name: 'Cable/Band Rotations', sets: '3 sets x 10-12 reps per side', options: 'Standing anti-rotation' },
      { name: 'Kettlebell Swings', sets: '3 sets x 15-20 reps', options: 'Hip hinge + core stability' },
      { name: 'Single-Arm Kettlebell Rows', sets: '3 sets x 8-10 reps per side', options: 'Anti-rotation core work' },
      { name: 'Pallof Press', sets: '3 sets x 10-12 reps per side', options: 'Cable or band anti-rotation' },
      { name: 'Rotational Medicine Ball Slams', sets: '3 sets x 8-10 reps per side', options: 'Explosive rotation' }
    ],
    explosive: [
      { name: 'Medicine Ball Slams', sets: '3 sets x 8-10 reps', options: 'Overhead, full extension' },
      { name: 'Kettlebell Swings (Heavy)', sets: '3 sets x 10-15 reps', options: 'Explosive hip extension' },
      { name: 'Broad Jumps', sets: '3 sets x 5 reps', options: 'Horizontal power' }
    ],
    accessory: [
      { name: 'Bicep Curls', sets: '3 sets x 10-12 reps', options: 'Dumbbells, barbell, or bands' },
      { name: 'Hammer Curls', sets: '3 sets x 10-12 reps', options: 'Grip strength' },
      { name: 'Rear Delt Flyes', sets: '3 sets x 12-15 reps', options: 'Postural correction' }
    ]
  }

  const cooldown = [
    'Lat Stretch - 1.5 min per side',
    'Pec Minor Stretch - 1 min per side',
    'Deep Breathing - 5 breaths'
  ]

  return (
    <div className="workout-day">
      <div className="workout-header">
        <h1>🏋️ PULL DAY</h1>
        <p className="workout-subtitle">Upper Body Pull + Front Lever Skills + Rotational Core</p>
        <div className="workout-meta">
          <span>⏱️ 60-75 minutes</span>
          <span>🎯 Build pulling strength, front lever progressions, rotational core</span>
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
          <h3>FRONT LEVER PROGRESSION</h3>
          <div className="skill-levels">
            <div className="skill-level">
              <strong>Beginner:</strong> {skillWork.frontLever.beginner}
            </div>
            <div className="skill-level">
              <strong>Intermediate:</strong> {skillWork.frontLever.intermediate}
            </div>
            <div className="skill-level">
              <strong>Advanced:</strong> {skillWork.frontLever.advanced}
            </div>
            <div className="skill-level">
              <strong>Elite:</strong> {skillWork.frontLever.elite}
            </div>
          </div>
          <div className="skill-cues">
            <strong>Form cues:</strong> {skillWork.frontLever.cues}
          </div>
        </div>
      </section>

      <section className="workout-section">
        <h2>💪 Main Work (35-45 min) - Pick 4-5 exercises</h2>
        
        <div className="exercise-category">
          <h3>1. PULLING STRENGTH (Choose 1-2)</h3>
          {exercises.pulling.map((ex, idx) => (
            <div key={idx} className="exercise-card">
              <div className="exercise-name">{ex.name}</div>
              <div className="exercise-sets">{ex.sets}</div>
              <div className="exercise-options">{ex.options}</div>
            </div>
          ))}
        </div>

        <div className="exercise-category">
          <h3>2. POSTERIOR CHAIN (Choose 1)</h3>
          {exercises.posterior.map((ex, idx) => (
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
          <h3>4. EXPLOSIVE POWER (Choose 1)</h3>
          {exercises.explosive.map((ex, idx) => (
            <div key={idx} className="exercise-card">
              <div className="exercise-name">{ex.name}</div>
              <div className="exercise-sets">{ex.sets}</div>
              <div className="exercise-options">{ex.options}</div>
            </div>
          ))}
        </div>

        <div className="exercise-category">
          <h3>5. ACCESSORY WORK (Choose 1)</h3>
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

export default PullDay

