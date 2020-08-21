
console.log(process.env.API_HOST)

import { Request, HTTPMethod } from './types'

class Backend {
    baseUrl: string

    constructor(baseUrl: string = process.env.API_HOST) {
        this.baseUrl = baseUrl
        console.log(`INITIALIZED BACKEND: ${baseUrl}`)
    }

    /// Abstract
    private async call<T>(request: Request<T>, query?: object, body?: any): Promise<T> {
        console.log(this.baseUrl, request.path)
        let url = new URL(`${this.baseUrl}/${request.path}`)
        let globalHeaders = {
            // 'apikey': process.env.EXPO_API_KEY
        }
        // try {
        //     const ujson = await AsyncStorage.getItem('user')
        //     const user = JSON.parse(ujson) as AuthResponse
        //     if (user.token && user.token.length > 0) {
        //         globalHeaders['Authorization'] = `Bearer ${user.token}`
        //     }
        // }
        // catch (ex) { }

        if (body) {
            globalHeaders['Content-Type'] = 'application/json'
        }

        if (query) {
            Object.keys(query).forEach(key => url.searchParams.append(key, query[key]))
        }

        const response = await fetch(url.href, {
            method: request.method,
            // mode: 'cors',
            headers: {
                ...globalHeaders
            },
            body: body && JSON.stringify(body)
        })

        if (response.status == 401) {
            /// Not authenticated.  Need to clear user
            throw new Error('Not Authenticated')
        }

        if (response.status == 204 || response.status == 201) {
            return null
        }

        try {
            const json = await response.json()
            return json
        }
        catch (ex) {
            console.log(`** Error parsing response as json.  Falling back to text`)
            console.error(ex)
            console.log(response.text())
            return null
        }
    }
}


export default new Backend()