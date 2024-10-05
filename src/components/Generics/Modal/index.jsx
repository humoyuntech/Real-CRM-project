/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import GenericButton from "../Button";
import { Container, Wrapper, Footer } from "./style";
import {createPortal} from "react-dom";


function Modal(props) {
  return (props?.open ? createPortal(
        <Container>
             <Wrapper>
              {props?.children}
            <Footer>
              {props?.onClose && <GenericButton type="delete" onClick={props?.onClose}>O'chirish</GenericButton>}
              {props.onSave && <GenericButton type="primary" onClick={props?.onSave}>Saqlash</GenericButton>}
            </Footer>
             
              </Wrapper>
        </Container>,
        document.body
  ) : null)
}

export default Modal