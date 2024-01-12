import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CustomerTableSkeleton } from '@/app/ui/skeletons';
import Table from '@/app/ui/customers/table';
import Search from '@/app/ui/search';
 
export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({searchParams}:{
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-xl md:text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customer..." />
      </div>
      <Suspense fallback={<CustomerTableSkeleton />}>
        <Table query={query} />
      </Suspense>
    </div>
  );
}