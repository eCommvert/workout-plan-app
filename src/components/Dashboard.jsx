import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  const week1 = [
    { day: 'Monday', workout: 'PUSH DAY', time: '60-75 min', skill: 'Wall handstand holds', corrective: 'Workout A' },
    { day: 'Tuesday', workout: 'RUNNING', time: '20-40 min', skill: '', corrective: 'Workout B' },
    { day: 'Wednesday', workout: 'PULL DAY', time: '60-75 min', skill: 'Tucked front lever', corrective: 'Workout C' },
    { day: 'Thursday', workout: 'RUNNING', time: '20-40 min', skill: '', corrective: 'Workout A' },
    { day: 'Friday', workout: 'LEGS DAY', time: '60-75 min', skill: '', corrective: 'Workout B' },
    { day: 'Saturday', workout: 'BOXING', time: '60-90 min', skill: '', corrective: 'Workout C' },
    { day: 'Sunday', workout: 'REST DAY', time: '', skill: '', corrective: 'Optional: Workout A' },
  ]

  const week2 = [
    { day: 'Monday', workout: 'PULL DAY', time: '60-75 min', skill: 'Front lever', corrective: 'Workout A' },
    { day: 'Tuesday', workout: 'RUNNING', time: '20-40 min', skill: '', corrective: 'Workout B' },
    { day: 'Wednesday', workout: 'LEGS DAY', time: '60-75 min', skill: '', corrective: 'Workout C' },
    { day: 'Thursday', workout: 'RUNNING', time: '20-40 min', skill: '', corrective: 'Workout A' },
    { day: 'Friday', workout: 'PUSH DAY', time: '60-75 min', skill: 'Handstand/Planche', corrective: 'Workout B' },
    { day: 'Saturday', workout: 'BOXING', time: '60-90 min', skill: '', corrective: 'Workout C' },
    { day: 'Sunday', workout: 'REST DAY', time: '', skill: '', corrective: 'Rest' },
  ]

  const week3 = [
    { day: 'Monday', workout: 'LEGS DAY', time: '60-75 min', skill: '', corrective: 'Workout A' },
    { day: 'Tuesday', workout: 'RUNNING', time: '20-40 min', skill: '', corrective: 'Workout B' },
    { day: 'Wednesday', workout: 'PUSH DAY', time: '60-75 min', skill: 'Handstand/Planche', corrective: 'Workout C' },
    { day: 'Thursday', workout: 'RUNNING', time: '20-40 min', skill: '', corrective: 'Workout A' },
    { day: 'Friday', workout: 'PULL DAY', time: '60-75 min', skill: 'Front lever', corrective: 'Workout B' },
    { day: 'Saturday', workout: 'BOXING', time: '60-90 min', skill: '', corrective: 'Workout C' },
    { day: 'Sunday', workout: 'REST DAY', time: '', skill: '', corrective: 'Rest' },
  ]

  const getWorkoutColor = (workout) => {
    if (workout.includes('PUSH')) return '#ff6b6b'
    if (workout.includes('PULL')) return '#4ecdc4'
    if (workout.includes('LEGS')) return '#95e1d3'
    if (workout.includes('RUNNING')) return '#feca57'
    if (workout.includes('BOXING')) return '#ff9ff3'
    if (workout.includes('REST')) return '#c7ecee'
    return '#ddd'
  }

  const WeekSchedule = ({ week, weekNum }) => (
    <div className="week-schedule">
      <h2 className="week-title">Week {weekNum}</h2>
      <div className="week-grid">
        {week.map((item, idx) => (
          <div key={idx} className="day-card" style={{ borderTopColor: getWorkoutColor(item.workout) }}>
            <div className="day-name">{item.day}</div>
            <div className="workout-type" style={{ color: getWorkoutColor(item.workout) }}>
              {item.workout}
            </div>
            {item.time && <div className="workout-time">⏱️ {item.time}</div>}
            {item.skill && <div className="workout-skill">⭐ {item.skill}</div>}
            <div className="workout-corrective">🔄 {item.corrective}</div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>📅 Weekly Training Schedule</h1>
        <p className="subtitle">Complete Athletic Training Plan</p>
      </div>

      <div className="overview-cards">
        <div className="overview-card">
          <div className="card-icon">💪</div>
          <div className="card-content">
            <h3>Strength Training</h3>
            <p>2-3x/week, 60-75 min</p>
          </div>
        </div>
        <div className="overview-card">
          <div className="card-icon">🏃</div>
          <div className="card-content">
            <h3>Running</h3>
            <p>2x/week, 20-40 min</p>
          </div>
        </div>
        <div className="overview-card">
          <div className="card-icon">🥊</div>
          <div className="card-content">
            <h3>Boxing</h3>
            <p>1x/week, 60-90 min</p>
          </div>
        </div>
        <div className="overview-card">
          <div className="card-icon">🔄</div>
          <div className="card-content">
            <h3>Corrective Work</h3>
            <p>4-5x/week, 20-25 min</p>
          </div>
        </div>
      </div>

      <div className="priority-box">
        <h3>🎯 Priority Focus</h3>
        <div className="priority-items">
          <div className="priority-item">Hip Flexors <span className="severity">5/5</span></div>
          <div className="priority-item">Thoracic Spine <span className="severity">5/5</span></div>
          <div className="priority-item">Lats/Pec Minor <span className="severity">4/5</span></div>
        </div>
      </div>

      <WeekSchedule week={week1} weekNum={1} />
      <WeekSchedule week={week2} weekNum={2} />
      <WeekSchedule week={week3} weekNum={3} />

      <div className="rotation-info">
        <h3>🔄 Rotation Pattern</h3>
        <p><strong>Week 1:</strong> Push → Pull → Legs</p>
        <p><strong>Week 2:</strong> Pull → Legs → Push</p>
        <p><strong>Week 3:</strong> Legs → Push → Pull</p>
        <p><strong>Week 4:</strong> Push → Pull → Legs (repeat)</p>
      </div>
    </div>
  )
}

export default Dashboard

