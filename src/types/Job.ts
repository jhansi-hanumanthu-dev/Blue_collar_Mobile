export type Job = {
  id: number;
  category: string;
  title: {
    en: string;
    hi: string;
    te: string;
  };
  salary: string;
  distance: string;
  location: {
    en: string;
    hi: string;
    te: string;
  };  
  rating: number;
  verified: boolean;
  description?: { en: string; hi: string; te: string };
};
