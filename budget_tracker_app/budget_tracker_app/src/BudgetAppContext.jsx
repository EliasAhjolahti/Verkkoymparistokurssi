import React, { createContext, useContext, useState } from "react";

const BudgetAppContext = createContext();

export function BudgetAppProvider({ children }){
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <BudgetAppContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </BudgetAppContext.Provider>
      );
}

export const useTheme = () => useContext(BudgetAppContext)