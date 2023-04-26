import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCreateEventMutation } from "../services/events";
import {
    handleEventNameChange,
    handleEventTypeChange,
    handleAddress1Change,
    handleCityChange,
    handleStateChange,
    handleCountryChange,
    handleZipCodeChange,
    handleImgUrlChange,
    handleStartTimeChange,
    handleEndTimeChange,
    handleEventDescriptionChange,
    hideCreateEventModal,
    reset
} from "../features/events/newEventSlice";
import Modal from "./Modal";

const EventForm = () => {
    const dispatch = useDispatch();
    const [createEvent] = useCreateEventMutation();
    const { fields, createEventModal } = useSelector((state) => state.newEvent);

    const handleSubmit = (e) => {
      e.preventDefault();
      createEvent({fields});
      dispatch(reset());
    }


    return (
      <Modal
        visible={createEventModal}
        onClose={() => dispatch(hideCreateEventModal())}
      >
        <div className="relative py-3 sm:max-w-xl sm:mx-auto max-w-lg">
          <div className="mt-4 mb-4 bg-white shadow-md rounded-lg">
            <div className="h-2 bg-jet-stream-500 rounded-t-md"></div>
            <h2 className="px-4 text-2xl text-white bg-jet-stream-500 pb-3">
              Create Your Event
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="px-8 py-6">
                <input
                  type="text"
                  className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                  id="name-field"
                  placeholder="Name"
                  tabIndex={1}
                  value={fields.event_name}
                  onChange={(e) => {
                    dispatch(handleEventNameChange(e.target.value));
                  }}
                />

                <input
                  type="text"
                  className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                  id="event_type-field"
                  placeholder="Event Type"
                  tabIndex={1}
                  value={fields.event_type}
                  onChange={(e) => {
                    dispatch(handleEventTypeChange(e.target.value));
                  }}
                />
                <input
                  type="text"
                  className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                  id="address1-field"
                  placeholder="Address"
                  tabIndex={1}
                  value={fields.address_line1}
                  onChange={(e) => {
                    dispatch(handleAddress1Change(e.target.value));
                  }}
                />
                <div className="flex justify-between items-baseline">
                  <input
                    type="text"
                    className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                    id="city-field"
                    placeholder="City"
                    tabIndex={1}
                    value={fields.city}
                    onChange={(e) => {
                      dispatch(handleCityChange(e.target.value));
                    }}
                  />
                  <input
                    type="text"
                    className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                    id="state-field"
                    placeholder="State"
                    tabIndex={1}
                    value={fields.state}
                    onChange={(e) => {
                      dispatch(handleStateChange(e.target.value));
                    }}
                  />
                </div>
                <div className="flex justify-between items-baseline">
                  <input
                    type="text"
                    className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                    id="zip_code-field"
                    placeholder="Zip Code"
                    tabIndex={1}
                    value={fields.zip_code}
                    onChange={(e) => {
                      dispatch(handleZipCodeChange(e.target.value));
                    }}
                  />
                  <input
                    type="text"
                    className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                    id="country-field"
                    placeholder="Country"
                    tabIndex={1}
                    value={fields.country}
                    onChange={(e) => {
                      dispatch(handleCountryChange(e.target.value));
                    }}
                  />
                </div>
                <input
                  type="text"
                  className="mb-4 border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                  id="url-field"
                  placeholder="Image Url"
                  tabIndex={1}
                  value={fields.image_url}
                  onChange={(e) => {
                    dispatch(handleImgUrlChange(e.target.value));
                  }}
                />
                <div className="flex justify-between items-baseline">
                  <label
                    className="font-light semibold px-2 text-gray-400"
                    htmlFor="starttime-field"
                  >
                    Start:
                  </label>
                  <input
                    type="datetime-local"
                    className="border w-full mb-4 h-5 px-3 py-5 mt-4 mr-4 text-gray-400 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                    id="starttime-field"
                    placeholder="Start Time"
                    tabIndex={1}
                    value={fields.start_datetime}
                    onChange={(e) => {
                      dispatch(handleStartTimeChange(e.target.value));
                    }}
                  />
                  <label
                    className="py-2 px-2 font-light semibold text-gray-400"
                    htmlFor="endtime-field"
                  >
                    End:
                  </label>
                  <input
                    type="datetime-local"
                    className="border w-full h-5 px-3 py-5 mt-4 mr-4 text-gray-400 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                    id="endtime-field"
                    placeholder="End Time"
                    tabIndex={1}
                    value={fields.end_datetime}
                    onChange={(e) => {
                      dispatch(handleEndTimeChange(e.target.value));
                    }}
                  />
                </div>
                <input
                  type="text"
                  className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                  id="description-field"
                  placeholder="Description"
                  tabIndex={1}
                  value={fields.event_description}
                  onChange={(e) => {
                    dispatch(handleEventDescriptionChange(e.target.value));
                  }}
                />
                <div className="flex justify-between items-baseline">
                  <button
                    className="mt-4 bg-jet-stream-500 text-white py-2 px-6 rounded-md hover:bg-jet-stream-600"
                    type="submit"
                  >
                    Submit
                  </button>
                  {` `}
                  <button
                    className="mt-4 bg-jet-stream-500 text-white py-2 px-6 rounded-md hover:bg-jet-stream-600"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(reset());
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    );
}

export default EventForm;