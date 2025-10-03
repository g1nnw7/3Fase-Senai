import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import axios from "axios"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //contexto
    const { login } = useAuth()

    //função de validação do login

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.get('http://localhost:3000/users', {
                params: { email, password }
            })
            if(res.data.length === 0){
                console.log("usuario não encontrado")
            }
        }
        catch {

        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 
                        focus:ring-blue-500"/>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                        minLength={8}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2
                        focus:ring-blue-500"
                    />

                </div>
                <button
                    type="submit"
                    className="w-full bg-cyan-700 text-white p-2 rounded-lg hover:bg-cyan-800
               transition-colors">Entrar</button>
            </form>
            <div className="flex justify-between mt-4 text-sm">
                <button>Esqueceu sua senha?</button>
                <button>Criar conta</button>
            </div>
        </div>
    )
}

export default LoginForm