import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useState, useEffect } from "react";
import axios from "axios"

const Home = ({type}) => {

const [lists , setLists] = useState([]);
const [genre , setGenre] = useState(null);


useEffect(()=>{
  const getRandomLists = async()=>{
     try{
          const res = await axios.get(`lists${type ? "?type=" + type :""}${genre ? "&genre=" + genre :""}`,{
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmM4NmQxNzNhYWFhMzc3N2FkZGNlZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDc5MDM5NCwiZXhwIjoxNjgxMjIyMzk0fQ.sJ1qFmp8Q9TX_TW9s81m9Pe13WfFKIVHGAPL_k1Vl9I "
            }
          } )
          // console.log(res.data)
          setLists(res.data);
     }
     catch(err){
      console.log(err);
     }
  }
  getRandomLists();
} ,[type , genre]);



  return (
    <div className="home">
       <Navbar/>
      <Featured type={type}/>
      {lists.map((list)=>{
        return <List list={list}/>
        
      })}
       

     
    </div>
  );
};

export default Home;