import {Nav} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Header= ()=>{
    
    let navigate = useNavigate();
    const movePage = (e)=>{
        let page = e.target.getAttribute('data-rr-ui-event-key');
        navigate(`/${page}`);

        // navigate( '/이동경로', { state: { 키: 값, 키: 값, ... } } )
    }
    
    return (
        <Nav justify variant="tabs" defaultActiveKey="Main">
            <Nav.Item>
                <Nav.Link eventKey="/MainPage"  onClick={movePage}>홈</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="ItemPage"  onClick={movePage}>상품몰</Nav.Link>
            </Nav.Item>   
            <Nav.Item>
                <Nav.Link eventKey="TestPage"  onClick={movePage}>테스트</Nav.Link>
            </Nav.Item>  
        </Nav>
    )
}

export default Header