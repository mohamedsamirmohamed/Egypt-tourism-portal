import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getTrip, trips } from "@/lib/trips"
import { TripDetail } from "@/components/trip-detail"

export function generateStaticParams() {
  return trips.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const trip = getTrip(slug)
  if (!trip) return {}
  return {
    title: `${trip.title.en} — ${trip.title.ar} | New Smart Travel`,
    description: trip.overview.en,
  }
}

export default async function TripPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const trip = getTrip(slug)
  if (!trip) notFound()
  return <TripDetail trip={trip} />
}
