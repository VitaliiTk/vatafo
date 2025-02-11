// import './buttons.css'

export function Button({ color, className = '', onClickHandler, children }) {
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
    <button onClick={onClickHandler} className={className} style={btnStyle}>
      {children}
    </button>
  )
}
