import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useUpdateEventMutation } from "../services/events";
import {
  handleEditEventNameChange,
  handleEditEventTypeChange,
  handleEditAddress1Change,
  handleEditAddress2Change,
  handleEditCityChange,
  handleEditStateChange,
  handleEditCountryChange,
  handleEditZipCodeChange,
  handleEditImgUrlChange,
  handleEditStartTimeChange,
  handleEditEndTimeChange,
  handleEditEventDescriptionChange,
  hideEditEventModal,
  resetEdit,
} from "../features/events/editEventSlice";
import Modal from "./Modal";

const EditEventModal = () => {
  const dispatch = useDispatch();
  const [updateEvent] = useUpdateEventMutation();
  const { fields, eventId, editEventModal } = useSelector(
    (state) => state.editEvent
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(resetEdit());
    await updateEvent({ id: eventId, fields }).unwrap();
    window.location.reload();
  };

  return (
    <Modal
      visible={editEventModal}
      onClose={() => dispatch(hideEditEventModal())}
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto max-w-lg">
        <div className="mt-4 mb-4 bg-white shadow-md rounded-lg">
          <div className="h-2 bg-jet-stream-500 rounded-t-md"></div>
          <h2 className="px-4 text-2xl text-white bg-jet-stream-500 pb-3">
            Update Event
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="px-8 py-6">
              <input
                type="text"
                className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                placeholder="Name"
                value={fields.event_name}
                onChange={(e) =>
                  dispatch(handleEditEventNameChange(e.target.value))
                }
              />
              <input
                type="text"
                className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                placeholder="Event Type"
                value={fields.event_type}
                onChange={(e) =>
                  dispatch(handleEditEventTypeChange(e.target.value))
                }
              />
              <input
                type="text"
                className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                placeholder="Address"
                value={fields.address_line1}
                onChange={(e) =>
                  dispatch(handleEditAddress1Change(e.target.value))
                }
              />
              <input
                type="text"
                className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                placeholder="Address Line 2"
                value={fields.address_line2}
                onChange={(e) =>
                  dispatch(handleEditAddress2Change(e.target.value))
                }
              />
              <div className="flex justify-between items-baseline">
                <input
                  type="text"
                  className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                  placeholder="City"
                  value={fields.city}
                  onChange={(e) =>
                    dispatch(handleEditCityChange(e.target.value))
                  }
                />
                <input
                  type="text"
                  className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                  placeholder="State"
                  value={fields.state}
                  onChange={(e) =>
                    dispatch(handleEditStateChange(e.target.value))
                  }
                />
              </div>
              <div className="flex justify-between items-baseline">
                <input
                  type="text"
                  className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                  placeholder="Zip Code"
                  value={fields.zip_code}
                  onChange={(e) =>
                    dispatch(handleEditZipCodeChange(e.target.value))
                  }
                />
                <input
                  type="text"
                  className="border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                  placeholder="Country"
                  value={fields.country}
                  onChange={(e) =>
                    dispatch(handleEditCountryChange(e.target.value))
                  }
                />
              </div>
              <input
                type="text"
                className="mb-4 border w-full h-5 px-3 py-5 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                placeholder="Image URL"
                value={fields.image_url}
                onChange={(e) =>
                  dispatch(handleEditImgUrlChange(e.target.value))
                }
              />
              <div className="flex flex-col">
                <label
                  className="font-light semibold px-2 mt-4 text-gray-400"
                  htmlFor="edit-starttime-field"
                >
                  Start:
                </label>
                <input
                  type="datetime-local"
                  className="border w-full h-5 px-3 py-5 mt-1 text-gray-400 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                  id="edit-starttime-field"
                  value={fields.start_datetime}
                  onChange={(e) =>
                    dispatch(handleEditStartTimeChange(e.target.value))
                  }
                />
                <label
                  className="font-light semibold px-2 mt-4 text-gray-400"
                  htmlFor="edit-endtime-field"
                >
                  End:
                </label>
                <input
                  type="datetime-local"
                  className="border w-full h-5 px-3 py-5 mt-1 mb-4 text-gray-400 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md"
                  id="edit-endtime-field"
                  value={fields.end_datetime}
                  onChange={(e) =>
                    dispatch(handleEditEndTimeChange(e.target.value))
                  }
                />
              </div>
              <textarea
                className="border w-full px-3 py-2 mt-4 mr-4 hover:outline-none focus:ring-1 focus:outline-none focus:ring-morning-glory-600 rounded-md resize-y overflow-auto"
                placeholder="Description"
                rows={2}
                value={fields.event_description}
                onChange={(e) =>
                  dispatch(handleEditEventDescriptionChange(e.target.value))
                }
              />
              <div className="flex justify-between items-baseline">
                <button
                  className="mt-4 bg-jet-stream-500 text-white py-2 px-6 rounded-md hover:bg-jet-stream-600"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="mt-4 bg-jet-stream-500 text-white py-2 px-6 rounded-md hover:bg-jet-stream-600"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(hideEditEventModal());
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default EditEventModal;
