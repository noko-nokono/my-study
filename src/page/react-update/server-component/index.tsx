import Markdown from '@/components/common/Markdown';
import { page } from './page';

export const ServerComponent = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Markdown page={page} />
    </div>
  )
};