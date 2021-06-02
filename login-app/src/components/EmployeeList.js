import React,{useEffect , useState} from 'react';
import Logout from './Logout';
import './EmployeeList.scss';
import { useDispatch } from 'react-redux';
import { logout } from '../Features/userSlices';

const EmployeeList = (props) => {

  const dispatch = useDispatch();
  const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logout({
          
      }))
  }


    return (
      
        <section className="table__wrapper">
          <p className="user__name"><h2>Hello, <span className = "user">hruday</span></h2></p>
            <div className="right__wrapper">
              <h2>Employee List Data</h2>
                  <div className = "table__container">
                      <table className = "table table-stripped">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Phone No</th>
                          </tr>
                        </thead>
                        <tbody id = "data">
                          {/* <tr> */}
                            {
                              
                              props.data.map(element => 
                                {
                                  return(
                                      <tr>
                                        <td>{element.id}</td>
                                        <td>{element.name}</td>
                                        <td>{element.age}</td>
                                        <td>{element.gender}</td>
                                        <td>{element.email}</td>
                                        <td>{element.phoneNo}</td>
                                      </tr>
                                  )
                                }
                              )
                            }
                          {/* </tr> */}

                        
                        </tbody>
                      </table>

                  </div>
            </div>
            <div className = "button__wrapper">
            <button className="btn btn-lg btn-success" onClick = {(e) =>  handleLogout(e)} >Logout</button>
            </div>
        </section>
    )
}

export default EmployeeList;
