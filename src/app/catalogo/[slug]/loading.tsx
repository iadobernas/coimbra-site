export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="h-32 bg-gray-300" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image placeholder */}
          <div className="h-80 bg-gray-200 rounded-2xl" />

          {/* Info skeleton */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-24" />
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-6 bg-gray-200 rounded w-1/4" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="flex gap-2 mt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 w-20 bg-gray-200 rounded-lg" />
              ))}
            </div>
            <div className="h-12 bg-gray-200 rounded-xl mt-4" />
            <div className="h-12 bg-gray-200 rounded-xl" />
          </div>
        </div>

        {/* Sections skeleton */}
        <div className="mt-12 space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-14 bg-gray-200 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  )
}
