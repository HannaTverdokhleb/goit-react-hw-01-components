import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics'
import FriendList from 'components/friendlist/FriendList';
import FriendListItem from 'components/friendlist/FriendListItem';
import TransactionHistory from 'components/transactions/TransactionHistory';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions';



export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}>
        <FriendListItem />
      </FriendList>
      <TransactionHistory transactions={transactions} />
    </>
  );
};

