"use client"

import { createContext, useState } from 'react'

// interface Links {
//  link:string[]
// }


type AppContextType = {
    links:string [] | null;
    
  };

const LinkContext = createContext<AppContextType | undefined>(undefined)

type AppProviderProps = {
    children: React.ReactNode;
  };

const LinkProvider = ({children}:AppProviderProps)=>{
  // object containing - select value,input value and will also contain the ad link function 


   const [links,setLinks] = useState<string[]|null>(null)

  //  const addLink = ()=>{

  //  }

    return(
        <LinkContext.Provider value={{links}}>
        {children}
        </LinkContext.Provider>
    )
}



export default LinkContext