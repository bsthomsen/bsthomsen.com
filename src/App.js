import React, { Component } from 'react';
import Helmet from "react-helmet";
import { Container, Row, Col} from "react-bootstrap";
import Gravatar from "react-gravatar";
import FontAwesome from 'react-fontawesome';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Helmet
            title="Bjørn Thomsen"
            meta={[
                {name: "author", content: "Bjørn Thomsen"},
                {name: "description", content: ""},
            ]}
            link={[
                {rel: "canonical", href: "https://bsthomsen.com"},
                {rel: "shortcut icon", href: "https://secure.gravatar.com/avatar/5c5adb8d46df0e509a413458987d3c5e?s=32"},
                {rel: "apple-touch-icon", href: "https://secure.gravatar.com/avatar/5c5adb8d46df0e509a413458987d3c5e?s=300"},
            ]}
          />
          <section id="main-section">
            <Container>
                <Row>
                    <Col>
                        <h2>Welcome to</h2>
                        <h1>My personal web site!</h1>
                        <hr />
                        <p>
                            I'm a curious web developer with a strong interest in JavaScript, Vue, ReactJS, SASS and frontend in general.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="portrait">
                            <Gravatar email="mail@bsthomsen.com" size={230} />
                        </div>
                        <h3>Bjørn Thomsen</h3>
                        <h4>Chief Software Architect at <a href="https://speedperform.com" target="_blank">Speedperform</a></h4>
                        <div className="icons">
                        <span className="email">
                            <a href="mailto:mail@bsthomsen.com" target="_blank">
                                <FontAwesome
                                    name="envelope"
                                    size="2x"
                                />
                            </a>
                        </span>
                            <span className="github">
                            <a href="https://github.com/bsthomsen/" target="_blank">
                                <FontAwesome
                                    name="github-alt"
                                    size="2x"
                                />
                            </a>
                        </span>
                            <span className="linkedin">
                            <a href="https://www.linkedin.com/in/bsthomsen-com/" target="_blank">
                                <FontAwesome
                                    name="linkedin"
                                    size="2x"
                                />
                            </a>
                        </span>
                            <span className="twitter">
                            <a href="https://twitter.com/bsthomsen/" target="_blank">
                                <FontAwesome
                                    name="twitter"
                                    size="2x"
                                />
                            </a>
                        </span>
                        </div>
                    </Col>
                </Row>
            </Container>
          </section>
      </div>
    );
  }
}

export default App;
