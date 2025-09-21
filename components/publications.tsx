import { Card, CardContent } from "@/components/ui/card";

export default function Publications() {
  const publications = [
    { id: 1, title: "HIGH SCHOOL TEACHER MATHEMATICS", price: "₹580.00", image: "/book_02.png" },
    { id: 2, title: "A to Z English Grammar IV Standerd", price: "₹160.00", image: "/blue-mathematics-textbook-cover.jpg" },
    { id: 3, title: "HIGH SCHOOL TEACHER MATHEMATICS", price: "₹1180.00", image: "/book_03.png" },
    { id: 4, title: "HIGH SCHOOL TEACHER MATHEMATICS", price: "₹580.00", image: "/book_01.png" },
  ];

  return (
    <section className="md:py-16 py-10 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with underline */}
        <div className="relative mb-12 flex justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Publications or Book
          </h2>
          <img
            src="/line_03.png"
            alt="underline"
            className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-24 sm:w-28 md:w-36"
          />
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {publications.map((book) => (
            <Card
              key={book.id}
              className="bg-white hover:shadow-2xl shadow-lg transition-shadow rounded-xl pt-6 sm:pt-10 cursor-pointer"
            >
              <CardContent className="pb-4 sm:pb-6 text-center">
                <div className="mb-4 sm:mb-6">
                  <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-lg mx-auto flex items-center justify-center shadow-md">
                    <img
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2 text-gray-700 leading-tight">
                  {book.title}
                </h3>
                <p className="text-base sm:text-lg font-bold text-gray-900">{book.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
