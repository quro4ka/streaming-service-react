import cn from 'classnames'
import styles from './Button.module.scss'

export const Button = ({ children, mr, red, transparent, width, onClick }) => {
  let btnStyles = styles.btn

  if (red) {
    btnStyles = cn(styles.btn, styles.btn_red)
  }

  if (transparent) {
    btnStyles = cn(styles.btn, styles.btn_transparent)
  }

  return (
    <button onClick={onClick} style={{ marginRight: mr, width: width }} className={btnStyles}>
      {children}
    </button>
  )
}
