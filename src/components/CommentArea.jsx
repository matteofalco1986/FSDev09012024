import CommentsList from './CommentsList';
import AddComment from './AddComment';
import { useState, useEffect } from 'react';

const url = 'https://striveschool-api.herokuapp.com/api/comments/'
const apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlkNjI1MGU2Mjg4NjAwMTg4M2Y1ZjYiLCJpYXQiOjE3MDQ4MTMxMzYsImV4cCI6MTcwNjAyMjczNn0.J2GF3EK4KjCp5mH2Pc2jNC3GkyVjbslIaYnbyyubzuY'

const CommentArea = ({ bookId }) => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments()
  }, [bookId])


  const aggiornaCommenti = () => {
    getComments()
  }

  const getComments = () => {
    fetch(
      url + bookId, {
      headers: {
        Authorization: apiKey
      },
    }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('errore nel recupero dei commenti')
        }
        return res.json()
      })
      .then((arrayOfComments) => {
        console.log(arrayOfComments)
        setComments(arrayOfComments);
      })
      .catch((err) => {
        console.error('error', err)
      })
  }

  return (
    <div>
      <div>
        <CommentsList reviews={comments} />
      </div>
      <div>
        <AddComment bookId={bookId} aggiornaCommenti={aggiornaCommenti} />
      </div>
    </div>
  )
}

export default CommentArea;
