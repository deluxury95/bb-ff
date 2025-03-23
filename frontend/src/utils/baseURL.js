// const getBaseUrl = () => {
//      return "http://localhost:5000";
// }

// export default getBaseUrl;






const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:5000";  // URL for development environment
  } else {
    return "/";  // URL for production environment
  }
}

export default getBaseUrl;
