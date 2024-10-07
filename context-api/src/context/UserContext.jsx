import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUserDate = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      const json = await response.json();
      setUser(json);
  };
  useEffect(() => {
    fetchUserDate(1); // replace with actual user id
  }, []);

  return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>;
};
