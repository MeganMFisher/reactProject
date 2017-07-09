import React from 'react'

export default function Detail (props) {
    console.log('jheu')
  return <h1>{props.match.params.id}</h1>
}