// import './buttons.css'

export function Button({ color, className = '', children }) {
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
    <button className={className} style={btnStyle}>
      {children}
    </button>
  )
}
