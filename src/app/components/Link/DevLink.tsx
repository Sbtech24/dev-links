"use Client"

import React from 'react'
import { useContext,useState} from 'react'
import LinkContext from '@/app/context/LinkContext'

const DevLink = () => {

  const {url,platform,links,setUrl,handleInput} = useContext(LinkContext)

  const [inputValue,setInputValue] = useState("")

 

  return (
    // object from the links array in the link context 
      <>
      {links.map((data)=>(
        <div className="bg-lightGrey w-3/4 mx-auto pb-3">
        <div className='flex justify-between p-2'>
            <h4 className='text-grey font-semibold'>Link</h4>
            <p className='text-grey'>Remove</p>
        </div>
        <form action="">
            <label htmlFor="platform" className='block text-sm p-2 text-grey'>Platform
                <select name="links" id="" className='w-full p-2 border rounded-md my-1' value={data.platform}>
                    <option value="Github">Github</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Linkedln">Linkedin</option>
                    <option value="Hashnode">Hashnode</option>
                </select>
            </label>

            <label htmlFor="link" className='block text-sm p-2 text-grey'>Link 
              <input type="text" name="link" placeholder='Enter Url' id="" className='w-full p-2 border rounded-md' onChange={handleInput} value={data.url}/>
            </label>
        </form>
    </div>
      ))}

      
    </>

  )
}

export default DevLink