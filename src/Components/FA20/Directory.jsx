import {NavLink} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import './Directory.css';

function Directory(props) {
    return (
        <Col className="org_directory">
            <h1>DESIGN ORGS DIRECTORY</h1>
                <NavLink to = {{pathname:"/issue2/design-co",}} className="org_link green one">
                    <p>Design Co</p>
                </NavLink>

                <NavLink to = {{pathname:"/issue2/triton-software-engineering",}} className="org_link red two">
                    <p>Triton Software Engineering (TSE)</p>
                </NavLink>

                <NavLink to = {{pathname:"/issue2/design-for-america",}} className="org_link orange three">
                    <p>Design for America (DFA)</p>
                </NavLink>
                                                    
                <NavLink to = {{pathname:"/issue2/architecture@ucsd",}} className="org_link orange four">
                    <p>Architecture @ UCSD</p>
                </NavLink>
                                                    
                <NavLink to = {{pathname:"/issue2/trend-magazine",}} className="org_link red five">
                    <p>Trend Magazine</p>
                </NavLink>
                                                    
                <NavLink to = {{pathname:"/issue2/acm-design",}} className="org_link orange six">
                    <p>ACM Design</p>
                </NavLink>
                                                    
                <NavLink to = {{pathname:"/issue2/design-for-san-diego",}} className="org_link green seven">
                    <p>Design for San Diego</p>
                </NavLink>
                                                    
                <NavLink to = {{pathname:"/issue2/triton-robosub",}} className="org_link red eight">
                    <p>Triton Robosub</p>
                </NavLink>

                <NavLink to = {{pathname:"/issue2/young-planners-society",}} className="org_link green nine">
                    <p>Young Planners Society</p>
                </NavLink>
                                                    
            </Col>
    );
}

export default Directory;