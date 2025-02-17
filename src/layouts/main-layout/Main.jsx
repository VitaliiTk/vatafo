import './main.css'

export function Main({ children }) {
  return (
    <div className="main">
      <section className="section">
        <div className="container">{children}</div>
      </section>
    </div>
  )
}
