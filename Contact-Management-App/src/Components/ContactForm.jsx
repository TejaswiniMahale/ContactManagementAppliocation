import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
    const navigate = useNavigate();

    const dispatch = useDispatch()

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        mob: "",
        currentTarget: "active"
    })

    const handleChange = (e) => {
        debugger

        setForm({
            ...form,
            [e.target.name]: e.currentTarget.value
        })


    }




    function handleSave() {
        dispatch(addContact(form))
        navigate("/");
    }

    return (
        <div className="w-1/2 mx-auto my-4 pt-16 border p-6 mt-40 rounded border-cyan-900">
            <h2 className="text-2xl font-bold mb-4 text-cyan-900">Create Contact</h2>
            <div className="mb-4">
                <label className="block mb-2 text-left text-cyan-900" htmlFor="first-name">
                    First Name
                </label>
                <input
                    className="w-full border border-cyan-900 p-2 rounded-md"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-left text-cyan-900 mb-2" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="w-full border border-cyan-900 p-2 rounded-md"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-left text-cyan-900 mb-2" htmlFor="last-name">
                    Mobile Number
                </label>
                <input
                    className="w-full border border-cyan-900 p-2 rounded-md"
                    id="last-name"
                    type="number"
                    name="mob"
                    min='10'
                    max='10'
                    value={form.mob}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-left text-cyan-900 mb-2" htmlFor="status">
                    Status
                </label>

                <div class="flex items-center mb-4">
                    <input  
                    value={'active'}
                    onChange={handleChange}        
                    id="default-radio-1" type="radio" 
                    name="status" 
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active</label>
                </div>
                <div class="flex items-center">
                    <input  
                    value={"inactive"}
                    onChange={handleChange} 
                     id="default-radio-2" 
                    type="radio" 
                    name="status" 
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inactive</label>
                </div>


            </div>
            <button
                className="hover:shadow-lg bg-cyan-800 border rounded text-slate-50 hover:text-cyan-900 hover:bg-white hover:border-cyan-900 p-2 text-xl"
                onClick={handleSave}
            >
                Save Contact
            </button>
        </div>
    );
}


export default ContactForm