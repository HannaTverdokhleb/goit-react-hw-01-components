import PropTypes from 'prop-types';
import style from 'components/FriendListItem/FriendListItem.module.css';


const FriendListItem = ({friend}) => {
    return (
        <li className={style.item}>
            <span className={style.status} style={{background:friend.isOnline? "green" : "red"}}>{friend.isOnline}</span>
            <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
            <p className="name">{friend.name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired
}

export default FriendListItem;

