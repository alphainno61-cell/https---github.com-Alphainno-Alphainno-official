export interface Service {
  id: string;
  name: string;
  description: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="rounded-lg border border-gray-200 p-5">
      <h3 className="text-lg font-semibold">{service.name}</h3>
      <p className="mt-1 text-sm text-gray-600">{service.description}</p>
    </div>
  );
}
