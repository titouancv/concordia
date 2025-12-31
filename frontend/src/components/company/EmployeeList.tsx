/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Theme } from "@/app/company/[slug]/page";

interface Employee {
  id: string;
  name: string;
  role: string;
  avatar: string;
  username: string;
}

interface EmployeeListProps {
  employees: Employee[];
  theme: Theme;
}

export function EmployeeList({ employees, theme }: EmployeeListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8 relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
        <input
          type="text"
          placeholder="Search by name or role..."
          className="w-full pl-10 pr-4 py-3 rounded-full"
          style={
            {
              "--ring-color": theme.primary,
              backgroundColor: theme.primaryText,
              color: theme.primary,
            } as any
          }
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredEmployees.map((employee) => (
          <Link
            href={`/user/${employee.username}`}
            key={employee.id}
            className="group rounded-sm flex flex-col p-2 gap-2 items-center text-center transition-all hover:-translate-y-1"
            style={{ backgroundColor: theme.primary, color: theme.primaryText }}
          >
            <div className="w-full h-28 overflow-hidden relative transition-colors">
              <Image
                src={employee.avatar}
                alt={employee.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2 w-full text-left">
              <h3 className="font-bold text-lg mb-1">{employee.name}</h3>
              <p className="text-sm ">{employee.role}</p>
            </div>
          </Link>
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div
          className="text-center py-12 "
          style={{ color: theme.secondaryText }}
        >
          {`No employees found matching "${searchTerm}"`}
        </div>
      )}
    </div>
  );
}
