export interface Article {
    title: string;
    content: string;
    image: string;
    author: string;
    isPublished: boolean;
    likes: number;
    comment?: string;
    id: number;
  }