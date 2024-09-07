import {Container, InputWrapper, Section,           Input, SearchIcon} from './style'
import Time from "./Time";
import GenericSelect from './Select'
import DateTimePicker from './DateTimePicker'

function Navbar() {
  return (
    <Container>
      <InputWrapper>
         <SearchIcon />
         <Input placeholder='Search'/>
      </InputWrapper>
      <Section>
        <Time />
        <DateTimePicker />
        <GenericSelect />
      </Section>
    </Container>
  )
}

export default Navbar