import { type ReactElement } from 'react';

import { useListDataQuery } from '@/contexts/remote/list/useListDataQuery.tsx';

export function EducationSlashWorkExperienceDescriptionList({
  listId,
}: {
  listId: string;
}): ReactElement {
  const list = useListDataQuery({ id: listId });

  return (
    <div className="grid text-pink-200">
      <h5>{list.title}</h5>
      <ul>
        {list.items.map((item, i) => (
          <li key={i}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
