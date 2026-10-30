import { notFound } from "next/navigation"
import { getHotel, hotels } from "@/lib/hotels"
import { HotelDetail } from "@/components/hotel-detail"

export async function generateStaticParams() {
  return hotels.map((h) => ({
    slug: h.slug,
  }))
}

export default async function HotelSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const hotel = getHotel(resolvedParams.slug)

  if (!hotel) {
    notFound()
  }

  return <HotelDetail hotel={hotel} />
}
