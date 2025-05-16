import OMImg from './assets/images/image-omelette.jpeg'
import './App.css'
import Icon from './assets/react.svg'

function Heading(props) {
  return (
    <div>
      <h2>{props.text}</h2>
    
    </div>
    
  )
}

function ImageContainer (props) {
  return (
    <div className='pic'>
        <img src={props.src} />
      </div>
  )
}

function ListItem (props) {
  return (
    <li>
       <p><span className="bold">{props.Topic}</span>{props.Explanation}</p>
   </li>
  )
}


function NutritionItem (props) {
  return (
     <li>
              <p>{props.label} </p>
              <p className="value">{props.value}</p>
            </li>
  )
}
 

function App() {

  return (
    <main>
      <ImageContainer src={OMImg} />
    
        <h1>Simple Omelette Recipe</h1>
        <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>

        <div className='prep'>
          <h3>Preparation time </h3>
          <ul>
        
           <ListItem
            Topic="Total:"
            Explanation=" Approximately 10 minutes"
           />

            <ListItem
            Topic="Preparation:"
            Explanation=" 5 minutes "
           />

            <ListItem
            Topic="Cooking:"
            Explanation="5 minutes"
           />
          </ul>
        </div>

        <div className='wrapper'>
          <Heading text = "Ingredients"/>
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

        <div  className='wrapper'>
          <Heading text ="Preparations" />
          <ol>
            <ListItem
            Topic="Beat the eggs:"
            Explanation="In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
            You can add a tablespoon of water or milk for a fluffier texture."
            />

            <ListItem
            Topic="Heat the pan:"
            Explanation="Place a non-stick frying pan over medium heat and add butter or oil."
            />

             <ListItem
            Topic="Add fillings (optional):"
            Explanation="When the eggs begin to set at the edges but are still slightly 
            runny in the middle, sprinkle your chosen fillings over one half of the omelette."
            />

             <ListItem
            Topic="Fold and serve: "
            Explanation="As the omelette continues to cook, carefully lift one edge and fold it over the fillings.
             Let it cook for another minute, then slide it onto a plate.</p>
 </li>"
            />

             <ListItem
            Topic="Enjoy:"
            Explanation="Serve hot, with additional salt and pepper if needed"
            />
          </ol>
        </div>

        <div className='nutrition'>
          <Heading text ="Nutruition" />
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <ul>
            <NutritionItem
              label="Calories"
              value="277kcal "
            />

             <NutritionItem
              label="Carbs"
              value="0g "
            />

             <NutritionItem
              label="Protein"
              value="20g "
            />

             <NutritionItem
              label="Fat"
              value="22g"
            />
          
          </ul>
        </div>


    </main>
  )
}

export default App
