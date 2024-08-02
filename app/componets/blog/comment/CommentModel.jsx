"use client";
import React from "react";
import { Label, Modal, TextInput } from "flowbite-react";

const CommentModal = ({
  openModal,
  setOpenModal,
  name,
  setName,
  handleSubmit,
}) => {
  return (
    <>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Want to give your name?
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              <button> Skip </button>
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Save
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CommentModal;
