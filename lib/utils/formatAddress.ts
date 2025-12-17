import { Address } from "@/types/types";

export function formatAddress(address: Address): string {
  return [
    address.street,
    address.postalCode,
    address.city,
    address.state,
    address.country,
  ]
    .filter(Boolean)
    .join(", ");
}
