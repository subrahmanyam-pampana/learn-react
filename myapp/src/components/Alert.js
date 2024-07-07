import React from 'react'

export default function Alert({alert}) {
    if(alert){
        alert.type='success'
    }
  return (
    alert &&
     <div className={`alert alert-${alert.type}`} role="alert">
        <strong>{alert.type}:</strong> {alert.msg}
     </div>
  )
}
