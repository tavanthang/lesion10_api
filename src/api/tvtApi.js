import axios from 'axios'
export default axios.create({
    baseURL:"https://6672f7f76ca902ae11b2992c.mockapi.io/tvtApi/tvtV1/:endpoint"
})