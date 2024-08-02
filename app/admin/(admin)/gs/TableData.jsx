import { convertISOToSimpleDate } from "@/app/helper/helper";
import { Table, TableCell } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TableData = ({ item, index }) => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {index + 1}
      </TableCell>
      <TableCell> {item.name} </TableCell>
      <TableCell> {item.type} </TableCell>
      <TableCell>
        {item.type == "file" ? (
          <img
            src={item.value}
            width={100}
            height={100}
            alt="general-setting-image"
          />
        ) : (
          item.value
        )}
      </TableCell>
      <TableCell> {convertISOToSimpleDate(item.createdAt)} </TableCell>
      <Table.Cell>
        <div className="flex">
          <Link
            href="#"
            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 me-3"
          >
            Edit
          </Link>
          <Link
            href="#"
            className="font-medium text-red-600 hover:underline dark:text-red-500"
          >
            Delete
          </Link>
        </div>
      </Table.Cell>
    </Table.Row>
  );
};

export default TableData;
