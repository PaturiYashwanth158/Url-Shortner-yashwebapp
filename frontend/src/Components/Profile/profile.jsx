import { Avatar, Card, Text } from '@mantine/core'
import React from 'react'

export default function Profile() {

  const dummy = {
    name: "Yashwanth Paturi",
    email: "yashumay@gmail.com",
    id: "2310030158",
    avatar: "https://avatars.githubusercontent.com/u/1234567890?v=4"
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f4f6f9"
      }}
    >
      <Card
        shadow="lg"
        padding="xl"
        radius="lg"
        withBorder
        style={{
          width: "350px",
          textAlign: "center",
          background: "white"
        }}
      >
        <Avatar
          src={dummy.avatar}
          size={120}
          radius="50%"
          mx="auto"
          mb="md"
        />

        <Text fw={700} size="xl">
          {dummy.name}
        </Text>

        <Text c="dimmed" mt="xs">
          {dummy.email}
        </Text>

        <Text mt="md" fw={500}>
          Student ID: {dummy.id}
        </Text>
      </Card>
    </div>
  )
}