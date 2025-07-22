import  Markdown from '@/components/common/Markdown';
import { page } from './page'

export const Blog = () => {
  return (
    <div>
      <Markdown page={ page } />
    </div>
  )
};