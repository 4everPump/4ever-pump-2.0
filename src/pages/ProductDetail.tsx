import { useParams } from "react-router-dom";

export function ProductDetail() {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-display uppercase tracking-tight">Product {id}</h1>
      </div>
    </div>
  );
}
