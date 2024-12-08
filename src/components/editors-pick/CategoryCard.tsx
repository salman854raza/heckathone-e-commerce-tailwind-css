// 'use client';

// import { cn } from '@/lib/utils';

// interface CategoryCardProps {
//   title: string;
//   imageUrl: string;
//   className?: string;
// }

// export function CategoryCard({ title, imageUrl, className }: CategoryCardProps) {
//   return (
//     <div className={cn('relative group cursor-pointer overflow-hidden rounded-md', className)}>
//       <div 
//         className="w-full h-[280px] bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
//         style={{ backgroundImage: `url(${imageUrl})` }}
//       />
//       <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
//         <h3 className="text-white text-xl font-bold text-center">{title}</h3>
//       </div>
//     </div>
//   );
// }