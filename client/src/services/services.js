const baseURL = "http://localhost:8080/api/attractions"

export const getAttractions = () => {
    return fetch(baseURL)
    .then(res=> res.json())
  
}


