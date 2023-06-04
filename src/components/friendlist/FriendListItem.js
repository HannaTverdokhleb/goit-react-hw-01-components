import PropTypes from 'prop-types';
import style from 'components/friendlist/FriendListItem.module.css';


const FriendListItem = ({friend}) => {
    return (
        <li className={style.item}>
            <span className={style.status} style={{background:friend.isOnline? "green" : "red"}}>{friend.isOnline}</span>
            <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
            <p className="name">{friend.name}</p>
        </li>
    )
};

export default FriendListItem;

FriendListItem.propTypes = {
    friend: PropTypes.object
}

