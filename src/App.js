import React, { Component } from 'react';
import Helmet from "react-helmet";
import { Grid, Row, Col} from "react-bootstrap";
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
                {name: "description", content: "Helmet application"},
            ]}
            link={[
                {rel: "canonical", href: "http://bsthomsen.com"},
                {rel: "shortcut icon", href: "https://secure.gravatar.com/avatar/5c5adb8d46df0e509a413458987d3c5e?s=32"},
                {rel: "apple-touch-icon", href: "https://secure.gravatar.com/avatar/5c5adb8d46df0e509a413458987d3c5e?s=300"},
            ]}
          />
          <section id="main-section">
            <Grid>
                <Row>
                    <Col md={12}>
                        <h2>Welcome to</h2>
                        <h1>My personal web site!</h1>
                        <hr />
                        <p>
                            I'm a curious Web developer with a strong interest in JavaScript, ReactJS, SASS and frontend in general.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="portrait">
                            <Gravatar email="mail@bsthomsen.com" size={230} />
                        </div>
                        <h3>Bjørn Schmidt Thomsen</h3>
                        <h4>Web developer at <a href="http://speedperform.com" target="_blank">WorldManuals</a></h4>
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
                            <a href="https://linkedin.com/pub/bjørn-schmidt-thomsen/47/474/680/" target="_blank">
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
            </Grid>
          </section>
      </div>
    );
  }
}

export default App;
