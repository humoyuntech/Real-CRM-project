import {Container, SearchIcon, Section} from './style'
import Time from "./Time";
import DateTimePicker from './DateTimePicker'
import Input from '../Generics/Input';
import GenericSelect from '../Generics/Select';

function Navbar() {
  const data = [
    {value: "uzbek", title: "Uzbek"},
    {value: "arabic", title: "Arabic"},
    {value: "turkish", title: "Turkish"},
    {value: "english", title: "English"},
    {value: "russian", title: "Russian"},
    {value: "german", title: "German"},
  ];
  
  return (
    <Container>
      <Input width={500} borderRadius={8} height={40} iconLeft={<SearchIcon />} />
      <Section>
        <Time />
        <DateTimePicker />
        <GenericSelect label="Language" data={data}/>
      </Section>
    </Container>
  )
}

export default Navbar