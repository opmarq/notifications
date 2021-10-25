import React, { useEffect, useState } from 'react';
import { Box, Heading, Container } from "@chakra-ui/react";

import { Card } from './notifications/Card';
import { getNotifications, INotification, markNotificationAsRead } from "./api/API";

function App() {

  const [notifications, setNotifications] = useState<INotification[]>([])

  useEffect(() => {
    getNotifications().then((notifications) => {
      setNotifications(notifications as INotification[])
    })
  }, [])

  const handleMarkAsRead = (id: string) => {
    markNotificationAsRead(id).then(notifications => {
      console.log(notifications);
      setNotifications(notifications as INotification[])
    })
  }

  return (
    <Box p="1">
      <Container p="0" bgColor="#6c757d" color="white" borderRadius="md" >
        <Box p="4">
          <Heading size="md">
            Notifications
          </Heading>
        </Box>
        <Box>
          {
            notifications.map(({ id, image, type, content, description, period, read }) => {
              return <Card markAsRead={() => {
                handleMarkAsRead(id)
              }} read={read} image={image} type={type} content={content} description={description} period={period} />
            })
          }
        </Box>
      </Container>
    </Box>
  );
}

export default App;
