import { useState } from "react";

const SamplePage2 =()=>{ 

    const data = [
        {bankNm: '우리', acctNo : '110-65233-0208', disabled :false},
        {bankNm: '국민', acctNo : '110-47315-1187', disabled :false},
        {bankNm: '하나', acctNo : '181-24888-4121', disabled :false},
        {bankNm: '신한', acctNo : '310-01231-4878', disabled :false},
        {bankNm: '농협', acctNo : '180-98248-9087', disabled :false}
    ];
    
    const [checkedList, setCheckedList] = useState([]);

    // 전체 선택
    const handleOnchangeAll = (e)=>{ 
        if(!e.target.checked){
            setCheckedList([]);
        } else {
            let temp =[];
             data.map((e)=>{temp.push(e.acctNo)});
            setCheckedList(temp);
        }
    }   

    // 개별 선택
    const handleOnchangeEach = (e)=>{ 
        
        console.log(e);
        let acctNo = e.target.getAttribute("acctno");

        if(e.target.checked){
            setCheckedList((prev)=>[...prev,acctNo]); 
        } else { 
            setCheckedList(checkedList.filter((el)=> el!== acctNo))
        }   
    }

    

    return ( 
        <>
            <div>
                {checkedList}
                <div>
                    <label htmlFor="allChk">전체
                    <input type="checkbox" id="allChk"
                        onChange={(e)=>{handleOnchangeAll(e)}}
                        checked = {checkedList.length===data.length}
                        ></input>
                    </label>
                 
                </div>
                <ul>
                    {
                        data.map((obj,idx)=>{ 
                             return ( 
                                <li key={idx}>
                                    <span>{obj.bankNm}</span>
                                    <span>{obj.acctNo}</span>
                                    <input type="checkbox"
                                            onChange={(e)=>{handleOnchangeEach(e)}}
                                            acctno ={obj.acctNo}
                                            checked= {checkedList.includes(obj.acctNo)}
                                    ></input>
                                </li>
                             )
                        })
                    }
                </ul>
                <button disabled={checkedList.length==0}>확인</button>
            </div>
            <div>
                <p>등록하시겠습니까?</p>
            </div>
        </>
    )

}

export default SamplePage2;