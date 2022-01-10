import React from "react";
import { Tag } from "antd";
import "antd/dist/antd.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

interface IPatientProps {
  name: string;
  service: string;
  status: boolean;
  id: string;
}

export const Patient = ({ name, service, status, id }: IPatientProps) => {
  const router = useRouter();
  return (
    <div className="h-44 shadow-E500 bg-white rounded-sm p-4 w-1/7">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 relative rounded-full overflow-hidden shadow-E400">
            <Image src="/avatar.png" alt="Avatar" layout="fill" />
          </div>

          <div className="flex-col">
            <div className="capitalize text-2xl font-semibold text-gray-700 align-middle">
              {name}
            </div>
            <div className="capitalize text-base font-medium text-gray-500">
              {service} Service
            </div>
            <div>{status && <Tag color="success">Active</Tag>}</div>
            <div className="flex  mt-3">
              <button className="bg-blue-800 text-white py-1 px-3 text-base mr-2 rounded-sm">
                <Link href={`/doctor/videocall?patientId=${id}`} passHref>
                  <a className="text-white">Call</a>
                </Link>
              </button>
              <button className="bg-blue-800 text-white py-1 px-3 text-base rounded-sm">
                <Link href={`/doctor/patient-details?patientId=${id}`} passHref>
                  <a className="text-white">View</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
