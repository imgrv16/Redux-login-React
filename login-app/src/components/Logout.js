import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../Features/userSlices';
import './Logout.scss';

const Logout = () => {

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout({
            
        }))
    }

    return (
        <section className="logout__wrapper">
            <h3>Hello, <span className = "user__name">Grv</span></h3>
            <button className="btn btn-sm btn-success" onClick = {(e) =>  handleLogout(e)} >Logout</button>
        </section>
    )
}

export default Logout
