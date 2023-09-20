import './index.css'

import {IoMdArrowDropdown} from 'react-icons/io'

const BelowCardItems = props => {
  const {eachItem} = props
  const {heading, para, url, id} = eachItem

  const apply = id % 2 === 0 ? 'subbu' : ''
  return (
    <li className={`below-list-container ${apply}`}>
      <div className="below-first-container">
        <h1 className="below-container-card-heading">{heading}</h1>
        <IoMdArrowDropdown className="drop" />
        <img src={url} alt={`${heading}`} className="below-container-img" />
      </div>
      <p className="below-container-card-para">{para}</p>
    </li>
  )
}
export default BelowCardItems
