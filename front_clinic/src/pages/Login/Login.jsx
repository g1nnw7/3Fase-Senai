import logo from '../../assets/image/logo.png'

export default function Login() {
    return (
        <>
            <div className='flex min-h-screen bg-gray-100'>
                <div className='hidden md:flex w-1/2 bg-gray-200 flex-col items-center justify-center p-8'>
                    <img src={logo} alt="clinica médica" className='mb-6' />
                </div>
                <div className='flex w-full md:w-1/2 items-center justify-center p-8'>
                    <h1>Login</h1>
                </div>
            </div>
        </>
    )
}