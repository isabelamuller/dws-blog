export interface IAuthorProps {
  createdAt: string;
  id: string;
  name: string;
  profilePicture: string;
  updatedAt: string;
}

export interface ICategoryProps {
  createdAt: string;
  id: string;
  name: string;
  updatedAt: string;
}

export interface IPostProps {
  author: IAuthorProps;
  authorId: string;
  content: string;
  createdAt: string;
  id: string;
  thumbnail_url: string;
  title: string;
  updatedAt: string;
  categories: ICategoryProps[];
}
