import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../../../sass/pages/SuperAdmin/SuperAdminNavbar.scss';
import { useMediaQuery } from '@mantine/hooks';
import '../../../sass/pages/SuperAdmin/sideBar.scss';
import { SuperAdminSideBar } from '@/presentation/components/admin/SuperAdminsidebar/SuperAdminSideBar';
import SuperAdminNavbar from '@/presentation/components/admin/SuperAdminNavbar/SuperAdminNavbar';

const SuperAdminPage = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const pathSegments = location.pathname.split('/');
	const currentPage = pathSegments[pathSegments.length - 1] || 'Dashboard';
	const isResponsive = useMediaQuery('(max-width: 768px)');
	const handleToggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};
	return (
		<div className={`${!isSidebarOpen && isResponsive ? 'superadminPage2' : 'superadminPage'}`}>
			{isSidebarOpen || !isResponsive ? (
				<SuperAdminSideBar adminName={"adminData?.fullName"} onClose={handleToggleSidebar} />
			) : null}
			<div className={`${isSidebarOpen && isResponsive ? 'displnone' : 'contentWrapper'}`}>
				<SuperAdminNavbar label={currentPage} onMenuClick={handleToggleSidebar} />
				<main className={`${'mainContent'} ${isSidebarOpen && isResponsive ? 'sidebarOpen' : ''}`}>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default SuperAdminPage;
