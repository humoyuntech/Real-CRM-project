import Subtitle from "../Generics/Subtitle"
import Title from "../Generics/Title"
import {Container, Card, Wrapper, Section, Plus, Counter, Arrow, SubCard} from "./style"
import {privateData, media} from "../../utils/analitics"

function Analytics() {
  return (
    <Container>
       <Title mb={16}>Analitika</Title>
        <Wrapper gap={24}>
              {privateData.map((value)=> {
                const {icon: Icon} = value;
                const {img: Img} = value;
                return (
                <Card key={value.id} gap={24} title={value.title}>
                  <Section title={value.title}>
                    <Title><Icon className="icon"/>{value.title}</Title> {" "} <Plus title={value.title}/>
                  </Section>

                  <Section title={value.title}>
                    <Title>
                      <Arrow/> <Counter>{value.count}</Counter>
                    </Title> {" "}
                    <Img/>
                  </Section>
                </Card>
                )
              })}
        </Wrapper>
         <Subtitle mt={24} mb={16}>Ijtimoiy Tarmoqlar</Subtitle>
         <Wrapper>
         {media.map((value)=> {
                const {icon: Icon} = value;
                return (
                <SubCard key={value.id} gap={24} title={value.title}>
                  <Section title={value.title}>
                    <Subtitle><Icon className="subicon" />{value.title}</Subtitle> {" "} <Plus title={value.title}/>
                  </Section>

                  <Section title={value.title}>
                    <Title color={"#52C41A"}>
                      <Arrow/> 22%
                    </Title>
                    <Counter>{value.count}K</Counter>
                  </Section>
                </SubCard>
                )
              })}
         </Wrapper>
    </Container>
  )
}

export default Analytics