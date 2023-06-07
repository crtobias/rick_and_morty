import style from './About.module.css';

const About = () => {
    return (
        <div className={style.about}>
            <h2 className={style.hola}>Mas sobre mi</h2>
            <h4 className={style.hola}>en proceso de ser programador</h4>
            <div className={style.cajata}>
            <p className={style.p}><a href=""><h3 className={style.hola}>gmail</h3></a></p>
            <p className={style.p}><a href=""><h3 className={style.hola}>linkedin</h3></a></p>
            <p className={style.p}><a href=""><h3 className={style.hola}>github</h3></a></p>
            <p className={style.p}><a href=""><h3 className={style.hola}>instagram</h3></a></p>
            </div>
            <br />
            <img src="yo.jpg" alt="" />

        </div>
    )
}


export default About;