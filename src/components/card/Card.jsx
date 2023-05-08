import style from './card.module.css'
import { Link } from 'react-router-dom';


export default function Card(props) {
   return (
      <div className={style.card}>
         <div className={style.circle}></div>
         <div className={style.circle}></div>
         <div className={style.cardin}></div>
         <button onClick={()=>{props.onClose(props.id)}}>X</button>
         <Link to={`/detail/${props.id}`} >
            <h3 className="card-name">{props.name}</h3>
         </Link>
         <img src={props.image} alt='' class={style.foto} />
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
      </div>
   );
}
