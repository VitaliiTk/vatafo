// import './buttons.css'

export function Button({ children, color, onHandleClick }) {
  //
  // css styles
  const btnStyle = {
    backgroundColor: color,
    borderRadius: '30px',
    lineHeight: 1,
    padding: '12px 20px'
  }
  //

  return (
    <button onClick={onHandleClick} style={btnStyle}>
      {children}
    </button>
  )
}
