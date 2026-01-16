import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/register.css"

function Register() {
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    apodo: "",
    correo: "",
    telefono: "",
    universidad: "",
    password1: "",
    password2: "",
    terms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleTelefono = (e) => {
    let value = e.target.value.replace(/\D/g, "")

    if (!value.startsWith("593")) {
      value = "593" + value
    }

    if (value.length > 12) value = value.substring(0, 12)

    setForm({ ...form, telefono: "+" + value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Register data:", form)
  }

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Crear Cuenta en MarketU</h2>
        <p className="subtitle">Únete a nuestra comunidad universitaria</p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Nombres *</label>
              <input name="nombres" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Apellidos *</label>
              <input name="apellidos" onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group">
            <label>Apodo</label>
            <input name="apodo" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Correo Universitario *</label>
            <input
              type="email"
              name="correo"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              name="telefono"
              value={form.telefono}
              onChange={handleTelefono}
            />
          </div>

          <div className="form-group">
            <label>Universidad *</label>
            <select name="universidad" onChange={handleChange} required>
              <option value="">Seleccione</option>
              <option value="epn">EPN</option>
              <option value="uce">UCE</option>
            </select>
          </div>

          <div className="form-group">
            <label>Contraseña *</label>
            <input
              type="password"
              name="password1"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirmar Contraseña *</label>
            <input
              type="password"
              name="password2"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group terms">
            <input
              type="checkbox"
              name="terms"
              onChange={handleChange}
              required
            />
            <label>Acepto los términos</label>
          </div>

          <button className="btn-register">Crear Cuenta</button>
        </form>

        <div className="login-link">
          <p>
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="link">
              Inicia Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
