import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getMovies } from '../Api/api';
import MovieList from './MovieList';
import NotFound from './NotFound'
import Loading from './Loading';
import MovieDetail from './MovieDetail'
import { Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  const [movieName, setMovieName] = useState()
  const [movies, setMovies] = useState([])
  const [loading, setloading] = useState(true)
  const [type, setType] = useState("movie")
  const handleTypeDropdown = (eventKey) => {
    setType(eventKey)
    handleClick(eventKey)

  }
  const handleClick = (type) => {
    setloading(true)
    getMovies(movieName, type)
      .then(data => { setMovies(data); setloading(false) })
      .catch((error) => { console.error(error); setloading(false) });
  }

  useEffect(() => {
    setMovieName("Superman")
    setloading(true)
    getMovies()
      .then((movieData) => setMovies(movieData))
      .catch((error) => console.error(error));
    setloading(false)
  }, []);

  const getNavDropdownTitle = () => {
    if (type === "movie") {
      return "Movies";
    } else if (type === "series") {
      return "TV Series";
    } else if (type === "episode") {
      return "Episodes";
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <img src="../popcorn.png" height={80} alt="popcorn time logo" />
          <Navbar.Brand href="/">PopCornTime</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              {/* <Nav.Link href="#action2">Link</Nav.Link> */}
              <NavDropdown title={getNavDropdownTitle()} id="navbarScrollingDropdown" onSelect={handleTypeDropdown}>
                <NavDropdown.Item eventKey="movie">Movies</NavDropdown.Item>
                <NavDropdown.Item eventKey="series">Tv Shows</NavDropdown.Item>
                <NavDropdown.Item eventKey="episode">Episodes</NavDropdown.Item>
              </NavDropdown>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={movieName}
                onChange={e => setMovieName(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); navigate("/"); handleClick(type) } }}
              />
              <Button variant="outline-success" onClick={() => { navigate("/"); handleClick(type) }}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            loading ? (
              <Loading />
            ) : movies ? (
              <MovieList movies={movies} />
            ) : (
              <NotFound />
            )
          }
        >
          {/* Add the movie detail route with a parameter */}

        </Route>
        <Route path="/:movieID" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>



    </>
  )
}

export default Home