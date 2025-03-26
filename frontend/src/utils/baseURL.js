// const getBaseUrl = () => {
//      return "http://localhost:5000";
// }

// export default getBaseUrl;




const getBaseUrl = () => {
     const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://backend-app-ecc8.onrender.com";
     return backendUrl;
 }
 
 export default getBaseUrl;
 


