import {Nav} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Header= ()=>{
    
    let navigate = useNavigate();
    const movePage = (e)=>{
      
        //let page = e.target.getAttribute('data-rr-ui-event-key');
        let page =e.target.getAttribute("value");
        navigate(`${page}`);

        // navigate( '/이동경로', { state: { 키: 값, 키: 값, ... } } )
    }
    
    return (
        <>
        {/* <Nav justify variant="tabs" defaultActiveKey="Main" stlye={{display:'flex'}}>
            <Nav.Item stlye={{ marginRight:'5px'}}>
                <Nav.Link eventKey="/MainPage"  onClick={movePage}>홈</Nav.Link>
            </Nav.Item>
            <Nav.Item stlye={{ marginRight:'5px'}}> 
                <Nav.Link eventKey="ItemPage"  onClick={movePage}>상품몰</Nav.Link>
            </Nav.Item>   
            <Nav.Item stlye={{ marginRight:'5px'}}>
                <Nav.Link eventKey="TestPage"  onClick={movePage}>테스트</Nav.Link>
            </Nav.Item>  
            <Nav.Item stlye={{ marginRight:'5px'}}>
                <Nav.Link eventKey="SamplePage"  onClick={movePage}>샘플</Nav.Link>
            </Nav.Item>  
        </Nav> */}

        <div>
            <ul>
                <li value="/MainPage"  onClick={movePage}>홈</li>
                <li value="/ItemPage"  onClick={movePage}>상품몰</li>
                <li value="/TestPage"  onClick={movePage}>테스트</li>
                <li value="/SamplePage"  onClick={movePage}>샘플</li>
                <li value="/SamplePage2"  onClick={movePage}>샘플2</li>
            </ul>
        </div>

        </>
    )
}

export default Header