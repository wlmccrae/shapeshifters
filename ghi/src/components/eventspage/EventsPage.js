import React from "react";
import { useSelector } from 'react-redux';

import { useGetAccountQuery } from '../../services/auth';

import EventsPageTabs from './EventsPageTabs';
import EventsHostingCards from '../EventsHostingCards';
import EventsAttendingCards from '../EventsAttendingCards';
import './EventsPage.css';

function EventsPage() {
    const { data: account } = useGetAccountQuery();
    const { userRole } = useSelector(
        (state) => state.eventsPage
    );

    const attending = () => (
            <div>
                <h1> Events {account.account.first_name} Is Attending </h1>
                <EventsAttendingCards />
            </div>
    );

    const hosting = () => (
            <div>
                <h1> Events {account.account.first_name} Is Hosting </h1>
                <EventsHostingCards />
            </div>
    );

    return (
        <div className='max-w-[1400px] w-full m-auto py-1 px-4 relative'>
            <EventsPageTabs />
            <div className='max-w-[900px] h-[600px] w-full m-auto py-1 px-10 relative group'>
                <div>
                    {(userRole === "attending") ? attending() : hosting()}
                </div>
            </div>
        </div>
    )
}

export default EventsPage;
