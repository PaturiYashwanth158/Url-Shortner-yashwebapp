import React, { useState } from 'react'
import Input from '../../Components/UrlShortener/Input'
import Response from '../../Components/UrlShortener/Response'

export default function ShortenUrl() {

  const [response, setResponse] = useState(null)

  return (
    <div>

      <Input setResponse={setResponse} />

      <Response response={response} />

    </div>
  )
}7