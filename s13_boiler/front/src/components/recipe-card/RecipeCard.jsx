import React, {useState} from "react";


const RecipeCard = ({recipe, onEdit, onDelete}) => {
    const {name, prepTime, difficulty} = recipe;

    return (
        <div className="recipe-card">
            
                <>
                    <div className="title-container">
                        <h1>{name}</h1>
                    </div>
                    <h3>Prep time:</h3>
                    <p>{`${prepTime} minutes`}</p>
                    <h3>Difficulty:</h3>
                    <p>{difficulty}</p>
                    <button className="recipe-card-del-btn" onClick={() => onDelete(recipe)}>Delete</button>
                </>
            
        </div>
    );
};

export {RecipeCard};