import {BiRupee} from 'react-icons/bi'

import './index.css'

const CardItems = props => {
  const {each} = props
  const {text, rating, reviews, testsCount, mrp, amount} = each
  return (
    <li className="list">
      <h1 className="card-heading">{text}</h1>
      <div className="rating-container">
        <p className="card-rating">{rating}</p>
        <img
          className="star"
          src="https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695180535/grade_jkjyle.png"
          alt="star"
        />
        <p className="card-reviews">{`(${reviews} Reviews)`}</p>
      </div>
      <p className="card-tests">Number of tests-{testsCount}</p>
      <div className="money-container">
        <p className="mrp">
          MRP:
          <del>
            <BiRupee className="symbol" />
            {mrp}
          </del>
        </p>
        <p className="amount">
          <BiRupee className="symbol" />
          {amount}
        </p>
      </div>
      <button type="button" className="book-button">
        Book now
      </button>
    </li>
  )
}
export default CardItems
