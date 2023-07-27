const Tab = ({data, fnc, activeIdx})=>{ 

    const tabData = [
       {id : 1,
        name : '입출금',
        active : true
       }, 
       {id : 2,
        name : '예적금',
        active : false
       }, 
       {id : 3,
        name : '외화예금',
        active : false
       },
       {id : 4,
        name : '대출',
        active : false
       }
    ]
    return (
            <div>
                <ul>
                    {
                        tabData.map((obj,idx)=>{
                            return (
                                
                                    <li key={idx}>
                                        <span>{obj.name}</span>
                                    </li>
                                

                            )
                        })
                    }
                </ul>
            </div>
    )
}
export default Tab;