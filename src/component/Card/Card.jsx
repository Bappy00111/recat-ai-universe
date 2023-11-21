
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SingelCard from '../SingelCard/SingelCard';

const Card = () => {

    // console.log(props);
    const [cards, setCards] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const handelShowAll = () =>{
        setShowAll(true)
    }


    useEffect(() => {
        const loadedData = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
            const data = await res.json()
            // console.log(data.data.tools);
            setCards(data.data.tools)

        }
        loadedData()
    }, [])

    


    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1240px] mx-auto mb-5'>
                {

                    cards.slice(0,showAll ? 12 : 6).map(card => <SingelCard
                        {...card}
                    ></SingelCard>)
                }
            </div>
            <p onClick={handelShowAll}>
                <Button>See More</Button>
            </p>

        </>
    );
};

export default Card;