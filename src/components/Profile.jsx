import { useContext} from 'react'
import ProfileContext from '../store/profileContext'

const Profile = () => {
  const profile = useContext(ProfileContext)
  return (
    <div>
      <p>Username: {profile.username}</p>
    </div>
  )
}

export default Profile