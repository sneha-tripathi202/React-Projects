import React, { createContext, useState } from 'react'


export const themeContext=createContext()

const Context = (props) => {
    const [theme, settheme] = useState('light')
  return (
    <div>
     <themeContext.Provider value={[theme,settheme]}> {props.children}</themeContext.Provider>
      
    </div>
  )
}

export default Context
