import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function CreateStudent(){
    const [id, setId] = useState('');
    const [fullname, setFullname] = useState('');
    const [cin, setCin] = useState('');
    const [result, setResult] = useState('');
    const navigate= useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/create', {id, fullname, cin, result})
        .then(res =>{
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
       
    };
    return(
        <div className='d-flex flex-column vh-100 bg-dark justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2 className='text-success'>Add Student</h2>
                    <div className='mb-2'>
                        <label>ID</label>
                        <input type="number" className='form-control'
                        onChange={e=> setId(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label>Fullname</label>
                        <input type="text" className='form-control' placeholder='Enter the fullname please '
                        onChange={e=>setFullname(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label>CIN</label>
                        <input type="number" className='form-control'  placeholder='Enter the CIN number  please '
                        onChange={e=>setCin(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Result</label>
                        <input  type="text" className='form-control'  placeholder='Enter theresult please '
                        onChange={e=>setResult(e.target.value)}/>
                    </div>
                    <button className='btn btn-success '>Submit</button>
                </form>
            </div>

        </div>
    )
}
export default CreateStudent;