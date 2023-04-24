import { NavLink } from 'react-router-dom';

function EventsPageTabs() {

    return (
        <>
            <ul class="flex border-b">
                <li class="-mb-px mr-1">
                    <NavLink
                        id="attending"
                        className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-jet-stream-900 hover:text-morning-glory-700 font-semibold hover:bg-jet-stream-200 active:bg-jet-stream-900 target:bg-jet-stream-900 active:text-jet-stream-500 target:text-jet-stream-50"
                        to="/events/attending">
                            Attending
                    </NavLink>
                </li>
                <li class="mr-1">
                    <NavLink
                        id="hosting"
                        className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-jet-stream-900 hover:text-morning-glory-700 font-semibold hover:bg-jet-stream-200 active:bg-jet-stream-900 target:bg-jet-stream-900 active:text-jet-stream-500 target:text-jet-stream-50"
                        to="/events/hosting">
                            Hosting
                    </NavLink>
                </li>
            </ul>
        </>
    );
}

export default EventsPageTabs;
