import axios from 'axios'

const BASE_URL = 'https://api.github.com/users'

export default {
  getUserGithub: async (name: string) => {
    const response = await axios.get(`${BASE_URL}/${name}`)
    return response.data
  },
}
