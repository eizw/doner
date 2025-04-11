import { Table, TableRow, TableBody, TableCell } from "@/components/ui/table";

interface Donor {
  id: string;
  name: string;
  donated: string;
  amount: number;
}

// Dummy donor data, grouped by campaign
const donorsByCampaign: Record<string, Donor[]> = {
  "1": [
    { id: "1", name: "Alice Johnson", donated: "2025-04-10", amount: 50 },
    { id: "2", name: "Bob Smith", donated: "2025-04-09", amount: 100 },
    { id: "3", name: "Carol Lee", donated: "2025-04-08", amount: 75 },
  ],
  "2": [
    { id: "4", name: "David Kim", donated: "2025-04-07", amount: 150 },
    { id: "5", name: "Eva Green", donated: "2025-04-06", amount: 200 },
    { id: "6", name: "Frank Liu", donated: "2025-04-05", amount: 25 },
  ],
  "3": [
    { id: "7", name: "Grace Park", donated: "2025-04-04", amount: 300 },
    { id: "8", name: "Henry Wong", donated: "2025-04-03", amount: 125 },
    { id: "9", name: "Isla Novak", donated: "2025-04-02", amount: 80 },
  ],
};

export default function RecentDonors({ campaignId }: { campaignId: string }) {
  const donors = donorsByCampaign[campaignId] || [];

  return (
    <div className="rounded-md border border-gray-200 bg-white shadow-md p-6 mx-4">
      <h2 className="text-xl font-semibold mb-4">Recent Donors</h2>
      <Table>
        <TableBody>
          {donors.map((donor) => (
            <TableRow key={donor.id}>
              <TableCell>{donor.name}</TableCell>
              <TableCell>{donor.donated}</TableCell>
              <TableCell>RM{donor.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
