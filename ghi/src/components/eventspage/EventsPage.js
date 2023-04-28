import React from "react";
import { useSelector } from 'react-redux';

import { useGetAccountQuery } from '../../services/auth';

import EventsPageTabs from './EventsPageTabs';
import EventsHostingCards from '../EventsHostingCards';
import EventsAttendingCards from '../EventsAttendingCards';
import EventDetails from '../EventDetails';
import './EventsPage.css';

function EventsPage() {
    const { data: account, isLoading } = useGetAccountQuery();
    const { userRole } = useSelector(
        (state) => state.eventsPage
    );

    if (isLoading) return <div>Loading...</div>;

    const attending = () => (
      <>
        <h1> Events {account.account.first_name} Is Attending </h1>
        <EventsAttendingCards />
        <EventDetails />
      </>
    );

    const hosting = () => (
      <>
        <h1> Events {account.account.first_name} Is Hosting </h1>
        <EventsHostingCards />
        <EventDetails />
      </>
    );

    return (
        <div className='max-w-[1400px] w-full m-auto py-1 px-4 relative mb-10'>
            <EventsPageTabs />
            {(userRole === "attending") ? attending() : hosting()}
        </div>
    )
}

export default EventsPage;
