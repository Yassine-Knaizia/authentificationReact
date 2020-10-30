export default function Home(props) {
  return (
    <div>
      <h1>Hi {props.name}</h1>
      <form action="/logout?_method=DELETE" method="POST">
        <button type="submit">Log Out</button>
      </form>
    </div>
  );
}
