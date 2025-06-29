import { Transition } from './component/useTransition';
import { ActionState } from './component/useActionState';
import { FormStatus } from './component/useFormStatus';
import { Optimistic } from './component/useOptimistic';
import { UseParent } from './component/useParent';
import Markdown from '@/components/common/Markdown';
import {
  page,
  useTransitionPage,
  useActionStatePage,
  useFormStatusPage,
  useOptimisticPage,
  useParentPage
} from './page';

export const Version19 = () => {
  return (
    <div className='flex flex-col gap-8 h-full'>
      <Markdown page={page} />

      <div>
        <Markdown page={useTransitionPage} />
        <Transition />
      </div>

      <div>
        <Markdown page={useActionStatePage} />
        <ActionState />
      </div>

      <div>
        <Markdown page={useFormStatusPage} />
        <FormStatus />
      </div>

      <div>
        <Markdown page={useOptimisticPage} />
        <Optimistic />
      </div>

      <div>
        <Markdown page={useParentPage} />
        <UseParent />
      </div>
    </div>
  )
};