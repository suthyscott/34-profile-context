import {createContext, useState,} from 'react'

const ProfileContext = createContext({
    username: '', 
    updateUsername: () => {},
    deleteUsername: () => {}
})

export const ProfileContextProvider = props => {
    const [username, setUsername] = useState('')

    const updateUsername = newUsername => {
        setUsername(newUsername)
    }

    const deleteUsername = () => {
        setUsername('')
    }

    let contextValue = {
        username,
        updateUsername,
        deleteUsername
    }

    return (
        <ProfileContext.Provider value={contextValue}>
            {props.children}
        </ProfileContext.Provider>
    )
}

export default ProfileContext