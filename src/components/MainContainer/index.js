import {Component} from 'react'

import {BsPerson} from 'react-icons/bs'

import {MdCall} from 'react-icons/md'
import {AiOutlineArrowRight} from 'react-icons/ai'

import {CiLocationOn} from 'react-icons/ci'

import {BiRupee} from 'react-icons/bi'

import BelowCardItems from '../BelowCardItems'

import CardItems from '../CardItems'

import Header from '../Header'

import './index.css'

const belowCard = [
  {
    id: 1,
    heading: 'NABL Accredited Labs',
    para: 'Get accurate and safe results from our NABL-certified lab partners.',
    url:
      'https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695144936/Rectangle_80_smrfjm.png',
  },
  {
    id: 2,
    heading: 'Value experience',
    para:
      'Experience seamless care without the hassle of waiting in long lines for an appointment. Book with us for a healthier lifestyle.',
    url:
      'https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695186198/Ellipse_14_hq8vey.png',
  },
  {
    id: 3,
    heading: 'Timely collections',
    para:
      'We collect samples timely to prevent treatment delays and ensure your continued well-being.',
    url:
      'https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695186297/Ellipse_13_rcxkf2.png',
  },
  {
    id: 4,
    heading: 'Transparency',
    para:
      ' Enjoy hassle free medical assistance with our transparent approach. We prioritize transparency for your smooth medical journey.',
    url:
      'https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695186425/Ellipse_15_iq4hsd.png',
  },
]

const detailsList = [
  {
    text: 'Basic Full Body Checkup',
    rating: '4.3',
    reviews: '75',
    testsCount: '53',
    mrp: '10,000',
    amount: '8,450',
  },
  {
    text: 'Advance Full Body Checkup',
    rating: '4.7',
    reviews: '100',
    testsCount: '70',
    mrp: '12,000',
    amount: '10,000',
  },
  {
    text: 'Liver Function Test (LFT)',
    rating: '4.3',
    reviews: '43',
    testsCount: '89',
    mrp: '13,299',
    amount: '11,299',
  },
]

class MainContainer extends Component {
  state = {name: '', number: '', location: ''}

  submitForm = event => {
    event.preventDefault()
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeLocation = event => {
    this.setState({location: event.target.value})
  }

  changeNumber = event => {
    this.setState({number: event.target.value})
  }

  render() {
    const {name, number, location} = this.state
    return (
      <div className="main-container">
        <Header />
        <div className="form-and-lab-test-container">
          <div className="first-container">
            <div className="mobile-heading-container">
              <h1 className="second-heading">
                Best in class <span className="part">lab tests!</span>
              </h1>
              <div className="flat-1 mobile-flat1">
                <p className="para">Get a Full Body Checkup Now at</p>
              </div>
              <div className="mobile-flat2">
                <div>
                  <BiRupee />
                  <del>5,999</del>
                </div>
                <div>
                  <p>
                    <BiRupee /> 999
                  </p>
                </div>
                <p>70% OFf</p>
              </div>
            </div>
            <form className="form-container" onSubmit={this.submitForm}>
              <h1 className="form-heading">
                Fill in the details to get the call!
              </h1>
              <div className="name-container">
                <BsPerson className="person" />
                <input
                  type="text"
                  placeholder="Full name"
                  className="name"
                  value={name}
                  onChange={this.changeName}
                />
              </div>
              <div className="name-container">
                <MdCall className="person" />
                <input
                  value={number}
                  type="text"
                  placeholder="Phone number"
                  className="name"
                  onChange={this.changeNumber}
                />
              </div>
              <div className="name-container">
                <CiLocationOn className="person" />
                <input
                  value={location}
                  type="text"
                  placeholder="Location"
                  className="name"
                  onChange={this.changeLocation}
                />
              </div>
              <div className="checkbox-container">
                <input type="checkbox" id="checkbox" className="check" />
                <label className="label" htmlFor="checkbox">
                  By continuing,you agree to our T&C and privacy policy{' '}
                </label>
              </div>
              <button type="submit" className="proceed-button">
                Proceed
              </button>
            </form>
            <div className="flat-container">
              <div className="flat-1">
                <p className="para">
                  Get a Full Body Checkup{' '}
                  <span className="bold-name">Now </span> at {'  '}
                  <BiRupee className="rupee1" />
                  {'  '}
                  <del className="del-text">5999</del>
                  {'  '}
                  <BiRupee className="rupee1" />
                  <span className="bold-name">999</span>
                </p>
              </div>
              <div className="flat-2">
                <p className="off">70% OFF</p>
              </div>
            </div>
          </div>
          <div className="second-container">
            <h1 className="second-heading">
              Best in class <span className="part">lab tests!</span>
            </h1>
            <div className="component">
              <div className="first first11">
                <img
                  className="ellipse-1"
                  src="https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695142469/Ellipse_1_i9h7q7.png"
                  alt="ellipse-1"
                />
                <p className="para1">Timely sample collection</p>
              </div>
              <div className="first first12">
                <img
                  className="ellipse-1"
                  src="https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695143631/Ellipse_2_vg5drh.png"
                  alt="ellipse-2"
                />
                <p className="para1">Complementary report consultation</p>
              </div>
              <div className="first first13">
                <img
                  className="ellipse-1"
                  src="https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695143710/Ellipse_3_l8rmlk.png"
                  alt="ellipse-3"
                />
                <p className="para1">Accurate timely reports</p>
              </div>
            </div>
          </div>
        </div>
        <div className="below-container">
          <div className="below-first">
            <img
              className="img"
              src="https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695144936/Rectangle_80_smrfjm.png"
              alt="nabl"
            />
            <p className="nabl">NABL Accredited Labs</p>
          </div>
          <div className="below-first">
            <img
              className="img"
              src="https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695145257/Rectangle_81_y0wo6o.png"
              alt="free"
            />
            <p className="nabl">Free sample collection</p>
          </div>
        </div>
        <div className="third-container">
          <p className="third-heading">
            We keep <span className="third-span"> expanding!</span>
          </p>
          <div className="third-second-container">
            <button type="button" className="button1">
              5+
              <br />
              Labs
            </button>
            <button type="button" className="button1">
              100+
              <br />
              Collection center
            </button>
            <button type="button" className="button1">
              1000+
              <br />
              Monthly tests
            </button>
            <button type="button" className="button1">
              2200
              <br />
              test menu
            </button>
            <button type="button" className="button1">
              5+
              <br />
              Cities present in
            </button>
          </div>
        </div>
        <div className="top-packages-container">
          <h1 className="top-package-heading">
            <span className="top">Top</span> packages
          </h1>
          <p className="top-para">
            Explore our wide range of tests! We ensure that you don’t miss out
            on any chance to keep yourself healthy.
          </p>
          <div className="reddy">
            <ul className="card-items-container">
              {detailsList.map(each => (
                <CardItems each={each} key={each.text} />
              ))}
            </ul>
            <div className="arrow-container">
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
        <div className="below-entire-container">
          <div className="choose-container">
            <div className="choose-heading-container">
              <h1 className="top-package-heading">
                why
                <span className="top"> choose</span> us?
              </h1>
              <p className="top-para">
                We want you and your heart to be healthy so you can live a happy
                life!
              </p>
            </div>
            <ul className="below-cards-container">
              {belowCard.map(eachItem => (
                <BelowCardItems eachItem={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
          <img
            src="https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695188514/expressive-young-woman-posing-studio-removebg-preview-transformed_1_xvc29y.png"
            alt="subbu"
            className="doctor-img"
          />
        </div>
        <div className="last-container-block">
          <div className="last-first-container">
            <div className="last-first-container-first">
              <img
                src="https://res.cloudinary.com/dxmnrzmsx/image/upload/v1695191024/NIL_logo_Transparent_1_1_1_lrkws2.png"
                alt="below-logo"
                className="below-logo"
              />
              <p className="below-container-last-para">
                Book doctor appointments online and get your ailments treated in
                no time with our expert medical support systems. Get rid of all
                your medical problem with our expert panel of doctors who guide
                you towards a healthier life.
              </p>
              <div className="phone-container">
                <p className="number">91</p>
                <hr className="hr" />
                <input type="text" className="phone-number" />
                <div className="call">
                  <MdCall className="phone-symbol" />
                </div>
              </div>
            </div>
            <div className="last-first-container-second">
              <div className="black-first-container">
                <h1>Services</h1>
                <p>Appointments</p>
                <p>Lab tests</p>
                <p>A-Z medicine</p>
                <p>Doctor support</p>
              </div>
              <div className="black-first-container">
                <h1>Legal</h1>
                <p>General info</p>
                <p>Privacy policy</p>
                <p>Terms of services</p>
                <p>Consultation</p>
                <p>How it works</p>
              </div>
              <div className="black-first-container">
                <h1>Talk to us</h1>
                <p>support@notinline.com</p>
                <p>+91 12345 67899</p>
                <p>A-Z medicine</p>
                <p>+91 97642 09752</p>
              </div>
            </div>
          </div>
          <hr className="line" />
          <div className="final-container">
            <div className="c">C</div>
            <p>2021-2023 All Rights Reserved</p>
          </div>
        </div>
      </div>
    )
  }
}
export default MainContainer
