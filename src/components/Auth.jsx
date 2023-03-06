import {useState, useContext} from 'react'
import ProfileContext from '../store/profileContext'

const Auth = () => {
  const profile = useContext(ProfileContext)
  const [username, setUsername] = useState('')

  console.log(profile)
  const onSubmitHandler = (e) => {
    e.preventDefault()
    profile.updateUsername(username)
  }

  return (
    <div>
      <p>{username}</p>
      <form onSubmit={e => onSubmitHandler(e)}>
        <input placeholder='Enter your username here' onChange={e => setUsername(e.target.value)}/>
        <button> Submit</button>
      </form>
    </div>
  )
}

export default Auth