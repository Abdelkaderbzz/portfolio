import { TiTickOutline } from "react-icons/ti";
const ExtraSkills = () => {
  return (
    <div className='extra-skills'>
      <h2>Extra Skills</h2>
      <div data-testid='skill-item'>
        <TiTickOutline data-testid='skill-icon' className='skills-icon' />
        <span data-testid='skill-name'>Tailwindcss,scss</span>
      </div>
      <div data-testid='skill-item'>
        <TiTickOutline data-testid='skill-icon' className='skills-icon' />
        <span data-testid='skill-name'>GIT Knowledge</span>
      </div>
      <div data-testid='skill-item'>
        <TiTickOutline data-testid='skill-icon' className='skills-icon' />
        <span data-testid='skill-name'>Problem solving Python</span>
      </div>
      <div data-testid='skill-item'>
        <TiTickOutline data-testid='skill-icon' className='skills-icon' />
        <span data-testid='skill-name'>MongoDB,Expressjs</span>
      </div>
    </div>
  );
};

export default ExtraSkills;
