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
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  },
};

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

/* export const GetData = async (url: string, options: RequestInit): Promise<any> => {
  const headers = new Headers();
  headers.set('X-RapidAPI-Host', 'your-host-value');
  headers.set('X-RapidAPI-Key', 'your-key-value');

  const modifiedOptions: RequestInit = {
    ...options,
    headers: headers,
  };

  const res = await fetch(url, modifiedOptions);
  const data = await res.json();

  return data;
}; */
