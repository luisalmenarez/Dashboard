'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { FormEventProps } from './FormEvent.types';
import Image from 'next/image';

const formSchema = z.object({
  eventName: z.string().min(2),
  companieSelected: z.object({
    name: z.string().min(2),
    id: z.string(),
  }),
});

export const FormEvent = (props: FormEventProps) => {
  const { companies, setNewEvent, setOnSaveNewEvent, setOpen } = props;

  const [selectedCompany, setSelectedCompany] = useState({
    name: '',
    id: '',
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: '',
      companieSelected: {
        name: '',
        id: '',
      },
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setNewEvent(values);
    setOpen(false);
    setOnSaveNewEvent(true);
  };

  const handleCompanyChange = (newValue: string) => {
    const selectedCompany = companies.find(
      (company) => company.name === newValue
    );
    if (selectedCompany) {
      setSelectedCompany({
        name: selectedCompany.name,
        id: selectedCompany.id,
      });
      form.setValue('companieSelected.name', selectedCompany.name);
      form.setValue('companieSelected.id', selectedCompany.id);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="eventName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Meeting..." {...field} />
              </FormControl>
              <FormDescription>This is your event name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companieSelected.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <Select
                onValueChange={(newValue) => {
                  field.onChange(newValue);
                  handleCompanyChange(newValue);
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a company" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {companies.map((companie) => (
                    <SelectItem key={companie.id} value={companie.name}>
                      <div className="flex gap-x-2">
                        <Image
                          src={companie.profileImage}
                          width={5}
                          height={5}
                          alt={`Logo companie ${companie.name}`}
                          className="object-cover size-5"
                        />
                        {companie.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit"> Create Event</Button>
      </form>
    </Form>
  );
};
