
import {TiTickOutline} from 'react-icons/ti'
const ExtraSkills = () => {
  return (
    <div className='extra-skills'>
      <h2>Extra Skills</h2>
      <div>
        <TiTickOutline  className="skills-icon" />
        <span>Tailwindcss,scss</span>
      </div>
      <div>
        <TiTickOutline className="skills-icon" />
        <span>GIT Knowledge</span>
      </div>
      <div>
        <TiTickOutline className="skills-icon" />
        <span>Problem solving Python</span>
      </div>
      <div>
        <TiTickOutline className="skills-icon" />
        <span>MongoDB,Expressjs</span>
      </div>
    </div>
  )
}

export default ExtraSkills