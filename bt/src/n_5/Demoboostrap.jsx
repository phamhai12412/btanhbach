import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "./Cardpro";
import Cardpro from "./Cardpro";
function Demoboostrap() {
  return (
    // light-navbar sua lai
    <div>
      {/* day la nav */}
      <Navbar bg="light-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">context</Nav.Link>
              <Nav.Link href="#home">product</Nav.Link>
              <Nav.Link href="#link">abaut</Nav.Link>
            </Nav>
            <Button variant="outline-primary">Primary</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* day la carousel */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ex-cdn.com/mgn.vn/files/content/2022/08/18/lmht-top-5-trang-phuc-dep-nhat-cua-quoc-tuong-yasuo_5-1312.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.bongdaplus.vn/Assets/Media/2020/07/08/66/yasuo0.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ecdn.game4v.com/g4v-content/uploads/2023/04/19025819/Prestige-Inkshadow-Yasuo-1681847898-26.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* card component */}
      <div className="card_pro">
        <Cardpro
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sTzKR6kPPfME4Dhv2a6HX7DoCf2wVBejlg&usqp=CAU"
          }
          tittel={"samsung"}
          text={"dien thoai samsung"}
        />
        <Cardpro
          img={
            "data:image/jpeg;base64,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"
          }
          tittel={"iphen"}
          text={"dien thoai iphen"}
        />
        <Cardpro
          img={
            "data:image/jpeg;base64,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"
          }
          tittel={"phoni"}
          text={"dien thoai phoni"}
        />
      </div>
    </div>
  );
}

export default Demoboostrap;
