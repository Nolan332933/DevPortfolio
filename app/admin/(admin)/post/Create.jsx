"use client";
import dynamic from "next/dynamic";
import { PostContext } from "@/context/PostContext";
import {
  Alert,
  Button,
  FileInput,
  Label,
  Modal,
  Select,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import { useContext, useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import toast from "react-hot-toast";
import { CategoryContext } from "@/context/CategoryContext";
const Editor = dynamic(() => import("./Editor"), { ssr: false });

const Create = ({ openModal, setOpenModal }) => {
  const { state, createPost } = useContext(PostContext);
  const { state: categoryState } = useContext(CategoryContext);
  const [imageSwitch, setImageSwitch] = useState(false);

  const initData = {
    title: "",
    body: "",
    category_id: "",
    images: [],
    links: "",
    tags: [],
    lang: "my",
  };
  const [data, setData] = useState(initData);

  const handleCreate = async () => {
    try {
      const formData = new FormData();

      formData.set("title", data.title);
      formData.set("body", data.body);
      formData.set("tags", JSON.stringify(data.tags));
      formData.set("lang", data.lang);
      formData.set("links", data.links);
      for (const file of data.images) {
        formData.append("images", file);
      }

      formData.set("category_id", data.category_id);

      await createPost(formData);
      if (!state.error) {
        setOpenModal(false);
        setData(initData);
        toast.success(state.message);
      }
    } catch (error) {
      toast.error(state.message);
    }
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)} size="4xl">
      <Modal.Header> Create Post </Modal.Header>
      <Modal.Body>
        {state.error && <Alert color="failure"> {state.error} </Alert>}

        {/* lang  */}
        <div className="my-3">
          <Label> Language </Label>
          <Select onChange={(e) => setData({ ...data, lang: e.target.value })}>
            <option value="my"> Myanmar </option>
            <option value="en"> English </option>
          </Select>
        </div>

        {/* title */}
        <div className="my-3">
          <Label> Title </Label>
          <TextInput
            name="images[]"
            placeholder="Enter Title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>

        {/* image  */}
        <div className="my-3">
          <Label> Image </Label>
          <ToggleSwitch
            checked={imageSwitch}
            label="File/Link"
            className="my-2"
            onChange={() => setImageSwitch(!imageSwitch)}
          />
          {imageSwitch ? (
            <TextInput
              placeholder="https://your-image-link"
              onChange={(e) => setData({ ...data, links: e.target.value })}
            />
          ) : (
            <FileInput
              multiple={true}
              id="file-upload-helper-text"
              helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
              onChange={(e) => setData({ ...data, images: e.target.files })}
            />
          )}
        </div>

        {/* body */}
        <div className="my-3">
          <Label> Body </Label>
          <Editor data={data} setData={setData} />
        </div>

        {/* tags  */}
        <div className="my-3">
          <Label> Tag </Label>
          <TagsInput
            value={data.tags}
            onChange={(value) => setData({ ...data, tags: value })}
            className="w-full rounded-md"
          />
        </div>

        {/* category  */}
        <div className="my-3">
          <Label> Category </Label>
          <Select
            onChange={(e) => setData({ ...data, category_id: e.target.value })}
          >
            <option> Select Category </option>
            {categoryState.categories?.data.length > 0 &&
              categoryState.categories?.data.map((item) => (
                <option value={item._id} key={item._id}>
                  {item.name}
                </option>
              ))}
          </Select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          isProcessing={state.loading}
          processingLabel="Saving"
          onClick={handleCreate}
        >
          Save
        </Button>
        <Button
          type="button"
          color="failure"
          onClick={() => setOpenModal(false)}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Create;
