import HamburgerMenuTrigger from '../HamburgerMenuTrigger/HamburgerMenuTrigger'
import DotsTrigger from '../DotsTrigger/DotsTrigger'

const Header = () => {
  return (
    <div className='header'>
      <HamburgerMenuTrigger />
      <DotsTrigger />
    </div>
  )
}

export default Header
