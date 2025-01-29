// import './buttons.css'

export function Button({ children, color }) {
  const btnStyle = {
    backgroundColor: color,
    borderRadius: '30px',
    lineHeight: 1,
    padding: '12px 20px'
  }
  //

  return <button style={btnStyle}>{children}</button>
}
