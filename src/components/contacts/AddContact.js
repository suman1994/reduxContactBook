import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addContact} from '../../actions/contactAction';
import shortid from 'shortid';
import {useHistory} from 'react-router-dom';

function AddContact() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const createContact = e => {
        e.preventDefault();
        const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: phone, 
            email: email,
        }
        dispatch(addContact(new_contact));
        history.push("/");
    }

    return (
        <div className="card border-0 shadow">
           <div className="card-header">Add New Contact</div>
           <div className="card-body">
               <form onSubmit={(e) => createContact(e)}>
                   <div className="form-group">
                       <input type="text" className="form-control" placeholder="Enter Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                   </div>
                   <div className="form-group">
                       <input type="text" className="form-control" placeholder="Enter Phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                   </div>
                   <div className="form-group">
                       <input type="email" className="form-control" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                   </div>
                   <button type="submit" className="btn btn-primary">Create</button>
               </form>
           </div>
        </div>
    )
}

export default AddContact;
