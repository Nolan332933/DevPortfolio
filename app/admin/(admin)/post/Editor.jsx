import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({ data, setData }) => {
  return (
    <div className="h-[330px]">
      <QuillEditor
        className="text-slate-700 h-[300px] scroll-auto"
        theme="snow"
        value={data.body}
        onChange={(value) => setData({ ...data, body: value })}
      />
    </div>
  );
};

export default Editor;
