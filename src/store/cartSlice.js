import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartData:[],
        amount:0,
    },
    reducers:{
        addCart(state,actions){
            state.cartData.push(actions.payload)
        },
        removeCart(state,actions){
           state.cartData= state.cartData.filter(item=>item.id!==actions.payload)
        },
        addAmount(state,actions){
            state.amount+=actions.payload;
        },
        IncCount(state,actions){
            
            state.cartData.map((val,i)=>{
                if(i===actions.payload){
                    val.count+=1;
                }
                return val;
            })
            
            
        },
        DecCount(state,actions){
            state.cartData.map((val,i)=>{
                if(i===actions.payload){
                    val.count-=1;
                }
                return val;
            })
        },

    }

})
export const {addCart,removeCart,addAmount,IncCount,DecCount}=cartSlice.actions;
export default cartSlice.reducer;