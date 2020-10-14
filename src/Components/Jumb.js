import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

export const Jumb = () => {
    return (
        <React.Fragment>
            <Jumbotron id="texto">
                <h1>Tudo sobre seus filme Favoritos!</h1>
                <p>
                Um filme pode ser categorizado em diferentes tipos de gêneros ao mesmo tempo, sendo em um desses gêneros sempre o que é mais destacado durante o longa.

                Com a criação de cada vez mais filmes ao longo dos anos, esse meio procura abordar com o passar dos anos ,assuntos originais e inovadores com a intenção de atrair ainda mais pessoas a assistirem os filmes.

                Portanto os diferentes tipos de gêneros que já existem até então não podem ser considerados como uma lista definitiva de todos os gêneros que já foram criados.
  </p>
                <p>
                    <Button variant="danger">Saiba Mais</Button>
                </p>
            </Jumbotron>
        </React.Fragment>


    )

}