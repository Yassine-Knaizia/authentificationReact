import lifecycle from 'react-pure-lifecycle';
const methods = {
  componentWillMount(props) {
    console.log('I mounted! Here are my props: ', props);
  }
};
const Home =  (props) => {
  return (
    <div>
      <h1>Hi {props.user.username}</h1>
      <form action="/logout?_method=DELETE" method="POST">
        <button type="submit">Log Out</button>
      </form>
    </div>
  );
}

export default lifecycle(methods)(Home);
