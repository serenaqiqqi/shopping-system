import Login from "../pages/Login";
import ProductEdit from "../pages/admin/products/edit";
import DashBoard from "../pages/admin/dashBoard/index";
import ProductList from "../pages/admin/products/list";
import NotFound from "../pages/notFound";

export const mainRoute = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export const adminRoute = [
  {
    path: "/admin/dashBoard",
    component: DashBoard,
    exact: true,
  },
  {
    path: "/admin/product/list",
    component: ProductList,
    exact: true,
  },
  {
    path: "/admin/product/edit/:id",
    component: ProductEdit,
    exact: true,
  },
];
