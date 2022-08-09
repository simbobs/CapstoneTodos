const baseURL = "/api/attractions"

export const getAttractions = () => {
    return fetch(baseURL)
    .then(res=> res.json())
  
}


