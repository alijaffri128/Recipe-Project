import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// redirecting users to a different route

const Card = () => {
  const [recipes, setRecipes] = useState([]); // recipes: state variable that stores the list of recipes fetched from the API
  const navigate = useNavigate();// navigate to other routes using navigate("/some-route").


  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");// Sends a GET request
        const data = await res.json();//  Parses the response into JSON format
        setRecipes(data.recipes);// Updates the component's state
      } catch (err) {
        console.error("Failed to fetch recipes:", err);
      }
    };

    fetchRecipes();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>★</span>);
    }
    return stars;
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id} // key :  to keep track of which items change, are added, or are removed.
            onClick={() => navigate(`/recipe/${recipe.id}`)}
            className="cursor-pointer bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Image Section with Cuisine Text */}
            <div
              className="relative w-full h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${recipe.image})` }}
            >
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1">
                <h2 className="font-lobster text-2xl text-white">
                  {recipe.cuisine}
                </h2>
              </div>
            </div>

            {/* Recipe Info */}
            <div className="p-2 flex justify-between">
              <div className="font-semibold">{recipe.name}</div>
              <div className="text-black bg-[#84BD00] px-1 text-sm">
                Reviews: {recipe.reviewCount}
              </div>
            </div>

            <div className="mt-3 text-sm text-black flex justify-between px-2">
              <span>⏱️ {recipe.cookTimeMinutes} minutes</span>
              <span>{recipe.mealType?.[0] || "Meal Type"}</span>
            </div>

            <div className="text-black mt-1 flex justify-end px-2 pb-2">
              {renderStars(recipe.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
