import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import flower from "../../flower.jpg";
import { useState } from "react";
import lily from "../../lil.jpg";
import park from "../../park.jpg";
import gents from "../../gents.jpg";


const photoCategories = [
  {
    title: "Nature & Landscapes",
    description:
      "Capturing the beauty of nature and environments.",
    count: 24,
    coverImage: "/placeholder.svg",
  },
  {
    title: "Cars",
    description: "",
    count: 18,
    coverImage: "/placeholder.svg",
  },
];

const featuredPhotos = [
  {
    title: "Flower Garden",
    location: "Greensboro, NC",
    date: "2025-06-11",
    image: flower,
  },
  {
    title: "Orange Lilly",
    location: "Greensboro, NC",
    date: "2025-06-11",
    image: lily,
  },
  {
    title: "Neshota Beach Bash 2025",
    location: "Two Rivers, WI",
    date: "2025-07-11",
    image: park,
  },
    {
    title: "Wedding Crashers",
    location: "Sheboygen, WI",
    date: "2025-07-11",
    image: gents,
  },
];


export default function Photography() {

const [selectedPhoto, setSelectedPhoto] = useState<{
  title: string;
  image: string;
} | null>(null);



  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Photography
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I have a growing interest for photography and art. My photography ranges from anything I find interesting, to special moments I try to capture.
            </p>
          </motion.div>

          {/* Categories Grid
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              Photo Collections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {photoCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={category.coverImage}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera size={18} className="text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {category.count} photos
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* Featured Photos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              All Photos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedPhoto({ title: photo.title, image: photo.image })}
                >

                  <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-3">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {photo.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} />
                    <span>{photo.location}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(photo.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

{selectedPhoto && (
  <div
    className="fixed inset-0 bg-black flex items-center justify-center z-50"
    onClick={() => setSelectedPhoto(null)}
  >
    <div
      className="relative max-w-3xl max-h-[90vh] w-full p-4"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside image
    >
      {/* X Button above image */}
      <button
        onClick={() => setSelectedPhoto(null)}
        className="absolute -top-12 right-4 text-white bg-black rounded-full p-2 hover:bg-white/10 transition"
      >
        ✕
      </button>
      <img
        src={selectedPhoto.image}
        alt={selectedPhoto.title}
        className="w-full h-auto max-h-[80vh] object-contain shadow-lg"
      />
    </div>
  </div>
)}





        </div>
      </div>
    </div>
  );
}
