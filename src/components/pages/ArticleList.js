import React from 'react'
import { Table, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Article = ({ data, users, activeUser, removeArticle }) => {
  // console.log(`articles`, data)
  console.log(`activeUser`, activeUser)
  console.log(`users`, users)

  return (
    <div>
      <h1>Articles</h1>
      <div className='bg-white pa4'>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, id) => (
              <tr key={id}>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>
                  <div>
                    <Link 
                      to={`/articles/${row.id}`}
                    >View</Link>
                  </div>

                  {!activeUser || row.userId !== activeUser.id ? null : (
                    <div>
                      <Badge 
                        bg='danger' 
                        onClick={() => removeArticle(row)}
                        className='pointer'
                      >Delete</Badge> 
                  </div>
                  )}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      
    </div>
  )
}

// const TableRows = ({ rows, activeUser, removeArticle }) => {
//   return (
    
//   )
// }

export default Article
