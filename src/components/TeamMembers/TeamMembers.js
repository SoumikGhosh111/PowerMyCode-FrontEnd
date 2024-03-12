import React from 'react';
import "./TeamMembers.css"
import MarqueeLeftToRight from '../../common-components/MarqueeComp/MarqueeLeftToRight';

function TeamMembers() {
  return (
    <div className='team-members-section-wrapper'>
        {/* <div className='values-culture'>
          <span className='green-dot'><span className='beating'></span></span>
          <span className='values-culture-text'>Our Team Members</span>
          <span className='green-dot'><span className='beating'></span></span>
        </div> */}
        <MarqueeLeftToRight text={"Team Members"} />
      <div className='team-members'>
        <div className='team-members-lsit'>
          <div className='team-member-item' data-item="CEO & Founder">
          </div>
          <div className='member-name'>Arun Kuman</div>
        </div>

        <div className='team-members-lsit'>
          <div className='team-member-item' data-item="Marketing Lead">
          </div>
          <div className='member-name'>Barry</div>
        </div>

        <div className='team-members-lsit'>
          <div className='team-member-item' data-item="Senior Frontend Developer">
          </div>
          <div className='member-name'>Somnath name</div>
        </div>

        <div className='team-members-lsit'>
          <div className='team-member-item' data-item="Senior Backend Developer">
          </div>
          <div className='member-name'>Chanchal name</div>
        </div>

        <div className='team-members-lsit'>
          <div className='team-member-item' data-item="Flutter Developer">
          </div>
          <div className='member-name'>Subhankar Ghosh</div>
        </div>

        <div className='team-members-lsit'>
          <div className='team-member-item' data-item="New Intern">
          </div>
          <div className='member-name'>Soumik Ghosh</div>
        </div>
      </div>
      <div className='gradient-blur-background-orange-purple-TeamMembers'></div>
    </div>
  )
}

export default TeamMembers