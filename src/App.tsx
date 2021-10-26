import React, { useEffect, useState, useRef } from 'react';
import { Box, Flex, Text, AlertDialog, Spinner, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, Button, AlertDialogFooter } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";


import { NotificationsItem, NotificationsBody, NotificationsHeader, NotificationsContainer } from './notifications';
import { getNotifications, INotification, markNotificationAsRead, clearNotifications } from "./api/API";

function App() {

  const [notifications, setNotifications] = useState<INotification[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false);
  const cancelRef = useRef<any>()
  const page = useRef(1);

  const onClose = () => setIsOpen(false)

  useEffect(() => {
    setLoading(true)
    let isCancelled = false;
    getNotifications().then((notifications) => {
      if (!isCancelled) {
        setNotifications(notifications as INotification[])
        setLoading(false)
      }
    })
    return () => {
      isCancelled = true;
    }
  }, [page])

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

  const handleLoadMore = () => {
    console.log("load more")
  }

  return (
    <Box p="1">
      <NotificationsContainer>
        <NotificationsHeader notifications={notifications} label="Notifications" onClear={() => {
          setIsOpen(true)
        }} />
        <NotificationsBody>

          {
            loading ? <Flex justifyContent="center" p="4"> <Spinner title="loader" /> </Flex> :
              notifications.length > 0 ?
                <InfiniteScroll dataLength={notifications.length} hasMore={loading} next={handleLoadMore} loader={<p>Load more...</p>}>
                  {notifications.sort((a, b) => {
                    return new Date(a.creation_date).getTime() - new Date(b.creation_date).getTime();
                  }).map(({ id, ...rest }) => {
                    return <NotificationsItem key={id} markAsRead={() => {
                      handleMarkAsRead(id)
                    }} {...rest} />
                  })
                  }
                </InfiniteScroll>
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
