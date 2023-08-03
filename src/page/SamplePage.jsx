import Style from './SamplePage.module.scss';
import { ReactComponent as ArrowDown} from './../styles/images/icon-arrow-down12.svg'
import { ReactComponent as ArrowUp } from './../styles/images/icon-arrow-up-24.svg'
import { useState, useRef, useCallback, useEffect } from 'react';
import React, { cloneElement, Children } from 'react'; 
import classNames from 'classnames/bind';

const SamplePage =()=>{ 
    
    const parentInput = useRef();
    const cx = classNames.bind(Style);

    // 탭 헤더
    const [activeTab, setActiveTab] = useState(0);
    const fncTabClick = (idx)=>{
       
        setActiveTab(idx);
       // setCheckedList([]);
    }

    // 알아두세요 
    const [noticeShow, setNoticeShow] = useState(false);
    const handleNoticeOnclick = ()=>{ 
        setNoticeShow(!noticeShow);
    }


    const [checkedList, setCheckedList] = useState([]);
    //const [isAllchecked,setIsAllChecked] = useState(false);
    

    // useEffect((prev)=>{
    //     debugger;
    //     if(prev !== activeTab){
    //         setCheckedList([]);
    //     }
    // },[activeTab])
    //전체선택
    const handleOnchangeAll = useCallback((e)=>{ 
        if(!e.target.checked){
            setCheckedList([]);
        } else {
            let temp =[];
             data.map((e)=>{temp.push(e.acctNo)});
            setCheckedList(temp);
        }
    },[checkedList]);
    

    //개별선택
    const handleOnchangeEach = useCallback((e)=>{
        let acctNo = e.target.getAttribute("acctno");

        if(e.target.checked){
            setCheckedList((prev)=>[...prev,acctNo]); 
        } else { 
            setCheckedList(checkedList.filter((el)=> el!== acctNo))
        }   
     },[checkedList]); 

    const tabData = [
        {title :'등록 출금 계좌', active: true,},
        {title :'미등록 출금 계좌', active: false}
    ];

    const registData = [
        {title : '[신한] TOP 직장인플랜 저축예금', acctNo : '110-251-5456513' },
        {title : '[신한] 청년 입출금 통장', acctNo : '110-212-512013' },
        {title : '[신한] 외화 체인지 예금', acctNo : '180-006-794584' },
        
    ];

    const unRegistData = [
        {title : '[신한] 쏠편한 입출금 통장', acctNo : '110-271-5454563 ' },
        {title : '[신한] 내 마음대로 입출금 통장', acctNo : '110-206-214584 ' }
    ]

    const data = activeTab===0?  registData : unRegistData;
    return (
            <div className={Style["container"]}>
                
            <TabHeader data={tabData} fncTabClick={fncTabClick} activeTab={activeTab}></TabHeader>
                <div className={Style["allCheck"]}>
                    <span>전체선택</span>
                    <input type="checkbox"
                        checked = {data.length === checkedList.length}
                        onChange={(e)=>{handleOnchangeAll(e)}}
                    ></input>
                </div>
               
                <TabWrapper activeTab={activeTab}>
                    <TabPanel>
                        {/* <AccountBoard checkedList={checkedList} data={data} onChange={handleOnchangeEach}></AccountBoard> */}
                        <AccountBoard checkedList={checkedList} data={
                            data.map((obj,idx)=>{ 
                                return {
                                    checked: checkedList.includes(obj.acctNo),
                                    title  : obj.title,
                                    acctNo : obj.acctNo
                                }
                            })
                        } 
                      
                        onChange={handleOnchangeEach}></AccountBoard>
                    </TabPanel>
                    <TabPanel>
                         <AccountBoard checkedList={checkedList} data={
                            data.map((obj,idx)=>{ 
                                return {
                                    checked: checkedList.includes(obj.acctNo),
                                    title  : obj.title,
                                    acctNo : obj.acctNo
                                }
                            })
                         } onChange={handleOnchangeEach}></AccountBoard>
                    </TabPanel>
                </TabWrapper>    
                <Notice checkedList={checkedList} noticeShow={noticeShow} handleNoticeOnclick={handleNoticeOnclick}/>
             
              
                <button disabled ={checkedList.length>0 ? false : true}
                className={Style["btn"] +(checkedList.length>0 ? ` ${Style["btnActive"]}`:"")}
                >
                    {activeTab===0 ? '등록해지': '등록'}</button>
            </div>  
    )
}


function TabHeader ({data, fncTabClick,activeTab}){ 

    const onClickTab =(idx)=>{ 
        fncTabClick(idx)
    }
    return ( 
        <div style={{width:'100%', border:'10px', height:'40px'}}>
            <ul 
                className={Style["TabHeader-ul"]}
            >
                {
                    data.map((obj, idx)=>{ 
                        
                        return (
                            <li 
                                //className={activeTab===idx ? 'TabHeader-li-active' : 'TabHeader-li'}
                                //className = {Style["TabHeader-li"]  +  (activeTab ===idx && Style["active"])} 
                                 //className={`${activeTab ===idx ? 'tabLi-active':'' } tabLi`}
                                className= { activeTab ===idx? Style["TabHeader-li-active"] : Style["TabHeader-li"]}
                                key ={idx} 
                                onClick={()=>{onClickTab(idx)}}
                            >{obj.title}</li>
                        )
                    })
                }
            </ul>
        </div>
        

    )
}
function AccountBoard({data, onChange, isAllchecked, checkedList}){

    const [arr, setArr] = checkedList;
    

    return (
        <div className={Style["AccountBoard-container"]}>
                
                {   
                    data.map((obj,idx)=>{
                        return (
                            <div className={Style["AccountBoard-div"]} key={idx}>
                                <p>{obj.title}</p>
                                <span className={Style["AccountBoard-span"]}>{obj.acctNo}</span>
                                <input className={Style["AccountBoard-input"]} 
                                       type="checkbox"
                                       //checked ={()=>{arr.inCludes(obj.acctNo)}}
                                       checked ={obj.checked}
                                       onChange={(e)=>{onChange(e)}}
                                       acctno = {obj.acctNo}
                                ></input>
                            </div>
                        )
                    })
                }
            
                
        </div>   
    )
}

// 알아두세요
function Notice ({noticeShow, handleNoticeOnclick, checkedList}){

    const noticeOnclick = ()=>{ 
        handleNoticeOnclick()
    };
    return (
          
            <div className={noticeShow===true?Style["Notice-div"] :Style["Notice-div-hide"]}>
            <div className={Style["Notice-p"]}  onClick={noticeOnclick}>
                <span >알아두세요</span>
                {
                    noticeShow === true ?  (<ArrowUp className={Style["ArrowUp"]} />) : 
                                           (<ArrowDown className={Style["ArrowDown"]} />)
                }
            </div>
            <div>
                {
                    noticeShow === true ?  
                    (
                        <ul className={Style[""]}>
                            <li>출금계좌를 등록하시면 등록하신 계좌에서 출금할 수 있습니다.</li>
                            <li>실명 미확인 계좌는 출금등록을 할 수 없습니다.</li>
                            <li>타행 계좌 등록 시 ARS 추가 검증이 이루어질 수 있습니다.</li>
                        </ul>
                    )
                    
                 : null 
                }
            </div>
            </div>
    )

}

function TabWrapper ({children, activeTab,id}){ 

    const act = activeTab;
    const temp  = Children.map(children, (el, idx)=>{ 
          return cloneElement(el, {
              'active' : idx ===act,
          });
    });

    return <div>{temp}</div>

}

function TabPanel ({ children, activeTab = 0, id, active }){ 

    return ( 
        <div
            className=""
            role="tabpanel"
            id ={id}
            hidden={!active}
        >
            {active && children}
      </div>
    )

}

export default SamplePage;


