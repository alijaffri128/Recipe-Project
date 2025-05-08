import { useNavigate } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
const Card = () => {
  const { data, loading, error } = useFetchData("https://dummyjson.com/recipes");
  const navigate = useNavigate();

  if (loading) return <div>Loading recipes...</div>;
  if (error) return <div>Error loading recipes: {error.message}</div>;

  return (
    <div className="w-full flex justify-center">
      <div className="w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {data.recipes.map((recipe) => (
          <div
            key={recipe.id}
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
              <div className="font-Montserrat">{recipe.name}</div>
              <div className="text-black bg-[#84BD00] px-1 text-sm">
                Reviews:{recipe.reviewCount}
              </div>
            </div>

            <div className="mt-[12px] text-sm text-black flex justify-between px-2">
              <span>⏱️ {recipe.cookTimeMinutes} minutes</span>
              <span>{recipe.mealType?.[0] || "Meal Type"}</span>
               {/* ?. is optional chaining to prevent errors if mealType is undefined or null. */}
            </div>

            <div className="text-black mt-1 flex justify-end px-2 pb-2">
              {recipe.rating}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;

