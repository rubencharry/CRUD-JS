import { localhostUserToModel } from "../mappers/localhost-user.mapper";

/**
 *
 * @param {Number} page
 * @returns {Promise<User[]>}
 */

export const loadUsersByPage = async (page = 1) => {
  if(page <= 5){
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const json = await res.json();
  
    
    const users = json.data.map((userLike) => {
      return localhostUserToModel(userLike);
    });
    
    console.log(users);
    return users;
  }
  else return[];
};
