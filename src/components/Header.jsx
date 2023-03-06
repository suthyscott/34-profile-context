import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <NavLink to='/'>Auth</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
    </div>
  )
}

export default Header