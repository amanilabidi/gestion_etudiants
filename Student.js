import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Student(){
    const [student, setStudent] = useState([]); 
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res=> setStudent(res.data))
        .catch(err => console.log(err));
    },[]);
    const handleDelete = async (id)=>{
        try{
            await axios.delete('http://localhost:8081/student/'+id)
            window.location.reload()

        }catch(err){
            console.log(err);
        }

    }

    return(
        <div className='d-flex flex-column vh-100 bg-dark justify-content-center align-items-center'>
            <h1 className='text-warning mb-2'>student results management</h1>
            <div className='w-50 bg-white rounded p-3'>
                
                <Link to ="/create" className='btn btn-warning m-2'>Add Student</Link>
                <table className='table '>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>fullname</th>
                            <th>CIN</th>
                            <th>result</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                
                <tbody>
                    {
                        student.map((data, i)=>(
                            <tr key={i}>
                                <td>{data.ID}</td>
                                <td>{data.fullname}</td>
                                <td>{data.CIN}</td>
                                <td>{data.result}</td>
                                <td>
                                    <Link  to ={`update/${data.ID}`} className='btn btn-primary m-1'>Update</Link>
                                    <button className='btn btn-danger m-1'  onClick={ e => handleDelete(data.ID)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
                </table>
            </div>
  
        </div>
      
    )
};
export default Student;