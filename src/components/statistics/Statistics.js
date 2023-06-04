import PropTypes from 'prop-types';
import style from 'components/statistics/Statistics.module.css';

const Statistics = (props) => {
    return (
        <section className={style.statistics}>
            {props.title ? <h2 className={style.title}>{props.title}</h2> : <></>}
            
            <ul className={style.statList}>
                {props.stats.map((stat) => {
                    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
                    return ( 
                        <li className={style.item} key={stat.id} style={{background:randomColor}}>
                            <span className={style.label}>{stat.label}</span>
                            <span className="percentage">{stat.percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.string,
}

export default Statistics;