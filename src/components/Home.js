const Home = ({ user, changeUser }) => {
  const handleClick = async () => {
    let response = await fetch("/api/logout", {
      method: "DELETE",
    });
    if (response.status === 204) {
      changeUser(null);
    } else {
      console.log("Failed to logout");
    }
  };
  return (
    <div>
      <h1>Hi {user.username}</h1>
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};

export default Home;
