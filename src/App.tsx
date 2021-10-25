import React, { useEffect, useState, useRef } from 'react';
import { Box, Text, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, Button, AlertDialogFooter } from "@chakra-ui/react";

import { NotificationsItem, NotificationsBody, NotificationsHeader, NotificationsContainer } from './notifications';
import { getNotifications, INotification, markNotificationAsRead, clearNotifications } from "./api/API";

function App() {

  const [notifications, setNotifications] = useState<INotification[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const cancelRef = useRef<any>()

  const onClose = () => setIsOpen(false)

  useEffect(() => {
    getNotifications().then((notifications) => {
      setNotifications(notifications as INotification[])
    })
  }, [])

  const handleMarkAsRead = (id: string) => {
    markNotificationAsRead(id).then(notifications => {
      setNotifications(notifications as INotification[])
    })
  }

  const handleClear = () => {
    onClose()
    clearNotifications().then((notifications) => {
      setNotifications(notifications as INotification[])
    })
  }

  return (
    <Box p="1">
      <NotificationsContainer>
        <NotificationsHeader count={notifications.length} label="Notifications" onClear={() => {
          setIsOpen(true)
        }} />
        <NotificationsBody>
          {
            notifications.length > 0 ?
              notifications.sort((a, b) => {
                return new Date(a.creation_date).getTime() - new Date(b.creation_date).getTime();
              }).map(({ id, image, type, content, description, period, read, title, artist }) => {
                return <NotificationsItem key={id} markAsRead={() => {
                  handleMarkAsRead(id)
                }} title={title} artist={artist} read={read} image={image} type={type} content={content} description={description} period={period} />
              })
              : <Text textAlign="center" p="4">No notifications 👐</Text>
          }
        </NotificationsBody>
      </NotificationsContainer>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Clear notifications
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to clear all notifications?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleClear} ml={3}>
                Clear
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}

export default App;
