const {default: axiosClient} = require("./axiosClient")

const getLatestBlogs = () => axiosClient.get('blogs')

export default {
getLatestBlogs

}