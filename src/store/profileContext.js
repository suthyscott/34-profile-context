import {createContext, useState,} from 'react'

const ProfileContext = createContext({
    username: '', 
    updateUsername: () => {},
    deleteUsername: () => {}
})

const getLocalData = () => {
    const storedUsername = localStorage.getItem('username')

    return storedUsername
}

export const ProfileContextProvider = props => {
    const storedUsername = getLocalData()
    let initialUsername
    if(storedUsername){
       initialUsername = storedUsername
    }

    const [username, setUsername] = useState(initialUsername)


    const updateUsername = newUsername => {
        setUsername(newUsername)

        localStorage.setItem('username', newUsername)
    }

    const deleteUsername = () => {
        setUsername('')
        localStorage.removeItem('username')
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