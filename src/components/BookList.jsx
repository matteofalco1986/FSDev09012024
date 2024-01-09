import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'
import { useState } from 'react';

const BookList = ({ books }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAsin, setselectedAsin] = useState(null);

  const changeAsin = (newAsin) => {
    setselectedAsin(newAsin)
  }

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        <Col md={6}>
          <Row>
            {books
              .filter((b) =>
                b.title.toLowerCase().includes(searchQuery)
              )
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook
                    book={b}
                    changeAsin={changeAsin}
                    selectedAsin={selectedAsin}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={6}>
          <CommentArea bookId={selectedAsin} />
        </Col>
      </Row>
    </>
  )
}


export default BookList
