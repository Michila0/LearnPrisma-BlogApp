'use client'
import ReactTextareaAutosize from "react-textarea-autosize";
import {ChangeEvent, FormEvent, useState} from "react";
import {FormData} from "@/types/blog";
import {useSession} from "next-auth/react";
import axios from "axios";

const inputClass = 'w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300';

const FormNewPost = () => {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        content: '',
    })

    const {data}= useSession();
    console.log(data?.user);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // console.log(formData)
        try {
            const response = await axios.post('api/posts', formData)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <form className='max-w-md mx-auto p-4' onSubmit={handleSubmit}>
            <div className='mb-4'>
                <input
                    type='text'
                    className={inputClass}
                    placeholder='Enter the title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div className='mb-4'>
                <ReactTextareaAutosize
                    minRows={5}
                    name='content'
                    placeholder='Enter the content'
                    className={inputClass}
                    value={formData.content}
                    onChange={handleChange}
                />
            </div>
            <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400'>
                Submit
            </button>
        </form>
    );
};

export default FormNewPost;