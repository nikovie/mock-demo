import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
} 

const articleService = { getAll }

export default articleService
