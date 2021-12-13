import React, { useEffect } from 'react';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import { Link } from 'react-router-dom';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';
import { LOGIN } from 'graphql/auth/mutations';
import { useAuth } from 'context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const { form, formData, updateFormData } = useFormData();

  const [login, { data: dataMutation, loading: mutationLoading, error: mutationError }] =
    useMutation(LOGIN);

  const submitForm = (e) => {
    e.preventDefault();

    login({
      variables: formData,
    });
  };

  useEffect(() => {
    if (dataMutation) {
      if (dataMutation.login.token) {
        setToken(dataMutation.login.token);
        navigate('/');
      }
    }
  }, [dataMutation, setToken, navigate]);

  return (
    <div className='flex flex-col items-center p-20 '>
      <h1 className='text-lg md:text-xl xl:text-2xl pb-2 text-white'>Proyectos Turing</h1>
      <form className='flex flex-col bg-gray-400 border-4 p-8 rounded-md mb-5' onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <Input  name='correo' type='email' label='Correo' required={true} />
        <Input name='password' type='password' label='Contraseña' required={true} />
        <ButtonLoading 
          disabled={Object.keys(formData).length === 0}
          loading={mutationLoading}
          text='Iniciar Sesión'
        />
       
      </form>
      
     
      <Link to='/auth/register'>
        <span className='text-blue-700 text-2xl '>Regístrarse</span>
      </Link>

    </div>
    
  );
};

export default Login;
