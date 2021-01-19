import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateContact, getContact} from '../../actions/contactAction';
import shortid from 'shortid';
import {useHistory, useParams} from 'react-router-dom';

function EditContact() {
    let {id} = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector(state => state.contacts.contact);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if(contact != null){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id))
    }, [contact]);

    const onUpdateContact = (e) => {
        e.preventDefault();
        // object.assig is use for overrite
        const update_contact = Object.assign(contact, {name: name, phone: phone, email: email});
        dispatch(updateContact(update_contact));
        history.push("/");
    };

    return (
        <div className="card border-0 shadow">
           <div className="card-header">Edit Contact</div>
           <div className="card-body">
               <form onSubmit={(e) => onUpdateContact(e)}>
                   <div className="form-group">
                       <input type="text" className="form-control" placeholder="Enter Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                   </div>
                   <div className="form-group">
                       <input type="text" className="form-control" placeholder="Enter Phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                   </div>
                   <div className="form-group">
                       <input type="email" className="form-control" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                   </div>
                   <button type="submit" className="btn btn-primary">Update</button>
               </form>
           </div>
        </div>
    )
}

export default EditContact;
