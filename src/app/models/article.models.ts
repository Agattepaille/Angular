export interface Article {
    title: string;
    content: string;
    image: string;
    author: string;
    likeCount: number;
    comment?: string;
    id: number;
    createdAt:string;
    categoryName: string;
    isLiked: boolean;
  }