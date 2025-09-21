export default function RankHolders() {
  const rankHolders = [
    {
      id: 1,
      rank: 1,
      name: "Hashir Shan K",
      position: "Ambulance Assistant",
      image: "/rank_std_01.png",
      bgColor: "bg-cyan-200",
    },
    {
      id: 2,
      rank: 2,
      name: "Hashir Shan K",
      position: "Ambulance Assistant",
      image: "/rank_std_02.png",
      bgColor: "bg-cyan-300",
    },
    {
      id: 3,
      rank: 3,
      name: "Hashir Shan K",
      position: "Ambulance Assistant",
      image: "/rank_std_03.png",
      bgColor: "bg-cyan-400",
    },
    {
      id: 4,
      rank: 4,
      name: "Hashir Shan K",
      position: "Ambulance Assistant",
      image: "/rank_std_04.png",
      bgColor: "bg-cyan-500",
    },
  ]

  return (
    <section className="md:py-16 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with line image */}
        <div className="relative mb-12 flex justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Rank Holders
          </h2>
          <img
            src="/line_03.png"
            alt="underline"
            className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-28 md:w-36"
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rankHolders.map((holder) => (
            <div
              key={holder.id}
              className="text-center shadow-xl border-t-2 rounded-2xl py-4 relative cursor-pointer"
            >
              <img
                src="/logo_only.png"
                alt=""
                className="absolute -top-8 h-[290px] opacity-40"
              />
              
              {/* Profile section */}
              <div className="relative mb-6">
                <div className={`w-48 h-48 rounded-full mx-auto relative`}>
                  {/* Geometric shapes */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 transform rotate-45"></div>
                    <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/20 rounded-full"></div>
                  </div>

                  {/* Profile image */}
                  <div className="absolute inset-0">
                    <img
                      src={holder.image || "/placeholder.svg"}
                      alt={holder.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* Rank badge */}
                  <div className="absolute bottom-6 left-4 w-12 h-12 bg-white rounded-full shadow-lg flex flex-col justify-center items-center">
                    <span className="text-xl text-gray-900 font-bold">
                      {holder.rank}
                    </span>
                    <span className="text-[9px] text-gray-900">Rank</span>
                  </div>
                </div>
              </div>

              {/* Name & Position */}
              <h3 className="text-lg font-bold text-gray-900">{holder.name}</h3>
              <p className="text-sm text-cyan-600">{holder.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
