import React,{createContext, useState,useEffect} from 'react'
const contextApp=createContext();

const ContextApi = ({children}) => {
    const [data,setData] =useState(null);
  const [cartData, setCartData] = useState([]);
  const [ShowData,setShowData]=useState(null);
  const [CartCount,setCartCount] =useState(0);
  const [Amount,setAmount] =useState(0);

    useEffect(()=>{
       // let old_id = "1t7DlsQ2BLhnZ4Fwqx4Lx-o9obPhdtorh";
        let id = "17CEj6F1lnu_DSmV6KIVRlNzh3YjmpCbf8scO4SRCk3g";
        let url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?`;
        const getData = () => {
          fetch(url)
            .then((res) => res.text())
            .then((data) => { let parseData=JSON.parse(data.substring(47).slice(0, -2));
              console.log(parseData.table.rows);
              setData(parseData.table.rows)
            });
        };
        getData();
      },[ShowData]);

      return (
        <contextApp.Provider value={{data,setData,cartData, setCartData,ShowData,setShowData,CartCount,setCartCount,Amount,setAmount}}>{children}</contextApp.Provider>
    )
  
}

export {ContextApi,contextApp};