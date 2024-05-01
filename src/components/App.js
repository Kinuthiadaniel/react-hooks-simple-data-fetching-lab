// create your App component here
import {useState, useEffect} from "react"
function App() {
  const [dog, setDog] = useState(null)
  const [isLoaded, setIsLoaded]= useState(false)
  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
   .then(res => res.json())
   .then(data => {setDog(data.message)})
    setIsLoaded(true)
  },[])
  useEffect(()=>{

  })
  if(!dog) return   <p>Loading...</p>
  return (
    <div className="">
     <img src={dog} alt="A Random Dog" />
    </div>
  );

}

export default App;