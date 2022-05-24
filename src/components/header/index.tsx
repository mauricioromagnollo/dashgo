import { Flex, Icon, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/sidebar-drawer-context';

import { Logo } from './logo';
import { NotificationsNav } from './notifications-nav';
import { Profile } from './profile';
import { SearchBox } from './search-box';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue<boolean>({
    base: false,
    lg: true
  });

  return (
    <Flex 
      as='header' 
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      align='center'
      px='6'
    >
      { !isWideVersion && (
        <IconButton
          aria-label='Open Navigation'
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
        >

        </IconButton>
      )}

      <Logo />

      {isWideVersion && <SearchBox />}
      <Flex align='center' ml='auto'>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} /> 
      </Flex>
    </Flex>
  );
}