import React from 'react';
import ReactDOM from 'react-dom';
// import "./index.css";
// import App from "./App";
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friend-list/FriendList';
import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';
import './styles.scss';
ReactDOM.render(
  <React.StrictMode>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    {/* <Statistics stats={statisticalData} />; */}
    <FriendList friends={friends} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals