import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
export function TeamCard({data}) {
        return (
            <Card className="myCard h-100 shadow-sm bg-white" style={{width:"251px"}}>
                <Card.Img className = "myCard" src={require(`../Members/Picture/${data.image}.png`)} style={{width:"251px", height:"300px"}}/>
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex mb-2 justify-content-between">
                        <Card.Title className="mb-0 cardFont">{data.name}</Card.Title>
                    </div>
                    <Card.Text className="cardFont2">{data.role}</Card.Text>
                </Card.Body>
            </Card>
        )
}