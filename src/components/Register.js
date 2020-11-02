export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form action="/register" method="POST">
        <div>
          <div>
            <label for="username">Username</label>
            <input type="text" id="name" name="username" required />
          </div>
          <div>
            <label for="name">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      <a href="/login">Login</a>
    </div>
  );
}
