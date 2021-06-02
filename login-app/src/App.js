import './App.css';
import LoginPage from './components/LoginPage'
import React,{useEffect , useState} from 'react';
import EmployeeList from './components/EmployeeList';
import { useSelector } from 'react-redux';
import { selectUser } from './Features/userSlices';
function App() {

  const user = useSelector(selectUser);
  const [data,setData] = useState(null);

  const getData=()=>{
    fetch('userData.json')
    .then((res) => res.json())
    .then((data) => {
    //   console.log('DAata:', data);
      setData(data)
    })
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      {/* {
        console.log("data----",data.user)
      } */}
      {
        user? <EmployeeList data = {data.user}/> : <LoginPage/>
      }
      {/* <LoginPage /> */}
      {/* <Logout /> */}
    </div>
  );
}

export default App;
