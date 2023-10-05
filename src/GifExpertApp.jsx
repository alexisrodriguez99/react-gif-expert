import { useState } from "react";
import { AddCategory,GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory) ) return;
        setCategories([newCategory,...categories]);
    }

    // console.log(categories)
    return( 
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory = { onAddCategory }
            //setCategories={ setCategories}
            />
            {/* Listado de Gift */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                {
                categories.map( category => (
                    // <li key={ category }> {category} </li>
                    // <div key={ category }>
                    //     <li> {category} </li>
                    // </div>
                    <GifGrid 
                    key={category} 
                    category={ category } 
                    />
                    ))
                }
            </ol>
                {/* Gift Item */}
        </>
    )
}
