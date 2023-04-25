import React from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { showHostingEvents, showAttendingEvents } from '../../features/events/eventsPageSlice';

function EventsPageTabs() {
    const dispatch = useDispatch();
    const { userRole } = useSelector(
        (state) => state.eventsPage
    );

    const handleAttendingClick = (e) => {
        dispatch(showAttendingEvents());
    }

    const handleHostingClick = (e) => {
        dispatch(showHostingEvents());
    }

    const attending = () => (
        <>
            <li className="-mb-px mr-1">
                <NavLink
                    onClick={handleAttendingClick}
                    className="bg-jet-stream-900 inline-block border-l border-t border-r rounded-t py-2 px-4 text-jet-stream-500 hover:text-morning-glory-700 font-semibold hover:bg-jet-stream-200 active:bg-jet-stream-900
                    active:text-jet-stream-500"
                    to="/events/attending">
                        Attending
                </NavLink>
            </li>
            <li className="mr-1">
                <NavLink
                    onClick={handleHostingClick}
                    className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-jet-stream-900 hover:text-morning-glory-700 font-semibold hover:bg-jet-stream-200 active:bg-jet-stream-900 active:text-jet-stream-500"
                    to="/events/hosting">
                        Hosting
                </NavLink>
            </li>
        </>
    );

    const hosting = () => (
        <>
            <li className="-mb-px mr-1">
                <NavLink
                    onClick={handleAttendingClick}
                    className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-jet-stream-900 hover:text-morning-glory-700 font-semibold hover:bg-jet-stream-200 active:bg-jet-stream-900
                    active:text-jet-stream-500"
                    to="/events/attending">
                        Attending
                </NavLink>
            </li>
            <li className="mr-1">
                <NavLink
                    onClick={handleHostingClick}
                    className="bg-jet-stream-900 inline-block border-l border-t border-r rounded-t py-2 px-4 text-jet-stream-500 hover:text-morning-glory-700 font-semibold hover:bg-jet-stream-200 active:bg-jet-stream-900 active:text-jet-stream-500"
                    to="/events/hosting">
                        Hosting
                </NavLink>
            </li>
        </>
    );

    return (
        <>
            <ul className="flex border-b">
                {(userRole === "attending") ? attending() : hosting()}
            </ul>
        </>
    );
}

export default EventsPageTabs;
