import { Outlet } from 'react-router-dom'
import {Container, Side, Body, Wrapper} from './style'
import Navbar from "../Navbar"

function Sidebar() {
  return (
    <Container>
        <Side>
          <h1>Sidebar</h1>
        </Side>
        <Body>
          <Navbar/>
          <Wrapper>
            <Outlet />
          </Wrapper>
        </Body>
    </Container>
  )
}

export default Sidebar