import React from 'react'
import Link from 'next/link'

const Register = () => {
  return (
    <div>
        <header>
            <img src="" alt="" />
            <h1>devLinks</h1>
        </header>

        <div>
            <h3>Create account</h3>
            <p>Let's get you started sharing your links!</p>

            <form action="">
                <label htmlFor="">Email address
                <input type="email" name="Email address" id="" placeholder='e.g.alex@email.com'/> </label>

                <label htmlFor="password"> Create Password 
                    <input type="password" name="Password" id="" placeholder='At Least .8 characters' />
                </label>

                <label htmlFor="password"> Confirm Password 
                    <input type="password" name="Password" id="" placeholder='At Least .8 characters' />
                </label>
                
                <span>Password must contain at least 8 characters</span>
                <button>Create new account</button>
            </form>

            <div>
                <p>Already have an account</p>
                <Link href="/register">Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Register