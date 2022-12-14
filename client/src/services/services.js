
const baseURL = "http://localhost:8080"

export const getAttractions = () => {
    return fetch(baseURL + "/api/attractions")
        .then(res => res.json())

}

export const getLocations = () => {
    return fetch(baseURL + "/api/locations")
        .then(res => res.json())

}

export const getUser = () => {
    return fetch(baseURL + "/api/users")
        .then(res => res.json())
}

export const postAttraction = (payload) => {
    return fetch(baseURL + "/api/attractions", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())

}

export const postComment = (payload) => {
    return fetch(baseURL + "/api/comments", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const deleteAttraction = (id) => {
    return fetch(baseURL + "/api/attractions/" + id, {
        method: 'DELETE'
    });
};

export const editAttraction = (attraction) => {
    return fetch(baseURL + "/api/attractions/" + attraction.id, {
        method: 'PUT',
        body: JSON.stringify(attraction),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json());
}

export const editUser = (user) => {
    return fetch(baseURL + "/api/users/" + user.id, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json());
}

export const getComments = () => {
    return fetch(baseURL + "/api/comments")
        .then(res => res.json())
}

