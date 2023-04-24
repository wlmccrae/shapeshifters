import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import EventsPageTabs from './EventsPageTabs';

function EventsPage() {
    const dispatch = useDispatch();
    const { userRole } = useSelector(
        (state) => state.eventsPage
    );

    const attending = () => (
            <div>
                <h1> Events You Are Attending </h1>
            </div>
    );

    const hosting = () => (
            <div>
                <h1> Events You Are Hosting </h1>
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
