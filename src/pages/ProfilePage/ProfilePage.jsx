import { Header } from './../../components/Header/Header'
import { Button } from '../../ui/Button/Button'
import styles from './ProfilePage.module.scss'
import { dataPlans } from './dataPlans'

export const ProfilePage = () => {
  return (
    <>
      <Header />
      <div className={styles.profile}>
        <div className={styles.profile__header}>Edit Profile</div>
        <div className={styles.profile__content}>
          <div className={styles.profile__left}>
            <div className={styles.avatar}>
              <svg
                enableBackground="new 0 0 50 50"
                height="50px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 50 50"
                width="50px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect height="50" width="50" />
                <path
                  d="M30.933,32.528  c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21C19.367,37.238,7.546,35.916,7,45h38  C44.455,35.916,32.685,37.238,30.933,32.528z"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className={styles.profile__right}>
            <h2 className={styles.profile__email}>quro4ka@gmail.com</h2>
            <h2 className={styles.profile__status}>Plans (Current Plans Premium)</h2>
            <div className={styles.profile__plans}>
              <p className={styles.profile__plans_date}>04/03/2023</p>
              {dataPlans.map((plan) => (
                <div className={styles.profile__plan}>
                  <div className={styles.profile__plan_left}>
                    <p className={styles.profile__plan_left_title}>{plan.title}</p>
                    <span className={styles.profile__plan_left_text}>{plan.text}</span>
                  </div>
                  <div className={styles.profile__plan_right}>
                    <Button red>Subscribe</Button>
                  </div>
                </div>
              ))}
            </div>
            <Button red>Sign out</Button>
          </div>
        </div>
      </div>
    </>
  )
}