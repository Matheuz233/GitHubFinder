import { UserProps } from "../types/User";

import { MdLocationPin } from "react-icons/md";

import { Link } from "react-router-dom";
import classes from "./User.module.css";

const User = ({
  avatar_url,
  login,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>
      <Link to={`https://github.com/${login}`}>Visualizar Perfil Completo</Link>
    </div>
  );
};

export default User;
