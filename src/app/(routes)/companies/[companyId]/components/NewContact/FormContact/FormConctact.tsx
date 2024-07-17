'use client';

import { useParams, useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FormContactProps } from './FormContact.types';
import { z } from 'zod';

import {
  Button,
  Form,
  FormControl,
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
  toast,
  Toast,
} from '@/components/ui';
import { formSchema } from './FormContact.form';

export const FormConctact = (props: FormContactProps) => {
  const { setOpen } = props;

  const params = useParams<{ companyId: string }>();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      role: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      axios.post(`/api/company/${params.companyId}/contact`, values);
      toast({
        title: 'Contact Created!',
      });
      router.refresh();
      setOpen(false);
    } catch (error) {
      toast({
        title: 'There was an error',
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid md:grid-cols-2 gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Luis Almenarez" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="+57 300 258 1582" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select de role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Comercial">Comercial</SelectItem>
                  <SelectItem value="CEO">CEO</SelectItem>
                  <SelectItem value="Quality">Customer Service</SelectItem>
                  <SelectItem value="Analytics">Analytics</SelectItem>
                  <SelectItem value="Other">Oher...</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save Contact</Button>
      </form>
    </Form>
  );
};
