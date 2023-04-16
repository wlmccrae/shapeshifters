import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCreateEventMutation } from "../services/events";
import {
    handleEventNameChange,
    handleEventTypeChange,
    handleAddress1Change,
    handleAddress2Change,
    handleCityChange,
    handleStateChange,
    handleCountryChange,
    handleZipCodeChange,
    handleImgUrlChange,
    handleStartTimeChange,
    handleEndTimeChange,
    handleEventDescriptionChange,
    reset
} from "../features/events/newEventSlice";

const EventForm = () => {
    const dispatch = useDispatch();
    const [createEvent] = useCreateEventMutation();
    const { fields } = useSelector((state) => state.newEvent);
    console.log("fields", fields)
    console.log("HELLOOOOOOO")

    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createEvent({ fields });
            dispatch(reset());
          }}
        >
          <div>
            <label htmlFor="name-field" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name-field"
              placeholder="Name"
              tabIndex={1}
              value={fields.event_name}
              onChange={(e) => {
                dispatch(handleEventNameChange(e.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="event_t-field" className="form-label">
              Event Type
            </label>
            <input
              type="text"
              className="form-control"
              id="event_type-field"
              placeholder="Event Type"
              tabIndex={1}
              value={fields.event_type}
              onChange={(e) => {
                dispatch(handleEventTypeChange(e.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="address1-field" className="form-label">
              Address 1
            </label>
            <input
              type="text"
              className="form-control"
              id="address1-field"
              placeholder="Address line 1"
              tabIndex={1}
              value={fields.address_line1}
              onChange={(e) => {
                dispatch(handleAddress1Change(e.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="address2-field" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="address2-field"
              placeholder="Address 2"
              tabIndex={1}
              value={fields.address_line2}
              onChange={(e) => {
                dispatch(handleAddress2Change(e.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="city-field" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city-field"
              placeholder="City"
              tabIndex={1}
              value={fields.city}
              onChange={(e) => {
                dispatch(handleCityChange(e.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="state-field" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="state-field"
              placeholder="State"
              tabIndex={1}
              value={fields.state}
              onChange={(e) => {
                dispatch(handleStateChange(e.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="zip_code-field" className="form-label">
              Zip Code
            </label>
            <input
              type="text"
              className="form-control"
              id="zip_code-field"
              placeholder="Zip Code"
              tabIndex={1}
              value={fields.zip_code}
              onChange={(e) => {
                dispatch(handleZipCodeChange(e.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="country-field" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="country-field"
              placeholder="Country"
              tabIndex={1}
              value={fields.country}
              onChange={(e) => {
                dispatch(handleCountryChange(e.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="url-field" className="form-label">
              Image Url
            </label>
            <input
              type="text"
              className="form-control"
              id="url-field"
              placeholder="Image Url"
              tabIndex={1}
              value={fields.image_url}
              onChange={(e) => {
                dispatch(handleImgUrlChange(e.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="description-field" className="form-label">
              Start Time
            </label>
            <input
              type="datetime"
              className="form-control"
              id="start_time-field"
              placeholder="Desc"
              tabIndex={1}
              value={fields.satrt_datetime}
              onChange={(e) => {
                dispatch(handleStartTimeChange(e.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="endtime-field" className="form-label">
              End Time
            </label>
            <input
              type="datetime"
              className="form-control"
              id="endtime-field"
              placeholder="Event 1"
              tabIndex={1}
              value={fields.end_time}
              onChange={(e) => {
                dispatch(handleEndTimeChange(e.target.value));
              }}
            />
          </div>
          <div>
            <label htmlFor="name-field" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description-field"
              placeholder="Description"
              tabIndex={1}
              value={fields.description}
              onChange={(e) => {
                dispatch(handleEventDescriptionChange(e.target.value));
              }}
            />
          </div>
          <div>
            <button className="btn btn-success">Submit</button>
            {` `}
            <button
              className="btn btn-info"
              onClick={(e) => {
                e.preventDefault();
                dispatch(reset());
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
}

export default EventForm;