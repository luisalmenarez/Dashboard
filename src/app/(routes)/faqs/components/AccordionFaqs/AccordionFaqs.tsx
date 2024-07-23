import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui';
import { dataFaqs } from './AccordionFaqs.data';

export const AccordionFaqs = () => {
  return (
    <article>
      <Accordion type="single" collapsible>
        {dataFaqs.map(({ id, question, answer }) => (
          <AccordionItem key={id} value={question}>
            <AccordionTrigger> {question} </AccordionTrigger>
            <AccordionContent> {answer} </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </article>
  );
};
