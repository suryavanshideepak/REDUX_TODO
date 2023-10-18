const initialData={
    list : []
}
const todoReducer=(state=initialData,action)=>{
    switch(action.type){
        case 'ADD':
            const {id,input}= action.payload
        return {
            ...state,
            input:[...state.list,{id:id,input:input}]
        }  
        default : return state
    }
}
export default todoReducer;