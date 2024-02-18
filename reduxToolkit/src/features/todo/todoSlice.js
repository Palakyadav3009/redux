import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos : [
        {id:1 ,text :"palak yadav"}
    ]
}

//stepss------------------------------------------------- IN reducer we have to do this steps

export  const todoSlice =createSlice({  //1 
    name :'todo',
    initialState,
    reducers:{                             // making reducer which will be used in dispatch and in selector
        addTodo : (state,action) =>{
            const todo ={
                id :nanoid(),
                text: action.payload     // values taken from action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) =>{
            state.todos= state.todos.filter((todo) => 
            todo.id!==action.payload)
        },
    },
})

//addtodo and removetodo hm inhi k through state ko update krege

export const {addTodo,removeTodo}= todoSlice.actions; // 2nd step individual export krna padega inhe bhi kuki ye components m kaam ayge

export default todoSlice.reducer; // 3rd step we have export the reducer always whaterver we are building