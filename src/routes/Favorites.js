import { useContext } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { PokemonCard } from "../components";
import { FavoritesContext } from "../FavoritesProvider";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Container>
      <Row className="g-4">
        {favorites?.map((favorite, index) => (
          <Col key={favorite}>
            <PokemonCard name={favorite} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export { Favorites };
