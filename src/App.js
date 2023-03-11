import { useEffect, useState } from 'react'
import './App.css'
import Products from './components/Products';

function App() {
  const [meals, setMeals] = useState([]);
  
  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await fetch(
          "https://react-http-58764-default-rtdb.firebaseio.com/meals.json"
        );

        if (!response.ok) {
          throw new Error("Unable to fetch the data");
        }

        const data = await response.json();

        // console.log(data);
         const loadedMeals = [];

         for (const key in data) {
           loadedMeals.push({
             id: key,
             name: data[key].name,
             description: data[key].description,
             price: data[key].price,
             image: data[key].image,
           });
         }

         setMeals(loadedMeals);


       
      } catch (err) {
        console.log(err);
      }
    };
    fetchHandler();
  }, []);

  console.log(meals)

  return (
    <div className="container">
      {meals.map((meal)=>{
            return <Products key={meal.id} meals={meal} />;
      })}

      
    </div>
  )
}

export default App
