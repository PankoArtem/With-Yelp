export const Yelp = {
    url: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?',
    apiKey: 'HQNwYMc7dtjc7oi8Qq7IkBwQEEkiH-a0KhwMbKQ_r7EdfLEWqAYXipWD-dFvsZAIpnj8R09C5kLr4KJQmqtnxN5k4t7O-0fv74MUOGmcn7Dykiq74D_6EuorVpcZX3Yx',
   makeRequest(location, term, sortBy) {
        const endpoint = this.url + 'location=' + location + '&term=' + term + '&sort_by' + sortBy;
       return fetch(endpoint, {
            headers: {
                Authorization: 'Bearer ' + this.apiKey
            }
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                console.log('request failed')
            }
        }).then(responseJson => {
            //console.log(responseJson)
            return responseJson
        })
        .catch(networkError => {console.log(networkError.message)})
    } 

    /* makeRequest: async function (location, term, sortBy){
    const endpoint = this.url + 'location=' + location + '&term=' + term + '&sort_by' + sortBy;
    try {const response = await fetch(endpoint, {
        headers: {
            Authorization: 'Bearer ' + this.apiKey 
        }
    });
    if (response.ok) {
        const responseJson = await response.json()
        //console.log(responseJson)
        return responseJson
    } else {
        console.log('request failed')
    }
    } catch (netwrorkError) {
        console.log(netwrorkError.message)
    }
    } */
}