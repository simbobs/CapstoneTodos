const baseURL = "http://localhost:8080"

export const getAttractions = () => {
    return fetch(baseURL + "/api/attractions")
    .then(res=> res.json())
  
}

export const getLocations = () => {
    return fetch(baseURL + "/api/locations")
    .then(res=> res.json())
  
}


