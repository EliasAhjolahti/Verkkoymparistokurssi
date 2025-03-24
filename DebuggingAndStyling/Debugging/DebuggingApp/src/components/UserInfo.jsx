import React from 'react';

function UserInfo(props) {
  const birthYear = new Date().getFullYear().toString() - props.age + '30';
  return <p>{props.name}, age {props.age} was born in {birthYear}.</p>;
}

export default UserInfo;
