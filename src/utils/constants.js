export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR = "https://i.imgur.com/kDoJa0M.png";
export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg";
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_API_KEY
  }
};

export const IMG_POSTER_CDN = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [{identifier: "en", name: "English"}, {identifier: "hi", name: "Hindi"}];