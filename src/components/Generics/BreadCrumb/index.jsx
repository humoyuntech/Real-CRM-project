import { useLocation } from "react-router-dom";
import Title from "../Title";
import { Container, Arrow } from "./style";
import Subtitle from "../Subtitle";

function BreadCrumb(props) {
  const location = useLocation();
  return location.pathname !== "/analitika" ? (
    <Container title={location.state?.parent}>
      <Title>{location.state?.parent}</Title>
      {location.state?.child && <Arrow />}
      <Subtitle>{location.state?.child}</Subtitle>
      <div style={{ display: "flex", marginLeft: "auto", gap: 16 }}>
        {props.children}
      </div>
    </Container>
  ) : null;
}

export default BreadCrumb;