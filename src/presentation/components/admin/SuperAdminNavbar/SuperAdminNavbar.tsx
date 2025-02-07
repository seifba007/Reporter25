import React from 'react';
import { Avatar, Box, Flex, Image, Input, Menu, Stack, Text } from '@mantine/core';
import '../../../../sass/pages/SuperAdmin/SuperAdminNavbar.scss';
import { Notification, HambergerMenu, Category, User, UserCirlceAdd, SearchNormal, Setting, Headphone, Bag2, Logout } from 'iconsax-react';
import logo from '../../../../assets/search_icon.png'
import useResponsive from '@/presentation/shared/mediaQuery';
import { useAppDispatch, useAppSelector } from '@/core/store/hooks';
import { selectRootLoading } from '@/core/store/modules/rootSlice';
import Avatardef from '../../../../assets/default.png'
import Avatarsml from '../../../../assets/logo-sm.png'

interface SuperAdminNavbarProps {
  label: string;
  onMenuClick: () => void;
}

const SuperAdminNavbar: React.FC<SuperAdminNavbarProps> = ({ label, onMenuClick }) => {
  const dispatch = useAppDispatch();
  const { isMobile } = useResponsive();



  return (
    <Box className='navbar'>
{!isMobile&&( <Input 
placeholder='Ask SmarDac Copilot...'
leftSection={<Image src={logo} w={18} h={18}/>}
/>)}

      {isMobile ? (
        <Flex align='center' gap='md' justify={'space-between'}>
          <Flex  align='center' gap='md' >
          <Image src={Avatarsml} w={'16%'} h={'8%'}/>
          <Box className='buttonham'>
            <HambergerMenu size='23' onClick={onMenuClick} color='#6c757d'/>
          </Box>
          </Flex>
          <Flex  gap='md'>
          <Menu>
          <Menu.Target>
          <Box className='buttonham'>
            <SearchNormal size='20'   color='#6c757d' />
            </Box>
            </Menu.Target>
            <Menu.Dropdown>
            <Input 
placeholder='Ask SmarDac Copilot...'
leftSection={<Image src={logo} w={18} h={18}/>}
/>
            </Menu.Dropdown>
            </Menu>


          <Box className='buttonham'>
            <Notification size='20' variant="Bold"   color='#6c757d' />
            </Box>
          
                 
    <Menu  transitionProps={{ transition: 'rotate-left', duration: 150 }}>
      <Menu.Target>
      <Flex align={'center'} gap={'1em'}  style={{cursor:'pointer',borderLeft:'0.5px solid #eef2f7' ,borderRight:'0.5px solid #eef2f7'}} pl={'1em'}pr={'1em'}>
      <Avatar src={Avatardef} alt='User Avatar' size='30' />

</Flex>
      </Menu.Target>

      <Menu.Dropdown w={'100%'}>
      <Menu.Label> welcome!</Menu.Label>
        <Menu.Item p={'4%'}
          leftSection={<UserCirlceAdd
            size="20"
            color="#6c757d"
            variant="Bold"
           />}
        >
          <Text c={"#6c757d"} fz={'12px'} fw={'400'}> My Account</Text>
        </Menu.Item>
        <Menu.Item p={'4%'}
          leftSection={<Setting
            size="20"
            color="#6c757d"
            variant="Bold"
           />}
        >
          <Text c={"#6c757d"} fz={'12px'} fw={'400'}>  Settings</Text>
          </Menu.Item>
          <Menu.Item p={'4%'}
          leftSection={<Headphone
            size="20"
            color="#6c757d"
            variant="Bold"
           />}
        >
          <Text c={"#6c757d"} fz={'12px'} fw={'400'}> Support</Text>
          </Menu.Item>
          <Menu.Item p={'4%'}
          leftSection={<Bag2
            size="20"
            color="#6c757d"
            variant="Bold"
           />}
        >
          <Text c={"#6c757d"} fz={'12px'} fw={'400'}> Lock Screen</Text>
          </Menu.Item>
          <Menu.Item p={'4%'}
          leftSection={<Logout
            size="20"
            color="#6c757d"
            variant="Bold"
           />}
        >
          <Text c={"#6c757d"} fz={'12px'} fw={'400'}> logout</Text>
          </Menu.Item>
      </Menu.Dropdown>
    </Menu>
          
         

          </Flex>
        </Flex>
      ) : (
        <Flex align='center' gap='md'>
          <Category size="25" color="#6c757d" variant="Bold" style={{cursor:'pointer'}}
/>
          <Notification size='25' color='#6c757d' variant='Bold' style={{cursor:'pointer'}}/>
        
    <Menu  position="top-end" arrowPosition="center" transitionProps={{ transition: 'rotate-left', duration: 150 }}>
      <Menu.Target>
      <Flex align={'center'} gap={'1em'}  style={{cursor:'pointer',borderLeft:'0.5px solid #eef2f7' ,borderRight:'0.5px solid #eef2f7'}} pl={'1em'}pr={'1em'}>
  <Avatar src={Avatardef} alt='User Avatar' size='30' />
  
  <Flex direction={'column'} gap={'0em'}>
    <Text c={'#6c757d'} fz={'15px'} fw={'600'}>seif</Text>
    <Text c={'#6c757d'} fz={'14px'} fw={'500'}>seifbenaicha@gmail.com</Text>
  </Flex>
</Flex>
      </Menu.Target>

      <Menu.Dropdown w={'15%'}>
      <Menu.Label> welcome!</Menu.Label>
        <Menu.Item p={'4%'}
          leftSection={<UserCirlceAdd
            size="20"
            color="#6c757d"
            variant="Bold"
           />}
        >
          <Text c={"#6c757d"} fz={'12px'} fw={'400'}> My Account</Text>
        </Menu.Item>
        <Menu.Item p={'4%'}
          leftSection={<Setting
            size="20"
            color="#6c757d"
            variant="Bold"
           />}
        >
          <Text c={"#6c757d"} fz={'12px'} fw={'400'}>  Settings</Text>
          </Menu.Item>
          <Menu.Item p={'4%'}
          leftSection={<Headphone
            size="20"
            color="#6c757d"
            variant="Bold"
           />}
        >
          <Text c={"#6c757d"} fz={'12px'} fw={'400'}> Support</Text>
          </Menu.Item>
          <Menu.Item p={'4%'}
          leftSection={<Bag2
            size="20"
            color="#6c757d"
            variant="Bold"
           />}
        >
          <Text c={"#6c757d"} fz={'12px'} fw={'400'}> Lock Screen</Text>
          </Menu.Item>
          <Menu.Item p={'4%'}
          leftSection={<Logout
            size="20"
            color="#6c757d"
            variant="Bold"
           />}
        >
          <Text c={"#6c757d"} fz={'12px'} fw={'400'}> logout</Text>
          </Menu.Item>
      </Menu.Dropdown>
    </Menu>
     

        </Flex>
      )}
    </Box>
  );
};

export default SuperAdminNavbar;
