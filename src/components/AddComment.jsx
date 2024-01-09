import { Button, Form } from 'react-bootstrap'
import { useState } from 'react';

const url = 'https://striveschool-api.herokuapp.com/api/comments'
const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlkNjI1MGU2Mjg4NjAwMTg4M2Y1ZjYiLCJpYXQiOjE3MDQ4MTMxMzYsImV4cCI6MTcwNjAyMjczNn0.J2GF3EK4KjCp5mH2Pc2jNC3GkyVjbslIaYnbyyubzuY';

const AddComment = ({ bookId, aggiornaCommenti }) => {

  const [commentObject, setCommentObject] = useState({
    comment: '',
    rate: '1',
    elementId: bookId
  })

  const sendNewReview = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(commentObject),
        headers: {
          Authorization: apiKey,
          'Content-Type': 'application/json',
        },
      }
      )
      if (!response.ok) {
        throw new Error('errore nel salvataggio del commento')
      }

      // il commento è stato inviato!
      alert('commento salvato!');
      aggiornaCommenti();
    } catch (err) {
      console.error('error', err)
    }
  }

  return (
    <Form onSubmit={sendNewReview}>
      <Form.Group className="mb-1 mt-4">
        <Form.Label>Commento</Form.Label>
        <Form.Control
          type="text"
          value={commentObject.comment}
          onChange={(e) => {
            const updatedObject = { ...commentObject }
            updatedObject.comment = e.target.value;
            updatedObject.elementId = bookId;
            setCommentObject(updatedObject);
          }}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Rating</Form.Label>
        <Form.Select
          aria-label="comment rating"
          value={commentObject.rate}
          onChange={(e) => {
            const updatedObject = { ...commentObject }
            updatedObject.rate = e.target.value;
            updatedObject.elementId = bookId;
            setCommentObject(updatedObject);
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Invia
      </Button>
    </Form>
  )
}

export default AddComment;
