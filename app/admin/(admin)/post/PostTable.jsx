import React from "react";
import TableLoading from "../../components/loading/TableLoading";
import Post from "./Post";
import { Table } from "flowbite-react";

const PostTable = ({ posts, loading }) => {
  return (
    <div className="overflow-x-auto my-5 min-h-screen">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell> No </Table.HeadCell>
          <Table.HeadCell> Title </Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell> Author </Table.HeadCell>
          <Table.HeadCell> Date </Table.HeadCell>
          <Table.HeadCell> Featured </Table.HeadCell>
          <Table.HeadCell> Public </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {!loading ? (
          <Table.Body className="divide-y">
            {posts.length > 0 ? (
              posts.map((item, index) => (
                <Post key={index} item={item} index={index} />
              ))
            ) : (
              <Table.Row>
                <Table.Cell
                  colSpan="100%"
                  className="text-center text-red-700 font-bold"
                >
                  Post not found
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        ) : (
          <TableLoading />
        )}
      </Table>
    </div>
  );
};

export default PostTable;
