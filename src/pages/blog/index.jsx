import Blog from "@/components/blog";
import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <Layout>
      <Breadcrumb />
      <Blog />
    </Layout>
  );
};
export default BlogPage;
