import BlogDetails from "@/components/blog/details";
import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
import { Link } from "react-router-dom";

const BlogDetailsPage = () => {
  return (
    <Layout>
      <Breadcrumb />
      <BlogDetails />
    </Layout>
  );
};
export default BlogDetailsPage;
