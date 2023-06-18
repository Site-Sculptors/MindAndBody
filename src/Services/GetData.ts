export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "6ec2241d08mshc9f17c3bce4b106p141991jsnca2ab3cf927e", //"f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85", // process.env.RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "6ec2241d08mshc9f17c3bce4b106p141991jsnca2ab3cf927e",
  },
};

/* export const recipeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
    "X-RapidAPI-Key": "6ec2241d08mshc9f17c3bce4b106p141991jsnca2ab3cf927e",
  },
}; */

/* export const GetData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
}; */

export const GetData = async <T>(
  url: string,
  options: RequestInit
): Promise<T> => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

export const GetEdamamRecipesData = async () => {
  //query: string) => {
  // const base_url = "https://api.edamam.com";
  const app_id = "6f2bef3d";
  const app_key = "e596b593b3d338818b8fe348cfc0ab8d";
  // const app_extension = "/api/recipes/v2 ";
  const full_url =
    "https://api.edamam.com/api/food-database/parser?app_id=6f2bef3d&app_key=e596b593b3d338818b8fe348cfc0ab8d&ingr=${query}";

  const response = await fetch(full_url, {
    headers: {
      app_id: app_id,
      app_key: app_key,
    },
  });
};

export const GetRecipesData = async (query: string) => {
  const apiKey = "b7daf45125msh06e8e5ac10b62a1p1bc5c7jsn268f87400520";
  const apiUrl = `https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`;

  const response = await fetch(apiUrl, {
    headers: {
      "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
      "X-RapidAPI-Key": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching recipe data");
  }

  const data = await response.json();
  console.log("recipeData:", data);
  return data;
};
