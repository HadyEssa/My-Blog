
/*
node modules
*/

import {createBrowserRouter} from "react-router-dom";

/*
loadeing

*/

/*
Pages
*/

import {Login} from "../pages/auth/Login.tsx";


/**
 * 
 * Actions
 */

/**
 * Errors Boundary
 */

const router = createBrowserRouter([
   {
    path:"/Login",
    Component: Login,
   },
   {
    path:"/signup",
   },
   {
    path:"/refresh-token",
   },
   {
    path:"/",
    children: [
        {
            index: true,
        },
        {
            path: "blogs",
        },
        {
            path:"blogs/:slug",
        },
        {
            path:"/admin",
            children: [
                {
                    path:"dashboard",
                },
                {
                    path:"blogs",
                },
                {
                    path:"blogs/create",
                },
                {
                    path:"blogs/:slug/edit",
                },
                {
                    path:"comments"
                },
                {
                    path:"users"
                },
                {
                    
                }
            ]
        },
    ],
   },
   {
    path:"/settings",
   }
]);


export default router;