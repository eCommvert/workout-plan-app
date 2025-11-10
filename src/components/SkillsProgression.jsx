import React from 'react'
import './SkillsProgression.css'

const SkillsProgression = () => {
  const handstand = {
    level1: { weeks: 'Weeks 1-2', name: 'Foundation', exercises: 'Wall handstand holds: 3-5 sets x 10-20 sec', focus: 'Build shoulder strength, learn balance' },
    level2: { weeks: 'Weeks 3-4', name: 'Strength', exercises: 'Wall handstand holds: 3-5 sets x 20-30 sec\nWall handstand push-ups: 3 sets x 3-5 reps', focus: 'Build pressing strength in inverted position' },
    level3: { weeks: 'Weeks 5-6', name: 'Balance', exercises: 'Wall handstand holds: 3-5 sets x 30-45 sec\nFree handstand holds: 3-5 sets x 5-15 sec', focus: 'Develop balance, reduce wall dependency' },
    level4: { weeks: 'Weeks 7-8+', name: 'Advanced', exercises: 'Free handstand holds: 3-5 sets x 15-30 sec\nFree handstand push-ups: 3 sets x 3-5 reps', focus: 'Mastery, consistency' }
  }

  const planche = {
    level1: { weeks: 'Weeks 1-2', name: 'Foundation', exercises: 'Plank holds: 3 sets x 30-60 sec', focus: 'Core strength, shoulder stability' },
    level2: { weeks: 'Weeks 3-4', name: 'Tucked', exercises: 'Tucked planche holds: 3-5 sets x 5-10 sec', focus: 'Learn lean, build strength' },
    level3: { weeks: 'Weeks 5-6', name: 'Advanced Tuck', exercises: 'Advanced tuck planche: 3-5 sets x 5-10 sec', focus: 'Increase lean, build strength' },
    level4: { weeks: 'Weeks 7-8+', name: 'One-Leg', exercises: 'One-leg planche: 3-5 sets x 3-5 sec', focus: 'Progress to full planche' },
    level5: { weeks: 'Elite', name: 'Full Planche', exercises: 'Full planche holds: 3-5 sets x 3-10 sec', focus: 'Mastery' }
  }

  const frontLever = {
    level1: { weeks: 'Weeks 1-2', name: 'Foundation', exercises: 'Tucked front lever holds: 3-5 sets x 5-10 sec', focus: 'Build lat strength, core stability' },
    level2: { weeks: 'Weeks 3-4', name: 'Advanced Tuck', exercises: 'Advanced tuck front lever: 3-5 sets x 5-10 sec', focus: 'Increase difficulty, build strength' },
    level3: { weeks: 'Weeks 5-6', name: 'One-Leg', exercises: 'One-leg front lever: 3-5 sets x 3-8 sec', focus: 'Progress to full lever' },
    level4: { weeks: 'Weeks 7-8+', name: 'Full Front Lever', exercises: 'Full front lever holds: 3-5 sets x 3-10 sec\nFront lever pulls: 3 sets x 3-8 reps', focus: 'Mastery, dynamic strength' }
  }

  const SkillPath = ({ title, skill, color }) => (
    <div className="skill-path">
      <h2 className="skill-title" style={{ borderColor: color }}>{title}</h2>
      <div className="skill-levels">
        {Object.values(skill).map((level, idx) => (
          <div key={idx} className="skill-level-card" style={{ borderLeftColor: color }}>
            <div className="level-header">
              <span className="level-weeks">{level.weeks}</span>
              <span className="level-name">{level.name}</span>
            </div>
            <div className="level-exercises">
              {level.exercises.split('\n').map((ex, i) => (
                <div key={i} className="exercise-item">{ex}</div>
              ))}
            </div>
            <div className="level-focus">
              <strong>Focus:</strong> {level.focus}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="skills-progression">
      <div className="skills-header">
        <h1>⭐ Calisthenics Skill Progressions</h1>
        <p className="subtitle">Handstand, Planche, Front Lever</p>
      </div>

      <div className="skills-info">
        <div className="info-card">
          <h3>💡 When to Practice</h3>
          <ul>
            <li><strong>Always do skill work FIRST</strong> - when you're fresh</li>
            <li>10-15 minutes per strength training session</li>
            <li>Can practice skills on rest days (light practice)</li>
          </ul>
        </div>
        <div className="info-card">
          <h3>📊 Progression Tips</h3>
          <ul>
            <li>Focus on form over duration</li>
            <li>If you can't hold for 5 seconds, regress to easier progression</li>
            <li>If you can hold for 15+ seconds consistently, progress to next level</li>
            <li>Quality over quantity</li>
          </ul>
        </div>
      </div>

      <SkillPath title="🤸 HANDSTAND PROGRESSION" skill={handstand} color="#ff6b6b" />
      <SkillPath title="💪 PLANCHE PROGRESSION" skill={planche} color="#4ecdc4" />
      <SkillPath title="🏋️ FRONT LEVER PROGRESSION" skill={frontLever} color="#95e1d3" />

      <div className="common-mistakes">
        <h2>⚠️ Common Mistakes</h2>
        <div className="mistakes-grid">
          <div className="mistake-card">
            <h3>Handstand</h3>
            <ul>
              <li>Rib flare</li>
              <li>Arching back</li>
              <li>Focus on thoracic extension</li>
            </ul>
          </div>
          <div className="mistake-card">
            <h3>Planche</h3>
            <ul>
              <li>Lumbar compensation</li>
              <li>Focus on core engagement</li>
            </ul>
          </div>
          <div className="mistake-card">
            <h3>Front Lever</h3>
            <ul>
              <li>Arching back</li>
              <li>Focus on hollow body</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsProgression

