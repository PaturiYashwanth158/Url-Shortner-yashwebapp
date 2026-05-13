import React from 'react'

export default function Response({ response }) {

  if (!response) {
    return null
  }

  return (
    <div>
      <h2>Short URL Generated</h2>

      <p>{response.shortUrl}</p>
    </div>
  )
}