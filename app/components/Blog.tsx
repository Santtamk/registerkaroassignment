import { ChevronRight } from "@geist-ui/icons";

const blogPosts = [
  {
    category: "Partnership",
    date: "28 March 2025",
    title: "What is a Sole Proprietorship? Everything You Need to Know",
    author: "John Doe",
  },
  {
    category: "FSAAI",
    date: "3 April 2025",
    title: "Punishable Offences Under FSSAI: Know the Rules",
    author: "John Doe",
  },
  {
    category: "OPC",
    date: "29 March 2020",
    title: "Mandatory OPC Compliance Requirements: Full Guide",
    author: "John Doe",
  },
];
const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 " id="blog">
      <div className="text-center text-3xl text-orange-300 mb-5">
        {" "}
        Latest Blogs
      </div>
      <div className="mb-10 border-orange-300  divide-y divide-orange-300">
        {blogPosts.map((post, index) => (
          <div key={index} className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  aria-label="Category"
                >
                  {post.category}
                </a>
                <p className="text-gray-600 text-orange-300">{post.date}</p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl hover:text-orange-300">
                    {post.title}
                  </p>
                </a>
              </div>
              <p className="text-gray-700 ">
                Written by{" "}
                <span className="text-orange-300 cursor-pointer">
                  {post.author}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 hover:text-orange-300"
        >
          See all articles <ChevronRight />
        </a>
      </div>
    </div>
  );
};

export default Blog;
