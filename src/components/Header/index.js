// Write your code here
import './index.css'

import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        className="logo-image"
        src="https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695111593/NIL_logo_Transparent_1_1_otl6xn.png"
        alt="logo"
      />
      <h1 className="logo-heading">
        Not<span className="in">In</span>Line
      </h1>
    </div>
    <nav className="options-container">
      <p className="home">Home</p>
      <p className="home">Health conditions</p>
      <p className="lab-tests home">Lab tests</p>
      <p className="home">Medicines</p>
    </nav>
    <div className="last-container">
      <div className="buttons-container">
        <button type="button" className="button">
          For patients
        </button>
        <button type="button" className="button">
          For hospitals
        </button>
      </div>
      <div className="playstore-container">
        <img
          alt="playstore-logo"
          src="https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695128763/Rectangle_48_xrbe4q.png"
          className="palystore-image"
        />
        <p className="play-store">Play store</p>
      </div>
    </div>
    <div className="navbar-container">
      <GiHamburgerMenu />
    </div>
  </div>
)

export default Header
