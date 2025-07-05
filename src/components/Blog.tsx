import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      category: 'AI/ML',
      date: '2024-01-15',
      readTime: '5 min read',
      tags: ['AI', 'Web Development', 'Machine Learning']
    },
    {
      id: 2,
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices and architectural patterns for creating maintainable and scalable React applications.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      category: 'Web Development',
      date: '2024-01-10',
      readTime: '8 min read',
      tags: ['React', 'JavaScript', 'Architecture']
    },
    {
      id: 3,
      title: 'Machine Learning Model Deployment Strategies',
      excerpt: 'A comprehensive guide to deploying ML models in production environments with best practices.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      category: 'AI/ML',
      date: '2024-01-05',
      readTime: '12 min read',
      tags: ['Machine Learning', 'Deployment', 'MLOps']
    },
    {
      id: 4,
      title: 'Modern CSS Techniques for Better UX',
      excerpt: 'Discover advanced CSS techniques that can significantly improve user experience and interface design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      category: 'Design',
      date: '2023-12-28',
      readTime: '6 min read',
      tags: ['CSS', 'UX', 'Design']
    },
    {
      id: 5,
      title: 'Data Science Project Lifecycle',
      excerpt: 'Understanding the complete lifecycle of a data science project from problem definition to deployment.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      category: 'Data Science',
      date: '2023-12-20',
      readTime: '10 min read',
      tags: ['Data Science', 'Analytics', 'Python']
    },
    {
      id: 6,
      title: 'TypeScript Best Practices for Large Projects',
      excerpt: 'Essential TypeScript patterns and practices for maintaining code quality in enterprise applications.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      category: 'Web Development',
      date: '2023-12-15',
      readTime: '7 min read',
      tags: ['TypeScript', 'JavaScript', 'Best Practices']
    }
  ];

  const categories = ['All', 'AI/ML', 'Web Development', 'Data Science', 'Design'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
          Blog
        </h2>
        <p className="text-gray-400 text-lg">
          Thoughts, tutorials, and insights about technology and development
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-4 py-2 rounded-lg font-medium transition-all duration-300
              ${selectedCategory === category
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden hover:border-orange-500/30 transition-all duration-300">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={filteredPosts[0].image}
                alt={filteredPosts[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                  {filteredPosts[0].category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 hover:text-orange-400 transition-colors cursor-pointer">
                {filteredPosts[0].title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {filteredPosts[0].excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {formatDate(filteredPosts[0].date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {filteredPosts[0].readTime}
                  </div>
                </div>
                
                <button className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.slice(1).map((post) => (
          <article
            key={post.id}
            className="group bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-105"
          >
            {/* Post Image */}
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-gray-900/80 text-gray-300 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Post Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors cursor-pointer line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-xs"
                  >
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Post Meta */}
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-xl border border-orange-500/20 p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="text-gray-400 mb-6">
          Subscribe to my newsletter for the latest articles and insights about technology and development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:border-orange-500/50 transition-colors"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;