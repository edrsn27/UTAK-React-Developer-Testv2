/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";
import { storage, db } from "../../firebase-config";

import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { ref as databaseRef, child, push, set } from "firebase/database";

import { v4 } from "uuid";

import SuccessNotification from "../../components/Notifications/Success";
export default function AddProductCategories() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const uploadImage = async () => {
    if (image !== null) {
      const imageRef = storageRef(
        storage,
        "images/categories/" + image.name + v4()
      );
      await uploadBytes(imageRef, image);
      const downloadUrl = await getDownloadURL(imageRef);
      setImage(null);
      return downloadUrl;
    }

    return "";
  };
  const submit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setLoading(true);

    // Get a key for a new category.
    const newCategoryKey = push(child(databaseRef(db), "categories")).key;

    const postData = {
      uuid: newCategoryKey,
      name: name,
      description: description,
      image: await uploadImage(),
    };

    // add category to the database
    try {
      await set(databaseRef(db, "categories/" + newCategoryKey), postData);
      setSuccess(true);
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
    setOpen(false);
  };
  return (
    <>
      {success && <SuccessNotification />}

      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={(e) => setOpen(!open)}
      >
        New product category
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-lg sm:w-full">
                  <form className="w-full max-w-lg" onSubmit={submit}>
                    <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-green-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                          <PlusIcon
                            className="w-6 h-6 text-green-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            New Product Category
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
                            </p>
                          </div>

                          <div className="flex flex-wrap mb-6 -mx-3">
                            <div className="w-full px-3">
                              <label
                                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                htmlFor="category-name"
                              >
                                Name
                              </label>
                              <input
                                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                                id="category-name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div className="flex flex-wrap mb-6 -mx-3">
                            <div className="w-full px-3">
                              <label
                                htmlFor="category-description"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Description
                              </label>
                              <div className="mt-1">
                                <textarea
                                  id="category-description"
                                  rows={3}
                                  className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                                  value={description}
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap mb-6 -mx-3">
                            <div className="w-full px-3">
                              <label
                                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                htmlFor="category-image"
                              >
                                Image
                              </label>
                              <input
                                className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                                id="category-image"
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                        disabled={loading}
                      >
                        {loading ? "Saving..." : "Save"}
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
