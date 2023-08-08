export const addUserToLocalStorage = (trdUser:any) => {
    localStorage.setItem('trdUser', JSON.stringify(trdUser));
  };
  
  export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('trdUser');
  };
  
  export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem('trdUser');
    const trdUser = result ? JSON.parse(result) : null;
    return trdUser;
  };
  