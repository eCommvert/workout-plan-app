import React from 'react'
import './QuickReference.css'

const QuickReference = () => {
  return (
    <div className="quick-reference">
      <div className="ref-header">
        <h1>📖 Quick Reference Guide</h1>
        <p className="subtitle">Cues, Equipment, Tips, and Adjustments</p>
      </div>

      <div className="ref-grid">
        <section className="ref-section">
          <h2>🎯 Key Cues</h2>
          <div className="cues-cards">
            <div className="cue-card">
              <h3>Universal</h3>
              <ul>
                <li>"Ribs down" - Prevent rib flare</li>
                <li>"Shoulders down and back" - Lower trap engagement</li>
                <li>"Breathe into your belly" - Core stability</li>
              </ul>
            </div>
            <div className="cue-card">
              <h3>Push Work</h3>
              <ul>
                <li>"Extend from mid-back" - Thoracic extension</li>
                <li>"Full range" - Don't cheat</li>
                <li>"Shoulders over wrists" - For handstand</li>
              </ul>
            </div>
            <div className="cue-card">
              <h3>Pull Work</h3>
              <ul>
                <li>"Retract your shoulder blades"</li>
                <li>"Pull with your back, not your arms"</li>
                <li>"Hollow body" - For front lever</li>
              </ul>
            </div>
            <div className="cue-card">
              <h3>Leg Work</h3>
              <ul>
                <li>"Hinge from your hips" - Not your spine</li>
                <li>"Tuck your tailbone" - Posterior pelvic tilt</li>
                <li>"Full depth" - Your squat is good</li>
              </ul>
            </div>
            <div className="cue-card">
              <h3>Rotational Core</h3>
              <ul>
                <li>"Control the rotation" - Slow and controlled</li>
                <li>"Anti-rotate" - Resist rotation</li>
                <li>"Core engaged" - Deep core</li>
                <li>"Breathe" - Don't hold your breath</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ref-section">
          <h2>🏋️ Equipment Checklist</h2>
          <div className="equipment-grid">
            <div className="equipment-card essential">
              <h3>Essential</h3>
              <ul>
                <li>Pull-up bar</li>
                <li>Parallel bars or dip station</li>
                <li>Kettlebells (16kg, 24kg)</li>
                <li>Medicine ball (8-12kg)</li>
                <li>Resistance bands</li>
                <li>Foam roller</li>
                <li>Bench or box</li>
              </ul>
            </div>
            <div className="equipment-card optional">
              <h3>Optional</h3>
              <ul>
                <li>Barbell and plates</li>
                <li>Dumbbells</li>
                <li>Cable machine</li>
                <li>Landmine setup</li>
                <li>Rings</li>
                <li>Wall space</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ref-section">
          <h2>⚠️ Mobility Issue Adjustments</h2>
          <div className="adjustment-cards">
            <div className="adjustment-card">
              <h3>Hip Flexors (5/5)</h3>
              <div className="do-dont">
                <div className="do">
                  <strong>✅ DO:</strong>
                  <ul>
                    <li>Always include couch stretch in warm-up</li>
                    <li>Focus on RDLs and hinging patterns</li>
                    <li>Include rotational work</li>
                  </ul>
                </div>
                <div className="dont">
                  <strong>⚠️ AVOID:</strong>
                  <ul>
                    <li>Excessive hip flexor loading</li>
                    <li>Anterior pelvic tilt during squats</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="adjustment-card">
              <h3>Thoracic Spine (5/5)</h3>
              <div className="do-dont">
                <div className="do">
                  <strong>✅ DO:</strong>
                  <ul>
                    <li>Handstand work improves mobility</li>
                    <li>Rotational core work forces rotation</li>
                    <li>Turkish get-ups require extension</li>
                  </ul>
                </div>
                <div className="dont">
                  <strong>⚠️ AVOID:</strong>
                  <ul>
                    <li>Heavy overhead pressing (weeks 1-6)</li>
                    <li>Rib flare during push-ups</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="adjustment-card">
              <h3>Lats/Pec Minor (4/5)</h3>
              <div className="do-dont">
                <div className="do">
                  <strong>✅ DO:</strong>
                  <ul>
                    <li>Full range pull-ups stretch lats</li>
                    <li>Front lever work builds strength</li>
                    <li>Face pulls every pull day</li>
                  </ul>
                </div>
                <div className="dont">
                  <strong>⚠️ WATCH:</strong>
                  <ul>
                    <li>Don't let shoulders round forward</li>
                    <li>Ensure proper hollow body</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ref-section">
          <h2>💡 Smart Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Before Strength Training</h3>
              <p>Do 5 minutes of corrective warm-up (thoracic extensions, wall slides)</p>
            </div>
            <div className="tip-card">
              <h3>After Strength Training</h3>
              <p>Do 5 minutes of corrective cool-down (stretches relevant to what you trained)</p>
            </div>
            <div className="tip-card">
              <h3>On Running Days</h3>
              <p>Do corrective work after running (hip flexors will be tight)</p>
            </div>
            <div className="tip-card">
              <h3>On Boxing Days</h3>
              <p>Do corrective work before boxing (opens shoulders, thoracic spine)</p>
            </div>
          </div>
        </section>

        <section className="ref-section">
          <h2>📝 Priority Order</h2>
          <div className="priority-list">
            <div className="priority-item">1. <strong>NEVER skip:</strong> Corrective work (4-5x/week)</div>
            <div className="priority-item">2. <strong>Rarely skip:</strong> Boxing (skill maintenance)</div>
            <div className="priority-item">3. <strong>Can skip:</strong> One strength day if needed</div>
            <div className="priority-item">4. <strong>Can skip:</strong> One running day if needed</div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default QuickReference

