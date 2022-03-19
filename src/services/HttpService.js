export const PostWithAuth = (url, body) => {

    var request = fetch(url,  {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("tokenKey"),
        },
        body : JSON.stringify(body),
      })

    return request
}

export const PostWithoutAuth = (url, body) => {

    var request = fetch(url,  {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(body),
      })

    return request
}

export const PutWithAuth = (url, body) => {

    var request = fetch(url,  {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("tokenKey"),
        },
        body : JSON.stringify(body),
      })

    return request
}

export const GetWithAuth = (url) => {

    var request = fetch(url,  {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("tokenKey"),
        },
      })

    return request
}

export const DeleteWithAuth = (url) => {

    var request = fetch(url,  {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("tokenKey"),
        },
      })

    return request
}

export const RefreshToken = () => {

  var request = fetch("/auth/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: localStorage.getItem("currentUser"),
      refreshToken: localStorage.getItem("refreshKey"),
    }),
  })
  return request
}