import {
 useEffect,
 useState
} from "react";

import adminApi
from "../services/adminApi";

import AdminLayout
from "./components/AdminLayout";

import StatCard
from "./components/StatCard";

export default function Dashboard(){

 const [stats,
 setStats] =
 useState(null);

 useEffect(()=>{

  adminApi
  .get("/dashboard")
  .then((res)=>{

   setStats(
    res.data.stats
   );

  });

 },[]);

 if(!stats){

  return (
   <div>
    Loading...
   </div>
  );

 }

 return(

  <AdminLayout>

   <h1>
    Dashboard
   </h1>

   <div
    className="stats-grid"
   >

    <StatCard
     title="Products"
     value={
      stats.products
     }
    />

    <StatCard
     title="Categories"
     value={
      stats.categories
     }
    />

    <StatCard
     title="Inquiries"
     value={
      stats.inquiries
     }
    />

    <StatCard
     title="Featured"
     value={
      stats.featured_products
     }
    />

   </div>

  </AdminLayout>

 );

}