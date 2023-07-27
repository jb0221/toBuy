import Tab from './../component/Tab';
import styled from 'styled-components'; // npm install styled-components

const ItemPage =()=>{ 


    const styledButton = styled.button`
    padding : 6px 12px;
    background : pink;
    
  `

    return (
        <>
            ItemPage입니다.
            <Tab/>
            <styledButton>dd</styledButton>

        </>   
    )
}


function Button ({children}){ 
    return <styledButton>{children}</styledButton>
  }

export default ItemPage;