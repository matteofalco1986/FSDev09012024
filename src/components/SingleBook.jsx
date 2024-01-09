import { Card } from 'react-bootstrap'
import { useState } from 'react';

const SingleBook = ({ book, changeAsin, selectedAsin }) => {

  const [selected, setSelected] = useState(false)

  return (
    <>
      <Card
        onClick={() => {
          setSelected(!selected)
          changeAsin(book.asin)
          console.log(book.asin)
        }}
        style={{
          border:
            book.asin === selectedAsin
              ? '3px solid red'
              : 'none',
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook
