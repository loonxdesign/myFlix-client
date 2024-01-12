import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './profile-view.scss';

export const ProfileView = ({ user, token, movies, setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  //FAV MOVIES
  /* 
  let favMovie = user.favoriteMovies
    ? movies.filter((movie) => user.favoriteMovies.includes(movie._id)) : [];
  */

  console.log('user ProfileView', user);

  // UPDATE
  const handleUpdate = (event) => {
    event.preventDefault();

    let data = {
      username: username,
      password: password,
      email: email,
      birthday: birthday,
    };

    // DEBUG
    console.log('dataProfileView', JSON.stringify(data));
    console.log(username);

    fetch('https://ghib-lix-e94c670e9f28.herokuapp.com/users/${user.name}', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (response) => {
        console.log('response:', response);
        if (response.ok) {
          alert('update successful');
          const data = await response.json();
          localStorage.setItem('user', JSON.stringify(data));
          window.location.reload();
        } else {
          const errorText = await response.text();
          // Read the response body as text
          console.log('Error response body:', errorText);
          alert('update failed');
        }
      })
      .catch((err) => console.log('error', err));
  };

  // DELETE
  const handleDelete = () => {
    fetch('https://ghib-lix-e94c670e9f28.herokuapp.com/users/${user.name}', {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        setUser(null);
        localStorage.clear();
        alert('Your account has been deleted');
        window.location.replace('/login');
      } else {
        alert('something went wrong.');
      }
    });
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center mt-4">
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>My Profile</Card.Title>
                <Card.Text>Username: {user.Username}</Card.Text>
                <Card.Text>Email: {user.Email}</Card.Text>
                <Card.Text>Birthday: {user.Birthday}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center mt-4">
          <Col md={6}>
            <h2 className="profile-title">Update info</h2>
            <Form className="my-profile" onSubmit={handleUpdate}>
              <Form.Group className="mt-4 mb-4" controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mt-4 mb-4" controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mt-4 mb-4" controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mt-4 mb-4" controlId="formBirthday">
                <Form.Label>Birthday:</Form.Label>
                <Form.Control
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  required
                />
              </Form.Group>

              <Button
                id="update-button"
                className="update me-2 mb-4"
                type="submit"
                onClick={handleUpdate}
              >
                Update
              </Button>
              <Button
                id="delete-button"
                className="delete ms-2 mb-4"
                onClick={handleDelete}
              >
                Delete Account
              </Button>
            </Form>
          </Col>
        </Row>
      </Container> 
    </>
  );
};

// PART OF RETURN WITH FAV MOVIES
/*
<Container>
        <Row className="justify-content-md-center align-items-center">
          {favMovie.map((movie) => {
            return (
              <Col
                key={movie._id}
                className="mb-4 justify-content-center align-items-center d-flex"
              >
                <MovieCard
                  movie={movie}
                  token={token}
                  setUser={setUser}
                  user={user}
                />
              </Col>
            );
          })}
        </Row>
      </Container>  
*/
