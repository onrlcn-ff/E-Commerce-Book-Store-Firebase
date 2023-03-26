import { useState, useEffect } from "react";
import { firestore } from "../firebaseConfig";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { collection } from "firebase/firestore";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = await firestore.collection("products").get();
      setProducts(
        productsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <h1 className="text-center mt-5 mb-4">Ürünler</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Fiyat: {product.price} TL</Card.Text>
                <Button variant="primary">Sepete Ekle</Button>
                <Button variant="outline-primary" className="ml-2">
                  Favorilere Ekle
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
