import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { userModelToLocalHost } from '../mappers/user-to-localhost.mapper'
import {User} from '../models/user'

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async (userLike) => {
    const user = new User (userLike)
    
    if(!user.firstName || !user.lastName)
    { 
        throw 'First & last name are required';
    }

    const userToSave = userModelToLocalHost(user);
    let userUpdated;

    if(user.id)
    {
        userUpdated = await updateUser(userToSave)
    }else{
        userUpdated = await createUser (userToSave);
    }

    return localhostUserToModel(userUpdated);
}

/**
 * 
 * @param {Like<User>} userLike 
 */
const createUser = async (user) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users`
    const rest = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'applitacion/json'
        }
    });

    const newUser = await rest.json();

    return newUser;
}

/**
 * 
 * @param {Like<User>} userLike 
 */
const updateUser = async (user) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users/${user.id}`;
    const rest = await fetch(url,{
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'applitacion/json'
        }
    });

    const updatedUser = await rest.json();

    return updatedUser;
}