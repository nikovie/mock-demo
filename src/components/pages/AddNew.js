import React from 'react'
import { Form, Button } from 'react-bootstrap'

const AddNew = () => {
  return (
    <div>
      <h1>Add new article</h1>
      <div className='bg-white pa4'>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />

            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Body"
              rows={2}
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
