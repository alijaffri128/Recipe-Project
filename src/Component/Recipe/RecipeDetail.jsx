import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// useState :  hook used to store local component state.
// useEffect : hook that lets you run side effects (like data fetching)
// useParms :  hook that lets you access URL parameters from the current route
const RecipeDetail = () => {
  const { id } = useParams(); // Reads the id from the URL (e.g., /recipe/5).
  const [recipe, setRecipe] = useState(null); // initial value of the state variable

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await res.json();
        setRecipe(data);
      } catch (err) {
        console.error("Failed to fetch recipe:", err);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <div className="p-4">Loading...</div>;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10">
      <div className="bg-[#8B888836] p-6 w-[560px] h-[550px] min-w-[280px] max-w-[560px] top-[885px] left-[86px] rounded-[28px]">
        <h2 className="text-lg font-semibold mb-2">Recipe Title</h2>
        <p className="text-sm text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus ac
          turpis blandit ipsum, diam, nisi feugiat ipsum. Et aliquam tempor
          suspendisse morbi quis. Nascetur etiam donec nulla purus amet amet
          eros posuere orci. Quam fermentum integer enim erat gravida feugiat.
          Dui, neque, purus dolor risus leo. Ut vel velit morbi mollis. Amet,
          leo, vitae bibendum sed pellentesque.
        </p>
        <hr className="my-3" />
        <div>
          <strong className="block mb-2">Ingredients</strong>

          <ul className="space-y-2">
          {/* Dynamically render  displays */}
            {recipe.ingredients.map((ing, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="text-green-500">✔</span>
                <span className="text-gray-500">{ing}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-[557px] h-[552px] top-[881px] left-[895px] object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

export default RecipeDetail;
