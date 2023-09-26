import { useState } from 'react'
import vehicleLandscape from "./images/technology/image-launch-vehicle-landscape.jpg";
import vehiclePortrait from "./images/technology/image-launch-vehicle-portrait.jpg";
import capsuleLandscape from "./images/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "./images/technology/image-space-capsule-portrait.jpg";
import spaceportLandscape from "./images/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "./images/technology/image-spaceport-portrait.jpg";

const Technology = () => {
  const [checkedLabel, setCheckedLabel] = useState('radio1')


  const navigation = (
    <div className="technology-manual">
    <label htmlFor="radio1" className="manual-btn radio1"
      onClick={() => setCheckedLabel('radio1')}
      style={{
        border: checkedLabel === 'radio1' ? "1px solid #FFFFFF" : "",
        background: checkedLabel === 'radio1' ? "#FFFFFF" : "none",
        color: checkedLabel === 'radio1' ? "#0B0D17" : "white",
      }}
    >1</label>

    <label htmlFor="radio2" className="manual-btn radio2"
      onClick={() => setCheckedLabel('radio2')}
      style={{
        border: checkedLabel === 'radio2' ? "1px solid #FFFFFF" : "",
        background: checkedLabel === 'radio2' ? "#FFFFFF" : "none",
        color: checkedLabel === 'radio2' ? "#0B0D17" : "white",
      }}
    >2</label>

    <label htmlFor="radio3" className="manual-btn radio3"
      onClick={() => setCheckedLabel('radio3')}
      style={{
        border: checkedLabel === 'radio3' ? "1px solid #FFFFFF" : "",
        background: checkedLabel === 'radio3' ? "#FFFFFF" : "none",
        color: checkedLabel === 'radio3' ? "#0B0D17" : "white",
      }}
    >3</label>
  </div>
  )

return (
  <div className="technology">
    <h2><span>03</span>SPACE LAUNCH 101</h2>

    <div className="slides">
      <input type="radio" name="radio-btn" id="radio1" />
      <input type="radio" name="radio-btn" id="radio2" />
      <input type="radio" name="radio-btn" id="radio3" />

      <div className="technology-slide first"
        style={{
          opacity: checkedLabel === 'radio1' ? "1" : "0"
        }}>
        <picture>
          <source srcSet={vehicleLandscape}
            media="(min-width: 14400px)" />
          <source srcSet={vehiclePortrait}
            media="(min-width: 1166px)" />
          <img src={vehicleLandscape} alt="moon" />
        </picture>
        {navigation}
        <div className="technology-slide__text">
        <h3>THE TERMINOLOGY…</h3>
        <h1>LAUNCH VEHICLE</h1>
        <p>A launch vehicle or carrier rocket is a rocket-propelled
          vehicle used to carry a payload from Earth's surface to
          space, usually to Earth orbit or beyond. Our WEB-X carrier
          rocket is the most powerful in operation. Standing 150 metres
          tall, it's quite an awe-inspiring sight on the launch pad!</p>          
        </div>
      </div>

      <div className="technology-slide"
        style={{
          opacity: checkedLabel === 'radio2' ? "1" : "0"
        }}>
        <picture>
          <source srcSet={spaceportLandscape}
            media="(min-width: 14400px)" />
          <source srcSet={spaceportPortrait}
            media="(min-width: 1166px)" />
          <img src={spaceportLandscape} alt="moon" />
        </picture>
        {navigation}
        <div className="technology-slide__text">
        <h3>THE TERMINOLOGY… </h3>
        <h1>SPACEPORT</h1>
        <p>A spaceport or cosmodrome is a site for launching
          (or receiving) spacecraft, by analogy to the seaport
          for ships or airport for aircraft. Based in the famous
          Cape Canaveral, our spaceport is ideally situated to take
          advantage of the Earth’s rotation for launch.</p>
        </div>
      </div>

      <div className="technology-slide"
        style={{
          opacity: checkedLabel === 'radio3' ? "1" : "0"
        }}>
        <picture>
          <source srcSet={capsuleLandscape}
            media="(min-width: 14400px)" />
          <source srcSet={capsulePortrait}
            media="(min-width: 1166px)" />
          <img src={capsuleLandscape} alt="moon" />
        </picture>
        {navigation}
        <div className="technology-slide__text">
        <h3>THE TERMINOLOGY…</h3>
        <h1>SPACE CAPSULE</h1>
        <p>A space capsule is an often-crewed spacecraft
          that uses a blunt-body reentry capsule to reenter
          the Earth's atmosphere without wings. Our capsule is
          where you'll spend your time during the flight. It includes a
          space gym, cinema, and plenty of other activities to keep you entertained.</p>
        </div>
      </div>
    </div>
  </div>
)
}


export default Technology