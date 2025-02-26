import { CustomIcon } from '@/components/CustomIcon';
import { CardSummaryProps } from './CardSummary.types';
import { CustomTooltip } from '@/components/CustomTooltip/CustomTooltip';
import { cn } from '@/lib/utils';
import {
  LucideMoveUpRight,
  MoveDownLeft,
  MoveDownRight,
  MoveUpRight,
  TrendingUp,
} from 'lucide-react';

export const CardSummary = (props: CardSummaryProps) => {
  const { average, icon: Icon, title, tooltipText, total } = props;

  return (
    <article className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-xl transition-all duration-500 hover:cursor-pointer">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <CustomIcon icon={Icon} />
          {title}
        </div>
        <CustomTooltip content={tooltipText} />
      </div>
      <div className="flex gap-4 mt-2 md:mt-4">
        <p className="text-2xl">{total}</p>
        <div
          className={cn(
            'flex items-center gap-1 px-2 text-xs text-white rounded-lg h-5 bg-black dark:bg-secondary'
          )}
        >
          {average}%
          {average < 20 && <MoveDownRight strokeWidth={2} className="size-4" />}
          {average > 20 && average < 70 && (
            <MoveUpRight strokeWidth={2} className="size-4" />
          )}
          {average > 70 && average < 100 && (
            <TrendingUp strokeWidth={2} className="size-4" />
          )}
        </div>
      </div>
    </article>
  );
};
