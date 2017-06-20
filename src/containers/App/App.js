import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, NoMatch } from '../';
// import { Root } from './App.style';
import { Container, Row, Col } from '../../theme/grid';

class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Router>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route component={NoMatch} />
                            </Switch>
                        </Router>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;