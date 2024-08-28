import {Container} from './style'
import {useLocation} from "react-router-dom"

function Generics() {
  const location = useLocation();

  return (
    <Container>
        <h1>{location.pathname}</h1>
        <h1>Coming soon...</h1>
    </Container>
  )
}

export default Generics