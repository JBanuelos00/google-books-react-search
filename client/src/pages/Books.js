import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Books() {
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
      API.getBooks()
        .then(res => 
          console.log(res.data)
        )
        .catch(err => console.log(err));
    };

    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };

    function saveBooks(books) {
      API.saveBooks(books)
        .then(res => loadBooks())
        .catch(err => console.log(err))
    }

    function handleFormSubmit(event) {
      event.preventDefault();
      if(formObject.title) {
       API.search(formObject.title)
        .then(res => saveBooks(res))
        .catch(err => console.log(err))
      }
    };

  return (
    <Container fluid>
    <Row>
      <Col size="md-6">
        <Jumbotron>
          <h1>Google Books Search</h1>
        </Jumbotron>
        <form>
          <Input
            onChange={handleInputChange}
            name="title"
            placeholder="Title (required)"
          />
          <FormBtn
            disabled={!(formObject.title)}
            onClick={handleFormSubmit}
          >
            Submit Book
          </FormBtn>
        </form>
      </Col>
      <Col size="md-6 sm-12">
        <Jumbotron>
          <h1>Book List</h1>
        </Jumbotron>
        {books.length ? (
          <List>
            {books.map(book => (
              <ListItem key={book._id}>
                <Link to={"/books/" + book._id}>
                  <strong>
                    {book.title} by {book.authors}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => console.log("Saved!")} />
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Col>
    </Row>
  </Container>
    );
}

export default Books;