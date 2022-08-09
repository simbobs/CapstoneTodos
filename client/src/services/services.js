const baseURL = "http://localhost:8080/api/attractions/"

export const getAttractions = () => {
    return fetch(baseURL)
        .then(res => res.json())

}

export const postAttraction = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const deleteAttraction = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    });
};

export const editAttraction = (attraction) => {
    return fetch(baseURL + attraction.id, {
        method: 'PUT',
        body: JSON.stringify(attraction),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json());
}



