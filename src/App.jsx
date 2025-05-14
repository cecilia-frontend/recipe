import OMImg from './assets/images/image-omelette.jpeg'
import './App.css'

function App() {

  return (

    <main>
      <div className='pic'>
        <img src={OMImg} />
      </div>
        <h1>Simple Omelette Recipe</h1>
        <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>

        <div className='prep'>
          <h3>Preparation time </h3>
          <ul>
            <li>
              <p><span className="bold">Total:</span>Approximately 10 minutes</p>
            </li>
            <li>
              <p><span className="bold">Preparation:</span>5 minutes </p>
            </li>
            <li>
              <p><span className="bold">Cooking:</span>5 minutes</p>
            </li>
          </ul>
        </div>

        <div>
          <h2>Ingredients</h2>
          <ul>
            <li>
              <p>2-3 large eggs </p>
            </li>
            <li>
              <p>Salt, to taste</p>
            </li>
            <li>
              <p>Pepper, to taste </p>
            </li>
            <li>
              <p>1 tablespoon of butter or oil </p>
            </li>
           <li>
              <p>Optional fillings: cheese, diced vegetables, cooked meats, herbs</p>
            </li>
          </ul>
        </div>

        <div>
          <h2>Instructions</h2>
          <ol>
            <li>
              <p><span className="bold">Beat the eggs:</span>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture. </p>
            </li>
            <li>
              <p><span className="bold">Heat the pan:</span>Place a non-stick frying pan over medium heat and add butter or oil.</p>
            </li>
            <li>
              <p><span className="bold">Add fillings (optional):</span>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</p>
            </li>
            <li>
              <p><span className="bold">Fold and serve: </span>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</p>
            </li>
            <li>
              <p><span className="bold">Enjoy:</span>Serve hot, with additional salt and pepper if needed.</p>
            </li>
          </ol>
        </div>

        <div>
          <h2>Nutrition </h2>
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <ul>
            <li>
              <p>Calories </p>
              <p className="value"> 277kcal </p>
            </li>
            <li>
              <p>Carbs</p>
              <p className="value">0g </p>
            </li>
            <li>
              <p>Protein</p>
              <p className="value">20g </p>
            </li>
            <li>
              <p>Fat</p>
              <p className="value">22g</p>
            </li>
          </ul>
        </div>


    </main>
  )
}

export default App
