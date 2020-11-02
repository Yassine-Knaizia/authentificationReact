export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form action="/login" method="POST">
        <div>
          <div>
            <label for="email">Username or Email</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
