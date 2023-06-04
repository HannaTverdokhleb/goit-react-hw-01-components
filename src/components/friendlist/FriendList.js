import PropTypes from 'prop-types';
import FriendListItem from 'components/friendlist/FriendListItem';
import style from 'components/friendlist/FriendList.module.css';

const FriendList = ({friends}, children) => {
    return (
        <ul className={style.friendList}>
            {friends.map(friend => {
                return (
                    children= <FriendListItem friend={friend} key={friend.id} />
                )
            })}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array
}

export default FriendList;