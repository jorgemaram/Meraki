import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.scss'


const Home = (props) => {



    return (
        <>
            <section className="picture-home">
            
                <Container>
                    <Row>
                        <Col className="first-container-text" md={{ span: 6, offset: 8 }}>
                            
                            <h1>Bienvenido a Meraki</h1>
                            {
                                props.loggedUser
                                    &&
                                    
                                        props.loggedUser.role === "Escritor"
                                            &&
                                            <>
                                                <Link className="button-first" to={'/libros/crear'}>Crear nuevo libro</Link>
                                                <Link className="button-second" to={'/eventos/nuevo-evento'}>Crear nuevo evento</Link>
                                    
                                            </>         
                            }

                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="container-background">

            <Container className="second-container-home">
                
                <Row >
                    <Col md={3}>
                        <img className="first-home-image"></img>

                    </Col>
                    <Col md={3}>
                        <img className="second-home-image"></img>

                    </Col>
                    <Col md={6}>
                        <h2 className="second-container-title">Descubre Meraki</h2>
                        <hr></hr>
                        <p>¡ PENDIENTE DE TIPOGRAFÍA ! Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem </p>
                        <Link className="button-second" to={'/registro'}>Comienza tu aventura</Link>

                    </Col>

                </Row>
            </Container>
            </div>

            <Container>
                <Row>
                    <Col className="col-home-container" md={{ span: 3, offset: 1 }}>
                        <h2 className="second-container-title">Descubre Meraki</h2>
                        <hr></hr>
                        <p>¡ PENDIENTE DE TIPOGRAFÍA ! Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem </p>
                        <Link className="button-second" to={'/registro'}>Comienza tu aventura</Link>
                    </Col>
                    <Col className="col-home-container" md={{ span: 3, offset: 1 }}>
                        <h2 className="second-container-title">Descubre Meraki</h2>
                        <hr></hr>
                        <p>¡ PENDIENTE DE TIPOGRAFÍA ! Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem </p>
                        <Link className="button-second" to={'/registro'}>Comienza tu aventura</Link>
                    </Col>
                    <Col className="col-home-container" md={{ span: 3, offset: 1 }}>
                        <h2 className="second-container-title">Descubre Meraki</h2>
                        <hr></hr>
                        <p>¡ PENDIENTE DE TIPOGRAFÍA ! Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem </p>
                        <Link className="button-second" to={'/registro'}>Comienza tu aventura</Link>
                    </Col>
                
                </Row>
                    
            </Container>
          

            <Container fluid className="phrase-container">
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h3 >Hacer algo con el alma, pasión, amor y creatividad;<br />poner todo de ti en cada cosa que haces.</h3>
                        <hr></hr>
                        <h2>Meraki</h2>
                    </Col>
                </Row>


                </Container>

        </>
    )
}

export default Home

