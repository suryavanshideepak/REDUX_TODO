export const addTodo=(input)=>{
     return {
     type:'ADD',
     payload:{
        id: new Date().getTime().toString(),
        input:input
     }
    }
} 
export const deleteTodo=()=>{
    return {
    type:'DELETE'
   }
} 
export const removeTodo=()=>{
    return {
    type:'REMOVE'
   }
} 
