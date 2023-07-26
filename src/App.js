import './App.css';
import AppStyle from  './App.module.scss';
import { useState, useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames/bind';

function App() {

  const cx = classNames.bind(AppStyle);

  const todosData = [
    {id:0, text:'미숫가루 타주기', done : true},
    {id:1, text:'에어컨 끄고 환기 시키기', done : false},
    {id:2, text:'리모컨 다 제자리에 넣기', done : false},
    {id:3, text:'이불 정리하고 애기들 눕히기', done : false}
];

  const [todoColor, setTodoColor] = useState();
  const [todos, setTodos] = useState(todosData);

  
  // 새로운 todoList 추가 시
  const addTodoListHandler = (val)=>{ 



  }
  // todoLIst 완료 버튼 클릭 시 
  const doneClickHandler = useCallback((val)=>{ setTodos(val)}, [todos])


  return (
    <div className="App"> 
        <div className={AppStyle['div-container']}>
          <h2> </h2>
          <DivColor color={'lightgreen'}></DivColor>
          <DivColor color={'pink'}></DivColor>
          <DivColor color={'skyblue'}></DivColor>

          <InputTodo addTodoListHandler ={addTodoListHandler}></InputTodo>
          <TodoList todos={todos} cx={cx} doneClickHandler={doneClickHandler}></TodoList>


        </div>
        
    </div>
  );
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
              debugger;
              //addTodoListHandler()
            }
          }>확인</button>

        </>
        
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

export default App;
