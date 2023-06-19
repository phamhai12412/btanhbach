import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cardpro(props) {
  const { img, tittel, text } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{tittel}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardpro;
