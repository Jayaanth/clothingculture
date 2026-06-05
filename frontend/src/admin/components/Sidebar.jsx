import {
 Link
} from "react-router-dom";

export default function Sidebar(){

 return(

  <aside
   className="sidebar"
  >

   <h2>
    ClothingCulture
   </h2>

   <Link to="/admin">
    Dashboard
   </Link>

   <Link
    to="/admin/products"
   >
    Products
   </Link>

   <Link
    to="/admin/categories"
   >
    Categories
   </Link>

   <Link
    to="/admin/branding"
   >
    Branding
   </Link>

   <Link
    to="/admin/inquiries"
   >
    Leads
   </Link>

  </aside>

 );

}