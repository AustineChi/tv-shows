import { createContext } from 'react'



const TvShowsContext = createContext<{
  shows: any;
  singleShow: any;
  loading: boolean;
  searchShows: (searchTerm: string) => Promise<void>;
  getSingleShow: (id: number) => Promise<void>;
  clearSingleShow: () => void;
}>(
  {
    shows: [],
    singleShow: {},
    loading: false,
    searchShows: async (searchTerm: string) => { },
    getSingleShow: async (id: number) => { },
    clearSingleShow: () => { },
  }
);

export default TvShowsContext