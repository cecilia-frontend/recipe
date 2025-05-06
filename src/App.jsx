import OMImg from './assets/images/image-omelette.jpeg'
import './App.css'

function App() {

  return (
    <div>

    <div>
      <div className='img-container'>
        <img src={OMImg} />
      </div>
    </div>

    <h1>Simple Omelette Recipe</h1>
    <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>

    <h3>Preparation time</h3>
    <p>Total: Approximately 10 minutes</p> 
    <p>Preparation: 5 minutes </p>
    <p>ooking: 5 minutes </p>


    <h3>Ingredients</h3>
    <p>2-3 large eggs</p> 
    <p>Salt, to taste</p>
    <p>Pepper, to taste</p>
    <p>1 tablespoon of butter or oil</p>
   <p>Optional fillings: cheese, diced vegetables, cooked meats, herbs</p>





    </div>
  )
}

export default App
