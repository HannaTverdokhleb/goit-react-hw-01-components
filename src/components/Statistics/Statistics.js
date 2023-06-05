import PropTypes from 'prop-types';
import style from 'components/Statistics/Statistics.module.css';

const Statistics = ({title, stats}) => {
    return (
        <section className={style.statistics}>
            {title && <h2 className={style.title}>{title}</h2>}
            <ul className={style.statList}>
                {stats.map((stat) => {
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
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    )
}

export default Statistics;