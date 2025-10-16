import React from 'react'

const RegisterUser = () => {
  return (
    <div className='w-full max-w-md p-6 bg-white rouded-xl shadow-lg'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Criar Usuário</h2>
        <form className='space-y-4'>
            <div>
                <label htmlFor="emailRegisterUser" className='block text-sm font-medium mb-1'>Email:</label>
                <input 
                type="email" 
                id='emailRegisterUser'
                value=''
                required
                className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 
                focus:ring-blue-500'
                />
                <label htmlFor="passwordRegisterUser" className='block text-sm font-medium mb-1'>Senha</label>
                <input 
                type="password" 
                id='passwordRegisterUser'
                value=''
                required
                minLength={8}
                className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 
                focus:ring-blue-500'
                />
            </div>
            <div>
            <label htmlFor="confirmPassword" className='block text-sm font-medium mb-1'>Confirmar Senha</label>
                <input 
                type="password" 
                id='confirmPassword'
                value=''
                required
                minLength={8}
                className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 
                focus:ring-blue-500'
                />
                {/* validação aqui */}
            </div>
            <div className='flex justify-center'>
              <button
              type='submit'
              disabled=""
              className='border rounded-2xl p-2 cursor-pointer hover:bg-gray-200'
              >
                Criar Usuário
              </button>
            </div>
        </form>
    </div>
  )
}

export default RegisterUser