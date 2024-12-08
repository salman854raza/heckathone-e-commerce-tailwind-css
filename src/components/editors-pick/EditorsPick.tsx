// 'use client';

// import { CategoryCard } from './CategoryCard';

// export function EditorsPick() {
//   const categories = [
//     {
//       title: 'MEN',
//       imageUrl: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80',
//     },
//     {
//       title: 'WOMEN',
//       imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80',
//     },
//     {
//       title: 'ACCESSORIES',
//       imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
//     },
//     {
//       title: 'KIDS',
//       imageUrl: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80',
//     },
//   ];

//   return (
//     <section className="py-16 px-4 max-w-7xl mx-auto">
//       <div className="text-center mb-12">
//         <h2 className="text-sm font-bold text-blue-600 tracking-wider mb-3">
//           EDITOR&apos;S PICK
//         </h2>
//         <p className="text-3xl font-bold text-gray-900">
//           Problems trying to resolve <br />
//           the conflict between
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {categories.map((category, index) => (
//           <CategoryCard
//             key={index}
//             title={category.title}
//             imageUrl={category.imageUrl}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }