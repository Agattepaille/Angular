export interface Article {
    title: string;
    content: string;
    imageUrls: string;
    authors: string;
    likeCount: number;
    comment?: string;
    id: number;
    createdAt:string;
    categoryName: string;
    isLiked: boolean;
  }
