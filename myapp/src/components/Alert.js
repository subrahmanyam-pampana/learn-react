import React from 'react'

export default function Alert({alert}) {
    let alartTypes = {
        'info':'primary',
        'success':'success'
    }

    if(alert && !alert.type){
        alert.type="success"
    }

    let capitalize = (word)=>{
        let lower = word.toLowerCase();
        return lower[0].toUpperCase()+lower.slice(1)
    }

  return (
    alert &&
     <div className={`alert alert-${alartTypes[alert.type]}`} role="alert">
        <strong>{capitalize(alert.type)}:</strong> {alert.msg}
     </div>
  )
}
