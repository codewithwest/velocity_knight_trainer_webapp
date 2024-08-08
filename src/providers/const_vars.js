// import { main_logo } from "./imageProvider"

// // const resolve = 'https://node-rest-six.vercel.app'
// try {
//     var resolve = 'http://localhost:1327/'

// } catch (error) {
//     resolve = 'http://192.168.202.34:3070'
// }

// const aboutCards = [
//     [main_logo, 'this', 'this', 'this'],
// ]
// export { resolve, aboutCards }

let use_query_const = {
    cacheTime: 1000 * 60 * 60, // saved for 1 hour
    refetchInterval: 1000 * 60 * 5, // refreshes every 5 mins
}
export { use_query_const }