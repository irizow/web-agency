import { useState, createContext } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('ca');

    const value = {
        language, 
        setLanguage
    }
    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}