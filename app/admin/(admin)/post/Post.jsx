import { Table, ToggleSwitch } from "flowbite-react";
import Link from "next/link";
import React, { useContext, useState } from "react";
import DeleteModal from "../../components/delete/DeleteModal";
import { PostContext } from "@/context/PostContext";
import { format } from "date-fns";
import toast from "react-hot-toast";
import Edit from "./Edit";

const Post = ({ item, index }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openFeatured, setOpenFeatured] = useState(item.featured);
  const [openPublic, setOpenPublic] = useState(item?.status);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { state, deletePost, featureChanged, statusChanged, getOnePost } =
    useContext(PostContext);
  const formattedDate = format(new Date(2014, 1, 11), "MM/dd/yyyy");

  // featured toggle changed

  const handleFeaturedChange = (id, featured) => {
    // do something
    featureChanged(id, featured);
    if (state.success) {
      toast.success("Featured Updated Successfully");
      setOpenFeatured(!openFeatured);
    }
  };

  // public toggle changed

  const handleStatusChange = (id, status) => {
    // do something
    statusChanged(id, !status);
    if (state.success) {
      toast.success("Status Updated Successfully");
      setOpenPublic(!openPublic);
    }
  };

  return (
    <React.Fragment>
      <DeleteModal
        openModal={openDeleteModal}
        setOpenModal={setOpenDeleteModal}
        deleteData={deletePost}
        state={state}
        id={item._id}
      />
      {/* Edit Modal  */}
      <Edit
        setOpenModal={setOpenEditModal}
        openModal={openEditModal}
        item={item}
      />
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white w-[14.28%]">
          {index + 1}
        </Table.Cell>
        <Table.Cell className="w-[14.28%]">
          <Link href={`/admin/post/${item._id}`}> {item.title} </Link>
        </Table.Cell>
        <Table.Cell className="w-[14.28%]">{item.category_id?.name}</Table.Cell>
        <Table.Cell className="w-[14.28%]"> {item.author.name} </Table.Cell>
        <Table.Cell className="w-[14.28%]"> {formattedDate} </Table.Cell>
        <Table.Cell className="w-[14.28%]">
          <ToggleSwitch
            checked={openFeatured}
            onChange={() => handleFeaturedChange(item._id, item.featured)}
          />
        </Table.Cell>
        <Table.Cell className="w-[14.28%]">
          <ToggleSwitch
            checked={openPublic}
            onChange={() => handleStatusChange(item?._id, item?.status)}
          />
        </Table.Cell>
        <Table.Cell className="w-[14.28%]">
          <div className="flex">
            <Link
              href="#"
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 me-3"
              onClick={() => setOpenEditModal(true)}
            >
              Edit
            </Link>
            <Link
              href="#"
              className="font-medium text-red-600 hover:underline dark:text-red-500"
              onClick={() => setOpenDeleteModal(true)}
            >
              Delete
            </Link>
          </div>
        </Table.Cell>
      </Table.Row>
    </React.Fragment>
  );
};

export default Post;
