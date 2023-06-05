import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import style from 'components/Friendlist/FriendList.module.css';

const FriendList = ({friends}) => {
    return (
        <ul className={style.friendList}>
            {friends.map(friend => {
                return (
                    <FriendListItem friend={friend} key={friend.id} />
                )
            })}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired
}

export default FriendList;