
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SingelCard from '../SingelCard/SingelCard';
import Modal from '../Modal/Modal';

const Card = () => {

    // console.log(props);
    const [cards, setCards] = useState([]);
    const [showAll, setShowAll] = useState(true);
    const [unickId,setUnickId] = useState(null)
    const [singelData,setSingelData] = useState({})
    
   

    const handelShowAll = () => {
        setShowAll(false)
    }

    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${unickId}`)
        .then(res => res.json())
        .then(data => setSingelData(data))
    },[unickId])


    useEffect(() => {
        const loadedData = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
            const data = await res.json()
            // console.log(data.data.tools);
            setCards(data.data.tools)

        }
        loadedData()
    }, [])
    // console.log(singelData);




    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1240px] mx-auto mb-5'>
                {

                    cards.slice(0, showAll ? 6 : 12).map(card => <SingelCard
                        {...card}
                        unickId = {setUnickId}
                    ></SingelCard>)
                }
            </div>
            <div className='text-center'>
                <span className='inline-block' onClick={handelShowAll}>
                   {showAll && <Button>See More</Button>}
                </span>
            </div>
            <Modal singelData={singelData}></Modal>
        </>
    );
};

export default Card;