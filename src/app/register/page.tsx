import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="w-full max-w-md mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
            <h1 className="text-2xl mb-4">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email:</label>
                    <input type="email" {...register('email', { required: true })} />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" {...register('password', { required: true })} />
                    {errors.password && <span>This field is required</span>}
                </div>
                <button type="submit">Register</button>
            </form>
            <div className="flex justify-end mb-4">
                <button type="button" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors dark-mode-toggle" title="Toggle Dark Mode">
                    <i className="fa-solid fa-moon"></i>
                </button>
            </div>
        </div>
    );
};

export default Register;