import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
import Property from "@/components/property";
import { Link } from "react-router-dom";

const ShopPage = () => {
  return (
    <Layout>
      <Breadcrumb />
      <Property />
    </Layout>
  );
};
export default ShopPage;
