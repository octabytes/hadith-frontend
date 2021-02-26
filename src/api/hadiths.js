import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/v1",
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
