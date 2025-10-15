import { createContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: () => {},
  removeFavorites: () => {},
});

function FavotitesContextProvider({ children }) {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
}

export default FavotitesContextProvider;
