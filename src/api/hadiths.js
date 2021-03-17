import axios from "axios";

let apiURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiURL = "http://localhost:5000/v1";
} else {
  apiURL = "https://hadith-api-dot-islamicnet.appspot.com/v1";
}

const API = axios.create({
  baseURL: apiURL,
});

export const getCollectionBooksAPI = async (collection) => {
  try {
    const result = await API.get(`/books/${collection}`);
    return result.data;
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};

export const getBookHadithsAPI = async (collection, bookNumber, offset = 0) => {
  try {
    const result = await API.get(
      `/${collection}/book/${bookNumber}?offset=${offset}`
    );
    return result.data;
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};
