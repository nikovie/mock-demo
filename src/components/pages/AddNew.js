import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddNew = ({ addNewArticle, activeUser }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addArticle = (event) => {
    event.preventDefault()

    addNewArticle({
      title: title,
      body: body,
      userId: activeUser.id
    })

    setTitle('')
    setBody('')
  }

  return (
    <div>
      <h1>Add new article</h1>
      <div className='bg-white pa4'>
        <Form onSubmit={addArticle}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Title" 
              id="title"
              value={title}
              name="title"
              onChange={({ target }) => setTitle(target.value)}
            />

            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Body"
              rows={2}
              id="notes"
              value={body}
              onChange={({ target }) => setBody(target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default AddNew
