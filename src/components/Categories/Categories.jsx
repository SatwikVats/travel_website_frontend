import axios from "axios";
import { useEffect, useState } from "react";
import './Categories.css';


export const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [numberOfCategoryToShow, setNumberOfCategoryToShow] = useState(0);
    
    const handleShowMoreRight = () => {
        setNumberOfCategoryToShow(prev => prev+10);
    };

    const handleShowMoreLeft = () => {
        setNumberOfCategoryToShow(prev => prev-10);
    };

    useEffect(()=>{
        (async()=>{
            try{
                const {data} = await axios.get("https://dull-blue-reindeer-vest.cyclic.app/api/category");
                const categoriesToShow = data.slice(
                    numberOfCategoryToShow+10 > data.length? data.length-10 : numberOfCategoryToShow, 
                    numberOfCategoryToShow > data.length? data.length : numberOfCategoryToShow+10);
                setCategories(categoriesToShow);

            }
            catch(err){
                console.log(err);
            }
        }
        )();
    }, [numberOfCategoryToShow]);


    return(
    <section className="categories d-flex align-centre gap-large cursor-pointer">
        {numberOfCategoryToShow>=10 && (
                <button onClick={handleShowMoreLeft} className="button btn-category btn-left fixed cursor-pointer">
                    <span class="material-icons-outlined">chevron_left</span>
                </button>
            )
        }
        {
            categories && categories.map(({_id, category}) => <span key={_id}>{category}</span>)
        }
        {numberOfCategoryToShow<categories.length && (
                <button onClick={handleShowMoreRight} className="button btn-category btn-right fixed cursor-pointer">
                    <span class="material-icons-outlined">chevron_right</span>
                </button>
            )
        }
    </section>
    );
}