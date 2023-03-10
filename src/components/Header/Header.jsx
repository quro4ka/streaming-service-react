import { Link } from 'react-router-dom'
import cn from 'classnames'
import styles from './Header.module.scss'
import { Button } from '../../ui/Button/Button'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setPopup } from '../../redux/slices/popupSlice'

export const Header = () => {
  const { email } = useSelector((state) => state.user.user)
  const popup = useSelector((state) => state.popup.popup)
  const dispatch = useDispatch()
  const [scroll, setScroll] = useState()

  const handleHeader = () => {
    if (window.scrollY > 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const handlePopup = () => {
    dispatch(setPopup(!popup))
  }

  useEffect(() => {
    document.addEventListener('scroll', handleHeader)
  })

  return (
    <div className={cn(styles.header, scroll && styles.header__scroll)}>
      <div className={styles.header__left}>
        <h1 className={styles.header__logo}>
          <Link to="/"> Streaming Service</Link>
        </h1>
        <h1 className={styles.header__logo_adaptive}>
          <Link to="/">Streaming</Link>
        </h1>
      </div>
      <div className={styles.header__right}>
        {email ? (
          <>
            <div onClick={handlePopup} className={styles.user}>
              <svg
                id="Layer_1"
                version="1.1"
                viewBox="0 0 128 128"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M64.281,84.291c-15.54,0-28.184-12.643-28.184-28.184V42.196c0-15.542,12.644-28.186,28.184-28.186  c15.542,0,28.186,12.644,28.186,28.186v13.911C92.467,71.648,79.823,84.291,64.281,84.291z M64.281,18.01  c-13.335,0-24.184,10.85-24.184,24.186v13.911c0,13.334,10.849,24.184,24.184,24.184c13.336,0,24.186-10.85,24.186-24.184V42.196  C88.467,28.86,77.617,18.01,64.281,18.01z" />
                <path d="M102.332,114.01h-76.51c-6.518,0-11.819-5.303-11.819-11.82v-8.734c0-3.857,1.953-9.027,11.26-11.738l11.443-3.168  c1.067-0.291,2.167,0.33,2.461,1.395s-0.33,2.166-1.395,2.461l-11.417,3.16c-8.353,2.434-8.353,6.541-8.353,7.891v8.734  c0,4.313,3.508,7.82,7.819,7.82h76.51c4.312,0,7.819-3.508,7.819-7.82v-8.734c0-3.643-2.816-6.299-8.372-7.896l-10.892-3.045  c-1.064-0.297-1.686-1.4-1.388-2.465c0.298-1.063,1.398-1.689,2.464-1.387l10.906,3.049c9.326,2.682,11.281,7.867,11.281,11.744  v8.734C114.151,108.707,108.85,114.01,102.332,114.01z" />
              </svg>
            </div>
          </>
        ) : (
          <>
            <Link to="/register">
              <Button mr={20} red width={100}>
                sign up
              </Button>
            </Link>
            <Link to="/login">
              <Button transparent width={100}>
                sign in
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
