import style from './About.module.css';

const About = () => {
    return (
        <div className={style.about}>
            <h2>Mas sobre mi</h2>
            <h4>en proceso de ser programador</h4>
            <p className={style.p}><a href=""><h3>gmail</h3></a></p>
            <p className={style.p}><a href=""><h3>ig</h3></a></p>
            <p className={style.p}><a href=""><h3>github</h3></a></p>
            <p className={style.p}><a href=""><h3>instagram</h3></a></p>
            <br />
            <img src="yo.jpg" alt="" />

        </div>
    )
}


export default About;