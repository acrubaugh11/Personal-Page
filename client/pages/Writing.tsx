import { useParams } from "react-router-dom";
import blogPosts from "./blogPostsData";
import Navigation from "@/components/Navigation";
import { Calendar, Clock } from "lucide-react";
import { marked } from "marked"; // install if not present

export default function Writing() {
  const { slug } = useParams<{ slug: string }>();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-foreground">
        <Navigation />
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground">Sorry, we couldn't find the requested post.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground mb-6 text-sm">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
            {post.category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            {post.readTime}
          </div>
        </div>
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(post.content) }}
        />
      </div>
    </div>
  );
}
