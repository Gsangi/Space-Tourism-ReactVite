import { useState } from 'react'
import anousheh from "./images/crew/image-anousheh-ansari.png";
import douglas from "./images/crew/image-douglas-hurley.png";
import mark from "./images/crew/image-mark-shuttleworth.png";
import victor from "./images/crew/image-victor-glover.png";

const Crew = () => {
  const [checkedLabel, setCheckedLabel] = useState('radio1')

  const navigation = (
    <div class="crew-manual">
      <label htmlFor="radio1" className="manual-btn radio1"
        onClick={() => setCheckedLabel('radio1')}
        style={{
          border: checkedLabel === 'radio1' ? "2px solid #FFFFFF" : "2px solid #979797",
          background: checkedLabel === 'radio1' ? "#FFFFFF" : "#979797",
          opacity: checkedLabel === 'radio1' ? "1" : "",
        }}
      ></label>

      <label htmlFor="radio2" className="manual-btn radio2"
        onClick={() => setCheckedLabel('radio2')}
        style={{
          border: checkedLabel === 'radio2' ? "2px solid #FFFFFF" : "2px solid #979797",
          background: checkedLabel === 'radio2' ? "#FFFFFF" : "#979797",
          opacity: checkedLabel === 'radio2' ? "1" : "",
        }}
      ></label>

      <label htmlFor="radio3" className="manual-btn radio3"
        onClick={() => setCheckedLabel('radio3')}
        style={{
          border: checkedLabel === 'radio3' ? "2px solid #FFFFFF" : "2px solid #979797",
          background: checkedLabel === 'radio3' ? "#FFFFFF" : "#979797",
          opacity: checkedLabel === 'radio3' ? "1" : "",
        }}
      ></label>

      <label htmlFor="radio4" className="manual-btn radio4"
        onClick={() => setCheckedLabel('radio4')}
        style={{
          border: checkedLabel === 'radio4' ? "2px solid #FFFFFF" : "2px solid #979797",
          background: checkedLabel === 'radio4' ? "#FFFFFF" : "#979797",
          opacity: checkedLabel === 'radio4' ? "1" : "",
        }}
      ></label>
    </div>
  )

  return (
    <div className="crew">
      <h2><span>02</span>MEET YOUR CREW</h2>

      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />

        <div className="crew-slide first"
          style={{
            opacity: checkedLabel === 'radio1' ? "1" : "0"
          }}>
          <div className="crew-slide__image crew-slide__image--1">
            <img src={douglas} alt="moon" />
            <hr />
          </div>

          <div className="crew-info">
            {navigation}
            <h3>COMMANDER</h3>
            <h1>DOUGLAS HURLEY</h1>
            <p>Douglas Gerald Hurley is an American engineer, former
              Marine Corps pilot and former NASA astronaut. He launched into
              space for the third time as commander of Crew Dragon Demo-2.</p>
          </div>
        </div>

        <div className="crew-slide"
          style={{
            opacity: checkedLabel === 'radio2' ? "1" : "0"
          }}>

          <div className="crew-slide__image crew-slide__image--2">
            <img src={mark} alt="mars" />
            <hr />
          </div>

          <div className="crew-info">
            {navigation}
            <h3>MISSION SPECIALIST </h3>
            <h1>MARK SHUTTLEWORTH</h1>
            <p>Mark Richard Shuttleworth is the founder and CEO of Canonical,
              the company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as a space tourist.</p>
          </div>

        </div>

        <div className="crew-slide"
          style={{
            opacity: checkedLabel === 'radio3' ? "1" : "0"
          }}>

          <div className="crew-slide__image crew-slide__image--3"><
            img src={victor} alt="europa" />
            <hr />
          </div>
          <div className="crew-info">
            {navigation}
            <h3>PILOT</h3>
            <h1>VICTOR GLOVER</h1>
            <p>Pilot on the first operational flight of the SpaceX Crew
              Dragon to the International Space Station. Glover is a
              commander in the U.S. Navy where he pilots an F/A-18.He
              was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
          </div>
        </div>

        <div className="crew-slide"
          style={{
            opacity: checkedLabel === 'radio4' ? "1" : "0"
          }}>

          <div className="crew-slide__image crew-slide__image--4">
            <img src={anousheh} alt="titan" />
            <hr />
          </div>

          <div className="crew-info">
            {navigation}
            <h3>FLIGHT ENGINEER</h3>
            <h1>ANOUSHEH ANSARI</h1>
            <p>Anousheh Ansari is an Iranian American engineer
              and co-founder of Prodea Systems. Ansari was the
              fourth self-funded space tourist, the first
              self-funded woman to fly to the ISS, and the first Iranian in space. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew