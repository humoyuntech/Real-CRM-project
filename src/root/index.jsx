import {Routes, Route, Navigate} from "react-router-dom"
import {Container} from './style'
import sidebar from "../utils/sidebar"
function Root() {
  return (
    <Container>
      <Routes>
        {
          sidebar.map((parent) => {
            const Element = parent.element;  
            if(parent?.children?.length){
              return parent.children.map((child)=>{
                const ElementChild = child.element;
                return (
                  <Route key={child.id} path={child.path} element={<ElementChild/>}/>
                );
              });
            } else {
              return (<Route key={parent.id} path={parent.path} element={<Element />} />)
            }
          })
        }
        <Route path="/" element={<Navigate to={"/analitika"}/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Container>
  )
}

export default Root