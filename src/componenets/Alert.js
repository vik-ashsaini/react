import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=> {
        const lw= word.toLowerCase();
        return lw.charAt(0).toUpperCase() + lw.slice(1)
    }
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       {capitalize(props.alert.type)} : {props.alert.msg}
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
