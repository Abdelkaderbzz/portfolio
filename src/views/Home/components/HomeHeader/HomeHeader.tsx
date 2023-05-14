import MainHeaderPhoto from './../../../../assets/images/homephot.png'
import { HiArrowRight } from 'react-icons/hi';
const HomeHeader = () => {
  return (
    <div className='home-header'>
      <div className='home__header-description'>
        <h2>
          <strong> I'm Abdelakder</strong><br />
          <span>Full-stack </span>Developer
        </h2>
        <p>
          "Hi, I'm Abdelkader, a junior full stack developer with a passion for
          building responsive and dynamic web applications.I am always
          looking for new challenges and opportunities to grow my skills and
          knowledge."
        </p>
        <div className='hire-me-button'>
          <p>
            HIRE ME
            <HiArrowRight />
          </p>
        </div>
      </div>
      <img src={MainHeaderPhoto} alt='' />
    </div>
  )
}

export default HomeHeader
