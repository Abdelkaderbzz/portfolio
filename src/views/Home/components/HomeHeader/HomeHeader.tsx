import MainHeaderPhoto from './../../../../assets/images/homephot.png'
import { HiArrowRight } from 'react-icons/hi';
const HomeHeader = () => {
  return (
    <div className='home-header'>
      <div className='home__header-description'>
        <h2>
        <strong> I'm Rayan Aldrdard </strong>
          <span>Front-end </span>Developer
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ad
          molestiae porro est reprehenderit, modi aspernatur necessitatibus
          ratione quasi iure cupiditate!
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
