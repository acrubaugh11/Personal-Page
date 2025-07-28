export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "overseas",
    title: "The Truth of Growing Up Overseas",
    excerpt:
      "A personal opinion on the impact of growing up overseas and the affect it's had on my life.",
    date: "2025-07-10",
    readTime: "10 min read",
    category: "Life / Travel",
    content: `


    `,
  },



];

export default blogPosts;
