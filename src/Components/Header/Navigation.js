import { Container, Navbar, Nav} from "react-bootstrap"

const Navigation = () => {
return  <Navbar style={{backgroundColor:"#232e3f"}} variant="dark">
<Container>
 
  <Nav className="me-auto" style={{width:100}}>
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
  </Nav>
</Container>
</Navbar>

}
export default Navigation;