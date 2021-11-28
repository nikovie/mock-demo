import React from 'react'
import { Alert } from 'react-bootstrap'

const Notification = ({ notification }) => {

  return (
    <>
      {!notification
        ? null
        : <Alert variant={notification.type ? notification.type : 'success'}>
          {notification.message}
        </Alert>
      }
    </>
  )
}

export default Notification
