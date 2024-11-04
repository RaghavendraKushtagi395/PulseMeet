import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <img src={assets.logo} alt='' />
      <ul>
        < NavLink>
            <li>HOME</li>
            <hr/>
        </NavLink>

        < NavLink>
            <li>ALL DOCTORS</li>
            <hr/>
        </NavLink>

        < NavLink>
            <li>ABOUT</li>
            <hr/>
        </NavLink>

        < NavLink>
            <li>CONTACT</li>
            <hr/>
        </NavLink>
      </ul>
      <div>
        <button>Create account</button>
      </div>
    </div>
  )
}
