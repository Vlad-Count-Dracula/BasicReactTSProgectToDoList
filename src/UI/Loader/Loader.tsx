import s from './Lader.module.css';

const Loader = () => {
   return (
      <div className={s.position}>
         <div className={s.ring}></div>
      </div>
   )
}

export default Loader;