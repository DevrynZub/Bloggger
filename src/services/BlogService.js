
import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogService {

  async getBlogs() {
    const res = await api.get('api/blogs')
    logger.log(res.data)
    const blogs = res.data.map(blogPjo => new Blog(blogPjo))
    logger.log(blogs)
    AppState.blogs = blogs
  }


}

export const blogService = new BlogService()