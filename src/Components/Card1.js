import React from 'react'

import { Card, Button } from 'react-bootstrap'

export const Card1 = (props) => {
    return (
        <React.Fragment>
            <div class="ola">
            <Card className="bg-light text-white">
                <Card.Img src={require("../Assets/img/foto10.jpeg")}/>
                <Card.ImgOverlay>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        
    </Card.Text>

            <p>
            <Button variant="primary"><p id="ola1"> Streamings mais populares </p></Button>
            </p>
                    <Card.Text></Card.Text>
                </Card.ImgOverlay>
                
            
            </Card>

            </div>
        </React.Fragment>
    )


}
