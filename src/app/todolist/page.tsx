'use client'
import  TodoInput  from "@/app/todolist/TodoInput";
import  TodoItem  from "@/app/todolist/TodoItem";
import { useState, useEffect } from "react"
import type { todoDataType } from "./todo"
// import { useSetAtom } from "jotai"; 

export default function TodoList() {
  const [todos, setTodos] = useState<todoDataType[]>([]);
  const [completed, setCompleted] = useState(0);
  const [incomplete, setIncomplete] = useState(0);

  // handleSave -> newItem을 인자로 받아서. 1.setTodos 함수 실행, 2.localStorage~
  const handleSave = (newItem : todoDataType[] ) => {
    setTodos(newItem);
    localStorage.setItem("todo", JSON.stringify(newItem));

  }


  useEffect(() => {

    // const newItem = {
    //   id: 1,
    //   text: "리액트 공부",
    //   completed: false
    // }

    // //JSON 라이브러리 사용
    // // 자바스크립트 객체 -> 문자열 (setter)
    // localStorage.setItem("todo", JSON.stringify(newItem));

    //console.log(localStorage.getItem("todo"));
    // 문자열 -> 자바스크립트 객체 (getter) , string->object로 가져오기
    const local = localStorage.getItem("todo");
    const localTodos = local ? JSON.parse(local) : [];
    // 값이 numll이면 빈배열 있으면 parse


    setTodos(localTodos);

    //console.log(localStorage.getItem("todo"));
  }, []);

  //todos 가 있으므로 setC, setIc 생성가능
  // todos 여부로 
  useEffect(() => {
    
    setCompleted(todos.filter(todo => todo.completed).length);
    setIncomplete(todos.filter(todo => !todo.completed).length);
  }, [todos]);


  return (
    <div className="w-full flex flex-col justify-start items-center ">
      <h1 className="w-full max-w-3xl text-2xl font-bold text-center mt-10" >할 일 목록</h1>
      <div className="w-full max-w-3xl p-5 my-2 font-bold bg-amber-50 border border-amber-300">
        전체 : {todos.length}개 |
        완료 : {completed}개 |
        미완료 :{incomplete}개
      </div>
      <TodoInput todos={todos} setTodos={handleSave} />
      {
        // map으로 가져옴 TodoItem의 todos, setTodos        
        todos && todos.map(todo => <TodoItem key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={handleSave} />)
      }
      
    </div>
  )
}
//TodoItem 중복표기 문제 

//Atom함수들 사용 시, atomsTodo.js에 있는 (파라미터, 변수 등등 )만  사용.

// localhost로 변환
// (txt형식으로 저장 -> 객체 ) JSON.parse 사용
// props로 전달 onHandle 하면 부모 컴포넌트의 세터에서 가져오도록.
// setTodos 배열 앞으로 추가
