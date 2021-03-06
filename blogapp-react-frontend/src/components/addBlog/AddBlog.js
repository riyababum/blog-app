import React,{ useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddBlog.css';

function AddBlog(props) {

    const navigate = useNavigate();

    const [blog, setBLog] = useState({
        name:'',
        title:'',
        description:''
    });

    const handleChange = (e)=>{
        const {name,value} =e.target;
        setBLog({...blog, [name]:value});
    }

    const handleSubmit = async (e)=>{
        axios.post(`/api/article/add-blog`,blog)
            .then(res => {
                alert(res.data.message);
                setBLog({name: '',
                title:'',
                description:''})
            });
            navigate('/article-list');
    }
    

    return (
        <div>
            <form id='edit'>
                <label>Blog Name:</label><br/>
                <input type='text' name='name' onChange={handleChange} ></input>
                <br/><br/>

                <label>Title:</label><br/>
                <input type='text' name='title' onChange={handleChange} ></input>
                <br/><br/>
                
                <label>Description:</label><br/>
                <textarea rows='10' cols='50' name='description' type='text' onChange={handleChange} ></textarea>
                <br/><br/>

                <button onClick={handleSubmit}>Add</button><br/>
            </form>
        </div>
    );
}

export default AddBlog;

