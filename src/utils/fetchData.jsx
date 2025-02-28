export const exerciseOptions ={
        method: 'GET',
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
        
};
// console.log("API Key:", import.meta.env.VITE_RAPID_API_KEY); // Debugging


export const fetchData1 = async (url , options) =>{
    const response = await fetch(url ,options);
    const data = await response.json();

    return data ;
}