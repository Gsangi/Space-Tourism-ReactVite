import { useState } from 'react'
import mars from "../../images/destination/image-mars.png";
import europa from "../../images/destination/image-europa.png";
import moon from "../../images/destination/image-moon.png";
import titan from "../../images/destination/image-titan.png";

const Destination = () => {
  const [checkedLabel, setCheckedLabel] = useState('radio1')


  const navigation = (
    <div className="destination-manual">
      <label htmlFor="radio1" className="manual-btn radio1"
        onClick={() => setCheckedLabel('radio1')}
        style={{
          color: checkedLabel === 'radio1' ? "#FFFFFF" : "#D0D6F9",
          borderBottom: checkedLabel === 'radio1' ? "3px solid white" : "",
        }}
      >MOON</label>

      <label htmlFor="radio2" className="manual-btn radio2"
        onClick={() => setCheckedLabel('radio2')}
        style={{
          color: checkedLabel === 'radio2' ? "#FFFFFF" : "#D0D6F9",
          borderBottom: checkedLabel === 'radio2' ? "3px solid white" : "",
        }}
      >MARS</label>

      <label htmlFor="radio3" className="manual-btn radio3"
        onClick={() => setCheckedLabel('radio3')}
        style={{
          color: checkedLabel === 'radio3' ? "#FFFFFF" : "#D0D6F9",
          borderBottom: checkedLabel === 'radio3' ? "3px solid white" : "",
        }}
      >EUROPA</label>

      <label htmlFor="radio4" className="manual-btn radio4"
        onClick={() => setCheckedLabel('radio4')}
        style={{
          color: checkedLabel === 'radio4' ? "#FFFFFF" : "#D0D6F9",
          borderBottom: checkedLabel === 'radio4' ? "3px solid white" : "",
        }}
      >TITAN</label>
    </div>
  )

  return (
    <div className="destination">
      <h2><span>01</span>PICK YOUR DESTINATION</h2>

      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />

        <div className="destination-slide first"
          style={{
            opacity: checkedLabel === 'radio1' ? "1" : "0"
          }}>
          <img src={moon} alt="moon" />

          <div className="destination-slide__info">
          {navigation}
          <h1>MOON</h1>
          <p>See our planet as you’ve never seen it before.
            A perfect relaxing trip away to help regain perspective
            and come back refreshed. While you’re there, take in
            some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
          <hr />
          <div className="destination-slide__stats">
            <div>
              <h2>AVG. DISTANCE</h2>
              <p id="stats">384,400 KM</p></div>
            <div>
              <h2>EST. TRAVEL TIME</h2>
              <p id="stats">3 DAYS</p></div>
          </div>            
          </div>



        </div>

        <div className="destination-slide"
          style={{
            opacity: checkedLabel === 'radio2' ? "1" : "0"
          }}>
          <img src={mars} alt="mars" />

          <div className="destination-slide__info">
          {navigation}
          <h1>MARS</h1>
          <p>Don’t forget to pack your hiking boots. You’ll need them
            to tackle Olympus Mons, the tallest planetary mountain in
            our solar system. It’s two and a half times the size of Everest!</p>
          <hr />
          <div className="destination-slide__stats">
            <div>
              <h2>AVG. DISTANCE</h2>
              <p id="stats">225 MIL. KM</p></div>
            <div>
              <h2>EST. TRAVEL TIME</h2>
              <p id="stats">9 MONTHS</p></div>
          </div>
          </div>
        </div>

        <div className="destination-slide"
          style={{
            opacity: checkedLabel === 'radio3' ? "1" : "0"
          }}>
          <img src={europa} alt="europa" />

          <div className="destination-slide__info">
          {navigation}
          <h1>EUROPA</h1>
          <p>The smallest of the four Galilean moons orbiting Jupiter,
            Europa is a winter lover’s dream. With an icy surface, it’s
            perfect for a bit of ice skating, curling, hockey, or simple
            relaxation in your snug wintery cabin.</p>
          <hr />
          <div className="destination-slide__stats">
            <div>
              <h2>AVG. DISTANCE</h2>
              <p id="stats">628 MIL. KM</p></div>
            <div>
              <h2>EST. TRAVEL TIME</h2>
              <p id="stats">3 YEARS</p></div>
          </div>
          </div>
        </div>

        <div className="destination-slide"
          style={{
            opacity: checkedLabel === 'radio4' ? "1" : "0"
          }}>
          <img src={titan} alt="titan" />

          <div className="destination-slide__info">
          {navigation}
          <h1>TITAN</h1>
          <p>The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.</p>
          <hr />
            <div className="destination-slide__stats">
            <div>
              <h2>AVG. DISTANCE</h2>
              <p id="stats">1.6 BIL. KM</p></div>
            <div>
              <h2>EST. TRAVEL TIME</h2>
              <p id="stats">7 YEARS</p></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination