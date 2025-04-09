import {Children, createContext, useState} from 'react'


export const HobbyTrackerContext = createContext({
    hobbies: [],
    addHobby: () => {},
    deleteHobbies: () => {}
});

export const HobbyTrackerProvider = ({ children }) => {
    const [hobbies, setHobbies] = useState([]);

    const addHobby = async (newHobby) => {

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (Math.random() < 0.2){
            return {success: false, error: "Saving failed"};
        }

        setHobbies((prev) => [...prev, newHobby]);
        return {success: true};
    }

    const deleteHobbies = () => {
        setHobbies([]);
    }

    return(
        <HobbyTrackerContext.Provider value={{hobbies, addHobby, deleteHobbies}}>
            {children}
        </HobbyTrackerContext.Provider>

    );
    
}