import './App.css';
import { Form,Button,Row,Col,Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header >
      <Navbar bg="light" variant="white" data-bs-theme="white">
        <Container>
          <Navbar.Brand href="#home">ScientIA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Ofertas Academicas</Nav.Link>
            <Nav.Link href="#pricing">Test Vocacional</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      </header>
      <main>
      <Container>
      <Row className="Cuerpo">
        <Col sn={5}>


        </Col>
        <Col sn={5}>

          <h1 class="Encuesta">
            Encuesta
          </h1>
          <p>
            Por favor llena la siguiente encuesta que nos permitira saber 
            tus gustos y preferencias para encontrar la carrera universitaria
            que mejor se ajuste a tus caracteristicas.
          </p>
          <form>
          <Form>
      {['radio'].map((type) => (
        <div key={`reverse-${type}`} className="mb-3">
           <Form.Label>Trabajar en el diseño de viviendas, armando los planos y combinando mis ideas con las necesidades del cliente	</Form.Label>
          <Form.Check
            reverse
            label="Si"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="No"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
              <Form.Label>Representar a una persona u organización en asuntos jurídicos y causas de tipo civil o penal	</Form.Label>
          <Form.Check
            reverse
            label="Si"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="No"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
             <Form.Label>Trabajar con tecnología de última generación y pensar posibles aplicaciones en otros campos (medicina, industria, comercio, etc.)	</Form.Label>
          <Form.Check
            reverse
            label="Si"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="No"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
             <Form.Label>	Realizar gestiones en temas de exportación e importación de materias primas, productos industriales, tecnologías, servicios e inversiones en el exterior y desde otros países.</Form.Label>
          <Form.Check
            reverse
            label="Si"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="No"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
             <Form.Label>Conocer y analizar distintas expresiones culturales y manifestaciones estéticas	</Form.Label>
          <Form.Check
            reverse
            label="Si"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="No"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
             <Form.Label>Estudiar los procesos cognitivos de atención, memoria, y lenguaje</Form.Label>
          <Form.Check
            reverse
            label="Si"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="No"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
             <Form.Label>Trabajar en clínicas de salud	</Form.Label>
          <Form.Check
            reverse
            label="Si"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="No"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
             <Form.Label>Asesorar en organismos internacionales en áreas de política, producción, finanzas, economía, cultura	</Form.Label>
          <Form.Check
            reverse
            label="Si"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="No"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
             <Form.Label>Supervisar la construcción de viviendas, espacios urbanos y de recreación	</Form.Label>
          <Form.Check
            reverse
            label="Si"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="No"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
             <Form.Label>Intervenir en proyectos de seguridad informática para empresas e industrias	</Form.Label>
          <Form.Check
            reverse
            label="Si"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="No"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />

        </div>
      ))}
      
    </Form>
          </form>
        </Col>
      </Row>
      
    </Container>

      </main>
    </div>
  );
}

export default App;
