import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/login.css"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [emailWarning, setEmailWarning] = useState("")

  useEffect(() => {
    if (
      email &&
      !email.includes(".edu.ec") &&
      !email.includes("@epn.edu.ec")
    ) {
      setEmailWarning("💡 Recomendamos usar un correo universitario")
    } else {
      setEmailWarning("")
    }
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      username: email,
      password,
      remember_me: rememberMe,
    }

    console.log("Login data:", data)
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Iniciar Sesión</h2>
        <p className="subtitle">Bienvenido de vuelta a MarketU</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Correo Universitario *</label>
            <input
              type="email"
              className="form-input"
              placeholder="tu.correo@universidad.edu.ec"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailWarning && (
              <div className="email-warning">{emailWarning}</div>
            )}
          </div>

          <div className="form-group password-group">
            <label>Contraseña *</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-input"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🔒" : "👁️"}
            </span>

            <div className="password-actions">
              {/* esto puede seguir siendo <a> porque normalmente va a Django */}
              <a href="#" className="link">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <div className="form-group remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label>Recordar mi sesión</label>
          </div>

          <button className="btn-login">Iniciar Sesión</button>
        </form>

        <div className="register-link">
          <p>
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="link">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
