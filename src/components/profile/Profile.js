import PropTypes from 'prop-types';
import style from 'components/profile/Profile.module.css';


const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats,
}) => {
    return (
        <div className={style.profile}>
            <div className={style.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={style.avatar}
                    width="100"
                />
                <p className={style.name}>{username}</p>
                <p className={style.tag}>@{tag}</p>
                <p className="location">{location}</p>
            </div>
            <ul className={style.stats}>
                <li>
                <span className={style.label}>Followers</span>
                <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                <span className={style.label}>Views</span>
                <span className="quantity">{stats.views}</span>
                </li>
                <li>
                <span className={style.label}>Likes</span>
                <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}

export default Profile;
