import {Container, SearchIcon, Section} from './style'
import Time from "./Time";
import GenericSelect from './Select'
import DateTimePicker from './DateTimePicker'
import Input from '../Generics/Input';

function Navbar() {
  return (
    <Container>
      <Input width={500} borderRadius={8} height={40} iconLeft={<SearchIcon />} />
      <Section>
        <Time />
        <DateTimePicker />
        <GenericSelect />
      </Section>
    </Container>
  )
}

export default Navbar