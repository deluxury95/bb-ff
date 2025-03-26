// function getImgUrl (name) {
//     return new URL(`../assets/books/${name}`, import.meta.url)
// }

// export {getImgUrl}





function getImgUrl(name) {
    try {
      return new URL(`../assets/books/${name}`, import.meta.url);
    } catch (error) {
      console.error("Error generating image URL:", error);
      return null; // Or fallback URL
    }
  }
  
  export { getImgUrl };