"use Client"

import React from 'react'
import { useContext,useState} from 'react'
import LinkContext from '@/context/LinkContext'

const DevLink = () => {

  const {url,platform,links,setUrl,handleInput} = useContext(LinkContext)

  const [inputValue,setInputValue] = useState("")

 

  return (
    // object from the links array in the link context 
      <>
      {links.map((data)=>(
        <div className="rounded-md p-2 bg-lightGrey w-3/4 mx-auto mb-2">
        <div className='flex justify-between p-2'>
            <h4 className='text-grey font-semibold'>Link</h4>
            <p className='text-grey'>Remove</p>
        </div>
        <form action="">
            <label htmlFor="platform" className='block text-sm p-2 text-grey'>Platform
                <select name="links" id="" className='input-style custom-select-arrow' value={data.platform}>
                    <option value="Github">Github</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Linkedln">Linkedin</option>
                    <option value="Hashnode">Hashnode</option>
                </select>
            </label>

            <label htmlFor="link" className='block text-sm p-2 text-grey'>Link 
              <input type="text" name="link" placeholder='Enter Url' id="" className='input-style' onChange={handleInput} value={data.url}/>
            </label>
        </form>
    </div>
      ))}
    </>
  )
}

export default DevLink