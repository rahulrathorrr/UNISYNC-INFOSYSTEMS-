import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, User, Share2 } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "How AI-Assisted Development Is Changing Software Engineering",
    desc: "A look into how AI-powered coding tools like GitHub Copilot and custom LLMs are helping startups build products faster. We explore the shift from manual coding to AI-driven architecture and what it means for future developers.",
    category: "Technology",
    date: "Feb 09, 2026",
    author: "Amit Sharma",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Workflow Automation: The Secret to Scaling Without Hiring",
    desc: "Why automation is a must for businesses aiming for operational efficiency. Learn how to identify repetitive tasks in your HR, Finance, and Ops departments and replace them with self-executing smart workflows.",
    category: "Automation",
    date: "Feb 05, 2026",
    author: "Sarah Jenkins",
    // New Image for Workflow Automation
    img: "https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Building Scalable Web Applications in 2026",
    desc: "Modern best practices for ensuring stability, performance, and growth. From micro-frontends to serverless backends, we cover everything you need to know about the current tech stack landscape.",
    category: "Web Dev",
    date: "Jan 28, 2026",
    author: "Rahul Verma",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Essential Hiring Strategies for Growing Startups",
    desc: "How to attract the right talent in a competitive market. We discuss why 'Culture Fit' is evolving into 'Culture Add' and how Unisync helps companies find pre-vetted IT professionals.",
    category: "Workforce",
    date: "Jan 15, 2026",
    author: "Priya Singh",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "The Role of Data-Driven Decision Making",
    desc: "How data analytics guides better business decisions. Learn how to set up dashboards that track real-time KPIs and use predictive modeling to stay ahead of market shifts.",
    category: "Insights",
    date: "Jan 05, 2026",
    author: "Vikram Malhotra",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "The Future of Hybrid Work: Tools and Security",
    desc: "Managing a global workforce requires more than just Zoom. We look into cybersecurity protocols and collaboration tools that keep your remote teams productive and secure.",
    category: "Corporate",
    date: "Dec 28, 2025",
    author: "Anjali Gupta",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    title: "Cybersecurity Best Practices for SMEs",
    desc: "Protecting your digital assets is no longer optional. Small businesses are now the prime targets for ransomware. Here is your 2026 survival guide for encryption.",
    category: "Security",
    date: "Dec 15, 2025",
    author: "Cyber Team",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    title: "Cloud Migration: AWS vs Azure vs Google Cloud",
    desc: "Choosing the right infrastructure for your software product. We compare the pricing, scalability, and AI integrations of the big three cloud providers to help you decide.",
    category: "Infrastructure",
    date: "Nov 30, 2025",
    author: "DevOps Lead",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  }
];

const BlogGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Grid Layout - 2 Columns for length */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
          {blogs.map((blog) => (
            <div key={blog.id} className="group flex flex-col h-full border-b border-gray-100 pb-12">
              
              {/* Image */}
              <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden rounded-2xl bg-gray-100">
                <img 
                  src={blog.img} 
                  alt={blog.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6 text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-blue-500"/> {blog.date}
                </span>
                <span className="flex items-center gap-2">
                  <User size={14} className="text-blue-500"/> {blog.author}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                <Link to={`/blog/${blog.id}`}>
                  {blog.title}
                </Link>
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-lg leading-relaxed mb-6 flex-grow">
                {blog.desc}
              </p>

              {/* Footer Section (Read Full Story button removed) */}
              <div className="mt-auto pt-4 flex items-center justify-end">
                <div className="flex gap-4 text-gray-400">
                  <Share2 size={20} className="hover:text-blue-600 cursor-pointer" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogGrid;