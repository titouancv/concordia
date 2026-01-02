import { MapPin } from "lucide-react";
import { Card } from "@/components/layout/Card";
import MapPreview from "./MapPreview";

export default function MapCard({ address }: { address: string }) {
  return (
    <Card isInverted={true} isPaddingDisabled={true}>
      <div className="rounded-sm">
        <div className="h-64 rounded-sm">
          <MapPreview address={address} />
        </div>
        <div className="p-4 flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          <span>{address}</span>
        </div>
      </div>
    </Card>
  );
}
