import { useRoutes } from "react-router-dom";   

//1. react-router-dom을 설치해야 함:   npm install react-router-dom --save 
//2. page들을 import 하고 rootRoute에서 element로 갖다 쓰기 
//3. index.js에 가서 BrowserRouter 로 <App/> 감싸주기
import MainPage from '../page/MainPage';
import DetailPage from '../page/DetailPage';
import ItemPage from '../page/ItemPage';
import TestPage from '../page/TestPage';
import SamplePage from '../page/SamplePage';
import SamplePage2 from "../page/SamplePage2";
const Route = ()=>{ 

    const elements  = [ 

        {
            path : "/",
            element  : <MainPage/>
        },
        {
            path : "/MainPage/*",
            element  : <MainPage/>
        },
        {
            path : "/ItemPage/*",
            element  : <ItemPage/>
        },
        {
            path : "/DetailPage/*",
            element : <DetailPage/>
        },
        {
            path : "/TestPage/*",
            element : <TestPage/>
        },
        {
            path : "/SamplePage/*",
            element : <SamplePage/>
        },
        {
            path : "/SamplePage2/*",
            element : <SamplePage2/>
        }
    ];
    
    return useRoutes(elements || []);

}

export default Route; 