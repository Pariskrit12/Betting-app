import { createSlice } from "@reduxjs/toolkit"


//current state
const initialState={
    user:null,
    isAuthenticated:false,
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user=action.payload //state after login
            state.isAuthenticated=true //Is authenticated after login
        },
        logout:(state,action)=>{
            state.user=null
            state.isAuthenticated=false
        }
    }
});

export const{login,logout}=authSlice.actions;
export default authSlice.reducer;