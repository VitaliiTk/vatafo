export default function Section({ title, children }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section__wrapper">
          <h2 className="title">{title}</h2>
          <div className="section__content">{children}</div>
        </div>
      </div>
    </section>
  )
}
