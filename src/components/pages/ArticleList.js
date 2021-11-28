import React from 'react'

import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Article = ({ data }) => {
  console.log(`articles`, data)
  
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
          <TableRows rows={data} />
        </Table>
      </div>
      
    </div>
  )
}

const TableRows = ({ rows }) => {
  return (
    <tbody>
      {rows.map((row, id) => (
        <tr key={id}>
          <td>{row.id}</td>
          <td>{row.title}</td>
          <td>
            <Link 
              to={`/articles/${row.id}`}
            >View</Link></td>
        </tr>
      ))}
    </tbody>
  )
}

export default Article
