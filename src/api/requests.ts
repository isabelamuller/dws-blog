import axios from "axios";
import type { IAuthorProps, ICategoryProps, IPostProps } from "./types";

const api = axios.create({
  baseURL: "https://tech-test-backend.dwsbrazil.io",
});

export const getPosts = async () => {
  const { data } = await api.get<IPostProps[]>("/posts/");
  return data;
};

export const getPostById = async (id: string) => {
  const { data } = await api.get<IPostProps>(`/posts/${id}`);
  return data;
};

export const getAuthors = async () => {
  const { data } = await api.get<IAuthorProps[]>("/authors/");
  return data;
};

export const getAuthorById = async (id: string) => {
  const { data } = await api.get(`/authors/${id}`);
  return data;
};

export const getCategories = async () => {
  const { data } = await api.get<ICategoryProps[]>("/categories/");
  return data;
};

export const getCategoryById = async (id: string) => {
  const { data } = await api.get(`/categories/${id}`);
  return data;
};
