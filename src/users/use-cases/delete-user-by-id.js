/**
 * 
 * @param {String|Number} userLike 
 */
export const deleteUserById = async (id) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users/${id}`;
    const rest = await fetch(url,{
        method: 'DELETE',
    });

    const deleteResult = await rest.json();

    return true;
}