import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const ReacrSpinner = ({loading}) => {
    const over = {
        display : "block",
        margin : '100px auto '
    }
    return (
    <ClipLoader 
    color= '#4338ca'
    loading = {loading}
    cssOverride={over}
    size={150}
    />
  )
}



export default ReacrSpinner