import { UserProps } from "../types/User";

import { useState } from "react";

import Search from "../components/Search";
import User from "../components/User";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null); // User inicia como UserProps ou Null

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
    </div>
  );
};

export default Home;
