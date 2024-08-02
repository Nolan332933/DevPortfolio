import {
  Button,
  FileInput,
  Label,
  Modal,
  Select,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import React, { useContext, useState } from "react";
import TagsInput from "react-tagsinput";
import { CategoryContext } from "@/context/CategoryContext";
import { PostContext } from "@/context/PostContext";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("./Editor"), { ssr: false });

const Edit = ({ openModal, setOpenModal, item }) => {
  const [imageSwitch, setImageSwitch] = useState(false);
  const { state: categoryState } = useContext(CategoryContext);
  const { state: postState, updatePost } = useContext(PostContext);
  const initData = {
    title: item?.title ?? "",
    categoryId: item.category_id?._id ?? "",
    tags: item?.tags ?? [],
    images: [],
    lang: item?.lang ?? "",
    body: item?.body ?? "",
    links: "",
  };

  const [data, setData] = useState(initData);
  const currentImages = item?.post_images ?? [];
  const [previewImages, setPreviewImages] = useState([]);

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("id", item._id);
    formData.append("title", data.title);
    formData.append("body", data.body);
    formData.append("tags", JSON.stringify(data.tags));
    formData.append("lang", data.lang);
    formData.append("categoryId", data.categoryId);

    for (const file of data.images) {
      formData.append("images", file);
    }

    formData.append("links", data.links);
    formData.append("currentImages", JSON.stringify(currentImages));

    updatePost(formData);
    if (postState.success) {
      setOpenModal(false);
      toast.success(postState.message);
    } else {
      toast.error(postState.message);
    }
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    setPreviewImages([]);
    const newPreviews = [];
    setData({ ...data, images: e.target.files });
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newPreviews.push(reader.result);
        if (newPreviews.length === files.length) {
          setPreviewImages((prevPreviews) => [...prevPreviews, ...newPreviews]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(!openModal)} size="4xl">
      <Modal.Header> Edit Your Blog </Modal.Header>
      <Modal.Body>
        {/* lang  */}
        <div className="my-3">
          <Label> Language </Label>
          <Select
            onChange={(e) => setData({ ...data, lang: e.target.value })}
            value={data.lang}
          >
            <option value="my" defaultValue={true}>
              Myanmar
            </option>
            <option value="en">English</option>
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

          {/* Current Image  */}
          <div className="flex my-3">
            <div className="w-1/2">
              <div className="me-2">
                <Label> Current Images </Label>
                <div className="flex">
                  {currentImages.length > 0 &&
                    currentImages.map((item) => (
                      <img src={item} alt="current-images" />
                    ))}
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <Label> Preview Images </Label>
              {previewImages.length > 0 &&
                previewImages.map((item) => (
                  <img src={item} alt="preview-images" />
                ))}
            </div>
          </div>
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
              onChange={(e) => handleFileInputChange(e)}
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
            value={data.categoryId}
          >
            <option value="" defaultValue={true}>
              Select Category
            </option>
            {categoryState.categories.data.length > 0 &&
              categoryState.categories.data.map((item) => (
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
          isProcessing={postState.loading}
          processingLabel="Saving"
          onClick={handleUpdate}
        >
          Update
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

export default Edit;
