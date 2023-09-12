import React from 'react'
import Wfood from "../../assets/wfood.png";
import Cleaning from "../../assets/cleaning.png";
import Exercise from "../../assets/exercise.png";
import Med from "../../assets/medication.png";
import Toys from "../../assets/toys.png";
import './well.css'

const well = () => {
  return (
    <div className="well">
      <div className="upper_well">
        <h1>Why wellbeing?</h1>
        <h3>Pet wellbeing is not just a choice; it's a moral imperative. These creatures offer unwavering companionship, 
          emotional solace, and tangible health advantages. Owning a pet instills discipline, responsibility, 
          and fosters social bonds, nurturing empathy and purpose. Pets serve as therapy aids, 
          working partners, and educators, and overlooking their wellbeing is a grave ethical lapse. 
          It's a commitment we owe to these loyal companions and an investment in our own happiness and fulfillment.</h3>
      </div>
      <div className="well_lower">
        <div className="three">
          <div className="wfood">
            <img src={Wfood} className='fi' alt="" />
            <h1>Food</h1>
          </div>
          <div className="cleaning">
            <img src={Cleaning} className='fi' alt="" />
            <h1>Cleaning</h1>
          </div>
          <div className="Exercise">
            <img src={Exercise} className='fi' alt="" />
            <h1>Exercise</h1>
          </div>
        </div>
        <div className="two">
          <div className="Medication">
            <img src={Med} className='fi' alt="" />
            <h1>Medication</h1>
          </div>
          <div className="toys">
            <img src={Toys} className='fi' alt="" />
            <h1>Toys</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default well