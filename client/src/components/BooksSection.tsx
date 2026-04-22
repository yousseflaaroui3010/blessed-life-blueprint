/**
 * BooksSection — "Open Shelf" Design
 * Card layout for each book with title, author, and Jon's note.
 * Placeholder cards have dashed border and muted style.
 * Section image: warm bookshelf photograph.
 */
import { books as staticBooks, type Book } from "@/lib/data";
import FadeInSection from "./FadeInSection";
import { BookOpen, ShoppingCart } from "lucide-react";

const BOOKS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390020722/8ddoCusMxVxTD2N3FNSog8/books-section-KrHrHXLoGGZWP49eh649Zc.webp";

export default function BooksSection({ books = staticBooks }: { books?: Book[] }) {
  return (
    <section id="books" className="py-20 md:py-28 bg-linen">
      <div className="container">
        <FadeInSection>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">
            {/* Section header */}
            <div className="lg:w-1/3">
              <h2 className="section-heading text-3xl md:text-4xl font-serif text-navy mb-4">
                Books I Recommend
              </h2>
              <p className="text-navy/60 leading-relaxed">
                These are the books that have had the biggest impact on my life
                and leadership. If you're not sure where to start, pick one and
                commit to finishing it.
              </p>
            </div>

            {/* Section image */}
            <div className="lg:w-2/3 rounded-lg overflow-hidden max-h-56 lg:max-h-64">
              <img
                src={BOOKS_IMG}
                alt="Curated bookshelf"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </FadeInSection>

        {/* Book cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {books.map((book, i) => (
            <FadeInSection key={i} delay={i * 80}>
              {book.placeholder ? (
                <div className="placeholder-card rounded-lg p-6 h-full flex flex-col items-center justify-center min-h-[160px]">
                  <BookOpen className="text-gray-cool/40 mb-3" size={28} />
                  <span className="text-sm text-gray-cool/60 font-medium">
                    {book.title}
                  </span>
                </div>
              ) : (
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-1 h-8 bg-amber rounded-full shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg text-navy leading-snug">
                        {book.title}
                      </h3>
                      <p className="text-sm text-navy/50 mt-0.5">
                        {book.author}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-navy/65 leading-relaxed flex-1 italic">
                    "{book.note}"
                  </p>
                  {book.amazonLink && (
                    <a
                      href={book.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 pt-4 border-t border-sand text-xs text-navy/55 hover:text-amber font-medium uppercase tracking-wider transition-colors"
                    >
                      <ShoppingCart size={13} />
                      Buy on Amazon
                    </a>
                  )}
                </div>
              )}
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
