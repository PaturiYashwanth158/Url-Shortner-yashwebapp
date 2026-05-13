import { Button, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import Service from '../../utils/http.js'

export default function Input({ setResponse }) {

  const service = new Service()

  const [payload, setPayload] = useState({
    originalUrl: "",
    expiresAt: "",
    title: "",
    customUrl: ""
  })

  const generateShortCode = async () => {

    try {

      const response = await service.post("s", payload)

      setResponse(response)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ padding: "30px", maxWidth: "600px" }}>

      <TextInput
        label="Enter URL"
        placeholder="https://google.com"
        value={payload.originalUrl}
        onChange={(e) => {
          setPayload({
            ...payload,
            originalUrl: e.target.value
          })
        }}
      />

      <Button
        mt={15}
        color="green"
        disabled={payload.originalUrl === ""}
        onClick={generateShortCode}
      >
        Shorten URL
      </Button>

    </div>
  )
}