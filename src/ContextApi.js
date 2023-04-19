import React,{createContext, useState,useEffect} from 'react'
const contextApp=createContext();

const ContextApi = ({children}) => {
  const [data,setData] =useState(null);
  const [data1,setData1] =useState(null);
  const [cartData, setCartData] = useState([]);
  const [pins,setpins]=useState(null);
  const [ShowData,setShowData]=useState(null);
  const [CartCount,setCartCount] =useState(0);
  const [Amount,setAmount] =useState(0);
  const [loginUser,setLoginUser] = useState(null);


    useEffect(()=>{
       // let old_id = "1t7DlsQ2BLhnZ4Fwqx4Lx-o9obPhdtorh";
        let id = "17CEj6F1lnu_DSmV6KIVRlNzh3YjmpCbf8scO4SRCk3g";
        let pinId="1Rbh7hL8mzaxfbzVAJ2j9MCNidXeopCelka4LAEzN10k";
        let id1="1O1_W4hmhpouHosopq7Gu7SpCP24QOrq6";
        let url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?`;
        let url1 = `https://docs.google.com/spreadsheets/d/${id1}/gviz/tq?`;
        let urlpin = `https://docs.google.com/spreadsheets/d/${pinId}/gviz/tq?`;
        const getData = () => {
          fetch(url)
            .then((res) => res.text())
            .then((data) => { let parseData=JSON.parse(data.substring(47).slice(0, -2));
              console.log(parseData.table.rows);
              setData(parseData.table.rows)
            });
            
        };
        const getData1 = () => {
          fetch(url1)
            .then((res) => res.text())
            .then((data) => { let parseData=JSON.parse(data.substring(47).slice(0, -2));
              console.log(parseData.table.rows);
              setData1(parseData.table.rows)
            });
            
        };
        const getPin=()=>{
          fetch(urlpin).then((res)=>res.text())
          .then((data)=>{let par=JSON.parse(data.substring(47).slice(0, -2));
            // console.log(par.table.rows);
            let d=par.table.rows.map((i)=>{let va=i.c[0].v; return va});

            setpins(d)
            
          });
        }
        getPin();
        getData();
        getData1();

      },[ShowData]);

      return (
        <contextApp.Provider value={{data,setData,data1,cartData,pins,setCartData,ShowData,setShowData,loginUser,setLoginUser,CartCount,setCartCount,Amount,setAmount}}>{children}</contextApp.Provider>
    )
  
}

export {ContextApi,contextApp};