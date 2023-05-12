import NotFoundPhoto from './../../assets/images/notfound.png'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import { useNavigate } from 'react-router-dom';


const NotFound = () =>
{
  const navigate = useNavigate()
  const handleClick = ():void =>
  {
    navigate('/')
  }
  return (
    <div className="notfound">
      <img src={NotFoundPhoto} className="notfound__image" alt="not-found" />
      <h1 className="notfound__message--primary">
        SORRY,PAGE NOT FOUND!
      </h1>
      <p className="notfound__message--description">
        Don't Panic Just Click The Big Button To Return Home
      </p>
      <ButtonPrimary onClick={handleClick} value="Go Back Home" />
    </div>
  )
}

export default NotFound