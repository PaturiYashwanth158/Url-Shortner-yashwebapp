import React from 'react'
import QRCode from 'react-qr-code'

export default function Response({ response }) {

  if (!response) {
    return null
  }

  const shortUrl =
    "https://url-shortener-bootcamp.onrender.com/api/s/" +
    response?.shortCode

  return (
    <div
      style={{
        padding: "30px",
        marginTop: "20px"
      }}
    >

      <h2>Short URL Generated ✅</h2>

      <a
        href={shortUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          color: "blue",
          fontSize: "18px",
          textDecoration: "none"
        }}
      >
        {shortUrl}
      </a>

      <div
        style={{
          marginTop: "25px",
          background: "white",
          padding: "20px",
          width: "fit-content",
          borderRadius: "10px"
        }}
      >

        <QRCode
          value={shortUrl}
          size={200}
        />

      </div>

    </div>
  )
}