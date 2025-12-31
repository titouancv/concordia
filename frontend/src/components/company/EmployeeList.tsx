/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { UserRecap } from "@/types/user";
import { Theme } from "@/types/app";
import { UserCard } from "./UserCard";

interface EmployeeListProps {
  employees: UserRecap[];
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
          <UserCard key={employee.id} user={employee} theme={theme} />
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
