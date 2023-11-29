import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import routes from "./routes/routes";
import { fetchUser, stopLoading } from "./features/auth/authSlice";
import FullScreenLoading from "./components/loading/FullScreenLoading";

function App() {
  // grab user credentials from state
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem('accessToken')

    if(token?.lenght) {
      // fetchUser() function talks the the server endpoint and grabs creds from DB
      dispatch(fetchUser(token))
    }else{
      dispatch(stopLoading())
    }
  })

  return isLoading ? (
    // can change spinner component
    <FullScreenLoading />
  ): ( 
    <>
      <RouterProvider router={routes} />
      {/* toaster research */}
      <Toaster position="top-center" reverseOrder={true} />
    </>
  )

}

export default App
