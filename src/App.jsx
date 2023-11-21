
// import { useEffect, useState } from 'react';
import './App.css'
import Button from './component/Button/Button'
import Card from './component/Card/Card'
import Header from './component/Header/Header'

function App() {

    // const [cards,setCards] = useState([]);
    // const [showAll,setShowAll] = useState(true);

    // useEffect(()=>{
    //     const loadedData = async() =>{
    //         const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    //         const data = await res.json()
    //         // console.log(data.data.tools);
    //         setCards(data.data.tools)
            
    //     }
    //     loadedData()
    // },[])
   

  return (
    <>
      <Header></Header>
      <Button>Sort By Date</Button>
      <Card></Card>
      {/* <Button>See More</Button> */}
    </>
  )
}

export default App
