import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";


const blogPosts = [
  {
    title: "The Truth of Growing Up Overseas",
    excerpt:
      "A personal opinion on the impact of growing up overseas and the affect it's had on my life.",
    date: "2025-7-10",
    readTime: "10 min read",
    category: "Life/Travel",
    link: "/blog/overseas"
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Blog & Writings
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
This is my personal blog, where I share experiences, thoughts, and ideas on technology, life, and the things that inspire me.

            </p>
          </motion.div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="px-3 py-1 bg-white text-black rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-card-foreground mb-3 group-hover:underline transition-colors">
                  {post.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                  {post.excerpt}
                </p>

                <Link
                  to={post.link}
                  className="inline-flex items-center gap-2 text-white hover:text-black hover:bg-white p-2 rounded-lg transition-colors font-medium"
                >
                  Read More
                  <ArrowRight size={16} />
                </Link>


              </motion.article>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
