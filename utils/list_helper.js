const lodash = require("lodash");
const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const sum = (sum, item) => {
    return sum + item.likes;
  };
  return blogs.reduce(sum, 0);
};

const favoriteBlog = (blogs) => {
  const max = Math.max(...blogs.map((blog) => blog.likes));

  return blogs.find((blog) => blog.likes === max);
};

const mostBlogs = (blogs) => {
  const countBlogs = lodash.countBy(blogs, "author");
  const formattedData = Object.keys(countBlogs).map((author) => ({
    author,
    blogs: countBlogs[author],
  }));
  return lodash.maxBy(formattedData, "blogs");
};

const mostLikes = (blogs) => {
  const authorsGroup = lodash(blogs).groupBy("author");
  const likes = authorsGroup.map((blogs, author) => ({
    author,
    likes: lodash.sumBy(blogs, "likes"),
  }));

  return likes.maxBy("likes");
};
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
