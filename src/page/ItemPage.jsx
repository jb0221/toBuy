import Tab from './../component/Tab';
import styled from 'styled-components'; // npm install styled-components

// npm i --save-dev @types/styled-components //타입스크립트시면 이것도 설치해주세요!

const ItemPage =()=>{ 
    
const StyledButton = styled.button`
padding : 6px 12px;
background : beige;
`
const Hello = styled.div`
    width : 100px;
    heigth : 100px;
    background-color : ${(props) => props.bgColor};
`


    return (
        <>
            ItemPage입니다.
            <Tab/>
            <Hello bgColor='red'>ddd</Hello>   
            <Hello bgColor='green'>ddd</Hello>   
            <StyledButton/>
         

        </>   
    )
}



export default ItemPage;