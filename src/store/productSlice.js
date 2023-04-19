import { createSlice } from "@reduxjs/toolkit"; 

const productSlice=createSlice({

    name:'productData',
    initialState:{
        data:[],
        singleData:{},
        status:"idle"
    },
    reducers:{
        setProductData(state,actions){
            state.data=actions.payload
        },
        setSingle(state,actions){
            state.singleData=actions.payload
        },
        setStatus(state,actions){
            state.status=actions.payload
        },
    }
})

export const {setProductData,setStatus,setSingle}=productSlice.actions
export default productSlice.reducer;

export function fetchProductData(){
    return async function fetchDataThunk(dispatch,getState){
        try{
        let id = "17CEj6F1lnu_DSmV6KIVRlNzh3YjmpCbf8scO4SRCk3g";
        let url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?`;
        const res=await fetch(url);
        const txt=await res.text();
        const data=await JSON.parse(txt.substring(47).slice(0, -2));
        dispatch(setProductData(data.table.rows))
        }
        catch(err){console.log(err)}
    }
}