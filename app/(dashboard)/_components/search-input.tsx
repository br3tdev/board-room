'use client';

import * as React from 'react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Search } from 'lucide-react';
import qs from 'query-string';
import { useDebounceValue } from 'usehooks-ts';

import { Input } from '@/components/ui/input';

export interface ISearchInputProps {}

export default function SearchInput(props: ISearchInputProps) {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  const [debounceValue] = useDebounceValue<string>(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: '/',
        query: {
          search: debounceValue,
        },
      },
      { skipEmptyString: true, skipNull: true },
    );

    router.push(url);
  }, [debounceValue, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        placeholder="Search boards"
        className="w-full max-w-[516px] pl-9"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
