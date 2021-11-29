import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
} 

const create = async articleObject => {
  console.log(`articleObject`, articleObject)
  const response = await axios.post(baseUrl, articleObject)
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

const articleService = { getAll, create, remove }

export default articleService
