import AppStyle from  './../App.module.scss';
import { useState, useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames/bind';


const TestPage = ()=>{

    
  const cx = classNames.bind(AppStyle);

 


  const todosData = [
    {id:0, text:'미숫가루 타주기', done : true},
    {id:1, text:'에어컨 끄고 환기 시키기', done : false},
    {id:2, text:'리모컨 다 제자리에 넣기', done : false},
    {id:3, text:'이불 정리하고 애기들 눕히기', done : false}
];

  const [todoColor, setTodoColor] = useState();
  const [todos, setTodos] = useState(todosData);

  const [testObj, setTestObj] = useState({
    title :'test',
    date:'20230727'
  })

  const [testArr, setTestArr] = useState(
    [{name : 'jane', age: '20'},{name : 'paul', age: '26'}]
  )

  const [testArr2, setTestArr2] = useState(

    [{time: 'night', status :'good'}, {time: 'morning', status :'soso'}]
  )

  const testOnclick = ()=>{
    setTestObj((prev)=>{ 
      return {...prev, title : 'tesrt2' }
    })

    console.log("testOnclick" + testObj);
  }

  const testAerOnclick = ()=>{ 
    setTestArr((prev)=>{
        return [...prev, {name : 'heizle', age: '21'}]
    });
    console.log("testAerOnclick" +testArr);

  }

  const testArrModify =()=>{
  
  
  }

  
// 컬러 선택 div
function DivColor ({color}){ 
    return (  
        <div className={AppStyle["div-color"]} style={{'backgroundColor':color}}>{color}</div>
    )
  } 
  
  
  // 상품 입력 input 
  function InputTodo ({addTodoListHandler}){ 
  
      return ( 
          <>
            {/* <label htmlFor='todoInput'>상품</label> */}
            <input placeholder='' id="todoInput" type="todoInput" className={AppStyle['input-todo']}></input>
            <button onClick={ 
              (e)=>{
           
                //addTodoListHandler()
              }
            }>확인</button>
  
          </>
          
      )
  }

  
  // 새로운 todoList 추가 시
  const addTodoListHandler = (val)=>{ 



  }
  // todoLIst 완료 버튼 클릭 시 
  const doneClickHandler = useCallback((val)=>{ setTodos(val)}, [todos]);


  const [store, setStore] = useState(
    [{item :'butter', stock : 2, id:'butter123'} , {item :'cheeze', stock : 1, id:'cheeze123'}, 
     {item :'milk', stock : 7, id:'milk123'}]
  )


  const fncStockChange =(val, type)=>{ 
    
      let temp = [...store];
      let idx = store.findIndex((item,idx)=>{ return  item.id === val});
      temp[idx].stock =  type ==='plus' ?  ++temp[idx].stock : --temp[idx].stock;
      setStore(temp);
      
  }
  
    return ( 

        <div className={AppStyle['div-container']}>
          
          <h2> </h2>
          <button onClick={testOnclick}>추가 테스트</button>
          <button onClick={testAerOnclick}>배열 추가 테스트2</button>
          <button onClick= {testArrModify}>수정 테스트 </button>

          <ul>
          {
            store.map((obj, idx)=>{ 
                return (
                      <li key={idx}>
                        <span>{obj.item}</span>
                        <span>{obj.stock}</span>
                        <button onClick={(e)=>{fncStockChange(obj.id, 'plus')}}>+</button>
                        <button onClick={(e)=>{fncStockChange(obj.id, 'minus')}}>-</button>
                      </li>         
                )
            })
          }

          </ul>
          

          <DivColor color={'lightgreen'}></DivColor>
          <DivColor color={'pink'}></DivColor>
          <DivColor color={'skyblue'}></DivColor>

          <InputTodo addTodoListHandler ={addTodoListHandler}></InputTodo>
          <TodoList todos={todos} cx={cx} doneClickHandler={doneClickHandler}></TodoList>


        </div>
    )

}



// 상품 출력 list 
function TodoList ({todos ,cx, doneClickHandler}){ 

    return ( 
        <ul>
            { 
            todos.map((item,idx)=>{
                    return ( 

                      <li key={item.id} className={cx('li-todos',item.done === true ?'li-done' : 'li-todo')}>
                        <span>{item.text}</span>
                        <button 
                          // className={AppStyle['li-button']}
                          className={cx('li-button', item.done === true ? 'button-done' : 'button-todo')}
                          onClick={(e)=>{ 
                     
                            const findIdx = todos.findIndex((e)=>{ return item.id === idx});
                            let copyArr = [...todos];
                            copyArr[findIdx].done = !todos[findIdx].done;
                            doneClickHandler(copyArr);
                          }}
                        >
                            {item.done==true? '다 했음':"할 거야"}
                        </button>
                      </li>
                    )
              })
            }

        </ul>
    )

}

export default TestPage;