import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, logout } = useAuth0();

  console.log(isAuthenticated)
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome {user.name}!</h1>
          <img src={user.picture} alt="" />
          <p>Email: {user.email}</p>
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Profile;
